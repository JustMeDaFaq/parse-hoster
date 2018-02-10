var express = require('express');
var app = express();
const puppeteer = require('puppeteer');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/pup/', function (req,res) {

  var ress = this.res;
  testPup("dasdsad").then(
    // Loggen der Nachricht und des Wertes
    function(val) {
      console.log(val);
     // return val;
      res.send(val);
  });
  //testPup()
      
});

     function testPup(redd){


            //var p1 = 
            return new Promise(
              function (resolve, reject) {
                  if (true) {
                      var phone = {
                          brand: 'Samsung',
                          color: 'black'
                      };
                   
                      (async () => {
                        const browser = await puppeteer.launch();
                        const page = await browser.newPage();
                        await page.goto('https://openload.co/embed/dOBRtRAGe3c/The.Bold.Type.S01E01.Alles.auf.Anfang.German.DD%2B51.720p.AmazonHD.x264-TVS.mkv');
                        let bodyHTML = await page.evaluate(() => document.getElementById("streamurj").textContent);//this.document.body.innerHTML);//this.document.body.innerHTM;
                        resolve(bodyHTML); 
                        await browser.close();
                        
                      })()


                     // fulfilled
                  } else {
                      var reason = new Error('mom is not happy');
                      reject(reason); // reject
                  }
          
              }
          );

       
    }


app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});
