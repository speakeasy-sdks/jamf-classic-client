# advancedusersearches

### Available Operations

* [createAdvancedUserSearchgById](#createadvancedusersearchgbyid) - Creates a new advanced user search by ID
* [deleteAdvancedUserSearchById](#deleteadvancedusersearchbyid) - Deletes a user search by ID
* [deleteAdvancedUserSearchByName](#deleteadvancedusersearchbyname) - Deletes a user search by Name
* [findAdvancedUserSearches](#findadvancedusersearches) - Finds all advanced user searches
* [findAdvancedUserSearchesById](#findadvancedusersearchesbyid) - Finds user searches by ID
* [findUserSearchesByName](#findusersearchesbyname) - Finds user searches by name
* [updateAdvancedUserSearchById](#updateadvancedusersearchbyid) - Updates an existing advanced user search by ID
* [updateAdvancedUserSearchByName](#updateadvancedusersearchbyname) - Updates an existing advanced user search by name

## createAdvancedUserSearchgById

Creates a new advanced user search by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateAdvancedUserSearchgByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.createAdvancedUserSearchgById({
  id: 222321,
}).then((res: CreateAdvancedUserSearchgByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.CreateAdvancedUserSearchgByIdRequest](../../models/operations/createadvancedusersearchgbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.CreateAdvancedUserSearchgByIdResponse](../../models/operations/createadvancedusersearchgbyidresponse.md)>**


## deleteAdvancedUserSearchById

Deletes a user search by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteAdvancedUserSearchByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.deleteAdvancedUserSearchById({
  id: 616934,
}).then((res: DeleteAdvancedUserSearchByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteAdvancedUserSearchByIdRequest](../../models/operations/deleteadvancedusersearchbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteAdvancedUserSearchByIdResponse](../../models/operations/deleteadvancedusersearchbyidresponse.md)>**


## deleteAdvancedUserSearchByName

Deletes a user search by Name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteAdvancedUserSearchByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.deleteAdvancedUserSearchByName({
  name: "May Turcotte",
}).then((res: DeleteAdvancedUserSearchByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteAdvancedUserSearchByNameRequest](../../models/operations/deleteadvancedusersearchbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteAdvancedUserSearchByNameResponse](../../models/operations/deleteadvancedusersearchbynameresponse.md)>**


## findAdvancedUserSearches

Finds all advanced user searches

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindAdvancedUserSearchesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.findAdvancedUserSearches().then((res: FindAdvancedUserSearchesResponse) => {
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

**Promise<[operations.FindAdvancedUserSearchesResponse](../../models/operations/findadvancedusersearchesresponse.md)>**


## findAdvancedUserSearchesById

Finds user searches by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindAdvancedUserSearchesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.findAdvancedUserSearchesById({
  id: 359508,
}).then((res: FindAdvancedUserSearchesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindAdvancedUserSearchesByIdRequest](../../models/operations/findadvancedusersearchesbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindAdvancedUserSearchesByIdResponse](../../models/operations/findadvancedusersearchesbyidresponse.md)>**


## findUserSearchesByName

Finds user searches by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindUserSearchesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.findUserSearchesByName({
  name: "Brad Turcotte Jr.",
}).then((res: FindUserSearchesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.FindUserSearchesByNameRequest](../../models/operations/findusersearchesbynamerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.FindUserSearchesByNameResponse](../../models/operations/findusersearchesbynameresponse.md)>**


## updateAdvancedUserSearchById

Updates an existing advanced user search by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateAdvancedUserSearchByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.updateAdvancedUserSearchById({
  id: 969810,
}).then((res: UpdateAdvancedUserSearchByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateAdvancedUserSearchByIdRequest](../../models/operations/updateadvancedusersearchbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateAdvancedUserSearchByIdResponse](../../models/operations/updateadvancedusersearchbyidresponse.md)>**


## updateAdvancedUserSearchByName

Updates an existing advanced user search by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateAdvancedUserSearchByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.advancedusersearches.updateAdvancedUserSearchByName({
  name: "Shaun Osinski",
}).then((res: UpdateAdvancedUserSearchByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdateAdvancedUserSearchByNameRequest](../../models/operations/updateadvancedusersearchbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdateAdvancedUserSearchByNameResponse](../../models/operations/updateadvancedusersearchbynameresponse.md)>**

