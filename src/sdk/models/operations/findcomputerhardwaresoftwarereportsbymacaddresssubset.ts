/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { RFCDate } from "../../../sdk/types";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum PathParamSubset {
    Software = "Software",
    Hardwre = "Hardwre",
    Fonts = "Fonts",
    Plugins = "Plugins",
}

export class FindComputerHardwareSoftwareReportsByMacAddressSubsetRequest extends SpeakeasyBase {
    /**
     * End date (e.g. yyyy-mm-dd)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=end_date" })
    endDate: RFCDate;

    /**
     * MAC address to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=macaddress" })
    macaddress: string;

    /**
     * Start date (e.g. yyyy-mm-dd)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start_date" })
    startDate: RFCDate;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: PathParamSubset;
}

export class FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

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
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    computerHardwareSoftwareReports?: shared.ComputerHardwareSoftwareReports;
}
