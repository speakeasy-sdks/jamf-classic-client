/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Expose, Type } from "class-transformer";

export class Scripts extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "script" })
    @Type(() => IdName)
    script?: IdName;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
