# removablemacaddresses

### Available Operations

* [createRemovableMacAddressById](#createremovablemacaddressbyid) - Creates a new removable Mac address by ID
* [deleteRemovableMacAddressById](#deleteremovablemacaddressbyid) - Deletes a removable Mac address by ID
* [deleteRemovableMacAddressByName](#deleteremovablemacaddressbyname) - Deletes a removable Mac address by name
* [findRemovableMacAddresses](#findremovablemacaddresses) - Finds all removable Mac addresses
* [findRemovableMacAddressesById](#findremovablemacaddressesbyid) - Finds removable Mac addresses by ID
* [findRemovableMacAddressesByName](#findremovablemacaddressesbyname) - Finds removable Mac addresses by name
* [updateRemovableMacAddressById](#updateremovablemacaddressbyid) - Updates an existing removable Mac address by ID
* [updateRemovableMacAddressByName](#updateremovablemacaddressbyname) - Updates an existing removable Mac address by name

## createRemovableMacAddressById

Creates a new removable Mac address by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateRemovableMacAddressByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.createRemovableMacAddressById({
  id: 761437,
}).then((res: CreateRemovableMacAddressByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.CreateRemovableMacAddressByIdRequest](../../models/operations/createremovablemacaddressbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.CreateRemovableMacAddressByIdResponse](../../models/operations/createremovablemacaddressbyidresponse.md)>**


## deleteRemovableMacAddressById

Deletes a removable Mac address by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteRemovableMacAddressByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.deleteRemovableMacAddressById({
  id: 2064,
}).then((res: DeleteRemovableMacAddressByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteRemovableMacAddressByIdRequest](../../models/operations/deleteremovablemacaddressbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteRemovableMacAddressByIdResponse](../../models/operations/deleteremovablemacaddressbyidresponse.md)>**


## deleteRemovableMacAddressByName

Deletes a removable Mac address by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteRemovableMacAddressByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.deleteRemovableMacAddressByName({
  name: "Antonio Jerde",
}).then((res: DeleteRemovableMacAddressByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteRemovableMacAddressByNameRequest](../../models/operations/deleteremovablemacaddressbynamerequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteRemovableMacAddressByNameResponse](../../models/operations/deleteremovablemacaddressbynameresponse.md)>**


## findRemovableMacAddresses

Finds all removable Mac addresses

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindRemovableMacAddressesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.findRemovableMacAddresses().then((res: FindRemovableMacAddressesResponse) => {
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

**Promise<[operations.FindRemovableMacAddressesResponse](../../models/operations/findremovablemacaddressesresponse.md)>**


## findRemovableMacAddressesById

Finds removable Mac addresses by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindRemovableMacAddressesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.findRemovableMacAddressesById({
  id: 330440,
}).then((res: FindRemovableMacAddressesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindRemovableMacAddressesByIdRequest](../../models/operations/findremovablemacaddressesbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindRemovableMacAddressesByIdResponse](../../models/operations/findremovablemacaddressesbyidresponse.md)>**


## findRemovableMacAddressesByName

Finds removable Mac addresses by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindRemovableMacAddressesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.findRemovableMacAddressesByName({
  name: "Luke Mayer",
}).then((res: FindRemovableMacAddressesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindRemovableMacAddressesByNameRequest](../../models/operations/findremovablemacaddressesbynamerequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindRemovableMacAddressesByNameResponse](../../models/operations/findremovablemacaddressesbynameresponse.md)>**


## updateRemovableMacAddressById

Updates an existing removable Mac address by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateRemovableMacAddressByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.updateRemovableMacAddressById({
  id: 947822,
}).then((res: UpdateRemovableMacAddressByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.UpdateRemovableMacAddressByIdRequest](../../models/operations/updateremovablemacaddressbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UpdateRemovableMacAddressByIdResponse](../../models/operations/updateremovablemacaddressbyidresponse.md)>**


## updateRemovableMacAddressByName

Updates an existing removable Mac address by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateRemovableMacAddressByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.removablemacaddresses.updateRemovableMacAddressByName({
  name: "Pam Kirlin",
}).then((res: UpdateRemovableMacAddressByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.UpdateRemovableMacAddressByNameRequest](../../models/operations/updateremovablemacaddressbynamerequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.UpdateRemovableMacAddressByNameResponse](../../models/operations/updateremovablemacaddressbynameresponse.md)>**
