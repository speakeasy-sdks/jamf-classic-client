/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindComputerManagementByNameRequest extends SpeakeasyBase {
    /**
     * Computer Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;
}

export class FindComputerManagementByName200ApplicationXMLEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    ebook?: FindComputerManagementByName200ApplicationXMLEbooksEbook;
}

export class FindComputerManagementByName200ApplicationXMLGeneral extends SpeakeasyBase {
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

export class FindComputerManagementByName200ApplicationXMLMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    macAppStoreApp?: FindComputerManagementByName200ApplicationXMLMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByName200ApplicationXMLManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByName200ApplicationXMLManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByName200ApplicationXMLOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    profile?: FindComputerManagementByName200ApplicationXMLOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByName200ApplicationXMLPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    patchPolicy?: FindComputerManagementByName200ApplicationXMLPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByName200ApplicationXMLPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    installedVersion?: string;

    @SpeakeasyMetadata()
    latestVersion?: string;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    title?: FindComputerManagementByName200ApplicationXMLPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByName200ApplicationXMLPoliciesPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    trigger?: string;
}

export class FindComputerManagementByName200ApplicationXMLPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    policy?: FindComputerManagementByName200ApplicationXMLPoliciesPolicy;
}

export class FindComputerManagementByName200ApplicationXMLRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    software?: FindComputerManagementByName200ApplicationXMLRestrictedSoftwareSoftware;
}

export class FindComputerManagementByName200ApplicationXMLSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByName200ApplicationXMLSmartGroupsGroup;
}

export class FindComputerManagementByName200ApplicationXMLStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindComputerManagementByName200ApplicationXMLStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    group?: FindComputerManagementByName200ApplicationXMLStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByName200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationXMLEbooks })
    ebooks?: FindComputerManagementByName200ApplicationXMLEbooks[];

    @SpeakeasyMetadata()
    general?: FindComputerManagementByName200ApplicationXMLGeneral;

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationXMLMacAppStoreApps })
    macAppStoreApps?: FindComputerManagementByName200ApplicationXMLMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationXMLManagedPreferenceProfiles,
    })
    managedPreferenceProfiles?: FindComputerManagementByName200ApplicationXMLManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationXMLOsXConfigurationProfiles,
    })
    osXConfigurationProfiles?: FindComputerManagementByName200ApplicationXMLOsXConfigurationProfiles[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationXMLPatchPolicies })
    patchPolicies?: FindComputerManagementByName200ApplicationXMLPatchPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationXMLPatchReportingSoftwareTitles,
    })
    patchReportingSoftwareTitles?: FindComputerManagementByName200ApplicationXMLPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationXMLPolicies })
    policies?: FindComputerManagementByName200ApplicationXMLPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationXMLRestrictedSoftware,
    })
    restrictedSoftware?: FindComputerManagementByName200ApplicationXMLRestrictedSoftware[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationXMLSmartGroups })
    smartGroups?: FindComputerManagementByName200ApplicationXMLSmartGroups[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationXMLStaticGroups })
    staticGroups?: FindComputerManagementByName200ApplicationXMLStaticGroups[];
}

export class FindComputerManagementByName200ApplicationJSONEbooksEbook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ebook" })
    @Type(() => FindComputerManagementByName200ApplicationJSONEbooksEbook)
    ebook?: FindComputerManagementByName200ApplicationJSONEbooksEbook;
}

export class FindComputerManagementByName200ApplicationJSONGeneral extends SpeakeasyBase {
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

export class FindComputerManagementByName200ApplicationJSONMacAppStoreAppsMacAppStoreApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONMacAppStoreApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mac_app_store_app" })
    @Type(() => FindComputerManagementByName200ApplicationJSONMacAppStoreAppsMacAppStoreApp)
    macAppStoreApp?: FindComputerManagementByName200ApplicationJSONMacAppStoreAppsMacAppStoreApp;
}

export class FindComputerManagementByName200ApplicationJSONManagedPreferenceProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONManagedPreferenceProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => FindComputerManagementByName200ApplicationJSONManagedPreferenceProfilesProfile)
    profile?: FindComputerManagementByName200ApplicationJSONManagedPreferenceProfilesProfile;
}

export class FindComputerManagementByName200ApplicationJSONOsXConfigurationProfilesProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONOsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => FindComputerManagementByName200ApplicationJSONOsXConfigurationProfilesProfile)
    profile?: FindComputerManagementByName200ApplicationJSONOsXConfigurationProfilesProfile;
}

export class FindComputerManagementByName200ApplicationJSONPatchPoliciesPatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONPatchPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "patch_policy" })
    @Type(() => FindComputerManagementByName200ApplicationJSONPatchPoliciesPatchPolicy)
    patchPolicy?: FindComputerManagementByName200ApplicationJSONPatchPoliciesPatchPolicy;
}

export class FindComputerManagementByName200ApplicationJSONPatchReportingSoftwareTitlesTitle extends SpeakeasyBase {
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

export class FindComputerManagementByName200ApplicationJSONPatchReportingSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    @Type(() => FindComputerManagementByName200ApplicationJSONPatchReportingSoftwareTitlesTitle)
    title?: FindComputerManagementByName200ApplicationJSONPatchReportingSoftwareTitlesTitle;
}

export class FindComputerManagementByName200ApplicationJSONPoliciesPolicy extends SpeakeasyBase {
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

export class FindComputerManagementByName200ApplicationJSONPolicies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => FindComputerManagementByName200ApplicationJSONPoliciesPolicy)
    policy?: FindComputerManagementByName200ApplicationJSONPoliciesPolicy;
}

export class FindComputerManagementByName200ApplicationJSONRestrictedSoftwareSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONRestrictedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "software" })
    @Type(() => FindComputerManagementByName200ApplicationJSONRestrictedSoftwareSoftware)
    software?: FindComputerManagementByName200ApplicationJSONRestrictedSoftwareSoftware;
}

export class FindComputerManagementByName200ApplicationJSONSmartGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONSmartGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByName200ApplicationJSONSmartGroupsGroup)
    group?: FindComputerManagementByName200ApplicationJSONSmartGroupsGroup;
}

export class FindComputerManagementByName200ApplicationJSONStaticGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindComputerManagementByName200ApplicationJSONStaticGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => FindComputerManagementByName200ApplicationJSONStaticGroupsGroup)
    group?: FindComputerManagementByName200ApplicationJSONStaticGroupsGroup;
}

/**
 * OK
 */
export class FindComputerManagementByName200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationJSONEbooks })
    @Expose({ name: "ebooks" })
    @Type(() => FindComputerManagementByName200ApplicationJSONEbooks)
    ebooks?: FindComputerManagementByName200ApplicationJSONEbooks[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindComputerManagementByName200ApplicationJSONGeneral)
    general?: FindComputerManagementByName200ApplicationJSONGeneral;

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationJSONMacAppStoreApps })
    @Expose({ name: "mac_app_store_apps" })
    @Type(() => FindComputerManagementByName200ApplicationJSONMacAppStoreApps)
    macAppStoreApps?: FindComputerManagementByName200ApplicationJSONMacAppStoreApps[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationJSONManagedPreferenceProfiles,
    })
    @Expose({ name: "managed_preference_profiles" })
    @Type(() => FindComputerManagementByName200ApplicationJSONManagedPreferenceProfiles)
    managedPreferenceProfiles?: FindComputerManagementByName200ApplicationJSONManagedPreferenceProfiles[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationJSONOsXConfigurationProfiles,
    })
    @Expose({ name: "os_x_configuration_profiles" })
    @Type(() => FindComputerManagementByName200ApplicationJSONOsXConfigurationProfiles)
    osXConfigurationProfiles?: FindComputerManagementByName200ApplicationJSONOsXConfigurationProfiles[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationJSONPatchPolicies })
    @Expose({ name: "patch_policies" })
    @Type(() => FindComputerManagementByName200ApplicationJSONPatchPolicies)
    patchPolicies?: FindComputerManagementByName200ApplicationJSONPatchPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationJSONPatchReportingSoftwareTitles,
    })
    @Expose({ name: "patch_reporting_software_titles" })
    @Type(() => FindComputerManagementByName200ApplicationJSONPatchReportingSoftwareTitles)
    patchReportingSoftwareTitles?: FindComputerManagementByName200ApplicationJSONPatchReportingSoftwareTitles[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationJSONPolicies })
    @Expose({ name: "policies" })
    @Type(() => FindComputerManagementByName200ApplicationJSONPolicies)
    policies?: FindComputerManagementByName200ApplicationJSONPolicies[];

    @SpeakeasyMetadata({
        elemType: FindComputerManagementByName200ApplicationJSONRestrictedSoftware,
    })
    @Expose({ name: "restricted_software" })
    @Type(() => FindComputerManagementByName200ApplicationJSONRestrictedSoftware)
    restrictedSoftware?: FindComputerManagementByName200ApplicationJSONRestrictedSoftware[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationJSONSmartGroups })
    @Expose({ name: "smart_groups" })
    @Type(() => FindComputerManagementByName200ApplicationJSONSmartGroups)
    smartGroups?: FindComputerManagementByName200ApplicationJSONSmartGroups[];

    @SpeakeasyMetadata({ elemType: FindComputerManagementByName200ApplicationJSONStaticGroups })
    @Expose({ name: "static_groups" })
    @Type(() => FindComputerManagementByName200ApplicationJSONStaticGroups)
    staticGroups?: FindComputerManagementByName200ApplicationJSONStaticGroups[];
}

export class FindComputerManagementByNameResponse extends SpeakeasyBase {
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
    findComputerManagementByName200ApplicationJSONObject?: FindComputerManagementByName200ApplicationJSON;
}
