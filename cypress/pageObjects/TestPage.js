import BasePage from "./BasePage";

class TestPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
    }

    static get name() {
        return cy.get("#name");
    }

    static get lastname() {
        return cy.get("#lastname");
    }

    static get email() {
        return cy.get("#email");
    }

    static get gender() {
        return cy.get("#gender-radio-3");
    }

    static get usernumber() {
        return cy.get("#userNumber");
    }

    static get birthdayDate() {
        return cy.get("#dateOfBirthInput");
    }

    static get month_select() {
        return cy.get(".react-dateselecter__month-select");
    }

    static get year_select() {
        return cy.get(".react-dateselecter__year-select");
    }

    static get day_select() {
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
    }

    static get sub_input() {
        return cy.get("#subjectsContainer");
    }

    static get ekonomic_select() {
        return cy.get("#react-select-2-option-0");
    }

    static get hobby_check() {
        return cy.get("#hobbies-checkbox-3");
    }

    static get upload_image() {
        return cy.get('input[type=file]');
    }

    static get adress() {
        return cy.get("#currentAddress");
    }

    static get state_drop() {
        return cy.get("#state");
    }

    static get state_select() {
        return cy.get("#react-select-3-option-0");
    }

    static get city_drop() {
        return cy.get("#city");
    }

    static get city_select() {
        return cy.get("#react-select-4-option-0");
    }

    static get form_sub() {
        return cy.get("#submit");
    }

    static get table_row() {
        return cy.get("tr");
    }
}

export default TestPage;