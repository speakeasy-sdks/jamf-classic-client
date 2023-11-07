# Advancedcomputersearches
(*.advancedcomputersearches*)

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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.createAdvancedComputerSearchgById({
    id: 274583,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.deleteAdvancedComputerSearchById({
    id: 764480,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.deleteAdvancedComputerSearchByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.findAdvancedComputerSearches();


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.findAdvancedComputerSearchesById({
    id: 964070,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.findAdvancedComputerSearchesByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.updateAdvancedComputerSearchById({
    id: 382379,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.advancedcomputersearches.updateAdvancedComputerSearchByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.UpdateAdvancedComputerSearchByNameRequest](../../models/operations/updateadvancedcomputersearchbynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.UpdateAdvancedComputerSearchByNameResponse](../../models/operations/updateadvancedcomputersearchbynameresponse.md)>**

