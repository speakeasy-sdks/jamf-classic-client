/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindComputerManagementByNameUsernameSubsetSubset {
    General = "General",
    Policies = "Policies",
    Ebooks = "Ebooks",
    MacAppStoreApps = "MacAppStoreApps",
    OSXConfigurationProfiles = "OSXConfigurationProfiles",
    ManagedPreferenceProfiles = "ManagedPreferenceProfiles",
    RestrictedSoftware = "RestrictedSoftware",
    SmartGroups = "SmartGroups",
    StaticGroups = "StaticGroups",
    PatchReportingSoftwareTitles = "PatchReportingSoftwareTitles",
}

export class FindComputerManagementByNameUsernameSubsetRequest extends SpeakeasyBase {
    /**
     * Computer name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerManagementByNameUsernameSubsetSubset;

    /**
     * Username to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class FindComputerManagementByNameUsernameSubsetResponse extends SpeakeasyBase {
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
    computerManagement?: shared.ComputerManagement;
}