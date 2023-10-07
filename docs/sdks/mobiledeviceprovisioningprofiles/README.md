# Mobiledeviceprovisioningprofiles
(*mobiledeviceprovisioningprofiles*)

### Available Operations

* [createMobileDeviceProvisioningProfilesById](#createmobiledeviceprovisioningprofilesbyid) - Creates a mobile device provisioning profiles by id
* [createMobileDeviceProvisioningProfilesByName](#createmobiledeviceprovisioningprofilesbyname) - Creates a mobile device provisioning profiles by name
* [createMobileDeviceProvisioningProfilesByUUID](#createmobiledeviceprovisioningprofilesbyuuid) - Creates a mobile device provisioning profiles by uuid
* [deleteMobileDeviceProvisioningProfilesById](#deletemobiledeviceprovisioningprofilesbyid) - Deletes a mobile device provisioning profiles by id
* [deleteMobileDeviceProvisioningProfilesByName](#deletemobiledeviceprovisioningprofilesbyname) - Deletes a mobile device provisioning profiles by name
* [deleteMobileDeviceProvisioningProfilesByUUID](#deletemobiledeviceprovisioningprofilesbyuuid) - Deletes a mobile device provisioning profiles by uuid
* [findMobileDeviceProvisioningProfiles](#findmobiledeviceprovisioningprofiles) - Finds all mobile device provisioning profiles
* [findMobileDeviceProvisioningProfilesById](#findmobiledeviceprovisioningprofilesbyid) - Finds a mobile device provisioning profiles by id
* [findMobileDeviceProvisioningProfilesByName](#findmobiledeviceprovisioningprofilesbyname) - Finds a mobile device provisioning profiles by name
* [findMobileDeviceProvisioningProfilesByUUID](#findmobiledeviceprovisioningprofilesbyuuid) - Finds a mobile device provisioning profiles by uuid
* [updateMobileDeviceProvisioningProfilesById](#updatemobiledeviceprovisioningprofilesbyid) - Updates an existing mobile device provisioning profiles by id
* [updateMobileDeviceProvisioningProfilesByName](#updatemobiledeviceprovisioningprofilesbyname) - Updates an existing mobile device provisioning profiles by name
* [updateMobileDeviceProvisioningProfilesByUUID](#updatemobiledeviceprovisioningprofilesbyuuid) - Updates an existing mobile device provisioning profiles by uuid

## createMobileDeviceProvisioningProfilesById

Creates a mobile device provisioning profiles by id

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

  const res = await sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesById({
    id: 535000,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.CreateMobileDeviceProvisioningProfilesByIdRequest](../../models/operations/createmobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.CreateMobileDeviceProvisioningProfilesByIdResponse](../../models/operations/createmobiledeviceprovisioningprofilesbyidresponse.md)>**


## createMobileDeviceProvisioningProfilesByName

Creates a mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesByName({
    name: "Synchronised",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.CreateMobileDeviceProvisioningProfilesByNameRequest](../../models/operations/createmobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.CreateMobileDeviceProvisioningProfilesByNameResponse](../../models/operations/createmobiledeviceprovisioningprofilesbynameresponse.md)>**


## createMobileDeviceProvisioningProfilesByUUID

Creates a mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesByUUID({
    uuid: "13ea13b9-fc35-4832-beef-b81d409bacf7",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.CreateMobileDeviceProvisioningProfilesByUUIDRequest](../../models/operations/createmobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.CreateMobileDeviceProvisioningProfilesByUUIDResponse](../../models/operations/createmobiledeviceprovisioningprofilesbyuuidresponse.md)>**


## deleteMobileDeviceProvisioningProfilesById

Deletes a mobile device provisioning profiles by id

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

  const res = await sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesById({
    id: 368967,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.DeleteMobileDeviceProvisioningProfilesByIdRequest](../../models/operations/deletemobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeleteMobileDeviceProvisioningProfilesByIdResponse](../../models/operations/deletemobiledeviceprovisioningprofilesbyidresponse.md)>**


## deleteMobileDeviceProvisioningProfilesByName

Deletes a mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesByName({
    name: "Southwest Intranet Lari",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteMobileDeviceProvisioningProfilesByNameRequest](../../models/operations/deletemobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteMobileDeviceProvisioningProfilesByNameResponse](../../models/operations/deletemobiledeviceprovisioningprofilesbynameresponse.md)>**


## deleteMobileDeviceProvisioningProfilesByUUID

Deletes a mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesByUUID({
    uuid: "1b5d663b-9383-442c-ae3e-a53127d259da",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteMobileDeviceProvisioningProfilesByUUIDRequest](../../models/operations/deletemobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteMobileDeviceProvisioningProfilesByUUIDResponse](../../models/operations/deletemobiledeviceprovisioningprofilesbyuuidresponse.md)>**


## findMobileDeviceProvisioningProfiles

Finds all mobile device provisioning profiles

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfiles();

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

**Promise<[operations.FindMobileDeviceProvisioningProfilesResponse](../../models/operations/findmobiledeviceprovisioningprofilesresponse.md)>**


## findMobileDeviceProvisioningProfilesById

Finds a mobile device provisioning profiles by id

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesById({
    id: 627440,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindMobileDeviceProvisioningProfilesByIdRequest](../../models/operations/findmobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindMobileDeviceProvisioningProfilesByIdResponse](../../models/operations/findmobiledeviceprovisioningprofilesbyidresponse.md)>**


## findMobileDeviceProvisioningProfilesByName

Finds a mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesByName({
    name: "Investment",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.FindMobileDeviceProvisioningProfilesByNameRequest](../../models/operations/findmobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindMobileDeviceProvisioningProfilesByNameResponse](../../models/operations/findmobiledeviceprovisioningprofilesbynameresponse.md)>**


## findMobileDeviceProvisioningProfilesByUUID

Finds a mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesByUUID({
    uuid: "f7d07a4b-4f13-400a-9a71-cfd522cce345",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.FindMobileDeviceProvisioningProfilesByUUIDRequest](../../models/operations/findmobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindMobileDeviceProvisioningProfilesByUUIDResponse](../../models/operations/findmobiledeviceprovisioningprofilesbyuuidresponse.md)>**


## updateMobileDeviceProvisioningProfilesById

Updates an existing mobile device provisioning profiles by id

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

  const res = await sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesById({
    id: 338588,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.UpdateMobileDeviceProvisioningProfilesByIdRequest](../../models/operations/updatemobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.UpdateMobileDeviceProvisioningProfilesByIdResponse](../../models/operations/updatemobiledeviceprovisioningprofilesbyidresponse.md)>**


## updateMobileDeviceProvisioningProfilesByName

Updates an existing mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesByName({
    name: "Hybrid",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.UpdateMobileDeviceProvisioningProfilesByNameRequest](../../models/operations/updatemobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.UpdateMobileDeviceProvisioningProfilesByNameResponse](../../models/operations/updatemobiledeviceprovisioningprofilesbynameresponse.md)>**


## updateMobileDeviceProvisioningProfilesByUUID

Updates an existing mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesByUUID({
    uuid: "fa0f0ee4-a5c9-4284-80bb-3bc485e07e4d",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.UpdateMobileDeviceProvisioningProfilesByUUIDRequest](../../models/operations/updatemobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.UpdateMobileDeviceProvisioningProfilesByUUIDResponse](../../models/operations/updatemobiledeviceprovisioningprofilesbyuuidresponse.md)>**

