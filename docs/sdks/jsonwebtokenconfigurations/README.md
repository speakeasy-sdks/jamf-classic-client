# Jsonwebtokenconfigurations
(*jsonwebtokenconfigurations*)

### Available Operations

* [createJsonWebTokenConfigurationById](#createjsonwebtokenconfigurationbyid) - Creates a new JSON Web Token configuration by ID
* [deleteJsonWebTokenConfigurationById](#deletejsonwebtokenconfigurationbyid) - Deletes a JSON Web Token configuration by ID
* [findJsonWebTokenConfigurationById](#findjsonwebtokenconfigurationbyid) - Find JSON Web Token configuration by ID
* [findJsonWebTokenConfigurations](#findjsonwebtokenconfigurations) - Finds all JSON Web Token configurations
* [updateJsonWebTokenConfigurationById](#updatejsonwebtokenconfigurationbyid) - Updates an existing JSON Web Token configuration by ID

## createJsonWebTokenConfigurationById

Creates a new JSON Web Token configuration by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateJsonWebTokenConfigurationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.jsonwebtokenconfigurations.createJsonWebTokenConfigurationById({
  id: 184420,
}).then((res: CreateJsonWebTokenConfigurationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.CreateJsonWebTokenConfigurationByIdRequest](../../models/operations/createjsonwebtokenconfigurationbyidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.CreateJsonWebTokenConfigurationByIdResponse](../../models/operations/createjsonwebtokenconfigurationbyidresponse.md)>**


## deleteJsonWebTokenConfigurationById

Deletes a JSON Web Token configuration by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteJsonWebTokenConfigurationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.jsonwebtokenconfigurations.deleteJsonWebTokenConfigurationById({
  id: "<ID>",
}).then((res: DeleteJsonWebTokenConfigurationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteJsonWebTokenConfigurationByIdRequest](../../models/operations/deletejsonwebtokenconfigurationbyidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteJsonWebTokenConfigurationByIdResponse](../../models/operations/deletejsonwebtokenconfigurationbyidresponse.md)>**


## findJsonWebTokenConfigurationById

Find JSON Web Token configuration by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindJsonWebTokenConfigurationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.jsonwebtokenconfigurations.findJsonWebTokenConfigurationById({
  id: "<ID>",
}).then((res: FindJsonWebTokenConfigurationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.FindJsonWebTokenConfigurationByIdRequest](../../models/operations/findjsonwebtokenconfigurationbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindJsonWebTokenConfigurationByIdResponse](../../models/operations/findjsonwebtokenconfigurationbyidresponse.md)>**


## findJsonWebTokenConfigurations

Finds all JSON Web Token configurations

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindJsonWebTokenConfigurationsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.jsonwebtokenconfigurations.findJsonWebTokenConfigurations().then((res: FindJsonWebTokenConfigurationsResponse) => {
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

**Promise<[operations.FindJsonWebTokenConfigurationsResponse](../../models/operations/findjsonwebtokenconfigurationsresponse.md)>**


## updateJsonWebTokenConfigurationById

Updates an existing JSON Web Token configuration by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateJsonWebTokenConfigurationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.jsonwebtokenconfigurations.updateJsonWebTokenConfigurationById({
  id: "<ID>",
}).then((res: UpdateJsonWebTokenConfigurationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.UpdateJsonWebTokenConfigurationByIdRequest](../../models/operations/updatejsonwebtokenconfigurationbyidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.UpdateJsonWebTokenConfigurationByIdResponse](../../models/operations/updatejsonwebtokenconfigurationbyidresponse.md)>**

