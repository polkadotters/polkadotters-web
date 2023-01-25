import { CircularProgress } from "@mui/material";
import { Check } from "@material-ui/icons";
import { Close } from "@material-ui/icons";
import { Error } from "@material-ui/icons";
import { Info } from "@material-ui/icons";

export const Popup = ({
   flavor,
   message,
   onClose,
}: {
   flavor: "success" | "error" | "loading" | "info";
   message: string;
   onClose?: () => void;
}) => {
   //should be in bottom right corner, should fade in and out, should have a close button
   //should have a loading spinner, should have a success icon, should have an error icon
   //should have a message, should have a close button

   return (
      <div className="fixed bottom-0 right-0 m-4">
         <div className="flex flex-col gap-2 m-auto bg-white w-64 h-14 border border-gray-300 rounded-md">
            <div className="flex flex-row gap-2 items-center m-auto">
               <div className="flex flex-row gap-2 items-center">
                  {flavor === "loading" ? <CircularProgress size={16} /> : null}
                  {flavor === "success" ? <Check style={{ color: "green" }} /> : null}
                  {flavor === "error" ? <Error style={{ color: "red" }} /> : null}
                  {flavor === "info" ? <Info style={{ color: "blue" }} /> : null}
                  <div className="text-sm">{message}</div>
               </div>
               {onClose && (
                  <div className="flex flex-row gap-2 items-center">
                     <Close onClick={onClose} />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
