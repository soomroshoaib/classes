console.log("class 18 of js");


// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }
// DRY - Don't Repeat Yourself

// add(10, 2);
// subtract(10, 2);
// multiply(10, 2);
// divide(10, 2);

const contactInformations = [];

const addInfo = () => {
    console.log("event", event);
    event.preventDefault();
    // const name = document.getElementById("name");
    // const nameValue = name.value;

    // OR  

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const registrationValue = document.getElementById("registration").value;
    const countryValue = document.getElementById("country").value;

    console.log({ nameValue, emailValue, passwordValue, registrationValue, countryValue });
    // const nameValue = name.value;
    // const emailValue = email.value;
    // console.log("nameValue: ", nameValue);
    // console.log("emailValue: ", emailValue);
}


const submit = (event) => {
    console.log("event", event);
    event.preventDefault();
    // const name = document.getElementById("name");
    // const nameValue = name.value;

    // OR  

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const registrationValue = document.getElementById("registration").value;
    const countryValue = document.getElementById("country").value;

    console.log({ nameValue, emailValue, passwordValue, registrationValue, countryValue });
    // const nameValue = name.value;
    // const emailValue = email.value;
    // console.log("nameValue: ", nameValue);
    // console.log("emailValue: ", emailValue);
}

// document.getElementById("contact-form").addEventListener("submit", function (event) { })

// OR  

document.getElementById("contact-form").addEventListener("submit", (event) => {
    const createAndShowErrorMessage = (sectionId, message) => {
        const section = document.getElementById(sectionId);
        const errorMessage = `
        <p style="color: red;font-weight: 700;font-size: small;" class="error-message">${message}</p>
        `;
        section.innerHTML = `${section.innerHTML}${errorMessage}`;
    }
    // console.log("event", event);
    event.preventDefault();
    // const name = document.getElementById("name");
    // const nameValue = name.value;

    // OR  

    // const  name = document.getElementById("name2");
    // const nameValue = name && name.value;

    // OR  

    // const nameValue = document.getElementById("name2") && document.getElementById("name").value;

    const nameValue = document.getElementById("name")?.value;
    const emailValue = document.getElementById("email")?.value;
    const passwordValue = document.getElementById("password")?.value;
    const registrationValue = document.getElementById("registration")?.value;
    const countryValue = document.getElementById("country")?.value;

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const selectedInterests = document.querySelectorAll('input[name="interests"]:checked');

    // if the error message's is already there then remove it

    // const errorMessages = document.getElementsByClassName("error-message");
    const _errorMessages = document.querySelectorAll(".error-message");
    // console.log(errorMessages, "getElementsByClassName");
    console.log(_errorMessages, "querySelectorAll");

    _errorMessages.forEach((error) => {
        console.log(error, "error");
        error.remove();
    })


    // if (selectedGender) {
    //     const genderValue = selectedGender.value;
    //     alert("Selected Gender: " + genderValue);
    // } else {
    //     alert("Please select a gender.");
    // }

    // OR  

    // selectedGender ? console.log("selectedGenderValue: ", selectedGender.value) : alert("Please select a gender.");

    if (!selectedGender) {
        // alert("Please select a gender.");

        // const genderSection = document.getElementById("gender-section");
        // const errorMessage = `
        // <p style="color: red;font-weight: 700;font-size: small;" class="error-message">Please select a gender.</p>
        // `;
        // genderSection.innerHTML = `${genderSection.innerHTML}${errorMessage}`;

        createAndShowErrorMessage("gender-section", "Please select a gender.");

    }

    let selectedInterestValues = [];
    if (selectedInterests.length > 0) {

        selectedInterestValues = Array.from(selectedInterests).map(interest => {
            // console.log("interest: ", interest, interest.value);
            return interest.value
        });
        // console.log({ selectedInterestValues });
        console.log("Selected Interests: " + selectedInterestValues.join(', '));
    } else {
        // alert("Please select at least one interest.");

        // const interestsSection = document.getElementById("interests-section");
        // const errorMessage = `
        // <p style="color: red;font-weight: 700;font-size: small;" class="error-message">Please select at least one interest.</p>
        // `;
        // interestsSection.innerHTML = `${interestsSection.innerHTML}${errorMessage}`;

        createAndShowErrorMessage("interests-section", "Please select at least one interest.");
    }

    // console.log({
    //     nameValue, emailValue, passwordValue, registrationValue,
    //     countryValue, selectedGender: selectedGender?.value || "male", selectedInterests
    // });

    // console.log({
    //     nameValue, emailValue, passwordValue, registrationValue,
    //     countryValue, selectedGender: selectedGender?.value, selectedInterests: selectedInterestValues
    // });

    if (selectedGender && selectedInterests.length > 0) {
        const contactInformation = {
            name: nameValue, email: emailValue, password: passwordValue, registration: registrationValue,
            country: countryValue, gender: selectedGender?.value, interests: selectedInterestValues
        };
        console.log("contactInformation: ", contactInformation);
        contactInformations.push(contactInformation);

        console.log("contactInformations: ", contactInformations, JSON.stringify(contactInformations));
        localStorage.setItem("contactInformations", JSON.stringify(contactInformations));

        showContactInformationsOnUI()
    }


    // const nameValue = name.value;
    // const emailValue = email.value;
    // console.log("nameValue: ", nameValue);
    // console.log("emailValue: ", emailValue);

});




// window.onload = function () {

// }

// window.onload = () => {

// }


const showContactInformationsOnUI = () => {

    const contactInformationsLocalStorage = localStorage.getItem("contactInformations");
    const contactInformationsLocalStorageJSArray = JSON.parse(contactInformationsLocalStorage)

    console.log("contactInformationsLocalStorageStringifyArray: ", contactInformationsLocalStorage);
    console.log("contactInformationsLocalStorageJSArray: ", JSON.parse(contactInformationsLocalStorage));

  const contactUI =  contactInformationsLocalStorageJSArray.map(contact => {
    console.log("contact: ", contact);
        return `
        <h1>Name: ${contact.name}</h1>
        <h1>Email: ${contact.email}</h1>
        <h1>Password: ${contact.password}</h1>
        <h1>Registration Date: ${contact.registration}</h1>
        <h1>Gender: ${contact.gender}</h1>
       <div>
        Interests:
        <ul>
            ${contact.interests.map(interest => {
                return `<li>${interest}</li>`
            })}
            </ul>
       </div>
        `
    })


    // document.write(contactInformationsLocalStorage);
    document.querySelector("section").innerHTML = contactUI.join('');
}


// const HTMLCollection = document.getElementsByClassName("getElementsByClassName");
// const NodeList = document.querySelectorAll(".querySelectorAll");
// console.log(HTMLCollection, "getElementsByClassName HTMLCollection");
// console.log(NodeList, "querySelectorAll NodeList");