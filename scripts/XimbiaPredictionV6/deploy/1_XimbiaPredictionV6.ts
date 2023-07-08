import { ethers, upgrades,run } from "hardhat";
import config from "../../../config";
import { parseEther } from "ethers/lib/utils";
async function main() {
  const miner ="0xfdf5F5674445A53827F591a420a9D6202a5eCA4b"
  const token = "0x83d3C2D1A55687498Df6800c5F173EC6a7556089"
  const lib ="0xCF2AB8F637B1B3c7aEacEA650A944EFB71343217"
  const networkName = "mainnet";

  // Check if the network is supported.
  //@ts-ignore
  if (networkName === "testnet" || networkName === "mainnet") {
    console.log(`Deploying to ${networkName} network...`);

    // Check if the addresses in the config are set.
    if (
      config.Address.Token[networkName] === ethers.constants.AddressZero ||
      config.Address.Oracle[networkName] === ethers.constants.AddressZero ||
      config.Address.Admin[networkName] === ethers.constants.AddressZero ||
      config.Address.Operator[networkName] === ethers.constants.AddressZero
    ) {
      throw new Error("Missing addresses (Chainlink Oracle and/or Admin/Operator)");
    }

    // Compile contracts.
    await run("compile");
    console.log("Compiled contracts...");
    const signers = await ethers.getSigners();
    // Deploy contracts.
  const Box = await ethers.getContractFactory("XimbiaPredictionV6");
  const instance = await upgrades.deployProxy(Box,[config.Address.Token[networkName],
    config.Address.Oracle[networkName],
    signers[0].address,
    signers[1].address,
    signers[1].address,
    config.Block.Interval[networkName],
    config.Block.Buffer[networkName],
    parseEther(config.BetAmount[networkName].toString()).toString(),
    config.OracleUpdateAllowance[networkName],
    config.Treasury[networkName]],{kind: 'uups'}
  );
  await instance.deployed();
  
  console.log("ContractHandler deployed to:", instance.address);
} else {
  console.log(`Deploying to ${networkName} network is not supported...`);
}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
