/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export enum FindIBeaconsAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindIBeaconsByIdAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindIBeaconsByNameAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export class Ibeacons {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Creates a new iBeacon region by ID
     */
    async createIBeaconById(
        req: operations.CreateIBeaconByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateIBeaconByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateIBeaconByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/ibeacons/id/{id}", req);
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
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateIBeaconByIdResponse = new operations.CreateIBeaconByIdResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 201:
                break;
        }

        return res;
    }

    /**
     * Deletes an iBeacon region by ID
     */
    async deleteIBeaconById(
        req: operations.DeleteIBeaconByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteIBeaconByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteIBeaconByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/ibeacons/id/{id}", req);
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
            url: operationUrl,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteIBeaconByIdResponse = new operations.DeleteIBeaconByIdResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
        }

        return res;
    }

    /**
     * Deletes an iBeacon region by name
     */
    async deleteIBeaconByName(
        req: operations.DeleteIBeaconByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteIBeaconByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteIBeaconByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/ibeacons/name/{name}", req);
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
            url: operationUrl,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteIBeaconByNameResponse =
            new operations.DeleteIBeaconByNameResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                break;
        }

        return res;
    }

    /**
     * Finds all iBeacon regions
     */
    async findIBeacons(
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindIBeaconsAcceptEnum
    ): Promise<operations.FindIBeaconsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/ibeacons";
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
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindIBeaconsResponse = new operations.FindIBeaconsResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.twoHundredApplicationJsonIbeacons = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonIbeacons = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Ibeacons,
                        resFieldDepth
                    );
                } else if (utils.matchContentType(responseContentType, `application/xml`)) {
                    res.body = httpRes?.data;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
     * Finds iBeacon regions by ID
     */
    async findIBeaconsById(
        req: operations.FindIBeaconsByIdRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindIBeaconsByIdAcceptEnum
    ): Promise<operations.FindIBeaconsByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindIBeaconsByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/ibeacons/id/{id}", req);
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
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindIBeaconsByIdResponse = new operations.FindIBeaconsByIdResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.ibeacon = utils.objectToClass(JSON.parse(decodedRes), shared.Ibeacon);
                } else if (utils.matchContentType(responseContentType, `application/xml`)) {
                    res.body = httpRes?.data;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
     * Finds iBeacon regions by name
     */
    async findIBeaconsByName(
        req: operations.FindIBeaconsByNameRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindIBeaconsByNameAcceptEnum
    ): Promise<operations.FindIBeaconsByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindIBeaconsByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/ibeacons/name/{name}", req);
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
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindIBeaconsByNameResponse =
            new operations.FindIBeaconsByNameResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.ibeacon = utils.objectToClass(JSON.parse(decodedRes), shared.Ibeacon);
                } else if (utils.matchContentType(responseContentType, `application/xml`)) {
                    res.body = httpRes?.data;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
     * Updates an existing iBeacon region by ID
     */
    async updateIBeaconById(
        req: operations.UpdateIBeaconByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateIBeaconByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateIBeaconByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/ibeacons/id/{id}", req);
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
            url: operationUrl,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateIBeaconByIdResponse = new operations.UpdateIBeaconByIdResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 201:
                break;
        }

        return res;
    }

    /**
     * Updates an existing iBeacon region by name
     */
    async updateIBeaconByName(
        req: operations.UpdateIBeaconByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateIBeaconByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateIBeaconByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/ibeacons/name/{name}", req);
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
            url: operationUrl,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateIBeaconByNameResponse =
            new operations.UpdateIBeaconByNameResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                break;
        }

        return res;
    }
}
