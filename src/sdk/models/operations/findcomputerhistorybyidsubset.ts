/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindComputerHistoryByIdSubsetSubset {
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

export class FindComputerHistoryByIdSubsetRequest extends SpeakeasyBase {
    /**
     * Computer ID to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerHistoryByIdSubsetSubset;
}

export class FindComputerHistoryByIdSubsetResponse extends SpeakeasyBase {
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