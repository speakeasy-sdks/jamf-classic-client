# Gsxconnection
(*gsxconnection*)

### Available Operations

* [findGSXConnection](#findgsxconnection) - Finds the Jamf Pro GSX connection information
* [updateGSXConnection](#updategsxconnection) - Updates the Jamf Pro GSX connection information

## findGSXConnection

Finds the Jamf Pro GSX connection information

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

  const res = await sdk.gsxconnection.findGSXConnection();

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

**Promise<[operations.FindGSXConnectionResponse](../../sdk/models/operations/findgsxconnectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateGSXConnection

Updates the Jamf Pro GSX connection information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { Region } from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.gsxconnection.updateGSXConnection(new TextEncoder().encode("0xf6280edaC8"));

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

**Promise<[operations.UpdateGSXConnectionResponse](../../sdk/models/operations/updategsxconnectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
