/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export enum FindPeripheralsAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindPeripheralsByIdAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export class Peripherals {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Creates a new peripheral by ID
     */
    async createPeripheralById(
        req: operations.CreatePeripheralByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreatePeripheralByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreatePeripheralByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/peripherals/id/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.CreatePeripheralByIdResponse =
            new operations.CreatePeripheralByIdResponse({
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
     * Deletes a peripheral by ID
     */
    async deletePeripheralById(
        req: operations.DeletePeripheralByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeletePeripheralByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeletePeripheralByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/peripherals/id/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.DeletePeripheralByIdResponse =
            new operations.DeletePeripheralByIdResponse({
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
     * Finds all peripherals
     */
    async findPeripherals(
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindPeripheralsAcceptEnum
    ): Promise<operations.FindPeripheralsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/peripherals";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, application/xml;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.FindPeripheralsResponse = new operations.FindPeripheralsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.peripherals = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.peripherals = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Peripherals,
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
     * Finds peripherals by ID
     */
    async findPeripheralsById(
        req: operations.FindPeripheralsByIdRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindPeripheralsByIdAcceptEnum
    ): Promise<operations.FindPeripheralsByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindPeripheralsByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/peripherals/id/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, application/xml;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.FindPeripheralsByIdResponse =
            new operations.FindPeripheralsByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.peripheral = utils.objectToClass(JSON.parse(decodedRes), shared.Peripheral);
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
     * Finds a subset of data for a peripheral
     *
     * @remarks
     * Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)
     */
    async findPeripheralsByIdSubset(
        req: operations.FindPeripheralsByIdSubsetRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindPeripheralsByIdSubsetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindPeripheralsByIdSubsetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/peripherals/id/{id}/subset/{subset}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.FindPeripheralsByIdSubsetResponse =
            new operations.FindPeripheralsByIdSubsetResponse({
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
     * Updates an existing peripheral by ID
     */
    async updatePeripheralById(
        req: operations.UpdatePeripheralByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdatePeripheralByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdatePeripheralByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/peripherals/id/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.UpdatePeripheralByIdResponse =
            new operations.UpdatePeripheralByIdResponse({
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
