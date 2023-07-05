let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*ᴊᴜᴍʟᴀʜ ᴘᴇɴɢɢᴜɴᴀ ʙᴏᴛ ʏᴀɴɢ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅᴀʟᴀᴍ ᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ sᴀᴀᴛ ɪɴɪ ᴀᴅᴀʟᴀʜ ${totalreg} ᴜsᴇʀ*`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.limit = true

export default handler
