/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Subset to filter by
 */
export enum FindComputerManagementByNameUsernameSubsetSubset {
    General = "General",
    Policies = "Policies",
    Ebooks = "Ebooks",
    MacAppStoreApps = "MacAppStoreApps",
    OSXConfigurationProfiles = "OSXConfigurationProfiles",
    ManagedPreferenceProfiles = "ManagedPreferenceProfiles",
    RestrictedSoftware = "RestrictedSoftware",
    SmartGroups = "SmartGroups",
    StaticGroups = "StaticGroups",
    PatchReportingSoftwareTitles = "PatchReportingSoftwareTitles",
}

export class FindComputerManagementByNameUsernameSubsetRequest extends SpeakeasyBase {
    /**
     * Computer name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerManagementByNameUsernameSubsetSubset;

    /**
     * Username to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    ebook?: FindComputerManagementByNameUsernameSubset200ApplicationXMLEbooksEbook;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    macAddress?: string;

    /**
     * Name of the computer
     */
    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    serialNumber?: string;

    @SpeakeasyMetadata()
    udid?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    macAppStoreApp?: FindComputerManagementByNameUsernameSubset200ApplicationXMLMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByNameUsernameSubset200ApplicationXMLManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByNameUsernameSubset200ApplicationXMLOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    patchPolicy?: FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    installedVersion?: string;

    @SpeakeasyMetadata()
    latestVersion?: string;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    title?: FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLPoliciesPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    trigger?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    policy?: FindComputerManagementByNameUsernameSubset200ApplicationXMLPoliciesPolicy;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    software?: FindComputerManagementByNameUsernameSubset200ApplicationXMLRestrictedSoftwareSoftware;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByNameUsernameSubset200ApplicationXMLSmartGroupsGroup;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationXMLStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByNameUsernameSubset200ApplicationXMLStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByNameUsernameSubset200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationXMLEbooks,
    })
    ebooks?: FindComputerManagementByNameUsernameSubset200ApplicationXMLEbooks[];

    @SpeakeasyMetadata()
    general?: FindComputerManagementByNameUsernameSubset200ApplicationXMLGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationXMLMacAppStoreApps,
    })
    macAppStoreApps?: FindComputerManagementByNameUsernameSubset200ApplicationXMLMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByNameUsernameSubset200ApplicationXMLManagedPreferenceProfiles,
    })
    managedPreferenceProfiles?: FindComputerManagementByNameUsernameSubset200ApplicationXMLManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByNameUsernameSubset200ApplicationXMLOsXConfigurationProfiles,
    })
    osXConfigurationProfiles?: FindComputerManagementByNameUsernameSubset200ApplicationXMLOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchPolicies,
    })
    patchPolicies?: FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchReportingSoftwareTitles,
    })
    patchReportingSoftwareTitles?: FindComputerManagementByNameUsernameSubset200ApplicationXMLPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationXMLPolicies,
    })
    policies?: FindComputerManagementByNameUsernameSubset200ApplicationXMLPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationXMLRestrictedSoftware,
    })
    restrictedSoftware?: FindComputerManagementByNameUsernameSubset200ApplicationXMLRestrictedSoftware[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationXMLSmartGroups,
    })
    smartGroups?: FindComputerManagementByNameUsernameSubset200ApplicationXMLSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationXMLStaticGroups,
    })
    staticGroups?: FindComputerManagementByNameUsernameSubset200ApplicationXMLStaticGroups[];
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ebook" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONEbooksEbook)
    ebook?: FindComputerManagementByNameUsernameSubset200ApplicationJSONEbooksEbook;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mac_address" })
    macAddress?: string;

    /**
     * Name of the computer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "serial_number" })
    serialNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mac_app_store_app" })
    @Type(
        () =>
            FindComputerManagementByNameUsernameSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp
    )
    macAppStoreApp?: FindComputerManagementByNameUsernameSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(
        () =>
            FindComputerManagementByNameUsernameSubset200ApplicationJSONManagedPreferenceProfilesProfile
    )
    profile?: FindComputerManagementByNameUsernameSubset200ApplicationJSONManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(
        () =>
            FindComputerManagementByNameUsernameSubset200ApplicationJSONOsXConfigurationProfilesProfile
    )
    profile?: FindComputerManagementByNameUsernameSubset200ApplicationJSONOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "patch_policy" })
    @Type(
        () => FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchPoliciesPatchPolicy
    )
    patchPolicy?: FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "installed_version" })
    installedVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "latest_version" })
    latestVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    @Type(
        () =>
            FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle
    )
    title?: FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONPoliciesPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "trigger" })
    trigger?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONPoliciesPolicy)
    policy?: FindComputerManagementByNameUsernameSubset200ApplicationJSONPoliciesPolicy;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "software" })
    @Type(
        () => FindComputerManagementByNameUsernameSubset200ApplicationJSONRestrictedSoftwareSoftware
    )
    software?: FindComputerManagementByNameUsernameSubset200ApplicationJSONRestrictedSoftwareSoftware;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONSmartGroupsGroup)
    group?: FindComputerManagementByNameUsernameSubset200ApplicationJSONSmartGroupsGroup;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByNameUsernameSubset200ApplicationJSONStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONStaticGroupsGroup)
    group?: FindComputerManagementByNameUsernameSubset200ApplicationJSONStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByNameUsernameSubset200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationJSONEbooks,
    })
    @Expose({ name: "ebooks" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONEbooks)
    ebooks?: FindComputerManagementByNameUsernameSubset200ApplicationJSONEbooks[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONGeneral)
    general?: FindComputerManagementByNameUsernameSubset200ApplicationJSONGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationJSONMacAppStoreApps,
    })
    @Expose({ name: "mac_app_store_apps" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONMacAppStoreApps)
    macAppStoreApps?: FindComputerManagementByNameUsernameSubset200ApplicationJSONMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByNameUsernameSubset200ApplicationJSONManagedPreferenceProfiles,
    })
    @Expose({ name: "managed_preference_profiles" })
    @Type(
        () => FindComputerManagementByNameUsernameSubset200ApplicationJSONManagedPreferenceProfiles
    )
    managedPreferenceProfiles?: FindComputerManagementByNameUsernameSubset200ApplicationJSONManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByNameUsernameSubset200ApplicationJSONOsXConfigurationProfiles,
    })
    @Expose({ name: "os_x_configuration_profiles" })
    @Type(
        () => FindComputerManagementByNameUsernameSubset200ApplicationJSONOsXConfigurationProfiles
    )
    osXConfigurationProfiles?: FindComputerManagementByNameUsernameSubset200ApplicationJSONOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchPolicies,
    })
    @Expose({ name: "patch_policies" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchPolicies)
    patchPolicies?: FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles,
    })
    @Expose({ name: "patch_reporting_software_titles" })
    @Type(
        () =>
            FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles
    )
    patchReportingSoftwareTitles?: FindComputerManagementByNameUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationJSONPolicies,
    })
    @Expose({ name: "policies" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONPolicies)
    policies?: FindComputerManagementByNameUsernameSubset200ApplicationJSONPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationJSONRestrictedSoftware,
    })
    @Expose({ name: "restricted_software" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONRestrictedSoftware)
    restrictedSoftware?: FindComputerManagementByNameUsernameSubset200ApplicationJSONRestrictedSoftware[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationJSONSmartGroups,
    })
    @Expose({ name: "smart_groups" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONSmartGroups)
    smartGroups?: FindComputerManagementByNameUsernameSubset200ApplicationJSONSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByNameUsernameSubset200ApplicationJSONStaticGroups,
    })
    @Expose({ name: "static_groups" })
    @Type(() => FindComputerManagementByNameUsernameSubset200ApplicationJSONStaticGroups)
    staticGroups?: FindComputerManagementByNameUsernameSubset200ApplicationJSONStaticGroups[];
}

export class FindComputerManagementByNameUsernameSubsetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    findComputerManagementByNameUsernameSubset200ApplicationJSONObject?: FindComputerManagementByNameUsernameSubset200ApplicationJSON;
}
