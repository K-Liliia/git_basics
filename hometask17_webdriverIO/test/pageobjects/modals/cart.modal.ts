import { $, expect } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class CartModal {

    private get productsList(): ChainablePromiseElement {
        return $('.modal-layout .cart-list');
    }

    private get emptyCartTitle(): ChainablePromiseElement {
        return $('.modal-layout .cart-dummy__heading');
    }

    private get cartProductDetails(): ChainablePromiseElement {
        return $('.cart-list__item .cart-product');
    }

    private get cartProductPrice(): ChainablePromiseElement {
        return $('[data-testid="cost"]');
    }

    private get cartIncreaseBtn(): ChainablePromiseElement {
        return $('[data-testid="cart-counter-increment-button"]');
    }

    private get cartEditBtn(): ChainablePromiseElement {
        return $('#cartProductActions0');
    }

    private get cartDeleteBtn(): ChainablePromiseElement {
        return $('rz-trash-icon');
    }

    private get cartTotalPrice(): ChainablePromiseElement {
        return $('[data-testid="cart-receipt-sum"] .cart-receipt__sum-price');
    }

    public async verifyCartIsEmpty(): Promise<void> {
        await expect(this.productsList).not.toBeDisplayed();
    }

    public async checkEmptyCardTitle(text: string): Promise<void> {
        (await this.emptyCartTitle.getText()).includes(text);
    }

    public async verifyCartIsNotEmpty(): Promise<void> {
        await expect(this.cartProductDetails).toBeDisplayed();
    }

    public async getProductPrice(): Promise<number> {
        const productPriceText = await this.cartProductPrice.getText();
        const numericPrice = parseFloat(productPriceText.replace(/[^0-9.]/g, ''));
        console.log("Product price is: " + numericPrice);
        return numericPrice;
    }

    public async increaseProductAmount(increaseAmount: number): Promise<void> {
        let i = 0;
        await expect(this.cartIncreaseBtn).toBeDisplayed();
        while (i <= increaseAmount) {
            await this.cartIncreaseBtn.click();
            i++;
        }
        await this.cartProductPrice.waitForStable();
    }

    public async checkProductPrice(products: number, numericPrice: number): Promise<void> {
        const priceText = await this.cartTotalPrice.getText();
        const numberPrice = parseFloat(priceText.replace(/[^0-9.]/g, ''));
        console.log("Actual price " + numberPrice);
        const finalPrice = products * numericPrice;
        console.log("Expected price " + finalPrice);
        expect(numberPrice).toEqual(finalPrice);
    }

    public async removeProductFromCart(): Promise<void> {
        await this.cartEditBtn.click();
        await expect(this.cartDeleteBtn).toBeDisplayed();
        await this.cartDeleteBtn.click();
    }

}
