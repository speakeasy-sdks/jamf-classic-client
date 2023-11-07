# Mobiledeviceconfigurationprofiles
(*.mobiledeviceconfigurationprofiles*)

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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.createMobileDeviceConfigurationProfileById({
    id: 357736,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.deleteMobileDeviceConfigurationProfileById({
    id: 401787,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.deleteMobileDeviceConfigurationProfileByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfiles();


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

**Promise<[operations.FindMobileDeviceConfigurationProfilesResponse](../../models/operations/findmobiledeviceconfigurationprofilesresponse.md)>**


## findMobileDeviceConfigurationProfilesById

Finds mobile device configuration profiles by ID

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

  const res = await sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesById({
    id: 994932,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceConfigurationProfilesByIdSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesByIdSubset({
    id: 1927,
    subset: FindMobileDeviceConfigurationProfilesByIdSubsetPathParamSubset.Scope,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceConfigurationProfilesByNameSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.findMobileDeviceConfigurationProfilesByNameSubset({
    name: "string",
    subset: FindMobileDeviceConfigurationProfilesByNameSubsetPathParamSubset.General,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.updateMobileDeviceConfigurationProfileById({
    id: 879870,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceconfigurationprofiles.updateMobileDeviceConfigurationProfileByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.UpdateMobileDeviceConfigurationProfileByNameRequest](../../models/operations/updatemobiledeviceconfigurationprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.UpdateMobileDeviceConfigurationProfileByNameResponse](../../models/operations/updatemobiledeviceconfigurationprofilebynameresponse.md)>**

