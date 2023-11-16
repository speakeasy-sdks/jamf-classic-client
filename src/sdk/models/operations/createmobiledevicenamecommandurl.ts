/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class CreateMobileDeviceNameCommandURLRequest extends SpeakeasyBase {
    /**
     * Device name to set
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=device_name" })
    deviceName: string;

    /**
     * Mobile device ID values, multiple IDs may be separated by commas (e.g. /id/13,14,15)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_list" })
    idList: string;
}

export class CreateMobileDeviceNameCommandURLResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
