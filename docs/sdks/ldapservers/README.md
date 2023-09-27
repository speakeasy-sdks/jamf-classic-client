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
import { CreateLDAPServerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.createLDAPServerById({
  id: 542129,
}).then((res: CreateLDAPServerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteLDAPServerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.deleteLDAPServerById({
  id: 541381,
}).then((res: DeleteLDAPServerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteLDAPServerByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.deleteLDAPServerByName({
  name: "Delia Parisian",
}).then((res: DeleteLDAPServerByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServerGroupByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServerGroupById({
  group: "reiciendis",
  id: 42976,
}).then((res: FindLDAPServerGroupByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServerGroupByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServerGroupByName({
  group: "repudiandae",
  name: "Ruth Breitenberg",
}).then((res: FindLDAPServerGroupByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServerGroupUserByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServerGroupUserById({
  group: "laboriosam",
  id: 246535,
  user: "a",
}).then((res: FindLDAPServerGroupUserByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServerGroupUserByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServerGroupUserByName({
  group: "molestias",
  name: "Tricia Cronin",
  user: "perspiciatis",
}).then((res: FindLDAPServerGroupUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServerUserByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServerUserById({
  id: 446394,
  user: "adipisci",
}).then((res: FindLDAPServerUserByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServerUserByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServerUserByName({
  name: "Tracy Cronin",
  user: "quis",
}).then((res: FindLDAPServerUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServersResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServers().then((res: FindLDAPServersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServersByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServersById({
  id: 440264,
}).then((res: FindLDAPServersByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { FindLDAPServersByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.findLDAPServersByName({
  name: "Jerry Hessel",
}).then((res: FindLDAPServersByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateLDAPServerByIdResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.updateLDAPServerById({
  id: 247399,
}).then((res: UpdateLDAPServerByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateLDAPServerByNameResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.ldapservers.updateLDAPServerByName({
  name: "Ms. Brian Kerluke IV",
}).then((res: UpdateLDAPServerByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateLDAPServerByNameRequest](../../models/operations/updateldapserverbynamerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateLDAPServerByNameResponse](../../models/operations/updateldapserverbynameresponse.md)>**

