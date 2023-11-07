/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindMobileDeviceApplicationsByNameSubsetPathParamSubset {
    General = "General",
    Scope = "Scope",
    SelfService = "SelfService",
    VPPCodes = "VPPCodes",
    Vpp = "VPP",
    AppConfiguration = "AppConfiguration",
}

export class FindMobileDeviceApplicationsByNameSubsetRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindMobileDeviceApplicationsByNameSubsetPathParamSubset;
}

export class FindMobileDeviceApplicationsByNameSubsetResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    mobileDeviceApplication?: shared.MobileDeviceApplication;
}
