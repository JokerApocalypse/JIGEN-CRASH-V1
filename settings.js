/*

credits © Jigen Developer
𝗗𝗲𝘃 𝗦𝗰 : 𝗝𝗶𝗴𝗲𝗻 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿
ᴅɪʟᴀʀᴀɴɢ ʀɪɴᴇᴍ
ᴅɪʟᴀʀᴀɴɢ ᴅɪ sᴇʙᴀʀ/ғʀᴇᴇ
ʟᴀɴɢɢᴀʀ? ɢᴡ ғɪx ʙɪᴀʀ ɢᴀʙɪsᴀ ᴅɪᴘᴀᴋᴇ ʟᴀɢɪ

*/


const fs = require('fs')

global.botname = "𝗝𝗶𝗴𝗲𝗻 𝗖𝗿𝗮𝘀𝗵"
global.version = "1.0"
global.owner = "242061217918"
global.numberbot = "242061217918"
global.footer = "JIGEN ALWAYS SOLO"
global.title = "© 𝙹𝙸𝙶𝙴𝙽 𝙳𝙴𝚅"
global.website = "https://whatsapp.com/channel/0029VbApnB31CYoVbQCRYo0A"
global.idch = "120363374006048687@newsletter"
global.chjid = "https://whatsapp.com/channel/0029VbApnB31CYoVbQCRYo0A"
global.wm = "𝙹𝙸𝙶𝙴𝙽 𝙳𝙴𝚅"

//===================================//
global.session = "session"


//=========== [ IMG-URL ] ===========//
global.thumb = "https://i.ibb.co/d0ChjHZK/5926.jpg"
global.image = {
Reply: "https://i.ibb.co/Kp9hYtVJ/7821.jpg"
}
//==================================//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
