/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum UserExtensionAttributeDataType {
    String = "String",
    Integer = "Integer",
    Date = "Date",
}

export enum UserExtensionAttributeInputTypeType {
    TextField = "Text Field",
    PopUpMenu = "Pop-up Menu",
}

export class UserExtensionAttributeInputType extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: UserExtensionAttributeInputTypeType;
}

/**
 * OK
 */
export class UserExtensionAttribute extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data_type" })
    dataType?: UserExtensionAttributeDataType;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "input_type" })
    @Type(() => UserExtensionAttributeInputType)
    inputType?: UserExtensionAttributeInputType;

    /**
     * Name of the user extension attribute
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}