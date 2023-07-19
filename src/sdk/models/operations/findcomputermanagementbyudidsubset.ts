/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Subset to filter by
 */
export enum FindComputerManagementByUDIDSubsetSubset {
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

export class FindComputerManagementByUDIDSubsetRequest extends SpeakeasyBase {
    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindComputerManagementByUDIDSubsetSubset;

    /**
     * Computer UDID to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=udid" })
    udid: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    ebook?: FindComputerManagementByUDIDSubset200ApplicationXMLEbooksEbook;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLGeneral extends SpeakeasyBase {
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

export class FindComputerManagementByUDIDSubset200ApplicationXMLMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    macAppStoreApp?: FindComputerManagementByUDIDSubset200ApplicationXMLMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByUDIDSubset200ApplicationXMLManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByUDIDSubset200ApplicationXMLOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    patchPolicy?: FindComputerManagementByUDIDSubset200ApplicationXMLPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    installedVersion?: string;

    @SpeakeasyMetadata()
    latestVersion?: string;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    title?: FindComputerManagementByUDIDSubset200ApplicationXMLPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLPoliciesPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    trigger?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    policy?: FindComputerManagementByUDIDSubset200ApplicationXMLPoliciesPolicy;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    software?: FindComputerManagementByUDIDSubset200ApplicationXMLRestrictedSoftwareSoftware;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByUDIDSubset200ApplicationXMLSmartGroupsGroup;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationXMLStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByUDIDSubset200ApplicationXMLStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByUDIDSubset200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerManagementByUDIDSubset200ApplicationXMLEbooks })
    ebooks?: FindComputerManagementByUDIDSubset200ApplicationXMLEbooks[];

    @SpeakeasyMetadata()
    general?: FindComputerManagementByUDIDSubset200ApplicationXMLGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationXMLMacAppStoreApps,
    })
    macAppStoreApps?: FindComputerManagementByUDIDSubset200ApplicationXMLMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationXMLManagedPreferenceProfiles,
    })
    managedPreferenceProfiles?: FindComputerManagementByUDIDSubset200ApplicationXMLManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationXMLOsXConfigurationProfiles,
    })
    osXConfigurationProfiles?: FindComputerManagementByUDIDSubset200ApplicationXMLOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationXMLPatchPolicies,
    })
    patchPolicies?: FindComputerManagementByUDIDSubset200ApplicationXMLPatchPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationXMLPatchReportingSoftwareTitles,
    })
    patchReportingSoftwareTitles?: FindComputerManagementByUDIDSubset200ApplicationXMLPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByUDIDSubset200ApplicationXMLPolicies })
    policies?: FindComputerManagementByUDIDSubset200ApplicationXMLPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationXMLRestrictedSoftware,
    })
    restrictedSoftware?: FindComputerManagementByUDIDSubset200ApplicationXMLRestrictedSoftware[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByUDIDSubset200ApplicationXMLSmartGroups })
    smartGroups?: FindComputerManagementByUDIDSubset200ApplicationXMLSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationXMLStaticGroups,
    })
    staticGroups?: FindComputerManagementByUDIDSubset200ApplicationXMLStaticGroups[];
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ebook" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONEbooksEbook)
    ebook?: FindComputerManagementByUDIDSubset200ApplicationJSONEbooksEbook;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONGeneral extends SpeakeasyBase {
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

export class FindComputerManagementByUDIDSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mac_app_store_app" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp)
    macAppStoreApp?: FindComputerManagementByUDIDSubset200ApplicationJSONMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(
        () => FindComputerManagementByUDIDSubset200ApplicationJSONManagedPreferenceProfilesProfile
    )
    profile?: FindComputerManagementByUDIDSubset200ApplicationJSONManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONOsXConfigurationProfilesProfile)
    profile?: FindComputerManagementByUDIDSubset200ApplicationJSONOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "patch_policy" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONPatchPoliciesPatchPolicy)
    patchPolicy?: FindComputerManagementByUDIDSubset200ApplicationJSONPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
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

export class FindComputerManagementByUDIDSubset200ApplicationJSONPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    @Type(
        () => FindComputerManagementByUDIDSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle
    )
    title?: FindComputerManagementByUDIDSubset200ApplicationJSONPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONPoliciesPolicy extends SpeakeasyBase {
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

export class FindComputerManagementByUDIDSubset200ApplicationJSONPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONPoliciesPolicy)
    policy?: FindComputerManagementByUDIDSubset200ApplicationJSONPoliciesPolicy;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "software" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONRestrictedSoftwareSoftware)
    software?: FindComputerManagementByUDIDSubset200ApplicationJSONRestrictedSoftwareSoftware;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONSmartGroupsGroup)
    group?: FindComputerManagementByUDIDSubset200ApplicationJSONSmartGroupsGroup;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByUDIDSubset200ApplicationJSONStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONStaticGroupsGroup)
    group?: FindComputerManagementByUDIDSubset200ApplicationJSONStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByUDIDSubset200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerManagementByUDIDSubset200ApplicationJSONEbooks })
    @Expose({ name: "ebooks" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONEbooks)
    ebooks?: FindComputerManagementByUDIDSubset200ApplicationJSONEbooks[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONGeneral)
    general?: FindComputerManagementByUDIDSubset200ApplicationJSONGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONMacAppStoreApps,
    })
    @Expose({ name: "mac_app_store_apps" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONMacAppStoreApps)
    macAppStoreApps?: FindComputerManagementByUDIDSubset200ApplicationJSONMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONManagedPreferenceProfiles,
    })
    @Expose({ name: "managed_preference_profiles" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONManagedPreferenceProfiles)
    managedPreferenceProfiles?: FindComputerManagementByUDIDSubset200ApplicationJSONManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONOsXConfigurationProfiles,
    })
    @Expose({ name: "os_x_configuration_profiles" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONOsXConfigurationProfiles)
    osXConfigurationProfiles?: FindComputerManagementByUDIDSubset200ApplicationJSONOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONPatchPolicies,
    })
    @Expose({ name: "patch_policies" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONPatchPolicies)
    patchPolicies?: FindComputerManagementByUDIDSubset200ApplicationJSONPatchPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONPatchReportingSoftwareTitles,
    })
    @Expose({ name: "patch_reporting_software_titles" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONPatchReportingSoftwareTitles)
    patchReportingSoftwareTitles?: FindComputerManagementByUDIDSubset200ApplicationJSONPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByUDIDSubset200ApplicationJSONPolicies })
    @Expose({ name: "policies" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONPolicies)
    policies?: FindComputerManagementByUDIDSubset200ApplicationJSONPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONRestrictedSoftware,
    })
    @Expose({ name: "restricted_software" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONRestrictedSoftware)
    restrictedSoftware?: FindComputerManagementByUDIDSubset200ApplicationJSONRestrictedSoftware[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONSmartGroups,
    })
    @Expose({ name: "smart_groups" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONSmartGroups)
    smartGroups?: FindComputerManagementByUDIDSubset200ApplicationJSONSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByUDIDSubset200ApplicationJSONStaticGroups,
    })
    @Expose({ name: "static_groups" })
    @Type(() => FindComputerManagementByUDIDSubset200ApplicationJSONStaticGroups)
    staticGroups?: FindComputerManagementByUDIDSubset200ApplicationJSONStaticGroups[];
}

export class FindComputerManagementByUDIDSubsetResponse extends SpeakeasyBase {
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
    findComputerManagementByUDIDSubset200ApplicationJSONObject?: FindComputerManagementByUDIDSubset200ApplicationJSON;
}
