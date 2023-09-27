# Printers
(*printers*)

### Available Operations

* [createPrinterById](#createprinterbyid) - Creates a new printer by ID
* [deletePrinterById](#deleteprinterbyid) - Deletes a printer by ID
* [deletePrinterByName](#deleteprinterbyname) - Deletes a printer by name
* [findPrinters](#findprinters) - Finds all printers
* [findPrintersById](#findprintersbyid) - Finds printers by ID
* [findPrintersByName](#findprintersbyname) - Finds printers by name
* [updatePrinterById](#updateprinterbyid) - Updates an existing printer by ID
* [updatePrinterByName](#updateprinterbyname) - Updates an existing printer by name

## createPrinterById

Creates a new printer by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreatePrinterByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.createPrinterById({
  id: 816365,
}).then((res: CreatePrinterByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreatePrinterByIdRequest](../../models/operations/createprinterbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreatePrinterByIdResponse](../../models/operations/createprinterbyidresponse.md)>**


## deletePrinterById

Deletes a printer by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeletePrinterByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.deletePrinterById({
  id: 307173,
}).then((res: DeletePrinterByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeletePrinterByIdRequest](../../models/operations/deleteprinterbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeletePrinterByIdResponse](../../models/operations/deleteprinterbyidresponse.md)>**


## deletePrinterByName

Deletes a printer by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeletePrinterByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.deletePrinterByName({
  name: "Domingo Stark",
}).then((res: DeletePrinterByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeletePrinterByNameRequest](../../models/operations/deleteprinterbynamerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeletePrinterByNameResponse](../../models/operations/deleteprinterbynameresponse.md)>**


## findPrinters

Finds all printers

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPrintersResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.findPrinters().then((res: FindPrintersResponse) => {
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

**Promise<[operations.FindPrintersResponse](../../models/operations/findprintersresponse.md)>**


## findPrintersById

Finds printers by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPrintersByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.findPrintersById({
  id: 245278,
}).then((res: FindPrintersByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FindPrintersByIdRequest](../../models/operations/findprintersbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FindPrintersByIdResponse](../../models/operations/findprintersbyidresponse.md)>**


## findPrintersByName

Finds printers by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPrintersByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.findPrintersByName({
  name: "Dr. Peggy Murray",
}).then((res: FindPrintersByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.FindPrintersByNameRequest](../../models/operations/findprintersbynamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.FindPrintersByNameResponse](../../models/operations/findprintersbynameresponse.md)>**


## updatePrinterById

Updates an existing printer by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdatePrinterByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.updatePrinterById({
  id: 987890,
}).then((res: UpdatePrinterByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdatePrinterByIdRequest](../../models/operations/updateprinterbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdatePrinterByIdResponse](../../models/operations/updateprinterbyidresponse.md)>**


## updatePrinterByName

Updates an existing printer by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdatePrinterByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.printers.updatePrinterByName({
  name: "Mrs. Stuart Gorczany",
}).then((res: UpdatePrinterByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdatePrinterByNameRequest](../../models/operations/updateprinterbynamerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdatePrinterByNameResponse](../../models/operations/updateprinterbynameresponse.md)>**

