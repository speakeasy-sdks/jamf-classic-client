# Computerinvitations
(*computerinvitations*)

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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinvitations.createComputerInvitationsById({
    id: 426166,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinvitations.createComputerInvitationsByInvitation({
    invitation: 107268,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinvitations.deleteComputerInvitationById({
    id: 620598,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinvitations.deleteComputerInvitationByInvitation({
    invitation: 706715,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinvitations.findComputerInvitations();

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

**Promise<[operations.FindComputerInvitationsResponse](../../models/operations/findcomputerinvitationsresponse.md)>**


## findComputerInvitationsById

Finds computer invitations by id

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

  const res = await sdk.computerinvitations.findComputerInvitationsById({
    id: 737242,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinvitations.findComputerInvitationsByInvitation({
    invitation: 681787,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindComputerInvitationsByInvitationRequest](../../models/operations/findcomputerinvitationsbyinvitationrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindComputerInvitationsByInvitationResponse](../../models/operations/findcomputerinvitationsbyinvitationresponse.md)>**

