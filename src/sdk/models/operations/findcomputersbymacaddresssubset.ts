/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindComputersByMacAddressSubsetSubset {
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

export class FindComputersByMacAddressSubsetRequest extends SpeakeasyBase {
    /**
     * Mac address to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=macaddress" })
    macaddress: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputersByMacAddressSubsetSubset;
}

export class FindComputersByMacAddressSubsetResponse extends SpeakeasyBase {
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
    computer?: shared.Computer;
}