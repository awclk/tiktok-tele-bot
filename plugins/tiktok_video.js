const sleep = require('../utils/sleep');

async function tiktok_video(bot, msg, data) {
  const From = msg.chat.id;
  const { title, title_audio, thumbnail, video, audio } = data;

  const caption = `Title: ${title}\nAudio: ${title_audio}`;

  try {
    await bot.sendVideo(From, video[0], {
      caption,
      reply_markup: {
        inline_keyboard: [[{ text: '🎥 URL Video', url: video[0] }]]
      }
    });
    await sleep(3000);

    await bot.sendAudio(From, audio[0], {
      caption: `Audio: ${title_audio}`,
      reply_markup: {
        inline_keyboard: [[{ text: '🎵 URL Audio', url: audio[0] }]]
      }
    });
    await sleep(3000);

    await bot.sendMessage(From, 'Powered by @dev_theeekshana', {
      reply_markup: {
        inline_keyboard: [[{ text: '👨‍💻 Support', url: 'https://t.me/wtffry' }]]
      }
    });
  } catch (error) {
    await bot.sendMessage(From, 'Sorry, an error occurred while sending the TikTok video.');
    console.error(`[ ERROR ] ${From}: ${error.message}`);
  }
}

module.exports = tiktok_video;
