# Directorybindings
(*directorybindings*)

### Available Operations

* [createDirectoryBindingById](#createdirectorybindingbyid) - Creates a new directory binding by ID
* [deleteDirectoryBindingById](#deletedirectorybindingbyid) - Deletes a directory binding by ID
* [deleteDirectoryBindingByName](#deletedirectorybindingbyname) - Deletes a directory binding by name
* [findDirectoryBindings](#finddirectorybindings) - Finds all directory bindings
* [findDirectoryBindingsById](#finddirectorybindingsbyid) - Finds directory bindings by ID
* [findDirectoryBindingsByName](#finddirectorybindingsbyname) - Finds directory bindings by name
* [updateDirectoryBindingById](#updatedirectorybindingbyid) - Updates an existing directory binding by ID
* [updateDirectoryBindingByName](#updatedirectorybindingbyname) - Updates an existing directory binding by name

## createDirectoryBindingById

Creates a new directory binding by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateDirectoryBindingByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.createDirectoryBindingById({
  id: 633608,
}).then((res: CreateDirectoryBindingByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateDirectoryBindingByIdRequest](../../models/operations/createdirectorybindingbyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateDirectoryBindingByIdResponse](../../models/operations/createdirectorybindingbyidresponse.md)>**


## deleteDirectoryBindingById

Deletes a directory binding by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteDirectoryBindingByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.deleteDirectoryBindingById({
  id: 398434,
}).then((res: DeleteDirectoryBindingByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteDirectoryBindingByIdRequest](../../models/operations/deletedirectorybindingbyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteDirectoryBindingByIdResponse](../../models/operations/deletedirectorybindingbyidresponse.md)>**


## deleteDirectoryBindingByName

Deletes a directory binding by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteDirectoryBindingByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.deleteDirectoryBindingByName({
  name: "Scott Wehner",
}).then((res: DeleteDirectoryBindingByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteDirectoryBindingByNameRequest](../../models/operations/deletedirectorybindingbynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteDirectoryBindingByNameResponse](../../models/operations/deletedirectorybindingbynameresponse.md)>**


## findDirectoryBindings

Finds all directory bindings

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindDirectoryBindingsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.findDirectoryBindings().then((res: FindDirectoryBindingsResponse) => {
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

**Promise<[operations.FindDirectoryBindingsResponse](../../models/operations/finddirectorybindingsresponse.md)>**


## findDirectoryBindingsById

Finds directory bindings by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindDirectoryBindingsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.findDirectoryBindingsById({
  id: 258684,
}).then((res: FindDirectoryBindingsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindDirectoryBindingsByIdRequest](../../models/operations/finddirectorybindingsbyidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindDirectoryBindingsByIdResponse](../../models/operations/finddirectorybindingsbyidresponse.md)>**


## findDirectoryBindingsByName

Finds directory bindings by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindDirectoryBindingsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.findDirectoryBindingsByName({
  name: "Mrs. Gilberto Roberts",
}).then((res: FindDirectoryBindingsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindDirectoryBindingsByNameRequest](../../models/operations/finddirectorybindingsbynamerequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindDirectoryBindingsByNameResponse](../../models/operations/finddirectorybindingsbynameresponse.md)>**


## updateDirectoryBindingById

Updates an existing directory binding by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateDirectoryBindingByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.updateDirectoryBindingById({
  id: 119771,
}).then((res: UpdateDirectoryBindingByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateDirectoryBindingByIdRequest](../../models/operations/updatedirectorybindingbyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateDirectoryBindingByIdResponse](../../models/operations/updatedirectorybindingbyidresponse.md)>**


## updateDirectoryBindingByName

Updates an existing directory binding by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateDirectoryBindingByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.directorybindings.updateDirectoryBindingByName({
  name: "Delores Hermiston IV",
}).then((res: UpdateDirectoryBindingByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateDirectoryBindingByNameRequest](../../models/operations/updatedirectorybindingbynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateDirectoryBindingByNameResponse](../../models/operations/updatedirectorybindingbynameresponse.md)>**

