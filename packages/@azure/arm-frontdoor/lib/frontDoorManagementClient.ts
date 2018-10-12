/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { FrontDoorManagementClientContext } from "./frontDoorManagementClientContext";


class FrontDoorManagementClient extends FrontDoorManagementClientContext {
  // Operation groups
  frontDoors: operations.FrontDoors;
  routingRules: operations.RoutingRules;
  healthProbeSettings: operations.HealthProbeSettings;
  loadBalancingSettings: operations.LoadBalancingSettings;
  backendPools: operations.BackendPools;
  frontendEndpoints: operations.FrontendEndpoints;
  endpoints: operations.Endpoints;
  policies: operations.Policies;

  /**
   * Initializes a new instance of the FrontDoorManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription credentials which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.FrontDoorManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.frontDoors = new operations.FrontDoors(this);
    this.routingRules = new operations.RoutingRules(this);
    this.healthProbeSettings = new operations.HealthProbeSettings(this);
    this.loadBalancingSettings = new operations.LoadBalancingSettings(this);
    this.backendPools = new operations.BackendPools(this);
    this.frontendEndpoints = new operations.FrontendEndpoints(this);
    this.endpoints = new operations.Endpoints(this);
    this.policies = new operations.Policies(this);
  }

  /**
   * Check the availability of a Front Door resource name.
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param [options] The optional parameters
   * @returns Promise<Models.CheckFrontDoorNameAvailabilityResponse>
   */
  checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase): Promise<Models.CheckFrontDoorNameAvailabilityResponse>;
  /**
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param callback The callback
   */
  checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  /**
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): Promise<Models.CheckFrontDoorNameAvailabilityResponse> {
    return this.sendOperationRequest(
      {
        checkFrontDoorNameAvailabilityInput,
        options
      },
      checkFrontDoorNameAvailabilityOperationSpec,
      callback) as Promise<Models.CheckFrontDoorNameAvailabilityResponse>;
  }

  /**
   * Check the availability of a Front Door subdomain.
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param [options] The optional parameters
   * @returns Promise<Models.CheckFrontDoorNameAvailabilityWithSubscriptionResponse>
   */
  checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase): Promise<Models.CheckFrontDoorNameAvailabilityWithSubscriptionResponse>;
  /**
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param callback The callback
   */
  checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  /**
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): Promise<Models.CheckFrontDoorNameAvailabilityWithSubscriptionResponse> {
    return this.sendOperationRequest(
      {
        checkFrontDoorNameAvailabilityInput,
        options
      },
      checkFrontDoorNameAvailabilityWithSubscriptionOperationSpec,
      callback) as Promise<Models.CheckFrontDoorNameAvailabilityWithSubscriptionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkFrontDoorNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Network/checkFrontDoorNameAvailability",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "checkFrontDoorNameAvailabilityInput",
    mapper: {
      ...Mappers.CheckNameAvailabilityInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const checkFrontDoorNameAvailabilityWithSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/checkFrontDoorNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "checkFrontDoorNameAvailabilityInput",
    mapper: {
      ...Mappers.CheckNameAvailabilityInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

export {
  FrontDoorManagementClient,
  FrontDoorManagementClientContext,
  Models as FrontDoorManagementModels,
  Mappers as FrontDoorManagementMappers
};
export * from "./operations";
