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

const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

Module_Exports({
        kingcmd: "insta",
        shortcut: ["ig","igdl","instagram"],
        infocmd: "download instagram videos",
        kingclass: "downloader",
        use: "paste insta video link"
    },
    async(sigma,person,memo) => {
        var _0xc57e=["\x2A\x5F\x47\x69\x76\x65\x20\x6D\x65\x20\x69\x6E\x73\x74\x61\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x5F\x2A","\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x74\x65\x73\x74","\x6A\x73\x6F\x6E","\x63\x68\x61\x74","\x72\x65\x73\x75\x6C\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!memo){return person[_0xc57e[1]](_0xc57e[0])};let txt=memo?memo[_0xc57e[3]](_0xc57e[2])[0]:_0xc57e[4];if(!/instagram/[_0xc57e[5]](txt)){return  await person[_0xc57e[1]]("\x2A\x5F\x50\x6C\x65\x61\x73\x65\x20\x67\x69\x76\x65\x20\x6D\x65\x20\x76\x61\x6C\x69\x64\x20\x69\x6E\x73\x74\x61\x67\x72\x61\x6D\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x2E\x2E\x21\x5F\x2A")};let data;try{data= await( await fetch(("\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x72\x6C\x2D\x77\x65\x62\x2E\x6F\x6E\x72\x65\x6E\x64\x65\x72\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x69\x6E\x73\x74\x61\x3F\x75\x72\x6C\x3D"+memo+_0xc57e[4])))[_0xc57e[6]]()}catch{return person[_0xc57e[1]]("\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x72\x65\x64")};return sigma[_0xc57e[11]](person[_0xc57e[7]],{video:{url:data[_0xc57e[8]][0]},caption:("\x2A\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0xc57e[9]]+_0xc57e[10]),width:600,height:490},{quoted:person})    })

    Module_Exports({
        kingcmd: "facebook",
        shortcut: ["fb","fbdl"],
        kingclass: "downloader",
        infocmd: "downloads facebook videos",
        use: "paste fb video link"
        },
       async(sigma, person, memo) => {
           var _0x43ef=["\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x64\x6C\x76\x32","\x45\x72\x72\x6F\x72\x20\x77\x68\x69\x6C\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x72\x65\x71\x75\x65\x73\x74"];if(!memo){return person[_0x43ef[0]]("\x2A\x5F\x47\x69\x76\x65\x20\x6D\x65\x20\x66\x61\x63\x65\x62\x6F\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x5F\x2A")};let txt=memo?memo[_0x43ef[2]](_0x43ef[1])[0]:_0x43ef[3];try{bocil[_0x43ef[10]](memo)[_0x43ef[9]](async (_0x2bacx2)=>{return sigma[_0x43ef[8]](person[_0x43ef[4]],{video:{url:_0x2bacx2[_0x43ef[6]][0][_0x43ef[5]]},caption:("\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0x43ef[7]]+_0x43ef[3]),width:550,height:470},{quoted:person})})}catch(e){return person[_0x43ef[0]](_0x43ef[11])}})
   

async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};



Module_Exports({
            kingcmd: "tiktok",
	    shortcut :  ['tt','ttdl'],
            infocmd: "Downloads Tiktok Videos Via Url.",
            kingclass: "downloader",
            use: "paste tiktok video link",
},

        async(sigma, person, memo) => {
            if(!memo) return await person.reply(`*_Give me tiktok video link_*`);
            let txt = memo ? memo.split(" ")[0]:'';
            if (!/tiktok/.test(txt)) return await person.reply(`*_Please give me valid tiktok video link..!_*`);
            const { status ,thumbnail, video, audio } = await tiktokdl(txt)
            //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
            if (status) return await sigma.sendMessage(person.chat, {video : {url : video } ,caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,height: 470,width: 540,  } , {quoted : person });
            else return await person.reply("Error while downloading your video") 
        })           