/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindMobileDevicesByMacAddressSubsetPathParamSubset {
    General = "General",
    Location = "Location",
    Purchasing = "Purchasing",
    Applications = "Applications",
    Security = "Security",
    Network = "Network",
    Certificates = "Certificates",
    ConfigurationProfiles = "ConfigurationProfiles",
    ProvisioningProfiles = "ProvisioningProfiles",
    MobileDeviceGroups = "MobileDeviceGroups",
    ExtensionAttributes = "ExtensionAttributes",
}

export class FindMobileDevicesByMacAddressSubsetRequest extends SpeakeasyBase {
    /**
     * Mac address to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=macaddress" })
    macaddress: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindMobileDevicesByMacAddressSubsetPathParamSubset;
}

export class FindMobileDevicesByMacAddressSubsetResponse extends SpeakeasyBase {
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

    /**
     * OK
     */
    @SpeakeasyMetadata()
    mobileDevice?: shared.MobileDevice;
}
