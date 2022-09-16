const prompt = require ('prompt-sync') ({sigint: true});
const fs = require ('fs'); //filesystem
const {resolve} = require ('path');
const path = require ('path'); // non global

const pathname = path.join (__dirname, '/StringSepration');

const str = prompt ('Enter a String: ');
console.log (str);

function vowelOrConsonant(x)
    {
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){
            console.log("Vowel",x);
            fs.writeFileSync (pathname + '/vowel.txt',x);
        }
        else{
            console.log("Consonant");
            fs.writeFileSync (pathname + '/consonant.txt',x);
        }
    }

vowelOrConsonant(str);

// fs.unlinkSync(pathname + '/vowel.txt');
// fs.unlinkSync(pathname + '/consonant.txt');
