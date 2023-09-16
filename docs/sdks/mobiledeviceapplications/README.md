# Mobiledeviceapplications

### Available Operations

* [createMobileDeviceApplicationById](#createmobiledeviceapplicationbyid) - Creates a new mobile device application by ID
* [deleteMobileDeviceApplicationByBundleID](#deletemobiledeviceapplicationbybundleid) - Deletes a mobile device application by bundle ID
* [deleteMobileDeviceApplicationByBundleIDandVersion](#deletemobiledeviceapplicationbybundleidandversion) - Deletes a mobile device application by bundle ID and version
* [deleteMobileDeviceApplicationById](#deletemobiledeviceapplicationbyid) - Deletes a mobile device application by ID
* [deleteMobileDeviceApplicationByName](#deletemobiledeviceapplicationbyname) - Deletes a mobile device application by name
* [findMobileDeviceApplications](#findmobiledeviceapplications) - Finds all mobile device applications
* [findMobileDeviceApplicationsByBundleID](#findmobiledeviceapplicationsbybundleid) - Finds mobile device applications by bundle ID
* [findMobileDeviceApplicationsByBundleIDandVersion](#findmobiledeviceapplicationsbybundleidandversion) - Finds mobile device applications by bundle ID and version
* [findMobileDeviceApplicationsById](#findmobiledeviceapplicationsbyid) - Finds mobile device applications by ID
* [findMobileDeviceApplicationsByName](#findmobiledeviceapplicationsbyname) - Finds mobile device applications by name
* [findMobileDeviceApplicationsByNameSubset](#findmobiledeviceapplicationsbynamesubset) - Finds a subset of data for mobile device applications by name
* [findMobileDeviceAppsByIdSubset](#findmobiledeviceappsbyidsubset) - Finds a subset of data for a mobile device application by ID
* [updateMobileDeviceApplicationByBundleID](#updatemobiledeviceapplicationbybundleid) - Updates an existing mobile device application by bundle ID
* [updateMobileDeviceApplicationByBundleIDandVersion](#updatemobiledeviceapplicationbybundleidandversion) - Updates an existing mobile device application by bundle ID and version
* [updateMobileDeviceApplicationById](#updatemobiledeviceapplicationbyid) - Updates an existing mobile device application by ID
* [updateMobileDeviceApplicationByName](#updatemobiledeviceapplicationbyname) - Updates an existing mobile device application by name

## createMobileDeviceApplicationById

App configuration preferences should be listed using character entities, e.g. <preferences><dict><key>abc</key><string>xyz</string></dict></preferences>

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceApplicationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.createMobileDeviceApplicationById({
  id: 380335,
}).then((res: CreateMobileDeviceApplicationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.CreateMobileDeviceApplicationByIdRequest](../../models/operations/createmobiledeviceapplicationbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.CreateMobileDeviceApplicationByIdResponse](../../models/operations/createmobiledeviceapplicationbyidresponse.md)>**


## deleteMobileDeviceApplicationByBundleID

Deletes a mobile device application by bundle ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceApplicationByBundleIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.deleteMobileDeviceApplicationByBundleID({
  bundleid: "dolorem",
}).then((res: DeleteMobileDeviceApplicationByBundleIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteMobileDeviceApplicationByBundleIDRequest](../../models/operations/deletemobiledeviceapplicationbybundleidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteMobileDeviceApplicationByBundleIDResponse](../../models/operations/deletemobiledeviceapplicationbybundleidresponse.md)>**


## deleteMobileDeviceApplicationByBundleIDandVersion

Deletes a mobile device application by bundle ID and version

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceApplicationByBundleIDandVersionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.deleteMobileDeviceApplicationByBundleIDandVersion({
  bundleid: "fugit",
  version: "cumque",
}).then((res: DeleteMobileDeviceApplicationByBundleIDandVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.DeleteMobileDeviceApplicationByBundleIDandVersionRequest](../../models/operations/deletemobiledeviceapplicationbybundleidandversionrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.DeleteMobileDeviceApplicationByBundleIDandVersionResponse](../../models/operations/deletemobiledeviceapplicationbybundleidandversionresponse.md)>**


## deleteMobileDeviceApplicationById

Deletes a mobile device application by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceApplicationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.deleteMobileDeviceApplicationById({
  id: 684935,
}).then((res: DeleteMobileDeviceApplicationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeleteMobileDeviceApplicationByIdRequest](../../models/operations/deletemobiledeviceapplicationbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeleteMobileDeviceApplicationByIdResponse](../../models/operations/deletemobiledeviceapplicationbyidresponse.md)>**


## deleteMobileDeviceApplicationByName

Deletes a mobile device application by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { DeleteMobileDeviceApplicationByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.deleteMobileDeviceApplicationByName({
  name: "Lynda Tromp Sr.",
}).then((res: DeleteMobileDeviceApplicationByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteMobileDeviceApplicationByNameRequest](../../models/operations/deletemobiledeviceapplicationbynamerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteMobileDeviceApplicationByNameResponse](../../models/operations/deletemobiledeviceapplicationbynameresponse.md)>**


## findMobileDeviceApplications

Finds all mobile device applications

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceApplicationsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.findMobileDeviceApplications().then((res: FindMobileDeviceApplicationsResponse) => {
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

**Promise<[operations.FindMobileDeviceApplicationsResponse](../../models/operations/findmobiledeviceapplicationsresponse.md)>**


## findMobileDeviceApplicationsByBundleID

If multiple applications match, no application is returned. You may specify both bundle id and version to uniquely identify a mobile device application.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceApplicationsByBundleIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.findMobileDeviceApplicationsByBundleID({
  bundleid: "et",
}).then((res: FindMobileDeviceApplicationsByBundleIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.FindMobileDeviceApplicationsByBundleIDRequest](../../models/operations/findmobiledeviceapplicationsbybundleidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.FindMobileDeviceApplicationsByBundleIDResponse](../../models/operations/findmobiledeviceapplicationsbybundleidresponse.md)>**


## findMobileDeviceApplicationsByBundleIDandVersion

Finds mobile device applications by bundle ID and version

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceApplicationsByBundleIDandVersionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.findMobileDeviceApplicationsByBundleIDandVersion({
  bundleid: "ducimus",
  version: "natus",
}).then((res: FindMobileDeviceApplicationsByBundleIDandVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.FindMobileDeviceApplicationsByBundleIDandVersionRequest](../../models/operations/findmobiledeviceapplicationsbybundleidandversionrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.FindMobileDeviceApplicationsByBundleIDandVersionResponse](../../models/operations/findmobiledeviceapplicationsbybundleidandversionresponse.md)>**


## findMobileDeviceApplicationsById

Finds mobile device applications by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceApplicationsByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.findMobileDeviceApplicationsById({
  id: 581082,
}).then((res: FindMobileDeviceApplicationsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindMobileDeviceApplicationsByIdRequest](../../models/operations/findmobiledeviceapplicationsbyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindMobileDeviceApplicationsByIdResponse](../../models/operations/findmobiledeviceapplicationsbyidresponse.md)>**


## findMobileDeviceApplicationsByName

Finds mobile device applications by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceApplicationsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.findMobileDeviceApplicationsByName({
  name: "Josephine Boyer",
}).then((res: FindMobileDeviceApplicationsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindMobileDeviceApplicationsByNameRequest](../../models/operations/findmobiledeviceapplicationsbynamerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindMobileDeviceApplicationsByNameResponse](../../models/operations/findmobiledeviceapplicationsbynameresponse.md)>**


## findMobileDeviceApplicationsByNameSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  FindMobileDeviceApplicationsByNameSubsetResponse,
  FindMobileDeviceApplicationsByNameSubsetSubset,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.findMobileDeviceApplicationsByNameSubset({
  name: "Terence Beer",
  subset: FindMobileDeviceApplicationsByNameSubsetSubset.SelfService,
}).then((res: FindMobileDeviceApplicationsByNameSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.FindMobileDeviceApplicationsByNameSubsetRequest](../../models/operations/findmobiledeviceapplicationsbynamesubsetrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.FindMobileDeviceApplicationsByNameSubsetResponse](../../models/operations/findmobiledeviceapplicationsbynamesubsetresponse.md)>**


## findMobileDeviceAppsByIdSubset

Subset values can also be appended using an ampersand to return multiple subsets (e.g. /subsets/General&Scope)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceAppsByIdSubsetResponse, FindMobileDeviceAppsByIdSubsetSubset } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.findMobileDeviceAppsByIdSubset({
  id: 115834,
  subset: FindMobileDeviceAppsByIdSubsetSubset.SelfService,
}).then((res: FindMobileDeviceAppsByIdSubsetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindMobileDeviceAppsByIdSubsetRequest](../../models/operations/findmobiledeviceappsbyidsubsetrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindMobileDeviceAppsByIdSubsetResponse](../../models/operations/findmobiledeviceappsbyidsubsetresponse.md)>**


## updateMobileDeviceApplicationByBundleID

Updates an existing mobile device application by bundle ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceApplicationByBundleIDResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.updateMobileDeviceApplicationByBundleID({
  bundleid: "esse",
}).then((res: UpdateMobileDeviceApplicationByBundleIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.UpdateMobileDeviceApplicationByBundleIDRequest](../../models/operations/updatemobiledeviceapplicationbybundleidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.UpdateMobileDeviceApplicationByBundleIDResponse](../../models/operations/updatemobiledeviceapplicationbybundleidresponse.md)>**


## updateMobileDeviceApplicationByBundleIDandVersion

Updates an existing mobile device application by bundle ID and version

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceApplicationByBundleIDandVersionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.updateMobileDeviceApplicationByBundleIDandVersion({
  bundleid: "praesentium",
  version: "maiores",
}).then((res: UpdateMobileDeviceApplicationByBundleIDandVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.UpdateMobileDeviceApplicationByBundleIDandVersionRequest](../../models/operations/updatemobiledeviceapplicationbybundleidandversionrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.UpdateMobileDeviceApplicationByBundleIDandVersionResponse](../../models/operations/updatemobiledeviceapplicationbybundleidandversionresponse.md)>**


## updateMobileDeviceApplicationById

App configuration preferences should be listed using character entities, e.g. <preferences><dict><key>abc</key><string>xyz</string></dict></preferences>

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceApplicationByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.updateMobileDeviceApplicationById({
  id: 967260,
}).then((res: UpdateMobileDeviceApplicationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.UpdateMobileDeviceApplicationByIdRequest](../../models/operations/updatemobiledeviceapplicationbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.UpdateMobileDeviceApplicationByIdResponse](../../models/operations/updatemobiledeviceapplicationbyidresponse.md)>**


## updateMobileDeviceApplicationByName

Updates an existing mobile device application by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateMobileDeviceApplicationByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledeviceapplications.updateMobileDeviceApplicationByName({
  name: "Mr. Diane Stiedemann",
}).then((res: UpdateMobileDeviceApplicationByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.UpdateMobileDeviceApplicationByNameRequest](../../models/operations/updatemobiledeviceapplicationbynamerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.UpdateMobileDeviceApplicationByNameResponse](../../models/operations/updatemobiledeviceapplicationbynameresponse.md)>**

