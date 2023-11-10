/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Expose, Type } from "class-transformer";

export class VppAssignmentEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "adam_id" })
    adamId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class VppAssignmentEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ebook" })
    @Type(() => VppAssignmentEbook)
    ebook?: VppAssignmentEbook;
}

export class VppAssignmentGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vpp_admin_account_id" })
    vppAdminAccountId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "vpp_admin_account_name" })
    vppAdminAccountName?: string;
}

export class IosApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "adam_id" })
    adamId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class IosApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ios_app" })
    @Type(() => IosApp)
    iosApp?: IosApp;
}

export class MacApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "adam_id" })
    adamId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class MacApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mac_app" })
    @Type(() => MacApp)
    macApp?: MacApp;
}

export class VppAssignmentSchemasJssUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class VppAssignmentSchemasJssUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export class VppAssignmentUserGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class VppAssignmentUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => VppAssignmentUserGroup)
    userGroup?: VppAssignmentUserGroup;
}

export class VppAssignmentExclusions extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: VppAssignmentSchemasJssUserGroups })
    @Expose({ name: "jss_user_groups" })
    @Type(() => VppAssignmentSchemasJssUserGroups)
    jssUserGroups?: VppAssignmentSchemasJssUserGroups[];

    @SpeakeasyMetadata({ elemType: VppAssignmentSchemasJssUsers })
    @Expose({ name: "jss_users" })
    @Type(() => VppAssignmentSchemasJssUsers)
    jssUsers?: VppAssignmentSchemasJssUsers[];

    @SpeakeasyMetadata({ elemType: VppAssignmentUserGroups })
    @Expose({ name: "user_groups" })
    @Type(() => VppAssignmentUserGroups)
    userGroups?: VppAssignmentUserGroups[];
}

export class VppAssignmentJssUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class VppAssignmentJssUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export class VppAssignmentSchemasUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class VppAssignmentLimitations extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: VppAssignmentSchemasUserGroups })
    @Expose({ name: "user_groups" })
    @Type(() => VppAssignmentSchemasUserGroups)
    userGroups?: VppAssignmentSchemasUserGroups[];
}

export class VppAssignmentScope extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "all_jss_users" })
    allJssUsers?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "exclusions" })
    @Type(() => VppAssignmentExclusions)
    exclusions?: VppAssignmentExclusions;

    @SpeakeasyMetadata({ elemType: VppAssignmentJssUserGroups })
    @Expose({ name: "jss_user_groups" })
    @Type(() => VppAssignmentJssUserGroups)
    jssUserGroups?: VppAssignmentJssUserGroups[];

    @SpeakeasyMetadata({ elemType: VppAssignmentJssUsers })
    @Expose({ name: "jss_users" })
    @Type(() => VppAssignmentJssUsers)
    jssUsers?: VppAssignmentJssUsers[];

    @SpeakeasyMetadata()
    @Expose({ name: "limitations" })
    @Type(() => VppAssignmentLimitations)
    limitations?: VppAssignmentLimitations;
}

export class VppAssignment extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: VppAssignmentEbooks })
    @Expose({ name: "ebooks" })
    @Type(() => VppAssignmentEbooks)
    ebooks?: VppAssignmentEbooks[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => VppAssignmentGeneral)
    general?: VppAssignmentGeneral;

    @SpeakeasyMetadata({ elemType: IosApps })
    @Expose({ name: "ios_apps" })
    @Type(() => IosApps)
    iosApps?: IosApps[];

    @SpeakeasyMetadata({ elemType: MacApps })
    @Expose({ name: "mac_apps" })
    @Type(() => MacApps)
    macApps?: MacApps[];

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    @Type(() => VppAssignmentScope)
    scope?: VppAssignmentScope;
}
