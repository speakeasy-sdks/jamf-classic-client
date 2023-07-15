# vppinvitations

### Available Operations

* [createInvitationById](#createinvitationbyid) - Creates a new VPP invitation by ID
* [deleteInvitationById](#deleteinvitationbyid) - Deletes a VPP invitation by ID
* [findInvitationById](#findinvitationbyid) - Finds a VPP Invitation by ID
* [findInvitationsByIdSubset](#findinvitationsbyidsubset) - Finds a subset of data for a VPP invitation
* [findVPPAdminInvitation](#findvppadmininvitation) - Finds all VPP Invitations
* [updateInvitationById](#updateinvitationbyid) - Updates a VPP invitation by ID

## createInvitationById

The following fields are also required if 'Send Emails' distribution method is specified - sender_name, sender_email_address, subject

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateInvitationByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.vppinvitations.createInvitationById({
  id: 631719,
}).then((res: CreateInvitationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateInvitationByIdRequest](../../models/operations/createinvitationbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateInvitationByIdResponse](../../models/operations/createinvitationbyidresponse.md)>**


## deleteInvitationById

Deletes a VPP invitation by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteInvitationByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.vppinvitations.deleteInvitationById({
  id: 278116,
}).then((res: DeleteInvitationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteInvitationByIdRequest](../../models/operations/deleteinvitationbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteInvitationByIdResponse](../../models/operations/deleteinvitationbyidresponse.md)>**


## findInvitationById

Finds a VPP Invitation by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindInvitationByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.vppinvitations.findInvitationById({
  id: 462583,
}).then((res: FindInvitationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.FindInvitationByIdRequest](../../models/operations/findinvitationbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.FindInvitationByIdResponse](../../models/operations/findinvitationbyidresponse.md)>**


## findInvitationsByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindInvitationsByIdSubsetResponse, FindInvitationsByIdSubsetSubset } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.vppinvitations.findInvitationsByIdSubset({
  id: 169312,
  subset: FindInvitationsByIdSubsetSubset.Scope,
}).then((res: FindInvitationsByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindInvitationsByIdSubsetRequest](../../models/operations/findinvitationsbyidsubsetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindInvitationsByIdSubsetResponse](../../models/operations/findinvitationsbyidsubsetresponse.md)>**


## findVPPAdminInvitation

Finds all VPP Invitations

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindVPPAdminInvitationResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.vppinvitations.findVPPAdminInvitation().then((res: FindVPPAdminInvitationResponse) => {
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

**Promise<[operations.FindVPPAdminInvitationResponse](../../models/operations/findvppadmininvitationresponse.md)>**


## updateInvitationById

Usages are ignored for this operation

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateInvitationByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.vppinvitations.updateInvitationById({
  id: 965095,
}).then((res: UpdateInvitationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateInvitationByIdRequest](../../models/operations/updateinvitationbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateInvitationByIdResponse](../../models/operations/updateinvitationbyidresponse.md)>**

