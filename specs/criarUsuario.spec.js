const { browser, element } = require("protractor")
const criarUsuario = require('../page_objects/criarUsuario.po')

describe('Criar Usuario', () => {

    it('Cadastro com sucesso!', () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://automacaocombatista.herokuapp.com/users/new');

        criarUsuario.cadastrarUsuario('Vinicius', 'Oliveira', 'vinixhz@gmail.com')

        expect(criarUsuario.messageSuccess.isDisplayed()).toBe(true);
    })

    it('Listar usuarios com sucesso!', () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://automacaocombatista.herokuapp.com/users');

        expect(element(by.tagName('h5')).getText()).toBe('Lista de Usuários!!');
    })

})