/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK
 */
export class NetworkSegment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    building?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "distribution_point" })
    distributionPoint?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "distribution_server" })
    distributionServer?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ending_address" })
    endingAddress: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the network segment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "override_buildings" })
    overrideBuildings?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "override_departments" })
    overrideDepartments?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "starting_address" })
    startingAddress: string;

    @SpeakeasyMetadata()
    @Expose({ name: "swu_server" })
    swuServer?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
