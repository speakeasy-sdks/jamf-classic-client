# scripts

### Available Operations

* [createScriptById](#createscriptbyid) - Creates a new script by ID
* [deleteScriptById](#deletescriptbyid) - Deletes a script by ID
* [deleteScriptByName](#deletescriptbyname) - Deletes a script by name
* [findScripts](#findscripts) - Finds all scripts
* [findScriptsById](#findscriptsbyid) - Finds scripts by ID
* [findScriptsByName](#findscriptsbyname) - Finds scripts by name
* [updateScriptById](#updatescriptbyid) - Updates an existing script by ID
* [updateScriptByName](#updatescriptbyname) - Updates an existing script by name

## createScriptById

Only one of script_contents_encoded and script_contents should be submitted.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateScriptByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.createScriptById({
  id: 435531,
}).then((res: CreateScriptByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateScriptByIdRequest](../../models/operations/createscriptbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateScriptByIdResponse](../../models/operations/createscriptbyidresponse.md)>**


## deleteScriptById

Deletes a script by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteScriptByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.deleteScriptById({
  id: 842402,
}).then((res: DeleteScriptByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteScriptByIdRequest](../../models/operations/deletescriptbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteScriptByIdResponse](../../models/operations/deletescriptbyidresponse.md)>**


## deleteScriptByName

Deletes a script by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteScriptByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.deleteScriptByName({
  name: "Corey Walker",
}).then((res: DeleteScriptByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteScriptByNameRequest](../../models/operations/deletescriptbynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteScriptByNameResponse](../../models/operations/deletescriptbynameresponse.md)>**


## findScripts

Finds all scripts

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindScriptsResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.findScripts().then((res: FindScriptsResponse) => {
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

**Promise<[operations.FindScriptsResponse](../../models/operations/findscriptsresponse.md)>**


## findScriptsById

script_contents_encoded is the equivalent of script_contents, but it has been Base 64 encoded.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindScriptsByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.findScriptsById({
  id: 493591,
}).then((res: FindScriptsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindScriptsByIdRequest](../../models/operations/findscriptsbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindScriptsByIdResponse](../../models/operations/findscriptsbyidresponse.md)>**


## findScriptsByName

script_contents_encoded is the equivalent of script_contents, but it has been Base 64 encoded.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindScriptsByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.findScriptsByName({
  name: "Jane Kuhlman",
}).then((res: FindScriptsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindScriptsByNameRequest](../../models/operations/findscriptsbynamerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindScriptsByNameResponse](../../models/operations/findscriptsbynameresponse.md)>**


## updateScriptById

Only one of script_contents_encoded and script_contents should be submitted.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateScriptByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.updateScriptById({
  id: 739508,
}).then((res: UpdateScriptByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateScriptByIdRequest](../../models/operations/updatescriptbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateScriptByIdResponse](../../models/operations/updatescriptbyidresponse.md)>**


## updateScriptByName

Only one of script_contents_encoded and script_contents should be submitted.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateScriptByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.scripts.updateScriptByName({
  name: "Andres Predovic",
}).then((res: UpdateScriptByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateScriptByNameRequest](../../models/operations/updatescriptbynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateScriptByNameResponse](../../models/operations/updatescriptbynameresponse.md)>**

