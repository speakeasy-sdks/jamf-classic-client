/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Activationcode } from "./activationcode";
import { Advancedcomputersearches } from "./advancedcomputersearches";
import { Advancedmobiledevicesearches } from "./advancedmobiledevicesearches";
import { Advancedusersearches } from "./advancedusersearches";
import { Allowedfileextensions } from "./allowedfileextensions";
import { Buildings } from "./buildings";
import { Byoprofiles } from "./byoprofiles";
import { Categories } from "./categories";
import { Classes } from "./classes";
import { Commandflush } from "./commandflush";
import { Computerapplications } from "./computerapplications";
import { Computerapplicationusage } from "./computerapplicationusage";
import { Computercheckin } from "./computercheckin";
import { Computercommands } from "./computercommands";
import { Computerextensionattributes } from "./computerextensionattributes";
import { Computergroups } from "./computergroups";
import { Computerhardwaresoftwarereports } from "./computerhardwaresoftwarereports";
import { Computerhistory } from "./computerhistory";
import { Computerinventorycollection } from "./computerinventorycollection";
import { Computerinvitations } from "./computerinvitations";
import { Computermanagement } from "./computermanagement";
import { Computerreports } from "./computerreports";
import { Computers } from "./computers";
import { Departments } from "./departments";
import { Directorybindings } from "./directorybindings";
import { Diskencryptionconfigurations } from "./diskencryptionconfigurations";
import { Distributionpoints } from "./distributionpoints";
import { Dockitems } from "./dockitems";
import { Ebooks } from "./ebooks";
import { Fileuploads } from "./fileuploads";
import { Gsxconnection } from "./gsxconnection";
import { Healthcarelistener } from "./healthcarelistener";
import { Healthcarelistenerrule } from "./healthcarelistenerrule";
import { Ibeacons } from "./ibeacons";
import { Infrastructuremanager } from "./infrastructuremanager";
import { Jsonwebtokenconfigurations } from "./jsonwebtokenconfigurations";
import { Jssuser } from "./jssuser";
import { Ldapservers } from "./ldapservers";
import { Licensedsoftware } from "./licensedsoftware";
import { Logflush } from "./logflush";
import { Macapplications } from "./macapplications";
import { Managedpreferenceprofiles } from "./managedpreferenceprofiles";
import { Mobiledeviceapplications } from "./mobiledeviceapplications";
import { Mobiledevicecommands } from "./mobiledevicecommands";
import { Mobiledeviceconfigurationprofiles } from "./mobiledeviceconfigurationprofiles";
import { Mobiledeviceenrollmentprofiles } from "./mobiledeviceenrollmentprofiles";
import { Mobiledeviceextensionattributes } from "./mobiledeviceextensionattributes";
import { Mobiledevicegroups } from "./mobiledevicegroups";
import { Mobiledevicehistory } from "./mobiledevicehistory";
import { Mobiledeviceinvitations } from "./mobiledeviceinvitations";
import { Mobiledeviceprovisioningprofiles } from "./mobiledeviceprovisioningprofiles";
import { Mobiledevices } from "./mobiledevices";
import * as shared from "./models/shared";
import { Networksegments } from "./networksegments";
import { Osxconfigurationprofiles } from "./osxconfigurationprofiles";
import { Packages } from "./packages";
import { Patchavailabletitles } from "./patchavailabletitles";
import { Patches } from "./patches";
import { Patchexternalsources } from "./patchexternalsources";
import { Patchinternalsources } from "./patchinternalsources";
import { Patchpolicies } from "./patchpolicies";
import { Patchreports } from "./patchreports";
import { Patchsoftwaretitles } from "./patchsoftwaretitles";
import { Peripherals } from "./peripherals";
import { Peripheraltypes } from "./peripheraltypes";
import { Policies } from "./policies";
import { Printers } from "./printers";
import { Removablemacaddresses } from "./removablemacaddresses";
import { Restrictedsoftware } from "./restrictedsoftware";
import { Savedsearches } from "./savedsearches";
import { Scripts } from "./scripts";
import { Sites } from "./sites";
import { Smtpserver } from "./smtpserver";
import { Softwareupdateservers } from "./softwareupdateservers";
import { Userextensionattributes } from "./userextensionattributes";
import { Usergroups } from "./usergroups";
import { Users } from "./users";
import { Vppaccounts } from "./vppaccounts";
import { Vppassignments } from "./vppassignments";
import { Vppinvitations } from "./vppinvitations";
import { Webhooks } from "./webhooks";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://yourServer.jamfcloud.com/JSSResource"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "10.48.0";
    sdkVersion = "1.1.1";
    genVersion = "2.70.2";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class Jamf {
    public accounts: Accounts;
    public activationcode: Activationcode;
    public advancedcomputersearches: Advancedcomputersearches;
    public advancedmobiledevicesearches: Advancedmobiledevicesearches;
    public advancedusersearches: Advancedusersearches;
    public allowedfileextensions: Allowedfileextensions;
    public buildings: Buildings;
    public byoprofiles: Byoprofiles;
    public categories: Categories;
    public classes: Classes;
    public commandflush: Commandflush;
    public computerapplications: Computerapplications;
    public computerapplicationusage: Computerapplicationusage;
    public computercheckin: Computercheckin;
    public computercommands: Computercommands;
    public computerextensionattributes: Computerextensionattributes;
    public computergroups: Computergroups;
    public computerhardwaresoftwarereports: Computerhardwaresoftwarereports;
    public computerhistory: Computerhistory;
    public computerinventorycollection: Computerinventorycollection;
    public computerinvitations: Computerinvitations;
    public computermanagement: Computermanagement;
    public computerreports: Computerreports;
    public computers: Computers;
    public departments: Departments;
    public directorybindings: Directorybindings;
    public diskencryptionconfigurations: Diskencryptionconfigurations;
    public distributionpoints: Distributionpoints;
    public dockitems: Dockitems;
    public ebooks: Ebooks;
    public fileuploads: Fileuploads;
    public gsxconnection: Gsxconnection;
    public healthcarelistener: Healthcarelistener;
    public healthcarelistenerrule: Healthcarelistenerrule;
    public ibeacons: Ibeacons;
    public infrastructuremanager: Infrastructuremanager;
    public jsonwebtokenconfigurations: Jsonwebtokenconfigurations;
    public jssuser: Jssuser;
    public ldapservers: Ldapservers;
    public licensedsoftware: Licensedsoftware;
    public logflush: Logflush;
    public macapplications: Macapplications;
    public managedpreferenceprofiles: Managedpreferenceprofiles;
    public mobiledeviceapplications: Mobiledeviceapplications;
    public mobiledevicecommands: Mobiledevicecommands;
    public mobiledeviceconfigurationprofiles: Mobiledeviceconfigurationprofiles;
    public mobiledeviceenrollmentprofiles: Mobiledeviceenrollmentprofiles;
    public mobiledeviceextensionattributes: Mobiledeviceextensionattributes;
    public mobiledevicegroups: Mobiledevicegroups;
    public mobiledevicehistory: Mobiledevicehistory;
    public mobiledeviceinvitations: Mobiledeviceinvitations;
    public mobiledeviceprovisioningprofiles: Mobiledeviceprovisioningprofiles;
    public mobiledevices: Mobiledevices;
    public networksegments: Networksegments;
    public osxconfigurationprofiles: Osxconfigurationprofiles;
    public packages: Packages;
    public patchavailabletitles: Patchavailabletitles;
    public patches: Patches;
    public patchexternalsources: Patchexternalsources;
    public patchinternalsources: Patchinternalsources;
    public patchpolicies: Patchpolicies;
    public patchreports: Patchreports;
    public patchsoftwaretitles: Patchsoftwaretitles;
    public peripherals: Peripherals;
    public peripheraltypes: Peripheraltypes;
    public policies: Policies;
    public printers: Printers;
    public removablemacaddresses: Removablemacaddresses;
    public restrictedsoftware: Restrictedsoftware;
    public savedsearches: Savedsearches;
    public scripts: Scripts;
    public sites: Sites;
    public smtpserver: Smtpserver;
    public softwareupdateservers: Softwareupdateservers;
    public userextensionattributes: Userextensionattributes;
    public usergroups: Usergroups;
    public users: Users;
    public vppaccounts: Vppaccounts;
    public vppassignments: Vppassignments;
    public vppinvitations: Vppinvitations;
    public webhooks: Webhooks;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.activationcode = new Activationcode(this.sdkConfiguration);
        this.advancedcomputersearches = new Advancedcomputersearches(this.sdkConfiguration);
        this.advancedmobiledevicesearches = new Advancedmobiledevicesearches(this.sdkConfiguration);
        this.advancedusersearches = new Advancedusersearches(this.sdkConfiguration);
        this.allowedfileextensions = new Allowedfileextensions(this.sdkConfiguration);
        this.buildings = new Buildings(this.sdkConfiguration);
        this.byoprofiles = new Byoprofiles(this.sdkConfiguration);
        this.categories = new Categories(this.sdkConfiguration);
        this.classes = new Classes(this.sdkConfiguration);
        this.commandflush = new Commandflush(this.sdkConfiguration);
        this.computerapplications = new Computerapplications(this.sdkConfiguration);
        this.computerapplicationusage = new Computerapplicationusage(this.sdkConfiguration);
        this.computercheckin = new Computercheckin(this.sdkConfiguration);
        this.computercommands = new Computercommands(this.sdkConfiguration);
        this.computerextensionattributes = new Computerextensionattributes(this.sdkConfiguration);
        this.computergroups = new Computergroups(this.sdkConfiguration);
        this.computerhardwaresoftwarereports = new Computerhardwaresoftwarereports(
            this.sdkConfiguration
        );
        this.computerhistory = new Computerhistory(this.sdkConfiguration);
        this.computerinventorycollection = new Computerinventorycollection(this.sdkConfiguration);
        this.computerinvitations = new Computerinvitations(this.sdkConfiguration);
        this.computermanagement = new Computermanagement(this.sdkConfiguration);
        this.computerreports = new Computerreports(this.sdkConfiguration);
        this.computers = new Computers(this.sdkConfiguration);
        this.departments = new Departments(this.sdkConfiguration);
        this.directorybindings = new Directorybindings(this.sdkConfiguration);
        this.diskencryptionconfigurations = new Diskencryptionconfigurations(this.sdkConfiguration);
        this.distributionpoints = new Distributionpoints(this.sdkConfiguration);
        this.dockitems = new Dockitems(this.sdkConfiguration);
        this.ebooks = new Ebooks(this.sdkConfiguration);
        this.fileuploads = new Fileuploads(this.sdkConfiguration);
        this.gsxconnection = new Gsxconnection(this.sdkConfiguration);
        this.healthcarelistener = new Healthcarelistener(this.sdkConfiguration);
        this.healthcarelistenerrule = new Healthcarelistenerrule(this.sdkConfiguration);
        this.ibeacons = new Ibeacons(this.sdkConfiguration);
        this.infrastructuremanager = new Infrastructuremanager(this.sdkConfiguration);
        this.jsonwebtokenconfigurations = new Jsonwebtokenconfigurations(this.sdkConfiguration);
        this.jssuser = new Jssuser(this.sdkConfiguration);
        this.ldapservers = new Ldapservers(this.sdkConfiguration);
        this.licensedsoftware = new Licensedsoftware(this.sdkConfiguration);
        this.logflush = new Logflush(this.sdkConfiguration);
        this.macapplications = new Macapplications(this.sdkConfiguration);
        this.managedpreferenceprofiles = new Managedpreferenceprofiles(this.sdkConfiguration);
        this.mobiledeviceapplications = new Mobiledeviceapplications(this.sdkConfiguration);
        this.mobiledevicecommands = new Mobiledevicecommands(this.sdkConfiguration);
        this.mobiledeviceconfigurationprofiles = new Mobiledeviceconfigurationprofiles(
            this.sdkConfiguration
        );
        this.mobiledeviceenrollmentprofiles = new Mobiledeviceenrollmentprofiles(
            this.sdkConfiguration
        );
        this.mobiledeviceextensionattributes = new Mobiledeviceextensionattributes(
            this.sdkConfiguration
        );
        this.mobiledevicegroups = new Mobiledevicegroups(this.sdkConfiguration);
        this.mobiledevicehistory = new Mobiledevicehistory(this.sdkConfiguration);
        this.mobiledeviceinvitations = new Mobiledeviceinvitations(this.sdkConfiguration);
        this.mobiledeviceprovisioningprofiles = new Mobiledeviceprovisioningprofiles(
            this.sdkConfiguration
        );
        this.mobiledevices = new Mobiledevices(this.sdkConfiguration);
        this.networksegments = new Networksegments(this.sdkConfiguration);
        this.osxconfigurationprofiles = new Osxconfigurationprofiles(this.sdkConfiguration);
        this.packages = new Packages(this.sdkConfiguration);
        this.patchavailabletitles = new Patchavailabletitles(this.sdkConfiguration);
        this.patches = new Patches(this.sdkConfiguration);
        this.patchexternalsources = new Patchexternalsources(this.sdkConfiguration);
        this.patchinternalsources = new Patchinternalsources(this.sdkConfiguration);
        this.patchpolicies = new Patchpolicies(this.sdkConfiguration);
        this.patchreports = new Patchreports(this.sdkConfiguration);
        this.patchsoftwaretitles = new Patchsoftwaretitles(this.sdkConfiguration);
        this.peripherals = new Peripherals(this.sdkConfiguration);
        this.peripheraltypes = new Peripheraltypes(this.sdkConfiguration);
        this.policies = new Policies(this.sdkConfiguration);
        this.printers = new Printers(this.sdkConfiguration);
        this.removablemacaddresses = new Removablemacaddresses(this.sdkConfiguration);
        this.restrictedsoftware = new Restrictedsoftware(this.sdkConfiguration);
        this.savedsearches = new Savedsearches(this.sdkConfiguration);
        this.scripts = new Scripts(this.sdkConfiguration);
        this.sites = new Sites(this.sdkConfiguration);
        this.smtpserver = new Smtpserver(this.sdkConfiguration);
        this.softwareupdateservers = new Softwareupdateservers(this.sdkConfiguration);
        this.userextensionattributes = new Userextensionattributes(this.sdkConfiguration);
        this.usergroups = new Usergroups(this.sdkConfiguration);
        this.users = new Users(this.sdkConfiguration);
        this.vppaccounts = new Vppaccounts(this.sdkConfiguration);
        this.vppassignments = new Vppassignments(this.sdkConfiguration);
        this.vppinvitations = new Vppinvitations(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
    }
}
