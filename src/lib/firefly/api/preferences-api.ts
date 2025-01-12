/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.6
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2022-04-04T03:54:41+00:00 
 *
 * The version of the OpenAPI document: 1.5.6
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Preference } from '../model';
// @ts-ignore
import { PreferenceArray } from '../model';
// @ts-ignore
import { PreferenceSingle } from '../model';
// @ts-ignore
import { PreferenceUpdate } from '../model';
// @ts-ignore
import { ValidationError } from '../model';
/**
 * PreferencesApi - axios parameter creator
 * @export
 */
export const PreferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Return a single preference and the value.
         * @summary Return a single preference.
         * @param {string} name The name of the preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPreference: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getPreference', 'name', name)
            const localVarPath = `/api/v1/preferences/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all of the preferences of the user.
         * @summary List all users preferences.
         * @param {number} [page] Page number. The default pagination is 50.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPreference: async (page?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/preferences`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
         * @summary Store a new preference for this user.
         * @param {Preference} preference JSON array with the necessary preference information or key&#x3D;value pairs. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storePreference: async (preference: Preference, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'preference' is not null or undefined
            assertParamExists('storePreference', 'preference', preference)
            const localVarPath = `/api/v1/preferences`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(preference, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a user\'s preference.
         * @summary Update preference
         * @param {string} name The name of the preference. Will always overwrite. Will be created if it does not exist.
         * @param {PreferenceUpdate} preferenceUpdate JSON array or key&#x3D;value pairs with the necessary preference information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePreference: async (name: string, preferenceUpdate: PreferenceUpdate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updatePreference', 'name', name)
            // verify required parameter 'preferenceUpdate' is not null or undefined
            assertParamExists('updatePreference', 'preferenceUpdate', preferenceUpdate)
            const localVarPath = `/api/v1/preferences/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(preferenceUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PreferencesApi - functional programming interface
 * @export
 */
export const PreferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PreferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * Return a single preference and the value.
         * @summary Return a single preference.
         * @param {string} name The name of the preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPreference(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferenceSingle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPreference(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all of the preferences of the user.
         * @summary List all users preferences.
         * @param {number} [page] Page number. The default pagination is 50.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPreference(page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferenceArray>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPreference(page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
         * @summary Store a new preference for this user.
         * @param {Preference} preference JSON array with the necessary preference information or key&#x3D;value pairs. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storePreference(preference: Preference, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferenceSingle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storePreference(preference, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a user\'s preference.
         * @summary Update preference
         * @param {string} name The name of the preference. Will always overwrite. Will be created if it does not exist.
         * @param {PreferenceUpdate} preferenceUpdate JSON array or key&#x3D;value pairs with the necessary preference information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePreference(name: string, preferenceUpdate: PreferenceUpdate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferenceSingle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePreference(name, preferenceUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PreferencesApi - factory interface
 * @export
 */
export const PreferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PreferencesApiFp(configuration)
    return {
        /**
         * Return a single preference and the value.
         * @summary Return a single preference.
         * @param {string} name The name of the preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPreference(name: string, options?: any): AxiosPromise<PreferenceSingle> {
            return localVarFp.getPreference(name, options).then((request) => request(axios, basePath));
        },
        /**
         * List all of the preferences of the user.
         * @summary List all users preferences.
         * @param {number} [page] Page number. The default pagination is 50.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPreference(page?: number, options?: any): AxiosPromise<PreferenceArray> {
            return localVarFp.listPreference(page, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
         * @summary Store a new preference for this user.
         * @param {Preference} preference JSON array with the necessary preference information or key&#x3D;value pairs. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storePreference(preference: Preference, options?: any): AxiosPromise<PreferenceSingle> {
            return localVarFp.storePreference(preference, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a user\'s preference.
         * @summary Update preference
         * @param {string} name The name of the preference. Will always overwrite. Will be created if it does not exist.
         * @param {PreferenceUpdate} preferenceUpdate JSON array or key&#x3D;value pairs with the necessary preference information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePreference(name: string, preferenceUpdate: PreferenceUpdate, options?: any): AxiosPromise<PreferenceSingle> {
            return localVarFp.updatePreference(name, preferenceUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPreference operation in PreferencesApi.
 * @export
 * @interface PreferencesApiGetPreferenceRequest
 */
export interface PreferencesApiGetPreferenceRequest {
    /**
     * The name of the preference.
     * @type {string}
     * @memberof PreferencesApiGetPreference
     */
    readonly name: string
}

/**
 * Request parameters for listPreference operation in PreferencesApi.
 * @export
 * @interface PreferencesApiListPreferenceRequest
 */
export interface PreferencesApiListPreferenceRequest {
    /**
     * Page number. The default pagination is 50.
     * @type {number}
     * @memberof PreferencesApiListPreference
     */
    readonly page?: number
}

/**
 * Request parameters for storePreference operation in PreferencesApi.
 * @export
 * @interface PreferencesApiStorePreferenceRequest
 */
export interface PreferencesApiStorePreferenceRequest {
    /**
     * JSON array with the necessary preference information or key&#x3D;value pairs. See the model for the exact specifications.
     * @type {Preference}
     * @memberof PreferencesApiStorePreference
     */
    readonly preference: Preference
}

/**
 * Request parameters for updatePreference operation in PreferencesApi.
 * @export
 * @interface PreferencesApiUpdatePreferenceRequest
 */
export interface PreferencesApiUpdatePreferenceRequest {
    /**
     * The name of the preference. Will always overwrite. Will be created if it does not exist.
     * @type {string}
     * @memberof PreferencesApiUpdatePreference
     */
    readonly name: string

    /**
     * JSON array or key&#x3D;value pairs with the necessary preference information. See the model for the exact specifications.
     * @type {PreferenceUpdate}
     * @memberof PreferencesApiUpdatePreference
     */
    readonly preferenceUpdate: PreferenceUpdate
}

/**
 * PreferencesApi - object-oriented interface
 * @export
 * @class PreferencesApi
 * @extends {BaseAPI}
 */
export class PreferencesApi extends BaseAPI {
    /**
     * Return a single preference and the value.
     * @summary Return a single preference.
     * @param {PreferencesApiGetPreferenceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public getPreference(requestParameters: PreferencesApiGetPreferenceRequest, options?: any) {
        return PreferencesApiFp(this.configuration).getPreference(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all of the preferences of the user.
     * @summary List all users preferences.
     * @param {PreferencesApiListPreferenceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public listPreference(requestParameters: PreferencesApiListPreferenceRequest = {}, options?: any) {
        return PreferencesApiFp(this.configuration).listPreference(requestParameters.page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
     * @summary Store a new preference for this user.
     * @param {PreferencesApiStorePreferenceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public storePreference(requestParameters: PreferencesApiStorePreferenceRequest, options?: any) {
        return PreferencesApiFp(this.configuration).storePreference(requestParameters.preference, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a user\'s preference.
     * @summary Update preference
     * @param {PreferencesApiUpdatePreferenceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public updatePreference(requestParameters: PreferencesApiUpdatePreferenceRequest, options?: any) {
        return PreferencesApiFp(this.configuration).updatePreference(requestParameters.name, requestParameters.preferenceUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
