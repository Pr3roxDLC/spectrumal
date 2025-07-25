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
 * @interface WordGuessRequest
 */
export interface WordGuessRequest {
    /**
     * 
     * @type {string}
     * @memberof WordGuessRequest
     */
    word?: string;
}

/**
 * Check if a given object implements the WordGuessRequest interface.
 */
export function instanceOfWordGuessRequest(value: object): value is WordGuessRequest {
    return true;
}

export function WordGuessRequestFromJSON(json: any): WordGuessRequest {
    return WordGuessRequestFromJSONTyped(json, false);
}

export function WordGuessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WordGuessRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'word': json['word'] == null ? undefined : json['word'],
    };
}

export function WordGuessRequestToJSON(json: any): WordGuessRequest {
    return WordGuessRequestToJSONTyped(json, false);
}

export function WordGuessRequestToJSONTyped(value?: WordGuessRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'word': value['word'],
    };
}

