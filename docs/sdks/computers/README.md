# Computers
(*computers*)

### Available Operations

* [createComputerById](#createcomputerbyid) - Creates a computer
* [deleteComputerById](#deletecomputerbyid) - Deletes a computer by ID
* [deleteComputerByMacAddress](#deletecomputerbymacaddress) - Deletes a computer by MAC address
* [deleteComputerByName](#deletecomputerbyname) - Deletes a computer by name
* [deleteComputerBySerialNumber](#deletecomputerbyserialnumber) - Deletes a computer by serial number
* [deleteComputerByUDID](#deletecomputerbyudid) - Deletes a computer by UDID
* [findComputers](#findcomputers) - Finds all computers
* [findComputersBasic](#findcomputersbasic) - Finds basic information for all computers
* [findComputersById](#findcomputersbyid) - Finds computers by ID
* [findComputersByIdSubset](#findcomputersbyidsubset) - Finds a subset of information for a computer
* [findComputersByMacAddress](#findcomputersbymacaddress) - Finds computers by MAC address
* [findComputersByMacAddressSubset](#findcomputersbymacaddresssubset) - Finds a subset of data for computers by MAC address
* [findComputersByName](#findcomputersbyname) - Finds the first computer with the given name
* [findComputersByNameSubset](#findcomputersbynamesubset) - Finds a subset of data for the first computer with the given name
* [findComputersBySerialNumber](#findcomputersbyserialnumber) - Finds computers by serial number
* [findComputersBySerialNumberSubset](#findcomputersbyserialnumbersubset) - Finds a subset of data for computers by serial number
* [findComputersByUDID](#findcomputersbyudid) - Finds computers by UDID
* [findComputersByUDIDSubset](#findcomputersbyudidsubset) - Finds a subset of data for computers by UDID
* [flushComputerExtenstionAttributeData](#flushcomputerextenstionattributedata) - Deletes data collected by an extension attribute
* [matchComputers](#matchcomputers) - Searches for computers that match the provided parameter
* [matchComputersNames](#matchcomputersnames) - Searches for computers that match the provided name parameter
* [updateComputerById](#updatecomputerbyid) - Updates an existing computer by ID
* [updateComputerByMacAddress](#updatecomputerbymacaddress) - Updates an existing computer by MAC address
* [updateComputerByName](#updatecomputerbyname) - Updates an existing computer by name
* [updateComputerBySerialNumber](#updatecomputerbyserialnumber) - Updates an existing computer by serial number
* [updateComputerByUDID](#updatecomputerbyudid) - Updates an existing computer by UDID

## createComputerById

Certificates and mdm_capable are ignored.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateComputerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.createComputerById({
  id: 892050,
}).then((res: CreateComputerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateComputerByIdRequest](../../models/operations/createcomputerbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateComputerByIdResponse](../../models/operations/createcomputerbyidresponse.md)>**


## deleteComputerById

Deletes a computer by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.deleteComputerById({
  id: 370853,
}).then((res: DeleteComputerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteComputerByIdRequest](../../models/operations/deletecomputerbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteComputerByIdResponse](../../models/operations/deletecomputerbyidresponse.md)>**


## deleteComputerByMacAddress

Deletes a computer by MAC address

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.deleteComputerByMacAddress({
  macaddress: "aspernatur",
}).then((res: DeleteComputerByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteComputerByMacAddressRequest](../../models/operations/deletecomputerbymacaddressrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteComputerByMacAddressResponse](../../models/operations/deletecomputerbymacaddressresponse.md)>**


## deleteComputerByName

Deletes a computer by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.deleteComputerByName({
  name: "Angelica Koelpin MD",
}).then((res: DeleteComputerByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteComputerByNameRequest](../../models/operations/deletecomputerbynamerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteComputerByNameResponse](../../models/operations/deletecomputerbynameresponse.md)>**


## deleteComputerBySerialNumber

Deletes a computer by serial number

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.deleteComputerBySerialNumber({
  serialnumber: "quod",
}).then((res: DeleteComputerBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteComputerBySerialNumberRequest](../../models/operations/deletecomputerbyserialnumberrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteComputerBySerialNumberResponse](../../models/operations/deletecomputerbyserialnumberresponse.md)>**


## deleteComputerByUDID

Deletes a computer by UDID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteComputerByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.deleteComputerByUDID({
  udid: "dignissimos",
}).then((res: DeleteComputerByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteComputerByUDIDRequest](../../models/operations/deletecomputerbyudidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteComputerByUDIDResponse](../../models/operations/deletecomputerbyudidresponse.md)>**


## findComputers

Finds all computers

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputers().then((res: FindComputersResponse) => {
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

**Promise<[operations.FindComputersResponse](../../models/operations/findcomputersresponse.md)>**


## findComputersBasic

Finds basic information for all computers

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersBasicResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersBasic().then((res: FindComputersBasicResponse) => {
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

**Promise<[operations.FindComputersBasicResponse](../../models/operations/findcomputersbasicresponse.md)>**


## findComputersById

Finds computers by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersById({
  id: 76956,
}).then((res: FindComputersByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindComputersByIdRequest](../../models/operations/findcomputersbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindComputersByIdResponse](../../models/operations/findcomputersbyidresponse.md)>**


## findComputersByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Location)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByIdSubsetResponse, FindComputersByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersByIdSubset({
  id: 469498,
  subset: FindComputersByIdSubsetSubset.Certificates,
}).then((res: FindComputersByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindComputersByIdSubsetRequest](../../models/operations/findcomputersbyidsubsetrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindComputersByIdSubsetResponse](../../models/operations/findcomputersbyidsubsetresponse.md)>**


## findComputersByMacAddress

Finds computers by MAC address

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersByMacAddress({
  macaddress: "accusamus",
}).then((res: FindComputersByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindComputersByMacAddressRequest](../../models/operations/findcomputersbymacaddressrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindComputersByMacAddressResponse](../../models/operations/findcomputersbymacaddressresponse.md)>**


## findComputersByMacAddressSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByMacAddressSubsetResponse, FindComputersByMacAddressSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersByMacAddressSubset({
  macaddress: "aliquam",
  subset: FindComputersByMacAddressSubsetSubset.Certificates,
}).then((res: FindComputersByMacAddressSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindComputersByMacAddressSubsetRequest](../../models/operations/findcomputersbymacaddresssubsetrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindComputersByMacAddressSubsetResponse](../../models/operations/findcomputersbymacaddresssubsetresponse.md)>**


## findComputersByName

Finds the first computer with the given name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersByName({
  name: "Leslie Williamson",
}).then((res: FindComputersByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindComputersByNameRequest](../../models/operations/findcomputersbynamerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindComputersByNameResponse](../../models/operations/findcomputersbynameresponse.md)>**


## findComputersByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByNameSubsetResponse, FindComputersByNameSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersByNameSubset({
  name: "Carol Sawayn",
  subset: FindComputersByNameSubsetSubset.Certificates,
}).then((res: FindComputersByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindComputersByNameSubsetRequest](../../models/operations/findcomputersbynamesubsetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindComputersByNameSubsetResponse](../../models/operations/findcomputersbynamesubsetresponse.md)>**


## findComputersBySerialNumber

Finds computers by serial number

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersBySerialNumber({
  serialnumber: "consequuntur",
}).then((res: FindComputersBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindComputersBySerialNumberRequest](../../models/operations/findcomputersbyserialnumberrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindComputersBySerialNumberResponse](../../models/operations/findcomputersbyserialnumberresponse.md)>**


## findComputersBySerialNumberSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindComputersBySerialNumberSubsetResponse,
  FindComputersBySerialNumberSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersBySerialNumberSubset({
  serialnumber: "deleniti",
  subset: FindComputersBySerialNumberSubsetSubset.Location,
}).then((res: FindComputersBySerialNumberSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.FindComputersBySerialNumberSubsetRequest](../../models/operations/findcomputersbyserialnumbersubsetrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindComputersBySerialNumberSubsetResponse](../../models/operations/findcomputersbyserialnumbersubsetresponse.md)>**


## findComputersByUDID

Finds computers by UDID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersByUDID({
  udid: "fuga",
}).then((res: FindComputersByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindComputersByUDIDRequest](../../models/operations/findcomputersbyudidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindComputersByUDIDResponse](../../models/operations/findcomputersbyudidresponse.md)>**


## findComputersByUDIDSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Hardware)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputersByUDIDSubsetResponse, FindComputersByUDIDSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.findComputersByUDIDSubset({
  subset: FindComputersByUDIDSubsetSubset.ExtensionAttributes,
  udid: "incidunt",
}).then((res: FindComputersByUDIDSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindComputersByUDIDSubsetRequest](../../models/operations/findcomputersbyudidsubsetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindComputersByUDIDSubsetResponse](../../models/operations/findcomputersbyudidsubsetresponse.md)>**


## flushComputerExtenstionAttributeData

Deletes data collected by an extension attribute

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FlushComputerExtenstionAttributeDataResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.flushComputerExtenstionAttributeData({
  id: "82562f22-2e98-417e-a17c-be61e6b7b95b",
}).then((res: FlushComputerExtenstionAttributeDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FlushComputerExtenstionAttributeDataRequest](../../models/operations/flushcomputerextenstionattributedatarequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FlushComputerExtenstionAttributeDataResponse](../../models/operations/flushcomputerextenstionattributedataresponse.md)>**


## matchComputers

Match performs the same function as a simple search in the GUI.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { MatchComputersResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.matchComputers({
  match: "eligendi",
}).then((res: MatchComputersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.MatchComputersRequest](../../models/operations/matchcomputersrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.MatchComputersResponse](../../models/operations/matchcomputersresponse.md)>**


## matchComputersNames

Searches for computers that match the provided name parameter

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { MatchComputersNamesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.matchComputersNames({
  matchname: "sit",
}).then((res: MatchComputersNamesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.MatchComputersNamesRequest](../../models/operations/matchcomputersnamesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.MatchComputersNamesResponse](../../models/operations/matchcomputersnamesresponse.md)>**


## updateComputerById

Certificates and mdm_capable are ignored.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.updateComputerById({
  id: 636061,
}).then((res: UpdateComputerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateComputerByIdRequest](../../models/operations/updatecomputerbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateComputerByIdResponse](../../models/operations/updatecomputerbyidresponse.md)>**


## updateComputerByMacAddress

Certificates and mdm_capable are ignored.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerByMacAddressResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.updateComputerByMacAddress({
  macaddress: "tempore",
}).then((res: UpdateComputerByMacAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateComputerByMacAddressRequest](../../models/operations/updatecomputerbymacaddressrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateComputerByMacAddressResponse](../../models/operations/updatecomputerbymacaddressresponse.md)>**


## updateComputerByName

Certificates and mdm_capable are ignored.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.updateComputerByName({
  name: "Miss Blanca Cronin",
}).then((res: UpdateComputerByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateComputerByNameRequest](../../models/operations/updatecomputerbynamerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateComputerByNameResponse](../../models/operations/updatecomputerbynameresponse.md)>**


## updateComputerBySerialNumber

Certificates and mdm_capable are ignored.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerBySerialNumberResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.updateComputerBySerialNumber({
  serialnumber: "sapiente",
}).then((res: UpdateComputerBySerialNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateComputerBySerialNumberRequest](../../models/operations/updatecomputerbyserialnumberrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateComputerBySerialNumberResponse](../../models/operations/updatecomputerbyserialnumberresponse.md)>**


## updateComputerByUDID

Certificates and mdm_capable are ignored.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerByUDIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computers.updateComputerByUDID({
  udid: "consectetur",
}).then((res: UpdateComputerByUDIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateComputerByUDIDRequest](../../models/operations/updatecomputerbyudidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateComputerByUDIDResponse](../../models/operations/updatecomputerbyudidresponse.md)>**

