/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AccountsGroupsGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the group
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class AccountsGroups extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: AccountsGroupsGroup })
    @Expose({ name: "group" })
    @Type(() => AccountsGroupsGroup)
    group?: AccountsGroupsGroup[];
}

export class AccountsUsersUser extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class AccountsUsers extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: AccountsUsersUser })
    @Expose({ name: "user" })
    @Type(() => AccountsUsersUser)
    user?: AccountsUsersUser[];
}

export class Accounts extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "groups" })
    @Type(() => AccountsGroups)
    groups?: AccountsGroups;

    @SpeakeasyMetadata()
    @Expose({ name: "users" })
    @Type(() => AccountsUsers)
    users?: AccountsUsers;
}
