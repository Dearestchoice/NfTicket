import { useEffect, useRef } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */

export const useOutsideClickAlerter = ({
  ref,
  handleOnClickOutside,
}: {
  ref: any;
  handleOnClickOutside: any;
}) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOnClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleOnClickOutside]);
};

export const OutsideClickAlerter = ({
  handleOnClickOutside,
  children,
  ...props
}: {
  [x: string]: any;
  handleOnClickOutside: any;
  children: any;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClickAlerter({ ref, handleOnClickOutside });
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
};
