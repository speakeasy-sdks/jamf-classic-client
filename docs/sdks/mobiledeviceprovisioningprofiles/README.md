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

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesById({
    id: 535000,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.CreateMobileDeviceProvisioningProfilesByIdRequest](../../sdk/models/operations/createmobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.CreateMobileDeviceProvisioningProfilesByIdResponse](../../sdk/models/operations/createmobiledeviceprovisioningprofilesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createMobileDeviceProvisioningProfilesByName

Creates a mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesByName({
    name: "<value>",
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
| `request`                                                                                                                                            | [operations.CreateMobileDeviceProvisioningProfilesByNameRequest](../../sdk/models/operations/createmobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.CreateMobileDeviceProvisioningProfilesByNameResponse](../../sdk/models/operations/createmobiledeviceprovisioningprofilesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createMobileDeviceProvisioningProfilesByUUID

Creates a mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.createMobileDeviceProvisioningProfilesByUUID({
    uuid: "13ea13b9-fc35-4832-beef-b81d409bacf7",
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
| `request`                                                                                                                                            | [operations.CreateMobileDeviceProvisioningProfilesByUUIDRequest](../../sdk/models/operations/createmobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.CreateMobileDeviceProvisioningProfilesByUUIDResponse](../../sdk/models/operations/createmobiledeviceprovisioningprofilesbyuuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteMobileDeviceProvisioningProfilesById

Deletes a mobile device provisioning profiles by id

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

  const res = await sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesById({
    id: 368967,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteMobileDeviceProvisioningProfilesByIdRequest](../../sdk/models/operations/deletemobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteMobileDeviceProvisioningProfilesByIdResponse](../../sdk/models/operations/deletemobiledeviceprovisioningprofilesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteMobileDeviceProvisioningProfilesByName

Deletes a mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesByName({
    name: "<value>",
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
| `request`                                                                                                                                            | [operations.DeleteMobileDeviceProvisioningProfilesByNameRequest](../../sdk/models/operations/deletemobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.DeleteMobileDeviceProvisioningProfilesByNameResponse](../../sdk/models/operations/deletemobiledeviceprovisioningprofilesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteMobileDeviceProvisioningProfilesByUUID

Deletes a mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.deleteMobileDeviceProvisioningProfilesByUUID({
    uuid: "1b5d663b-9383-442c-ae3e-a53127d259da",
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
| `request`                                                                                                                                            | [operations.DeleteMobileDeviceProvisioningProfilesByUUIDRequest](../../sdk/models/operations/deletemobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.DeleteMobileDeviceProvisioningProfilesByUUIDResponse](../../sdk/models/operations/deletemobiledeviceprovisioningprofilesbyuuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findMobileDeviceProvisioningProfiles

Finds all mobile device provisioning profiles

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfiles();

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

**Promise<[operations.FindMobileDeviceProvisioningProfilesResponse](../../sdk/models/operations/findmobiledeviceprovisioningprofilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findMobileDeviceProvisioningProfilesById

Finds a mobile device provisioning profiles by id

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesById({
    id: 627440,
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
| `request`                                                                                                                                    | [operations.FindMobileDeviceProvisioningProfilesByIdRequest](../../sdk/models/operations/findmobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindMobileDeviceProvisioningProfilesByIdResponse](../../sdk/models/operations/findmobiledeviceprovisioningprofilesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findMobileDeviceProvisioningProfilesByName

Finds a mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesByName({
    name: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.FindMobileDeviceProvisioningProfilesByNameRequest](../../sdk/models/operations/findmobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.FindMobileDeviceProvisioningProfilesByNameResponse](../../sdk/models/operations/findmobiledeviceprovisioningprofilesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findMobileDeviceProvisioningProfilesByUUID

Finds a mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.findMobileDeviceProvisioningProfilesByUUID({
    uuid: "f7d07a4b-4f13-400a-9a71-cfd522cce345",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.FindMobileDeviceProvisioningProfilesByUUIDRequest](../../sdk/models/operations/findmobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.FindMobileDeviceProvisioningProfilesByUUIDResponse](../../sdk/models/operations/findmobiledeviceprovisioningprofilesbyuuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMobileDeviceProvisioningProfilesById

Updates an existing mobile device provisioning profiles by id

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

  const res = await sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesById({
    id: 338588,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.UpdateMobileDeviceProvisioningProfilesByIdRequest](../../sdk/models/operations/updatemobiledeviceprovisioningprofilesbyidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.UpdateMobileDeviceProvisioningProfilesByIdResponse](../../sdk/models/operations/updatemobiledeviceprovisioningprofilesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMobileDeviceProvisioningProfilesByName

Updates an existing mobile device provisioning profiles by name

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

  const res = await sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesByName({
    name: "<value>",
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
| `request`                                                                                                                                            | [operations.UpdateMobileDeviceProvisioningProfilesByNameRequest](../../sdk/models/operations/updatemobiledeviceprovisioningprofilesbynamerequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.UpdateMobileDeviceProvisioningProfilesByNameResponse](../../sdk/models/operations/updatemobiledeviceprovisioningprofilesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMobileDeviceProvisioningProfilesByUUID

Updates an existing mobile device provisioning profiles by uuid

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

  const res = await sdk.mobiledeviceprovisioningprofiles.updateMobileDeviceProvisioningProfilesByUUID({
    uuid: "fa0f0ee4-a5c9-4284-80bb-3bc485e07e4d",
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
| `request`                                                                                                                                            | [operations.UpdateMobileDeviceProvisioningProfilesByUUIDRequest](../../sdk/models/operations/updatemobiledeviceprovisioningprofilesbyuuidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.UpdateMobileDeviceProvisioningProfilesByUUIDResponse](../../sdk/models/operations/updatemobiledeviceprovisioningprofilesbyuuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
