/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class MobileDeviceExtensionAttributesMobileDeviceExtensionAttribute extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class MobileDeviceExtensionAttributes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mobile_device_extension_attribute" })
    @Type(() => MobileDeviceExtensionAttributesMobileDeviceExtensionAttribute)
    mobileDeviceExtensionAttribute?: MobileDeviceExtensionAttributesMobileDeviceExtensionAttribute;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
