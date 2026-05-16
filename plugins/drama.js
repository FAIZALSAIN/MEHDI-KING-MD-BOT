const { cmd } = require('../command')
const axios = require('axios')
const yts = require('yt-search')

const AXIOS = axios.create({
    timeout: 60000,
    headers: { 'User-Agent': 'Mozilla/5.0' }
})

async function fetchVideo(url) {
    const api = `https://arslan-apis.vercel.app/download/ytmp4?url=${encodeURIComponent(url)}`
    const res = await AXIOS.get(api)

    if (res.data?.status && res.data?.result?.status && res.data?.result?.download?.url) {
        return {
            url: res.data.result.download.url,
            title: res.data.result.metadata.title,
            thumb: res.data.result.metadata.thumbnail,
            quality: res.data.result.download.quality || "720p"
        }
    }
    throw new Error("API failed")
}

cmd({
    pattern: "drama",
    react: "⛓️",
    desc: "Download Drama / YouTube Video",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {

    try {

        if (args.length < 2) {
            return reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│❀ 🎬 𝐔𝐬𝐚𝐠𝐞:* .drama video <name>
*│❀ 📄 𝐃𝐨𝐜 𝐌𝐨𝐝𝐞:* .drama doc <name>
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ MEHDI KING 🤍
`)
        }

        const mode = args[0].toLowerCase()
        const query = args.slice(1).join(" ")

        await conn.sendMessage(from, { react: { text: "⏳", key: m.key } })

        let video
        if (query.startsWith("http")) {
            video = { url: query }
        } else {
            const search = await yts(query)
            if (!search.videos.length) return reply("❌ No result found")
            video = search.videos[0]
        }

        const data = await fetchVideo(video.url)

        const caption = `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 _ ⊱┈─̇─̣╌*
*│❀ 🎬 𝐓𝐢𝐭𝐥𝐞:* ${data.title}
*│❀ 🎞 𝐐𝐮𝐚𝐥𝐢𝐭𝐲:* ${data.quality}
*│❀ 📥 𝐌𝐨𝐝𝐞:* ${mode === "doc" ? "Document" : "Video"}
*│❀ ⚙️ 𝐒𝐭𝐚𝐭𝐮𝐬:* Downloaded
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ MEHDI KING 🤍
`

        const messageData = mode === "doc"
            ? {
                document: { url: data.url },
                mimetype: "video/mp4",
                fileName: `${data.title}.mp4`,
                caption,
                contextInfo: {
                    externalAdReply: {
                        title: data.title,
                        body: "Drama / YouTube",
                        thumbnailUrl: data.thumb,
                        sourceUrl: video.url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }
            : {
                video: { url: data.url },
                mimetype: "video/mp4",
                caption,
                contextInfo: {
                    externalAdReply: {
                        title: data.title,
                        body: "Drama / YouTube",
                        thumbnailUrl: data.thumb,
                        sourceUrl: video.url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }

        await conn.sendMessage(from, messageData, { quoted: mek })

        await conn.sendMessage(from, { react: { text: "✅", key: m.key } })

    } catch (e) {

        console.log(e)

        reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝐌𝐄𝐇𝐃𝐈-𝐌𝐃 ⊱┈─̇─̣╌*
*│❌ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐚𝐢𝐥𝐞𝐝*
*│❀ 𝐑𝐞𝐚𝐬𝐨𝐧:* API Error
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ MEHDI KING 🤍
`
        await conn.sendMessage(from, { react: { text: "❌", key: m.key } })
    }

})
