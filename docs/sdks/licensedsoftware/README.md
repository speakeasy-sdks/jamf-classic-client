# Licensedsoftware
(*.licensedsoftware*)

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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.createLicensedSoftwareById({
    id: 186021,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.deleteLicensedSoftwareById({
    id: 61769,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.deleteLicensedSoftwareByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.findLicensedSoftware();


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.findLicensedSoftwareById({
    id: 987654,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.findLicensedSoftwareByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.updateLicensedSoftwareById({
    id: 345542,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.licensedsoftware.updateLicensedSoftwareByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateLicensedSoftwareByNameRequest](../../models/operations/updatelicensedsoftwarebynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateLicensedSoftwareByNameResponse](../../models/operations/updatelicensedsoftwarebynameresponse.md)>**

