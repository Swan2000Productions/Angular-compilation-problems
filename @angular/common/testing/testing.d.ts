/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { LocationChangeListener } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { SubscriptionLike } from 'rxjs';

/**
 * Provider for mock platform location config
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare const MOCK_PLATFORM_LOCATION_CONFIG: InjectionToken<MockPlatformLocationConfig>;

/**
 * A mock implementation of {@link LocationStrategy} that allows tests to fire simulated
 * location events.
 *
 * @publicApi
 */
export declare class MockLocationStrategy extends LocationStrategy {
    internalBaseHref: string;
    internalPath: string;
    internalTitle: string;
    urlChanges: string[];
    private stateChanges;
    constructor();
    simulatePopState(url: string): void;
    path(includeHash?: boolean): string;
    prepareExternalUrl(internal: string): string;
    pushState(ctx: any, title: string, path: string, query: string): void;
    replaceState(ctx: any, title: string, path: string, query: string): void;
    onPopState(fn: (value: any) => void): void;
    getBaseHref(): string;
    back(): void;
    forward(): void;
    getState(): unknown;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MockLocationStrategy, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MockLocationStrategy>;
}

/**
 * Mock implementation of URL state.
 *
 * @publicApi
 */
export declare class MockPlatformLocation implements PlatformLocation {
    private baseHref;
    private hashUpdate;
    private urlChanges;
    constructor(config?: MockPlatformLocationConfig);
    get hostname(): string;
    get protocol(): string;
    get port(): string;
    get pathname(): string;
    get search(): string;
    get hash(): string;
    get state(): unknown;
    getBaseHrefFromDOM(): string;
    onPopState(fn: LocationChangeListener): void;
    onHashChange(fn: LocationChangeListener): void;
    get href(): string;
    get url(): string;
    private parseChanges;
    replaceState(state: any, title: string, newUrl: string): void;
    pushState(state: any, title: string, newUrl: string): void;
    forward(): void;
    back(): void;
    getState(): unknown;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MockPlatformLocation, [{ optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MockPlatformLocation>;
}

/**
 * Mock platform location config
 *
 * @publicApi
 */
export declare interface MockPlatformLocationConfig {
    startUrl?: string;
    appBaseHref?: string;
}

/**
 * A spy for {@link Location} that allows tests to fire simulated location events.
 *
 * @publicApi
 */
export declare class SpyLocation implements Location {
    urlChanges: string[];
    private _history;
    private _historyIndex;
    setInitialPath(url: string): void;
    setBaseHref(url: string): void;
    path(): string;
    getState(): unknown;
    isCurrentPathEqualTo(path: string, query?: string): boolean;
    simulateUrlPop(pathname: string): void;
    simulateHashChange(pathname: string): void;
    prepareExternalUrl(url: string): string;
    go(path: string, query?: string, state?: any): void;
    replaceState(path: string, query?: string, state?: any): void;
    forward(): void;
    back(): void;
    onUrlChange(fn: (url: string, state: unknown) => void): void;
    subscribe(onNext: (value: any) => void, onThrow?: ((error: any) => void) | null, onReturn?: (() => void) | null): SubscriptionLike;
    normalize(url: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SpyLocation, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SpyLocation>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5kLnRzIiwic291cmNlcyI6WyJ0ZXN0aW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY5LjEuMTJcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFBsYXRmb3JtTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25MaWtlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXIgZm9yIG1vY2sgcGxhdGZvcm0gbG9jYXRpb24gY29uZmlnXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE1PQ0tfUExBVEZPUk1fTE9DQVRJT05fQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxNb2NrUGxhdGZvcm1Mb2NhdGlvbkNvbmZpZz47XHJcblxyXG4vKipcclxuICogQSBtb2NrIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fSB0aGF0IGFsbG93cyB0ZXN0cyB0byBmaXJlIHNpbXVsYXRlZFxyXG4gKiBsb2NhdGlvbiBldmVudHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1vY2tMb2NhdGlvblN0cmF0ZWd5IGV4dGVuZHMgTG9jYXRpb25TdHJhdGVneSB7XHJcbiAgICBpbnRlcm5hbEJhc2VIcmVmOiBzdHJpbmc7XHJcbiAgICBpbnRlcm5hbFBhdGg6IHN0cmluZztcclxuICAgIGludGVybmFsVGl0bGU6IHN0cmluZztcclxuICAgIHVybENoYW5nZXM6IHN0cmluZ1tdO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZUNoYW5nZXM7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgc2ltdWxhdGVQb3BTdGF0ZSh1cmw6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBwYXRoKGluY2x1ZGVIYXNoPzogYm9vbGVhbik6IHN0cmluZztcclxuICAgIHByZXBhcmVFeHRlcm5hbFVybChpbnRlcm5hbDogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgcHVzaFN0YXRlKGN0eDogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcmVwbGFjZVN0YXRlKGN0eDogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgb25Qb3BTdGF0ZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgZ2V0U3RhdGUoKTogdW5rbm93bjtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1vY2sgaW1wbGVtZW50YXRpb24gb2YgVVJMIHN0YXRlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNb2NrUGxhdGZvcm1Mb2NhdGlvbiBpbXBsZW1lbnRzIFBsYXRmb3JtTG9jYXRpb24ge1xyXG4gICAgcHJpdmF0ZSBiYXNlSHJlZjtcclxuICAgIHByaXZhdGUgaGFzaFVwZGF0ZTtcclxuICAgIHByaXZhdGUgdXJsQ2hhbmdlcztcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IE1vY2tQbGF0Zm9ybUxvY2F0aW9uQ29uZmlnKTtcclxuICAgIGdldCBob3N0bmFtZSgpOiBzdHJpbmc7XHJcbiAgICBnZXQgcHJvdG9jb2woKTogc3RyaW5nO1xyXG4gICAgZ2V0IHBvcnQoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHBhdGhuYW1lKCk6IHN0cmluZztcclxuICAgIGdldCBzZWFyY2goKTogc3RyaW5nO1xyXG4gICAgZ2V0IGhhc2goKTogc3RyaW5nO1xyXG4gICAgZ2V0IHN0YXRlKCk6IHVua25vd247XHJcbiAgICBnZXRCYXNlSHJlZkZyb21ET00oKTogc3RyaW5nO1xyXG4gICAgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBvbkhhc2hDaGFuZ2UoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgZ2V0IGhyZWYoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHVybCgpOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhcnNlQ2hhbmdlcztcclxuICAgIHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCBuZXdVcmw6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgbmV3VXJsOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG4gICAgZ2V0U3RhdGUoKTogdW5rbm93bjtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1vY2sgcGxhdGZvcm0gbG9jYXRpb24gY29uZmlnXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBNb2NrUGxhdGZvcm1Mb2NhdGlvbkNvbmZpZyB7XHJcbiAgICBzdGFydFVybD86IHN0cmluZztcclxuICAgIGFwcEJhc2VIcmVmPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzcHkgZm9yIHtAbGluayBMb2NhdGlvbn0gdGhhdCBhbGxvd3MgdGVzdHMgdG8gZmlyZSBzaW11bGF0ZWQgbG9jYXRpb24gZXZlbnRzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTcHlMb2NhdGlvbiBpbXBsZW1lbnRzIExvY2F0aW9uIHtcclxuICAgIHVybENoYW5nZXM6IHN0cmluZ1tdO1xyXG4gICAgcHJpdmF0ZSBfaGlzdG9yeTtcclxuICAgIHByaXZhdGUgX2hpc3RvcnlJbmRleDtcclxuICAgIHNldEluaXRpYWxQYXRoKHVybDogc3RyaW5nKTogdm9pZDtcclxuICAgIHNldEJhc2VIcmVmKHVybDogc3RyaW5nKTogdm9pZDtcclxuICAgIHBhdGgoKTogc3RyaW5nO1xyXG4gICAgZ2V0U3RhdGUoKTogdW5rbm93bjtcclxuICAgIGlzQ3VycmVudFBhdGhFcXVhbFRvKHBhdGg6IHN0cmluZywgcXVlcnk/OiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgc2ltdWxhdGVVcmxQb3AocGF0aG5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBzaW11bGF0ZUhhc2hDaGFuZ2UocGF0aG5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBwcmVwYXJlRXh0ZXJuYWxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBnbyhwYXRoOiBzdHJpbmcsIHF1ZXJ5Pzogc3RyaW5nLCBzdGF0ZT86IGFueSk6IHZvaWQ7XHJcbiAgICByZXBsYWNlU3RhdGUocGF0aDogc3RyaW5nLCBxdWVyeT86IHN0cmluZywgc3RhdGU/OiBhbnkpOiB2b2lkO1xyXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG4gICAgb25VcmxDaGFuZ2UoZm46ICh1cmw6IHN0cmluZywgc3RhdGU6IHVua25vd24pID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgc3Vic2NyaWJlKG9uTmV4dDogKHZhbHVlOiBhbnkpID0+IHZvaWQsIG9uVGhyb3c/OiAoKGVycm9yOiBhbnkpID0+IHZvaWQpIHwgbnVsbCwgb25SZXR1cm4/OiAoKCkgPT4gdm9pZCkgfCBudWxsKTogU3Vic2NyaXB0aW9uTGlrZTtcclxuICAgIG5vcm1hbGl6ZSh1cmw6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=