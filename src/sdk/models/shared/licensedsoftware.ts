/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { LicensedSoftwareDefintion } from "./licensedsoftwaredefintion";
import { SiteObject } from "./siteobject";
import { Expose, Type } from "class-transformer";

export class LicensedSoftwareFontDefinitions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "definition" })
    @Type(() => LicensedSoftwareDefintion)
    definition?: LicensedSoftwareDefintion;
}

export class LicensedSoftwareGeneral extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "exclude_titles_purchased_from_app_store" })
    excludeTitlesPurchasedFromAppStore?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the licensed software
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "platform" })
    platform?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "publisher" })
    publisher?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "remove_titles_from_inventory_reports" })
    removeTitlesFromInventoryReports?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "send_email_on_violation" })
    sendEmailOnViolation?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "site" })
    @Type(() => SiteObject)
    site?: SiteObject;
}

export class LicensedSoftwareLicensesLicenseAttachments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attachment" })
    @Type(() => Attachment)
    attachment?: Attachment;
}

export enum LicensedSoftwareLicensesLicenseLicenseType {
    Standard = "Standard",
    Concurrent = "Concurrent",
    SiteLicense = "Site License",
}

export class LicensedSoftwareLicensesLicensePurchasing extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "is_annual" })
    isAnnual?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_perpetual" })
    isPerpetual?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "license_expires" })
    licenseExpires?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "license_expires_epoch" })
    licenseExpiresEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "license_expires_utc" })
    licenseExpiresUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "life_expectancy" })
    lifeExpectancy?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "po_date" })
    poDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "po_date_epoch" })
    poDateEpoch?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "po_date_utc" })
    poDateUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "po_number" })
    poNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchase_price" })
    purchasePrice?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchasing_account" })
    purchasingAccount?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchasing_contact" })
    purchasingContact?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vendor" })
    vendor?: string;
}

export class LicensedSoftwareLicensesLicense extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: LicensedSoftwareLicensesLicenseAttachments })
    @Expose({ name: "attachments" })
    @Type(() => LicensedSoftwareLicensesLicenseAttachments)
    attachments?: LicensedSoftwareLicensesLicenseAttachments[];

    @SpeakeasyMetadata()
    @Expose({ name: "license_count" })
    licenseCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "license_type" })
    licenseType?: LicensedSoftwareLicensesLicenseLicenseType;

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "organization_name" })
    organizationName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchasing" })
    @Type(() => LicensedSoftwareLicensesLicensePurchasing)
    purchasing?: LicensedSoftwareLicensesLicensePurchasing;

    @SpeakeasyMetadata()
    @Expose({ name: "registered_to" })
    registeredTo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "serial_number_1" })
    serialNumber1?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "serial_number_2" })
    serialNumber2?: string;
}

export class LicensedSoftwareLicenses extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "license" })
    @Type(() => LicensedSoftwareLicensesLicense)
    license?: LicensedSoftwareLicensesLicense;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}

export class LicensedSoftwarePluginDefinitions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "definition" })
    @Type(() => LicensedSoftwareDefintion)
    definition?: LicensedSoftwareDefintion;
}

export class LicensedSoftwareSoftwareDefinitions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "definition" })
    @Type(() => LicensedSoftwareDefintion)
    definition?: LicensedSoftwareDefintion;
}

/**
 * OK
 */
export class LicensedSoftware extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: LicensedSoftwareFontDefinitions })
    @Expose({ name: "font_definitions" })
    @Type(() => LicensedSoftwareFontDefinitions)
    fontDefinitions?: LicensedSoftwareFontDefinitions[];

    @SpeakeasyMetadata()
    @Expose({ name: "general" })
    @Type(() => LicensedSoftwareGeneral)
    general?: LicensedSoftwareGeneral;

    @SpeakeasyMetadata({ elemType: LicensedSoftwareLicenses })
    @Expose({ name: "licenses" })
    @Type(() => LicensedSoftwareLicenses)
    licenses?: LicensedSoftwareLicenses[];

    @SpeakeasyMetadata({ elemType: LicensedSoftwarePluginDefinitions })
    @Expose({ name: "plugin_definitions" })
    @Type(() => LicensedSoftwarePluginDefinitions)
    pluginDefinitions?: LicensedSoftwarePluginDefinitions[];

    @SpeakeasyMetadata({ elemType: LicensedSoftwareSoftwareDefinitions })
    @Expose({ name: "software_definitions" })
    @Type(() => LicensedSoftwareSoftwareDefinitions)
    softwareDefinitions?: LicensedSoftwareSoftwareDefinitions[];
}