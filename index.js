module.exports = openload;

function openload (link) {
  return new Promise(
    function (resolve, reject) {

                (async () => {
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  await page.goto(link);
                  let bodyHTML = await page.evaluate(() => document.getElementById("streamurj").textContent);//this.document.body.innerHTML);//this.document.body.innerHTM;
                  resolve(bodyHTML); 
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