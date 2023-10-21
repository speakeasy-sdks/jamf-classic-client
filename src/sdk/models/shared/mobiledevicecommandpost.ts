/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * Command to send device
 */
export enum MobileDeviceCommandPostGeneralCommand {
    Settings = "Settings",
    DeviceLock = "DeviceLock",
    EraseDevice = "EraseDevice",
    ClearPasscode = "ClearPasscode",
    UnmanageDevice = "UnmanageDevice",
    UpdateInventory = "UpdateInventory",
    ClearRestrictionsPassword = "ClearRestrictionsPassword",
    SettingsEnableDataRoaming = "SettingsEnableDataRoaming",
    SettingsDisableDataRoaming = "SettingsDisableDataRoaming",
    SettingsEnableVoiceRoaming = "SettingsEnableVoiceRoaming",
    SettingsDisableVoiceRoaming = "SettingsDisableVoiceRoaming",
    SettingsEnableAppAnalytics = "SettingsEnableAppAnalytics",
    SettingsDisableAppAnalytics = "SettingsDisableAppAnalytics",
    SettingsEnableDiagnosticSubmission = "SettingsEnableDiagnosticSubmission",
    SettingsDisableDiagnosticSubmission = "SettingsDisableDiagnosticSubmission",
    BlankPush = "BlankPush",
    WallpaperSupervisedOnly = "Wallpaper (supervised only)",
    DeviceNameSupervisedOnly = "DeviceName (supervised only)",
    ShutDownDeviceSupervisedOnly = "ShutDownDevice (supervised only)",
    RestartDeviceSupervisedOnly = "RestartDevice (supervised only)",
    PasscodeLockGracePeriodSharedIPadOnly = "PasscodeLockGracePeriod (shared iPad only)",
    EnableLostModeSupervisedOnly = "EnableLostMode (supervised only)",
    DisableLostModeSupervisedAndInLostModeOnly = "DisableLostMode (supervised and in lost mode only)",
    DeviceLocationSupervisedAndInLostModeOnly = "DeviceLocation (supervised and in lost mode only)",
    PlayLostModeSoundSupervisedAndInLostModeOnly = "PlayLostModeSound (supervised and in lost mode only)",
}

export class MobileDeviceCommandPostGeneral extends SpeakeasyBase {
    /**
     * Whether Lost Mode should be enabled after the device is wiped and re-enrolled (optional, but defaults to true)
     */
    @SpeakeasyMetadata()
    alwaysEnforceLostMode?: boolean;

    /**
     * Command to send device
     */
    @SpeakeasyMetadata()
    command: MobileDeviceCommandPostGeneralCommand;

    /**
     * Device name to set (Required for DeviceName command)
     */
    @SpeakeasyMetadata()
    deviceName?: string;

    /**
     * If true, on the next reboot Proximity Setup is not allowed and the pane in Setup Assistant will be skipped. Defaults to false.
     */
    @SpeakeasyMetadata()
    disallowProximitySetup?: boolean;

    /**
     * The carrier's eSIM server URL to query. This URL is obtained from each carrier separately.
     */
    @SpeakeasyMetadata()
    eSimServerUrl?: string;

    /**
     * Lock message for the DeviceLock command (optional)
     */
    @SpeakeasyMetadata()
    lockMessage?: string;

    /**
     * The footnote to be displayed for the EnableLostMode command (optional)
     */
    @SpeakeasyMetadata()
    lostModeFootnote?: string;

    /**
     * The message to be displayed on the lost device (Required for EnableLostMode command if lost_mode_phone is not specified)
     */
    @SpeakeasyMetadata()
    lostModeMessage?: string;

    /**
     * The phone number to be displayed on the lost device (Required for EnableLostMode command if lost_mode_message is not specified)
     */
    @SpeakeasyMetadata()
    lostModePhone?: string;

    /**
     * Whether to play a sound on the device when the EnableLostMode command is sent (optional)
     */
    @SpeakeasyMetadata()
    lostModeWithSound?: boolean;

    /**
     * Number of seconds the screen must be locked before unlock attempts will require the device passcode (Required for PasscodeLockGracePeriod command)
     */
    @SpeakeasyMetadata()
    passcodeLockGracePeriod?: number;

    /**
     * Whether the data plan should be preserved when issuing the EraseDevice command (optional)
     */
    @SpeakeasyMetadata()
    preserveDataPlan?: boolean;

    /**
     * Wallpaper image in PNG or JPEG format, encoded using base64 (required for Wallpaper command if wallpaper_id is not specified)
     */
    @SpeakeasyMetadata()
    wallpaperContent?: string;

    /**
     * ID of existing icon within Jamf Pro to use (required for Wallpaper command if wallpaper_content is not specified)
     */
    @SpeakeasyMetadata()
    wallpaperId?: number;

    /**
     * Where to set wallpaper (Required for Wallpaper command.) Possible values include - 1 (Lock screen), 2 (Home screen), 3 (Lock and home screens)
     */
    @SpeakeasyMetadata()
    wallpaperSetting?: number;
}

export class MobileDeviceCommandPostMobileDevicesMobileDevice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id: number;
}

export class MobileDeviceCommandPostMobileDevices extends SpeakeasyBase {
    @SpeakeasyMetadata()
    mobileDevice?: MobileDeviceCommandPostMobileDevicesMobileDevice;
}

export class MobileDeviceCommandPost extends SpeakeasyBase {
    @SpeakeasyMetadata()
    general?: MobileDeviceCommandPostGeneral;

    @SpeakeasyMetadata()
    mobileDevices?: MobileDeviceCommandPostMobileDevices;
}
