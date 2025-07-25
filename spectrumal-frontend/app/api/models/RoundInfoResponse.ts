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
import type { RoundInfo } from './RoundInfo';
import {
    RoundInfoFromJSON,
    RoundInfoFromJSONTyped,
    RoundInfoToJSON,
    RoundInfoToJSONTyped,
} from './RoundInfo';

/**
 * 
 * @export
 * @interface RoundInfoResponse
 */
export interface RoundInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof RoundInfoResponse
     */
    gameId?: string;
    /**
     * 
     * @type {number}
     * @memberof RoundInfoResponse
     */
    roundNumber?: number;
    /**
     * 
     * @type {RoundInfo}
     * @memberof RoundInfoResponse
     */
    round?: RoundInfo;
}

/**
 * Check if a given object implements the RoundInfoResponse interface.
 */
export function instanceOfRoundInfoResponse(value: object): value is RoundInfoResponse {
    return true;
}

export function RoundInfoResponseFromJSON(json: any): RoundInfoResponse {
    return RoundInfoResponseFromJSONTyped(json, false);
}

export function RoundInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoundInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'gameId': json['gameId'] == null ? undefined : json['gameId'],
        'roundNumber': json['roundNumber'] == null ? undefined : json['roundNumber'],
        'round': json['round'] == null ? undefined : RoundInfoFromJSON(json['round']),
    };
}

export function RoundInfoResponseToJSON(json: any): RoundInfoResponse {
    return RoundInfoResponseToJSONTyped(json, false);
}

export function RoundInfoResponseToJSONTyped(value?: RoundInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gameId': value['gameId'],
        'roundNumber': value['roundNumber'],
        'round': RoundInfoToJSON(value['round']),
    };
}

