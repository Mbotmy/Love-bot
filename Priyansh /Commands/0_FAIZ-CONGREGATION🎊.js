const fs = require("fs");
module.exports.config = {
  name: "congratulations",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "congratulations",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("congratulations")==0 || event.body.indexOf("CONGREGATION")==0 || event.body.indexOf("Congratulations")==0 || event.body.indexOf("Mubarak ho")==0) {
    var msg = {
        body: "🎊𝐂𝐎𝐍𝐆𝐑𝐀𝐓𝐔𝐋𝐀𝐓𝐈𝐎𝐍𝐄🎊",
        attachment: fs.createReadStream(__dirname + `/FAIZ/congratulations .gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎊", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }