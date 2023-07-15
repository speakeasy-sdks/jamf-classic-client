/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindMobileDeviceHistoryByMacAddressSubsetSubset {
    General = "General",
    ManagementCommands = "ManagementCommands",
    UserLocation = "UserLocation",
    Audits = "Audits",
    Applications = "Applications",
    Ebooks = "Ebooks",
}

export class FindMobileDeviceHistoryByMacAddressSubsetRequest extends SpeakeasyBase {
    /**
     * Mac address to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=macaddress" })
    macaddress: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindMobileDeviceHistoryByMacAddressSubsetSubset;
}

export class FindMobileDeviceHistoryByMacAddressSubsetResponse extends SpeakeasyBase {
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
    mobileDeviceHistory?: shared.MobileDeviceHistory;
}