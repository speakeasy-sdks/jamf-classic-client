/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FindMobileDeviceEnrollmentProfiles200ApplicationXMLMobileDeviceEnrollmentProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    id?: number;

    @SpeakeasyMetadata()
    invitation?: string;

    /**
     * Name of the enrollment profile
     */
    @SpeakeasyMetadata()
    name?: string;
}

export class FindMobileDeviceEnrollmentProfiles200ApplicationXML extends SpeakeasyBase {
    @SpeakeasyMetadata()
    mobileDeviceEnrollmentProfile?: FindMobileDeviceEnrollmentProfiles200ApplicationXMLMobileDeviceEnrollmentProfile;

    @SpeakeasyMetadata()
    size?: number;
}

export class FindMobileDeviceEnrollmentProfiles200ApplicationJSONMobileDeviceEnrollmentProfile extends SpeakeasyBase {
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

export class FindMobileDeviceEnrollmentProfiles200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "mobile_device_enrollment_profile" })
    @Type(() => FindMobileDeviceEnrollmentProfiles200ApplicationJSONMobileDeviceEnrollmentProfile)
    mobileDeviceEnrollmentProfile?: FindMobileDeviceEnrollmentProfiles200ApplicationJSONMobileDeviceEnrollmentProfile;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class FindMobileDeviceEnrollmentProfilesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: FindMobileDeviceEnrollmentProfiles200ApplicationJSON })
    findMobileDeviceEnrollmentProfiles200ApplicationJSONObjects?: FindMobileDeviceEnrollmentProfiles200ApplicationJSON[];
}
