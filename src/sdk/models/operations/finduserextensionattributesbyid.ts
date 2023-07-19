/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindUserextensionattributesByIdRequest extends SpeakeasyBase {
    /**
     * ID value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;
}

export enum FindUserextensionattributesById200ApplicationXMLDataType {
    String = "String",
    Integer = "Integer",
    Date = "Date",
}

export enum FindUserextensionattributesById200ApplicationXMLInputTypeType {
    TextField = "Text Field",
    PopUpMenu = "Pop-up Menu",
}

export class FindUserextensionattributesById200ApplicationXMLInputType extends SpeakeasyBase {
    @SpeakeasyMetadata()
    type?: FindUserextensionattributesById200ApplicationXMLInputTypeType;
}

/**
 * OK
 */
export class FindUserextensionattributesById200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dataType?: FindUserextensionattributesById200ApplicationXMLDataType;

    @SpeakeasyMetadata()
    description?: string;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    inputType?: FindUserextensionattributesById200ApplicationXMLInputType;

    /**
     * Name of the user extension attribute
     */
    @SpeakeasyMetadata()
    name: string;
}

export enum FindUserextensionattributesById200ApplicationJSONDataType {
    String = "String",
    Integer = "Integer",
    Date = "Date",
}

export enum FindUserextensionattributesById200ApplicationJSONInputTypeType {
    TextField = "Text Field",
    PopUpMenu = "Pop-up Menu",
}

export class FindUserextensionattributesById200ApplicationJSONInputType extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: FindUserextensionattributesById200ApplicationJSONInputTypeType;
}

/**
 * OK
 */
export class FindUserextensionattributesById200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data_type" })
    dataType?: FindUserextensionattributesById200ApplicationJSONDataType;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "input_type" })
    @Type(() => FindUserextensionattributesById200ApplicationJSONInputType)
    inputType?: FindUserextensionattributesById200ApplicationJSONInputType;

    /**
     * Name of the user extension attribute
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class FindUserextensionattributesByIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    findUserextensionattributesById200ApplicationJSONObject?: FindUserextensionattributesById200ApplicationJSON;
}
