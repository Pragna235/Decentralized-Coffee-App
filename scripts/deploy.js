
const hre = require("hardhat");

async function main() {
  const Coffee = await hre.ethers.getContractFactory("coffee"); //fetching bytecode and ABI
  const coffee = await Coffee.deploy(); //creating an instance of our smart contract

  await coffee.waitForDeployment();//deploying your smart contract

  console.log("Deployed contract address:",`${coffee.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x5FbDB2315678afecb367f032d93F642f64180aa3
