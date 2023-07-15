/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindComputerApplicationByNameAndVersionRequest extends SpeakeasyBase {
    /**
     * Application name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application" })
    application: string;

    /**
     * Version to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
    version: string;
}

export class FindComputerApplicationByNameAndVersionResponse extends SpeakeasyBase {
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
    computerApplications?: shared.ComputerApplications;
}