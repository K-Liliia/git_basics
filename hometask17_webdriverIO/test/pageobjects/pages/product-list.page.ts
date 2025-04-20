import { $, $$, expect } from '@wdio/globals';
import { ChainablePromiseArray, ChainablePromiseElement } from 'webdriverio';
import { CartModal } from '../modals/cart.modal';

export class ProductListPage {

    private get productListSection(): ChainablePromiseElement {
        return $('rz-category-goods');
    }

    private get productTitle(): ChainablePromiseArray<WebdriverIO.Element> {
        return $$('rz-product-tile.tile');
    }

    private get addToCartButton(): ChainablePromiseArray<WebdriverIO.Element> {
        return $$('[data-testid="category_goods"] .buy-button');
    }

    public async verifyPLPisOpened(): Promise<void> {
        await expect(this.productListSection).toBeDisplayed();
    }

    public async checkSearchResultItemsAmount(productsAmount: number): Promise<void> {
        const items = await this.productTitle;
        if (items.length !== productsAmount) {
            throw new Error(`Expected ${productsAmount} products, but found ${items.length}`);
        }
    }

    public async verifyEachProductHasTitle(title: string): Promise<void> {
        const productList = await this.productTitle;

        for (const product of productList) {
            const productText = await product.getText();
            expect(productText).toContain(title);
        }
    }

    public async addProductToTheCart(index: number): Promise<void> {
        const products = await this.addToCartButton;
        console.log(`Found ${products.length} 'Add to Cart' buttons`);

        await products[index].click();
    }

    public async addProductAndOpenCart(index: number): Promise<CartModal> {
        const products = await this.addToCartButton;
        console.log(`Found ${products.length} 'Add to Cart' buttons`);

        await products[index].doubleClick();
        return new CartModal;
    }

}
