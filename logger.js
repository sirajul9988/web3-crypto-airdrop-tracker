const fs = require("fs");

function saveLog(data) {
  const logText = JSON.stringify(data, null, 2);
  fs.writeFileSync("logs/result.json", logText);
}

module.exports = {
  saveLog
};
