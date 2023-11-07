# Healthcarelistenerrule
(*.healthcarelistenerrule*)

### Available Operations

* [createHealthCareListenerRuleById](#createhealthcarelistenerrulebyid) - Creates a new Healthcare Listener rule
* [findHealthcareListenerRule](#findhealthcarelistenerrule) - Find all Healthcare Listener rules
* [findHealthcareListenerRulesById](#findhealthcarelistenerrulesbyid) - Finds Healthcare Listener rules by ID
* [updateHealthCareListenerRuleById](#updatehealthcarelistenerrulebyid) - Updates an existing Healthcare Listener rule by ID

## createHealthCareListenerRuleById

Creates a new Healthcare Listener rule

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

  const res = await sdk.healthcarelistenerrule.createHealthCareListenerRuleById({
    id: 256297,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.healthcarelistenerrule.findHealthcareListenerRule();


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

**Promise<[operations.FindHealthcareListenerRuleResponse](../../models/operations/findhealthcarelistenerruleresponse.md)>**


## findHealthcareListenerRulesById

Finds Healthcare Listener rules by ID

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

  const res = await sdk.healthcarelistenerrule.findHealthcareListenerRulesById({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.healthcarelistenerrule.updateHealthCareListenerRuleById({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.UpdateHealthCareListenerRuleByIdRequest](../../models/operations/updatehealthcarelistenerrulebyidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.UpdateHealthCareListenerRuleByIdResponse](../../models/operations/updatehealthcarelistenerrulebyidresponse.md)>**

