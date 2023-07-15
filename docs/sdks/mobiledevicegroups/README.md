# mobiledevicegroups

### Available Operations

* [createMobileDeviceGroupById](#createmobiledevicegroupbyid) - Creates a new mobile device group by ID
* [deleteMobileDeviceGroupById](#deletemobiledevicegroupbyid) - Deletes a mobile device group by ID
* [deleteMobileDeviceGroupByName](#deletemobiledevicegroupbyname) - Deletes a mobile device group by name
* [findMobileDeviceGroups](#findmobiledevicegroups) - Finds all mobile device groups
* [findMobileDeviceGroupsById](#findmobiledevicegroupsbyid) - Finds mobile device groups by ID
* [findMobileDeviceGroupsByName](#findmobiledevicegroupsbyname) - Finds mobile device groups by name
* [updateMobileDeviceGroupById](#updatemobiledevicegroupbyid) - Updates an existing mobile device group by ID
* [updateMobileDeviceGroupByName](#updatemobiledevicegroupbyname) - Updates an existing mobile device group by name

## createMobileDeviceGroupById

Creates a new mobile device group by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateMobileDeviceGroupByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.createMobileDeviceGroupById({
  id: 759283,
}).then((res: CreateMobileDeviceGroupByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.CreateMobileDeviceGroupByIdRequest](../../models/operations/createmobiledevicegroupbyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.CreateMobileDeviceGroupByIdResponse](../../models/operations/createmobiledevicegroupbyidresponse.md)>**


## deleteMobileDeviceGroupById

Deletes a mobile device group by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteMobileDeviceGroupByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.deleteMobileDeviceGroupById({
  id: 579681,
}).then((res: DeleteMobileDeviceGroupByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteMobileDeviceGroupByIdRequest](../../models/operations/deletemobiledevicegroupbyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteMobileDeviceGroupByIdResponse](../../models/operations/deletemobiledevicegroupbyidresponse.md)>**


## deleteMobileDeviceGroupByName

Deletes a mobile device group by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteMobileDeviceGroupByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.deleteMobileDeviceGroupByName({
  name: "Allison Kuvalis",
}).then((res: DeleteMobileDeviceGroupByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteMobileDeviceGroupByNameRequest](../../models/operations/deletemobiledevicegroupbynamerequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteMobileDeviceGroupByNameResponse](../../models/operations/deletemobiledevicegroupbynameresponse.md)>**


## findMobileDeviceGroups

Finds all mobile device groups

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMobileDeviceGroupsResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.findMobileDeviceGroups().then((res: FindMobileDeviceGroupsResponse) => {
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

**Promise<[operations.FindMobileDeviceGroupsResponse](../../models/operations/findmobiledevicegroupsresponse.md)>**


## findMobileDeviceGroupsById

Finds mobile device groups by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMobileDeviceGroupsByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.findMobileDeviceGroupsById({
  id: 254025,
}).then((res: FindMobileDeviceGroupsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.FindMobileDeviceGroupsByIdRequest](../../models/operations/findmobiledevicegroupsbyidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.FindMobileDeviceGroupsByIdResponse](../../models/operations/findmobiledevicegroupsbyidresponse.md)>**


## findMobileDeviceGroupsByName

Finds mobile device groups by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindMobileDeviceGroupsByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.findMobileDeviceGroupsByName({
  name: "Brandy Gibson",
}).then((res: FindMobileDeviceGroupsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.FindMobileDeviceGroupsByNameRequest](../../models/operations/findmobiledevicegroupsbynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindMobileDeviceGroupsByNameResponse](../../models/operations/findmobiledevicegroupsbynameresponse.md)>**


## updateMobileDeviceGroupById

One or more mobile devices can be added by using "mobile_device_additions" instead of "mobile_devices". One or more computers can be deleted by using "mobile_device_deletions" instead of "mobile_devices".

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateMobileDeviceGroupByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.updateMobileDeviceGroupById({
  id: 200516,
}).then((res: UpdateMobileDeviceGroupByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateMobileDeviceGroupByIdRequest](../../models/operations/updatemobiledevicegroupbyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateMobileDeviceGroupByIdResponse](../../models/operations/updatemobiledevicegroupbyidresponse.md)>**


## updateMobileDeviceGroupByName

One or more mobile devices can be added by using "mobile_device_additions" instead of "mobile_devices". One or more computers can be deleted by using "mobile_device_deletions" instead of "mobile_devices".

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateMobileDeviceGroupByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicegroups.updateMobileDeviceGroupByName({
  name: "Ms. Armando Gottlieb",
}).then((res: UpdateMobileDeviceGroupByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.UpdateMobileDeviceGroupByNameRequest](../../models/operations/updatemobiledevicegroupbynamerequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UpdateMobileDeviceGroupByNameResponse](../../models/operations/updatemobiledevicegroupbynameresponse.md)>**
