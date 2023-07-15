# CreateComputerCommandByCommandAndIdRequest


## Fields

| Field                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `command`                                                                                                                                                                                                                                              | [CreateComputerCommandByCommandAndIdCommand](../../models/operations/createcomputercommandbycommandandidcommand.md)                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                     | Command to send (SettingsEnableBluetooth and SettingsDisableBluetooth require macOS 10.13.4 or later, EnableRemoteDesktop and DisableRemoteDesktop require macOS 10.14.4, ScheduleOSUpdate (deprecated on 2022-10-17) requires macOS 10.12.0 or later) |
| `id`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | Computer ID - supports comma separated values (e.g. id/8,10,55)                                                                                                                                                                                        |