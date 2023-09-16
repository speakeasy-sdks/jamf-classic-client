# Patchpolicies

### Available Operations

* [createPatchPolicyBySoftwareTitleConfigId](#createpatchpolicybysoftwaretitleconfigid) - Create a new patch policy associated with a patch software title configuration ID
* [deletePatchPolicyById](#deletepatchpolicybyid) - Deletes a patch policy by ID
* [~~findPatchPolicies~~](#findpatchpolicies) - Finds all patch policies. (Deprecated). Please transition use to Jamf Pro API endpoint "/v2/patch-policies". :warning: **Deprecated**
* [findPatchPoliciesByIdSubset](#findpatchpoliciesbyidsubset) - Display subsets of information for a patch policy
* [~~findPatchPoliciesBySoftwareTitleConfigId~~](#findpatchpoliciesbysoftwaretitleconfigid) - Finds all patch policies by patch software title configuration ID (Deprecated). Please transition use to Jamf Pro API endpoint "/v2/patch-policies". :warning: **Deprecated**
* [findPatchPolicyById](#findpatchpolicybyid) - Finds a patch policy by ID
* [updatePatchPolicyById](#updatepatchpolicybyid) - Updates an existing patch policy by ID

## createPatchPolicyBySoftwareTitleConfigId

softwaretitleconfig refers to the ID of the patch software title the policy is to be associated to

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreatePatchPolicyBySoftwareTitleConfigIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchpolicies.createPatchPolicyBySoftwareTitleConfigId({
  softwaretitleconfigid: 475826,
}).then((res: CreatePatchPolicyBySoftwareTitleConfigIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.CreatePatchPolicyBySoftwareTitleConfigIdRequest](../../models/operations/createpatchpolicybysoftwaretitleconfigidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.CreatePatchPolicyBySoftwareTitleConfigIdResponse](../../models/operations/createpatchpolicybysoftwaretitleconfigidresponse.md)>**


## deletePatchPolicyById

Deletes a patch policy by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeletePatchPolicyByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchpolicies.deletePatchPolicyById({
  id: 930840,
}).then((res: DeletePatchPolicyByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeletePatchPolicyByIdRequest](../../models/operations/deletepatchpolicybyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeletePatchPolicyByIdResponse](../../models/operations/deletepatchpolicybyidresponse.md)>**


## ~~findPatchPolicies~~

Finds all patch policies. (Deprecated). Please transition use to Jamf Pro API endpoint "/v2/patch-policies".

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchPoliciesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchpolicies.findPatchPolicies().then((res: FindPatchPoliciesResponse) => {
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

**Promise<[operations.FindPatchPoliciesResponse](../../models/operations/findpatchpoliciesresponse.md)>**


## findPatchPoliciesByIdSubset

Display subsets of information for a patch policy

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchPoliciesByIdSubsetResponse, FindPatchPoliciesByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchpolicies.findPatchPoliciesByIdSubset({
  id: 708771,
  subset: FindPatchPoliciesByIdSubsetSubset.Scope,
}).then((res: FindPatchPoliciesByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindPatchPoliciesByIdSubsetRequest](../../models/operations/findpatchpoliciesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindPatchPoliciesByIdSubsetResponse](../../models/operations/findpatchpoliciesbyidsubsetresponse.md)>**


## ~~findPatchPoliciesBySoftwareTitleConfigId~~

softwaretitleconfigid refers to the ID of the patch software title the policy is associated to

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchPoliciesBySoftwareTitleConfigIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchpolicies.findPatchPoliciesBySoftwareTitleConfigId({
  softwaretitleconfigid: 43975,
}).then((res: FindPatchPoliciesBySoftwareTitleConfigIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindPatchPoliciesBySoftwareTitleConfigIdRequest](../../models/operations/findpatchpoliciesbysoftwaretitleconfigidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindPatchPoliciesBySoftwareTitleConfigIdResponse](../../models/operations/findpatchpoliciesbysoftwaretitleconfigidresponse.md)>**


## findPatchPolicyById

Finds a patch policy by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchPolicyByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchpolicies.findPatchPolicyById({
  id: 574092,
}).then((res: FindPatchPolicyByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindPatchPolicyByIdRequest](../../models/operations/findpatchpolicybyidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindPatchPolicyByIdResponse](../../models/operations/findpatchpolicybyidresponse.md)>**


## updatePatchPolicyById

Updates an existing patch policy by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdatePatchPolicyByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchpolicies.updatePatchPolicyById({
  id: 879522,
}).then((res: UpdatePatchPolicyByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdatePatchPolicyByIdRequest](../../models/operations/updatepatchpolicybyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdatePatchPolicyByIdResponse](../../models/operations/updatepatchpolicybyidresponse.md)>**

