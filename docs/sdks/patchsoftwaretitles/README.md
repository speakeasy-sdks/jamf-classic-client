# patchsoftwaretitles

### Available Operations

* [~~patchsoftwaretitlesGet~~](#patchsoftwaretitlesget) - Finds all patch software titles. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdDelete~~](#patchsoftwaretitlesidbyiddelete) - Deletes a patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdGet~~](#patchsoftwaretitlesidbyidget) - Finds a patch software titles by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdPost~~](#patchsoftwaretitlesidbyidpost) - Creates new patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdPut~~](#patchsoftwaretitlesidbyidput) - Updates a patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**

## ~~patchsoftwaretitlesGet~~

Finds all patch software titles. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchsoftwaretitlesGetResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchsoftwaretitles.patchsoftwaretitlesGet().then((res: PatchsoftwaretitlesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PatchsoftwaretitlesGetResponse](../../models/operations/patchsoftwaretitlesgetresponse.md)>**


## ~~patchsoftwaretitlesIdByIdDelete~~

Deletes a patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchsoftwaretitlesIdByIdDeleteResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchsoftwaretitles.patchsoftwaretitlesIdByIdDelete({
  id: "472e8028-57a5-4b40-863a-7d575f1400e7",
}).then((res: PatchsoftwaretitlesIdByIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchsoftwaretitlesIdByIdDeleteRequest](../../models/operations/patchsoftwaretitlesidbyiddeleterequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchsoftwaretitlesIdByIdDeleteResponse](../../models/operations/patchsoftwaretitlesidbyiddeleteresponse.md)>**


## ~~patchsoftwaretitlesIdByIdGet~~

Finds a patch software titles by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchsoftwaretitlesIdByIdGetResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchsoftwaretitles.patchsoftwaretitlesIdByIdGet({
  id: "64ad7334-ec1b-4781-b36a-08088d100efa",
}).then((res: PatchsoftwaretitlesIdByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PatchsoftwaretitlesIdByIdGetRequest](../../models/operations/patchsoftwaretitlesidbyidgetrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PatchsoftwaretitlesIdByIdGetResponse](../../models/operations/patchsoftwaretitlesidbyidgetresponse.md)>**


## ~~patchsoftwaretitlesIdByIdPost~~

Creates new patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchsoftwaretitlesIdByIdPostResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchsoftwaretitles.patchsoftwaretitlesIdByIdPost({
  id: "da200ef0-422e-4b21-a4cf-9ab8366c723f",
}).then((res: PatchsoftwaretitlesIdByIdPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchsoftwaretitlesIdByIdPostRequest](../../models/operations/patchsoftwaretitlesidbyidpostrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchsoftwaretitlesIdByIdPostResponse](../../models/operations/patchsoftwaretitlesidbyidpostresponse.md)>**


## ~~patchsoftwaretitlesIdByIdPut~~

Including an empty package element <package/> within the version element will disassociate any previously associated packages with that version of the software title.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchsoftwaretitlesIdByIdPutResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchsoftwaretitles.patchsoftwaretitlesIdByIdPut({
  id: "fda9e06b-ee48-425c-9fc0-e115c80bff91",
}).then((res: PatchsoftwaretitlesIdByIdPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PatchsoftwaretitlesIdByIdPutRequest](../../models/operations/patchsoftwaretitlesidbyidputrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PatchsoftwaretitlesIdByIdPutResponse](../../models/operations/patchsoftwaretitlesidbyidputresponse.md)>**

