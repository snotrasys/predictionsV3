import { parseEther } from "ethers/lib/utils";
//@ts-ignore
import { ethers, network, run } from "hardhat";

import config from "../config";
// import { ethers } from "ethers";

const main = async () => {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const signer = await ethers.getSigners();
  const lock = await ethers.getContractAt("XimbiaPredictionV5", "0x5d5e336735870f6d4CFc1a6d091be06f3868D8e0");
  // 0x3bdeECae844b96A133F98e54e36eB85414ffe5c9
  // await lock.connect(signer[1]).genesisStartRound()
  // await lock.connect(signer[1]).genesisLockRound()
  // await lock.connect(signer[0]).unpause()
  // await lock.connect(signer[0]).pause()
  
  await lock.connect(signer[0]).recoverToken(
    "0x3bdeECae844b96A133F98e54e36eB85414ffe5c9",
    "1023774289968145534227"
  )

  // await lock.connect(signer[0]).takeTokens(    
  //   "1023774289968145534227"    
  // )
  


};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
