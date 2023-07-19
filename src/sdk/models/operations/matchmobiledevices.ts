/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class MatchMobileDevicesRequest extends SpeakeasyBase {
    /**
     * Name, mac address, etc. to filter by. Match uses the same format as the general search in Jamf Pro.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=match" })
    match: string;
}

export class MatchMobileDevices200ApplicationXMLApplicationsApplication extends SpeakeasyBase {
    @SpeakeasyMetadata()
    applicationName?: string;

    @SpeakeasyMetadata()
    applicationVersion?: string;

    @SpeakeasyMetadata()
    identifier?: string;
}

export class MatchMobileDevices200ApplicationXMLApplications extends SpeakeasyBase {
    @SpeakeasyMetadata()
    application?: MatchMobileDevices200ApplicationXMLApplicationsApplication;

    @SpeakeasyMetadata()
    size?: number;
}

export class MatchMobileDevices200ApplicationXMLCertificatesCertificate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    commonName?: string;

    @SpeakeasyMetadata()
    identity?: boolean;
}

export class MatchMobileDevices200ApplicationXMLCertificates extends SpeakeasyBase {
    @SpeakeasyMetadata()
    certificate?: MatchMobileDevices200ApplicationXMLCertificatesCertificate;

    @SpeakeasyMetadata()
    size?: number;
}

export class MatchMobileDevices200ApplicationXMLConfigurationProfilesConfigurationProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    displayName?: string;

    @SpeakeasyMetadata()
    identifier?: string;

    @SpeakeasyMetadata()
    uuid?: string;

    @SpeakeasyMetadata()
    version?: number;
}

export class MatchMobileDevices200ApplicationXMLConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    configurationProfile?: MatchMobileDevices200ApplicationXMLConfigurationProfilesConfigurationProfile;

    @SpeakeasyMetadata()
    size?: number;
}

export class MatchMobileDevices200ApplicationXMLExtensionAttributes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    type?: string;

    @SpeakeasyMetadata()
    value?: string;
}

export class MatchMobileDevices200ApplicationXMLGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    assetTag?: string;

    @SpeakeasyMetadata()
    available?: number;

    @SpeakeasyMetadata()
    availableMb?: number;

    @SpeakeasyMetadata()
    batteryLevel?: number;

    @SpeakeasyMetadata()
    bleCapable?: boolean;

    @SpeakeasyMetadata()
    bluetoothMacAddress?: string;

    @SpeakeasyMetadata()
    capacity?: number;

    @SpeakeasyMetadata()
    capacityMb?: number;

    @SpeakeasyMetadata()
    cloudBackupEnabled?: boolean;

    @SpeakeasyMetadata()
    deviceLocatorServiceEnabled?: boolean;

    @SpeakeasyMetadata()
    deviceName?: string;

    @SpeakeasyMetadata()
    deviceOwnershipLevel?: string;

    @SpeakeasyMetadata()
    displayName?: string;

    @SpeakeasyMetadata()
    doNotDisturbEnabled?: boolean;

    @SpeakeasyMetadata()
    exchangeActivesyncDeviceIdentifier?: string;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    initialEntryDateEpoch?: number;

    @SpeakeasyMetadata()
    initialEntryDateUtc?: string;

    @SpeakeasyMetadata()
    ipAddress?: string;

    @SpeakeasyMetadata()
    itunesStoreAccountIsActive?: boolean;

    @SpeakeasyMetadata()
    lastBackupTimeEpoch?: number;

    @SpeakeasyMetadata()
    lastBackupTimeUtc?: string;

    @SpeakeasyMetadata()
    lastCloudBackupDateEpoch?: number;

    @SpeakeasyMetadata()
    lastCloudBackupDateUtc?: string;

    @SpeakeasyMetadata()
    lastEnrollmentEpoch?: number;

    @SpeakeasyMetadata()
    lastEnrollmentUtc?: string;

    @SpeakeasyMetadata()
    lastInventoryUpdate?: string;

    @SpeakeasyMetadata()
    lastInventoryUpdateEpoch?: number;

    @SpeakeasyMetadata()
    lastInventoryUpdateUtc?: string;

    @SpeakeasyMetadata()
    locationServicesEnabled?: boolean;

    @SpeakeasyMetadata()
    managed?: boolean;

    @SpeakeasyMetadata()
    model?: string;

    @SpeakeasyMetadata()
    modelDisplay?: string;

    @SpeakeasyMetadata()
    modelIdentifier?: string;

    @SpeakeasyMetadata()
    modelNumber?: string;

    @SpeakeasyMetadata()
    modemFirmware?: string;

    @SpeakeasyMetadata()
    name: string;

    @SpeakeasyMetadata()
    osBuild?: string;

    @SpeakeasyMetadata()
    osType?: string;

    @SpeakeasyMetadata()
    osVersion?: string;

    @SpeakeasyMetadata()
    percentageUsed?: number;

    @SpeakeasyMetadata()
    phoneNumber?: string;

    @SpeakeasyMetadata()
    serialNumber: string;

    @SpeakeasyMetadata()
    shared?: string;

    @SpeakeasyMetadata()
    supervised?: boolean;

    @SpeakeasyMetadata()
    tethered?: string;

    @SpeakeasyMetadata()
    udid: string;

    @SpeakeasyMetadata()
    wifiMacAddress?: string;
}

export class MatchMobileDevices200ApplicationXMLLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    building?: string;

    @SpeakeasyMetadata()
    department?: string;

    @SpeakeasyMetadata()
    emailAddress?: string;

    @SpeakeasyMetadata()
    phone?: string;

    @SpeakeasyMetadata()
    phoneNumber?: string;

    @SpeakeasyMetadata()
    position?: string;

    @SpeakeasyMetadata()
    realName?: string;

    @SpeakeasyMetadata()
    realname?: string;

    @SpeakeasyMetadata()
    room?: string;

    @SpeakeasyMetadata()
    username?: string;
}

export class MatchMobileDevices200ApplicationXMLMobileDeviceGroupsMobileDeviceGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;
}

export class MatchMobileDevices200ApplicationXMLMobileDeviceGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    mobileDeviceGroup?: MatchMobileDevices200ApplicationXMLMobileDeviceGroupsMobileDeviceGroup;

    @SpeakeasyMetadata()
    size?: number;
}

export class MatchMobileDevices200ApplicationXMLNetwork extends SpeakeasyBase {
    @SpeakeasyMetadata()
    carrierSettingsVersion?: string;

    @SpeakeasyMetadata()
    cellularTechnology?: string;

    @SpeakeasyMetadata()
    currentCarrierNetwork?: string;

    @SpeakeasyMetadata()
    currentMobileCountryCode?: string;

    @SpeakeasyMetadata()
    currentMobileNetworkCode?: string;

    @SpeakeasyMetadata()
    dataRoamingEnabled?: boolean;

    @SpeakeasyMetadata()
    homeCarrierNetwork?: string;

    @SpeakeasyMetadata()
    homeMobileCountryCode?: string;

    @SpeakeasyMetadata()
    homeMobileNetworkCode?: string;

    @SpeakeasyMetadata()
    iccid?: string;

    @SpeakeasyMetadata()
    imei?: string;

    @SpeakeasyMetadata()
    phoneNumber?: string;

    @SpeakeasyMetadata()
    voiceRoamingEnabled?: string;
}

export class MatchMobileDevices200ApplicationXMLProvisioningProfilesMobileDeviceProvisioningProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    displayName?: string;

    @SpeakeasyMetadata()
    expirationDate?: string;

    @SpeakeasyMetadata()
    expirationDateEpoch?: number;

    @SpeakeasyMetadata()
    expirationDateUtc?: string;

    @SpeakeasyMetadata()
    uuid?: string;
}

export class MatchMobileDevices200ApplicationXMLProvisioningProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    mobileDeviceProvisioningProfile?: MatchMobileDevices200ApplicationXMLProvisioningProfilesMobileDeviceProvisioningProfile;

    @SpeakeasyMetadata()
    size?: number;
}

export class MatchMobileDevices200ApplicationXMLPurchasing extends SpeakeasyBase {
    @SpeakeasyMetadata()
    applecareId?: string;

    @SpeakeasyMetadata()
    isLeased?: boolean;

    @SpeakeasyMetadata()
    isPurchased?: boolean;

    @SpeakeasyMetadata()
    leaseExpires?: string;

    @SpeakeasyMetadata()
    leaseExpiresEpoch?: number;

    @SpeakeasyMetadata()
    leaseExpiresUtc?: string;

    @SpeakeasyMetadata()
    lifeExpectancy?: number;

    @SpeakeasyMetadata()
    poDate?: string;

    @SpeakeasyMetadata()
    poDateEpoch?: number;

    @SpeakeasyMetadata()
    poDateUtc?: string;

    @SpeakeasyMetadata()
    poNumber?: string;

    @SpeakeasyMetadata()
    purchasePrice?: string;

    @SpeakeasyMetadata()
    purchasingAccount?: string;

    @SpeakeasyMetadata()
    purchasingContact?: string;

    @SpeakeasyMetadata()
    vendor?: string;

    @SpeakeasyMetadata()
    warrantyExpires?: string;

    @SpeakeasyMetadata()
    warrantyExpiresEpoch?: number;

    @SpeakeasyMetadata()
    warrantyExpiresUtc?: string;
}

export class MatchMobileDevices200ApplicationXMLSecurityObject extends SpeakeasyBase {
    @SpeakeasyMetadata()
    activationLockEnabled?: boolean;

    @SpeakeasyMetadata()
    blockLevelEncryptionCapable?: boolean;

    @SpeakeasyMetadata()
    dataProtection?: boolean;

    @SpeakeasyMetadata()
    fileLevelEncryptionCapable?: boolean;

    @SpeakeasyMetadata()
    hardwareEncryption?: string;

    @SpeakeasyMetadata()
    jailbreakDetected?: string;

    @SpeakeasyMetadata()
    lostLocationAltitude?: string;

    @SpeakeasyMetadata()
    lostLocationCourse?: string;

    @SpeakeasyMetadata()
    lostLocationEpoch?: number;

    @SpeakeasyMetadata()
    lostLocationHorizontalAccuracy?: string;

    @SpeakeasyMetadata()
    lostLocationLatitude?: string;

    @SpeakeasyMetadata()
    lostLocationLongitude?: string;

    @SpeakeasyMetadata()
    lostLocationSpeed?: string;

    @SpeakeasyMetadata()
    lostLocationUtc?: string;

    @SpeakeasyMetadata()
    lostLocationVerticalAccuracy?: string;

    @SpeakeasyMetadata()
    lostModeEnableIssuedEpoch?: number;

    @SpeakeasyMetadata()
    lostModeEnableIssuedUtc?: string;

    @SpeakeasyMetadata()
    lostModeEnabled?: string;

    @SpeakeasyMetadata()
    lostModeEnforced?: boolean;

    @SpeakeasyMetadata()
    lostModeFootnote?: string;

    @SpeakeasyMetadata()
    lostModeMessage?: string;

    @SpeakeasyMetadata()
    lostModePhone?: string;

    @SpeakeasyMetadata()
    passcodeCompliant?: boolean;

    @SpeakeasyMetadata()
    passcodeCompliantWithProfile?: boolean;

    @SpeakeasyMetadata()
    passcodeLockGracePeriodEnforced?: string;

    @SpeakeasyMetadata()
    passcodePresent?: boolean;
}

/**
 * OK
 */
export class MatchMobileDevices200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationXMLApplications })
    applications?: MatchMobileDevices200ApplicationXMLApplications[];

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationXMLCertificates })
    certificates?: MatchMobileDevices200ApplicationXMLCertificates[];

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationXMLConfigurationProfiles })
    configurationProfiles?: MatchMobileDevices200ApplicationXMLConfigurationProfiles[];

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationXMLExtensionAttributes })
    extensionAttributes?: MatchMobileDevices200ApplicationXMLExtensionAttributes[];

    @SpeakeasyMetadata()
    general?: MatchMobileDevices200ApplicationXMLGeneral;

    @SpeakeasyMetadata()
    location?: MatchMobileDevices200ApplicationXMLLocation;

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationXMLMobileDeviceGroups })
    mobileDeviceGroups?: MatchMobileDevices200ApplicationXMLMobileDeviceGroups[];

    @SpeakeasyMetadata()
    network?: MatchMobileDevices200ApplicationXMLNetwork;

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationXMLProvisioningProfiles })
    provisioningProfiles?: MatchMobileDevices200ApplicationXMLProvisioningProfiles[];

    @SpeakeasyMetadata()
    purchasing?: MatchMobileDevices200ApplicationXMLPurchasing;

    @SpeakeasyMetadata()
    securityObject?: MatchMobileDevices200ApplicationXMLSecurityObject;
}

export class MatchMobileDevices200ApplicationJSONApplicationsApplication extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_name" })
    applicationName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "application_version" })
    applicationVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "identifier" })
    identifier?: string;
}

export class MatchMobileDevices200ApplicationJSONApplications extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application" })
    @Type(() => MatchMobileDevices200ApplicationJSONApplicationsApplication)
    application?: MatchMobileDevices200ApplicationJSONApplicationsApplication;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class MatchMobileDevices200ApplicationJSONCertificatesCertificate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "common_name" })
    commonName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "identity" })
    identity?: boolean;
}

export class MatchMobileDevices200ApplicationJSONCertificates extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "certificate" })
    @Type(() => MatchMobileDevices200ApplicationJSONCertificatesCertificate)
    certificate?: MatchMobileDevices200ApplicationJSONCertificatesCertificate;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class MatchMobileDevices200ApplicationJSONConfigurationProfilesConfigurationProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "display_name" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "identifier" })
    identifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}

export class MatchMobileDevices200ApplicationJSONConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "configuration_profile" })
    @Type(() => MatchMobileDevices200ApplicationJSONConfigurationProfilesConfigurationProfile)
    configurationProfile?: MatchMobileDevices200ApplicationJSONConfigurationProfilesConfigurationProfile;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class MatchMobileDevices200ApplicationJSONExtensionAttributes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}

export class MatchMobileDevices200ApplicationJSONGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "asset_tag" })
    assetTag?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "available" })
    available?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "available_mb" })
    availableMb?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "battery_level" })
    batteryLevel?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "ble_capable" })
    bleCapable?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "bluetooth_mac_address" })
    bluetoothMacAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "capacity" })
    capacity?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "capacity_mb" })
    capacityMb?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "cloud_backup_enabled" })
    cloudBackupEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "device_locator_service_enabled" })
    deviceLocatorServiceEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "device_name" })
    deviceName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "device_ownership_level" })
    deviceOwnershipLevel?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "display_name" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "do_not_disturb_enabled" })
    doNotDisturbEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "exchange_activesync_device_identifier" })
    exchangeActivesyncDeviceIdentifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "initial_entry_date_epoch" })
    initialEntryDateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "initial_entry_date_utc" })
    initialEntryDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ip_address" })
    ipAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "itunes_store_account_is_active" })
    itunesStoreAccountIsActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "last_backup_time_epoch" })
    lastBackupTimeEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_backup_time_utc" })
    lastBackupTimeUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_cloud_backup_date_epoch" })
    lastCloudBackupDateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_cloud_backup_date_utc" })
    lastCloudBackupDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_enrollment_epoch" })
    lastEnrollmentEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_enrollment_utc" })
    lastEnrollmentUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_inventory_update" })
    lastInventoryUpdate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_inventory_update_epoch" })
    lastInventoryUpdateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_inventory_update_utc" })
    lastInventoryUpdateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "location_services_enabled" })
    locationServicesEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "managed" })
    managed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "model_display" })
    modelDisplay?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "model_identifier" })
    modelIdentifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "model_number" })
    modelNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modem_firmware" })
    modemFirmware?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "os_build" })
    osBuild?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "os_type" })
    osType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "os_version" })
    osVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "percentage_used" })
    percentageUsed?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "serial_number" })
    serialNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "shared" })
    shared?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "supervised" })
    supervised?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "tethered" })
    tethered?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid: string;

    @SpeakeasyMetadata()
    @Expose({ name: "wifi_mac_address" })
    wifiMacAddress?: string;
}

export class MatchMobileDevices200ApplicationJSONLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    building?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email_address" })
    emailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "position" })
    position?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "real_name" })
    realName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "realname" })
    realname?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "room" })
    room?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export class MatchMobileDevices200ApplicationJSONMobileDeviceGroupsMobileDeviceGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class MatchMobileDevices200ApplicationJSONMobileDeviceGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mobile_device_group" })
    @Type(() => MatchMobileDevices200ApplicationJSONMobileDeviceGroupsMobileDeviceGroup)
    mobileDeviceGroup?: MatchMobileDevices200ApplicationJSONMobileDeviceGroupsMobileDeviceGroup;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class MatchMobileDevices200ApplicationJSONNetwork extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "carrier_settings_version" })
    carrierSettingsVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "cellular_technology" })
    cellularTechnology?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "current_carrier_network" })
    currentCarrierNetwork?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "current_mobile_country_code" })
    currentMobileCountryCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "current_mobile_network_code" })
    currentMobileNetworkCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "data_roaming_enabled" })
    dataRoamingEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "home_carrier_network" })
    homeCarrierNetwork?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "home_mobile_country_code" })
    homeMobileCountryCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "home_mobile_network_code" })
    homeMobileNetworkCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "iccid" })
    iccid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "imei" })
    imei?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "voice_roaming_enabled" })
    voiceRoamingEnabled?: string;
}

export class MatchMobileDevices200ApplicationJSONProvisioningProfilesMobileDeviceProvisioningProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "display_name" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expiration_date" })
    expirationDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expiration_date_epoch" })
    expirationDateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "expiration_date_utc" })
    expirationDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

export class MatchMobileDevices200ApplicationJSONProvisioningProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mobile_device_provisioning_profile" })
    @Type(
        () =>
            MatchMobileDevices200ApplicationJSONProvisioningProfilesMobileDeviceProvisioningProfile
    )
    mobileDeviceProvisioningProfile?: MatchMobileDevices200ApplicationJSONProvisioningProfilesMobileDeviceProvisioningProfile;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class MatchMobileDevices200ApplicationJSONPurchasing extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applecare_id" })
    applecareId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_leased" })
    isLeased?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_purchased" })
    isPurchased?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "lease_expires" })
    leaseExpires?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lease_expires_epoch" })
    leaseExpiresEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "lease_expires_utc" })
    leaseExpiresUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "life_expectancy" })
    lifeExpectancy?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "po_date" })
    poDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "po_date_epoch" })
    poDateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "po_date_utc" })
    poDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "po_number" })
    poNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchase_price" })
    purchasePrice?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchasing_account" })
    purchasingAccount?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchasing_contact" })
    purchasingContact?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vendor" })
    vendor?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "warranty_expires" })
    warrantyExpires?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "warranty_expires_epoch" })
    warrantyExpiresEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "warranty_expires_utc" })
    warrantyExpiresUtc?: string;
}

export class MatchMobileDevices200ApplicationJSONSecurityObject extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "activation_lock_enabled" })
    activationLockEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "block_level_encryption_capable" })
    blockLevelEncryptionCapable?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "data_protection" })
    dataProtection?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "file_level_encryption_capable" })
    fileLevelEncryptionCapable?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hardware_encryption" })
    hardwareEncryption?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "jailbreak_detected" })
    jailbreakDetected?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_altitude" })
    lostLocationAltitude?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_course" })
    lostLocationCourse?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_epoch" })
    lostLocationEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_horizontal_accuracy" })
    lostLocationHorizontalAccuracy?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_latitude" })
    lostLocationLatitude?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_longitude" })
    lostLocationLongitude?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_speed" })
    lostLocationSpeed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_utc" })
    lostLocationUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_location_vertical_accuracy" })
    lostLocationVerticalAccuracy?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_mode_enable_issued_epoch" })
    lostModeEnableIssuedEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_mode_enable_issued_utc" })
    lostModeEnableIssuedUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_mode_enabled" })
    lostModeEnabled?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_mode_enforced" })
    lostModeEnforced?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_mode_footnote" })
    lostModeFootnote?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_mode_message" })
    lostModeMessage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lost_mode_phone" })
    lostModePhone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passcode_compliant" })
    passcodeCompliant?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "passcode_compliant_with_profile" })
    passcodeCompliantWithProfile?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "passcode_lock_grace_period_enforced" })
    passcodeLockGracePeriodEnforced?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passcode_present" })
    passcodePresent?: boolean;
}

/**
 * OK
 */
export class MatchMobileDevices200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationJSONApplications })
    @Expose({ name: "applications" })
    @Type(() => MatchMobileDevices200ApplicationJSONApplications)
    applications?: MatchMobileDevices200ApplicationJSONApplications[];

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationJSONCertificates })
    @Expose({ name: "certificates" })
    @Type(() => MatchMobileDevices200ApplicationJSONCertificates)
    certificates?: MatchMobileDevices200ApplicationJSONCertificates[];

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationJSONConfigurationProfiles })
    @Expose({ name: "configuration_profiles" })
    @Type(() => MatchMobileDevices200ApplicationJSONConfigurationProfiles)
    configurationProfiles?: MatchMobileDevices200ApplicationJSONConfigurationProfiles[];

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationJSONExtensionAttributes })
    @Expose({ name: "extension_attributes" })
    @Type(() => MatchMobileDevices200ApplicationJSONExtensionAttributes)
    extensionAttributes?: MatchMobileDevices200ApplicationJSONExtensionAttributes[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => MatchMobileDevices200ApplicationJSONGeneral)
    general?: MatchMobileDevices200ApplicationJSONGeneral;

    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    @Type(() => MatchMobileDevices200ApplicationJSONLocation)
    location?: MatchMobileDevices200ApplicationJSONLocation;

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationJSONMobileDeviceGroups })
    @Expose({ name: "mobile_device_groups" })
    @Type(() => MatchMobileDevices200ApplicationJSONMobileDeviceGroups)
    mobileDeviceGroups?: MatchMobileDevices200ApplicationJSONMobileDeviceGroups[];

    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    @Type(() => MatchMobileDevices200ApplicationJSONNetwork)
    network?: MatchMobileDevices200ApplicationJSONNetwork;

    @SpeakeasyMetadata({ elemType: MatchMobileDevices200ApplicationJSONProvisioningProfiles })
    @Expose({ name: "provisioning_profiles" })
    @Type(() => MatchMobileDevices200ApplicationJSONProvisioningProfiles)
    provisioningProfiles?: MatchMobileDevices200ApplicationJSONProvisioningProfiles[];

    @SpeakeasyMetadata()
    @Expose({ name: "purchasing" })
    @Type(() => MatchMobileDevices200ApplicationJSONPurchasing)
    purchasing?: MatchMobileDevices200ApplicationJSONPurchasing;

    @SpeakeasyMetadata()
    @Expose({ name: "security_object" })
    @Type(() => MatchMobileDevices200ApplicationJSONSecurityObject)
    securityObject?: MatchMobileDevices200ApplicationJSONSecurityObject;
}

export class MatchMobileDevicesResponse extends SpeakeasyBase {
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
    matchMobileDevices200ApplicationJSONObject?: MatchMobileDevices200ApplicationJSON;
}
