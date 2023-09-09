/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Expose, Type } from "class-transformer";

export enum PatchPolicyGeneralDistributionMethod {
    Selfservice = "selfservice",
    Prompt = "prompt",
}

export class PatchPolicyGeneralKillAppsKillApp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "kill_app_bundle_id" })
    killAppBundleId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "kill_app_name" })
    killAppName?: string;
}

export class PatchPolicyGeneralKillApps extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "kill_app" })
    @Type(() => PatchPolicyGeneralKillAppsKillApp)
    killApp?: PatchPolicyGeneralKillAppsKillApp;
}

export class PatchPolicyGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_downgrade" })
    allowDowngrade?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "distribution_method" })
    distributionMethod?: PatchPolicyGeneralDistributionMethod;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "incremental_updates" })
    incrementalUpdates?: boolean;

    @SpeakeasyMetadata({ elemType: PatchPolicyGeneralKillApps })
    @Expose({ name: "kill_apps" })
    @Type(() => PatchPolicyGeneralKillApps)
    killApps?: PatchPolicyGeneralKillApps[];

    @SpeakeasyMetadata()
    @Expose({ name: "minimum_os" })
    minimumOs?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Set to true to patch versions unidentified by Jamf Pro patch reporting
     */
    @SpeakeasyMetadata()
    @Expose({ name: "patch_unknown" })
    patchUnknown?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "reboot" })
    reboot?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "release_date" })
    releaseDate?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "target_version" })
    targetVersion: string;
}

export class PatchPolicyScopeBuildings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    @Type(() => IdName)
    building?: IdName;
}

export class PatchPolicyScopeComputerGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer_group" })
    @Type(() => IdName)
    computerGroup?: IdName;
}

export class PatchPolicyScopeComputersComputer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid?: string;
}

export class PatchPolicyScopeComputers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer" })
    @Type(() => PatchPolicyScopeComputersComputer)
    computer?: PatchPolicyScopeComputersComputer;
}

export class PatchPolicyScopeDepartments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    @Type(() => IdName)
    department?: IdName;
}

export class PatchPolicyScopeExclusionsBuildings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    @Type(() => IdName)
    building?: IdName;
}

export class PatchPolicyScopeExclusionsComputerGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer_group" })
    @Type(() => IdName)
    computerGroup?: IdName;
}

export class PatchPolicyScopeExclusionsComputersComputer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid?: string;
}

export class PatchPolicyScopeExclusionsComputers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer" })
    @Type(() => PatchPolicyScopeExclusionsComputersComputer)
    computer?: PatchPolicyScopeExclusionsComputersComputer;
}

export class PatchPolicyScopeExclusionsDepartments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    @Type(() => IdName)
    department?: IdName;
}

export class PatchPolicyScopeExclusionsIbeacons extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ibeacon" })
    @Type(() => IdName)
    ibeacon?: IdName;
}

export class PatchPolicyScopeExclusionsNetworkSegments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "network_segment" })
    @Type(() => IdName)
    networkSegment?: IdName;
}

export class PatchPolicyScopeExclusions extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PatchPolicyScopeExclusionsBuildings })
    @Expose({ name: "buildings" })
    @Type(() => PatchPolicyScopeExclusionsBuildings)
    buildings?: PatchPolicyScopeExclusionsBuildings[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeExclusionsComputerGroups })
    @Expose({ name: "computer_groups" })
    @Type(() => PatchPolicyScopeExclusionsComputerGroups)
    computerGroups?: PatchPolicyScopeExclusionsComputerGroups[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeExclusionsComputers })
    @Expose({ name: "computers" })
    @Type(() => PatchPolicyScopeExclusionsComputers)
    computers?: PatchPolicyScopeExclusionsComputers[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeExclusionsDepartments })
    @Expose({ name: "departments" })
    @Type(() => PatchPolicyScopeExclusionsDepartments)
    departments?: PatchPolicyScopeExclusionsDepartments[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeExclusionsIbeacons })
    @Expose({ name: "ibeacons" })
    @Type(() => PatchPolicyScopeExclusionsIbeacons)
    ibeacons?: PatchPolicyScopeExclusionsIbeacons[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeExclusionsNetworkSegments })
    @Expose({ name: "network_segments" })
    @Type(() => PatchPolicyScopeExclusionsNetworkSegments)
    networkSegments?: PatchPolicyScopeExclusionsNetworkSegments[];
}

export class PatchPolicyScopeLimitationsIbeacons extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ibeacon" })
    @Type(() => IdName)
    ibeacon?: IdName;
}

export class PatchPolicyScopeLimitationsNetworkSegments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "network_segment" })
    @Type(() => IdName)
    networkSegment?: IdName;
}

export class PatchPolicyScopeLimitations extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PatchPolicyScopeLimitationsIbeacons })
    @Expose({ name: "ibeacons" })
    @Type(() => PatchPolicyScopeLimitationsIbeacons)
    ibeacons?: PatchPolicyScopeLimitationsIbeacons[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeLimitationsNetworkSegments })
    @Expose({ name: "network_segments" })
    @Type(() => PatchPolicyScopeLimitationsNetworkSegments)
    networkSegments?: PatchPolicyScopeLimitationsNetworkSegments[];
}

export class PatchPolicyScope extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "all_computers" })
    allComputers?: boolean;

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeBuildings })
    @Expose({ name: "buildings" })
    @Type(() => PatchPolicyScopeBuildings)
    buildings?: PatchPolicyScopeBuildings[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeComputerGroups })
    @Expose({ name: "computer_groups" })
    @Type(() => PatchPolicyScopeComputerGroups)
    computerGroups?: PatchPolicyScopeComputerGroups[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeComputers })
    @Expose({ name: "computers" })
    @Type(() => PatchPolicyScopeComputers)
    computers?: PatchPolicyScopeComputers[];

    @SpeakeasyMetadata({ elemType: PatchPolicyScopeDepartments })
    @Expose({ name: "departments" })
    @Type(() => PatchPolicyScopeDepartments)
    departments?: PatchPolicyScopeDepartments[];

    @SpeakeasyMetadata()
    @Expose({ name: "exclusions" })
    @Type(() => PatchPolicyScopeExclusions)
    exclusions?: PatchPolicyScopeExclusions;

    @SpeakeasyMetadata()
    @Expose({ name: "limitations" })
    @Type(() => PatchPolicyScopeLimitations)
    limitations?: PatchPolicyScopeLimitations;
}

export class PatchPolicyUserInteractionDeadlines extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "deadline_enabled" })
    deadlineEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "deadline_period" })
    deadlinePeriod?: number;
}

export class PatchPolicyUserInteractionGracePeriod extends SpeakeasyBase {
    /**
     * Number of minutes to wait before automatically closing all apps required to be closed for an update
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grace_period_duration" })
    gracePeriodDuration?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_center_subject" })
    notificationCenterSubject?: string;
}

export enum PatchPolicyUserInteractionNotificationsNotificationType {
    SelfService = "Self Service",
    SelfServiceAndNotificationCenter = "Self Service and Notification Center",
}

export class PatchPolicyUserInteractionNotificationsReminders extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "notification_reminder_frequency" })
    notificationReminderFrequency?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_reminders_enabled" })
    notificationRemindersEnabled?: boolean;
}

export class PatchPolicyUserInteractionNotifications extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "notification_enabled" })
    notificationEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_message" })
    notificationMessage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_subject" })
    notificationSubject?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_type" })
    notificationType?: PatchPolicyUserInteractionNotificationsNotificationType;

    @SpeakeasyMetadata()
    @Expose({ name: "reminders" })
    @Type(() => PatchPolicyUserInteractionNotificationsReminders)
    reminders?: PatchPolicyUserInteractionNotificationsReminders;
}

export class PatchPolicyUserInteractionSelfServiceIcon extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "filename" })
    filename?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "uri" })
    uri?: string;
}

export class PatchPolicyUserInteraction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "deadlines" })
    @Type(() => PatchPolicyUserInteractionDeadlines)
    deadlines?: PatchPolicyUserInteractionDeadlines;

    @SpeakeasyMetadata()
    @Expose({ name: "grace_period" })
    @Type(() => PatchPolicyUserInteractionGracePeriod)
    gracePeriod?: PatchPolicyUserInteractionGracePeriod;

    @SpeakeasyMetadata()
    @Expose({ name: "install_button_text" })
    installButtonText?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notifications" })
    @Type(() => PatchPolicyUserInteractionNotifications)
    notifications?: PatchPolicyUserInteractionNotifications;

    @SpeakeasyMetadata()
    @Expose({ name: "self_service_description" })
    selfServiceDescription?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "self_service_icon" })
    @Type(() => PatchPolicyUserInteractionSelfServiceIcon)
    selfServiceIcon?: PatchPolicyUserInteractionSelfServiceIcon;
}

export class PatchPolicy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => PatchPolicyGeneral)
    general?: PatchPolicyGeneral;

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    @Type(() => PatchPolicyScope)
    scope?: PatchPolicyScope;

    @SpeakeasyMetadata()
    @Expose({ name: "software_title_configuration_id" })
    softwareTitleConfigurationId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user_interaction" })
    @Type(() => PatchPolicyUserInteraction)
    userInteraction?: PatchPolicyUserInteraction;
}
