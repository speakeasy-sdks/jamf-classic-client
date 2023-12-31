/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class LicensedSoftwareAllLicensedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the licensed software
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class LicensedSoftwareAll extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "licensed_software" })
    @Type(() => LicensedSoftwareAllLicensedSoftware)
    licensedSoftware?: LicensedSoftwareAllLicensedSoftware;
}
