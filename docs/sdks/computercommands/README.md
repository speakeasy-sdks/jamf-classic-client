# Computercommands
(*computercommands*)

### Available Operations

* [createComputerCommandByCommand](#createcomputercommandbycommand) - Creates a new computer command using command name
* [createComputerCommandByCommandAndAction](#createcomputercommandbycommandandaction) - Creates a new computer command with a command specific action. Commands supported: ScheduleOSUpdate (deprecated on 2022-10-17)
* [createComputerCommandByCommandAndId](#createcomputercommandbycommandandid) - Creates a new computer command using command name and device IDs
* [createComputerCommandByCommandIdAndPasscode](#createcomputercommandbycommandidandpasscode) - Creates a new computer command using command name and device IDs
* [findComputerCommands](#findcomputercommands) - Finds all computer commands
* [findComputerCommandsByName](#findcomputercommandsbyname) - Finds all computer commands by name
* [findComputerCommandsByUuid](#findcomputercommandsbyuuid) - Finds a computer command by UUID

## createComputerCommandByCommand

The chart below includes additional requirements for usage of specific commands

| command | Parameter | Requirements |
| ------- | --------- | ------------ |
| DeleteUser | user_name | DEP enrolled device and user_name value (string) |
| DeviceLock | passcode | 6 character string |
| DeviceLock | lock_message | string |
| DisableRemoteDesktop | N/A | macOS 10.14.4 or later |
| EnableRemoteDesktop | N/A | macOS 10.14.4 or later |
| EraseDevice | passcode | 6 character string |
| ScheduleOSUpdate (deprecated on 2022-10-17) | action | macOS 10.12.0 or later |
| SettingsDisableBluetooth | N/A | macOS 10.13.4 or later |
| SettingsEnableBluetooth | N/A | macOS 10.13.4 or later |
| UnlockUserAccount | user_name |  DEP enrolled device and user_name value (string) |


### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateComputerCommandByCommandCommand, CreateComputerCommandByCommandResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercommands.createComputerCommandByCommand({
  command: CreateComputerCommandByCommandCommand.DeleteUser,
}).then((res: CreateComputerCommandByCommandResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreateComputerCommandByCommandRequest](../../models/operations/createcomputercommandbycommandrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateComputerCommandByCommandResponse](../../models/operations/createcomputercommandbycommandresponse.md)>**


## createComputerCommandByCommandAndAction

Creates a new computer command with a command specific action. Commands supported: ScheduleOSUpdate (deprecated on 2022-10-17)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  CreateComputerCommandByCommandAndActionAction,
  CreateComputerCommandByCommandAndActionCommand,
  CreateComputerCommandByCommandAndActionResponse,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercommands.createComputerCommandByCommandAndAction({
  action: CreateComputerCommandByCommandAndActionAction.Install,
  command: CreateComputerCommandByCommandAndActionCommand.ScheduleOSUpdate,
  id: "<ID>",
}).then((res: CreateComputerCommandByCommandAndActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.CreateComputerCommandByCommandAndActionRequest](../../models/operations/createcomputercommandbycommandandactionrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.CreateComputerCommandByCommandAndActionResponse](../../models/operations/createcomputercommandbycommandandactionresponse.md)>**


## createComputerCommandByCommandAndId

Creates a new computer command using command name and device IDs

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  CreateComputerCommandByCommandAndIdCommand,
  CreateComputerCommandByCommandAndIdResponse,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercommands.createComputerCommandByCommandAndId({
  command: CreateComputerCommandByCommandAndIdCommand.ScheduleOSUpdate,
  id: "<ID>",
}).then((res: CreateComputerCommandByCommandAndIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.CreateComputerCommandByCommandAndIdRequest](../../models/operations/createcomputercommandbycommandandidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.CreateComputerCommandByCommandAndIdResponse](../../models/operations/createcomputercommandbycommandandidresponse.md)>**


## createComputerCommandByCommandIdAndPasscode

Issuing a DeviceLock and EraseDevice command requires a 6 character passcode.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  CreateComputerCommandByCommandIdAndPasscodeCommand,
  CreateComputerCommandByCommandIdAndPasscodeResponse,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercommands.createComputerCommandByCommandIdAndPasscode({
  command: CreateComputerCommandByCommandIdAndPasscodeCommand.DeviceLock,
  id: "<ID>",
  passcode: "24 Rubidium virtual",
}).then((res: CreateComputerCommandByCommandIdAndPasscodeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.CreateComputerCommandByCommandIdAndPasscodeRequest](../../models/operations/createcomputercommandbycommandidandpasscoderequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.CreateComputerCommandByCommandIdAndPasscodeResponse](../../models/operations/createcomputercommandbycommandidandpasscoderesponse.md)>**


## findComputerCommands

Finds all computer commands

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerCommandsResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercommands.findComputerCommands().then((res: FindComputerCommandsResponse) => {
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

**Promise<[operations.FindComputerCommandsResponse](../../models/operations/findcomputercommandsresponse.md)>**


## findComputerCommandsByName

Finds all computer commands by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerCommandsByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercommands.findComputerCommandsByName({
  name: "Bridge sleet application",
}).then((res: FindComputerCommandsByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.FindComputerCommandsByNameRequest](../../models/operations/findcomputercommandsbynamerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.FindComputerCommandsByNameResponse](../../models/operations/findcomputercommandsbynameresponse.md)>**


## findComputerCommandsByUuid

Finds a computer command by UUID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerCommandsByUuidResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercommands.findComputerCommandsByUuid({
  uuid: "d70e80ba-6e24-40b9-95fb-5378b5fc34fb",
}).then((res: FindComputerCommandsByUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.FindComputerCommandsByUuidRequest](../../models/operations/findcomputercommandsbyuuidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.FindComputerCommandsByUuidResponse](../../models/operations/findcomputercommandsbyuuidresponse.md)>**

