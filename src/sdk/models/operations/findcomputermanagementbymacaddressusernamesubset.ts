/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Subset to filter by
 */
export enum FindComputerManagementByMacAddressUsernameSubsetSubset {
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

export class FindComputerManagementByMacAddressUsernameSubsetRequest extends SpeakeasyBase {
    /**
     * Computer Mac Address to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=macaddress" })
    macaddress: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerManagementByMacAddressUsernameSubsetSubset;

    /**
     * Username to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    ebook?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLEbooksEbook;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLGeneral extends SpeakeasyBase {
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

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    macAppStoreApp?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    patchPolicy?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    installedVersion?: string;

    @SpeakeasyMetadata()
    latestVersion?: string;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    title?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPoliciesPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    trigger?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    policy?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPoliciesPolicy;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    software?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLRestrictedSoftwareSoftware;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLSmartGroupsGroup;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByMacAddressUsernameSubset200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLEbooks,
    })
    ebooks?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLEbooks[];

    @SpeakeasyMetadata()
    general?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLMacAppStoreApps,
    })
    macAppStoreApps?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLManagedPreferenceProfiles,
    })
    managedPreferenceProfiles?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLOsXConfigurationProfiles,
    })
    osXConfigurationProfiles?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchPolicies,
    })
    patchPolicies?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchReportingSoftwareTitles,
    })
    patchReportingSoftwareTitles?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPolicies,
    })
    policies?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLRestrictedSoftware,
    })
    restrictedSoftware?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLRestrictedSoftware[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLSmartGroups,
    })
    smartGroups?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLStaticGroups,
    })
    staticGroups?: FindComputerManagementByMacAddressUsernameSubset200ApplicationXMLStaticGroups[];
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ebook" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONEbooksEbook)
    ebook?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONEbooksEbook;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONGeneral extends SpeakeasyBase {
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

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mac_app_store_app" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp
    )
    macAppStoreApp?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONManagedPreferenceProfilesProfile
    )
    profile?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONOsXConfigurationProfilesProfile
    )
    profile?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "patch_policy" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchPoliciesPatchPolicy
    )
    patchPolicy?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
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

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle
    )
    title?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPoliciesPolicy extends SpeakeasyBase {
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

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPoliciesPolicy)
    policy?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPoliciesPolicy;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "software" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONRestrictedSoftwareSoftware
    )
    software?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONRestrictedSoftwareSoftware;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONSmartGroupsGroup)
    group?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONSmartGroupsGroup;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONStaticGroupsGroup)
    group?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByMacAddressUsernameSubset200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONEbooks,
    })
    @Expose({ name: "ebooks" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONEbooks)
    ebooks?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONEbooks[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONGeneral)
    general?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONMacAppStoreApps,
    })
    @Expose({ name: "mac_app_store_apps" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONMacAppStoreApps)
    macAppStoreApps?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONManagedPreferenceProfiles,
    })
    @Expose({ name: "managed_preference_profiles" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONManagedPreferenceProfiles
    )
    managedPreferenceProfiles?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONOsXConfigurationProfiles,
    })
    @Expose({ name: "os_x_configuration_profiles" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONOsXConfigurationProfiles
    )
    osXConfigurationProfiles?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchPolicies,
    })
    @Expose({ name: "patch_policies" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchPolicies)
    patchPolicies?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles,
    })
    @Expose({ name: "patch_reporting_software_titles" })
    @Type(
        () =>
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles
    )
    patchReportingSoftwareTitles?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPolicies,
    })
    @Expose({ name: "policies" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPolicies)
    policies?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONRestrictedSoftware,
    })
    @Expose({ name: "restricted_software" })
    @Type(
        () => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONRestrictedSoftware
    )
    restrictedSoftware?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONRestrictedSoftware[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONSmartGroups,
    })
    @Expose({ name: "smart_groups" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONSmartGroups)
    smartGroups?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONStaticGroups,
    })
    @Expose({ name: "static_groups" })
    @Type(() => FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONStaticGroups)
    staticGroups?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSONStaticGroups[];
}

export class FindComputerManagementByMacAddressUsernameSubsetResponse extends SpeakeasyBase {
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
    findComputerManagementByMacAddressUsernameSubset200ApplicationJSONObject?: FindComputerManagementByMacAddressUsernameSubset200ApplicationJSON;
}
