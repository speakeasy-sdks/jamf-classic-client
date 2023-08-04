/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindMobileDeviceInvitationsByInvitationRequest extends SpeakeasyBase {
    /**
     * Invitation value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation" })
    invitation: number;
}

export class FindMobileDeviceInvitationsByInvitationResponse extends SpeakeasyBase {
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
    mobileDeviceInvitation?: shared.MobileDeviceInvitation;
}
