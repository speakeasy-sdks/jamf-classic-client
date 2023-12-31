/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RemovableMacAddress } from "./removablemacaddress";
import { Expose, Type } from "class-transformer";

export class RemovableMacAddresses extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "removable_mac_address" })
    @Type(() => RemovableMacAddress)
    removableMacAddress?: RemovableMacAddress;
}
