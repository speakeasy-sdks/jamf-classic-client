/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Location extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    building?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email_address" })
    emailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "position" })
    position?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "real_name" })
    realName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "realname" })
    realname?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "room" })
    room?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}
