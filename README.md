# jamf

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add jamf-classic-sdk-nodejs
```

### Yarn

```bash
yarn add jamf-classic-sdk-nodejs
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.accounts.createAccountById({
    id: 437973,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/sdks/accounts/README.md)

* [createAccountById](docs/sdks/accounts/README.md#createaccountbyid) - Creates a new account by ID
* [createGroupById](docs/sdks/accounts/README.md#creategroupbyid) - Creates a new group by ID
* [deleteAccountById](docs/sdks/accounts/README.md#deleteaccountbyid) - Deletes an account by ID
* [deleteAccountByName](docs/sdks/accounts/README.md#deleteaccountbyname) - Deletes an account by name
* [deleteGroupById](docs/sdks/accounts/README.md#deletegroupbyid) - Deletes a group by ID
* [deleteGroupByName](docs/sdks/accounts/README.md#deletegroupbyname) - Deletes a group by name
* [findAccounts](docs/sdks/accounts/README.md#findaccounts) - Finds all accounts
* [findAccountsById](docs/sdks/accounts/README.md#findaccountsbyid) - Finds accounts by ID
* [findAccountsByName](docs/sdks/accounts/README.md#findaccountsbyname) - Finds accounts by name
* [findGroupsById](docs/sdks/accounts/README.md#findgroupsbyid) - Finds groups by ID
* [findGroupsByName](docs/sdks/accounts/README.md#findgroupsbyname) - Finds groups by name
* [updateAccountById](docs/sdks/accounts/README.md#updateaccountbyid) - Updates an existing account by ID
* [updateAccountByName](docs/sdks/accounts/README.md#updateaccountbyname) - Updates an existing account by name
* [updateGroupById](docs/sdks/accounts/README.md#updategroupbyid) - Updates an existing group by ID
* [updateGroupByName](docs/sdks/accounts/README.md#updategroupbyname) - Updates an existing group by name

### [activationcode](docs/sdks/activationcode/README.md)

* [findactivationcode](docs/sdks/activationcode/README.md#findactivationcode) - Finds the Jamf Pro activation code
* [updateActivationCode](docs/sdks/activationcode/README.md#updateactivationcode) - Updates the Jamf Pro activation code

### [advancedcomputersearches](docs/sdks/advancedcomputersearches/README.md)

* [createAdvancedComputerSearchgById](docs/sdks/advancedcomputersearches/README.md#createadvancedcomputersearchgbyid) - Creates a new advanced computer search
* [deleteAdvancedComputerSearchById](docs/sdks/advancedcomputersearches/README.md#deleteadvancedcomputersearchbyid) - Deletes a computer search by ID
* [deleteAdvancedComputerSearchByName](docs/sdks/advancedcomputersearches/README.md#deleteadvancedcomputersearchbyname) - Deletes a computer search by name
* [findAdvancedComputerSearches](docs/sdks/advancedcomputersearches/README.md#findadvancedcomputersearches) - Finds all advanced computer searches
* [findAdvancedComputerSearchesById](docs/sdks/advancedcomputersearches/README.md#findadvancedcomputersearchesbyid) - Finds computer searches by ID
* [findAdvancedComputerSearchesByName](docs/sdks/advancedcomputersearches/README.md#findadvancedcomputersearchesbyname) - Finds advanced computer searches by name
* [updateAdvancedComputerSearchById](docs/sdks/advancedcomputersearches/README.md#updateadvancedcomputersearchbyid) - Updates an existing advanced computer search by ID
* [updateAdvancedComputerSearchByName](docs/sdks/advancedcomputersearches/README.md#updateadvancedcomputersearchbyname) - Updates an existing advanced computer search by name

### [advancedmobiledevicesearches](docs/sdks/advancedmobiledevicesearches/README.md)

* [createAdvancedMobileDeviceSearchById](docs/sdks/advancedmobiledevicesearches/README.md#createadvancedmobiledevicesearchbyid) - Creates a new advanced mobile device search
* [deleteAdvancedMobileDeviceSearchById](docs/sdks/advancedmobiledevicesearches/README.md#deleteadvancedmobiledevicesearchbyid) - Deletes a mobile device search by ID
* [deleteAdvancedMobileDeviceSearchByName](docs/sdks/advancedmobiledevicesearches/README.md#deleteadvancedmobiledevicesearchbyname) - Deletes a mobile device search by name
* [findAdvancedMobileDeviceSearches](docs/sdks/advancedmobiledevicesearches/README.md#findadvancedmobiledevicesearches) - Finds all advanced mobile device searches
* [findAdvancedMobileDeviceSearchesById](docs/sdks/advancedmobiledevicesearches/README.md#findadvancedmobiledevicesearchesbyid) - Finds mobile device searches by ID
* [findMobileDeviceSearchesByName](docs/sdks/advancedmobiledevicesearches/README.md#findmobiledevicesearchesbyname) - Finds advanced mobile device searches by name
* [updateAdvancedMobileDeviceSearchById](docs/sdks/advancedmobiledevicesearches/README.md#updateadvancedmobiledevicesearchbyid) - Updates an existing advanced mobile device search by ID
* [updateAdvancedMobileDeviceSearchByName](docs/sdks/advancedmobiledevicesearches/README.md#updateadvancedmobiledevicesearchbyname) - Updates an existing advanced mobile device search by name

### [advancedusersearches](docs/sdks/advancedusersearches/README.md)

* [createAdvancedUserSearchgById](docs/sdks/advancedusersearches/README.md#createadvancedusersearchgbyid) - Creates a new advanced user search by ID
* [deleteAdvancedUserSearchById](docs/sdks/advancedusersearches/README.md#deleteadvancedusersearchbyid) - Deletes a user search by ID
* [deleteAdvancedUserSearchByName](docs/sdks/advancedusersearches/README.md#deleteadvancedusersearchbyname) - Deletes a user search by Name
* [findAdvancedUserSearches](docs/sdks/advancedusersearches/README.md#findadvancedusersearches) - Finds all advanced user searches
* [findAdvancedUserSearchesById](docs/sdks/advancedusersearches/README.md#findadvancedusersearchesbyid) - Finds user searches by ID
* [findUserSearchesByName](docs/sdks/advancedusersearches/README.md#findusersearchesbyname) - Finds user searches by name
* [updateAdvancedUserSearchById](docs/sdks/advancedusersearches/README.md#updateadvancedusersearchbyid) - Updates an existing advanced user search by ID
* [updateAdvancedUserSearchByName](docs/sdks/advancedusersearches/README.md#updateadvancedusersearchbyname) - Updates an existing advanced user search by name

### [allowedfileextensions](docs/sdks/allowedfileextensions/README.md)

* [createAllowedFileExtensionById](docs/sdks/allowedfileextensions/README.md#createallowedfileextensionbyid) - Creates a new allowed file extension value by ID
* [deleteAllowedFileExtensionById](docs/sdks/allowedfileextensions/README.md#deleteallowedfileextensionbyid) - Deletes an allowed file extension value by ID
* [findAllowedFileExtension](docs/sdks/allowedfileextensions/README.md#findallowedfileextension) - Finds the allowed file extensions
* [findAllowedFileExtensionById](docs/sdks/allowedfileextensions/README.md#findallowedfileextensionbyid) - Finds an allowed file extension value by ID
* [findAllowedFileExtensionByName](docs/sdks/allowedfileextensions/README.md#findallowedfileextensionbyname) - Finds an allowed file extension value by name

### [buildings](docs/sdks/buildings/README.md)

* [createBuildingById](docs/sdks/buildings/README.md#createbuildingbyid) - Creates a new building
* [deleteBuildingById](docs/sdks/buildings/README.md#deletebuildingbyid) - Deletes a building by ID
* [deleteBuildingByName](docs/sdks/buildings/README.md#deletebuildingbyname) - Deletes a building by name
* [findBuildings](docs/sdks/buildings/README.md#findbuildings) - Finds all buildings
* [findBuildingsById](docs/sdks/buildings/README.md#findbuildingsbyid) - Finds buildings by ID
* [findBuildingsByName](docs/sdks/buildings/README.md#findbuildingsbyname) - Finds buildings by name
* [updateBuildingById](docs/sdks/buildings/README.md#updatebuildingbyid) - Updates an existing building by ID
* [updateBuildingByName](docs/sdks/buildings/README.md#updatebuildingbyname) - Updates an existing building by name

### [byoprofiles](docs/sdks/byoprofiles/README.md)

* [createBYOProfilesById](docs/sdks/byoprofiles/README.md#createbyoprofilesbyid) - Creates a personal device profile by ID
* [deleteBYOProfilesById](docs/sdks/byoprofiles/README.md#deletebyoprofilesbyid) - Deletes a personal device profile by ID
* [deleteBYOProfilesByName](docs/sdks/byoprofiles/README.md#deletebyoprofilesbyname) - Deletes a personal device profile by name
* [findBYOProfiles](docs/sdks/byoprofiles/README.md#findbyoprofiles) - Finds all personal device profiles
* [findBYOProfilesById](docs/sdks/byoprofiles/README.md#findbyoprofilesbyid) - Finds personal device profile by ID
* [findBYOProfilesByName](docs/sdks/byoprofiles/README.md#findbyoprofilesbyname) - Finds a personal device profile by name
* [updateBYOProfilesById](docs/sdks/byoprofiles/README.md#updatebyoprofilesbyid) - Updates a personal device profile by ID
* [updateBYOProfilesByName](docs/sdks/byoprofiles/README.md#updatebyoprofilesbyname) - Updates a personal device profile by name

### [categories](docs/sdks/categories/README.md)

* [createCategoryById](docs/sdks/categories/README.md#createcategorybyid) - Creates a new category by ID
* [deleteCategoryById](docs/sdks/categories/README.md#deletecategorybyid) - Deletes a category by ID
* [deleteCategoryByName](docs/sdks/categories/README.md#deletecategorybyname) - Deletes a category by name
* [findCategories](docs/sdks/categories/README.md#findcategories) - Finds all categories
* [findCategoriesById](docs/sdks/categories/README.md#findcategoriesbyid) - Finds categories by ID
* [findCategoriesByName](docs/sdks/categories/README.md#findcategoriesbyname) - Finds categories by name
* [updateCategoryById](docs/sdks/categories/README.md#updatecategorybyid) - Updates an existing category by ID
* [updateCategoryByName](docs/sdks/categories/README.md#updatecategorybyname) - Updates an existing category by name

### [classes](docs/sdks/classes/README.md)

* [createClassById](docs/sdks/classes/README.md#createclassbyid) - Creates a new class by ID
* [deleteClassById](docs/sdks/classes/README.md#deleteclassbyid) - Deletes a class by ID
* [deleteClassByName](docs/sdks/classes/README.md#deleteclassbyname) - Deletes a class by name
* [findClasses](docs/sdks/classes/README.md#findclasses) - Finds all classes
* [findClassesById](docs/sdks/classes/README.md#findclassesbyid) - Finds classes by ID
* [findClassesByName](docs/sdks/classes/README.md#findclassesbyname) - Finds classes by name
* [updateClassById](docs/sdks/classes/README.md#updateclassbyid) - Updates an existing class by ID
* [updateClassByName](docs/sdks/classes/README.md#updateclassbyname) - Updates an existing class by name

### [commandflush](docs/sdks/commandflush/README.md)

* [commandFlush](docs/sdks/commandflush/README.md#commandflush) - Flushes commands based on information specified in an XML file
* [createCommandFlushWithIdAndStatus](docs/sdks/commandflush/README.md#createcommandflushwithidandstatus) - Flushes commands for devices

### [computerapplications](docs/sdks/computerapplications/README.md)

* [findComputerApplicationByNameAndVersion](docs/sdks/computerapplications/README.md#findcomputerapplicationbynameandversion) - Finds computer applications by name and version
* [findComputerApplicationsByName](docs/sdks/computerapplications/README.md#findcomputerapplicationsbyname) - Finds computer applications by name
* [findComputerApplicationsByNameAndVersionAndInventory](docs/sdks/computerapplications/README.md#findcomputerapplicationsbynameandversionandinventory) - Finds computer applications by name and version
* [findComputerApplicationsByNameInventory](docs/sdks/computerapplications/README.md#findcomputerapplicationsbynameinventory) - Finds computer applications by name with additional display fields

### [computerapplicationusage](docs/sdks/computerapplicationusage/README.md)

* [findComputerApplicationUsageById](docs/sdks/computerapplicationusage/README.md#findcomputerapplicationusagebyid) - Finds computer application usage by computer ID
* [findComputerApplicationUsageByMacAddress](docs/sdks/computerapplicationusage/README.md#findcomputerapplicationusagebymacaddress) - Finds computer application usage by computer MAC address
* [findComputerApplicationUsageByName](docs/sdks/computerapplicationusage/README.md#findcomputerapplicationusagebyname) - Finds computer application usage by computer name
* [findComputerApplicationUsageBySerial](docs/sdks/computerapplicationusage/README.md#findcomputerapplicationusagebyserial) - Finds computer application usage by computer serial number
* [findComputerApplicationUsageByUDID](docs/sdks/computerapplicationusage/README.md#findcomputerapplicationusagebyudid) - Finds computer application usage by computer UDID

### [computercheckin](docs/sdks/computercheckin/README.md)

* [findComputerCheckin](docs/sdks/computercheckin/README.md#findcomputercheckin) - Finds the Jamf Pro computer checkin information
* [updateComputerCheckin](docs/sdks/computercheckin/README.md#updatecomputercheckin) - Updates the Jamf Pro computer checkin information

### [computercommands](docs/sdks/computercommands/README.md)

* [createComputerCommandByCommand](docs/sdks/computercommands/README.md#createcomputercommandbycommand) - Creates a new computer command using command name
* [createComputerCommandByCommandAndAction](docs/sdks/computercommands/README.md#createcomputercommandbycommandandaction) - Creates a new computer command with a command specific action. Commands supported: ScheduleOSUpdate (deprecated on 2022-10-17)
* [createComputerCommandByCommandAndId](docs/sdks/computercommands/README.md#createcomputercommandbycommandandid) - Creates a new computer command using command name and device IDs
* [createComputerCommandByCommandIdAndPasscode](docs/sdks/computercommands/README.md#createcomputercommandbycommandidandpasscode) - Creates a new computer command using command name and device IDs
* [findComputerCommands](docs/sdks/computercommands/README.md#findcomputercommands) - Finds all computer commands
* [findComputerCommandsByName](docs/sdks/computercommands/README.md#findcomputercommandsbyname) - Finds all computer commands by name
* [findComputerCommandsByUuid](docs/sdks/computercommands/README.md#findcomputercommandsbyuuid) - Finds a computer command by UUID

### [computerextensionattributes](docs/sdks/computerextensionattributes/README.md)

* [createComputerextensionattributeById](docs/sdks/computerextensionattributes/README.md#createcomputerextensionattributebyid) - Creates a new computer extension attribute by ID
* [deleteComputerextensionattributeById](docs/sdks/computerextensionattributes/README.md#deletecomputerextensionattributebyid) - Deletes a computer extension attribute by ID
* [deleteComputerextensionattributeByName](docs/sdks/computerextensionattributes/README.md#deletecomputerextensionattributebyname) - Deletes a computer extension attribute by name
* [findComputerextensionattributes](docs/sdks/computerextensionattributes/README.md#findcomputerextensionattributes) - Finds all computer extension attributes
* [findComputerextensionattributesById](docs/sdks/computerextensionattributes/README.md#findcomputerextensionattributesbyid) - Finds computer extension attributes by ID
* [findComputerextensionattributesByName](docs/sdks/computerextensionattributes/README.md#findcomputerextensionattributesbyname) - Finds computer extension attributes by name
* [updateComputerextensionattributeById](docs/sdks/computerextensionattributes/README.md#updatecomputerextensionattributebyid) - Updates an existing computer extension attribute by ID
* [updateComputerextensionattributeByName](docs/sdks/computerextensionattributes/README.md#updatecomputerextensionattributebyname) - Updates an existing computer extension attribute by name

### [computergroups](docs/sdks/computergroups/README.md)

* [createComputerGroupById](docs/sdks/computergroups/README.md#createcomputergroupbyid) - Creates a new computer group by ID
* [deleteComputerGroupById](docs/sdks/computergroups/README.md#deletecomputergroupbyid) - Deletes a computer group by ID
* [deleteComputerGroupByName](docs/sdks/computergroups/README.md#deletecomputergroupbyname) - Deletes a computer group by name
* [findComputerGroups](docs/sdks/computergroups/README.md#findcomputergroups) - Finds all computer groups
* [findComputerGroupsById](docs/sdks/computergroups/README.md#findcomputergroupsbyid) - Finds computer groups by ID
* [findComputerGroupsByName](docs/sdks/computergroups/README.md#findcomputergroupsbyname) - Finds computer groups by name
* [updateComputerGroupById](docs/sdks/computergroups/README.md#updatecomputergroupbyid) - Updates an existing computer group by ID
* [updateComputerGroupByName](docs/sdks/computergroups/README.md#updatecomputergroupbyname) - Updates an existing computer group by name

### [computerhardwaresoftwarereports](docs/sdks/computerhardwaresoftwarereports/README.md)

* [findComputerHardwareSoftwareReportsById](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbyid) - Finds hardware/software reports by computer ID
* [findComputerHardwareSoftwareReportsByIdSubset](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbyidsubset) - Finds a subset of hardware/software reports by computer ID
* [findComputerHardwareSoftwareReportsByMacAddress](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbymacaddress) - Finds hardware/software reports by computer MAC address
* [findComputerHardwareSoftwareReportsByMacAddressSubset](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbymacaddresssubset) - Finds a subset of hardware/software reports by computer MAC address
* [findComputerHardwareSoftwareReportsByName](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbyname) - Finds hardware/software reports by computer name
* [findComputerHardwareSoftwareReportsByNameSubset](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbynamesubset) - Finds a subset of hardware/software reports by computer name
* [findComputerHardwareSoftwareReportsBySerial](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbyserial) - Finds hardware/software reports by computer serial number
* [findComputerHardwareSoftwareReportsBySerialSubset](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbyserialsubset) - Finds a subset of hardware/software reports by computer serial number
* [findComputerHardwareSoftwareReportsByUDID](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbyudid) - Finds hardware/software reports by computer UDID
* [findComputerHardwareSoftwareReportsByUDIDSubset](docs/sdks/computerhardwaresoftwarereports/README.md#findcomputerhardwaresoftwarereportsbyudidsubset) - Finds a subset of hardware/software reports by computer UDID

### [computerhistory](docs/sdks/computerhistory/README.md)

* [findComputerHistoryById](docs/sdks/computerhistory/README.md#findcomputerhistorybyid) - Finds computer history by ID
* [findComputerHistoryByIdSubset](docs/sdks/computerhistory/README.md#findcomputerhistorybyidsubset) - Finds a subset of computer history data by ID
* [findComputerHistoryByMacAddress](docs/sdks/computerhistory/README.md#findcomputerhistorybymacaddress) - Finds computer history by MAC address
* [findComputerHistoryByMacAddressSubset](docs/sdks/computerhistory/README.md#findcomputerhistorybymacaddresssubset) - Finds a subset of computer history data by MAC address
* [findComputerHistoryByName](docs/sdks/computerhistory/README.md#findcomputerhistorybyname) - Finds computer history by name
* [findComputerHistoryByNameSubset](docs/sdks/computerhistory/README.md#findcomputerhistorybynamesubset) - Finds a subset of computer history data by name
* [findComputerHistoryBySerialNumber](docs/sdks/computerhistory/README.md#findcomputerhistorybyserialnumber) - Finds computer history by serial number
* [findComputerHistoryBySerialNumberSubset](docs/sdks/computerhistory/README.md#findcomputerhistorybyserialnumbersubset) - Finds a subset of computer history data by serial number
* [findComputerHistoryByUDID](docs/sdks/computerhistory/README.md#findcomputerhistorybyudid) - Finds computer history by UDID
* [findComputerHistoryByUDIDSubset](docs/sdks/computerhistory/README.md#findcomputerhistorybyudidsubset) - Finds a subset of computer history data by UDID

### [computerinventorycollection](docs/sdks/computerinventorycollection/README.md)

* [findComputerInventoryCollection](docs/sdks/computerinventorycollection/README.md#findcomputerinventorycollection) - Finds the Jamf Pro computer inventory collection information
* [updateComputerInventoryCollection](docs/sdks/computerinventorycollection/README.md#updatecomputerinventorycollection) - Updates the Jamf Pro computer inventory collection information

### [computerinvitations](docs/sdks/computerinvitations/README.md)

* [createComputerInvitationsById](docs/sdks/computerinvitations/README.md#createcomputerinvitationsbyid) - Creates a new computer invitation by id
* [createComputerInvitationsByInvitation](docs/sdks/computerinvitations/README.md#createcomputerinvitationsbyinvitation) - Creates a new computer invitation by invitation
* [deleteComputerInvitationById](docs/sdks/computerinvitations/README.md#deletecomputerinvitationbyid) - Deletes a computer invitation by id
* [deleteComputerInvitationByInvitation](docs/sdks/computerinvitations/README.md#deletecomputerinvitationbyinvitation) - Deletes a computer invitation by invitation
* [findComputerInvitations](docs/sdks/computerinvitations/README.md#findcomputerinvitations) - Finds all computer invitations
* [findComputerInvitationsById](docs/sdks/computerinvitations/README.md#findcomputerinvitationsbyid) - Finds computer invitations by id
* [findComputerInvitationsByInvitation](docs/sdks/computerinvitations/README.md#findcomputerinvitationsbyinvitation) - Finds computer invitations by invitation

### [computermanagement](docs/sdks/computermanagement/README.md)

* [findComputerManagementById](docs/sdks/computermanagement/README.md#findcomputermanagementbyid) - Finds computer management information by ID
* [findComputerManagementByIdPatchFilter](docs/sdks/computermanagement/README.md#findcomputermanagementbyidpatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByIdSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbyidsubset) - Finds a subset of computer management information by ID
* [findComputerManagementByIdUsername](docs/sdks/computermanagement/README.md#findcomputermanagementbyidusername) - Finds management information for a computer and username
* [findComputerManagementByIdUsernameSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbyidusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementByMacAddress](docs/sdks/computermanagement/README.md#findcomputermanagementbymacaddress) - Finds computer management information by MAC address
* [findComputerManagementByMacAddressPatchFilter](docs/sdks/computermanagement/README.md#findcomputermanagementbymacaddresspatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByMacAddressSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbymacaddresssubset) - Finds a subset of computer management information by MAC address
* [findComputerManagementByMacAddressUsername](docs/sdks/computermanagement/README.md#findcomputermanagementbymacaddressusername) - Finds management information for a computer and username
* [findComputerManagementByMacAddressUsernameSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbymacaddressusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementByName](docs/sdks/computermanagement/README.md#findcomputermanagementbyname) - Finds computer management information by name
* [findComputerManagementByNamePatchFilter](docs/sdks/computermanagement/README.md#findcomputermanagementbynamepatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByNameSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbynamesubset) - Finds a subset of computer management information by name
* [findComputerManagementByNameUsername](docs/sdks/computermanagement/README.md#findcomputermanagementbynameusername) - Finds management information for a computer and username
* [findComputerManagementByNameUsernameSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbynameusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementBySerialNumber](docs/sdks/computermanagement/README.md#findcomputermanagementbyserialnumber) - Finds computer management information by serial number
* [findComputerManagementBySerialNumberPatchFilter](docs/sdks/computermanagement/README.md#findcomputermanagementbyserialnumberpatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementBySerialNumberSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbyserialnumbersubset) - Finds a subset of computer management information by serial number
* [findComputerManagementBySerialNumberUsername](docs/sdks/computermanagement/README.md#findcomputermanagementbyserialnumberusername) - Finds management information for a computer and username
* [findComputerManagementBySerialNumberUsernameSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbyserialnumberusernamesubset) - Finds a subset of management information for a computer and username
* [findComputerManagementByUDID](docs/sdks/computermanagement/README.md#findcomputermanagementbyudid) - Finds computer management information by UDID
* [findComputerManagementByUDIDSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbyudidsubset) - Finds a subset of computer management information by UDID
* [findComputerManagementByUdidPatchFilter](docs/sdks/computermanagement/README.md#findcomputermanagementbyudidpatchfilter) - Display patch management information for a computer and filter
* [findComputerManagementByUdidUsername](docs/sdks/computermanagement/README.md#findcomputermanagementbyudidusername) - Finds management information for a computer and username
* [findComputerManagementByUdidUsernameSubset](docs/sdks/computermanagement/README.md#findcomputermanagementbyudidusernamesubset) - Finds a subset of management information for a computer and username

### [computerreports](docs/sdks/computerreports/README.md)

* [findComputerReports](docs/sdks/computerreports/README.md#findcomputerreports) - Finds all computer reports
* [findComputerReportsById](docs/sdks/computerreports/README.md#findcomputerreportsbyid) - Finds computer reports by id
* [findComputerReportsByName](docs/sdks/computerreports/README.md#findcomputerreportsbyname) - Finds computer reports by name

### [computers](docs/sdks/computers/README.md)

* [createComputerById](docs/sdks/computers/README.md#createcomputerbyid) - Creates a computer
* [deleteComputerById](docs/sdks/computers/README.md#deletecomputerbyid) - Deletes a computer by ID
* [deleteComputerByMacAddress](docs/sdks/computers/README.md#deletecomputerbymacaddress) - Deletes a computer by MAC address
* [deleteComputerByName](docs/sdks/computers/README.md#deletecomputerbyname) - Deletes a computer by name
* [deleteComputerBySerialNumber](docs/sdks/computers/README.md#deletecomputerbyserialnumber) - Deletes a computer by serial number
* [deleteComputerByUDID](docs/sdks/computers/README.md#deletecomputerbyudid) - Deletes a computer by UDID
* [findComputers](docs/sdks/computers/README.md#findcomputers) - Finds all computers
* [findComputersBasic](docs/sdks/computers/README.md#findcomputersbasic) - Finds basic information for all computers
* [findComputersById](docs/sdks/computers/README.md#findcomputersbyid) - Finds computers by ID
* [findComputersByIdSubset](docs/sdks/computers/README.md#findcomputersbyidsubset) - Finds a subset of information for a computer
* [findComputersByMacAddress](docs/sdks/computers/README.md#findcomputersbymacaddress) - Finds computers by MAC address
* [findComputersByMacAddressSubset](docs/sdks/computers/README.md#findcomputersbymacaddresssubset) - Finds a subset of data for computers by MAC address
* [findComputersByName](docs/sdks/computers/README.md#findcomputersbyname) - Finds the first computer with the given name
* [findComputersByNameSubset](docs/sdks/computers/README.md#findcomputersbynamesubset) - Finds a subset of data for the first computer with the given name
* [findComputersBySerialNumber](docs/sdks/computers/README.md#findcomputersbyserialnumber) - Finds computers by serial number
* [findComputersBySerialNumberSubset](docs/sdks/computers/README.md#findcomputersbyserialnumbersubset) - Finds a subset of data for computers by serial number
* [findComputersByUDID](docs/sdks/computers/README.md#findcomputersbyudid) - Finds computers by UDID
* [findComputersByUDIDSubset](docs/sdks/computers/README.md#findcomputersbyudidsubset) - Finds a subset of data for computers by UDID
* [flushComputerExtenstionAttributeData](docs/sdks/computers/README.md#flushcomputerextenstionattributedata) - Deletes data collected by an extension attribute
* [matchComputers](docs/sdks/computers/README.md#matchcomputers) - Searches for computers that match the provided parameter
* [matchComputersNames](docs/sdks/computers/README.md#matchcomputersnames) - Searches for computers that match the provided name parameter
* [updateComputerById](docs/sdks/computers/README.md#updatecomputerbyid) - Updates an existing computer by ID
* [updateComputerByMacAddress](docs/sdks/computers/README.md#updatecomputerbymacaddress) - Updates an existing computer by MAC address
* [updateComputerByName](docs/sdks/computers/README.md#updatecomputerbyname) - Updates an existing computer by name
* [updateComputerBySerialNumber](docs/sdks/computers/README.md#updatecomputerbyserialnumber) - Updates an existing computer by serial number
* [updateComputerByUDID](docs/sdks/computers/README.md#updatecomputerbyudid) - Updates an existing computer by UDID

### [departments](docs/sdks/departments/README.md)

* [createDepartmentById](docs/sdks/departments/README.md#createdepartmentbyid) - Creates a new department by ID
* [deleteDepartmentById](docs/sdks/departments/README.md#deletedepartmentbyid) - Deletes a department by ID
* [deleteDepartmentByName](docs/sdks/departments/README.md#deletedepartmentbyname) - Deletes a department by name
* [findDepartments](docs/sdks/departments/README.md#finddepartments) - Finds all departments
* [findDepartmentsById](docs/sdks/departments/README.md#finddepartmentsbyid) - Finds departments by ID
* [findDepartmentsByName](docs/sdks/departments/README.md#finddepartmentsbyname) - Finds departments by name
* [updateDepartmentById](docs/sdks/departments/README.md#updatedepartmentbyid) - Updates an existing department by ID
* [updateDepartmentByName](docs/sdks/departments/README.md#updatedepartmentbyname) - Updates an existing department by name

### [directorybindings](docs/sdks/directorybindings/README.md)

* [createDirectoryBindingById](docs/sdks/directorybindings/README.md#createdirectorybindingbyid) - Creates a new directory binding by ID
* [deleteDirectoryBindingById](docs/sdks/directorybindings/README.md#deletedirectorybindingbyid) - Deletes a directory binding by ID
* [deleteDirectoryBindingByName](docs/sdks/directorybindings/README.md#deletedirectorybindingbyname) - Deletes a directory binding by name
* [findDirectoryBindings](docs/sdks/directorybindings/README.md#finddirectorybindings) - Finds all directory bindings
* [findDirectoryBindingsById](docs/sdks/directorybindings/README.md#finddirectorybindingsbyid) - Finds directory bindings by ID
* [findDirectoryBindingsByName](docs/sdks/directorybindings/README.md#finddirectorybindingsbyname) - Finds directory bindings by name
* [updateDirectoryBindingById](docs/sdks/directorybindings/README.md#updatedirectorybindingbyid) - Updates an existing directory binding by ID
* [updateDirectoryBindingByName](docs/sdks/directorybindings/README.md#updatedirectorybindingbyname) - Updates an existing directory binding by name

### [diskencryptionconfigurations](docs/sdks/diskencryptionconfigurations/README.md)

* [createDiskEncryptionConfigurationById](docs/sdks/diskencryptionconfigurations/README.md#creatediskencryptionconfigurationbyid) - Creates a new disk encryption configuration by ID
* [deleteDiskEncryptionConfigurationById](docs/sdks/diskencryptionconfigurations/README.md#deletediskencryptionconfigurationbyid) - Deletes a disk encryption configuration by ID
* [deleteDiskEncryptionConfigurationByName](docs/sdks/diskencryptionconfigurations/README.md#deletediskencryptionconfigurationbyname) - Deletes a disk encryption configuration by name
* [findDiskEncryptionConfigurations](docs/sdks/diskencryptionconfigurations/README.md#finddiskencryptionconfigurations) - Finds all disk encryption configurations
* [findDiskEncryptionConfigurationsById](docs/sdks/diskencryptionconfigurations/README.md#finddiskencryptionconfigurationsbyid) - Finds disk encryption configurations by ID
* [findDiskEncryptionConfigurationsByName](docs/sdks/diskencryptionconfigurations/README.md#finddiskencryptionconfigurationsbyname) - Finds disk encryption configurations by name
* [updateDiskEncryptionConfigurationById](docs/sdks/diskencryptionconfigurations/README.md#updatediskencryptionconfigurationbyid) - Updates an existing disk encryption configuration by ID
* [updateDiskEncryptionConfigurationByName](docs/sdks/diskencryptionconfigurations/README.md#updatediskencryptionconfigurationbyname) - Updates an existing disk encryption configuration by name

### [distributionpoints](docs/sdks/distributionpoints/README.md)

* [createDistributionPointById](docs/sdks/distributionpoints/README.md#createdistributionpointbyid) - Creates a new distribution point by ID
* [deleteDistributionPointById](docs/sdks/distributionpoints/README.md#deletedistributionpointbyid) - Deletes a distribution point by ID
* [deleteDistributionPointByName](docs/sdks/distributionpoints/README.md#deletedistributionpointbyname) - Deletes a distribution point by name
* [findDistributionPoints](docs/sdks/distributionpoints/README.md#finddistributionpoints) - Finds all distribution points
* [findDistributionPointsById](docs/sdks/distributionpoints/README.md#finddistributionpointsbyid) - Finds distribution points by ID
* [findDistributionPointsByName](docs/sdks/distributionpoints/README.md#finddistributionpointsbyname) - Finds distribution points by name
* [updateDistributionPointById](docs/sdks/distributionpoints/README.md#updatedistributionpointbyid) - Updates an existing distribution point by ID
* [updateDistributionPointByName](docs/sdks/distributionpoints/README.md#updatedistributionpointbyname) - Updates an existing distribution point by name

### [dockitems](docs/sdks/dockitems/README.md)

* [createDockItemById](docs/sdks/dockitems/README.md#createdockitembyid) - Creates a new dock item by ID
* [deleteDockItemById](docs/sdks/dockitems/README.md#deletedockitembyid) - Deletes a dock item by ID
* [deleteDockItemByName](docs/sdks/dockitems/README.md#deletedockitembyname) - Deletes a dock item by name
* [findDockItems](docs/sdks/dockitems/README.md#finddockitems) - Finds all dock items
* [findDockItemsById](docs/sdks/dockitems/README.md#finddockitemsbyid) - Finds dock items by ID
* [findDockItemsByName](docs/sdks/dockitems/README.md#finddockitemsbyname) - Finds dock items by name
* [updateDockItemById](docs/sdks/dockitems/README.md#updatedockitembyid) - Updates an existing dock item by ID
* [updateDockItemByName](docs/sdks/dockitems/README.md#updatedockitembyname) - Updates an existing dock item by name

### [ebooks](docs/sdks/ebooks/README.md)

* [createEBookById](docs/sdks/ebooks/README.md#createebookbyid) - Creates a new ebook by ID
* [deleteEBookById](docs/sdks/ebooks/README.md#deleteebookbyid) - Deletes an ebook by ID
* [deleteEBookByName](docs/sdks/ebooks/README.md#deleteebookbyname) - Deletes an ebook by name
* [findEBooks](docs/sdks/ebooks/README.md#findebooks) - Finds all ebooks
* [findEBooksById](docs/sdks/ebooks/README.md#findebooksbyid) - Finds ebooks by ID
* [findEBooksByName](docs/sdks/ebooks/README.md#findebooksbyname) - Finds ebooks by name
* [findEBooksByNameSubset](docs/sdks/ebooks/README.md#findebooksbynamesubset) - Finds a subset of data for ebooks by name
* [findEbookssByIdSubset](docs/sdks/ebooks/README.md#findebookssbyidsubset) - Finds a subset of data for an ebook by ID
* [updateEBookById](docs/sdks/ebooks/README.md#updateebookbyid) - Updates an existing ebook by ID
* [updateEBookByName](docs/sdks/ebooks/README.md#updateebookbyname) - Updates an existing ebook by name

### [fileuploads](docs/sdks/fileuploads/README.md)

* [uploadFiles](docs/sdks/fileuploads/README.md#uploadfiles) - Creates file attachments in Jamf Pro

### [gsxconnection](docs/sdks/gsxconnection/README.md)

* [findGSXConnection](docs/sdks/gsxconnection/README.md#findgsxconnection) - Finds the Jamf Pro GSX connection information
* [updateGSXConnection](docs/sdks/gsxconnection/README.md#updategsxconnection) - Updates the Jamf Pro GSX connection information

### [healthcarelistener](docs/sdks/healthcarelistener/README.md)

* [findHealthcareListener](docs/sdks/healthcarelistener/README.md#findhealthcarelistener) - Find all Healthcare Listeners
* [findHealthcareListenersById](docs/sdks/healthcarelistener/README.md#findhealthcarelistenersbyid) - Finds healthcare listener by ID
* [updateHealthCareListenerById](docs/sdks/healthcarelistener/README.md#updatehealthcarelistenerbyid) - Updates an existing healthcare listener by ID

### [healthcarelistenerrule](docs/sdks/healthcarelistenerrule/README.md)

* [createHealthCareListenerRuleById](docs/sdks/healthcarelistenerrule/README.md#createhealthcarelistenerrulebyid) - Creates a new Healthcare Listener rule
* [findHealthcareListenerRule](docs/sdks/healthcarelistenerrule/README.md#findhealthcarelistenerrule) - Find all Healthcare Listener rules
* [findHealthcareListenerRulesById](docs/sdks/healthcarelistenerrule/README.md#findhealthcarelistenerrulesbyid) - Finds Healthcare Listener rules by ID
* [updateHealthCareListenerRuleById](docs/sdks/healthcarelistenerrule/README.md#updatehealthcarelistenerrulebyid) - Updates an existing Healthcare Listener rule by ID

### [ibeacons](docs/sdks/ibeacons/README.md)

* [createIBeaconById](docs/sdks/ibeacons/README.md#createibeaconbyid) - Creates a new iBeacon region by ID
* [deleteIBeaconById](docs/sdks/ibeacons/README.md#deleteibeaconbyid) - Deletes an iBeacon region by ID
* [deleteIBeaconByName](docs/sdks/ibeacons/README.md#deleteibeaconbyname) - Deletes an iBeacon region by name
* [findIBeacons](docs/sdks/ibeacons/README.md#findibeacons) - Finds all iBeacon regions
* [findIBeaconsById](docs/sdks/ibeacons/README.md#findibeaconsbyid) - Finds iBeacon regions by ID
* [findIBeaconsByName](docs/sdks/ibeacons/README.md#findibeaconsbyname) - Finds iBeacon regions by name
* [updateIBeaconById](docs/sdks/ibeacons/README.md#updateibeaconbyid) - Updates an existing iBeacon region by ID
* [updateIBeaconByName](docs/sdks/ibeacons/README.md#updateibeaconbyname) - Updates an existing iBeacon region by name

### [infrastructuremanager](docs/sdks/infrastructuremanager/README.md)

* [findInfrastructureManager](docs/sdks/infrastructuremanager/README.md#findinfrastructuremanager) - Find all Infrastructure Managers
* [findInfrastructureManagerById](docs/sdks/infrastructuremanager/README.md#findinfrastructuremanagerbyid) - Finds infrastructure manager by ID
* [updateInfrastructureManagerById](docs/sdks/infrastructuremanager/README.md#updateinfrastructuremanagerbyid) - Updates an existing infrastructure manager by ID

### [jsonwebtokenconfigurations](docs/sdks/jsonwebtokenconfigurations/README.md)

* [createJsonWebTokenConfigurationById](docs/sdks/jsonwebtokenconfigurations/README.md#createjsonwebtokenconfigurationbyid) - Creates a new JSON Web Token configuration by ID
* [deleteJsonWebTokenConfigurationById](docs/sdks/jsonwebtokenconfigurations/README.md#deletejsonwebtokenconfigurationbyid) - Deletes a JSON Web Token configuration by ID
* [findJsonWebTokenConfigurationById](docs/sdks/jsonwebtokenconfigurations/README.md#findjsonwebtokenconfigurationbyid) - Find JSON Web Token configuration by ID
* [findJsonWebTokenConfigurations](docs/sdks/jsonwebtokenconfigurations/README.md#findjsonwebtokenconfigurations) - Finds all JSON Web Token configurations
* [updateJsonWebTokenConfigurationById](docs/sdks/jsonwebtokenconfigurations/README.md#updatejsonwebtokenconfigurationbyid) - Updates an existing JSON Web Token configuration by ID

### [jssuser](docs/sdks/jssuser/README.md)

* [~~jssuserGet~~](docs/sdks/jssuser/README.md#jssuserget) - Returns basic information about Jamf Pro, as well as privileges of the person requesting the resource. (Deprecated) :warning: **Deprecated**

### [ldapservers](docs/sdks/ldapservers/README.md)

* [createLDAPServerById](docs/sdks/ldapservers/README.md#createldapserverbyid) - Creates a new LDAP server by ID
* [deleteLDAPServerById](docs/sdks/ldapservers/README.md#deleteldapserverbyid) - Deletes an LDAP server by ID
* [deleteLDAPServerByName](docs/sdks/ldapservers/README.md#deleteldapserverbyname) - Deletes an LDAP server by name
* [findLDAPServerGroupById](docs/sdks/ldapservers/README.md#findldapservergroupbyid) - Display information for matching groups for an LDAP server
* [findLDAPServerGroupByName](docs/sdks/ldapservers/README.md#findldapservergroupbyname) - Display information for matching groups for an LDAP server
* [findLDAPServerGroupUserById](docs/sdks/ldapservers/README.md#findldapservergroupuserbyid) - Display information about user membership in a group for an LDAP server
* [findLDAPServerGroupUserByName](docs/sdks/ldapservers/README.md#findldapservergroupuserbyname) - Display information about user membership in a group for an LDAP server
* [findLDAPServerUserById](docs/sdks/ldapservers/README.md#findldapserveruserbyid) - Display information for matching users for an LDAP server
* [findLDAPServerUserByName](docs/sdks/ldapservers/README.md#findldapserveruserbyname) - Display information for matching users for an LDAP server
* [findLDAPServers](docs/sdks/ldapservers/README.md#findldapservers) - Finds all LDAP servers
* [findLDAPServersById](docs/sdks/ldapservers/README.md#findldapserversbyid) - Finds LDAP servers by ID
* [findLDAPServersByName](docs/sdks/ldapservers/README.md#findldapserversbyname) - Finds LDAP servers by name
* [updateLDAPServerById](docs/sdks/ldapservers/README.md#updateldapserverbyid) - Updates an existing LDAP server by ID
* [updateLDAPServerByName](docs/sdks/ldapservers/README.md#updateldapserverbyname) - Updates an existing LDAP server by name

### [licensedsoftware](docs/sdks/licensedsoftware/README.md)

* [createLicensedSoftwareById](docs/sdks/licensedsoftware/README.md#createlicensedsoftwarebyid) - Creates new licensed software by ID
* [deleteLicensedSoftwareById](docs/sdks/licensedsoftware/README.md#deletelicensedsoftwarebyid) - Deletes licensed software by ID
* [deleteLicensedSoftwareByName](docs/sdks/licensedsoftware/README.md#deletelicensedsoftwarebyname) - Deletes licensed software by name
* [findLicensedSoftware](docs/sdks/licensedsoftware/README.md#findlicensedsoftware) - Finds all licensed software
* [findLicensedSoftwareById](docs/sdks/licensedsoftware/README.md#findlicensedsoftwarebyid) - Finds licensed software by ID
* [findLicensedSoftwareByName](docs/sdks/licensedsoftware/README.md#findlicensedsoftwarebyname) - Finds licensed software by name
* [updateLicensedSoftwareById](docs/sdks/licensedsoftware/README.md#updatelicensedsoftwarebyid) - Updates existing licensed software by ID
* [updateLicensedSoftwareByName](docs/sdks/licensedsoftware/README.md#updatelicensedsoftwarebyname) - Updates an existing licensed software by name

### [logflush](docs/sdks/logflush/README.md)

* [createLogFlushForInterval](docs/sdks/logflush/README.md#createlogflushforinterval) - Flushes all logs for a given interval
* [createLogFlushWithIdAndInterval](docs/sdks/logflush/README.md#createlogflushwithidandinterval) - Flushes a single log for a given interval
* [logFlush](docs/sdks/logflush/README.md#logflush) - Flushes a log specified in an XML file

### [macapplications](docs/sdks/macapplications/README.md)

* [createMacappById](docs/sdks/macapplications/README.md#createmacappbyid) - Creates a new mac application by ID
* [deleteMacappById](docs/sdks/macapplications/README.md#deletemacappbyid) - Deletes a mac application by ID
* [deleteMacappByName](docs/sdks/macapplications/README.md#deletemacappbyname) - Deletes a mac application by name
* [findMacapps](docs/sdks/macapplications/README.md#findmacapps) - Finds all mac applications
* [findMacappsById](docs/sdks/macapplications/README.md#findmacappsbyid) - Finds mac applications by ID
* [findMacappsByIdSubset](docs/sdks/macapplications/README.md#findmacappsbyidsubset) - Finds a subset of date for a mac application by ID
* [findMacappsByName](docs/sdks/macapplications/README.md#findmacappsbyname) - Finds mac applications by name
* [findMacappsByNameSubset](docs/sdks/macapplications/README.md#findmacappsbynamesubset) - Finds a subset of data for mac applications by name
* [updateMacappById](docs/sdks/macapplications/README.md#updatemacappbyid) - Updates an existing mac application by ID
* [updateMacappByName](docs/sdks/macapplications/README.md#updatemacappbyname) - Updates an existing mac application by name

### [managedpreferenceprofiles](docs/sdks/managedpreferenceprofiles/README.md)

* [createManagedPreferenceProfileById](docs/sdks/managedpreferenceprofiles/README.md#createmanagedpreferenceprofilebyid) - Creates a new managed preference profile by ID
* [deleteManagedPreferenceProfilesById](docs/sdks/managedpreferenceprofiles/README.md#deletemanagedpreferenceprofilesbyid) - Deletes a managed preference profiles by ID
* [deleteManagedPreferenceProfilesByName](docs/sdks/managedpreferenceprofiles/README.md#deletemanagedpreferenceprofilesbyname) - Deletes a managed preference profiles by name
* [findManagedPreferenceProfiles](docs/sdks/managedpreferenceprofiles/README.md#findmanagedpreferenceprofiles) - Finds all managed preference profiles
* [findManagedPreferenceProfilesById](docs/sdks/managedpreferenceprofiles/README.md#findmanagedpreferenceprofilesbyid) - Finds managed preference profiles by ID
* [findManagedPreferenceProfilesByIdSubset](docs/sdks/managedpreferenceprofiles/README.md#findmanagedpreferenceprofilesbyidsubset) - Finds a subset of data for a managed preference profile by ID
* [findManagedPreferenceProfilesByName](docs/sdks/managedpreferenceprofiles/README.md#findmanagedpreferenceprofilesbyname) - Finds managed preference profiles by name
* [findManagedPreferenceProfilesByNameSubset](docs/sdks/managedpreferenceprofiles/README.md#findmanagedpreferenceprofilesbynamesubset) - Finds a subset of data for managed preference profiles by name
* [updateManagedPreferenceProfilesById](docs/sdks/managedpreferenceprofiles/README.md#updatemanagedpreferenceprofilesbyid) - Updates an existing managed preference profiles by ID
* [updateManagedPreferenceProfilesByName](docs/sdks/managedpreferenceprofiles/README.md#updatemanagedpreferenceprofilesbyname) - Updates an existing managed preference profiles by name

### [mobiledeviceapplications](docs/sdks/mobiledeviceapplications/README.md)

* [createMobileDeviceApplicationById](docs/sdks/mobiledeviceapplications/README.md#createmobiledeviceapplicationbyid) - Creates a new mobile device application by ID
* [deleteMobileDeviceApplicationByBundleID](docs/sdks/mobiledeviceapplications/README.md#deletemobiledeviceapplicationbybundleid) - Deletes a mobile device application by bundle ID
* [deleteMobileDeviceApplicationByBundleIDandVersion](docs/sdks/mobiledeviceapplications/README.md#deletemobiledeviceapplicationbybundleidandversion) - Deletes a mobile device application by bundle ID and version
* [deleteMobileDeviceApplicationById](docs/sdks/mobiledeviceapplications/README.md#deletemobiledeviceapplicationbyid) - Deletes a mobile device application by ID
* [deleteMobileDeviceApplicationByName](docs/sdks/mobiledeviceapplications/README.md#deletemobiledeviceapplicationbyname) - Deletes a mobile device application by name
* [findMobileDeviceApplications](docs/sdks/mobiledeviceapplications/README.md#findmobiledeviceapplications) - Finds all mobile device applications
* [findMobileDeviceApplicationsByBundleID](docs/sdks/mobiledeviceapplications/README.md#findmobiledeviceapplicationsbybundleid) - Finds mobile device applications by bundle ID
* [findMobileDeviceApplicationsByBundleIDandVersion](docs/sdks/mobiledeviceapplications/README.md#findmobiledeviceapplicationsbybundleidandversion) - Finds mobile device applications by bundle ID and version
* [findMobileDeviceApplicationsById](docs/sdks/mobiledeviceapplications/README.md#findmobiledeviceapplicationsbyid) - Finds mobile device applications by ID
* [findMobileDeviceApplicationsByName](docs/sdks/mobiledeviceapplications/README.md#findmobiledeviceapplicationsbyname) - Finds mobile device applications by name
* [findMobileDeviceApplicationsByNameSubset](docs/sdks/mobiledeviceapplications/README.md#findmobiledeviceapplicationsbynamesubset) - Finds a subset of data for mobile device applications by name
* [findMobileDeviceAppsByIdSubset](docs/sdks/mobiledeviceapplications/README.md#findmobiledeviceappsbyidsubset) - Finds a subset of data for a mobile device application by ID
* [updateMobileDeviceApplicationByBundleID](docs/sdks/mobiledeviceapplications/README.md#updatemobiledeviceapplicationbybundleid) - Updates an existing mobile device application by bundle ID
* [updateMobileDeviceApplicationByBundleIDandVersion](docs/sdks/mobiledeviceapplications/README.md#updatemobiledeviceapplicationbybundleidandversion) - Updates an existing mobile device application by bundle ID and version
* [updateMobileDeviceApplicationById](docs/sdks/mobiledeviceapplications/README.md#updatemobiledeviceapplicationbyid) - Updates an existing mobile device application by ID
* [updateMobileDeviceApplicationByName](docs/sdks/mobiledeviceapplications/README.md#updatemobiledeviceapplicationbyname) - Updates an existing mobile device application by name

### [mobiledevicecommands](docs/sdks/mobiledevicecommands/README.md)

* [createMobileDeviceCommand](docs/sdks/mobiledevicecommands/README.md#createmobiledevicecommand) - Creates a new mobile device command
* [createMobileDeviceCommandURL](docs/sdks/mobiledevicecommands/README.md#createmobiledevicecommandurl) - Creates a new mobile device command
* [createMobileDeviceLockCommandURL](docs/sdks/mobiledevicecommands/README.md#createmobiledevicelockcommandurl) - Sends a new lock command to a list of mobile devices
* [createMobileDeviceNameCommandURL](docs/sdks/mobiledevicecommands/README.md#createmobiledevicenamecommandurl) - Creates a new command to set the name of a mobile device.
* [createMobileScheduleOSUpdateCommandURL](docs/sdks/mobiledevicecommands/README.md#createmobilescheduleosupdatecommandurl) - Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Device will be updated to the latest OS version based on device eligibility. (deprecated on 2022-10-17)
* [createMobileScheduleOSUpdateCommandWithProductVersionURL](docs/sdks/mobiledevicecommands/README.md#createmobilescheduleosupdatecommandwithproductversionurl) - Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Mixing iOS and tvOS devices in ID list is not advised, as product version is specific to OS type. (deprecated on 2022-10-17)
* [findMobileDeviceCommands](docs/sdks/mobiledevicecommands/README.md#findmobiledevicecommands) - Finds all mobile device commands
* [findMobileDeviceCommandsByCommand](docs/sdks/mobiledevicecommands/README.md#findmobiledevicecommandsbycommand) - Finds all mobile device commands for specified command
* [findMobileDeviceCommandsByName](docs/sdks/mobiledevicecommands/README.md#findmobiledevicecommandsbyname) - Finds all mobile device commands by command name
* [findMobileDeviceCommandsByUuid](docs/sdks/mobiledevicecommands/README.md#findmobiledevicecommandsbyuuid) - Finds a mobile device command by UUID

### [mobiledeviceconfigurationprofiles](docs/sdks/mobiledeviceconfigurationprofiles/README.md)

* [createMobileDeviceConfigurationProfileById](docs/sdks/mobiledeviceconfigurationprofiles/README.md#createmobiledeviceconfigurationprofilebyid) - Creates a new mobile device configuration profile by ID
* [deleteMobileDeviceConfigurationProfileById](docs/sdks/mobiledeviceconfigurationprofiles/README.md#deletemobiledeviceconfigurationprofilebyid) - Deletes a mobile device configuration profile by ID
* [deleteMobileDeviceConfigurationProfileByName](docs/sdks/mobiledeviceconfigurationprofiles/README.md#deletemobiledeviceconfigurationprofilebyname) - Deletes a mobile device configuration profile by name
* [findMobileDeviceConfigurationProfiles](docs/sdks/mobiledeviceconfigurationprofiles/README.md#findmobiledeviceconfigurationprofiles) - Finds all mobile device configuration profiles
* [findMobileDeviceConfigurationProfilesById](docs/sdks/mobiledeviceconfigurationprofiles/README.md#findmobiledeviceconfigurationprofilesbyid) - Finds mobile device configuration profiles by ID
* [findMobileDeviceConfigurationProfilesByIdSubset](docs/sdks/mobiledeviceconfigurationprofiles/README.md#findmobiledeviceconfigurationprofilesbyidsubset) - Finds a subset of data for a mobile device configuration profile by ID
* [findMobileDeviceConfigurationProfilesByName](docs/sdks/mobiledeviceconfigurationprofiles/README.md#findmobiledeviceconfigurationprofilesbyname) - Finds mobile device configuration profiles by name
* [findMobileDeviceConfigurationProfilesByNameSubset](docs/sdks/mobiledeviceconfigurationprofiles/README.md#findmobiledeviceconfigurationprofilesbynamesubset) - Finds a subset of data for mobile device configuration profiles by name
* [updateMobileDeviceConfigurationProfileById](docs/sdks/mobiledeviceconfigurationprofiles/README.md#updatemobiledeviceconfigurationprofilebyid) - Updates an existing mobile device configuration profile by ID
* [updateMobileDeviceConfigurationProfileByName](docs/sdks/mobiledeviceconfigurationprofiles/README.md#updatemobiledeviceconfigurationprofilebyname) - Updates an existing mobile device configuration profile by name

### [mobiledeviceenrollmentprofiles](docs/sdks/mobiledeviceenrollmentprofiles/README.md)

* [createMobileDeviceEnrollmentProfilesById](docs/sdks/mobiledeviceenrollmentprofiles/README.md#createmobiledeviceenrollmentprofilesbyid) - Creates a new mobile device enrollment profile by ID
* [deleteMobileDeviceEnrollmentProfileById](docs/sdks/mobiledeviceenrollmentprofiles/README.md#deletemobiledeviceenrollmentprofilebyid) - Deletes a mobile device enrollment profile by ID
* [deleteMobileDeviceEnrollmentProfileByInvitation](docs/sdks/mobiledeviceenrollmentprofiles/README.md#deletemobiledeviceenrollmentprofilebyinvitation) - Deletes a mobile device enrollment profile by invitation
* [deleteMobileDeviceEnrollmentProfileByName](docs/sdks/mobiledeviceenrollmentprofiles/README.md#deletemobiledeviceenrollmentprofilebyname) - Deletes a mobile device enrollment profile by name
* [findMobileDeviceEnrollmentProfiles](docs/sdks/mobiledeviceenrollmentprofiles/README.md#findmobiledeviceenrollmentprofiles) - Finds all mobile device enrollment profiles
* [findMobileDeviceEnrollmentProfilesById](docs/sdks/mobiledeviceenrollmentprofiles/README.md#findmobiledeviceenrollmentprofilesbyid) - Finds mobile device enrollment profiles by ID
* [findMobileDeviceEnrollmentProfilesByIdSubset](docs/sdks/mobiledeviceenrollmentprofiles/README.md#findmobiledeviceenrollmentprofilesbyidsubset) - Finds a subset of data for an enrollment profile
* [findMobileDeviceEnrollmentProfilesByInvitation](docs/sdks/mobiledeviceenrollmentprofiles/README.md#findmobiledeviceenrollmentprofilesbyinvitation) - Finds mobile device enrollment profiles by invitation
* [findMobileDeviceEnrollmentProfilesByName](docs/sdks/mobiledeviceenrollmentprofiles/README.md#findmobiledeviceenrollmentprofilesbyname) - Finds mobile device enrollment profiles by name
* [findMobileDeviceEnrollmentProfilesByNameSubset](docs/sdks/mobiledeviceenrollmentprofiles/README.md#findmobiledeviceenrollmentprofilesbynamesubset) - Finds a subset of data for mobile device enrollment profiles by name
* [updateMobileDeviceEnrollmentProfileById](docs/sdks/mobiledeviceenrollmentprofiles/README.md#updatemobiledeviceenrollmentprofilebyid) - Updates an existing mobile device enrollment profile by ID
* [updateMobileDeviceEnrollmentProfileByInvitation](docs/sdks/mobiledeviceenrollmentprofiles/README.md#updatemobiledeviceenrollmentprofilebyinvitation) - Updates an existing mobile device enrollment profile by invitation
* [updateMobileDeviceEnrollmentProfileByName](docs/sdks/mobiledeviceenrollmentprofiles/README.md#updatemobiledeviceenrollmentprofilebyname) - Updates an existing mobile device enrollment profile by name

### [mobiledeviceextensionattributes](docs/sdks/mobiledeviceextensionattributes/README.md)

* [createMobiledeviceextensionattributeById](docs/sdks/mobiledeviceextensionattributes/README.md#createmobiledeviceextensionattributebyid) - Creates a new mobile device extension attribute by ID
* [deleteMobiledeviceextensionattributeById](docs/sdks/mobiledeviceextensionattributes/README.md#deletemobiledeviceextensionattributebyid) - Deletes a mobile device extension attribute by ID
* [deleteMobiledeviceextensionattributeByName](docs/sdks/mobiledeviceextensionattributes/README.md#deletemobiledeviceextensionattributebyname) - Deletes a mobile device extension attribute by name
* [findMobiledeviceextensionattributes](docs/sdks/mobiledeviceextensionattributes/README.md#findmobiledeviceextensionattributes) - Finds all mobile device extension attributes
* [findMobiledeviceextensionattributesById](docs/sdks/mobiledeviceextensionattributes/README.md#findmobiledeviceextensionattributesbyid) - Finds mobile device extension attributes by ID
* [findMobiledeviceextensionattributesByName](docs/sdks/mobiledeviceextensionattributes/README.md#findmobiledeviceextensionattributesbyname) - Finds mobiledeviceextensionattributes by name
* [updateMobiledeviceextensionattributeById](docs/sdks/mobiledeviceextensionattributes/README.md#updatemobiledeviceextensionattributebyid) - Updates an existing mobile device extension attribute by ID
* [updateMobiledeviceextensionattributeByName](docs/sdks/mobiledeviceextensionattributes/README.md#updatemobiledeviceextensionattributebyname) - Updates an existing mobile device extension attribute by name

### [mobiledevicegroups](docs/sdks/mobiledevicegroups/README.md)

* [createMobileDeviceGroupById](docs/sdks/mobiledevicegroups/README.md#createmobiledevicegroupbyid) - Creates a new mobile device group by ID
* [deleteMobileDeviceGroupById](docs/sdks/mobiledevicegroups/README.md#deletemobiledevicegroupbyid) - Deletes a mobile device group by ID
* [deleteMobileDeviceGroupByName](docs/sdks/mobiledevicegroups/README.md#deletemobiledevicegroupbyname) - Deletes a mobile device group by name
* [findMobileDeviceGroups](docs/sdks/mobiledevicegroups/README.md#findmobiledevicegroups) - Finds all mobile device groups
* [findMobileDeviceGroupsById](docs/sdks/mobiledevicegroups/README.md#findmobiledevicegroupsbyid) - Finds mobile device groups by ID
* [findMobileDeviceGroupsByName](docs/sdks/mobiledevicegroups/README.md#findmobiledevicegroupsbyname) - Finds mobile device groups by name
* [updateMobileDeviceGroupById](docs/sdks/mobiledevicegroups/README.md#updatemobiledevicegroupbyid) - Updates an existing mobile device group by ID
* [updateMobileDeviceGroupByName](docs/sdks/mobiledevicegroups/README.md#updatemobiledevicegroupbyname) - Updates an existing mobile device group by name

### [mobiledevicehistory](docs/sdks/mobiledevicehistory/README.md)

* [findMobileDeviceHistoryById](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybyid) - Finds mobile device history by ID
* [findMobileDeviceHistoryByIdSubset](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybyidsubset) - finds a subset of data for a mobile device history
* [findMobileDeviceHistoryByMacAddress](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybymacaddress) - Finds mobile device history by wifi mac address
* [findMobileDeviceHistoryByMacAddressSubset](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybymacaddresssubset) - Finds a subset of data for mobile device history by wifi mac address
* [findMobileDeviceHistoryByName](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybyname) - Finds mobile device history by name
* [findMobileDeviceHistoryByNameSubset](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybynamesubset) - Finds a subset of data for mobile device history by name
* [findMobileDeviceHistoryBySerialNumber](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybyserialnumber) - Finds mobile device history by serial number
* [findMobileDeviceHistoryBySerialNumberSubset](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybyserialnumbersubset) - Finds a subset of data for mobile device history by serial number
* [findMobileDeviceHistoryByUDID](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybyudid) - Finds mobile device history by UDID
* [findMobileDeviceHistoryByUDIDSubset](docs/sdks/mobiledevicehistory/README.md#findmobiledevicehistorybyudidsubset) - Finds a subset of data for mobile device history by UDID

### [mobiledeviceinvitations](docs/sdks/mobiledeviceinvitations/README.md)

* [createMobileDeviceInvitationsById](docs/sdks/mobiledeviceinvitations/README.md#createmobiledeviceinvitationsbyid) - Creates a new mobile device invitation by id
* [createMobileDeviceInvitationsByInvitation](docs/sdks/mobiledeviceinvitations/README.md#createmobiledeviceinvitationsbyinvitation) - Creates a new mobile device invitation by invitation
* [deleteMobileDeviceInvitationById](docs/sdks/mobiledeviceinvitations/README.md#deletemobiledeviceinvitationbyid) - Deletes a mobile device invitation by id
* [deleteMobileDeviceInvitationByInvitation](docs/sdks/mobiledeviceinvitations/README.md#deletemobiledeviceinvitationbyinvitation) - Deletes a mobile device invitation by invitation
* [findMobileDeviceInvitations](docs/sdks/mobiledeviceinvitations/README.md#findmobiledeviceinvitations) - Finds all mobile device invitations
* [findMobileDeviceInvitationsById](docs/sdks/mobiledeviceinvitations/README.md#findmobiledeviceinvitationsbyid) - Finds mobile device invitations by id
* [findMobileDeviceInvitationsByInvitation](docs/sdks/mobiledeviceinvitations/README.md#findmobiledeviceinvitationsbyinvitation) - Finds mobile device invitations by invitation

### [mobiledeviceprovisioningprofiles](docs/sdks/mobiledeviceprovisioningprofiles/README.md)

* [createMobileDeviceProvisioningProfilesById](docs/sdks/mobiledeviceprovisioningprofiles/README.md#createmobiledeviceprovisioningprofilesbyid) - Creates a mobile device provisioning profiles by id
* [createMobileDeviceProvisioningProfilesByName](docs/sdks/mobiledeviceprovisioningprofiles/README.md#createmobiledeviceprovisioningprofilesbyname) - Creates a mobile device provisioning profiles by name
* [createMobileDeviceProvisioningProfilesByUUID](docs/sdks/mobiledeviceprovisioningprofiles/README.md#createmobiledeviceprovisioningprofilesbyuuid) - Creates a mobile device provisioning profiles by uuid
* [deleteMobileDeviceProvisioningProfilesById](docs/sdks/mobiledeviceprovisioningprofiles/README.md#deletemobiledeviceprovisioningprofilesbyid) - Deletes a mobile device provisioning profiles by id
* [deleteMobileDeviceProvisioningProfilesByName](docs/sdks/mobiledeviceprovisioningprofiles/README.md#deletemobiledeviceprovisioningprofilesbyname) - Deletes a mobile device provisioning profiles by name
* [deleteMobileDeviceProvisioningProfilesByUUID](docs/sdks/mobiledeviceprovisioningprofiles/README.md#deletemobiledeviceprovisioningprofilesbyuuid) - Deletes a mobile device provisioning profiles by uuid
* [findMobileDeviceProvisioningProfiles](docs/sdks/mobiledeviceprovisioningprofiles/README.md#findmobiledeviceprovisioningprofiles) - Finds all mobile device provisioning profiles
* [findMobileDeviceProvisioningProfilesById](docs/sdks/mobiledeviceprovisioningprofiles/README.md#findmobiledeviceprovisioningprofilesbyid) - Finds a mobile device provisioning profiles by id
* [findMobileDeviceProvisioningProfilesByName](docs/sdks/mobiledeviceprovisioningprofiles/README.md#findmobiledeviceprovisioningprofilesbyname) - Finds a mobile device provisioning profiles by name
* [findMobileDeviceProvisioningProfilesByUUID](docs/sdks/mobiledeviceprovisioningprofiles/README.md#findmobiledeviceprovisioningprofilesbyuuid) - Finds a mobile device provisioning profiles by uuid
* [updateMobileDeviceProvisioningProfilesById](docs/sdks/mobiledeviceprovisioningprofiles/README.md#updatemobiledeviceprovisioningprofilesbyid) - Updates an existing mobile device provisioning profiles by id
* [updateMobileDeviceProvisioningProfilesByName](docs/sdks/mobiledeviceprovisioningprofiles/README.md#updatemobiledeviceprovisioningprofilesbyname) - Updates an existing mobile device provisioning profiles by name
* [updateMobileDeviceProvisioningProfilesByUUID](docs/sdks/mobiledeviceprovisioningprofiles/README.md#updatemobiledeviceprovisioningprofilesbyuuid) - Updates an existing mobile device provisioning profiles by uuid

### [mobiledevices](docs/sdks/mobiledevices/README.md)

* [createMobileDeviceById](docs/sdks/mobiledevices/README.md#createmobiledevicebyid) - Creates a new mobile device by ID
* [deleteMobileDeviceById](docs/sdks/mobiledevices/README.md#deletemobiledevicebyid) - Deletes a mobile device by ID
* [deleteMobileDeviceByMacAddress](docs/sdks/mobiledevices/README.md#deletemobiledevicebymacaddress) - Deletes a mobile device by Mac address
* [deleteMobileDeviceByName](docs/sdks/mobiledevices/README.md#deletemobiledevicebyname) - Deletes a mobile device by name
* [deleteMobileDeviceBySerialNumber](docs/sdks/mobiledevices/README.md#deletemobiledevicebyserialnumber) - Deletes a mobile device by serial number
* [deleteMobileDeviceByUDID](docs/sdks/mobiledevices/README.md#deletemobiledevicebyudid) - Deletes a mobile device by UDID
* [findMobileDevices](docs/sdks/mobiledevices/README.md#findmobiledevices) - Finds all mobile devices
* [findMobileDevicesById](docs/sdks/mobiledevices/README.md#findmobiledevicesbyid) - Finds mobile devices by ID
* [findMobileDevicesByIdSubset](docs/sdks/mobiledevices/README.md#findmobiledevicesbyidsubset) - Finds a subset of data for a mobile device
* [findMobileDevicesByMacAddress](docs/sdks/mobiledevices/README.md#findmobiledevicesbymacaddress) - Finds mobile devices by Mac address
* [findMobileDevicesByMacAddressSubset](docs/sdks/mobiledevices/README.md#findmobiledevicesbymacaddresssubset) - Finds a subset of data for mobile devices by Mac address
* [findMobileDevicesByName](docs/sdks/mobiledevices/README.md#findmobiledevicesbyname) - Finds mobile devices by name
* [findMobileDevicesByNameSubset](docs/sdks/mobiledevices/README.md#findmobiledevicesbynamesubset) - Finds a subset of data for mobile devices by name
* [findMobileDevicesBySerialNumber](docs/sdks/mobiledevices/README.md#findmobiledevicesbyserialnumber) - Finds mobile devices by serial number
* [findMobileDevicesBySerialNumberSubset](docs/sdks/mobiledevices/README.md#findmobiledevicesbyserialnumbersubset) - Finds a subset of data for mobile devices by serial number
* [findMobileDevicesByUDID](docs/sdks/mobiledevices/README.md#findmobiledevicesbyudid) - Finds mobile devices by UDID
* [findMobileDevicesByUDIDSubset](docs/sdks/mobiledevices/README.md#findmobiledevicesbyudidsubset) - Finds a subset of data for mobile devices by UDID
* [matchMobileDevices](docs/sdks/mobiledevices/README.md#matchmobiledevices) - Searches for mobile devices that match the provided parameter
* [updateMobileDeviceById](docs/sdks/mobiledevices/README.md#updatemobiledevicebyid) - Updates an existing mobile device by ID
* [updateMobileDeviceByMacAddress](docs/sdks/mobiledevices/README.md#updatemobiledevicebymacaddress) - Updates an existing mobile device by Mac address
* [updateMobileDeviceByName](docs/sdks/mobiledevices/README.md#updatemobiledevicebyname) - Updates an existing mobile device by name
* [updateMobileDeviceBySerialNumber](docs/sdks/mobiledevices/README.md#updatemobiledevicebyserialnumber) - Updates an existing mobile device by serial number
* [updateMobileDeviceByUDID](docs/sdks/mobiledevices/README.md#updatemobiledevicebyudid) - Updates an existing mobile device by UDID

### [networksegments](docs/sdks/networksegments/README.md)

* [createNetworkSegmentById](docs/sdks/networksegments/README.md#createnetworksegmentbyid) - Creates a new network segment by ID
* [deleteNetworkSegmentById](docs/sdks/networksegments/README.md#deletenetworksegmentbyid) - Deletes a network segment by ID
* [deleteNetworkSegmentByName](docs/sdks/networksegments/README.md#deletenetworksegmentbyname) - Deletes a network segment by name
* [findNetworkSegments](docs/sdks/networksegments/README.md#findnetworksegments) - Finds all network segments
* [findNetworkSegmentsById](docs/sdks/networksegments/README.md#findnetworksegmentsbyid) - Finds network segments by ID
* [findNetworkSegmentsByName](docs/sdks/networksegments/README.md#findnetworksegmentsbyname) - Finds network segments by name
* [updateNetworkSegmentById](docs/sdks/networksegments/README.md#updatenetworksegmentbyid) - Updates an existing network segment by ID
* [updateNetworkSegmentByName](docs/sdks/networksegments/README.md#updatenetworksegmentbyname) - Updates an existing network segment by name

### [osxconfigurationprofiles](docs/sdks/osxconfigurationprofiles/README.md)

* [createOsxConfigurationProfileById](docs/sdks/osxconfigurationprofiles/README.md#createosxconfigurationprofilebyid) - Creates a new OS X configuration profile by ID
* [deleteOsxConfigurationProfileById](docs/sdks/osxconfigurationprofiles/README.md#deleteosxconfigurationprofilebyid) - Deletes a OS X configuration profile by ID
* [deleteOsxConfigurationProfileByName](docs/sdks/osxconfigurationprofiles/README.md#deleteosxconfigurationprofilebyname) - Deletes a OS X configuration profile by name
* [findOsxConfigurationProfiles](docs/sdks/osxconfigurationprofiles/README.md#findosxconfigurationprofiles) - Finds all OS X configuration profiles
* [findOsxConfigurationProfilesById](docs/sdks/osxconfigurationprofiles/README.md#findosxconfigurationprofilesbyid) - Finds OS X configuration profiles by ID
* [findOsxConfigurationProfilesByIdSubset](docs/sdks/osxconfigurationprofiles/README.md#findosxconfigurationprofilesbyidsubset) - Finds a subset of data for an OS X configuration profile
* [findOsxConfigurationProfilesByName](docs/sdks/osxconfigurationprofiles/README.md#findosxconfigurationprofilesbyname) - Finds OS X configuration profiles by name
* [findOsxConfigurationProfilesByNameSubset](docs/sdks/osxconfigurationprofiles/README.md#findosxconfigurationprofilesbynamesubset) - Finds a subset of data for OS X configuration profiles by name
* [updateOsxConfigurationProfileById](docs/sdks/osxconfigurationprofiles/README.md#updateosxconfigurationprofilebyid) - Updates an existing OS X configuration profile by ID
* [updateOsxConfigurationProfileByName](docs/sdks/osxconfigurationprofiles/README.md#updateosxconfigurationprofilebyname) - Updates an existing OS X configuration profile by name

### [packages](docs/sdks/packages/README.md)

* [createPackageById](docs/sdks/packages/README.md#createpackagebyid) - Creates a new package by ID
* [deletePackageById](docs/sdks/packages/README.md#deletepackagebyid) - Deletes a package by ID
* [deletePackageByName](docs/sdks/packages/README.md#deletepackagebyname) - Deletes a package by name
* [findPackages](docs/sdks/packages/README.md#findpackages) - Finds all packages
* [findPackagesById](docs/sdks/packages/README.md#findpackagesbyid) - Finds packages by ID
* [findPackagesByName](docs/sdks/packages/README.md#findpackagesbyname) - Finds packages by name
* [updatePackageById](docs/sdks/packages/README.md#updatepackagebyid) - Updates an existing package by ID
* [updatePackageByName](docs/sdks/packages/README.md#updatepackagebyname) - Updates an existing package by name

### [patchavailabletitles](docs/sdks/patchavailabletitles/README.md)

* [patchavailabletitlesSourceidByIdGet](docs/sdks/patchavailabletitles/README.md#patchavailabletitlessourceidbyidget) - Finds all available title from a source by ID

### [patches](docs/sdks/patches/README.md)

* [~~createPatchSoftwareTitlesById~~](docs/sdks/patches/README.md#createpatchsoftwaretitlesbyid) - Creates a patch software title (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**
* [~~deleteSoftwareTitlesById~~](docs/sdks/patches/README.md#deletesoftwaretitlesbyid) - Deletes a Patch Software Title by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~deleteSoftwareTitlesByName~~](docs/sdks/patches/README.md#deletesoftwaretitlesbyname) - Deletes a Patch Software Title by name (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**
* [~~findComputersByIDAndTitleVersion~~](docs/sdks/patches/README.md#findcomputersbyidandtitleversion) - Display computers on a specific version (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/definitions".) :warning: **Deprecated**
* [~~findComputersByNameAndTitleVersion~~](docs/sdks/patches/README.md#findcomputersbynameandtitleversion) - Display computers on a specific version (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**
* [~~findPatches~~](docs/sdks/patches/README.md#findpatches) - Finds all patches (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations". :warning: **Deprecated**
* [~~findPatchesById~~](docs/sdks/patches/README.md#findpatchesbyid) - Finds patches by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~findPatchesByName~~](docs/sdks/patches/README.md#findpatchesbyname) - Finds the first patch with the name provided (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~updateSoftwareTitlesById~~](docs/sdks/patches/README.md#updatesoftwaretitlesbyid) - Updates a Patch Software Title by ID (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}".) :warning: **Deprecated**
* [~~updateSoftwareTitlesByName~~](docs/sdks/patches/README.md#updatesoftwaretitlesbyname) - Updates a Patch Software Title by name (Deprecated - Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations".) :warning: **Deprecated**

### [patchexternalsources](docs/sdks/patchexternalsources/README.md)

* [createPatchExternalSourcesById](docs/sdks/patchexternalsources/README.md#createpatchexternalsourcesbyid) - Create a new patch external source by ID
* [createPatchExternalSourcesByName](docs/sdks/patchexternalsources/README.md#createpatchexternalsourcesbyname) - Create a new patch external source by name
* [deletePatchExternalSourcesById](docs/sdks/patchexternalsources/README.md#deletepatchexternalsourcesbyid) - Deletes a patch external source by ID
* [findPatchExternalSources](docs/sdks/patchexternalsources/README.md#findpatchexternalsources) - Finds all patch external sources
* [findPatchExternalSourcesById](docs/sdks/patchexternalsources/README.md#findpatchexternalsourcesbyid) - Finds a patch external source by ID
* [findPatchExternalSourcesByName](docs/sdks/patchexternalsources/README.md#findpatchexternalsourcesbyname) - Finds the first patch external source with the name provided
* [updatePatchExternalSourcesById](docs/sdks/patchexternalsources/README.md#updatepatchexternalsourcesbyid) - Updates a patch external source by ID
* [updatePatchExternalSourcesByName](docs/sdks/patchexternalsources/README.md#updatepatchexternalsourcesbyname) - Updates a patch external source by name

### [patchinternalsources](docs/sdks/patchinternalsources/README.md)

* [findPatchInternalSources](docs/sdks/patchinternalsources/README.md#findpatchinternalsources) - Finds all patch internal sources
* [findPatchInternalSourcesById](docs/sdks/patchinternalsources/README.md#findpatchinternalsourcesbyid) - Finds a patch internal source by ID
* [findPatchInternalSourcesByName](docs/sdks/patchinternalsources/README.md#findpatchinternalsourcesbyname) - Finds the first patch internal source with the name provided

### [patchpolicies](docs/sdks/patchpolicies/README.md)

* [createPatchPolicyBySoftwareTitleConfigId](docs/sdks/patchpolicies/README.md#createpatchpolicybysoftwaretitleconfigid) - Create a new patch policy associated with a patch software title configuration ID
* [deletePatchPolicyById](docs/sdks/patchpolicies/README.md#deletepatchpolicybyid) - Deletes a patch policy by ID
* [~~findPatchPolicies~~](docs/sdks/patchpolicies/README.md#findpatchpolicies) - Finds all patch policies. (Deprecated). Please transition use to Jamf Pro API endpoint "/v2/patch-policies". :warning: **Deprecated**
* [findPatchPoliciesByIdSubset](docs/sdks/patchpolicies/README.md#findpatchpoliciesbyidsubset) - Display subsets of information for a patch policy
* [~~findPatchPoliciesBySoftwareTitleConfigId~~](docs/sdks/patchpolicies/README.md#findpatchpoliciesbysoftwaretitleconfigid) - Finds all patch policies by patch software title configuration ID (Deprecated). Please transition use to Jamf Pro API endpoint "/v2/patch-policies". :warning: **Deprecated**
* [findPatchPolicyById](docs/sdks/patchpolicies/README.md#findpatchpolicybyid) - Finds a patch policy by ID
* [updatePatchPolicyById](docs/sdks/patchpolicies/README.md#updatepatchpolicybyid) - Updates an existing patch policy by ID

### [patchreports](docs/sdks/patchreports/README.md)

* [~~patchreportsPatchsoftwaretitleidByIdGet~~](docs/sdks/patchreports/README.md#patchreportspatchsoftwaretitleidbyidget) - Finds patch reports by patch software title ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report". :warning: **Deprecated**
* [~~patchreportsPatchsoftwaretitleidVersionByIdAndVersionGet~~](docs/sdks/patchreports/README.md#patchreportspatchsoftwaretitleidversionbyidandversionget) - Display computers for a specific version of a patch report. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}/patch-report". :warning: **Deprecated**

### [patchsoftwaretitles](docs/sdks/patchsoftwaretitles/README.md)

* [~~patchsoftwaretitlesGet~~](docs/sdks/patchsoftwaretitles/README.md#patchsoftwaretitlesget) - Finds all patch software titles. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdDelete~~](docs/sdks/patchsoftwaretitles/README.md#patchsoftwaretitlesidbyiddelete) - Deletes a patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdGet~~](docs/sdks/patchsoftwaretitles/README.md#patchsoftwaretitlesidbyidget) - Finds a patch software titles by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdPost~~](docs/sdks/patchsoftwaretitles/README.md#patchsoftwaretitlesidbyidpost) - Creates new patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**
* [~~patchsoftwaretitlesIdByIdPut~~](docs/sdks/patchsoftwaretitles/README.md#patchsoftwaretitlesidbyidput) - Updates a patch software title by ID. (Deprecated) Please transition use to Jamf Pro API endpoint "/v2/patch-software-title-configurations/{id}". :warning: **Deprecated**

### [peripherals](docs/sdks/peripherals/README.md)

* [createPeripheralById](docs/sdks/peripherals/README.md#createperipheralbyid) - Creates a new peripheral by ID
* [deletePeripheralById](docs/sdks/peripherals/README.md#deleteperipheralbyid) - Deletes a peripheral by ID
* [findPeripherals](docs/sdks/peripherals/README.md#findperipherals) - Finds all peripherals
* [findPeripheralsById](docs/sdks/peripherals/README.md#findperipheralsbyid) - Finds peripherals by ID
* [findPeripheralsByIdSubset](docs/sdks/peripherals/README.md#findperipheralsbyidsubset) - Finds a subset of data for a peripheral
* [updatePeripheralById](docs/sdks/peripherals/README.md#updateperipheralbyid) - Updates an existing peripheral by ID

### [peripheraltypes](docs/sdks/peripheraltypes/README.md)

* [createPeripheralTypeById](docs/sdks/peripheraltypes/README.md#createperipheraltypebyid) - Creates a new peripheral by ID
* [deletePeripheralTypeById](docs/sdks/peripheraltypes/README.md#deleteperipheraltypebyid) - Deletes a peripheral by ID
* [findPeripheralTypes](docs/sdks/peripheraltypes/README.md#findperipheraltypes) - Finds all peripheral types
* [findPeripheralTypesById](docs/sdks/peripheraltypes/README.md#findperipheraltypesbyid) - Finds peripheral types by ID
* [updatePeripheralTypeById](docs/sdks/peripheraltypes/README.md#updateperipheraltypebyid) - Updates an existing peripheral by ID

### [policies](docs/sdks/policies/README.md)

* [createPolicyById](docs/sdks/policies/README.md#createpolicybyid) - Creates a new policy by ID
* [deletePolicyById](docs/sdks/policies/README.md#deletepolicybyid) - Deletes a policy by ID
* [deletePolicyByName](docs/sdks/policies/README.md#deletepolicybyname) - Deletes a policy by name
* [findPolicies](docs/sdks/policies/README.md#findpolicies) - Finds all policies
* [findPoliciesByCategory](docs/sdks/policies/README.md#findpoliciesbycategory) - Finds all policies by category
* [findPoliciesById](docs/sdks/policies/README.md#findpoliciesbyid) - Finds policies by ID
* [findPoliciesByIdSubset](docs/sdks/policies/README.md#findpoliciesbyidsubset) - Finds a subset of data for a policy
* [findPoliciesByName](docs/sdks/policies/README.md#findpoliciesbyname) - Finds policies by name
* [findPoliciesByNameSubset](docs/sdks/policies/README.md#findpoliciesbynamesubset) - Finds a subset of data for policies by name
* [findPoliciesByType](docs/sdks/policies/README.md#findpoliciesbytype) - Finds all policies by type
* [updatePolicyById](docs/sdks/policies/README.md#updatepolicybyid) - Updates an existing policy by ID
* [updatePolicyByName](docs/sdks/policies/README.md#updatepolicybyname) - Updates an existing policy by name

### [printers](docs/sdks/printers/README.md)

* [createPrinterById](docs/sdks/printers/README.md#createprinterbyid) - Creates a new printer by ID
* [deletePrinterById](docs/sdks/printers/README.md#deleteprinterbyid) - Deletes a printer by ID
* [deletePrinterByName](docs/sdks/printers/README.md#deleteprinterbyname) - Deletes a printer by name
* [findPrinters](docs/sdks/printers/README.md#findprinters) - Finds all printers
* [findPrintersById](docs/sdks/printers/README.md#findprintersbyid) - Finds printers by ID
* [findPrintersByName](docs/sdks/printers/README.md#findprintersbyname) - Finds printers by name
* [updatePrinterById](docs/sdks/printers/README.md#updateprinterbyid) - Updates an existing printer by ID
* [updatePrinterByName](docs/sdks/printers/README.md#updateprinterbyname) - Updates an existing printer by name

### [removablemacaddresses](docs/sdks/removablemacaddresses/README.md)

* [createRemovableMacAddressById](docs/sdks/removablemacaddresses/README.md#createremovablemacaddressbyid) - Creates a new removable Mac address by ID
* [deleteRemovableMacAddressById](docs/sdks/removablemacaddresses/README.md#deleteremovablemacaddressbyid) - Deletes a removable Mac address by ID
* [deleteRemovableMacAddressByName](docs/sdks/removablemacaddresses/README.md#deleteremovablemacaddressbyname) - Deletes a removable Mac address by name
* [findRemovableMacAddresses](docs/sdks/removablemacaddresses/README.md#findremovablemacaddresses) - Finds all removable Mac addresses
* [findRemovableMacAddressesById](docs/sdks/removablemacaddresses/README.md#findremovablemacaddressesbyid) - Finds removable Mac addresses by ID
* [findRemovableMacAddressesByName](docs/sdks/removablemacaddresses/README.md#findremovablemacaddressesbyname) - Finds removable Mac addresses by name
* [updateRemovableMacAddressById](docs/sdks/removablemacaddresses/README.md#updateremovablemacaddressbyid) - Updates an existing removable Mac address by ID
* [updateRemovableMacAddressByName](docs/sdks/removablemacaddresses/README.md#updateremovablemacaddressbyname) - Updates an existing removable Mac address by name

### [restrictedsoftware](docs/sdks/restrictedsoftware/README.md)

* [createRestrictedSoftwareById](docs/sdks/restrictedsoftware/README.md#createrestrictedsoftwarebyid) - Creates a new restricted software by ID
* [deleteRestrictedSoftwareById](docs/sdks/restrictedsoftware/README.md#deleterestrictedsoftwarebyid) - Deletes a restricted software by ID
* [deleteRestrictedSoftwareByName](docs/sdks/restrictedsoftware/README.md#deleterestrictedsoftwarebyname) - Deletes a restricted software by name
* [findRestrictedSoftware](docs/sdks/restrictedsoftware/README.md#findrestrictedsoftware) - Finds all restricted software
* [findRestrictedSoftwareById](docs/sdks/restrictedsoftware/README.md#findrestrictedsoftwarebyid) - Finds restricted software by ID
* [findRestrictedSoftwareByName](docs/sdks/restrictedsoftware/README.md#findrestrictedsoftwarebyname) - Finds restricted software by name
* [updateRestrictedSoftwareById](docs/sdks/restrictedsoftware/README.md#updaterestrictedsoftwarebyid) - Updates an existing restricted software by ID
* [updateRestrictedSoftwareByName](docs/sdks/restrictedsoftware/README.md#updaterestrictedsoftwarebyname) - Updates an existing restricted software by name

### [savedsearches](docs/sdks/savedsearches/README.md)

* [~~savedsearchesGet~~](docs/sdks/savedsearches/README.md#savedsearchesget) - Finds all saved searches (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**
* [~~savedsearchesIdByIdGet~~](docs/sdks/savedsearches/README.md#savedsearchesidbyidget) - Finds saved searches by ID (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**
* [~~savedsearchesNameByNameGet~~](docs/sdks/savedsearches/README.md#savedsearchesnamebynameget) - Finds saved searches by name (Deprecated - use advancedcomputersearches, advancedmobiledevicesearches and advancedusersearches) :warning: **Deprecated**

### [scripts](docs/sdks/scripts/README.md)

* [createScriptById](docs/sdks/scripts/README.md#createscriptbyid) - Creates a new script by ID
* [deleteScriptById](docs/sdks/scripts/README.md#deletescriptbyid) - Deletes a script by ID
* [deleteScriptByName](docs/sdks/scripts/README.md#deletescriptbyname) - Deletes a script by name
* [findScripts](docs/sdks/scripts/README.md#findscripts) - Finds all scripts
* [findScriptsById](docs/sdks/scripts/README.md#findscriptsbyid) - Finds scripts by ID
* [findScriptsByName](docs/sdks/scripts/README.md#findscriptsbyname) - Finds scripts by name
* [updateScriptById](docs/sdks/scripts/README.md#updatescriptbyid) - Updates an existing script by ID
* [updateScriptByName](docs/sdks/scripts/README.md#updatescriptbyname) - Updates an existing script by name

### [sites](docs/sdks/sites/README.md)

* [createSiteById](docs/sdks/sites/README.md#createsitebyid) - Creates a new site by ID
* [deleteSiteById](docs/sdks/sites/README.md#deletesitebyid) - Deletes a site by ID
* [deleteSiteByName](docs/sdks/sites/README.md#deletesitebyname) - Deletes a site by name
* [findSites](docs/sdks/sites/README.md#findsites) - Finds all sites
* [findSitesById](docs/sdks/sites/README.md#findsitesbyid) - Finds sites by ID
* [findSitesByName](docs/sdks/sites/README.md#findsitesbyname) - Finds sites by name
* [updateSiteById](docs/sdks/sites/README.md#updatesitebyid) - Updates an existing site by ID
* [updateSiteByName](docs/sdks/sites/README.md#updatesitebyname) - Updates an existing site by name

### [smtpserver](docs/sdks/smtpserver/README.md)

* [findSMTPServer](docs/sdks/smtpserver/README.md#findsmtpserver) - Finds the Jamf Pro SMTP server information
* [updateSMTPServer](docs/sdks/smtpserver/README.md#updatesmtpserver) - Updates the Jamf Pro SMTP server information

### [softwareupdateservers](docs/sdks/softwareupdateservers/README.md)

* [createSoftwareUpdateServerById](docs/sdks/softwareupdateservers/README.md#createsoftwareupdateserverbyid) - Creates a new software update server by ID
* [deleteSoftwareUpdateServerById](docs/sdks/softwareupdateservers/README.md#deletesoftwareupdateserverbyid) - Deletes a software update server by ID
* [deleteSoftwareUpdateServerByName](docs/sdks/softwareupdateservers/README.md#deletesoftwareupdateserverbyname) - Deletes a software update server by name
* [findSoftwareUpdateServers](docs/sdks/softwareupdateservers/README.md#findsoftwareupdateservers) - Finds all software update servers
* [findSoftwareUpdateServersById](docs/sdks/softwareupdateservers/README.md#findsoftwareupdateserversbyid) - Finds software update servers by ID
* [findSoftwareUpdateServersByName](docs/sdks/softwareupdateservers/README.md#findsoftwareupdateserversbyname) - Finds software update servers by name
* [updateSoftwareUpdateServerById](docs/sdks/softwareupdateservers/README.md#updatesoftwareupdateserverbyid) - Updates an existing software update server by ID
* [updateSoftwareUpdateServerByName](docs/sdks/softwareupdateservers/README.md#updatesoftwareupdateserverbyname) - Updates an existing software update server by name

### [userextensionattributes](docs/sdks/userextensionattributes/README.md)

* [createUserextensionattributeById](docs/sdks/userextensionattributes/README.md#createuserextensionattributebyid) - Creates a new user extension attribute by ID
* [deleteUserextensionattributeById](docs/sdks/userextensionattributes/README.md#deleteuserextensionattributebyid) - Deletes a user extension attribute by ID
* [deleteUserextensionattributeByName](docs/sdks/userextensionattributes/README.md#deleteuserextensionattributebyname) - Deletes a user extension attribute by name
* [findUserextensionattributes](docs/sdks/userextensionattributes/README.md#finduserextensionattributes) - Finds all user extension attributes
* [findUserextensionattributesById](docs/sdks/userextensionattributes/README.md#finduserextensionattributesbyid) - Finds user extension attributes by ID
* [findUserextensionattributesByName](docs/sdks/userextensionattributes/README.md#finduserextensionattributesbyname) - Finds user extension attributes by name
* [updateUserextensionattributeById](docs/sdks/userextensionattributes/README.md#updateuserextensionattributebyid) - Updates an existing user extension attribute by ID
* [updateUserextensionattributeByName](docs/sdks/userextensionattributes/README.md#updateuserextensionattributebyname) - Updates an existing user extension attribute by name

### [usergroups](docs/sdks/usergroups/README.md)

* [createUserGroupsById](docs/sdks/usergroups/README.md#createusergroupsbyid) - Creates user groups by ID
* [deleteUserGroupsById](docs/sdks/usergroups/README.md#deleteusergroupsbyid) - Deletes user groups by ID
* [deleteUserGroupsByName](docs/sdks/usergroups/README.md#deleteusergroupsbyname) - Deletes user groups by name
* [findUserGroups](docs/sdks/usergroups/README.md#findusergroups) - Finds all user groups
* [findUserGroupsById](docs/sdks/usergroups/README.md#findusergroupsbyid) - Finds user groups by ID
* [findUserGroupsByName](docs/sdks/usergroups/README.md#findusergroupsbyname) - Finds user groups by name
* [updateUserGroupsById](docs/sdks/usergroups/README.md#updateusergroupsbyid) - Updates user groups by ID
* [updateUserGroupsByName](docs/sdks/usergroups/README.md#updateusergroupsbyname) - Updates user groups by name

### [users](docs/sdks/users/README.md)

* [createUserById](docs/sdks/users/README.md#createuserbyid) - Creates a new user by ID
* [deleteUserByEmailAddress](docs/sdks/users/README.md#deleteuserbyemailaddress) - Deletes a user by email address
* [deleteUserById](docs/sdks/users/README.md#deleteuserbyid) - Deletes a user by ID
* [deleteUserByName](docs/sdks/users/README.md#deleteuserbyname) - Deletes a user by name
* [findUsers](docs/sdks/users/README.md#findusers) - Finds all users
* [findUsersByEmailAddress](docs/sdks/users/README.md#findusersbyemailaddress) - Finds users by email address
* [findUsersById](docs/sdks/users/README.md#findusersbyid) - Finds users by ID
* [findUsersByName](docs/sdks/users/README.md#findusersbyname) - Finds users by name
* [updateUserByEmailAddress](docs/sdks/users/README.md#updateuserbyemailaddress) - Updates an existing user by email address
* [updateUserById](docs/sdks/users/README.md#updateuserbyid) - Updates an existing user by ID
* [updateUserByName](docs/sdks/users/README.md#updateuserbyname) - Updates an existing user by name

### [vppaccounts](docs/sdks/vppaccounts/README.md)

* [createVPPAdminAccountById](docs/sdks/vppaccounts/README.md#createvppadminaccountbyid) - Creates a new VPP account by ID
* [deleteVPPAdminAccountById](docs/sdks/vppaccounts/README.md#deletevppadminaccountbyid) - Deletes a VPP account by ID
* [findVPPAdminAccount](docs/sdks/vppaccounts/README.md#findvppadminaccount) - Finds all VPP Accounts
* [findVPPAdminAccountById](docs/sdks/vppaccounts/README.md#findvppadminaccountbyid) - Finds VPP Account by ID
* [updateVPPAdminAccountById](docs/sdks/vppaccounts/README.md#updatevppadminaccountbyid) - Updates a VPP account by ID

### [vppassignments](docs/sdks/vppassignments/README.md)

* [createAssignmentById](docs/sdks/vppassignments/README.md#createassignmentbyid) - Creates a new VPP assignment by ID
* [deleteAssignmentById](docs/sdks/vppassignments/README.md#deleteassignmentbyid) - Deletes a VPP assignment by ID
* [findAssignmentById](docs/sdks/vppassignments/README.md#findassignmentbyid) - Finds VPP Assignment by ID
* [findVPPAdminAssignment](docs/sdks/vppassignments/README.md#findvppadminassignment) - Finds all VPP Assignments
* [updateAssignmentById](docs/sdks/vppassignments/README.md#updateassignmentbyid) - Updates a VPP assignment by ID

### [vppinvitations](docs/sdks/vppinvitations/README.md)

* [createInvitationById](docs/sdks/vppinvitations/README.md#createinvitationbyid) - Creates a new VPP invitation by ID
* [deleteInvitationById](docs/sdks/vppinvitations/README.md#deleteinvitationbyid) - Deletes a VPP invitation by ID
* [findInvitationById](docs/sdks/vppinvitations/README.md#findinvitationbyid) - Finds a VPP Invitation by ID
* [findInvitationsByIdSubset](docs/sdks/vppinvitations/README.md#findinvitationsbyidsubset) - Finds a subset of data for a VPP invitation
* [findVPPAdminInvitation](docs/sdks/vppinvitations/README.md#findvppadmininvitation) - Finds all VPP Invitations
* [updateInvitationById](docs/sdks/vppinvitations/README.md#updateinvitationbyid) - Updates a VPP invitation by ID

### [webhooks](docs/sdks/webhooks/README.md)

* [createWebhookById](docs/sdks/webhooks/README.md#createwebhookbyid) - Creates a new webhook by ID
* [deleteWebhookById](docs/sdks/webhooks/README.md#deletewebhookbyid) - Deletes a webhook by ID
* [deleteWebhookByName](docs/sdks/webhooks/README.md#deletewebhookbyname) - Deletes a webhook by name
* [findWebhooks](docs/sdks/webhooks/README.md#findwebhooks) - Finds all webhooks
* [findWebhooksById](docs/sdks/webhooks/README.md#findwebhooksbyid) - Finds webhooks by ID
* [findWebhooksByName](docs/sdks/webhooks/README.md#findwebhooksbyname) - Finds webhooks by name
* [updateWebhookById](docs/sdks/webhooks/README.md#updatewebhookbyid) - Updates an existing webhook by ID
* [updateWebhookByName](docs/sdks/webhooks/README.md#updatewebhookbyname) - Updates an existing webhook by name
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
