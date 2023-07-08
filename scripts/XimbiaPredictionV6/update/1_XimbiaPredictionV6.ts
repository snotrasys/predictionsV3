import { ethers, upgrades } from "hardhat";

async function main() {
  const proxy="0xF4678Ba3Bf26a9c3E443D5614b5734560D45bcE8"
  

  const Box = await ethers.getContractFactory("XimbiaPredictionV6");
  const instance = await upgrades.upgradeProxy(proxy,Box,{kind: 'uups'});
  
  
  console.log("ContractHandler deployed to:", instance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
