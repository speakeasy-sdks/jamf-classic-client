# FindPoliciesByIdResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `body`                                                  | *Uint8Array*                                            | :heavy_minus_sign:                                      | N/A                                                     |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_check_mark:                                      | Raw HTTP response; suitable for custom response parsing |
| `policy`                                                | [shared.Policy](../../../sdk/models/shared/policy.md)   | :heavy_minus_sign:                                      | OK                                                      |