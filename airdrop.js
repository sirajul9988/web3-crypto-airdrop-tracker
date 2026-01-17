function checkAirdrop(walletData) {
  let eligible = false;

  if (walletData.transactions > 5) {
    eligible = true;
  }

  return {
    wallet: walletData.address,
    eligible: eligible,
    checkedAt: new Date().toISOString()
  };
}

module.exports = {
  checkAirdrop
};
