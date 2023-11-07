/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SiteObject } from "./siteobject";
import { Expose, Type } from "class-transformer";

export enum AccessLevel {
    FullAccess = "Full Access",
    SiteAccess = "Site Access",
    GroupAccess = "Group Access",
}

export enum Enabled {
    Enabled = "Enabled",
    Disabled = "Disabled",
}

export class AccountLdapServer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export enum PrivilegeSet {
    Administrator = "Administrator",
    Auditor = "Auditor",
    EnrollmentOnly = "Enrollment Only",
    Custom = "Custom",
}

export class CasperAdmin extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class CasperImaging extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class CasperRemote extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class JssActions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class JssObjects extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class JssSettings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class Recon extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "privilege" })
    privilege?: string;
}

export class Privileges extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CasperAdmin })
    @Expose({ name: "casper_admin" })
    @Type(() => CasperAdmin)
    casperAdmin?: CasperAdmin[];

    @SpeakeasyMetadata({ elemType: CasperImaging })
    @Expose({ name: "casper_imaging" })
    @Type(() => CasperImaging)
    casperImaging?: CasperImaging[];

    @SpeakeasyMetadata({ elemType: CasperRemote })
    @Expose({ name: "casper_remote" })
    @Type(() => CasperRemote)
    casperRemote?: CasperRemote[];

    @SpeakeasyMetadata({ elemType: JssActions })
    @Expose({ name: "jss_actions" })
    @Type(() => JssActions)
    jssActions?: JssActions[];

    @SpeakeasyMetadata({ elemType: JssObjects })
    @Expose({ name: "jss_objects" })
    @Type(() => JssObjects)
    jssObjects?: JssObjects[];

    @SpeakeasyMetadata({ elemType: JssSettings })
    @Expose({ name: "jss_settings" })
    @Type(() => JssSettings)
    jssSettings?: JssSettings[];

    @SpeakeasyMetadata({ elemType: Recon })
    @Expose({ name: "recon" })
    @Type(() => Recon)
    recon?: Recon[];
}

export class Account extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "access_level" })
    accessLevel?: AccessLevel;

    @SpeakeasyMetadata()
    @Expose({ name: "directory_user" })
    directoryUser?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email_address" })
    emailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: Enabled;

    @SpeakeasyMetadata()
    @Expose({ name: "force_password_change" })
    forcePasswordChange?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "full_name" })
    fullName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "ldap_server" })
    @Type(() => AccountLdapServer)
    ldapServer?: AccountLdapServer;

    /**
     * Name of the account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "privilege_set" })
    privilegeSet?: PrivilegeSet;

    @SpeakeasyMetadata()
    @Expose({ name: "privileges" })
    @Type(() => Privileges)
    privileges?: Privileges;

    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => SiteObject)
    site?: SiteObject;
}
