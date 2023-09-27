# Mobiledeviceinvitations
(*mobiledeviceinvitations*)

### Available Operations

* [createMobileDeviceInvitationsById](#createmobiledeviceinvitationsbyid) - Creates a new mobile device invitation by id
* [createMobileDeviceInvitationsByInvitation](#createmobiledeviceinvitationsbyinvitation) - Creates a new mobile device invitation by invitation
* [deleteMobileDeviceInvitationById](#deletemobiledeviceinvitationbyid) - Deletes a mobile device invitation by id
* [deleteMobileDeviceInvitationByInvitation](#deletemobiledeviceinvitationbyinvitation) - Deletes a mobile device invitation by invitation
* [findMobileDeviceInvitations](#findmobiledeviceinvitations) - Finds all mobile device invitations
* [findMobileDeviceInvitationsById](#findmobiledeviceinvitationsbyid) - Finds mobile device invitations by id
* [findMobileDeviceInvitationsByInvitation](#findmobiledeviceinvitationsbyinvitation) - Finds mobile device invitations by invitation

## createMobileDeviceInvitationsById

Creates a new mobile device invitation by id

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceInvitationsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceinvitations.createMobileDeviceInvitationsById({
  id: 300403,
}).then((res: CreateMobileDeviceInvitationsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.CreateMobileDeviceInvitationsByIdRequest](../../models/operations/createmobiledeviceinvitationsbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.CreateMobileDeviceInvitationsByIdResponse](../../models/operations/createmobiledeviceinvitationsbyidresponse.md)>**


## createMobileDeviceInvitationsByInvitation

Creates a new mobile device invitation by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceInvitationsByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceinvitations.createMobileDeviceInvitationsByInvitation({
  invitation: 836364,
}).then((res: CreateMobileDeviceInvitationsByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.CreateMobileDeviceInvitationsByInvitationRequest](../../models/operations/createmobiledeviceinvitationsbyinvitationrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.CreateMobileDeviceInvitationsByInvitationResponse](../../models/operations/createmobiledeviceinvitationsbyinvitationresponse.md)>**


## deleteMobileDeviceInvitationById

Deletes a mobile device invitation by id

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceInvitationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceinvitations.deleteMobileDeviceInvitationById({
  id: 549501,
}).then((res: DeleteMobileDeviceInvitationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteMobileDeviceInvitationByIdRequest](../../models/operations/deletemobiledeviceinvitationbyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteMobileDeviceInvitationByIdResponse](../../models/operations/deletemobiledeviceinvitationbyidresponse.md)>**


## deleteMobileDeviceInvitationByInvitation

Deletes a mobile device invitation by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceInvitationByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceinvitations.deleteMobileDeviceInvitationByInvitation({
  invitation: 415280,
}).then((res: DeleteMobileDeviceInvitationByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.DeleteMobileDeviceInvitationByInvitationRequest](../../models/operations/deletemobiledeviceinvitationbyinvitationrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteMobileDeviceInvitationByInvitationResponse](../../models/operations/deletemobiledeviceinvitationbyinvitationresponse.md)>**


## findMobileDeviceInvitations

Finds all mobile device invitations

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceInvitationsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceinvitations.findMobileDeviceInvitations().then((res: FindMobileDeviceInvitationsResponse) => {
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

**Promise<[operations.FindMobileDeviceInvitationsResponse](../../models/operations/findmobiledeviceinvitationsresponse.md)>**


## findMobileDeviceInvitationsById

Finds mobile device invitations by id

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceInvitationsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceinvitations.findMobileDeviceInvitationsById({
  id: 930819,
}).then((res: FindMobileDeviceInvitationsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindMobileDeviceInvitationsByIdRequest](../../models/operations/findmobiledeviceinvitationsbyidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindMobileDeviceInvitationsByIdResponse](../../models/operations/findmobiledeviceinvitationsbyidresponse.md)>**


## findMobileDeviceInvitationsByInvitation

Finds mobile device invitations by invitation

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceInvitationsByInvitationResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceinvitations.findMobileDeviceInvitationsByInvitation({
  invitation: 415608,
}).then((res: FindMobileDeviceInvitationsByInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindMobileDeviceInvitationsByInvitationRequest](../../models/operations/findmobiledeviceinvitationsbyinvitationrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindMobileDeviceInvitationsByInvitationResponse](../../models/operations/findmobiledeviceinvitationsbyinvitationresponse.md)>**

