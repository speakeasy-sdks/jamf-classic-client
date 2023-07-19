/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindComputersBasicComputersComputer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    building?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mac_address" })
    macAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "managed" })
    managed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    /**
     * Name of the computer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "report_date_epoch" })
    reportDateEpoch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "report_date_utc" })
    reportDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "serial_number" })
    serialNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

/**
 * OK
 */
export class FindComputersBasicComputers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer" })
    @Type(() => FindComputersBasicComputersComputer)
    computer?: FindComputersBasicComputersComputer;
}

export class FindComputersBasicResponse extends SpeakeasyBase {
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
    computers?: FindComputersBasicComputers;
}
