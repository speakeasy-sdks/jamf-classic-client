# Computermanagement
(*computermanagement*)

### Available Operations

* [findComputerManagementById](#findcomputermanagementbyid) - Finds computer management information by ID
* [findComputerManagementByIdPatchFilter](#findcomputermanagementbyidpatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByIdSubset](#findcomputermanagementbyidsubset) - Finds a subset of computer management information by ID
* [findComputerManagementByIdUsername](#findcomputermanagementbyidusername) - Finds management information for a computer and username
* [findComputerManagementByIdUsernameSubset](#findcomputermanagementbyidusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementByMacAddress](#findcomputermanagementbymacaddress) - Finds computer management information by MAC address
* [findComputerManagementByMacAddressPatchFilter](#findcomputermanagementbymacaddresspatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByMacAddressSubset](#findcomputermanagementbymacaddresssubset) - Finds a subset of computer management information by MAC address
* [findComputerManagementByMacAddressUsername](#findcomputermanagementbymacaddressusername) - Finds management information for a computer and username
* [findComputerManagementByMacAddressUsernameSubset](#findcomputermanagementbymacaddressusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementByName](#findcomputermanagementbyname) - Finds computer management information by name
* [findComputerManagementByNamePatchFilter](#findcomputermanagementbynamepatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByNameSubset](#findcomputermanagementbynamesubset) - Finds a subset of computer management information by name
* [findComputerManagementByNameUsername](#findcomputermanagementbynameusername) - Finds management information for a computer and username
* [findComputerManagementByNameUsernameSubset](#findcomputermanagementbynameusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementBySerialNumber](#findcomputermanagementbyserialnumber) - Finds computer management information by serial number
* [findComputerManagementBySerialNumberPatchFilter](#findcomputermanagementbyserialnumberpatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementBySerialNumberSubset](#findcomputermanagementbyserialnumbersubset) - Finds a subset of computer management information by serial number
* [findComputerManagementBySerialNumberUsername](#findcomputermanagementbyserialnumberusername) - Finds management information for a computer and username
* [findComputerManagementBySerialNumberUsernameSubset](#findcomputermanagementbyserialnumberusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementByUDID](#findcomputermanagementbyudid) - Finds computer management information by UDID
* [findComputerManagementByUDIDSubset](#findcomputermanagementbyudidsubset) - Finds a subset of computer management information by UDID
* [findComputerManagementByUdidPatchFilter](#findcomputermanagementbyudidpatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByUdidUsername](#findcomputermanagementbyudidusername) - Finds management information for a computer and username
* [findComputerManagementByUdidUsernameSubset](#findcomputermanagementbyudidusernamesubset) - Finds a subset of management information for a computer and username

## findComputerManagementById

Finds computer management information by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementById({
  id: 800419,
}).then((res: FindComputerManagementByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.FindComputerManagementByIdRequest](../../models/operations/findcomputermanagementbyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.FindComputerManagementByIdResponse](../../models/operations/findcomputermanagementbyidresponse.md)>**


## findComputerManagementByIdPatchFilter

Display patch management information for a computer and filter

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByIdPatchFilterResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByIdPatchFilter({
  filter: "Southwest blindfold",
  id: 93239,
}).then((res: FindComputerManagementByIdPatchFilterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.FindComputerManagementByIdPatchFilterRequest](../../models/operations/findcomputermanagementbyidpatchfilterrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.FindComputerManagementByIdPatchFilterResponse](../../models/operations/findcomputermanagementbyidpatchfilterresponse.md)>**


## findComputerManagementByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByIdSubsetResponse, FindComputerManagementByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByIdSubset({
  id: 327799,
  subset: FindComputerManagementByIdSubsetSubset.ManagedPreferenceProfiles,
}).then((res: FindComputerManagementByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindComputerManagementByIdSubsetRequest](../../models/operations/findcomputermanagementbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindComputerManagementByIdSubsetResponse](../../models/operations/findcomputermanagementbyidsubsetresponse.md)>**


## findComputerManagementByIdUsername

Finds management information for a computer and username

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByIdUsernameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByIdUsername({
  id: 924331,
  username: "Kolby_Hirthe16",
}).then((res: FindComputerManagementByIdUsernameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputerManagementByIdUsernameRequest](../../models/operations/findcomputermanagementbyidusernamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputerManagementByIdUsernameResponse](../../models/operations/findcomputermanagementbyidusernameresponse.md)>**


## findComputerManagementByIdUsernameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementByIdUsernameSubsetResponse,
  FindComputerManagementByIdUsernameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByIdUsernameSubset({
  id: 458312,
  subset: FindComputerManagementByIdUsernameSubsetSubset.SmartGroups,
  username: "Mckenzie54",
}).then((res: FindComputerManagementByIdUsernameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindComputerManagementByIdUsernameSubsetRequest](../../models/operations/findcomputermanagementbyidusernamesubsetrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindComputerManagementByIdUsernameSubsetResponse](../../models/operations/findcomputermanagementbyidusernamesubsetresponse.md)>**


## findComputerManagementByMacAddress

Finds computer management information by MAC address

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByMacAddress({
  macaddress: "Cyclocross",
}).then((res: FindComputerManagementByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputerManagementByMacAddressRequest](../../models/operations/findcomputermanagementbymacaddressrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputerManagementByMacAddressResponse](../../models/operations/findcomputermanagementbymacaddressresponse.md)>**


## findComputerManagementByMacAddressPatchFilter

Display patch management information for a computer and filter

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByMacAddressPatchFilterResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByMacAddressPatchFilter({
  filter: "Concrete Country",
  macaddress: "Manager magenta Lilangeni",
}).then((res: FindComputerManagementByMacAddressPatchFilterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.FindComputerManagementByMacAddressPatchFilterRequest](../../models/operations/findcomputermanagementbymacaddresspatchfilterrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.FindComputerManagementByMacAddressPatchFilterResponse](../../models/operations/findcomputermanagementbymacaddresspatchfilterresponse.md)>**


## findComputerManagementByMacAddressSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementByMacAddressSubsetResponse,
  FindComputerManagementByMacAddressSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByMacAddressSubset({
  macaddress: "Gasoline",
  subset: FindComputerManagementByMacAddressSubsetSubset.Ebooks,
}).then((res: FindComputerManagementByMacAddressSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindComputerManagementByMacAddressSubsetRequest](../../models/operations/findcomputermanagementbymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindComputerManagementByMacAddressSubsetResponse](../../models/operations/findcomputermanagementbymacaddresssubsetresponse.md)>**


## findComputerManagementByMacAddressUsername

Finds management information for a computer and username

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByMacAddressUsernameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByMacAddressUsername({
  macaddress: "lavender magenta Account",
  username: "Eugenia_Hegmann33",
}).then((res: FindComputerManagementByMacAddressUsernameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.FindComputerManagementByMacAddressUsernameRequest](../../models/operations/findcomputermanagementbymacaddressusernamerequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindComputerManagementByMacAddressUsernameResponse](../../models/operations/findcomputermanagementbymacaddressusernameresponse.md)>**


## findComputerManagementByMacAddressUsernameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementByMacAddressUsernameSubsetResponse,
  FindComputerManagementByMacAddressUsernameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByMacAddressUsernameSubset({
  macaddress: "South Bicycle",
  subset: FindComputerManagementByMacAddressUsernameSubsetSubset.SmartGroups,
  username: "Hanna_Hansen",
}).then((res: FindComputerManagementByMacAddressUsernameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.FindComputerManagementByMacAddressUsernameSubsetRequest](../../models/operations/findcomputermanagementbymacaddressusernamesubsetrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.FindComputerManagementByMacAddressUsernameSubsetResponse](../../models/operations/findcomputermanagementbymacaddressusernamesubsetresponse.md)>**


## findComputerManagementByName

Finds computer management information by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByName({
  name: "hack Buckinghamshire",
}).then((res: FindComputerManagementByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindComputerManagementByNameRequest](../../models/operations/findcomputermanagementbynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindComputerManagementByNameResponse](../../models/operations/findcomputermanagementbynameresponse.md)>**


## findComputerManagementByNamePatchFilter

Display patch management information for a computer and filter

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByNamePatchFilterResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByNamePatchFilter({
  filter: "deposit",
  name: "Senegal Nissan",
}).then((res: FindComputerManagementByNamePatchFilterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindComputerManagementByNamePatchFilterRequest](../../models/operations/findcomputermanagementbynamepatchfilterrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindComputerManagementByNamePatchFilterResponse](../../models/operations/findcomputermanagementbynamepatchfilterresponse.md)>**


## findComputerManagementByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementByNameSubsetResponse,
  FindComputerManagementByNameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByNameSubset({
  name: "female Group Wooden",
  subset: FindComputerManagementByNameSubsetSubset.General,
}).then((res: FindComputerManagementByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputerManagementByNameSubsetRequest](../../models/operations/findcomputermanagementbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputerManagementByNameSubsetResponse](../../models/operations/findcomputermanagementbynamesubsetresponse.md)>**


## findComputerManagementByNameUsername

Finds management information for a computer and username

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByNameUsernameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByNameUsername({
  name: "lime quietly",
  username: "Burdette_Altenwerth83",
}).then((res: FindComputerManagementByNameUsernameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FindComputerManagementByNameUsernameRequest](../../models/operations/findcomputermanagementbynameusernamerequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FindComputerManagementByNameUsernameResponse](../../models/operations/findcomputermanagementbynameusernameresponse.md)>**


## findComputerManagementByNameUsernameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementByNameUsernameSubsetResponse,
  FindComputerManagementByNameUsernameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByNameUsernameSubset({
  name: "auxiliary",
  subset: FindComputerManagementByNameUsernameSubsetSubset.SmartGroups,
  username: "Margarette.Jenkins",
}).then((res: FindComputerManagementByNameUsernameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.FindComputerManagementByNameUsernameSubsetRequest](../../models/operations/findcomputermanagementbynameusernamesubsetrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindComputerManagementByNameUsernameSubsetResponse](../../models/operations/findcomputermanagementbynameusernamesubsetresponse.md)>**


## findComputerManagementBySerialNumber

Finds computer management information by serial number

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementBySerialNumber({
  serialnumber: "Bedfordshire Via parse",
}).then((res: FindComputerManagementBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FindComputerManagementBySerialNumberRequest](../../models/operations/findcomputermanagementbyserialnumberrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FindComputerManagementBySerialNumberResponse](../../models/operations/findcomputermanagementbyserialnumberresponse.md)>**


## findComputerManagementBySerialNumberPatchFilter

Display patch management information for a computer and filter

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementBySerialNumberPatchFilterResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementBySerialNumberPatchFilter({
  filter: "pollard UAE Chips",
  serialnumber: "Genderflux nap",
}).then((res: FindComputerManagementBySerialNumberPatchFilterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.FindComputerManagementBySerialNumberPatchFilterRequest](../../models/operations/findcomputermanagementbyserialnumberpatchfilterrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.FindComputerManagementBySerialNumberPatchFilterResponse](../../models/operations/findcomputermanagementbyserialnumberpatchfilterresponse.md)>**


## findComputerManagementBySerialNumberSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementBySerialNumberSubsetResponse,
  FindComputerManagementBySerialNumberSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementBySerialNumberSubset({
  serialnumber: "driver Identity",
  subset: FindComputerManagementBySerialNumberSubsetSubset.Ebooks,
}).then((res: FindComputerManagementBySerialNumberSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.FindComputerManagementBySerialNumberSubsetRequest](../../models/operations/findcomputermanagementbyserialnumbersubsetrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindComputerManagementBySerialNumberSubsetResponse](../../models/operations/findcomputermanagementbyserialnumbersubsetresponse.md)>**


## findComputerManagementBySerialNumberUsername

Finds management information for a computer and username

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementBySerialNumberUsernameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementBySerialNumberUsername({
  serialnumber: "Wisoky Volkswagen Regional",
  username: "Edgardo95",
}).then((res: FindComputerManagementBySerialNumberUsernameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.FindComputerManagementBySerialNumberUsernameRequest](../../models/operations/findcomputermanagementbyserialnumberusernamerequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.FindComputerManagementBySerialNumberUsernameResponse](../../models/operations/findcomputermanagementbyserialnumberusernameresponse.md)>**


## findComputerManagementBySerialNumberUsernameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementBySerialNumberUsernameSubsetResponse,
  FindComputerManagementBySerialNumberUsernameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementBySerialNumberUsernameSubset({
  serialnumber: "Metal North",
  subset: FindComputerManagementBySerialNumberUsernameSubsetSubset.StaticGroups,
  username: "Arnaldo.Deckow86",
}).then((res: FindComputerManagementBySerialNumberUsernameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.FindComputerManagementBySerialNumberUsernameSubsetRequest](../../models/operations/findcomputermanagementbyserialnumberusernamesubsetrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.FindComputerManagementBySerialNumberUsernameSubsetResponse](../../models/operations/findcomputermanagementbyserialnumberusernamesubsetresponse.md)>**


## findComputerManagementByUDID

Finds computer management information by UDID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByUDID({
  udid: "optical",
}).then((res: FindComputerManagementByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindComputerManagementByUDIDRequest](../../models/operations/findcomputermanagementbyudidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindComputerManagementByUDIDResponse](../../models/operations/findcomputermanagementbyudidresponse.md)>**


## findComputerManagementByUDIDSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementByUDIDSubsetResponse,
  FindComputerManagementByUDIDSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByUDIDSubset({
  subset: FindComputerManagementByUDIDSubsetSubset.MacAppStoreApps,
  udid: "Transgender",
}).then((res: FindComputerManagementByUDIDSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputerManagementByUDIDSubsetRequest](../../models/operations/findcomputermanagementbyudidsubsetrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputerManagementByUDIDSubsetResponse](../../models/operations/findcomputermanagementbyudidsubsetresponse.md)>**


## findComputerManagementByUdidPatchFilter

Display patch management information for a computer and filter

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByUdidPatchFilterResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByUdidPatchFilter({
  filter: "pink Granite",
  udid: "concerning Pop",
}).then((res: FindComputerManagementByUdidPatchFilterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.FindComputerManagementByUdidPatchFilterRequest](../../models/operations/findcomputermanagementbyudidpatchfilterrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.FindComputerManagementByUdidPatchFilterResponse](../../models/operations/findcomputermanagementbyudidpatchfilterresponse.md)>**


## findComputerManagementByUdidUsername

Finds management information for a computer and username

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerManagementByUdidUsernameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByUdidUsername({
  udid: "Bicycle enim Orchestrator",
  username: "Leann_Cronin90",
}).then((res: FindComputerManagementByUdidUsernameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FindComputerManagementByUdidUsernameRequest](../../models/operations/findcomputermanagementbyudidusernamerequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FindComputerManagementByUdidUsernameResponse](../../models/operations/findcomputermanagementbyudidusernameresponse.md)>**


## findComputerManagementByUdidUsernameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Policies)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputerManagementByUdidUsernameSubsetResponse,
  FindComputerManagementByUdidUsernameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computermanagement.findComputerManagementByUdidUsernameSubset({
  subset: FindComputerManagementByUdidUsernameSubsetSubset.General,
  udid: "lime boxspring",
  username: "Grady.Schmitt",
}).then((res: FindComputerManagementByUdidUsernameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.FindComputerManagementByUdidUsernameSubsetRequest](../../models/operations/findcomputermanagementbyudidusernamesubsetrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.FindComputerManagementByUdidUsernameSubsetResponse](../../models/operations/findcomputermanagementbyudidusernamesubsetresponse.md)>**

