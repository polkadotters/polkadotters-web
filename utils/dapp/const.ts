export const GOVERNMENT_TRACKS = [
   {
      id: "0",
      name: "Root",
   },
   {
      id: "1",
      name: "Whitelisted Caller",
   },
   {
      id: "10",
      name: "Staking Admin",
   },
   {
      id: "11",
      name: "Treasurer",
   },
   {
      id: "12",
      name: "Lease Admin",
   },
   {
      id: "13",
      name: "Fellowship Admin",
   },
   {
      id: "14",
      name: "General Admin",
   },
   {
      id: "15",
      name: "Auction Admin",
   },
   {
      id: "20",
      name: "Referendum Canceller",
   },
   {
      id: "21",
      name: "Referendum Killer",
   },
   {
      id: "30",
      name: "Small Tipper",
   },
   {
      id: "31",
      name: "Big Tipper",
   },
   {
      id: "32",
      name: "Small Spender",
   },
   {
      id: "33",
      name: "Medium Spender",
   },
   {
      id: "34",
      name: "Big Spender",
   },
];

export const POLKADOTTERS_ADDRESS = "FVAFUJhJy9tj1X4PaEXX3tDzjaBEVsVunABAdsDMD4ZYmWA";

export const CONVICTION_OPTIONS = {
   None: "None",
   "Locked1x - 8 days": "Locked1x",
   "Locked2x - 16 days": "Locked2x",
   "Locked3x - 32 days": "Locked3x",
   "Locked4x - 64 days": "Locked4x",
   "Locked5x - 128 days": "Locked5x",
   "Locked6x - 256 days": "Locked6x",
} as const;

export type ConvictionOptions = typeof CONVICTION_OPTIONS[keyof typeof CONVICTION_OPTIONS];

export const BALANCE_DIVISOR = 1000000000000;
