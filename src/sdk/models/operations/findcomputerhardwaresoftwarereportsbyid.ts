/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindComputerHardwareSoftwareReportsByIdRequest extends SpeakeasyBase {
    /**
     * End date (e.g. yyyy-mm-dd)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=end_date" })
    endDate: RFCDate;

    /**
     * ID value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Start date (e.g. yyyy-mm-dd)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start_date" })
    startDate: RFCDate;
}

export class FindComputerHardwareSoftwareReportsByIdResponse extends SpeakeasyBase {
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
    computerHardwareSoftwareReports?: shared.ComputerHardwareSoftwareReports;
}
