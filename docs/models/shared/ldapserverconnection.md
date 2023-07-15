# LdapServerConnection


## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `account`                                                                                               | [LdapServerConnectionAccount](../../models/shared/ldapserverconnectionaccount.md)                       | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `authenticationType`                                                                                    | [LdapServerConnectionAuthenticationType](../../models/shared/ldapserverconnectionauthenticationtype.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `hostname`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Hostname or IP address of the server                                                                    | company.ad.com                                                                                          |
| `id`                                                                                                    | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 1                                                                                                       |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Name of the LDAP server                                                                                 | Company Active Directory                                                                                |
| `openCloseTimeout`                                                                                      | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Timeout in seconds                                                                                      | 15                                                                                                      |
| `port`                                                                                                  | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 389                                                                                                     |
| `referralResponse`                                                                                      | [LdapServerConnectionReferralResponse](../../models/shared/ldapserverconnectionreferralresponse.md)     | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `searchTimeout`                                                                                         | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Timeout in seconds                                                                                      | 60                                                                                                      |
| `serverType`                                                                                            | [LdapServerConnectionServerType](../../models/shared/ldapserverconnectionservertype.md)                 | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `useSsl`                                                                                                | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `useWildcards`                                                                                          | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |