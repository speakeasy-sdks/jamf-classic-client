# Computerapplicationusage
(*computerapplicationusage*)

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
import { Jamf } from "jamf-classic-sdk-nodejs";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerapplicationusage.findComputerApplicationUsageById({
    endDate: new RFCDate("2022-08-06"),
    id: "<ID>",
    startDate: new RFCDate("2023-06-04"),
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerapplicationusage.findComputerApplicationUsageByMacAddress({
    endDate: "Bicycle Northeast",
    macaddress: "sober organic",
    startDate: "ew invoice",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerapplicationusage.findComputerApplicationUsageByName({
    endDate: "Shoes Transmasculine baggie",
    name: "drive lest",
    startDate: "users",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerapplicationusage.findComputerApplicationUsageBySerial({
    endDate: "cloister",
    serialnumber: "kissingly South convergence",
    startDate: "optimize connect policy",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerapplicationusage.findComputerApplicationUsageByUDID({
    endDate: "SSD",
    startDate: "East crafty Directives",
    udid: "Berkshire Practical Southeast",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputerApplicationUsageByUDIDRequest](../../models/operations/findcomputerapplicationusagebyudidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputerApplicationUsageByUDIDResponse](../../models/operations/findcomputerapplicationusagebyudidresponse.md)>**

