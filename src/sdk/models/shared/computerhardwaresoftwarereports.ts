/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum ComputerHardwareSoftwareReportsType {
    Added = "Added",
    Deleted = "Deleted",
}

export class FontReport extends SpeakeasyBase {
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
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "path" })
    path?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ComputerHardwareSoftwareReportsType;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class HardwareReport extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "NIC_speed" })
    nicSpeed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "boot_partition_used_percent" })
    bootPartitionUsedPercent?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "core_count" })
    coreCount?: number;

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
    @Expose({ name: "make" })
    make?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "model_identifier" })
    modelIdentifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "open_ram_slots" })
    openRamSlots?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "operating_system" })
    operatingSystem?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "optical_drive" })
    opticalDrive?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "processor_count" })
    processorCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "processor_speed_mhz" })
    processorSpeedMhz?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "serial_number" })
    serialNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service_pack" })
    servicePack?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "total_harddrive_size" })
    totalHarddriveSize?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "total_ram_mb" })
    totalRamMb?: number;
}

export enum ComputerHardwareSoftwareReportsSchemasType {
    Added = "Added",
    Removed = "Removed",
}

export class PluginReport extends SpeakeasyBase {
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
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "path" })
    path?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ComputerHardwareSoftwareReportsSchemasType;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export enum ComputerHardwareSoftwareReportsSchemasSoftwareReportType {
    Added = "Added",
    Deleted = "Deleted",
}

export class SoftwareReport extends SpeakeasyBase {
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
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "path" })
    path?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ComputerHardwareSoftwareReportsSchemasSoftwareReportType;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}

export class ComputerHardwareSoftwareReports extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "font_report" })
    @Type(() => FontReport)
    fontReport?: FontReport;

    @SpeakeasyMetadata()
    @Expose({ name: "hardware_report" })
    @Type(() => HardwareReport)
    hardwareReport?: HardwareReport;

    @SpeakeasyMetadata()
    @Expose({ name: "plugin_report" })
    @Type(() => PluginReport)
    pluginReport?: PluginReport;

    @SpeakeasyMetadata()
    @Expose({ name: "software_report" })
    @Type(() => SoftwareReport)
    softwareReport?: SoftwareReport;
}
