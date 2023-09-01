/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SiteObject } from "./siteobject";
import { Expose, Type } from "class-transformer";

export enum ClassPostMeetingTimesMeetingTimeDays {
    M = "M",
    T = "T",
    W = "W",
    Th = "Th",
    F = "F",
    Sa = "Sa",
    Su = "Su",
}

export class ClassPostMeetingTimesMeetingTime extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "days" })
    days?: ClassPostMeetingTimesMeetingTimeDays;

    @SpeakeasyMetadata()
    @Expose({ name: "end_time" })
    endTime?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "start_time" })
    startTime?: number;
}

export class ClassPostMeetingTimes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "meeting_time" })
    @Type(() => ClassPostMeetingTimesMeetingTime)
    meetingTime?: ClassPostMeetingTimesMeetingTime;
}

export class ClassPost extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "meeting_times" })
    @Type(() => ClassPostMeetingTimes)
    meetingTimes?: ClassPostMeetingTimes;

    /**
     * Name of the class
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => SiteObject)
    site?: SiteObject;

    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;
}