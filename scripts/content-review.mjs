import { chromium } from '@playwright/test';
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:process.argv.includes('--mobile')?390:1440,height:1000}});
if(process.argv.includes('--spanish')) await page.addInitScript(()=>localStorage.setItem('language','es'));
for(const slug of ['', 'projects/krea-one','projects/ai-video-editor','projects/forge','projects/naia','projects/quality-automation']){
 await page.goto('http://localhost:4173/'+slug);await page.locator('h1').waitFor();
 console.log(JSON.stringify({route:slug||'/',headings:await page.locator('h1,h2').allTextContents(),words:(await page.locator('main').innerText()).split(/\s+/).length}));
 if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Horizontal overflow: '+slug);
 if(slug){await page.locator('.project-sections').scrollIntoViewIfNeeded();await page.screenshot({path:'test-results/review-'+slug.split('/')[1]+'.png'});}
}
await browser.close();
