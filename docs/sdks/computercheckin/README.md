# computercheckin

### Available Operations

* [findComputerCheckin](#findcomputercheckin) - Finds the Jamf Pro computer checkin information
* [updateComputerCheckin](#updatecomputercheckin) - Updates the Jamf Pro computer checkin information

## findComputerCheckin

Finds the Jamf Pro computer checkin information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerCheckinResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercheckin.findComputerCheckin().then((res: FindComputerCheckinResponse) => {
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

**Promise<[operations.FindComputerCheckinResponse](../../models/operations/findcomputercheckinresponse.md)>**


## updateComputerCheckin

Updates the Jamf Pro computer checkin information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UpdateComputerCheckinResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computercheckin.updateComputerCheckin("accusamus".encode()).then((res: UpdateComputerCheckinResponse) => {
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

**Promise<[operations.UpdateComputerCheckinResponse](../../models/operations/updatecomputercheckinresponse.md)>**

