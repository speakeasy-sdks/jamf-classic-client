# Healthcarelistenerrule
(*healthcarelistenerrule*)

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

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.healthcarelistenerrule.createHealthCareListenerRuleById({
    id: 256297,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.CreateHealthCareListenerRuleByIdRequest](../../sdk/models/operations/createhealthcarelistenerrulebyidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.CreateHealthCareListenerRuleByIdResponse](../../sdk/models/operations/createhealthcarelistenerrulebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findHealthcareListenerRule

Find all Healthcare Listener rules

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.healthcarelistenerrule.findHealthcareListenerRule();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindHealthcareListenerRuleResponse](../../sdk/models/operations/findhealthcarelistenerruleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## findHealthcareListenerRulesById

Finds Healthcare Listener rules by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.healthcarelistenerrule.findHealthcareListenerRulesById({
    id: "<id>",
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
| `request`                                                                                                                  | [operations.FindHealthcareListenerRulesByIdRequest](../../sdk/models/operations/findhealthcarelistenerrulesbyidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.FindHealthcareListenerRulesByIdResponse](../../sdk/models/operations/findhealthcarelistenerrulesbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateHealthCareListenerRuleById

Updates an existing Healthcare Listener rule by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.healthcarelistenerrule.updateHealthCareListenerRuleById({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.UpdateHealthCareListenerRuleByIdRequest](../../sdk/models/operations/updatehealthcarelistenerrulebyidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.UpdateHealthCareListenerRuleByIdResponse](../../sdk/models/operations/updatehealthcarelistenerrulebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
