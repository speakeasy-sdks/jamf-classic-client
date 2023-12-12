# Savedsearches
(*savedsearches*)

### Available Operations

* [~~savedsearchesGet~~](#savedsearchesget) - Finds all saved searches (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**
* [~~savedsearchesIdByIdGet~~](#savedsearchesidbyidget) - Finds saved searches by ID (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**
* [~~savedsearchesNameByNameGet~~](#savedsearchesnamebynameget) - Finds saved searches by name (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**

## ~~savedsearchesGet~~

Finds all saved searches (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

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

  const res = await sdk.savedsearches.savedsearchesGet();

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

**Promise<[operations.SavedsearchesGetResponse](../../sdk/models/operations/savedsearchesgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~savedsearchesIdByIdGet~~

Finds saved searches by ID (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

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

  const res = await sdk.savedsearches.savedsearchesIdByIdGet({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.SavedsearchesIdByIdGetRequest](../../sdk/models/operations/savedsearchesidbyidgetrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.SavedsearchesIdByIdGetResponse](../../sdk/models/operations/savedsearchesidbyidgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~savedsearchesNameByNameGet~~

Finds saved searches by name (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

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

  const res = await sdk.savedsearches.savedsearchesNameByNameGet({
    name: "string",
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
| `request`                                                                                                        | [operations.SavedsearchesNameByNameGetRequest](../../sdk/models/operations/savedsearchesnamebynamegetrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.SavedsearchesNameByNameGetResponse](../../sdk/models/operations/savedsearchesnamebynamegetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
