# Commandflush
(*.commandflush*)

### Available Operations

* [commandFlush](#commandflush) - Flushes commands based on information specified in an XML file
* [createCommandFlushWithIdAndStatus](#createcommandflushwithidandstatus) - Flushes commands for devices

## commandFlush

Flushes commands based on information specified in an XML file

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { Status } from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.commandflush.commandFlush(new TextEncoder().encode("0x3FC75fbae2"));


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Idtype, Status } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.commandflush.createCommandFlushWithIdAndStatus({
    id: 873570,
    idtype: Idtype.Computergroups,
    status: Status.Failed,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.CreateCommandFlushWithIdAndStatusRequest](../../models/operations/createcommandflushwithidandstatusrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.CreateCommandFlushWithIdAndStatusResponse](../../models/operations/createcommandflushwithidandstatusresponse.md)>**

