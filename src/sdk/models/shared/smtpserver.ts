/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SmtpServer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "authorization_required" })
    authorizationRequired?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;

    /**
     * Hostname or IP address of the SMTP server
     */
    @SpeakeasyMetadata()
    @Expose({ name: "host" })
    host?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "port" })
    port?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "send_from_email" })
    sendFromEmail?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "send_from_name" })
    sendFromName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ssl" })
    ssl?: boolean;

    /**
     * Measured in seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timeout" })
    timeout?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "tls" })
    tls?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}
