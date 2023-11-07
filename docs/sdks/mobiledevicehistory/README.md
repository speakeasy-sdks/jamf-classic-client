# Mobiledevicehistory
(*.mobiledevicehistory*)

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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryById({
    id: 84752,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceHistoryByIdSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryByIdSubset({
    id: 718186,
    subset: FindMobileDeviceHistoryByIdSubsetPathParamSubset.General,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryByMacAddress({
    macaddress: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceHistoryByMacAddressSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryByMacAddressSubset({
    macaddress: "string",
    subset: FindMobileDeviceHistoryByMacAddressSubsetPathParamSubset.Applications,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryByName({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceHistoryByNameSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryByNameSubset({
    name: "string",
    subset: FindMobileDeviceHistoryByNameSubsetPathParamSubset.UserLocation,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryBySerialNumber({
    serialnumber: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceHistoryBySerialNumberSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryBySerialNumberSubset({
    serialnumber: "string",
    subset: FindMobileDeviceHistoryBySerialNumberSubsetPathParamSubset.General,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryByUDID({
    udid: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindMobileDeviceHistoryByUDIDSubsetPathParamSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicehistory.findMobileDeviceHistoryByUDIDSubset({
    subset: FindMobileDeviceHistoryByUDIDSubsetPathParamSubset.ManagementCommands,
    udid: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindMobileDeviceHistoryByUDIDSubsetRequest](../../models/operations/findmobiledevicehistorybyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryByUDIDSubsetResponse](../../models/operations/findmobiledevicehistorybyudidsubsetresponse.md)>**

