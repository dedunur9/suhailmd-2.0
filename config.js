const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94721207559";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_33_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieTNxQy9INDRBdmNmSkNleDA0bnQ1MXBXaVpMcExTTnBFQ3orQ016bk5NWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMTIwNzU1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTBDODk3QjZBMTEwMUYxQTU4MEY2RjA3RjdBQkQwQUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1MDI1NjMwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJTX0NZYjFRUzZTa2FUam5ONnJZZWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTI3ZTI3ZTItNWExZC00YmZkLTkyMmQtZGZkNmU0ZmQzY2JjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE4NyxcbiAgICAgIDYzLFxuICAgICAgMTU2LFxuICAgICAgMTIwLFxuICAgICAgMzcsXG4gICAgICAxOTgsXG4gICAgICAxMDEsXG4gICAgICAxNDEsXG4gICAgICA3OSxcbiAgICAgIDE3OSxcbiAgICAgIDE5MCxcbiAgICAgIDE3OCxcbiAgICAgIDczLFxuICAgICAgMjE4LFxuICAgICAgMTI3LFxuICAgICAgMjI3LFxuICAgICAgNjksXG4gICAgICAxNjEsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxNSxcbiAgICAgIDE2MixcbiAgICAgIDU5LFxuICAgICAgMjEyLFxuICAgICAgMjIxLFxuICAgICAgMjQxLFxuICAgICAgMTM0LFxuICAgICAgMjAzLFxuICAgICAgMTI1LFxuICAgICAgNTEsXG4gICAgICAyNDUsXG4gICAgICAxNzYsXG4gICAgICAyMixcbiAgICAgIDUsXG4gICAgICAxOTcsXG4gICAgICA5MixcbiAgICAgIDIxMSxcbiAgICAgIDI1MCxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ3UUpUNTdRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyMTIwNzU1OToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmb9cXG7wnZm+XFxu8J2ahlxcbvCdmoFcXG7wnZm0XFxu8J2Zs1xcblxcblxcbvCdmbFcXG7wnZqIXFxuXFxuXFxu8J2ahlxcbvCdmb5cXG7wnZm9XFxu8J2ZtFxcbvCdmbRcXG5cXG5cXG5cXG5cXG5cXG5cXG7wnZqBXFxu8J2ahFxcbvCdmbpcXG7wnZqCXFxu8J2ZsFxcbvCdmb1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wnZqB8J2ZtPCdmbMg8J2agvCdmbDwnZm88J2ahPCdmoHwnZmw8J2ZuCDwnZm58J2ZtPCdmb/wnZm0TlwiLFxuICAgIFwibGlkXCI6IFwiMjY2NTE2MTI1NzEyNDkwOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k2Njl4b1ExTWVwdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieWlRQ29wdEZ3VnNHVitwV25MeFNxaXFYdExQcmk3cDBPZUJMRE91WFREVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2NTlaUHhrU3VPZ2cxQWJvaGNSOU82QW9BcTErNEcveVFvRDgrOElpTXYvalduSTg2aWNCYlFncHY1YXllWFhvdkxNQmorYnJidjA5K2NXdXhLb25Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDaTcwc3RMN3FVaXpKNFVBbDhoRTVTNENWQ2lQTERBck9FK2J4ZENzUmNWRERrSlNDcStEL1M2QnFGYk1YaFVvdlRhY1RmSWgxd1dENDU5bExnWU9BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyMTIwNzU1OToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MDI1NjIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmFTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGYVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDd0lUSXo4LzM2VVRwaXV6SWVjUHYydXBkKzhlNlVzdXdtT2pqRXZhcjhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NDgzMDg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM1MDIxODgwMjIzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Ruka",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "WhatsApp Satatus Ruka",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
