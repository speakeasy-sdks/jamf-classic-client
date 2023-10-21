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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.diskencryptionconfigurations.createDiskEncryptionConfigurationById({
    id: 82551,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.diskencryptionconfigurations.deleteDiskEncryptionConfigurationById({
    id: 191333,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.diskencryptionconfigurations.deleteDiskEncryptionConfigurationByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.diskencryptionconfigurations.findDiskEncryptionConfigurations();

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

**Promise<[operations.FindDiskEncryptionConfigurationsResponse](../../models/operations/finddiskencryptionconfigurationsresponse.md)>**


## findDiskEncryptionConfigurationsById

Finds disk encryption configurations by ID

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

  const res = await sdk.diskencryptionconfigurations.findDiskEncryptionConfigurationsById({
    id: 789225,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.diskencryptionconfigurations.findDiskEncryptionConfigurationsByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.diskencryptionconfigurations.updateDiskEncryptionConfigurationById({
    id: 220999,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.diskencryptionconfigurations.updateDiskEncryptionConfigurationByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.UpdateDiskEncryptionConfigurationByNameRequest](../../models/operations/updatediskencryptionconfigurationbynamerequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.UpdateDiskEncryptionConfigurationByNameResponse](../../models/operations/updatediskencryptionconfigurationbynameresponse.md)>**

