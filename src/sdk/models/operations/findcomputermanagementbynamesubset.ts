/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindComputerManagementByNameSubsetSubset {
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

export class FindComputerManagementByNameSubsetRequest extends SpeakeasyBase {
    /**
     * Computer Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerManagementByNameSubsetSubset;
}

export class FindComputerManagementByNameSubsetResponse extends SpeakeasyBase {
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