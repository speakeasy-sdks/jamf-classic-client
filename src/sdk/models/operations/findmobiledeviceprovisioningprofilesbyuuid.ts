/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class FindMobileDeviceProvisioningProfilesByUUIDRequest extends SpeakeasyBase {
    /**
     * Uuid value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
    uuid: string;
}

export class FindMobileDeviceProvisioningProfilesByUUIDResponse extends SpeakeasyBase {
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
    mobileDeviceProvisioningProfile?: shared.MobileDeviceProvisioningProfile;
}
