import { parseEther } from "ethers/lib/utils";
import { ethers, network, run } from "hardhat";
import config from "../config";

const main = async () => {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const signer = await ethers.getSigners();
  const lock = await ethers.getContractAt("PancakePredictionV3", "0x263c746E1e61f398a36E684C3aAF5405c1616F61");

  // await lock.connect(signer[1]).genesisStartRound()
  await lock.connect(signer[1]).genesisLockRound()
  // await lock.connect(signer[1]).unpause()


};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
