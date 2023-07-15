# peripherals

### Available Operations

* [createPeripheralById](#createperipheralbyid) - Creates a new peripheral by ID
* [deletePeripheralById](#deleteperipheralbyid) - Deletes a peripheral by ID
* [findPeripherals](#findperipherals) - Finds all peripherals
* [findPeripheralsById](#findperipheralsbyid) - Finds peripherals by ID
* [findPeripheralsByIdSubset](#findperipheralsbyidsubset) - Finds a subset of data for a peripheral
* [updatePeripheralById](#updateperipheralbyid) - Updates an existing peripheral by ID

## createPeripheralById

Creates a new peripheral by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreatePeripheralByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripherals.createPeripheralById({
  id: 552439,
}).then((res: CreatePeripheralByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreatePeripheralByIdRequest](../../models/operations/createperipheralbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreatePeripheralByIdResponse](../../models/operations/createperipheralbyidresponse.md)>**


## deletePeripheralById

Deletes a peripheral by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeletePeripheralByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripherals.deletePeripheralById({
  id: 356315,
}).then((res: DeletePeripheralByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeletePeripheralByIdRequest](../../models/operations/deleteperipheralbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeletePeripheralByIdResponse](../../models/operations/deleteperipheralbyidresponse.md)>**


## findPeripherals

Finds all peripherals

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPeripheralsResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripherals.findPeripherals().then((res: FindPeripheralsResponse) => {
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

**Promise<[operations.FindPeripheralsResponse](../../models/operations/findperipheralsresponse.md)>**


## findPeripheralsById

Finds peripherals by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPeripheralsByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripherals.findPeripheralsById({
  id: 295950,
}).then((res: FindPeripheralsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindPeripheralsByIdRequest](../../models/operations/findperipheralsbyidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindPeripheralsByIdResponse](../../models/operations/findperipheralsbyidresponse.md)>**


## findPeripheralsByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPeripheralsByIdSubsetResponse, FindPeripheralsByIdSubsetSubset } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripherals.findPeripheralsByIdSubset({
  id: 266284,
  subset: FindPeripheralsByIdSubsetSubset.Attachments,
}).then((res: FindPeripheralsByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindPeripheralsByIdSubsetRequest](../../models/operations/findperipheralsbyidsubsetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindPeripheralsByIdSubsetResponse](../../models/operations/findperipheralsbyidsubsetresponse.md)>**


## updatePeripheralById

Updates an existing peripheral by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdatePeripheralByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripherals.updatePeripheralById({
  id: 807419,
}).then((res: UpdatePeripheralByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdatePeripheralByIdRequest](../../models/operations/updateperipheralbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdatePeripheralByIdResponse](../../models/operations/updateperipheralbyidresponse.md)>**
