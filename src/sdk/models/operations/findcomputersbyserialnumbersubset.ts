/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindComputersBySerialNumberSubsetPathParamSubset {
    General = "General",
    Location = "Location",
    Purchasing = "Purchasing",
    Peripherals = "Peripherals",
    Hardware = "Hardware",
    Certificates = "Certificates",
    Software = "Software",
    ExtensionAttributes = "ExtensionAttributes",
    GroupsAccounts = "GroupsAccounts",
    Iphones = "iphones",
    ConfigurationProfiles = "ConfigurationProfiles",
}

export class FindComputersBySerialNumberSubsetRequest extends SpeakeasyBase {
    /**
     * Serial number to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialnumber" })
    serialnumber: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputersBySerialNumberSubsetPathParamSubset;
}

export class FindComputersBySerialNumberSubsetResponse extends SpeakeasyBase {
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
    computer?: shared.Computer;
}
