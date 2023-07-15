/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindComputerManagementByMacAddressPatchFilterRequest extends SpeakeasyBase {
    /**
     * filter to apply
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filter" })
    filter: string;

    /**
     * Computer Mac address to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=macaddress" })
    macaddress: string;
}

export class FindComputerManagementByMacAddressPatchFilterResponse extends SpeakeasyBase {
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
    computerManagement?: shared.ComputerManagement;
}