/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class FindDepartmentsByIdRequest extends SpeakeasyBase {
    /**
     * ID value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;
}

/**
 * OK
 */
export class FindDepartmentsById200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    /**
     * Name of the department
     */
    @SpeakeasyMetadata()
    name: string;
}

/**
 * OK
 */
export class FindDepartmentsById200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the department
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class FindDepartmentsByIdResponse extends SpeakeasyBase {
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
    findDepartmentsById200ApplicationJSONObject?: FindDepartmentsById200ApplicationJSON;
}
