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

    let password: string = "";

    for (let i = 0; i < nbCharacters; i++) {
        const randomIndex = Math.floor(
            Math.random() * available.length
        );
        password += available[randomIndex];
    }

    return password;
};
