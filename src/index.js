const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    // разбиваю на массив по 10
    const arrCode = [];
    let sum = '';
    for (let i = 0; i < expr.length; i++) {
        sum += expr[i]
        if (sum.length == 10) {
            arrCode.push(sum)
            sum = '';
        }
    }

    //перебираю полученный массив
    arrCode.map(arr => arr.split(''))
           .forEach(arr => {
               let itemTable = '';
               if (arr.join('') !== '**********') {
                    for (let i = 0; i < arr.length; i += 2) {
                        let code = arr[i] + arr[i + 1]
                        if (code == '10') itemTable += '.';
                        if (code == '11') itemTable += '-';
                    }
                    result += MORSE_TABLE[itemTable]
               } else {
                   result += ' '
               }
           })
    return result;
}

module.exports = {
    decode
}