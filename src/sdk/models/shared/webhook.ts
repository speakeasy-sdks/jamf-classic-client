/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum WebhookAuthenticationType {
    None = "NONE",
    Basic = "BASIC",
}

export enum WebhookContentType {
    TextXml = "text/xml",
    ApplicationJson = "application/json",
}

export class WebhookDisplayFieldsDisplayField extends SpeakeasyBase {
    /**
     * Name of the display field to include for smart group based webhook events
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class WebhookDisplayFields extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "display_field" })
    @Type(() => WebhookDisplayFieldsDisplayField)
    displayField?: WebhookDisplayFieldsDisplayField;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export enum WebhookEvent {
    ComputerAdded = "ComputerAdded",
    ComputerCheckIn = "ComputerCheckIn",
    ComputerInventoryCompleted = "ComputerInventoryCompleted",
    ComputerPolicyFinished = "ComputerPolicyFinished",
    ComputerPushCapabilityChanged = "ComputerPushCapabilityChanged",
    JSSShutdown = "JSSShutdown",
    JSSStartup = "JSSStartup",
    MobileDeviceCheckIn = "MobileDeviceCheckIn",
    MobileDeviceCommandCompleted = "MobileDeviceCommandCompleted",
    MobileDeviceEnrolled = "MobileDeviceEnrolled",
    MobileDevicePushSent = "MobileDevicePushSent",
    MobileDeviceUnEnrolled = "MobileDeviceUnEnrolled",
    PatchSoftwareTitleUpdated = "PatchSoftwareTitleUpdated",
    PushSent = "PushSent",
    RestAPIOperation = "RestAPIOperation",
    SCEPChallenge = "SCEPChallenge",
    SmartGroupComputerMembershipChange = "SmartGroupComputerMembershipChange",
    SmartGroupMobileDeviceMembershipChange = "SmartGroupMobileDeviceMembershipChange",
}

/**
 * OK
 */
export class Webhook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "authentication_type" })
    authenticationType?: WebhookAuthenticationType;

    /**
     * Number of seconds to attempt to connect to the webhooks host server
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connection_timeout" })
    connectionTimeout?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "content_type" })
    contentType?: WebhookContentType;

    @SpeakeasyMetadata({ elemType: WebhookDisplayFields })
    @Expose({ name: "display_fields" })
    @Type(() => WebhookDisplayFields)
    displayFields?: WebhookDisplayFields[];

    @SpeakeasyMetadata()
    @Expose({ name: "enable_display_fields_for_group_object" })
    enableDisplayFieldsForGroupObject?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event: WebhookEvent;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    /**
     * Number of seconds to wait for a response from the webhooks host server after sending a request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "read_timeout" })
    readTimeout?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}
