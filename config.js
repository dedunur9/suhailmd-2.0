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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_29_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIng3Q29DSVBCQVd3c3p0d0NCVys0RTFLMlVQWjN3UzljczA0bExySXlIbDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm8wdlBqaTRGUmZtalpuNXhUbTI4T1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2NiNWQwZTAtOGFlNS00ODEyLTkwZTYtNDc0YzdlNGE3ZWU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE0MyxcbiAgICAgIDI1MCxcbiAgICAgIDYyLFxuICAgICAgMTQ2LFxuICAgICAgNzAsXG4gICAgICAyMzEsXG4gICAgICAxNTAsXG4gICAgICAxODQsXG4gICAgICA1OSxcbiAgICAgIDcyLFxuICAgICAgMjUxLFxuICAgICAgMTgxLFxuICAgICAgMTM5LFxuICAgICAgMTU0LFxuICAgICAgMjE2LFxuICAgICAgMTI3LFxuICAgICAgMjIwLFxuICAgICAgMTY3LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDIyLFxuICAgICAgMTg0LFxuICAgICAgMTYzLFxuICAgICAgMjI5LFxuICAgICAgNyxcbiAgICAgIDQ3LFxuICAgICAgMTMyLFxuICAgICAgNTMsXG4gICAgICAxODQsXG4gICAgICAyMixcbiAgICAgIDQ5LFxuICAgICAgNzAsXG4gICAgICAzNyxcbiAgICAgIDg2LFxuICAgICAgOTEsXG4gICAgICAyMSxcbiAgICAgIDIzNixcbiAgICAgIDEyNixcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMNTQ1SkdLM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjEyMDc1NTk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZm/XFxu8J2ZvlxcbvCdmoZcXG7wnZqBXFxu8J2ZtFxcbvCdmbNcXG5cXG5cXG7wnZmxXFxu8J2aiFxcblxcblxcbvCdmoZcXG7wnZm+XFxu8J2ZvVxcbvCdmbRcXG7wnZm0XFxuXFxuXFxuXFxuXFxuXFxuXFxu8J2agVxcbvCdmoRcXG7wnZm6XFxu8J2aglxcbvCdmbBcXG7wnZm9XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu8J2agfCdmbTwnZmzIPCdmoLwnZmw8J2ZvPCdmoTwnZqB8J2ZsPCdmbgg8J2ZufCdmbTwnZm/8J2ZtE5cIixcbiAgICBcImxpZFwiOiBcIjI2NjUxNjEyNTcxMjQ5MDoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeTY5eG9Rc3M2anV3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlpUUNvcHRGd1ZzR1YrcFduTHhTcWlxWHRMUHJpN3AwT2VCTERPdVhURFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRnlWRjB6dUhidWdSWC9JSTJka1YrZzFWb20zSU4zRFUyQ0xlKzU1RU1nQUNFc1FDSGJ6bHRQQlV1NW9OazdPNVRNNE5yVmdBQUdxSmJuV2tPVWRrQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3h4enorTjNSbjlocEdlbVFMVVFUWDIzOFVneE85ODVJcGp5czBYYVdOYUhFTlhTN21BTEpFMUxhUzNBd3B5Tk96SWhaZnhmcnlZbFdUS1BTd1BwaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjEyMDc1NTk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDkyODE4M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
