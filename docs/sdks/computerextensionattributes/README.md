# Computerextensionattributes
(*computerextensionattributes*)

### Available Operations

* [createComputerextensionattributeById](#createcomputerextensionattributebyid) - Creates a new computer extension attribute by ID
* [deleteComputerextensionattributeById](#deletecomputerextensionattributebyid) - Deletes a computer extension attribute by ID
* [deleteComputerextensionattributeByName](#deletecomputerextensionattributebyname) - Deletes a computer extension attribute by name
* [findComputerextensionattributes](#findcomputerextensionattributes) - Finds all computer extension attributes
* [findComputerextensionattributesById](#findcomputerextensionattributesbyid) - Finds computer extension attributes by ID
* [findComputerextensionattributesByName](#findcomputerextensionattributesbyname) - Finds computer extension attributes by name
* [updateComputerextensionattributeById](#updatecomputerextensionattributebyid) - Updates an existing computer extension attribute by ID
* [updateComputerextensionattributeByName](#updatecomputerextensionattributebyname) - Updates an existing computer extension attribute by name

## createComputerextensionattributeById

Creates a new computer extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateComputerextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.createComputerextensionattributeById({
  id: 613966,
}).then((res: CreateComputerextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.CreateComputerextensionattributeByIdRequest](../../models/operations/createcomputerextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.CreateComputerextensionattributeByIdResponse](../../models/operations/createcomputerextensionattributebyidresponse.md)>**


## deleteComputerextensionattributeById

Deletes a computer extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.deleteComputerextensionattributeById({
  id: 679091,
}).then((res: DeleteComputerextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DeleteComputerextensionattributeByIdRequest](../../models/operations/deletecomputerextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteComputerextensionattributeByIdResponse](../../models/operations/deletecomputerextensionattributebyidresponse.md)>**


## deleteComputerextensionattributeByName

Deletes a computer extension attribute by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerextensionattributeByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.deleteComputerextensionattributeByName({
  name: "Ervin McLaughlin",
}).then((res: DeleteComputerextensionattributeByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteComputerextensionattributeByNameRequest](../../models/operations/deletecomputerextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteComputerextensionattributeByNameResponse](../../models/operations/deletecomputerextensionattributebynameresponse.md)>**


## findComputerextensionattributes

Finds all computer extension attributes

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerextensionattributesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.findComputerextensionattributes().then((res: FindComputerextensionattributesResponse) => {
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

**Promise<[operations.FindComputerextensionattributesResponse](../../models/operations/findcomputerextensionattributesresponse.md)>**


## findComputerextensionattributesById

Finds computer extension attributes by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerextensionattributesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.findComputerextensionattributesById({
  id: 964490,
}).then((res: FindComputerextensionattributesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindComputerextensionattributesByIdRequest](../../models/operations/findcomputerextensionattributesbyidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindComputerextensionattributesByIdResponse](../../models/operations/findcomputerextensionattributesbyidresponse.md)>**


## findComputerextensionattributesByName

Finds computer extension attributes by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerextensionattributesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.findComputerextensionattributesByName({
  name: "Billie Jacobi",
}).then((res: FindComputerextensionattributesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindComputerextensionattributesByNameRequest](../../models/operations/findcomputerextensionattributesbynamerequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindComputerextensionattributesByNameResponse](../../models/operations/findcomputerextensionattributesbynameresponse.md)>**


## updateComputerextensionattributeById

Updates an existing computer extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.updateComputerextensionattributeById({
  id: 222443,
}).then((res: UpdateComputerextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.UpdateComputerextensionattributeByIdRequest](../../models/operations/updatecomputerextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.UpdateComputerextensionattributeByIdResponse](../../models/operations/updatecomputerextensionattributebyidresponse.md)>**


## updateComputerextensionattributeByName

Updates an existing computer extension attribute by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerextensionattributeByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerextensionattributes.updateComputerextensionattributeByName({
  name: "Tiffany Welch",
}).then((res: UpdateComputerextensionattributeByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.UpdateComputerextensionattributeByNameRequest](../../models/operations/updatecomputerextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.UpdateComputerextensionattributeByNameResponse](../../models/operations/updatecomputerextensionattributebynameresponse.md)>**

