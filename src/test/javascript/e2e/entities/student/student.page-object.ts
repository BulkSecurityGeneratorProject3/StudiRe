import { element, by, ElementFinder } from 'protractor';

export class StudentComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-student div table .btn-danger'));
    title = element.all(by.css('jhi-student div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class StudentUpdatePage {
    pageTitle = element(by.id('jhi-student-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    matrikelnummerInput = element(by.id('field_matrikelnummer'));
    nachnameInput = element(by.id('field_nachname'));
    vornameInput = element(by.id('field_vorname'));
    adresseInput = element(by.id('field_adresse'));
    postleitzahlInput = element(by.id('field_postleitzahl'));
    ortInput = element(by.id('field_ort'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setMatrikelnummerInput(matrikelnummer) {
        await this.matrikelnummerInput.sendKeys(matrikelnummer);
    }

    async getMatrikelnummerInput() {
        return this.matrikelnummerInput.getAttribute('value');
    }

    async setNachnameInput(nachname) {
        await this.nachnameInput.sendKeys(nachname);
    }

    async getNachnameInput() {
        return this.nachnameInput.getAttribute('value');
    }

    async setVornameInput(vorname) {
        await this.vornameInput.sendKeys(vorname);
    }

    async getVornameInput() {
        return this.vornameInput.getAttribute('value');
    }

    async setAdresseInput(adresse) {
        await this.adresseInput.sendKeys(adresse);
    }

    async getAdresseInput() {
        return this.adresseInput.getAttribute('value');
    }

    async setPostleitzahlInput(postleitzahl) {
        await this.postleitzahlInput.sendKeys(postleitzahl);
    }

    async getPostleitzahlInput() {
        return this.postleitzahlInput.getAttribute('value');
    }

    async setOrtInput(ort) {
        await this.ortInput.sendKeys(ort);
    }

    async getOrtInput() {
        return this.ortInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class StudentDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-student-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-student'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
