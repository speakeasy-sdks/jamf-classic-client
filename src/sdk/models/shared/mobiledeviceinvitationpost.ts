/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SiteObject } from "./siteobject";

export class MobileDeviceInvitationPostEnrolledIntoSite extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class MobileDeviceInvitationPost extends SpeakeasyBase {
    @SpeakeasyMetadata()
    allowMultipleUses?: boolean;

    @SpeakeasyMetadata()
    dateSent?: string;

    @SpeakeasyMetadata()
    dateSentEpoch?: number;

    @SpeakeasyMetadata()
    dateSentUtc?: string;

    @SpeakeasyMetadata()
    enrolledIntoSite?: MobileDeviceInvitationPostEnrolledIntoSite;

    /**
     * Use 'Unlimited' to specify no expiration
     */
    @SpeakeasyMetadata()
    expirationDate?: string;

    @SpeakeasyMetadata()
    expirationDateEpoch?: number;

    @SpeakeasyMetadata()
    expirationDateUtc?: string;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    invitation?: number;

    @SpeakeasyMetadata()
    invitationType?: string;

    @SpeakeasyMetadata()
    keepExistingSiteMembership?: boolean;

    @SpeakeasyMetadata()
    lastAction?: string;

    @SpeakeasyMetadata()
    message?: string;

    @SpeakeasyMetadata()
    replyTo?: string;

    @SpeakeasyMetadata()
    requireLogin?: boolean;

    @SpeakeasyMetadata()
    sentFrom?: string;

    @SpeakeasyMetadata()
    sentTo?: string;

    @SpeakeasyMetadata()
    site?: SiteObject;

    @SpeakeasyMetadata()
    subject?: string;

    @SpeakeasyMetadata()
    targetIos?: string;

    @SpeakeasyMetadata()
    username?: string;
}
