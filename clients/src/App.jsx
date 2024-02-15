import { useState,useEffect } from 'react'
import abi from "./contractJson/coffee.json"
import {ethers} from "ethers"
import Memos from "./Components/Memos"
import Buy from "./Components/Buy"
import coffee from "./coffee.png";
import './App.css'

function App() {
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })
  
  const[account,setAccount] = useState("Not connected");

  useEffect(()=>{
    const template =async()=>{
      const contractAddress="0x54ffb19ee252b3826c32b8785620033f24a8346f";
      const contractABI = abi.abi;
      //Metamask part
      //1. In order to do transactions on sepolia testnet
      //2. Metamask consists of infura api which actually helps in connecting to the blockchain

      try{
        const {ethereum} = window;
        //console.log(ethereum);
        const account = await ethereum.request({
        method:"eth_requestAccounts"
      })

      window.ethereum.on("accountsChanged",()=>{
        window.location.reload()
      })
      setAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum); //read the blockchain
      const signer = provider.getSigner(); //write the blockchain

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract)
      setState({provider,signer,contract});
      }catch(error){
        console.log(error);
      }

    }
    

    template();
  },[])

  return (
    <div style={{backgroundColor:"#EFEFEF",height:"100%"}}>
      <img src={coffee} className="img-fluid" alt=".." width={"100%"} />
      <p
      className="text-muted lead"
      style={{marginTop: "10px", marginLeft: "400px"}}
      >
        <small>Connected Account - {account} </small>
      </p>
      <div className="container">
        <Buy state={state}/>
        <Memos state={state}/>
      </div>

    </div>
      
  )
}
//creating a template for the dApp

export default App;