/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindPoliciesByNameSubsetPathParamSubset {
    General = "General",
    Scope = "Scope",
    SelfService = "SelfService",
    PackageConfiguration = "PackageConfiguration",
    Scripts = "Scripts",
    Printers = "Printers",
    DockItems = "DockItems",
    AccountMaintenance = "AccountMaintenance",
    Reboot = "Reboot",
    Maintenance = "Maintenance",
    FilesProcesses = "FilesProcesses",
    UserInteraction = "UserInteraction",
    DiskEncryption = "DiskEncryption",
}

export class FindPoliciesByNameSubsetRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindPoliciesByNameSubsetPathParamSubset;
}

export class FindPoliciesByNameSubsetResponse extends SpeakeasyBase {
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
    policy?: shared.Policy;
}
