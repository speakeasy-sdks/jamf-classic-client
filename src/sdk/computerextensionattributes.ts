/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export enum FindComputerextensionattributesAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerextensionattributesByIdAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export enum FindComputerextensionattributesByNameAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export class Computerextensionattributes {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Creates a new computer extension attribute by ID
     */
    async createComputerextensionattributeById(
        req: operations.CreateComputerextensionattributeByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateComputerextensionattributeByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateComputerextensionattributeByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerextensionattributes/id/{id}",
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateComputerextensionattributeByIdResponse =
            new operations.CreateComputerextensionattributeByIdResponse({
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
     * Deletes a computer extension attribute by ID
     */
    async deleteComputerextensionattributeById(
        req: operations.DeleteComputerextensionattributeByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteComputerextensionattributeByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteComputerextensionattributeByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerextensionattributes/id/{id}",
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteComputerextensionattributeByIdResponse =
            new operations.DeleteComputerextensionattributeByIdResponse({
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
     * Deletes a computer extension attribute by name
     */
    async deleteComputerextensionattributeByName(
        req: operations.DeleteComputerextensionattributeByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteComputerextensionattributeByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteComputerextensionattributeByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerextensionattributes/name/{name}",
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteComputerextensionattributeByNameResponse =
            new operations.DeleteComputerextensionattributeByNameResponse({
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
     * Finds all computer extension attributes
     */
    async findComputerextensionattributes(
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerextensionattributesAcceptEnum
    ): Promise<operations.FindComputerextensionattributesResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/computerextensionattributes";
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

        const res: operations.FindComputerextensionattributesResponse =
            new operations.FindComputerextensionattributesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.twoHundredApplicationJsonComputerExtensionAttributes = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonComputerExtensionAttributes = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerExtensionAttributes,
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
     * Finds computer extension attributes by ID
     */
    async findComputerextensionattributesById(
        req: operations.FindComputerextensionattributesByIdRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerextensionattributesByIdAcceptEnum
    ): Promise<operations.FindComputerextensionattributesByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerextensionattributesByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerextensionattributes/id/{id}",
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

        const res: operations.FindComputerextensionattributesByIdResponse =
            new operations.FindComputerextensionattributesByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerExtensionAttribute = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerExtensionAttribute
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
     * Finds computer extension attributes by name
     */
    async findComputerextensionattributesByName(
        req: operations.FindComputerextensionattributesByNameRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: FindComputerextensionattributesByNameAcceptEnum
    ): Promise<operations.FindComputerextensionattributesByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerextensionattributesByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerextensionattributes/name/{name}",
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

        const res: operations.FindComputerextensionattributesByNameResponse =
            new operations.FindComputerextensionattributesByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerExtensionAttribute = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerExtensionAttribute
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
     * Updates an existing computer extension attribute by ID
     */
    async updateComputerextensionattributeById(
        req: operations.UpdateComputerextensionattributeByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateComputerextensionattributeByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateComputerextensionattributeByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerextensionattributes/id/{id}",
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateComputerextensionattributeByIdResponse =
            new operations.UpdateComputerextensionattributeByIdResponse({
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
     * Updates an existing computer extension attribute by name
     */
    async updateComputerextensionattributeByName(
        req: operations.UpdateComputerextensionattributeByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateComputerextensionattributeByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateComputerextensionattributeByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/computerextensionattributes/name/{name}",
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

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateComputerextensionattributeByNameResponse =
            new operations.UpdateComputerextensionattributeByNameResponse({
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
