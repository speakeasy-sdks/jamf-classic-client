/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Site } from "./site";
import { Expose, Type } from "class-transformer";

export enum GroupAccessLevel {
    FullAccess = "Full Access",
    SiteAccess = "Site Access",
    GroupAccess = "Group Access",
}

export class Members extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export enum GroupPrivilegeSet {
    Administrator = "Administrator",
    Auditor = "Auditor",
    EnrollmentOnly = "Enrollment Only",
    Custom = "Custom",
}

export class GroupCasperAdmin extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class GroupCasperImaging extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class GroupCasperRemote extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class GroupJssActions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class GroupJssObjects extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class GroupJssSettings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class GroupRecon extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class GroupPrivileges extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GroupCasperAdmin })
    @Expose({ name: "casper_admin" })
    @Type(() => GroupCasperAdmin)
    casperAdmin?: GroupCasperAdmin[];

    @SpeakeasyMetadata({ elemType: GroupCasperImaging })
    @Expose({ name: "casper_imaging" })
    @Type(() => GroupCasperImaging)
    casperImaging?: GroupCasperImaging[];

    @SpeakeasyMetadata({ elemType: GroupCasperRemote })
    @Expose({ name: "casper_remote" })
    @Type(() => GroupCasperRemote)
    casperRemote?: GroupCasperRemote[];

    @SpeakeasyMetadata({ elemType: GroupJssActions })
    @Expose({ name: "jss_actions" })
    @Type(() => GroupJssActions)
    jssActions?: GroupJssActions[];

    @SpeakeasyMetadata({ elemType: GroupJssObjects })
    @Expose({ name: "jss_objects" })
    @Type(() => GroupJssObjects)
    jssObjects?: GroupJssObjects[];

    @SpeakeasyMetadata({ elemType: GroupJssSettings })
    @Expose({ name: "jss_settings" })
    @Type(() => GroupJssSettings)
    jssSettings?: GroupJssSettings[];

    @SpeakeasyMetadata({ elemType: GroupRecon })
    @Expose({ name: "recon" })
    @Type(() => GroupRecon)
    recon?: GroupRecon[];
}

export class Group extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "access_level" })
    accessLevel?: GroupAccessLevel;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata({ elemType: Members })
    @Expose({ name: "members" })
    @Type(() => Members)
    members?: Members[];

    /**
     * Group name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "privilege_set" })
    privilegeSet?: GroupPrivilegeSet;

    @SpeakeasyMetadata()
    @Expose({ name: "privileges" })
    @Type(() => GroupPrivileges)
    privileges?: GroupPrivileges;

    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => Site)
    site?: Site;
}
