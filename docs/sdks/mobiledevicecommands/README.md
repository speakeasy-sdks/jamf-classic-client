# Mobiledevicecommands

### Available Operations

* [createMobileDeviceCommand](#createmobiledevicecommand) - Creates a new mobile device command
* [createMobileDeviceCommandURL](#createmobiledevicecommandurl) - Creates a new mobile device command
* [createMobileDeviceLockCommandURL](#createmobiledevicelockcommandurl) - Sends a new lock command to a list of mobile devices
* [createMobileDeviceNameCommandURL](#createmobiledevicenamecommandurl) - Creates a new command to set the name of a mobile device.
* [createMobileScheduleOSUpdateCommandURL](#createmobilescheduleosupdatecommandurl) - Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Device will be updated to the latest OS version based on device eligibility. (deprecated on 2022-10-17)
* [createMobileScheduleOSUpdateCommandWithProductVersionURL](#createmobilescheduleosupdatecommandwithproductversionurl) - Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Mixing iOS and tvOS devices in ID list is not advised, as product version is specific to OS type. (deprecated on 2022-10-17)
* [findMobileDeviceCommands](#findmobiledevicecommands) - Finds all mobile device commands
* [findMobileDeviceCommandsByCommand](#findmobiledevicecommandsbycommand) - Finds all mobile device commands for specified command
* [findMobileDeviceCommandsByName](#findmobiledevicecommandsbyname) - Finds all mobile device commands by command name
* [findMobileDeviceCommandsByUuid](#findmobiledevicecommandsbyuuid) - Finds a mobile device command by UUID

## createMobileDeviceCommand

The chart below includes additional requirements for usage of specific commands

| command | Parameters | Requirements | Values |
| ---------- | ------- | ------------ | ------ |
| DeviceName | device_name | Supervised Device | string |
| DeviceLocation | N/A | Supervised and in lost mode | N/A |
| DeviceLock | lock_message | optional | string |
| DisableLostMode | N/A | Supervised and in lost mode | N/A |
| EnableLostMode | lost_mode_message | Supervised device (required if lost_mode_phone is not set) | string |
| EnableLostMode | lost_mode_phone | Supervised device (required if lost_mode_message is not set) | string |
| EnableLostMode | lost_mode_footnote | optional | string |
| EnableLostMode | always_enforce_lost_mode | optional (defaults to 'true') | boolean |
| EnableLostMode | lost_mode_with_sound | optional (defaults to 'false') | boolean |
| EraseDevice | preserve_data_plan | optional (defaults to 'false') | boolean |
| EraseDevice | disallow_proximity_setup | optional (defaults to 'false') | boolean |
| EraseDevice | clear_activation_lock | optional (defaults to 'false') | boolean |
| PasscodeLockGracePeriod | passcode_lock_grace_period | Shared iPad | seconds (integer) |
| PlayLostModeSound | N/A | Supervised and in lost mode | N/A |
| RestartDevice | N/A | Supervised device | N/A |
| ScheduleOSUpdate (deprecated on 2022-10-17) | install_action | iOS 9 - 10.2, enrolled via a Prestage enrollment; and/or iOS 10.3 or later; tvOS 12 or later | 1 = Download the update for users to install, 2 = Download and install the update, and restart devices after installation |
| ScheduleOSUpdate (deprecated on 2022-10-17) | product_version | iOS 11.3 or later, tvOS 12.2 or later | string |
| SettingsDisableBluetooth | N/A | iOS 11.3+ and Supervised | N/A |
| SettingsEnableBluetooth | N/A | iOS 11.3+ and Supervised | N/A |
| ShutDownDevice | N/A | Supervised device | N/A |
| Wallpaper | wallpaper_settings | Supervised device | 1 = Lock screen, 2 = Home screen, 3 = both |
| Wallpaper | wallpaper_id | Supervised device (required if wallpaper_content is not set) | Jamf Pro icon ID (integer) |
| Wallpaper | wallpaper_content | Supervised device (required if wallpaper_id is not set) | base64 encoded PNG or JPEG |
| RefreshCellularPlans | e_sim_server_url | N/A | This URL is obtained from each carrier separately |


### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceCommandResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { MobileDeviceCommandPostGeneralCommand } from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.createMobileDeviceCommand("tempora".encode()).then((res: CreateMobileDeviceCommandResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateMobileDeviceCommandResponse](../../models/operations/createmobiledevicecommandresponse.md)>**


## createMobileDeviceCommandURL

The chart below includes additional requirements for usage of specific commands

| command | Parameters | Requirements | Values |
| ---------- | ------- | ------------ | ------ |
| DeviceLocation | N/A | Supervised and in lost mode | N/A |
| DisableLostMode | N/A | Supervised and in lost mode | N/A |
| EnableLostMode | lost_mode_message | Supervised device (required if lost_mode_phone is not set) | string |
| EnableLostMode | lost_mode_phone | Supervised device (required if lost_mode_message is not set) | string |
| EnableLostMode | lost_mode_footnote | optional | string |
| EnableLostMode | always_enforce_lost_mode | optional (defaults to 'true') | boolean |
| EnableLostMode | lost_mode_with_sound | optional (defaults to 'false') | boolean |
| EraseDevice | preserve_data_plan | optional (defaults to 'false') | boolean |
| EraseDevice | disallow_proximity_setup | optional (defaults to 'false') | boolean |
| PasscodeLockGracePeriod | passcode_lock_grace_period | Shared iPad | seconds (integer) |
| PlayLostModeSound | N/A | Supervised and in lost mode | N/A |
| RestartDevice | N/A | Supervised device | N/A |
| SettingsDisableBluetooth | N/A | iOS 11.3+ and Supervised | N/A |
| SettingsEnableBluetooth | N/A | iOS 11.3+ and Supervised | N/A |
| ShutDownDevice | N/A | Supervised device | N/A |


### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceCommandURLCommand, CreateMobileDeviceCommandURLResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.createMobileDeviceCommandURL({
  command: CreateMobileDeviceCommandURLCommand.SettingsDisableAppAnalytics,
  idList: "ex",
}).then((res: CreateMobileDeviceCommandURLResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.CreateMobileDeviceCommandURLRequest](../../models/operations/createmobiledevicecommandurlrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.CreateMobileDeviceCommandURLResponse](../../models/operations/createmobiledevicecommandurlresponse.md)>**


## createMobileDeviceLockCommandURL

Sends a new lock command to a list of mobile devices

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceLockCommandURLResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.createMobileDeviceLockCommandURL({
  idList: "consectetur",
  lockMessage: "aliquid",
}).then((res: CreateMobileDeviceLockCommandURLResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.CreateMobileDeviceLockCommandURLRequest](../../models/operations/createmobiledevicelockcommandurlrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.CreateMobileDeviceLockCommandURLResponse](../../models/operations/createmobiledevicelockcommandurlresponse.md)>**


## createMobileDeviceNameCommandURL

Creates a new command to set the name of a mobile device.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateMobileDeviceNameCommandURLResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.createMobileDeviceNameCommandURL({
  deviceName: "ipsa",
  idList: "laborum",
}).then((res: CreateMobileDeviceNameCommandURLResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.CreateMobileDeviceNameCommandURLRequest](../../models/operations/createmobiledevicenamecommandurlrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.CreateMobileDeviceNameCommandURLResponse](../../models/operations/createmobiledevicenamecommandurlresponse.md)>**


## createMobileScheduleOSUpdateCommandURL

Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Device will be updated to the latest OS version based on device eligibility. (deprecated on 2022-10-17)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  CreateMobileScheduleOSUpdateCommandURLInstallAction,
  CreateMobileScheduleOSUpdateCommandURLResponse,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.createMobileScheduleOSUpdateCommandURL({
  idList: "sunt",
  installAction: CreateMobileScheduleOSUpdateCommandURLInstallAction.One,
}).then((res: CreateMobileScheduleOSUpdateCommandURLResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.CreateMobileScheduleOSUpdateCommandURLRequest](../../models/operations/createmobilescheduleosupdatecommandurlrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.CreateMobileScheduleOSUpdateCommandURLResponse](../../models/operations/createmobilescheduleosupdatecommandurlresponse.md)>**


## createMobileScheduleOSUpdateCommandWithProductVersionURL

Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Mixing iOS and tvOS devices in ID list is not advised, as product version is specific to OS type. (deprecated on 2022-10-17)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  CreateMobileScheduleOSUpdateCommandWithProductVersionURLInstallAction,
  CreateMobileScheduleOSUpdateCommandWithProductVersionURLResponse,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.createMobileScheduleOSUpdateCommandWithProductVersionURL({
  idList: "fugiat",
  installAction: CreateMobileScheduleOSUpdateCommandWithProductVersionURLInstallAction.Two,
  productVersion: "aliquid",
}).then((res: CreateMobileScheduleOSUpdateCommandWithProductVersionURLResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.CreateMobileScheduleOSUpdateCommandWithProductVersionURLRequest](../../models/operations/createmobilescheduleosupdatecommandwithproductversionurlrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.CreateMobileScheduleOSUpdateCommandWithProductVersionURLResponse](../../models/operations/createmobilescheduleosupdatecommandwithproductversionurlresponse.md)>**


## findMobileDeviceCommands

Finds all mobile device commands

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceCommandsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.findMobileDeviceCommands().then((res: FindMobileDeviceCommandsResponse) => {
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

**Promise<[operations.FindMobileDeviceCommandsResponse](../../models/operations/findmobiledevicecommandsresponse.md)>**


## findMobileDeviceCommandsByCommand

Finds all mobile device commands for specified command

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceCommandsByCommandResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.findMobileDeviceCommandsByCommand({
  command: "officia",
}).then((res: FindMobileDeviceCommandsByCommandResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.FindMobileDeviceCommandsByCommandRequest](../../models/operations/findmobiledevicecommandsbycommandrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindMobileDeviceCommandsByCommandResponse](../../models/operations/findmobiledevicecommandsbycommandresponse.md)>**


## findMobileDeviceCommandsByName

Finds all mobile device commands by command name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceCommandsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.findMobileDeviceCommandsByName({
  name: "Jeanne Bahringer",
}).then((res: FindMobileDeviceCommandsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindMobileDeviceCommandsByNameRequest](../../models/operations/findmobiledevicecommandsbynamerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindMobileDeviceCommandsByNameResponse](../../models/operations/findmobiledevicecommandsbynameresponse.md)>**


## findMobileDeviceCommandsByUuid

Finds a mobile device command by UUID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindMobileDeviceCommandsByUuidResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.mobiledevicecommands.findMobileDeviceCommandsByUuid({
  uuid: "9a1adeaa-b585-41d6-8645-b08b61891baa",
}).then((res: FindMobileDeviceCommandsByUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.FindMobileDeviceCommandsByUuidRequest](../../models/operations/findmobiledevicecommandsbyuuidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.FindMobileDeviceCommandsByUuidResponse](../../models/operations/findmobiledevicecommandsbyuuidresponse.md)>**

