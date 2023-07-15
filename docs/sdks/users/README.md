# users

### Available Operations

* [createUserById](#createuserbyid) - Creates a new user by ID
* [deleteUserByEmailAddress](#deleteuserbyemailaddress) - Deletes a user by email address
* [deleteUserById](#deleteuserbyid) - Deletes a user by ID
* [deleteUserByName](#deleteuserbyname) - Deletes a user by name
* [findUsers](#findusers) - Finds all users
* [findUsersByEmailAddress](#findusersbyemailaddress) - Finds users by email address
* [findUsersById](#findusersbyid) - Finds users by ID
* [findUsersByName](#findusersbyname) - Finds users by name
* [updateUserByEmailAddress](#updateuserbyemailaddress) - Updates an existing user by email address
* [updateUserById](#updateuserbyid) - Updates an existing user by ID
* [updateUserByName](#updateuserbyname) - Updates an existing user by name

## createUserById

This operation cannot be used to add computers, mobile devices, peripherals, vpp assignments to a user.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateUserByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.createUserById({
  id: 60892,
}).then((res: CreateUserByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateUserByIdRequest](../../models/operations/createuserbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateUserByIdResponse](../../models/operations/createuserbyidresponse.md)>**


## deleteUserByEmailAddress

Deletes a user by email address

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteUserByEmailAddressResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.deleteUserByEmailAddress({
  email: "Sheila_Cormier5@gmail.com",
}).then((res: DeleteUserByEmailAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteUserByEmailAddressRequest](../../models/operations/deleteuserbyemailaddressrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteUserByEmailAddressResponse](../../models/operations/deleteuserbyemailaddressresponse.md)>**


## deleteUserById

Deletes a user by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteUserByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.deleteUserById({
  id: 567693,
}).then((res: DeleteUserByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteUserByIdRequest](../../models/operations/deleteuserbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteUserByIdResponse](../../models/operations/deleteuserbyidresponse.md)>**


## deleteUserByName

Deletes a user by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteUserByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.deleteUserByName({
  name: "Cary Larkin DVM",
}).then((res: DeleteUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteUserByNameRequest](../../models/operations/deleteuserbynamerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteUserByNameResponse](../../models/operations/deleteuserbynameresponse.md)>**


## findUsers

Finds all users

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindUsersResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.findUsers().then((res: FindUsersResponse) => {
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

**Promise<[operations.FindUsersResponse](../../models/operations/findusersresponse.md)>**


## findUsersByEmailAddress

Because email addresses may not be unique, this operation may return a list of users.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindUsersByEmailAddressResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.findUsersByEmailAddress({
  email: "Birdie_Homenick24@yahoo.com",
}).then((res: FindUsersByEmailAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindUsersByEmailAddressRequest](../../models/operations/findusersbyemailaddressrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindUsersByEmailAddressResponse](../../models/operations/findusersbyemailaddressresponse.md)>**


## findUsersById

Finds users by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindUsersByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.findUsersById({
  id: 260588,
}).then((res: FindUsersByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.FindUsersByIdRequest](../../models/operations/findusersbyidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.FindUsersByIdResponse](../../models/operations/findusersbyidresponse.md)>**


## findUsersByName

Finds users by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindUsersByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.findUsersByName({
  name: "Mrs. Pearl Rosenbaum",
}).then((res: FindUsersByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindUsersByNameRequest](../../models/operations/findusersbynamerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindUsersByNameResponse](../../models/operations/findusersbynameresponse.md)>**


## updateUserByEmailAddress

Updates an existing user by email address

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateUserByEmailAddressResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.updateUserByEmailAddress({
  email: "Alia.Denesik27@yahoo.com",
}).then((res: UpdateUserByEmailAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateUserByEmailAddressRequest](../../models/operations/updateuserbyemailaddressrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateUserByEmailAddressResponse](../../models/operations/updateuserbyemailaddressresponse.md)>**


## updateUserById

This operation cannot be used to add computers, mobile devices, peripherals, vpp assignments to a user.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateUserByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.updateUserById({
  id: 116558,
}).then((res: UpdateUserByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateUserByIdRequest](../../models/operations/updateuserbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserByIdResponse](../../models/operations/updateuserbyidresponse.md)>**


## updateUserByName

This operation cannot be used to add computers, mobile devices, peripherals, vpp assignments to a user.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateUserByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.users.updateUserByName({
  name: "Miss Dana Prohaska",
}).then((res: UpdateUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateUserByNameRequest](../../models/operations/updateuserbynamerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateUserByNameResponse](../../models/operations/updateuserbynameresponse.md)>**

