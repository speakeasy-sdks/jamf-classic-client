/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindComputerManagementBySerialNumberUsernameRequest extends SpeakeasyBase {
    /**
     * Computer serial number to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialnumber" })
    serialnumber: string;

    /**
     * Username to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    ebook?: FindComputerManagementBySerialNumberUsername200ApplicationXMLEbooksEbook;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLGeneral extends SpeakeasyBase {
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

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    macAppStoreApp?: FindComputerManagementBySerialNumberUsername200ApplicationXMLMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementBySerialNumberUsername200ApplicationXMLManagedPreferenceProfilesProfile;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementBySerialNumberUsername200ApplicationXMLOsXConfigurationProfilesProfile;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    patchPolicy?: FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchPoliciesPatchPolicy;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    installedVersion?: string;

    @SpeakeasyMetadata()
    latestVersion?: string;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    title?: FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLPoliciesPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    trigger?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    policy?: FindComputerManagementBySerialNumberUsername200ApplicationXMLPoliciesPolicy;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    software?: FindComputerManagementBySerialNumberUsername200ApplicationXMLRestrictedSoftwareSoftware;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementBySerialNumberUsername200ApplicationXMLSmartGroupsGroup;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationXMLStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementBySerialNumberUsername200ApplicationXMLStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementBySerialNumberUsername200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationXMLEbooks,
    })
    ebooks?: FindComputerManagementBySerialNumberUsername200ApplicationXMLEbooks[];

    @SpeakeasyMetadata()
    general?: FindComputerManagementBySerialNumberUsername200ApplicationXMLGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationXMLMacAppStoreApps,
    })
    macAppStoreApps?: FindComputerManagementBySerialNumberUsername200ApplicationXMLMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementBySerialNumberUsername200ApplicationXMLManagedPreferenceProfiles,
    })
    managedPreferenceProfiles?: FindComputerManagementBySerialNumberUsername200ApplicationXMLManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementBySerialNumberUsername200ApplicationXMLOsXConfigurationProfiles,
    })
    osXConfigurationProfiles?: FindComputerManagementBySerialNumberUsername200ApplicationXMLOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchPolicies,
    })
    patchPolicies?: FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchReportingSoftwareTitles,
    })
    patchReportingSoftwareTitles?: FindComputerManagementBySerialNumberUsername200ApplicationXMLPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationXMLPolicies,
    })
    policies?: FindComputerManagementBySerialNumberUsername200ApplicationXMLPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationXMLRestrictedSoftware,
    })
    restrictedSoftware?: FindComputerManagementBySerialNumberUsername200ApplicationXMLRestrictedSoftware[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationXMLSmartGroups,
    })
    smartGroups?: FindComputerManagementBySerialNumberUsername200ApplicationXMLSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationXMLStaticGroups,
    })
    staticGroups?: FindComputerManagementBySerialNumberUsername200ApplicationXMLStaticGroups[];
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ebook" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONEbooksEbook)
    ebook?: FindComputerManagementBySerialNumberUsername200ApplicationJSONEbooksEbook;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONGeneral extends SpeakeasyBase {
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

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mac_app_store_app" })
    @Type(
        () =>
            FindComputerManagementBySerialNumberUsername200ApplicationJSONMacAppStoreAppsMacAppStoreApp
    )
    macAppStoreApp?: FindComputerManagementBySerialNumberUsername200ApplicationJSONMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(
        () =>
            FindComputerManagementBySerialNumberUsername200ApplicationJSONManagedPreferenceProfilesProfile
    )
    profile?: FindComputerManagementBySerialNumberUsername200ApplicationJSONManagedPreferenceProfilesProfile;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(
        () =>
            FindComputerManagementBySerialNumberUsername200ApplicationJSONOsXConfigurationProfilesProfile
    )
    profile?: FindComputerManagementBySerialNumberUsername200ApplicationJSONOsXConfigurationProfilesProfile;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "patch_policy" })
    @Type(
        () => FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchPoliciesPatchPolicy
    )
    patchPolicy?: FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchPoliciesPatchPolicy;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
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

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    @Type(
        () =>
            FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchReportingSoftwareTitlesTitle
    )
    title?: FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONPoliciesPolicy extends SpeakeasyBase {
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

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONPoliciesPolicy)
    policy?: FindComputerManagementBySerialNumberUsername200ApplicationJSONPoliciesPolicy;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "software" })
    @Type(
        () =>
            FindComputerManagementBySerialNumberUsername200ApplicationJSONRestrictedSoftwareSoftware
    )
    software?: FindComputerManagementBySerialNumberUsername200ApplicationJSONRestrictedSoftwareSoftware;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONSmartGroupsGroup)
    group?: FindComputerManagementBySerialNumberUsername200ApplicationJSONSmartGroupsGroup;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementBySerialNumberUsername200ApplicationJSONStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONStaticGroupsGroup)
    group?: FindComputerManagementBySerialNumberUsername200ApplicationJSONStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementBySerialNumberUsername200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationJSONEbooks,
    })
    @Expose({ name: "ebooks" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONEbooks)
    ebooks?: FindComputerManagementBySerialNumberUsername200ApplicationJSONEbooks[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONGeneral)
    general?: FindComputerManagementBySerialNumberUsername200ApplicationJSONGeneral;

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationJSONMacAppStoreApps,
    })
    @Expose({ name: "mac_app_store_apps" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONMacAppStoreApps)
    macAppStoreApps?: FindComputerManagementBySerialNumberUsername200ApplicationJSONMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementBySerialNumberUsername200ApplicationJSONManagedPreferenceProfiles,
    })
    @Expose({ name: "managed_preference_profiles" })
    @Type(
        () =>
            FindComputerManagementBySerialNumberUsername200ApplicationJSONManagedPreferenceProfiles
    )
    managedPreferenceProfiles?: FindComputerManagementBySerialNumberUsername200ApplicationJSONManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementBySerialNumberUsername200ApplicationJSONOsXConfigurationProfiles,
    })
    @Expose({ name: "os_x_configuration_profiles" })
    @Type(
        () => FindComputerManagementBySerialNumberUsername200ApplicationJSONOsXConfigurationProfiles
    )
    osXConfigurationProfiles?: FindComputerManagementBySerialNumberUsername200ApplicationJSONOsXConfigurationProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchPolicies,
    })
    @Expose({ name: "patch_policies" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchPolicies)
    patchPolicies?: FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchPolicies[];

    @SpeakeasyMetadata({
        elemType:
            FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchReportingSoftwareTitles,
    })
    @Expose({ name: "patch_reporting_software_titles" })
    @Type(
        () =>
            FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchReportingSoftwareTitles
    )
    patchReportingSoftwareTitles?: FindComputerManagementBySerialNumberUsername200ApplicationJSONPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationJSONPolicies,
    })
    @Expose({ name: "policies" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONPolicies)
    policies?: FindComputerManagementBySerialNumberUsername200ApplicationJSONPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationJSONRestrictedSoftware,
    })
    @Expose({ name: "restricted_software" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONRestrictedSoftware)
    restrictedSoftware?: FindComputerManagementBySerialNumberUsername200ApplicationJSONRestrictedSoftware[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationJSONSmartGroups,
    })
    @Expose({ name: "smart_groups" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONSmartGroups)
    smartGroups?: FindComputerManagementBySerialNumberUsername200ApplicationJSONSmartGroups[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementBySerialNumberUsername200ApplicationJSONStaticGroups,
    })
    @Expose({ name: "static_groups" })
    @Type(() => FindComputerManagementBySerialNumberUsername200ApplicationJSONStaticGroups)
    staticGroups?: FindComputerManagementBySerialNumberUsername200ApplicationJSONStaticGroups[];
}

export class FindComputerManagementBySerialNumberUsernameResponse extends SpeakeasyBase {
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
    findComputerManagementBySerialNumberUsername200ApplicationJSONObject?: FindComputerManagementBySerialNumberUsername200ApplicationJSON;
}
