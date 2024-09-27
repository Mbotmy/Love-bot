module.exports.config = {
  name: "kutte",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("kutte")>=0 || event.body.indexOf("Kutte")>=0 || event.body.indexOf("Kutta")>=0 || event.body.indexOf("Kutta hai")>=0 || event.body.indexOf("KUTTA")>=0 || event.body.indexOf("KUTTA HAI")>=0 || event.body.indexOf("BOT KUTTA")>=0 || event.body.indexOf("kuta")>=0 || event.body.indexOf("kUta")>=0 || event.body.indexOf("KUTE")>=0 ) { 
    var msg = {
        body: ` ${name} यार आप को तमीज नही है क्या किस से कैसे बात करते है।🥺🥺👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }