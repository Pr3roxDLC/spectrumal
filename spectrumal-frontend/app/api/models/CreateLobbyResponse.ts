/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI
 * OpenAPI
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateLobbyResponse
 */
export interface CreateLobbyResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateLobbyResponse
     */
    lobbyId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateLobbyResponse
     */
    code?: string;
}

/**
 * Check if a given object implements the CreateLobbyResponse interface.
 */
export function instanceOfCreateLobbyResponse(value: object): value is CreateLobbyResponse {
    return true;
}

export function CreateLobbyResponseFromJSON(json: any): CreateLobbyResponse {
    return CreateLobbyResponseFromJSONTyped(json, false);
}

export function CreateLobbyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLobbyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'lobbyId': json['lobbyId'] == null ? undefined : json['lobbyId'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function CreateLobbyResponseToJSON(json: any): CreateLobbyResponse {
    return CreateLobbyResponseToJSONTyped(json, false);
}

export function CreateLobbyResponseToJSONTyped(value?: CreateLobbyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lobbyId': value['lobbyId'],
        'code': value['code'],
    };
}

