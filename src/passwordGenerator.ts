export const generatePassword = (
    withLowerCases: boolean,
    withUpperCases: boolean,
    withSymbols: boolean,
    withDigitals: boolean,
    nbCharacters: number
) => {
    const upperCasesLetters = [...Array(26)].map((val, i) =>
        String.fromCharCode(i + 65)
    );

    const lowerCasesLetters = [...Array(26)].map((val, i) =>
        String.fromCharCode(i + 97)
    );

    const digitals = [...Array(10)].map((val, i) => i.toString());

    const symbols = ["!", "@", "#", "$", "%", "^", "&", "/"];

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

    let atLeastOneSymbol = false;
    let atLeastOneDigitals = false;
    let atLeastOneUpCase = false;
    let atLeastOneLowCase = false;

    for (let i = 0; i < nbCharacters; i++) {
        // if (withUpperCases && !atLeastOneUpCase) {
        //     const randomUpperCase =
        //         getRandomCharacter(upperCasesLetters);
        //     atLeastOneUpCase = true;
        //     const emptyEntry = findEmptyEntry(passwordArray);
        //     if (emptyEntry === -1) return "";
        //     passwordArray[emptyEntry] = randomUpperCase;
        // }
        // if (withLowerCases && !atLeastOneLowCase) {
        //     const randomIndex = Math.floor(
        //         Math.random() * lowerCasesLetters.length
        //     );
        //     const randomLowCase = lowerCasesLetters[randomIndex];
        // }
        // if (withSymbols && !atLeastOneSymbol) {
        //     const randomIndex = Math.floor(
        //         Math.random() * symbols.length
        //     );
        //     const randomSymbol = symbols[randomIndex];
        // }
        // if (withDigitals && !atLeastOneDigitals) {
        //     const randomIndex = Math.floor(
        //         Math.random() * digitals.length
        //     );
        //     const randomDigit = digitals[randomIndex];
        // }
        const randomIndex = Math.floor(
            Math.random() * available.length
        );
        password += available[randomIndex];
    }

    return password;
};

const fillWithPriorities = (
    characters: string[],
    password: string[]
) => {
    const character = arr[Math.floor(Math.random() * arr.length)];
    const emptyEntry = findEmptyEntry(arr);
    if (emptyEntry == -1) return [];
};

const findEmptyEntry = (arr: string[]) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) continue;
        else return i;
    }
    return -1;
};
