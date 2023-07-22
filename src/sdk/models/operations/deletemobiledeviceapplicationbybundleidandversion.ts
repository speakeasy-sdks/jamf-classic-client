/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteMobileDeviceApplicationByBundleIDandVersionRequest extends SpeakeasyBase {
    /**
     * Bundle ID value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bundleid" })
    bundleid: string;

    /**
     * Version to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
    version: string;
}

export class DeleteMobileDeviceApplicationByBundleIDandVersionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
