/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Expose, Type } from "class-transformer";

export enum VppInvitationGeneralDistributionMethod {
    PromptUsersToAcceptMakeAvailableInSelfService = "Prompt users to accept/make available in Self Service",
    SendEmails = "Send emails",
    MakeAvailableInSelfServiceOnly = "Make available in Self Service only",
}

export class VppInvitationGeneralVppAccount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;
}

export class VppInvitationGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "distribution_method" })
    distributionMethod?: VppInvitationGeneralDistributionMethod;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "require_login" })
    requireLogin?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sender_email_address" })
    senderEmailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sender_name" })
    senderName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vpp_account" })
    @Type(() => VppInvitationGeneralVppAccount)
    vppAccount?: VppInvitationGeneralVppAccount;
}

export class VppInvitationInvitationUsageUsage extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email_address" })
    emailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_action_date_utc" })
    lastActionDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_action_epoch" })
    lastActionEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vpp_account" })
    vppAccount?: string;
}

export class VppInvitationInvitationUsage extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "usage" })
    @Type(() => VppInvitationInvitationUsageUsage)
    usage?: VppInvitationInvitationUsageUsage;
}

export class VppInvitationScopeExclusionsJssUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class VppInvitationScopeExclusionsJssUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export class VppInvitationScopeExclusionsUserGroupsUserGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class VppInvitationScopeExclusionsUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => VppInvitationScopeExclusionsUserGroupsUserGroup)
    userGroup?: VppInvitationScopeExclusionsUserGroupsUserGroup;
}

export class VppInvitationScopeExclusions extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: VppInvitationScopeExclusionsJssUserGroups })
    @Expose({ name: "jss_user_groups" })
    @Type(() => VppInvitationScopeExclusionsJssUserGroups)
    jssUserGroups?: VppInvitationScopeExclusionsJssUserGroups[];

    @SpeakeasyMetadata({ elemType: VppInvitationScopeExclusionsJssUsers })
    @Expose({ name: "jss_users" })
    @Type(() => VppInvitationScopeExclusionsJssUsers)
    jssUsers?: VppInvitationScopeExclusionsJssUsers[];

    @SpeakeasyMetadata({ elemType: VppInvitationScopeExclusionsUserGroups })
    @Expose({ name: "user_groups" })
    @Type(() => VppInvitationScopeExclusionsUserGroups)
    userGroups?: VppInvitationScopeExclusionsUserGroups[];
}

export class VppInvitationScopeJssUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class VppInvitationScopeJssUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export class VppInvitationScopeLimitationsUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class VppInvitationScopeLimitations extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: VppInvitationScopeLimitationsUserGroups })
    @Expose({ name: "user_groups" })
    @Type(() => VppInvitationScopeLimitationsUserGroups)
    userGroups?: VppInvitationScopeLimitationsUserGroups[];
}

export class VppInvitationScope extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "all_jss_users" })
    allJssUsers?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "exclusions" })
    @Type(() => VppInvitationScopeExclusions)
    exclusions?: VppInvitationScopeExclusions;

    @SpeakeasyMetadata({ elemType: VppInvitationScopeJssUserGroups })
    @Expose({ name: "jss_user_groups" })
    @Type(() => VppInvitationScopeJssUserGroups)
    jssUserGroups?: VppInvitationScopeJssUserGroups[];

    @SpeakeasyMetadata({ elemType: VppInvitationScopeJssUsers })
    @Expose({ name: "jss_users" })
    @Type(() => VppInvitationScopeJssUsers)
    jssUsers?: VppInvitationScopeJssUsers[];

    @SpeakeasyMetadata()
    @Expose({ name: "limitations" })
    @Type(() => VppInvitationScopeLimitations)
    limitations?: VppInvitationScopeLimitations;
}

/**
 * OK
 */
export class VppInvitation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => VppInvitationGeneral)
    general?: VppInvitationGeneral;

    @SpeakeasyMetadata({ elemType: VppInvitationInvitationUsage })
    @Expose({ name: "invitation_usage" })
    @Type(() => VppInvitationInvitationUsage)
    invitationUsage?: VppInvitationInvitationUsage[];

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    @Type(() => VppInvitationScope)
    scope?: VppInvitationScope;
}