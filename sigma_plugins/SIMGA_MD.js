//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                         v：1．0．0                                                   // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name, Module_Exports } = require("../lib");
  const long = String.fromCharCode(8206)
  const sɪɢᴍᴀ_readmore = long.repeat(4001)
  const sɪɢᴍᴀ_speed = require('performance-now')
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
  

  //------------------------------------------------------------------------------------


  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "ownner",
          infocmd: "to check owner number",
          kingclass: "general",

      },
      async(bot, person) => {
          const name = require('../Setting')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + name.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: name.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      title: name.ownername,
                      body: 'Touch here.',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + person.pushName,
                  },
              },
          };
          return await bot.sendMessage(person.chat, buttonMessaged, {   quoted: person, });
  
      }
  )

  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //person.reply("Files Here \n "+files.toString())
          resolve(files);
        }
      });
    });
  };
const _0x5877eb=_0x4ce6;(function(_0x31b1ae,_0x31010a){const _0x210411=_0x4ce6,_0x24fb7c=_0x31b1ae();while(!![]){try{const _0x21ce82=-parseInt(_0x210411(0xb2))/(-0x1*-0x143b+-0x6*0x20e+-0x7e6)*(-parseInt(_0x210411(0xd7))/(-0xcea+0x1*0xccf+0x1d*0x1))+parseInt(_0x210411(0xe1))/(-0xd3*0x27+0x551+0x1ad7)+-parseInt(_0x210411(0xff))/(0xf39+0x371*-0x1+-0x4*0x2f1)*(parseInt(_0x210411(0xc3))/(-0x1bf+-0x269b*-0x1+-0x24d7))+parseInt(_0x210411(0xd2))/(-0x52*0x5d+-0x139d*0x1+0x316d)*(-parseInt(_0x210411(0x130))/(-0x5ca*0x5+0x22df+-0x5e6))+parseInt(_0x210411(0xcb))/(-0x1a7*0x15+0x1a3*-0x16+0x46bd)+parseInt(_0x210411(0xdf))/(-0x86e*-0x1+0x1359+0xddf*-0x2)+-parseInt(_0x210411(0xeb))/(0xf*-0xa6+0x2507+-0x3e5*0x7)*(parseInt(_0x210411(0x13a))/(-0x7f*0x1f+0x2609+-0x7*0x33b));if(_0x21ce82===_0x31010a)break;else _0x24fb7c['push'](_0x24fb7c['shift']());}catch(_0x56181e){_0x24fb7c['push'](_0x24fb7c['shift']());}}}(_0x4793,-0x2f45*-0x59+-0x11b55+-0x1*0x6901),sɪɢᴍᴀ_ᴍᴅ[_0x5877eb(0xd0)+_0x5877eb(0xde)]({'kingcmd':_0x5877eb(0xe9),'shortcut':[_0x5877eb(0x10f),_0x5877eb(0x11d)],'infocmd':_0x5877eb(0x11a)+_0x5877eb(0x129),'kingclass':_0x5877eb(0x109)},async(_0x13612a,_0x3abc5d,_0x52ca23)=>{const _0x55f765=_0x5877eb,_0x82b272={'QHahi':function(_0xb12c47,_0x564f07){return _0xb12c47===_0x564f07;},'zxqoK':function(_0x219287,_0x59887e){return _0x219287!==_0x59887e;},'CzIbU':function(_0x5d001b,_0x5898e1){return _0x5d001b(_0x5898e1);},'aGbJL':_0x55f765(0xee),'BrWmZ':_0x55f765(0xd1)+'5','NqpOF':function(_0x4a74f9){return _0x4a74f9();},'PwQDc':function(_0x32da38,_0x122313){return _0x32da38-_0x122313;},'lvgkS':function(_0x1c30f4){return _0x1c30f4();},'nJrhb':_0x55f765(0xd8),'bQSmm':function(_0x288171,_0x1d609a){return _0x288171(_0x1d609a);},'PflKX':function(_0x2b65ce,_0x12d492){return _0x2b65ce(_0x12d492);},'bIsbz':function(_0x341543,_0x5920a2){return _0x341543==_0x5920a2;},'GSIHQ':function(_0x45ad6a,_0x293dc6){return _0x45ad6a(_0x293dc6);},'MQrrr':function(_0x704bea,_0x38067b,_0x56db11){return _0x704bea(_0x38067b,_0x56db11);},'WCwgS':_0x55f765(0x120)+_0x55f765(0x119)+_0x55f765(0xf7)+_0x55f765(0x11f)+_0x55f765(0x107)+_0x55f765(0x112)+_0x55f765(0x12d)},{commands:_0x451cb2}=_0x82b272[_0x55f765(0xb0)](require,_0x82b272[_0x55f765(0x113)]);let _0x1864f7=[];const _0x4dfd25=_0x52ca23?_0x451cb2[_0x55f765(0xd3)](_0x35c891=>_0x35c891[_0x55f765(0xb7)]===_0x52ca23):![];if(_0x4dfd25){const _0xb21f67=_0x82b272[_0x55f765(0x11b)][_0x55f765(0xd6)]('|');let _0x1ab143=0xb02*-0x1+-0x1eb*0xb+-0x1*-0x201b;while(!![]){switch(_0xb21f67[_0x1ab143++]){case'0':if(_0x4dfd25[_0x55f765(0x123)])_0x1864f7[_0x55f765(0xb1)](_0x55f765(0xc2)+'\x0a\x20'+prefix+_0x4dfd25[_0x55f765(0xb7)]+'\x20'+_0x4dfd25[_0x55f765(0x123)]);continue;case'1':if(_0x4dfd25[_0x55f765(0x111)])_0x1864f7[_0x55f765(0xb1)](_0x55f765(0xf0)+_0x55f765(0x12a)+_0x4dfd25[_0x55f765(0x111)]);continue;case'2':if(_0x4dfd25[_0x55f765(0x139)])_0x1864f7[_0x55f765(0xb1)](_0x55f765(0xe2)+_0x4dfd25[_0x55f765(0x139)]+(_0x55f765(0xcf)+_0x55f765(0xd4)));continue;case'3':_0x1864f7[_0x55f765(0xb1)](_0x55f765(0x128)+mztit+(_0x55f765(0xd9)+_0x55f765(0xc8))+_0x4dfd25[_0x55f765(0xb7)]);continue;case'4':if(_0x4dfd25[_0x55f765(0x116)])_0x1864f7[_0x55f765(0xb1)](_0x55f765(0x124)+_0x55f765(0xdd)+_0x4dfd25[_0x55f765(0x116)]);continue;case'5':return await _0x3abc5d[_0x55f765(0xc0)](_0x1864f7[_0x55f765(0xcd)]('\x0a'));}break;}}const _0x39b2fe={};try{_0x451cb2[_0x55f765(0xec)](async(_0x11c024,_0x4fba60)=>{const _0x4d418d=_0x55f765;if(_0x82b272[_0x4d418d(0x10a)](_0x11c024[_0x4d418d(0xef)+_0x4d418d(0x11e)],![])&&_0x82b272[_0x4d418d(0x133)](_0x11c024[_0x4d418d(0xb7)],undefined)){if(!_0x39b2fe[_0x11c024[_0x4d418d(0x111)]])_0x39b2fe[_0x11c024[_0x4d418d(0x111)]]=[];_0x39b2fe[_0x11c024[_0x4d418d(0x111)]][_0x4d418d(0xb1)](_0x11c024[_0x4d418d(0xb7)]);}}),timestampe=_0x82b272[_0x55f765(0xf5)](sɪɢᴍᴀ_speed),latensie=_0x82b272[_0x55f765(0xdb)](_0x82b272[_0x55f765(0xfc)](sɪɢᴍᴀ_speed),timestampe);let [_0x350529,_0x271248]=new Date()[_0x55f765(0xfa)+_0x55f765(0xba)](_0x82b272[_0x55f765(0xcc)],{'timeZone':global[_0x55f765(0xbf)]})[_0x55f765(0xd6)](','),_0x1e6f16=await sck1[_0x55f765(0xd5)+_0x55f765(0xf2)](),_0x54aa23=_0x55f765(0xfe)+mztit+(_0x55f765(0x105)+_0x55f765(0x101)+_0x55f765(0x131))+_0x3abc5d[_0x55f765(0xfb)]+(_0x55f765(0x125)+_0x55f765(0xf6))+name[_0x55f765(0xf1)]+(_0x55f765(0x12e)+_0x55f765(0x12b))+name[_0x55f765(0xbe)]+(_0x55f765(0x114)+_0x55f765(0xe6))+prefix+(_0x55f765(0xe4)+_0x55f765(0xe0))+_0x82b272[_0x55f765(0xfc)](tlang)[_0x55f765(0x11c)]+(_0x55f765(0x121)+_0x55f765(0xe7))+name[_0x55f765(0xf8)]+(_0x55f765(0x135)+_0x55f765(0xe7))+_0x271248+(_0x55f765(0xc6)+_0x55f765(0xe7))+_0x350529+(_0x55f765(0x106)+'*\x20')+_0x82b272[_0x55f765(0xb0)](formatp,_0x82b272[_0x55f765(0xdb)](os[_0x55f765(0x100)](),os[_0x55f765(0x13c)]()))+'/'+_0x82b272[_0x55f765(0xb0)](formatp,os[_0x55f765(0x100)]())+(_0x55f765(0x12c)+_0x55f765(0xbd))+_0x82b272[_0x55f765(0x138)](runtime,process[_0x55f765(0x117)]())+(_0x55f765(0x13b)+_0x55f765(0x10b))+_0x451cb2[_0x55f765(0xfd)]+(_0x55f765(0xea)+_0x55f765(0x102))+latensie[_0x55f765(0x108)](0x1*0xc74+-0x1738+0xac8)+(_0x55f765(0x122)+_0x55f765(0xca)+_0x55f765(0x132)+_0x55f765(0xda))+_0x1e6f16+(_0x55f765(0x134)+_0x55f765(0x13e))+name[_0x55f765(0xe5)]+(_0x55f765(0xbc)+_0x55f765(0xc5))+name[_0x55f765(0xc4)]+(_0x55f765(0xb6)+_0x55f765(0x104)+_0x55f765(0x118)+_0x55f765(0xf3)+_0x55f765(0xb8))+sɪɢᴍᴀ_readmore+'\x0a',_0x3a68a6=![];for(const _0x550b11 in _0x39b2fe){_0x54aa23+=_0x55f765(0xe3)+_0x82b272[_0x55f765(0xed)](tiny,_0x550b11)+_0x55f765(0x10e);if(_0x82b272[_0x55f765(0xc9)](_0x52ca23[_0x55f765(0xc1)+'e'](),_0x550b11[_0x55f765(0xc1)+'e']()[_0x55f765(0x110)]())){_0x3a68a6=_0x55f765(0xe3)+_0x82b272[_0x55f765(0xdc)](tiny,_0x550b11)+_0x55f765(0x10e);for(const _0x25b1a9 of _0x39b2fe[_0x550b11]){_0x3a68a6+='┃\x20'+_0x82b272[_0x55f765(0x126)](fancytext,_0x25b1a9,0xdb7+-0x1b19*-0x1+-0x28cf*0x1)+'\x0a';}_0x3a68a6+=_0x55f765(0xce)+_0x55f765(0x10c)+_0x55f765(0xc7)+_0x55f765(0x13d);break;}else{for(const _0x160d7c of _0x39b2fe[_0x550b11]){_0x54aa23+='┃\x20'+_0x82b272[_0x55f765(0x126)](fancytext,_0x160d7c,-0x4ba+0x16c6+-0x120b)+'\x0a';}_0x54aa23+=_0x55f765(0xce)+_0x55f765(0x137);}}return _0x54aa23+=_0x55f765(0xf4)+prefix+(_0x55f765(0x136)+_0x55f765(0xf9)+_0x55f765(0x103)+_0x55f765(0xe8)+_0x55f765(0xb4)+_0x55f765(0xb3)+_0x55f765(0xe7))+prefix+(_0x55f765(0x12f)+_0x55f765(0xb5)+_0x55f765(0xb9)+_0x55f765(0x10d)),await _0x13612a[_0x55f765(0x115)+'e'](_0x3abc5d[_0x55f765(0xbb)],{'image':{'url':await _0x82b272[_0x55f765(0xf5)](botpic)},'caption':_0x3a68a6?_0x3a68a6:_0x54aa23});}catch{_0x3abc5d[_0x55f765(0xc0)](_0x82b272[_0x55f765(0x127)]);}}));function _0x4ce6(_0x146965,_0x37b279){const _0x2b45bf=_0x4793();return _0x4ce6=function(_0x37d6a6,_0x590ac7){_0x37d6a6=_0x37d6a6-(0x679*-0x2+-0x2589+-0x1*-0x332b);let _0x384cbb=_0x2b45bf[_0x37d6a6];return _0x384cbb;},_0x4ce6(_0x146965,_0x37b279);}function _0x4793(){const _0x456c74=['\x0a┃✗\x20*•ᴜᴘ-ᴛ','t_*','\x0a┃✗\x20*•ᴏᴡɴᴇ','ʜᴇʟᴘ\x20ʀᴇᴘᴏ\x0a','114261Gsqodp','ᴄᴏᴍᴇ•*\x20','ᴍᴀᴄ-ᴏs\x0a┃✗\x20','zxqoK','\x0a┃✗\x20*•ᴠᴇʀs','\x0a┃✗\x20*•ᴛɪᴍᴇ','ʜᴇʟᴘ\x20ᴄᴍᴅ\x20ɴ','━━◉\x0a','bQSmm','infocmd','154968dNPfgA','\x0a┃✗\x20*•ᴘʟᴜɢ','freemem','ɪɢᴍᴀ\x20ᴹᴰ*','ɪᴏɴ•*\x20','CzIbU','push','8101oiVWuS','\x0a*•ᴇxᴀᴍᴘʟᴇ','ᴄ\x20ᴄᴏᴍᴍᴀɴᴅ.','*⤹★ᴘᴏᴡᴇʀᴇᴅ','\x0a┃✗\x20*•ᴅᴇᴠᴇ','kingcmd','\x20\x20\x20\x20\x20\x20\x20\x0a\x0a','\x20ʙʏ★⤸\x20sɪɢᴍ','ring','chat','\x0a┃✗\x20*•ʙʀᴀɴ','ɪᴍᴇ•*\x20','ownername','timezone','reply','toLowerCas','┃✗\x20•ᴜsᴀɢᴇ•','1120XOfiOj','BRANCH','ᴄʜ•*\x20','\x0a┃✗\x20*•ᴅᴀᴛᴇ','ʀᴇᴅ\x20ʙʏ★⤸\x20s','ᴏᴍᴍᴀɴᴅ•\x20','bIsbz','ʟᴀᴛꜰᴏʀᴍ•*\x20','1500456omaBPo','nJrhb','join','┗━━━━━━━━━','\x0a┗━━━━━━━━','Module_Exp','3|1|4|0|2|','192EhHLwF','find','━━⦿','countDocum','split','454ghUWga','en-pk','\x20⟫━⦿\x0a┃✗\x20•ᴄ','*•ᴜsᴇʀs•*\x20','PwQDc','GSIHQ','ᴜᴛ•\x20','orts','12466863bGVKOx','ʜᴇᴍᴇ•*\x20','1851468hJHxRc','┃✗\x20•ɪɴꜰᴏ•\x20','┏━━『\x20','*\x20』\x0a┃✗\x20*•ᴛ','VERSION','ɪx•*\x20『\x20*','•*\x20','ᴜᴛ\x20sᴘᴇᴄɪғɪ','menu','\x0a┃✗\x20*•sᴘᴇᴇ','570SlRPgA','map','PflKX','../lib','dontAddCom','┃✗\x20•ᴄᴀᴛᴇɢᴏ','botname','ents','━━━━━━━━━⦿','•ᴛʏᴘᴇ•\x20','NqpOF','ɴᴀᴍᴇ•*\x20','red,Or\x20May','WORKTYPE','ᴀᴍᴇ\x20ᴛᴏ\x20ᴋɴᴏ','toLocaleSt','pushName','lvgkS','length','┏━━⟪⟪\x20','30820wkIpcJ','totalmem','\x20\x0a┃✗\x20*•ᴡᴇʟ','ᴅ•*\x20','ᴡ\x20ᴍᴏʀᴇ\x20ᴀʙᴏ','ʟᴏᴘᴇʀ•\x20ᴍ\x20ᴢ','\x20⟫━━⦿\x20\x20\x20\x20\x20','\x0a┃✗\x20*•ᴍᴇᴍ•','imeZone\x20Is','toFixed','general','QHahi','ɪɴs•*\x20','━◉\x0a*⤹★ᴘᴏᴡᴇ','ᴀ\x20ᴹᴰ*','\x20』━━❖\x0a','help','trim','kingclass','\x20In\x20Correc','aGbJL','\x0a┃✗\x20*•ᴘʀᴇғ','sendMessag','shortcut','uptime','ᴜʙᴀɪʀ*\x0a┗━━','Error\x20Occu','All\x20Comman','BrWmZ','theme','list','mandList','\x20Be\x20Your\x20T','*_Unknown\x20','\x0a┃✗\x20*•ᴍᴏᴅᴇ','\x20ᴍs\x0a┃✗\x20*•ᴘ','use','┃✗\x20•sʜᴏʀᴛᴄ','\x0a┃✗\x20*•ʙᴏᴛ-','MQrrr','WCwgS','┏━━⟪\x20','ds\x20lists','ʀʏ•\x20','ʀ•*\x20'];_0x4793=function(){return _0x456c74;};return _0x4793();}
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "general",

},
 async(bot, person, text ,{isCreator }) => {
   if(!isCreator) return person.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return person.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
      try {
            const sɪɢᴍᴀ_files = await readDirectory(text);
            files.forEach(sɪɢᴍᴀ_file => { res += file + '\n'; });
            await person.reply(res.toString());
      } catch (error) {  person.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.kingcmd}`);
          if (cmd.kingclass) Maher.push(`┃✗ •ᴄʟᴀss• ${cmd.kingclass}`);
          if(cmd.kingpath) Maher.push(`┃✗ •ꜰɪʟᴇ-ᴘᴀᴛʜ• ${cmd.kingpath}\n┗━━━━━━━━━━⦿\n${name.caption}`)
          return await person.reply(Maher.join('\n'));
  


  })


