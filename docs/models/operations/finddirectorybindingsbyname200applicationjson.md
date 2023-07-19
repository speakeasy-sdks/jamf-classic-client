# FindDirectoryBindingsByName200ApplicationJSON

OK


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `computerOu`                                   | *string*                                       | :heavy_minus_sign:                             | OU to bind computers to                        | CN=Computers,DC=ad,DC=company,DC=com           |
| `domain`                                       | *string*                                       | :heavy_minus_sign:                             | N/A                                            | ad.company.com                                 |
| `id`                                           | *number*                                       | :heavy_minus_sign:                             | N/A                                            | 1                                              |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Name of the binding                            | AD Binding                                     |
| `password`                                     | *string*                                       | :heavy_minus_sign:                             | Password for the network administrator account |                                                |
| `priority`                                     | *number*                                       | :heavy_minus_sign:                             | N/A                                            | 1                                              |
| `type`                                         | *string*                                       | :heavy_minus_sign:                             | N/A                                            | Active Directory                               |
| `username`                                     | *string*                                       | :heavy_minus_sign:                             | Network administrator account to bind with     | AD\Administrator                               |