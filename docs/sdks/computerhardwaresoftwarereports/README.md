# Computerhardwaresoftwarereports
(*computerhardwaresoftwarereports*)

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
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsById({
    endDate: new RFCDate("2023-01-23"),
    id: "<id>",
    startDate: new RFCDate("2022-08-20"),
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.FindComputerHardwareSoftwareReportsByIdRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByIdResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { Subset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByIdSubset({
    endDate: new RFCDate("2023-02-28"),
    id: 311709,
    startDate: new RFCDate("2024-03-26"),
    subset: Subset.Hardwre,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.FindComputerHardwareSoftwareReportsByIdSubsetRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByIdSubsetResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyidsubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsByMacAddress

Finds hardware/software reports by computer MAC address

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByMacAddress({
    endDate: new RFCDate("2022-11-05"),
    macaddress: "<value>",
    startDate: new RFCDate("2023-02-03"),
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.FindComputerHardwareSoftwareReportsByMacAddressRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbymacaddressrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByMacAddressResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbymacaddressresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsByMacAddressSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByMacAddressSubset({
    endDate: new RFCDate("2024-05-04"),
    macaddress: "<value>",
    startDate: new RFCDate("2022-06-27"),
    subset: PathParamSubset.Software,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByMacAddressSubsetResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbymacaddresssubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsByName

Finds hardware/software reports by computer name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByName({
    endDate: new RFCDate("2024-01-12"),
    name: "<value>",
    startDate: new RFCDate("2023-07-16"),
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.FindComputerHardwareSoftwareReportsByNameRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbynamerequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByNameResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsByNameSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByNameSubset({
    endDate: new RFCDate("2022-07-31"),
    name: "<value>",
    startDate: new RFCDate("2024-09-06"),
    subset: FindComputerHardwareSoftwareReportsByNameSubsetPathParamSubset.Software,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.FindComputerHardwareSoftwareReportsByNameSubsetRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByNameSubsetResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbynamesubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsBySerial

Finds hardware/software reports by computer serial number

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsBySerial({
    endDate: new RFCDate("2024-10-13"),
    serialnumber: "<value>",
    startDate: new RFCDate("2022-05-25"),
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.FindComputerHardwareSoftwareReportsBySerialRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyserialrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsBySerialResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyserialresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsBySerialSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsBySerialSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsBySerialSubset({
    endDate: new RFCDate("2023-03-08"),
    serialnumber: "<value>",
    startDate: new RFCDate("2023-10-09"),
    subset: FindComputerHardwareSoftwareReportsBySerialSubsetPathParamSubset.Plugins,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.FindComputerHardwareSoftwareReportsBySerialSubsetRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyserialsubsetrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsBySerialSubsetResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyserialsubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsByUDID

Finds hardware/software reports by computer UDID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByUDID({
    endDate: new RFCDate("2022-05-02"),
    startDate: new RFCDate("2024-04-25"),
    udid: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.FindComputerHardwareSoftwareReportsByUDIDRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyudidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByUDIDResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyudidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerHardwareSoftwareReportsByUDIDSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/Software&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerHardwareSoftwareReportsByUDIDSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { RFCDate } from "jamf-classic-sdk-nodejs/dist/sdk/types";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerhardwaresoftwarereports.findComputerHardwareSoftwareReportsByUDIDSubset({
    endDate: new RFCDate("2023-09-30"),
    startDate: new RFCDate("2024-09-30"),
    subset: FindComputerHardwareSoftwareReportsByUDIDSubsetPathParamSubset.Software,
    udid: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.FindComputerHardwareSoftwareReportsByUDIDSubsetRequest](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.FindComputerHardwareSoftwareReportsByUDIDSubsetResponse](../../sdk/models/operations/findcomputerhardwaresoftwarereportsbyudidsubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
