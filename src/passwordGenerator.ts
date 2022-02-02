/* This function get a random empty entry and return its index */
const findRandomEmptyEntry = (arr: string[]) => {
    const emptyEntries = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            emptyEntries.push(i);
        }
    }
    return emptyEntries[Math.floor(Math.random() * emptyEntries.length)];
};

/* This function add a character to the password array in a random free entry */
const AddToPassword = (characters: string[], passwordArray: string[]) => {
    const character = characters[Math.floor(Math.random() * characters.length)];
    const emptyEntryIndex = findRandomEmptyEntry(passwordArray);
    passwordArray[emptyEntryIndex] = character;
    return passwordArray;
};

export const generatePassword = (
    withLowerCases: boolean,
    withUpperCases: boolean,
    withSymbols: boolean,
    withDigitals: boolean,
    nbCharacters: number
) => {
    /* Generate all available uppercase letters */
    const upperCasesLetters = [...Array(26)].map((val, i) =>
        String.fromCharCode(i + 65)
    );

    /* Generate all available lowercase letters */
    const lowerCasesLetters = [...Array(26)].map((val, i) =>
        String.fromCharCode(i + 97)
    );

    /* Generate all available digitals */
    const digitals = [...Array(10)].map((val, i) => i.toString());

    /* Generate all available symbols  */
    const symbols = ["!", "@", "#", "$", "%", "^", "&", "/"];

    /* Merge all available characters (uppercase, lowercase, digitals, symbols) */
    let available = [
        ...(withUpperCases ? upperCasesLetters : []),
        ...(withDigitals ? digitals : []),
        ...(withLowerCases ? lowerCasesLetters : []),
        ...(withSymbols ? symbols : []),
    ];

    if (nbCharacters <= 3) return "";
    if (available.length === 0) return "";

    let passwordArray: string[] = Array(nbCharacters);
    let password: string = "";

    // To guarantee there will be at least one character from each type chosen
    if (withUpperCases) {
        passwordArray = AddToPassword(upperCasesLetters, passwordArray);
        nbCharacters--;
    }
    if (withLowerCases) {
        passwordArray = AddToPassword(lowerCasesLetters, passwordArray);
        nbCharacters--;
    }
    if (withSymbols) {
        passwordArray = AddToPassword(symbols, passwordArray);
        nbCharacters--;
    }
    if (withDigitals) {
        passwordArray = AddToPassword(digitals, passwordArray);
        nbCharacters--;
    }

    /* Fill the rest with random characters from available ones */
    for (let i = 0; i < nbCharacters; i++) {
        passwordArray = AddToPassword(available, passwordArray);
    }

    /* Tranform the array into string */
    passwordArray.forEach((character) => {
        password += character;
    });

    return password;
};
