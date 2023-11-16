/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { RFCDate } from "../../../sdk/types";
import { AxiosResponse } from "axios";

export class FindComputerApplicationUsageByIdRequest extends SpeakeasyBase {
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

export class FindComputerApplicationUsageByIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: shared.ComputerApplicationUsage })
    twoHundredApplicationJsonComputerApplicationUsage?: shared.ComputerApplicationUsage[];

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
    rawResponse: AxiosResponse;
}
