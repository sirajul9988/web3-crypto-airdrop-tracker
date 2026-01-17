async function fetchWalletData(address) {
  return {
    transactions: Math.floor(Math.random() * 10),
    balance: Math.random() * 1
  };
}

module.exports = {
  fetchWalletData
};
