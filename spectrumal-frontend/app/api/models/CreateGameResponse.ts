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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
    UserToJSONTyped,
} from './User';

/**
 * 
 * @export
 * @interface CreateGameResponse
 */
export interface CreateGameResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateGameResponse
     */
    id?: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof CreateGameResponse
     */
    users?: Array<User>;
}

/**
 * Check if a given object implements the CreateGameResponse interface.
 */
export function instanceOfCreateGameResponse(value: object): value is CreateGameResponse {
    return true;
}

export function CreateGameResponseFromJSON(json: any): CreateGameResponse {
    return CreateGameResponseFromJSONTyped(json, false);
}

export function CreateGameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'users': json['users'] == null ? undefined : ((json['users'] as Array<any>).map(UserFromJSON)),
    };
}

export function CreateGameResponseToJSON(json: any): CreateGameResponse {
    return CreateGameResponseToJSONTyped(json, false);
}

export function CreateGameResponseToJSONTyped(value?: CreateGameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'users': value['users'] == null ? undefined : ((value['users'] as Array<any>).map(UserToJSON)),
    };
}

