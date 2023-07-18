# userextensionattributes

### Available Operations

* [createUserextensionattributeById](#createuserextensionattributebyid) - Creates a new user extension attribute by ID
* [deleteUserextensionattributeById](#deleteuserextensionattributebyid) - Deletes a user extension attribute by ID
* [deleteUserextensionattributeByName](#deleteuserextensionattributebyname) - Deletes a user extension attribute by name
* [findUserextensionattributes](#finduserextensionattributes) - Finds all user extension attributes
* [findUserextensionattributesById](#finduserextensionattributesbyid) - Finds user extension attributes by ID
* [findUserextensionattributesByName](#finduserextensionattributesbyname) - Finds user extension attributes by name
* [updateUserextensionattributeById](#updateuserextensionattributebyid) - Updates an existing user extension attribute by ID
* [updateUserextensionattributeByName](#updateuserextensionattributebyname) - Updates an existing user extension attribute by name

## createUserextensionattributeById

Creates a new user extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateUserextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.createUserextensionattributeById({
  id: 668218,
}).then((res: CreateUserextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.CreateUserextensionattributeByIdRequest](../../models/operations/createuserextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.CreateUserextensionattributeByIdResponse](../../models/operations/createuserextensionattributebyidresponse.md)>**


## deleteUserextensionattributeById

Deletes a user extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteUserextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.deleteUserextensionattributeById({
  id: 577413,
}).then((res: DeleteUserextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteUserextensionattributeByIdRequest](../../models/operations/deleteuserextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteUserextensionattributeByIdResponse](../../models/operations/deleteuserextensionattributebyidresponse.md)>**


## deleteUserextensionattributeByName

Deletes a user extension attribute by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteUserextensionattributeByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.deleteUserextensionattributeByName({
  name: "Roxanne Aufderhar",
}).then((res: DeleteUserextensionattributeByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeleteUserextensionattributeByNameRequest](../../models/operations/deleteuserextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeleteUserextensionattributeByNameResponse](../../models/operations/deleteuserextensionattributebynameresponse.md)>**


## findUserextensionattributes

Finds all user extension attributes

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindUserextensionattributesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.findUserextensionattributes().then((res: FindUserextensionattributesResponse) => {
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

**Promise<[operations.FindUserextensionattributesResponse](../../models/operations/finduserextensionattributesresponse.md)>**


## findUserextensionattributesById

Finds user extension attributes by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindUserextensionattributesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.findUserextensionattributesById({
  id: 301309,
}).then((res: FindUserextensionattributesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindUserextensionattributesByIdRequest](../../models/operations/finduserextensionattributesbyidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindUserextensionattributesByIdResponse](../../models/operations/finduserextensionattributesbyidresponse.md)>**


## findUserextensionattributesByName

Finds user extension attributes by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindUserextensionattributesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.findUserextensionattributesByName({
  name: "Lynne Weissnat",
}).then((res: FindUserextensionattributesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.FindUserextensionattributesByNameRequest](../../models/operations/finduserextensionattributesbynamerequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindUserextensionattributesByNameResponse](../../models/operations/finduserextensionattributesbynameresponse.md)>**


## updateUserextensionattributeById

Updates an existing user extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateUserextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.updateUserextensionattributeById({
  id: 603650,
}).then((res: UpdateUserextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.UpdateUserextensionattributeByIdRequest](../../models/operations/updateuserextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.UpdateUserextensionattributeByIdResponse](../../models/operations/updateuserextensionattributebyidresponse.md)>**


## updateUserextensionattributeByName

Updates an existing user extension attribute by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateUserextensionattributeByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.userextensionattributes.updateUserextensionattributeByName({
  name: "Jeremiah O'Hara",
}).then((res: UpdateUserextensionattributeByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.UpdateUserextensionattributeByNameRequest](../../models/operations/updateuserextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.UpdateUserextensionattributeByNameResponse](../../models/operations/updateuserextensionattributebynameresponse.md)>**

