/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Subset to filter by
 */
export enum FindMobileDeviceHistoryByNameSubsetSubset {
    General = "General",
    ManagementCommands = "ManagementCommands",
    UserLocation = "UserLocation",
    Audits = "Audits",
    Applications = "Applications",
    Ebooks = "Ebooks",
}

export class FindMobileDeviceHistoryByNameSubsetRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindMobileDeviceHistoryByNameSubsetSubset;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsFailedApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    app?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsFailedApp;
}

export enum FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    bundleSize?: string;

    @SpeakeasyMetadata()
    dynamicSize?: string;

    @SpeakeasyMetadata()
    managementStatus?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export enum FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    bundleSize?: string;

    @SpeakeasyMetadata()
    dynamicSize?: string;

    @SpeakeasyMetadata()
    managementStatus?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export enum FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledOtherManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledOther extends SpeakeasyBase {
    @SpeakeasyMetadata()
    bundleSize?: string;

    @SpeakeasyMetadata()
    dynamicSize?: string;

    @SpeakeasyMetadata()
    managementStatus?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledOtherManagementStatus;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata()
    appStoreFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    inHouseFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    other?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalledOther;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsPendingApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    app?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsPendingApp;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplications extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsFailed,
    })
    failed?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalled,
    })
    installed?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsInstalled[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsPending,
    })
    pending?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplicationsPending[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLAuditsAudit extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: number;

    @SpeakeasyMetadata()
    event?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLAudits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    audit?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLAuditsAudit;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    author?: string;

    @SpeakeasyMetadata()
    kind?: string;

    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    title?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalledIbookstore extends SpeakeasyBase {
    @SpeakeasyMetadata()
    author?: string;

    @SpeakeasyMetadata()
    kind?: string;

    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    title?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalledInhouse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    author?: string;

    @SpeakeasyMetadata()
    kind?: string;

    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    title?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalledIbookstore,
    })
    ibookstore?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalledIbookstore[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalledInhouse,
    })
    inhouse?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalledInhouse[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    author?: string;

    @SpeakeasyMetadata()
    kind?: string;

    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    title?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksFailed,
    })
    failed?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksFailed[];

    @SpeakeasyMetadata()
    installed?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksInstalled;

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksPending,
    })
    pending?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooksPending[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    macAddress?: string;

    /**
     * Name of the device
     */
    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    serialNumber?: string;

    @SpeakeasyMetadata()
    udid?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsCompletedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTimeCompleted?: string;

    @SpeakeasyMetadata()
    dateTimeCompletedEpoch?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsCompleted extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsCompletedCommand;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsFailedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTimeFailed?: string;

    @SpeakeasyMetadata()
    dateTimeFailedEpoch?: number;

    @SpeakeasyMetadata()
    dateTimeIssued?: string;

    @SpeakeasyMetadata()
    dateTimeIssuedEpoch?: string;

    @SpeakeasyMetadata()
    error?: string;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsFailedCommand;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsPendingCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTimeFailed?: string;

    @SpeakeasyMetadata()
    dateTimeFailedEpoch?: number;

    @SpeakeasyMetadata()
    dateTimeIssued?: string;

    @SpeakeasyMetadata()
    dateTimeIssuedEpoch?: string;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsPendingCommand;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommands extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsCompleted,
    })
    completed?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsCompleted[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsFailed,
    })
    failed?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsPending,
    })
    pending?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommandsPending[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLUserLocationLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    building?: string;

    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: number;

    @SpeakeasyMetadata()
    department?: string;

    @SpeakeasyMetadata()
    emailAddress?: string;

    @SpeakeasyMetadata()
    fullName?: string;

    @SpeakeasyMetadata()
    phoneNumber?: string;

    @SpeakeasyMetadata()
    position?: string;

    @SpeakeasyMetadata()
    room?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationXMLUserLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    location?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLUserLocationLocation;
}

/**
 * OK
 */
export class FindMobileDeviceHistoryByNameSubset200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    applications?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLApplications;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLAudits })
    audits?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLAudits[];

    @SpeakeasyMetadata()
    ebooks?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLEbooks;

    @SpeakeasyMetadata()
    general?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLGeneral;

    @SpeakeasyMetadata()
    managementCommands?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLManagementCommands;

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationXMLUserLocation,
    })
    userLocation?: FindMobileDeviceHistoryByNameSubset200ApplicationXMLUserLocation[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsFailedApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsFailedApp)
    app?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsFailedApp;
}

export enum FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bundle_size" })
    bundleSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_size" })
    dynamicSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export enum FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bundle_size" })
    bundleSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_size" })
    dynamicSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export enum FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledOtherManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledOther extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bundle_size" })
    bundleSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_size" })
    dynamicSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledOtherManagementStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app_store_from_mobile_device_app_catalog" })
    @Type(
        () =>
            FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalog
    )
    appStoreFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    @Expose({ name: "in_house_from_mobile_device_app_catalog" })
    @Type(
        () =>
            FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalog
    )
    inHouseFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    @Expose({ name: "other" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledOther)
    other?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalledOther;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsPendingApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsPendingApp)
    app?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsPendingApp;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplications extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsFailed,
    })
    @Expose({ name: "failed" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsFailed)
    failed?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalled,
    })
    @Expose({ name: "installed" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalled)
    installed?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsInstalled[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsPending,
    })
    @Expose({ name: "pending" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsPending)
    pending?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplicationsPending[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONAuditsAudit extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONAudits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "audit" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONAuditsAudit)
    audit?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONAuditsAudit;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "author" })
    author?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "kind" })
    kind?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledIbookstore extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "author" })
    author?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "kind" })
    kind?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledInhouse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "author" })
    author?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "kind" })
    kind?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledIbookstore,
    })
    @Expose({ name: "ibookstore" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledIbookstore)
    ibookstore?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledIbookstore[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledInhouse,
    })
    @Expose({ name: "inhouse" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledInhouse)
    inhouse?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalledInhouse[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "author" })
    author?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "kind" })
    kind?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksFailed,
    })
    @Expose({ name: "failed" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksFailed)
    failed?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksFailed[];

    @SpeakeasyMetadata()
    @Expose({ name: "installed" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalled)
    installed?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksInstalled;

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksPending,
    })
    @Expose({ name: "pending" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksPending)
    pending?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooksPending[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mac_address" })
    macAddress?: string;

    /**
     * Name of the device
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

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsCompletedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time_completed" })
    dateTimeCompleted?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_completed_epoch" })
    dateTimeCompletedEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsCompleted extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(
        () =>
            FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsCompletedCommand
    )
    command?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsCompletedCommand;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsFailedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time_failed" })
    dateTimeFailed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_failed_epoch" })
    dateTimeFailedEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_issued" })
    dateTimeIssued?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_issued_epoch" })
    dateTimeIssuedEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(
        () => FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsFailedCommand
    )
    command?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsFailedCommand;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsPendingCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time_failed" })
    dateTimeFailed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_failed_epoch" })
    dateTimeFailedEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_issued" })
    dateTimeIssued?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_issued_epoch" })
    dateTimeIssuedEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(
        () => FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsPendingCommand
    )
    command?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsPendingCommand;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommands extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsCompleted,
    })
    @Expose({ name: "completed" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsCompleted)
    completed?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsCompleted[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsFailed,
    })
    @Expose({ name: "failed" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsFailed)
    failed?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsPending,
    })
    @Expose({ name: "pending" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsPending)
    pending?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommandsPending[];
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONUserLocationLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    building?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email_address" })
    emailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "full_name" })
    fullName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "position" })
    position?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "room" })
    room?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class FindMobileDeviceHistoryByNameSubset200ApplicationJSONUserLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONUserLocationLocation)
    location?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONUserLocationLocation;
}

/**
 * OK
 */
export class FindMobileDeviceHistoryByNameSubset200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applications" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplications)
    applications?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONApplications;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONAudits })
    @Expose({ name: "audits" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONAudits)
    audits?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONAudits[];

    @SpeakeasyMetadata()
    @Expose({ name: "ebooks" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooks)
    ebooks?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONEbooks;

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONGeneral)
    general?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONGeneral;

    @SpeakeasyMetadata()
    @Expose({ name: "management_commands" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommands)
    managementCommands?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONManagementCommands;

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByNameSubset200ApplicationJSONUserLocation,
    })
    @Expose({ name: "user_location" })
    @Type(() => FindMobileDeviceHistoryByNameSubset200ApplicationJSONUserLocation)
    userLocation?: FindMobileDeviceHistoryByNameSubset200ApplicationJSONUserLocation[];
}

export class FindMobileDeviceHistoryByNameSubsetResponse extends SpeakeasyBase {
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
    findMobileDeviceHistoryByNameSubset200ApplicationJSONObject?: FindMobileDeviceHistoryByNameSubset200ApplicationJSON;
}
