/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Category } from "./category";
import { Expose, Type } from "class-transformer";

export class SoftwareTitleNotifications extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email_notification" })
    emailNotification?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "jss_notification" })
    jssNotification?: boolean;
}

export class SoftwareTitleComputer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "alt_mac_address" })
    altMacAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mac_address" })
    macAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "serial_number" })
    serialNumber?: string;
}

export class SoftwareTitleComputers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer" })
    @Type(() => SoftwareTitleComputer)
    computer?: SoftwareTitleComputer;
}

export class SoftwareTitlePackage extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class SoftwareTitleVersion extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: SoftwareTitleComputers })
    @Expose({ name: "computers" })
    @Type(() => SoftwareTitleComputers)
    computers?: SoftwareTitleComputers[];

    @SpeakeasyMetadata()
    @Expose({ name: "package" })
    @Type(() => SoftwareTitlePackage)
    package?: SoftwareTitlePackage;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "software_version" })
    softwareVersion?: string;
}

export class SoftwareTitleVersions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    @Type(() => SoftwareTitleVersion)
    version?: SoftwareTitleVersion;
}

export class SoftwareTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    @Type(() => Category)
    category?: Category;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the patch software title
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notifications" })
    @Type(() => SoftwareTitleNotifications)
    notifications?: SoftwareTitleNotifications;

    @SpeakeasyMetadata()
    @Expose({ name: "total_computers" })
    totalComputers?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total_versions" })
    totalVersions?: number;

    @SpeakeasyMetadata({ elemType: SoftwareTitleVersions })
    @Expose({ name: "versions" })
    @Type(() => SoftwareTitleVersions)
    versions?: SoftwareTitleVersions[];
}
