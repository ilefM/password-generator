import {Dispatch} from "react";
import {IPasswordProperties} from ".";

export interface IPropertiesProps {
    text: string;
    propertyType: string;
    properties: IPasswordProperties;
    setProperties: Dispatch<
        React.SetStateAction<IPasswordProperties>
    >;
}
