/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindComputerHistoryBySerialNumberSubsetSubset {
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

export class FindComputerHistoryBySerialNumberSubsetRequest extends SpeakeasyBase {
    /**
     * Computer Serial Number to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialnumber" })
    serialnumber: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerHistoryBySerialNumberSubsetSubset;
}

export class FindComputerHistoryBySerialNumberSubsetResponse extends SpeakeasyBase {
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