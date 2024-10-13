
import { ChangeEvent, FormEvent, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

import CreateButton from "./CreateButton";
import ImageComp from "./ImageComp";
import ConnectButton from "../Navbar/ConnectButton";

import { cn } from "@/lib/utils";

export interface IFormData {
  title: string;
  description: string;
  date: any;
  time: string;
  imageURL?: string;
  location: string;
  numOfTickets: string;
}

const EventForm = () => {
  const { address } = useAccount();

  const [formData, setFormData] = useState<IFormData>({
    title: "",
    description: "",
    date: "",
    time: "",
    imageURL: "",
    location: "",
    numOfTickets: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const {
    date,
    description,
    location,
    numOfTickets,
    title,
  } = formData;

  return (
    <div className="py-10 md:py-14 lg:py-24 flex items-center justify-center relative font-poppins">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/create.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6 mx-auto w-[90%] md:w-[80%] max-w-2xl z-10 relative bg-[#0D0D0D] p-4 md:p-6 lg:p-8 rounded-2xl text-nftBlack"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4 font-semibold text-center text-nftWhite">
          Create Event
        </h2>
        {address ? (
          <>
            <Input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={handleChange}
            />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(day) =>
                    setFormData((prev) => ({
                      ...prev,
                      date: day,
                    }))
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <ImageComp setFormData={setFormData} />

            <Input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={handleChange}
            />

            <Input
              type="number"
              placeholder="Number of Tickets"
              name="numOfTickets"
              value={numOfTickets}
              onChange={handleChange}
            />

            <CreateButton values={formData} />
          </>
        ) : (
          <div className="my-8 flex flex-col gap-2 items-center justify-center text-center font-poppins">
            <h3 className="font-semibold text-lg md:text-2xl text-nftWhite">
              Connect Wallet
            </h3>
            <p className="text-[#B0B0B0] md:text-lg">
              To proceed with this action, kindly connect your wallet.
            </p>
            <div className="my-4">
              <ConnectButton />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EventForm;
