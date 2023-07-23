/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class CreateMobileDeviceLockCommandURLRequest extends SpeakeasyBase {
    /**
     * Mobile device ID values, multiple IDs may be separated by commas (e.g. /id/13,14,15)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_list" })
    idList: string;

    /**
     * Lock message for the DeviceLock command
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lock_message" })
    lockMessage: string;
}

export class CreateMobileDeviceLockCommandURLResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
