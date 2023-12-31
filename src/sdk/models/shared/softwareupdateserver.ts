/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SoftwareUpdateServer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "ip_address" })
    ipAddress: string;

    /**
     * Name of the software update server
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "port" })
    port?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "set_system_wide" })
    setSystemWide?: boolean;
}
