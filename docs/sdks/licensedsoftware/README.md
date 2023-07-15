# licensedsoftware

### Available Operations

* [createLicensedSoftwareById](#createlicensedsoftwarebyid) - Creates new licensed software by ID
* [deleteLicensedSoftwareById](#deletelicensedsoftwarebyid) - Deletes licensed software by ID
* [deleteLicensedSoftwareByName](#deletelicensedsoftwarebyname) - Deletes licensed software by name
* [findLicensedSoftware](#findlicensedsoftware) - Finds all licensed software
* [findLicensedSoftwareById](#findlicensedsoftwarebyid) - Finds licensed software by ID
* [findLicensedSoftwareByName](#findlicensedsoftwarebyname) - Finds licensed software by name
* [updateLicensedSoftwareById](#updatelicensedsoftwarebyid) - Updates existing licensed software by ID
* [updateLicensedSoftwareByName](#updatelicensedsoftwarebyname) - Updates an existing licensed software by name

## createLicensedSoftwareById

Matching computers are derived from software definitions, therefore they cannot be set with this operation.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateLicensedSoftwareByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.createLicensedSoftwareById({
  id: 907733,
}).then((res: CreateLicensedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateLicensedSoftwareByIdRequest](../../models/operations/createlicensedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateLicensedSoftwareByIdResponse](../../models/operations/createlicensedsoftwarebyidresponse.md)>**


## deleteLicensedSoftwareById

Deletes licensed software by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteLicensedSoftwareByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.deleteLicensedSoftwareById({
  id: 184362,
}).then((res: DeleteLicensedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteLicensedSoftwareByIdRequest](../../models/operations/deletelicensedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteLicensedSoftwareByIdResponse](../../models/operations/deletelicensedsoftwarebyidresponse.md)>**


## deleteLicensedSoftwareByName

Deletes licensed software by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteLicensedSoftwareByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.deleteLicensedSoftwareByName({
  name: "Elmer Treutel",
}).then((res: DeleteLicensedSoftwareByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteLicensedSoftwareByNameRequest](../../models/operations/deletelicensedsoftwarebynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteLicensedSoftwareByNameResponse](../../models/operations/deletelicensedsoftwarebynameresponse.md)>**


## findLicensedSoftware

Finds all licensed software

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindLicensedSoftwareResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.findLicensedSoftware().then((res: FindLicensedSoftwareResponse) => {
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

**Promise<[operations.FindLicensedSoftwareResponse](../../models/operations/findlicensedsoftwareresponse.md)>**


## findLicensedSoftwareById

Finds licensed software by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindLicensedSoftwareByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.findLicensedSoftwareById({
  id: 715208,
}).then((res: FindLicensedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.FindLicensedSoftwareByIdRequest](../../models/operations/findlicensedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.FindLicensedSoftwareByIdResponse](../../models/operations/findlicensedsoftwarebyidresponse.md)>**


## findLicensedSoftwareByName

Finds licensed software by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindLicensedSoftwareByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.findLicensedSoftwareByName({
  name: "Jordan Haag",
}).then((res: FindLicensedSoftwareByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.FindLicensedSoftwareByNameRequest](../../models/operations/findlicensedsoftwarebynamerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.FindLicensedSoftwareByNameResponse](../../models/operations/findlicensedsoftwarebynameresponse.md)>**


## updateLicensedSoftwareById

Matching computers are derived from software definitions, therefore they cannot be set with this operation.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateLicensedSoftwareByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.updateLicensedSoftwareById({
  id: 3099,
}).then((res: UpdateLicensedSoftwareByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateLicensedSoftwareByIdRequest](../../models/operations/updatelicensedsoftwarebyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateLicensedSoftwareByIdResponse](../../models/operations/updatelicensedsoftwarebyidresponse.md)>**


## updateLicensedSoftwareByName

Matching computers are derived from software definitions, therefore they cannot be set with this operation.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateLicensedSoftwareByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.licensedsoftware.updateLicensedSoftwareByName({
  name: "Katrina Kovacek",
}).then((res: UpdateLicensedSoftwareByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateLicensedSoftwareByNameRequest](../../models/operations/updatelicensedsoftwarebynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateLicensedSoftwareByNameResponse](../../models/operations/updatelicensedsoftwarebynameresponse.md)>**

