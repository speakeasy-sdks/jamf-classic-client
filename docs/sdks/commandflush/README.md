# Commandflush

### Available Operations

* [commandFlush](#commandflush) - Flushes commands based on information specified in an XML file
* [createCommandFlushWithIdAndStatus](#createcommandflushwithidandstatus) - Flushes commands for devices

## commandFlush

Flushes commands based on information specified in an XML file

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CommandFlushResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import { CommandflushStatus } from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.commandflush.commandFlush("voluptates".encode()).then((res: CommandFlushResponse) => {
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

**Promise<[operations.CommandFlushResponse](../../models/operations/commandflushresponse.md)>**


## createCommandFlushWithIdAndStatus

Flushes commands for devices

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  CreateCommandFlushWithIdAndStatusIdtype,
  CreateCommandFlushWithIdAndStatusResponse,
  CreateCommandFlushWithIdAndStatusStatus,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.commandflush.createCommandFlushWithIdAndStatus({
  id: 93940,
  idtype: CreateCommandFlushWithIdAndStatusIdtype.Mobiledevicegroups,
  status: CreateCommandFlushWithIdAndStatusStatus.Failed,
}).then((res: CreateCommandFlushWithIdAndStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.CreateCommandFlushWithIdAndStatusRequest](../../models/operations/createcommandflushwithidandstatusrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.CreateCommandFlushWithIdAndStatusResponse](../../models/operations/createcommandflushwithidandstatusresponse.md)>**

