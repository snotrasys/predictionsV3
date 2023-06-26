import { parseEther } from "ethers/lib/utils";
//@ts-ignore
import { ethers, network, run } from "hardhat";

import config from "../config";
// import { ethers } from "ethers";

const main = async () => {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const signer = await ethers.getSigners();
  const lock = await ethers.getContractAt("PancakePredictionV3", "0x263c746E1e61f398a36E684C3aAF5405c1616F61");

  // await lock.connect(signer[1]).genesisStartRound()
  // await lock.connect(signer[1]).genesisLockRound()
  // await lock.connect(signer[0]).unpause()
  // await lock.connect(signer[0]).pause()
  await lock.connect(signer[0]).setBufferAndIntervalSeconds(
    59,
    60
  )
  


};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
