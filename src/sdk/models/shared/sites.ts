/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Site } from "./site";
import { Expose, Type } from "class-transformer";

export class Sites extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => Site)
    site?: Site;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}