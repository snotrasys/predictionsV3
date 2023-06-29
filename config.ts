export default {
  Address: {
    Token: {
      mainnet: "0x19B4C6961211c54875501caAB3b38E220740f0B8",
      // testnet: "0x2864f1d6e60198b67fbe8072c3a5586be0f44b72",
      testnet: "0x091e0958AEc7524fF4B74EdF71D705BA50bA414f"
    },
    Oracle: {
      mainnet: "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf",//BTC/USDT
      testnet: "0x81faeDDfeBc2F8Ac524327d70Cf913001732224C",
    },
    Admin: {
      mainnet: "0xB1C7c8D1b474FC090F47C45C5897C316f0E204cE",
      // testnet: "0x1a5238878B2c138B9DCCe2ea6BE9CF7e9F12Cf6a",
      testnet: "0x0Be7299aaE66c38E08d2de57491d8219b2788846"
    },
    Operator: {
      mainnet: "0xF27AE76aCfa5555Cd773062c3d6e63A8BeE267Fc",
      // testnet: "0x41519446C09D5DB80025B2ABbcbB3CF2Cf0022D0",
      testnet:"0x96569436E60BcB1Fdd64E7751265137DF2012b73"
    },
  },
  Block: {
    Interval: {
      mainnet: 120,
      testnet: 300,
    },
    Buffer: {
      mainnet: 120,
      testnet: 15,
    },
  },
  Treasury: {
    mainnet: 300, // 3%
    testnet: 1000, // 10%
  },
  BetAmount: {
    mainnet: 0.001,
    testnet: 0.0001,
  },
  OracleUpdateAllowance: {
    mainnet: 300,
    testnet: 300,
  },
};
