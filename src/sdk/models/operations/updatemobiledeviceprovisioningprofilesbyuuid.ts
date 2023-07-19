/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateMobileDeviceProvisioningProfilesByUUIDRequest extends SpeakeasyBase {
    /**
     * Uuid value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
    uuid: string;
}

export class UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationXMLGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    displayName?: string;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    name?: string;

    @SpeakeasyMetadata()
    uuid?: string;
}

/**
 * OK
 */
export class UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    general?: UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationXMLGeneral;
}

export class UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationJSONGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "display_name" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;
}

/**
 * OK
 */
export class UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationJSONGeneral)
    general?: UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationJSONGeneral;
}

export class UpdateMobileDeviceProvisioningProfilesByUUIDResponse extends SpeakeasyBase {
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
    updateMobileDeviceProvisioningProfilesByUUID200ApplicationJSONObject?: UpdateMobileDeviceProvisioningProfilesByUuid200ApplicationJSON;
}
