const franc = require('franc-all');
var langs = require('langs');

const process = require('process');


const ISO = "3";

function detectLanguageCode() {

        process.argv.splice(0, 2)
        const phrase = process.argv.join(' ');
        const detect = franc(phrase);
        return detect
}

function detectLanguage(langCode) {

    try {
        let res = langs.where(ISO, langCode);
        return res.name;
    }
    catch (e) {
        console.log("Could not guess the language. Please try again with a large and diverse word sample.");
        process.exit()
    }

}


let langCode = detectLanguageCode();
if (langCode != "und") {
    let language = detectLanguage(langCode);
    console.log(`Best Guess: ${language}`);

}
else {
    console.log("Could not guess the language. Please try again with a long and diverse word sample.");
}