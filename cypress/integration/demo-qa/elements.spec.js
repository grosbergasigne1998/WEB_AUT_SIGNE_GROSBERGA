import TestPage from "../../pageObjects/TestPage";

context("Practice Form", () => {
    context("Filling out the test form page", () => {
        beforeEach(() => {
            TestPage.visit();
        });

        it("Filling in fields", () => {
            cy.fixture("formData").then((data) => {
                // Identify and fill out First and Last Name fields
                TestPage.name.type(data.name);
                TestPage.surname.type(data.surname);
                // Identify and fill Email and phone number Fields
                TestPage.email.type(data.email);
                TestPage.gender.click({ force: true });
                TestPage.number.type(data.phone);

                // Pick birth date - 28.02.1930.
                TestPage.bdayInput.click();
                TestPage.monthSelect.select(1);
                TestPage.yearSelect.select(data.year);
                TestPage.daySelect.click();

                // Pick economics subject
                TestPage.subjectsInput.click().type(data.subject);
                TestPage.economicsSelect.click();
                // Set music in hobbies
                TestPage.hobbiesSelect.click({ force: true });

                // Upload a picture from folder
                TestPage.uploadPicture.selectFile(data.filePath);

                // Type into the address field
                TestPage.adress.type(data.address);
            });

            // Select state as NCR
            TestPage.stateDropdown.click();
            TestPage.stateSelect.click();
            // Select city as Delhi
            TestPage.cityDropdown.click();
            TestPage.citySelect.click();
            // Submit the whole form
            TestPage.formSubmit.click();

            cy.fixture("formData").then((data) => {
                TestPage.tableRow.eq(1).contains(data.name).contains(data.surname);
                TestPage.tableRow.eq(2).contains(data.email);
                TestPage.tableRow.eq(3).contains(data.gender);
                TestPage.tableRow.eq(4).contains(data.phone);
                TestPage.tableRow.eq(5).contains(data.dob);
                TestPage.tableRow.eq(6).contains(data.subject);
                TestPage.tableRow.eq(7).contains(data.hobbies);
                TestPage.tableRow.eq(8).contains(data.picture);
                TestPage.tableRow.eq(9).contains(data.address);
                TestPage.tableRow.eq(10).contains(data.stateAndCity);
            });
        });
    });

});