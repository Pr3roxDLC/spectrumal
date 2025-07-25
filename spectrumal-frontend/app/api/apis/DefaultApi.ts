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


import * as runtime from '../runtime';
import type {
  CreateGameResponse,
  CreateLobbyRequest,
  CreateLobbyResponse,
  JoinLobbyRequest,
  JoinLobbyResponse,
  PointGuessRequest,
  PointGuessResponse,
  RoundInfoResponse,
  ScoreResponse,
  WordGuessRequest,
  WordGuessResponse,
} from '../models/index';
import {
    CreateGameResponseFromJSON,
    CreateGameResponseToJSON,
    CreateLobbyRequestFromJSON,
    CreateLobbyRequestToJSON,
    CreateLobbyResponseFromJSON,
    CreateLobbyResponseToJSON,
    JoinLobbyRequestFromJSON,
    JoinLobbyRequestToJSON,
    JoinLobbyResponseFromJSON,
    JoinLobbyResponseToJSON,
    PointGuessRequestFromJSON,
    PointGuessRequestToJSON,
    PointGuessResponseFromJSON,
    PointGuessResponseToJSON,
    RoundInfoResponseFromJSON,
    RoundInfoResponseToJSON,
    ScoreResponseFromJSON,
    ScoreResponseToJSON,
    WordGuessRequestFromJSON,
    WordGuessRequestToJSON,
    WordGuessResponseFromJSON,
    WordGuessResponseToJSON,
} from '../models/index';

export interface CreateRequest {
    createLobbyRequest?: CreateLobbyRequest;
}

export interface CreateGameRequest {
    lobbyId: string;
}

export interface GetRoundInfoRequest {
    id: string;
    round: number;
    player: string;
}

export interface GetScoreRequest {
    id: string;
}

export interface GuessPointRequest {
    id: string;
    player: string;
    pointGuessRequest?: PointGuessRequest;
}

export interface GuessWordRequest {
    id: string;
    player: string;
    wordGuessRequest?: WordGuessRequest;
}

export interface JoinLobbyOperationRequest {
    code: string;
    joinLobbyRequest?: JoinLobbyRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async createRaw(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateLobbyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/lobby/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateLobbyRequestToJSON(requestParameters['createLobbyRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateLobbyResponseFromJSON(jsonValue));
    }

    /**
     */
    async create(requestParameters: CreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateLobbyResponse> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createGameRaw(requestParameters: CreateGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateGameResponse>> {
        if (requestParameters['lobbyId'] == null) {
            throw new runtime.RequiredError(
                'lobbyId',
                'Required parameter "lobbyId" was null or undefined when calling createGame().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/game/create/{lobbyId}`.replace(`{${"lobbyId"}}`, encodeURIComponent(String(requestParameters['lobbyId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateGameResponseFromJSON(jsonValue));
    }

    /**
     */
    async createGame(requestParameters: CreateGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateGameResponse> {
        const response = await this.createGameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getRoundInfoRaw(requestParameters: GetRoundInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoundInfoResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getRoundInfo().'
            );
        }

        if (requestParameters['round'] == null) {
            throw new runtime.RequiredError(
                'round',
                'Required parameter "round" was null or undefined when calling getRoundInfo().'
            );
        }

        if (requestParameters['player'] == null) {
            throw new runtime.RequiredError(
                'player',
                'Required parameter "player" was null or undefined when calling getRoundInfo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/game/{id}/round/{round}/{player}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"round"}}`, encodeURIComponent(String(requestParameters['round']))).replace(`{${"player"}}`, encodeURIComponent(String(requestParameters['player']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoundInfoResponseFromJSON(jsonValue));
    }

    /**
     */
    async getRoundInfo(requestParameters: GetRoundInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoundInfoResponse> {
        const response = await this.getRoundInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getScoreRaw(requestParameters: GetScoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScoreResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getScore().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/game/{id}/score`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScoreResponseFromJSON(jsonValue));
    }

    /**
     */
    async getScore(requestParameters: GetScoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScoreResponse> {
        const response = await this.getScoreRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async guessPointRaw(requestParameters: GuessPointRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PointGuessResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling guessPoint().'
            );
        }

        if (requestParameters['player'] == null) {
            throw new runtime.RequiredError(
                'player',
                'Required parameter "player" was null or undefined when calling guessPoint().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/game/{id}/guess/point/{player}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"player"}}`, encodeURIComponent(String(requestParameters['player']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PointGuessRequestToJSON(requestParameters['pointGuessRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PointGuessResponseFromJSON(jsonValue));
    }

    /**
     */
    async guessPoint(requestParameters: GuessPointRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PointGuessResponse> {
        const response = await this.guessPointRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async guessWordRaw(requestParameters: GuessWordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WordGuessResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling guessWord().'
            );
        }

        if (requestParameters['player'] == null) {
            throw new runtime.RequiredError(
                'player',
                'Required parameter "player" was null or undefined when calling guessWord().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/game/{id}/guess/word/{player}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"player"}}`, encodeURIComponent(String(requestParameters['player']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WordGuessRequestToJSON(requestParameters['wordGuessRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WordGuessResponseFromJSON(jsonValue));
    }

    /**
     */
    async guessWord(requestParameters: GuessWordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WordGuessResponse> {
        const response = await this.guessWordRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async joinLobbyRaw(requestParameters: JoinLobbyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JoinLobbyResponse>> {
        if (requestParameters['code'] == null) {
            throw new runtime.RequiredError(
                'code',
                'Required parameter "code" was null or undefined when calling joinLobby().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/lobby/join/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JoinLobbyRequestToJSON(requestParameters['joinLobbyRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JoinLobbyResponseFromJSON(jsonValue));
    }

    /**
     */
    async joinLobby(requestParameters: JoinLobbyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JoinLobbyResponse> {
        const response = await this.joinLobbyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
