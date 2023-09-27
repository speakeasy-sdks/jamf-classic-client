# Mobiledeviceconfigurationprofiles
(*mobiledeviceconfigurationprofiles*)

### Available Operations

* [createMobileDeviceConfigurationProfileById](#createmobiledeviceconfigurationprofilebyid) - Creates a new mobile device configuration profile by ID
* [deleteMobileDeviceConfigurationProfileById](#deletemobiledeviceconfigurationprofilebyid) - Deletes a mobile device configuration profile by ID
* [deleteMobileDeviceConfigurationProfileByName](#deletemobiledeviceconfigurationprofilebyname) - Deletes a mobile device configuration profile by name
* [findMobileDeviceConfigurationProfiles](#findmobiledeviceconfigurationprofiles) - Finds all mobile device configuration profiles
* [findMobileDeviceConfigurationProfilesById](#findmobiledeviceconfigurationprofilesbyid) - Finds mobile device configuration profiles by ID
* [findMobileDeviceConfigurationProfilesByIdSubset](#findmobiledeviceconfigurationprofilesbyidsubset) - Finds a subset of data for a mobile device configuration profile by ID
* [findMobileDeviceConfigurationProfilesByName](#findmobiledeviceconfigurationprofilesbyname) - Finds mobile device configuration profiles by name
* [findMobileDeviceConfigurationProfilesByNameSubset](#findmobiledeviceconfigurationprofilesbynamesubset) - Finds a subset of data for mobile device configuration profiles by name
* [updateMobileDeviceConfigurationProfileById](#updatemobiledeviceconfigurationprofilebyid) - Updates an existing mobile device configuration profile by ID
* [updateMobileDeviceConfigurationProfileByName](#updatemobiledeviceconfigurationprofilebyname) - Updates an existing mobile device configuration profile by name

## createMobileDeviceConfigurationProfileById

Creates a new mobile device configuration profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceConfigurationProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.createMobileDeviceConfigurationProfileById({
  id: 29634,
}).then((res: CreateMobileDeviceConfigurationProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.CreateMobileDeviceConfigurationProfileByIdRequest](../../models/operations/createmobiledeviceconfigurationprofilebyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.CreateMobileDeviceConfigurationProfileByIdResponse](../../models/operations/createmobiledeviceconfigurationprofilebyidresponse.md)>**


## deleteMobileDeviceConfigurationProfileById

Deletes a mobile device configuration profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceConfigurationProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.deleteMobileDeviceConfigurationProfileById({
  id: 959143,
}).then((res: DeleteMobileDeviceConfigurationProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.DeleteMobileDeviceConfigurationProfileByIdRequest](../../models/operations/deletemobiledeviceconfigurationprofilebyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeleteMobileDeviceConfigurationProfileByIdResponse](../../models/operations/deletemobiledeviceconfigurationprofilebyidresponse.md)>**


## deleteMobileDeviceConfigurationProfileByName

Deletes a mobile device configuration profile by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceConfigurationProfileByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.deleteMobileDeviceConfigurationProfileByName({
  name: "Juan Parker",
}).then((res: DeleteMobileDeviceConfigurationProfileByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteMobileDeviceConfigurationProfileByNameRequest](../../models/operations/deletemobiledeviceconfigurationprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteMobileDeviceConfigurationProfileByNameResponse](../../models/operations/deletemobiledeviceconfigurationprofilebynameresponse.md)>**


## findMobileDeviceConfigurationProfiles

Finds all mobile device configuration profiles

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceConfigurationProfilesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfiles().then((res: FindMobileDeviceConfigurationProfilesResponse) => {
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

**Promise<[operations.FindMobileDeviceConfigurationProfilesResponse](../../models/operations/findmobiledeviceconfigurationprofilesresponse.md)>**


## findMobileDeviceConfigurationProfilesById

Finds mobile device configuration profiles by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceConfigurationProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesById({
  id: 29190,
}).then((res: FindMobileDeviceConfigurationProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.FindMobileDeviceConfigurationProfilesByIdRequest](../../models/operations/findmobiledeviceconfigurationprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindMobileDeviceConfigurationProfilesByIdResponse](../../models/operations/findmobiledeviceconfigurationprofilesbyidresponse.md)>**


## findMobileDeviceConfigurationProfilesByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceConfigurationProfilesByIdSubsetResponse,
  FindMobileDeviceConfigurationProfilesByIdSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesByIdSubset({
  id: 1207,
  subset: FindMobileDeviceConfigurationProfilesByIdSubsetSubset.Scope,
}).then((res: FindMobileDeviceConfigurationProfilesByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.FindMobileDeviceConfigurationProfilesByIdSubsetRequest](../../models/operations/findmobiledeviceconfigurationprofilesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.FindMobileDeviceConfigurationProfilesByIdSubsetResponse](../../models/operations/findmobiledeviceconfigurationprofilesbyidsubsetresponse.md)>**


## findMobileDeviceConfigurationProfilesByName

Finds mobile device configuration profiles by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceConfigurationProfilesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesByName({
  name: "Ruben Williamson",
}).then((res: FindMobileDeviceConfigurationProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.FindMobileDeviceConfigurationProfilesByNameRequest](../../models/operations/findmobiledeviceconfigurationprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceConfigurationProfilesByNameResponse](../../models/operations/findmobiledeviceconfigurationprofilesbynameresponse.md)>**


## findMobileDeviceConfigurationProfilesByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceConfigurationProfilesByNameSubsetResponse,
  FindMobileDeviceConfigurationProfilesByNameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesByNameSubset({
  name: "Ollie Dicki PhD",
  subset: FindMobileDeviceConfigurationProfilesByNameSubsetSubset.Scope,
}).then((res: FindMobileDeviceConfigurationProfilesByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.FindMobileDeviceConfigurationProfilesByNameSubsetRequest](../../models/operations/findmobiledeviceconfigurationprofilesbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.FindMobileDeviceConfigurationProfilesByNameSubsetResponse](../../models/operations/findmobiledeviceconfigurationprofilesbynamesubsetresponse.md)>**


## updateMobileDeviceConfigurationProfileById

Updates an existing mobile device configuration profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceConfigurationProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.updateMobileDeviceConfigurationProfileById({
  id: 770675,
}).then((res: UpdateMobileDeviceConfigurationProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.UpdateMobileDeviceConfigurationProfileByIdRequest](../../models/operations/updatemobiledeviceconfigurationprofilebyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.UpdateMobileDeviceConfigurationProfileByIdResponse](../../models/operations/updatemobiledeviceconfigurationprofilebyidresponse.md)>**


## updateMobileDeviceConfigurationProfileByName

Updates an existing mobile device configuration profile by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceConfigurationProfileByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceconfigurationprofiles.updateMobileDeviceConfigurationProfileByName({
  name: "Alton Hintz",
}).then((res: UpdateMobileDeviceConfigurationProfileByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.UpdateMobileDeviceConfigurationProfileByNameRequest](../../models/operations/updatemobiledeviceconfigurationprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.UpdateMobileDeviceConfigurationProfileByNameResponse](../../models/operations/updatemobiledeviceconfigurationprofilebynameresponse.md)>**

