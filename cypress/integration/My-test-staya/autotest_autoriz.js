describe('Проверка работы авторизации', function () {

    it('Позитивный кейс: верный лог + верный пас', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('naumova.al2001@yandex.ru');
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('PDn-JNz-LyD-nys13');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click(); 
        cy.go('forward');
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
        cy.contains('Амуниция staya.');
    })

    it('Негативный кейс: верный лог + неверный пас', function () {
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('naumova.al2001@yandex.ru');
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('PDn34352gfg');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click(); 
        cy.contains('Невозможно войти с предоставленными учетными данными.'); 
    })

    it('Негативный кейс: неверный лог + верный пас', function () {
        cy.reload();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('naumova.aD2001@yandex.ru');
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('PDn-JNz-LyD-nys13');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click(); 
        cy.contains('Невозможно войти с предоставленными учетными данными.'); 
    })  

})
 