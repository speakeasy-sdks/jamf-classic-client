/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation)
 */
export enum CreateMobileScheduleOSUpdateCommandURLInstallAction {
    One = 1,
    Two = 2,
}

export class CreateMobileScheduleOSUpdateCommandURLRequest extends SpeakeasyBase {
    /**
     * Mobile device ID values, multiple IDs may be separated by commas (e.g. /id/13,14,15)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_list" })
    idList: string;

    /**
     * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=install_action" })
    installAction: CreateMobileScheduleOSUpdateCommandURLInstallAction;
}

export class CreateMobileScheduleOSUpdateCommandURLResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
