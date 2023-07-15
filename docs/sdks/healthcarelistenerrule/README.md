# healthcarelistenerrule

### Available Operations

* [createHealthCareListenerRuleById](#createhealthcarelistenerrulebyid) - Creates a new Healthcare Listener rule
* [findHealthcareListenerRule](#findhealthcarelistenerrule) - Find all Healthcare Listener rules
* [findHealthcareListenerRulesById](#findhealthcarelistenerrulesbyid) - Finds Healthcare Listener rules by ID
* [updateHealthCareListenerRuleById](#updatehealthcarelistenerrulebyid) - Updates an existing Healthcare Listener rule by ID

## createHealthCareListenerRuleById

Creates a new Healthcare Listener rule

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateHealthCareListenerRuleByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.healthcarelistenerrule.createHealthCareListenerRuleById({
  id: 699575,
}).then((res: CreateHealthCareListenerRuleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.CreateHealthCareListenerRuleByIdRequest](../../models/operations/createhealthcarelistenerrulebyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.CreateHealthCareListenerRuleByIdResponse](../../models/operations/createhealthcarelistenerrulebyidresponse.md)>**


## findHealthcareListenerRule

Find all Healthcare Listener rules

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindHealthcareListenerRuleResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.healthcarelistenerrule.findHealthcareListenerRule().then((res: FindHealthcareListenerRuleResponse) => {
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

**Promise<[operations.FindHealthcareListenerRuleResponse](../../models/operations/findhealthcarelistenerruleresponse.md)>**


## findHealthcareListenerRulesById

Finds Healthcare Listener rules by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindHealthcareListenerRulesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.healthcarelistenerrule.findHealthcareListenerRulesById({
  id: "2f2fb7b1-94a2-476b-a691-6fe1f08f4294",
}).then((res: FindHealthcareListenerRulesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.FindHealthcareListenerRulesByIdRequest](../../models/operations/findhealthcarelistenerrulesbyidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.FindHealthcareListenerRulesByIdResponse](../../models/operations/findhealthcarelistenerrulesbyidresponse.md)>**


## updateHealthCareListenerRuleById

Updates an existing Healthcare Listener rule by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateHealthCareListenerRuleByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.healthcarelistenerrule.updateHealthCareListenerRuleById({
  id: "e3698f44-7f60-43e8-b445-e80ca55efd20",
}).then((res: UpdateHealthCareListenerRuleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.UpdateHealthCareListenerRuleByIdRequest](../../models/operations/updatehealthcarelistenerrulebyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.UpdateHealthCareListenerRuleByIdResponse](../../models/operations/updatehealthcarelistenerrulebyidresponse.md)>**

