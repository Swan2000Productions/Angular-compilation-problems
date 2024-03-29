/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ChildrenOutletContexts } from '@angular/router';
import { Compiler } from '@angular/core';
import { ExtraOptions } from '@angular/router';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { NgModuleFactoryLoader } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { UrlHandlingStrategy } from '@angular/router';
import { UrlSerializer } from '@angular/router';

/**
 * @description
 *
 * Sets up the router to be used for testing.
 *
 * The modules sets up the router to be used for testing.
 * It provides spy implementations of `Location`, `LocationStrategy`, and {@link
 * NgModuleFactoryLoader}.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * beforeEach(() => {
 *   TestBed.configureTestModule({
 *     imports: [
 *       RouterTestingModule.withRoutes(
 *         [{path: '', component: BlankCmp}, {path: 'simple', component: SimpleCmp}]
 *       )
 *     ]
 *   });
 * });
 * ```
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
export declare class RouterTestingModule {
    static withRoutes(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterTestingModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<RouterTestingModule, never, never, [typeof ɵngcc1.RouterModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<RouterTestingModule>;
}

/**
 * Router setup factory function used for testing.
 *
 * @publicApi
 */
export declare function setupTestingRouter(urlSerializer: UrlSerializer, contexts: ChildrenOutletContexts, location: Location, loader: NgModuleFactoryLoader, compiler: Compiler, injector: Injector, routes: Route[][], opts?: ExtraOptions, urlHandlingStrategy?: UrlHandlingStrategy): Router;

/**
 * Router setup factory function used for testing.
 *
 * @deprecated As of v5.2. The 2nd-to-last argument should be `ExtraOptions`, not
 * `UrlHandlingStrategy`
 * @publicApi
 */
export declare function setupTestingRouter(urlSerializer: UrlSerializer, contexts: ChildrenOutletContexts, location: Location, loader: NgModuleFactoryLoader, compiler: Compiler, injector: Injector, routes: Route[][], urlHandlingStrategy?: UrlHandlingStrategy): Router;

/**
 * @description
 *
 * Allows to simulate the loading of ng modules in tests.
 *
 * ```
 * const loader = TestBed.inject(NgModuleFactoryLoader);
 *
 * @Component({template: 'lazy-loaded'})
 * class LazyLoadedComponent {}
 * @NgModule({
 *   declarations: [LazyLoadedComponent],
 *   imports: [RouterModule.forChild([{path: 'loaded', component: LazyLoadedComponent}])]
 * })
 *
 * class LoadedModule {}
 *
 * // sets up stubbedModules
 * loader.stubbedModules = {lazyModule: LoadedModule};
 *
 * router.resetConfig([
 *   {path: 'lazy', loadChildren: 'lazyModule'},
 * ]);
 *
 * router.navigateByUrl('/lazy/loaded');
 * ```
 *
 * @publicApi
 */
export declare class SpyNgModuleFactoryLoader implements NgModuleFactoryLoader {
    private compiler;
    /**
     * @docsNotRequired
     */
    private _stubbedModules;
    /**
     * @docsNotRequired
     */
    set stubbedModules(modules: {
        [path: string]: any;
    });
    /**
     * @docsNotRequired
     */
    get stubbedModules(): {
        [path: string]: any;
    };
    constructor(compiler: Compiler);
    load(path: string): Promise<NgModuleFactory<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SpyNgModuleFactoryLoader, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SpyNgModuleFactoryLoader>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5kLnRzIiwic291cmNlcyI6WyJ0ZXN0aW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMS4xMlxuICogKGMpIDIwMTAtMjAyMCBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG5pbXBvcnQgeyBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tcGlsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXh0cmFPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVcmxIYW5kbGluZ1N0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXJsU2VyaWFsaXplciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFNldHMgdXAgdGhlIHJvdXRlciB0byBiZSB1c2VkIGZvciB0ZXN0aW5nLlxyXG4gKlxyXG4gKiBUaGUgbW9kdWxlcyBzZXRzIHVwIHRoZSByb3V0ZXIgdG8gYmUgdXNlZCBmb3IgdGVzdGluZy5cclxuICogSXQgcHJvdmlkZXMgc3B5IGltcGxlbWVudGF0aW9ucyBvZiBgTG9jYXRpb25gLCBgTG9jYXRpb25TdHJhdGVneWAsIGFuZCB7QGxpbmtcclxuICogTmdNb2R1bGVGYWN0b3J5TG9hZGVyfS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgXHJcbiAqIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gKiAgIFRlc3RCZWQuY29uZmlndXJlVGVzdE1vZHVsZSh7XHJcbiAqICAgICBpbXBvcnRzOiBbXHJcbiAqICAgICAgIFJvdXRlclRlc3RpbmdNb2R1bGUud2l0aFJvdXRlcyhcclxuICogICAgICAgICBbe3BhdGg6ICcnLCBjb21wb25lbnQ6IEJsYW5rQ21wfSwge3BhdGg6ICdzaW1wbGUnLCBjb21wb25lbnQ6IFNpbXBsZUNtcH1dXHJcbiAqICAgICAgIClcclxuICogICAgIF1cclxuICogICB9KTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJUZXN0aW5nTW9kdWxlIHtcclxuICAgIHN0YXRpYyB3aXRoUm91dGVzKHJvdXRlczogUm91dGVzLCBjb25maWc/OiBFeHRyYU9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvdXRlclRlc3RpbmdNb2R1bGU+O1xyXG59XHJcblxyXG4vKipcclxuICogUm91dGVyIHNldHVwIGZhY3RvcnkgZnVuY3Rpb24gdXNlZCBmb3IgdGVzdGluZy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gc2V0dXBUZXN0aW5nUm91dGVyKHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIGNvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogTG9jYXRpb24sIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBjb21waWxlcjogQ29tcGlsZXIsIGluamVjdG9yOiBJbmplY3Rvciwgcm91dGVzOiBSb3V0ZVtdW10sIG9wdHM/OiBFeHRyYU9wdGlvbnMsIHVybEhhbmRsaW5nU3RyYXRlZ3k/OiBVcmxIYW5kbGluZ1N0cmF0ZWd5KTogUm91dGVyO1xyXG5cclxuLyoqXHJcbiAqIFJvdXRlciBzZXR1cCBmYWN0b3J5IGZ1bmN0aW9uIHVzZWQgZm9yIHRlc3RpbmcuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIEFzIG9mIHY1LjIuIFRoZSAybmQtdG8tbGFzdCBhcmd1bWVudCBzaG91bGQgYmUgYEV4dHJhT3B0aW9uc2AsIG5vdFxyXG4gKiBgVXJsSGFuZGxpbmdTdHJhdGVneWBcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gc2V0dXBUZXN0aW5nUm91dGVyKHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIGNvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogTG9jYXRpb24sIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBjb21waWxlcjogQ29tcGlsZXIsIGluamVjdG9yOiBJbmplY3Rvciwgcm91dGVzOiBSb3V0ZVtdW10sIHVybEhhbmRsaW5nU3RyYXRlZ3k/OiBVcmxIYW5kbGluZ1N0cmF0ZWd5KTogUm91dGVyO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBbGxvd3MgdG8gc2ltdWxhdGUgdGhlIGxvYWRpbmcgb2YgbmcgbW9kdWxlcyBpbiB0ZXN0cy5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGxvYWRlciA9IFRlc3RCZWQuaW5qZWN0KE5nTW9kdWxlRmFjdG9yeUxvYWRlcik7XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe3RlbXBsYXRlOiAnbGF6eS1sb2FkZWQnfSlcclxuICogY2xhc3MgTGF6eUxvYWRlZENvbXBvbmVudCB7fVxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGRlY2xhcmF0aW9uczogW0xhenlMb2FkZWRDb21wb25lbnRdLFxyXG4gKiAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW3twYXRoOiAnbG9hZGVkJywgY29tcG9uZW50OiBMYXp5TG9hZGVkQ29tcG9uZW50fV0pXVxyXG4gKiB9KVxyXG4gKlxyXG4gKiBjbGFzcyBMb2FkZWRNb2R1bGUge31cclxuICpcclxuICogLy8gc2V0cyB1cCBzdHViYmVkTW9kdWxlc1xyXG4gKiBsb2FkZXIuc3R1YmJlZE1vZHVsZXMgPSB7bGF6eU1vZHVsZTogTG9hZGVkTW9kdWxlfTtcclxuICpcclxuICogcm91dGVyLnJlc2V0Q29uZmlnKFtcclxuICogICB7cGF0aDogJ2xhenknLCBsb2FkQ2hpbGRyZW46ICdsYXp5TW9kdWxlJ30sXHJcbiAqIF0pO1xyXG4gKlxyXG4gKiByb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xhenkvbG9hZGVkJyk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTcHlOZ01vZHVsZUZhY3RvcnlMb2FkZXIgaW1wbGVtZW50cyBOZ01vZHVsZUZhY3RvcnlMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBjb21waWxlcjtcclxuICAgIC8qKlxyXG4gICAgICogQGRvY3NOb3RSZXF1aXJlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zdHViYmVkTW9kdWxlcztcclxuICAgIC8qKlxyXG4gICAgICogQGRvY3NOb3RSZXF1aXJlZFxyXG4gICAgICovXHJcbiAgICBzZXQgc3R1YmJlZE1vZHVsZXMobW9kdWxlczoge1xyXG4gICAgICAgIFtwYXRoOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogQGRvY3NOb3RSZXF1aXJlZFxyXG4gICAgICovXHJcbiAgICBnZXQgc3R1YmJlZE1vZHVsZXMoKToge1xyXG4gICAgICAgIFtwYXRoOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3IoY29tcGlsZXI6IENvbXBpbGVyKTtcclxuICAgIGxvYWQocGF0aDogc3RyaW5nKTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8YW55Pj47XHJcbn1cclxuXHJcbmV4cG9ydCB7IH1cclxuIl19