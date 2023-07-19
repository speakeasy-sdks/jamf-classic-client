/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class MobileDevicePostGeneral extends SpeakeasyBase {
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
    @Expose({ name: "bluetooth_mac_address" })
    bluetoothMacAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "capacity" })
    capacity?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "capacity_mb" })
    capacityMb?: number;

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
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "initial_entry_date_epoch" })
    initialEntryDateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "ip_address" })
    ipAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_enrollment_epoch" })
    lastEnrollmentEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_inventory_update_epoch" })
    lastInventoryUpdateEpoch?: number;

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
    @Expose({ name: "supervised" })
    supervised?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid: string;

    @SpeakeasyMetadata()
    @Expose({ name: "wifi_mac_address" })
    wifiMacAddress?: string;
}

export class MobileDevicePost extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => MobileDevicePostGeneral)
    general?: MobileDevicePostGeneral;
}
