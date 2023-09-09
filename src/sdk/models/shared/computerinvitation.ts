/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SiteObject } from "./siteobject";
import { Expose, Type } from "class-transformer";

export class ComputerInvitationEnrollIntoSite extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class ComputerInvitation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "create_account_if_does_not_exist" })
    createAccountIfDoesNotExist?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enroll_into_site" })
    @Type(() => ComputerInvitationEnrollIntoSite)
    enrollIntoSite?: ComputerInvitationEnrollIntoSite;

    /**
     * Use 'Unlimited' to specify no expiration date
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
    @Expose({ name: "hide_account" })
    hideAccount?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invitation" })
    invitation?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invitation_status" })
    invitationStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invitation_type" })
    invitationType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invited_user_uuid" })
    invitedUserUuid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "keep_existing_site_membership" })
    keepExistingSiteMembership?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "lock_down_ssh" })
    lockDownSsh?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "multiple_users_allowed" })
    multipleUsersAllowed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => SiteObject)
    site?: SiteObject;

    @SpeakeasyMetadata()
    @Expose({ name: "ssh_password" })
    sshPassword?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ssh_username" })
    sshUsername?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "times_used" })
    timesUsed?: number;
}
