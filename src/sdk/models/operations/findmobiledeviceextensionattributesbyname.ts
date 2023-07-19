/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindMobiledeviceextensionattributesByNameRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;
}

export enum FindMobiledeviceextensionattributesByName200ApplicationXMLDateType {
    String = "String",
    Date = "Date",
    Integer = "Integer",
}

export enum FindMobiledeviceextensionattributesByName200ApplicationXMLInputTypeType {
    TextField = "Text Field",
    PopUpMenu = "Pop-up Menu",
    LDAPAttributeMapping = "LDAP Attribute Mapping",
}

export class FindMobiledeviceextensionattributesByName200ApplicationXMLInputType extends SpeakeasyBase {
    @SpeakeasyMetadata()
    type?: FindMobiledeviceextensionattributesByName200ApplicationXMLInputTypeType;
}

export enum FindMobiledeviceextensionattributesByName200ApplicationXMLInventoryDisplay {
    General = "General",
    Hardware = "Hardware",
    UserAndLocation = "User and Location",
    Purchasing = "Purchasing",
    ExtensionAttributes = "Extension Attributes",
}

/**
 * OK
 */
export class FindMobiledeviceextensionattributesByName200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateType?: FindMobiledeviceextensionattributesByName200ApplicationXMLDateType;

    @SpeakeasyMetadata()
    description?: string;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    inputType?: FindMobiledeviceextensionattributesByName200ApplicationXMLInputType;

    @SpeakeasyMetadata()
    inventoryDisplay?: FindMobiledeviceextensionattributesByName200ApplicationXMLInventoryDisplay;

    @SpeakeasyMetadata()
    name: string;
}

export enum FindMobiledeviceextensionattributesByName200ApplicationJSONDateType {
    String = "String",
    Date = "Date",
    Integer = "Integer",
}

export enum FindMobiledeviceextensionattributesByName200ApplicationJSONInputTypeType {
    TextField = "Text Field",
    PopUpMenu = "Pop-up Menu",
    LDAPAttributeMapping = "LDAP Attribute Mapping",
}

export class FindMobiledeviceextensionattributesByName200ApplicationJSONInputType extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: FindMobiledeviceextensionattributesByName200ApplicationJSONInputTypeType;
}

export enum FindMobiledeviceextensionattributesByName200ApplicationJSONInventoryDisplay {
    General = "General",
    Hardware = "Hardware",
    UserAndLocation = "User and Location",
    Purchasing = "Purchasing",
    ExtensionAttributes = "Extension Attributes",
}

/**
 * OK
 */
export class FindMobiledeviceextensionattributesByName200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_type" })
    dateType?: FindMobiledeviceextensionattributesByName200ApplicationJSONDateType;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "input_type" })
    @Type(() => FindMobiledeviceextensionattributesByName200ApplicationJSONInputType)
    inputType?: FindMobiledeviceextensionattributesByName200ApplicationJSONInputType;

    @SpeakeasyMetadata()
    @Expose({ name: "inventory_display" })
    inventoryDisplay?: FindMobiledeviceextensionattributesByName200ApplicationJSONInventoryDisplay;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class FindMobiledeviceextensionattributesByNameResponse extends SpeakeasyBase {
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
    findMobiledeviceextensionattributesByName200ApplicationJSONObject?: FindMobiledeviceextensionattributesByName200ApplicationJSON;
}
