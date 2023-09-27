# Infrastructuremanager
(*infrastructuremanager*)

### Available Operations

* [findInfrastructureManager](#findinfrastructuremanager) - Find all Infrastructure Managers
* [findInfrastructureManagerById](#findinfrastructuremanagerbyid) - Finds infrastructure manager by ID
* [updateInfrastructureManagerById](#updateinfrastructuremanagerbyid) - Updates an existing infrastructure manager by ID

## findInfrastructureManager

Find all Infrastructure Managers

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindInfrastructureManagerResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.infrastructuremanager.findInfrastructureManager().then((res: FindInfrastructureManagerResponse) => {
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

**Promise<[operations.FindInfrastructureManagerResponse](../../models/operations/findinfrastructuremanagerresponse.md)>**


## findInfrastructureManagerById

Finds infrastructure manager by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindInfrastructureManagerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.infrastructuremanager.findInfrastructureManagerById({
  id: 639028,
}).then((res: FindInfrastructureManagerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindInfrastructureManagerByIdRequest](../../models/operations/findinfrastructuremanagerbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindInfrastructureManagerByIdResponse](../../models/operations/findinfrastructuremanagerbyidresponse.md)>**


## updateInfrastructureManagerById

Updates an existing infrastructure manager by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateInfrastructureManagerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.infrastructuremanager.updateInfrastructureManagerById({
  id: 676243,
}).then((res: UpdateInfrastructureManagerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.UpdateInfrastructureManagerByIdRequest](../../models/operations/updateinfrastructuremanagerbyidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.UpdateInfrastructureManagerByIdResponse](../../models/operations/updateinfrastructuremanagerbyidresponse.md)>**

