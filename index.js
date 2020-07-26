var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1654386352',
  channelSecret: '6ac14b7d01efe33aaeebc6616d0f302e',
  channelAccessToken: 't87Sc+MRB8djH9XwZWUg4NYPvXwMgshaFTlJCR1Ml4skopfHY1DzYJhKckRS/4K0EdOYhm8olbpQy6aT3FoTt2GR7hcjitPrGpqWkTtLLo9bhUNjLtS7tKLwlS4CAnYsNr7VXO+pfF75VSVMhm+lUgdB04t89/1O/w1cDnyilFU='
});

//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
  //收到文字訊息時，直接把收到的訊息傳回去
    replystr=msg.match('楊董')
    if (replystr == '楊董') {replystr ='楊董是大帥哥'}
    else {replystr = 'Jerry say =>>>>222 '+msg}
    
    event.reply(replystr).then(function(data) {
      // 傳送訊息成功時，可在此寫程式碼 
      console.log(msg);
    }).catch(function(error) {
      // 傳送訊息失敗時，可在此寫程式碼 
      console.log('錯誤產生，錯誤碼：'+error);
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是', port);
});
