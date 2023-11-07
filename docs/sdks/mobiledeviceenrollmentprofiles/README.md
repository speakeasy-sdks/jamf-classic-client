# Mobiledeviceenrollmentprofiles
(*.mobiledeviceenrollmentprofiles*)

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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.createMobileDeviceEnrollmentProfilesById({
    id: 791519,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileById({
    id: 463513,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileByInvitation({
    invitation: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfiles();


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

**Promise<[operations.FindMobileDeviceEnrollmentProfilesResponse](../../models/operations/findmobiledeviceenrollmentprofilesresponse.md)>**


## findMobileDeviceEnrollmentProfilesById

Finds mobile device enrollment profiles by ID

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

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesById({
    id: 635234,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceEnrollmentProfilesByIdSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByIdSubset({
    id: 793930,
    subset: FindMobileDeviceEnrollmentProfilesByIdSubsetPathParamSubset.Purchasing,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByInvitation({
    invitation: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceEnrollmentProfilesByNameSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByNameSubset({
    name: "string",
    subset: FindMobileDeviceEnrollmentProfilesByNameSubsetPathParamSubset.Purchasing,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileById({
    id: 623408,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileByInvitation({
    invitation: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.UpdateMobileDeviceEnrollmentProfileByNameRequest](../../models/operations/updatemobiledeviceenrollmentprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.UpdateMobileDeviceEnrollmentProfileByNameResponse](../../models/operations/updatemobiledeviceenrollmentprofilebynameresponse.md)>**

