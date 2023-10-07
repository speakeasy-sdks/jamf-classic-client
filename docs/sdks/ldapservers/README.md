# Ldapservers
(*ldapservers*)

### Available Operations

* [createLDAPServerById](#createldapserverbyid) - Creates a new LDAP server by ID
* [deleteLDAPServerById](#deleteldapserverbyid) - Deletes an LDAP server by ID
* [deleteLDAPServerByName](#deleteldapserverbyname) - Deletes an LDAP server by name
* [findLDAPServerGroupById](#findldapservergroupbyid) - Display information for matching groups for an LDAP server
* [findLDAPServerGroupByName](#findldapservergroupbyname) - Display information for matching groups for an LDAP server
* [findLDAPServerGroupUserById](#findldapservergroupuserbyid) - Display information about user membership in a group for an LDAP server
* [findLDAPServerGroupUserByName](#findldapservergroupuserbyname) - Display information about user membership in a group for an LDAP server
* [findLDAPServerUserById](#findldapserveruserbyid) - Display information for matching users for an LDAP server
* [findLDAPServerUserByName](#findldapserveruserbyname) - Display information for matching users for an LDAP server
* [findLDAPServers](#findldapservers) - Finds all LDAP servers
* [findLDAPServersById](#findldapserversbyid) - Finds LDAP servers by ID
* [findLDAPServersByName](#findldapserversbyname) - Finds LDAP servers by name
* [updateLDAPServerById](#updateldapserverbyid) - Updates an existing LDAP server by ID
* [updateLDAPServerByName](#updateldapserverbyname) - Updates an existing LDAP server by name

## createLDAPServerById

Creates a new LDAP server by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.createLDAPServerById({
    id: 334152,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateLDAPServerByIdRequest](../../models/operations/createldapserverbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateLDAPServerByIdResponse](../../models/operations/createldapserverbyidresponse.md)>**


## deleteLDAPServerById

Deletes an LDAP server by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.deleteLDAPServerById({
    id: 550161,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteLDAPServerByIdRequest](../../models/operations/deleteldapserverbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteLDAPServerByIdResponse](../../models/operations/deleteldapserverbyidresponse.md)>**


## deleteLDAPServerByName

Deletes an LDAP server by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.deleteLDAPServerByName({
    name: "interfaces South",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteLDAPServerByNameRequest](../../models/operations/deleteldapserverbynamerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteLDAPServerByNameResponse](../../models/operations/deleteldapserverbynameresponse.md)>**


## findLDAPServerGroupById

Displays information about matching groups for an ldap server specified with the {id} parameter.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServerGroupById({
    group: "Avon",
    id: 479019,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.FindLDAPServerGroupByIdRequest](../../models/operations/findldapservergroupbyidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.FindLDAPServerGroupByIdResponse](../../models/operations/findldapservergroupbyidresponse.md)>**


## findLDAPServerGroupByName

Displays information about matching groups for an ldap server specified with the {name} parameter.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServerGroupByName({
    group: "female worship Bicycle",
    name: "array",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.FindLDAPServerGroupByNameRequest](../../models/operations/findldapservergroupbynamerequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.FindLDAPServerGroupByNameResponse](../../models/operations/findldapservergroupbynameresponse.md)>**


## findLDAPServerGroupUserById

Displays information about user membership in a group for an ldap server specified with the {id} parameter. Multiple users separated by a comma are allowed.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServerGroupUserById({
    group: "jettison",
    id: 405465,
    user: "Maudie35",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.FindLDAPServerGroupUserByIdRequest](../../models/operations/findldapservergroupuserbyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.FindLDAPServerGroupUserByIdResponse](../../models/operations/findldapservergroupuserbyidresponse.md)>**


## findLDAPServerGroupUserByName

Displays information about user membership in a group for an ldap server specified with the {name} parameter. Multiple users separated by a comma are allowed.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServerGroupUserByName({
    group: "Bike",
    name: "infrastructure Automotive Tuna",
    user: "Maudie.Howe",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.FindLDAPServerGroupUserByNameRequest](../../models/operations/findldapservergroupuserbynamerequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.FindLDAPServerGroupUserByNameResponse](../../models/operations/findldapservergroupuserbynameresponse.md)>**


## findLDAPServerUserById

Displays information about matching users for an ldap server specified with the {id} parameter.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServerUserById({
    id: 331068,
    user: "Buster40",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.FindLDAPServerUserByIdRequest](../../models/operations/findldapserveruserbyidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.FindLDAPServerUserByIdResponse](../../models/operations/findldapserveruserbyidresponse.md)>**


## findLDAPServerUserByName

Displays information about matching users for an ldap server specified with the {name} parameter.

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServerUserByName({
    name: "Ergonomic Americium",
    user: "Colten_Kovacek",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.FindLDAPServerUserByNameRequest](../../models/operations/findldapserveruserbynamerequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.FindLDAPServerUserByNameResponse](../../models/operations/findldapserveruserbynameresponse.md)>**


## findLDAPServers

Finds all LDAP servers

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServers();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindLDAPServersResponse](../../models/operations/findldapserversresponse.md)>**


## findLDAPServersById

Finds LDAP servers by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServersById({
    id: 434300,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.FindLDAPServersByIdRequest](../../models/operations/findldapserversbyidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.FindLDAPServersByIdResponse](../../models/operations/findldapserversbyidresponse.md)>**


## findLDAPServersByName

Finds LDAP servers by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.findLDAPServersByName({
    name: "secondary placeat neatly",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.FindLDAPServersByNameRequest](../../models/operations/findldapserversbynamerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.FindLDAPServersByNameResponse](../../models/operations/findldapserversbynameresponse.md)>**


## updateLDAPServerById

Updates an existing LDAP server by ID

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.updateLDAPServerById({
    id: 774572,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateLDAPServerByIdRequest](../../models/operations/updateldapserverbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateLDAPServerByIdResponse](../../models/operations/updateldapserverbyidresponse.md)>**


## updateLDAPServerByName

Updates an existing LDAP server by name

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ldapservers.updateLDAPServerByName({
    name: "Consultant Representative",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateLDAPServerByNameRequest](../../models/operations/updateldapserverbynamerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateLDAPServerByNameResponse](../../models/operations/updateldapserverbynameresponse.md)>**

