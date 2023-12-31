/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AllowedFileExtension } from "./allowedfileextension";
import { Expose, Type } from "class-transformer";

export class AllowedFileExtensions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allowed_file_extension" })
    @Type(() => AllowedFileExtension)
    allowedFileExtension?: AllowedFileExtension;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
