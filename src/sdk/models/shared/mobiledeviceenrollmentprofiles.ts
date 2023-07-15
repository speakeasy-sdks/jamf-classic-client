/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class MobileDeviceEnrollmentProfilesMobileDeviceEnrollmentProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invitation" })
    invitation?: string;

    /**
     * Name of the enrollment profile
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class MobileDeviceEnrollmentProfiles extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mobile_device_enrollment_profile" })
    @Type(() => MobileDeviceEnrollmentProfilesMobileDeviceEnrollmentProfile)
    mobileDeviceEnrollmentProfile?: MobileDeviceEnrollmentProfilesMobileDeviceEnrollmentProfile;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}