const TelegramBot = require('node-telegram-bot-api');
const token = '1299171646:AAHuRE0_g5AmF6zZ00UJ-GZFNFTjoS0Z5jI';
const bot = new TelegramBot(token, { polling: true });
const drugsDescription = require('./drugs.json');
const api = require('./api');
const updateRate = 3000;

async function GetReceipt(receiptId, amount) {
  let requestOptions = {
    method: 'GET',
    hostname: 'api.easypay.ua',
    path: '/api/payment/getReceipt',
    headers: {
      Accept: 'text/html'
    },
    params: {
      receiptId,
      amount
    }
  };

  var response = api.request(requestOptions);
  response.then(res=>{console.log(res);});

  return response;
}

const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Киев', callback_data: '1', options: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
        [{ text: 'Жовтневый', callback_data: 'Киев_Жовтневый'}],
        [{ text: 'Ленинградский', callback_data: 'Киев_Ленинградский'}],
        [{ text: 'Минский', callback_data: 'Киев_Жовтневый'}],
        [{ text: 'Московский', callback_data: 'Киев_Московский'}],
        [{ text: 'Подольский', callback_data: 'Киев_Подольский'}],
        [{ text: 'Печерский', callback_data: 'Киев_Печерский'}],
        [{ text: 'Радянский', callback_data: 'Киев_Радянский'}],
        [{ text: 'Старокиевский', callback_data: 'Киев_Старокиевский'}],
        [{ text: 'Шевченковский', callback_data: 'Киев_Шевченковский'}],
        [{ text: 'Ватутинский', callback_data: 'Киев_Ватутинский'}],
        [{ text: 'Дарницкий', callback_data: 'Киев_Дарницкий'}],
        [{ text: 'Днепровский', callback_data: 'Киев_Днепровский'}],
        [{ text: '⚙️ Меню', callback_data: 'GO_BACK_MENU'}],
      ] })}}],
      [{ text: 'Львів', callback_data: '2', options: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
        [{ text: 'Софіївка', callback_data: 'Софіївка'}],
        [{ text: 'Вулька', callback_data: 'Львів_Вулька'}],
        [{ text: 'Снопків', callback_data: 'Львів_Снопків'}],
        [{ text: 'Цитадель', callback_data: 'Львів_Цитадель'}],
        [{ text: 'Новий Львів', callback_data: 'Львів_Новий_Львів'}],
        [{ text: 'Левандівка', callback_data: 'Львів_Левандівка'}],
        [{ text: 'Клепарів', callback_data: 'Львів_Клепарів'}],
        [{ text: 'Підзамче', callback_data: 'Львів_Підзамче'}],
        [{ text: 'Старий Ринок', callback_data: 'Львів_Старий_Ринок'}],
        [{ text: 'Погулянка', callback_data: 'Львів_Погулянка'}],
        [{ text: 'Личаків', callback_data: 'Львів_Личаків'}],
        [{ text: 'Майорівка', callback_data: 'Львів_Майорівка'}],
        [{ text: 'Майорівка', callback_data: 'Львів_Майорівка'}],
        [{ text: 'На Байках', callback_data: 'Львів_На_Байках'}],
        [{ text: 'Кастелівка', callback_data: 'Львів_Кастелівка'}],
        [{ text: 'Богданівка', callback_data: 'Львів_Богданівка'}],
        [{ text: '⚙️ Меню', callback_data: 'GO_BACK_MENU'}],
      ] })}}],
      [{ text: 'Вінниця', callback_data: '3', options: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
        [{ text: 'Царина', callback_data: 'Вінниця_Царина'}],
        [{ text: 'Старе місто', callback_data: 'Вінниця_Старе_місто'}],
        [{ text: 'Замостяний автовокзал', callback_data: 'Вінниця_Замостяний_автовокзал'}],
        [{ text: 'Центральний автовокзал', callback_data: 'Вінниця_Центральний_автовокзал'}],
        [{ text: 'Центр', callback_data: 'Вінниця_Центр'}],
        [{ text: 'Маяк', callback_data: 'Вінниця_Маяк'}],
        [{ text: 'ВНТУ', callback_data: 'Вінниця_ВНТУ'}],
        [{ text: '⚙️ Меню', callback_data: 'GO_BACK_MENU'}],
      ] })}}],
      [{ text: 'Днепр', callback_data: '4', options: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
        [{ text: 'Амур-Нижнеднепровский', callback_data: 'Днепр_Амур-Нижнеднепровский'}],
        [{ text: 'Шевченковский', callback_data: 'Днепр_Шевченковский'}],
        [{ text: 'Соборный', callback_data: 'Днепр_Соборный'}],
        [{ text: 'Индустриальный', callback_data: 'Днепр_Индустриальный'}],
        [{ text: 'Центральный', callback_data: 'Днепр_Центральный'}],
        [{ text: 'Чечеловский', callback_data: 'Днепр_Чечеловский'}],
        [{ text: 'Новокодацкий', callback_data: 'Днепр_Новокодацкий'}],
        [{ text: 'Самарский', callback_data: 'Днепр_Самарский'}],
        [{ text: '⚙️ Меню', callback_data: 'GO_BACK_MENU'}],
      ] })}}],
      [{ text: '💵 Пополнить баланс 💵', callback_data: '5' }],
      [{ text: '👤 Профиль / Счёт 💰', callback_data: '6' }],
    ]
  })
};

const drugsData = [
  'BLUEBERRY_2G',
  'BLUEBERRY_5G',
  'АМРНЕТAMINE_SULFATE_05G',
  'АМРНЕТAMINE_SULFATE_1G',
  'АМРНЕТAMINE_SULFATE_2G',
  'АМРНЕТAMINE_SULFATE_5G',
  'PSYLOСУВЕ_3G',
  'LSD_220UG',
  'ORANGE_TESLA_300MG',
  'MEPHEDRONE_05G',
  'GO_BACK_REGION',
 ];

const drugsOptions = [
      [{ text: '❌ BLUEBERRY 2G ❌', callback_data: drugsData[0]}],
  [{ text: '❌ BLUEBERRY 5G❌', callback_data: drugsData[1]}],
  [{ text: '❄️ АМРНЕТAMINE SULFATE 0.5G ❄️', callback_data: drugsData[2]}],
  [{ text: '❄️ АМРНЕТAMINE SULFATE 1G ❄️', callback_data: drugsData[3]}],
  [{ text: '❄️ АМРНЕТAMINE SULFATE 2G ❄️', callback_data: drugsData[4]}],
  [{ text: '❄️ АМРНЕТAMINE SULFATE 5G ❄️', callback_data: drugsData[5]}],
  [{ text: '🔮 PSYLOСУВЕ 3G 🔮', callback_data: drugsData[6]}],
  [{ text: '🌎 LSD 220UG 🌍', callback_data: drugsData[7]}],
  [{ text: '🍊 ORANGE TESLA 300MG 🍊', callback_data: drugsData[8]}],
  [{ text: '💋 MEPHEDRONE 0.5G 💋', callback_data: drugsData[9]}],
];

var selectedCityNumber = '';
var selectedRegion = '';

function getDrugsOptions() {
  let tempDrugsOptions = [];
  drugsOptions.map((drug, idx)=>{
    if(selectedRegion.length % idx != 0 && selectedRegion.length % idx != 4)
    tempDrugsOptions.push(drug);
  });

  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [...tempDrugsOptions,
        [{ text: '⬅️ Назад', callback_data: 'GO_BACK_REGION'}],
      ]
    })
  };
};

const goBackSeparated = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '⬅️ Назад', callback_data: 'GO_BACK_DRUGS_LIST'}],
      [{ text: '💵 Пополнить баланс 💵', callback_data: '5' }],
      [{ text: '👤 Профиль / Счёт 💰', callback_data: '6' }],
    ] })}

const goBackBuySeparated=  {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '💸 Купить', callback_data: 'BY_DRUG'}],
      [{ text: '⬅️ Назад', callback_data: 'GO_BACK_DRUGS_LIST'}],
] })}

const goBackMenuSeparated =  {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '⬅️ Назад', callback_data: 'GO_BACK_MENU'}],
] })}

bot.on('callback_query', function(msg) {
  var answer = msg.data;
  if (answer == 'GO_BACK_MENU') {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.message.chat.id, '❄️ Виберите город ❄️', options);
  }
  if (answer == '1' || answer == '2' || answer == '3' || answer == '4') {
    selectedCityNumber = answer;
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.message.chat.id, '🖤 Виберите район 🖤', JSON.parse(options.reply_markup).inline_keyboard[answer-1][0].options);
  } else if (answer == '5') {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.from.id, "Пришло время приступить к оплате\n\n⚜️⚜️⚜️⚜️⚜️\nВаш личный EasyPay счёт - 43373973\n⚜️⚜️⚜️⚜️⚜️\n️\n📛📛📛📛📛️\n️В данный момент Drug STFF поддерживает оплату только через EasyPay, для возможности возврата денег и полной анонимности покупателя\n📛📛📛📛📛\n\nℹ️ℹ️ℹ️ℹ️ℹ️️\n️Для пополнения счёта Drug STFF account, вам нужно пополнить ваш личный EasyPay счёт на опредилённую сумму, после этого, для верификации транзакции, вам нужно ручками ✍️ написать боту ИД операции и суму пополнения (сразу после этого сообщения)\nℹ️ℹ️ℹ️ℹ️ℹ️\n\nПример ввода данных:\n9876543210 250\n\n''ИД операции'' и ''сумa''\n\nСохраняйте ваш чек к моменту получения товара.\nВ случае нежелания пополнить счёт, нажмите кнопку ''Отменить''. Если возникли трудности с оплатой, пишите - @drug_stuf 🔥", goBackMenuSeparated);
  } else if (answer == '6') {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.from.id,
        " 👤 Профиль "+ msg.from.id + "\n" +
        " 💷 Сума на счету 💷 0 UAH\n" +
        " 👏 Всего покупок: 0\n" +
        " 💥 Рейтинг  (0)(0%)\n" +
        " 💸 Пополнения 0 UAH", goBackMenuSeparated);
  } else if(answer == 'GO_BACK_REGION') {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.message.chat.id, '🖤 Виберите район 🖤', JSON.parse(options.reply_markup).inline_keyboard[selectedCityNumber-1][0].options);
  } else if(answer == 'BY_DRUG') {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.message.chat.id, "Для этой покупки у вас недостаточно средств. 😩 Сначала нужно пополнить счёт 😈💰", goBackSeparated);
  }
   else if(drugsData.includes(answer)) {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.message.chat.id, drugsDescription[answer], goBackBuySeparated);
  } else if(answer !== 'GO_BACK_MENU') {
    selectedRegion = answer;
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
    bot.sendMessage(msg.message.chat.id, '😈 Виберите товар 😈', getDrugsOptions());
  }
});

bot.onText(/\/start/, function(msg, match) {
  bot.sendMessage(msg.chat.id, 'Привет, 🔥 ' + msg.from.first_name + ' 🔥 \nРады видеть тебя у нас!\nВ случае возникновения проблем тебе поможет - @drug_stuf');
  bot.sendMessage(msg.chat.id, '❄️ Виберите город ❄️', options);
});
bot.onText(/(\d{9,10}) (\d{1,10})/, async function(msg, match) {
  const receiptId = match[1];
  const amount = match[2];
  bot.sendMessage(msg.chat.id, 'Подождите, идёт проверка оплаты... 💰🏃‍♂️    🚓');
  setTimeout(async () => {
    try {
        bot.sendMessage(msg.chat.id, 'Проверка завершилась 💰. К сожалению, вы ввели пробную или неверную транзакцию (ее не существует или она не предпологает пополнение счёта Drug_STFF account)', goBackSeparated);
    } catch (error) {
      console.error('Shit', error);
    }
  }, updateRate);

  // bot.sendMessage(msg.chat.id, 'Привет, 🔥 ' + msg.from.first_name + ' 🔥 \nРады видеть тебя у нас!\nВ случае возникновения проблем тебе поможет - @drug_stuf');
  // bot.sendMessage(msg.chat.id, '❄️ Виберите город ❄️', options);
});
bot.onText(/\/help/, function(msg, match) {
  bot.sendMessage(msg.chat.id, 'Привет, 🔥 ' + msg.from.first_name + ' 🔥 \nРады видеть тебя у нас!\nВ случае возникновения проблем тебе поможет - @drug_stuf');
  bot.sendMessage(msg.chat.id, '❄️ Виберите город ❄️', options);
});
bot.on('document', msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    'What are u doing? Plese stop it or I call the POLICE!!!'
  );
});
bot.on('audio', msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    'What are u doing? Plese stop it or I call the POLICE!!!'
  );
});
bot.on('photo', msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    'What are u doing? Plese stop it or I call the POLICE!!!'
  );
});
