# patches

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

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreatePatchSoftwareTitlesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.createPatchSoftwareTitlesById({
  id: "6ecb5734-09e3-4eb1-a5a2-b12eb07f116d",
}).then((res: CreatePatchSoftwareTitlesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.CreatePatchSoftwareTitlesByIdRequest](../../models/operations/createpatchsoftwaretitlesbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.CreatePatchSoftwareTitlesByIdResponse](../../models/operations/createpatchsoftwaretitlesbyidresponse.md)>**


## ~~deleteSoftwareTitlesById~~

Deletes a Patch Software Title by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteSoftwareTitlesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.deleteSoftwareTitlesById({
  id: 729448,
}).then((res: DeleteSoftwareTitlesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteSoftwareTitlesByIdRequest](../../models/operations/deletesoftwaretitlesbyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteSoftwareTitlesByIdResponse](../../models/operations/deletesoftwaretitlesbyidresponse.md)>**


## ~~deleteSoftwareTitlesByName~~

Deletes a Patch Software Title by name (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteSoftwareTitlesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.deleteSoftwareTitlesByName({
  name: "Marion Hills",
}).then((res: DeleteSoftwareTitlesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteSoftwareTitlesByNameRequest](../../models/operations/deletesoftwaretitlesbynamerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteSoftwareTitlesByNameResponse](../../models/operations/deletesoftwaretitlesbynameresponse.md)>**


## ~~findComputersByIDAndTitleVersion~~

Displays information specified with the {version} parameter for a patch specified with the {id} parameter. A version number of 'Latest' and 'Unknown' will also work.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindComputersByIDAndTitleVersionResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.findComputersByIDAndTitleVersion({
  id: 988749,
  version: "eligendi",
}).then((res: FindComputersByIDAndTitleVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindComputersByIDAndTitleVersionRequest](../../models/operations/findcomputersbyidandtitleversionrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindComputersByIDAndTitleVersionResponse](../../models/operations/findcomputersbyidandtitleversionresponse.md)>**


## ~~findComputersByNameAndTitleVersion~~

Displays information specified with the {version} parameter for a patch specified with the {name} parameter. A version number of 'Latest' and 'Unknown' will also work.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindComputersByNameAndTitleVersionResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.findComputersByNameAndTitleVersion({
  name: "Ronnie Welch",
  version: "totam",
}).then((res: FindComputersByNameAndTitleVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.FindComputersByNameAndTitleVersionRequest](../../models/operations/findcomputersbynameandtitleversionrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.FindComputersByNameAndTitleVersionResponse](../../models/operations/findcomputersbynameandtitleversionresponse.md)>**


## ~~findPatches~~

Finds all patches (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPatchesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.findPatches().then((res: FindPatchesResponse) => {
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

**Promise<[operations.FindPatchesResponse](../../models/operations/findpatchesresponse.md)>**


## ~~findPatchesById~~

Finds patches by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPatchesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.findPatchesById({
  id: 564667,
}).then((res: FindPatchesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindPatchesByIdRequest](../../models/operations/findpatchesbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindPatchesByIdResponse](../../models/operations/findpatchesbyidresponse.md)>**


## ~~findPatchesByName~~

Finds the first patch with the name provided (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindPatchesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.findPatchesByName({
  name: "Ms. Jessica Turcotte",
}).then((res: FindPatchesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindPatchesByNameRequest](../../models/operations/findpatchesbynamerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindPatchesByNameResponse](../../models/operations/findpatchesbynameresponse.md)>**


## ~~updateSoftwareTitlesById~~

Using an empty <package/> tag will disassociate any previous packages associated with a specific software title version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateSoftwareTitlesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.updateSoftwareTitlesById({
  id: 826862,
}).then((res: UpdateSoftwareTitlesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateSoftwareTitlesByIdRequest](../../models/operations/updatesoftwaretitlesbyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateSoftwareTitlesByIdResponse](../../models/operations/updatesoftwaretitlesbyidresponse.md)>**


## ~~updateSoftwareTitlesByName~~

Using an empty <package/> tag will disassociate any previous packages associated with a specific software title version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateSoftwareTitlesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patches.updateSoftwareTitlesByName({
  name: "Dr. Marco Frami",
}).then((res: UpdateSoftwareTitlesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateSoftwareTitlesByNameRequest](../../models/operations/updatesoftwaretitlesbynamerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateSoftwareTitlesByNameResponse](../../models/operations/updatesoftwaretitlesbynameresponse.md)>**

