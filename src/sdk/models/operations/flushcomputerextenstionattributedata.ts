/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class FlushComputerExtenstionAttributeDataRequest extends SpeakeasyBase {
    /**
     * ID of the computer extension attribute for which data will be deleted
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class FlushComputerExtenstionAttributeDataResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}