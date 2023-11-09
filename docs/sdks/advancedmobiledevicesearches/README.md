# Advancedmobiledevicesearches
(*advancedmobiledevicesearches*)

### Available Operations

* [createAdvancedMobileDeviceSearchById](#createadvancedmobiledevicesearchbyid) - Creates a new advanced mobile device search
* [deleteAdvancedMobileDeviceSearchById](#deleteadvancedmobiledevicesearchbyid) - Deletes a mobile device search by ID
* [deleteAdvancedMobileDeviceSearchByName](#deleteadvancedmobiledevicesearchbyname) - Deletes a mobile device search by name
* [findAdvancedMobileDeviceSearches](#findadvancedmobiledevicesearches) - Finds all advanced mobile device searches
* [findAdvancedMobileDeviceSearchesById](#findadvancedmobiledevicesearchesbyid) - Finds mobile device searches by ID
* [findMobileDeviceSearchesByName](#findmobiledevicesearchesbyname) - Finds advanced mobile device searches by name
* [updateAdvancedMobileDeviceSearchById](#updateadvancedmobiledevicesearchbyid) - Updates an existing advanced mobile device search by ID
* [updateAdvancedMobileDeviceSearchByName](#updateadvancedmobiledevicesearchbyname) - Updates an existing advanced mobile device search by name

## createAdvancedMobileDeviceSearchById

Creates a new advanced mobile device search

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

  const res = await sdk.advancedmobiledevicesearches.createAdvancedMobileDeviceSearchById({
    id: 827357,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.CreateAdvancedMobileDeviceSearchByIdRequest](../../sdk/models/operations/createadvancedmobiledevicesearchbyidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.CreateAdvancedMobileDeviceSearchByIdResponse](../../sdk/models/operations/createadvancedmobiledevicesearchbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteAdvancedMobileDeviceSearchById

Deletes a mobile device search by ID

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

  const res = await sdk.advancedmobiledevicesearches.deleteAdvancedMobileDeviceSearchById({
    id: 246857,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteAdvancedMobileDeviceSearchByIdRequest](../../sdk/models/operations/deleteadvancedmobiledevicesearchbyidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteAdvancedMobileDeviceSearchByIdResponse](../../sdk/models/operations/deleteadvancedmobiledevicesearchbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteAdvancedMobileDeviceSearchByName

Deletes a mobile device search by name

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

  const res = await sdk.advancedmobiledevicesearches.deleteAdvancedMobileDeviceSearchByName({
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
| `request`                                                                                                                                | [operations.DeleteAdvancedMobileDeviceSearchByNameRequest](../../sdk/models/operations/deleteadvancedmobiledevicesearchbynamerequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteAdvancedMobileDeviceSearchByNameResponse](../../sdk/models/operations/deleteadvancedmobiledevicesearchbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findAdvancedMobileDeviceSearches

Finds all advanced mobile device searches

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

  const res = await sdk.advancedmobiledevicesearches.findAdvancedMobileDeviceSearches();

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

**Promise<[operations.FindAdvancedMobileDeviceSearchesResponse](../../sdk/models/operations/findadvancedmobiledevicesearchesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findAdvancedMobileDeviceSearchesById

Finds mobile device searches by ID

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

  const res = await sdk.advancedmobiledevicesearches.findAdvancedMobileDeviceSearchesById({
    id: 507076,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.FindAdvancedMobileDeviceSearchesByIdRequest](../../sdk/models/operations/findadvancedmobiledevicesearchesbyidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.FindAdvancedMobileDeviceSearchesByIdResponse](../../sdk/models/operations/findadvancedmobiledevicesearchesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceSearchesByName

Finds advanced mobile device searches by name

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

  const res = await sdk.advancedmobiledevicesearches.findMobileDeviceSearchesByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindMobileDeviceSearchesByNameRequest](../../sdk/models/operations/findmobiledevicesearchesbynamerequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindMobileDeviceSearchesByNameResponse](../../sdk/models/operations/findmobiledevicesearchesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateAdvancedMobileDeviceSearchById

Updates an existing advanced mobile device search by ID

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

  const res = await sdk.advancedmobiledevicesearches.updateAdvancedMobileDeviceSearchById({
    id: 827690,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.UpdateAdvancedMobileDeviceSearchByIdRequest](../../sdk/models/operations/updateadvancedmobiledevicesearchbyidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.UpdateAdvancedMobileDeviceSearchByIdResponse](../../sdk/models/operations/updateadvancedmobiledevicesearchbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateAdvancedMobileDeviceSearchByName

Updates an existing advanced mobile device search by name

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

  const res = await sdk.advancedmobiledevicesearches.updateAdvancedMobileDeviceSearchByName({
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
| `request`                                                                                                                                | [operations.UpdateAdvancedMobileDeviceSearchByNameRequest](../../sdk/models/operations/updateadvancedmobiledevicesearchbynamerequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.UpdateAdvancedMobileDeviceSearchByNameResponse](../../sdk/models/operations/updateadvancedmobiledevicesearchbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
