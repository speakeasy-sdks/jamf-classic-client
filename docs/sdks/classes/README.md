# classes

### Available Operations

* [createClassById](#createclassbyid) - Creates a new class by ID
* [deleteClassById](#deleteclassbyid) - Deletes a class by ID
* [deleteClassByName](#deleteclassbyname) - Deletes a class by name
* [findClasses](#findclasses) - Finds all classes
* [findClassesById](#findclassesbyid) - Finds classes by ID
* [findClassesByName](#findclassesbyname) - Finds classes by name
* [updateClassById](#updateclassbyid) - Updates an existing class by ID
* [updateClassByName](#updateclassbyname) - Updates an existing class by name

## createClassById

The mobile device list is not used by this operation, the mobile device group is used instead.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateClassByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.createClassById({
  id: 979587,
}).then((res: CreateClassByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateClassByIdRequest](../../models/operations/createclassbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateClassByIdResponse](../../models/operations/createclassbyidresponse.md)>**


## deleteClassById

Deletes a class by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteClassByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.deleteClassById({
  id: 120196,
}).then((res: DeleteClassByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteClassByIdRequest](../../models/operations/deleteclassbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteClassByIdResponse](../../models/operations/deleteclassbyidresponse.md)>**


## deleteClassByName

Deletes a class by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteClassByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.deleteClassByName({
  name: "Miss Valerie Kshlerin",
}).then((res: DeleteClassByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteClassByNameRequest](../../models/operations/deleteclassbynamerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteClassByNameResponse](../../models/operations/deleteclassbynameresponse.md)>**


## findClasses

Finds all classes

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindClassesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.findClasses().then((res: FindClassesResponse) => {
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

**Promise<[operations.FindClassesResponse](../../models/operations/findclassesresponse.md)>**


## findClassesById

Finds classes by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindClassesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.findClassesById({
  id: 880476,
}).then((res: FindClassesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindClassesByIdRequest](../../models/operations/findclassesbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindClassesByIdResponse](../../models/operations/findclassesbyidresponse.md)>**


## findClassesByName

Finds classes by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindClassesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.findClassesByName({
  name: "Elvira Bergnaum",
}).then((res: FindClassesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindClassesByNameRequest](../../models/operations/findclassesbynamerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindClassesByNameResponse](../../models/operations/findclassesbynameresponse.md)>**


## updateClassById

The mobile device list is not used by this operation, the mobile device group is used instead.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateClassByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.updateClassById({
  id: 565189,
}).then((res: UpdateClassByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateClassByIdRequest](../../models/operations/updateclassbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateClassByIdResponse](../../models/operations/updateclassbyidresponse.md)>**


## updateClassByName

The mobile device list is not used by this operation, the mobile device group is used instead.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateClassByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.classes.updateClassByName({
  name: "Ervin Gleason",
}).then((res: UpdateClassByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateClassByNameRequest](../../models/operations/updateclassbynamerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateClassByNameResponse](../../models/operations/updateclassbynameresponse.md)>**

