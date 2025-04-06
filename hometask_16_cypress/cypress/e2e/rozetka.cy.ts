beforeEach(() => {
    cy.visit('https://rozetka.com.ua');
});

describe('Guest user should see an empty cart', () => {
    it('passes', () => {
        cy.get('.header-actions .header-cart__button').click();
        cy.get('rz-modal-layout.modal-layout').should('be.visible');
        cy.get('.modal-layout .cart-list').should('not.exist');
    });
});

describe('Guest user can search for a product and add it to cart', () => {
    it('passes', () => {
        cy.get('.header .header__logo img').should('be.visible');
        cy.get('.search-form__input-wrapper .search-form__input').type('iphone 16');
        cy.get('.search-form .search-form__submit').click();
        cy.wait(2500);
        cy.get('rz-category-goods').should('be.visible');
        cy.get('rz-product-tile.tile').should('not.be.empty').and(($el) => expect($el).to.have.length(48));
        cy.get('rz-product-tile.tile').each(($el) => {
            cy.wrap($el).should('contain.text', 'iPhone 16');
        });
        cy.get('rz-buy-button.toOrder').eq(3).then(($el) => {
            cy.wrap($el).click();
        });
        cy.wait(2500);
        cy.get('.header-actions__item--cart .badge', {timeout: 10000}).should('exist');
        cy.get('li .header-cart__button').click();
        cy.wait(2000);
        cy.get('rz-modal-layout.modal-layout').should('be.visible');
        cy.get('.cart-list__item .cart-product').should('exist');
        cy.get('.modal-layout .button--icon').click();
    });
});

describe('User can increase amount of products in cart and remove all of them from cart', () => {
    it('passes', () => {
        cy.get('.header .header__logo img').should('be.visible');
        cy.get('[data-index="4"] > [data-testid="fat_menu_category_link"]').click();
        cy.wait(2500);
        cy.get('rz-widget-list rz-list-tile a[title="Крісла"]').click();
        cy.wait(1500);
        cy.get('rz-category-goods').should('be.visible');
        cy.get('rz-buy-button.toOrder').eq(0).then(($el) => {
            cy.wrap($el).click();
        });
        cy.wait(1500);
        cy.get('.header-actions__item--cart .badge', {timeout: 10000}).should('exist');
        cy.get('li .header-cart__button').click();
        cy.wait(2000);
        cy.get('.cart-list__item .cart-product').should('be.visible');
        cy.get('[data-testid="cart-counter-increment-button"]').click();
        cy.get('[data-testid="cart-counter-input"]').should('have.value', '2');
        cy.wait(1500);
        cy.get('#cartProductActions0').click();
        cy.get('rz-trash-icon button', {timeout: 1500}).should('exist');
        cy.get('rz-trash-icon button').click();
        cy.get('[data-testid="empty-cart"]').should('include.text', 'Кошик порожній');
        cy.get('.modal-layout .cart-list').should('not.exist');
    });
});

