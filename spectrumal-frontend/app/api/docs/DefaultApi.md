# DefaultApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /lobby/create | |
|[**createGame**](#creategame) | **POST** /game/create/{lobbyId} | |
|[**getRoundInfo**](#getroundinfo) | **GET** /game/{id}/round/{round}/{player} | |
|[**guessPoint**](#guesspoint) | **POST** /game/{id}/guess/point/{player} | |
|[**guessWord**](#guessword) | **POST** /game/{id}/guess/word/{player} | |
|[**joinLobby**](#joinlobby) | **POST** /lobby/join/{code} | |

# **create**
> CreateLobbyResponse create()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateLobbyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createLobbyRequest: CreateLobbyRequest; // (optional)

const { status, data } = await apiInstance.create(
    createLobbyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createLobbyRequest** | **CreateLobbyRequest**|  | |


### Return type

**CreateLobbyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGame**
> CreateGameResponse createGame()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let lobbyId: string; // (default to undefined)

const { status, data } = await apiInstance.createGame(
    lobbyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lobbyId** | [**string**] |  | defaults to undefined|


### Return type

**CreateGameResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoundInfo**
> RoundInfoResponse getRoundInfo()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let round: number; // (default to undefined)
let player: string; // (default to undefined)

const { status, data } = await apiInstance.getRoundInfo(
    id,
    round,
    player
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **round** | [**number**] |  | defaults to undefined|
| **player** | [**string**] |  | defaults to undefined|


### Return type

**RoundInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guessPoint**
> guessPoint()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PointGuessRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let player: string; // (default to undefined)
let pointGuessRequest: PointGuessRequest; // (optional)

const { status, data } = await apiInstance.guessPoint(
    id,
    player,
    pointGuessRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pointGuessRequest** | **PointGuessRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **player** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **guessWord**
> WordGuessResponse guessWord()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WordGuessRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let player: string; // (default to undefined)
let wordGuessRequest: WordGuessRequest; // (optional)

const { status, data } = await apiInstance.guessWord(
    id,
    player,
    wordGuessRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wordGuessRequest** | **WordGuessRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **player** | [**string**] |  | defaults to undefined|


### Return type

**WordGuessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **joinLobby**
> JoinLobbyResponse joinLobby()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    JoinLobbyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let code: string; // (default to undefined)
let joinLobbyRequest: JoinLobbyRequest; // (optional)

const { status, data } = await apiInstance.joinLobby(
    code,
    joinLobbyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **joinLobbyRequest** | **JoinLobbyRequest**|  | |
| **code** | [**string**] |  | defaults to undefined|


### Return type

**JoinLobbyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

