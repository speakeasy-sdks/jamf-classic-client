/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindComputerHistoryByIdRequest extends SpeakeasyBase {
    /**
     * Computer ID value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;
}

export class FindComputerHistoryById200ApplicationXMLAuditsAudit extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    event?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindComputerHistoryById200ApplicationXMLAudits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    audit?: FindComputerHistoryById200ApplicationXMLAuditsAudit;
}

export class FindComputerHistoryById200ApplicationXMLCasperImagingLogsCasperImagingLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    status?: string;
}

export class FindComputerHistoryById200ApplicationXMLCasperImagingLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    casperImagingLog?: FindComputerHistoryById200ApplicationXMLCasperImagingLogsCasperImagingLog;
}

export class FindComputerHistoryById200ApplicationXMLCasperRemoteLogsCasperRemoteLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    status?: string;
}

export class FindComputerHistoryById200ApplicationXMLCasperRemoteLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    casperRemoteLog?: FindComputerHistoryById200ApplicationXMLCasperRemoteLogsCasperRemoteLog;
}

export class FindComputerHistoryById200ApplicationXMLCommandsCompletedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    completed?: string;

    @SpeakeasyMetadata()
    completedEpoch?: string;

    @SpeakeasyMetadata()
    completedUtc?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindComputerHistoryById200ApplicationXMLCommandsCompleted extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindComputerHistoryById200ApplicationXMLCommandsCompletedCommand;
}

export class FindComputerHistoryById200ApplicationXMLCommandsFailedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    failed?: string;

    @SpeakeasyMetadata()
    failedEpoch?: string;

    @SpeakeasyMetadata()
    failedUtc?: string;

    @SpeakeasyMetadata()
    issued?: string;

    @SpeakeasyMetadata()
    issuedEpoch?: string;

    @SpeakeasyMetadata()
    issuedUtc?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    status?: string;
}

export class FindComputerHistoryById200ApplicationXMLCommandsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindComputerHistoryById200ApplicationXMLCommandsFailedCommand;
}

export class FindComputerHistoryById200ApplicationXMLCommandsPendingCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    issued?: string;

    @SpeakeasyMetadata()
    issuedEpoch?: string;

    @SpeakeasyMetadata()
    issuedUtc?: string;

    @SpeakeasyMetadata()
    lastPush?: string;

    @SpeakeasyMetadata()
    lastPushEpoch?: string;

    @SpeakeasyMetadata()
    lastPushUtc?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    status?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindComputerHistoryById200ApplicationXMLCommandsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    command?: FindComputerHistoryById200ApplicationXMLCommandsPendingCommand;
}

export class FindComputerHistoryById200ApplicationXMLCommands extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLCommandsCompleted })
    completed?: FindComputerHistoryById200ApplicationXMLCommandsCompleted[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLCommandsFailed })
    failed?: FindComputerHistoryById200ApplicationXMLCommandsFailed[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLCommandsPending })
    pending?: FindComputerHistoryById200ApplicationXMLCommandsPending[];
}

export class FindComputerHistoryById200ApplicationXMLComputerUsageLogsUsageLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    event?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindComputerHistoryById200ApplicationXMLComputerUsageLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    usageLog?: FindComputerHistoryById200ApplicationXMLComputerUsageLogsUsageLog;
}

export class FindComputerHistoryById200ApplicationXMLGeneral extends SpeakeasyBase {
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

export class FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsFailedApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    deployed?: string;

    @SpeakeasyMetadata()
    deployedEpoch?: number;

    @SpeakeasyMetadata()
    deployedUtc?: string;

    @SpeakeasyMetadata()
    lastUpdate?: string;

    @SpeakeasyMetadata()
    lastUpdateEpoch?: number;

    @SpeakeasyMetadata()
    lastUpdateUtc?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    status?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    app?: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsFailedApp;
}

export class FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsInstalledApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    sizeMb?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata()
    app?: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsInstalledApp;
}

export class FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsPendingApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    deployed?: string;

    @SpeakeasyMetadata()
    deployedEpoch?: number;

    @SpeakeasyMetadata()
    deployedUtc?: string;

    @SpeakeasyMetadata()
    lastUpdate?: string;

    @SpeakeasyMetadata()
    lastUpdateEpoch?: number;

    @SpeakeasyMetadata()
    lastUpdateUtc?: string;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    version?: string;
}

export class FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    app?: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsPendingApp;
}

export class FindComputerHistoryById200ApplicationXMLMacAppStoreApplications extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsFailed,
    })
    failed?: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsFailed[];

    @SpeakeasyMetadata({
        elemType: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsInstalled,
    })
    installed?: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsInstalled[];

    @SpeakeasyMetadata({
        elemType: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsPending,
    })
    pending?: FindComputerHistoryById200ApplicationXMLMacAppStoreApplicationsPending[];
}

export class FindComputerHistoryById200ApplicationXMLPolicyLogsPolicyLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    policyId?: number;

    @SpeakeasyMetadata()
    policyName?: string;

    @SpeakeasyMetadata()
    status?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class FindComputerHistoryById200ApplicationXMLPolicyLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    policyLog?: FindComputerHistoryById200ApplicationXMLPolicyLogsPolicyLog;
}

export class FindComputerHistoryById200ApplicationXMLScreenSharingLogsScreenSharingLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    details?: string;

    @SpeakeasyMetadata()
    status?: string;
}

export class FindComputerHistoryById200ApplicationXMLScreenSharingLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    screenSharingLog?: FindComputerHistoryById200ApplicationXMLScreenSharingLogsScreenSharingLog;
}

export class FindComputerHistoryById200ApplicationXMLUserLocationLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    building?: string;

    @SpeakeasyMetadata()
    dateTime?: string;

    @SpeakeasyMetadata()
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    dateTimeUtc?: string;

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

export class FindComputerHistoryById200ApplicationXMLUserLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    location?: FindComputerHistoryById200ApplicationXMLUserLocationLocation;
}

/**
 * OK
 */
export class FindComputerHistoryById200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLAudits })
    audits?: FindComputerHistoryById200ApplicationXMLAudits[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLCasperImagingLogs })
    casperImagingLogs?: FindComputerHistoryById200ApplicationXMLCasperImagingLogs[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLCasperRemoteLogs })
    casperRemoteLogs?: FindComputerHistoryById200ApplicationXMLCasperRemoteLogs[];

    @SpeakeasyMetadata()
    commands?: FindComputerHistoryById200ApplicationXMLCommands;

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLComputerUsageLogs })
    computerUsageLogs?: FindComputerHistoryById200ApplicationXMLComputerUsageLogs[];

    @SpeakeasyMetadata()
    general?: FindComputerHistoryById200ApplicationXMLGeneral;

    @SpeakeasyMetadata()
    macAppStoreApplications?: FindComputerHistoryById200ApplicationXMLMacAppStoreApplications;

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLPolicyLogs })
    policyLogs?: FindComputerHistoryById200ApplicationXMLPolicyLogs[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLScreenSharingLogs })
    screenSharingLogs?: FindComputerHistoryById200ApplicationXMLScreenSharingLogs[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationXMLUserLocation })
    userLocation?: FindComputerHistoryById200ApplicationXMLUserLocation[];
}

export class FindComputerHistoryById200ApplicationJSONAuditsAudit extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_utc" })
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class FindComputerHistoryById200ApplicationJSONAudits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "audit" })
    @Type(() => FindComputerHistoryById200ApplicationJSONAuditsAudit)
    audit?: FindComputerHistoryById200ApplicationJSONAuditsAudit;
}

export class FindComputerHistoryById200ApplicationJSONCasperImagingLogsCasperImagingLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_utc" })
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class FindComputerHistoryById200ApplicationJSONCasperImagingLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "casper_imaging_log" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCasperImagingLogsCasperImagingLog)
    casperImagingLog?: FindComputerHistoryById200ApplicationJSONCasperImagingLogsCasperImagingLog;
}

export class FindComputerHistoryById200ApplicationJSONCasperRemoteLogsCasperRemoteLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_utc" })
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class FindComputerHistoryById200ApplicationJSONCasperRemoteLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "casper_remote_log" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCasperRemoteLogsCasperRemoteLog)
    casperRemoteLog?: FindComputerHistoryById200ApplicationJSONCasperRemoteLogsCasperRemoteLog;
}

export class FindComputerHistoryById200ApplicationJSONCommandsCompletedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "completed" })
    completed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "completed_epoch" })
    completedEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "completed_utc" })
    completedUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class FindComputerHistoryById200ApplicationJSONCommandsCompleted extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCommandsCompletedCommand)
    command?: FindComputerHistoryById200ApplicationJSONCommandsCompletedCommand;
}

export class FindComputerHistoryById200ApplicationJSONCommandsFailedCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "failed" })
    failed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "failed_epoch" })
    failedEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "failed_utc" })
    failedUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "issued" })
    issued?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "issued_epoch" })
    issuedEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "issued_utc" })
    issuedUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class FindComputerHistoryById200ApplicationJSONCommandsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCommandsFailedCommand)
    command?: FindComputerHistoryById200ApplicationJSONCommandsFailedCommand;
}

export class FindComputerHistoryById200ApplicationJSONCommandsPendingCommand extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "issued" })
    issued?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "issued_epoch" })
    issuedEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "issued_utc" })
    issuedUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_push" })
    lastPush?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_push_epoch" })
    lastPushEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_push_utc" })
    lastPushUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class FindComputerHistoryById200ApplicationJSONCommandsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCommandsPendingCommand)
    command?: FindComputerHistoryById200ApplicationJSONCommandsPendingCommand;
}

export class FindComputerHistoryById200ApplicationJSONCommands extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONCommandsCompleted })
    @Expose({ name: "completed" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCommandsCompleted)
    completed?: FindComputerHistoryById200ApplicationJSONCommandsCompleted[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONCommandsFailed })
    @Expose({ name: "failed" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCommandsFailed)
    failed?: FindComputerHistoryById200ApplicationJSONCommandsFailed[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONCommandsPending })
    @Expose({ name: "pending" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCommandsPending)
    pending?: FindComputerHistoryById200ApplicationJSONCommandsPending[];
}

export class FindComputerHistoryById200ApplicationJSONComputerUsageLogsUsageLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_utc" })
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class FindComputerHistoryById200ApplicationJSONComputerUsageLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "usage_log" })
    @Type(() => FindComputerHistoryById200ApplicationJSONComputerUsageLogsUsageLog)
    usageLog?: FindComputerHistoryById200ApplicationJSONComputerUsageLogsUsageLog;
}

export class FindComputerHistoryById200ApplicationJSONGeneral extends SpeakeasyBase {
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

export class FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsFailedApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "deployed" })
    deployed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "deployed_epoch" })
    deployedEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "deployed_utc" })
    deployedUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_update" })
    lastUpdate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_update_epoch" })
    lastUpdateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_update_utc" })
    lastUpdateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsFailedApp)
    app?: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsFailedApp;
}

export class FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsInstalledApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "size_mb" })
    sizeMb?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsInstalledApp)
    app?: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsInstalledApp;
}

export class FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsPendingApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "deployed" })
    deployed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "deployed_epoch" })
    deployedEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "deployed_utc" })
    deployedUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_update" })
    lastUpdate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_update_epoch" })
    lastUpdateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_update_utc" })
    lastUpdateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsPendingApp)
    app?: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsPendingApp;
}

export class FindComputerHistoryById200ApplicationJSONMacAppStoreApplications extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsFailed,
    })
    @Expose({ name: "failed" })
    @Type(() => FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsFailed)
    failed?: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsFailed[];

    @SpeakeasyMetadata({
        elemType: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsInstalled,
    })
    @Expose({ name: "installed" })
    @Type(() => FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsInstalled)
    installed?: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsInstalled[];

    @SpeakeasyMetadata({
        elemType: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsPending,
    })
    @Expose({ name: "pending" })
    @Type(() => FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsPending)
    pending?: FindComputerHistoryById200ApplicationJSONMacAppStoreApplicationsPending[];
}

export class FindComputerHistoryById200ApplicationJSONPolicyLogsPolicyLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_utc" })
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "policy_id" })
    policyId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "policy_name" })
    policyName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class FindComputerHistoryById200ApplicationJSONPolicyLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy_log" })
    @Type(() => FindComputerHistoryById200ApplicationJSONPolicyLogsPolicyLog)
    policyLog?: FindComputerHistoryById200ApplicationJSONPolicyLogsPolicyLog;
}

export class FindComputerHistoryById200ApplicationJSONScreenSharingLogsScreenSharingLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_utc" })
    dateTimeUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "details" })
    details?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class FindComputerHistoryById200ApplicationJSONScreenSharingLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "screen_sharing_log" })
    @Type(() => FindComputerHistoryById200ApplicationJSONScreenSharingLogsScreenSharingLog)
    screenSharingLog?: FindComputerHistoryById200ApplicationJSONScreenSharingLogsScreenSharingLog;
}

export class FindComputerHistoryById200ApplicationJSONUserLocationLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    building?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_epoch" })
    dateTimeEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_time_utc" })
    dateTimeUtc?: string;

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

export class FindComputerHistoryById200ApplicationJSONUserLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    @Type(() => FindComputerHistoryById200ApplicationJSONUserLocationLocation)
    location?: FindComputerHistoryById200ApplicationJSONUserLocationLocation;
}

/**
 * OK
 */
export class FindComputerHistoryById200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONAudits })
    @Expose({ name: "audits" })
    @Type(() => FindComputerHistoryById200ApplicationJSONAudits)
    audits?: FindComputerHistoryById200ApplicationJSONAudits[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONCasperImagingLogs })
    @Expose({ name: "casper_imaging_logs" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCasperImagingLogs)
    casperImagingLogs?: FindComputerHistoryById200ApplicationJSONCasperImagingLogs[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONCasperRemoteLogs })
    @Expose({ name: "casper_remote_logs" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCasperRemoteLogs)
    casperRemoteLogs?: FindComputerHistoryById200ApplicationJSONCasperRemoteLogs[];

    @SpeakeasyMetadata()
    @Expose({ name: "commands" })
    @Type(() => FindComputerHistoryById200ApplicationJSONCommands)
    commands?: FindComputerHistoryById200ApplicationJSONCommands;

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONComputerUsageLogs })
    @Expose({ name: "computer_usage_logs" })
    @Type(() => FindComputerHistoryById200ApplicationJSONComputerUsageLogs)
    computerUsageLogs?: FindComputerHistoryById200ApplicationJSONComputerUsageLogs[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => FindComputerHistoryById200ApplicationJSONGeneral)
    general?: FindComputerHistoryById200ApplicationJSONGeneral;

    @SpeakeasyMetadata()
    @Expose({ name: "mac_app_store_applications" })
    @Type(() => FindComputerHistoryById200ApplicationJSONMacAppStoreApplications)
    macAppStoreApplications?: FindComputerHistoryById200ApplicationJSONMacAppStoreApplications;

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONPolicyLogs })
    @Expose({ name: "policy_logs" })
    @Type(() => FindComputerHistoryById200ApplicationJSONPolicyLogs)
    policyLogs?: FindComputerHistoryById200ApplicationJSONPolicyLogs[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONScreenSharingLogs })
    @Expose({ name: "screen_sharing_logs" })
    @Type(() => FindComputerHistoryById200ApplicationJSONScreenSharingLogs)
    screenSharingLogs?: FindComputerHistoryById200ApplicationJSONScreenSharingLogs[];

    @SpeakeasyMetadata({ elemType: FindComputerHistoryById200ApplicationJSONUserLocation })
    @Expose({ name: "user_location" })
    @Type(() => FindComputerHistoryById200ApplicationJSONUserLocation)
    userLocation?: FindComputerHistoryById200ApplicationJSONUserLocation[];
}

export class FindComputerHistoryByIdResponse extends SpeakeasyBase {
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
    findComputerHistoryById200ApplicationJSONObject?: FindComputerHistoryById200ApplicationJSON;
}
