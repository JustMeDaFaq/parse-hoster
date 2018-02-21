module.exports.openload = openload;
module.exports.vivo = vivo;
module.exports.streammango = streammango;
module.exports.vidoza = vidoza;
module.exports.flashx = flashx;
module.exports.streamcloud = streamcloud;
module.exports.flashx = flashx;

const puppeteer = require('puppeteer');
var atob = require('atob');




function flashx (link) {
  return new Promise(
    function (resolve, reject) {

                (async () => {
                  const browser = await puppeteer.launch({headless:false});
                  const page = await browser.newPage();
                  await page.goto(link);
                  let res = await page.evaluate(() => document.getElementById("btn_download").name);//this.document.body.innerHTML);//this.document.body.innerHTM;
                  setTimeout(async function() {
                
                    page.evaluate(() => document.getElementById("btn_download").click());
                    await page.waitForNavigation({waitUntil: 'load'});
                    let res = await page.evaluate(() => document.body.innerHTML);//this.document.body.innerHTML);//this.document.body.innerHTM;
                    res = res.match(/src: \'(.*)\',type/)[1]; 

                    resolve(res); 
                    await browser.close();
                  }, 5000);  
                
      
                  
                })()


              // fulfilled
       } /*else {
                var reason = new Error('mom is not happy');
                reject(reason); // reject
            }
            */
        
    );
};

function openload (link) {
  return new Promise(
    function (resolve, reject) {

                (async () => {
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  await page.goto(link);
                  let bodyHTML = await page.evaluate(() => document.getElementById("streamurj").textContent);//this.document.body.innerHTML);//this.document.body.innerHTM;
                  resolve('http://openload.co/stream/'+bodyHTML); 
                  await browser.close();
                  
                })()


              // fulfilled
       } /*else {
                var reason = new Error('mom is not happy');
                reject(reason); // reject
            }
            */
        
    );
};
function streamcloud (link) {
  return new Promise(
    function (resolve, reject) {

                (async () => {
                  const browser = await puppeteer.launch({headless: false});
                  const page = await browser.newPage();
                  await page.goto(link);
                  let res = await page.evaluate(() => document.querySelector("div > form > input").value="download2");
                   res = await page.evaluate(() => document.body.innerHTML=document.body.innerHTML.replace("download1","download2"));
                  //this.document.body.innerHTML);//this.document.body.innerHTM;
                
                
                  setTimeout(async function() {
                
                    page.evaluate(() => document.getElementById("btn_download").click());
                    await page.waitForNavigation({waitUntil: 'load'});
                    let res = await page.evaluate(() => document.body.innerHTML);//this.document.body.innerHTML);//this.document.body.innerHTM;
                    res = res.match(/file: \"(.*)\"/)[1]; 

                    resolve(res); 
                    await browser.close();
                  }, 10000);


                 
                  
                })()


              // fulfilled
       } /*else {
                var reason = new Error('mom is not happy');
                reject(reason); // reject
            }
            */
        
    );
};

function streammango (link) {
  return new Promise(
    function (resolve, reject) {

                (async () => {
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  await page.goto(link);
                  let res = await page.evaluate(() => document.getElementById("mgvideo_html5_api").src);//this.document.body.innerHTML);//this.document.body.innerHTM;
                
                  resolve(res); 
                  await browser.close();
                  
                })()


              // fulfilled
       } /*else {
                var reason = new Error('mom is not happy');
                reject(reason); // reject
            }
            */
        
    );
};


function vidoza (link) {
  return new Promise(
    function (resolve, reject) {

                (async () => {
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  await page.goto(link);
                  let bodyHTML = await page.evaluate(() => document.body.innerHTML);//this.document.body.innerHTML);//this.document.body.innerHTM;
                  var res = bodyHTML.match(/file:"(.*)",label/)[1]; 
                  console.log(res)
                  resolve(res); 
                  await browser.close();
                  
                })()


              // fulfilled
       } /*else {
                var reason = new Error('mom is not happy');
                reject(reason); // reject
            }
            */
        
    );
};
function vivo (link) {
  return new Promise(
    function (resolve, reject) {

                (async () => {
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  await page.goto(link);
                  let bodyHTML = await page.evaluate(() => document.body.innerHTML);//this.document.body.innerHTML);//this.document.body.innerHTM;
                  var res = bodyHTML.match(/ializeStream \(\'(.*)\'\)/); 
                  res = atob(res[1]); 
                  res = res.match(/\"(.*)\"\,\"/);  
                  res=res[1]; res = res.replace(new RegExp("\\\\", 'g'), ""); 
                  console.log(res)
                  resolve(res); 
                  await browser.close();
                  
                })()


              // fulfilled
       } /*else {
                var reason = new Error('mom is not happy');
                reject(reason); // reject
            }
            */
        
    );
};