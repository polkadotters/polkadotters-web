import { useEffect, useRef, useState } from "react";

const useOutsideClick = (callback) => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClick = (event) => {
         if (ref.current && !ref.current.contains(event.target)) {
            callback();
         }
      };

      document.addEventListener("click", handleClick);

      return () => {
         document.removeEventListener("click", handleClick);
      };
   }, []);

   return ref;
};

//select menu component styled with tailwind
export const SelectMenu = ({ options, selected, onSelect, label }) => {
   const [open, setOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(selected);
   const [hasDefault, setHasDefault] = useState(true);

   const handleSelect = (option) => {
      setSelectedOption(option);
      onSelect(option);
      setHasDefault(false);
      setOpen(false);
   };

   const ref = useOutsideClick(() => setOpen(false));

   return (
      <div ref={ref} className="relative">
         <div className="flex flex-col gap-2">
            <label className="text-md text-pink-400">{label}</label>
            <div
               className={`flex items-center justify-between px-4 
               py-2 border rounded-md cursor-pointer bg-white ${
                  hasDefault ? "text-slate-400 border-gray-300" : "text-black border-pink-400"
               }`}
               onClick={() => {
                  setOpen(!open);
               }}
            >
               <span className="text-lg truncate pr-5">{selectedOption}</span>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M19 9l-7 7-7-7"
                  />
               </svg>
            </div>
         </div>
         {open && (
            <div className="absolute top-20 left-0 w-full">
               <div className="bg-white shadow rounded-md">
                  {options.map((option) => (
                     <div
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 truncate"
                        onClick={() => handleSelect(option)}
                        key={option}
                     >
                        {option}
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};

//locked value component styled exactly like the select menu component
export const LockedValue = ({ label, value }) => {
   return (
      <div className="flex flex-col gap-2">
         <label className="text-md text-pink-400">{label}</label>
         <div className="text-slate-400 flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-not-allowed whitespace-pre-line">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 mr-2"
               fill="none"
               viewBox="0 0 48 58"
               width={24}
               height={24}
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"
               />
            </svg>
            <span className="text-lg truncate">{value}</span>
         </div>
      </div>
   );
};

export const AmountInput = ({
   label,
   value,
   onChange,
   requiredPattern,
}: {
   label: string;
   value: string | number;
   onChange: (value: string) => void;
   requiredPattern?: RegExp;
}) => {
   const [hasDefault, setHasDefault] = useState(true);
   return (
      <div className="flex flex-col gap-2">
         <label className="text-md text-pink-400">{label}</label>
         <input
            type="text"
            className={`w-full text-lg focus:outline-none focus:ring-0 bg-white border-b rounded-md ${
               hasDefault ? "text-slate-400 border-gray-300" : "text-black border-pink-400"
            }`}
            value={value}
            onChange={(e) => {
               if (requiredPattern) {
                  if (e.target.value.match(requiredPattern) || e.target.value === "") {
                     setHasDefault(e.target.value === "");
                     onChange(e.target.value);
                  }
               }
            }}
         />
      </div>
   );
};

export const SubmitButton = ({
   label,
   onClick,
   active,
}: {
   label: string;
   onClick: () => void;
   active: boolean;
}) => {
   return (
      <button
         className={`w-full border-2 py-2 rounded-md transition duration-200 ease-in-out ${
            active
               ? "bg-pink-400 text-white border-pink-400 hover:bg-pink-500 hover:text-white hover:border-pink-400"
               : "bg-white text-slate-400 border-slate-100 cursor-not-allowed"
         }`}
         onClick={active ? onClick : () => {}}
      >
         {label}
      </button>
   );
};
