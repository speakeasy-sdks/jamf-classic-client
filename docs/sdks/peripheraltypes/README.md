# peripheraltypes

### Available Operations

* [createPeripheralTypeById](#createperipheraltypebyid) - Creates a new peripheral by ID
* [deletePeripheralTypeById](#deleteperipheraltypebyid) - Deletes a peripheral by ID
* [findPeripheralTypes](#findperipheraltypes) - Finds all peripheral types
* [findPeripheralTypesById](#findperipheraltypesbyid) - Finds peripheral types by ID
* [updatePeripheralTypeById](#updateperipheraltypebyid) - Updates an existing peripheral by ID

## createPeripheralTypeById

Creates a new peripheral by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreatePeripheralTypeByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripheraltypes.createPeripheralTypeById({
  id: 265905,
}).then((res: CreatePeripheralTypeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreatePeripheralTypeByIdRequest](../../models/operations/createperipheraltypebyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreatePeripheralTypeByIdResponse](../../models/operations/createperipheraltypebyidresponse.md)>**


## deletePeripheralTypeById

Deletes a peripheral by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeletePeripheralTypeByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripheraltypes.deletePeripheralTypeById({
  id: 163558,
}).then((res: DeletePeripheralTypeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeletePeripheralTypeByIdRequest](../../models/operations/deleteperipheraltypebyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeletePeripheralTypeByIdResponse](../../models/operations/deleteperipheraltypebyidresponse.md)>**


## findPeripheralTypes

Finds all peripheral types

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPeripheralTypesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripheraltypes.findPeripheralTypes().then((res: FindPeripheralTypesResponse) => {
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

**Promise<[operations.FindPeripheralTypesResponse](../../models/operations/findperipheraltypesresponse.md)>**


## findPeripheralTypesById

Finds peripheral types by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPeripheralTypesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripheraltypes.findPeripheralTypesById({
  id: 828147,
}).then((res: FindPeripheralTypesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindPeripheralTypesByIdRequest](../../models/operations/findperipheraltypesbyidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindPeripheralTypesByIdResponse](../../models/operations/findperipheraltypesbyidresponse.md)>**


## updatePeripheralTypeById

Updates an existing peripheral by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdatePeripheralTypeByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.peripheraltypes.updatePeripheralTypeById({
  id: 876840,
}).then((res: UpdatePeripheralTypeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdatePeripheralTypeByIdRequest](../../models/operations/updateperipheraltypebyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdatePeripheralTypeByIdResponse](../../models/operations/updateperipheraltypebyidresponse.md)>**

