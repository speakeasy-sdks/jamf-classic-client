# Mobiledevicecommands
(*mobiledevicecommands*)

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
import { Command } from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.createMobileDeviceCommand(new TextEncoder().encode("0xA86D7E0fDE"));

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateMobileDeviceCommandResponse](../../sdk/models/operations/createmobiledevicecommandresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
import { CreateMobileDeviceCommandURLPathParamCommand } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.createMobileDeviceCommandURL({
    command: CreateMobileDeviceCommandURLPathParamCommand.DeviceLocation,
    idList: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreateMobileDeviceCommandURLRequest](../../sdk/models/operations/createmobiledevicecommandurlrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateMobileDeviceCommandURLResponse](../../sdk/models/operations/createmobiledevicecommandurlresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createMobileDeviceLockCommandURL

Sends a new lock command to a list of mobile devices

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.createMobileDeviceLockCommandURL({
    idList: "string",
    lockMessage: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.CreateMobileDeviceLockCommandURLRequest](../../sdk/models/operations/createmobiledevicelockcommandurlrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.CreateMobileDeviceLockCommandURLResponse](../../sdk/models/operations/createmobiledevicelockcommandurlresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createMobileDeviceNameCommandURL

Creates a new command to set the name of a mobile device.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.createMobileDeviceNameCommandURL({
    deviceName: "string",
    idList: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.CreateMobileDeviceNameCommandURLRequest](../../sdk/models/operations/createmobiledevicenamecommandurlrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.CreateMobileDeviceNameCommandURLResponse](../../sdk/models/operations/createmobiledevicenamecommandurlresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createMobileScheduleOSUpdateCommandURL

Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Device will be updated to the latest OS version based on device eligibility. (deprecated on 2022-10-17)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { InstallAction } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.createMobileScheduleOSUpdateCommandURL({
    idList: "string",
    installAction: InstallAction.One,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.CreateMobileScheduleOSUpdateCommandURLRequest](../../sdk/models/operations/createmobilescheduleosupdatecommandurlrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.CreateMobileScheduleOSUpdateCommandURLResponse](../../sdk/models/operations/createmobilescheduleosupdatecommandurlresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createMobileScheduleOSUpdateCommandWithProductVersionURL

Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Mixing iOS and tvOS devices in ID list is not advised, as product version is specific to OS type. (deprecated on 2022-10-17)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PathParamInstallAction } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.createMobileScheduleOSUpdateCommandWithProductVersionURL({
    idList: "string",
    installAction: PathParamInstallAction.One,
    productVersion: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.CreateMobileScheduleOSUpdateCommandWithProductVersionURLRequest](../../sdk/models/operations/createmobilescheduleosupdatecommandwithproductversionurlrequest.md) | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.CreateMobileScheduleOSUpdateCommandWithProductVersionURLResponse](../../sdk/models/operations/createmobilescheduleosupdatecommandwithproductversionurlresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceCommands

Finds all mobile device commands

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.findMobileDeviceCommands();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindMobileDeviceCommandsResponse](../../sdk/models/operations/findmobiledevicecommandsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceCommandsByCommand

Finds all mobile device commands for specified command

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.findMobileDeviceCommandsByCommand({
    command: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.FindMobileDeviceCommandsByCommandRequest](../../sdk/models/operations/findmobiledevicecommandsbycommandrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.FindMobileDeviceCommandsByCommandResponse](../../sdk/models/operations/findmobiledevicecommandsbycommandresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceCommandsByName

Finds all mobile device commands by command name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.findMobileDeviceCommandsByName({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindMobileDeviceCommandsByNameRequest](../../sdk/models/operations/findmobiledevicecommandsbynamerequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindMobileDeviceCommandsByNameResponse](../../sdk/models/operations/findmobiledevicecommandsbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findMobileDeviceCommandsByUuid

Finds a mobile device command by UUID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.mobiledevicecommands.findMobileDeviceCommandsByUuid({
    uuid: "71a67216-a890-416c-90d7-93de2db01d31",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.FindMobileDeviceCommandsByUuidRequest](../../sdk/models/operations/findmobiledevicecommandsbyuuidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.FindMobileDeviceCommandsByUuidResponse](../../sdk/models/operations/findmobiledevicecommandsbyuuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
