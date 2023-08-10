/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export enum PatchavailabletitlesSourceidByIdGetAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export class Patchavailabletitles {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Finds all available title from a source by ID
     */
    async patchavailabletitlesSourceidByIdGet(
        req: operations.PatchavailabletitlesSourceidByIdGetRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: PatchavailabletitlesSourceidByIdGetAcceptEnum
    ): Promise<operations.PatchavailabletitlesSourceidByIdGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchavailabletitlesSourceidByIdGetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/patchavailabletitles/sourceid/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, application/xml;q=0";
        }

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PatchavailabletitlesSourceidByIdGetResponse =
            new operations.PatchavailabletitlesSourceidByIdGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.patchAvailableTitles = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PatchAvailableTitles
                    );
                } else if (utils.matchContentType(contentType, `application/xml`)) {
                    res.body = httpRes?.data;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
