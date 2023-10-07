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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerextensionattributes.createComputerextensionattributeById({
    id: 392399,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerextensionattributes.deleteComputerextensionattributeById({
    id: 471782,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerextensionattributes.deleteComputerextensionattributeByName({
    name: "lest",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerextensionattributes.findComputerextensionattributes();

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

**Promise<[operations.FindComputerextensionattributesResponse](../../models/operations/findcomputerextensionattributesresponse.md)>**


## findComputerextensionattributesById

Finds computer extension attributes by ID

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

  const res = await sdk.computerextensionattributes.findComputerextensionattributesById({
    id: 535794,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerextensionattributes.findComputerextensionattributesByName({
    name: "strategic",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerextensionattributes.updateComputerextensionattributeById({
    id: 510181,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerextensionattributes.updateComputerextensionattributeByName({
    name: "male initiatives override",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.UpdateComputerextensionattributeByNameRequest](../../models/operations/updatecomputerextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.UpdateComputerextensionattributeByNameResponse](../../models/operations/updatecomputerextensionattributebynameresponse.md)>**

