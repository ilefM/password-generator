export const generatePassword = (
    withSymbols: boolean,
    withUpperCases: boolean,
    withDigitals: boolean,
    nbCharacters: number,
    withLowerCases: boolean,
) => {
    const upperCasesLetters = [...Array(26)].map((val, i) =>
        String.fromCharCode(i + 65),
    );

    const lowerCasesLetters = [...Array(26)].map((val, i) =>
        String.fromCharCode(i + 97),
    );

    const digitals = [...Array(10)].map((val, i) => i.toString());

    const symbols = ["!", "@", "#", "$", "%", "^", "&", "/"];

    let available = [
        ...(withUpperCases ? upperCasesLetters : []),
        ...(withDigitals ? digitals : []),
        ...(withLowerCases ? lowerCasesLetters : []),
        ...(withSymbols ? symbols : []),
    ];

    if (available.length === 0) return;

    let password: string = "";

    for (let i = 0; i < nbCharacters; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        password += available[randomIndex];
    }

    return password;
};
