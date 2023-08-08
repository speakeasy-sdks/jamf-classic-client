/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class PatchAvailableTitlesAvailableTitlesAvailableTitle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "app_name" })
    appName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "current_version" })
    currentVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_modified" })
    lastModified?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name_id" })
    nameId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "publisher" })
    publisher?: string;
}

export class PatchAvailableTitlesAvailableTitles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "available_title" })
    @Type(() => PatchAvailableTitlesAvailableTitlesAvailableTitle)
    availableTitle?: PatchAvailableTitlesAvailableTitlesAvailableTitle;
}

/**
 * OK
 */
export class PatchAvailableTitles extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PatchAvailableTitlesAvailableTitles })
    @Expose({ name: "available_titles" })
    @Type(() => PatchAvailableTitlesAvailableTitles)
    availableTitles?: PatchAvailableTitlesAvailableTitles[];

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
