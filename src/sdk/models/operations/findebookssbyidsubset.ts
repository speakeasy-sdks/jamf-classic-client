/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindEbookssByIdSubsetSubset {
    General = "General",
    Scope = "Scope",
    SelfService = "SelfService",
}

export class FindEbookssByIdSubsetRequest extends SpeakeasyBase {
    /**
     * ID to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindEbookssByIdSubsetSubset;
}

export class FindEbookssByIdSubsetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}