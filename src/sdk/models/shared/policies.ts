/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Expose, Type } from "class-transformer";

export class Policies extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => IdName)
    policy?: IdName;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}