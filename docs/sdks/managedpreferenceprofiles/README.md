# managedpreferenceprofiles

### Available Operations

* [createManagedPreferenceProfileById](#createmanagedpreferenceprofilebyid) - Creates a new managed preference profile by ID
* [deleteManagedPreferenceProfilesById](#deletemanagedpreferenceprofilesbyid) - Deletes a managed preference profiles by ID
* [deleteManagedPreferenceProfilesByName](#deletemanagedpreferenceprofilesbyname) - Deletes a managed preference profiles by name
* [findManagedPreferenceProfiles](#findmanagedpreferenceprofiles) - Finds all managed preference profiles
* [findManagedPreferenceProfilesById](#findmanagedpreferenceprofilesbyid) - Finds managed preference profiles by ID
* [findManagedPreferenceProfilesByIdSubset](#findmanagedpreferenceprofilesbyidsubset) - Finds a subset of data for a managed preference profile by ID
* [findManagedPreferenceProfilesByName](#findmanagedpreferenceprofilesbyname) - Finds managed preference profiles by name
* [findManagedPreferenceProfilesByNameSubset](#findmanagedpreferenceprofilesbynamesubset) - Finds a subset of data for managed preference profiles by name
* [updateManagedPreferenceProfilesById](#updatemanagedpreferenceprofilesbyid) - Updates an existing managed preference profiles by ID
* [updateManagedPreferenceProfilesByName](#updatemanagedpreferenceprofilesbyname) - Updates an existing managed preference profiles by name

## createManagedPreferenceProfileById

Creates a new managed preference profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateManagedPreferenceProfileByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.createManagedPreferenceProfileById({
  id: 62636,
}).then((res: CreateManagedPreferenceProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.CreateManagedPreferenceProfileByIdRequest](../../models/operations/createmanagedpreferenceprofilebyidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.CreateManagedPreferenceProfileByIdResponse](../../models/operations/createmanagedpreferenceprofilebyidresponse.md)>**


## deleteManagedPreferenceProfilesById

Deletes a managed preference profiles by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteManagedPreferenceProfilesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.deleteManagedPreferenceProfilesById({
  id: 21688,
}).then((res: DeleteManagedPreferenceProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteManagedPreferenceProfilesByIdRequest](../../models/operations/deletemanagedpreferenceprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteManagedPreferenceProfilesByIdResponse](../../models/operations/deletemanagedpreferenceprofilesbyidresponse.md)>**


## deleteManagedPreferenceProfilesByName

Deletes a managed preference profiles by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteManagedPreferenceProfilesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.deleteManagedPreferenceProfilesByName({
  name: "Judy Kemmer",
}).then((res: DeleteManagedPreferenceProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeleteManagedPreferenceProfilesByNameRequest](../../models/operations/deletemanagedpreferenceprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeleteManagedPreferenceProfilesByNameResponse](../../models/operations/deletemanagedpreferenceprofilesbynameresponse.md)>**


## findManagedPreferenceProfiles

Finds all managed preference profiles

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindManagedPreferenceProfilesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.findManagedPreferenceProfiles().then((res: FindManagedPreferenceProfilesResponse) => {
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

**Promise<[operations.FindManagedPreferenceProfilesResponse](../../models/operations/findmanagedpreferenceprofilesresponse.md)>**


## findManagedPreferenceProfilesById

Finds managed preference profiles by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindManagedPreferenceProfilesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.findManagedPreferenceProfilesById({
  id: 871083,
}).then((res: FindManagedPreferenceProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.FindManagedPreferenceProfilesByIdRequest](../../models/operations/findmanagedpreferenceprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindManagedPreferenceProfilesByIdResponse](../../models/operations/findmanagedpreferenceprofilesbyidresponse.md)>**


## findManagedPreferenceProfilesByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf";
import {
  FindManagedPreferenceProfilesByIdSubsetResponse,
  FindManagedPreferenceProfilesByIdSubsetSubset,
} from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.findManagedPreferenceProfilesByIdSubset({
  id: 773084,
  subset: FindManagedPreferenceProfilesByIdSubsetSubset.General,
}).then((res: FindManagedPreferenceProfilesByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindManagedPreferenceProfilesByIdSubsetRequest](../../models/operations/findmanagedpreferenceprofilesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindManagedPreferenceProfilesByIdSubsetResponse](../../models/operations/findmanagedpreferenceprofilesbyidsubsetresponse.md)>**


## findManagedPreferenceProfilesByName

Finds managed preference profiles by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindManagedPreferenceProfilesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.findManagedPreferenceProfilesByName({
  name: "Andre Carroll V",
}).then((res: FindManagedPreferenceProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindManagedPreferenceProfilesByNameRequest](../../models/operations/findmanagedpreferenceprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindManagedPreferenceProfilesByNameResponse](../../models/operations/findmanagedpreferenceprofilesbynameresponse.md)>**


## findManagedPreferenceProfilesByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf";
import {
  FindManagedPreferenceProfilesByNameSubsetResponse,
  FindManagedPreferenceProfilesByNameSubsetSubset,
} from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.findManagedPreferenceProfilesByNameSubset({
  name: "Darin Rodriguez",
  subset: FindManagedPreferenceProfilesByNameSubsetSubset.General,
}).then((res: FindManagedPreferenceProfilesByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.FindManagedPreferenceProfilesByNameSubsetRequest](../../models/operations/findmanagedpreferenceprofilesbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindManagedPreferenceProfilesByNameSubsetResponse](../../models/operations/findmanagedpreferenceprofilesbynamesubsetresponse.md)>**


## updateManagedPreferenceProfilesById

Updates an existing managed preference profiles by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateManagedPreferenceProfilesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.updateManagedPreferenceProfilesById({
  id: 935833,
}).then((res: UpdateManagedPreferenceProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.UpdateManagedPreferenceProfilesByIdRequest](../../models/operations/updatemanagedpreferenceprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.UpdateManagedPreferenceProfilesByIdResponse](../../models/operations/updatemanagedpreferenceprofilesbyidresponse.md)>**


## updateManagedPreferenceProfilesByName

Updates an existing managed preference profiles by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateManagedPreferenceProfilesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.managedpreferenceprofiles.updateManagedPreferenceProfilesByName({
  name: "Cary Toy",
}).then((res: UpdateManagedPreferenceProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.UpdateManagedPreferenceProfilesByNameRequest](../../models/operations/updatemanagedpreferenceprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.UpdateManagedPreferenceProfilesByNameResponse](../../models/operations/updatemanagedpreferenceprofilesbynameresponse.md)>**
