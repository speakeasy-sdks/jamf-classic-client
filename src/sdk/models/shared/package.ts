/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum RequiredProcessor {
    None = "None",
    Ppc = "ppc",
    X86 = "x86",
}

export class Package extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_uninstalled" })
    allowUninstalled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "filename" })
    filename: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fill_existing_users" })
    fillExistingUsers?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "fill_user_template" })
    fillUserTemplate?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "info" })
    info?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "install_if_reported_available" })
    installIfReportedAvailable?: boolean;

    /**
     * Name of the package
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "os_requirements" })
    osRequirements?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reboot_required" })
    rebootRequired?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "reinstall_option" })
    reinstallOption?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "required_processor" })
    requiredProcessor?: RequiredProcessor;

    @SpeakeasyMetadata()
    @Expose({ name: "send_notification" })
    sendNotification?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "switch_with_package" })
    switchWithPackage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "triggering_files" })
    triggeringFiles?: string;
}
