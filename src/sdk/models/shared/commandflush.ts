/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class CommandflushMobileDevice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id: number;
}

export class CommandflushMobileDevices extends SpeakeasyBase {
    @SpeakeasyMetadata()
    mobileDevice?: CommandflushMobileDevice;
}

export enum Status {
    Pending = "Pending",
    Failed = "Failed",
    PendingPlusFailed = "Pending+Failed",
}

export class Commandflush extends SpeakeasyBase {
    @SpeakeasyMetadata()
    mobileDevices?: CommandflushMobileDevices;

    @SpeakeasyMetadata()
    status: Status;
}
