/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class FindLDAPServerGroupUserByIdRequest extends SpeakeasyBase {
    /**
     * Group to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" })
    group: string;

    /**
     * Server ID to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    /**
     * User to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
    user: string;
}

export class FindLDAPServerGroupUserByIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
