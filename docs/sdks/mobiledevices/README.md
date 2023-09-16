# Mobiledevices

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
import { CreateMobileDeviceByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.createMobileDeviceById({
  id: 802894,
}).then((res: CreateMobileDeviceByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.deleteMobileDeviceById({
  id: 157222,
}).then((res: DeleteMobileDeviceByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.deleteMobileDeviceByMacAddress({
  macaddress: "quia",
}).then((res: DeleteMobileDeviceByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.deleteMobileDeviceByName({
  name: "Miss Geneva Reinger",
}).then((res: DeleteMobileDeviceByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.deleteMobileDeviceBySerialNumber({
  serialnumber: "fugiat",
}).then((res: DeleteMobileDeviceBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteMobileDeviceByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.deleteMobileDeviceByUDID({
  udid: "officia",
}).then((res: DeleteMobileDeviceByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevices().then((res: FindMobileDevicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesById({
  id: 554603,
}).then((res: FindMobileDevicesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesByIdSubsetResponse, FindMobileDevicesByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesByIdSubset({
  id: 811939,
  subset: FindMobileDevicesByIdSubsetSubset.General,
}).then((res: FindMobileDevicesByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesByMacAddress({
  macaddress: "iusto",
}).then((res: FindMobileDevicesByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  FindMobileDevicesByMacAddressSubsetResponse,
  FindMobileDevicesByMacAddressSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesByMacAddressSubset({
  macaddress: "ipsa",
  subset: FindMobileDevicesByMacAddressSubsetSubset.ExtensionAttributes,
}).then((res: FindMobileDevicesByMacAddressSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesByName({
  name: "Deborah Larson",
}).then((res: FindMobileDevicesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesByNameSubsetResponse, FindMobileDevicesByNameSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesByNameSubset({
  name: "Kenneth Johnson",
  subset: FindMobileDevicesByNameSubsetSubset.MobileDeviceGroups,
}).then((res: FindMobileDevicesByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesBySerialNumber({
  serialnumber: "beatae",
}).then((res: FindMobileDevicesBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  FindMobileDevicesBySerialNumberSubsetResponse,
  FindMobileDevicesBySerialNumberSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesBySerialNumberSubset({
  serialnumber: "est",
  subset: FindMobileDevicesBySerialNumberSubsetSubset.ProvisioningProfiles,
}).then((res: FindMobileDevicesBySerialNumberSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesByUDID({
  udid: "corrupti",
}).then((res: FindMobileDevicesByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindMobileDevicesByUDIDSubsetResponse, FindMobileDevicesByUDIDSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.findMobileDevicesByUDIDSubset({
  subset: FindMobileDevicesByUDIDSubsetSubset.Network,
  udid: "provident",
}).then((res: FindMobileDevicesByUDIDSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { MatchMobileDevicesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.matchMobileDevices({
  match: "accusamus",
}).then((res: MatchMobileDevicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.updateMobileDeviceById({
  id: 896480,
}).then((res: UpdateMobileDeviceByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.updateMobileDeviceByMacAddress({
  macaddress: "tempore",
}).then((res: UpdateMobileDeviceByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.updateMobileDeviceByName({
  name: "Angel Jones",
}).then((res: UpdateMobileDeviceByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.updateMobileDeviceBySerialNumber({
  serialnumber: "laudantium",
}).then((res: UpdateMobileDeviceBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateMobileDeviceByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevices.updateMobileDeviceByUDID({
  udid: "corporis",
}).then((res: UpdateMobileDeviceByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateMobileDeviceByUDIDRequest](../../models/operations/updatemobiledevicebyudidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateMobileDeviceByUDIDResponse](../../models/operations/updatemobiledevicebyudidresponse.md)>**

