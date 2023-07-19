# UpdateSMTPServerRequestBody


## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `authorizationRequired`                   | *boolean*                                 | :heavy_minus_sign:                        | N/A                                       |                                           |
| `enabled`                                 | *boolean*                                 | :heavy_minus_sign:                        | N/A                                       |                                           |
| `host`                                    | *string*                                  | :heavy_minus_sign:                        | Hostname or IP address of the SMTP server | smtp.gmail.com                            |
| `password`                                | *string*                                  | :heavy_minus_sign:                        | N/A                                       |                                           |
| `port`                                    | *number*                                  | :heavy_minus_sign:                        | N/A                                       | 587                                       |
| `sendFromEmail`                           | *string*                                  | :heavy_minus_sign:                        | N/A                                       | jamf@company.com                          |
| `sendFromName`                            | *string*                                  | :heavy_minus_sign:                        | N/A                                       | Jamf Software Server                      |
| `ssl`                                     | *boolean*                                 | :heavy_minus_sign:                        | N/A                                       |                                           |
| `timeout`                                 | *number*                                  | :heavy_minus_sign:                        | Measured in seconds                       | 5                                         |
| `tls`                                     | *boolean*                                 | :heavy_minus_sign:                        | N/A                                       |                                           |
| `username`                                | *string*                                  | :heavy_minus_sign:                        | N/A                                       |                                           |