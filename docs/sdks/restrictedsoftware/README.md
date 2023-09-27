# Restrictedsoftware
(*restrictedsoftware*)

### Available Operations

* [createRestrictedSoftwareById](#createrestrictedsoftwarebyid) - Creates a new restricted software by ID
* [deleteRestrictedSoftwareById](#deleterestrictedsoftwarebyid) - Deletes a restricted software by ID
* [deleteRestrictedSoftwareByName](#deleterestrictedsoftwarebyname) - Deletes a restricted software by name
* [findRestrictedSoftware](#findrestrictedsoftware) - Finds all restricted software
* [findRestrictedSoftwareById](#findrestrictedsoftwarebyid) - Finds restricted software by ID
* [findRestrictedSoftwareByName](#findrestrictedsoftwarebyname) - Finds restricted software by name
* [updateRestrictedSoftwareById](#updaterestrictedsoftwarebyid) - Updates an existing restricted software by ID
* [updateRestrictedSoftwareByName](#updaterestrictedsoftwarebyname) - Updates an existing restricted software by name

## createRestrictedSoftwareById

Creates a new restricted software by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateRestrictedSoftwareByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.createRestrictedSoftwareById({
  id: 791762,
}).then((res: CreateRestrictedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.CreateRestrictedSoftwareByIdRequest](../../models/operations/createrestrictedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.CreateRestrictedSoftwareByIdResponse](../../models/operations/createrestrictedsoftwarebyidresponse.md)>**


## deleteRestrictedSoftwareById

Deletes a restricted software by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteRestrictedSoftwareByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.deleteRestrictedSoftwareById({
  id: 68880,
}).then((res: DeleteRestrictedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteRestrictedSoftwareByIdRequest](../../models/operations/deleterestrictedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteRestrictedSoftwareByIdResponse](../../models/operations/deleterestrictedsoftwarebyidresponse.md)>**


## deleteRestrictedSoftwareByName

Deletes a restricted software by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteRestrictedSoftwareByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.deleteRestrictedSoftwareByName({
  name: "May Huel",
}).then((res: DeleteRestrictedSoftwareByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteRestrictedSoftwareByNameRequest](../../models/operations/deleterestrictedsoftwarebynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteRestrictedSoftwareByNameResponse](../../models/operations/deleterestrictedsoftwarebynameresponse.md)>**


## findRestrictedSoftware

Finds all restricted software

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindRestrictedSoftwareResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.findRestrictedSoftware().then((res: FindRestrictedSoftwareResponse) => {
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

**Promise<[operations.FindRestrictedSoftwareResponse](../../models/operations/findrestrictedsoftwareresponse.md)>**


## findRestrictedSoftwareById

Finds restricted software by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindRestrictedSoftwareByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.findRestrictedSoftwareById({
  id: 496548,
}).then((res: FindRestrictedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.FindRestrictedSoftwareByIdRequest](../../models/operations/findrestrictedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.FindRestrictedSoftwareByIdResponse](../../models/operations/findrestrictedsoftwarebyidresponse.md)>**


## findRestrictedSoftwareByName

Finds restricted software by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindRestrictedSoftwareByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.findRestrictedSoftwareByName({
  name: "Warren Brakus",
}).then((res: FindRestrictedSoftwareByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindRestrictedSoftwareByNameRequest](../../models/operations/findrestrictedsoftwarebynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindRestrictedSoftwareByNameResponse](../../models/operations/findrestrictedsoftwarebynameresponse.md)>**


## updateRestrictedSoftwareById

Updates an existing restricted software by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateRestrictedSoftwareByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.updateRestrictedSoftwareById({
  id: 166289,
}).then((res: UpdateRestrictedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateRestrictedSoftwareByIdRequest](../../models/operations/updaterestrictedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateRestrictedSoftwareByIdResponse](../../models/operations/updaterestrictedsoftwarebyidresponse.md)>**


## updateRestrictedSoftwareByName

Updates an existing restricted software by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateRestrictedSoftwareByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.restrictedsoftware.updateRestrictedSoftwareByName({
  name: "Josephine Lakin",
}).then((res: UpdateRestrictedSoftwareByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdateRestrictedSoftwareByNameRequest](../../models/operations/updaterestrictedsoftwarebynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdateRestrictedSoftwareByNameResponse](../../models/operations/updaterestrictedsoftwarebynameresponse.md)>**

