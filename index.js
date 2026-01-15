// const TelegramBot = require('node-telegram-bot-api');

// // ========= الإعدادات =========
// const BOT_TOKEN = '8588055575:AAFfT0ZhWvNW3nFyqmzjwrkEzAxQ49_3n08';

// const SOURCE_CHAT_ID = -1001111111111; // الغرفة الأولى
// const TARGET_CHAT_ID = -1002222222222; // الغرفة الثانية
// const ALLOWED_USER_ID = 123456789;     // اليوزر المسموح

// // ========= تشغيل البوت =========
// const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// console.log('Bot is running...');

// // ========= الاستماع للرسائل =========
// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id;
//     const userId = msg.from?.id;
//         console.log('======================');
//     console.log('Chat ID:', msg.chat.id);
//     console.log('Chat Title:', msg.chat.title);
//     console.log('User ID:', msg.from.id);
//     console.log('Username:', msg.from.username);
//     console.log('======================');

//     // تحقق من الغرفة
//     if (chatId !== SOURCE_CHAT_ID) return;

//     // تحقق من اليوزر
//     if (userId !== ALLOWED_USER_ID) return;

//     // تحقق أن الرسالة نصية
//     if (!msg.text) return;

//     try {
//         await bot.sendMessage(TARGET_CHAT_ID, msg.text);
//     } catch (err) {
//         console.error('Error forwarding message:', err);
//     }
// });


// const TelegramBot = require('node-telegram-bot-api');

// const BOT_TOKEN = '8588055575:AAFfT0ZhWvNW3nFyqmzjwrkEzAxQ49_3n08';

// const SOURCE_CHANNEL_ID = -1001111111111;
// const TARGET_CHANNEL_ID = -1002222222222;

// const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// console.log('Bot is running...');

// bot.on('channel_post', async (msg) => {
//     console.log(msg);
    
//     const chatId = msg.chat.id;

//     if (chatId !== SOURCE_CHANNEL_ID) return;

//     try {
//         // 📝 نص
//         if (msg.text) {
//             await bot.sendMessage(TARGET_CHANNEL_ID, msg.text);
//         }

//         // 🎙️ Voice
//         else if (msg.voice) {
//             await bot.sendVoice(
//                 TARGET_CHANNEL_ID,
//                 msg.voice.file_id
//             );
//         }

//         // 🎵 Audio
//         else if (msg.audio) {
//             await bot.sendAudio(
//                 TARGET_CHANNEL_ID,
//                 msg.audio.file_id,
//                 { caption: msg.caption || '' }
//             );
//         }

//         // 🖼️ صورة
//         else if (msg.photo) {
//             const photo = msg.photo.at(-1);
//             await bot.sendPhoto(
//                 TARGET_CHANNEL_ID,
//                 photo.file_id,
//                 { caption: msg.caption || '' }
//             );
//         }

//         // 📎 أي ملف
//         else if (msg.document) {
//             await bot.sendDocument(
//                 TARGET_CHANNEL_ID,
//                 msg.document.file_id
//             );
//         }

//     } catch (err) {
//         console.error('Error:', err);
//     }
// });



// const TelegramBot = require('node-telegram-bot-api');

// const BOT_TOKEN = '8588055575:AAFfT0ZhWvNW3nFyqmzjwrkEzAxQ49_3n08';

// const SOURCE_CHAT_ID = -1001111111111;
// const TARGET_CHAT_ID = -1002222222222;
// const ALLOWED_USER_ID = 123456789;

// const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// console.log('Bot running...');

// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id;
//     const userId = msg.from?.id;

//     if (chatId !== SOURCE_CHAT_ID) return;
//     if (userId !== ALLOWED_USER_ID) return;

//     try {
//         // 📝 نص
//         if (msg.text) {
//             await bot.sendMessage(TARGET_CHAT_ID, msg.text);
//         }

//         // 🎙️ تسجيل صوتي (Voice)
//         else if (msg.voice) {
//             await bot.sendVoice(
//                 TARGET_CHAT_ID,
//                 msg.voice.file_id
//             );
//         }

//         // 🎵 ملف صوتي (Audio)
//         else if (msg.audio) {
//             await bot.sendAudio(
//                 TARGET_CHAT_ID,
//                 msg.audio.file_id,
//                 {
//                     caption: msg.caption || ''
//                 }
//             );
//         }

//         // 🖼️ صورة
//         else if (msg.photo) {
//             const photo = msg.photo[msg.photo.length - 1];
//             await bot.sendPhoto(
//                 TARGET_CHAT_ID,
//                 photo.file_id,
//                 { caption: msg.caption || '' }
//             );
//         }

//         // 📎 أي ملف
//         else if (msg.document) {
//             await bot.sendDocument(
//                 TARGET_CHAT_ID,
//                 msg.document.file_id
//             );
//         }

//     } catch (err) {
//         console.error('Forward error:', err);
//     }
// });


// const TelegramBot = require('node-telegram-bot-api');
// const axios = require('axios');
// const fs = require('fs');
// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('ffmpeg-static');
// const path = require('path');
// ffmpeg.setFfmpegPath(ffmpegPath);
// const BOT_TOKEN = '8588055575:AAFfT0ZhWvNW3nFyqmzjwrkEzAxQ49_3n08';

// const SOURCE_CHAT_ID = -1001111111111;
// const TARGET_CHAT_ID = -1002222222222;
// const ALLOWED_USER_ID = 123456789;

// const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// console.log('Bot running...');
 
// bot.on('channel_post', async (msg) => {
//     console.log(msg);
    
//     // const chatId = msg.chat.id;
//     // const userId = msg.from?.id;

//     // if (chatId !== SOURCE_CHAT_ID) return;    
//     // if (userId !== ALLOWED_USER_ID) return;

//     // فقط ملفات صوت
//     if (!msg.voice && !msg.audio && !msg.document) return;

//     try {
//         const file = msg.voice || msg.document || msg.audio;
//         const fileId = file.file_id;

//         // 1️⃣ رابط التحميل
//         const fileInfo = await bot.getFile(fileId);
//         const fileUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${fileInfo.file_path}`;

//         // أسماء الملفات
//         const inputPath = `./temp_${Date.now()}`;
//         const outputPath = `${inputPath}.mp3`;

//         // 2️⃣ تحميل الملف
//         const response = await axios({
//             url: fileUrl,
//             method: 'GET',
//             responseType: 'stream'
//         });

//         const writer = fs.createWriteStream(inputPath);
//         response.data.pipe(writer);

//         await new Promise(resolve => writer.on('finish', resolve));

//         // 3️⃣ تحويل إلى mp3
//         await new Promise((resolve, reject) => {
//             ffmpeg(inputPath)
//                 .toFormat('mp3')
//                 .audioBitrate(128)
//                 .on('end', resolve)
//                 .on('error', reject)
//                 .save(outputPath);
//         });

//         console.log(outputPath);
        
//         // 4️⃣ إرسال كـ Audio (ملف)
//         await bot.sendAudio(
//             TARGET_CHAT_ID,
//             outputPath,
//             {
//                 title: file.file_name || 'Audio',
//                 performer: 'Converted by Bot' 
//             }
//         );

//         // 5️⃣ تنظيف
//         fs.unlinkSync(inputPath);
//         fs.unlinkSync(outputPath);

//     } catch (err) {
//         console.error('Audio convert error:', err);
//     }
// });


const TelegramBot = require('node-telegram-bot-api');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const TOKEN = process.env.BOT_TOKEN || "8588055575:AAFfT0ZhWvNW3nFyqmzjwrkEzAxQ49_3n08";

const SOURCE_GROUP_ID = -1001111111111;
const TARGET_GROUP_ID = -1002222222222;
const ALLOWED_USER_ID = 123456789;

const bot = new TelegramBot(TOKEN, { polling: true });

/* فلترة أساسية */
function isAllowed(msg) {
  return (
    msg.chat.id === SOURCE_GROUP_ID &&
    msg.from?.id === ALLOWED_USER_ID
  );
}

/* 📝 نص */
bot.on('message', async (msg) => {
    console.log(msg);
    
  if (!isAllowed(msg)) return;

  // نص فقط
  if (msg.text) {
    await bot.sendMessage(TARGET_GROUP_ID, msg.text);
  }

  // صورة
  if (msg.photo) {
    const photoId = msg.photo[msg.photo.length - 1].file_id;
    await bot.sendPhoto(TARGET_GROUP_ID, photoId, {
      caption: msg.caption || ''
    });
  }

  // ملف صوت (audio)
  if (msg.audio) {
    handleAudio(msg.audio.file_id, msg.audio.mime_type);
  }

  // Voice (تسجيل تلغرام)
  if (msg.voice) {
    handleAudio(msg.voice.file_id, 'audio/wav');
  }
});

/* 🔊 معالجة الصوت */
async function handleAudio(fileId, mimeType) {
  try {
    const file = await bot.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${TOKEN}/${file.file_path}`;

    // إذا mp3 نبعثه مباشرة
    if (mimeType === 'audio/mpeg') {
      await bot.sendAudio(TARGET_GROUP_ID, fileId);
      return;
    }

    // غير mp3 → نحول
const inputPath = path.join(__dirname, `input_${Date.now()}.wav`);
const outputPath = path.join(__dirname, `output_${Date.now()}.mp3`);


    // تحميل
    const response = await axios({
      url: fileUrl,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(inputPath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      ffmpeg(inputPath)
        .toFormat('mp3')
        .on('end', async () => {
          await bot.sendAudio(TARGET_GROUP_ID, outputPath);
          fs.unlinkSync(inputPath);
          fs.unlinkSync(outputPath);
        })
        .on('error', console.error)
        .save(outputPath);
    });

  } catch (err) {
    console.error(err);
  }}