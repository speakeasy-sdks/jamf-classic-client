# softwareupdateservers

### Available Operations

* [createSoftwareUpdateServerById](#createsoftwareupdateserverbyid) - Creates a new software update server by ID
* [deleteSoftwareUpdateServerById](#deletesoftwareupdateserverbyid) - Deletes a software update server by ID
* [deleteSoftwareUpdateServerByName](#deletesoftwareupdateserverbyname) - Deletes a software update server by name
* [findSoftwareUpdateServers](#findsoftwareupdateservers) - Finds all software update servers
* [findSoftwareUpdateServersById](#findsoftwareupdateserversbyid) - Finds software update servers by ID
* [findSoftwareUpdateServersByName](#findsoftwareupdateserversbyname) - Finds software update servers by name
* [updateSoftwareUpdateServerById](#updatesoftwareupdateserverbyid) - Updates an existing software update server by ID
* [updateSoftwareUpdateServerByName](#updatesoftwareupdateserverbyname) - Updates an existing software update server by name

## createSoftwareUpdateServerById

Creates a new software update server by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateSoftwareUpdateServerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.createSoftwareUpdateServerById({
  id: 247618,
}).then((res: CreateSoftwareUpdateServerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreateSoftwareUpdateServerByIdRequest](../../models/operations/createsoftwareupdateserverbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateSoftwareUpdateServerByIdResponse](../../models/operations/createsoftwareupdateserverbyidresponse.md)>**


## deleteSoftwareUpdateServerById

Deletes a software update server by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteSoftwareUpdateServerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.deleteSoftwareUpdateServerById({
  id: 649534,
}).then((res: DeleteSoftwareUpdateServerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteSoftwareUpdateServerByIdRequest](../../models/operations/deletesoftwareupdateserverbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteSoftwareUpdateServerByIdResponse](../../models/operations/deletesoftwareupdateserverbyidresponse.md)>**


## deleteSoftwareUpdateServerByName

Deletes a software update server by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteSoftwareUpdateServerByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.deleteSoftwareUpdateServerByName({
  name: "Clay Reichel",
}).then((res: DeleteSoftwareUpdateServerByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteSoftwareUpdateServerByNameRequest](../../models/operations/deletesoftwareupdateserverbynamerequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteSoftwareUpdateServerByNameResponse](../../models/operations/deletesoftwareupdateserverbynameresponse.md)>**


## findSoftwareUpdateServers

Finds all software update servers

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindSoftwareUpdateServersResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.findSoftwareUpdateServers().then((res: FindSoftwareUpdateServersResponse) => {
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

**Promise<[operations.FindSoftwareUpdateServersResponse](../../models/operations/findsoftwareupdateserversresponse.md)>**


## findSoftwareUpdateServersById

Finds software update servers by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindSoftwareUpdateServersByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.findSoftwareUpdateServersById({
  id: 816151,
}).then((res: FindSoftwareUpdateServersByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindSoftwareUpdateServersByIdRequest](../../models/operations/findsoftwareupdateserversbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindSoftwareUpdateServersByIdResponse](../../models/operations/findsoftwareupdateserversbyidresponse.md)>**


## findSoftwareUpdateServersByName

Finds software update servers by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindSoftwareUpdateServersByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.findSoftwareUpdateServersByName({
  name: "Conrad Pacocha",
}).then((res: FindSoftwareUpdateServersByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindSoftwareUpdateServersByNameRequest](../../models/operations/findsoftwareupdateserversbynamerequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindSoftwareUpdateServersByNameResponse](../../models/operations/findsoftwareupdateserversbynameresponse.md)>**


## updateSoftwareUpdateServerById

Updates an existing software update server by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateSoftwareUpdateServerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.updateSoftwareUpdateServerById({
  id: 369523,
}).then((res: UpdateSoftwareUpdateServerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdateSoftwareUpdateServerByIdRequest](../../models/operations/updatesoftwareupdateserverbyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdateSoftwareUpdateServerByIdResponse](../../models/operations/updatesoftwareupdateserverbyidresponse.md)>**


## updateSoftwareUpdateServerByName

Updates an existing software update server by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateSoftwareUpdateServerByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.softwareupdateservers.updateSoftwareUpdateServerByName({
  name: "Yolanda O'Connell",
}).then((res: UpdateSoftwareUpdateServerByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.UpdateSoftwareUpdateServerByNameRequest](../../models/operations/updatesoftwareupdateserverbynamerequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.UpdateSoftwareUpdateServerByNameResponse](../../models/operations/updatesoftwareupdateserverbynameresponse.md)>**

