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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindMobileDeviceHistoryByIdRequest](../../sdk/models/operations/findmobiledevicehistorybyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryByIdResponse](../../sdk/models/operations/findmobiledevicehistorybyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindMobileDeviceHistoryByIdSubsetRequest](../../sdk/models/operations/findmobiledevicehistorybyidsubsetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryByIdSubsetResponse](../../sdk/models/operations/findmobiledevicehistorybyidsubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindMobileDeviceHistoryByMacAddressRequest](../../sdk/models/operations/findmobiledevicehistorybymacaddressrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryByMacAddressResponse](../../sdk/models/operations/findmobiledevicehistorybymacaddressresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.FindMobileDeviceHistoryByMacAddressSubsetRequest](../../sdk/models/operations/findmobiledevicehistorybymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceHistoryByMacAddressSubsetResponse](../../sdk/models/operations/findmobiledevicehistorybymacaddresssubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindMobileDeviceHistoryByNameRequest](../../sdk/models/operations/findmobiledevicehistorybynamerequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindMobileDeviceHistoryByNameResponse](../../sdk/models/operations/findmobiledevicehistorybynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindMobileDeviceHistoryByNameSubsetRequest](../../sdk/models/operations/findmobiledevicehistorybynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryByNameSubsetResponse](../../sdk/models/operations/findmobiledevicehistorybynamesubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindMobileDeviceHistoryBySerialNumberRequest](../../sdk/models/operations/findmobiledevicehistorybyserialnumberrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindMobileDeviceHistoryBySerialNumberResponse](../../sdk/models/operations/findmobiledevicehistorybyserialnumberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.FindMobileDeviceHistoryBySerialNumberSubsetRequest](../../sdk/models/operations/findmobiledevicehistorybyserialnumbersubsetrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryBySerialNumberSubsetResponse](../../sdk/models/operations/findmobiledevicehistorybyserialnumbersubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindMobileDeviceHistoryByUDIDRequest](../../sdk/models/operations/findmobiledevicehistorybyudidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindMobileDeviceHistoryByUDIDResponse](../../sdk/models/operations/findmobiledevicehistorybyudidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindMobileDeviceHistoryByUDIDSubsetRequest](../../sdk/models/operations/findmobiledevicehistorybyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindMobileDeviceHistoryByUDIDSubsetResponse](../../sdk/models/operations/findmobiledevicehistorybyudidsubsetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
