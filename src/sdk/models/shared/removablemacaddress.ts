/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK
 */
export class RemovableMacAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * MAC address to ignore when identifying computers
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
