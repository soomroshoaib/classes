// 'use strict';
console.log("class 20 of js");

// // this keyword in JS
// // some remianing window object properties and methods 

// const userinfo = {
//     name: "ali", age: 25, gender: "male", wish() { console.log("this: ", this); }
// };

// console.log("userinfo: ", userinfo.wish())
// console.log("alone this: ", this)

// function test() {
//     console.log("function this: ", this)
// }

// // console.log({ age })

// // let age = 20
// test()

// // console.log({ age })


// function add(eventThis) {
//     console.log("event this: ", eventThis)
// }

// console.log(window.navigator);
// console.log(navigator);


// navigator.clipboard
// .readText()
// .then(
//     (clipText) => (document.querySelector(".cliptext").innerText = clipText),
// );



function copyToClipboard(copyToClipboardButton) {
    // Check if the Clipboard API is supported
    if (navigator.clipboard) {
        // Copy text to the clipboard

        const copyToClipboardText = document.getElementById("copyToClipboardText");
        // console.log("copyToClipboardText.textContent: ", copyToClipboardText.textContent, copyToClipboardButton);
        navigator.clipboard.writeText(copyToClipboardText.textContent)
            .then(() => {
                // alert('Text successfully copied to clipboard');
                copyToClipboardButton.textContent = "Copied!"
            })
            .catch(err => {
                alert('Unable to copy text to clipboard', err);
            });

        // Read text from the clipboard
        navigator.clipboard.readText()
            .then(text => {
                console.log('Text read from clipboard:', text);
            })
            .catch(err => {
                console.error('Unable to read text from clipboard', err);
            });
    } else {
        console.warn('Clipboard API not supported in this browser');
    }
}



// console.log("online: ", navigator.onLine);



function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
        // navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML =
            "Geolocation is not supported by this browser.";
    }

    function successCallback(position) {
        console.log("position: ", position);
        document.getElementById("demo").innerHTML =
            "Latitude: " + position.coords.latitude + "<br>" +
            "Longitude: " + position.coords.longitude;
    }
    function errorCallback(error) {
        console.log({ error });
        // document.getElementById("demo").innerHTML =
        //     "Latitude: " + position.coords.latitude + "<br>" +
        //     "Longitude: " + position.coords.longitude;
    }
}
