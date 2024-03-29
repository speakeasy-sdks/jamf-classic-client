# Logflush
(*logflush*)

### Available Operations

* [createLogFlushForInterval](#createlogflushforinterval) - Flushes all logs for a given interval
* [createLogFlushWithIdAndInterval](#createlogflushwithidandinterval) - Flushes a single log for a given interval
* [logFlush](#logflush) - Flushes a log specified in an XML file

## createLogFlushForInterval

Flushes all logs for a given interval

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { Log } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.logflush.createLogFlushForInterval({
    interval: "<value>",
    log: Log.Policy,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.CreateLogFlushForIntervalRequest](../../sdk/models/operations/createlogflushforintervalrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.CreateLogFlushForIntervalResponse](../../sdk/models/operations/createlogflushforintervalresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createLogFlushWithIdAndInterval

Flushes a single log for a given interval

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PathParamLog } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.logflush.createLogFlushWithIdAndInterval({
    id: "<id>",
    interval: "<value>",
    log: PathParamLog.Policy,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.CreateLogFlushWithIdAndIntervalRequest](../../sdk/models/operations/createlogflushwithidandintervalrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.CreateLogFlushWithIdAndIntervalResponse](../../sdk/models/operations/createlogflushwithidandintervalresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## logFlush

Flushes a log specified in an XML file

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { Interval, Log } from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.logflush.logFlush(new TextEncoder().encode("0x3bDEA554dC"));

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogFlushResponse](../../sdk/models/operations/logflushresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
