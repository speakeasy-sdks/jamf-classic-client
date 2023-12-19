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
import { Command } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computercommands.createComputerCommandByCommand({
    command: Command.DeleteUser,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.CreateComputerCommandByCommandRequest](../../sdk/models/operations/createcomputercommandbycommandrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.CreateComputerCommandByCommandResponse](../../sdk/models/operations/createcomputercommandbycommandresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createComputerCommandByCommandAndAction

Creates a new computer command with a command specific action. Commands supported: ScheduleOSUpdate (deprecated on 2022-10-17)

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { Action, PathParamCommand } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computercommands.createComputerCommandByCommandAndAction({
    action: Action.Install,
    command: PathParamCommand.ScheduleOSUpdate,
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.CreateComputerCommandByCommandAndActionRequest](../../sdk/models/operations/createcomputercommandbycommandandactionrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.CreateComputerCommandByCommandAndActionResponse](../../sdk/models/operations/createcomputercommandbycommandandactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createComputerCommandByCommandAndId

Creates a new computer command using command name and device IDs

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateComputerCommandByCommandAndIdPathParamCommand } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computercommands.createComputerCommandByCommandAndId({
    command: CreateComputerCommandByCommandAndIdPathParamCommand.ScheduleOSUpdate,
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.CreateComputerCommandByCommandAndIdRequest](../../sdk/models/operations/createcomputercommandbycommandandidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.CreateComputerCommandByCommandAndIdResponse](../../sdk/models/operations/createcomputercommandbycommandandidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createComputerCommandByCommandIdAndPasscode

Issuing a DeviceLock and EraseDevice command requires a 6 character passcode.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateComputerCommandByCommandIdAndPasscodePathParamCommand } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computercommands.createComputerCommandByCommandIdAndPasscode({
    command: CreateComputerCommandByCommandIdAndPasscodePathParamCommand.DeviceLock,
    id: "<ID>",
    passcode: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.CreateComputerCommandByCommandIdAndPasscodeRequest](../../sdk/models/operations/createcomputercommandbycommandidandpasscoderequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateComputerCommandByCommandIdAndPasscodeResponse](../../sdk/models/operations/createcomputercommandbycommandidandpasscoderesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerCommands

Finds all computer commands

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

  const res = await sdk.computercommands.findComputerCommands();

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

**Promise<[operations.FindComputerCommandsResponse](../../sdk/models/operations/findcomputercommandsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerCommandsByName

Finds all computer commands by name

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

  const res = await sdk.computercommands.findComputerCommandsByName({
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
| `request`                                                                                                        | [operations.FindComputerCommandsByNameRequest](../../sdk/models/operations/findcomputercommandsbynamerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindComputerCommandsByNameResponse](../../sdk/models/operations/findcomputercommandsbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findComputerCommandsByUuid

Finds a computer command by UUID

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

  const res = await sdk.computercommands.findComputerCommandsByUuid({
    uuid: "d70e80ba-6e24-40b9-95fb-5378b5fc34fb",
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
| `request`                                                                                                        | [operations.FindComputerCommandsByUuidRequest](../../sdk/models/operations/findcomputercommandsbyuuidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.FindComputerCommandsByUuidResponse](../../sdk/models/operations/findcomputercommandsbyuuidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
