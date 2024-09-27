const fs = require("fs");
module.exports.config = {
  name: "I het u",
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
  if (event.body.indexOf("het u bot")==0 || event.body.indexOf("Het u")==0 || event.body.indexOf("HET U")==0 || event.body.indexOf("I het you")==0) {
    var msg = {
        body: "🥀𝐃𝐈𝐋 𝐓𝐎𝐃 𝐃𝐈𝐘𝐀 𝐁𝐀𝐁𝐔 𝐔 𝐍𝐄💔",
        attachment: fs.createReadStream(__dirname + `/FAIZ/hetu.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }