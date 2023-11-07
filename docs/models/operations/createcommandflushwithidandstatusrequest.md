# CreateCommandFlushWithIdAndStatusRequest


## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *number*                                               | :heavy_check_mark:                                     | ID of device to be flushed                             |
| `idtype`                                               | [operations.Idtype](../../models/operations/idtype.md) | :heavy_check_mark:                                     | Type of device to be flushed                           |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | Command status to be flushed                           |