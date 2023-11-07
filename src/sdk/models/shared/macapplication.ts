/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CategoryObject } from "./categoryobject";
import { IdName } from "./idname";
import { SiteObject } from "./siteobject";
import { Expose, Type } from "class-transformer";

export class MacApplicationGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bundle_id" })
    bundleId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    @Type(() => CategoryObject)
    category?: CategoryObject;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_free" })
    isFree?: boolean;

    /**
     * Name of the application
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => SiteObject)
    site?: SiteObject;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version: string;
}

export class MacApplicationBuildings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    @Type(() => IdName)
    building?: IdName;
}

export class MacApplicationComputerGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer_group" })
    @Type(() => IdName)
    computerGroup?: IdName;
}

export class MacApplicationComputer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the computer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid?: string;
}

export class MacApplicationComputers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer" })
    @Type(() => MacApplicationComputer)
    computer?: MacApplicationComputer;
}

export class MacApplicationDepartments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    @Type(() => IdName)
    department?: IdName;
}

export class MacApplicationSchemasBuildings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "building" })
    @Type(() => IdName)
    building?: IdName;
}

export class MacApplicationSchemasComputerGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer_group" })
    @Type(() => IdName)
    computerGroup?: IdName;
}

export class MacApplicationSchemasComputer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the computer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "udid" })
    udid?: string;
}

export class MacApplicationSchemasComputers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "computer" })
    @Type(() => MacApplicationSchemasComputer)
    computer?: MacApplicationSchemasComputer;
}

export class MacApplicationSchemasDepartments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    @Type(() => IdName)
    department?: IdName;
}

export class MacApplicationSchemasJssUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class MacApplicationSchemasJssUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export class MacApplicationNetworkSegment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the network segment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uid" })
    uid?: string;
}

export class MacApplicationNetworkSegments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "network_segment" })
    @Type(() => MacApplicationNetworkSegment)
    networkSegment?: MacApplicationNetworkSegment;
}

export class MacApplicationUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class MacApplicationUser extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class MacApplicationUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => MacApplicationUser)
    user?: MacApplicationUser;
}

export class MacApplicationExclusions extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: MacApplicationSchemasBuildings })
    @Expose({ name: "buildings" })
    @Type(() => MacApplicationSchemasBuildings)
    buildings?: MacApplicationSchemasBuildings[];

    @SpeakeasyMetadata({ elemType: MacApplicationSchemasComputerGroups })
    @Expose({ name: "computer_groups" })
    @Type(() => MacApplicationSchemasComputerGroups)
    computerGroups?: MacApplicationSchemasComputerGroups[];

    @SpeakeasyMetadata({ elemType: MacApplicationSchemasComputers })
    @Expose({ name: "computers" })
    @Type(() => MacApplicationSchemasComputers)
    computers?: MacApplicationSchemasComputers[];

    @SpeakeasyMetadata({ elemType: MacApplicationSchemasDepartments })
    @Expose({ name: "departments" })
    @Type(() => MacApplicationSchemasDepartments)
    departments?: MacApplicationSchemasDepartments[];

    @SpeakeasyMetadata({ elemType: MacApplicationSchemasJssUserGroups })
    @Expose({ name: "jss_user_groups" })
    @Type(() => MacApplicationSchemasJssUserGroups)
    jssUserGroups?: MacApplicationSchemasJssUserGroups[];

    @SpeakeasyMetadata({ elemType: MacApplicationSchemasJssUsers })
    @Expose({ name: "jss_users" })
    @Type(() => MacApplicationSchemasJssUsers)
    jssUsers?: MacApplicationSchemasJssUsers[];

    @SpeakeasyMetadata({ elemType: MacApplicationNetworkSegments })
    @Expose({ name: "network_segments" })
    @Type(() => MacApplicationNetworkSegments)
    networkSegments?: MacApplicationNetworkSegments[];

    @SpeakeasyMetadata({ elemType: MacApplicationUserGroups })
    @Expose({ name: "user_groups" })
    @Type(() => MacApplicationUserGroups)
    userGroups?: MacApplicationUserGroups[];

    @SpeakeasyMetadata({ elemType: MacApplicationUsers })
    @Expose({ name: "users" })
    @Type(() => MacApplicationUsers)
    users?: MacApplicationUsers[];
}

export class MacApplicationJssUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class MacApplicationJssUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export class MacApplicationSchemasNetworkSegments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "network_segment" })
    @Type(() => IdName)
    networkSegment?: IdName;
}

export class MacApplicationSchemasUserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => IdName)
    userGroup?: IdName;
}

export class MacApplicationSchemasUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => IdName)
    user?: IdName;
}

export class MacApplicationLimitations extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: MacApplicationSchemasNetworkSegments })
    @Expose({ name: "network_segments" })
    @Type(() => MacApplicationSchemasNetworkSegments)
    networkSegments?: MacApplicationSchemasNetworkSegments[];

    @SpeakeasyMetadata({ elemType: MacApplicationSchemasUserGroups })
    @Expose({ name: "user_groups" })
    @Type(() => MacApplicationSchemasUserGroups)
    userGroups?: MacApplicationSchemasUserGroups[];

    @SpeakeasyMetadata({ elemType: MacApplicationSchemasUsers })
    @Expose({ name: "users" })
    @Type(() => MacApplicationSchemasUsers)
    users?: MacApplicationSchemasUsers[];
}

export class MacApplicationScope extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "all_computers" })
    allComputers?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "all_jss_users" })
    allJssUsers?: boolean;

    @SpeakeasyMetadata({ elemType: MacApplicationBuildings })
    @Expose({ name: "buildings" })
    @Type(() => MacApplicationBuildings)
    buildings?: MacApplicationBuildings[];

    @SpeakeasyMetadata({ elemType: MacApplicationComputerGroups })
    @Expose({ name: "computer_groups" })
    @Type(() => MacApplicationComputerGroups)
    computerGroups?: MacApplicationComputerGroups[];

    @SpeakeasyMetadata({ elemType: MacApplicationComputers })
    @Expose({ name: "computers" })
    @Type(() => MacApplicationComputers)
    computers?: MacApplicationComputers[];

    @SpeakeasyMetadata({ elemType: MacApplicationDepartments })
    @Expose({ name: "departments" })
    @Type(() => MacApplicationDepartments)
    departments?: MacApplicationDepartments[];

    @SpeakeasyMetadata()
    @Expose({ name: "exclusions" })
    @Type(() => MacApplicationExclusions)
    exclusions?: MacApplicationExclusions;

    @SpeakeasyMetadata({ elemType: MacApplicationJssUserGroups })
    @Expose({ name: "jss_user_groups" })
    @Type(() => MacApplicationJssUserGroups)
    jssUserGroups?: MacApplicationJssUserGroups[];

    @SpeakeasyMetadata({ elemType: MacApplicationJssUsers })
    @Expose({ name: "jss_users" })
    @Type(() => MacApplicationJssUsers)
    jssUsers?: MacApplicationJssUsers[];

    @SpeakeasyMetadata()
    @Expose({ name: "limitations" })
    @Type(() => MacApplicationLimitations)
    limitations?: MacApplicationLimitations;
}

export class MacApplicationCategory extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "display_in" })
    displayIn?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "feature_in" })
    featureIn?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class MacApplicationSelfServiceCategories extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    @Type(() => MacApplicationCategory)
    category?: MacApplicationCategory;
}

export class MacApplicationSelfServiceIcon extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "uri" })
    uri?: string;
}

export class MacApplicationVpp extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "assign_vpp_device_based_licenses" })
    assignVppDeviceBasedLicenses?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "vpp_admin_account_id" })
    vppAdminAccountId?: number;
}

export class MacApplicationSelfService extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "feature_on_main_page" })
    featureOnMainPage?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "force_users_to_view_description" })
    forceUsersToViewDescription?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "install_button_text" })
    installButtonText?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notification" })
    notification?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_message" })
    notificationMessage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_subject" })
    notificationSubject?: string;

    @SpeakeasyMetadata({ elemType: MacApplicationSelfServiceCategories })
    @Expose({ name: "self_service_categories" })
    @Type(() => MacApplicationSelfServiceCategories)
    selfServiceCategories?: MacApplicationSelfServiceCategories[];

    @SpeakeasyMetadata()
    @Expose({ name: "self_service_description" })
    selfServiceDescription?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "self_service_icon" })
    @Type(() => MacApplicationSelfServiceIcon)
    selfServiceIcon?: MacApplicationSelfServiceIcon;

    @SpeakeasyMetadata()
    @Expose({ name: "vpp" })
    @Type(() => MacApplicationVpp)
    vpp?: MacApplicationVpp;
}

export class MacApplication extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => MacApplicationGeneral)
    general?: MacApplicationGeneral;

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    @Type(() => MacApplicationScope)
    scope?: MacApplicationScope;

    @SpeakeasyMetadata()
    @Expose({ name: "self_service" })
    @Type(() => MacApplicationSelfService)
    selfService?: MacApplicationSelfService;
}
