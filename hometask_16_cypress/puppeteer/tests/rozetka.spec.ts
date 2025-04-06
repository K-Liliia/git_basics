import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Puppeteer rozetka tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1200, height: 800}});
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('Guest user should see an empty cart by default', async () => {
        await page.goto('https://rozetka.com.ua/', { waitUntil: 'domcontentloaded' });
        const cardButton = '.header-actions .header-cart__button';
        await page.waitForSelector(cardButton);
        await page.locator(cardButton).click();
        await page.locator('rz-modal-layout.modal-layout').wait();
    });

    it('Guest user can search for a product and add it to cart', async () => {
        const productsList = 'rz-product-tile.tile';
        await page.goto('https://rozetka.com.ua/', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('.header .header__logo img');
        await page.type('.search-form__input-wrapper .search-form__input', 'iPhone 16');
        await page.locator('.search-form .search-form__submit').click();
        await page.locator('rz-category-goods').wait();
        const elements = (await page.$$(productsList)).length;
        elements == 48 ? console.log('There are exactly 48 elements on the page') : console.log('Amount of iphone 16 was changed on the page');

        const items = await page.$$(productsList);
        for (const item of items) {
            const text = await item.evaluate((el) => el.textContent);
            expect(text).to.include('iPhone 16');
        }
        const addToCartBtns = await page.$$('rz-buy-button.toOrder');
        await addToCartBtns[3].click();
        await page.locator('.header-actions__item--cart .badge').wait();
        await page.locator('li .header-cart__button').click();
        await page.locator('rz-modal-layout.modal-layout').wait();
        await page.locator('.cart-list__item .cart-product').wait();
        await page.locator('.modal-layout .button--icon').click();
    });
});
