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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceinvitations.createMobileDeviceInvitationsById({
    id: 850185,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceinvitations.createMobileDeviceInvitationsByInvitation({
    invitation: 60639,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceinvitations.deleteMobileDeviceInvitationById({
    id: 377680,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceinvitations.deleteMobileDeviceInvitationByInvitation({
    invitation: 34819,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceinvitations.findMobileDeviceInvitations();

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

**Promise<[operations.FindMobileDeviceInvitationsResponse](../../models/operations/findmobiledeviceinvitationsresponse.md)>**


## findMobileDeviceInvitationsById

Finds mobile device invitations by id

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

  const res = await sdk.mobiledeviceinvitations.findMobileDeviceInvitationsById({
    id: 522350,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledeviceinvitations.findMobileDeviceInvitationsByInvitation({
    invitation: 313759,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindMobileDeviceInvitationsByInvitationRequest](../../models/operations/findmobiledeviceinvitationsbyinvitationrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindMobileDeviceInvitationsByInvitationResponse](../../models/operations/findmobiledeviceinvitationsbyinvitationresponse.md)>**

