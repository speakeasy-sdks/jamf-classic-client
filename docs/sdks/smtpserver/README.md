# Smtpserver
(*smtpserver*)

### Available Operations

* [findSMTPServer](#findsmtpserver) - Finds the Jamf Pro SMTP server information
* [updateSMTPServer](#updatesmtpserver) - Updates the Jamf Pro SMTP server information

## findSMTPServer

Finds the Jamf Pro SMTP server information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindSMTPServerResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.smtpserver.findSMTPServer().then((res: FindSMTPServerResponse) => {
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

**Promise<[operations.FindSMTPServerResponse](../../models/operations/findsmtpserverresponse.md)>**


## updateSMTPServer

Password can be changed via the <password> element. Password should be clear text and sent over SSL.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateSMTPServerResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.smtpserver.updateSMTPServer("facilis".encode()).then((res: UpdateSMTPServerResponse) => {
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

**Promise<[operations.UpdateSMTPServerResponse](../../models/operations/updatesmtpserverresponse.md)>**

