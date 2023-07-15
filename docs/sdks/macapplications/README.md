# macapplications

### Available Operations

* [createMacappById](#createmacappbyid) - Creates a new mac application by ID
* [deleteMacappById](#deletemacappbyid) - Deletes a mac application by ID
* [deleteMacappByName](#deletemacappbyname) - Deletes a mac application by name
* [findMacapps](#findmacapps) - Finds all mac applications
* [findMacappsById](#findmacappsbyid) - Finds mac applications by ID
* [findMacappsByIdSubset](#findmacappsbyidsubset) - Finds a subset of date for a mac application by ID
* [findMacappsByName](#findmacappsbyname) - Finds mac applications by name
* [findMacappsByNameSubset](#findmacappsbynamesubset) - Finds a subset of data for mac applications by name
* [updateMacappById](#updatemacappbyid) - Updates an existing mac application by ID
* [updateMacappByName](#updatemacappbyname) - Updates an existing mac application by name

## createMacappById

Does not support vpp codes.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateMacappByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.createMacappById({
  id: 652309,
}).then((res: CreateMacappByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateMacappByIdRequest](../../models/operations/createmacappbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateMacappByIdResponse](../../models/operations/createmacappbyidresponse.md)>**


## deleteMacappById

Deletes a mac application by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteMacappByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.deleteMacappById({
  id: 591027,
}).then((res: DeleteMacappByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteMacappByIdRequest](../../models/operations/deletemacappbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteMacappByIdResponse](../../models/operations/deletemacappbyidresponse.md)>**


## deleteMacappByName

Deletes a mac application by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteMacappByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.deleteMacappByName({
  name: "Lynn Jacobson DVM",
}).then((res: DeleteMacappByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteMacappByNameRequest](../../models/operations/deletemacappbynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteMacappByNameResponse](../../models/operations/deletemacappbynameresponse.md)>**


## findMacapps

Finds all mac applications

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMacappsResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.findMacapps().then((res: FindMacappsResponse) => {
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

**Promise<[operations.FindMacappsResponse](../../models/operations/findmacappsresponse.md)>**


## findMacappsById

Finds mac applications by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMacappsByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.findMacappsById({
  id: 984632,
}).then((res: FindMacappsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindMacappsByIdRequest](../../models/operations/findmacappsbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindMacappsByIdResponse](../../models/operations/findmacappsbyidresponse.md)>**


## findMacappsByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMacappsByIdSubsetResponse, FindMacappsByIdSubsetSubset } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.findMacappsByIdSubset({
  id: 351893,
  subset: FindMacappsByIdSubsetSubset.SelfService,
}).then((res: FindMacappsByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.FindMacappsByIdSubsetRequest](../../models/operations/findmacappsbyidsubsetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.FindMacappsByIdSubsetResponse](../../models/operations/findmacappsbyidsubsetresponse.md)>**


## findMacappsByName

Finds mac applications by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMacappsByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.findMacappsByName({
  name: "Darin Nienow",
}).then((res: FindMacappsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindMacappsByNameRequest](../../models/operations/findmacappsbynamerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindMacappsByNameResponse](../../models/operations/findmacappsbynameresponse.md)>**


## findMacappsByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMacappsByNameSubsetResponse, FindMacappsByNameSubsetSubset } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.findMacappsByNameSubset({
  name: "Tami Maggio",
  subset: FindMacappsByNameSubsetSubset.VPPCodes,
}).then((res: FindMacappsByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindMacappsByNameSubsetRequest](../../models/operations/findmacappsbynamesubsetrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindMacappsByNameSubsetResponse](../../models/operations/findmacappsbynamesubsetresponse.md)>**


## updateMacappById

Does not support vpp codes.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateMacappByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.updateMacappById({
  id: 113486,
}).then((res: UpdateMacappByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateMacappByIdRequest](../../models/operations/updatemacappbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateMacappByIdResponse](../../models/operations/updatemacappbyidresponse.md)>**


## updateMacappByName

Does not support vpp codes.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateMacappByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.macapplications.updateMacappByName({
  name: "Mr. Ricky Harvey",
}).then((res: UpdateMacappByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateMacappByNameRequest](../../models/operations/updatemacappbynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateMacappByNameResponse](../../models/operations/updatemacappbynameresponse.md)>**

