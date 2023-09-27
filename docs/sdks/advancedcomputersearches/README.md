# Advancedcomputersearches
(*advancedcomputersearches*)

### Available Operations

* [createAdvancedComputerSearchgById](#createadvancedcomputersearchgbyid) - Creates a new advanced computer search
* [deleteAdvancedComputerSearchById](#deleteadvancedcomputersearchbyid) - Deletes a computer search by ID
* [deleteAdvancedComputerSearchByName](#deleteadvancedcomputersearchbyname) - Deletes a computer search by name
* [findAdvancedComputerSearches](#findadvancedcomputersearches) - Finds all advanced computer searches
* [findAdvancedComputerSearchesById](#findadvancedcomputersearchesbyid) - Finds computer searches by ID
* [findAdvancedComputerSearchesByName](#findadvancedcomputersearchesbyname) - Finds advanced computer searches by name
* [updateAdvancedComputerSearchById](#updateadvancedcomputersearchbyid) - Updates an existing advanced computer search by ID
* [updateAdvancedComputerSearchByName](#updateadvancedcomputersearchbyname) - Updates an existing advanced computer search by name

## createAdvancedComputerSearchgById

Creates a new advanced computer search

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateAdvancedComputerSearchgByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.createAdvancedComputerSearchgById({
  id: 957156,
}).then((res: CreateAdvancedComputerSearchgByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.CreateAdvancedComputerSearchgByIdRequest](../../models/operations/createadvancedcomputersearchgbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.CreateAdvancedComputerSearchgByIdResponse](../../models/operations/createadvancedcomputersearchgbyidresponse.md)>**


## deleteAdvancedComputerSearchById

Deletes a computer search by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteAdvancedComputerSearchByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.deleteAdvancedComputerSearchById({
  id: 778157,
}).then((res: DeleteAdvancedComputerSearchByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteAdvancedComputerSearchByIdRequest](../../models/operations/deleteadvancedcomputersearchbyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteAdvancedComputerSearchByIdResponse](../../models/operations/deleteadvancedcomputersearchbyidresponse.md)>**


## deleteAdvancedComputerSearchByName

Deletes a computer search by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteAdvancedComputerSearchByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.deleteAdvancedComputerSearchByName({
  name: "Teri Strosin",
}).then((res: DeleteAdvancedComputerSearchByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeleteAdvancedComputerSearchByNameRequest](../../models/operations/deleteadvancedcomputersearchbynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeleteAdvancedComputerSearchByNameResponse](../../models/operations/deleteadvancedcomputersearchbynameresponse.md)>**


## findAdvancedComputerSearches

Finds all advanced computer searches

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindAdvancedComputerSearchesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.findAdvancedComputerSearches().then((res: FindAdvancedComputerSearchesResponse) => {
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

**Promise<[operations.FindAdvancedComputerSearchesResponse](../../models/operations/findadvancedcomputersearchesresponse.md)>**


## findAdvancedComputerSearchesById

Additional display fields are returned within the `Computer` object

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindAdvancedComputerSearchesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.findAdvancedComputerSearchesById({
  id: 799159,
}).then((res: FindAdvancedComputerSearchesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindAdvancedComputerSearchesByIdRequest](../../models/operations/findadvancedcomputersearchesbyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindAdvancedComputerSearchesByIdResponse](../../models/operations/findadvancedcomputersearchesbyidresponse.md)>**


## findAdvancedComputerSearchesByName

Additional display fields are returned within the `Computer` object

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindAdvancedComputerSearchesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.findAdvancedComputerSearchesByName({
  name: "Erik Lebsack",
}).then((res: FindAdvancedComputerSearchesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindAdvancedComputerSearchesByNameRequest](../../models/operations/findadvancedcomputersearchesbynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindAdvancedComputerSearchesByNameResponse](../../models/operations/findadvancedcomputersearchesbynameresponse.md)>**


## updateAdvancedComputerSearchById

Updates an existing advanced computer search by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateAdvancedComputerSearchByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.updateAdvancedComputerSearchById({
  id: 118274,
}).then((res: UpdateAdvancedComputerSearchByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.UpdateAdvancedComputerSearchByIdRequest](../../models/operations/updateadvancedcomputersearchbyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.UpdateAdvancedComputerSearchByIdResponse](../../models/operations/updateadvancedcomputersearchbyidresponse.md)>**


## updateAdvancedComputerSearchByName

Updates an existing advanced computer search by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateAdvancedComputerSearchByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedcomputersearches.updateAdvancedComputerSearchByName({
  name: "Luke McCullough",
}).then((res: UpdateAdvancedComputerSearchByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.UpdateAdvancedComputerSearchByNameRequest](../../models/operations/updateadvancedcomputersearchbynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.UpdateAdvancedComputerSearchByNameResponse](../../models/operations/updateadvancedcomputersearchbynameresponse.md)>**

