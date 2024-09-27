const fs = require("fs");
module.exports.config = {
  name: "daksh",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "daksh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Daksh Rajpoot")==0 || event.body.indexOf("Daksh")==0 || event.body.indexOf("daksh")==0 || event.body.indexOf("DAKSH")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐃𝐀𝐊𝐒𝐇 𝐉𝐈 𝐀 𝐆𝐘𝐄",
        attachment: fs.createReadStream(__dirname + `/FAIZ/daksh.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }