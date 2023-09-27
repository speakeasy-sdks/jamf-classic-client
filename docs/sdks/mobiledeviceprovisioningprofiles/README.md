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
import { CreateMobileDeviceProvisioningProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesById({
  id: 520761,
}).then((res: CreateMobileDeviceProvisioningProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateMobileDeviceProvisioningProfilesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesByName({
  name: "Edwin Reichert III",
}).then((res: CreateMobileDeviceProvisioningProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateMobileDeviceProvisioningProfilesByUUIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesByUUID({
  uuid: "6013f59d-a757-4a59-acfe-f66ef1caa338",
}).then((res: CreateMobileDeviceProvisioningProfilesByUUIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceProvisioningProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesById({
  id: 216457,
}).then((res: DeleteMobileDeviceProvisioningProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceProvisioningProfilesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesByName({
  name: "Victor Rogahn",
}).then((res: DeleteMobileDeviceProvisioningProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceProvisioningProfilesByUUIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesByUUID({
  uuid: "477373c8-d72f-464d-9db1-f2c4310661e9",
}).then((res: DeleteMobileDeviceProvisioningProfilesByUUIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDeviceProvisioningProfilesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfiles().then((res: FindMobileDeviceProvisioningProfilesResponse) => {
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

**Promise<[operations.FindMobileDeviceProvisioningProfilesResponse](../../models/operations/findmobiledeviceprovisioningprofilesresponse.md)>**


## findMobileDeviceProvisioningProfilesById

Finds a mobile device provisioning profiles by id

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceProvisioningProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesById({
  id: 431994,
}).then((res: FindMobileDeviceProvisioningProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDeviceProvisioningProfilesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesByName({
  name: "Leslie Metz DDS",
}).then((res: FindMobileDeviceProvisioningProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDeviceProvisioningProfilesByUUIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesByUUID({
  uuid: "f9e06e3a-4370-400a-a6b6-bc9b8f759eac",
}).then((res: FindMobileDeviceProvisioningProfilesByUUIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceProvisioningProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesById({
  id: 373040,
}).then((res: UpdateMobileDeviceProvisioningProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceProvisioningProfilesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesByName({
  name: "Jodi Mueller",
}).then((res: UpdateMobileDeviceProvisioningProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceProvisioningProfilesByUUIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesByUUID({
  uuid: "1d311352-965b-4b8a-b202-611435e139db",
}).then((res: UpdateMobileDeviceProvisioningProfilesByUUIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.UpdateMobileDeviceProvisioningProfilesByUUIDRequest](../../models/operations/updatemobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.UpdateMobileDeviceProvisioningProfilesByUUIDResponse](../../models/operations/updatemobiledeviceprovisioningprofilesbyuuidresponse.md)>**

