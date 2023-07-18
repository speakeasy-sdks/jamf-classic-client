# fileuploads

### Available Operations

* [uploadFiles](#uploadfiles) - Creates file attachments in Jamf Pro

## uploadFiles

Here is a sample command curl -k -u user:password https://my.server.com:8443/JSSResource/fileuploads/computers/id/2 -F name=@/Users/admin/Documents/Sample.doc -X POST

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { UploadFilesIDType, UploadFilesResource, UploadFilesResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.fileuploads.uploadFiles({
  forceIpaUpload: false,
  id: "b1ea4265-55ba-43c2-8744-ed53b88f3a8d",
  idType: UploadFilesIDType.Name,
  resource: UploadFilesResource.Diskencryptionconfigurations,
}).then((res: UploadFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UploadFilesRequest](../../models/operations/uploadfilesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UploadFilesResponse](../../models/operations/uploadfilesresponse.md)>**

