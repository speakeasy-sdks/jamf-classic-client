# Osxconfigurationprofiles
(*osxconfigurationprofiles*)

### Available Operations

* [createOsxConfigurationProfileById](#createosxconfigurationprofilebyid) - Creates a new OS X configuration profile by ID
* [deleteOsxConfigurationProfileById](#deleteosxconfigurationprofilebyid) - Deletes a OS X configuration profile by ID
* [deleteOsxConfigurationProfileByName](#deleteosxconfigurationprofilebyname) - Deletes a OS X configuration profile by name
* [findOsxConfigurationProfiles](#findosxconfigurationprofiles) - Finds all OS X configuration profiles
* [findOsxConfigurationProfilesById](#findosxconfigurationprofilesbyid) - Finds OS X configuration profiles by ID
* [findOsxConfigurationProfilesByIdSubset](#findosxconfigurationprofilesbyidsubset) - Finds a subset of data for an OS X configuration profile
* [findOsxConfigurationProfilesByName](#findosxconfigurationprofilesbyname) - Finds OS X configuration profiles by name
* [findOsxConfigurationProfilesByNameSubset](#findosxconfigurationprofilesbynamesubset) - Finds a subset of data for OS X configuration profiles by name
* [updateOsxConfigurationProfileById](#updateosxconfigurationprofilebyid) - Updates an existing OS X configuration profile by ID
* [updateOsxConfigurationProfileByName](#updateosxconfigurationprofilebyname) - Updates an existing OS X configuration profile by name

## createOsxConfigurationProfileById

Creates a new OS X configuration profile by ID

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

  const res = await sdk.osxconfigurationprofiles.createOsxConfigurationProfileById({
    id: 774029,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.CreateOsxConfigurationProfileByIdRequest](../../models/operations/createosxconfigurationprofilebyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.CreateOsxConfigurationProfileByIdResponse](../../models/operations/createosxconfigurationprofilebyidresponse.md)>**


## deleteOsxConfigurationProfileById

Deletes a OS X configuration profile by ID

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

  const res = await sdk.osxconfigurationprofiles.deleteOsxConfigurationProfileById({
    id: 564754,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeleteOsxConfigurationProfileByIdRequest](../../models/operations/deleteosxconfigurationprofilebyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeleteOsxConfigurationProfileByIdResponse](../../models/operations/deleteosxconfigurationprofilebyidresponse.md)>**


## deleteOsxConfigurationProfileByName

Deletes a OS X configuration profile by name

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

  const res = await sdk.osxconfigurationprofiles.deleteOsxConfigurationProfileByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteOsxConfigurationProfileByNameRequest](../../models/operations/deleteosxconfigurationprofilebynamerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteOsxConfigurationProfileByNameResponse](../../models/operations/deleteosxconfigurationprofilebynameresponse.md)>**


## findOsxConfigurationProfiles

Finds all OS X configuration profiles

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

  const res = await sdk.osxconfigurationprofiles.findOsxConfigurationProfiles();

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

**Promise<[operations.FindOsxConfigurationProfilesResponse](../../models/operations/findosxconfigurationprofilesresponse.md)>**


## findOsxConfigurationProfilesById

Finds OS X configuration profiles by ID

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

  const res = await sdk.osxconfigurationprofiles.findOsxConfigurationProfilesById({
    id: 118508,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindOsxConfigurationProfilesByIdRequest](../../models/operations/findosxconfigurationprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindOsxConfigurationProfilesByIdResponse](../../models/operations/findosxconfigurationprofilesbyidresponse.md)>**


## findOsxConfigurationProfilesByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindOsxConfigurationProfilesByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.osxconfigurationprofiles.findOsxConfigurationProfilesByIdSubset({
    id: 370266,
    subset: FindOsxConfigurationProfilesByIdSubsetSubset.Scope,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.FindOsxConfigurationProfilesByIdSubsetRequest](../../models/operations/findosxconfigurationprofilesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.FindOsxConfigurationProfilesByIdSubsetResponse](../../models/operations/findosxconfigurationprofilesbyidsubsetresponse.md)>**


## findOsxConfigurationProfilesByName

Finds OS X configuration profiles by name

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

  const res = await sdk.osxconfigurationprofiles.findOsxConfigurationProfilesByName({
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
| `request`                                                                                                                    | [operations.FindOsxConfigurationProfilesByNameRequest](../../models/operations/findosxconfigurationprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindOsxConfigurationProfilesByNameResponse](../../models/operations/findosxconfigurationprofilesbynameresponse.md)>**


## findOsxConfigurationProfilesByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindOsxConfigurationProfilesByNameSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.osxconfigurationprofiles.findOsxConfigurationProfilesByNameSubset({
    name: "string",
    subset: FindOsxConfigurationProfilesByNameSubsetSubset.General,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindOsxConfigurationProfilesByNameSubsetRequest](../../models/operations/findosxconfigurationprofilesbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindOsxConfigurationProfilesByNameSubsetResponse](../../models/operations/findosxconfigurationprofilesbynamesubsetresponse.md)>**


## updateOsxConfigurationProfileById

Updates an existing OS X configuration profile by ID

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

  const res = await sdk.osxconfigurationprofiles.updateOsxConfigurationProfileById({
    id: 633054,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.UpdateOsxConfigurationProfileByIdRequest](../../models/operations/updateosxconfigurationprofilebyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.UpdateOsxConfigurationProfileByIdResponse](../../models/operations/updateosxconfigurationprofilebyidresponse.md)>**


## updateOsxConfigurationProfileByName

Updates an existing OS X configuration profile by name

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

  const res = await sdk.osxconfigurationprofiles.updateOsxConfigurationProfileByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.UpdateOsxConfigurationProfileByNameRequest](../../models/operations/updateosxconfigurationprofilebynamerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.UpdateOsxConfigurationProfileByNameResponse](../../models/operations/updateosxconfigurationprofilebynameresponse.md)>**

