const fs = require("fs");

function saveWallet(wallet) {
  fs.writeFileSync("data/wallet.json", JSON.stringify(wallet, null, 2));
}

module.exports = {
  saveWallet
};
