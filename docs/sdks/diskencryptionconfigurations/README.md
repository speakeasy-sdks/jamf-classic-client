# Diskencryptionconfigurations
(*diskencryptionconfigurations*)

### Available Operations

* [createDiskEncryptionConfigurationById](#creatediskencryptionconfigurationbyid) - Creates a new disk encryption configuration by ID
* [deleteDiskEncryptionConfigurationById](#deletediskencryptionconfigurationbyid) - Deletes a disk encryption configuration by ID
* [deleteDiskEncryptionConfigurationByName](#deletediskencryptionconfigurationbyname) - Deletes a disk encryption configuration by name
* [findDiskEncryptionConfigurations](#finddiskencryptionconfigurations) - Finds all disk encryption configurations
* [findDiskEncryptionConfigurationsById](#finddiskencryptionconfigurationsbyid) - Finds disk encryption configurations by ID
* [findDiskEncryptionConfigurationsByName](#finddiskencryptionconfigurationsbyname) - Finds disk encryption configurations by name
* [updateDiskEncryptionConfigurationById](#updatediskencryptionconfigurationbyid) - Updates an existing disk encryption configuration by ID
* [updateDiskEncryptionConfigurationByName](#updatediskencryptionconfigurationbyname) - Updates an existing disk encryption configuration by name

## createDiskEncryptionConfigurationById

Creates a new disk encryption configuration by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateDiskEncryptionConfigurationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.createDiskEncryptionConfigurationById({
  id: 185232,
}).then((res: CreateDiskEncryptionConfigurationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.CreateDiskEncryptionConfigurationByIdRequest](../../models/operations/creatediskencryptionconfigurationbyidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.CreateDiskEncryptionConfigurationByIdResponse](../../models/operations/creatediskencryptionconfigurationbyidresponse.md)>**


## deleteDiskEncryptionConfigurationById

Deletes a disk encryption configuration by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteDiskEncryptionConfigurationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.deleteDiskEncryptionConfigurationById({
  id: 845358,
}).then((res: DeleteDiskEncryptionConfigurationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeleteDiskEncryptionConfigurationByIdRequest](../../models/operations/deletediskencryptionconfigurationbyidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeleteDiskEncryptionConfigurationByIdResponse](../../models/operations/deletediskencryptionconfigurationbyidresponse.md)>**


## deleteDiskEncryptionConfigurationByName

Deletes a disk encryption configuration by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteDiskEncryptionConfigurationByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.deleteDiskEncryptionConfigurationByName({
  name: "Cassandra Ward V",
}).then((res: DeleteDiskEncryptionConfigurationByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteDiskEncryptionConfigurationByNameRequest](../../models/operations/deletediskencryptionconfigurationbynamerequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteDiskEncryptionConfigurationByNameResponse](../../models/operations/deletediskencryptionconfigurationbynameresponse.md)>**


## findDiskEncryptionConfigurations

Finds all disk encryption configurations

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindDiskEncryptionConfigurationsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.findDiskEncryptionConfigurations().then((res: FindDiskEncryptionConfigurationsResponse) => {
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

**Promise<[operations.FindDiskEncryptionConfigurationsResponse](../../models/operations/finddiskencryptionconfigurationsresponse.md)>**


## findDiskEncryptionConfigurationsById

Finds disk encryption configurations by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindDiskEncryptionConfigurationsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.findDiskEncryptionConfigurationsById({
  id: 945302,
}).then((res: FindDiskEncryptionConfigurationsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FindDiskEncryptionConfigurationsByIdRequest](../../models/operations/finddiskencryptionconfigurationsbyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FindDiskEncryptionConfigurationsByIdResponse](../../models/operations/finddiskencryptionconfigurationsbyidresponse.md)>**


## findDiskEncryptionConfigurationsByName

Finds disk encryption configurations by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindDiskEncryptionConfigurationsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.findDiskEncryptionConfigurationsByName({
  name: "Lynette Bosco II",
}).then((res: FindDiskEncryptionConfigurationsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.FindDiskEncryptionConfigurationsByNameRequest](../../models/operations/finddiskencryptionconfigurationsbynamerequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.FindDiskEncryptionConfigurationsByNameResponse](../../models/operations/finddiskencryptionconfigurationsbynameresponse.md)>**


## updateDiskEncryptionConfigurationById

Updates an existing disk encryption configuration by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateDiskEncryptionConfigurationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.updateDiskEncryptionConfigurationById({
  id: 86532,
}).then((res: UpdateDiskEncryptionConfigurationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.UpdateDiskEncryptionConfigurationByIdRequest](../../models/operations/updatediskencryptionconfigurationbyidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.UpdateDiskEncryptionConfigurationByIdResponse](../../models/operations/updatediskencryptionconfigurationbyidresponse.md)>**


## updateDiskEncryptionConfigurationByName

Updates an existing disk encryption configuration by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateDiskEncryptionConfigurationByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.diskencryptionconfigurations.updateDiskEncryptionConfigurationByName({
  name: "Sherry Morar IV",
}).then((res: UpdateDiskEncryptionConfigurationByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.UpdateDiskEncryptionConfigurationByNameRequest](../../models/operations/updatediskencryptionconfigurationbynamerequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.UpdateDiskEncryptionConfigurationByNameResponse](../../models/operations/updatediskencryptionconfigurationbynameresponse.md)>**

