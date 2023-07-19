/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class FindBuildingsByIdRequest extends SpeakeasyBase {
    /**
     * ID value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;
}

/**
 * OK
 */
export class FindBuildingsById200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    /**
     * Name of the building
     */
    @SpeakeasyMetadata()
    name: string;
}

/**
 * OK
 */
export class FindBuildingsById200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the building
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class FindBuildingsByIdResponse extends SpeakeasyBase {
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
    findBuildingsById200ApplicationJSONObject?: FindBuildingsById200ApplicationJSON;
}
