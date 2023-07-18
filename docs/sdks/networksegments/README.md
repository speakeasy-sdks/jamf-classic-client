# networksegments

### Available Operations

* [createNetworkSegmentById](#createnetworksegmentbyid) - Creates a new network segment by ID
* [deleteNetworkSegmentById](#deletenetworksegmentbyid) - Deletes a network segment by ID
* [deleteNetworkSegmentByName](#deletenetworksegmentbyname) - Deletes a network segment by name
* [findNetworkSegments](#findnetworksegments) - Finds all network segments
* [findNetworkSegmentsById](#findnetworksegmentsbyid) - Finds network segments by ID
* [findNetworkSegmentsByName](#findnetworksegmentsbyname) - Finds network segments by name
* [updateNetworkSegmentById](#updatenetworksegmentbyid) - Updates an existing network segment by ID
* [updateNetworkSegmentByName](#updatenetworksegmentbyname) - Updates an existing network segment by name

## createNetworkSegmentById

Creates a new network segment by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateNetworkSegmentByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.createNetworkSegmentById({
  id: 889060,
}).then((res: CreateNetworkSegmentByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateNetworkSegmentByIdRequest](../../models/operations/createnetworksegmentbyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateNetworkSegmentByIdResponse](../../models/operations/createnetworksegmentbyidresponse.md)>**


## deleteNetworkSegmentById

Deletes a network segment by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteNetworkSegmentByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.deleteNetworkSegmentById({
  id: 972912,
}).then((res: DeleteNetworkSegmentByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteNetworkSegmentByIdRequest](../../models/operations/deletenetworksegmentbyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteNetworkSegmentByIdResponse](../../models/operations/deletenetworksegmentbyidresponse.md)>**


## deleteNetworkSegmentByName

Deletes a network segment by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteNetworkSegmentByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.deleteNetworkSegmentByName({
  name: "Josh Abshire",
}).then((res: DeleteNetworkSegmentByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteNetworkSegmentByNameRequest](../../models/operations/deletenetworksegmentbynamerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteNetworkSegmentByNameResponse](../../models/operations/deletenetworksegmentbynameresponse.md)>**


## findNetworkSegments

Finds all network segments

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindNetworkSegmentsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.findNetworkSegments().then((res: FindNetworkSegmentsResponse) => {
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

**Promise<[operations.FindNetworkSegmentsResponse](../../models/operations/findnetworksegmentsresponse.md)>**


## findNetworkSegmentsById

Finds network segments by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindNetworkSegmentsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.findNetworkSegmentsById({
  id: 684126,
}).then((res: FindNetworkSegmentsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindNetworkSegmentsByIdRequest](../../models/operations/findnetworksegmentsbyidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindNetworkSegmentsByIdResponse](../../models/operations/findnetworksegmentsbyidresponse.md)>**


## findNetworkSegmentsByName

Finds network segments by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindNetworkSegmentsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.findNetworkSegmentsByName({
  name: "Steven Rath",
}).then((res: FindNetworkSegmentsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindNetworkSegmentsByNameRequest](../../models/operations/findnetworksegmentsbynamerequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindNetworkSegmentsByNameResponse](../../models/operations/findnetworksegmentsbynameresponse.md)>**


## updateNetworkSegmentById

Updates an existing network segment by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateNetworkSegmentByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.updateNetworkSegmentById({
  id: 844854,
}).then((res: UpdateNetworkSegmentByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateNetworkSegmentByIdRequest](../../models/operations/updatenetworksegmentbyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateNetworkSegmentByIdResponse](../../models/operations/updatenetworksegmentbyidresponse.md)>**


## updateNetworkSegmentByName

Updates an existing network segment by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateNetworkSegmentByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.networksegments.updateNetworkSegmentByName({
  name: "Mrs. Mabel Connelly",
}).then((res: UpdateNetworkSegmentByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateNetworkSegmentByNameRequest](../../models/operations/updatenetworksegmentbynamerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateNetworkSegmentByNameResponse](../../models/operations/updatenetworksegmentbynameresponse.md)>**

