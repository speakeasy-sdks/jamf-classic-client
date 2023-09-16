# Patchinternalsources

### Available Operations

* [findPatchInternalSources](#findpatchinternalsources) - Finds all patch internal sources
* [findPatchInternalSourcesById](#findpatchinternalsourcesbyid) - Finds a patch internal source by ID
* [findPatchInternalSourcesByName](#findpatchinternalsourcesbyname) - Finds the first patch internal source with the name provided

## findPatchInternalSources

Finds all patch internal sources

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchInternalSourcesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchinternalsources.findPatchInternalSources().then((res: FindPatchInternalSourcesResponse) => {
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

**Promise<[operations.FindPatchInternalSourcesResponse](../../models/operations/findpatchinternalsourcesresponse.md)>**


## findPatchInternalSourcesById

Finds a patch internal source by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchInternalSourcesByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchinternalsources.findPatchInternalSourcesById({
  id: "9eb75dad-636c-4600-903d-8bb31180f739",
}).then((res: FindPatchInternalSourcesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindPatchInternalSourcesByIdRequest](../../models/operations/findpatchinternalsourcesbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindPatchInternalSourcesByIdResponse](../../models/operations/findpatchinternalsourcesbyidresponse.md)>**


## findPatchInternalSourcesByName

Finds the first patch internal source with the name provided

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindPatchInternalSourcesByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchinternalsources.findPatchInternalSourcesByName({
  name: "Terence Medhurst III",
}).then((res: FindPatchInternalSourcesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindPatchInternalSourcesByNameRequest](../../models/operations/findpatchinternalsourcesbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindPatchInternalSourcesByNameResponse](../../models/operations/findpatchinternalsourcesbynameresponse.md)>**

