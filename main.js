import {writeFileSync} from 'fs';

import puppeteer from 'puppeteer';
import {startFlow} from 'lighthouse';

(async function() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const flow = await startFlow(page);

    // Navigate with a URL
    await flow.navigate('https://example.com');

    // Interaction-initiated navigation via a callback function
    await flow.navigate(async () => {
        await page.click('a');
    });

    // Navigate with startNavigation/endNavigation
    await flow.startNavigation();
    await page.click('a');
    await flow.endNavigation();

    await browser.close();
    writeFileSync('tmp/report.html', await flow.generateReport());
})();
