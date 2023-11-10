/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CategoryObject extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the category
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
