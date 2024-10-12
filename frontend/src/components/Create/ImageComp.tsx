"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { pinata } from "@/utils/config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IFormData } from "./EventForm";

export default function ImageComp({
  setFormData,
}: {
  setFormData: Dispatch<SetStateAction<IFormData>>;
}) {
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("No file selected");
      return;
    }

    try {
      setUploading(true);
      const upload = await pinata.upload.file(file);
      console.log(upload);

      const ipfsUrl = await pinata.gateways.convert(upload.IpfsHash);
      setFormData((prev) => ({
        ...prev,
        imageURL: ipfsUrl,
      }));
      setUploading(false);
      setUploaded(true);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target?.files?.[0]);
      setFileUrl(URL.createObjectURL(e.target.files?.[0]));
    }
  };

  return (
    <div className="flex flex-col w-full gap-3">
      <Label htmlFor="picture" className="text-nftWhite">
        Event Image
      </Label>
      {uploaded ? (
        <p className="text-nftWhite">Image Uploaded</p>
      ) : (
        <>
          <Input
            id="picture"
            type="file"
            onChange={handleChange}
            className="w-full"
          />
          {fileUrl ? (
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="text-sm text-nftWhite">You must upload image before you can create event</p>
              <img
                src={fileUrl}
                alt="Image"
                className="h-80 w-80 object-cover rounded-lg border-2 border-nftGreen overflow-hidden"
              />
              <Dialog>
                <DialogTrigger>
                  <Button variant={"connect"} className="font-semibold">
                    Upload
                  </Button>
                </DialogTrigger>
                <DialogContent className="text-nftBlack font-poppins flex flex-col items-center">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-center">
                      Are you sure?
                    </DialogTitle>
                    <DialogDescription>
                      The event image can not be changed after uploading
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="text-center">
                    <Button disabled={uploading} onClick={uploadFile}>
                      {uploading ? "Uploading..." : "Upload"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
