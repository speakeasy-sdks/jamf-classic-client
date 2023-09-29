# Patchexternalsources
(*patchexternalsources*)

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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreatePatchExternalSourcesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.createPatchExternalSourcesById({
  id: 274468,
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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreatePatchExternalSourcesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.createPatchExternalSourcesByName({
  name: "Transexual foreground ivory",
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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeletePatchExternalSourcesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.deletePatchExternalSourcesById({
  id: "<ID>",
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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchExternalSourcesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchExternalSourcesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.findPatchExternalSourcesById({
  id: "<ID>",
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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchExternalSourcesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.findPatchExternalSourcesByName({
  name: "custom olive Arkansas",
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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdatePatchExternalSourcesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.updatePatchExternalSourcesById({
  id: "<ID>",
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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdatePatchExternalSourcesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchexternalsources.updatePatchExternalSourcesByName({
  name: "area blue",
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

