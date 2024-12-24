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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_43_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU2LFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhUU2FzWk1sSmloMzE2ODFnblc1S2JSNFVVSGRwTzlkb2NIc2RoZ0tmeG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk16eWJJZm1oUV82UWcxb29MUVhsbGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmRjNDMxODAtZmUzNi00YzEwLWI2ZWEtOTliMTcwZDRiOTYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMTA3LFxuICAgICAgMTAwLFxuICAgICAgMTAwLFxuICAgICAgNTAsXG4gICAgICAxNjUsXG4gICAgICA5NixcbiAgICAgIDIxNSxcbiAgICAgIDE0LFxuICAgICAgMTUxLFxuICAgICAgMTU0LFxuICAgICAgMTAsXG4gICAgICAxOTksXG4gICAgICAxNzUsXG4gICAgICAxMzcsXG4gICAgICAxMDQsXG4gICAgICAyNTQsXG4gICAgICAxNTgsXG4gICAgICAyMSxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxNTUsXG4gICAgICAxODUsXG4gICAgICAyMTcsXG4gICAgICA5NyxcbiAgICAgIDE3MSxcbiAgICAgIDY2LFxuICAgICAgMTIwLFxuICAgICAgMjEwLFxuICAgICAgMjAyLFxuICAgICAgMTA3LFxuICAgICAgMjUxLFxuICAgICAgMSxcbiAgICAgIDIyNSxcbiAgICAgIDE3MSxcbiAgICAgIDkzLFxuICAgICAgNTQsXG4gICAgICAxMCxcbiAgICAgIDE4NCxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJETUtXN1E3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjEyMDc1NTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZm/XFxu8J2ZvlxcbvCdmoZcXG7wnZqBXFxu8J2ZtFxcbvCdmbNcXG5cXG5cXG7wnZmxXFxu8J2aiFxcblxcblxcbvCdmoZcXG7wnZm+XFxu8J2ZvVxcbvCdmbRcXG7wnZm0XFxuXFxuXFxuXFxuXFxuXFxuXFxu8J2agVxcbvCdmoRcXG7wnZm6XFxu8J2aglxcbvCdmbBcXG7wnZm9XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu8J2agfCdmbTwnZmzIPCdmoLwnZmw8J2ZvPCdmoTwnZqB8J2ZsPCdmbgg8J2ZufCdmbTwnZm/8J2ZtE5cIixcbiAgICBcImxpZFwiOiBcIjI2NjUxNjEyNTcxMjQ5MDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMjY5eG9ROXZlb3V3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlpUUNvcHRGd1ZzR1YrcFduTHhTcWlxWHRMUHJpN3AwT2VCTERPdVhURFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVlpsRklhdkhyTzlXemdzUjJWVHRZNVc2Q2JoWWRnclh0enc5ejlTa0pzMXYwMTNOQ054Z0RKMTJ4QzZpMnE3NnU4VjlId3hZNkF5U2NLRXhsOGJwQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVjFlcTVxUGNwbW92WlI2MS9GZTRFaGlwVy9sOW5wM0V6Q3VLUUREYUxSaFI3K204YXF5dEkvRlg5SkgwY3BQZExRR2NFdUxsK2MzY3lDMk5rMS9ZaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjEyMDc1NTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTAxNTQxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZhUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmFSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUTFqYzUzekpoL2kwaHZka2JlekprNFh2ZjRXdnZCdGtMVkxEajhYclBlMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjQ4MzA4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MDE1NDIzNzIzXCJ9Igp9"  // PUT your SESSION_ID 


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
