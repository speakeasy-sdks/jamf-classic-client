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

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.createMobileDeviceEnrollmentProfilesById({
    id: 791519,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.CreateMobileDeviceEnrollmentProfilesByIdRequest](../../sdk/models/operations/createmobiledeviceenrollmentprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.CreateMobileDeviceEnrollmentProfilesByIdResponse](../../sdk/models/operations/createmobiledeviceenrollmentprofilesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteMobileDeviceEnrollmentProfileById

Deletes a mobile device enrollment profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileById({
    id: 463513,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.DeleteMobileDeviceEnrollmentProfileByIdRequest](../../sdk/models/operations/deletemobiledeviceenrollmentprofilebyidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.DeleteMobileDeviceEnrollmentProfileByIdResponse](../../sdk/models/operations/deletemobiledeviceenrollmentprofilebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteMobileDeviceEnrollmentProfileByInvitation

Deletes a mobile device enrollment profile by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileByInvitation({
    invitation: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.DeleteMobileDeviceEnrollmentProfileByInvitationRequest](../../sdk/models/operations/deletemobiledeviceenrollmentprofilebyinvitationrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.DeleteMobileDeviceEnrollmentProfileByInvitationResponse](../../sdk/models/operations/deletemobiledeviceenrollmentprofilebyinvitationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteMobileDeviceEnrollmentProfileByName

Deletes a mobile device enrollment profile by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.deleteMobileDeviceEnrollmentProfileByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.DeleteMobileDeviceEnrollmentProfileByNameRequest](../../sdk/models/operations/deletemobiledeviceenrollmentprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.DeleteMobileDeviceEnrollmentProfileByNameResponse](../../sdk/models/operations/deletemobiledeviceenrollmentprofilebynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceEnrollmentProfiles

Finds all mobile device enrollment profiles

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfiles();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesResponse](../../sdk/models/operations/findmobiledeviceenrollmentprofilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceEnrollmentProfilesById

Finds mobile device enrollment profiles by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesById({
    id: 635234,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindMobileDeviceEnrollmentProfilesByIdRequest](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByIdResponse](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceEnrollmentProfilesByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceEnrollmentProfilesByIdSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByIdSubset({
    id: 793930,
    subset: FindMobileDeviceEnrollmentProfilesByIdSubsetPathParamSubset.Purchasing,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.FindMobileDeviceEnrollmentProfilesByIdSubsetRequest](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByIdSubsetResponse](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbyidsubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceEnrollmentProfilesByInvitation

Finds mobile device enrollment profiles by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByInvitation({
    invitation: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.FindMobileDeviceEnrollmentProfilesByInvitationRequest](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbyinvitationrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByInvitationResponse](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbyinvitationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceEnrollmentProfilesByName

Finds mobile device enrollment profiles by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.FindMobileDeviceEnrollmentProfilesByNameRequest](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByNameResponse](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceEnrollmentProfilesByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceEnrollmentProfilesByNameSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.findMobileDeviceEnrollmentProfilesByNameSubset({
    name: "string",
    subset: FindMobileDeviceEnrollmentProfilesByNameSubsetPathParamSubset.Purchasing,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.FindMobileDeviceEnrollmentProfilesByNameSubsetRequest](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.FindMobileDeviceEnrollmentProfilesByNameSubsetResponse](../../sdk/models/operations/findmobiledeviceenrollmentprofilesbynamesubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateMobileDeviceEnrollmentProfileById

Updates an existing mobile device enrollment profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileById({
    id: 623408,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.UpdateMobileDeviceEnrollmentProfileByIdRequest](../../sdk/models/operations/updatemobiledeviceenrollmentprofilebyidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.UpdateMobileDeviceEnrollmentProfileByIdResponse](../../sdk/models/operations/updatemobiledeviceenrollmentprofilebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateMobileDeviceEnrollmentProfileByInvitation

Updates an existing mobile device enrollment profile by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileByInvitation({
    invitation: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.UpdateMobileDeviceEnrollmentProfileByInvitationRequest](../../sdk/models/operations/updatemobiledeviceenrollmentprofilebyinvitationrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.UpdateMobileDeviceEnrollmentProfileByInvitationResponse](../../sdk/models/operations/updatemobiledeviceenrollmentprofilebyinvitationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateMobileDeviceEnrollmentProfileByName

Updates an existing mobile device enrollment profile by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceenrollmentprofiles.updateMobileDeviceEnrollmentProfileByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.UpdateMobileDeviceEnrollmentProfileByNameRequest](../../sdk/models/operations/updatemobiledeviceenrollmentprofilebynamerequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.UpdateMobileDeviceEnrollmentProfileByNameResponse](../../sdk/models/operations/updatemobiledeviceenrollmentprofilebynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
