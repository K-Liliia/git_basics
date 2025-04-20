import { browser } from '@wdio/globals';
import { CartModal } from 'test/pageobjects/modals/cart.modal';
import { NavigationCategoryPage } from 'test/pageobjects/pages/navigation-category.page';
import { ProductListPage } from 'test/pageobjects/pages/product-list.page';
import { RozetkaHomePage } from 'test/pageobjects/pages/rozetka-home.page';

//#1
describe('Guest user should see an empty cart', () => {
    let cartModal: CartModal;

    before(async () => {
        await browser.maximizeWindow();
        cartModal = new CartModal();
    });

    it('check cart is empty', async () => {
        const rozetkaHomePage = new RozetkaHomePage();
        await rozetkaHomePage.goto();
        await rozetkaHomePage.openCartModal();
        await cartModal.verifyCartIsEmpty();
        await cartModal.checkEmptyCardTitle('Кошик порожній');
    });
});

//#2
describe('Guest user can search for a product and add it to cart', () => {
    let productList: ProductListPage;
    let cart: CartModal;

    before(async () => {
        await browser.maximizeWindow();
        productList = new ProductListPage();
        cart = new CartModal();
    });

    it('add product to cart', async () => {
        const homePage = new RozetkaHomePage();
        await homePage.goto();
        await homePage.searchProduct('iphone 16');
        await productList.verifyPLPisOpened();
        await productList.checkSearchResultItemsAmount(48);
        await productList.verifyEachProductHasTitle('iPhone 16');
        await productList.addProductToTheCart(2);
        await homePage.verifyCartIconIsShown();
        await homePage.openCartModal();
        await cart.verifyCartIsNotEmpty();
        await cart.removeProductFromCart();
        await cart.verifyCartIsEmpty();
    });
});

//#3
describe('User can increase amount of products in cart and remove it at all', () => {
    let navigationCategoryPage: NavigationCategoryPage;
    let productList: ProductListPage;
    let cart: CartModal;

    before(async () => {
        await browser.maximizeWindow();
        navigationCategoryPage = new NavigationCategoryPage();
        productList = new ProductListPage();
        cart = new CartModal();
    });

    it('change product amount in the cart', async () => {
        const homePage = new RozetkaHomePage();
        await homePage.goto();
        await homePage.openMenuCategory(4);
        await navigationCategoryPage.checkPageTitle('Товари для дому');
        await navigationCategoryPage.openCategoryPLP('Крісла');
        await productList.verifyPLPisOpened();
        await productList.addProductToTheCart(1);
        await homePage.verifyCartIconIsShown();
        await homePage.refreshPage();
        await homePage.openCartModal();
        await cart.verifyCartIsNotEmpty();
        await cart.getProductPrice();
        await cart.increaseProductAmount(2);
        //let productPrice = await cart.getProductPrice();
        //await cart.checkProductPrice(4, productPrice);
        await cart.removeProductFromCart();
        await cart.verifyCartIsEmpty();
        await cart.checkEmptyCardTitle('Кошик порожній');
    });
});
