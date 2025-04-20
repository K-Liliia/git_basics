import { $, expect } from '@wdio/globals';
import { ProductListPage } from './product-list.page';

export class NavigationCategoryPage {

    private get pageTitle(): ChainablePromiseElement {
        return $('.content .portal__heading');
    }

    private pageSubCategory(title: string): ChainablePromiseElement {
        return $(`.tile-cats .tile-cats__item a[title="${title}"]`);
    }

    public async verifyNavigationPageIsOpened(): Promise<void> {
        await expect(this.pageTitle).toBeDisplayed();
    }

    public async checkPageTitle(title: string): Promise<void> {
        await await this.pageTitle.waitForStable();
        await expect(this.pageTitle).toHaveText(title);
    }

    public async openCategoryPLP(text: string): Promise<ProductListPage> {
        const category = this.pageSubCategory(text);
        await category.waitForClickable({ timeout: 5000 });
        await category.click();
        return new ProductListPage;
    }

}
