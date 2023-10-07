# Mobiledevices
(*mobiledevices*)

### Available Operations

* [createMobileDeviceById](#createmobiledevicebyid) - Creates a new mobile device by ID
* [deleteMobileDeviceById](#deletemobiledevicebyid) - Deletes a mobile device by ID
* [deleteMobileDeviceByMacAddress](#deletemobiledevicebymacaddress) - Deletes a mobile device by Mac address
* [deleteMobileDeviceByName](#deletemobiledevicebyname) - Deletes a mobile device by name
* [deleteMobileDeviceBySerialNumber](#deletemobiledevicebyserialnumber) - Deletes a mobile device by serial number
* [deleteMobileDeviceByUDID](#deletemobiledevicebyudid) - Deletes a mobile device by UDID
* [findMobileDevices](#findmobiledevices) - Finds all mobile devices
* [findMobileDevicesById](#findmobiledevicesbyid) - Finds mobile devices by ID
* [findMobileDevicesByIdSubset](#findmobiledevicesbyidsubset) - Finds a subset of data for a mobile device
* [findMobileDevicesByMacAddress](#findmobiledevicesbymacaddress) - Finds mobile devices by Mac address
* [findMobileDevicesByMacAddressSubset](#findmobiledevicesbymacaddresssubset) - Finds a subset of data for mobile devices by Mac address
* [findMobileDevicesByName](#findmobiledevicesbyname) - Finds mobile devices by name
* [findMobileDevicesByNameSubset](#findmobiledevicesbynamesubset) - Finds a subset of data for mobile devices by name
* [findMobileDevicesBySerialNumber](#findmobiledevicesbyserialnumber) - Finds mobile devices by serial number
* [findMobileDevicesBySerialNumberSubset](#findmobiledevicesbyserialnumbersubset) - Finds a subset of data for mobile devices by serial number
* [findMobileDevicesByUDID](#findmobiledevicesbyudid) - Finds mobile devices by UDID
* [findMobileDevicesByUDIDSubset](#findmobiledevicesbyudidsubset) - Finds a subset of data for mobile devices by UDID
* [matchMobileDevices](#matchmobiledevices) - Searches for mobile devices that match the provided parameter
* [updateMobileDeviceById](#updatemobiledevicebyid) - Updates an existing mobile device by ID
* [updateMobileDeviceByMacAddress](#updatemobiledevicebymacaddress) - Updates an existing mobile device by Mac address
* [updateMobileDeviceByName](#updatemobiledevicebyname) - Updates an existing mobile device by name
* [updateMobileDeviceBySerialNumber](#updatemobiledevicebyserialnumber) - Updates an existing mobile device by serial number
* [updateMobileDeviceByUDID](#updatemobiledevicebyudid) - Updates an existing mobile device by UDID

## createMobileDeviceById

To distinguish between mobile device types (e.g., iPad, iPhone, or Apple TV), use the <model_identifier> field. Default mobile device type is 'Unknown'. Can include a subset for Android devices if applicable. <os_name> in <android> is derived from the API level and cannot be set.

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

  const res = await sdk.mobiledevices.createMobileDeviceById({
    id: 718866,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateMobileDeviceByIdRequest](../../models/operations/createmobiledevicebyidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateMobileDeviceByIdResponse](../../models/operations/createmobiledevicebyidresponse.md)>**


## deleteMobileDeviceById

Deletes a mobile device by ID

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

  const res = await sdk.mobiledevices.deleteMobileDeviceById({
    id: 107477,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteMobileDeviceByIdRequest](../../models/operations/deletemobiledevicebyidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteMobileDeviceByIdResponse](../../models/operations/deletemobiledevicebyidresponse.md)>**


## deleteMobileDeviceByMacAddress

Deletes a mobile device by Mac address

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

  const res = await sdk.mobiledevices.deleteMobileDeviceByMacAddress({
    macaddress: "FTP invoice Representative",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteMobileDeviceByMacAddressRequest](../../models/operations/deletemobiledevicebymacaddressrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteMobileDeviceByMacAddressResponse](../../models/operations/deletemobiledevicebymacaddressresponse.md)>**


## deleteMobileDeviceByName

Deletes a mobile device by name

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

  const res = await sdk.mobiledevices.deleteMobileDeviceByName({
    name: "Future Central Coupe",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteMobileDeviceByNameRequest](../../models/operations/deletemobiledevicebynamerequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteMobileDeviceByNameResponse](../../models/operations/deletemobiledevicebynameresponse.md)>**


## deleteMobileDeviceBySerialNumber

Deletes a mobile device by serial number

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

  const res = await sdk.mobiledevices.deleteMobileDeviceBySerialNumber({
    serialnumber: "Modern becquerel",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteMobileDeviceBySerialNumberRequest](../../models/operations/deletemobiledevicebyserialnumberrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteMobileDeviceBySerialNumberResponse](../../models/operations/deletemobiledevicebyserialnumberresponse.md)>**


## deleteMobileDeviceByUDID

Deletes a mobile device by UDID

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

  const res = await sdk.mobiledevices.deleteMobileDeviceByUDID({
    udid: "capability Sanford withdrawal",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteMobileDeviceByUDIDRequest](../../models/operations/deletemobiledevicebyudidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteMobileDeviceByUDIDResponse](../../models/operations/deletemobiledevicebyudidresponse.md)>**


## findMobileDevices

Finds all mobile devices

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

  const res = await sdk.mobiledevices.findMobileDevices();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindMobileDevicesResponse](../../models/operations/findmobiledevicesresponse.md)>**


## findMobileDevicesById

Finds mobile devices by ID

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

  const res = await sdk.mobiledevices.findMobileDevicesById({
    id: 459333,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.FindMobileDevicesByIdRequest](../../models/operations/findmobiledevicesbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.FindMobileDevicesByIdResponse](../../models/operations/findmobiledevicesbyidresponse.md)>**


## findMobileDevicesByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDevicesByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevices.findMobileDevicesByIdSubset({
    id: 384346,
    subset: FindMobileDevicesByIdSubsetSubset.Purchasing,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindMobileDevicesByIdSubsetRequest](../../models/operations/findmobiledevicesbyidsubsetrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindMobileDevicesByIdSubsetResponse](../../models/operations/findmobiledevicesbyidsubsetresponse.md)>**


## findMobileDevicesByMacAddress

Finds mobile devices by Mac address

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

  const res = await sdk.mobiledevices.findMobileDevicesByMacAddress({
    macaddress: "Senior pfft firewall",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindMobileDevicesByMacAddressRequest](../../models/operations/findmobiledevicesbymacaddressrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindMobileDevicesByMacAddressResponse](../../models/operations/findmobiledevicesbymacaddressresponse.md)>**


## findMobileDevicesByMacAddressSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDevicesByMacAddressSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevices.findMobileDevicesByMacAddressSubset({
    macaddress: "red oh Luxurious",
    subset: FindMobileDevicesByMacAddressSubsetSubset.ProvisioningProfiles,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindMobileDevicesByMacAddressSubsetRequest](../../models/operations/findmobiledevicesbymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindMobileDevicesByMacAddressSubsetResponse](../../models/operations/findmobiledevicesbymacaddresssubsetresponse.md)>**


## findMobileDevicesByName

Finds mobile devices by name

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

  const res = await sdk.mobiledevices.findMobileDevicesByName({
    name: "West",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindMobileDevicesByNameRequest](../../models/operations/findmobiledevicesbynamerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindMobileDevicesByNameResponse](../../models/operations/findmobiledevicesbynameresponse.md)>**


## findMobileDevicesByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDevicesByNameSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevices.findMobileDevicesByNameSubset({
    name: "Corporate",
    subset: FindMobileDevicesByNameSubsetSubset.Purchasing,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindMobileDevicesByNameSubsetRequest](../../models/operations/findmobiledevicesbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindMobileDevicesByNameSubsetResponse](../../models/operations/findmobiledevicesbynamesubsetresponse.md)>**


## findMobileDevicesBySerialNumber

Finds mobile devices by serial number

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

  const res = await sdk.mobiledevices.findMobileDevicesBySerialNumber({
    serialnumber: "fat UDP",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindMobileDevicesBySerialNumberRequest](../../models/operations/findmobiledevicesbyserialnumberrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindMobileDevicesBySerialNumberResponse](../../models/operations/findmobiledevicesbyserialnumberresponse.md)>**


## findMobileDevicesBySerialNumberSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDevicesBySerialNumberSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevices.findMobileDevicesBySerialNumberSubset({
    serialnumber: "how laudantium",
    subset: FindMobileDevicesBySerialNumberSubsetSubset.Purchasing,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindMobileDevicesBySerialNumberSubsetRequest](../../models/operations/findmobiledevicesbyserialnumbersubsetrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindMobileDevicesBySerialNumberSubsetResponse](../../models/operations/findmobiledevicesbyserialnumbersubsetresponse.md)>**


## findMobileDevicesByUDID

Finds mobile devices by UDID

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

  const res = await sdk.mobiledevices.findMobileDevicesByUDID({
    udid: "Officer ink",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindMobileDevicesByUDIDRequest](../../models/operations/findmobiledevicesbyudidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindMobileDevicesByUDIDResponse](../../models/operations/findmobiledevicesbyudidresponse.md)>**


## findMobileDevicesByUDIDSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDevicesByUDIDSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevices.findMobileDevicesByUDIDSubset({
    subset: FindMobileDevicesByUDIDSubsetSubset.Purchasing,
    udid: "Minivan Jordan Borders",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindMobileDevicesByUDIDSubsetRequest](../../models/operations/findmobiledevicesbyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindMobileDevicesByUDIDSubsetResponse](../../models/operations/findmobiledevicesbyudidsubsetresponse.md)>**


## matchMobileDevices

Match performs the same function as a simple search in the GUI.

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

  const res = await sdk.mobiledevices.matchMobileDevices({
    match: "male however absent",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.MatchMobileDevicesRequest](../../models/operations/matchmobiledevicesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.MatchMobileDevicesResponse](../../models/operations/matchmobiledevicesresponse.md)>**


## updateMobileDeviceById

<os_name> in <android> is derived from the api level and cannot be set.

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

  const res = await sdk.mobiledevices.updateMobileDeviceById({
    id: 748548,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateMobileDeviceByIdRequest](../../models/operations/updatemobiledevicebyidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateMobileDeviceByIdResponse](../../models/operations/updatemobiledevicebyidresponse.md)>**


## updateMobileDeviceByMacAddress

<os_name> in <android> is derived from the api level and cannot be set.

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

  const res = await sdk.mobiledevices.updateMobileDeviceByMacAddress({
    macaddress: "whether deposit",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdateMobileDeviceByMacAddressRequest](../../models/operations/updatemobiledevicebymacaddressrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdateMobileDeviceByMacAddressResponse](../../models/operations/updatemobiledevicebymacaddressresponse.md)>**


## updateMobileDeviceByName

<os_name> in <android> is derived from the api level and cannot be set.

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

  const res = await sdk.mobiledevices.updateMobileDeviceByName({
    name: "Face Forges if",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateMobileDeviceByNameRequest](../../models/operations/updatemobiledevicebynamerequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateMobileDeviceByNameResponse](../../models/operations/updatemobiledevicebynameresponse.md)>**


## updateMobileDeviceBySerialNumber

<os_name> in <android> is derived from the api level and cannot be set.

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

  const res = await sdk.mobiledevices.updateMobileDeviceBySerialNumber({
    serialnumber: "male",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.UpdateMobileDeviceBySerialNumberRequest](../../models/operations/updatemobiledevicebyserialnumberrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.UpdateMobileDeviceBySerialNumberResponse](../../models/operations/updatemobiledevicebyserialnumberresponse.md)>**


## updateMobileDeviceByUDID

<os_name> in <android> is derived from the api level and cannot be set.

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

  const res = await sdk.mobiledevices.updateMobileDeviceByUDID({
    udid: "Computer hack",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateMobileDeviceByUDIDRequest](../../models/operations/updatemobiledevicebyudidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateMobileDeviceByUDIDResponse](../../models/operations/updatemobiledevicebyudidresponse.md)>**

