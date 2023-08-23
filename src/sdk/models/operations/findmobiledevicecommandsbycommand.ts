/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindMobileDeviceCommandsByCommandRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=command" })
    command: string;
}

export class FindMobileDeviceCommandsByCommandResponse extends SpeakeasyBase {
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
    mobileDeviceCommand?: shared.MobileDeviceCommand;
}
