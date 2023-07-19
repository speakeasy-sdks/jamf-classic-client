/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class LdapServerPostConnectionAccount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "distinguished_username" })
    distinguishedUsername?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;
}

export enum LdapServerPostConnectionAuthenticationType {
    Simple = "simple",
    CramMd5 = "CRAM-MD5",
    DigestMd5 = "DIGEST-MD5",
    None = "none",
}

export enum LdapServerPostConnectionReferralResponse {
    Ignore = "ignore",
    Follow = "follow",
}

export enum LdapServerPostConnectionServerType {
    ActiveDirectory = "Active Directory",
    OpenDirectory = "Open Directory",
    EDirectory = "eDirectory",
    Custom = "Custom",
}

export class LdapServerPostConnection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "account" })
    @Type(() => LdapServerPostConnectionAccount)
    account?: LdapServerPostConnectionAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "authentication_type" })
    authenticationType?: LdapServerPostConnectionAuthenticationType;

    /**
     * Supports PEM and based64 encoded DER formats
     */
    @SpeakeasyMetadata()
    @Expose({ name: "certificate_used" })
    certificateUsed?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "connection_is_used_for" })
    connectionIsUsedFor?: string;

    /**
     * Hostname or IP address of the server
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hostname" })
    hostname?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the LDAP server
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Timeout in seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "open_close_timeout" })
    openCloseTimeout?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "port" })
    port?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "referral_response" })
    referralResponse?: LdapServerPostConnectionReferralResponse;

    /**
     * Timeout in seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "search_timeout" })
    searchTimeout?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "server_type" })
    serverType?: LdapServerPostConnectionServerType;

    @SpeakeasyMetadata()
    @Expose({ name: "use_ssl" })
    useSsl?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "use_wildcards" })
    useWildcards?: boolean;
}

export enum LdapServerPostMappingsForUsersUserGroupMappingsMapObjectClassToAnyOrAll {
    All = "all",
    Any = "any",
}

export enum LdapServerPostMappingsForUsersUserGroupMappingsSearchScope {
    AllSubtrees = "All Subtrees",
    FirstLevelOnly = "First Level Only",
}

export class LdapServerPostMappingsForUsersUserGroupMappings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "map_group_id" })
    mapGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_group_name" })
    mapGroupName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_group_uuid" })
    mapGroupUuid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_object_class_to_any_or_all" })
    mapObjectClassToAnyOrAll?: LdapServerPostMappingsForUsersUserGroupMappingsMapObjectClassToAnyOrAll;

    @SpeakeasyMetadata()
    @Expose({ name: "object_classes" })
    objectClasses?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "search_base" })
    searchBase?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "search_scope" })
    searchScope?: LdapServerPostMappingsForUsersUserGroupMappingsSearchScope;
}

export enum LdapServerPostMappingsForUsersUserGroupMembershipMappingsMapObjectClassToAnyOrAll {
    All = "all",
    Any = "any",
}

export enum LdapServerPostMappingsForUsersUserGroupMembershipMappingsSearchScope {
    AllSubtrees = "All Subtrees",
    FirstLevelOnly = "First Level Only",
}

export enum LdapServerPostMappingsForUsersUserGroupMembershipMappingsUserGroupMembershipStoredIn {
    UserObject = "user object",
    GroupObject = "group object",
}

export class LdapServerPostMappingsForUsersUserGroupMembershipMappings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "append_to_username" })
    appendToUsername?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "group_id" })
    groupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_group_membership_to_user_field" })
    mapGroupMembershipToUserField?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_object_class_to_any_or_all" })
    mapObjectClassToAnyOrAll?: LdapServerPostMappingsForUsersUserGroupMembershipMappingsMapObjectClassToAnyOrAll;

    @SpeakeasyMetadata()
    @Expose({ name: "map_user_membership_to_group_field" })
    mapUserMembershipToGroupField?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "map_user_membership_use_dn" })
    mapUserMembershipUseDn?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "object_classes" })
    objectClasses?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "recursive_lookups" })
    recursiveLookups?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "search_base" })
    searchBase?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "search_scope" })
    searchScope?: LdapServerPostMappingsForUsersUserGroupMembershipMappingsSearchScope;

    @SpeakeasyMetadata()
    @Expose({ name: "use_dn" })
    useDn?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "user_group_membership_stored_in" })
    userGroupMembershipStoredIn?: LdapServerPostMappingsForUsersUserGroupMembershipMappingsUserGroupMembershipStoredIn;

    @SpeakeasyMetadata()
    @Expose({ name: "user_group_membership_use_ldap_compare" })
    userGroupMembershipUseLdapCompare?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

export enum LdapServerPostMappingsForUsersUserMappingsMapObjectClassToAnyOrAll {
    All = "all",
    Any = "any",
}

export enum LdapServerPostMappingsForUsersUserMappingsSearchScope {
    AllSubtrees = "All Subtrees",
    FirstLevelOnly = "First Level Only",
}

export class LdapServerPostMappingsForUsersUserMappings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "append_to_email_results" })
    appendToEmailResults?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_building" })
    mapBuilding?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_department" })
    mapDepartment?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_email_address" })
    mapEmailAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_object_class_to_any_or_all" })
    mapObjectClassToAnyOrAll?: LdapServerPostMappingsForUsersUserMappingsMapObjectClassToAnyOrAll;

    @SpeakeasyMetadata()
    @Expose({ name: "map_position" })
    mapPosition?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_realname" })
    mapRealname?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_room" })
    mapRoom?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_telephone" })
    mapTelephone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_user_id" })
    mapUserId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_user_uuid" })
    mapUserUuid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "map_username" })
    mapUsername?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "object_classes" })
    objectClasses?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "search_base" })
    searchBase?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "search_scope" })
    searchScope?: LdapServerPostMappingsForUsersUserMappingsSearchScope;
}

export class LdapServerPostMappingsForUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "user_group_mappings" })
    @Type(() => LdapServerPostMappingsForUsersUserGroupMappings)
    userGroupMappings?: LdapServerPostMappingsForUsersUserGroupMappings;

    @SpeakeasyMetadata()
    @Expose({ name: "user_group_membership_mappings" })
    @Type(() => LdapServerPostMappingsForUsersUserGroupMembershipMappings)
    userGroupMembershipMappings?: LdapServerPostMappingsForUsersUserGroupMembershipMappings;

    @SpeakeasyMetadata()
    @Expose({ name: "user_mappings" })
    @Type(() => LdapServerPostMappingsForUsersUserMappings)
    userMappings?: LdapServerPostMappingsForUsersUserMappings;
}

export class LdapServerPost extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection" })
    @Type(() => LdapServerPostConnection)
    connection?: LdapServerPostConnection;

    @SpeakeasyMetadata()
    @Expose({ name: "mappings_for_users" })
    @Type(() => LdapServerPostMappingsForUsers)
    mappingsForUsers?: LdapServerPostMappingsForUsers;
}