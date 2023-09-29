# Mobiledeviceextensionattributes
(*mobiledeviceextensionattributes*)

### Available Operations

* [createMobiledeviceextensionattributeById](#createmobiledeviceextensionattributebyid) - Creates a new mobile device extension attribute by ID
* [deleteMobiledeviceextensionattributeById](#deletemobiledeviceextensionattributebyid) - Deletes a mobile device extension attribute by ID
* [deleteMobiledeviceextensionattributeByName](#deletemobiledeviceextensionattributebyname) - Deletes a mobile device extension attribute by name
* [findMobiledeviceextensionattributes](#findmobiledeviceextensionattributes) - Finds all mobile device extension attributes
* [findMobiledeviceextensionattributesById](#findmobiledeviceextensionattributesbyid) - Finds mobile device extension attributes by ID
* [findMobiledeviceextensionattributesByName](#findmobiledeviceextensionattributesbyname) - Finds mobiledeviceextensionattributes by name
* [updateMobiledeviceextensionattributeById](#updatemobiledeviceextensionattributebyid) - Updates an existing mobile device extension attribute by ID
* [updateMobiledeviceextensionattributeByName](#updatemobiledeviceextensionattributebyname) - Updates an existing mobile device extension attribute by name

## createMobiledeviceextensionattributeById

Creates a new mobile device extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobiledeviceextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.createMobiledeviceextensionattributeById({
  id: 775079,
}).then((res: CreateMobiledeviceextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.CreateMobiledeviceextensionattributeByIdRequest](../../models/operations/createmobiledeviceextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.CreateMobiledeviceextensionattributeByIdResponse](../../models/operations/createmobiledeviceextensionattributebyidresponse.md)>**


## deleteMobiledeviceextensionattributeById

Deletes a mobile device extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobiledeviceextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.deleteMobiledeviceextensionattributeById({
  id: 187773,
}).then((res: DeleteMobiledeviceextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.DeleteMobiledeviceextensionattributeByIdRequest](../../models/operations/deletemobiledeviceextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteMobiledeviceextensionattributeByIdResponse](../../models/operations/deletemobiledeviceextensionattributebyidresponse.md)>**


## deleteMobiledeviceextensionattributeByName

Deletes a mobile device extension attribute by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobiledeviceextensionattributeByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.deleteMobiledeviceextensionattributeByName({
  name: "Northwest panel",
}).then((res: DeleteMobiledeviceextensionattributeByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.DeleteMobiledeviceextensionattributeByNameRequest](../../models/operations/deletemobiledeviceextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeleteMobiledeviceextensionattributeByNameResponse](../../models/operations/deletemobiledeviceextensionattributebynameresponse.md)>**


## findMobiledeviceextensionattributes

Finds all mobile device extension attributes

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobiledeviceextensionattributesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.findMobiledeviceextensionattributes().then((res: FindMobiledeviceextensionattributesResponse) => {
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

**Promise<[operations.FindMobiledeviceextensionattributesResponse](../../models/operations/findmobiledeviceextensionattributesresponse.md)>**


## findMobiledeviceextensionattributesById

Finds mobile device extension attributes by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobiledeviceextensionattributesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.findMobiledeviceextensionattributesById({
  id: 629314,
}).then((res: FindMobiledeviceextensionattributesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindMobiledeviceextensionattributesByIdRequest](../../models/operations/findmobiledeviceextensionattributesbyidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindMobiledeviceextensionattributesByIdResponse](../../models/operations/findmobiledeviceextensionattributesbyidresponse.md)>**


## findMobiledeviceextensionattributesByName

Finds mobiledeviceextensionattributes by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobiledeviceextensionattributesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.findMobiledeviceextensionattributesByName({
  name: "Soft Honda",
}).then((res: FindMobiledeviceextensionattributesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.FindMobiledeviceextensionattributesByNameRequest](../../models/operations/findmobiledeviceextensionattributesbynamerequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindMobiledeviceextensionattributesByNameResponse](../../models/operations/findmobiledeviceextensionattributesbynameresponse.md)>**


## updateMobiledeviceextensionattributeById

Updates an existing mobile device extension attribute by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobiledeviceextensionattributeByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.updateMobiledeviceextensionattributeById({
  id: 268156,
}).then((res: UpdateMobiledeviceextensionattributeByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.UpdateMobiledeviceextensionattributeByIdRequest](../../models/operations/updatemobiledeviceextensionattributebyidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.UpdateMobiledeviceextensionattributeByIdResponse](../../models/operations/updatemobiledeviceextensionattributebyidresponse.md)>**


## updateMobiledeviceextensionattributeByName

Updates an existing mobile device extension attribute by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobiledeviceextensionattributeByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceextensionattributes.updateMobiledeviceextensionattributeByName({
  name: "ad Polestar",
}).then((res: UpdateMobiledeviceextensionattributeByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.UpdateMobiledeviceextensionattributeByNameRequest](../../models/operations/updatemobiledeviceextensionattributebynamerequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.UpdateMobiledeviceextensionattributeByNameResponse](../../models/operations/updatemobiledeviceextensionattributebynameresponse.md)>**

