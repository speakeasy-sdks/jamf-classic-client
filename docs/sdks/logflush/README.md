# logflush

### Available Operations

* [createLogFlushForInterval](#createlogflushforinterval) - Flushes all logs for a given interval
* [createLogFlushWithIdAndInterval](#createlogflushwithidandinterval) - Flushes a single log for a given interval
* [logFlush](#logflush) - Flushes a log specified in an XML file

## createLogFlushForInterval

Flushes all logs for a given interval

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateLogFlushForIntervalLog, CreateLogFlushForIntervalResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.logflush.createLogFlushForInterval({
  interval: "alias",
  log: CreateLogFlushForIntervalLog.Policy,
}).then((res: CreateLogFlushForIntervalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateLogFlushForIntervalRequest](../../models/operations/createlogflushforintervalrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateLogFlushForIntervalResponse](../../models/operations/createlogflushforintervalresponse.md)>**


## createLogFlushWithIdAndInterval

Flushes a single log for a given interval

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateLogFlushWithIdAndIntervalLog, CreateLogFlushWithIdAndIntervalResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.logflush.createLogFlushWithIdAndInterval({
  id: "ff2a54a3-1e94-4764-a3e8-65e7956f9251",
  interval: "animi",
  log: CreateLogFlushWithIdAndIntervalLog.Policy,
}).then((res: CreateLogFlushWithIdAndIntervalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.CreateLogFlushWithIdAndIntervalRequest](../../models/operations/createlogflushwithidandintervalrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.CreateLogFlushWithIdAndIntervalResponse](../../models/operations/createlogflushwithidandintervalresponse.md)>**


## logFlush

Flushes a log specified in an XML file

### Example Usage

```typescript
import { Jamf } from "jamf";
import { LogFlushResponse } from "jamf/dist/sdk/models/operations";
import { LogflushInterval, LogflushLog } from "jamf/dist/sdk/models/shared";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.logflush.logFlush("nostrum".encode()).then((res: LogFlushResponse) => {
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

**Promise<[operations.LogFlushResponse](../../models/operations/logflushresponse.md)>**
