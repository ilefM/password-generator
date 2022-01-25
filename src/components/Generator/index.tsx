import React from "react";
import * as Constants from "../../constants";
import PropertySwitch from "../PropertySwitch";
import {Card, Text} from "./styles";

const Generator = () => {
    return (
        <Card>
            <Text>At least, we know</Text>
            <PropertySwitch
                text={Constants.propertyDigitalText}
                property={false}
            />
            <PropertySwitch
                text={Constants.propertySymbolsText}
                property={false}
            />
            <PropertySwitch
                text={Constants.propertyUpperCaseText}
                property={false}
            />
        </Card>
    );
};

export default Generator;
