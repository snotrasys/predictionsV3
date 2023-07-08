import { ethers, upgrades } from "hardhat";

async function main() {
    // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

    // const lockedAmount = ethers.utils.parseEther("1");

    const lock = await ethers.getContractAt("ContractHandler","0xF4678Ba3Bf26a9c3E443D5614b5734560D45bcE8");
    

    await lock.setMasterContract("0xE93C5A63D2b2538ad89123470ddAFC818f33971a");

    console.log("Lock with 1 ETH deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
