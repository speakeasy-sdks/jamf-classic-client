# activationcode

### Available Operations

* [findactivationcode](#findactivationcode) - Finds the Jamf Pro activation code
* [updateActivationCode](#updateactivationcode) - Updates the Jamf Pro activation code

## findactivationcode

Finds the Jamf Pro activation code

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindactivationcodeResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.activationcode.findactivationcode().then((res: FindactivationcodeResponse) => {
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

**Promise<[operations.FindactivationcodeResponse](../../models/operations/findactivationcoderesponse.md)>**


## updateActivationCode

Updates the Jamf Pro activation code

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateActivationCodeResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.activationcode.updateActivationCode("repellendus".encode()).then((res: UpdateActivationCodeResponse) => {
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

**Promise<[operations.UpdateActivationCodeResponse](../../models/operations/updateactivationcoderesponse.md)>**

