/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ComputerHistoryAuditsAudit extends SpeakeasyBase {
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

export class ComputerHistoryAudits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "audit" })
    @Type(() => ComputerHistoryAuditsAudit)
    audit?: ComputerHistoryAuditsAudit;
}

export class ComputerHistoryCasperImagingLogsCasperImagingLog extends SpeakeasyBase {
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

export class ComputerHistoryCasperImagingLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "casper_imaging_log" })
    @Type(() => ComputerHistoryCasperImagingLogsCasperImagingLog)
    casperImagingLog?: ComputerHistoryCasperImagingLogsCasperImagingLog;
}

export class ComputerHistoryCasperRemoteLogsCasperRemoteLog extends SpeakeasyBase {
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

export class ComputerHistoryCasperRemoteLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "casper_remote_log" })
    @Type(() => ComputerHistoryCasperRemoteLogsCasperRemoteLog)
    casperRemoteLog?: ComputerHistoryCasperRemoteLogsCasperRemoteLog;
}

export class ComputerHistoryCommandsCompletedCommand extends SpeakeasyBase {
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

export class ComputerHistoryCommandsCompleted extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => ComputerHistoryCommandsCompletedCommand)
    command?: ComputerHistoryCommandsCompletedCommand;
}

export class ComputerHistoryCommandsFailedCommand extends SpeakeasyBase {
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

export class ComputerHistoryCommandsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => ComputerHistoryCommandsFailedCommand)
    command?: ComputerHistoryCommandsFailedCommand;
}

export class ComputerHistoryCommandsPendingCommand extends SpeakeasyBase {
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

export class ComputerHistoryCommandsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    @Type(() => ComputerHistoryCommandsPendingCommand)
    command?: ComputerHistoryCommandsPendingCommand;
}

export class ComputerHistoryCommands extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ComputerHistoryCommandsCompleted })
    @Expose({ name: "completed" })
    @Type(() => ComputerHistoryCommandsCompleted)
    completed?: ComputerHistoryCommandsCompleted[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryCommandsFailed })
    @Expose({ name: "failed" })
    @Type(() => ComputerHistoryCommandsFailed)
    failed?: ComputerHistoryCommandsFailed[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryCommandsPending })
    @Expose({ name: "pending" })
    @Type(() => ComputerHistoryCommandsPending)
    pending?: ComputerHistoryCommandsPending[];
}

export class ComputerHistoryComputerUsageLogsUsageLog extends SpeakeasyBase {
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

export class ComputerHistoryComputerUsageLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "usage_log" })
    @Type(() => ComputerHistoryComputerUsageLogsUsageLog)
    usageLog?: ComputerHistoryComputerUsageLogsUsageLog;
}

export class ComputerHistoryGeneral extends SpeakeasyBase {
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

export class ComputerHistoryMacAppStoreApplicationsFailedApp extends SpeakeasyBase {
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

export class ComputerHistoryMacAppStoreApplicationsFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => ComputerHistoryMacAppStoreApplicationsFailedApp)
    app?: ComputerHistoryMacAppStoreApplicationsFailedApp;
}

export class ComputerHistoryMacAppStoreApplicationsInstalledApp extends SpeakeasyBase {
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

export class ComputerHistoryMacAppStoreApplicationsInstalled extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => ComputerHistoryMacAppStoreApplicationsInstalledApp)
    app?: ComputerHistoryMacAppStoreApplicationsInstalledApp;
}

export class ComputerHistoryMacAppStoreApplicationsPendingApp extends SpeakeasyBase {
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

export class ComputerHistoryMacAppStoreApplicationsPending extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app" })
    @Type(() => ComputerHistoryMacAppStoreApplicationsPendingApp)
    app?: ComputerHistoryMacAppStoreApplicationsPendingApp;
}

export class ComputerHistoryMacAppStoreApplications extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ComputerHistoryMacAppStoreApplicationsFailed })
    @Expose({ name: "failed" })
    @Type(() => ComputerHistoryMacAppStoreApplicationsFailed)
    failed?: ComputerHistoryMacAppStoreApplicationsFailed[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryMacAppStoreApplicationsInstalled })
    @Expose({ name: "installed" })
    @Type(() => ComputerHistoryMacAppStoreApplicationsInstalled)
    installed?: ComputerHistoryMacAppStoreApplicationsInstalled[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryMacAppStoreApplicationsPending })
    @Expose({ name: "pending" })
    @Type(() => ComputerHistoryMacAppStoreApplicationsPending)
    pending?: ComputerHistoryMacAppStoreApplicationsPending[];
}

export class ComputerHistoryPolicyLogsPolicyLog extends SpeakeasyBase {
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

export class ComputerHistoryPolicyLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy_log" })
    @Type(() => ComputerHistoryPolicyLogsPolicyLog)
    policyLog?: ComputerHistoryPolicyLogsPolicyLog;
}

export class ComputerHistoryScreenSharingLogsScreenSharingLog extends SpeakeasyBase {
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

export class ComputerHistoryScreenSharingLogs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "screen_sharing_log" })
    @Type(() => ComputerHistoryScreenSharingLogsScreenSharingLog)
    screenSharingLog?: ComputerHistoryScreenSharingLogsScreenSharingLog;
}

export class ComputerHistoryUserLocationLocation extends SpeakeasyBase {
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

export class ComputerHistoryUserLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    @Type(() => ComputerHistoryUserLocationLocation)
    location?: ComputerHistoryUserLocationLocation;
}

/**
 * OK
 */
export class ComputerHistory extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ComputerHistoryAudits })
    @Expose({ name: "audits" })
    @Type(() => ComputerHistoryAudits)
    audits?: ComputerHistoryAudits[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryCasperImagingLogs })
    @Expose({ name: "casper_imaging_logs" })
    @Type(() => ComputerHistoryCasperImagingLogs)
    casperImagingLogs?: ComputerHistoryCasperImagingLogs[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryCasperRemoteLogs })
    @Expose({ name: "casper_remote_logs" })
    @Type(() => ComputerHistoryCasperRemoteLogs)
    casperRemoteLogs?: ComputerHistoryCasperRemoteLogs[];

    @SpeakeasyMetadata()
    @Expose({ name: "commands" })
    @Type(() => ComputerHistoryCommands)
    commands?: ComputerHistoryCommands;

    @SpeakeasyMetadata({ elemType: ComputerHistoryComputerUsageLogs })
    @Expose({ name: "computer_usage_logs" })
    @Type(() => ComputerHistoryComputerUsageLogs)
    computerUsageLogs?: ComputerHistoryComputerUsageLogs[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => ComputerHistoryGeneral)
    general?: ComputerHistoryGeneral;

    @SpeakeasyMetadata()
    @Expose({ name: "mac_app_store_applications" })
    @Type(() => ComputerHistoryMacAppStoreApplications)
    macAppStoreApplications?: ComputerHistoryMacAppStoreApplications;

    @SpeakeasyMetadata({ elemType: ComputerHistoryPolicyLogs })
    @Expose({ name: "policy_logs" })
    @Type(() => ComputerHistoryPolicyLogs)
    policyLogs?: ComputerHistoryPolicyLogs[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryScreenSharingLogs })
    @Expose({ name: "screen_sharing_logs" })
    @Type(() => ComputerHistoryScreenSharingLogs)
    screenSharingLogs?: ComputerHistoryScreenSharingLogs[];

    @SpeakeasyMetadata({ elemType: ComputerHistoryUserLocation })
    @Expose({ name: "user_location" })
    @Type(() => ComputerHistoryUserLocation)
    userLocation?: ComputerHistoryUserLocation[];
}