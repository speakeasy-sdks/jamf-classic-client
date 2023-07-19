/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class FindDiskEncryptionConfigurationsByNameRequest extends SpeakeasyBase {
    /**
     * Name to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;
}

export enum FindDiskEncryptionConfigurationsByName200ApplicationXMLFileVaultEnabledUsers {
    CurrentOrNextUser = "Current or Next User",
    ManagementAccount = "Management Account",
}

export enum FindDiskEncryptionConfigurationsByName200ApplicationXMLKeyType {
    Individual = "Individual",
    Institutional = "Institutional",
    IndividualAndInstitutional = "Individual And Institutional",
}

/**
 * OK
 */
export class FindDiskEncryptionConfigurationsByName200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    fileVaultEnabledUsers?: FindDiskEncryptionConfigurationsByName200ApplicationXMLFileVaultEnabledUsers;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    keyType?: FindDiskEncryptionConfigurationsByName200ApplicationXMLKeyType;

    /**
     * Name of the disk encryption configuration
     */
    @SpeakeasyMetadata()
    name: string;
}

export enum FindDiskEncryptionConfigurationsByName200ApplicationJSONFileVaultEnabledUsers {
    CurrentOrNextUser = "Current or Next User",
    ManagementAccount = "Management Account",
}

export enum FindDiskEncryptionConfigurationsByName200ApplicationJSONKeyType {
    Individual = "Individual",
    Institutional = "Institutional",
    IndividualAndInstitutional = "Individual And Institutional",
}

/**
 * OK
 */
export class FindDiskEncryptionConfigurationsByName200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "file_vault_enabled_users" })
    fileVaultEnabledUsers?: FindDiskEncryptionConfigurationsByName200ApplicationJSONFileVaultEnabledUsers;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "key_type" })
    keyType?: FindDiskEncryptionConfigurationsByName200ApplicationJSONKeyType;

    /**
     * Name of the disk encryption configuration
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class FindDiskEncryptionConfigurationsByNameResponse extends SpeakeasyBase {
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
    findDiskEncryptionConfigurationsByName200ApplicationJSONObject?: FindDiskEncryptionConfigurationsByName200ApplicationJSON;
}
