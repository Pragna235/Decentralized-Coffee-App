require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const { SEPOLIA_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  //defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    }
  },
};

//0x7819c76e7dfFfe8fe623C17700e0348f98438714

//0x54ffb19eE252B3826C32B8785620033f24a8346f