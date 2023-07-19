/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindMobileDeviceHistoryByNameRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsFailedApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    app?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsFailedApp;
}

export enum FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    bundleSize?: string;

    @SpeakeasyMetadata()
    dynamicSize?: string;

    @SpeakeasyMetadata()
    managementStatus?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export enum FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    bundleSize?: string;

    @SpeakeasyMetadata()
    dynamicSize?: string;

    @SpeakeasyMetadata()
    managementStatus?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export enum FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledOtherManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledOther extends SpeakeasyBase {
    @SpeakeasyMetadata()
    bundleSize?: string;

    @SpeakeasyMetadata()
    dynamicSize?: string;

    @SpeakeasyMetadata()
    managementStatus?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledOtherManagementStatus;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata()
    appStoreFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledAppStoreFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    inHouseFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledInHouseFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    other?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalledOther;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsPendingApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    managementStatus?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplicationsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    app?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsPendingApp;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLApplications extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsFailed,
    })
    failed?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalled,
    })
    installed?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsInstalled[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsPending,
    })
    pending?: FindMobileDeviceHistoryByName200ApplicationXMLApplicationsPending[];
}

export class FindMobileDeviceHistoryByName200ApplicationXMLAuditsAudit extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: number;

    @SpeakeasyMetadata()
    event?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLAudits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    audit?: FindMobileDeviceHistoryByName200ApplicationXMLAuditsAudit;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLEbooksFailed extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalledIbookstore extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalledInhouse extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalledIbookstore,
    })
    ibookstore?: FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalledIbookstore[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalledInhouse,
    })
    inhouse?: FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalledInhouse[];
}

export class FindMobileDeviceHistoryByName200ApplicationXMLEbooksPending extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationXMLEbooksFailed })
    failed?: FindMobileDeviceHistoryByName200ApplicationXMLEbooksFailed[];

    @SpeakeasyMetadata()
    installed?: FindMobileDeviceHistoryByName200ApplicationXMLEbooksInstalled;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationXMLEbooksPending })
    pending?: FindMobileDeviceHistoryByName200ApplicationXMLEbooksPending[];
}

export class FindMobileDeviceHistoryByName200ApplicationXMLGeneral extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsCompletedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTimeCompleted?: string;

    @SpeakeasyMetadata()
    dateTimeCompletedEpoch?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsCompleted extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsCompletedCommand;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsFailedCommand extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsFailedCommand;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsPendingCommand extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsPendingCommand;
}

export class FindMobileDeviceHistoryByName200ApplicationXMLManagementCommands extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsCompleted,
    })
    completed?: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsCompleted[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsFailed,
    })
    failed?: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsPending,
    })
    pending?: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommandsPending[];
}

export class FindMobileDeviceHistoryByName200ApplicationXMLUserLocationLocation extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationXMLUserLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    location?: FindMobileDeviceHistoryByName200ApplicationXMLUserLocationLocation;
}

/**
 * OK
 */
export class FindMobileDeviceHistoryByName200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    applications?: FindMobileDeviceHistoryByName200ApplicationXMLApplications;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationXMLAudits })
    audits?: FindMobileDeviceHistoryByName200ApplicationXMLAudits[];

    @SpeakeasyMetadata()
    ebooks?: FindMobileDeviceHistoryByName200ApplicationXMLEbooks;

    @SpeakeasyMetadata()
    general?: FindMobileDeviceHistoryByName200ApplicationXMLGeneral;

    @SpeakeasyMetadata()
    managementCommands?: FindMobileDeviceHistoryByName200ApplicationXMLManagementCommands;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationXMLUserLocation })
    userLocation?: FindMobileDeviceHistoryByName200ApplicationXMLUserLocation[];
}

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsFailedApp extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONApplicationsFailedApp)
    app?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsFailedApp;
}

export enum FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bundle_size" })
    bundleSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_size" })
    dynamicSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export enum FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bundle_size" })
    bundleSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_size" })
    dynamicSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalogManagementStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export enum FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledOtherManagementStatus {
    Unmanaged = "Unmanaged",
    Managed = "Managed",
}

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledOther extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bundle_size" })
    bundleSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_size" })
    dynamicSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "management_status" })
    managementStatus?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledOtherManagementStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app_store_from_mobile_device_app_catalog" })
    @Type(
        () =>
            FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalog
    )
    appStoreFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledAppStoreFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    @Expose({ name: "in_house_from_mobile_device_app_catalog" })
    @Type(
        () =>
            FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalog
    )
    inHouseFromMobileDeviceAppCatalog?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledInHouseFromMobileDeviceAppCatalog;

    @SpeakeasyMetadata()
    @Expose({ name: "other" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledOther)
    other?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalledOther;
}

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsPendingApp extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONApplicationsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONApplicationsPendingApp)
    app?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsPendingApp;
}

export class FindMobileDeviceHistoryByName200ApplicationJSONApplications extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsFailed,
    })
    @Expose({ name: "failed" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONApplicationsFailed)
    failed?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalled,
    })
    @Expose({ name: "installed" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalled)
    installed?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsInstalled[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsPending,
    })
    @Expose({ name: "pending" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONApplicationsPending)
    pending?: FindMobileDeviceHistoryByName200ApplicationJSONApplicationsPending[];
}

export class FindMobileDeviceHistoryByName200ApplicationJSONAuditsAudit extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONAudits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "audit" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONAuditsAudit)
    audit?: FindMobileDeviceHistoryByName200ApplicationJSONAuditsAudit;
}

export class FindMobileDeviceHistoryByName200ApplicationJSONEbooksFailed extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledIbookstore extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledInhouse extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledIbookstore,
    })
    @Expose({ name: "ibookstore" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledIbookstore)
    ibookstore?: FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledIbookstore[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledInhouse,
    })
    @Expose({ name: "inhouse" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledInhouse)
    inhouse?: FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalledInhouse[];
}

export class FindMobileDeviceHistoryByName200ApplicationJSONEbooksPending extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONEbooks extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationJSONEbooksFailed })
    @Expose({ name: "failed" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONEbooksFailed)
    failed?: FindMobileDeviceHistoryByName200ApplicationJSONEbooksFailed[];

    @SpeakeasyMetadata()
    @Expose({ name: "installed" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalled)
    installed?: FindMobileDeviceHistoryByName200ApplicationJSONEbooksInstalled;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationJSONEbooksPending })
    @Expose({ name: "pending" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONEbooksPending)
    pending?: FindMobileDeviceHistoryByName200ApplicationJSONEbooksPending[];
}

export class FindMobileDeviceHistoryByName200ApplicationJSONGeneral extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsCompletedCommand extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsCompleted extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsCompletedCommand)
    command?: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsCompletedCommand;
}

export class FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsFailedCommand extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsFailedCommand)
    command?: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsFailedCommand;
}

export class FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsPendingCommand extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsPendingCommand)
    command?: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsPendingCommand;
}

export class FindMobileDeviceHistoryByName200ApplicationJSONManagementCommands extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsCompleted,
    })
    @Expose({ name: "completed" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsCompleted)
    completed?: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsCompleted[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsFailed,
    })
    @Expose({ name: "failed" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsFailed)
    failed?: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsFailed[];

    @SpeakeasyMetadata({
        elemType: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsPending,
    })
    @Expose({ name: "pending" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsPending)
    pending?: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommandsPending[];
}

export class FindMobileDeviceHistoryByName200ApplicationJSONUserLocationLocation extends SpeakeasyBase {
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

export class FindMobileDeviceHistoryByName200ApplicationJSONUserLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONUserLocationLocation)
    location?: FindMobileDeviceHistoryByName200ApplicationJSONUserLocationLocation;
}

/**
 * OK
 */
export class FindMobileDeviceHistoryByName200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applications" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONApplications)
    applications?: FindMobileDeviceHistoryByName200ApplicationJSONApplications;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationJSONAudits })
    @Expose({ name: "audits" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONAudits)
    audits?: FindMobileDeviceHistoryByName200ApplicationJSONAudits[];

    @SpeakeasyMetadata()
    @Expose({ name: "ebooks" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONEbooks)
    ebooks?: FindMobileDeviceHistoryByName200ApplicationJSONEbooks;

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONGeneral)
    general?: FindMobileDeviceHistoryByName200ApplicationJSONGeneral;

    @SpeakeasyMetadata()
    @Expose({ name: "management_commands" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONManagementCommands)
    managementCommands?: FindMobileDeviceHistoryByName200ApplicationJSONManagementCommands;

    @SpeakeasyMetadata({ elemType: FindMobileDeviceHistoryByName200ApplicationJSONUserLocation })
    @Expose({ name: "user_location" })
    @Type(() => FindMobileDeviceHistoryByName200ApplicationJSONUserLocation)
    userLocation?: FindMobileDeviceHistoryByName200ApplicationJSONUserLocation[];
}

export class FindMobileDeviceHistoryByNameResponse extends SpeakeasyBase {
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
    findMobileDeviceHistoryByName200ApplicationJSONObject?: FindMobileDeviceHistoryByName200ApplicationJSON;
}
