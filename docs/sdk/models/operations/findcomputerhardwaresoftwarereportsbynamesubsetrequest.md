# FindComputerHardwareSoftwareReportsByNameSubsetRequest


## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `endDate`                                                                                                                                                                     | [RFCDate](../../../types/rfcdate.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                            | End date (e.g. yyyy-mm-dd)                                                                                                                                                    |
| `name`                                                                                                                                                                        | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | Name to filter by                                                                                                                                                             |
| `startDate`                                                                                                                                                                   | [RFCDate](../../../types/rfcdate.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                            | Start date (e.g. yyyy-mm-dd)                                                                                                                                                  |
| `subset`                                                                                                                                                                      | [operations.FindComputerHardwareSoftwareReportsByNameSubsetPathParamSubset](../../../sdk/models/operations/findcomputerhardwaresoftwarereportsbynamesubsetpathparamsubset.md) | :heavy_check_mark:                                                                                                                                                            | Subset to filter by                                                                                                                                                           |