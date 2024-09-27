const fs = require("fs");
module.exports.config = {
  name: "satak",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "satak",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("nikal")==0 || event.body.indexOf("Nikal")==0 || event.body.indexOf("Nikal ja")==0 || event.body.indexOf("NIKAL")==0) {
    var msg = {
        body: "😕𝐀𝐓𝐀 𝐌𝐀𝐓𝐈 𝐒𝐀𝐓𝐀𝐊 𝐋𝐈😕",
        attachment: fs.createReadStream(__dirname + `/FAIZ/nikal.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }