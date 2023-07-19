# gsxconnection

### Available Operations

* [findGSXConnection](#findgsxconnection) - Finds the Jamf Pro GSX connection information
* [updateGSXConnection](#updategsxconnection) - Updates the Jamf Pro GSX connection information

## findGSXConnection

Finds the Jamf Pro GSX connection information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindGSXConnectionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.gsxconnection.findGSXConnection().then((res: FindGSXConnectionResponse) => {
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

**Promise<[operations.FindGSXConnectionResponse](../../models/operations/findgsxconnectionresponse.md)>**


## updateGSXConnection

Updates the Jamf Pro GSX connection information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateGSXConnectionRequestBodyRegion, UpdateGSXConnectionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.gsxconnection.updateGSXConnection("exercitationem".encode()).then((res: UpdateGSXConnectionResponse) => {
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

**Promise<[operations.UpdateGSXConnectionResponse](../../models/operations/updategsxconnectionresponse.md)>**

