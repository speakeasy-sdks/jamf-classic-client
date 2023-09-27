# Mobiledeviceenrollmentprofiles
(*mobiledeviceenrollmentprofiles*)

### Available Operations

* [createMobileDeviceEnrollmentProfilesById](#createmobiledeviceenrollmentprofilesbyid) - Creates a new mobile device enrollment profile by ID
* [deleteMobileDeviceEnrollmentProfileById](#deletemobiledeviceenrollmentprofilebyid) - Deletes a mobile device enrollment profile by ID
* [deleteMobileDeviceEnrollmentProfileByInvitation](#deletemobiledeviceenrollmentprofilebyinvitation) - Deletes a mobile device enrollment profile by invitation
* [deleteMobileDeviceEnrollmentProfileByName](#deletemobiledeviceenrollmentprofilebyname) - Deletes a mobile device enrollment profile by name
* [findMobileDeviceEnrollmentProfiles](#findmobiledeviceenrollmentprofiles) - Finds all mobile device enrollment profiles
* [findMobileDeviceEnrollmentProfilesById](#findmobiledeviceenrollmentprofilesbyid) - Finds mobile device enrollment profiles by ID
* [findMobileDeviceEnrollmentProfilesByIdSubset](#findmobiledeviceenrollmentprofilesbyidsubset) - Finds a subset of data for an enrollment profile
* [findMobileDeviceEnrollmentProfilesByInvitation](#findmobiledeviceenrollmentprofilesbyinvitation) - Finds mobile device enrollment profiles by invitation
* [findMobileDeviceEnrollmentProfilesByName](#findmobiledeviceenrollmentprofilesbyname) - Finds mobile device enrollment profiles by name
* [findMobileDeviceEnrollmentProfilesByNameSubset](#findmobiledeviceenrollmentprofilesbynamesubset) - Finds a subset of data for mobile device enrollment profiles by name
* [updateMobileDeviceEnrollmentProfileById](#updatemobiledeviceenrollmentprofilebyid) - Updates an existing mobile device enrollment profile by ID
* [updateMobileDeviceEnrollmentProfileByInvitation](#updatemobiledeviceenrollmentprofilebyinvitation) - Updates an existing mobile device enrollment profile by invitation
* [updateMobileDeviceEnrollmentProfileByName](#updatemobiledeviceenrollmentprofilebyname) - Updates an existing mobile device enrollment profile by name

## createMobileDeviceEnrollmentProfilesById

Creates a new mobile device enrollment profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceEnrollmentProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.createMobileDeviceEnrollmentProfilesById({
  id: 307376,
}).then((res: CreateMobileDeviceEnrollmentProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.CreateMobileDeviceEnrollmentProfilesByIdRequest](../../models/operations/createmobiledeviceenrollmentprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.CreateMobileDeviceEnrollmentProfilesByIdResponse](../../models/operations/createmobiledeviceenrollmentprofilesbyidresponse.md)>**


## deleteMobileDeviceEnrollmentProfileById

Deletes a mobile device enrollment profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceEnrollmentProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileById({
  id: 80532,
}).then((res: DeleteMobileDeviceEnrollmentProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteMobileDeviceEnrollmentProfileByIdRequest](../../models/operations/deletemobiledeviceenrollmentprofilebyidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteMobileDeviceEnrollmentProfileByIdResponse](../../models/operations/deletemobiledeviceenrollmentprofilebyidresponse.md)>**


## deleteMobileDeviceEnrollmentProfileByInvitation

Deletes a mobile device enrollment profile by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceEnrollmentProfileByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileByInvitation({
  invitation: "deleniti",
}).then((res: DeleteMobileDeviceEnrollmentProfileByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.DeleteMobileDeviceEnrollmentProfileByInvitationRequest](../../models/operations/deletemobiledeviceenrollmentprofilebyinvitationrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.DeleteMobileDeviceEnrollmentProfileByInvitationResponse](../../models/operations/deletemobiledeviceenrollmentprofilebyinvitationresponse.md)>**


## deleteMobileDeviceEnrollmentProfileByName

Deletes a mobile device enrollment profile by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceEnrollmentProfileByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileByName({
  name: "Mr. Hazel Ernser I",
}).then((res: DeleteMobileDeviceEnrollmentProfileByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.DeleteMobileDeviceEnrollmentProfileByNameRequest](../../models/operations/deletemobiledeviceenrollmentprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.DeleteMobileDeviceEnrollmentProfileByNameResponse](../../models/operations/deletemobiledeviceenrollmentprofilebynameresponse.md)>**


## findMobileDeviceEnrollmentProfiles

Finds all mobile device enrollment profiles

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceEnrollmentProfilesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfiles().then((res: FindMobileDeviceEnrollmentProfilesResponse) => {
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

**Promise<[operations.FindMobileDeviceEnrollmentProfilesResponse](../../models/operations/findmobiledeviceenrollmentprofilesresponse.md)>**


## findMobileDeviceEnrollmentProfilesById

Finds mobile device enrollment profiles by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceEnrollmentProfilesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesById({
  id: 144286,
}).then((res: FindMobileDeviceEnrollmentProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.FindMobileDeviceEnrollmentProfilesByIdRequest](../../models/operations/findmobiledeviceenrollmentprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByIdResponse](../../models/operations/findmobiledeviceenrollmentprofilesbyidresponse.md)>**


## findMobileDeviceEnrollmentProfilesByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceEnrollmentProfilesByIdSubsetResponse,
  FindMobileDeviceEnrollmentProfilesByIdSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByIdSubset({
  id: 66149,
  subset: FindMobileDeviceEnrollmentProfilesByIdSubsetSubset.Purchasing,
}).then((res: FindMobileDeviceEnrollmentProfilesByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.FindMobileDeviceEnrollmentProfilesByIdSubsetRequest](../../models/operations/findmobiledeviceenrollmentprofilesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByIdSubsetResponse](../../models/operations/findmobiledeviceenrollmentprofilesbyidsubsetresponse.md)>**


## findMobileDeviceEnrollmentProfilesByInvitation

Finds mobile device enrollment profiles by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceEnrollmentProfilesByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByInvitation({
  invitation: "quae",
}).then((res: FindMobileDeviceEnrollmentProfilesByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.FindMobileDeviceEnrollmentProfilesByInvitationRequest](../../models/operations/findmobiledeviceenrollmentprofilesbyinvitationrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByInvitationResponse](../../models/operations/findmobiledeviceenrollmentprofilesbyinvitationresponse.md)>**


## findMobileDeviceEnrollmentProfilesByName

Finds mobile device enrollment profiles by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceEnrollmentProfilesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByName({
  name: "Janis Hills V",
}).then((res: FindMobileDeviceEnrollmentProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindMobileDeviceEnrollmentProfilesByNameRequest](../../models/operations/findmobiledeviceenrollmentprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByNameResponse](../../models/operations/findmobiledeviceenrollmentprofilesbynameresponse.md)>**


## findMobileDeviceEnrollmentProfilesByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceEnrollmentProfilesByNameSubsetResponse,
  FindMobileDeviceEnrollmentProfilesByNameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByNameSubset({
  name: "Edmund Torp",
  subset: FindMobileDeviceEnrollmentProfilesByNameSubsetSubset.General,
}).then((res: FindMobileDeviceEnrollmentProfilesByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.FindMobileDeviceEnrollmentProfilesByNameSubsetRequest](../../models/operations/findmobiledeviceenrollmentprofilesbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByNameSubsetResponse](../../models/operations/findmobiledeviceenrollmentprofilesbynamesubsetresponse.md)>**


## updateMobileDeviceEnrollmentProfileById

Updates an existing mobile device enrollment profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceEnrollmentProfileByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileById({
  id: 332191,
}).then((res: UpdateMobileDeviceEnrollmentProfileByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.UpdateMobileDeviceEnrollmentProfileByIdRequest](../../models/operations/updatemobiledeviceenrollmentprofilebyidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.UpdateMobileDeviceEnrollmentProfileByIdResponse](../../models/operations/updatemobiledeviceenrollmentprofilebyidresponse.md)>**


## updateMobileDeviceEnrollmentProfileByInvitation

Updates an existing mobile device enrollment profile by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceEnrollmentProfileByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileByInvitation({
  invitation: "nesciunt",
}).then((res: UpdateMobileDeviceEnrollmentProfileByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.UpdateMobileDeviceEnrollmentProfileByInvitationRequest](../../models/operations/updatemobiledeviceenrollmentprofilebyinvitationrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.UpdateMobileDeviceEnrollmentProfileByInvitationResponse](../../models/operations/updatemobiledeviceenrollmentprofilebyinvitationresponse.md)>**


## updateMobileDeviceEnrollmentProfileByName

Updates an existing mobile device enrollment profile by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceEnrollmentProfileByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileByName({
  name: "Andre Kautzer",
}).then((res: UpdateMobileDeviceEnrollmentProfileByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.UpdateMobileDeviceEnrollmentProfileByNameRequest](../../models/operations/updatemobiledeviceenrollmentprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.UpdateMobileDeviceEnrollmentProfileByNameResponse](../../models/operations/updatemobiledeviceenrollmentprofilebynameresponse.md)>**

