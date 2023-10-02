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

const moment = require('moment-timezone')
const {fetchJson,Module_Exports, tlang, getBuffer, prefix, name,fancytext,botpic } = require('../lib')
let gis ='' // require("g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

   //---------------------------------------------------------------------------
   const { shazam } = require('../lib')
   let yts = require("secktor-pack");
   Module_Exports({
           kingcmd: "find",
           kingclass: "search",
           infocmd: "Finds info about song",
           kingpath: __filename,
       },
       async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!citel.quoted) return citel.reply(`Reply to Audio`);
            if (!/audio/.test(mime)) return citel.reply(`Send/Reply audio ${prefix}shazam`);
            let buff = await citel.quoted.download();
            let data = await shazam(buff);
            if (!data.status) return citel.send(data);
            let search = await yts(data.title);
            let anu = search.videos[0];
            let h =`*Title : _${data.title}_*           
*Artist : _${data.artists}_*            
*To Download Song:- _${prefix}yta ${anu.url}_*
   `
//   *Album :* _${data.album}_    
//   *Release :* _${data.release_date}


   let buttonMessaged = {
                   image: { url: anu.thumbnail, },
                   caption: h,
                   footer: tlang().footer,
                   headerType: 4,
                   contextInfo: {
                       externalAdReply: {
                           title: data.artists,
                           body: data.album,
                           thumbnail: log0,
                           mediaType: 2,
                           mediaUrl: ``,
                           sourceUrl: ``,
                       },
                   },
               };
               await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel, });
       }
    )
    //------------------------------------------------------------------------------------
Module_Exports({
            kingcmd: 'ss',
            shortcut :['webss' , 'fullss'],
            kingclass: "search",
            infocmd: "Searches Image on Google",
            use: '',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
let limit = 5;
 try {
    if (!text) return citel.reply("```Uhh Please, Give me Url!```");
    var url = text;
    let urll = `https://s.vercel.app/api?url=${url.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
    let media  = await getBuffer(urll)
    return await Void.sendMessage(citel.chat ,{image : media } , {quoted:citel} )
 }
catch (err) { return citel.reply("```Error While Fetching Snapshot```")}
        }
    )



    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "imdb",
            kingclass: "search",
            infocmd: "Sends image of asked Movie/Series.",
            use: 'kingsman',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*_Name a Series or movie_*\nEx: ${prefix}imdb kingman`);
            try{
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
            
            let imdbt = "";
            
            citel.reply(fids.data)
            
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ```     𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
            imdbt += "🎬Title      : " + fids.data.Title + "\n";
            imdbt += "📅Year       : " + fids.data.Year + "\n";
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
            imdbt += "📆Released   : " + fids.data.Released + "\n";
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
            imdbt += "✍Writer     : " + fids.data.Writer + "\n";
            imdbt += "👨Actors     : " + fids.data.Actors + "\n";
            imdbt += "📃Plot       : " + fids.data.Plot + "\n";
            imdbt += "🌐Language   : " + fids.data.Language + "\n";
            imdbt += "🌍Country    : " + fids.data.Country + "\n";
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
            imdbt += "🏙️Production : " + fids.data.Production + "\n";
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "\n";
            imdbt += name.caption ;
            Void.sendMessage(citel.chat, {  image: { url: fids.data.Poster, }, caption: imdbt,  }, {   quoted: citel,  });}
            catch{
                citel.reply("*_Wrong Movie Name_* ")}


        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "weather",
        kingclass: "search",
        infocmd: "Sends weather info about asked place.",
        use: 'Lahore',
    },
    async(sigma, person, text) => {
const _0x3843d6=_0x20c9;(function(_0x45e77b,_0x6f0eb4){const _0x46d844=_0x20c9,_0x3a9327=_0x45e77b();while(!![]){try{const _0x2ba43c=parseInt(_0x46d844(0xa6))/(-0x1093*0x2+0x712+-0x1*-0x1a15)*(parseInt(_0x46d844(0xd2))/(-0x736*-0x1+0x1e2e+-0x366*0xb))+parseInt(_0x46d844(0xc4))/(0x23b5+0x1129+-0x34db*0x1)*(parseInt(_0x46d844(0xcb))/(0x99e+0x678+-0x1012))+-parseInt(_0x46d844(0xb4))/(-0x16*0xf3+-0x2040+-0xb*-0x4d5)*(-parseInt(_0x46d844(0xde))/(-0x3*-0x153+0x5*0x775+0x196*-0x1a))+parseInt(_0x46d844(0xc8))/(0x7*0x430+0x13ce+-0x3117)+parseInt(_0x46d844(0xc3))/(-0x1*-0xaed+0x119d+-0x1c82)+-parseInt(_0x46d844(0xd6))/(0x149*0x1+0x84a*0x4+-0x16f*0x18)*(-parseInt(_0x46d844(0xca))/(0x1*0x1d1b+-0x1bc4*0x1+-0x14d))+-parseInt(_0x46d844(0xdd))/(0x23e9+-0x2681+0x2a3);if(_0x2ba43c===_0x6f0eb4)break;else _0x3a9327['push'](_0x3a9327['shift']());}catch(_0x54e310){_0x3a9327['push'](_0x3a9327['shift']());}}}(_0x4903,-0x4*0x12cd0+-0x9*-0x7367+0xecd24));if(!text)return person[_0x3843d6(0x95)](_0x3843d6(0xb0)+_0x3843d6(0xb2)+_0x3843d6(0xab)+prefix+(_0x3843d6(0xdc)+_0x3843d6(0xbc)));function _0x20c9(_0x5a7aaa,_0x206914){const _0x3f7ded=_0x4903();return _0x20c9=function(_0x3c28ec,_0xca85ac){_0x3c28ec=_0x3c28ec-(-0xb*0xd1+-0x1777*-0x1+-0xded);let _0x2ad950=_0x3f7ded[_0x3c28ec];return _0x2ad950;},_0x20c9(_0x5a7aaa,_0x206914);}try{let wdata=await axios[_0x3843d6(0xa1)](_0x3843d6(0xd7)+_0x3843d6(0xa3)+_0x3843d6(0xb9)+_0x3843d6(0xad)+_0x3843d6(0xd9)+text+(_0x3843d6(0xba)+_0x3843d6(0xc0)+_0x3843d6(0xae)+_0x3843d6(0x9f)+_0x3843d6(0xaf)+_0x3843d6(0xbb)+_0x3843d6(0xa7))),mz='';mz+=_0x3843d6(0x93)+mztit+(_0x3843d6(0xcf)+_0x3843d6(0x8f)+_0x3843d6(0xda)+_0x3843d6(0x92)+_0x3843d6(0xa9))+fancytext(_0x3843d6(0xc1)+'f*',-0x3f7+-0x1b17+-0x1f0f*-0x1)+'\x20'+text+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xbe)+'*',0x994+-0x2f*0x6d+0x29c*0x4)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0x90)][_0x3843d6(0x98)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xb5)+_0x3843d6(0xe0),0x7a0+0x7*0x485+-0x13a1*0x2)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xa5)][-0x61*0x5f+-0x1550+-0x35f*-0x11][_0x3843d6(0xa4)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xc9)+_0x3843d6(0x9c),0x5c9*-0x2+-0x13*0x49+0x1*0x10fe)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xa5)][0x4*-0x421+0x2*0xf4d+0xe16*-0x1][_0x3843d6(0xdf)+'n']+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xb8)+_0x3843d6(0xb1),0x63c+0x58*0x28+-0x6a9*0x3)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xa4)][_0x3843d6(0xbf)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xd3)+_0x3843d6(0x99),0x1*-0x8d3+0x22f0+0x4*-0x687)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xa4)][_0x3843d6(0x91)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xe1)+'•*',0x8*0x2cd+-0x178d*-0x1+-0x2df4)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xa4)][_0x3843d6(0xd0)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xd1)+'•*',0x12d*0x1a+-0x157e+0x913*-0x1)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xa4)][_0x3843d6(0xb3)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xac)+_0x3843d6(0xd8),0x2*-0x5fa+0x15c9+-0x9d4)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xa2)][_0x3843d6(0xc7)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0xdb)+'•*',-0x139f*-0x1+0x1e38+-0x31d6*0x1)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xb7)][_0x3843d6(0xd4)]+'\x0a',mz+=_0x3843d6(0x9d)+fancytext(_0x3843d6(0x9e)+_0x3843d6(0x97),-0x2*-0xeca+-0x2571+0x7de)+'\x20'+wdata[_0x3843d6(0xcc)][_0x3843d6(0xb7)][_0x3843d6(0xb6)]+(_0x3843d6(0x9b)+_0x3843d6(0xd5)+_0x3843d6(0xcd)+'\x20')+name[_0x3843d6(0xce)]+'*';let king={'image':{'url':await botpic()},'text':mz,'footer':tlang()[_0x3843d6(0xa8)],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':''+Gname,'body':_0x3843d6(0xaa)+'e','thumbnail':log0,'mediaType':0x4,'mediaUrl':'','sourceUrl':''+waUrl}}};sigma[_0x3843d6(0x9a)+'e'](person[_0x3843d6(0xc6)],king,{'quoted':person});}catch{person[_0x3843d6(0x95)](_0x3843d6(0xbd)+_0x3843d6(0xc2)+_0x3843d6(0x94)+_0x3843d6(0xa0)+_0x3843d6(0x96)+_0x3843d6(0xc5)+_0x3843d6(0xb2));}function _0x4903(){const _0x4309aa=['reply','ase\x20Give\x20M','e•*','country','ke•*','sendMessag','\x0a┗━━━━━━━━','ion•*','┃✗\x20','*•longitud','9809c2cd4d','id_*\x0a*_Ple','get','wind','i.openweat','main','weather','2CvMQFK','e=en','footer','\x0a┃✗\x20\x20\x20\x20\x20\x20\x20','Easy\x20to\x20Us','...!\x0aEx:\x20','*•wind-spe','/data/2.5/','060a6bcfa1','97a212b192','*_Give\x20me\x20','ure•*','Location_*','humidity','228905aJoxgh','*•conditio','lon','coord','*•temperat','hermap.org','&units=met','73&languag','hore','*_Your\x20Giv','*•country•','temp','ric&appid=','*weather\x20o','en\x20Locatio','6095072ipTECq','15gWPCMc','e\x20a\x20Valid\x20','chat','speed','10276231hxydEq','*•descript','50360pQmIxk','787712OkdGQl','data','𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈','botname','\x20⟫━⦿\x0a┃┏➛\x20*','pressure','*•humidity','806172ycqoxz','*•feels-li','lat','━━⦿\x0a*╰┈➤𝙶𝙴','1701qfAFGx','https://ap','ed•*','weather?q=','┃┗➛\x20*ᴡᴇᴀᴛʜ','*•latitude','weather\x20la','55066649LPaBns','126FcgMwC','descriptio','n•*','*•pressure','sɪɢᴍᴀ\x20ᴹᴰ*\x0a','sys','feels_like','ᴇʀ\x20sᴇᴀʀᴄʜ*','┏━━⟪⟪\x20','n\x20is\x20Inval'];_0x4903=function(){return _0x4309aa;};return _0x4903();}
        }
)
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "horo",
            kingclass: "search",
            infocmd: "Gives horoscope info of user.",
            use: 'sign\n:Example: horo libra',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Provide me a sign!`)
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw += `*🌟 Horoscope of  ${text}*\n\n`;
                        textw += `*Current Date:* ${json.current_date}.\n`;
                        textw += `*Sign:* ${text}.\n`;
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`;
                        textw += `*Compatibility:* ${json.compatibility}.\n`;
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`;
                        textw += `*Lucky Color:* ${json.color}.\n`;
                        textw += `*Today Mood:* ${json.mood}.\n`;
                        textw += `*Overall:* ${json.description}.\n`;
                        textw +=name.caption ;
                        citel.reply(textw)
                    });

            } catch (e) {   console.log(e)  }
        }
    )
    //---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "cricket",
            shortcut :['cric'],
            kingclass: "search",
            infocmd: "Sends info of about cricket",
            use: '',
            kingpath: __filename,
        },
        async(bot, man, tax) => {

          man.send (`*_Please Wait, While Getting Cricket Updates_*`);
const _0x485f13=_0xc8fc;(function(_0xea9292,_0x3f139b){const _0x213a89=_0xc8fc,_0x3e0c50=_0xea9292();while(!![]){try{const _0x36daa8=-parseInt(_0x213a89(0x78))/(0x3b3+-0x23da+-0x405*-0x8)+parseInt(_0x213a89(0x6c))/(-0x915+-0x3c4*0x8+0x2737*0x1)+parseInt(_0x213a89(0x70))/(0x1a8c+-0xdf3*-0x1+-0x287c)+parseInt(_0x213a89(0x82))/(0xe17+0x1*-0x12f+-0xce4)*(-parseInt(_0x213a89(0x76))/(-0x6ec+0x21bd+-0x1acc))+-parseInt(_0x213a89(0x81))/(0x1*0x169f+-0x26e4+0x2b*0x61)+-parseInt(_0x213a89(0x87))/(0xdc2+0xf6b+-0x1*0x1d26)+parseInt(_0x213a89(0x8a))/(0x8*-0x353+-0x5aa+0x204a);if(_0x36daa8===_0x3f139b)break;else _0x3e0c50['push'](_0x3e0c50['shift']());}catch(_0x27ba26){_0x3e0c50['push'](_0x3e0c50['shift']());}}}(_0x33fc,0x3e36*-0xa+-0x154cdc+0xe*0x287c5));const response=await fetch(_0x485f13(0x86)+_0x485f13(0x7d)+_0x485f13(0x6f)+_0x485f13(0x73)+_0x485f13(0x79)+_0x485f13(0x7b)+_0x485f13(0x77)+_0x485f13(0x8d)+_0x485f13(0x7f)),dat=await response[_0x485f13(0x88)]();function _0xc8fc(_0x2f821a,_0x33dadc){const _0x5a8907=_0x33fc();return _0xc8fc=function(_0x19d3dd,_0xd34c1d){_0x19d3dd=_0x19d3dd-(-0x471*-0x4+0x17f5+-0x2952);let _0x2eab78=_0x5a8907[_0x19d3dd];return _0x2eab78;},_0xc8fc(_0x2f821a,_0x33dadc);}function _0x33fc(){const _0x4576c5=['reply','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝙴','com/v1/cur','3854604oDkQWW','𝚃𝙰𝚃𝚄𝚂•*\x20','𝙰𝚃𝙴•*\x20','rentMatche','length','matchStart','2210285SqEbaS','c9-47c5-8f','1300428xSrjMf','s?apikey=f','𝙰𝙼𝙴•*\x20','68d1cb5-a9','\x0a*✯────𝐌𝐀𝐓','i.cricapi.','𝙽𝙳𝙴𝙳•*\x20','ace78','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝙽','1610550BQOseR','4lHQhEe','𝚃𝙰𝚁𝚃𝙴𝙳•*\x20','matchEnded','data','https://ap','4494392EmBlJn','json','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝙳','12533368EWYRzv','name','status','cd-fbfe52b','dateTimeGM','log','𝐂𝐇\x20','────✯*','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝚂','1135682ImKxKM'];_0x33fc=function(){return _0x4576c5;};return _0x33fc();}console[_0x485f13(0x68)](dat);for(let i=-0x6b*0x2+0x90d*-0x2+0x12f0;i<dat[_0x485f13(0x85)][_0x485f13(0x74)];i++){let j=i+(-0x12*-0x10b+0x5d*0x68+-0x388d);tax+=_0x485f13(0x7c)+_0x485f13(0x69)+i+_0x485f13(0x6a),tax+=_0x485f13(0x80)+_0x485f13(0x7a)+dat[_0x485f13(0x85)][i][_0x485f13(0x8b)],tax+=_0x485f13(0x6b)+_0x485f13(0x71)+dat[_0x485f13(0x85)][i][_0x485f13(0x8c)],tax+=_0x485f13(0x89)+_0x485f13(0x72)+dat[_0x485f13(0x85)][i][_0x485f13(0x67)+'T'],tax+=_0x485f13(0x6b)+_0x485f13(0x83)+dat[_0x485f13(0x85)][i][_0x485f13(0x75)+'ed'],tax+=_0x485f13(0x6e)+_0x485f13(0x7e)+dat[_0x485f13(0x85)][i][_0x485f13(0x84)]+'\x0a';}return await man[_0x485f13(0x6d)](tax);


})

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "google",
            shortcut :['gsearch'],
            kingclass: "search",
            infocmd: "Sends info of given query from Google Search.",
            use: 'who is king',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`give me a query\n*Ex: ${prefix}google Who is KING.*`);
            let google = require('google-it');
            google({ 'query': text}).then(res => {
                let msg= `*Google Search From:* ${text} \n\n`;
                for (let g of res) {
                    msg+= `➣ *•𝚃𝙸𝚃𝙻𝙴•* ${g.title}\n`;
                    msg+= `➣ *•𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽•* ${g.snippet}\n`;
                    msg+= `➣ *•𝙻𝙸𝙽𝙺•* ${g.link}\n\n✯─────────────────────✯\n\n`;
                }
             
                return citel.reply(msg);
            })
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "image",
            shortcut: ["img"],
            kingclass: "search",
            infocmd: "Searches Image on Google",
            use: 'Quran pics',
            kingpath: __filename,
        },
        async(Void, citel, text) => {

   if (!text) return citel.reply(`Provide me a query!\n*Ex: ${prefix}image crown |10*`)
   let buttonMessage = {}
   let name1 = text.split("|")[0] || `Luffy`
   let name2 = text.split("|")[1] || `5`
 try {
    let urlsArray = [];
    const params = {
        q: name1, 
        tbm: "isch",
        hl: "en",
        gl: "in",
        ijn: "0", 
    };
    const headers = {
      "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
      "Accept-Encoding": "application/json",
  };
  
    const res = await axios.get("https://www.google.com/search", { headers: headers, params: params });
    let body = res.data;
    body = body.slice(body.lastIndexOf("AF_initDataCallback"));
    body = body.slice(body.indexOf("["));
    body = body.slice(0, body.indexOf("</script>")-1);
    body = body.slice(0, body.lastIndexOf(","));
    
    const img = JSON.parse(body);

    const imgObjects = img[56][1][0][0][1][0];
    for (let i = 0; i < name2; i++) {
        if (imgObjects[i] && imgObjects[i][0][0]["444383007"][1]) {
            let url = imgObjects[i][0][0]["444383007"][1][3][0]; // the url
            urlsArray.push(url);
        }
    }

for (let url of urlsArray) { Void.sendMessage(citel.chat , {image : {url : url} } )  }
} 
 catch (error) {   return citel.reply("*_Google Images Not Working, Try it Later_*"); }

 
 
 /*
 
let isImages = false;
            let num = text.split("|")[1];
 gis(name1, async(error, result) => { 
if(result.length) 
{
 isImages = true;
 citel.reply(`Sending images of ${name1} in chat`) 
}
else return citel.reply("*Google Images Not Working, Try it Later*");
})
     if(!isImages) return       
            let nn = name2
            for (let i = 0; i < nn; i++) {
            gis(name1, async(error, result) => { 
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            
             
             if(!num){ buttonMessage = {   image: { url: images },
                                caption: name.caption,
                                }
             }else {  buttonMessage = {   image: { url: images },}   }
                    
             
             Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
                })
            }
            
            
            */
 })
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "couplepp",
            shortcut:["cpp"],
            kingclass: "search",
            infocmd: "Sends two couples pics.",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `*✯──𝙲𝙾𝚄𝙿𝙻𝙴 𝙼𝙰𝙻𝙴──✯*` }, { quoted: citel })
            Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `*✯──𝙲𝙾𝚄𝙿𝙻𝙴 𝙵𝙴𝙼𝙰𝙻𝙴──✯*` }, { quoted: citel })
        }
    ) 
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "iswa",
        kingclass: "search",
        infocmd: "Searches in given rage about given number.",
        use: '9112345678xx',
        kingpath: __filename,
    },
    async(Void, citel, text) => {
 if(!text) return await citel.reply(`*_Give Me Number without + sign_*\nEx: ${prefix}iswa 9234663191xx`)
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply(`*You did not add x*\nEx: ${prefix}iswa 9234663191xx`)
        citel.reply(`*Searching WhatsApp accounts in given range...*`)

        function countInstances(string, word) {  return string.split(word).length - 1; }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) { randomxx = 10 } 
        else if (random_length == 2) { randomxx = 100 } 
        else if (random_length == 3) { randomxx = 1000 }
 
        text = `*--『 List of Whatsapp Numbers 』--*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) { random = `${status1}` } 
            else if (random_length == 2) {random = `${status1}${status2}` } 
            else if (random_length == 3) {random = `${status1}${status2}${status3}` } 
            else if (random_length == 4) {random = `${status1}${status2}${status3}${dom4}` }
         
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try 
            {
                  try { var anu1 = await Void.fetchStatus(anu[0].jid); } 
                  catch { var anu1 = '401' ; }
                  if (anu1 == '401' || anu1.status.length == 0) { nobio += `wa.me/${anu[0].jid.split("@")[0]}\n` ; } 
                  else {  text += `*•𝙽𝚄𝙼𝙱𝙴𝚁•* wa.me/${anu[0].jid.split("@")[0]}\n*•𝙱𝙸𝙾•* ${anu1.status}\n*•𝙻𝙰𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴•* ${moment(anu1.setAt).tz('Asia/karachi').format('HH:mm:ss DD/MM/YYYY')}\n\n` ;   }
            } catch { nowhatsapp += `${number0}${i}${number1}\n`; }
        }
        return await citel.reply(`${text}${nobio}${nowhatsapp}*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`)

    }
)


Module_Exports({
        kingcmd: "nowa",
        kingclass: "search",
        infocmd: "Searches in given rage about given number.",
        use: '9112345678xx',
        kingpath: __filename,
    },
    async(Void, citel, text) => {
if(!text) return await citel.reply(`*_Give Me Number without + sign_*\nEx: ${prefix}nowa 9234663191xx`)
const inputNumber = text.split(" ")[0]
if (!inputNumber.includes('x')) return citel.reply(`*You did not add x*\nEx: ${prefix}nowa 92346631xxxx`)
citel.reply(`*Searching for WhatsApp account in the given range...*`);
function countInstances(string, word) { return string.split(word).length - 1; }
const number0 = inputNumber.split('x')[0];
const number1 = inputNumber.split('x').slice(-1)[0] || '';
const randomLength = countInstances(inputNumber, 'x');
const randomxx = [10, 100, 1000][randomLength - 1] || 0;
let nobio = `\n*『Accounts With No Bio』* \n`;
 let nobios='';
let nowhatsapp = `*『 Numbers With No WhatsApp』* \n\n`;
for (let i = 0; i < randomxx; i++) 
{
    const nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const status = nu.slice(0, randomLength).map(() => nu[Math.floor(Math.random() * nu.length)]).join('');
    const random = `${status}${nu[Math.floor(Math.random() * nu.length)]}`.slice(0, randomLength);
    const anu = await Void.onWhatsApp(`${number0}${i}${number1}`);
    const anuu = anu.length !== 0 ? anu : false;
    try 
    {
         const anu1 = await Void.fetchStatus(anu[0].jid);
         if (anu1 === '401' || anu1.status.length === 0) {  nobios += `wa.me/${anu[0].jid.split("@")[0]}\n`; } 
    } catch { nowhatsapp += `${number0}${i}${number1}\n`;  }
}
if(!nobios){ nobio = ''; } else {nobio += nobios+'\n' ;}
return await citel.reply(`${nobio}${nowhatsapp}*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`);
  
})

// These Search Commands are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved