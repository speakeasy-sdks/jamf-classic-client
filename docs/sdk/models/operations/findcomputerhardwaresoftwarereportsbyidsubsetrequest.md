# FindComputerHardwareSoftwareReportsByIdSubsetRequest


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `endDate`                                                     | [RFCDate](../../../types/rfcdate.md)                          | :heavy_check_mark:                                            | End date (e.g. yyyy-mm-dd)                                    |
| `id`                                                          | *number*                                                      | :heavy_check_mark:                                            | Computer ID to filter by                                      |
| `startDate`                                                   | [RFCDate](../../../types/rfcdate.md)                          | :heavy_check_mark:                                            | Start date (e.g. yyyy-mm-dd)                                  |
| `subset`                                                      | [operations.Subset](../../../sdk/models/operations/subset.md) | :heavy_check_mark:                                            | Subset to filter by                                           |