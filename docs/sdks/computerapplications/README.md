# Computerapplications
(*computerapplications*)

### Available Operations

* [findComputerApplicationByNameAndVersion](#findcomputerapplicationbynameandversion) - Finds computer applications by name and version
* [findComputerApplicationsByName](#findcomputerapplicationsbyname) - Finds computer applications by name
* [findComputerApplicationsByNameAndVersionAndInventory](#findcomputerapplicationsbynameandversionandinventory) - Finds computer applications by name and version
* [findComputerApplicationsByNameInventory](#findcomputerapplicationsbynameinventory) - Finds computer applications by name with additional display fields

## findComputerApplicationByNameAndVersion

Finds computer applications by name and version

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerApplicationByNameAndVersionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplications.findComputerApplicationByNameAndVersion({
  application: "veritatis",
  version: "itaque",
}).then((res: FindComputerApplicationByNameAndVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindComputerApplicationByNameAndVersionRequest](../../models/operations/findcomputerapplicationbynameandversionrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindComputerApplicationByNameAndVersionResponse](../../models/operations/findcomputerapplicationbynameandversionresponse.md)>**


## findComputerApplicationsByName

Finds computer applications by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerApplicationsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplications.findComputerApplicationsByName({
  application: "incidunt",
}).then((res: FindComputerApplicationsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindComputerApplicationsByNameRequest](../../models/operations/findcomputerapplicationsbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindComputerApplicationsByNameResponse](../../models/operations/findcomputerapplicationsbynameresponse.md)>**


## findComputerApplicationsByNameAndVersionAndInventory

Generates additional inventory data for the devices matching the search criteria. Inventory values may be displayed in addition to computer identification information. Use Default to view the same fields as those checked for Inventory Display, otherwise list display fields separated by commas.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerApplicationsByNameAndVersionAndInventoryResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplications.findComputerApplicationsByNameAndVersionAndInventory({
  application: "enim",
  inventory: "consequatur",
  version: "est",
}).then((res: FindComputerApplicationsByNameAndVersionAndInventoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.FindComputerApplicationsByNameAndVersionAndInventoryRequest](../../models/operations/findcomputerapplicationsbynameandversionandinventoryrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.FindComputerApplicationsByNameAndVersionAndInventoryResponse](../../models/operations/findcomputerapplicationsbynameandversionandinventoryresponse.md)>**


## findComputerApplicationsByNameInventory

Valid values for inventory are comma separated Display Fields for computers. Display Fields with spaces must be percent encoded (e.g. /computerapplications/application/Safari.app/inventory/Operating%20System,Last%20Check-in)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerApplicationsByNameInventoryResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplications.findComputerApplicationsByNameInventory({
  application: "quibusdam",
  inventory: "explicabo",
}).then((res: FindComputerApplicationsByNameInventoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindComputerApplicationsByNameInventoryRequest](../../models/operations/findcomputerapplicationsbynameinventoryrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindComputerApplicationsByNameInventoryResponse](../../models/operations/findcomputerapplicationsbynameinventoryresponse.md)>**

