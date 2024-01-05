# DistributionPoint


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `connectionType`                                                             | [shared.ConnectionType](../../../sdk/models/shared/connectiontype.md)        | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `context`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Path to the share                                                            | CasperShare                                                                  |
| `enableLoadBalancing`                                                        | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `failoverPoint`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `failoverPointUrl`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `httpDownloadsEnabled`                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          | true                                                                         |
| `httpPassword`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Password for basic authentication                                            |                                                                              |
| `httpUrl`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | URL to download packages from                                                | http://ny.company.com/CasperShare                                            |
| `httpUsername`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Username to authenticate with for basic authentication                       | casperinstall                                                                |
| `id`                                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 1                                                                            |
| `ipAddress`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | IP address or hostname of distribution point                                 | ny.company.com                                                               |
| `isMaster`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | Only one share can be set as master                                          |                                                                              |
| `localPath`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | Name of the distribution point                                               | New York Share                                                               |
| `noAuthenticationRequired`                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `password`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | password                                                                     |
| `port`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 80                                                                           |
| `protocol`                                                                   | [shared.Protocol](../../../sdk/models/shared/protocol.md)                    | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `readOnlyPassword`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | Password for the read only account                                           | password                                                                     |
| `readOnlyUsername`                                                           | *string*                                                                     | :heavy_check_mark:                                                           | Account with read only privileges to the share                               | casperinstall                                                                |
| `readWritePassword`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | Password for the read/write account                                          | password                                                                     |
| `readWriteUsername`                                                          | *string*                                                                     | :heavy_check_mark:                                                           | Account with read/write privileges to the share                              | casperwrite                                                                  |
| `shareName`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Name of the share                                                            | Caspershare                                                                  |
| `sharePort`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 139                                                                          |
| `sshUsername`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | username                                                                     |
| `usernamePasswordRequired`                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `workgroupOrDomain`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | Workgroup or domain of the accounts that have access to the share (SMB only) | COMPANY                                                                      |