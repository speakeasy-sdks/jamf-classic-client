/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Computercommands {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Creates a new computer command using command name
     *
     * @remarks
     * The chart below includes additional requirements for usage of specific commands
     *
     * | command | Parameter | Requirements |
     * | ------- | --------- | ------------ |
     * | DeleteUser | user_name | DEP enrolled device and user_name value (string) |
     * | DeviceLock | passcode | 6 character string |
     * | DeviceLock | lock_message | string |
     * | DisableRemoteDesktop | N/A | macOS 10.14.4 or later |
     * | EnableRemoteDesktop | N/A | macOS 10.14.4 or later |
     * | EraseDevice | passcode | 6 character string |
     * | ScheduleOSUpdate (deprecated on 2022-10-17) | action | macOS 10.12.0 or later |
     * | SettingsDisableBluetooth | N/A | macOS 10.13.4 or later |
     * | SettingsEnableBluetooth | N/A | macOS 10.13.4 or later |
     * | UnlockUserAccount | user_name |  DEP enrolled device and user_name value (string) |
     *
     */
    async createComputerCommandByCommand(
        req: operations.CreateComputerCommandByCommandRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateComputerCommandByCommandResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateComputerCommandByCommandRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/computercommands/command/{command}", req);

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

        const res: operations.CreateComputerCommandByCommandResponse =
            new operations.CreateComputerCommandByCommandResponse({
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
     * Creates a new computer command with a command specific action. Commands supported: ScheduleOSUpdate (deprecated on 2022-10-17)
     */
    async createComputerCommandByCommandAndAction(
        req: operations.CreateComputerCommandByCommandAndActionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateComputerCommandByCommandAndActionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateComputerCommandByCommandAndActionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computercommands/command/{command}/action/{action}/id/{id}",
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
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateComputerCommandByCommandAndActionResponse =
            new operations.CreateComputerCommandByCommandAndActionResponse({
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
     * Creates a new computer command using command name and device IDs
     */
    async createComputerCommandByCommandAndId(
        req: operations.CreateComputerCommandByCommandAndIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateComputerCommandByCommandAndIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateComputerCommandByCommandAndIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computercommands/command/{command}/id/{id}",
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
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateComputerCommandByCommandAndIdResponse =
            new operations.CreateComputerCommandByCommandAndIdResponse({
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
     * Creates a new computer command using command name and device IDs
     *
     * @remarks
     * Issuing a DeviceLock and EraseDevice command requires a 6 character passcode.
     */
    async createComputerCommandByCommandIdAndPasscode(
        req: operations.CreateComputerCommandByCommandIdAndPasscodeRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateComputerCommandByCommandIdAndPasscodeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateComputerCommandByCommandIdAndPasscodeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/computercommands/command/{command}/passcode/{passcode}/id/{id}",
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
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateComputerCommandByCommandIdAndPasscodeResponse =
            new operations.CreateComputerCommandByCommandIdAndPasscodeResponse({
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
     * Finds all computer commands
     */
    async findComputerCommands(
        config?: AxiosRequestConfig
    ): Promise<operations.FindComputerCommandsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/computercommands";

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

        const res: operations.FindComputerCommandsResponse =
            new operations.FindComputerCommandsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerCommands = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.computerCommands = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerCommands,
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
     * Finds all computer commands by name
     */
    async findComputerCommandsByName(
        req: operations.FindComputerCommandsByNameRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindComputerCommandsByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerCommandsByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/computercommands/name/{name}", req);

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

        const res: operations.FindComputerCommandsByNameResponse =
            new operations.FindComputerCommandsByNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerCommand = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerCommand
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
     * Finds a computer command by UUID
     */
    async findComputerCommandsByUuid(
        req: operations.FindComputerCommandsByUuidRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindComputerCommandsByUuidResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindComputerCommandsByUuidRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/computercommands/uuid/{uuid}", req);

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

        const res: operations.FindComputerCommandsByUuidResponse =
            new operations.FindComputerCommandsByUuidResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.computerCommand = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ComputerCommand
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