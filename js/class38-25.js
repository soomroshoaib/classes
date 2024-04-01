// remaining things related to Intl API

//  some locales list


// "en-US" - English (United States)
// "es-ES" - Spanish (Spain)
// "fr-FR" - French (France)
// "de-DE" - German (Germany)
// "ja-JP" - Japanese (Japan)
// "zh-CN" - Chinese (China)
// const date = new Date();
// console.log({ date });
// const formatter = new Intl.DateTimeFormat('en-US',
//     {
//         hour: "2-digit", minute: "2-digit",
//         second: "numeric", year: "numeric", month: "long", day: "2-digit", hour12: false,  calendar: 'islamic' 
//     }
// );



// console.log(formatter.format(date));


// const number = 123456.789;
// unit possible values 
// "acre": A unit of area equal to 43,560 square feet.
// "bit": A unit of information.
// "byte": A unit of digital information.
// "celsius": A unit of temperature.
// "centimeter": A unit of length.
// "day": A unit of time.
// "degree": A unit of angle.
// "fahrenheit": A unit of temperature.
// "fluid-ounce": A unit of volume.
// "foot": A unit of length.
// "gallon": A unit of volume.
// "gigabit": A unit of digital information.
// "gigabyte": A unit of digital information.
// "gram": A unit of mass.
// "hectare": A unit of area.
// "hour": A unit of time.
// "inch": A unit of length.
// "kilogram": A unit of mass.
// "kilometer": A unit of length.
// "liter": A unit of volume.
// "megabit": A unit of digital information.
// "megabyte": A unit of digital information.
// "meter": A unit of length.
// "mile": A unit of length.
// "mile-scandinavian": A unit of length used in Scandinavian countries.
// "millimeter": A unit of length.
// "millisecond": A unit of time.
// "minute": A unit of time.
// "month": A unit of time.
// "ounce": A unit of mass.
// "percent": A unit of percentage.
// "petabyte": A unit of digital information.
// "pound": A unit of mass.
// "second": A unit of time.
// "stone": A unit of mass.
// "terabit": A unit of digital information.
// "terabyte": A unit of digital information.
// "week": A unit of time.
// "yard": A unit of length.
// "year": A unit of time.


// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });

// console.log(formatter.format(number)); // Output: $123,456.79


// const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
// const formatter = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
// console.log(formatter.format(number)); // Output: $123,456.79



// regex intro
// g and i flags
// range ([a-zA-Z0-9])
// repeat ({min, max-optional})
// metacharacters (\d, \w, \s, \t ) and escape characters
// special characters (+, \, [], [^], ?, ., *) (., ^, $, *, +, ?, {, }, [, ], \, |, (, ), -, /)
// Starting (^) & Ending ($) Patterns
// Alternate Characters | or (|)


const regex1 = /hello/;
// OR 
// const regex1 = /hello/ig;
const regex2 = new RegExp("hello", "ig");
// OR 
// const regex2 = new RegExp("hello");


// console.log(regex2.test("Hello hello"));
// console.log(/hello/.test("Hello hello"));

console.log(/e/.exec("best things in life are free!"));
// scope in JS