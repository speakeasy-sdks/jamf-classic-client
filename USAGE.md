<!-- Start SDK Example Usage -->


```typescript
import { Jamf } from "jamf";
import { CreateAccountByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.createAccountById({
  id: 548814,
}).then((res: CreateAccountByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->