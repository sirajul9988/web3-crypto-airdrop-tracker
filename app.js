const config = require("./config");
const wallet = require("./wallet");
const airdrop = require("./airdrop");
const logger = require("./logger");

async function startApp() {
  console.log("Web3 Crypto Airdrop Tracker Started");

  const address = config.walletAddress;
  const walletData = await wallet.getWalletInfo(address);

  const result = airdrop.checkAirdrop(walletData);

  logger.saveLog(result);

  console.log("Result:", result);
}

startApp();
