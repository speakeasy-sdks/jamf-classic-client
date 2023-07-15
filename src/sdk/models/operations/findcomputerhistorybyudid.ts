/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindComputerHistoryByUDIDRequest extends SpeakeasyBase {
    /**
     * Computer UDID to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=udid" })
    udid: string;
}

export class FindComputerHistoryByUDIDResponse extends SpeakeasyBase {
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
    computerHistory?: shared.ComputerHistory;
}