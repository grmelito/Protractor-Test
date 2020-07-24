const Helper = require('protractor-helper')

class CriarUsuario {
    constructor() {
        this.nomeInput = element(by.id('user_name'));
        this.ultimoNomeInput = element(by.id('user_lastname'));
        this.emailInput = element(by.id('user_email'));
        this.criarButton = element(by.name('commit'));
        this.messageSuccess = element(by.cssContainingText('#notice', 'Usuário Criado com sucesso'));
    }

    cadastrarUsuario(nome, ultimoNome, email) {
        //Helper.clearFieldAndFillItWithText(this.nomeInput, nome);
        //Helper.clearFieldAndFillItWithText(this.ultimoNomeInput, ultimoNome);
        //Helper.fillFieldWithText(this.emailInput, email);
        //Helper.clickwhenClickable(this.criarButton);

        this.nomeInput.sendKeys(nome);
        this.ultimoNomeInput.sendKeys(ultimoNome);
        this.emailInput.sendKeys(email);
        this.criarButton.click();
    }
}

module.exports = new CriarUsuario();