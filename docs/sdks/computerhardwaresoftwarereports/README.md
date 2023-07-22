# computerhardwaresoftwarereports

### Available Operations

* [findComputerHardwareSoftwareReportsById](#findcomputerhardwaresoftwarereportsbyid) - Finds hardware/software reports by computer ID
* [findComputerHardwareSoftwareReportsByIdSubset](#findcomputerhardwaresoftwarereportsbyidsubset) - Finds a subset of hardware/software reports by computer ID
* [findComputerHardwareSoftwareReportsByMacAddress](#findcomputerhardwaresoftwarereportsbymacaddress) - Finds hardware/software reports by computer MAC address
* [findComputerHardwareSoftwareReportsByMacAddressSubset](#findcomputerhardwaresoftwarereportsbymacaddresssubset) - Finds a subset of hardware/software reports by computer MAC address
* [findComputerHardwareSoftwareReportsByName](#findcomputerhardwaresoftwarereportsbyname) - Finds hardware/software reports by computer name
* [findComputerHardwareSoftwareReportsByNameSubset](#findcomputerhardwaresoftwarereportsbynamesubset) - Finds a subset of hardware/software reports by computer name
* [findComputerHardwareSoftwareReportsBySerial](#findcomputerhardwaresoftwarereportsbyserial) - Finds hardware/software reports by computer serial number
* [findComputerHardwareSoftwareReportsBySerialSubset](#findcomputerhardwaresoftwarereportsbyserialsubset) - Finds a subset of hardware/software reports by computer serial number
* [findComputerHardwareSoftwareReportsByUDID](#findcomputerhardwaresoftwarereportsbyudid) - Finds hardware/software reports by computer UDID
* [findComputerHardwareSoftwareReportsByUDIDSubset](#findcomputerhardwaresoftwarereportsbyudidsubset) - Finds a subset of hardware/software reports by computer UDID

## findComputerHardwareSoftwareReportsById

Finds hardware/software reports by computer ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsById({
  endDate: new RFCDate("2022-04-04"),
  id: "a77a89eb-f737-4ae4-a03c-e5e6a95d8a0d",
  startDate: new RFCDate("2022-09-23"),
}).then((res: FindComputerHardwareSoftwareReportsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindComputerHardwareSoftwareReportsByIdRequest](../../models/operations/findcomputerhardwaresoftwarereportsbyidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByIdResponse](../../models/operations/findcomputerhardwaresoftwarereportsbyidresponse.md)>**


## findComputerHardwareSoftwareReportsByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerHardwareSoftwareReportsByIdSubsetResponse,
  FindComputerHardwareSoftwareReportsByIdSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByIdSubset({
  endDate: new RFCDate("2022-03-15"),
  id: 885338,
  startDate: new RFCDate("2022-04-27"),
  subset: FindComputerHardwareSoftwareReportsByIdSubsetSubset.Plugins,
}).then((res: FindComputerHardwareSoftwareReportsByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.FindComputerHardwareSoftwareReportsByIdSubsetRequest](../../models/operations/findcomputerhardwaresoftwarereportsbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByIdSubsetResponse](../../models/operations/findcomputerhardwaresoftwarereportsbyidsubsetresponse.md)>**


## findComputerHardwareSoftwareReportsByMacAddress

Finds hardware/software reports by computer MAC address

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByMacAddress({
  endDate: new RFCDate("2022-04-25"),
  macaddress: "iusto",
  startDate: new RFCDate("2022-03-19"),
}).then((res: FindComputerHardwareSoftwareReportsByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.FindComputerHardwareSoftwareReportsByMacAddressRequest](../../models/operations/findcomputerhardwaresoftwarereportsbymacaddressrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByMacAddressResponse](../../models/operations/findcomputerhardwaresoftwarereportsbymacaddressresponse.md)>**


## findComputerHardwareSoftwareReportsByMacAddressSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse,
  FindComputerHardwareSoftwareReportsByMacAddressSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByMacAddressSubset({
  endDate: new RFCDate("2022-04-24"),
  macaddress: "tempore",
  startDate: new RFCDate("2022-03-28"),
  subset: FindComputerHardwareSoftwareReportsByMacAddressSubsetSubset.Hardwre,
}).then((res: FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetRequest](../../models/operations/findcomputerhardwaresoftwarereportsbymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse](../../models/operations/findcomputerhardwaresoftwarereportsbymacaddresssubsetresponse.md)>**


## findComputerHardwareSoftwareReportsByName

Finds hardware/software reports by computer name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByName({
  endDate: new RFCDate("2022-01-16"),
  name: "Christian Balistreri",
  startDate: new RFCDate("2022-07-29"),
}).then((res: FindComputerHardwareSoftwareReportsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.FindComputerHardwareSoftwareReportsByNameRequest](../../models/operations/findcomputerhardwaresoftwarereportsbynamerequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByNameResponse](../../models/operations/findcomputerhardwaresoftwarereportsbynameresponse.md)>**


## findComputerHardwareSoftwareReportsByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerHardwareSoftwareReportsByNameSubsetResponse,
  FindComputerHardwareSoftwareReportsByNameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByNameSubset({
  endDate: new RFCDate("2022-04-02"),
  name: "Darryl Emard",
  startDate: new RFCDate("2021-05-21"),
  subset: FindComputerHardwareSoftwareReportsByNameSubsetSubset.Plugins,
}).then((res: FindComputerHardwareSoftwareReportsByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.FindComputerHardwareSoftwareReportsByNameSubsetRequest](../../models/operations/findcomputerhardwaresoftwarereportsbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByNameSubsetResponse](../../models/operations/findcomputerhardwaresoftwarereportsbynamesubsetresponse.md)>**


## findComputerHardwareSoftwareReportsBySerial

Finds hardware/software reports by computer serial number

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsBySerialResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsBySerial({
  endDate: new RFCDate("2022-10-07"),
  serialnumber: "laborum",
  startDate: new RFCDate("2022-06-12"),
}).then((res: FindComputerHardwareSoftwareReportsBySerialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.FindComputerHardwareSoftwareReportsBySerialRequest](../../models/operations/findcomputerhardwaresoftwarereportsbyserialrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsBySerialResponse](../../models/operations/findcomputerhardwaresoftwarereportsbyserialresponse.md)>**


## findComputerHardwareSoftwareReportsBySerialSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerHardwareSoftwareReportsBySerialSubsetResponse,
  FindComputerHardwareSoftwareReportsBySerialSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsBySerialSubset({
  endDate: new RFCDate("2022-10-29"),
  serialnumber: "distinctio",
  startDate: new RFCDate("2022-03-17"),
  subset: FindComputerHardwareSoftwareReportsBySerialSubsetSubset.Hardwre,
}).then((res: FindComputerHardwareSoftwareReportsBySerialSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.FindComputerHardwareSoftwareReportsBySerialSubsetRequest](../../models/operations/findcomputerhardwaresoftwarereportsbyserialsubsetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsBySerialSubsetResponse](../../models/operations/findcomputerhardwaresoftwarereportsbyserialsubsetresponse.md)>**


## findComputerHardwareSoftwareReportsByUDID

Finds hardware/software reports by computer UDID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByUDID({
  endDate: new RFCDate("2021-04-27"),
  startDate: new RFCDate("2022-10-18"),
  udid: "fugit",
}).then((res: FindComputerHardwareSoftwareReportsByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.FindComputerHardwareSoftwareReportsByUDIDRequest](../../models/operations/findcomputerhardwaresoftwarereportsbyudidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByUDIDResponse](../../models/operations/findcomputerhardwaresoftwarereportsbyudidresponse.md)>**


## findComputerHardwareSoftwareReportsByUDIDSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerHardwareSoftwareReportsByUDIDSubsetResponse,
  FindComputerHardwareSoftwareReportsByUDIDSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByUDIDSubset({
  endDate: new RFCDate("2022-07-06"),
  startDate: new RFCDate("2022-08-24"),
  subset: FindComputerHardwareSoftwareReportsByUDIDSubsetSubset.Fonts,
  udid: "hic",
}).then((res: FindComputerHardwareSoftwareReportsByUDIDSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.FindComputerHardwareSoftwareReportsByUDIDSubsetRequest](../../models/operations/findcomputerhardwaresoftwarereportsbyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByUDIDSubsetResponse](../../models/operations/findcomputerhardwaresoftwarereportsbyudidsubsetresponse.md)>**

