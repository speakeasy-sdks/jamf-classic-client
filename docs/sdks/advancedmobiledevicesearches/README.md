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
import { CreateAdvancedMobileDeviceSearchByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.createAdvancedMobileDeviceSearchById({
  id: 944669,
}).then((res: CreateAdvancedMobileDeviceSearchByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.CreateAdvancedMobileDeviceSearchByIdRequest](../../models/operations/createadvancedmobiledevicesearchbyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.CreateAdvancedMobileDeviceSearchByIdResponse](../../models/operations/createadvancedmobiledevicesearchbyidresponse.md)>**


## deleteAdvancedMobileDeviceSearchById

Deletes a mobile device search by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteAdvancedMobileDeviceSearchByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.deleteAdvancedMobileDeviceSearchById({
  id: 758616,
}).then((res: DeleteAdvancedMobileDeviceSearchByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DeleteAdvancedMobileDeviceSearchByIdRequest](../../models/operations/deleteadvancedmobiledevicesearchbyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteAdvancedMobileDeviceSearchByIdResponse](../../models/operations/deleteadvancedmobiledevicesearchbyidresponse.md)>**


## deleteAdvancedMobileDeviceSearchByName

Deletes a mobile device search by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteAdvancedMobileDeviceSearchByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.deleteAdvancedMobileDeviceSearchByName({
  name: "Jack Johns",
}).then((res: DeleteAdvancedMobileDeviceSearchByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteAdvancedMobileDeviceSearchByNameRequest](../../models/operations/deleteadvancedmobiledevicesearchbynamerequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteAdvancedMobileDeviceSearchByNameResponse](../../models/operations/deleteadvancedmobiledevicesearchbynameresponse.md)>**


## findAdvancedMobileDeviceSearches

Finds all advanced mobile device searches

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindAdvancedMobileDeviceSearchesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.findAdvancedMobileDeviceSearches().then((res: FindAdvancedMobileDeviceSearchesResponse) => {
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

**Promise<[operations.FindAdvancedMobileDeviceSearchesResponse](../../models/operations/findadvancedmobiledevicesearchesresponse.md)>**


## findAdvancedMobileDeviceSearchesById

Finds mobile device searches by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindAdvancedMobileDeviceSearchesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.findAdvancedMobileDeviceSearchesById({
  id: 186332,
}).then((res: FindAdvancedMobileDeviceSearchesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FindAdvancedMobileDeviceSearchesByIdRequest](../../models/operations/findadvancedmobiledevicesearchesbyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FindAdvancedMobileDeviceSearchesByIdResponse](../../models/operations/findadvancedmobiledevicesearchesbyidresponse.md)>**


## findMobileDeviceSearchesByName

Finds advanced mobile device searches by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceSearchesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.findMobileDeviceSearchesByName({
  name: "Jonathon Klocko",
}).then((res: FindMobileDeviceSearchesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindMobileDeviceSearchesByNameRequest](../../models/operations/findmobiledevicesearchesbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindMobileDeviceSearchesByNameResponse](../../models/operations/findmobiledevicesearchesbynameresponse.md)>**


## updateAdvancedMobileDeviceSearchById

Updates an existing advanced mobile device search by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateAdvancedMobileDeviceSearchByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.updateAdvancedMobileDeviceSearchById({
  id: 135218,
}).then((res: UpdateAdvancedMobileDeviceSearchByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.UpdateAdvancedMobileDeviceSearchByIdRequest](../../models/operations/updateadvancedmobiledevicesearchbyidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.UpdateAdvancedMobileDeviceSearchByIdResponse](../../models/operations/updateadvancedmobiledevicesearchbyidresponse.md)>**


## updateAdvancedMobileDeviceSearchByName

Updates an existing advanced mobile device search by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateAdvancedMobileDeviceSearchByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedmobiledevicesearches.updateAdvancedMobileDeviceSearchByName({
  name: "Cathy Mosciski",
}).then((res: UpdateAdvancedMobileDeviceSearchByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.UpdateAdvancedMobileDeviceSearchByNameRequest](../../models/operations/updateadvancedmobiledevicesearchbynamerequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.UpdateAdvancedMobileDeviceSearchByNameResponse](../../models/operations/updateadvancedmobiledevicesearchbynameresponse.md)>**

