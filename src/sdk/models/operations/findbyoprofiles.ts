/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindBYOProfiles200ApplicationXMLByoprofile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindBYOProfiles200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    byoprofile?: FindBYOProfiles200ApplicationXMLByoprofile;

    @SpeakeasyMetadata()
    size?: number;
}

export class FindBYOProfiles200ApplicationJSONByoprofile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindBYOProfiles200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "byoprofile" })
    @Type(() => FindBYOProfiles200ApplicationJSONByoprofile)
    byoprofile?: FindBYOProfiles200ApplicationJSONByoprofile;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class FindBYOProfilesResponse extends SpeakeasyBase {
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
    @SpeakeasyMetadata({ elemType: FindBYOProfiles200ApplicationJSON })
    findBYOProfiles200ApplicationJSONObjects?: FindBYOProfiles200ApplicationJSON[];
}
