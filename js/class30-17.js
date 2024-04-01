console.log("class 17 of js");

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

// Vanilla Javascript / Plain Javascript

// JQuery

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
    console.log("event", event);
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

    // if (selectedGender) {
    //     const genderValue = selectedGender.value;
    //     alert("Selected Gender: " + genderValue);
    // } else {
    //     alert("Please select a gender.");
    // }

    // OR  

    // selectedGender ? console.log("selectedGenderValue: ", selectedGender.value) : alert("Please select a gender.");

    if (!selectedGender) {
        alert("Please select a gender.");
    }

    if (selectedInterests.length > 0) {
        const selectedValues = Array.from(selectedInterests).map(interest => {
            console.log("interest: ", interest, interest.value);
            return interest.value
        });
        console.log({ selectedValues });
        console.log("Selected Interests: " + selectedValues.join(', '));
    } else {
        alert("Please select at least one interest.");
    }

    // console.log({
    //     nameValue, emailValue, passwordValue, registrationValue,
    //     countryValue, selectedGender: selectedGender?.value || "male", selectedInterests
    // });

    console.log({
        nameValue, emailValue, passwordValue, registrationValue,
        countryValue, selectedGender: selectedGender?.value || "male", selectedInterests
    });
    // const nameValue = name.value;
    // const emailValue = email.value;
    // console.log("nameValue: ", nameValue);
    // console.log("emailValue: ", emailValue);
})