/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare const HTTP_INTERCEPTORS: InjectionToken<HttpInterceptor[]>;

/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
export declare abstract class HttpBackend implements HttpHandler {
    abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
}

/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * @publicApi
 */
export declare class HttpClient {
    private handler;
    constructor(handler: HttpHandler);
    /**
     * Sends an `HTTPRequest` and returns a stream of `HTTPEvents`.
     *
     * @return An `Observable` of the response, with the response body as a stream of `HTTPEvents`.
     */
    request<R>(req: HttpRequest<any>): Observable<HttpEvent<R>>;
    /**
     * Constructs a request that interprets the body as an `ArrayBuffer` and returns the response in
     * an `ArrayBuffer`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a request that interprets the body as a blob and returns
     * the response as a blob.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a request that interprets the body as a text string and
     * returns a string value.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a request that interprets the body as an `ArrayBuffer` and returns the
     * the full event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an array of `HTTPEvents` for
     *     the
     * request.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a request that interprets the body as a `Blob` and returns
     * the full event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of of all `HttpEvents` for the request,
     * with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a request which interprets the body as a text string and returns the full event
     * stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the reques,
     * with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the  request.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     *  with the response body of type `Object`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<any>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body of type `R`.
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<R>>;
    /**
     * Constructs a request which interprets the body as an `ArrayBuffer`
     * and returns the full `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body as an `ArrayBuffer`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a request which interprets the body as a `Blob` and returns the full `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a request which interprets the body as a text stream and returns the full
     * `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the HTTP response, with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full
     * `HTTPResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse`,
     * with the response body of type `Object`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns
     * the full `HTTPResponse` with the response body in the requested type.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the full `HTTPResponse`, with the response body of type `R`.
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<R>>;
    /**
     * Constructs a request which interprets the body as a JSON object and returns the full
     * `HTTPResponse` as a JSON object.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Object`.
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a request which interprets the body as a JSON object
     * with the response body of the requested type.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `R`.
     */
    request<R>(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<R>;
    /**
     * Constructs a request where response type and requested observable are not known statically.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the reuested response, wuth body of type `any`.
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        observe?: HttpObserve;
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer`
     *  and returns the response as an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response body as a `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text string and returns
     * a string.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request,
     * with response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request, with the response body as a
     * `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request, with the response
     *  body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request, with response body of
     * type `Object`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `DELETE`request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request, with a response
     * body in the requested type.
     */
    delete<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer` and returns
     *  the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse`, with the response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob` and returns the full
     * `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text stream and
     *  returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse`, with the response body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `DELETE` request the interprets the body as a JSON object and returns
     * the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of type `Object`.
     *
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with the response body of the requested type.
     */
    delete<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Object`.
     */
    delete(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a DELETE request that interprets the body as a JSON object and returns
     * the response in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with response body in the requested type.
     */
    delete<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns the
     * response in an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob`
     * and returns the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `GET` request that interprets the body as a text string
     * and returns the response as a string value.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns
     *  the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the request, with the response
     * body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `GET` request that interprets the body as a text string and returns
     * the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Object`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with a response body in the requested type.
     */
    get<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob` and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     *  with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `GET` request that interprets the body as a text stream and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HttpResponse`,
     * with the response body of type `Object`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse` for the request,
     * with a response body in the requested type.
     */
    get<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     *
     * @return An `Observable` of the response body as a JSON object.
     */
    get(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `GET` request that interprets the body as a JSON object and returns
     * the response body in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse`, with a response body in the requested type.
     */
    get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `HEAD` request that interprets the body as an `ArrayBuffer` and
     * returns the response as an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the response, with the response body as a `Blob`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `HEAD` request that interprets the body as a text string and returns the response
     * as a string value.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `HEAD` request that interprets the body as an  `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of tall `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as a `Blob`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all HttpEvents for the request, with the response body of type
     *     string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object
     * and returns the full HTTP event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HTTPEvents` for the request, with a response body of
     * type `Object`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and
     * returns the full event stream.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request
     * , with a response body in the requested type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     */
    head<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `HEAD` request that interprets the body as an `ArrayBuffer`
     *  and returns the full HTTP response.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and returns
     * the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as a blob.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `HEAD` request that interprets the body as text stream
     * and returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body of type string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body of type `Object`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with a responmse body of the requested type.
     */
    head<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    head(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `HEAD` request that interprets the body as a JSON object and returns
     * the response in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with a response body of the given type.
     */
    head<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `JSONP` request for the given URL and name of the callback parameter.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     * @return An `Observable` of the response object, with response body as an object.
     */
    jsonp(url: string, callbackParam: string): Observable<Object>;
    /**
     * Constructs a `JSONP` request for the given URL and name of the callback parameter.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     * You must install a suitable interceptor, such as one provided by `HttpClientJsonpModule`.
     * If no such interceptor is reached,
     * then the `JSONP` request can be rejected by the configured backend.
     *
     * @return An `Observable` of the response object, with response body in the requested type.
     */
    jsonp<T>(url: string, callbackParam: string): Observable<T>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an
     * `ArrayBuffer` and returns the response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a text string and
     * returns a string value.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return  An `Observable` of all `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPEvents` for the request,
     * with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvents` for the request with the response
     * body of type `Object`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvents` for the request,
     * with a response body in the requested type.
     */
    options<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an `ArrayBuffer`
     *  and returns the full HTTP response.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob`
     *  and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     *  with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as text stream
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     *  with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body of type `Object`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    options<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and returns the
     * response body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    options(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a JSON object and returns the
     * response in a given type.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HTTPResponse`, with a response body of the given type.
     */
    options<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer` and returns
     * the response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob` and returns the response
     * as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer` and
     *  returns the the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob`
     *  and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request, with the
     * response body as `Blob`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text string and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents`for the request, with a
     * response body of type string.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request,
     * with a response body of type `Object`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HTTPevents` for the request,
     *  with a response body in the requested type.
     */
    patch<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer`
     *  and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     *  with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob` and returns the full
     * `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text stream and returns the
     * full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with a response body of type string.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    patch(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the given type.
     */
    patch<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object and
     * returns the response body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    patch(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `PATCH` request that interprets the body as a JSON object
     * and returns the response in a given type.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with a response body in the given type.
     */
    patch<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `POST` request that interprets the body as an `ArrayBuffer` and returns
     * an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob` and returns the
     * response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `POST` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `POST` request that interprets the body as an `ArrayBuffer` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob`
     * and returns the response in an observable of the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request, with the response body as `Blob`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `POST` request that interprets the body as a text string and returns the full
     * event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of all `HttpEvents` for the request,
     * with a response body of type string.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a POST request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of all `HttpEvents` for the request,
     * with a response body of type `Object`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a POST request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with a response body in the requested type.
     */
    post<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a POST request that interprets the body as an `ArrayBuffer`
     *  and returns the full `HTTPresponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HTTPResponse` for the request, with the response body as an
     *     `ArrayBuffer`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob` and returns the full
     * `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as a `Blob`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `POST` request that interprets the body as a text stream and returns
     * the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HTTPResponse` for the request,
     * with a response body of type string.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `POST` request that interprets the body as a JSON object
     * and returns the full `HTTPResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body of type
     * `Object`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `POST` request that interprets the body as a JSON object and returns the full
     * `HTTPResponse`.
     *
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body in the
     *     requested type.
     */
    post<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `POST` request that interprets the body as a
     * JSON object and returns the response body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    post(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `POST` request that interprets the body as a JSON object
     * and returns an observable of the response.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HTTPResponse` for the request, with a response body in the
     *     requested type.
     */
    post<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Constructs a `PUT` request that interprets the body as an `ArrayBuffer` and returns the
     * response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * Constructs a `PUT` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * Constructs a `PUT` request that interprets the body as an `ArrayBuffer` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with the response body as a `Blob`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `PUT` request that interprets the body as a text string and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all HttpEvents for the request, with a response body
     * of type string.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request, with a response body of
     * type `Object`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the
     * full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvents` for the request,
     * with a response body in the requested type.
     */
    put<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `PUT` request that interprets the body as an
     * `ArrayBuffer` and returns an observable of the full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with the response body as an
     *     `ArrayBuffer`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns the
     * full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with the response body as a `Blob`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `PUT` request that interprets the body as a text stream and returns the
     * full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body of type
     *     string.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the full HTTP
     * response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body
     * of type 'Object`.
     */
    put(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the full HTTP
     * response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request,
     * with a response body in the requested type.
     */
    put<T>(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object and returns the response
     * body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    put(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * Constructs a `PUT` request that interprets the body as a JSON object
     * and returns an observable of the response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HTTPResponse` for the request, with a response body in the
     *     requested type.
     */
    put<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpClient, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HttpClient>;
}

/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
export declare class HttpClientJsonpModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HttpClientJsonpModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HttpClientJsonpModule>;
}

/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
export declare class HttpClientModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HttpClientModule, never, [typeof HttpClientXsrfModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HttpClientModule>;
}

/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
export declare class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable(): ModuleWithProviders<HttpClientXsrfModule>;
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options?: {
        cookieName?: string;
        headerName?: string;
    }): ModuleWithProviders<HttpClientXsrfModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HttpClientXsrfModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HttpClientXsrfModule>;
}

/**
 * A download progress event.
 *
 * @publicApi
 */
export declare interface HttpDownloadProgressEvent extends HttpProgressEvent {
    type: HttpEventType.DownloadProgress;
    /**
     * The partial response body as downloaded so far.
     *
     * Only present if the responseType was `text`.
     */
    partialText?: string;
}

/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
export declare class HttpErrorResponse extends HttpResponseBase implements Error {
    readonly name = "HttpErrorResponse";
    readonly message: string;
    readonly error: any | null;
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */
    readonly ok = false;
    constructor(init: {
        error?: any;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
}

/**
 * Union type for all possible events on the response stream.
 *
 * Typed according to the expected type of the response.
 *
 * @publicApi
 */
export declare type HttpEvent<T> = HttpSentEvent | HttpHeaderResponse | HttpResponse<T> | HttpProgressEvent | HttpUserEvent<T>;

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
export declare enum HttpEventType {
    /**
     * The request was sent out over the wire.
     */
    Sent = 0,
    /**
     * An upload progress event was received.
     */
    UploadProgress = 1,
    /**
     * The response status code and headers were received.
     */
    ResponseHeader = 2,
    /**
     * A download progress event was received.
     */
    DownloadProgress = 3,
    /**
     * The full response including the body was received.
     */
    Response = 4,
    /**
     * A custom event from an interceptor or a backend.
     */
    User = 5
}

/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
export declare abstract class HttpHandler {
    abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
}

/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
export declare class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    constructor(init?: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
    readonly type: HttpEventType.ResponseHeader;
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    clone(update?: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpHeaderResponse;
}


/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
export declare class HttpHeaders {
    /**
     * Internal map of lowercase header names to values.
     */
    private headers;
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    private normalizedNames;
    /**
     * Complete the lazy initialization of this object (needed before reading).
     */
    private lazyInit;
    /**
     * Queued updates to be materialized the next initialization.
     */
    private lazyUpdate;
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers?: string | {
        [name: string]: string | string[];
    });
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name: string): boolean;
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name: string): string | null;
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys(): string[];
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name: string): string[] | null;
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name: string, value: string | string[]): HttpHeaders;
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name: string, value: string | string[]): HttpHeaders;
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name: string, value?: string | string[]): HttpHeaders;
    private maybeSetNormalizedName;
    private init;
    private copyFrom;
    private clone;
    private applyUpdate;
}

/**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 *
 * Most interceptors transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 * An interceptor may transform the
 * response event stream as well, by applying additional RxJS operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may handle the request entirely,
 * and compose a new event stream instead of invoking `next.handle()`. This is an
 * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 *
 * @publicApi
 *
 * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
 *
 * @usageNotes
 *
 * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
 * only in your `AppModule`, and add the interceptors to the root application injector .
 * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
 * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the
 * interceptors provided in the root module.
 *
 */
export declare interface HttpInterceptor {
    /**
     * Identifies and handles a given HTTP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}

declare type HttpObserve = 'body' | 'events' | 'response';


/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * @publicApi
 **/
export declare interface HttpParameterCodec {
    encodeKey(key: string): string;
    encodeValue(value: string): string;
    decodeKey(key: string): string;
    decodeValue(value: string): string;
}

/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
export declare class HttpParams {
    private map;
    private encoder;
    private updates;
    private cloneFrom;
    constructor(options?: HttpParamsOptions);
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param: string): boolean;
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param: string): string | null;
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param: string): string[] | null;
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys(): string[];
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param: string, value: string): HttpParams;
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param: string, value: string): HttpParams;
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param: string, value?: string): HttpParams;
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString(): string;
    private clone;
    private init;
}

/**
 * Options used to construct an `HttpParams` instance.
 *
 * @publicApi
 */
declare interface HttpParamsOptions {
    /**
     * String representation of the HTTP parameters in URL-query-string format.
     * Mutually exclusive with `fromObject`.
     */
    fromString?: string;
    /** Object map of the HTTP parameters. Mutually exclusive with `fromString`. */
    fromObject?: {
        [param: string]: string | ReadonlyArray<string>;
    };
    /** Encoding codec used to parse and serialize the parameters. */
    encoder?: HttpParameterCodec;
}

/**
 * Base interface for progress events.
 *
 * @publicApi
 */
export declare interface HttpProgressEvent {
    /**
     * Progress event type is either upload or download.
     */
    type: HttpEventType.DownloadProgress | HttpEventType.UploadProgress;
    /**
     * Number of bytes uploaded or downloaded.
     */
    loaded: number;
    /**
     * Total number of bytes to upload or download. Depending on the request or
     * response, this may not be computable and thus may not be present.
     */
    total?: number;
}

/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
export declare class HttpRequest<T> {
    readonly url: string;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */
    readonly body: T | null;
    /**
     * Outgoing headers for this request.
     */
    readonly headers: HttpHeaders;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */
    readonly reportProgress: boolean;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */
    readonly withCredentials: boolean;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */
    readonly responseType: 'arraybuffer' | 'blob' | 'json' | 'text';
    /**
     * The outgoing HTTP request method.
     */
    readonly method: string;
    /**
     * Outgoing URL parameters.
     */
    readonly params: HttpParams;
    /**
     * The outgoing URL with all URL parameters set.
     */
    readonly urlWithParams: string;
    constructor(method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS', url: string, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    constructor(method: 'POST' | 'PUT' | 'PATCH', url: string, body: T | null, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    constructor(method: string, url: string, body: T | null, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    serializeBody(): ArrayBuffer | Blob | FormData | string | null;
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    detectContentTypeHeader(): string | null;
    clone(): HttpRequest<T>;
    clone(update: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        body?: T | null;
        method?: string;
        url?: string;
        setHeaders?: {
            [name: string]: string | string[];
        };
        setParams?: {
            [param: string]: string;
        };
    }): HttpRequest<T>;
    clone<V>(update: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        body?: V | null;
        method?: string;
        url?: string;
        setHeaders?: {
            [name: string]: string | string[];
        };
        setParams?: {
            [param: string]: string;
        };
    }): HttpRequest<V>;
}

/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
export declare class HttpResponse<T> extends HttpResponseBase {
    /**
     * The response body, or `null` if one was not returned.
     */
    readonly body: T | null;
    /**
     * Construct a new `HttpResponse`.
     */
    constructor(init?: {
        body?: T | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
    readonly type: HttpEventType.Response;
    clone(): HttpResponse<T>;
    clone(update: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<T>;
    clone<V>(update: {
        body?: V | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<V>;
}

/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
export declare abstract class HttpResponseBase {
    /**
     * All response headers.
     */
    readonly headers: HttpHeaders;
    /**
     * Response status code.
     */
    readonly status: number;
    /**
     * Textual description of response status code.
     *
     * Do not depend on this.
     */
    readonly statusText: string;
    /**
     * URL of the resource retrieved, or null if not available.
     */
    readonly url: string | null;
    /**
     * Whether the status code falls in the 2xx range.
     */
    readonly ok: boolean;
    /**
     * Type of the response, narrowed to either the full response or the header.
     */
    readonly type: HttpEventType.Response | HttpEventType.ResponseHeader;
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    constructor(init: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }, defaultStatus?: number, defaultStatusText?: string);
}

/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * @publicApi
 */
export declare interface HttpSentEvent {
    type: HttpEventType.Sent;
}

/**
 * An upload progress event.
 *
 * @publicApi
 */
export declare interface HttpUploadProgressEvent extends HttpProgressEvent {
    type: HttpEventType.UploadProgress;
}

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
export declare class HttpUrlEncodingCodec implements HttpParameterCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    encodeKey(key: string): string;
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    encodeValue(value: string): string;
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    decodeKey(key: string): string;
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    decodeValue(value: string): string;
}

/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * @publicApi
 */
export declare interface HttpUserEvent<T> {
    type: HttpEventType.User;
}

/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
export declare class HttpXhrBackend implements HttpBackend {
    private xhrFactory;
    constructor(xhrFactory: XhrFactory);
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpXhrBackend, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HttpXhrBackend>;
}

/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
export declare abstract class HttpXsrfTokenExtractor {
    /**
     * Get the XSRF token to use with an outgoing request.
     *
     * Will be called for every request, so the token may change between requests.
     */
    abstract getToken(): string | null;
}

/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
export declare class JsonpClientBackend implements HttpBackend {
    private callbackMap;
    private document;
    constructor(callbackMap: ɵangular_packages_common_http_http_b, document: any);
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    private nextCallback;
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req: HttpRequest<never>): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonpClientBackend, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<JsonpClientBackend>;
}

/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
export declare class JsonpInterceptor {
    private jsonp;
    constructor(jsonp: JsonpClientBackend);
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonpInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<JsonpInterceptor>;
}

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
export declare abstract class XhrFactory {
    abstract build(): XMLHttpRequest;
}

export declare class ɵangular_packages_common_http_http_a implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_a, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_a>;
}

/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
export declare abstract class ɵangular_packages_common_http_http_b {
    [key: string]: (data: any) => void;
}

/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
export declare function ɵangular_packages_common_http_http_c(): Object;

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
export declare class ɵangular_packages_common_http_http_d implements XhrFactory {
    constructor();
    build(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_d, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_d>;
}

export declare const ɵangular_packages_common_http_http_e: InjectionToken<string>;

export declare const ɵangular_packages_common_http_http_f: InjectionToken<string>;

/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
export declare class ɵangular_packages_common_http_http_g implements HttpXsrfTokenExtractor {
    private doc;
    private platform;
    private cookieName;
    private lastCookieString;
    private lastToken;
    constructor(doc: any, platform: string, cookieName: string);
    getToken(): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_g, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_g>;
}

/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
export declare class ɵangular_packages_common_http_http_h implements HttpInterceptor {
    private tokenService;
    private headerName;
    constructor(tokenService: HttpXsrfTokenExtractor, headerName: string);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_http_h, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_http_h>;
}

/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
export declare class ɵHttpInterceptingHandler implements HttpHandler {
    private backend;
    private injector;
    private chain;
    constructor(backend: HttpBackend, injector: Injector);
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵHttpInterceptingHandler, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵHttpInterceptingHandler>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kLnRzIiwic291cmNlcyI6WyJodHRwLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4xLjEyXG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEEgbXVsdGktcHJvdmlkZXIgdG9rZW4gdGhhdCByZXByZXNlbnRzIHRoZSBhcnJheSBvZiByZWdpc3RlcmVkXHJcbiAqIGBIdHRwSW50ZXJjZXB0b3JgIG9iamVjdHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEhUVFBfSU5URVJDRVBUT1JTOiBJbmplY3Rpb25Ub2tlbjxIdHRwSW50ZXJjZXB0b3JbXT47XHJcblxyXG4vKipcclxuICogQSBmaW5hbCBgSHR0cEhhbmRsZXJgIHdoaWNoIHdpbGwgZGlzcGF0Y2ggdGhlIHJlcXVlc3QgdmlhIGJyb3dzZXIgSFRUUCBBUElzIHRvIGEgYmFja2VuZC5cclxuICpcclxuICogSW50ZXJjZXB0b3JzIHNpdCBiZXR3ZWVuIHRoZSBgSHR0cENsaWVudGAgaW50ZXJmYWNlIGFuZCB0aGUgYEh0dHBCYWNrZW5kYC5cclxuICpcclxuICogV2hlbiBpbmplY3RlZCwgYEh0dHBCYWNrZW5kYCBkaXNwYXRjaGVzIHJlcXVlc3RzIGRpcmVjdGx5IHRvIHRoZSBiYWNrZW5kLCB3aXRob3V0IGdvaW5nXHJcbiAqIHRocm91Z2ggdGhlIGludGVyY2VwdG9yIGNoYWluLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBIdHRwQmFja2VuZCBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcclxuICAgIGFic3RyYWN0IGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBlcmZvcm1zIEhUVFAgcmVxdWVzdHMuXHJcbiAqIFRoaXMgc2VydmljZSBpcyBhdmFpbGFibGUgYXMgYW4gaW5qZWN0YWJsZSBjbGFzcywgd2l0aCBtZXRob2RzIHRvIHBlcmZvcm0gSFRUUCByZXF1ZXN0cy5cclxuICogRWFjaCByZXF1ZXN0IG1ldGhvZCBoYXMgbXVsdGlwbGUgc2lnbmF0dXJlcywgYW5kIHRoZSByZXR1cm4gdHlwZSB2YXJpZXMgYmFzZWQgb25cclxuICogdGhlIHNpZ25hdHVyZSB0aGF0IGlzIGNhbGxlZCAobWFpbmx5IHRoZSB2YWx1ZXMgb2YgYG9ic2VydmVgIGFuZCBgcmVzcG9uc2VUeXBlYCkuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgYHJlc3BvbnNlVHlwZWAgKm9wdGlvbnMqIHZhbHVlIGlzIGEgU3RyaW5nIHRoYXQgaWRlbnRpZmllcyB0aGVcclxuICogc2luZ2xlIGRhdGEgdHlwZSBvZiB0aGUgcmVzcG9uc2UuXHJcbiAqIEEgc2luZ2xlIG92ZXJsb2FkIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBoYW5kbGVzIGVhY2ggcmVzcG9uc2UgdHlwZS5cclxuICogVGhlIHZhbHVlIG9mIGByZXNwb25zZVR5cGVgIGNhbm5vdCBiZSBhIHVuaW9uLCBhcyB0aGUgY29tYmluZWQgc2lnbmF0dXJlIGNvdWxkIGltcGx5LlxyXG5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogU2FtcGxlIEhUVFAgcmVxdWVzdHMgZm9yIHRoZSBbVG91ciBvZiBIZXJvZXNdKC90dXRvcmlhbC90b2gtcHQwKSBhcHBsaWNhdGlvbi5cclxuICpcclxuICogIyMjIEhUVFAgUmVxdWVzdCBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAgLy8gR0VUIGhlcm9lcyB3aG9zZSBuYW1lIGNvbnRhaW5zIHNlYXJjaCB0ZXJtXHJcbiAqIHNlYXJjaEhlcm9lcyh0ZXJtOiBzdHJpbmcpOiBvYnNlcnZhYmxlPEhlcm9bXT57XHJcbiAqXHJcbiAqICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7ZnJvbVN0cmluZzogJ25hbWU9dGVybSd9KTtcclxuICogICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0KCdHRVQnLCB0aGlzLmhlcm9lc1VybCwge3Jlc3BvbnNlVHlwZTonanNvbicsIHBhcmFtc30pO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiAjIyMgSlNPTlAgRXhhbXBsZVxyXG4gKiBgYGBcclxuICogcmVxdWVzdEpzb25wKHVybCwgY2FsbGJhY2sgPSAnY2FsbGJhY2snKSB7XHJcbiAqICByZXR1cm4gdGhpcy5odHRwQ2xpZW50Lmpzb25wKHRoaXMuaGVyb2VzVVJMLCBjYWxsYmFjayk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBQQVRDSCBFeGFtcGxlXHJcbiAqIGBgYFxyXG4gKiAvLyBQQVRDSCBvbmUgb2YgdGhlIGhlcm9lcycgbmFtZVxyXG4gKiBwYXRjaEhlcm8gKGlkOiBudW1iZXIsIGhlcm9OYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XHJcbiAqIGNvbnN0IHVybCA9IGAke3RoaXMuaGVyb2VzVXJsfS8ke2lkfWA7ICAgLy8gUEFUQ0ggYXBpL2hlcm9lcy80MlxyXG4gKiAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wYXRjaCh1cmwsIHtuYW1lOiBoZXJvTmFtZX0sIGh0dHBPcHRpb25zKVxyXG4gKiAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ3BhdGNoSGVybycpKSk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBzZWUgW0hUVFAgR3VpZGVdKGd1aWRlL2h0dHApXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBDbGllbnQge1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyO1xyXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcjogSHR0cEhhbmRsZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhbiBgSFRUUFJlcXVlc3RgIGFuZCByZXR1cm5zIGEgc3RyZWFtIG9mIGBIVFRQRXZlbnRzYC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBzdHJlYW0gb2YgYEhUVFBFdmVudHNgLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0PFI+KHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlIGluXHJcbiAgICAgKiBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBibG9iIGFuZCByZXR1cm5zXHJcbiAgICAgKiB0aGUgcmVzcG9uc2UgYXMgYSBibG9iLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmcgYW5kXHJcbiAgICAgKiByZXR1cm5zIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJucyB0aGVcclxuICAgICAqIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kICBUaGUgSFRUUCBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGFycmF5IG9mIGBIVFRQRXZlbnRzYCBmb3JcclxuICAgICAqICAgICB0aGVcclxuICAgICAqIHJlcXVlc3QuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kICBUaGUgSFRUUCBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2Ygb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHdoaWNoIGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudFxyXG4gICAgICogc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzLFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHdoaWNoIGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudFxyXG4gICAgICogc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiAgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHdoaWNoIGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudFxyXG4gICAgICogc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgUmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3Q8Uj4obWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxSPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSByZXF1ZXN0IHdoaWNoIGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ldGhvZCAgVGhlIEhUVFAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB3aGljaCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB3aGljaCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJlYW0gYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgSFRUUCByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hpY2ggaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsXHJcbiAgICAgKiBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kICBUaGUgSFRUUCBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgYE9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgcmVxdWVzdCB3aGljaCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgUmAuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3Q8Uj4obWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hpY2ggaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsXHJcbiAgICAgKiBgSFRUUFJlc3BvbnNlYCBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgYm9keT86IGFueTtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8T2JqZWN0PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hpY2ggaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kICBUaGUgSFRUUCBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgYFJgLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0PFI+KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxSPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIHJlcXVlc3Qgd2hlcmUgcmVzcG9uc2UgdHlwZSBhbmQgcmVxdWVzdGVkIG9ic2VydmFibGUgYXJlIG5vdCBrbm93biBzdGF0aWNhbGx5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXRob2QgIFRoZSBIVFRQIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmV1ZXN0ZWQgcmVzcG9uc2UsIHd1dGggYm9keSBvZiB0eXBlIGBhbnlgLlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IHtcclxuICAgICAgICBib2R5PzogYW55O1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86IEh0dHBPYnNlcnZlO1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYFxyXG4gICAgICogIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zXHJcbiAgICAgKiB0aGUgcmVzcG9uc2UgYXMgYSBgQmxvYmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmcgYW5kIHJldHVybnNcclxuICAgICAqIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEhUVFBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhXHJcbiAgICAgKiBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZ1xyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEhUVFBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCB0aGUgcmVzcG9uc2VcclxuICAgICAqICBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEhUVFBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCByZXNwb25zZSBib2R5IG9mXHJcbiAgICAgKiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgdGhlIGBIVFRQRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggYSByZXNwb25zZVxyXG4gICAgICogYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZTxUPih1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBERUxFVEVgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kIHJldHVybnNcclxuICAgICAqICB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYERFTEVURWAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyZWFtIGFuZFxyXG4gICAgICogIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoZSBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgREVMRVRFYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgREVMRVRFIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSByZXNwb25zZSBpbiBhIGdpdmVuIHR5cGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCwgd2l0aCByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiByZXNwb25zZSBpbiBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UgYXMgYSBgQmxvYmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QmxvYj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UgYXMgYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBvZiB0eXBlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kIHJldHVybnNcclxuICAgICAqICB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZSByZXNwb25zZVxyXG4gICAgICogYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmcgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgR0VUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyZWFtIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgZnVsbCBgSHR0cFJlc3BvbnNlYCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGdldDxUPih1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEdFVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8T2JqZWN0PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBHRVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSByZXNwb25zZSBib2R5IGluIGEgZ2l2ZW4gdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgLCB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGdldDxUPih1cmw6IHN0cmluZywgb3B0aW9ucz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8VD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIHJlc3BvbnNlIGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBoZWFkKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBIRUFEYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIHJlc3BvbnNlIGFzIGEgYEJsb2JgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBoZWFkKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QmxvYj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2VcclxuICAgICAqIGFzIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuICBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0YWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgaGVhZCh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmdcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIEh0dHBFdmVudHMgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGVcclxuICAgICAqICAgICBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIEhUVFAgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEhUVFBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2ZcclxuICAgICAqIHR5cGUgYE9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBIRUFEYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIHRoZSBgSFRUUEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0XHJcbiAgICAgKiAsIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKi9cclxuICAgIGhlYWQ8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYFxyXG4gICAgICogIGFuZCByZXR1cm5zIHRoZSBmdWxsIEhUVFAgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGJsb2IuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIHRleHQgc3RyZWFtXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEhUVFAgb3B0aW9ucyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSEVBRGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgYE9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgICAgIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgSFRUUCBvcHRpb25zIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3Bvbm1zZSBib2R5IG9mIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgaGVhZDxUPih1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBoZWFkKHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEhFQURgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSByZXNwb25zZSBpbiBhIGdpdmVuIHR5cGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgICAgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICAgICAqL1xyXG4gICAgaGVhZDxUPih1cmw6IHN0cmluZywgb3B0aW9ucz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8VD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgSlNPTlBgIHJlcXVlc3QgZm9yIHRoZSBnaXZlbiBVUkwgYW5kIG5hbWUgb2YgdGhlIGNhbGxiYWNrIHBhcmFtZXRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSByZXNvdXJjZSBVUkwuXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tQYXJhbSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2Ugb2JqZWN0LCB3aXRoIHJlc3BvbnNlIGJvZHkgYXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBqc29ucCh1cmw6IHN0cmluZywgY2FsbGJhY2tQYXJhbTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYEpTT05QYCByZXF1ZXN0IGZvciB0aGUgZ2l2ZW4gVVJMIGFuZCBuYW1lIG9mIHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgcmVzb3VyY2UgVVJMLlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG5hbWUuXHJcbiAgICAgKlxyXG4gICAgICogWW91IG11c3QgaW5zdGFsbCBhIHN1aXRhYmxlIGludGVyY2VwdG9yLCBzdWNoIGFzIG9uZSBwcm92aWRlZCBieSBgSHR0cENsaWVudEpzb25wTW9kdWxlYC5cclxuICAgICAqIElmIG5vIHN1Y2ggaW50ZXJjZXB0b3IgaXMgcmVhY2hlZCxcclxuICAgICAqIHRoZW4gdGhlIGBKU09OUGAgcmVxdWVzdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIGNvbmZpZ3VyZWQgYmFja2VuZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2Ugb2JqZWN0LCB3aXRoIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBqc29ucDxUPih1cmw6IHN0cmluZywgY2FsbGJhY2tQYXJhbTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW5cclxuICAgICAqIGBBcnJheUJ1ZmZlcmAgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlIGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnNcclxuICAgICAqIHRoZSByZXNwb25zZSBhcyBhIGBCbG9iYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QmxvYj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmcgYW5kXHJcbiAgICAgKiByZXR1cm5zIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIGBCbG9iYCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZ1xyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgdGhlIGBIVFRQRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgdGhlIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3Qgd2l0aCB0aGUgcmVzcG9uc2VcclxuICAgICAqIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgb3B0aW9uczxUPih1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhbiBgT1BUSU9OU2AgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYFxyXG4gICAgICogIGFuZCByZXR1cm5zIHRoZSBmdWxsIEhUVFAgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSHR0cFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnModXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSHR0cFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiAgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIHRleHQgc3RyZWFtXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqICB3aXRoIHRoZSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEh0dHBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9QVElPTlNgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGBPUFRJT05TYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZVxyXG4gICAgICogcmVzcG9uc2UgaW4gYSBnaXZlbiB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAsIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zPFQ+KHVybDogc3RyaW5nLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJuc1xyXG4gICAgICogdGhlIHJlc3BvbnNlIGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxBcnJheUJ1ZmZlcj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZVxyXG4gICAgICogYXMgYSBgQmxvYmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIGBCbG9iYC5cclxuICAgICAqL1xyXG4gICAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIHJlc3BvbnNlIGFzIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gZWRpdC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kXHJcbiAgICAgKiAgcmV0dXJucyB0aGUgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gZWRpdC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgdGhlIGBIVFRQZXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QXJyYXlCdWZmZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBldmVudHNgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCB0aGVcclxuICAgICAqIHJlc3BvbnNlIGJvZHkgYXMgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nIGFuZFxyXG4gICAgICogcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBldmVudHNgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIGFcclxuICAgICAqIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gZWRpdC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgdGhlIGBIVFRQZXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZiB0eXBlIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCB0aGUgYEhUVFBldmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqICB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoPFQ+KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgXHJcbiAgICAgKiAgYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEh0dHBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zIHRoZSBmdWxsXHJcbiAgICAgKiBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiAgQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSHR0cFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUEFUQ0hgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJlYW0gYW5kIHJldHVybnMgdGhlXHJcbiAgICAgKiBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gZWRpdC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSHR0cFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGZ1bGwgYEhUVFBSZXNwb25zZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBlZGl0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSHR0cFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgZ2l2ZW4gdHlwZS5cclxuICAgICAqL1xyXG4gICAgcGF0Y2g8VD4odXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQQVRDSGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBBVENIYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0XHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UgaW4gYSBnaXZlbiB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gZWRpdC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIdHRwUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwYXRjaDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9ucz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8VD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJuc1xyXG4gICAgICogYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zIHRoZVxyXG4gICAgICogcmVzcG9uc2UgYXMgYSBgQmxvYmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8QmxvYj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIHJlc3BvbnNlIGFzIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmAgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmBcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZSBpbiBhbiBvYnNlcnZhYmxlIG9mIHRoZSBmdWxsIGV2ZW50IHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBmdWxsXHJcbiAgICAgKiBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiAgQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgUE9TVCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiAgQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgb2YgdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgUE9TVCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIGV2ZW50XHJcbiAgICAgKiBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHBvc3Q8VD4odXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBQT1NUIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGFuIGBBcnJheUJ1ZmZlcmBcclxuICAgICAqICBhbmQgcmV0dXJucyB0aGUgZnVsbCBgSFRUUHJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhblxyXG4gICAgICogICAgIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5QnVmZmVyPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUE9TVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlIGZ1bGxcclxuICAgICAqIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJsb2I+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIHRleHQgc3RyZWFtIGFuZCByZXR1cm5zXHJcbiAgICAgKiB0aGUgZnVsbCBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgY29udGVudCB0byByZXBsYWNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBmdWxsIGBIVFRQUmVzcG9uc2VgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHR5cGVcclxuICAgICAqIGBPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsXHJcbiAgICAgKiBgSFRUUFJlc3BvbnNlYC5cclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIGNvbnRlbnQgdG8gcmVwbGFjZSB3aXRoLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlXHJcbiAgICAgKiAgICAgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHBvc3Q8VD4odXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQT1NUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhXHJcbiAgICAgKiBKU09OIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSByZXNwb25zZSwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBPU1RgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgb2YgdGhlIHJlc3BvbnNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBjb250ZW50IHRvIHJlcGxhY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGVcclxuICAgICAqICAgICByZXF1ZXN0ZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcG9zdDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9ucz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8VD47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgIGFuZCByZXR1cm5zIHRoZVxyXG4gICAgICogcmVzcG9uc2UgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYC5cclxuICAgICAqL1xyXG4gICAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEFycmF5QnVmZmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zXHJcbiAgICAgKiB0aGUgcmVzcG9uc2UgYXMgYSBgQmxvYmAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxCbG9iPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgdGV4dCBzdHJpbmcgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSByZXNwb25zZSBhcyBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgcmVzcG9uc2UsIHdpdGggYSByZXNwb25zZSBib2R5IG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYW4gYEFycmF5QnVmZmVyYCBhbmRcclxuICAgICAqIHJldHVybnMgdGhlIGZ1bGwgZXZlbnQgc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhbiBgQXJyYXlCdWZmZXJgLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBgQmxvYmAgYW5kIHJldHVybnMgdGhlIGZ1bGwgZXZlbnRcclxuICAgICAqIHN0cmVhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiBhbGwgYEh0dHBFdmVudHNgIGZvciB0aGUgcmVxdWVzdCxcclxuICAgICAqIHdpdGggdGhlIHJlc3BvbnNlIGJvZHkgYXMgYSBgQmxvYmAuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmluZyBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudFxyXG4gICAgICogc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBIdHRwRXZlbnRzIGZvciB0aGUgcmVxdWVzdCwgd2l0aCBhIHJlc3BvbnNlIGJvZHlcclxuICAgICAqIG9mIHR5cGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHN0cmluZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgZnVsbCBldmVudFxyXG4gICAgICogc3RyZWFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIGFsbCBgSHR0cEV2ZW50c2AgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZlxyXG4gICAgICogdHlwZSBgT2JqZWN0YC5cclxuICAgICAqL1xyXG4gICAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnkgfCBudWxsLCBvcHRpb25zOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8T2JqZWN0Pj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZVxyXG4gICAgICogZnVsbCBldmVudCBzdHJlYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgYWxsIGBIdHRwRXZlbnRzYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIGEgcmVzcG9uc2UgYm9keSBpbiB0aGUgcmVxdWVzdGVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHB1dDxUPih1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhblxyXG4gICAgICogYEFycmF5QnVmZmVyYCBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIG9mIHRoZSBmdWxsIEhUVFAgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIGBIVFRQUmVzcG9uc2VgIGZvciB0aGUgcmVxdWVzdCwgd2l0aCB0aGUgcmVzcG9uc2UgYm9keSBhcyBhblxyXG4gICAgICogICAgIGBBcnJheUJ1ZmZlcmAuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9uczoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXJyYXlCdWZmZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgYEJsb2JgIGFuZCByZXR1cm5zIHRoZVxyXG4gICAgICogZnVsbCBIVFRQIHJlc3BvbnNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsXHJcbiAgICAgKiB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgYEJsb2JgLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QmxvYj4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSB0ZXh0IHN0cmVhbSBhbmQgcmV0dXJucyB0aGVcclxuICAgICAqIGZ1bGwgSFRUUCByZXNwb25zZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LCB3aXRoIGEgcmVzcG9uc2UgYm9keSBvZiB0eXBlXHJcbiAgICAgKiAgICAgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8c3RyaW5nPj47XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBgUFVUYCByZXF1ZXN0IHRoYXQgaW50ZXJwcmV0cyB0aGUgYm9keSBhcyBhIEpTT04gb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBmdWxsIEhUVFBcclxuICAgICAqIHJlc3BvbnNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggYSByZXNwb25zZSBib2R5XHJcbiAgICAgKiBvZiB0eXBlICdPYmplY3RgLlxyXG4gICAgICovXHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgYFBVVGAgcmVxdWVzdCB0aGF0IGludGVycHJldHMgdGhlIGJvZHkgYXMgYSBKU09OIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgZnVsbCBIVFRQXHJcbiAgICAgKiByZXNwb25zZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBlbmRwb2ludCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcmVzb3VyY2VzIHRvIGFkZC91cGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBIVFRQIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIGBPYnNlcnZhYmxlYCBvZiB0aGUgYEhUVFBSZXNwb25zZWAgZm9yIHRoZSByZXF1ZXN0LFxyXG4gICAgICogd2l0aCBhIHJlc3BvbnNlIGJvZHkgaW4gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwdXQ8VD4odXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3QgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlXHJcbiAgICAgKiBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgZW5kcG9pbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGJvZHkgVGhlIHJlc291cmNlcyB0byBhZGQvdXBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgSFRUUCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBgT2JzZXJ2YWJsZWAgb2YgdGhlIHJlc3BvbnNlLCB3aXRoIHRoZSByZXNwb25zZSBib2R5IGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55IHwgbnVsbCwgb3B0aW9ucz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk6IE9ic2VydmFibGU8T2JqZWN0PjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIGBQVVRgIHJlcXVlc3QgdGhhdCBpbnRlcnByZXRzIHRoZSBib2R5IGFzIGEgSlNPTiBvYmplY3RcclxuICAgICAqIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgb2YgdGhlIHJlc3BvbnNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIGVuZHBvaW50IFVSTC5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSByZXNvdXJjZXMgdG8gYWRkL3VwZGF0ZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEhUVFAgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gYE9ic2VydmFibGVgIG9mIHRoZSBgSFRUUFJlc3BvbnNlYCBmb3IgdGhlIHJlcXVlc3QsIHdpdGggYSByZXNwb25zZSBib2R5IGluIHRoZVxyXG4gICAgICogICAgIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwdXQ8VD4odXJsOiBzdHJpbmcsIGJvZHk6IGFueSB8IG51bGwsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pOiBPYnNlcnZhYmxlPFQ+O1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlndXJlcyB0aGUgW2RlcGVuZGVuY3kgaW5qZWN0b3JdKGd1aWRlL2dsb3NzYXJ5I2luamVjdG9yKSBmb3IgYEh0dHBDbGllbnRgXHJcbiAqIHdpdGggc3VwcG9ydGluZyBzZXJ2aWNlcyBmb3IgSlNPTlAuXHJcbiAqIFdpdGhvdXQgdGhpcyBtb2R1bGUsIEpzb25wIHJlcXVlc3RzIHJlYWNoIHRoZSBiYWNrZW5kXHJcbiAqIHdpdGggbWV0aG9kIEpTT05QLCB3aGVyZSB0aGV5IGFyZSByZWplY3RlZC5cclxuICpcclxuICogWW91IGNhbiBhZGQgaW50ZXJjZXB0b3JzIHRvIHRoZSBjaGFpbiBiZWhpbmQgYEh0dHBDbGllbnRgIGJ5IGJpbmRpbmcgdGhlbSB0byB0aGVcclxuICogbXVsdGlwcm92aWRlciBmb3IgYnVpbHQtaW4gW0RJIHRva2VuXShndWlkZS9nbG9zc2FyeSNkaS10b2tlbikgYEhUVFBfSU5URVJDRVBUT1JTYC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cENsaWVudEpzb25wTW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyZXMgdGhlIFtkZXBlbmRlbmN5IGluamVjdG9yXShndWlkZS9nbG9zc2FyeSNpbmplY3RvcikgZm9yIGBIdHRwQ2xpZW50YFxyXG4gKiB3aXRoIHN1cHBvcnRpbmcgc2VydmljZXMgZm9yIFhTUkYuIEF1dG9tYXRpY2FsbHkgaW1wb3J0ZWQgYnkgYEh0dHBDbGllbnRNb2R1bGVgLlxyXG4gKlxyXG4gKiBZb3UgY2FuIGFkZCBpbnRlcmNlcHRvcnMgdG8gdGhlIGNoYWluIGJlaGluZCBgSHR0cENsaWVudGAgYnkgYmluZGluZyB0aGVtIHRvIHRoZVxyXG4gKiBtdWx0aXByb3ZpZGVyIGZvciBidWlsdC1pbiBbREkgdG9rZW5dKGd1aWRlL2dsb3NzYXJ5I2RpLXRva2VuKSBgSFRUUF9JTlRFUkNFUFRPUlNgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwQ2xpZW50TW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyZXMgWFNSRiBwcm90ZWN0aW9uIHN1cHBvcnQgZm9yIG91dGdvaW5nIHJlcXVlc3RzLlxyXG4gKlxyXG4gKiBGb3IgYSBzZXJ2ZXIgdGhhdCBzdXBwb3J0cyBhIGNvb2tpZS1iYXNlZCBYU1JGIHByb3RlY3Rpb24gc3lzdGVtLFxyXG4gKiB1c2UgZGlyZWN0bHkgdG8gY29uZmlndXJlIFhTUkYgcHJvdGVjdGlvbiB3aXRoIHRoZSBjb3JyZWN0XHJcbiAqIGNvb2tpZSBhbmQgaGVhZGVyIG5hbWVzLlxyXG4gKlxyXG4gKiBJZiBubyBuYW1lcyBhcmUgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IGNvb2tpZSBuYW1lIGlzIGBYU1JGLVRPS0VOYFxyXG4gKiBhbmQgdGhlIGRlZmF1bHQgaGVhZGVyIG5hbWUgaXMgYFgtWFNSRi1UT0tFTmAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBDbGllbnRYc3JmTW9kdWxlIHtcclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZSB0aGUgZGVmYXVsdCBYU1JGIHByb3RlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaXNhYmxlKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SHR0cENsaWVudFhzcmZNb2R1bGU+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmUgWFNSRiBwcm90ZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IHRoYXQgY2FuIHNwZWNpZnkgZWl0aGVyIG9yIGJvdGhcclxuICAgICAqIGNvb2tpZSBuYW1lIG9yIGhlYWRlciBuYW1lLlxyXG4gICAgICogLSBDb29raWUgbmFtZSBkZWZhdWx0IGlzIGBYU1JGLVRPS0VOYC5cclxuICAgICAqIC0gSGVhZGVyIG5hbWUgZGVmYXVsdCBpcyBgWC1YU1JGLVRPS0VOYC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB3aXRoT3B0aW9ucyhvcHRpb25zPzoge1xyXG4gICAgICAgIGNvb2tpZU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgaGVhZGVyTmFtZT86IHN0cmluZztcclxuICAgIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEh0dHBDbGllbnRYc3JmTW9kdWxlPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZG93bmxvYWQgcHJvZ3Jlc3MgZXZlbnQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBIdHRwRG93bmxvYWRQcm9ncmVzc0V2ZW50IGV4dGVuZHMgSHR0cFByb2dyZXNzRXZlbnQge1xyXG4gICAgdHlwZTogSHR0cEV2ZW50VHlwZS5Eb3dubG9hZFByb2dyZXNzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGFydGlhbCByZXNwb25zZSBib2R5IGFzIGRvd25sb2FkZWQgc28gZmFyLlxyXG4gICAgICpcclxuICAgICAqIE9ubHkgcHJlc2VudCBpZiB0aGUgcmVzcG9uc2VUeXBlIHdhcyBgdGV4dGAuXHJcbiAgICAgKi9cclxuICAgIHBhcnRpYWxUZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQSByZXNwb25zZSB0aGF0IHJlcHJlc2VudHMgYW4gZXJyb3Igb3IgZmFpbHVyZSwgZWl0aGVyIGZyb20gYVxyXG4gKiBub24tc3VjY2Vzc2Z1bCBIVFRQIHN0YXR1cywgYW4gZXJyb3Igd2hpbGUgZXhlY3V0aW5nIHRoZSByZXF1ZXN0LFxyXG4gKiBvciBzb21lIG90aGVyIGZhaWx1cmUgd2hpY2ggb2NjdXJyZWQgZHVyaW5nIHRoZSBwYXJzaW5nIG9mIHRoZSByZXNwb25zZS5cclxuICpcclxuICogQW55IGVycm9yIHJldHVybmVkIG9uIHRoZSBgT2JzZXJ2YWJsZWAgcmVzcG9uc2Ugc3RyZWFtIHdpbGwgYmVcclxuICogd3JhcHBlZCBpbiBhbiBgSHR0cEVycm9yUmVzcG9uc2VgIHRvIHByb3ZpZGUgYWRkaXRpb25hbCBjb250ZXh0IGFib3V0XHJcbiAqIHRoZSBzdGF0ZSBvZiB0aGUgSFRUUCBsYXllciB3aGVuIHRoZSBlcnJvciBvY2N1cnJlZC4gVGhlIGVycm9yIHByb3BlcnR5XHJcbiAqIHdpbGwgY29udGFpbiBlaXRoZXIgYSB3cmFwcGVkIEVycm9yIG9iamVjdCBvciB0aGUgZXJyb3IgcmVzcG9uc2UgcmV0dXJuZWRcclxuICogZnJvbSB0aGUgc2VydmVyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwRXJyb3JSZXNwb25zZSBleHRlbmRzIEh0dHBSZXNwb25zZUJhc2UgaW1wbGVtZW50cyBFcnJvciB7XHJcbiAgICByZWFkb25seSBuYW1lID0gXCJIdHRwRXJyb3JSZXNwb25zZVwiO1xyXG4gICAgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgZXJyb3I6IGFueSB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEVycm9ycyBhcmUgbmV2ZXIgb2theSwgZXZlbiB3aGVuIHRoZSBzdGF0dXMgY29kZSBpcyBpbiB0aGUgMnh4IHN1Y2Nlc3MgcmFuZ2UuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG9rID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0OiB7XHJcbiAgICAgICAgZXJyb3I/OiBhbnk7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG4gICAgICAgIHN0YXR1cz86IG51bWJlcjtcclxuICAgICAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIHVybD86IHN0cmluZztcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVW5pb24gdHlwZSBmb3IgYWxsIHBvc3NpYmxlIGV2ZW50cyBvbiB0aGUgcmVzcG9uc2Ugc3RyZWFtLlxyXG4gKlxyXG4gKiBUeXBlZCBhY2NvcmRpbmcgdG8gdGhlIGV4cGVjdGVkIHR5cGUgb2YgdGhlIHJlc3BvbnNlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIEh0dHBFdmVudDxUPiA9IEh0dHBTZW50RXZlbnQgfCBIdHRwSGVhZGVyUmVzcG9uc2UgfCBIdHRwUmVzcG9uc2U8VD4gfCBIdHRwUHJvZ3Jlc3NFdmVudCB8IEh0dHBVc2VyRXZlbnQ8VD47XHJcblxyXG4vKipcclxuICogVHlwZSBlbnVtZXJhdGlvbiBmb3IgdGhlIGRpZmZlcmVudCBraW5kcyBvZiBgSHR0cEV2ZW50YC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBIdHRwRXZlbnRUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlcXVlc3Qgd2FzIHNlbnQgb3V0IG92ZXIgdGhlIHdpcmUuXHJcbiAgICAgKi9cclxuICAgIFNlbnQgPSAwLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiB1cGxvYWQgcHJvZ3Jlc3MgZXZlbnQgd2FzIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRQcm9ncmVzcyA9IDEsXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXNwb25zZSBzdGF0dXMgY29kZSBhbmQgaGVhZGVycyB3ZXJlIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBSZXNwb25zZUhlYWRlciA9IDIsXHJcbiAgICAvKipcclxuICAgICAqIEEgZG93bmxvYWQgcHJvZ3Jlc3MgZXZlbnQgd2FzIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBEb3dubG9hZFByb2dyZXNzID0gMyxcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZ1bGwgcmVzcG9uc2UgaW5jbHVkaW5nIHRoZSBib2R5IHdhcyByZWNlaXZlZC5cclxuICAgICAqL1xyXG4gICAgUmVzcG9uc2UgPSA0LFxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGN1c3RvbSBldmVudCBmcm9tIGFuIGludGVyY2VwdG9yIG9yIGEgYmFja2VuZC5cclxuICAgICAqL1xyXG4gICAgVXNlciA9IDVcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYW4gYEh0dHBSZXF1ZXN0YCBpbnRvIGEgc3RyZWFtIG9mIGBIdHRwRXZlbnRgcywgb25lIG9mIHdoaWNoIHdpbGwgbGlrZWx5IGJlIGFcclxuICogYEh0dHBSZXNwb25zZWAuXHJcbiAqXHJcbiAqIGBIdHRwSGFuZGxlcmAgaXMgaW5qZWN0YWJsZS4gV2hlbiBpbmplY3RlZCwgdGhlIGhhbmRsZXIgaW5zdGFuY2UgZGlzcGF0Y2hlcyByZXF1ZXN0cyB0byB0aGVcclxuICogZmlyc3QgaW50ZXJjZXB0b3IgaW4gdGhlIGNoYWluLCB3aGljaCBkaXNwYXRjaGVzIHRvIHRoZSBzZWNvbmQsIGV0YywgZXZlbnR1YWxseSByZWFjaGluZyB0aGVcclxuICogYEh0dHBCYWNrZW5kYC5cclxuICpcclxuICogSW4gYW4gYEh0dHBJbnRlcmNlcHRvcmAsIHRoZSBgSHR0cEhhbmRsZXJgIHBhcmFtZXRlciBpcyB0aGUgbmV4dCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEh0dHBIYW5kbGVyIHtcclxuICAgIGFic3RyYWN0IGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcGFydGlhbCBIVFRQIHJlc3BvbnNlIHdoaWNoIG9ubHkgaW5jbHVkZXMgdGhlIHN0YXR1cyBhbmQgaGVhZGVyIGRhdGEsXHJcbiAqIGJ1dCBubyByZXNwb25zZSBib2R5LlxyXG4gKlxyXG4gKiBgSHR0cEhlYWRlclJlc3BvbnNlYCBpcyBhIGBIdHRwRXZlbnRgIGF2YWlsYWJsZSBvbiB0aGUgcmVzcG9uc2VcclxuICogZXZlbnQgc3RyZWFtLCBvbmx5IHdoZW4gcHJvZ3Jlc3MgZXZlbnRzIGFyZSByZXF1ZXN0ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBIZWFkZXJSZXNwb25zZSBleHRlbmRzIEh0dHBSZXNwb25zZUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEh0dHBIZWFkZXJSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgdXJsPzogc3RyaW5nO1xyXG4gICAgfSk7XHJcbiAgICByZWFkb25seSB0eXBlOiBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlSGVhZGVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb3B5IHRoaXMgYEh0dHBIZWFkZXJSZXNwb25zZWAsIG92ZXJyaWRpbmcgaXRzIGNvbnRlbnRzIHdpdGggdGhlXHJcbiAgICAgKiBnaXZlbiBwYXJhbWV0ZXIgaGFzaC5cclxuICAgICAqL1xyXG4gICAgY2xvbmUodXBkYXRlPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICBzdGF0dXM/OiBudW1iZXI7XHJcbiAgICAgICAgc3RhdHVzVGV4dD86IHN0cmluZztcclxuICAgICAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICB9KTogSHR0cEhlYWRlclJlc3BvbnNlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGhlYWRlciBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGFuIEhUVFAgcmVxdWVzdC5cclxuICogSW5zdGFuY2VzIGFyZSBpbW11dGFibGUuIE1vZGlmeWluZyBtZXRob2RzIHJldHVybiBhIGNsb25lZFxyXG4gKiBpbnN0YW5jZSB3aXRoIHRoZSBjaGFuZ2UuIFRoZSBvcmlnaW5hbCBvYmplY3QgaXMgbmV2ZXIgY2hhbmdlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cEhlYWRlcnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBtYXAgb2YgbG93ZXJjYXNlIGhlYWRlciBuYW1lcyB0byB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGVhZGVycztcclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwgbWFwIG9mIGxvd2VyY2FzZWQgaGVhZGVyIG5hbWVzIHRvIHRoZSBub3JtYWxpemVkXHJcbiAgICAgKiBmb3JtIG9mIHRoZSBuYW1lICh0aGUgZm9ybSBzZWVuIGZpcnN0KS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBub3JtYWxpemVkTmFtZXM7XHJcbiAgICAvKipcclxuICAgICAqIENvbXBsZXRlIHRoZSBsYXp5IGluaXRpYWxpemF0aW9uIG9mIHRoaXMgb2JqZWN0IChuZWVkZWQgYmVmb3JlIHJlYWRpbmcpLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxhenlJbml0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBRdWV1ZWQgdXBkYXRlcyB0byBiZSBtYXRlcmlhbGl6ZWQgdGhlIG5leHQgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbGF6eVVwZGF0ZTtcclxuICAgIC8qKiAgQ29uc3RydWN0cyBhIG5ldyBIVFRQIGhlYWRlciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzLiovXHJcbiAgICBjb25zdHJ1Y3RvcihoZWFkZXJzPzogc3RyaW5nIHwge1xyXG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgZm9yIGV4aXN0ZW5jZSBvZiBhIGdpdmVuIGhlYWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgaGVhZGVyIG5hbWUgdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBoZWFkZXIgZXhpc3RzLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgKi9cclxuICAgIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGZpcnN0IHZhbHVlIG9mIGEgZ2l2ZW4gaGVhZGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBoZWFkZXIgbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdmFsdWUgc3RyaW5nIGlmIHRoZSBoZWFkZXIgZXhpc3RzLCBudWxsIG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBnZXQobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSBuYW1lcyBvZiB0aGUgaGVhZGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaGVhZGVyIG5hbWVzLlxyXG4gICAgICovXHJcbiAgICBrZXlzKCk6IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBsaXN0IG9mIHZhbHVlcyBmb3IgYSBnaXZlbiBoZWFkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIGhlYWRlciBuYW1lIGZyb20gd2hpY2ggdG8gcmV0cmlldmUgdmFsdWVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEEgc3RyaW5nIG9mIHZhbHVlcyBpZiB0aGUgaGVhZGVyIGV4aXN0cywgbnVsbCBvdGhlcndpc2UuXHJcbiAgICAgKi9cclxuICAgIGdldEFsbChuYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEFwcGVuZHMgYSBuZXcgdmFsdWUgdG8gdGhlIGV4aXN0aW5nIHNldCBvZiB2YWx1ZXMgZm9yIGEgaGVhZGVyXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGVtIGluIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBoZWFkZXIgbmFtZSBmb3Igd2hpY2ggdG8gYXBwZW5kIHRoZSB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGFwcGVuZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBBIGNsb25lIG9mIHRoZSBIVFRQIGhlYWRlcnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBnaXZlbiBoZWFkZXIuXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSk6IEh0dHBIZWFkZXJzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIG9yIG1vZGlmaWVzIGEgdmFsdWUgZm9yIGEgZ2l2ZW4gaGVhZGVyIGluIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIGluc3RhbmNlLlxyXG4gICAgICogSWYgdGhlIGhlYWRlciBhbHJlYWR5IGV4aXN0cywgaXRzIHZhbHVlIGlzIHJlcGxhY2VkIHdpdGggdGhlIGdpdmVuIHZhbHVlXHJcbiAgICAgKiBpbiB0aGUgcmV0dXJuZWQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBoZWFkZXIgbmFtZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb3IgdmFsdWVzIHRvIHNldCBvciBvdmVyaWRlIGZvciB0aGUgZ2l2ZW4gaGVhZGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIEhUVFAgaGVhZGVycyBvYmplY3Qgd2l0aCB0aGUgbmV3bHkgc2V0IGhlYWRlciB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogSHR0cEhlYWRlcnM7XHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgdmFsdWVzIGZvciBhIGdpdmVuIGhlYWRlciBpbiBhIGNsb25lIG9mIHRoZSBvcmlnaW5hbCBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgaGVhZGVyIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9yIHZhbHVlcyB0byBkZWxldGUgZm9yIHRoZSBnaXZlbiBoZWFkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgQSBjbG9uZSBvZiB0aGUgSFRUUCBoZWFkZXJzIG9iamVjdCB3aXRoIHRoZSBnaXZlbiB2YWx1ZSBkZWxldGVkLlxyXG4gICAgICovXHJcbiAgICBkZWxldGUobmFtZTogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyB8IHN0cmluZ1tdKTogSHR0cEhlYWRlcnM7XHJcbiAgICBwcml2YXRlIG1heWJlU2V0Tm9ybWFsaXplZE5hbWU7XHJcbiAgICBwcml2YXRlIGluaXQ7XHJcbiAgICBwcml2YXRlIGNvcHlGcm9tO1xyXG4gICAgcHJpdmF0ZSBjbG9uZTtcclxuICAgIHByaXZhdGUgYXBwbHlVcGRhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmNlcHRzIGFuZCBoYW5kbGVzIGFuIGBIdHRwUmVxdWVzdGAgb3IgYEh0dHBSZXNwb25zZWAuXHJcbiAqXHJcbiAqIE1vc3QgaW50ZXJjZXB0b3JzIHRyYW5zZm9ybSB0aGUgb3V0Z29pbmcgcmVxdWVzdCBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcclxuICogbmV4dCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4sIGJ5IGNhbGxpbmcgYG5leHQuaGFuZGxlKHRyYW5zZm9ybWVkUmVxKWAuXHJcbiAqIEFuIGludGVyY2VwdG9yIG1heSB0cmFuc2Zvcm0gdGhlXHJcbiAqIHJlc3BvbnNlIGV2ZW50IHN0cmVhbSBhcyB3ZWxsLCBieSBhcHBseWluZyBhZGRpdGlvbmFsIFJ4SlMgb3BlcmF0b3JzIG9uIHRoZSBzdHJlYW1cclxuICogcmV0dXJuZWQgYnkgYG5leHQuaGFuZGxlKClgLlxyXG4gKlxyXG4gKiBNb3JlIHJhcmVseSwgYW4gaW50ZXJjZXB0b3IgbWF5IGhhbmRsZSB0aGUgcmVxdWVzdCBlbnRpcmVseSxcclxuICogYW5kIGNvbXBvc2UgYSBuZXcgZXZlbnQgc3RyZWFtIGluc3RlYWQgb2YgaW52b2tpbmcgYG5leHQuaGFuZGxlKClgLiBUaGlzIGlzIGFuXHJcbiAqIGFjY2VwdGFibGUgYmVoYXZpb3IsIGJ1dCBrZWVwIGluIG1pbmQgdGhhdCBmdXJ0aGVyIGludGVyY2VwdG9ycyB3aWxsIGJlIHNraXBwZWQgZW50aXJlbHkuXHJcbiAqXHJcbiAqIEl0IGlzIGFsc28gcmFyZSBidXQgdmFsaWQgZm9yIGFuIGludGVyY2VwdG9yIHRvIHJldHVybiBtdWx0aXBsZSByZXNwb25zZXMgb24gdGhlXHJcbiAqIGV2ZW50IHN0cmVhbSBmb3IgYSBzaW5nbGUgcmVxdWVzdC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKlxyXG4gKiBAc2VlIFtIVFRQIEd1aWRlXShndWlkZS9odHRwI2ludGVyY2VwdGluZy1yZXF1ZXN0cy1hbmQtcmVzcG9uc2VzKVxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUbyB1c2UgdGhlIHNhbWUgaW5zdGFuY2Ugb2YgYEh0dHBJbnRlcmNlcHRvcnNgIGZvciB0aGUgZW50aXJlIGFwcCwgaW1wb3J0IHRoZSBgSHR0cENsaWVudE1vZHVsZWBcclxuICogb25seSBpbiB5b3VyIGBBcHBNb2R1bGVgLCBhbmQgYWRkIHRoZSBpbnRlcmNlcHRvcnMgdG8gdGhlIHJvb3QgYXBwbGljYXRpb24gaW5qZWN0b3IgLlxyXG4gKiBJZiB5b3UgaW1wb3J0IGBIdHRwQ2xpZW50TW9kdWxlYCBtdWx0aXBsZSB0aW1lcyBhY3Jvc3MgZGlmZmVyZW50IG1vZHVsZXMgKGZvciBleGFtcGxlLCBpbiBsYXp5XHJcbiAqIGxvYWRpbmcgbW9kdWxlcyksIGVhY2ggaW1wb3J0IGNyZWF0ZXMgYSBuZXcgY29weSBvZiB0aGUgYEh0dHBDbGllbnRNb2R1bGVgLCB3aGljaCBvdmVyd3JpdGVzIHRoZVxyXG4gKiBpbnRlcmNlcHRvcnMgcHJvdmlkZWQgaW4gdGhlIHJvb3QgbW9kdWxlLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgYW5kIGhhbmRsZXMgYSBnaXZlbiBIVFRQIHJlcXVlc3QuXHJcbiAgICAgKiBAcGFyYW0gcmVxIFRoZSBvdXRnb2luZyByZXF1ZXN0IG9iamVjdCB0byBoYW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gbmV4dCBUaGUgbmV4dCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4sIG9yIHRoZSBiYWNrZW5kXHJcbiAgICAgKiBpZiBubyBpbnRlcmNlcHRvcnMgcmVtYWluIGluIHRoZSBjaGFpbi5cclxuICAgICAqIEByZXR1cm5zIEFuIG9ic2VydmFibGUgb2YgdGhlIGV2ZW50IHN0cmVhbS5cclxuICAgICAqL1xyXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxufVxyXG5cclxuZGVjbGFyZSB0eXBlIEh0dHBPYnNlcnZlID0gJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNvZGVjIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgcGFyYW1ldGVycyBpbiBVUkxzLlxyXG4gKlxyXG4gKiBVc2VkIGJ5IGBIdHRwUGFyYW1zYC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKiovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBIdHRwUGFyYW1ldGVyQ29kZWMge1xyXG4gICAgZW5jb2RlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgZW5jb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxuICAgIGRlY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZztcclxuICAgIGRlY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBIVFRQIHJlcXVlc3QvcmVzcG9uc2UgYm9keSB0aGF0IHJlcHJlc2VudHMgc2VyaWFsaXplZCBwYXJhbWV0ZXJzLFxyXG4gKiBwZXIgdGhlIE1JTUUgdHlwZSBgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkYC5cclxuICpcclxuICogVGhpcyBjbGFzcyBpcyBpbW11dGFibGU7IGFsbCBtdXRhdGlvbiBvcGVyYXRpb25zIHJldHVybiBhIG5ldyBpbnN0YW5jZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cFBhcmFtcyB7XHJcbiAgICBwcml2YXRlIG1hcDtcclxuICAgIHByaXZhdGUgZW5jb2RlcjtcclxuICAgIHByaXZhdGUgdXBkYXRlcztcclxuICAgIHByaXZhdGUgY2xvbmVGcm9tO1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IEh0dHBQYXJhbXNPcHRpb25zKTtcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyB3aGV0aGVyIHRoZSBib2R5IGluY2x1ZGVzIG9uZSBvciBtb3JlIHZhbHVlcyBmb3IgYSBnaXZlbiBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtZXRlciBuYW1lLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFyYW1ldGVyIGhhcyBvbmUgb3IgbW9yZSB2YWx1ZXMsXHJcbiAgICAgKiBmYWxzZSBpZiBpdCBoYXMgbm8gdmFsdWUgb3IgaXMgbm90IHByZXNlbnQuXHJcbiAgICAgKi9cclxuICAgIGhhcyhwYXJhbTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBmb3IgYSBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtZXRlciBuYW1lLlxyXG4gICAgICogQHJldHVybnMgVGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBnaXZlbiBwYXJhbWV0ZXIsXHJcbiAgICAgKiBvciBgbnVsbGAgaWYgdGhlIHBhcmFtZXRlciBpcyBub3QgcHJlc2VudC5cclxuICAgICAqL1xyXG4gICAgZ2V0KHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyBmb3IgYSAgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cclxuICAgICAqIEByZXR1cm5zIEFsbCB2YWx1ZXMgaW4gYSBzdHJpbmcgYXJyYXksXHJcbiAgICAgKiBvciBgbnVsbGAgaWYgdGhlIHBhcmFtZXRlciBub3QgcHJlc2VudC5cclxuICAgICAqL1xyXG4gICAgZ2V0QWxsKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmdbXSB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbGwgdGhlIHBhcmFtZXRlcnMgZm9yIHRoaXMgYm9keS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwYXJhbWV0ZXIgbmFtZXMgaW4gYSBzdHJpbmcgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIGtleXMoKTogc3RyaW5nW107XHJcbiAgICAvKipcclxuICAgICAqIEFwcGVuZHMgYSBuZXcgdmFsdWUgdG8gZXhpc3RpbmcgdmFsdWVzIGZvciBhIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0byBhZGQuXHJcbiAgICAgKiBAcmV0dXJuIEEgbmV3IGJvZHkgd2l0aCB0aGUgYXBwZW5kZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZChwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSHR0cFBhcmFtcztcclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZXMgdGhlIHZhbHVlIGZvciBhIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZS5cclxuICAgICAqIEByZXR1cm4gQSBuZXcgYm9keSB3aXRoIHRoZSBuZXcgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHNldChwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSHR0cFBhcmFtcztcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIGdpdmVuIHZhbHVlIG9yIGFsbCB2YWx1ZXMgZnJvbSBhIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlbW92ZSwgaWYgcHJvdmlkZWQuXHJcbiAgICAgKiBAcmV0dXJuIEEgbmV3IGJvZHkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUgcmVtb3ZlZCwgb3Igd2l0aCBhbGwgdmFsdWVzXHJcbiAgICAgKiByZW1vdmVkIGlmIG5vIHZhbHVlIGlzIHNwZWNpZmllZC5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlKHBhcmFtOiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nKTogSHR0cFBhcmFtcztcclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGUgYm9keSB0byBhbiBlbmNvZGVkIHN0cmluZywgd2hlcmUga2V5LXZhbHVlIHBhaXJzIChzZXBhcmF0ZWQgYnkgYD1gKSBhcmVcclxuICAgICAqIHNlcGFyYXRlZCBieSBgJmBzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNsb25lO1xyXG4gICAgcHJpdmF0ZSBpbml0O1xyXG59XHJcblxyXG4vKipcclxuICogT3B0aW9ucyB1c2VkIHRvIGNvbnN0cnVjdCBhbiBgSHR0cFBhcmFtc2AgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmRlY2xhcmUgaW50ZXJmYWNlIEh0dHBQYXJhbXNPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBIVFRQIHBhcmFtZXRlcnMgaW4gVVJMLXF1ZXJ5LXN0cmluZyBmb3JtYXQuXHJcbiAgICAgKiBNdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgZnJvbU9iamVjdGAuXHJcbiAgICAgKi9cclxuICAgIGZyb21TdHJpbmc/OiBzdHJpbmc7XHJcbiAgICAvKiogT2JqZWN0IG1hcCBvZiB0aGUgSFRUUCBwYXJhbWV0ZXJzLiBNdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgZnJvbVN0cmluZ2AuICovXHJcbiAgICBmcm9tT2JqZWN0Pzoge1xyXG4gICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xyXG4gICAgfTtcclxuICAgIC8qKiBFbmNvZGluZyBjb2RlYyB1c2VkIHRvIHBhcnNlIGFuZCBzZXJpYWxpemUgdGhlIHBhcmFtZXRlcnMuICovXHJcbiAgICBlbmNvZGVyPzogSHR0cFBhcmFtZXRlckNvZGVjO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBpbnRlcmZhY2UgZm9yIHByb2dyZXNzIGV2ZW50cy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEh0dHBQcm9ncmVzc0V2ZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogUHJvZ3Jlc3MgZXZlbnQgdHlwZSBpcyBlaXRoZXIgdXBsb2FkIG9yIGRvd25sb2FkLlxyXG4gICAgICovXHJcbiAgICB0eXBlOiBIdHRwRXZlbnRUeXBlLkRvd25sb2FkUHJvZ3Jlc3MgfCBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOdW1iZXIgb2YgYnl0ZXMgdXBsb2FkZWQgb3IgZG93bmxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgbG9hZGVkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRvdGFsIG51bWJlciBvZiBieXRlcyB0byB1cGxvYWQgb3IgZG93bmxvYWQuIERlcGVuZGluZyBvbiB0aGUgcmVxdWVzdCBvclxyXG4gICAgICogcmVzcG9uc2UsIHRoaXMgbWF5IG5vdCBiZSBjb21wdXRhYmxlIGFuZCB0aHVzIG1heSBub3QgYmUgcHJlc2VudC5cclxuICAgICAqL1xyXG4gICAgdG90YWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBvdXRnb2luZyBIVFRQIHJlcXVlc3Qgd2l0aCBhbiBvcHRpb25hbCB0eXBlZCBib2R5LlxyXG4gKlxyXG4gKiBgSHR0cFJlcXVlc3RgIHJlcHJlc2VudHMgYW4gb3V0Z29pbmcgcmVxdWVzdCwgaW5jbHVkaW5nIFVSTCwgbWV0aG9kLFxyXG4gKiBoZWFkZXJzLCBib2R5LCBhbmQgb3RoZXIgcmVxdWVzdCBjb25maWd1cmF0aW9uIG9wdGlvbnMuIEluc3RhbmNlcyBzaG91bGQgYmVcclxuICogYXNzdW1lZCB0byBiZSBpbW11dGFibGUuIFRvIG1vZGlmeSBhIGBIdHRwUmVxdWVzdGAsIHRoZSBgY2xvbmVgXHJcbiAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cFJlcXVlc3Q8VD4ge1xyXG4gICAgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXF1ZXN0IGJvZHksIG9yIGBudWxsYCBpZiBvbmUgaXNuJ3Qgc2V0LlxyXG4gICAgICpcclxuICAgICAqIEJvZGllcyBhcmUgbm90IGVuZm9yY2VkIHRvIGJlIGltbXV0YWJsZSwgYXMgdGhleSBjYW4gaW5jbHVkZSBhIHJlZmVyZW5jZSB0byBhbnlcclxuICAgICAqIHVzZXItZGVmaW5lZCBkYXRhIHR5cGUuIEhvd2V2ZXIsIGludGVyY2VwdG9ycyBzaG91bGQgdGFrZSBjYXJlIHRvIHByZXNlcnZlXHJcbiAgICAgKiBpZGVtcG90ZW5jZSBieSB0cmVhdGluZyB0aGVtIGFzIHN1Y2guXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGJvZHk6IFQgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRnb2luZyBoZWFkZXJzIGZvciB0aGlzIHJlcXVlc3QuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgcmVxdWVzdCBzaG91bGQgYmUgbWFkZSBpbiBhIHdheSB0aGF0IGV4cG9zZXMgcHJvZ3Jlc3MgZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqIFByb2dyZXNzIGV2ZW50cyBhcmUgZXhwZW5zaXZlIChjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMgb24gZWFjaCBldmVudCkgYW5kIHNvXHJcbiAgICAgKiB0aGV5IHNob3VsZCBvbmx5IGJlIHJlcXVlc3RlZCBpZiB0aGUgY29uc3VtZXIgaW50ZW5kcyB0byBtb25pdG9yIHRoZW0uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHJlcG9ydFByb2dyZXNzOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgcmVxdWVzdCBzaG91bGQgYmUgc2VudCB3aXRoIG91dGdvaW5nIGNyZWRlbnRpYWxzIChjb29raWVzKS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgd2l0aENyZWRlbnRpYWxzOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZXhwZWN0ZWQgcmVzcG9uc2UgdHlwZSBvZiB0aGUgc2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBwYXJzZSB0aGUgcmVzcG9uc2UgYXBwcm9wcmlhdGVseSBiZWZvcmUgcmV0dXJuaW5nIGl0IHRvXHJcbiAgICAgKiB0aGUgcmVxdWVzdGVlLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvdXRnb2luZyBIVFRQIHJlcXVlc3QgbWV0aG9kLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBtZXRob2Q6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogT3V0Z29pbmcgVVJMIHBhcmFtZXRlcnMuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHBhcmFtczogSHR0cFBhcmFtcztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dGdvaW5nIFVSTCB3aXRoIGFsbCBVUkwgcGFyYW1ldGVycyBzZXQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHVybFdpdGhQYXJhbXM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG1ldGhvZDogJ0RFTEVURScgfCAnR0VUJyB8ICdIRUFEJyB8ICdKU09OUCcgfCAnT1BUSU9OUycsIHVybDogc3RyaW5nLCBpbml0Pzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcztcclxuICAgICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGhvZDogJ1BPU1QnIHwgJ1BVVCcgfCAnUEFUQ0gnLCB1cmw6IHN0cmluZywgYm9keTogVCB8IG51bGwsIGluaXQ/OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0pO1xyXG4gICAgY29uc3RydWN0b3IobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBib2R5OiBUIHwgbnVsbCwgaW5pdD86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXM7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybSB0aGUgZnJlZS1mb3JtIGJvZHkgaW50byBhIHNlcmlhbGl6ZWQgZm9ybWF0IHN1aXRhYmxlIGZvclxyXG4gICAgICogdHJhbnNtaXNzaW9uIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIHNlcmlhbGl6ZUJvZHkoKTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgRm9ybURhdGEgfCBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeGFtaW5lIHRoZSBib2R5IGFuZCBhdHRlbXB0IHRvIGluZmVyIGFuIGFwcHJvcHJpYXRlIE1JTUUgdHlwZVxyXG4gICAgICogZm9yIGl0LlxyXG4gICAgICpcclxuICAgICAqIElmIG5vIHN1Y2ggdHlwZSBjYW4gYmUgaW5mZXJyZWQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGBudWxsYC5cclxuICAgICAqL1xyXG4gICAgZGV0ZWN0Q29udGVudFR5cGVIZWFkZXIoKTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNsb25lKCk6IEh0dHBSZXF1ZXN0PFQ+O1xyXG4gICAgY2xvbmUodXBkYXRlOiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zO1xyXG4gICAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgICAgICBib2R5PzogVCB8IG51bGw7XHJcbiAgICAgICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgICAgIHVybD86IHN0cmluZztcclxuICAgICAgICBzZXRIZWFkZXJzPzoge1xyXG4gICAgICAgICAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQYXJhbXM/OiB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTogSHR0cFJlcXVlc3Q8VD47XHJcbiAgICBjbG9uZTxWPih1cGRhdGU6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXM7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgICAgIGJvZHk/OiBWIHwgbnVsbDtcclxuICAgICAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICAgICAgdXJsPzogc3RyaW5nO1xyXG4gICAgICAgIHNldEhlYWRlcnM/OiB7XHJcbiAgICAgICAgICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFBhcmFtcz86IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgIH0pOiBIdHRwUmVxdWVzdDxWPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZnVsbCBIVFRQIHJlc3BvbnNlLCBpbmNsdWRpbmcgYSB0eXBlZCByZXNwb25zZSBib2R5ICh3aGljaCBtYXkgYmUgYG51bGxgXHJcbiAqIGlmIG9uZSB3YXMgbm90IHJldHVybmVkKS5cclxuICpcclxuICogYEh0dHBSZXNwb25zZWAgaXMgYSBgSHR0cEV2ZW50YCBhdmFpbGFibGUgb24gdGhlIHJlc3BvbnNlIGV2ZW50XHJcbiAqIHN0cmVhbS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cFJlc3BvbnNlPFQ+IGV4dGVuZHMgSHR0cFJlc3BvbnNlQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXNwb25zZSBib2R5LCBvciBgbnVsbGAgaWYgb25lIHdhcyBub3QgcmV0dXJuZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGJvZHk6IFQgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgYEh0dHBSZXNwb25zZWAuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiB7XHJcbiAgICAgICAgYm9keT86IFQgfCBudWxsO1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICAgICAgICBzdGF0dXM/OiBudW1iZXI7XHJcbiAgICAgICAgc3RhdHVzVGV4dD86IHN0cmluZztcclxuICAgICAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICB9KTtcclxuICAgIHJlYWRvbmx5IHR5cGU6IEh0dHBFdmVudFR5cGUuUmVzcG9uc2U7XHJcbiAgICBjbG9uZSgpOiBIdHRwUmVzcG9uc2U8VD47XHJcbiAgICBjbG9uZSh1cGRhdGU6IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgdXJsPzogc3RyaW5nO1xyXG4gICAgfSk6IEh0dHBSZXNwb25zZTxUPjtcclxuICAgIGNsb25lPFY+KHVwZGF0ZToge1xyXG4gICAgICAgIGJvZHk/OiBWIHwgbnVsbDtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgdXJsPzogc3RyaW5nO1xyXG4gICAgfSk6IEh0dHBSZXNwb25zZTxWPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGJvdGggYEh0dHBSZXNwb25zZWAgYW5kIGBIdHRwSGVhZGVyUmVzcG9uc2VgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBIdHRwUmVzcG9uc2VCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQWxsIHJlc3BvbnNlIGhlYWRlcnMuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNwb25zZSBzdGF0dXMgY29kZS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgc3RhdHVzOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRleHR1YWwgZGVzY3JpcHRpb24gb2YgcmVzcG9uc2Ugc3RhdHVzIGNvZGUuXHJcbiAgICAgKlxyXG4gICAgICogRG8gbm90IGRlcGVuZCBvbiB0aGlzLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFVSTCBvZiB0aGUgcmVzb3VyY2UgcmV0cmlldmVkLCBvciBudWxsIGlmIG5vdCBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHVybDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgc3RhdHVzIGNvZGUgZmFsbHMgaW4gdGhlIDJ4eCByYW5nZS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb2s6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgb2YgdGhlIHJlc3BvbnNlLCBuYXJyb3dlZCB0byBlaXRoZXIgdGhlIGZ1bGwgcmVzcG9uc2Ugb3IgdGhlIGhlYWRlci5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdHlwZTogSHR0cEV2ZW50VHlwZS5SZXNwb25zZSB8IEh0dHBFdmVudFR5cGUuUmVzcG9uc2VIZWFkZXI7XHJcbiAgICAvKipcclxuICAgICAqIFN1cGVyLWNvbnN0cnVjdG9yIGZvciBhbGwgcmVzcG9uc2VzLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBzaW5nbGUgcGFyYW1ldGVyIGFjY2VwdGVkIGlzIGFuIGluaXRpYWxpemF0aW9uIGhhc2guIEFueSBwcm9wZXJ0aWVzXHJcbiAgICAgKiBvZiB0aGUgcmVzcG9uc2UgcGFzc2VkIHRoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0OiB7XHJcbiAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG4gICAgICAgIHN0YXR1cz86IG51bWJlcjtcclxuICAgICAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIHVybD86IHN0cmluZztcclxuICAgIH0sIGRlZmF1bHRTdGF0dXM/OiBudW1iZXIsIGRlZmF1bHRTdGF0dXNUZXh0Pzogc3RyaW5nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IGluZGljYXRpbmcgdGhhdCB0aGUgcmVxdWVzdCB3YXMgc2VudCB0byB0aGUgc2VydmVyLiBVc2VmdWxcclxuICogd2hlbiBhIHJlcXVlc3QgbWF5IGJlIHJldHJpZWQgbXVsdGlwbGUgdGltZXMsIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW5cclxuICogcmV0cmllcyBvbiB0aGUgZmluYWwgZXZlbnQgc3RyZWFtLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSHR0cFNlbnRFdmVudCB7XHJcbiAgICB0eXBlOiBIdHRwRXZlbnRUeXBlLlNlbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB1cGxvYWQgcHJvZ3Jlc3MgZXZlbnQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBIdHRwVXBsb2FkUHJvZ3Jlc3NFdmVudCBleHRlbmRzIEh0dHBQcm9ncmVzc0V2ZW50IHtcclxuICAgIHR5cGU6IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBlbmNvZGluZyBhbmQgZGVjb2Rpbmcgb2YgVVJMIHBhcmFtZXRlciBhbmQgcXVlcnktc3RyaW5nIHZhbHVlcy5cclxuICpcclxuICogU2VyaWFsaXplcyBhbmQgcGFyc2VzIFVSTCBwYXJhbWV0ZXIga2V5cyBhbmQgdmFsdWVzIHRvIGVuY29kZSBhbmQgZGVjb2RlIHRoZW0uXHJcbiAqIElmIHlvdSBwYXNzIFVSTCBxdWVyeSBwYXJhbWV0ZXJzIHdpdGhvdXQgZW5jb2RpbmcsXHJcbiAqIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIGNhbiBiZSBtaXNpbnRlcnByZXRlZCBhdCB0aGUgcmVjZWl2aW5nIGVuZC5cclxuICpcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cFVybEVuY29kaW5nQ29kZWMgaW1wbGVtZW50cyBIdHRwUGFyYW1ldGVyQ29kZWMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGVzIGEga2V5IG5hbWUgZm9yIGEgVVJMIHBhcmFtZXRlciBvciBxdWVyeS1zdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgbmFtZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlbmNvZGVkIGtleSBuYW1lLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZXMgdGhlIHZhbHVlIG9mIGEgVVJMIHBhcmFtZXRlciBvciBxdWVyeS1zdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVuY29kZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZXMgYW4gZW5jb2RlZCBVUkwgcGFyYW1ldGVyIG9yIHF1ZXJ5LXN0cmluZyBrZXkuXHJcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBlbmNvZGVkIGtleSBuYW1lLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQga2V5IG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGRlY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlcyBhbiBlbmNvZGVkIFVSTCBwYXJhbWV0ZXIgb3IgcXVlcnktc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbmNvZGVkIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGRlY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHVzZXItZGVmaW5lZCBldmVudC5cclxuICpcclxuICogR3JvdXBpbmcgYWxsIGN1c3RvbSBldmVudHMgdW5kZXIgdGhpcyB0eXBlIGVuc3VyZXMgdGhleSB3aWxsIGJlIGhhbmRsZWRcclxuICogYW5kIGZvcndhcmRlZCBieSBhbGwgaW1wbGVtZW50YXRpb25zIG9mIGludGVyY2VwdG9ycy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEh0dHBVc2VyRXZlbnQ8VD4ge1xyXG4gICAgdHlwZTogSHR0cEV2ZW50VHlwZS5Vc2VyO1xyXG59XHJcblxyXG4vKipcclxuICogVXNlcyBgWE1MSHR0cFJlcXVlc3RgIHRvIHNlbmQgcmVxdWVzdHMgdG8gYSBiYWNrZW5kIHNlcnZlci5cclxuICogQHNlZSBgSHR0cEhhbmRsZXJgXHJcbiAqIEBzZWUgYEpzb25wQ2xpZW50QmFja2VuZGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSHR0cFhockJhY2tlbmQgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XHJcbiAgICBwcml2YXRlIHhockZhY3Rvcnk7XHJcbiAgICBjb25zdHJ1Y3Rvcih4aHJGYWN0b3J5OiBYaHJGYWN0b3J5KTtcclxuICAgIC8qKlxyXG4gICAgICogUHJvY2Vzc2VzIGEgcmVxdWVzdCBhbmQgcmV0dXJucyBhIHN0cmVhbSBvZiByZXNwb25zZSBldmVudHMuXHJcbiAgICAgKiBAcGFyYW0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIEFuIG9ic2VydmFibGUgb2YgdGhlIHJlc3BvbnNlIGV2ZW50cy5cclxuICAgICAqL1xyXG4gICAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG59XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBjdXJyZW50IFhTUkYgdG9rZW4gdG8gdXNlIHdpdGggdGhlIG5leHQgb3V0Z29pbmcgcmVxdWVzdC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgSHR0cFhzcmZUb2tlbkV4dHJhY3RvciB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgWFNSRiB0b2tlbiB0byB1c2Ugd2l0aCBhbiBvdXRnb2luZyByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIGZvciBldmVyeSByZXF1ZXN0LCBzbyB0aGUgdG9rZW4gbWF5IGNoYW5nZSBiZXR3ZWVuIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXRUb2tlbigpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIGFuIGBIdHRwUmVxdWVzdGAgd2l0aCB0aGUgSlNPTlAgbWV0aG9kLFxyXG4gKiBieSBwZXJmb3JtaW5nIEpTT05QIHN0eWxlIHJlcXVlc3RzLlxyXG4gKiBAc2VlIGBIdHRwSGFuZGxlcmBcclxuICogQHNlZSBgSHR0cFhockJhY2tlbmRgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEpzb25wQ2xpZW50QmFja2VuZCBpbXBsZW1lbnRzIEh0dHBCYWNrZW5kIHtcclxuICAgIHByaXZhdGUgY2FsbGJhY2tNYXA7XHJcbiAgICBwcml2YXRlIGRvY3VtZW50O1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2tNYXA6IMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25faHR0cF9odHRwX2IsIGRvY3VtZW50OiBhbnkpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIG5leHQgY2FsbGJhY2sgbWV0aG9kLCBieSBpbmNyZW1lbnRpbmcgdGhlIGdsb2JhbCBgbmV4dFJlcXVlc3RJZGAuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbmV4dENhbGxiYWNrO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYSBKU09OUCByZXF1ZXN0IGFuZCByZXR1cm5zIGFuIGV2ZW50IHN0cmVhbSBvZiB0aGUgcmVzdWx0cy5cclxuICAgICAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8bmV2ZXI+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmaWVzIHJlcXVlc3RzIHdpdGggdGhlIG1ldGhvZCBKU09OUCBhbmRcclxuICogc2hpZnRzIHRoZW0gdG8gdGhlIGBKc29ucENsaWVudEJhY2tlbmRgLlxyXG4gKlxyXG4gKiBAc2VlIGBIdHRwSW50ZXJjZXB0b3JgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEpzb25wSW50ZXJjZXB0b3Ige1xyXG4gICAgcHJpdmF0ZSBqc29ucDtcclxuICAgIGNvbnN0cnVjdG9yKGpzb25wOiBKc29ucENsaWVudEJhY2tlbmQpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIGFuZCBoYW5kbGVzIGEgZ2l2ZW4gSlNPTlAgcmVxdWVzdC5cclxuICAgICAqIEBwYXJhbSByZXEgVGhlIG91dGdvaW5nIHJlcXVlc3Qgb2JqZWN0IHRvIGhhbmRsZS5cclxuICAgICAqIEBwYXJhbSBuZXh0IFRoZSBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbiwgb3IgdGhlIGJhY2tlbmRcclxuICAgICAqIGlmIG5vIGludGVyY2VwdG9ycyByZW1haW4gaW4gdGhlIGNoYWluLlxyXG4gICAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBvZiB0aGUgZXZlbnQgc3RyZWFtLlxyXG4gICAgICovXHJcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG59XHJcblxyXG4vKipcclxuICogQSB3cmFwcGVyIGFyb3VuZCB0aGUgYFhNTEh0dHBSZXF1ZXN0YCBjb25zdHJ1Y3Rvci5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgWGhyRmFjdG9yeSB7XHJcbiAgICBhYnN0cmFjdCBidWlsZCgpOiBYTUxIdHRwUmVxdWVzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9odHRwX2h0dHBfYSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG59XHJcblxyXG4vKipcclxuICogREkgdG9rZW4vYWJzdHJhY3QgdHlwZSByZXByZXNlbnRpbmcgYSBtYXAgb2YgSlNPTlAgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBJbiB0aGUgYnJvd3NlciwgdGhpcyBzaG91bGQgYWx3YXlzIGJlIHRoZSBgd2luZG93YCBvYmplY3QuXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2h0dHBfaHR0cF9iIHtcclxuICAgIFtrZXk6IHN0cmluZ106IChkYXRhOiBhbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGVyZSB0byBzdG9yZSBKU09OUCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIE9yZGluYXJpbHkgSlNPTlAgY2FsbGJhY2tzIGFyZSBzdG9yZWQgb24gdGhlIGB3aW5kb3dgIG9iamVjdCwgYnV0IHRoaXMgbWF5IG5vdCBleGlzdFxyXG4gKiBpbiB0ZXN0IGVudmlyb25tZW50cy4gSW4gdGhhdCBjYXNlLCBjYWxsYmFja3MgYXJlIHN0b3JlZCBvbiBhbiBhbm9ueW1vdXMgb2JqZWN0IGluc3RlYWQuXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2h0dHBfaHR0cF9jKCk6IE9iamVjdDtcclxuXHJcbi8qKlxyXG4gKiBBIGZhY3RvcnkgZm9yIGBIdHRwWGhyQmFja2VuZGAgdGhhdCB1c2VzIHRoZSBgWE1MSHR0cFJlcXVlc3RgIGJyb3dzZXIgQVBJLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9odHRwX2h0dHBfZCBpbXBsZW1lbnRzIFhockZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIGJ1aWxkKCk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9odHRwX2h0dHBfZTogSW5qZWN0aW9uVG9rZW48c3RyaW5nPjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25faHR0cF9odHRwX2Y6IEluamVjdGlvblRva2VuPHN0cmluZz47XHJcblxyXG4vKipcclxuICogYEh0dHBYc3JmVG9rZW5FeHRyYWN0b3JgIHdoaWNoIHJldHJpZXZlcyB0aGUgdG9rZW4gZnJvbSBhIGNvb2tpZS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25faHR0cF9odHRwX2cgaW1wbGVtZW50cyBIdHRwWHNyZlRva2VuRXh0cmFjdG9yIHtcclxuICAgIHByaXZhdGUgZG9jO1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgY29va2llTmFtZTtcclxuICAgIHByaXZhdGUgbGFzdENvb2tpZVN0cmluZztcclxuICAgIHByaXZhdGUgbGFzdFRva2VuO1xyXG4gICAgY29uc3RydWN0b3IoZG9jOiBhbnksIHBsYXRmb3JtOiBzdHJpbmcsIGNvb2tpZU5hbWU6IHN0cmluZyk7XHJcbiAgICBnZXRUb2tlbigpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogYEh0dHBJbnRlcmNlcHRvcmAgd2hpY2ggYWRkcyBhbiBYU1JGIHRva2VuIHRvIGVsaWdpYmxlIG91dGdvaW5nIHJlcXVlc3RzLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9odHRwX2h0dHBfaCBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBwcml2YXRlIHRva2VuU2VydmljZTtcclxuICAgIHByaXZhdGUgaGVhZGVyTmFtZTtcclxuICAgIGNvbnN0cnVjdG9yKHRva2VuU2VydmljZTogSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgaGVhZGVyTmFtZTogc3RyaW5nKTtcclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBpbmplY3RhYmxlIGBIdHRwSGFuZGxlcmAgdGhhdCBhcHBsaWVzIG11bHRpcGxlIGludGVyY2VwdG9yc1xyXG4gKiB0byBhIHJlcXVlc3QgYmVmb3JlIHBhc3NpbmcgaXQgdG8gdGhlIGdpdmVuIGBIdHRwQmFja2VuZGAuXHJcbiAqXHJcbiAqIFRoZSBpbnRlcmNlcHRvcnMgYXJlIGxvYWRlZCBsYXppbHkgZnJvbSB0aGUgaW5qZWN0b3IsIHRvIGFsbG93XHJcbiAqIGludGVyY2VwdG9ycyB0byB0aGVtc2VsdmVzIGluamVjdCBjbGFzc2VzIGRlcGVuZGluZyBpbmRpcmVjdGx5XHJcbiAqIG9uIGBIdHRwSW50ZXJjZXB0aW5nSGFuZGxlcmAgaXRzZWxmLlxyXG4gKiBAc2VlIGBIdHRwSW50ZXJjZXB0b3JgXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xyXG4gICAgcHJpdmF0ZSBiYWNrZW5kO1xyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcclxuICAgIHByaXZhdGUgY2hhaW47XHJcbiAgICBjb25zdHJ1Y3RvcihiYWNrZW5kOiBIdHRwQmFja2VuZCwgaW5qZWN0b3I6IEluamVjdG9yKTtcclxuICAgIGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxufVxyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=