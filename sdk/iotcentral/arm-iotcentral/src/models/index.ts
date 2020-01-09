/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Information about the SKU of the IoT Central application.
 */
export interface AppSkuInfo {
  /**
   * The name of the SKU. Possible values include: 'F1', 'S1', 'ST0', 'ST1', 'ST2'
   */
  name: AppSku;
}

/**
 * The common properties of an ARM resource.
 */
export interface Resource extends BaseResource {
  /**
   * The ARM resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The ARM resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The resource location.
   */
  location: string;
  /**
   * The resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The IoT Central application.
 */
export interface App extends Resource {
  /**
   * The ID of the application.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly applicationId?: string;
  /**
   * The display name of the application.
   */
  displayName?: string;
  /**
   * The subdomain of the application.
   */
  subdomain?: string;
  /**
   * The ID of the application template, which is a blueprint that defines the characteristics and
   * behaviors of an application. Optional; if not specified, defaults to a blank blueprint and
   * allows the application to be defined from scratch.
   */
  template?: string;
  /**
   * A valid instance SKU.
   */
  sku: AppSkuInfo;
}

/**
 * The description of the IoT Central application.
 */
export interface AppPatch {
  /**
   * Instance tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * The ID of the application.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly applicationId?: string;
  /**
   * The display name of the application.
   */
  displayName?: string;
  /**
   * The subdomain of the application.
   */
  subdomain?: string;
  /**
   * The ID of the application template, which is a blueprint that defines the characteristics and
   * behaviors of an application. Optional; if not specified, defaults to a blank blueprint and
   * allows the application to be defined from scratch.
   */
  template?: string;
}

/**
 * Details of error response.
 */
export interface ErrorResponseBody {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
  /**
   * A list of additional details about the error.
   */
  details?: ErrorResponseBody[];
}

/**
 * Error details.
 */
export interface ErrorDetails {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
  /**
   * A list of additional details about the error.
   */
  details?: ErrorResponseBody[];
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft IoT Central
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * Resource Type: IoT Central
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * Name of the operation
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * Friendly description for the operation,
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
}

/**
 * IoT Central REST API operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Input values.
 */
export interface OperationInputs {
  /**
   * The name of the IoT Central application instance to check.
   */
  name: string;
  /**
   * The type of the IoT Central resource to query. Default value: 'IoTApps'.
   */
  type?: string;
}

/**
 * The properties indicating whether a given IoT Central application name or subdomain is
 * available.
 */
export interface AppAvailabilityInfo {
  /**
   * The value which indicates whether the provided name is available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason for unavailability.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly reason?: string;
  /**
   * The detailed reason message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
}

/**
 * IoT Central Application Template.
 */
export interface AppTemplate {
  /**
   * The ID of the template.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly manifestId?: string;
  /**
   * The version of the template.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly manifestVersion?: string;
  /**
   * The name of the template.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly appTemplateName?: string;
  /**
   * The title of the template.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly title?: string;
  /**
   * The order of the template in the templates list.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly order?: number;
  /**
   * The description of the template.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
}

/**
 * An interface representing IotCentralClientOptions.
 */
export interface IotCentralClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * A list of IoT Central Applications with a next link.
 * @extends Array<App>
 */
export interface AppListResult extends Array<App> {
  /**
   * The link used to get the next page of IoT Central Applications.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of IoT Central Application Templates with a next link.
 * @extends Array<AppTemplate>
 */
export interface AppTemplatesResult extends Array<AppTemplate> {
  /**
   * The link used to get the next page of IoT Central application templates.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of IoT Central operations. It contains a list of operations and a URL link to get the
 * next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * The link used to get the next page of IoT Central description objects.
   */
  nextLink?: string;
}

/**
 * Defines values for AppSku.
 * Possible values include: 'F1', 'S1', 'ST0', 'ST1', 'ST2'
 * @readonly
 * @enum {string}
 */
export type AppSku = 'F1' | 'S1' | 'ST0' | 'ST1' | 'ST2';

/**
 * Contains response data for the get operation.
 */
export type AppsGetResponse = App & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: App;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type AppsCreateOrUpdateResponse = App & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: App;
    };
};

/**
 * Contains response data for the update operation.
 */
export type AppsUpdateResponse = App & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: App;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type AppsListBySubscriptionResponse = AppListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type AppsListByResourceGroupResponse = AppListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type AppsCheckNameAvailabilityResponse = AppAvailabilityInfo & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppAvailabilityInfo;
    };
};

/**
 * Contains response data for the checkSubdomainAvailability operation.
 */
export type AppsCheckSubdomainAvailabilityResponse = AppAvailabilityInfo & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppAvailabilityInfo;
    };
};

/**
 * Contains response data for the listTemplates operation.
 */
export type AppsListTemplatesResponse = AppTemplatesResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppTemplatesResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type AppsBeginCreateOrUpdateResponse = App & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: App;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type AppsBeginUpdateResponse = App & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: App;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type AppsListBySubscriptionNextResponse = AppListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type AppsListByResourceGroupNextResponse = AppListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppListResult;
    };
};

/**
 * Contains response data for the listTemplatesNext operation.
 */
export type AppsListTemplatesNextResponse = AppTemplatesResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppTemplatesResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};
