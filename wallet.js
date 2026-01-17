const api = require("./api");

async function getWalletInfo(address) {
  const data = await api.fetchWalletData(address);
  return {
    address: address,
    transactions: data.transactions || 0,
    balance: data.balance || 0
  };
}

module.exports = {
  getWalletInfo
};
