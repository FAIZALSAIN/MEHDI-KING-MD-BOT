const { cmd } = require('../command');
const axios = require('axios');

const API = "https://www.tikwm.com/api/";

cmd({
    pattern: "tiktok",
    alias: ["tt"],
    desc: "Ultra Fast TikTok Downloader",
    react: "⚡",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {

    try {

        if (!args[0] || !/tiktok\.com/.test(args[0])) {
            return reply("❌ Please provide a valid TikTok URL");
        }

        const url = args[0];

        // ⚡ Instant wait message
        const processingMsg = await conn.sendMessage(from, {
            text: "⚡ Please wait..."
        }, { quoted: mek });

        // 🚀 Ultra fast API call (no delay)
        const { data } = await axios.get(API, {
            params: { url },
            timeout: 20000
        });

        if (!data || data.code !== 0 || !data.data.play) {
            throw new Error("API failed");
        }

        const result = data.data;

        // ✏ Edit message to Processing
        await conn.sendMessage(from, {
            text: "⚡ Video Processing...",
            edit: processingMsg.key
        });

        // 🎬 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 Style Caption
        const caption =
`ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❀ 🎬 𝐓𝐢𝐭𝐥𝐞:* ${result.title || "TikTok Video"}
*│❀ 🎞 𝐐𝐮𝐚𝐥𝐢𝐭𝐲:* Auto
*│❀ ⚙️ 𝐒𝐭𝐚𝐭𝐮𝐬:* Ready
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐅𝐊𝐱𝐆𝐇𝐎𝐒𝐓-𝐌𝐃 🤍`;

        // 🎥 Send Video Direct
        await conn.sendMessage(from, {
            video: { url: result.play },
            mimetype: "video/mp4",
            caption: caption
        }, { quoted: mek });

        // ❌ Delete processing message (optional clean UI)
        await conn.sendMessage(from, {
            delete: processingMsg.key
        });

    } catch (err) {

        const errorCaption =
`ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❀ ❌ 𝐄𝐫𝐫𝐨𝐫:* Download Failed
*│❀ ⚙️ 𝐒𝐭𝐚𝐭𝐮𝐬:* Try Again
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 🤍`;

        reply(errorCaption);
    }
});
