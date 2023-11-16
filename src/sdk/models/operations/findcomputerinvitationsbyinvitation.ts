/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class FindComputerInvitationsByInvitationRequest extends SpeakeasyBase {
    /**
     * Invitation value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation" })
    invitation: number;
}

export class FindComputerInvitationsByInvitationResponse extends SpeakeasyBase {
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
    computerInvitation?: shared.ComputerInvitation;
}
