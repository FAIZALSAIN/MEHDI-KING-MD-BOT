const config = require('../config');
const { cmd, commands } = require('../command');

// Array of different fancy text styles for 𝐅K-𝐌𝐃
const botNameStyles = [
    "𝐌𝐄𝐇𝐃𝐈-𝐌𝐃",
    "𝐌𝐄𝐇𝐃𝐈-𝐌𝐃",
    "MEHDI Md",
    "ꩇׁׅ֪݊ ꫀׁׅܻ݊hׁׅ֮ժׁׅ݊υׁׅ-ꩇׁׅ֪݊ ժׁׅ݊",
    "мєн∂ι-м∂",
    "mEhDi-mD",
    "𝗠𝗲𝗵𝗱𝗶-𝗺𝗱",
    "𝗠𝗲𝗵𝗱𝗶",
    "𝕸𝖊𝖍𝖉𝖎-𝖒𝖉",
    "𝐌𝐄𝐇𝐃𝐈-𝐌𝐃"
];

// Track current style index
let currentStyleIndex = 0;

cmd({
    pattern: "ping3",
    alias: ["speed","pong"],
    use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🫀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        // Get current fancy bot name and rotate for next time
        const fancyBotName = botNameStyles[currentStyleIndex];
        currentStyleIndex = (currentStyleIndex + 1) % botNameStyles.length;

        const text = `> *${fancyBotName} SPEED: ${responseTime.toFixed(2)}ms ${reactionEmoji}*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363422385140154@newsletter',
                    newsletterName: "𝐌𝐄𝐇𝐃-𝐌𝐃",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 remains unchanged
cmd({
    pattern: "ping4",
    desc: "Check bot's response time.",
    category: "main",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*PINGING...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*🔥 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 SPEED : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
