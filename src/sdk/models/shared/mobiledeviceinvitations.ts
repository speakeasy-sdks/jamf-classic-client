/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class MobileDeviceInvitationsMobileDeviceInvitation extends SpeakeasyBase {
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
    @Expose({ name: "last_action" })
    lastAction?: string;
}

export class MobileDeviceInvitations extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mobile_device_invitation" })
    @Type(() => MobileDeviceInvitationsMobileDeviceInvitation)
    mobileDeviceInvitation?: MobileDeviceInvitationsMobileDeviceInvitation;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}