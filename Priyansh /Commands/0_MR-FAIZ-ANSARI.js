module.exports.config = {
  name: "Faizu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  commandCategory: "PREM BABU IMAGE",
  usages: "PREM-BABU",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/f0NpePe.jpeg",
"https://i.imgur.com/OLbbpyz.jpeg",
"https://i.imgur.com/ehUSGQp.jpeg",
"https://i.imgur.com/5HROPJS.jpeg",
"https://i.imgur.com/7ZmMnVR.jpeg",
"https://i.imgur.com/VSNvvDZ.jpeg"
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     फैज-अंसारी                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\nदेख लो मेरे फैज अंसारी बाबू को सबसे अलग मासूम चेहरा भोली सी सूरत आखों में प्यार दिल में खुमार ♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
