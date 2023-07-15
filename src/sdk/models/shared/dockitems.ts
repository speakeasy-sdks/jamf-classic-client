/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdName } from "./idname";
import { Expose, Type } from "class-transformer";

export class DockItems extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dock_item" })
    @Type(() => IdName)
    dockItem?: IdName;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}