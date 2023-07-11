import { parseEther } from "ethers/lib/utils";
//@ts-ignore
import { ethers, network, run } from "hardhat";

import config from "../config";
// import { ethers } from "ethers";

const main = async () => {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const signer = await ethers.getSigners();
   

  const lock = await ethers.getContractAt("XimbiaPredictionV5", '0xbe2fa41f1556f3176d3B9d2DF10c04bE5c10F4fF');
  // 0x3bdeECae844b96A133F98e54e36eB85414ffe5c9
  // await lock.connect(signer[1]).genesisStartRound()
  // await lock.connect(signer[1]).genesisLockRound()
  // await lock.connect(signer[0]).unpause()
  const tx =  await lock.connect(signer[0]).pause()
  if(await tx.wait(1))
  await lock.connect(signer[0]).unpause()

  // await lock.connect(signer[0]).setBufferAndIntervalSeconds(
  //   59,
  //   60
  // )
  


};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
