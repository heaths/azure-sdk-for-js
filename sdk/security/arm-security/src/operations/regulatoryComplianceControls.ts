/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/regulatoryComplianceControlsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a RegulatoryComplianceControls. */
export class RegulatoryComplianceControls {
  private readonly client: SecurityCenterContext;

  /**
   * Create a RegulatoryComplianceControls.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * All supported regulatory compliance controls details and state for selected standard
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceControlsListResponse>
   */
  list(regulatoryComplianceStandardName: string, options?: Models.RegulatoryComplianceControlsListOptionalParams): Promise<Models.RegulatoryComplianceControlsListResponse>;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param callback The callback
   */
  list(regulatoryComplianceStandardName: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceControlList>): void;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param options The optional parameters
   * @param callback The callback
   */
  list(regulatoryComplianceStandardName: string, options: Models.RegulatoryComplianceControlsListOptionalParams, callback: msRest.ServiceCallback<Models.RegulatoryComplianceControlList>): void;
  list(regulatoryComplianceStandardName: string, options?: Models.RegulatoryComplianceControlsListOptionalParams | msRest.ServiceCallback<Models.RegulatoryComplianceControlList>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceControlList>): Promise<Models.RegulatoryComplianceControlsListResponse> {
    return this.client.sendOperationRequest(
      {
        regulatoryComplianceStandardName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceControlsListResponse>;
  }

  /**
   * Selected regulatory compliance control details and state
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceControlsGetResponse>
   */
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options?: msRest.RequestOptionsBase): Promise<Models.RegulatoryComplianceControlsGetResponse>;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param callback The callback
   */
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceControl>): void;
  /**
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param options The optional parameters
   * @param callback The callback
   */
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegulatoryComplianceControl>): void;
  get(regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegulatoryComplianceControl>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceControl>): Promise<Models.RegulatoryComplianceControlsGetResponse> {
    return this.client.sendOperationRequest(
      {
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceControlsGetResponse>;
  }

  /**
   * All supported regulatory compliance controls details and state for selected standard
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceControlsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RegulatoryComplianceControlsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceControlList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegulatoryComplianceControlList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegulatoryComplianceControlList>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceControlList>): Promise<Models.RegulatoryComplianceControlsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceControlsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.regulatoryComplianceStandardName
  ],
  queryParameters: [
    Parameters.apiVersion5,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceControlList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceControl
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceControlList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
