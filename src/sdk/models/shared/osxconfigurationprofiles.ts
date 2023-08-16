/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Expose, Type } from "class-transformer";

export class OsXConfigurationProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "os_x_configuration_profile" })
    @Type(() => IdName)
    osXConfigurationProfile?: IdName;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
