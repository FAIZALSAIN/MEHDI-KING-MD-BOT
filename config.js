const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FK-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VkNUUzZGR3U1dWR05VTCtXai80emFmUHBrbTVic3J2SkxHaDNYRGUzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXk2cmY1clFhdHNpUGg4bFpoSnhYaFJnWXRzVURhUk1jT0oyZm1wK2ZXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRHJVQy9HTFVlS0V1Uy8yQXFPWDVWR05vNk42S21qb0NYM0dwcTdpakVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCcDZtR3N2cXd4K092SE55bjM1cTdpMDNQZU5VYVcyYmFwSTFGN0dVNkdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FODBLbXVSc2VQNjFMUkc1RmN0NHNXVzU3VWVHeWNHQXV5TitqZSt6bTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxiRVFBeEdETmZUT0k5SzIwbFlVYzkzSVpLcFpFMXFEL2dYQ0JRcVp2VXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZlaEE1TURxa2hXU2s4eHlFeWRaREY4WlFVbVhWbXdXNWZLZU1zMGFFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzAyUm11RzRzV2tRSUJJaytrUkFXMFdiNVkwS25qY1k4QTZRTFNUY3FpRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJZVlAwdzIxb2E0VFIzNitwZFpWY3JHRUdmMUZONHN2YlRiWHYyMnArSWtwMGlBTWtwRUlNUlFjVnZpZ204UmxFTzc1ZW1JQWN0bG9pRWJWOWl6MWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJlZmpVenhXVVVYZWF5Z1pwQ3VMSkh2eS9iZ01XS1pkZ2wyektCWGp1dGFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ0MzY3OTM0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUyMjMyMjhFNUUyQ0Q5RkNBQ0FDQThDMTlCNUIyNDkiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3OTAwNDQwM31dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIzM0wyRktUTCIsIm1lIjp7ImlkIjoiOTIzNDQzNjc5MzQ2OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqfCdmYHwnZmG4oCi8J2ZjvCdmLzwnZmE8J2ZieKGoOKkuPCThqrqqr5cbuKKuVxu4oq5XG7iirlcbuKKuVxu4oq5XG7iirlcbuK4lOK4lVxu4oq5XG7iirlcbuKKuVxu4oq5IFxu4oq5XG7iirlcbvCThqnNm/CdmJnwnZiM8J2Ym/CdmJDwnZiZ8J2YjPCdmIvipLjwk4aq6qq+IiwibGlkIjoiMjcwNjQ3OTUxMzYwMTI2OjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV1h1OGNFRU9ibnBkQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMRHltWkQrY0FyZklIY0MwUTZWVUs5clJFSTFxU1B5TzlBclZOdmRZSUc0PSIsImFjY291bnRTaWduYXR1cmUiOiJKbkJ0MndxeWFwV1hCM1ZTUXA5K0k4WmZvK2FaUXFMcEtEdWVyeU5zYjB4UlRtSXNxM3lWYkx3TDlrcWRpa1RjemlSTHhuVGg3T3RudFF5L1NaOGVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN0NlYnhzRDdmc251UXVGZGhCRTZ3TlV3UzFGQ20wTkxOdlVwYmZDQjlVN2tJSUcrRzZDY2pQRklPTElWWWRlUlU0WVJBSHlLemFOVFhNYm50RkluaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzA2NDc5NTEzNjAxMjY6OUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3c4cG1RL25BSzN5QjNBdEVPbFZDdmEwUkNOYWtqOGp2UUsxVGIzV0NCdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc5MDA0Mzk4LCJsYXN0UHJvcEhhc2giOiI0NTI2SngiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpiNCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MEHDI-MD⎯꯭̽ 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/du6w3u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "*MEHDI-MD⎯꯭̽*",
// add bot name here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "> *𝐏σωєяє∂ 𝐁у MEHDI-MD⎯꯭̽*",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🪄,💖,💗,❤️‍🩹,🫀,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923252677891",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*MEHDI-MD⎯꯭̽*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "> *𝐏σωєяє∂ 𝐁у MEHDI-MD⎯꯭̽🩷*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/du6w3u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*MEHDI-MD⎯꯭̽*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923266105873",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
