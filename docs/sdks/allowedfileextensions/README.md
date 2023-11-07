# Allowedfileextensions
(*.allowedfileextensions*)

### Available Operations

* [createAllowedFileExtensionById](#createallowedfileextensionbyid) - Creates a new allowed file extension value by ID
* [deleteAllowedFileExtensionById](#deleteallowedfileextensionbyid) - Deletes an allowed file extension value by ID
* [findAllowedFileExtension](#findallowedfileextension) - Finds the allowed file extensions
* [findAllowedFileExtensionById](#findallowedfileextensionbyid) - Finds an allowed file extension value by ID
* [findAllowedFileExtensionByName](#findallowedfileextensionbyname) - Finds an allowed file extension value by name

## createAllowedFileExtensionById

Creates a new allowed file extension value by ID

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

  const res = await sdk.allowedfileextensions.createAllowedFileExtensionById({
    id: 650142,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreateAllowedFileExtensionByIdRequest](../../models/operations/createallowedfileextensionbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateAllowedFileExtensionByIdResponse](../../models/operations/createallowedfileextensionbyidresponse.md)>**


## deleteAllowedFileExtensionById

Deletes an allowed file extension value by ID

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

  const res = await sdk.allowedfileextensions.deleteAllowedFileExtensionById({
    id: 717312,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteAllowedFileExtensionByIdRequest](../../models/operations/deleteallowedfileextensionbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteAllowedFileExtensionByIdResponse](../../models/operations/deleteallowedfileextensionbyidresponse.md)>**


## findAllowedFileExtension

Finds the allowed file extensions

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

  const res = await sdk.allowedfileextensions.findAllowedFileExtension();


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

**Promise<[operations.FindAllowedFileExtensionResponse](../../models/operations/findallowedfileextensionresponse.md)>**


## findAllowedFileExtensionById

Finds an allowed file extension value by ID

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

  const res = await sdk.allowedfileextensions.findAllowedFileExtensionById({
    id: 668652,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindAllowedFileExtensionByIdRequest](../../models/operations/findallowedfileextensionbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindAllowedFileExtensionByIdResponse](../../models/operations/findallowedfileextensionbyidresponse.md)>**


## findAllowedFileExtensionByName

Finds an allowed file extension value by name

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

  const res = await sdk.allowedfileextensions.findAllowedFileExtensionByName({
    extension: "png",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindAllowedFileExtensionByNameRequest](../../models/operations/findallowedfileextensionbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindAllowedFileExtensionByNameResponse](../../models/operations/findallowedfileextensionbynameresponse.md)>**

