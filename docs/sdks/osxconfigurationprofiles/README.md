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
import { CreateOsxConfigurationProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.createOsxConfigurationProfileById({
  id: 937117,
}).then((res: CreateOsxConfigurationProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteOsxConfigurationProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.deleteOsxConfigurationProfileById({
  id: 239337,
}).then((res: DeleteOsxConfigurationProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteOsxConfigurationProfileByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.deleteOsxConfigurationProfileByName({
  name: "Otis Grady",
}).then((res: DeleteOsxConfigurationProfileByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindOsxConfigurationProfilesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.findOsxConfigurationProfiles().then((res: FindOsxConfigurationProfilesResponse) => {
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

**Promise<[operations.FindOsxConfigurationProfilesResponse](../../models/operations/findosxconfigurationprofilesresponse.md)>**


## findOsxConfigurationProfilesById

Finds OS X configuration profiles by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindOsxConfigurationProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.findOsxConfigurationProfilesById({
  id: 106255,
}).then((res: FindOsxConfigurationProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  FindOsxConfigurationProfilesByIdSubsetResponse,
  FindOsxConfigurationProfilesByIdSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.findOsxConfigurationProfilesByIdSubset({
  id: 600213,
  subset: FindOsxConfigurationProfilesByIdSubsetSubset.Scope,
}).then((res: FindOsxConfigurationProfilesByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindOsxConfigurationProfilesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.findOsxConfigurationProfilesByName({
  name: "Kent Corkery",
}).then((res: FindOsxConfigurationProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  FindOsxConfigurationProfilesByNameSubsetResponse,
  FindOsxConfigurationProfilesByNameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.findOsxConfigurationProfilesByNameSubset({
  name: "Cristina Nienow",
  subset: FindOsxConfigurationProfilesByNameSubsetSubset.SelfService,
}).then((res: FindOsxConfigurationProfilesByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateOsxConfigurationProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.updateOsxConfigurationProfileById({
  id: 359111,
}).then((res: UpdateOsxConfigurationProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateOsxConfigurationProfileByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.osxconfigurationprofiles.updateOsxConfigurationProfileByName({
  name: "Kristy Lemke",
}).then((res: UpdateOsxConfigurationProfileByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.UpdateOsxConfigurationProfileByNameRequest](../../models/operations/updateosxconfigurationprofilebynamerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.UpdateOsxConfigurationProfileByNameResponse](../../models/operations/updateosxconfigurationprofilebynameresponse.md)>**

