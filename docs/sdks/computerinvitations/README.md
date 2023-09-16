# Computerinvitations

### Available Operations

* [createComputerInvitationsById](#createcomputerinvitationsbyid) - Creates a new computer invitation by id
* [createComputerInvitationsByInvitation](#createcomputerinvitationsbyinvitation) - Creates a new computer invitation by invitation
* [deleteComputerInvitationById](#deletecomputerinvitationbyid) - Deletes a computer invitation by id
* [deleteComputerInvitationByInvitation](#deletecomputerinvitationbyinvitation) - Deletes a computer invitation by invitation
* [findComputerInvitations](#findcomputerinvitations) - Finds all computer invitations
* [findComputerInvitationsById](#findcomputerinvitationsbyid) - Finds computer invitations by id
* [findComputerInvitationsByInvitation](#findcomputerinvitationsbyinvitation) - Finds computer invitations by invitation

## createComputerInvitationsById

Creates a new computer invitation by id

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateComputerInvitationsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinvitations.createComputerInvitationsById({
  id: 9240,
}).then((res: CreateComputerInvitationsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.CreateComputerInvitationsByIdRequest](../../models/operations/createcomputerinvitationsbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.CreateComputerInvitationsByIdResponse](../../models/operations/createcomputerinvitationsbyidresponse.md)>**


## createComputerInvitationsByInvitation

Creates a new computer invitation by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateComputerInvitationsByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinvitations.createComputerInvitationsByInvitation({
  invitation: 669917,
}).then((res: CreateComputerInvitationsByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.CreateComputerInvitationsByInvitationRequest](../../models/operations/createcomputerinvitationsbyinvitationrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.CreateComputerInvitationsByInvitationResponse](../../models/operations/createcomputerinvitationsbyinvitationresponse.md)>**


## deleteComputerInvitationById

Deletes a computer invitation by id

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerInvitationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinvitations.deleteComputerInvitationById({
  id: 833038,
}).then((res: DeleteComputerInvitationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteComputerInvitationByIdRequest](../../models/operations/deletecomputerinvitationbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteComputerInvitationByIdResponse](../../models/operations/deletecomputerinvitationbyidresponse.md)>**


## deleteComputerInvitationByInvitation

Deletes a computer invitation by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerInvitationByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinvitations.deleteComputerInvitationByInvitation({
  invitation: 785153,
}).then((res: DeleteComputerInvitationByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DeleteComputerInvitationByInvitationRequest](../../models/operations/deletecomputerinvitationbyinvitationrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteComputerInvitationByInvitationResponse](../../models/operations/deletecomputerinvitationbyinvitationresponse.md)>**


## findComputerInvitations

Finds all computer invitations

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerInvitationsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinvitations.findComputerInvitations().then((res: FindComputerInvitationsResponse) => {
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

**Promise<[operations.FindComputerInvitationsResponse](../../models/operations/findcomputerinvitationsresponse.md)>**


## findComputerInvitationsById

Finds computer invitations by id

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerInvitationsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinvitations.findComputerInvitationsById({
  id: 984330,
}).then((res: FindComputerInvitationsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindComputerInvitationsByIdRequest](../../models/operations/findcomputerinvitationsbyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindComputerInvitationsByIdResponse](../../models/operations/findcomputerinvitationsbyidresponse.md)>**


## findComputerInvitationsByInvitation

Finds computer invitations by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerInvitationsByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinvitations.findComputerInvitationsByInvitation({
  invitation: 281730,
}).then((res: FindComputerInvitationsByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindComputerInvitationsByInvitationRequest](../../models/operations/findcomputerinvitationsbyinvitationrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindComputerInvitationsByInvitationResponse](../../models/operations/findcomputerinvitationsbyinvitationresponse.md)>**

