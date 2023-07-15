# healthcarelistener

### Available Operations

* [findHealthcareListener](#findhealthcarelistener) - Find all Healthcare Listeners
* [findHealthcareListenersById](#findhealthcarelistenersbyid) - Finds healthcare listener by ID
* [updateHealthCareListenerById](#updatehealthcarelistenerbyid) - Updates an existing healthcare listener by ID

## findHealthcareListener

Find all Healthcare Listeners

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindHealthcareListenerResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.healthcarelistener.findHealthcareListener().then((res: FindHealthcareListenerResponse) => {
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

**Promise<[operations.FindHealthcareListenerResponse](../../models/operations/findhealthcarelistenerresponse.md)>**


## findHealthcareListenersById

Finds healthcare listener by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindHealthcareListenersByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.healthcarelistener.findHealthcareListenersById({
  id: 750765,
}).then((res: FindHealthcareListenersByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindHealthcareListenersByIdRequest](../../models/operations/findhealthcarelistenersbyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindHealthcareListenersByIdResponse](../../models/operations/findhealthcarelistenersbyidresponse.md)>**


## updateHealthCareListenerById

Updates an existing healthcare listener by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateHealthCareListenerByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.healthcarelistener.updateHealthCareListenerById({
  id: 24619,
}).then((res: UpdateHealthCareListenerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateHealthCareListenerByIdRequest](../../models/operations/updatehealthcarelistenerbyidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateHealthCareListenerByIdResponse](../../models/operations/updatehealthcarelistenerbyidresponse.md)>**

