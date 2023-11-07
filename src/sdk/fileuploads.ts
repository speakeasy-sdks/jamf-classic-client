/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export class Fileuploads {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Creates file attachments in Jamf Pro
     *
     * @remarks
     * Here is a sample command curl -k -u user:password https://my.server.com:8443/JSSResource/fileuploads/computers/id/2 -F name=@/Users/admin/Documents/Sample.doc -X POST
     */
    async uploadFiles(
        req: operations.UploadFilesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UploadFilesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UploadFilesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/fileuploads/{resource}/{idType}/{id}",
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
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UploadFilesResponse = new operations.UploadFilesResponse({
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
