/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export enum FindComputerApplicationUsageByIdAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerApplicationUsageByMacAddressAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerApplicationUsageByNameAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerApplicationUsageBySerialAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerApplicationUsageByUDIDAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export class Computerapplicationusage {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Finds computer application usage by computer ID
     */
    async findComputerApplicationUsageById(
        req: operations.FindComputerApplicationUsageByIdRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerApplicationUsageByIdAcceptEnum
    ): Promise<operations.FindComputerApplicationUsageByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerApplicationUsageByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerapplicationusage/id/{id}/{start_date}_{end_date}",
            req
        );
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindComputerApplicationUsageByIdResponse =
            new operations.FindComputerApplicationUsageByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.twoHundredApplicationJsonComputerApplicationUsage = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonComputerApplicationUsage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerApplicationUsage,
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
     * Finds computer application usage by computer MAC address
     */
    async findComputerApplicationUsageByMacAddress(
        req: operations.FindComputerApplicationUsageByMacAddressRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerApplicationUsageByMacAddressAcceptEnum
    ): Promise<operations.FindComputerApplicationUsageByMacAddressResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerApplicationUsageByMacAddressRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerapplicationusage/macaddress/{macaddress}/{start_date}_{end_date}",
            req
        );
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindComputerApplicationUsageByMacAddressResponse =
            new operations.FindComputerApplicationUsageByMacAddressResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.twoHundredApplicationJsonComputerApplicationUsage = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonComputerApplicationUsage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerApplicationUsage,
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
     * Finds computer application usage by computer name
     */
    async findComputerApplicationUsageByName(
        req: operations.FindComputerApplicationUsageByNameRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerApplicationUsageByNameAcceptEnum
    ): Promise<operations.FindComputerApplicationUsageByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerApplicationUsageByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerapplicationusage/name/{name}/{start_date}_{end_date}",
            req
        );
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindComputerApplicationUsageByNameResponse =
            new operations.FindComputerApplicationUsageByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.twoHundredApplicationJsonComputerApplicationUsage = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonComputerApplicationUsage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerApplicationUsage,
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
     * Finds computer application usage by computer serial number
     */
    async findComputerApplicationUsageBySerial(
        req: operations.FindComputerApplicationUsageBySerialRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerApplicationUsageBySerialAcceptEnum
    ): Promise<operations.FindComputerApplicationUsageBySerialResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerApplicationUsageBySerialRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerapplicationusage/serialnumber/{serialnumber}/{start_date}_{end_date}",
            req
        );
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindComputerApplicationUsageBySerialResponse =
            new operations.FindComputerApplicationUsageBySerialResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.twoHundredApplicationJsonComputerApplicationUsage = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonComputerApplicationUsage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerApplicationUsage,
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
     * Finds computer application usage by computer UDID
     */
    async findComputerApplicationUsageByUDID(
        req: operations.FindComputerApplicationUsageByUDIDRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerApplicationUsageByUDIDAcceptEnum
    ): Promise<operations.FindComputerApplicationUsageByUDIDResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerApplicationUsageByUDIDRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerapplicationusage/udid/{udid}/{start_date}_{end_date}",
            req
        );
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindComputerApplicationUsageByUDIDResponse =
            new operations.FindComputerApplicationUsageByUDIDResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.twoHundredApplicationJsonComputerApplicationUsage = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonComputerApplicationUsage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerApplicationUsage,
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
}
