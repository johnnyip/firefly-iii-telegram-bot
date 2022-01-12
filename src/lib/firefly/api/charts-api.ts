/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.4
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2021-09-25T14:21:28+00:00 
 *
 * The version of the OpenAPI document: 1.5.4
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
import { ChartLine } from '../model';
/**
 * ChartsApi - axios parameter creator
 * @export
 */
export const ChartsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint returns the data required to generate a chart with basic asset account balance information. 
         * @summary Dashboard chart with asset account balance information.
         * @param {string} start A date formatted YYYY-MM-DD. 
         * @param {string} end A date formatted YYYY-MM-DD. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChartAccountOverview: async (start: string, end: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'start' is not null or undefined
            assertParamExists('getChartAccountOverview', 'start', start)
            // verify required parameter 'end' is not null or undefined
            assertParamExists('getChartAccountOverview', 'end', end)
            const localVarPath = `/api/v1/chart/account/overview`;
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

            if (start !== undefined) {
                localVarQueryParameter['start'] = (start as any instanceof Date) ?
                    (start as any).toISOString().substr(0,10) :
                    start;
            }

            if (end !== undefined) {
                localVarQueryParameter['end'] = (end as any instanceof Date) ?
                    (end as any).toISOString().substr(0,10) :
                    end;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChartsApi - functional programming interface
 * @export
 */
export const ChartsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChartsApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint returns the data required to generate a chart with basic asset account balance information. 
         * @summary Dashboard chart with asset account balance information.
         * @param {string} start A date formatted YYYY-MM-DD. 
         * @param {string} end A date formatted YYYY-MM-DD. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChartAccountOverview(start: string, end: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChartLine>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChartAccountOverview(start, end, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChartsApi - factory interface
 * @export
 */
export const ChartsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChartsApiFp(configuration)
    return {
        /**
         * This endpoint returns the data required to generate a chart with basic asset account balance information. 
         * @summary Dashboard chart with asset account balance information.
         * @param {string} start A date formatted YYYY-MM-DD. 
         * @param {string} end A date formatted YYYY-MM-DD. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChartAccountOverview(start: string, end: string, options?: any): AxiosPromise<ChartLine> {
            return localVarFp.getChartAccountOverview(start, end, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getChartAccountOverview operation in ChartsApi.
 * @export
 * @interface ChartsApiGetChartAccountOverviewRequest
 */
export interface ChartsApiGetChartAccountOverviewRequest {
    /**
     * A date formatted YYYY-MM-DD. 
     * @type {string}
     * @memberof ChartsApiGetChartAccountOverview
     */
    readonly start: string

    /**
     * A date formatted YYYY-MM-DD. 
     * @type {string}
     * @memberof ChartsApiGetChartAccountOverview
     */
    readonly end: string
}

/**
 * ChartsApi - object-oriented interface
 * @export
 * @class ChartsApi
 * @extends {BaseAPI}
 */
export class ChartsApi extends BaseAPI {
    /**
     * This endpoint returns the data required to generate a chart with basic asset account balance information. 
     * @summary Dashboard chart with asset account balance information.
     * @param {ChartsApiGetChartAccountOverviewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChartsApi
     */
    public getChartAccountOverview(requestParameters: ChartsApiGetChartAccountOverviewRequest, options?: any) {
        return ChartsApiFp(this.configuration).getChartAccountOverview(requestParameters.start, requestParameters.end, options).then((request) => request(this.axios, this.basePath));
    }
}