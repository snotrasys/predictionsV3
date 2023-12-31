import { parseEther } from "ethers/lib/utils";
import { ethers, network, run } from "hardhat";
import config from "../config";

const main = async () => {
  // Get network data from Hardhat config (see hardhat.config.ts).
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
    const PancakePrediction = await ethers.getContractFactory("XimbiaPredictionV6");
    const contract = await PancakePrediction.deploy(
      config.Address.Token[networkName],
      config.Address.Oracle[networkName],
      signers[0].address,
      signers[1].address,
      signers[1].address,
      config.Block.Interval[networkName],
      config.Block.Buffer[networkName],
      parseEther(config.BetAmount[networkName].toString()).toString(),
      config.OracleUpdateAllowance[networkName],
      config.Treasury[networkName]
    );

    // Wait for the contract to be deployed before exiting the script.
    await contract.deployed();
    console.log(`Deployed to ${contract.address}`);
    // console.log( config.Address.Token[networkName],
    //   config.Address.Oracle[networkName],
    //   config.Address.Admin[networkName],
    //   config.Address.Operator[networkName],
    //   config.Block.Interval[networkName],
    //   config.Block.Buffer[networkName],
    //   parseEther(config.BetAmount[networkName].toString()).toString(),
    //   config.OracleUpdateAllowance[networkName],
    //   config.Treasury[networkName]);
    
  } else {
    console.log(`Deploying to ${networkName} network is not supported...`);
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
