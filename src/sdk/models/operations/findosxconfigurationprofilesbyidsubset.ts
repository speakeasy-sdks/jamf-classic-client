/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Subset to filter by
 */
export enum FindOsxConfigurationProfilesByIdSubsetPathParamSubset {
    General = "General",
    Scope = "Scope",
    SelfService = "SelfService",
}

export class FindOsxConfigurationProfilesByIdSubsetRequest extends SpeakeasyBase {
    /**
     * ID to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    /**
     * Subset to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subset" })
    subset: FindOsxConfigurationProfilesByIdSubsetPathParamSubset;
}

export class FindOsxConfigurationProfilesByIdSubsetResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
