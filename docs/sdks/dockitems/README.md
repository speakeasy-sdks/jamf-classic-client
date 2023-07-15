# dockitems

### Available Operations

* [createDockItemById](#createdockitembyid) - Creates a new dock item by ID
* [deleteDockItemById](#deletedockitembyid) - Deletes a dock item by ID
* [deleteDockItemByName](#deletedockitembyname) - Deletes a dock item by name
* [findDockItems](#finddockitems) - Finds all dock items
* [findDockItemsById](#finddockitemsbyid) - Finds dock items by ID
* [findDockItemsByName](#finddockitemsbyname) - Finds dock items by name
* [updateDockItemById](#updatedockitembyid) - Updates an existing dock item by ID
* [updateDockItemByName](#updatedockitembyname) - Updates an existing dock item by name

## createDockItemById

Creates a new dock item by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateDockItemByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.createDockItemById({
  id: 244651,
}).then((res: CreateDockItemByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateDockItemByIdRequest](../../models/operations/createdockitembyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateDockItemByIdResponse](../../models/operations/createdockitembyidresponse.md)>**


## deleteDockItemById

Deletes a dock item by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteDockItemByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.deleteDockItemById({
  id: 974257,
}).then((res: DeleteDockItemByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteDockItemByIdRequest](../../models/operations/deletedockitembyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteDockItemByIdResponse](../../models/operations/deletedockitembyidresponse.md)>**


## deleteDockItemByName

Deletes a dock item by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteDockItemByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.deleteDockItemByName({
  name: "Tabitha Bayer",
}).then((res: DeleteDockItemByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteDockItemByNameRequest](../../models/operations/deletedockitembynamerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteDockItemByNameResponse](../../models/operations/deletedockitembynameresponse.md)>**


## findDockItems

Finds all dock items

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindDockItemsResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.findDockItems().then((res: FindDockItemsResponse) => {
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

**Promise<[operations.FindDockItemsResponse](../../models/operations/finddockitemsresponse.md)>**


## findDockItemsById

Finds dock items by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindDockItemsByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.findDockItemsById({
  id: 162954,
}).then((res: FindDockItemsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindDockItemsByIdRequest](../../models/operations/finddockitemsbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindDockItemsByIdResponse](../../models/operations/finddockitemsbyidresponse.md)>**


## findDockItemsByName

Finds dock items by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindDockItemsByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.findDockItemsByName({
  name: "Luke Schoen",
}).then((res: FindDockItemsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindDockItemsByNameRequest](../../models/operations/finddockitemsbynamerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindDockItemsByNameResponse](../../models/operations/finddockitemsbynameresponse.md)>**


## updateDockItemById

Updates an existing dock item by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateDockItemByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.updateDockItemById({
  id: 989410,
}).then((res: UpdateDockItemByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateDockItemByIdRequest](../../models/operations/updatedockitembyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateDockItemByIdResponse](../../models/operations/updatedockitembyidresponse.md)>**


## updateDockItemByName

Updates an existing dock item by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateDockItemByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.dockitems.updateDockItemByName({
  name: "Anna Hahn",
}).then((res: UpdateDockItemByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateDockItemByNameRequest](../../models/operations/updatedockitembynamerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateDockItemByNameResponse](../../models/operations/updatedockitembynameresponse.md)>**

