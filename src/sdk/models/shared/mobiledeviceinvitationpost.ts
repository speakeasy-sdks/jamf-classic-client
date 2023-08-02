/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SiteObject } from "./siteobject";
import { Expose, Type } from "class-transformer";

export class MobileDeviceInvitationPostEnrolledIntoSite extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

/**
 * Created
 */
export class MobileDeviceInvitationPost extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_multiple_uses" })
    allowMultipleUses?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "date_sent" })
    dateSent?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_sent_epoch" })
    dateSentEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "date_sent_utc" })
    dateSentUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "enrolled_into_site" })
    @Type(() => MobileDeviceInvitationPostEnrolledIntoSite)
    enrolledIntoSite?: MobileDeviceInvitationPostEnrolledIntoSite;

    /**
     * Use 'Unlimited' to specify no expiration
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiration_date" })
    expirationDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expiration_date_epoch" })
    expirationDateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "expiration_date_utc" })
    expirationDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invitation" })
    invitation?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invitation_type" })
    invitationType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "keep_existing_site_membership" })
    keepExistingSiteMembership?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "last_action" })
    lastAction?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reply_to" })
    replyTo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "require_login" })
    requireLogin?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sent_from" })
    sentFrom?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sent_to" })
    sentTo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => SiteObject)
    site?: SiteObject;

    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "target_ios" })
    targetIos?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}
