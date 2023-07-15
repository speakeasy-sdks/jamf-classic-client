# departments

### Available Operations

* [createDepartmentById](#createdepartmentbyid) - Creates a new department by ID
* [deleteDepartmentById](#deletedepartmentbyid) - Deletes a department by ID
* [deleteDepartmentByName](#deletedepartmentbyname) - Deletes a department by name
* [findDepartments](#finddepartments) - Finds all departments
* [findDepartmentsById](#finddepartmentsbyid) - Finds departments by ID
* [findDepartmentsByName](#finddepartmentsbyname) - Finds departments by name
* [updateDepartmentById](#updatedepartmentbyid) - Updates an existing department by ID
* [updateDepartmentByName](#updatedepartmentbyname) - Updates an existing department by name

## createDepartmentById

Creates a new department by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateDepartmentByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.createDepartmentById({
  id: 458139,
}).then((res: CreateDepartmentByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateDepartmentByIdRequest](../../models/operations/createdepartmentbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateDepartmentByIdResponse](../../models/operations/createdepartmentbyidresponse.md)>**


## deleteDepartmentById

Deletes a department by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteDepartmentByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.deleteDepartmentById({
  id: 503427,
}).then((res: DeleteDepartmentByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteDepartmentByIdRequest](../../models/operations/deletedepartmentbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteDepartmentByIdResponse](../../models/operations/deletedepartmentbyidresponse.md)>**


## deleteDepartmentByName

Deletes a department by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteDepartmentByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.deleteDepartmentByName({
  name: "Randal Stiedemann",
}).then((res: DeleteDepartmentByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteDepartmentByNameRequest](../../models/operations/deletedepartmentbynamerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteDepartmentByNameResponse](../../models/operations/deletedepartmentbynameresponse.md)>**


## findDepartments

Finds all departments

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindDepartmentsResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.findDepartments().then((res: FindDepartmentsResponse) => {
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

**Promise<[operations.FindDepartmentsResponse](../../models/operations/finddepartmentsresponse.md)>**


## findDepartmentsById

Finds departments by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindDepartmentsByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.findDepartmentsById({
  id: 97468,
}).then((res: FindDepartmentsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindDepartmentsByIdRequest](../../models/operations/finddepartmentsbyidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindDepartmentsByIdResponse](../../models/operations/finddepartmentsbyidresponse.md)>**


## findDepartmentsByName

Finds departments by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindDepartmentsByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.findDepartmentsByName({
  name: "Jeremiah Mayer",
}).then((res: FindDepartmentsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.FindDepartmentsByNameRequest](../../models/operations/finddepartmentsbynamerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.FindDepartmentsByNameResponse](../../models/operations/finddepartmentsbynameresponse.md)>**


## updateDepartmentById

Updates an existing department by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateDepartmentByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.updateDepartmentById({
  id: 157632,
}).then((res: UpdateDepartmentByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateDepartmentByIdRequest](../../models/operations/updatedepartmentbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateDepartmentByIdResponse](../../models/operations/updatedepartmentbyidresponse.md)>**


## updateDepartmentByName

Updates an existing department by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateDepartmentByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.departments.updateDepartmentByName({
  name: "Mr. Marlon Schultz V",
}).then((res: UpdateDepartmentByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateDepartmentByNameRequest](../../models/operations/updatedepartmentbynamerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateDepartmentByNameResponse](../../models/operations/updatedepartmentbynameresponse.md)>**

