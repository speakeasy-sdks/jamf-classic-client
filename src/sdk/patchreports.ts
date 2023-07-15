/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Patchreports {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Finds patch reports by patch software title ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report".
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async patchreportsPatchsoftwaretitleidByIdGet(
        req: operations.PatchreportsPatchsoftwaretitleidByIdGetRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PatchreportsPatchsoftwaretitleidByIdGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchreportsPatchsoftwaretitleidByIdGetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/patchreports/patchsoftwaretitleid/{id}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/xml;q=0";
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

        const res: operations.PatchreportsPatchsoftwaretitleidByIdGetResponse =
            new operations.PatchreportsPatchsoftwaretitleidByIdGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.patchReport = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PatchReport
                    );
                }
                if (utils.matchContentType(contentType, `application/xml`)) {
                    res.body = httpRes?.data;
                }
                break;
        }

        return res;
    }

    /**
     * Display computers for a specific version of a patch report. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report".
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async patchreportsPatchsoftwaretitleidVersionByIdAndVersionGet(
        req: operations.PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetRequest(
                req
            );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/patchreports/patchsoftwaretitleid/{id}/version/{version}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/xml;q=0";
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

        const res: operations.PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetResponse =
            new operations.PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.patchReport = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PatchReport
                    );
                }
                if (utils.matchContentType(contentType, `application/xml`)) {
                    res.body = httpRes?.data;
                }
                break;
        }

        return res;
    }
}
