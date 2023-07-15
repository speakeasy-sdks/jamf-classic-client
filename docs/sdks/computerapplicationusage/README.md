# computerapplicationusage

### Available Operations

* [findComputerApplicationUsageById](#findcomputerapplicationusagebyid) - Finds computer application usage by computer ID
* [findComputerApplicationUsageByMacAddress](#findcomputerapplicationusagebymacaddress) - Finds computer application usage by computer MAC address
* [findComputerApplicationUsageByName](#findcomputerapplicationusagebyname) - Finds computer application usage by computer name
* [findComputerApplicationUsageBySerial](#findcomputerapplicationusagebyserial) - Finds computer application usage by computer serial number
* [findComputerApplicationUsageByUDID](#findcomputerapplicationusagebyudid) - Finds computer application usage by computer UDID

## findComputerApplicationUsageById

Finds computer application usage by computer ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindComputerApplicationUsageByIdResponse } from "jamf/dist/sdk/models/operations";
import { RFCDate } from "jamf/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplicationusage.findComputerApplicationUsageById({
  endDate: new RFCDate("2021-07-27"),
  id: "d4426980-2d50-42a9-8bb4-f63c969e9a3e",
  startDate: new RFCDate("2020-12-17"),
}).then((res: FindComputerApplicationUsageByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindComputerApplicationUsageByIdRequest](../../models/operations/findcomputerapplicationusagebyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindComputerApplicationUsageByIdResponse](../../models/operations/findcomputerapplicationusagebyidresponse.md)>**


## findComputerApplicationUsageByMacAddress

Finds computer application usage by computer MAC address

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindComputerApplicationUsageByMacAddressResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplicationusage.findComputerApplicationUsageByMacAddress({
  endDate: "in",
  macaddress: "in",
  startDate: "illum",
}).then((res: FindComputerApplicationUsageByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindComputerApplicationUsageByMacAddressRequest](../../models/operations/findcomputerapplicationusagebymacaddressrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindComputerApplicationUsageByMacAddressResponse](../../models/operations/findcomputerapplicationusagebymacaddressresponse.md)>**


## findComputerApplicationUsageByName

Finds computer application usage by computer name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindComputerApplicationUsageByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplicationusage.findComputerApplicationUsageByName({
  endDate: "maiores",
  name: "Keith Gulgowski",
  startDate: "ea",
}).then((res: FindComputerApplicationUsageByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputerApplicationUsageByNameRequest](../../models/operations/findcomputerapplicationusagebynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputerApplicationUsageByNameResponse](../../models/operations/findcomputerapplicationusagebynameresponse.md)>**


## findComputerApplicationUsageBySerial

Finds computer application usage by computer serial number

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindComputerApplicationUsageBySerialResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplicationusage.findComputerApplicationUsageBySerial({
  endDate: "aliquid",
  serialnumber: "laborum",
  startDate: "accusamus",
}).then((res: FindComputerApplicationUsageBySerialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FindComputerApplicationUsageBySerialRequest](../../models/operations/findcomputerapplicationusagebyserialrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FindComputerApplicationUsageBySerialResponse](../../models/operations/findcomputerapplicationusagebyserialresponse.md)>**


## findComputerApplicationUsageByUDID

Finds computer application usage by computer UDID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindComputerApplicationUsageByUDIDResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerapplicationusage.findComputerApplicationUsageByUDID({
  endDate: "non",
  startDate: "occaecati",
  udid: "enim",
}).then((res: FindComputerApplicationUsageByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputerApplicationUsageByUDIDRequest](../../models/operations/findcomputerapplicationusagebyudidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputerApplicationUsageByUDIDResponse](../../models/operations/findcomputerapplicationusagebyudidresponse.md)>**

