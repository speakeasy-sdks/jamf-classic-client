# Jssuser
(*jssuser*)

### Available Operations

* [~~jssuserGet~~](#jssuserget) - Returns basic information about Jamf Pro, as well as privileges of the person requesting the resource. (Deprecated) :warning: **Deprecated**

## ~~jssuserGet~~

Returns basic information about Jamf Pro, as well as privileges of the person requesting the resource. (Deprecated)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

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

  const res = await sdk.jssuser.jssuserGet();

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

**Promise<[operations.JssuserGetResponse](../../models/operations/jssusergetresponse.md)>**

