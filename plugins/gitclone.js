const { cmd } = require("../command");
const fetch = require("node-fetch");

cmd({
  pattern: "gitclone",
  alias: ["git"],
  desc: "Download GitHub repository as zip",
  react: "📦",
  category: "downloader",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    if (!args[0]) {
      return reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❌ GitHub link missing*
*│ Example:*
*│ .gitclone https://github.com/user/repo*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
`);
    }

    if (!/github\.com\/.+\/.+/.test(args[0])) {
      return reply("❌ Invalid GitHub repository link");
    }

    const match = args[0].match(/github\.com\/([^\/]+)\/([^\/]+)/i);
    if (!match) return reply("❌ Unable to parse repository link");

    const username = match[1];
    const repo = match[2].replace(".git", "");
    const zipUrl = `https://api.github.com/repos/${username}/${repo}/zipball`;

    // Check repo exists
    const head = await fetch(zipUrl, { method: "HEAD" });
    if (!head.ok) return reply("❌ Repository not found");

    const fileName = `${repo}.zip`;

    await reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│📦 Repository:* ${username}/${repo}
*│⬇️ Downloading ZIP...*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐌𝐄𝐇𝐃𝐈 𝐊𝐈𝐍𝐆
`);

    await conn.sendMessage(from, {
      document: { url: zipUrl },
      fileName: fileName,
      mimetype: "application/zip",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363422385140154@newsletter",
          newsletterName: "𝐌𝐄𝐇𝐃𝐈-𝐌𝐃",
          serverMessageId: 143
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error("GITCLONE ERROR:", err);
    reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❌ GitClone Error*
*│⏳ Try again later*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
`);
  }
});
