/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum DiskEncryptionConfigurationFileVaultEnabledUsers {
    CurrentOrNextUser = "Current or Next User",
    ManagementAccount = "Management Account",
}

export enum DiskEncryptionConfigurationKeyType {
    Individual = "Individual",
    Institutional = "Institutional",
    IndividualAndInstitutional = "Individual And Institutional",
}

/**
 * OK
 */
export class DiskEncryptionConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "file_vault_enabled_users" })
    fileVaultEnabledUsers?: DiskEncryptionConfigurationFileVaultEnabledUsers;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "key_type" })
    keyType?: DiskEncryptionConfigurationKeyType;

    /**
     * Name of the disk encryption configuration
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}