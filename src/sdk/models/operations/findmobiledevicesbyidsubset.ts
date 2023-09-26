/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindMobileDevicesByIdSubsetSubset {
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

export class FindMobileDevicesByIdSubsetRequest extends SpeakeasyBase {
    /**
     * ID to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindMobileDevicesByIdSubsetSubset;
}

export class FindMobileDevicesByIdSubsetResponse extends SpeakeasyBase {
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
}
