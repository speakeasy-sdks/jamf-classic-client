# byoprofiles

### Available Operations

* [createBYOProfilesById](#createbyoprofilesbyid) - Creates a personal device profile by ID
* [deleteBYOProfilesById](#deletebyoprofilesbyid) - Deletes a personal device profile by ID
* [deleteBYOProfilesByName](#deletebyoprofilesbyname) - Deletes a personal device profile by name
* [findBYOProfiles](#findbyoprofiles) - Finds all personal device profiles
* [findBYOProfilesById](#findbyoprofilesbyid) - Finds personal device profile by ID
* [findBYOProfilesByName](#findbyoprofilesbyname) - Finds a personal device profile by name
* [updateBYOProfilesById](#updatebyoprofilesbyid) - Updates a personal device profile by ID
* [updateBYOProfilesByName](#updatebyoprofilesbyname) - Updates a personal device profile by name

## createBYOProfilesById

Creates a personal device profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateBYOProfilesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.createBYOProfilesById({
  id: 466311,
}).then((res: CreateBYOProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateBYOProfilesByIdRequest](../../models/operations/createbyoprofilesbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateBYOProfilesByIdResponse](../../models/operations/createbyoprofilesbyidresponse.md)>**


## deleteBYOProfilesById

Deletes a personal device profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteBYOProfilesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.deleteBYOProfilesById({
  id: 474697,
}).then((res: DeleteBYOProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteBYOProfilesByIdRequest](../../models/operations/deletebyoprofilesbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteBYOProfilesByIdResponse](../../models/operations/deletebyoprofilesbyidresponse.md)>**


## deleteBYOProfilesByName

Deletes a personal device profile by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteBYOProfilesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.deleteBYOProfilesByName({
  name: "Sabrina Cronin MD",
}).then((res: DeleteBYOProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteBYOProfilesByNameRequest](../../models/operations/deletebyoprofilesbynamerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteBYOProfilesByNameResponse](../../models/operations/deletebyoprofilesbynameresponse.md)>**


## findBYOProfiles

Finds all personal device profiles

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindBYOProfilesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.findBYOProfiles().then((res: FindBYOProfilesResponse) => {
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

**Promise<[operations.FindBYOProfilesResponse](../../models/operations/findbyoprofilesresponse.md)>**


## findBYOProfilesById

Finds personal device profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindBYOProfilesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.findBYOProfilesById({
  id: 656330,
}).then((res: FindBYOProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindBYOProfilesByIdRequest](../../models/operations/findbyoprofilesbyidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindBYOProfilesByIdResponse](../../models/operations/findbyoprofilesbyidresponse.md)>**


## findBYOProfilesByName

Finds a personal device profile by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindBYOProfilesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.findBYOProfilesByName({
  name: "Christina Satterfield",
}).then((res: FindBYOProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.FindBYOProfilesByNameRequest](../../models/operations/findbyoprofilesbynamerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.FindBYOProfilesByNameResponse](../../models/operations/findbyoprofilesbynameresponse.md)>**


## updateBYOProfilesById

Updates a personal device profile by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateBYOProfilesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.updateBYOProfilesById({
  id: 368725,
}).then((res: UpdateBYOProfilesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateBYOProfilesByIdRequest](../../models/operations/updatebyoprofilesbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateBYOProfilesByIdResponse](../../models/operations/updatebyoprofilesbyidresponse.md)>**


## updateBYOProfilesByName

You cannot reassign the site since it is maintained by Jamf Pro.

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateBYOProfilesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.byoprofiles.updateBYOProfilesByName({
  name: "Miss Rufus Ankunding",
}).then((res: UpdateBYOProfilesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateBYOProfilesByNameRequest](../../models/operations/updatebyoprofilesbynamerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateBYOProfilesByNameResponse](../../models/operations/updatebyoprofilesbynameresponse.md)>**

