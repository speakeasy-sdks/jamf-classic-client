/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class FindPrintersByIdRequest extends SpeakeasyBase {
    /**
     * ID value to filter by
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;
}

/**
 * OK
 */
export class FindPrintersById200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    cupsName?: string;

    @SpeakeasyMetadata()
    category?: string;

    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    info?: string;

    @SpeakeasyMetadata()
    location?: string;

    @SpeakeasyMetadata()
    makeDefault?: boolean;

    @SpeakeasyMetadata()
    model?: string;

    /**
     * Name of the printer
     */
    @SpeakeasyMetadata()
    name: string;

    @SpeakeasyMetadata()
    notes?: string;

    @SpeakeasyMetadata()
    ppd?: string;

    @SpeakeasyMetadata()
    ppdContents?: string;

    @SpeakeasyMetadata()
    ppdPath?: string;

    @SpeakeasyMetadata()
    uri?: string;

    @SpeakeasyMetadata()
    useGeneric?: boolean;
}

/**
 * OK
 */
export class FindPrintersById200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "CUPS_name" })
    cupsName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "info" })
    info?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    location?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "make_default" })
    makeDefault?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    /**
     * Name of the printer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ppd" })
    ppd?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ppd_contents" })
    ppdContents?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ppd_path" })
    ppdPath?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uri" })
    uri?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "use_generic" })
    useGeneric?: boolean;
}

export class FindPrintersByIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    findPrintersById200ApplicationJSONObject?: FindPrintersById200ApplicationJSON;
}
