/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindUserextensionattributes200ApplicationXMLUserExtensionAttribute extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindUserextensionattributes200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    size?: number;

    @SpeakeasyMetadata()
    userExtensionAttribute?: FindUserextensionattributes200ApplicationXMLUserExtensionAttribute;
}

export class FindUserextensionattributes200ApplicationJSONUserExtensionAttribute extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindUserextensionattributes200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user_extension_attribute" })
    @Type(() => FindUserextensionattributes200ApplicationJSONUserExtensionAttribute)
    userExtensionAttribute?: FindUserextensionattributes200ApplicationJSONUserExtensionAttribute;
}

export class FindUserextensionattributesResponse extends SpeakeasyBase {
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
    @SpeakeasyMetadata({ elemType: FindUserextensionattributes200ApplicationJSON })
    findUserextensionattributes200ApplicationJSONObjects?: FindUserextensionattributes200ApplicationJSON[];
}
