# Decentralized-Coffee-App (A Blockchain Implementation)

## Technologies Used
* Solidity - Backend
* Ether.js - ( Communication between Frontend and Backend)
* React.js - Frontend
* Hardhat

## Algorithm

User visits the dAPP, pays for his/her coffee in ethers and writes a review in order to get the order served.

## Playbook

-------------------------------------------------------------Backend----------------------------------------------------------------------------------
- Draft your Solidity Smart Contract and run and test it in the `Remix IDE`
- Open your project folder in `VSCode` and open the ternimal and run the following commands
-     npm install hardhat
-     npx hardhat
- Add your `coffee.sol` smart contract in the `contracts` folder of your hardhat project (rename `Lock.sol` and edit)
- Make changes in the `deploy.js` file under the `scripts` folder
- Delete the `test` folder

- Deploy the hardhat contract using the following commands
- `npx hardhat compile`
- This will generate the `artifacts` folder which contain the `abi` and `bytecode` in the `coffee.json` file of the compiled contract
- ### Tip :
  - Use `waitForDeployment()` instead of `deployed()` function
  - Use `coffee.target` instead of `coffee.address` while obtaining the smart contract address after deploying
- (If any more errors occur, check the dependencies of the `package.json` file)

-------------------------------------------------------------Frontend----------------------------------------------------------------------------------
-     npm create vite@latest
- Framework : React
- Variant : JavaScript
- Rename your react project folder to say `client`
-     cd client
-     npm install
-     npm run dev
- Follow the link
- Make changes and write code in the `App.js` file in the react project folder

---------------------------------------------------------Deployment of Smart Contract on Sepolia Testnet-----------------------------------------------
- Go to `Alchemy` dashboard
- Create a new app on `Ethereum` Blockchain and `Sepolia` testnet
- Note your `HTTPS url`. (SEPOLIA_URL)
- Get the `private key` of an account on your metamask extension
-     npm install dotenv
- Add another file in the project named `.env`
- Edit the `hardhat.config.js`  and `.env` files
- Navigate to the Project Folder `cd ..`
-     npx hardhat run --network sepolia scripts/deploy.js
- Make sure, the account you're using has minimum ethers
- Note the `Deployed Contract Address`
- Search this `Deployed Contract Address` in the search bar of `sepolia testnet explorer` to view the just happened transaction details

- Paste the copied `Contract Address` in the `App.jsx` file
- Create a nwe folder under `src` say `contractJson`
- Copy the `coffee.json` file from artifacts to this new folder
- Make necessary changes in the `App.jsx` file

- In Progress........



  
