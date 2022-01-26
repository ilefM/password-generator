import {Button} from "@mui/material";
import * as Constants from "../../constants";
import PropertySwitch from "../PropertySwitch";
import {Card, StyledButton, Text, TextButton} from "./styles";

const Generator = () => {
    return (
        <Card>
            <Text>At least, we know</Text>
            <PropertySwitch
                text={Constants.PROPERTY_DIGITAL_TEXT}
                property={false}
            />
            <PropertySwitch
                text={Constants.PROPERTY_SYMBOLS_TEXT}
                property={false}
            />
            <PropertySwitch
                text={Constants.PROPERTY_UPPER_CASES_TEXT}
                property={false}
            />
            <StyledButton variant="contained">
                Generate The Password
            </StyledButton>
        </Card>
    );
};

export default Generator;
