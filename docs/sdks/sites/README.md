# sites

### Available Operations

* [createSiteById](#createsitebyid) - Creates a new site by ID
* [deleteSiteById](#deletesitebyid) - Deletes a site by ID
* [deleteSiteByName](#deletesitebyname) - Deletes a site by name
* [findSites](#findsites) - Finds all sites
* [findSitesById](#findsitesbyid) - Finds sites by ID
* [findSitesByName](#findsitesbyname) - Finds sites by name
* [updateSiteById](#updatesitebyid) - Updates an existing site by ID
* [updateSiteByName](#updatesitebyname) - Updates an existing site by name

## createSiteById

Creates a new site by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { CreateSiteByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.createSiteById({
  id: 601714,
}).then((res: CreateSiteByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateSiteByIdRequest](../../models/operations/createsitebyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateSiteByIdResponse](../../models/operations/createsitebyidresponse.md)>**


## deleteSiteById

Deletes a site by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteSiteByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.deleteSiteById({
  id: 263767,
}).then((res: DeleteSiteByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteSiteByIdRequest](../../models/operations/deletesitebyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteSiteByIdResponse](../../models/operations/deletesitebyidresponse.md)>**


## deleteSiteByName

Deletes a site by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { DeleteSiteByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.deleteSiteByName({
  name: "Irvin Rippin",
}).then((res: DeleteSiteByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteSiteByNameRequest](../../models/operations/deletesitebynamerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteSiteByNameResponse](../../models/operations/deletesitebynameresponse.md)>**


## findSites

Finds all sites

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindSitesResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.findSites().then((res: FindSitesResponse) => {
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

**Promise<[operations.FindSitesResponse](../../models/operations/findsitesresponse.md)>**


## findSitesById

Finds sites by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindSitesByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.findSitesById({
  id: 720266,
}).then((res: FindSitesByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.FindSitesByIdRequest](../../models/operations/findsitesbyidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.FindSitesByIdResponse](../../models/operations/findsitesbyidresponse.md)>**


## findSitesByName

Finds sites by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { FindSitesByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.findSitesByName({
  name: "Sophie Schmeler",
}).then((res: FindSitesByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindSitesByNameRequest](../../models/operations/findsitesbynamerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindSitesByNameResponse](../../models/operations/findsitesbynameresponse.md)>**


## updateSiteById

Updates an existing site by ID

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateSiteByIdResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.updateSiteById({
  id: 423054,
}).then((res: UpdateSiteByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateSiteByIdRequest](../../models/operations/updatesitebyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateSiteByIdResponse](../../models/operations/updatesitebyidresponse.md)>**


## updateSiteByName

Updates an existing site by name

### Example Usage

```typescript
import { Jamf } from "jamf";
import { UpdateSiteByNameResponse } from "jamf/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.sites.updateSiteByName({
  name: "Antonio Stanton",
}).then((res: UpdateSiteByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateSiteByNameRequest](../../models/operations/updatesitebynamerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateSiteByNameResponse](../../models/operations/updatesitebynameresponse.md)>**
