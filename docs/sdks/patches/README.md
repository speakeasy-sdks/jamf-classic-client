# Patches
(*patches*)

### Available Operations

* [~~createPatchSoftwareTitlesById~~](#createpatchsoftwaretitlesbyid) - Creates a patch software title (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**
* [~~deleteSoftwareTitlesById~~](#deletesoftwaretitlesbyid) - Deletes a Patch Software Title by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~deleteSoftwareTitlesByName~~](#deletesoftwaretitlesbyname) - Deletes a Patch Software Title by name (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**
* [~~findComputersByIDAndTitleVersion~~](#findcomputersbyidandtitleversion) - Display computers on a specific version (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/definitions".) :warning: **Deprecated**
* [~~findComputersByNameAndTitleVersion~~](#findcomputersbynameandtitleversion) - Display computers on a specific version (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**
* [~~findPatches~~](#findpatches) - Finds all patches (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations". :warning: **Deprecated**
* [~~findPatchesById~~](#findpatchesbyid) - Finds patches by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~findPatchesByName~~](#findpatchesbyname) - Finds the first patch with the name provided (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~updateSoftwareTitlesById~~](#updatesoftwaretitlesbyid) - Updates a Patch Software Title by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~updateSoftwareTitlesByName~~](#updatesoftwaretitlesbyname) - Updates a Patch Software Title by name (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**

## ~~createPatchSoftwareTitlesById~~

The patch title must exist within a specific site or Full Jamf Pro. Use this endpoint to create additional instances of the patch software title for specific sites. The name_id element can be obtained from the /patches and/or /patches/id/{id} resources.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.createPatchSoftwareTitlesById({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.CreatePatchSoftwareTitlesByIdRequest](../../sdk/models/operations/createpatchsoftwaretitlesbyidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.CreatePatchSoftwareTitlesByIdResponse](../../sdk/models/operations/createpatchsoftwaretitlesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~deleteSoftwareTitlesById~~

Deletes a Patch Software Title by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.deleteSoftwareTitlesById({
    id: 821143,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteSoftwareTitlesByIdRequest](../../sdk/models/operations/deletesoftwaretitlesbyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteSoftwareTitlesByIdResponse](../../sdk/models/operations/deletesoftwaretitlesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~deleteSoftwareTitlesByName~~

Deletes a Patch Software Title by name (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.deleteSoftwareTitlesByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteSoftwareTitlesByNameRequest](../../sdk/models/operations/deletesoftwaretitlesbynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteSoftwareTitlesByNameResponse](../../sdk/models/operations/deletesoftwaretitlesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~findComputersByIDAndTitleVersion~~

Displays information specified with the {version} parameter for a patch specified with the {id} parameter. A version number of 'Latest' and 'Unknown' will also work.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.findComputersByIDAndTitleVersion({
    id: 188338,
    version: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputersByIDAndTitleVersionRequest](../../sdk/models/operations/findcomputersbyidandtitleversionrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputersByIDAndTitleVersionResponse](../../sdk/models/operations/findcomputersbyidandtitleversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~findComputersByNameAndTitleVersion~~

Displays information specified with the {version} parameter for a patch specified with the {name} parameter. A version number of 'Latest' and 'Unknown' will also work.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.findComputersByNameAndTitleVersion({
    name: "string",
    version: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.FindComputersByNameAndTitleVersionRequest](../../sdk/models/operations/findcomputersbynameandtitleversionrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.FindComputersByNameAndTitleVersionResponse](../../sdk/models/operations/findcomputersbynameandtitleversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~findPatches~~

Finds all patches (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.findPatches();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindPatchesResponse](../../sdk/models/operations/findpatchesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~findPatchesById~~

Finds patches by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.findPatchesById({
    id: 972398,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindPatchesByIdRequest](../../sdk/models/operations/findpatchesbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindPatchesByIdResponse](../../sdk/models/operations/findpatchesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~findPatchesByName~~

Finds the first patch with the name provided (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.findPatchesByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindPatchesByNameRequest](../../sdk/models/operations/findpatchesbynamerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindPatchesByNameResponse](../../sdk/models/operations/findpatchesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~updateSoftwareTitlesById~~

Using an empty <package/> tag will disassociate any previous packages associated with a specific software title version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.updateSoftwareTitlesById({
    id: 862315,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateSoftwareTitlesByIdRequest](../../sdk/models/operations/updatesoftwaretitlesbyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateSoftwareTitlesByIdResponse](../../sdk/models/operations/updatesoftwaretitlesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~updateSoftwareTitlesByName~~

Using an empty <package/> tag will disassociate any previous packages associated with a specific software title version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.patches.updateSoftwareTitlesByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateSoftwareTitlesByNameRequest](../../sdk/models/operations/updatesoftwaretitlesbynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateSoftwareTitlesByNameResponse](../../sdk/models/operations/updatesoftwaretitlesbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
