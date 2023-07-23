# computerhistory

### Available Operations

* [findComputerHistoryById](#findcomputerhistorybyid) - Finds computer history by ID
* [findComputerHistoryByIdSubset](#findcomputerhistorybyidsubset) - Finds a subset of computer history data by ID
* [findComputerHistoryByMacAddress](#findcomputerhistorybymacaddress) - Finds computer history by MAC address
* [findComputerHistoryByMacAddressSubset](#findcomputerhistorybymacaddresssubset) - Finds a subset of computer history data by MAC address
* [findComputerHistoryByName](#findcomputerhistorybyname) - Finds computer history by name
* [findComputerHistoryByNameSubset](#findcomputerhistorybynamesubset) - Finds a subset of computer history data by name
* [findComputerHistoryBySerialNumber](#findcomputerhistorybyserialnumber) - Finds computer history by serial number
* [findComputerHistoryBySerialNumberSubset](#findcomputerhistorybyserialnumbersubset) - Finds a subset of computer history data by serial number
* [findComputerHistoryByUDID](#findcomputerhistorybyudid) - Finds computer history by UDID
* [findComputerHistoryByUDIDSubset](#findcomputerhistorybyudidsubset) - Finds a subset of computer history data by UDID

## findComputerHistoryById

Finds computer history by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryById({
  id: 30452,
}).then((res: FindComputerHistoryByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindComputerHistoryByIdRequest](../../models/operations/findcomputerhistorybyidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindComputerHistoryByIdResponse](../../models/operations/findcomputerhistorybyidresponse.md)>**


## findComputerHistoryByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Commands)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryByIdSubsetResponse, FindComputerHistoryByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryByIdSubset({
  id: 765326,
  subset: FindComputerHistoryByIdSubsetSubset.Commands,
}).then((res: FindComputerHistoryByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindComputerHistoryByIdSubsetRequest](../../models/operations/findcomputerhistorybyidsubsetrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindComputerHistoryByIdSubsetResponse](../../models/operations/findcomputerhistorybyidsubsetresponse.md)>**


## findComputerHistoryByMacAddress

Finds computer history by MAC address

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryByMacAddress({
  macaddress: "nobis",
}).then((res: FindComputerHistoryByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindComputerHistoryByMacAddressRequest](../../models/operations/findcomputerhistorybymacaddressrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindComputerHistoryByMacAddressResponse](../../models/operations/findcomputerhistorybymacaddressresponse.md)>**


## findComputerHistoryByMacAddressSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Commands)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerHistoryByMacAddressSubsetResponse,
  FindComputerHistoryByMacAddressSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryByMacAddressSubset({
  macaddress: "et",
  subset: FindComputerHistoryByMacAddressSubsetSubset.MacAppStoreApplications,
}).then((res: FindComputerHistoryByMacAddressSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindComputerHistoryByMacAddressSubsetRequest](../../models/operations/findcomputerhistorybymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindComputerHistoryByMacAddressSubsetResponse](../../models/operations/findcomputerhistorybymacaddresssubsetresponse.md)>**


## findComputerHistoryByName

Finds computer history by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryByName({
  name: "Carolyn Rohan",
}).then((res: FindComputerHistoryByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindComputerHistoryByNameRequest](../../models/operations/findcomputerhistorybynamerequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindComputerHistoryByNameResponse](../../models/operations/findcomputerhistorybynameresponse.md)>**


## findComputerHistoryByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Commands)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryByNameSubsetResponse, FindComputerHistoryByNameSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryByNameSubset({
  name: "Kevin Willms",
  subset: FindComputerHistoryByNameSubsetSubset.Audits,
}).then((res: FindComputerHistoryByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindComputerHistoryByNameSubsetRequest](../../models/operations/findcomputerhistorybynamesubsetrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindComputerHistoryByNameSubsetResponse](../../models/operations/findcomputerhistorybynamesubsetresponse.md)>**


## findComputerHistoryBySerialNumber

Finds computer history by serial number

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryBySerialNumber({
  serialnumber: "adipisci",
}).then((res: FindComputerHistoryBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.FindComputerHistoryBySerialNumberRequest](../../models/operations/findcomputerhistorybyserialnumberrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindComputerHistoryBySerialNumberResponse](../../models/operations/findcomputerhistorybyserialnumberresponse.md)>**


## findComputerHistoryBySerialNumberSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Commands)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerHistoryBySerialNumberSubsetResponse,
  FindComputerHistoryBySerialNumberSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryBySerialNumberSubset({
  serialnumber: "dolorum",
  subset: FindComputerHistoryBySerialNumberSubsetSubset.ComputerUsageLogs,
}).then((res: FindComputerHistoryBySerialNumberSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindComputerHistoryBySerialNumberSubsetRequest](../../models/operations/findcomputerhistorybyserialnumbersubsetrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindComputerHistoryBySerialNumberSubsetResponse](../../models/operations/findcomputerhistorybyserialnumbersubsetresponse.md)>**


## findComputerHistoryByUDID

Finds computer history by UDID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryByUDID({
  udid: "quae",
}).then((res: FindComputerHistoryByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindComputerHistoryByUDIDRequest](../../models/operations/findcomputerhistorybyudidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindComputerHistoryByUDIDResponse](../../models/operations/findcomputerhistorybyudidresponse.md)>**


## findComputerHistoryByUDIDSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Commands)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHistoryByUDIDSubsetResponse, FindComputerHistoryByUDIDSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhistory.findComputerHistoryByUDIDSubset({
  subset: FindComputerHistoryByUDIDSubsetSubset.General,
  udid: "quas",
}).then((res: FindComputerHistoryByUDIDSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindComputerHistoryByUDIDSubsetRequest](../../models/operations/findcomputerhistorybyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindComputerHistoryByUDIDSubsetResponse](../../models/operations/findcomputerhistorybyudidsubsetresponse.md)>**

