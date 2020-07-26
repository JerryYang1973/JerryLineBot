var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1654386352',
  channelSecret: '6ac14b7d01efe33aaeebc6616d0f302e',
  channelAccessToken: 't87Sc+MRB8djH9XwZWUg4NYPvXwMgshaFTlJCR1Ml4skopfHY1DzYJhKckRS/4K0EdOYhm8olbpQy6aT3FoTt2GR7hcjitPrGpqWkTtLLo9bhUNjLtS7tKLwlS4CAnYsNr7VXO+pfF75VSVMhm+lUgdB04t89/1O/w1cDnyilFU='
});

//以下的Webduino的device，請輸入自己webduino的DeviceID
//var myBoardVars={board: 'Smart', device: '這裡請輸入webduino的Device ID，前後引號不能去掉', transport: 'mqtt'};
var myBoardVars={device: '這裡請輸入webduino的Device ID，前後引號不能去掉'};

//注意：上面為連結Webduino Smart的連結語法，如果你的板子是webduino馬克一號或是Fly，請將上面的語法刪掉，並改成以下的連結語法。var myBoardVars={device: '這裡請輸入webduino的Device ID，前後引號不能去掉'};

var rgbled;
var relay;
var myBoard;

bot.on('message', function(event) {
  var myReply='';
  if (event.message.type == 'text') {
    myReply=processText(event.message.text);
   }
   
   if (event.message.type == 'sticker') {
      myReply='你太幽默了！';
   console.log('sticker');
   }
   if (event.message.type == 'image') {
      myReply='這照片好帥！';
   }
   
    
    event.reply(myReply).then(function(data) {
      // 傳送訊息成功時，可在此寫程式碼 
      console.log(msg);
    }).catch(function(error) {
      // 傳送訊息失敗時，可在此寫程式碼 
      console.log('錯誤產生，錯誤碼：'+error);
    });
  
});

function processText(myMsg){
   var myResult='';
   
   if (myMsg=='你好' || myMsg=='早安' || myMsg=='午安' || myMsg=='晚安')
      myResult=myMsg; 
   else if (myMsg=='我很帥')
      myResult='我也這麼覺得';
   else if (myMsg=='繼電器')
      myResult='5號腳位';
   else if (myMsg=='再見')
      myResult='這麼快就要離開我了！';
   else if (myMsg.match('楊董')=='楊董')
      myResult='楊董是大帥哥';      
   /*
   else if (myMsg=='led開' || myMsg=='LED開'){
      if (!deviceIsConnected())
         myResult='裝置未連接！';
      else{
         myResult='LED已打開！';
         rgbled.setColor('#FFFFFF');
      }
   }
   else if (myMsg=='led關' || myMsg=='LED關'){
      if (!deviceIsConnected())
         myResult='裝置未連接！';
      else{
         myResult='LED已關閉！';
         rgbled.setColor('#000000');
      }
   }
   else if (myMsg=='電燈開'){
      if (!deviceIsConnected())
         myResult='裝置未連接！';
      else{
         myResult='電燈已打開！';
         relay.on();
      }
   }
   else if (myMsg=='電燈關'){
      if (!deviceIsConnected())
         myResult='裝置未連接！';
      else{
         myResult='電燈已關閉！';
         relay.off();
      }
   }
   */
   else{
      myResult='';
      try{
         myResult='答案是'+math.eval(myMsg.toLowerCase()).toString();
      }catch(err){
         myResult='';
      }
      if (myResult=='')
         myResult='抱歉，我不懂這句話的意思！20200727_1';
   }
   
   return myResult;
}

/*
boardReady(myBoardVars, true, function (board) {
   myBoard=board;
   board.systemReset();
   board.samplingInterval = 50;
   rgbled = getRGBLedCathode(board, 15, 12, 13);
   relay = getRelay(board, 5);
   rgbled.setColor('#000000');
   relay.off();
});

//以下為檢查webduino是否已連線成功的函式
function deviceIsConnected(){
   if (myBoard==undefined)
      return false;
   else if (myBoard.isConnected==undefined)
      return false;
   else
      return myBoard.isConnected;
}
*/
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是', port);
});