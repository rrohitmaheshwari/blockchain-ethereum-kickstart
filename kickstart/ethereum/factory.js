import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x23035B0b427335b6fA39d297a9f8f5079254A996'
);

//this address is the CampaignFactory deployed address ( generated after running node deploy.js)

export default instance;
