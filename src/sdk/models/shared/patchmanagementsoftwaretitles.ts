/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class PatchManagementSoftwareTitlesPatchManagementSoftwareTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name_id" })
    nameId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "source_id" })
    sourceId?: number;
}

export class PatchManagementSoftwareTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "patch_management_software_title" })
    @Type(() => PatchManagementSoftwareTitlesPatchManagementSoftwareTitle)
    patchManagementSoftwareTitle?: PatchManagementSoftwareTitlesPatchManagementSoftwareTitle;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
