import React, {useState} from "react";
import {Button} from "./styles";

const Generator = () => {
    const [password, setPassword] = useState("");
    const [characters, setCharacters] = useState(true);
    const [lenght, setLenght] = useState(8);
    const [symbols, setSymbols] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [upperCase, setUpperCase] = useState(true);

    const generate = (): void => {
        console.log("miam");
    };

    return (
        <div>
            <h4>{password}</h4>
            <Button onClick={() => generate()}>Generate !</Button>
        </div>
    );
};

export default Generator;
