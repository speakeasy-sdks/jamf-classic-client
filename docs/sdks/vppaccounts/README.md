# Vppaccounts
(*vppaccounts*)

### Available Operations

* [createVPPAdminAccountById](#createvppadminaccountbyid) - Creates a new VPP account by ID
* [deleteVPPAdminAccountById](#deletevppadminaccountbyid) - Deletes a VPP account by ID
* [findVPPAdminAccount](#findvppadminaccount) - Finds all VPP Accounts
* [findVPPAdminAccountById](#findvppadminaccountbyid) - Finds VPP Account by ID
* [updateVPPAdminAccountById](#updatevppadminaccountbyid) - Updates a VPP account by ID

## createVPPAdminAccountById

The service_token value may not match another vpp account. account_name and expiration_date are derived from the service token.

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

  const res = await sdk.vppaccounts.createVPPAdminAccountById({
    id: 386805,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateVPPAdminAccountByIdRequest](../../models/operations/createvppadminaccountbyidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateVPPAdminAccountByIdResponse](../../models/operations/createvppadminaccountbyidresponse.md)>**


## deleteVPPAdminAccountById

Deletes a VPP account by ID

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

  const res = await sdk.vppaccounts.deleteVPPAdminAccountById({
    id: 741460,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeleteVPPAdminAccountByIdRequest](../../models/operations/deletevppadminaccountbyidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteVPPAdminAccountByIdResponse](../../models/operations/deletevppadminaccountbyidresponse.md)>**


## findVPPAdminAccount

Finds all VPP Accounts

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

  const res = await sdk.vppaccounts.findVPPAdminAccount();

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

**Promise<[operations.FindVPPAdminAccountResponse](../../models/operations/findvppadminaccountresponse.md)>**


## findVPPAdminAccountById

Finds VPP Account by ID

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

  const res = await sdk.vppaccounts.findVPPAdminAccountById({
    id: 769449,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindVPPAdminAccountByIdRequest](../../models/operations/findvppadminaccountbyidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindVPPAdminAccountByIdResponse](../../models/operations/findvppadminaccountbyidresponse.md)>**


## updateVPPAdminAccountById

The service_token value may not match another vpp account. account_name and expiration_date are derived from the service token.

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

  const res = await sdk.vppaccounts.updateVPPAdminAccountById({
    id: 102957,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UpdateVPPAdminAccountByIdRequest](../../models/operations/updatevppadminaccountbyidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateVPPAdminAccountByIdResponse](../../models/operations/updatevppadminaccountbyidresponse.md)>**

