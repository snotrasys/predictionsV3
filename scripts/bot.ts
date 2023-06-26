import { constants, Contract, utils, providers, Wallet, } from "ethers";
import dotenv from "dotenv";

dotenv.config();
const abi = [
    `function genesisLockRound() external`,
    `function genesisStartRound() external `,
    `function pause() external`,
    `function unpause() external`,
    `function paused() view external returns(bool)`,
    `function executeRound() external`,
];
const address = "0x263c746E1e61f398a36E684C3aAF5405c1616F61";
const provider = new providers.JsonRpcProvider(
    "https://bsc-testnet.publicnode.com"
);
const wallet = (i: number) =>
    Wallet.fromMnemonic(
        // @ts-ignore
        process.env.MNEMONIC,
        `m/44'/60'/0'/0/${i}`
    ).connect(provider);


    

const signer = wallet(0);

interface IPancakePredictionV3 extends Contract {
    genesisLockRound(): Promise<void>;
    genesisStartRound(): Promise<void>;
    executeRound(): Promise<void>;
    pause(): Promise<void>;
    unpause(): Promise<void>;
    paused(): Promise<boolean>;
}
//@ts-ignore
const contract_: IPancakePredictionV3 = new Contract(address, abi, signer);
const genesisStartRound = async () => {
    console.log("genesisStartRound");    
    let tx: any = await contract_.connect(wallet(1)).genesisStartRound();
    return tx;
};
const genesisLockRound = async () => {
    console.log("genesisLockRound");
    let tx: any = await contract_.connect(wallet(1)).genesisLockRound(
        // {
        //     gasLimit:utils.parseEther("0.000001")
        // }
    );
    return tx;
};
const executeRound = async () => {
    console.log("executeRound");
    let tx: any = await contract_.connect(wallet(1)).executeRound(
        
    );
    return tx;
};

const time = 60
async function main2() {    
    const tx: any = await genesisStartRound();
    console.log(tx.hash,"genesisStartRound");
    
    if (await tx.wait(1))
        setTimeout(async () => {
            const tx2: any = await genesisLockRound();
            console.log(tx2.hash,"genesisLockRound");
            if (await tx2.wait(1))
                setInterval(async () => {
                    
                    const tx3:any = await executeRound();
                    console.log(tx3.hash,"executeRound");
                }, 1000 * time +5);
        }, 1000 * time +5);
}
async function main() {
    const isPaused = await contract_.paused();

    // if (!isPaused) {
        console.log("isPaused", isPaused);
        // const tx: any = await contract_.unpause();
        // if (await tx.wait(1)) await main2();
        await main2();
        // await genesisStartRound();
    // } else {
    //     console.log("isPaused", isPaused);
    //     const tx: any = await contract_.pause();
    //     if (await tx.wait(1)) await main2();
    // }
}
main();

// genesisLockOnce
// bool public genesisStartOnce = false;
