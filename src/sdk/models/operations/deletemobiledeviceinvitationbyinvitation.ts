/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteMobileDeviceInvitationByInvitationRequest extends SpeakeasyBase {
    /**
     * Invitation value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation" })
    invitation: number;
}

export class DeleteMobileDeviceInvitationByInvitationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
