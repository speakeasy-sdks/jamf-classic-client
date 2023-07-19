/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindManagedPreferenceProfilesByNameRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;
}

export class FindManagedPreferenceProfilesByName200ApplicationXMLGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    enabled?: boolean;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name: string;

    @SpeakeasyMetadata()
    plist?: string;
}

/**
 * OK
 */
export class FindManagedPreferenceProfilesByName200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    general?: FindManagedPreferenceProfilesByName200ApplicationXMLGeneral;
}

export class FindManagedPreferenceProfilesByName200ApplicationJSONGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "plist" })
    plist?: string;
}

/**
 * OK
 */
export class FindManagedPreferenceProfilesByName200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindManagedPreferenceProfilesByName200ApplicationJSONGeneral)
    general?: FindManagedPreferenceProfilesByName200ApplicationJSONGeneral;
}

export class FindManagedPreferenceProfilesByNameResponse extends SpeakeasyBase {
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
    findManagedPreferenceProfilesByName200ApplicationJSONObject?: FindManagedPreferenceProfilesByName200ApplicationJSON;
}
