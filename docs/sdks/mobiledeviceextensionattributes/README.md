# Mobiledeviceextensionattributes
(*mobiledeviceextensionattributes*)

### Available Operations

* [createMobiledeviceextensionattributeById](#createmobiledeviceextensionattributebyid) - Creates a new mobile device extension attribute by ID
* [deleteMobiledeviceextensionattributeById](#deletemobiledeviceextensionattributebyid) - Deletes a mobile device extension attribute by ID
* [deleteMobiledeviceextensionattributeByName](#deletemobiledeviceextensionattributebyname) - Deletes a mobile device extension attribute by name
* [findMobiledeviceextensionattributes](#findmobiledeviceextensionattributes) - Finds all mobile device extension attributes
* [findMobiledeviceextensionattributesById](#findmobiledeviceextensionattributesbyid) - Finds mobile device extension attributes by ID
* [findMobiledeviceextensionattributesByName](#findmobiledeviceextensionattributesbyname) - Finds mobiledeviceextensionattributes by name
* [updateMobiledeviceextensionattributeById](#updatemobiledeviceextensionattributebyid) - Updates an existing mobile device extension attribute by ID
* [updateMobiledeviceextensionattributeByName](#updatemobiledeviceextensionattributebyname) - Updates an existing mobile device extension attribute by name

## createMobiledeviceextensionattributeById

Creates a new mobile device extension attribute by ID

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

  const res = await sdk.mobiledeviceextensionattributes.createMobiledeviceextensionattributeById({
    id: 775079,
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
| `request`                                                                                                                                    | [operations.CreateMobiledeviceextensionattributeByIdRequest](../../sdk/models/operations/createmobiledeviceextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.CreateMobiledeviceextensionattributeByIdResponse](../../sdk/models/operations/createmobiledeviceextensionattributebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteMobiledeviceextensionattributeById

Deletes a mobile device extension attribute by ID

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

  const res = await sdk.mobiledeviceextensionattributes.deleteMobiledeviceextensionattributeById({
    id: 187773,
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
| `request`                                                                                                                                    | [operations.DeleteMobiledeviceextensionattributeByIdRequest](../../sdk/models/operations/deletemobiledeviceextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeleteMobiledeviceextensionattributeByIdResponse](../../sdk/models/operations/deletemobiledeviceextensionattributebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteMobiledeviceextensionattributeByName

Deletes a mobile device extension attribute by name

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

  const res = await sdk.mobiledeviceextensionattributes.deleteMobiledeviceextensionattributeByName({
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
| `request`                                                                                                                                        | [operations.DeleteMobiledeviceextensionattributeByNameRequest](../../sdk/models/operations/deletemobiledeviceextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteMobiledeviceextensionattributeByNameResponse](../../sdk/models/operations/deletemobiledeviceextensionattributebynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findMobiledeviceextensionattributes

Finds all mobile device extension attributes

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

  const res = await sdk.mobiledeviceextensionattributes.findMobiledeviceextensionattributes();

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

**Promise<[operations.FindMobiledeviceextensionattributesResponse](../../sdk/models/operations/findmobiledeviceextensionattributesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findMobiledeviceextensionattributesById

Finds mobile device extension attributes by ID

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

  const res = await sdk.mobiledeviceextensionattributes.findMobiledeviceextensionattributesById({
    id: 629314,
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
| `request`                                                                                                                                  | [operations.FindMobiledeviceextensionattributesByIdRequest](../../sdk/models/operations/findmobiledeviceextensionattributesbyidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindMobiledeviceextensionattributesByIdResponse](../../sdk/models/operations/findmobiledeviceextensionattributesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findMobiledeviceextensionattributesByName

Finds mobiledeviceextensionattributes by name

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

  const res = await sdk.mobiledeviceextensionattributes.findMobiledeviceextensionattributesByName({
    name: "<value>",
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
| `request`                                                                                                                                      | [operations.FindMobiledeviceextensionattributesByNameRequest](../../sdk/models/operations/findmobiledeviceextensionattributesbynamerequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.FindMobiledeviceextensionattributesByNameResponse](../../sdk/models/operations/findmobiledeviceextensionattributesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMobiledeviceextensionattributeById

Updates an existing mobile device extension attribute by ID

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

  const res = await sdk.mobiledeviceextensionattributes.updateMobiledeviceextensionattributeById({
    id: 268156,
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
| `request`                                                                                                                                    | [operations.UpdateMobiledeviceextensionattributeByIdRequest](../../sdk/models/operations/updatemobiledeviceextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.UpdateMobiledeviceextensionattributeByIdResponse](../../sdk/models/operations/updatemobiledeviceextensionattributebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMobiledeviceextensionattributeByName

Updates an existing mobile device extension attribute by name

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

  const res = await sdk.mobiledeviceextensionattributes.updateMobiledeviceextensionattributeByName({
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
| `request`                                                                                                                                        | [operations.UpdateMobiledeviceextensionattributeByNameRequest](../../sdk/models/operations/updatemobiledeviceextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.UpdateMobiledeviceextensionattributeByNameResponse](../../sdk/models/operations/updatemobiledeviceextensionattributebynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
