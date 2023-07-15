/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Mobiledeviceinvitations {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Creates a new mobile device invitation by id
     */
    async createMobileDeviceInvitationsById(
        req: operations.CreateMobileDeviceInvitationsByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateMobileDeviceInvitationsByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateMobileDeviceInvitationsByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/mobiledeviceinvitations/id/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/xml";
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

        const res: operations.CreateMobileDeviceInvitationsByIdResponse =
            new operations.CreateMobileDeviceInvitationsByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/xml`)) {
                    res.body = httpRes?.data;
                }
                break;
        }

        return res;
    }

    /**
     * Creates a new mobile device invitation by invitation
     */
    async createMobileDeviceInvitationsByInvitation(
        req: operations.CreateMobileDeviceInvitationsByInvitationRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateMobileDeviceInvitationsByInvitationResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateMobileDeviceInvitationsByInvitationRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/mobiledeviceinvitations/invitation/{invitation}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/xml";
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

        const res: operations.CreateMobileDeviceInvitationsByInvitationResponse =
            new operations.CreateMobileDeviceInvitationsByInvitationResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/xml`)) {
                    res.body = httpRes?.data;
                }
                break;
        }

        return res;
    }

    /**
     * Deletes a mobile device invitation by id
     */
    async deleteMobileDeviceInvitationById(
        req: operations.DeleteMobileDeviceInvitationByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteMobileDeviceInvitationByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMobileDeviceInvitationByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/mobiledeviceinvitations/id/{id}", req);

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

        const res: operations.DeleteMobileDeviceInvitationByIdResponse =
            new operations.DeleteMobileDeviceInvitationByIdResponse({
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
     * Deletes a mobile device invitation by invitation
     */
    async deleteMobileDeviceInvitationByInvitation(
        req: operations.DeleteMobileDeviceInvitationByInvitationRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteMobileDeviceInvitationByInvitationResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMobileDeviceInvitationByInvitationRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/mobiledeviceinvitations/invitation/{invitation}",
            req
        );

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

        const res: operations.DeleteMobileDeviceInvitationByInvitationResponse =
            new operations.DeleteMobileDeviceInvitationByInvitationResponse({
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
     * Finds all mobile device invitations
     */
    async findMobileDeviceInvitations(
        config?: AxiosRequestConfig
    ): Promise<operations.FindMobileDeviceInvitationsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/mobiledeviceinvitations";

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

        const res: operations.FindMobileDeviceInvitationsResponse =
            new operations.FindMobileDeviceInvitationsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.mobileDeviceInvitations = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.mobileDeviceInvitations = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.MobileDeviceInvitations,
                        resFieldDepth
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
     * Finds mobile device invitations by id
     */
    async findMobileDeviceInvitationsById(
        req: operations.FindMobileDeviceInvitationsByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindMobileDeviceInvitationsByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindMobileDeviceInvitationsByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/mobiledeviceinvitations/id/{id}", req);

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

        const res: operations.FindMobileDeviceInvitationsByIdResponse =
            new operations.FindMobileDeviceInvitationsByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.mobileDeviceInvitation = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.MobileDeviceInvitation
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
     * Finds mobile device invitations by invitation
     */
    async findMobileDeviceInvitationsByInvitation(
        req: operations.FindMobileDeviceInvitationsByInvitationRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindMobileDeviceInvitationsByInvitationResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindMobileDeviceInvitationsByInvitationRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/mobiledeviceinvitations/invitation/{invitation}",
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

        const res: operations.FindMobileDeviceInvitationsByInvitationResponse =
            new operations.FindMobileDeviceInvitationsByInvitationResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.mobileDeviceInvitation = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.MobileDeviceInvitation
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
