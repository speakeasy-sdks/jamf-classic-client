/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation)
 */
export enum PathParamInstallAction {
    One = 1,
    Two = 2,
}

export class CreateMobileScheduleOSUpdateCommandWithProductVersionURLRequest extends SpeakeasyBase {
    /**
     * Mobile device ID values, multiple IDs may be separated by commas (e.g. /id/13,14,15)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_list" })
    idList: string;

    /**
     * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=install_action" })
    installAction: PathParamInstallAction;

    /**
     * Specify the OS version of the update. Updating to a specific iOS version requires devices with iOS 11.3 or later. Updating to a specific tvOS version requires devices with tvOS 12.2 or later. install_action required by the ScheduleOSUpdate command if product_version is specified.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product_version" })
    productVersion: string;
}

export class CreateMobileScheduleOSUpdateCommandWithProductVersionURLResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
