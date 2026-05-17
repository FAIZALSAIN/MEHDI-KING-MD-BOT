const fs = require('fs');
const path = require('path');
const { cmd } = require('../command');

// Safe fetch for all Node versions
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about bot GitHub repository",
    react: "🩷",
    category: "info",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {

    const githubRepoURL = 'https://github.com/mehdihacmer11.git';

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("❌ Invalid GitHub repository URL");

        const username = match[1];
        const repoName = match[2];

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const repoData = await response.json();

        const caption = `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❀ 🤖 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:* ${repoData.name}
*│❀ 👑 𝐎𝐰𝐧𝐞𝐫:* ${repoData.owner.login}
*│❀ ⭐ 𝐒𝐭𝐚𝐫𝐬:* ${repoData.stargazers_count}
*│❀ 🍴 𝐅𝐨𝐫𝐤𝐬:* ${repoData.forks_count}
*│❀ 📝 𝐃𝐞𝐬𝐜:* ${repoData.description || "No description"}
*│❀ 🔗 𝐆𝐢𝐭𝐇𝐮𝐛:*
*│   ${repoData.html_url}*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

⭐ *Star & Fork zaroor karein*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃
`;

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/nzf44i.jpg' },
            caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363422320301173@newsletter',
                    newsletterName: '𝐌𝐄𝐇𝐃𝐈-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Optional voice
        const audioPath = path.join(__dirname, '../assets/menu.m4a');
        if (fs.existsSync(audioPath)) {
            await conn.sendMessage(from, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mp4',
                ptt: false
            }, { quoted: mek });
        }

    } catch (err) {
        console.error("REPO ERROR:", err);
        reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❌ 𝐑𝐞𝐩𝐨 𝐅𝐞𝐭𝐜𝐡 𝐅𝐚𝐢𝐥𝐞𝐝*
*│⏳ Try again later*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
`);
    }
});
