/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Restrictedsoftware {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Creates a new restricted software by ID
     */
    async createRestrictedSoftwareById(
        req: operations.CreateRestrictedSoftwareByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateRestrictedSoftwareByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateRestrictedSoftwareByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/restrictedsoftware/id/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateRestrictedSoftwareByIdResponse =
            new operations.CreateRestrictedSoftwareByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                break;
        }

        return res;
    }

    /**
     * Deletes a restricted software by ID
     */
    async deleteRestrictedSoftwareById(
        req: operations.DeleteRestrictedSoftwareByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteRestrictedSoftwareByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRestrictedSoftwareByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/restrictedsoftware/id/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteRestrictedSoftwareByIdResponse =
            new operations.DeleteRestrictedSoftwareByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                break;
        }

        return res;
    }

    /**
     * Deletes a restricted software by name
     */
    async deleteRestrictedSoftwareByName(
        req: operations.DeleteRestrictedSoftwareByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteRestrictedSoftwareByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRestrictedSoftwareByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/restrictedsoftware/name/{name}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteRestrictedSoftwareByNameResponse =
            new operations.DeleteRestrictedSoftwareByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                break;
        }

        return res;
    }

    /**
     * Finds all restricted software
     */
    async findRestrictedSoftware(
        config?: AxiosRequestConfig
    ): Promise<operations.FindRestrictedSoftwareResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/restrictedsoftware";

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

        const res: operations.FindRestrictedSoftwareResponse =
            new operations.FindRestrictedSoftwareResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.findRestrictedSoftware200ApplicationJSONObjects = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.findRestrictedSoftware200ApplicationJSONObjects = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.FindRestrictedSoftware200ApplicationJSON,
                        resFieldDepth
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

    /**
     * Finds restricted software by ID
     */
    async findRestrictedSoftwareById(
        req: operations.FindRestrictedSoftwareByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindRestrictedSoftwareByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindRestrictedSoftwareByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/restrictedsoftware/id/{id}", req);

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

        const res: operations.FindRestrictedSoftwareByIdResponse =
            new operations.FindRestrictedSoftwareByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.findRestrictedSoftwareById200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.FindRestrictedSoftwareById200ApplicationJSON
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

    /**
     * Finds restricted software by name
     */
    async findRestrictedSoftwareByName(
        req: operations.FindRestrictedSoftwareByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindRestrictedSoftwareByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindRestrictedSoftwareByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/restrictedsoftware/name/{name}", req);

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

        const res: operations.FindRestrictedSoftwareByNameResponse =
            new operations.FindRestrictedSoftwareByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.findRestrictedSoftwareByName200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.FindRestrictedSoftwareByName200ApplicationJSON
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

    /**
     * Updates an existing restricted software by ID
     */
    async updateRestrictedSoftwareById(
        req: operations.UpdateRestrictedSoftwareByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateRestrictedSoftwareByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateRestrictedSoftwareByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/restrictedsoftware/id/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateRestrictedSoftwareByIdResponse =
            new operations.UpdateRestrictedSoftwareByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                break;
        }

        return res;
    }

    /**
     * Updates an existing restricted software by name
     */
    async updateRestrictedSoftwareByName(
        req: operations.UpdateRestrictedSoftwareByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateRestrictedSoftwareByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateRestrictedSoftwareByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/restrictedsoftware/name/{name}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateRestrictedSoftwareByNameResponse =
            new operations.UpdateRestrictedSoftwareByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                break;
        }

        return res;
    }
}
