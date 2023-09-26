/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindComputerHistoryByMacAddressSubsetSubset {
    General = "General",
    ComputerUsageLogs = "ComputerUsageLogs",
    Audits = "Audits",
    PolicyLogs = "PolicyLogs",
    CasperRemoteLogs = "CasperRemoteLogs",
    ScreenSharingLogs = "ScreenSharingLogs",
    CasperImagingLogs = "CasperImagingLogs",
    Commands = "Commands",
    UserLocation = "UserLocation",
    MacAppStoreApplications = "MacAppStoreApplications",
}

export class FindComputerHistoryByMacAddressSubsetRequest extends SpeakeasyBase {
    /**
     * Computer Mac Address to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=macaddress" })
    macaddress: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerHistoryByMacAddressSubsetSubset;
}

export class FindComputerHistoryByMacAddressSubsetResponse extends SpeakeasyBase {
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
    computerHistory?: shared.ComputerHistory;
}
