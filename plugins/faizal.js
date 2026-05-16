const { cmd } = require("../command");
const os = require("os");

cmd({
    pattern: "MEHDI",
    alias: ["MEHDI"],
    desc: "MEHDI full introduction",
    category: "info",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {

        const uptime = process.uptime();
        const h = Math.floor(uptime / 3600);
        const min = Math.floor((uptime % 3600) / 60);
        const sec = Math.floor(uptime % 60);

        const text = `
╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❀ 👤 *Name:* MEHDI🪽
│❀ 🧑‍💼 *Nick:* devil zada🪽
│❀ 🎂 *Age:* 20+🪽
│❀ 🧬 *Caste:* saraiki🪽
│❀ 🌍 *Country:* 𝙿𝚊𝚔𝚒𝚜𝚝𝚊𝚗🪽
│❀ 🏙️ *City:* (Multan🪽)
│
│❀ 🤖 *Bot Name:* 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃🎀
│❀ 👑 *Owner:* 𝐌𝐄𝐇𝐃𝐈 𝐊𝐈𝐍𝐆🫀
│❀ 📞 *Owner No:* 923345254458🫰
│❀ 🔣 *Prefix:* .
│❀ ⚙️ *Mode:* 𝙿𝚞𝚋𝚕𝚒𝚌🪄
│❀ 🔌 *Baileys:* 𝙼𝚞𝚕𝚝𝚒 𝙳𝚎𝚟𝚒𝚌𝚎🌙
│
│❀ ⏳ *Uptime:* ${h}h ${min}m ${sec}s
│❀ 💻 *Platform:* ${os.platform()}
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝐌𝐄𝐇𝐃𝐈-𝐌𝐃🤍*
`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [m.sender]
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
    }
});
