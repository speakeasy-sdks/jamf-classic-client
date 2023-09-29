# Policies
(*policies*)

### Available Operations

* [createPolicyById](#createpolicybyid) - Creates a new policy by ID
* [deletePolicyById](#deletepolicybyid) - Deletes a policy by ID
* [deletePolicyByName](#deletepolicybyname) - Deletes a policy by name
* [findPolicies](#findpolicies) - Finds all policies
* [findPoliciesByCategory](#findpoliciesbycategory) - Finds all policies by category
* [findPoliciesById](#findpoliciesbyid) - Finds policies by ID
* [findPoliciesByIdSubset](#findpoliciesbyidsubset) - Finds a subset of data for a policy
* [findPoliciesByName](#findpoliciesbyname) - Finds policies by name
* [findPoliciesByNameSubset](#findpoliciesbynamesubset) - Finds a subset of data for policies by name
* [findPoliciesByType](#findpoliciesbytype) - Finds all policies by type
* [updatePolicyById](#updatepolicybyid) - Updates an existing policy by ID
* [updatePolicyByName](#updatepolicybyname) - Updates an existing policy by name

## createPolicyById

Creates a new policy by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreatePolicyByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.createPolicyById({
  id: 45063,
}).then((res: CreatePolicyByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreatePolicyByIdRequest](../../models/operations/createpolicybyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreatePolicyByIdResponse](../../models/operations/createpolicybyidresponse.md)>**


## deletePolicyById

Deletes a policy by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeletePolicyByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.deletePolicyById({
  id: 935775,
}).then((res: DeletePolicyByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeletePolicyByIdRequest](../../models/operations/deletepolicybyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeletePolicyByIdResponse](../../models/operations/deletepolicybyidresponse.md)>**


## deletePolicyByName

Deletes a policy by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeletePolicyByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.deletePolicyByName({
  name: "Pickup",
}).then((res: DeletePolicyByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeletePolicyByNameRequest](../../models/operations/deletepolicybynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeletePolicyByNameResponse](../../models/operations/deletepolicybynameresponse.md)>**


## findPolicies

Finds all policies

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPoliciesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.findPolicies().then((res: FindPoliciesResponse) => {
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

**Promise<[operations.FindPoliciesResponse](../../models/operations/findpoliciesresponse.md)>**


## findPoliciesByCategory

Category may be specified by id or name, or 'None' for policies with no category.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPoliciesByCategoryResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.findPoliciesByCategory({
  category: "Recycled Gasoline synthesizing",
}).then((res: FindPoliciesByCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.FindPoliciesByCategoryRequest](../../models/operations/findpoliciesbycategoryrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.FindPoliciesByCategoryResponse](../../models/operations/findpoliciesbycategoryresponse.md)>**


## findPoliciesById

Finds policies by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPoliciesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.findPoliciesById({
  id: 252987,
}).then((res: FindPoliciesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FindPoliciesByIdRequest](../../models/operations/findpoliciesbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FindPoliciesByIdResponse](../../models/operations/findpoliciesbyidresponse.md)>**


## findPoliciesByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPoliciesByIdSubsetResponse, FindPoliciesByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.findPoliciesByIdSubset({
  id: 282474,
  subset: FindPoliciesByIdSubsetSubset.DiskEncryption,
}).then((res: FindPoliciesByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.FindPoliciesByIdSubsetRequest](../../models/operations/findpoliciesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.FindPoliciesByIdSubsetResponse](../../models/operations/findpoliciesbyidsubsetresponse.md)>**


## findPoliciesByName

Finds policies by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPoliciesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.findPoliciesByName({
  name: "Metal",
}).then((res: FindPoliciesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.FindPoliciesByNameRequest](../../models/operations/findpoliciesbynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.FindPoliciesByNameResponse](../../models/operations/findpoliciesbynameresponse.md)>**


## findPoliciesByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPoliciesByNameSubsetResponse, FindPoliciesByNameSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.findPoliciesByNameSubset({
  name: "Cheese Designer elegantly",
  subset: FindPoliciesByNameSubsetSubset.DiskEncryption,
}).then((res: FindPoliciesByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.FindPoliciesByNameSubsetRequest](../../models/operations/findpoliciesbynamesubsetrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.FindPoliciesByNameSubsetResponse](../../models/operations/findpoliciesbynamesubsetresponse.md)>**


## findPoliciesByType

The value 'casper' refers to Casper Remote. The value 'jss' refers to policies created in the GUI or via the API.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPoliciesByTypeCreatedBy, FindPoliciesByTypeResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.findPoliciesByType({
  createdBy: FindPoliciesByTypeCreatedBy.Casper,
}).then((res: FindPoliciesByTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.FindPoliciesByTypeRequest](../../models/operations/findpoliciesbytyperequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.FindPoliciesByTypeResponse](../../models/operations/findpoliciesbytyperesponse.md)>**


## updatePolicyById

Updates an existing policy by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdatePolicyByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.updatePolicyById({
  id: 272424,
}).then((res: UpdatePolicyByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdatePolicyByIdRequest](../../models/operations/updatepolicybyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdatePolicyByIdResponse](../../models/operations/updatepolicybyidresponse.md)>**


## updatePolicyByName

Updates an existing policy by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdatePolicyByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.policies.updatePolicyByName({
  name: "Southwest deploy",
}).then((res: UpdatePolicyByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdatePolicyByNameRequest](../../models/operations/updatepolicybynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdatePolicyByNameResponse](../../models/operations/updatepolicybynameresponse.md)>**

