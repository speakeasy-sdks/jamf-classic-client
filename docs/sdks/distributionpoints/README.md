# Distributionpoints
(*distributionpoints*)

### Available Operations

* [createDistributionPointById](#createdistributionpointbyid) - Creates a new distribution point by ID
* [deleteDistributionPointById](#deletedistributionpointbyid) - Deletes a distribution point by ID
* [deleteDistributionPointByName](#deletedistributionpointbyname) - Deletes a distribution point by name
* [findDistributionPoints](#finddistributionpoints) - Finds all distribution points
* [findDistributionPointsById](#finddistributionpointsbyid) - Finds distribution points by ID
* [findDistributionPointsByName](#finddistributionpointsbyname) - Finds distribution points by name
* [updateDistributionPointById](#updatedistributionpointbyid) - Updates an existing distribution point by ID
* [updateDistributionPointByName](#updatedistributionpointbyname) - Updates an existing distribution point by name

## createDistributionPointById

Creates a new distribution point by ID

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

  const res = await sdk.distributionpoints.createDistributionPointById({
    id: 323965,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.CreateDistributionPointByIdRequest](../../sdk/models/operations/createdistributionpointbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.CreateDistributionPointByIdResponse](../../sdk/models/operations/createdistributionpointbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteDistributionPointById

Deletes a distribution point by ID

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

  const res = await sdk.distributionpoints.deleteDistributionPointById({
    id: 378774,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteDistributionPointByIdRequest](../../sdk/models/operations/deletedistributionpointbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteDistributionPointByIdResponse](../../sdk/models/operations/deletedistributionpointbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteDistributionPointByName

Deletes a distribution point by name

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

  const res = await sdk.distributionpoints.deleteDistributionPointByName({
    name: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteDistributionPointByNameRequest](../../sdk/models/operations/deletedistributionpointbynamerequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteDistributionPointByNameResponse](../../sdk/models/operations/deletedistributionpointbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findDistributionPoints

Finds all distribution points

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

  const res = await sdk.distributionpoints.findDistributionPoints();

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

**Promise<[operations.FindDistributionPointsResponse](../../sdk/models/operations/finddistributionpointsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findDistributionPointsById

Finds distribution points by ID

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

  const res = await sdk.distributionpoints.findDistributionPointsById({
    id: 377606,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindDistributionPointsByIdRequest](../../sdk/models/operations/finddistributionpointsbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindDistributionPointsByIdResponse](../../sdk/models/operations/finddistributionpointsbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findDistributionPointsByName

Finds distribution points by name

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

  const res = await sdk.distributionpoints.findDistributionPointsByName({
    name: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindDistributionPointsByNameRequest](../../sdk/models/operations/finddistributionpointsbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindDistributionPointsByNameResponse](../../sdk/models/operations/finddistributionpointsbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateDistributionPointById

Updates an existing distribution point by ID

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

  const res = await sdk.distributionpoints.updateDistributionPointById({
    id: 397,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.UpdateDistributionPointByIdRequest](../../sdk/models/operations/updatedistributionpointbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UpdateDistributionPointByIdResponse](../../sdk/models/operations/updatedistributionpointbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateDistributionPointByName

Updates an existing distribution point by name

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

  const res = await sdk.distributionpoints.updateDistributionPointByName({
    name: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.UpdateDistributionPointByNameRequest](../../sdk/models/operations/updatedistributionpointbynamerequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.UpdateDistributionPointByNameResponse](../../sdk/models/operations/updatedistributionpointbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
