<!-- Start SDK Example Usage -->


```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { CreateAccountByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.createAccountById({
  id: 437973,
}).then((res: CreateAccountByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->