/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export enum FindComputerHardwareSoftwareReportsByIdAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsByIdSubsetAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsByMacAddressAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsByMacAddressSubsetAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsByNameAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsByNameSubsetAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsBySerialAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsBySerialSubsetAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsByUDIDAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerHardwareSoftwareReportsByUDIDSubsetAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export class Computerhardwaresoftwarereports {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Finds hardware/software reports by computer ID
     */
    async findComputerHardwareSoftwareReportsById(
        req: operations.FindComputerHardwareSoftwareReportsByIdRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByIdAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/id/{id}/{start_date}_{end_date}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByIdResponse =
            new operations.FindComputerHardwareSoftwareReportsByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds a subset of hardware/software reports by computer ID
     *
     * @remarks
     * Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)
     */
    async findComputerHardwareSoftwareReportsByIdSubset(
        req: operations.FindComputerHardwareSoftwareReportsByIdSubsetRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByIdSubsetAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByIdSubsetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByIdSubsetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/id/{id}/{start_date}_{end_date}/subset/{subset}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByIdSubsetResponse =
            new operations.FindComputerHardwareSoftwareReportsByIdSubsetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds hardware/software reports by computer MAC address
     */
    async findComputerHardwareSoftwareReportsByMacAddress(
        req: operations.FindComputerHardwareSoftwareReportsByMacAddressRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByMacAddressAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByMacAddressResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByMacAddressRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/macaddress/{macaddress}/{start_date}_{end_date}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByMacAddressResponse =
            new operations.FindComputerHardwareSoftwareReportsByMacAddressResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds a subset of hardware/software reports by computer MAC address
     *
     * @remarks
     * Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)
     */
    async findComputerHardwareSoftwareReportsByMacAddressSubset(
        req: operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByMacAddressSubsetAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/macaddress/{macaddress}/{start_date}_{end_date}/subset/{subset}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse =
            new operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds hardware/software reports by computer name
     */
    async findComputerHardwareSoftwareReportsByName(
        req: operations.FindComputerHardwareSoftwareReportsByNameRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByNameAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/name/{name}/{start_date}_{end_date}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByNameResponse =
            new operations.FindComputerHardwareSoftwareReportsByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds a subset of hardware/software reports by computer name
     *
     * @remarks
     * Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)
     */
    async findComputerHardwareSoftwareReportsByNameSubset(
        req: operations.FindComputerHardwareSoftwareReportsByNameSubsetRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByNameSubsetAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByNameSubsetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByNameSubsetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/name/{name}/{start_date}_{end_date}/subset/{subset}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByNameSubsetResponse =
            new operations.FindComputerHardwareSoftwareReportsByNameSubsetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds hardware/software reports by computer serial number
     */
    async findComputerHardwareSoftwareReportsBySerial(
        req: operations.FindComputerHardwareSoftwareReportsBySerialRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsBySerialAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsBySerialResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsBySerialRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/serialnumber/{serialnumber}/{start_date}_{end_date}",
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

        const res: operations.FindComputerHardwareSoftwareReportsBySerialResponse =
            new operations.FindComputerHardwareSoftwareReportsBySerialResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds a subset of hardware/software reports by computer serial number
     *
     * @remarks
     * Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)
     */
    async findComputerHardwareSoftwareReportsBySerialSubset(
        req: operations.FindComputerHardwareSoftwareReportsBySerialSubsetRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsBySerialSubsetAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsBySerialSubsetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsBySerialSubsetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/serialnumber/{serialnumber}/{start_date}_{end_date}/subset/{subset}",
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

        const res: operations.FindComputerHardwareSoftwareReportsBySerialSubsetResponse =
            new operations.FindComputerHardwareSoftwareReportsBySerialSubsetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds hardware/software reports by computer UDID
     */
    async findComputerHardwareSoftwareReportsByUDID(
        req: operations.FindComputerHardwareSoftwareReportsByUDIDRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByUDIDAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByUDIDResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByUDIDRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/udid/{udid}/{start_date}_{end_date}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByUDIDResponse =
            new operations.FindComputerHardwareSoftwareReportsByUDIDResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
     * Finds a subset of hardware/software reports by computer UDID
     *
     * @remarks
     * Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)
     */
    async findComputerHardwareSoftwareReportsByUDIDSubset(
        req: operations.FindComputerHardwareSoftwareReportsByUDIDSubsetRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerHardwareSoftwareReportsByUDIDSubsetAcceptEnum
    ): Promise<operations.FindComputerHardwareSoftwareReportsByUDIDSubsetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerHardwareSoftwareReportsByUDIDSubsetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computerhardwaresoftwarereports/udid/{udid}/{start_date}_{end_date}/subset/{subset}",
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

        const res: operations.FindComputerHardwareSoftwareReportsByUDIDSubsetResponse =
            new operations.FindComputerHardwareSoftwareReportsByUDIDSubsetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerHardwareSoftwareReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerHardwareSoftwareReports
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
