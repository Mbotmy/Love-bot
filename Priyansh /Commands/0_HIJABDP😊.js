module.exports.config = {
  name: "hijabdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ ANSARI",
  description: "Random hijab girls photos",
  commandCategory: "Random-IMG",
  usages: "Zues Collection",
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
"https://i.postimg.cc/9FSStJ53/HD-wallpaper-islamic-hijab-girl-anime-girl-hijab-girl-islamic.jpg",
"https://i.postimg.cc/25NQCBvL/images-13.jpg",
"https://i.postimg.cc/76FDRDj4/images-14.jpg",
"https://i.postimg.cc/Px82Skm1/images-15.jpg",
"https://i.postimg.cc/x81Vk8r9/images-16.jpg",
"https://i.postimg.cc/nzLQLVPJ/images-17.jpg",
"https://i.postimg.cc/dtCwGPMc/muslim-girl-in-beautiful-hijab-photo-dp-images-photodoozy.jpg",
"https://i.postimg.cc/MHxbtJs3/images-18.jpg",
"https://i.postimg.cc/3NPf3c9g/images-19.jpg",
"https://i.postimg.cc/C5Ndg3w2/images-20.jpg",
"https://i.postimg.cc/3NwnjHfj/images-21.jpg",
"https://i.postimg.cc/Gmv9QTyK/images-22.jpg",
"https://i.postimg.cc/wvvP6J5Q/images-23.jpg",
"https://i.postimg.cc/bwVk7tJh/images-24.jpg",
"https://i.postimg.cc/hPJCZcMh/images-25.jpg",
"https://i.postimg.cc/c4HqsphN/images-26.jpg",
"https://i.postimg.cc/c4Xsh79d/images-28.jpg",
"https://i.postimg.cc/k49FndxN/images-29.jpg",
"https://i.postimg.cc/MTCwcdpY/images-30.jpg",
"https://i.postimg.cc/kMTD4dQJ/images-31.jpg",
"https://i.postimg.cc/PxzpKpvY/images-32.jpg",
"https://i.postimg.cc/1XrGg7Kx/images-33.jpg",
"https://i.postimg.cc/Wpkfp2Lr/images-34.jpg",
"https://i.postimg.cc/vBSXYNX0/images-35.jpg",
"https://i.postimg.cc/RZrsJ2m8/71c1e2164d8b0255f859ea1b24780068.jpg",
"https://i.postimg.cc/Wz8Nq0FY/26af507c-359b-4941-bf0b-da1c76dc1eee.jpg",
"https://i.postimg.cc/7LRTfr8J/6af44346-b486-4650-a34c-812162d95f76.jpg",
"https://i.postimg.cc/nrvmy9DH/Hijab-girls.jpg",
"https://i.postimg.cc/Vk9sQBvr/276869fb-3d15-4f82-ba62-da0fe61c6a34.jpg",
"https://i.postimg.cc/VvsLDSmr/3b95397a-49ef-4482-bb68-6b6ed7333840.jpg",
"https://i.postimg.cc/VvsLDSmr/3b95397a-49ef-4482-bb68-6b6ed7333840.jpg",
"https://i.postimg.cc/RZkyvj3X/Hijab-girl-DP.jpg",
"https://i.postimg.cc/DwrmgKKX/943c88d5-2397-46fe-ba64-b0e8449917eb.jpg",
"https://i.postimg.cc/yYJVfC0N/59af1c14-4868-4b37-86f4-5ff5a265f83f.jpg",
"https://i.postimg.cc/VNWZ956b/946bddf8-fcab-4f53-b62e-cff208899028.jpg",
"https://i.postimg.cc/c1mDVq1Q/image.jpg",
"https://i.postimg.cc/T1qcxbXd/1beb30cd-0f43-43cb-ac42-2ddf8dc31f01.jpg",
"https://i.postimg.cc/9X1gw37L/032145ba-7654-4aeb-ad81-c47bb5030825.jpg",
"https://i.postimg.cc/tTYV4xQd/a421b45e-e0a6-42df-a7c7-99bd3cf05f85.jpg",
"https://i.postimg.cc/05zNMv6f/assalamulaikum-my-new-edit-follow-my-id.jpg",
"https://i.postimg.cc/GhS9gpZ6/assalamulaikum-my-new-edit-follow-my-id.jpg",
"https://i.postimg.cc/3R3qv3Jx/assalamulaikum-my-new-edit-follow-my-id-1.jpg",
"https://i.postimg.cc/Rhz2ZMrd/59ceae94-4c8d-4783-86d5-b8f9d5d5ee3f.jpg",
"https://i.postimg.cc/2SHLDypQ/assalamulaikum-my-new-edit-follow-my-id-1.jpg",
"https://i.postimg.cc/DyJzR6vc/my-edit.jpg",
"https://i.postimg.cc/W1d4Lnsn/ee3500d9-d83a-480d-a4a8-c4cb1594d5bd.jpg",
"https://i.postimg.cc/y8cD5j1Z/38cee828-97b4-4c6b-903f-347896a5be59.jpg"
     ];
     var callback = () => api.sendMessage({body:`💞➢𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑𝐙𝐔𝐄𝐒 𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍 𝐎𝐅 𝐇𝐈𝐉𝐀𝐁 𝐏𝐈𝐂𝐓𝐔𝐑𝐄𝐒⚡︎`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };