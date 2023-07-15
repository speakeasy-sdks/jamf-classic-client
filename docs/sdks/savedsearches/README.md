# savedsearches

### Available Operations

* [~~savedsearchesGet~~](#savedsearchesget) - Finds all saved searches (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**
* [~~savedsearchesIdByIdGet~~](#savedsearchesidbyidget) - Finds saved searches by ID (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**
* [~~savedsearchesNameByNameGet~~](#savedsearchesnamebynameget) - Finds saved searches by name (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**

## ~~savedsearchesGet~~

Finds all saved searches (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { SavedsearchesGetResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.savedsearches.savedsearchesGet().then((res: SavedsearchesGetResponse) => {
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

**Promise<[operations.SavedsearchesGetResponse](../../models/operations/savedsearchesgetresponse.md)>**


## ~~savedsearchesIdByIdGet~~

Finds saved searches by ID (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { SavedsearchesIdByIdGetResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.savedsearches.savedsearchesIdByIdGet({
  id: "bbc05a23-a45c-4efc-9fde-10a0ce2169e5",
}).then((res: SavedsearchesIdByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.SavedsearchesIdByIdGetRequest](../../models/operations/savedsearchesidbyidgetrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.SavedsearchesIdByIdGetResponse](../../models/operations/savedsearchesidbyidgetresponse.md)>**


## ~~savedsearchesNameByNameGet~~

Finds saved searches by name (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { SavedsearchesNameByNameGetResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.savedsearches.savedsearchesNameByNameGet({
  name: "Ms. Donna Auer",
}).then((res: SavedsearchesNameByNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.SavedsearchesNameByNameGetRequest](../../models/operations/savedsearchesnamebynamegetrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.SavedsearchesNameByNameGetResponse](../../models/operations/savedsearchesnamebynamegetresponse.md)>**
