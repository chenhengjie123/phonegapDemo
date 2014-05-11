/*Using node.js*/

var express = require('express');
var app = express();
var router = express.Router();
app.use('/api/1.1/cmd', router);

/*
var isAuthentcated = require('../auth');
*/

/* GET home page. */
router.get('/', function(req, res) {
  /*if (!isAuthentcated(req) )
   {
     res.statusCode = 404;
     res.send("You have NOT logined");
     return;
   }*/


  var cmd = req.query.cmd;
  console.log(cmd);
  if (cmd==null)
    {
      res.statusCode = 400;
      res.send('You have NOT pass the command through the query string');
      return;
    }
  commands = cmd.split(" ")
  if (commands[0]=='LIST_ZONE')
  {
    res.statusCode = 200;
    res.send("{\
               \"status\":\"2\",\
               \"isSuccess\":\"0\",\
               \"ZONE\":\
                   [\
                     {\
                       \"NAME\":\"A1\"\
                     },\
                     {\
                       \"NAME\":\"A2\"\
                     }\
                   ]\
               }\
    ");
    /*res.send('2|0|<ZONE><NAME>A1</NAME></ZONE><ZONE><NAME>A2</NAME></ZONE>');*/
    return;
  }
  else if (commands[0]=="list_device")
  {
    res.statusCode = 200;
    res.send("{\
               \"status\":\"2\",\
               \"isSuccess\":\"0\",\
               \"DEVICE\":\
               [\
                   {\
                     \"BE\":\"localbe\",\
                     \"BUS\":\"/dev/ttyUSB0\",\
                     \"DEVID\":\"00124B00033DB41C21\",\
                     \"NAME\":\"localbe_/dev/ttyUSB0_detector-a1\",\
                     \"STATUS\":\"1\"\
                   },\
                   {\
                     \"BE\":\"localbe\",\
                     \"BUS\":\"/dev/ttyUSB0\",\
                     \"DEVID\":\"00124B00033DB0DE21\",\
                     \"NAME\":\"localbe_/dev/ttyUSB0_detector-a2\",\
                     \"STATUS\":\"1\"\
                   },\
                   {\
                     \"BE\":\"localbe\",\
                     \"BUS\":\"/dev/ttyUSB0\",\
                     \"DEVID\":\"00124B00026FD08021\",\
                     \"NAME\":\"localbe_/dev/ttyUSB0_detector-b1\",\
                     \"STATUS\":\"1\"\
                   }\
               ]\
             }");
    /*res.send("2|0| \
      <DEVICE> \
        <BE>localbe</BE> \
        <BUS>/dev/ttyUSB0</BUS> \
        <DEVID>00124B00033DB41C21</DEVID> \
        <NAME>localbe_/dev/ttyUSB0_detector-a1</NAME> \
        <STATUS>1</STATUS> \
      </DEVICE> \
      <DEVICE> \
        <BE>localbe</BE> \
        <BUS>/dev/ttyUSB0</BUS> \
        <DEVID>00124B00033DB0DE21</DEVID> \
        <NAME>localbe_/dev/ttyUSB0_detector-a2</NAME> \
        <STATUS>1</STATUS> \
      </DEVICE> \
      <DEVICE> \
        <BE>localbe</BE> \
        <BUS>/dev/ttyUSB0</BUS> \
        <DEVID>00124B00026FD08021</DEVID> \
        <NAME>localbe_/dev/ttyUSB0_detector-b1</NAME>\
        <STATUS>1</STATUS> \
      </DEVICE>");
      */

  }
  else
  {
    res.send(cmd);
  }


});

module.exports = router;
app.use('/foo', router);
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
