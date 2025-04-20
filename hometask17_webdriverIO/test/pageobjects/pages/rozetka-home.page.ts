import { $, $$, browser, expect } from '@wdio/globals';
import { ChainablePromiseArray, ChainablePromiseElement } from 'webdriverio';
import { CartModal } from '../modals/cart.modal';
import { ProductListPage } from './product-list.page';
import { NavigationCategoryPage } from './navigation-category.page';

export class RozetkaHomePage {

    private get homePageLogo(): ChainablePromiseElement {
        return $('.header .header__logo img');
    }

    private get cartButton(): ChainablePromiseElement {
        return $('.header-actions .header-cart__button');
    }

    private get searchField(): ChainablePromiseElement {
        return $('.search-form__input-wrapper .search-form__input');
    }

    private get searchButton(): ChainablePromiseElement {
        return $('.search-form .search-form__submit');
    }

    private get cartNumberIon(): ChainablePromiseElement {
        return $('.header-actions__item--cart .badge');
    }

    private get sideMenuCategories(): ChainablePromiseArray<WebdriverIO.Element> {
        return $$('[data-testid="fat_menu_category_link"]');
    }

    public async goto(): Promise<void> {
        await browser.url('https://rozetka.com.ua');
        await this.homePageLogo.waitForStable();
    }

    public async openCartModal(): Promise<CartModal> {
        await this.cartButton.click();
        return new CartModal;
    }

    public async searchProduct(text: string): Promise<ProductListPage> {
        await this.searchField.click();
        await this.searchField.setValue(text);
        await this.searchButton.click();
        return new ProductListPage;
    }

    public async verifyCartIconIsShown(): Promise<void> {
        await this.cartNumberIon.waitForStable();
        await expect(this.cartNumberIon).toBeDisplayed();
    }

    public async openMenuCategory(index: number): Promise<NavigationCategoryPage> {
        await this.sideMenuCategories[index].click();
        return new NavigationCategoryPage;
    }

    public async refreshPage(): Promise<void> {
        await browser.refresh();
    }
}


