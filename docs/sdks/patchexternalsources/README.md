# patchexternalsources

### Available Operations

* [createPatchExternalSourcesById](#createpatchexternalsourcesbyid) - Create a new patch external source by ID
* [createPatchExternalSourcesByName](#createpatchexternalsourcesbyname) - Create a new patch external source by name
* [deletePatchExternalSourcesById](#deletepatchexternalsourcesbyid) - Deletes a patch external source by ID
* [findPatchExternalSources](#findpatchexternalsources) - Finds all patch external sources
* [findPatchExternalSourcesById](#findpatchexternalsourcesbyid) - Finds a patch external source by ID
* [findPatchExternalSourcesByName](#findpatchexternalsourcesbyname) - Finds the first patch external source with the name provided
* [updatePatchExternalSourcesById](#updatepatchexternalsourcesbyid) - Updates a patch external source by ID
* [updatePatchExternalSourcesByName](#updatepatchexternalsourcesbyname) - Updates a patch external source by name

## createPatchExternalSourcesById

Create a new patch external source by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreatePatchExternalSourcesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.createPatchExternalSourcesById({
  id: 741238,
}).then((res: CreatePatchExternalSourcesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreatePatchExternalSourcesByIdRequest](../../models/operations/createpatchexternalsourcesbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreatePatchExternalSourcesByIdResponse](../../models/operations/createpatchexternalsourcesbyidresponse.md)>**


## createPatchExternalSourcesByName

Create a new patch external source by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreatePatchExternalSourcesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.createPatchExternalSourcesByName({
  name: "Sylvia Turner II",
}).then((res: CreatePatchExternalSourcesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.CreatePatchExternalSourcesByNameRequest](../../models/operations/createpatchexternalsourcesbynamerequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.CreatePatchExternalSourcesByNameResponse](../../models/operations/createpatchexternalsourcesbynameresponse.md)>**


## deletePatchExternalSourcesById

Deletes a patch external source by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeletePatchExternalSourcesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.deletePatchExternalSourcesById({
  id: "5b197cd4-4e2f-452d-82d3-513bb6f48b65",
}).then((res: DeletePatchExternalSourcesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeletePatchExternalSourcesByIdRequest](../../models/operations/deletepatchexternalsourcesbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePatchExternalSourcesByIdResponse](../../models/operations/deletepatchexternalsourcesbyidresponse.md)>**


## findPatchExternalSources

Finds all patch external sources

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPatchExternalSourcesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.findPatchExternalSources().then((res: FindPatchExternalSourcesResponse) => {
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

**Promise<[operations.FindPatchExternalSourcesResponse](../../models/operations/findpatchexternalsourcesresponse.md)>**


## findPatchExternalSourcesById

Finds a patch external source by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPatchExternalSourcesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.findPatchExternalSourcesById({
  id: "6bcdb35f-f2e4-4b27-937a-8cd9e7319c17",
}).then((res: FindPatchExternalSourcesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindPatchExternalSourcesByIdRequest](../../models/operations/findpatchexternalsourcesbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindPatchExternalSourcesByIdResponse](../../models/operations/findpatchexternalsourcesbyidresponse.md)>**


## findPatchExternalSourcesByName

Finds the first patch external source with the name provided

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPatchExternalSourcesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.findPatchExternalSourcesByName({
  name: "Ginger Hand",
}).then((res: FindPatchExternalSourcesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindPatchExternalSourcesByNameRequest](../../models/operations/findpatchexternalsourcesbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindPatchExternalSourcesByNameResponse](../../models/operations/findpatchexternalsourcesbynameresponse.md)>**


## updatePatchExternalSourcesById

Updates a patch external source by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdatePatchExternalSourcesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.updatePatchExternalSourcesById({
  id: "f77b114e-eb52-4ff7-85fc-37814d4c98e0",
}).then((res: UpdatePatchExternalSourcesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdatePatchExternalSourcesByIdRequest](../../models/operations/updatepatchexternalsourcesbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdatePatchExternalSourcesByIdResponse](../../models/operations/updatepatchexternalsourcesbyidresponse.md)>**


## updatePatchExternalSourcesByName

Updates a patch external source by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdatePatchExternalSourcesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.updatePatchExternalSourcesByName({
  name: "Adam Reilly",
}).then((res: UpdatePatchExternalSourcesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.UpdatePatchExternalSourcesByNameRequest](../../models/operations/updatepatchexternalsourcesbynamerequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.UpdatePatchExternalSourcesByNameResponse](../../models/operations/updatepatchexternalsourcesbynameresponse.md)>**

