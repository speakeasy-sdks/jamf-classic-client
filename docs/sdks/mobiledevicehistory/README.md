# Mobiledevicehistory
(*mobiledevicehistory*)

### Available Operations

* [findMobileDeviceHistoryById](#findmobiledevicehistorybyid) - Finds mobile device history by ID
* [findMobileDeviceHistoryByIdSubset](#findmobiledevicehistorybyidsubset) - finds a subset of data for a mobile device history
* [findMobileDeviceHistoryByMacAddress](#findmobiledevicehistorybymacaddress) - Finds mobile device history by wifi mac address
* [findMobileDeviceHistoryByMacAddressSubset](#findmobiledevicehistorybymacaddresssubset) - Finds a subset of data for mobile device history by wifi mac address
* [findMobileDeviceHistoryByName](#findmobiledevicehistorybyname) - Finds mobile device history by name
* [findMobileDeviceHistoryByNameSubset](#findmobiledevicehistorybynamesubset) - Finds a subset of data for mobile device history by name
* [findMobileDeviceHistoryBySerialNumber](#findmobiledevicehistorybyserialnumber) - Finds mobile device history by serial number
* [findMobileDeviceHistoryBySerialNumberSubset](#findmobiledevicehistorybyserialnumbersubset) - Finds a subset of data for mobile device history by serial number
* [findMobileDeviceHistoryByUDID](#findmobiledevicehistorybyudid) - Finds mobile device history by UDID
* [findMobileDeviceHistoryByUDIDSubset](#findmobiledevicehistorybyudidsubset) - Finds a subset of data for mobile device history by UDID

## findMobileDeviceHistoryById

Finds mobile device history by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceHistoryByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryById({
  id: 117380,
}).then((res: FindMobileDeviceHistoryByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindMobileDeviceHistoryByIdRequest](../../models/operations/findmobiledevicehistorybyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryByIdResponse](../../models/operations/findmobiledevicehistorybyidresponse.md)>**


## findMobileDeviceHistoryByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Audits)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceHistoryByIdSubsetResponse,
  FindMobileDeviceHistoryByIdSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryByIdSubset({
  id: 395544,
  subset: FindMobileDeviceHistoryByIdSubsetSubset.General,
}).then((res: FindMobileDeviceHistoryByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.FindMobileDeviceHistoryByIdSubsetRequest](../../models/operations/findmobiledevicehistorybyidsubsetrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindMobileDeviceHistoryByIdSubsetResponse](../../models/operations/findmobiledevicehistorybyidsubsetresponse.md)>**


## findMobileDeviceHistoryByMacAddress

Finds mobile device history by wifi mac address

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceHistoryByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryByMacAddress({
  macaddress: "consectetur",
}).then((res: FindMobileDeviceHistoryByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindMobileDeviceHistoryByMacAddressRequest](../../models/operations/findmobiledevicehistorybymacaddressrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryByMacAddressResponse](../../models/operations/findmobiledevicehistorybymacaddressresponse.md)>**


## findMobileDeviceHistoryByMacAddressSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Audits)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceHistoryByMacAddressSubsetResponse,
  FindMobileDeviceHistoryByMacAddressSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryByMacAddressSubset({
  macaddress: "aperiam",
  subset: FindMobileDeviceHistoryByMacAddressSubsetSubset.Audits,
}).then((res: FindMobileDeviceHistoryByMacAddressSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.FindMobileDeviceHistoryByMacAddressSubsetRequest](../../models/operations/findmobiledevicehistorybymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.FindMobileDeviceHistoryByMacAddressSubsetResponse](../../models/operations/findmobiledevicehistorybymacaddresssubsetresponse.md)>**


## findMobileDeviceHistoryByName

Finds mobile device history by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceHistoryByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryByName({
  name: "Dominic Abernathy",
}).then((res: FindMobileDeviceHistoryByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindMobileDeviceHistoryByNameRequest](../../models/operations/findmobiledevicehistorybynamerequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryByNameResponse](../../models/operations/findmobiledevicehistorybynameresponse.md)>**


## findMobileDeviceHistoryByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Audits)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceHistoryByNameSubsetResponse,
  FindMobileDeviceHistoryByNameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryByNameSubset({
  name: "Miss Joey Dach",
  subset: FindMobileDeviceHistoryByNameSubsetSubset.Ebooks,
}).then((res: FindMobileDeviceHistoryByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindMobileDeviceHistoryByNameSubsetRequest](../../models/operations/findmobiledevicehistorybynamesubsetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryByNameSubsetResponse](../../models/operations/findmobiledevicehistorybynamesubsetresponse.md)>**


## findMobileDeviceHistoryBySerialNumber

Finds mobile device history by serial number

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceHistoryBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryBySerialNumber({
  serialnumber: "distinctio",
}).then((res: FindMobileDeviceHistoryBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindMobileDeviceHistoryBySerialNumberRequest](../../models/operations/findmobiledevicehistorybyserialnumberrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryBySerialNumberResponse](../../models/operations/findmobiledevicehistorybyserialnumberresponse.md)>**


## findMobileDeviceHistoryBySerialNumberSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Audits)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceHistoryBySerialNumberSubsetResponse,
  FindMobileDeviceHistoryBySerialNumberSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryBySerialNumberSubset({
  serialnumber: "omnis",
  subset: FindMobileDeviceHistoryBySerialNumberSubsetSubset.Ebooks,
}).then((res: FindMobileDeviceHistoryBySerialNumberSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.FindMobileDeviceHistoryBySerialNumberSubsetRequest](../../models/operations/findmobiledevicehistorybyserialnumbersubsetrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryBySerialNumberSubsetResponse](../../models/operations/findmobiledevicehistorybyserialnumbersubsetresponse.md)>**


## findMobileDeviceHistoryByUDID

Finds mobile device history by UDID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceHistoryByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryByUDID({
  udid: "minima",
}).then((res: FindMobileDeviceHistoryByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindMobileDeviceHistoryByUDIDRequest](../../models/operations/findmobiledevicehistorybyudidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryByUDIDResponse](../../models/operations/findmobiledevicehistorybyudidresponse.md)>**


## findMobileDeviceHistoryByUDIDSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Audits)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceHistoryByUDIDSubsetResponse,
  FindMobileDeviceHistoryByUDIDSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicehistory.findMobileDeviceHistoryByUDIDSubset({
  subset: FindMobileDeviceHistoryByUDIDSubsetSubset.Audits,
  udid: "maxime",
}).then((res: FindMobileDeviceHistoryByUDIDSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindMobileDeviceHistoryByUDIDSubsetRequest](../../models/operations/findmobiledevicehistorybyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryByUDIDSubsetResponse](../../models/operations/findmobiledevicehistorybyudidsubsetresponse.md)>**

