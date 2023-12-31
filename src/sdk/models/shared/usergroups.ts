/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class UserGroupsUserGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_notify_on_change" })
    isNotifyOnChange?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_smart" })
    isSmart?: boolean;

    /**
     * Name of the user group
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class UserGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user_group" })
    @Type(() => UserGroupsUserGroup)
    userGroup?: UserGroupsUserGroup;
}
