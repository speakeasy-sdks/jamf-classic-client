/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Computerreports {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Finds all computer reports
     */
    async findComputerReports(
        config?: AxiosRequestConfig
    ): Promise<operations.FindComputerReportsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/computerreports";

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

        const res: operations.FindComputerReportsResponse =
            new operations.FindComputerReportsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerReports = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.computerReports = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerReports,
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
     * Finds computer reports by id
     *
     * @remarks
     * Additional display fields are returned within the `Computer` object
     */
    async findComputerReportsById(
        req: operations.FindComputerReportsByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindComputerReportsByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerReportsByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/computerreports/id/{id}", req);

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

        const res: operations.FindComputerReportsByIdResponse =
            new operations.FindComputerReportsByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerReport = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.computerReport = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerReport,
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
     * Finds computer reports by name
     *
     * @remarks
     * Additional display fields are returned within the `Computer` object
     */
    async findComputerReportsByName(
        req: operations.FindComputerReportsByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindComputerReportsByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerReportsByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/computerreports/name/{name}", req);

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

        const res: operations.FindComputerReportsByNameResponse =
            new operations.FindComputerReportsByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerReport = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.computerReport = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerReport,
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
}