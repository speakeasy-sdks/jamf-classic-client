# webhooks

### Available Operations

* [createWebhookById](#createwebhookbyid) - Creates a new webhook by ID
* [deleteWebhookById](#deletewebhookbyid) - Deletes a webhook by ID
* [deleteWebhookByName](#deletewebhookbyname) - Deletes a webhook by name
* [findWebhooks](#findwebhooks) - Finds all webhooks
* [findWebhooksById](#findwebhooksbyid) - Finds webhooks by ID
* [findWebhooksByName](#findwebhooksbyname) - Finds webhooks by name
* [updateWebhookById](#updatewebhookbyid) - Updates an existing webhook by ID
* [updateWebhookByName](#updatewebhookbyname) - Updates an existing webhook by name

## createWebhookById

The `display_fields` are only applicable to the `SmartGroupMobileDeviceMembershipChange` event. Accepted values (capitlization sensitive) are the same as those available from the GUI when making and Advanced Search.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateWebhookByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.createWebhookById({
  id: 609537,
}).then((res: CreateWebhookByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateWebhookByIdRequest](../../models/operations/createwebhookbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateWebhookByIdResponse](../../models/operations/createwebhookbyidresponse.md)>**


## deleteWebhookById

Deletes a webhook by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteWebhookByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.deleteWebhookById({
  id: 151230,
}).then((res: DeleteWebhookByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteWebhookByIdRequest](../../models/operations/deletewebhookbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteWebhookByIdResponse](../../models/operations/deletewebhookbyidresponse.md)>**


## deleteWebhookByName

Deletes a webhook by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteWebhookByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.deleteWebhookByName({
  name: "Kendra Hauck",
}).then((res: DeleteWebhookByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteWebhookByNameRequest](../../models/operations/deletewebhookbynamerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteWebhookByNameResponse](../../models/operations/deletewebhookbynameresponse.md)>**


## findWebhooks

Finds all webhooks

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindWebhooksResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.findWebhooks().then((res: FindWebhooksResponse) => {
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

**Promise<[operations.FindWebhooksResponse](../../models/operations/findwebhooksresponse.md)>**


## findWebhooksById

Finds webhooks by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindWebhooksByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.findWebhooksById({
  id: 569287,
}).then((res: FindWebhooksByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FindWebhooksByIdRequest](../../models/operations/findwebhooksbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FindWebhooksByIdResponse](../../models/operations/findwebhooksbyidresponse.md)>**


## findWebhooksByName

Finds webhooks by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindWebhooksByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.findWebhooksByName({
  name: "Dwight Frami",
}).then((res: FindWebhooksByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.FindWebhooksByNameRequest](../../models/operations/findwebhooksbynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.FindWebhooksByNameResponse](../../models/operations/findwebhooksbynameresponse.md)>**


## updateWebhookById

The `display_fields` are only applicable to the `SmartGroupMobileDeviceMembershipChange` event. Accepted values (capitlization sensitive) are the same as those available from the GUI when making and Advanced Search. `display_field_additions` can be used in place of the `display_fields` element to append new fields to an existing webhook.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateWebhookByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.updateWebhookById({
  id: 363845,
}).then((res: UpdateWebhookByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateWebhookByIdRequest](../../models/operations/updatewebhookbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateWebhookByIdResponse](../../models/operations/updatewebhookbyidresponse.md)>**


## updateWebhookByName

Updates an existing webhook by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateWebhookByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.webhooks.updateWebhookByName({
  name: "Adrienne White",
}).then((res: UpdateWebhookByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateWebhookByNameRequest](../../models/operations/updatewebhookbynamerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateWebhookByNameResponse](../../models/operations/updatewebhookbynameresponse.md)>**

