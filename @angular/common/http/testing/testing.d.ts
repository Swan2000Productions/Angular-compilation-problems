/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { HttpBackend } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';


/**
 * Configures `HttpClientTestingBackend` as the `HttpBackend` used by `HttpClient`.
 *
 * Inject `HttpTestingController` to expect and flush requests in your tests.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
export declare class HttpClientTestingModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HttpClientTestingModule, never, [typeof ɵngcc1.HttpClientModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HttpClientTestingModule>;
}

/**
 * Controller to be injected into tests, that allows for mocking and flushing
 * of requests.
 *
 * @publicApi
 */
export declare abstract class HttpTestingController {
    /**
     * Search for requests that match the given parameter, without any expectations.
     */
    abstract match(match: string | RequestMatch | ((req: HttpRequest<any>) => boolean)): TestRequest[];
    /**
     * Expect that a single request has been made which matches the given URL, and return its
     * mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     */
    abstract expectOne(url: string, description?: string): TestRequest;
    /**
     * Expect that a single request has been made which matches the given parameters, and return
     * its mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     */
    abstract expectOne(params: RequestMatch, description?: string): TestRequest;
    /**
     * Expect that a single request has been made which matches the given predicate function, and
     * return its mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     */
    abstract expectOne(matchFn: ((req: HttpRequest<any>) => boolean), description?: string): TestRequest;
    /**
     * Expect that a single request has been made which matches the given condition, and return
     * its mock.
     *
     * If no such request has been made, or more than one such request has been made, fail with an
     * error message including the given request description, if any.
     */
    abstract expectOne(match: string | RequestMatch | ((req: HttpRequest<any>) => boolean), description?: string): TestRequest;
    /**
     * Expect that no requests have been made which match the given URL.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     */
    abstract expectNone(url: string, description?: string): void;
    /**
     * Expect that no requests have been made which match the given parameters.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     */
    abstract expectNone(params: RequestMatch, description?: string): void;
    /**
     * Expect that no requests have been made which match the given predicate function.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     */
    abstract expectNone(matchFn: ((req: HttpRequest<any>) => boolean), description?: string): void;
    /**
     * Expect that no requests have been made which match the given condition.
     *
     * If a matching request has been made, fail with an error message including the given request
     * description, if any.
     */
    abstract expectNone(match: string | RequestMatch | ((req: HttpRequest<any>) => boolean), description?: string): void;
    /**
     * Verify that no unmatched requests are outstanding.
     *
     * If any requests are outstanding, fail with an error message indicating which requests were not
     * handled.
     *
     * If `ignoreCancelled` is not set (the default), `verify()` will also fail if cancelled requests
     * were not explicitly matched.
     */
    abstract verify(opts?: {
        ignoreCancelled?: boolean;
    }): void;
}

/**
 * Defines a matcher for requests based on URL, method, or both.
 *
 * @publicApi
 */
export declare interface RequestMatch {
    method?: string;
    url?: string;
}

/**
 * A mock requests that was received and is ready to be answered.
 *
 * This interface allows access to the underlying `HttpRequest`, and allows
 * responding with `HttpEvent`s or `HttpErrorResponse`s.
 *
 * @publicApi
 */
export declare class TestRequest {
    request: HttpRequest<any>;
    private observer;
    /**
     * Whether the request was cancelled after it was sent.
     */
    get cancelled(): boolean;
    constructor(request: HttpRequest<any>, observer: Observer<HttpEvent<any>>);
    /**
     * Resolve the request by returning a body plus additional HTTP information (such as response
     * headers) if provided.
     * If the request specifies an expected body type, the body is converted into the requested type.
     * Otherwise, the body is converted to `JSON` by default.
     *
     * Both successful and unsuccessful responses can be delivered via `flush()`.
     */
    flush(body: ArrayBuffer | Blob | string | number | Object | (string | number | Object | null)[] | null, opts?: {
        headers?: HttpHeaders | {
            [name: string]: string | string[];
        };
        status?: number;
        statusText?: string;
    }): void;
    /**
     * Resolve the request by returning an `ErrorEvent` (e.g. simulating a network failure).
     */
    error(error: ErrorEvent, opts?: {
        headers?: HttpHeaders | {
            [name: string]: string | string[];
        };
        status?: number;
        statusText?: string;
    }): void;
    /**
     * Deliver an arbitrary `HttpEvent` (such as a progress event) on the response stream for this
     * request.
     */
    event(event: HttpEvent<any>): void;
}

/**
 * A testing backend for `HttpClient` which both acts as an `HttpBackend`
 * and as the `HttpTestingController`.
 *
 * `HttpClientTestingBackend` works by keeping a list of all open requests.
 * As requests come in, they're added to the list. Users can assert that specific
 * requests were made and then flush them. In the end, a verify() method asserts
 * that no unexpected requests were made.
 *
 *
 */
export declare class ɵangular_packages_common_http_testing_testing_a implements HttpBackend, HttpTestingController {
    /**
     * List of pending requests which have not yet been expected.
     */
    private open;
    /**
     * Handle an incoming request by queueing it in the list of open requests.
     */
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
    /**
     * Helper function to search for requests in the list of open requests.
     */
    private _match;
    /**
     * Search for requests in the list of open requests, and return all that match
     * without asserting anything about the number of matches.
     */
    match(match: string | RequestMatch | ((req: HttpRequest<any>) => boolean)): TestRequest[];
    /**
     * Expect that a single outstanding request matches the given matcher, and return
     * it.
     *
     * Requests returned through this API will no longer be in the list of open requests,
     * and thus will not match twice.
     */
    expectOne(match: string | RequestMatch | ((req: HttpRequest<any>) => boolean), description?: string): TestRequest;
    /**
     * Expect that no outstanding requests match the given matcher, and throw an error
     * if any do.
     */
    expectNone(match: string | RequestMatch | ((req: HttpRequest<any>) => boolean), description?: string): void;
    /**
     * Validate that there are no outstanding requests.
     */
    verify(opts?: {
        ignoreCancelled?: boolean;
    }): void;
    private descriptionFromMatcher;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_common_http_testing_testing_a, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_common_http_testing_testing_a>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5kLnRzIiwic291cmNlcyI6WyJ0ZXN0aW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY5LjEuMTJcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyZXMgYEh0dHBDbGllbnRUZXN0aW5nQmFja2VuZGAgYXMgdGhlIGBIdHRwQmFja2VuZGAgdXNlZCBieSBgSHR0cENsaWVudGAuXHJcbiAqXHJcbiAqIEluamVjdCBgSHR0cFRlc3RpbmdDb250cm9sbGVyYCB0byBleHBlY3QgYW5kIGZsdXNoIHJlcXVlc3RzIGluIHlvdXIgdGVzdHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBDbGllbnRUZXN0aW5nTW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRyb2xsZXIgdG8gYmUgaW5qZWN0ZWQgaW50byB0ZXN0cywgdGhhdCBhbGxvd3MgZm9yIG1vY2tpbmcgYW5kIGZsdXNoaW5nXHJcbiAqIG9mIHJlcXVlc3RzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBIdHRwVGVzdGluZ0NvbnRyb2xsZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggZm9yIHJlcXVlc3RzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHBhcmFtZXRlciwgd2l0aG91dCBhbnkgZXhwZWN0YXRpb25zLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBtYXRjaChtYXRjaDogc3RyaW5nIHwgUmVxdWVzdE1hdGNoIHwgKChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pID0+IGJvb2xlYW4pKTogVGVzdFJlcXVlc3RbXTtcclxuICAgIC8qKlxyXG4gICAgICogRXhwZWN0IHRoYXQgYSBzaW5nbGUgcmVxdWVzdCBoYXMgYmVlbiBtYWRlIHdoaWNoIG1hdGNoZXMgdGhlIGdpdmVuIFVSTCwgYW5kIHJldHVybiBpdHNcclxuICAgICAqIG1vY2suXHJcbiAgICAgKlxyXG4gICAgICogSWYgbm8gc3VjaCByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIG9yIG1vcmUgdGhhbiBvbmUgc3VjaCByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIGZhaWwgd2l0aCBhblxyXG4gICAgICogZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3QgZGVzY3JpcHRpb24sIGlmIGFueS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZXhwZWN0T25lKHVybDogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IFRlc3RSZXF1ZXN0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBlY3QgdGhhdCBhIHNpbmdsZSByZXF1ZXN0IGhhcyBiZWVuIG1hZGUgd2hpY2ggbWF0Y2hlcyB0aGUgZ2l2ZW4gcGFyYW1ldGVycywgYW5kIHJldHVyblxyXG4gICAgICogaXRzIG1vY2suXHJcbiAgICAgKlxyXG4gICAgICogSWYgbm8gc3VjaCByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIG9yIG1vcmUgdGhhbiBvbmUgc3VjaCByZXF1ZXN0IGhhcyBiZWVuIG1hZGUsIGZhaWwgd2l0aCBhblxyXG4gICAgICogZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3QgZGVzY3JpcHRpb24sIGlmIGFueS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZXhwZWN0T25lKHBhcmFtczogUmVxdWVzdE1hdGNoLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IFRlc3RSZXF1ZXN0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBlY3QgdGhhdCBhIHNpbmdsZSByZXF1ZXN0IGhhcyBiZWVuIG1hZGUgd2hpY2ggbWF0Y2hlcyB0aGUgZ2l2ZW4gcHJlZGljYXRlIGZ1bmN0aW9uLCBhbmRcclxuICAgICAqIHJldHVybiBpdHMgbW9jay5cclxuICAgICAqXHJcbiAgICAgKiBJZiBubyBzdWNoIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSwgb3IgbW9yZSB0aGFuIG9uZSBzdWNoIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSwgZmFpbCB3aXRoIGFuXHJcbiAgICAgKiBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZ2l2ZW4gcmVxdWVzdCBkZXNjcmlwdGlvbiwgaWYgYW55LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBleHBlY3RPbmUobWF0Y2hGbjogKChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pID0+IGJvb2xlYW4pLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IFRlc3RSZXF1ZXN0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBlY3QgdGhhdCBhIHNpbmdsZSByZXF1ZXN0IGhhcyBiZWVuIG1hZGUgd2hpY2ggbWF0Y2hlcyB0aGUgZ2l2ZW4gY29uZGl0aW9uLCBhbmQgcmV0dXJuXHJcbiAgICAgKiBpdHMgbW9jay5cclxuICAgICAqXHJcbiAgICAgKiBJZiBubyBzdWNoIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSwgb3IgbW9yZSB0aGFuIG9uZSBzdWNoIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSwgZmFpbCB3aXRoIGFuXHJcbiAgICAgKiBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZ2l2ZW4gcmVxdWVzdCBkZXNjcmlwdGlvbiwgaWYgYW55LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBleHBlY3RPbmUobWF0Y2g6IHN0cmluZyB8IFJlcXVlc3RNYXRjaCB8ICgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiBUZXN0UmVxdWVzdDtcclxuICAgIC8qKlxyXG4gICAgICogRXhwZWN0IHRoYXQgbm8gcmVxdWVzdHMgaGF2ZSBiZWVuIG1hZGUgd2hpY2ggbWF0Y2ggdGhlIGdpdmVuIFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBJZiBhIG1hdGNoaW5nIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSwgZmFpbCB3aXRoIGFuIGVycm9yIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZSBnaXZlbiByZXF1ZXN0XHJcbiAgICAgKiBkZXNjcmlwdGlvbiwgaWYgYW55LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBleHBlY3ROb25lKHVybDogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEV4cGVjdCB0aGF0IG5vIHJlcXVlc3RzIGhhdmUgYmVlbiBtYWRlIHdoaWNoIG1hdGNoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gICAgICpcclxuICAgICAqIElmIGEgbWF0Y2hpbmcgcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBmYWlsIHdpdGggYW4gZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3RcclxuICAgICAqIGRlc2NyaXB0aW9uLCBpZiBhbnkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGV4cGVjdE5vbmUocGFyYW1zOiBSZXF1ZXN0TWF0Y2gsIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogRXhwZWN0IHRoYXQgbm8gcmVxdWVzdHMgaGF2ZSBiZWVuIG1hZGUgd2hpY2ggbWF0Y2ggdGhlIGdpdmVuIHByZWRpY2F0ZSBmdW5jdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBJZiBhIG1hdGNoaW5nIHJlcXVlc3QgaGFzIGJlZW4gbWFkZSwgZmFpbCB3aXRoIGFuIGVycm9yIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZSBnaXZlbiByZXF1ZXN0XHJcbiAgICAgKiBkZXNjcmlwdGlvbiwgaWYgYW55LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBleHBlY3ROb25lKG1hdGNoRm46ICgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBlY3QgdGhhdCBubyByZXF1ZXN0cyBoYXZlIGJlZW4gbWFkZSB3aGljaCBtYXRjaCB0aGUgZ2l2ZW4gY29uZGl0aW9uLlxyXG4gICAgICpcclxuICAgICAqIElmIGEgbWF0Y2hpbmcgcmVxdWVzdCBoYXMgYmVlbiBtYWRlLCBmYWlsIHdpdGggYW4gZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGdpdmVuIHJlcXVlc3RcclxuICAgICAqIGRlc2NyaXB0aW9uLCBpZiBhbnkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGV4cGVjdE5vbmUobWF0Y2g6IHN0cmluZyB8IFJlcXVlc3RNYXRjaCB8ICgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZnkgdGhhdCBubyB1bm1hdGNoZWQgcmVxdWVzdHMgYXJlIG91dHN0YW5kaW5nLlxyXG4gICAgICpcclxuICAgICAqIElmIGFueSByZXF1ZXN0cyBhcmUgb3V0c3RhbmRpbmcsIGZhaWwgd2l0aCBhbiBlcnJvciBtZXNzYWdlIGluZGljYXRpbmcgd2hpY2ggcmVxdWVzdHMgd2VyZSBub3RcclxuICAgICAqIGhhbmRsZWQuXHJcbiAgICAgKlxyXG4gICAgICogSWYgYGlnbm9yZUNhbmNlbGxlZGAgaXMgbm90IHNldCAodGhlIGRlZmF1bHQpLCBgdmVyaWZ5KClgIHdpbGwgYWxzbyBmYWlsIGlmIGNhbmNlbGxlZCByZXF1ZXN0c1xyXG4gICAgICogd2VyZSBub3QgZXhwbGljaXRseSBtYXRjaGVkLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCB2ZXJpZnkob3B0cz86IHtcclxuICAgICAgICBpZ25vcmVDYW5jZWxsZWQ/OiBib29sZWFuO1xyXG4gICAgfSk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgbWF0Y2hlciBmb3IgcmVxdWVzdHMgYmFzZWQgb24gVVJMLCBtZXRob2QsIG9yIGJvdGguXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBSZXF1ZXN0TWF0Y2gge1xyXG4gICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQSBtb2NrIHJlcXVlc3RzIHRoYXQgd2FzIHJlY2VpdmVkIGFuZCBpcyByZWFkeSB0byBiZSBhbnN3ZXJlZC5cclxuICpcclxuICogVGhpcyBpbnRlcmZhY2UgYWxsb3dzIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBgSHR0cFJlcXVlc3RgLCBhbmQgYWxsb3dzXHJcbiAqIHJlc3BvbmRpbmcgd2l0aCBgSHR0cEV2ZW50YHMgb3IgYEh0dHBFcnJvclJlc3BvbnNlYHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRlc3RSZXF1ZXN0IHtcclxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT47XHJcbiAgICBwcml2YXRlIG9ic2VydmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSByZXF1ZXN0IHdhcyBjYW5jZWxsZWQgYWZ0ZXIgaXQgd2FzIHNlbnQuXHJcbiAgICAgKi9cclxuICAgIGdldCBjYW5jZWxsZWQoKTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNvbHZlIHRoZSByZXF1ZXN0IGJ5IHJldHVybmluZyBhIGJvZHkgcGx1cyBhZGRpdGlvbmFsIEhUVFAgaW5mb3JtYXRpb24gKHN1Y2ggYXMgcmVzcG9uc2VcclxuICAgICAqIGhlYWRlcnMpIGlmIHByb3ZpZGVkLlxyXG4gICAgICogSWYgdGhlIHJlcXVlc3Qgc3BlY2lmaWVzIGFuIGV4cGVjdGVkIGJvZHkgdHlwZSwgdGhlIGJvZHkgaXMgY29udmVydGVkIGludG8gdGhlIHJlcXVlc3RlZCB0eXBlLlxyXG4gICAgICogT3RoZXJ3aXNlLCB0aGUgYm9keSBpcyBjb252ZXJ0ZWQgdG8gYEpTT05gIGJ5IGRlZmF1bHQuXHJcbiAgICAgKlxyXG4gICAgICogQm90aCBzdWNjZXNzZnVsIGFuZCB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VzIGNhbiBiZSBkZWxpdmVyZWQgdmlhIGBmbHVzaCgpYC5cclxuICAgICAqL1xyXG4gICAgZmx1c2goYm9keTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgc3RyaW5nIHwgbnVtYmVyIHwgT2JqZWN0IHwgKHN0cmluZyB8IG51bWJlciB8IE9iamVjdCB8IG51bGwpW10gfCBudWxsLCBvcHRzPzoge1xyXG4gICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcclxuICAgICAgICAgICAgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogUmVzb2x2ZSB0aGUgcmVxdWVzdCBieSByZXR1cm5pbmcgYW4gYEVycm9yRXZlbnRgIChlLmcuIHNpbXVsYXRpbmcgYSBuZXR3b3JrIGZhaWx1cmUpLlxyXG4gICAgICovXHJcbiAgICBlcnJvcihlcnJvcjogRXJyb3JFdmVudCwgb3B0cz86IHtcclxuICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XHJcbiAgICAgICAgICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0YXR1cz86IG51bWJlcjtcclxuICAgICAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xyXG4gICAgfSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERlbGl2ZXIgYW4gYXJiaXRyYXJ5IGBIdHRwRXZlbnRgIChzdWNoIGFzIGEgcHJvZ3Jlc3MgZXZlbnQpIG9uIHRoZSByZXNwb25zZSBzdHJlYW0gZm9yIHRoaXNcclxuICAgICAqIHJlcXVlc3QuXHJcbiAgICAgKi9cclxuICAgIGV2ZW50KGV2ZW50OiBIdHRwRXZlbnQ8YW55Pik6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHRlc3RpbmcgYmFja2VuZCBmb3IgYEh0dHBDbGllbnRgIHdoaWNoIGJvdGggYWN0cyBhcyBhbiBgSHR0cEJhY2tlbmRgXHJcbiAqIGFuZCBhcyB0aGUgYEh0dHBUZXN0aW5nQ29udHJvbGxlcmAuXHJcbiAqXHJcbiAqIGBIdHRwQ2xpZW50VGVzdGluZ0JhY2tlbmRgIHdvcmtzIGJ5IGtlZXBpbmcgYSBsaXN0IG9mIGFsbCBvcGVuIHJlcXVlc3RzLlxyXG4gKiBBcyByZXF1ZXN0cyBjb21lIGluLCB0aGV5J3JlIGFkZGVkIHRvIHRoZSBsaXN0LiBVc2VycyBjYW4gYXNzZXJ0IHRoYXQgc3BlY2lmaWNcclxuICogcmVxdWVzdHMgd2VyZSBtYWRlIGFuZCB0aGVuIGZsdXNoIHRoZW0uIEluIHRoZSBlbmQsIGEgdmVyaWZ5KCkgbWV0aG9kIGFzc2VydHNcclxuICogdGhhdCBubyB1bmV4cGVjdGVkIHJlcXVlc3RzIHdlcmUgbWFkZS5cclxuICpcclxuICpcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25faHR0cF90ZXN0aW5nX3Rlc3RpbmdfYSBpbXBsZW1lbnRzIEh0dHBCYWNrZW5kLCBIdHRwVGVzdGluZ0NvbnRyb2xsZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IG9mIHBlbmRpbmcgcmVxdWVzdHMgd2hpY2ggaGF2ZSBub3QgeWV0IGJlZW4gZXhwZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3BlbjtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGFuIGluY29taW5nIHJlcXVlc3QgYnkgcXVldWVpbmcgaXQgaW4gdGhlIGxpc3Qgb2Ygb3BlbiByZXF1ZXN0cy5cclxuICAgICAqL1xyXG4gICAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2VhcmNoIGZvciByZXF1ZXN0cyBpbiB0aGUgbGlzdCBvZiBvcGVuIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9tYXRjaDtcclxuICAgIC8qKlxyXG4gICAgICogU2VhcmNoIGZvciByZXF1ZXN0cyBpbiB0aGUgbGlzdCBvZiBvcGVuIHJlcXVlc3RzLCBhbmQgcmV0dXJuIGFsbCB0aGF0IG1hdGNoXHJcbiAgICAgKiB3aXRob3V0IGFzc2VydGluZyBhbnl0aGluZyBhYm91dCB0aGUgbnVtYmVyIG9mIG1hdGNoZXMuXHJcbiAgICAgKi9cclxuICAgIG1hdGNoKG1hdGNoOiBzdHJpbmcgfCBSZXF1ZXN0TWF0Y2ggfCAoKHJlcTogSHR0cFJlcXVlc3Q8YW55PikgPT4gYm9vbGVhbikpOiBUZXN0UmVxdWVzdFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBlY3QgdGhhdCBhIHNpbmdsZSBvdXRzdGFuZGluZyByZXF1ZXN0IG1hdGNoZXMgdGhlIGdpdmVuIG1hdGNoZXIsIGFuZCByZXR1cm5cclxuICAgICAqIGl0LlxyXG4gICAgICpcclxuICAgICAqIFJlcXVlc3RzIHJldHVybmVkIHRocm91Z2ggdGhpcyBBUEkgd2lsbCBubyBsb25nZXIgYmUgaW4gdGhlIGxpc3Qgb2Ygb3BlbiByZXF1ZXN0cyxcclxuICAgICAqIGFuZCB0aHVzIHdpbGwgbm90IG1hdGNoIHR3aWNlLlxyXG4gICAgICovXHJcbiAgICBleHBlY3RPbmUobWF0Y2g6IHN0cmluZyB8IFJlcXVlc3RNYXRjaCB8ICgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiBUZXN0UmVxdWVzdDtcclxuICAgIC8qKlxyXG4gICAgICogRXhwZWN0IHRoYXQgbm8gb3V0c3RhbmRpbmcgcmVxdWVzdHMgbWF0Y2ggdGhlIGdpdmVuIG1hdGNoZXIsIGFuZCB0aHJvdyBhbiBlcnJvclxyXG4gICAgICogaWYgYW55IGRvLlxyXG4gICAgICovXHJcbiAgICBleHBlY3ROb25lKG1hdGNoOiBzdHJpbmcgfCBSZXF1ZXN0TWF0Y2ggfCAoKHJlcTogSHR0cFJlcXVlc3Q8YW55PikgPT4gYm9vbGVhbiksIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgdGhhdCB0aGVyZSBhcmUgbm8gb3V0c3RhbmRpbmcgcmVxdWVzdHMuXHJcbiAgICAgKi9cclxuICAgIHZlcmlmeShvcHRzPzoge1xyXG4gICAgICAgIGlnbm9yZUNhbmNlbGxlZD86IGJvb2xlYW47XHJcbiAgICB9KTogdm9pZDtcclxuICAgIHByaXZhdGUgZGVzY3JpcHRpb25Gcm9tTWF0Y2hlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=