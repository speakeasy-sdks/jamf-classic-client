# patchreports

### Available Operations

* [~~patchreportsPatchsoftwaretitleidByIdGet~~](#patchreportspatchsoftwaretitleidbyidget) - Finds patch reports by patch software title ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report". :warning: **Deprecated**
* [~~patchreportsPatchsoftwaretitleidVersionByIdAndVersionGet~~](#patchreportspatchsoftwaretitleidversionbyidandversionget) - Display computers for a specific version of a patch report. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report". :warning: **Deprecated**

## ~~patchreportsPatchsoftwaretitleidByIdGet~~

Finds patch reports by patch software title ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report".

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchreportsPatchsoftwaretitleidByIdGetResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchreports.patchreportsPatchsoftwaretitleidByIdGet({
  id: "2810331f-3981-4d4c-b00b-607f3c93c73b",
}).then((res: PatchreportsPatchsoftwaretitleidByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PatchreportsPatchsoftwaretitleidByIdGetRequest](../../models/operations/patchreportspatchsoftwaretitleidbyidgetrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PatchreportsPatchsoftwaretitleidByIdGetResponse](../../models/operations/patchreportspatchsoftwaretitleidbyidgetresponse.md)>**


## ~~patchreportsPatchsoftwaretitleidVersionByIdAndVersionGet~~

Display computers for a specific version of a patch report. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report".

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchreports.patchreportsPatchsoftwaretitleidVersionByIdAndVersionGet({
  id: "9da3f2ce-da7e-423f-a257-411faf4b7544",
  version: "repudiandae",
}).then((res: PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetRequest](../../models/operations/patchreportspatchsoftwaretitleidversionbyidandversiongetrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PatchreportsPatchsoftwaretitleidVersionByIdAndVersionGetResponse](../../models/operations/patchreportspatchsoftwaretitleidversionbyidandversiongetresponse.md)>**

