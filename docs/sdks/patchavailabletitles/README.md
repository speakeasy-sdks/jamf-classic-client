# Patchavailabletitles
(*patchavailabletitles*)

### Available Operations

* [patchavailabletitlesSourceidByIdGet](#patchavailabletitlessourceidbyidget) - Finds all available title from a source by ID

## patchavailabletitlesSourceidByIdGet

Finds all available title from a source by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { PatchavailabletitlesSourceidByIdGetResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.patchavailabletitles.patchavailabletitlesSourceidByIdGet({
  id: "3ca5acfb-e2fd-4570-b577-929177deac64",
}).then((res: PatchavailabletitlesSourceidByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PatchavailabletitlesSourceidByIdGetRequest](../../models/operations/patchavailabletitlessourceidbyidgetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PatchavailabletitlesSourceidByIdGetResponse](../../models/operations/patchavailabletitlessourceidbyidgetresponse.md)>**

