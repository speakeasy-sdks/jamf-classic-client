<!-- Start SDK Example Usage [usage] -->
```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
    const sdk = new Jamf({
        security: {
            password: "<YOUR_PASSWORD_HERE>",
            username: "<YOUR_USERNAME_HERE>",
        },
    });

    const res = await sdk.accounts.createAccountById({
        id: 437973,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->