/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AfterContentInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Compiler } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { NgModuleFactoryLoader } from '@angular/core';
import { NgProbeToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { Provider } from '@angular/core';
import { QueryList } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

/**
 * Provides access to information about a route associated with a component
 * that is loaded in an outlet.
 * Use to traverse the `RouterState` tree and extract information from nodes.
 *
 * {@example router/activated-route/module.ts region="activated-route"
 *     header="activated-route.component.ts"}
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare class ActivatedRoute {
    /** An observable of the URL segments matched by this route. */
    url: Observable<UrlSegment[]>;
    /** An observable of the matrix parameters scoped to this route. */
    params: Observable<Params>;
    /** An observable of the query parameters shared by all the routes. */
    queryParams: Observable<Params>;
    /** An observable of the URL fragment shared by all the routes. */
    fragment: Observable<string>;
    /** An observable of the static and resolved data of this route. */
    data: Observable<Data>;
    /** The outlet name of the route, a constant. */
    outlet: string;
    /** The component of the route, a constant. */
    component: Type<any> | string | null;
    /** The current snapshot of this route */
    snapshot: ActivatedRouteSnapshot;
    /** The configuration used to match this route. */
    get routeConfig(): Route | null;
    /** The root of the router state. */
    get root(): ActivatedRoute;
    /** The parent of this route in the router state tree. */
    get parent(): ActivatedRoute | null;
    /** The first child of this route in the router state tree. */
    get firstChild(): ActivatedRoute | null;
    /** The children of this route in the router state tree. */
    get children(): ActivatedRoute[];
    /** The path from the root of the router state tree to this route. */
    get pathFromRoot(): ActivatedRoute[];
    /**
     * An Observable that contains a map of the required and optional parameters
     * specific to the route.
     * The map supports retrieving single and multiple values from the same parameter.
     */
    get paramMap(): Observable<ParamMap>;
    /**
     * An Observable that contains a map of the query parameters available to all routes.
     * The map supports retrieving single and multiple values from the query parameter.
     */
    get queryParamMap(): Observable<ParamMap>;
    toString(): string;
}

/**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * ```
 * @Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class ActivatedRouteSnapshot {
    /** The URL segments matched by this route */
    url: UrlSegment[];
    /** The matrix parameters scoped to this route */
    params: Params;
    /** The query parameters shared by all the routes */
    queryParams: Params;
    /** The URL fragment shared by all the routes */
    fragment: string;
    /** The static and resolved data of this route */
    data: Data;
    /** The outlet name of the route */
    outlet: string;
    /** The component of the route */
    component: Type<any> | string | null;
    /** The configuration used to match this route **/
    readonly routeConfig: Route | null;
    /** The root of the router state */
    get root(): ActivatedRouteSnapshot;
    /** The parent of this route in the router state tree */
    get parent(): ActivatedRouteSnapshot | null;
    /** The first child of this route in the router state tree */
    get firstChild(): ActivatedRouteSnapshot | null;
    /** The children of this route in the router state tree */
    get children(): ActivatedRouteSnapshot[];
    /** The path from the root of the router state tree to this route */
    get pathFromRoot(): ActivatedRouteSnapshot[];
    get paramMap(): ParamMap;
    get queryParamMap(): ParamMap;
    toString(): string;
}

/**
 * An event triggered at the end of the activation part
 * of the Resolve phase of routing.
 * @see `ActivationStart`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ActivationEnd {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * An event triggered at the start of the activation part
 * of the Resolve phase of routing.
 * @see ActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ActivationStart {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a route can be activated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canActivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanActivateTeam implements CanActivate {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canActivate(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canActivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canActivate: [CanActivateTeam]
 *       }
 *     ])
 *   ],
 *   providers: [CanActivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canActivate` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canActivate: ['canActivateTeam']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canActivateTeam',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a child route can be activated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canActivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanActivateTeam implements CanActivateChild {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canActivateChild(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canActivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'root',
 *         canActivateChild: [CanActivateTeam],
 *         children: [
 *           {
 *              path: 'team/:id',
 *              component: TeamComponent
 *           }
 *         ]
 *       }
 *     ])
 *   ],
 *   providers: [CanActivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canActivateChild` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'root',
 *         canActivateChild: ['canActivateTeam'],
 *         children: [
 *           {
 *             path: 'team/:id',
 *             component: TeamComponent
 *           }
 *         ]
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canActivateTeam',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a route can be deactivated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canDeactivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanDeactivateTeam implements CanDeactivate<TeamComponent> {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canDeactivate(
 *     component: TeamComponent,
 *     currentRoute: ActivatedRouteSnapshot,
 *     currentState: RouterStateSnapshot,
 *     nextState: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canDeactivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canDeactivate: [CanDeactivateTeam]
 *       }
 *     ])
 *   ],
 *   providers: [CanDeactivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canDeactivate` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canDeactivate: ['canDeactivateTeam']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canDeactivateTeam',
 *       useValue: (component: TeamComponent, currentRoute: ActivatedRouteSnapshot, currentState:
 * RouterStateSnapshot, nextState: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanDeactivate<T> {
    canDeactivate(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if children can be loaded.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canLoadChildren(user: UserToken, id: string, segments: UrlSegment[]): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanLoadTeamSection implements CanLoad {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
 *     return this.permissions.canLoadChildren(this.currentUser, route, segments);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         loadChildren: 'team.js',
 *         canLoad: [CanLoadTeamSection]
 *       }
 *     ])
 *   ],
 *   providers: [CanLoadTeamSection, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canLoad` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         loadChildren: 'team.js',
 *         canLoad: ['canLoadTeamSection']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canLoadTeamSection',
 *       useValue: (route: Route, segments: UrlSegment[]) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanLoad {
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * An event triggered at the end of the child-activation part
 * of the Resolve phase of routing.
 * @see `ChildActivationStart`
 * @see `ResolveStart` *
 * @publicApi
 */
export declare class ChildActivationEnd {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * An event triggered at the start of the child-activation
 * part of the Resolve phase of routing.
 * @see  `ChildActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ChildActivationStart {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * Store contextual information about the children (= nested) `RouterOutlet`
 *
 * @publicApi
 */
export declare class ChildrenOutletContexts {
    private contexts;
    /** Called when a `RouterOutlet` directive is instantiated */
    onChildOutletCreated(childName: string, outlet: RouterOutlet): void;
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
    onChildOutletDestroyed(childName: string): void;
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
    onOutletDeactivated(): Map<string, OutletContext>;
    onOutletReAttached(contexts: Map<string, OutletContext>): void;
    getOrCreateContext(childName: string): OutletContext;
    getContext(childName: string): OutletContext | null;
}

/**
 * Converts a `Params` instance to a `ParamMap`.
 * @param params The instance to convert.
 * @returns The new map instance.
 *
 * @publicApi
 */
export declare function convertToParamMap(params: Params): ParamMap;

/**
 *
 * Represents static data associated with a particular route.
 *
 * @see `Route#data`
 *
 * @publicApi
 */
export declare type Data = {
    [name: string]: any;
};

/**
 * @description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * @publicApi
 */
export declare class DefaultUrlSerializer implements UrlSerializer {
    /** Parses a url into a `UrlTree` */
    parse(url: string): UrlTree;
    /** Converts a `UrlTree` into a url */
    serialize(tree: UrlTree): string;
}

/**
 * A string of the form `path/to/file#exportName` that acts as a URL for a set of routes to load.
 *
 * @see `Route#loadChildren`
 * @publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated in favor of the proposed ES dynamic
 * `import()` expression, which offers a more natural and standards-based mechanism to dynamically
 * load an ES module at runtime.
 */
export declare type DeprecatedLoadChildren = string;

/**
 * @description
 *
 * Represents the detached route tree.
 *
 * This is an opaque value the router will give to a custom route reuse strategy
 * to store and retrieve later on.
 *
 * @publicApi
 */
export declare type DetachedRouteHandle = {};

/**
 * Error handler that is invoked when a navigation error occurs.
 *
 * If the handler returns a value, the navigation promise is resolved with this value.
 * If the handler throws an exception, the navigation promise is rejected with
 * the exception.
 *
 * @publicApi
 */
declare type ErrorHandler = (error: any) => any;

/**
 * Router events that allow you to track the lifecycle of the router.
 *
 * The sequence of router events is as follows:
 *
 * - `NavigationStart`,
 * - `RouteConfigLoadStart`,
 * - `RouteConfigLoadEnd`,
 * - `RoutesRecognized`,
 * - `GuardsCheckStart`,
 * - `ChildActivationStart`,
 * - `ActivationStart`,
 * - `GuardsCheckEnd`,
 * - `ResolveStart`,
 * - `ResolveEnd`,
 * - `ActivationEnd`
 * - `ChildActivationEnd`
 * - `NavigationEnd`,
 * - `NavigationCancel`,
 * - `NavigationError`
 * - `Scroll`
 *
 * @publicApi
 */
export declare type Event = RouterEvent | RouteConfigLoadStart | RouteConfigLoadEnd | ChildActivationStart | ChildActivationEnd | ActivationStart | ActivationEnd | Scroll;

/**
 * A set of configuration options for a router module, provided in the
 * `forRoot()` method.
 *
 * @publicApi
 */
export declare interface ExtraOptions {
    /**
     * When true, log all internal navigation events to the console.
     * Use for debugging.
     */
    enableTracing?: boolean;
    /**
     * When true, enable the location strategy that uses the URL fragment
     * instead of the history API.
     */
    useHash?: boolean;
    /**
     * One of `enabled` or `disabled`.
     * When set to `enabled`, the initial navigation starts before the root component is created.
     * The bootstrap is blocked until the initial navigation is complete. This value is required for
     * [server-side rendering](guide/universal) to work.
     * When set to `disabled`, the initial navigation is not performed.
     * The location listener is set up before the root component gets created.
     * Use if there is a reason to have more control over when the router
     * starts its initial navigation due to some complex initialization logic.
     *
     * Legacy values are deprecated since v4 and should not be used for new applications:
     *
     * * `legacy_enabled` - Default for compatibility.
     * The initial navigation starts after the root component has been created,
     * but the bootstrap is not blocked until the initial navigation is complete.
     * * `legacy_disabled` - The initial navigation is not performed.
     * The location listener is set up after the root component gets created.
     * * `true` - same as `legacy_enabled`.
     * * `false` - same as `legacy_disabled`.
     */
    initialNavigation?: InitialNavigation;
    /**
     * A custom error handler for failed navigations.
     */
    errorHandler?: ErrorHandler;
    /**
     * Configures a preloading strategy.
     * One of `PreloadAllModules` or `NoPreloading` (the default).
     */
    preloadingStrategy?: any;
    /**
     * Define what the router should do if it receives a navigation request to the current URL.
     * Default is `ignore`, which causes the router ignores the navigation.
     * This can disable features such as a "refresh" button.
     * Use this option to configure the behavior when navigating to the
     * current URL. Default is 'ignore'.
     */
    onSameUrlNavigation?: 'reload' | 'ignore';
    /**
     * Configures if the scroll position needs to be restored when navigating back.
     *
     * * 'disabled'- (Default) Does nothing. Scroll position is maintained on navigation.
     * * 'top'- Sets the scroll position to x = 0, y = 0 on all navigation.
     * * 'enabled'- Restores the previous scroll position on backward navigation, else sets the
     * position to the anchor if one is provided, or sets the scroll position to [0, 0] (forward
     * navigation). This option will be the default in the future.
     *
     * You can implement custom scroll restoration behavior by adapting the enabled behavior as
     * in the following example.
     *
     * ```typescript
     * class AppModule {
     *   constructor(router: Router, viewportScroller: ViewportScroller) {
     *     router.events.pipe(
     *       filter((e: Event): e is Scroll => e instanceof Scroll)
     *     ).subscribe(e => {
     *       if (e.position) {
     *         // backward navigation
     *         viewportScroller.scrollToPosition(e.position);
     *       } else if (e.anchor) {
     *         // anchor navigation
     *         viewportScroller.scrollToAnchor(e.anchor);
     *       } else {
     *         // forward navigation
     *         viewportScroller.scrollToPosition([0, 0]);
     *       }
     *     });
     *   }
     * }
     * ```
     */
    scrollPositionRestoration?: 'disabled' | 'enabled' | 'top';
    /**
     * When set to 'enabled', scrolls to the anchor element when the URL has a fragment.
     * Anchor scrolling is disabled by default.
     *
     * Anchor scrolling does not happen on 'popstate'. Instead, we restore the position
     * that we stored or scroll to the top.
     */
    anchorScrolling?: 'disabled' | 'enabled';
    /**
     * Configures the scroll offset the router will use when scrolling to an element.
     *
     * When given a tuple with x and y position value,
     * the router uses that offset each time it scrolls.
     * When given a function, the router invokes the function every time
     * it restores scroll position.
     */
    scrollOffset?: [number, number] | (() => [number, number]);
    /**
     * Defines how the router merges parameters, data, and resolved data from parent to child
     * routes. By default ('emptyOnly'), inherits parent parameters only for
     * path-less or component-less routes.
     * Set to 'always' to enable unconditional inheritance of parent parameters.
     */
    paramsInheritanceStrategy?: 'emptyOnly' | 'always';
    /**
     * A custom handler for malformed URI errors. The handler is invoked when `encodedURI` contains
     * invalid character sequences.
     * The default implementation is to redirect to the root URL, dropping
     * any path or parameter information. The function takes three parameters:
     *
     * - `'URIError'` - Error thrown when parsing a bad URL.
     * - `'UrlSerializer'` - UrlSerializer that’s configured with the router.
     * - `'url'` -  The malformed URL that caused the URIError
     * */
    malformedUriErrorHandler?: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree;
    /**
     * Defines when the router updates the browser URL. By default ('deferred'),
     * update after successful navigation.
     * Set to 'eager' if prefer to update the URL at the beginning of navigation.
     * Updating the URL early allows you to handle a failure of navigation by
     * showing an error message with the URL that failed.
     */
    urlUpdateStrategy?: 'deferred' | 'eager';
    /**
     * Enables a bug fix that corrects relative link resolution in components with empty paths.
     * Example:
     *
     * ```
     * const routes = [
     *   {
     *     path: '',
     *     component: ContainerComponent,
     *     children: [
     *       { path: 'a', component: AComponent },
     *       { path: 'b', component: BComponent },
     *     ]
     *   }
     * ];
     * ```
     *
     * From the `ContainerComponent`, this will not work:
     *
     * `<a [routerLink]="['./a']">Link to A</a>`
     *
     * However, this will work:
     *
     * `<a [routerLink]="['../a']">Link to A</a>`
     *
     * In other words, you're required to use `../` rather than `./`. This is currently the default
     * behavior. Setting this option to `corrected` enables the fix.
     */
    relativeLinkResolution?: 'legacy' | 'corrected';
}

/**
 * An event triggered at the end of the Guard phase of routing.
 *
 * @publicApi
 */
export declare class GuardsCheckEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    /** @docsNotRequired */
    shouldActivate: boolean;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot, 
    /** @docsNotRequired */
    shouldActivate: boolean);
    toString(): string;
}

/**
 * An event triggered at the start of the Guard phase of routing.
 *
 * @publicApi
 */
export declare class GuardsCheckStart extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * Allowed values in an `ExtraOptions` object that configure
 * when the router performs the initial navigation operation.
 *
 * * 'enabled' - The initial navigation starts before the root component is created.
 * The bootstrap is blocked until the initial navigation is complete. This value is required
 * for [server-side rendering](guide/universal) to work.
 * * 'disabled' - The initial navigation is not performed. The location listener is set up before
 * the root component gets created. Use if there is a reason to have
 * more control over when the router starts its initial navigation due to some complex
 * initialization logic.
 * * 'legacy_enabled'- (Default, for compatibility.) The initial navigation starts after the root
 * component has been created. The bootstrap is not blocked until the initial navigation is
 * complete. @deprecated
 * * 'legacy_disabled'- The initial navigation is not performed. The location listener is set up
 * after the root component gets created. @deprecated since v4
 * * `true` - same as 'legacy_enabled'. @deprecated since v4
 * * `false` - same as 'legacy_disabled'. @deprecated since v4
 *
 * The 'legacy_enabled' and 'legacy_disabled' should not be used for new applications.
 *
 * @see `forRoot()`
 *
 * @publicApi
 */
export declare type InitialNavigation = true | false | 'enabled' | 'disabled' | 'legacy_enabled' | 'legacy_disabled';

/**
 *
 * A string of the form `path/to/file#exportName` that acts as a URL for a set of routes to load,
 * or a function that returns such a set.
 *
 * The string form of `LoadChildren` is deprecated (see `DeprecatedLoadChildren`). The function
 * form (`LoadChildrenCallback`) should be used instead.
 *
 * @see `Route#loadChildren`.
 * @publicApi
 */
export declare type LoadChildren = LoadChildrenCallback | DeprecatedLoadChildren;

/**
 *
 * A function that is called to resolve a collection of lazy-loaded routes.
 *
 * Often this function will be implemented using an ES dynamic `import()` expression. For example:
 *
 * ```
 * [{
 *   path: 'lazy',
 *   loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
 * }];
 * ```
 *
 * This function _must_ match the form above: an arrow function of the form
 * `() => import('...').then(mod => mod.MODULE)`.
 *
 * @see `Route#loadChildren`.
 * @publicApi
 */
export declare type LoadChildrenCallback = () => Type<any> | NgModuleFactory<any> | Observable<Type<any>> | Promise<NgModuleFactory<any> | Type<any> | any>;

/**
 * Information about a navigation operation. Retrieve the most recent
 * navigation object with the `router.getCurrentNavigation()` method.
 *
 * @publicApi
 */
export declare type Navigation = {
    /**
     * The ID of the current navigation.
     */
    id: number;
    /**
     * The target URL passed into the `Router#navigateByUrl()` call before navigation. This is
     * the value before the router has parsed or applied redirects to it.
     */
    initialUrl: string | UrlTree;
    /**
     * The initial target URL after being parsed with `UrlSerializer.extract()`.
     */
    extractedUrl: UrlTree;
    /**
     * The extracted URL after redirects have been applied.
     * This URL may not be available immediately, therefore this property can be `undefined`.
     * It is guaranteed to be set after the `RoutesRecognized` event fires.
     */
    finalUrl?: UrlTree;
    /**
     * Identifies how this navigation was triggered.
     *
     * * 'imperative'--Triggered by `router.navigateByUrl` or `router.navigate`.
     * * 'popstate'--Triggered by a popstate event.
     * * 'hashchange'--Triggered by a hashchange event.
     */
    trigger: 'imperative' | 'popstate' | 'hashchange';
    /**
     * Options that controlled the strategy used for this navigation.
     * See `NavigationExtras`.
     */
    extras: NavigationExtras;
    /**
     * The previously successful `Navigation` object. Only one previous navigation
     * is available, therefore this previous `Navigation` object has a `null` value
     * for its own `previousNavigation`.
     */
    previousNavigation: Navigation | null;
};

/**
 * An event triggered when a navigation is canceled, directly or indirectly.
 *
 * This can happen when a [route guard](guide/router#milestone-5-route-guards)
 * returns `false` or initiates a redirect by returning a `UrlTree`.
 *
 * @publicApi
 */
export declare class NavigationCancel extends RouterEvent {
    /** @docsNotRequired */
    reason: string;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    reason: string);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * An event triggered when a navigation ends successfully.
 *
 * @publicApi
 */
export declare class NavigationEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * An event triggered when a navigation fails due to an unexpected error.
 *
 * @publicApi
 */
export declare class NavigationError extends RouterEvent {
    /** @docsNotRequired */
    error: any;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    error: any);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Options that modify the navigation strategy.
 *
 * @publicApi
 */
export declare interface NavigationExtras {
    /**
     * Specifies a root URI to use for relative navigation.
     *
     * For example, consider the following route configuration where the parent route
     * has two children.
     *
     * ```
     * [{
     *   path: 'parent',
     *   component: ParentComponent,
     *   children: [{
     *     path: 'list',
     *     component: ListComponent
     *   },{
     *     path: 'child',
     *     component: ChildComponent
     *   }]
     * }]
     * ```
     *
     * The following `go()` function navigates to the `list` route by
     * interpreting the destination URI as relative to the activated `child`  route
     *
     * ```
     *  @Component({...})
     *  class ChildComponent {
     *    constructor(private router: Router, private route: ActivatedRoute) {}
     *
     *    go() {
     *      this.router.navigate(['../list'], { relativeTo: this.route });
     *    }
     *  }
     * ```
     */
    relativeTo?: ActivatedRoute | null;
    /**
     * Sets query parameters to the URL.
     *
     * ```
     * // Navigate to /results?page=1
     * this.router.navigate(['/results'], { queryParams: { page: 1 } });
     * ```
     */
    queryParams?: Params | null;
    /**
     * Sets the hash fragment for the URL.
     *
     * ```
     * // Navigate to /results#top
     * this.router.navigate(['/results'], { fragment: 'top' });
     * ```
     */
    fragment?: string;
    /**
     * **DEPRECATED**: Use `queryParamsHandling: "preserve"` instead to preserve
     * query parameters for the next navigation.
     *
     * @deprecated since v4
     */
    preserveQueryParams?: boolean;
    /**
     * How to handle query parameters in the router link for the next navigation.
     * One of:
     * * `merge` : Merge new with current parameters.
     * * `preserve` : Preserve current parameters.
     *
     * ```
     * // from /results?page=1 to /view?page=1&page=2
     * this.router.navigate(['/view'], { queryParams: { page: 2 },  queryParamsHandling: "merge" });
     * ```
     */
    queryParamsHandling?: QueryParamsHandling | null;
    /**
     * When true, preserves the URL fragment for the next navigation
     *
     * ```
     * // Preserve fragment from /results#top to /view#top
     * this.router.navigate(['/view'], { preserveFragment: true });
     * ```
     */
    preserveFragment?: boolean;
    /**
     * When true, navigates without pushing a new state into history.
     *
     * ```
     * // Navigate silently to /view
     * this.router.navigate(['/view'], { skipLocationChange: true });
     * ```
     */
    skipLocationChange?: boolean;
    /**
     * When true, navigates while replacing the current state in history.
     *
     * ```
     * // Navigate to /view
     * this.router.navigate(['/view'], { replaceUrl: true });
     * ```
     */
    replaceUrl?: boolean;
    /**
     * Developer-defined state that can be passed to any navigation.
     * Access this value through the `Navigation.extras` object
     * returned from `router.getCurrentNavigation()` while a navigation is executing.
     *
     * After a navigation completes, the router writes an object containing this
     * value together with a `navigationId` to `history.state`.
     * The value is written when `location.go()` or `location.replaceState()`
     * is called before activating this route.
     *
     * Note that `history.state` does not pass an object equality test because
     * the router adds the `navigationId` on each navigation.
     */
    state?: {
        [k: string]: any;
    };
}

/**
 * An event triggered when a navigation starts.
 *
 * @publicApi
 */
export declare class NavigationStart extends RouterEvent {
    /**
     * Identifies the call or event that triggered the navigation.
     * An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`.
     *
     */
    navigationTrigger?: 'imperative' | 'popstate' | 'hashchange';
    /**
     * The navigation state that was previously supplied to the `pushState` call,
     * when the navigation is triggered by a `popstate` event. Otherwise null.
     *
     * The state object is defined by `NavigationExtras`, and contains any
     * developer-defined state value, as well as a unique ID that
     * the router assigns to every router transition/navigation.
     *
     * From the perspective of the router, the router never "goes back".
     * When the user clicks on the back button in the browser,
     * a new navigation ID is created.
     *
     * Use the ID in this previous-state object to differentiate between a newly created
     * state and one returned to by a `popstate` event, so that you can restore some
     * remembered state, such as scroll position.
     *
     */
    restoredState?: {
        [k: string]: any;
        navigationId: number;
    } | null;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    navigationTrigger?: 'imperative' | 'popstate' | 'hashchange', 
    /** @docsNotRequired */
    restoredState?: {
        [k: string]: any;
        navigationId: number;
    } | null);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Provides a preloading strategy that does not preload any modules.
 *
 * This strategy is enabled by default.
 *
 * @publicApi
 */
export declare class NoPreloading implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * Store contextual information about a `RouterOutlet`
 *
 * @publicApi
 */
export declare class OutletContext {
    outlet: RouterOutlet | null;
    route: ActivatedRoute | null;
    resolver: ComponentFactoryResolver | null;
    children: ChildrenOutletContexts;
    attachRef: ComponentRef<any> | null;
}

/**
 * A map that provides access to the required and optional parameters
 * specific to a route.
 * The map supports retrieving a single value with `get()`
 * or multiple values with `getAll()`.
 *
 * @see [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 *
 * @publicApi
 */
export declare interface ParamMap {
    /**
     * Reports whether the map contains a given parameter.
     * @param name The parameter name.
     * @returns True if the map contains the given parameter, false otherwise.
     */
    has(name: string): boolean;
    /**
     * Retrieves a single value for a parameter.
     * @param name The parameter name.
     * @return The parameter's single value,
     * or the first value if the parameter has multiple values,
     * or `null` when there is no such parameter.
     */
    get(name: string): string | null;
    /**
     * Retrieves multiple values for a parameter.
     * @param name The parameter name.
     * @return An array containing one or more values,
     * or an empty array if there is no such parameter.
     *
     */
    getAll(name: string): string[];
    /** Names of the parameters in the map. */
    readonly keys: string[];
}

/**
 * A collection of matrix and query URL parameters.
 * @see `convertToParamMap()`
 * @see `ParamMap`
 *
 * @publicApi
 */
export declare type Params = {
    [key: string]: any;
};

/**
 * @description
 *
 * Provides a preloading strategy that preloads all modules as quickly as possible.
 *
 * ```
 * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * @publicApi
 */
export declare class PreloadAllModules implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * @description
 *
 * Provides a preloading strategy.
 *
 * @publicApi
 */
export declare abstract class PreloadingStrategy {
    abstract preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * The primary routing outlet.
 *
 * @publicApi
 */
export declare const PRIMARY_OUTLET = "primary";

/**
 * Registers a [DI provider](guide/glossary#provider) for a set of routes.
 * @param routes The route configuration to provide.
 *
 * @usageNotes
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @publicApi
 */
export declare function provideRoutes(routes: Routes): any;

/**
 *
 * How to handle query parameters in a router link.
 * One of:
 * - `merge` : Merge new with current parameters.
 * - `preserve` : Preserve current parameters.
 *
 * @see `NavigationExtras#queryParamsHandling`
 * @see `RouterLink`
 * @publicApi
 */
export declare type QueryParamsHandling = 'merge' | 'preserve' | '';

/**
 * @description
 *
 * Interface that classes can implement to be a data provider.
 * A data provider class can be used with the router to resolve data during navigation.
 * The interface defines a `resolve()` method that will be invoked when the navigation starts.
 * The router will then wait for the data to be resolved before the route is finally activated.
 *
 * ```
 * @Injectable({ providedIn: 'root' })
 * export class HeroResolver implements Resolve<Hero> {
 *   constructor(private service: HeroService) {}
 *
 *   resolve(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<any>|Promise<any>|any {
 *     return this.service.getHero(route.paramMap.get('id'));
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'detail/:id',
 *         component: HeroDetailComponent,
 *         resolve: {
 *           hero: HeroResolver
 *         }
 *       }
 *     ])
 *   ],
 *   exports: [RouterModule]
 * })
 * export class AppRoutingModule {}
 * ```
 *
 * You can alternatively provide a function with the `resolve` signature:
 *
 * ```
 * export const myHero: Hero = {
 *   // ...
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'detail/:id',
 *         component: HeroComponent,
 *         resolve: {
 *           hero: 'heroResolver'
 *         }
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'heroResolver',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => myHero
 *     }
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface Resolve<T> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T;
}

/**
 *
 * Represents the resolved data associated with a particular route.
 *
 * @see `Route#resolve`.
 *
 * @publicApi
 */
export declare type ResolveData = {
    [name: string]: any;
};

/**
 * An event triggered at the end of the Resolve phase of routing.
 * @see `ResolveStart`.
 *
 * @publicApi
 */
export declare class ResolveEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * An event triggered at the the start of the Resolve phase of routing.
 *
 * Runs in the "resolve" phase whether or not there is anything to resolve.
 * In future, may change to only run when there are things to be resolved.
 *
 * @publicApi
 */
export declare class ResolveStart extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * A configuration object that defines a single route.
 * A set of routes are collected in a `Routes` array to define a `Router` configuration.
 * The router attempts to match segments of a given URL against each route,
 * using the configuration options defined in this object.
 *
 * Supports static, parameterized, redirect, and wildcard routes, as well as
 * custom route data and resolve methods.
 *
 * For detailed usage information, see the [Routing Guide](guide/router).
 *
 * @usageNotes
 *
 * ### Simple Configuration
 *
 * The following route specifies that when navigating to, for example,
 * `/team/11/user/bob`, the router creates the 'Team' component
 * with the 'User' child component in it.
 *
 * ```
 * [{
 *   path: 'team/:id',
  *  component: Team,
 *   children: [{
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * ### Multiple Outlets
 *
 * The following route creates sibling components with multiple outlets.
 * When navigating to `/team/11(aux:chat/jim)`, the router creates the 'Team' component next to
 * the 'Chat' component. The 'Chat' component is placed into the 'aux' outlet.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team
 * }, {
 *   path: 'chat/:user',
 *   component: Chat
 *   outlet: 'aux'
 * }]
 * ```
 *
 * ### Wild Cards
 *
 * The following route uses wild-card notation to specify a component
 * that is always instantiated regardless of where you navigate to.
 *
 * ```
 * [{
 *   path: '**',
 *   component: WildcardComponent
 * }]
 * ```
 *
 * ### Redirects
 *
 * The following route uses the `redirectTo` property to ignore a segment of
 * a given URL when looking for a child path.
 *
 * When navigating to '/team/11/legacy/user/jim', the router changes the URL segment
 * '/team/11/legacy/user/jim' to '/team/11/user/jim', and then instantiates
 * the Team component with the User child component in it.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: 'legacy/user/:name',
 *     redirectTo: 'user/:name'
 *   }, {
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * The redirect path can be relative, as shown in this example, or absolute.
 * If we change the `redirectTo` value in the example to the absolute URL segment '/user/:name',
 * the result URL is also absolute, '/user/jim'.

 * ### Empty Path
 *
 * Empty-path route configurations can be used to instantiate components that do not 'consume'
 * any URL segments.
 *
 * In the following configuration, when navigating to
 * `/team/11`, the router instantiates the 'AllUsers' component.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: '',
 *     component: AllUsers
 *   }, {
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * Empty-path routes can have children. In the following example, when navigating
 * to `/team/11/user/jim`, the router instantiates the wrapper component with
 * the user component in it.
 *
 * Note that an empty path route inherits its parent's parameters and data.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: '',
 *     component: WrapperCmp,
 *     children: [{
 *       path: 'user/:name',
 *       component: User
 *     }]
 *   }]
 * }]
 * ```
 *
 * ### Matching Strategy
 *
 * The default path-match strategy is 'prefix', which means that the router
 * checks URL elements from the left to see if the URL matches a specified path.
 * For example, '/team/11/user' matches 'team/:id'.
 *
 * ```
 * [{
 *   path: '',
 *   pathMatch: 'prefix', //default
 *   redirectTo: 'main'
 * }, {
 *   path: 'main',
 *   component: Main
 * }]
 * ```
 *
 * You can specify the path-match strategy 'full' to make sure that the path
 * covers the whole unconsumed URL. It is important to do this when redirecting
 * empty-path routes. Otherwise, because an empty path is a prefix of any URL,
 * the router would apply the redirect even when navigating to the redirect destination,
 * creating an endless loop.
 *
 * In the following example, supplying the 'full' `pathMatch` strategy ensures
 * that the router applies the redirect if and only if navigating to '/'.
 *
 * ```
 * [{
 *   path: '',
 *   pathMatch: 'full',
 *   redirectTo: 'main'
 * }, {
 *   path: 'main',
 *   component: Main
 * }]
 * ```
 *
 * ### Componentless Routes
 *
 * You can share parameters between sibling components.
 * For example, suppose that two sibling components should go next to each other,
 * and both of them require an ID parameter. You can accomplish this using a route
 * that does not specify a component at the top level.
 *
 * In the following example, 'MainChild' and 'AuxChild' are siblings.
 * When navigating to 'parent/10/(a//aux:b)', the route instantiates
 * the main child and aux child components next to each other.
 * For this to work, the application component must have the primary and aux outlets defined.
 *
 * ```
 * [{
 *    path: 'parent/:id',
 *    children: [
 *      { path: 'a', component: MainChild },
 *      { path: 'b', component: AuxChild, outlet: 'aux' }
 *    ]
 * }]
 * ```
 *
 * The router merges the parameters, data, and resolve of the componentless
 * parent into the parameters, data, and resolve of the children.
 *
 * This is especially useful when child components are defined
 * with an empty path string, as in the following example.
 * With this configuration, navigating to '/parent/10' creates
 * the main child and aux components.
 *
 * ```
 * [{
 *    path: 'parent/:id',
 *    children: [
 *      { path: '', component: MainChild },
 *      { path: '', component: AuxChild, outlet: 'aux' }
 *    ]
 * }]
 * ```
 *
 * ### Lazy Loading
 *
 * Lazy loading speeds up application load time by splitting the application
 * into multiple bundles and loading them on demand.
 * To use lazy loading, provide the `loadChildren` property  instead of the `children` property.
 *
 * Given the following example route, the router will lazy load
 * the associated module on demand using the browser native import system.
 *
 * ```
 * [{
 *   path: 'lazy',
 *   loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
 * }];
 * ```
 *
 * @publicApi
 */
export declare interface Route {
    /**
     * The path to match against. Cannot be used together with a custom `matcher` function.
     * A URL string that uses router matching notation.
     * Can be a wild card (`**`) that matches any URL (see Usage Notes below).
     * Default is "/" (the root path).
     *
     */
    path?: string;
    /**
     * The path-matching strategy, one of 'prefix' or 'full'.
     * Default is 'prefix'.
     *
     * By default, the router checks URL elements from the left to see if the URL
     * matches a given  path, and stops when there is a match. For example,
     * '/team/11/user' matches 'team/:id'.
     *
     * The path-match strategy 'full' matches against the entire URL.
     * It is important to do this when redirecting empty-path routes.
     * Otherwise, because an empty path is a prefix of any URL,
     * the router would apply the redirect even when navigating
     * to the redirect destination, creating an endless loop.
     *
     */
    pathMatch?: string;
    /**
     * A custom URL-matching function. Cannot be used together with `path`.
     */
    matcher?: UrlMatcher;
    /**
     * The component to instantiate when the path matches.
     * Can be empty if child routes specify components.
     */
    component?: Type<any>;
    /**
     * A URL to redirect to when the path matches.
     * Absolute if the URL begins with a slash (/), otherwise relative to the path URL.
     * When not present, router does not redirect.
     */
    redirectTo?: string;
    /**
     * Name of a `RouterOutlet` object where the component can be placed
     * when the path matches.
     */
    outlet?: string;
    /**
     * An array of dependency-injection tokens used to look up `CanActivate()`
     * handlers, in order to determine if the current user is allowed to
     * activate the component. By default, any user can activate.
     */
    canActivate?: any[];
    /**
     * An array of DI tokens used to look up `CanActivateChild()` handlers,
     * in order to determine if the current user is allowed to activate
     * a child of the component. By default, any user can activate a child.
     */
    canActivateChild?: any[];
    /**
     * An array of DI tokens used to look up `CanDeactivate()`
     * handlers, in order to determine if the current user is allowed to
     * deactivate the component. By default, any user can deactivate.
     *
     */
    canDeactivate?: any[];
    /**
     * An array of DI tokens used to look up `CanLoad()`
     * handlers, in order to determine if the current user is allowed to
     * load the component. By default, any user can load.
     */
    canLoad?: any[];
    /**
     * Additional developer-defined data provided to the component via
     * `ActivatedRoute`. By default, no additional data is passed.
     */
    data?: Data;
    /**
     * A map of DI tokens used to look up data resolvers. See `Resolve`.
     */
    resolve?: ResolveData;
    /**
     * An array of child `Route` objects that specifies a nested route
     * configuration.
     */
    children?: Routes;
    /**
     * A `LoadChildren` object specifying lazy-loaded child routes.
     */
    loadChildren?: LoadChildren;
    /**
     * Defines when guards and resolvers will be run. One of
     * - `paramsOrQueryParamsChange` : Run when query parameters change.
     * - `always` : Run on every execution.
     * By default, guards and resolvers run only when the matrix
     * parameters of the route change.
     */
    runGuardsAndResolvers?: RunGuardsAndResolvers;
}

/**
 * An event triggered when a route has been lazy loaded.
 *
 * @publicApi
 */
export declare class RouteConfigLoadEnd {
    /** @docsNotRequired */
    route: Route;
    constructor(
    /** @docsNotRequired */
    route: Route);
    toString(): string;
}

/**
 * An event triggered before lazy loading a route configuration.
 *
 * @publicApi
 */
export declare class RouteConfigLoadStart {
    /** @docsNotRequired */
    route: Route;
    constructor(
    /** @docsNotRequired */
    route: Route);
    toString(): string;
}

/**
 * @description
 *
 * A service that provides navigation and URL manipulation capabilities.
 *
 * @see `Route`.
 * @see [Routing and Navigation Guide](guide/router).
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class Router {
    private rootComponentType;
    private urlSerializer;
    private rootContexts;
    private location;
    config: Routes;
    private currentUrlTree;
    private rawUrlTree;
    private browserUrlTree;
    private readonly transitions;
    private navigations;
    private lastSuccessfulNavigation;
    private currentNavigation;
    private locationSubscription;
    private navigationId;
    private configLoader;
    private ngModule;
    private console;
    private isNgZoneEnabled;
    /**
     * An event stream for routing events in this NgModule.
     */
    readonly events: Observable<Event>;
    /**
     * The current state of routing in this NgModule.
     */
    readonly routerState: RouterState;
    /**
     * A handler for navigation errors in this NgModule.
     */
    errorHandler: ErrorHandler;
    /**
     * A handler for errors thrown by `Router.parseUrl(url)`
     * when `url` contains an invalid character.
     * The most common case is a `%` sign
     * that's not encoded and is not part of a percent encoded sequence.
     */
    malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree;
    /**
     * True if at least one navigation event has occurred,
     * false otherwise.
     */
    navigated: boolean;
    private lastSuccessfulId;
    /**
     * A strategy for extracting and merging URLs.
     * Used for AngularJS to Angular migrations.
     */
    urlHandlingStrategy: UrlHandlingStrategy;
    /**
     * A strategy for re-using routes.
     */
    routeReuseStrategy: RouteReuseStrategy;
    /**
     * How to handle a navigation request to the current URL. One of:
     * - `'ignore'` :  The router ignores the request.
     * - `'reload'` : The router reloads the URL. Use to implement a "refresh" feature.
     */
    onSameUrlNavigation: 'reload' | 'ignore';
    /**
     * How to merge parameters, data, and resolved data from parent to child
     * routes. One of:
     *
     * - `'emptyOnly'` : Inherit parent parameters, data, and resolved data
     * for path-less or component-less routes.
     * - `'always'` : Inherit parent parameters, data, and resolved data
     * for all child routes.
     */
    paramsInheritanceStrategy: 'emptyOnly' | 'always';
    /**
     * Determines when the router updates the browser URL.
     * By default (`"deferred"`), updates the browser URL after navigation has finished.
     * Set to `'eager'` to update the browser URL at the beginning of navigation.
     * You can choose to update early so that, if navigation fails,
     * you can show an error message with the URL that failed.
     */
    urlUpdateStrategy: 'deferred' | 'eager';
    /**
     * Enables a bug fix that corrects relative link resolution in components with empty paths.
     * @see `RouterModule`
     */
    relativeLinkResolution: 'legacy' | 'corrected';
    /**
     * Creates the router service.
     */
    constructor(rootComponentType: Type<any> | null, urlSerializer: UrlSerializer, rootContexts: ChildrenOutletContexts, location: Location, injector: Injector, loader: NgModuleFactoryLoader, compiler: Compiler, config: Routes);
    private setupNavigations;
    private getTransition;
    private setTransition;
    /**
     * Sets up the location change listener and performs the initial navigation.
     */
    initialNavigation(): void;
    /**
     * Sets up the location change listener.
     */
    setUpLocationChangeListener(): void;
    /** The current URL. */
    get url(): string;
    /** The current Navigation object if one exists */
    getCurrentNavigation(): Navigation | null;
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * @param config The route array for the new configuration.
     *
     * @usageNotes
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
    resetConfig(config: Routes): void;
    /** @docsNotRequired */
    ngOnDestroy(): void;
    /** Disposes of the router. */
    dispose(): void;
    /**
     * Applies an array of commands to the current URL tree and creates a new URL tree.
     *
     * When given an activated route, applies the given commands starting from the route.
     * Otherwise, applies the given command starting from the root.
     *
     * @param commands An array of commands to apply.
     * @param navigationExtras Options that control the navigation strategy. This function
     * only utilizes properties in `NavigationExtras` that would change the provided URL.
     * @returns The new URL tree.
     *
     * @usageNotes
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it,
     * // you can do the following:
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     */
    createUrlTree(commands: any[], navigationExtras?: NavigationExtras): UrlTree;
    /**
     * Navigate based on the provided URL, which must be absolute.
     *
     * @param url An absolute URL. The function does not apply any delta to the current URL.
     * @param extras An object containing properties that modify the navigation strategy.
     * The function ignores any properties in the `NavigationExtras` that would change the
     * provided URL.
     *
     * @returns A Promise that resolves to 'true' when navigation succeeds,
     * to 'false' when navigation fails, or is rejected on error.
     *
     * @usageNotes
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     */
    navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean>;
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * @usageNotes
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * The first parameter of `navigate()` is a delta to be applied to the current URL
     * or the one provided in the `relativeTo` property of the second parameter (the
     * `NavigationExtras`).
     *
     * In order to affect this browser's `history.state` entry, the `state`
     * parameter can be passed. This must be an object because the router
     * will add the `navigationId` property to this object before creating
     * the new history item.
     */
    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>;
    /** Serializes a `UrlTree` into a string */
    serializeUrl(url: UrlTree): string;
    /** Parses a string into a `UrlTree` */
    parseUrl(url: string): UrlTree;
    /** Returns whether the url is activated */
    isActive(url: string | UrlTree, exact: boolean): boolean;
    private removeEmptyProps;
    private processNavigations;
    private scheduleNavigation;
    private setBrowserUrl;
    private resetStateAndUrl;
    private resetUrlToCurrentUrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Router, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Router, never, never, {}, {}, never>;
}

/**
 * A [DI token](guide/glossary/#di-token) for the router service.
 *
 * @publicApi
 */
export declare const ROUTER_CONFIGURATION: InjectionToken<ExtraOptions>;

/**
 * A [DI token](guide/glossary/#di-token) for the router initializer that
 * is called after the app is bootstrapped.
 *
 * @publicApi
 */
export declare const ROUTER_INITIALIZER: InjectionToken<(compRef: ComponentRef<any>) => void>;

/**
 * @description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * @publicApi
 */
export declare abstract class RouteReuseStrategy {
    /** Determines if this route (and its subtree) should be detached to be reused later */
    abstract shouldDetach(route: ActivatedRouteSnapshot): boolean;
    /**
     * Stores the detached route.
     *
     * Storing a `null` value should erase the previously stored value.
     */
    abstract store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void;
    /** Determines if this route (and its subtree) should be reattached */
    abstract shouldAttach(route: ActivatedRouteSnapshot): boolean;
    /** Retrieves the previously stored route */
    abstract retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null;
    /** Determines if a route should be reused */
    abstract shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}

/**
 * Base for events the router goes through, as opposed to events tied to a specific
 * route. Fired one time for any given navigation.
 *
 * @usageNotes
 *
 * ```ts
 * class MyService {
 *   constructor(public router: Router, logger: Logger) {
 *     router.events.pipe(
 *        filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
 *     ).subscribe((e: RouterEvent) => {
 *       logger.log(e.id, e.url);
 *     });
 *   }
 * }
 * ```
 *
 * @see `Event`
 * @publicApi
 */
export declare class RouterEvent {
    /** A unique ID that the router assigns to every router navigation. */
    id: number;
    /** The URL that is the destination for this navigation. */
    url: string;
    constructor(
    /** A unique ID that the router assigns to every router navigation. */
    id: number, 
    /** The URL that is the destination for this navigation. */
    url: string);
}

/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`.
 * When linking to this `user/:name` route, you use the `RouterLink` directive.
 *
 * If the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
 * directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * You can tell the directive how to handle queryParams. Available options are:
 *  - `'merge'`: merge the queryParams into the current queryParams
 *  - `'preserve'`: preserve the current queryParams
 *  - default/`''`: use the queryParams only
 *
 * Same options for {@link NavigationExtras#queryParamsHandling
 * NavigationExtras#queryParamsHandling}.
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * You can provide a `state` value to be persisted to the browser's History.state
 * property (See https://developer.mozilla.org/en-US/docs/Web/API/History#Properties). It's
 * used as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [state]="{tracingId: 123}">
 *   link to user component
 * </a>
 * ```
 *
 * And later the value can be read from the router through `router.getCurrentNavigation`.
 * For example, to capture the `tracingId` above during the `NavigationStart` event:
 *
 * ```
 * // Get NavigationStart events
 * router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
 *   const navigation = router.getCurrentNavigation();
 *   tracingService.trace({id: navigation.extras.state.tracingId});
 * });
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * See {@link Router#createUrlTree createUrlTree} for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLink {
    private router;
    private route;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#queryParams NavigationExtras#queryParams}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    queryParams: {
        [k: string]: any;
    };
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#fragment NavigationExtras#fragment}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    fragment: string;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#queryParamsHandling NavigationExtras#queryParamsHandling}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    queryParamsHandling: QueryParamsHandling;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#preserveFragment NavigationExtras#preserveFragment}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    preserveFragment: boolean;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#skipLocationChange NavigationExtras#skipLocationChange}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    skipLocationChange: boolean;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#replaceUrl NavigationExtras#replaceUrl}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    replaceUrl: boolean;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#state NavigationExtras#state}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    state?: {
        [k: string]: any;
    };
    private commands;
    private preserve;
    constructor(router: Router, route: ActivatedRoute, tabIndex: string, renderer: Renderer2, el: ElementRef);
    /**
     * @param commands An array of commands to pass to {@link Router#createUrlTree
     *     Router#createUrlTree}.
     *   - **array**: commands to pass to {@link Router#createUrlTree Router#createUrlTree}.
     *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
     *   - **null|undefined**: shorthand for an empty array of commands, i.e. `[]`
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    set routerLink(commands: any[] | string | null | undefined);
    /**
     * @deprecated As of Angular v4.0 use `queryParamsHandling` instead.
     */
    set preserveQueryParams(value: boolean);
    onClick(): boolean;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLink, [null, null, { attribute: "tabindex"; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLink, ":not(a):not(area)[routerLink]", never, { "routerLink": "routerLink"; "preserveQueryParams": "preserveQueryParams"; "queryParams": "queryParams"; "fragment": "fragment"; "queryParamsHandling": "queryParamsHandling"; "preserveFragment": "preserveFragment"; "skipLocationChange": "skipLocationChange"; "replaceUrl": "replaceUrl"; "state": "state"; }, {}, never>;
}

/**
 *
 * @description
 *
 * Lets you add a CSS class to an element when the link's route becomes active.
 *
 * This directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLinkActive implements OnChanges, OnDestroy, AfterContentInit {
    private router;
    private element;
    private renderer;
    private link?;
    private linkWithHref?;
    links: QueryList<RouterLink>;
    linksWithHrefs: QueryList<RouterLinkWithHref>;
    private classes;
    private subscription;
    readonly isActive: boolean;
    routerLinkActiveOptions: {
        exact: boolean;
    };
    constructor(router: Router, element: ElementRef, renderer: Renderer2, link?: RouterLink | undefined, linkWithHref?: RouterLinkWithHref | undefined);
    ngAfterContentInit(): void;
    set routerLinkActive(data: string[] | string);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private update;
    private isLinkActive;
    private hasActiveLinks;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLinkActive, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLinkActive, "[routerLinkActive]", ["routerLinkActive"], { "routerLinkActiveOptions": "routerLinkActiveOptions"; "routerLinkActive": "routerLinkActive"; }, {}, ["links", "linksWithHrefs"]>;
}

/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLinkWithHref implements OnChanges, OnDestroy {
    private router;
    private route;
    private locationStrategy;
    target: string;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#queryParams NavigationExtras#queryParams}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    queryParams: {
        [k: string]: any;
    };
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#fragment NavigationExtras#fragment}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    fragment: string;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#queryParamsHandling NavigationExtras#queryParamsHandling}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    queryParamsHandling: QueryParamsHandling;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#preserveFragment NavigationExtras#preserveFragment}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    preserveFragment: boolean;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#skipLocationChange NavigationExtras#skipLocationChange}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    skipLocationChange: boolean;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#replaceUrl NavigationExtras#replaceUrl}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    replaceUrl: boolean;
    /**
     * Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`.
     * @see {@link NavigationExtras#state NavigationExtras#state}
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    state?: {
        [k: string]: any;
    };
    private commands;
    private subscription;
    private preserve;
    href: string;
    constructor(router: Router, route: ActivatedRoute, locationStrategy: LocationStrategy);
    /**
     * @param commands An array of commands to pass to {@link Router#createUrlTree
     *     Router#createUrlTree}.
     *   - **array**: commands to pass to {@link Router#createUrlTree Router#createUrlTree}.
     *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
     *   - **null|undefined**: shorthand for an empty array of commands, i.e. `[]`
     * @see {@link Router#createUrlTree Router#createUrlTree}
     */
    set routerLink(commands: any[] | string | null | undefined);
    /**
     * @deprecated As of Angular v4.0 use `queryParamsHandling` instead.
     */
    set preserveQueryParams(value: boolean);
    ngOnChanges(changes: {}): any;
    ngOnDestroy(): any;
    onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean;
    private updateTargetUrlAndHref;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLinkWithHref, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLinkWithHref, "a[routerLink],area[routerLink]", never, { "routerLink": "routerLink"; "preserveQueryParams": "preserveQueryParams"; "target": "target"; "queryParams": "queryParams"; "fragment": "fragment"; "queryParamsHandling": "queryParamsHandling"; "preserveFragment": "preserveFragment"; "skipLocationChange": "skipLocationChange"; "replaceUrl": "replaceUrl"; "state": "state"; }, {}, never>;
}

/**
 * @usageNotes
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @description
 *
 * Adds router directives and providers.
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular router service solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * @see [Routing and Navigation](guide/router.html) for an
 * overview of how the router service should be used.
 *
 * @publicApi
 */
export declare class RouterModule {
    constructor(guard: any, router: Router);
    /**
     * Creates and configures a module with all the router providers and directives.
     * Optionally sets up an application listener to perform an initial navigation.
     *
     * @param routes An array of `Route` objects that define the navigation paths for the application.
     * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
     * @return The new router module.
     */
    static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterModule>;
    /**
     * Creates a module with all the router directives and a provider registering routes.
     */
    static forChild(routes: Routes): ModuleWithProviders<RouterModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<RouterModule, [typeof RouterOutlet, typeof RouterLink, typeof RouterLinkWithHref, typeof RouterLinkActive, typeof ɵEmptyOutletComponent], never, [typeof RouterOutlet, typeof RouterLink, typeof RouterLinkWithHref, typeof RouterLinkActive, typeof ɵEmptyOutletComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<RouterModule>;
}

/**
 * @description
 *
 * Acts as a placeholder that Angular dynamically fills based on the current router state.
 *
 * Each outlet can have a unique name, determined by the optional `name` attribute.
 * The name cannot be set or changed dynamically. If not set, default value is "primary".
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet emits an activate event when a new component is instantiated,
 * and a deactivate event when a component is destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterOutlet implements OnDestroy, OnInit {
    private parentContexts;
    private location;
    private resolver;
    private changeDetector;
    private activated;
    private _activatedRoute;
    private name;
    activateEvents: EventEmitter<any>;
    deactivateEvents: EventEmitter<any>;
    constructor(parentContexts: ChildrenOutletContexts, location: ViewContainerRef, resolver: ComponentFactoryResolver, name: string, changeDetector: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    get isActivated(): boolean;
    get component(): Object;
    get activatedRoute(): ActivatedRoute;
    get activatedRouteData(): Data;
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach(): ComponentRef<any>;
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute): void;
    deactivate(): void;
    activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver | null): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterOutlet, [null, null, null, { attribute: "name"; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterOutlet, "router-outlet", ["outlet"], {}, { "activateEvents": "activate"; "deactivateEvents": "deactivate"; }, never>;
}

/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 * @publicApi
 */
export declare class RouterPreloader implements OnDestroy {
    private router;
    private injector;
    private preloadingStrategy;
    private loader;
    private subscription;
    constructor(router: Router, moduleLoader: NgModuleFactoryLoader, compiler: Compiler, injector: Injector, preloadingStrategy: PreloadingStrategy);
    setUpPreloading(): void;
    preload(): Observable<any>;
    ngOnDestroy(): void;
    private processRoutes;
    private preloadConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterPreloader, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RouterPreloader>;
}

/**
 * Represents the state of the router as a tree of activated routes.
 *
 * @usageNotes
 *
 * Every node in the route tree is an `ActivatedRoute` instance
 * that knows about the "consumed" URL segments, the extracted parameters,
 * and the resolved data.
 * Use the `ActivatedRoute` properties to traverse the tree from any node.
 *
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @see `ActivatedRoute`
 *
 * @publicApi
 */
export declare class RouterState extends ɵangular_packages_router_router_m<ActivatedRoute> {
    /** The current snapshot of the router state */
    snapshot: RouterStateSnapshot;
    toString(): string;
}

/**
 * @description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class RouterStateSnapshot extends ɵangular_packages_router_router_m<ActivatedRouteSnapshot> {
    /** The url from which this snapshot was created */
    url: string;
    toString(): string;
}

/**
 * The [DI token](guide/glossary/#di-token) for a router configuration.
 * @see `ROUTES`
 * @publicApi
 */
export declare const ROUTES: InjectionToken<Route[][]>;

/**
 * Represents a route configuration for the Router service.
 * An array of `Route` objects, used in `Router.config` and for nested route configurations
 * in `Route.children`.
 *
 * @see `Route`
 * @see `Router`
 * @publicApi
 */
export declare type Routes = Route[];

/**
 *An event triggered when routes are recognized.
 *
 * @publicApi
 */
export declare class RoutesRecognized extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    /** @docsNotRequired */
    toString(): string;
}

/**
 *
 * A policy for when to run guards and resolvers on a route.
 *
 * @see `Route#runGuardsAndResolvers`
 * @publicApi
 */
export declare type RunGuardsAndResolvers = 'pathParamsChange' | 'pathParamsOrQueryParamsChange' | 'paramsChange' | 'paramsOrQueryParamsChange' | 'always' | ((from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean);

/**
 * An event triggered by scrolling.
 *
 * @publicApi
 */
export declare class Scroll {
    /** @docsNotRequired */
    readonly routerEvent: NavigationEnd;
    /** @docsNotRequired */
    readonly position: [number, number] | null;
    /** @docsNotRequired */
    readonly anchor: string | null;
    constructor(
    /** @docsNotRequired */
    routerEvent: NavigationEnd, 
    /** @docsNotRequired */
    position: [number, number] | null, 
    /** @docsNotRequired */
    anchor: string | null);
    toString(): string;
}

/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @publicApi
 */
export declare abstract class UrlHandlingStrategy {
    /**
     * Tells the router if this URL should be processed.
     *
     * When it returns true, the router will execute the regular navigation.
     * When it returns false, the router will set the router state to an empty state.
     * As a result, all the active components will be destroyed.
     *
     */
    abstract shouldProcessUrl(url: UrlTree): boolean;
    /**
     * Extracts the part of the URL that should be handled by the router.
     * The rest of the URL will remain untouched.
     */
    abstract extract(url: UrlTree): UrlTree;
    /**
     * Merges the URL fragment with the rest of the URL.
     */
    abstract merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree;
}

/**
 * A function for matching a route against URLs. Implement a custom URL matcher
 * for `Route.matcher` when a combination of `path` and `pathMatch`
 * is not expressive enough. Cannot be used together with `path` and `pathMatch`.
 *
 * @param segments An array of URL segments.
 * @param group A segment group.
 * @param route The route to match against.
 * @returns The match-result.
 *
 * @usageNotes
 *
 * The following matcher matches HTML files.
 *
 * ```
 * export function htmlFiles(url: UrlSegment[]) {
 *   return url.length === 1 && url[0].path.endsWith('.html') ? ({consumed: url}) : null;
 * }
 *
 * export const routes = [{ matcher: htmlFiles, component: AnyComponent }];
 * ```
 *
 * @publicApi
 */
export declare type UrlMatcher = (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => UrlMatchResult;

/**
 * Represents the result of matching URLs with a custom matching function.
 *
 * * `consumed` is an array of the consumed URL segments.
 * * `posParams` is a map of positional parameters.
 *
 * @see `UrlMatcher()`
 * @publicApi
 */
export declare type UrlMatchResult = {
    consumed: UrlSegment[];
    posParams?: {
        [name: string]: UrlSegment;
    };
};

/**
 * @description
 *
 * Represents a single URL segment.
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class UrlSegment {
    /** The path part of a URL segment */
    path: string;
    /** The matrix parameters associated with a segment */
    parameters: {
        [name: string]: string;
    };
    constructor(
    /** The path part of a URL segment */
    path: string, 
    /** The matrix parameters associated with a segment */
    parameters: {
        [name: string]: string;
    });
    get parameterMap(): ParamMap;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 * @publicApi
 */
export declare class UrlSegmentGroup {
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments: UrlSegment[];
    /** The list of children of this group */
    children: {
        [key: string]: UrlSegmentGroup;
    };
    /** The parent node in the url tree */
    parent: UrlSegmentGroup | null;
    constructor(
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments: UrlSegment[], 
    /** The list of children of this group */
    children: {
        [key: string]: UrlSegmentGroup;
    });
    /** Whether the segment has child segments */
    hasChildren(): boolean;
    /** Number of child segments */
    get numberOfChildren(): number;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 * @publicApi
 */
export declare abstract class UrlSerializer {
    /** Parse a url into a `UrlTree` */
    abstract parse(url: string): UrlTree;
    /** Converts a `UrlTree` into a url */
    abstract serialize(tree: UrlTree): string;
}

/**
 * @description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class UrlTree {
    /** The root segment group of the URL tree */
    root: UrlSegmentGroup;
    /** The query params of the URL */
    queryParams: Params;
    /** The fragment of the URL */
    fragment: string | null;
    get queryParamMap(): ParamMap;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * @docsNotRequired
 */
export declare const ɵangular_packages_router_router_a: InjectionToken<void>;

export declare function ɵangular_packages_router_router_b(): NgProbeToken;

export declare function ɵangular_packages_router_router_c(router: Router, viewportScroller: ViewportScroller, config: ExtraOptions): ɵangular_packages_router_router_o;

export declare function ɵangular_packages_router_router_d(platformLocationStrategy: PlatformLocation, baseHref: string, options?: ExtraOptions): HashLocationStrategy | PathLocationStrategy;

export declare function ɵangular_packages_router_router_e(router: Router): any;

export declare function ɵangular_packages_router_router_f(urlSerializer: UrlSerializer, contexts: ChildrenOutletContexts, location: Location, injector: Injector, loader: NgModuleFactoryLoader, compiler: Compiler, config: Route[][], opts?: ExtraOptions, urlHandlingStrategy?: UrlHandlingStrategy, routeReuseStrategy?: RouteReuseStrategy): Router;

export declare function ɵangular_packages_router_router_g(router: Router): ActivatedRoute;

/**
 * Router initialization requires two steps:
 *
 * First, we start the navigation in a `APP_INITIALIZER` to block the bootstrap if
 * a resolver or a guard executes asynchronously.
 *
 * Next, we actually run activation in a `BOOTSTRAP_LISTENER`, using the
 * `afterPreactivation` hook provided by the router.
 * The router navigation starts, reaches the point when preactivation is done, and then
 * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
 */
export declare class ɵangular_packages_router_router_h {
    private injector;
    private initNavigation;
    private resultOfPreactivationDone;
    constructor(injector: Injector);
    appInitializer(): Promise<any>;
    bootstrapListener(bootstrappedComponentRef: ComponentRef<any>): void;
    private isLegacyEnabled;
    private isLegacyDisabled;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_router_router_h, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_router_router_h>;
}

export declare function ɵangular_packages_router_router_i(r: ɵangular_packages_router_router_h): () => Promise<any>;

export declare function ɵangular_packages_router_router_j(r: ɵangular_packages_router_router_h): (bootstrappedComponentRef: ComponentRef<any>) => void;

export declare function ɵangular_packages_router_router_k(): (typeof ɵangular_packages_router_router_h | {
    provide: InjectionToken<(() => void)[]>;
    multi: boolean;
    useFactory: typeof ɵangular_packages_router_router_i;
    deps: (typeof ɵangular_packages_router_router_h)[];
    useExisting?: undefined;
} | {
    provide: InjectionToken<(compRef: ComponentRef<any>) => void>;
    useFactory: typeof ɵangular_packages_router_router_j;
    deps: (typeof ɵangular_packages_router_router_h)[];
    multi?: undefined;
    useExisting?: undefined;
} | {
    provide: InjectionToken<((compRef: ComponentRef<any>) => void)[]>;
    multi: boolean;
    useExisting: InjectionToken<(compRef: ComponentRef<any>) => void>;
    useFactory?: undefined;
    deps?: undefined;
})[];


export declare class ɵangular_packages_router_router_m<T> {
    constructor(root: ɵangular_packages_router_router_n<T>);
    get root(): T;
}

export declare class ɵangular_packages_router_router_n<T> {
    value: T;
    children: ɵangular_packages_router_router_n<T>[];
    constructor(value: T, children: ɵangular_packages_router_router_n<T>[]);
    toString(): string;
}

export declare class ɵangular_packages_router_router_o implements OnDestroy {
    private router;
    /** @docsNotRequired */ readonly viewportScroller: ViewportScroller;
    private options;
    private routerEventsSubscription;
    private scrollEventsSubscription;
    private lastId;
    private lastSource;
    private restoredId;
    private store;
    constructor(router: Router, 
    /** @docsNotRequired */ viewportScroller: ViewportScroller, options?: {
        scrollPositionRestoration?: 'disabled' | 'enabled' | 'top';
        anchorScrolling?: 'disabled' | 'enabled';
    });
    init(): void;
    private createScrollEvents;
    private consumeScrollEvents;
    private scheduleScrollEvent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_router_router_o, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ɵangular_packages_router_router_o, never, never, {}, {}, never>;
}


/**
 * This component is used internally within the router to be a placeholder when an empty
 * router-outlet is needed. For example, with a config such as:
 *
 * `{path: 'parent', outlet: 'nav', children: [...]}`
 *
 * In order to render, there needs to be a component on this config, which will default
 * to this `EmptyOutletComponent`.
 */
declare class ɵEmptyOutletComponent {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵEmptyOutletComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ɵEmptyOutletComponent, "ng-component", never, {}, {}, never, never>;
}
export { ɵEmptyOutletComponent }
export { ɵEmptyOutletComponent as ɵangular_packages_router_router_l }

/**
 * Flattens single-level nested arrays.
 */
export declare function ɵflatten<T>(arr: T[][]): T[];

export declare const ɵROUTER_PROVIDERS: Provider[];

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmQudHMiLCJzb3VyY2VzIjpbInJvdXRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY5LjEuMTJcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21waWxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nUHJvYmVUb2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhdGhMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3cG9ydFNjcm9sbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gaW5mb3JtYXRpb24gYWJvdXQgYSByb3V0ZSBhc3NvY2lhdGVkIHdpdGggYSBjb21wb25lbnRcclxuICogdGhhdCBpcyBsb2FkZWQgaW4gYW4gb3V0bGV0LlxyXG4gKiBVc2UgdG8gdHJhdmVyc2UgdGhlIGBSb3V0ZXJTdGF0ZWAgdHJlZSBhbmQgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIG5vZGVzLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgcm91dGVyL2FjdGl2YXRlZC1yb3V0ZS9tb2R1bGUudHMgcmVnaW9uPVwiYWN0aXZhdGVkLXJvdXRlXCJcclxuICogICAgIGhlYWRlcj1cImFjdGl2YXRlZC1yb3V0ZS5jb21wb25lbnQudHNcIn1cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWN0aXZhdGVkUm91dGUge1xyXG4gICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIFVSTCBzZWdtZW50cyBtYXRjaGVkIGJ5IHRoaXMgcm91dGUuICovXHJcbiAgICB1cmw6IE9ic2VydmFibGU8VXJsU2VnbWVudFtdPjtcclxuICAgIC8qKiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBtYXRyaXggcGFyYW1ldGVycyBzY29wZWQgdG8gdGhpcyByb3V0ZS4gKi9cclxuICAgIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xyXG4gICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgc2hhcmVkIGJ5IGFsbCB0aGUgcm91dGVzLiAqL1xyXG4gICAgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcclxuICAgIC8qKiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBVUkwgZnJhZ21lbnQgc2hhcmVkIGJ5IGFsbCB0aGUgcm91dGVzLiAqL1xyXG4gICAgZnJhZ21lbnQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIC8qKiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBzdGF0aWMgYW5kIHJlc29sdmVkIGRhdGEgb2YgdGhpcyByb3V0ZS4gKi9cclxuICAgIGRhdGE6IE9ic2VydmFibGU8RGF0YT47XHJcbiAgICAvKiogVGhlIG91dGxldCBuYW1lIG9mIHRoZSByb3V0ZSwgYSBjb25zdGFudC4gKi9cclxuICAgIG91dGxldDogc3RyaW5nO1xyXG4gICAgLyoqIFRoZSBjb21wb25lbnQgb2YgdGhlIHJvdXRlLCBhIGNvbnN0YW50LiAqL1xyXG4gICAgY29tcG9uZW50OiBUeXBlPGFueT4gfCBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IHNuYXBzaG90IG9mIHRoaXMgcm91dGUgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgLyoqIFRoZSBjb25maWd1cmF0aW9uIHVzZWQgdG8gbWF0Y2ggdGhpcyByb3V0ZS4gKi9cclxuICAgIGdldCByb3V0ZUNvbmZpZygpOiBSb3V0ZSB8IG51bGw7XHJcbiAgICAvKiogVGhlIHJvb3Qgb2YgdGhlIHJvdXRlciBzdGF0ZS4gKi9cclxuICAgIGdldCByb290KCk6IEFjdGl2YXRlZFJvdXRlO1xyXG4gICAgLyoqIFRoZSBwYXJlbnQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUuICovXHJcbiAgICBnZXQgcGFyZW50KCk6IEFjdGl2YXRlZFJvdXRlIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgZmlyc3QgY2hpbGQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUuICovXHJcbiAgICBnZXQgZmlyc3RDaGlsZCgpOiBBY3RpdmF0ZWRSb3V0ZSB8IG51bGw7XHJcbiAgICAvKiogVGhlIGNoaWxkcmVuIG9mIHRoaXMgcm91dGUgaW4gdGhlIHJvdXRlciBzdGF0ZSB0cmVlLiAqL1xyXG4gICAgZ2V0IGNoaWxkcmVuKCk6IEFjdGl2YXRlZFJvdXRlW107XHJcbiAgICAvKiogVGhlIHBhdGggZnJvbSB0aGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgdG8gdGhpcyByb3V0ZS4gKi9cclxuICAgIGdldCBwYXRoRnJvbVJvb3QoKTogQWN0aXZhdGVkUm91dGVbXTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gT2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIGEgbWFwIG9mIHRoZSByZXF1aXJlZCBhbmQgb3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgICogc3BlY2lmaWMgdG8gdGhlIHJvdXRlLlxyXG4gICAgICogVGhlIG1hcCBzdXBwb3J0cyByZXRyaWV2aW5nIHNpbmdsZSBhbmQgbXVsdGlwbGUgdmFsdWVzIGZyb20gdGhlIHNhbWUgcGFyYW1ldGVyLlxyXG4gICAgICovXHJcbiAgICBnZXQgcGFyYW1NYXAoKTogT2JzZXJ2YWJsZTxQYXJhbU1hcD47XHJcbiAgICAvKipcclxuICAgICAqIEFuIE9ic2VydmFibGUgdGhhdCBjb250YWlucyBhIG1hcCBvZiB0aGUgcXVlcnkgcGFyYW1ldGVycyBhdmFpbGFibGUgdG8gYWxsIHJvdXRlcy5cclxuICAgICAqIFRoZSBtYXAgc3VwcG9ydHMgcmV0cmlldmluZyBzaW5nbGUgYW5kIG11bHRpcGxlIHZhbHVlcyBmcm9tIHRoZSBxdWVyeSBwYXJhbWV0ZXIuXHJcbiAgICAgKi9cclxuICAgIGdldCBxdWVyeVBhcmFtTWFwKCk6IE9ic2VydmFibGU8UGFyYW1NYXA+O1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbnRhaW5zIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhIHJvdXRlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbXBvbmVudCBsb2FkZWQgaW4gYW5cclxuICogb3V0bGV0IGF0IGEgcGFydGljdWxhciBtb21lbnQgaW4gdGltZS4gQWN0aXZhdGVkUm91dGVTbmFwc2hvdCBjYW4gYWxzbyBiZSB1c2VkIHRvXHJcbiAqIHRyYXZlcnNlIHRoZSByb3V0ZXIgc3RhdGUgdHJlZS5cclxuICpcclxuICogYGBgXHJcbiAqIEBDb21wb25lbnQoe3RlbXBsYXRlVXJsOicuL215LWNvbXBvbmVudC5odG1sJ30pXHJcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcclxuICogICBjb25zdHJ1Y3Rvcihyb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICogICAgIGNvbnN0IGlkOiBzdHJpbmcgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XHJcbiAqICAgICBjb25zdCB1cmw6IHN0cmluZyA9IHJvdXRlLnNuYXBzaG90LnVybC5qb2luKCcnKTtcclxuICogICAgIGNvbnN0IHVzZXIgPSByb3V0ZS5zbmFwc2hvdC5kYXRhLnVzZXI7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHtcclxuICAgIC8qKiBUaGUgVVJMIHNlZ21lbnRzIG1hdGNoZWQgYnkgdGhpcyByb3V0ZSAqL1xyXG4gICAgdXJsOiBVcmxTZWdtZW50W107XHJcbiAgICAvKiogVGhlIG1hdHJpeCBwYXJhbWV0ZXJzIHNjb3BlZCB0byB0aGlzIHJvdXRlICovXHJcbiAgICBwYXJhbXM6IFBhcmFtcztcclxuICAgIC8qKiBUaGUgcXVlcnkgcGFyYW1ldGVycyBzaGFyZWQgYnkgYWxsIHRoZSByb3V0ZXMgKi9cclxuICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXM7XHJcbiAgICAvKiogVGhlIFVSTCBmcmFnbWVudCBzaGFyZWQgYnkgYWxsIHRoZSByb3V0ZXMgKi9cclxuICAgIGZyYWdtZW50OiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIHN0YXRpYyBhbmQgcmVzb2x2ZWQgZGF0YSBvZiB0aGlzIHJvdXRlICovXHJcbiAgICBkYXRhOiBEYXRhO1xyXG4gICAgLyoqIFRoZSBvdXRsZXQgbmFtZSBvZiB0aGUgcm91dGUgKi9cclxuICAgIG91dGxldDogc3RyaW5nO1xyXG4gICAgLyoqIFRoZSBjb21wb25lbnQgb2YgdGhlIHJvdXRlICovXHJcbiAgICBjb21wb25lbnQ6IFR5cGU8YW55PiB8IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVGhlIGNvbmZpZ3VyYXRpb24gdXNlZCB0byBtYXRjaCB0aGlzIHJvdXRlICoqL1xyXG4gICAgcmVhZG9ubHkgcm91dGVDb25maWc6IFJvdXRlIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlICovXHJcbiAgICBnZXQgcm9vdCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgLyoqIFRoZSBwYXJlbnQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgKi9cclxuICAgIGdldCBwYXJlbnQoKTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB8IG51bGw7XHJcbiAgICAvKiogVGhlIGZpcnN0IGNoaWxkIG9mIHRoaXMgcm91dGUgaW4gdGhlIHJvdXRlciBzdGF0ZSB0cmVlICovXHJcbiAgICBnZXQgZmlyc3RDaGlsZCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHwgbnVsbDtcclxuICAgIC8qKiBUaGUgY2hpbGRyZW4gb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgKi9cclxuICAgIGdldCBjaGlsZHJlbigpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W107XHJcbiAgICAvKiogVGhlIHBhdGggZnJvbSB0aGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgdG8gdGhpcyByb3V0ZSAqL1xyXG4gICAgZ2V0IHBhdGhGcm9tUm9vdCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W107XHJcbiAgICBnZXQgcGFyYW1NYXAoKTogUGFyYW1NYXA7XHJcbiAgICBnZXQgcXVlcnlQYXJhbU1hcCgpOiBQYXJhbU1hcDtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBhY3RpdmF0aW9uIHBhcnRcclxuICogb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICogQHNlZSBgQWN0aXZhdGlvblN0YXJ0YFxyXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFjdGl2YXRpb25FbmQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBzdGFydCBvZiB0aGUgYWN0aXZhdGlvbiBwYXJ0XHJcbiAqIG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqIEBzZWUgQWN0aXZhdGlvbkVuZGBcclxuICogQHNlZSBgUmVzb2x2ZVN0YXJ0YFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmF0aW9uU3RhcnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGEgcm91dGUgY2FuIGJlIGFjdGl2YXRlZC5cclxuICogSWYgYWxsIGd1YXJkcyByZXR1cm4gYHRydWVgLCBuYXZpZ2F0aW9uIHdpbGwgY29udGludWUuIElmIGFueSBndWFyZCByZXR1cm5zIGBmYWxzZWAsXHJcbiAqIG5hdmlnYXRpb24gd2lsbCBiZSBjYW5jZWxsZWQuIElmIGFueSBndWFyZCByZXR1cm5zIGEgYFVybFRyZWVgLCBjdXJyZW50IG5hdmlnYXRpb24gd2lsbFxyXG4gKiBiZSBjYW5jZWxsZWQgYW5kIGEgbmV3IG5hdmlnYXRpb24gd2lsbCBiZSBraWNrZWQgb2ZmIHRvIHRoZSBgVXJsVHJlZWAgcmV0dXJuZWQgZnJvbSB0aGVcclxuICogZ3VhcmQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjbGFzcyBVc2VyVG9rZW4ge31cclxuICogY2xhc3MgUGVybWlzc2lvbnMge1xyXG4gKiAgIGNhbkFjdGl2YXRlKHVzZXI6IFVzZXJUb2tlbiwgaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gKiAgICAgcmV0dXJuIHRydWU7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBJbmplY3RhYmxlKClcclxuICogY2xhc3MgQ2FuQWN0aXZhdGVUZWFtIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25zLCBwcml2YXRlIGN1cnJlbnRVc2VyOiBVc2VyVG9rZW4pIHt9XHJcbiAqXHJcbiAqICAgY2FuQWN0aXZhdGUoXHJcbiAqICAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICogICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAqICAgKTogT2JzZXJ2YWJsZTxib29sZWFufFVybFRyZWU+fFByb21pc2U8Ym9vbGVhbnxVcmxUcmVlPnxib29sZWFufFVybFRyZWUge1xyXG4gKiAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnMuY2FuQWN0aXZhdGUodGhpcy5jdXJyZW50VXNlciwgcm91dGUucGFyYW1zLmlkKTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBjYW5BY3RpdmF0ZTogW0NhbkFjdGl2YXRlVGVhbV1cclxuICogICAgICAgfVxyXG4gKiAgICAgXSlcclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW0NhbkFjdGl2YXRlVGVhbSwgVXNlclRva2VuLCBQZXJtaXNzaW9uc11cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGFsdGVybmF0aXZlbHkgcHJvdmlkZSBhIGZ1bmN0aW9uIHdpdGggdGhlIGBjYW5BY3RpdmF0ZWAgc2lnbmF0dXJlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBjYW5BY3RpdmF0ZTogWydjYW5BY3RpdmF0ZVRlYW0nXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHByb3ZpZGU6ICdjYW5BY3RpdmF0ZVRlYW0nLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4gdHJ1ZVxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ2FuQWN0aXZhdGUge1xyXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGEgY2hpbGQgcm91dGUgY2FuIGJlIGFjdGl2YXRlZC5cclxuICogSWYgYWxsIGd1YXJkcyByZXR1cm4gYHRydWVgLCBuYXZpZ2F0aW9uIHdpbGwgY29udGludWUuIElmIGFueSBndWFyZCByZXR1cm5zIGBmYWxzZWAsXHJcbiAqIG5hdmlnYXRpb24gd2lsbCBiZSBjYW5jZWxsZWQuIElmIGFueSBndWFyZCByZXR1cm5zIGEgYFVybFRyZWVgLCBjdXJyZW50IG5hdmlnYXRpb24gd2lsbFxyXG4gKiBiZSBjYW5jZWxsZWQgYW5kIGEgbmV3IG5hdmlnYXRpb24gd2lsbCBiZSBraWNrZWQgb2ZmIHRvIHRoZSBgVXJsVHJlZWAgcmV0dXJuZWQgZnJvbSB0aGVcclxuICogZ3VhcmQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjbGFzcyBVc2VyVG9rZW4ge31cclxuICogY2xhc3MgUGVybWlzc2lvbnMge1xyXG4gKiAgIGNhbkFjdGl2YXRlKHVzZXI6IFVzZXJUb2tlbiwgaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gKiAgICAgcmV0dXJuIHRydWU7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBJbmplY3RhYmxlKClcclxuICogY2xhc3MgQ2FuQWN0aXZhdGVUZWFtIGltcGxlbWVudHMgQ2FuQWN0aXZhdGVDaGlsZCB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbnMsIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXJUb2tlbikge31cclxuICpcclxuICogICBjYW5BY3RpdmF0ZUNoaWxkKFxyXG4gKiAgICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAqICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gKiAgICk6IE9ic2VydmFibGU8Ym9vbGVhbnxVcmxUcmVlPnxQcm9taXNlPGJvb2xlYW58VXJsVHJlZT58Ym9vbGVhbnxVcmxUcmVlIHtcclxuICogICAgIHJldHVybiB0aGlzLnBlcm1pc3Npb25zLmNhbkFjdGl2YXRlKHRoaXMuY3VycmVudFVzZXIsIHJvdXRlLnBhcmFtcy5pZCk7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3Jvb3QnLFxyXG4gKiAgICAgICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtDYW5BY3RpdmF0ZVRlYW1dLFxyXG4gKiAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAqICAgICAgICAgICB7XHJcbiAqICAgICAgICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50XHJcbiAqICAgICAgICAgICB9XHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbQ2FuQWN0aXZhdGVUZWFtLCBVc2VyVG9rZW4sIFBlcm1pc3Npb25zXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYGNhbkFjdGl2YXRlQ2hpbGRgIHNpZ25hdHVyZTpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3Jvb3QnLFxyXG4gKiAgICAgICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFsnY2FuQWN0aXZhdGVUZWFtJ10sXHJcbiAqICAgICAgICAgY2hpbGRyZW46IFtcclxuICogICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICAgICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50XHJcbiAqICAgICAgICAgICB9XHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHByb3ZpZGU6ICdjYW5BY3RpdmF0ZVRlYW0nLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4gdHJ1ZVxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ2FuQWN0aXZhdGVDaGlsZCB7XHJcbiAgICBjYW5BY3RpdmF0ZUNoaWxkKGNoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGEgcm91dGUgY2FuIGJlIGRlYWN0aXZhdGVkLlxyXG4gKiBJZiBhbGwgZ3VhcmRzIHJldHVybiBgdHJ1ZWAsIG5hdmlnYXRpb24gd2lsbCBjb250aW51ZS4gSWYgYW55IGd1YXJkIHJldHVybnMgYGZhbHNlYCxcclxuICogbmF2aWdhdGlvbiB3aWxsIGJlIGNhbmNlbGxlZC4gSWYgYW55IGd1YXJkIHJldHVybnMgYSBgVXJsVHJlZWAsIGN1cnJlbnQgbmF2aWdhdGlvbiB3aWxsXHJcbiAqIGJlIGNhbmNlbGxlZCBhbmQgYSBuZXcgbmF2aWdhdGlvbiB3aWxsIGJlIGtpY2tlZCBvZmYgdG8gdGhlIGBVcmxUcmVlYCByZXR1cm5lZCBmcm9tIHRoZVxyXG4gKiBndWFyZC5cclxuICpcclxuICogYGBgXHJcbiAqIGNsYXNzIFVzZXJUb2tlbiB7fVxyXG4gKiBjbGFzcyBQZXJtaXNzaW9ucyB7XHJcbiAqICAgY2FuRGVhY3RpdmF0ZSh1c2VyOiBVc2VyVG9rZW4sIGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICogICAgIHJldHVybiB0cnVlO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBASW5qZWN0YWJsZSgpXHJcbiAqIGNsYXNzIENhbkRlYWN0aXZhdGVUZWFtIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxUZWFtQ29tcG9uZW50PiB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbnMsIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXJUb2tlbikge31cclxuICpcclxuICogICBjYW5EZWFjdGl2YXRlKFxyXG4gKiAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50LFxyXG4gKiAgICAgY3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gKiAgICAgY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gKiAgICAgbmV4dFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAqICAgKTogT2JzZXJ2YWJsZTxib29sZWFufFVybFRyZWU+fFByb21pc2U8Ym9vbGVhbnxVcmxUcmVlPnxib29sZWFufFVybFRyZWUge1xyXG4gKiAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnMuY2FuRGVhY3RpdmF0ZSh0aGlzLmN1cnJlbnRVc2VyLCByb3V0ZS5wYXJhbXMuaWQpO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50LFxyXG4gKiAgICAgICAgIGNhbkRlYWN0aXZhdGU6IFtDYW5EZWFjdGl2YXRlVGVhbV1cclxuICogICAgICAgfVxyXG4gKiAgICAgXSlcclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW0NhbkRlYWN0aXZhdGVUZWFtLCBVc2VyVG9rZW4sIFBlcm1pc3Npb25zXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYGNhbkRlYWN0aXZhdGVgIHNpZ25hdHVyZTpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICAgICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsXHJcbiAqICAgICAgICAgY2FuRGVhY3RpdmF0ZTogWydjYW5EZWFjdGl2YXRlVGVhbSddXHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIHtcclxuICogICAgICAgcHJvdmlkZTogJ2NhbkRlYWN0aXZhdGVUZWFtJyxcclxuICogICAgICAgdXNlVmFsdWU6IChjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsIGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycmVudFN0YXRlOlxyXG4gKiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBuZXh0U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpID0+IHRydWVcclxuICogICAgIH1cclxuICogICBdXHJcbiAqIH0pXHJcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIENhbkRlYWN0aXZhdGU8VD4ge1xyXG4gICAgY2FuRGVhY3RpdmF0ZShjb21wb25lbnQ6IFQsIGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBuZXh0U3RhdGU/OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGNoaWxkcmVuIGNhbiBiZSBsb2FkZWQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjbGFzcyBVc2VyVG9rZW4ge31cclxuICogY2xhc3MgUGVybWlzc2lvbnMge1xyXG4gKiAgIGNhbkxvYWRDaGlsZHJlbih1c2VyOiBVc2VyVG9rZW4sIGlkOiBzdHJpbmcsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcclxuICogICAgIHJldHVybiB0cnVlO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBASW5qZWN0YWJsZSgpXHJcbiAqIGNsYXNzIENhbkxvYWRUZWFtU2VjdGlvbiBpbXBsZW1lbnRzIENhbkxvYWQge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25zLCBwcml2YXRlIGN1cnJlbnRVc2VyOiBVc2VyVG9rZW4pIHt9XHJcbiAqXHJcbiAqICAgY2FuTG9hZChyb3V0ZTogUm91dGUsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+fFByb21pc2U8Ym9vbGVhbj58Ym9vbGVhbiB7XHJcbiAqICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy5jYW5Mb2FkQ2hpbGRyZW4odGhpcy5jdXJyZW50VXNlciwgcm91dGUsIHNlZ21lbnRzKTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBsb2FkQ2hpbGRyZW46ICd0ZWFtLmpzJyxcclxuICogICAgICAgICBjYW5Mb2FkOiBbQ2FuTG9hZFRlYW1TZWN0aW9uXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbQ2FuTG9hZFRlYW1TZWN0aW9uLCBVc2VyVG9rZW4sIFBlcm1pc3Npb25zXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYGNhbkxvYWRgIHNpZ25hdHVyZTpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICAgICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsXHJcbiAqICAgICAgICAgbG9hZENoaWxkcmVuOiAndGVhbS5qcycsXHJcbiAqICAgICAgICAgY2FuTG9hZDogWydjYW5Mb2FkVGVhbVNlY3Rpb24nXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHByb3ZpZGU6ICdjYW5Mb2FkVGVhbVNlY3Rpb24nLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSkgPT4gdHJ1ZVxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ2FuTG9hZCB7XHJcbiAgICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBjaGlsZC1hY3RpdmF0aW9uIHBhcnRcclxuICogb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICogQHNlZSBgQ2hpbGRBY3RpdmF0aW9uU3RhcnRgXHJcbiAqIEBzZWUgYFJlc29sdmVTdGFydGAgKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGlsZEFjdGl2YXRpb25FbmQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBzdGFydCBvZiB0aGUgY2hpbGQtYWN0aXZhdGlvblxyXG4gKiBwYXJ0IG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqIEBzZWUgIGBDaGlsZEFjdGl2YXRpb25FbmRgXHJcbiAqIEBzZWUgYFJlc29sdmVTdGFydGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hpbGRBY3RpdmF0aW9uU3RhcnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogU3RvcmUgY29udGV4dHVhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2hpbGRyZW4gKD0gbmVzdGVkKSBgUm91dGVyT3V0bGV0YFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGlsZHJlbk91dGxldENvbnRleHRzIHtcclxuICAgIHByaXZhdGUgY29udGV4dHM7XHJcbiAgICAvKiogQ2FsbGVkIHdoZW4gYSBgUm91dGVyT3V0bGV0YCBkaXJlY3RpdmUgaXMgaW5zdGFudGlhdGVkICovXHJcbiAgICBvbkNoaWxkT3V0bGV0Q3JlYXRlZChjaGlsZE5hbWU6IHN0cmluZywgb3V0bGV0OiBSb3V0ZXJPdXRsZXQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGBSb3V0ZXJPdXRsZXRgIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQuXHJcbiAgICAgKiBXZSBuZWVkIHRvIGtlZXAgdGhlIGNvbnRleHQgYXMgdGhlIG91dGxldCBjb3VsZCBiZSBkZXN0cm95ZWQgaW5zaWRlIGEgTmdJZiBhbmQgbWlnaHQgYmVcclxuICAgICAqIHJlLWNyZWF0ZWQgbGF0ZXIuXHJcbiAgICAgKi9cclxuICAgIG9uQ2hpbGRPdXRsZXREZXN0cm95ZWQoY2hpbGROYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29ycmVzcG9uZGluZyByb3V0ZSBpcyBkZWFjdGl2YXRlZCBkdXJpbmcgbmF2aWdhdGlvbi5cclxuICAgICAqIEJlY2F1c2UgdGhlIGNvbXBvbmVudCBnZXQgZGVzdHJveWVkLCBhbGwgY2hpbGRyZW4gb3V0bGV0IGFyZSBkZXN0cm95ZWQuXHJcbiAgICAgKi9cclxuICAgIG9uT3V0bGV0RGVhY3RpdmF0ZWQoKTogTWFwPHN0cmluZywgT3V0bGV0Q29udGV4dD47XHJcbiAgICBvbk91dGxldFJlQXR0YWNoZWQoY29udGV4dHM6IE1hcDxzdHJpbmcsIE91dGxldENvbnRleHQ+KTogdm9pZDtcclxuICAgIGdldE9yQ3JlYXRlQ29udGV4dChjaGlsZE5hbWU6IHN0cmluZyk6IE91dGxldENvbnRleHQ7XHJcbiAgICBnZXRDb250ZXh0KGNoaWxkTmFtZTogc3RyaW5nKTogT3V0bGV0Q29udGV4dCB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGBQYXJhbXNgIGluc3RhbmNlIHRvIGEgYFBhcmFtTWFwYC5cclxuICogQHBhcmFtIHBhcmFtcyBUaGUgaW5zdGFuY2UgdG8gY29udmVydC5cclxuICogQHJldHVybnMgVGhlIG5ldyBtYXAgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGNvbnZlcnRUb1BhcmFtTWFwKHBhcmFtczogUGFyYW1zKTogUGFyYW1NYXA7XHJcblxyXG4vKipcclxuICpcclxuICogUmVwcmVzZW50cyBzdGF0aWMgZGF0YSBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIHJvdXRlLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZSNkYXRhYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIERhdGEgPSB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIGBVcmxTZXJpYWxpemVyYC5cclxuICpcclxuICogRXhhbXBsZSBVUkxzOlxyXG4gKlxyXG4gKiBgYGBcclxuICogL2luYm94LzMzKHBvcHVwOmNvbXBvc2UpXHJcbiAqIC9pbmJveC8zMztvcGVuPXRydWUvbWVzc2FnZXMvNDRcclxuICogYGBgXHJcbiAqXHJcbiAqIERlZmF1bHRVcmxTZXJpYWxpemVyIHVzZXMgcGFyZW50aGVzZXMgdG8gc2VyaWFsaXplIHNlY29uZGFyeSBzZWdtZW50cyAoZS5nLiwgcG9wdXA6Y29tcG9zZSksIHRoZVxyXG4gKiBjb2xvbiBzeW50YXggdG8gc3BlY2lmeSB0aGUgb3V0bGV0LCBhbmQgdGhlICc7cGFyYW1ldGVyPXZhbHVlJyBzeW50YXggKGUuZy4sIG9wZW49dHJ1ZSkgdG9cclxuICogc3BlY2lmeSByb3V0ZSBzcGVjaWZpYyBwYXJhbWV0ZXJzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWZhdWx0VXJsU2VyaWFsaXplciBpbXBsZW1lbnRzIFVybFNlcmlhbGl6ZXIge1xyXG4gICAgLyoqIFBhcnNlcyBhIHVybCBpbnRvIGEgYFVybFRyZWVgICovXHJcbiAgICBwYXJzZSh1cmw6IHN0cmluZyk6IFVybFRyZWU7XHJcbiAgICAvKiogQ29udmVydHMgYSBgVXJsVHJlZWAgaW50byBhIHVybCAqL1xyXG4gICAgc2VyaWFsaXplKHRyZWU6IFVybFRyZWUpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHN0cmluZyBvZiB0aGUgZm9ybSBgcGF0aC90by9maWxlI2V4cG9ydE5hbWVgIHRoYXQgYWN0cyBhcyBhIFVSTCBmb3IgYSBzZXQgb2Ygcm91dGVzIHRvIGxvYWQuXHJcbiAqXHJcbiAqIEBzZWUgYFJvdXRlI2xvYWRDaGlsZHJlbmBcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVwcmVjYXRlZCB0aGUgYHN0cmluZ2AgZm9ybSBvZiBgbG9hZENoaWxkcmVuYCBpcyBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHRoZSBwcm9wb3NlZCBFUyBkeW5hbWljXHJcbiAqIGBpbXBvcnQoKWAgZXhwcmVzc2lvbiwgd2hpY2ggb2ZmZXJzIGEgbW9yZSBuYXR1cmFsIGFuZCBzdGFuZGFyZHMtYmFzZWQgbWVjaGFuaXNtIHRvIGR5bmFtaWNhbGx5XHJcbiAqIGxvYWQgYW4gRVMgbW9kdWxlIGF0IHJ1bnRpbWUuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIERlcHJlY2F0ZWRMb2FkQ2hpbGRyZW4gPSBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGRldGFjaGVkIHJvdXRlIHRyZWUuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYW4gb3BhcXVlIHZhbHVlIHRoZSByb3V0ZXIgd2lsbCBnaXZlIHRvIGEgY3VzdG9tIHJvdXRlIHJldXNlIHN0cmF0ZWd5XHJcbiAqIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBsYXRlciBvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBEZXRhY2hlZFJvdXRlSGFuZGxlID0ge307XHJcblxyXG4vKipcclxuICogRXJyb3IgaGFuZGxlciB0aGF0IGlzIGludm9rZWQgd2hlbiBhIG5hdmlnYXRpb24gZXJyb3Igb2NjdXJzLlxyXG4gKlxyXG4gKiBJZiB0aGUgaGFuZGxlciByZXR1cm5zIGEgdmFsdWUsIHRoZSBuYXZpZ2F0aW9uIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGlzIHZhbHVlLlxyXG4gKiBJZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLCB0aGUgbmF2aWdhdGlvbiBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGhcclxuICogdGhlIGV4Y2VwdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZGVjbGFyZSB0eXBlIEVycm9ySGFuZGxlciA9IChlcnJvcjogYW55KSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogUm91dGVyIGV2ZW50cyB0aGF0IGFsbG93IHlvdSB0byB0cmFjayB0aGUgbGlmZWN5Y2xlIG9mIHRoZSByb3V0ZXIuXHJcbiAqXHJcbiAqIFRoZSBzZXF1ZW5jZSBvZiByb3V0ZXIgZXZlbnRzIGlzIGFzIGZvbGxvd3M6XHJcbiAqXHJcbiAqIC0gYE5hdmlnYXRpb25TdGFydGAsXHJcbiAqIC0gYFJvdXRlQ29uZmlnTG9hZFN0YXJ0YCxcclxuICogLSBgUm91dGVDb25maWdMb2FkRW5kYCxcclxuICogLSBgUm91dGVzUmVjb2duaXplZGAsXHJcbiAqIC0gYEd1YXJkc0NoZWNrU3RhcnRgLFxyXG4gKiAtIGBDaGlsZEFjdGl2YXRpb25TdGFydGAsXHJcbiAqIC0gYEFjdGl2YXRpb25TdGFydGAsXHJcbiAqIC0gYEd1YXJkc0NoZWNrRW5kYCxcclxuICogLSBgUmVzb2x2ZVN0YXJ0YCxcclxuICogLSBgUmVzb2x2ZUVuZGAsXHJcbiAqIC0gYEFjdGl2YXRpb25FbmRgXHJcbiAqIC0gYENoaWxkQWN0aXZhdGlvbkVuZGBcclxuICogLSBgTmF2aWdhdGlvbkVuZGAsXHJcbiAqIC0gYE5hdmlnYXRpb25DYW5jZWxgLFxyXG4gKiAtIGBOYXZpZ2F0aW9uRXJyb3JgXHJcbiAqIC0gYFNjcm9sbGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBFdmVudCA9IFJvdXRlckV2ZW50IHwgUm91dGVDb25maWdMb2FkU3RhcnQgfCBSb3V0ZUNvbmZpZ0xvYWRFbmQgfCBDaGlsZEFjdGl2YXRpb25TdGFydCB8IENoaWxkQWN0aXZhdGlvbkVuZCB8IEFjdGl2YXRpb25TdGFydCB8IEFjdGl2YXRpb25FbmQgfCBTY3JvbGw7XHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBhIHJvdXRlciBtb2R1bGUsIHByb3ZpZGVkIGluIHRoZVxyXG4gKiBgZm9yUm9vdCgpYCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBFeHRyYU9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRydWUsIGxvZyBhbGwgaW50ZXJuYWwgbmF2aWdhdGlvbiBldmVudHMgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgKiBVc2UgZm9yIGRlYnVnZ2luZy5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlVHJhY2luZz86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdHJ1ZSwgZW5hYmxlIHRoZSBsb2NhdGlvbiBzdHJhdGVneSB0aGF0IHVzZXMgdGhlIFVSTCBmcmFnbWVudFxyXG4gICAgICogaW5zdGVhZCBvZiB0aGUgaGlzdG9yeSBBUEkuXHJcbiAgICAgKi9cclxuICAgIHVzZUhhc2g/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmUgb2YgYGVuYWJsZWRgIG9yIGBkaXNhYmxlZGAuXHJcbiAgICAgKiBXaGVuIHNldCB0byBgZW5hYmxlZGAsIHRoZSBpbml0aWFsIG5hdmlnYXRpb24gc3RhcnRzIGJlZm9yZSB0aGUgcm9vdCBjb21wb25lbnQgaXMgY3JlYXRlZC5cclxuICAgICAqIFRoZSBib290c3RyYXAgaXMgYmxvY2tlZCB1bnRpbCB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIGNvbXBsZXRlLiBUaGlzIHZhbHVlIGlzIHJlcXVpcmVkIGZvclxyXG4gICAgICogW3NlcnZlci1zaWRlIHJlbmRlcmluZ10oZ3VpZGUvdW5pdmVyc2FsKSB0byB3b3JrLlxyXG4gICAgICogV2hlbiBzZXQgdG8gYGRpc2FibGVkYCwgdGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBub3QgcGVyZm9ybWVkLlxyXG4gICAgICogVGhlIGxvY2F0aW9uIGxpc3RlbmVyIGlzIHNldCB1cCBiZWZvcmUgdGhlIHJvb3QgY29tcG9uZW50IGdldHMgY3JlYXRlZC5cclxuICAgICAqIFVzZSBpZiB0aGVyZSBpcyBhIHJlYXNvbiB0byBoYXZlIG1vcmUgY29udHJvbCBvdmVyIHdoZW4gdGhlIHJvdXRlclxyXG4gICAgICogc3RhcnRzIGl0cyBpbml0aWFsIG5hdmlnYXRpb24gZHVlIHRvIHNvbWUgY29tcGxleCBpbml0aWFsaXphdGlvbiBsb2dpYy5cclxuICAgICAqXHJcbiAgICAgKiBMZWdhY3kgdmFsdWVzIGFyZSBkZXByZWNhdGVkIHNpbmNlIHY0IGFuZCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG5ldyBhcHBsaWNhdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogKiBgbGVnYWN5X2VuYWJsZWRgIC0gRGVmYXVsdCBmb3IgY29tcGF0aWJpbGl0eS5cclxuICAgICAqIFRoZSBpbml0aWFsIG5hdmlnYXRpb24gc3RhcnRzIGFmdGVyIHRoZSByb290IGNvbXBvbmVudCBoYXMgYmVlbiBjcmVhdGVkLFxyXG4gICAgICogYnV0IHRoZSBib290c3RyYXAgaXMgbm90IGJsb2NrZWQgdW50aWwgdGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBjb21wbGV0ZS5cclxuICAgICAqICogYGxlZ2FjeV9kaXNhYmxlZGAgLSBUaGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIG5vdCBwZXJmb3JtZWQuXHJcbiAgICAgKiBUaGUgbG9jYXRpb24gbGlzdGVuZXIgaXMgc2V0IHVwIGFmdGVyIHRoZSByb290IGNvbXBvbmVudCBnZXRzIGNyZWF0ZWQuXHJcbiAgICAgKiAqIGB0cnVlYCAtIHNhbWUgYXMgYGxlZ2FjeV9lbmFibGVkYC5cclxuICAgICAqICogYGZhbHNlYCAtIHNhbWUgYXMgYGxlZ2FjeV9kaXNhYmxlZGAuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxOYXZpZ2F0aW9uPzogSW5pdGlhbE5hdmlnYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIEEgY3VzdG9tIGVycm9yIGhhbmRsZXIgZm9yIGZhaWxlZCBuYXZpZ2F0aW9ucy5cclxuICAgICAqL1xyXG4gICAgZXJyb3JIYW5kbGVyPzogRXJyb3JIYW5kbGVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGEgcHJlbG9hZGluZyBzdHJhdGVneS5cclxuICAgICAqIE9uZSBvZiBgUHJlbG9hZEFsbE1vZHVsZXNgIG9yIGBOb1ByZWxvYWRpbmdgICh0aGUgZGVmYXVsdCkuXHJcbiAgICAgKi9cclxuICAgIHByZWxvYWRpbmdTdHJhdGVneT86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHdoYXQgdGhlIHJvdXRlciBzaG91bGQgZG8gaWYgaXQgcmVjZWl2ZXMgYSBuYXZpZ2F0aW9uIHJlcXVlc3QgdG8gdGhlIGN1cnJlbnQgVVJMLlxyXG4gICAgICogRGVmYXVsdCBpcyBgaWdub3JlYCwgd2hpY2ggY2F1c2VzIHRoZSByb3V0ZXIgaWdub3JlcyB0aGUgbmF2aWdhdGlvbi5cclxuICAgICAqIFRoaXMgY2FuIGRpc2FibGUgZmVhdHVyZXMgc3VjaCBhcyBhIFwicmVmcmVzaFwiIGJ1dHRvbi5cclxuICAgICAqIFVzZSB0aGlzIG9wdGlvbiB0byBjb25maWd1cmUgdGhlIGJlaGF2aW9yIHdoZW4gbmF2aWdhdGluZyB0byB0aGVcclxuICAgICAqIGN1cnJlbnQgVVJMLiBEZWZhdWx0IGlzICdpZ25vcmUnLlxyXG4gICAgICovXHJcbiAgICBvblNhbWVVcmxOYXZpZ2F0aW9uPzogJ3JlbG9hZCcgfCAnaWdub3JlJztcclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHdoZW4gbmF2aWdhdGluZyBiYWNrLlxyXG4gICAgICpcclxuICAgICAqICogJ2Rpc2FibGVkJy0gKERlZmF1bHQpIERvZXMgbm90aGluZy4gU2Nyb2xsIHBvc2l0aW9uIGlzIG1haW50YWluZWQgb24gbmF2aWdhdGlvbi5cclxuICAgICAqICogJ3RvcCctIFNldHMgdGhlIHNjcm9sbCBwb3NpdGlvbiB0byB4ID0gMCwgeSA9IDAgb24gYWxsIG5hdmlnYXRpb24uXHJcbiAgICAgKiAqICdlbmFibGVkJy0gUmVzdG9yZXMgdGhlIHByZXZpb3VzIHNjcm9sbCBwb3NpdGlvbiBvbiBiYWNrd2FyZCBuYXZpZ2F0aW9uLCBlbHNlIHNldHMgdGhlXHJcbiAgICAgKiBwb3NpdGlvbiB0byB0aGUgYW5jaG9yIGlmIG9uZSBpcyBwcm92aWRlZCwgb3Igc2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIFswLCAwXSAoZm9yd2FyZFxyXG4gICAgICogbmF2aWdhdGlvbikuIFRoaXMgb3B0aW9uIHdpbGwgYmUgdGhlIGRlZmF1bHQgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBZb3UgY2FuIGltcGxlbWVudCBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGJlaGF2aW9yIGJ5IGFkYXB0aW5nIHRoZSBlbmFibGVkIGJlaGF2aW9yIGFzXHJcbiAgICAgKiBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXHJcbiAgICAgKlxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogY2xhc3MgQXBwTW9kdWxlIHtcclxuICAgICAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIHZpZXdwb3J0U2Nyb2xsZXI6IFZpZXdwb3J0U2Nyb2xsZXIpIHtcclxuICAgICAqICAgICByb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgKiAgICAgICBmaWx0ZXIoKGU6IEV2ZW50KTogZSBpcyBTY3JvbGwgPT4gZSBpbnN0YW5jZW9mIFNjcm9sbClcclxuICAgICAqICAgICApLnN1YnNjcmliZShlID0+IHtcclxuICAgICAqICAgICAgIGlmIChlLnBvc2l0aW9uKSB7XHJcbiAgICAgKiAgICAgICAgIC8vIGJhY2t3YXJkIG5hdmlnYXRpb25cclxuICAgICAqICAgICAgICAgdmlld3BvcnRTY3JvbGxlci5zY3JvbGxUb1Bvc2l0aW9uKGUucG9zaXRpb24pO1xyXG4gICAgICogICAgICAgfSBlbHNlIGlmIChlLmFuY2hvcikge1xyXG4gICAgICogICAgICAgICAvLyBhbmNob3IgbmF2aWdhdGlvblxyXG4gICAgICogICAgICAgICB2aWV3cG9ydFNjcm9sbGVyLnNjcm9sbFRvQW5jaG9yKGUuYW5jaG9yKTtcclxuICAgICAqICAgICAgIH0gZWxzZSB7XHJcbiAgICAgKiAgICAgICAgIC8vIGZvcndhcmQgbmF2aWdhdGlvblxyXG4gICAgICogICAgICAgICB2aWV3cG9ydFNjcm9sbGVyLnNjcm9sbFRvUG9zaXRpb24oWzAsIDBdKTtcclxuICAgICAqICAgICAgIH1cclxuICAgICAqICAgICB9KTtcclxuICAgICAqICAgfVxyXG4gICAgICogfVxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb24/OiAnZGlzYWJsZWQnIHwgJ2VuYWJsZWQnIHwgJ3RvcCc7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gc2V0IHRvICdlbmFibGVkJywgc2Nyb2xscyB0byB0aGUgYW5jaG9yIGVsZW1lbnQgd2hlbiB0aGUgVVJMIGhhcyBhIGZyYWdtZW50LlxyXG4gICAgICogQW5jaG9yIHNjcm9sbGluZyBpcyBkaXNhYmxlZCBieSBkZWZhdWx0LlxyXG4gICAgICpcclxuICAgICAqIEFuY2hvciBzY3JvbGxpbmcgZG9lcyBub3QgaGFwcGVuIG9uICdwb3BzdGF0ZScuIEluc3RlYWQsIHdlIHJlc3RvcmUgdGhlIHBvc2l0aW9uXHJcbiAgICAgKiB0aGF0IHdlIHN0b3JlZCBvciBzY3JvbGwgdG8gdGhlIHRvcC5cclxuICAgICAqL1xyXG4gICAgYW5jaG9yU2Nyb2xsaW5nPzogJ2Rpc2FibGVkJyB8ICdlbmFibGVkJztcclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgc2Nyb2xsIG9mZnNldCB0aGUgcm91dGVyIHdpbGwgdXNlIHdoZW4gc2Nyb2xsaW5nIHRvIGFuIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogV2hlbiBnaXZlbiBhIHR1cGxlIHdpdGggeCBhbmQgeSBwb3NpdGlvbiB2YWx1ZSxcclxuICAgICAqIHRoZSByb3V0ZXIgdXNlcyB0aGF0IG9mZnNldCBlYWNoIHRpbWUgaXQgc2Nyb2xscy5cclxuICAgICAqIFdoZW4gZ2l2ZW4gYSBmdW5jdGlvbiwgdGhlIHJvdXRlciBpbnZva2VzIHRoZSBmdW5jdGlvbiBldmVyeSB0aW1lXHJcbiAgICAgKiBpdCByZXN0b3JlcyBzY3JvbGwgcG9zaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbE9mZnNldD86IFtudW1iZXIsIG51bWJlcl0gfCAoKCkgPT4gW251bWJlciwgbnVtYmVyXSk7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaG93IHRoZSByb3V0ZXIgbWVyZ2VzIHBhcmFtZXRlcnMsIGRhdGEsIGFuZCByZXNvbHZlZCBkYXRhIGZyb20gcGFyZW50IHRvIGNoaWxkXHJcbiAgICAgKiByb3V0ZXMuIEJ5IGRlZmF1bHQgKCdlbXB0eU9ubHknKSwgaW5oZXJpdHMgcGFyZW50IHBhcmFtZXRlcnMgb25seSBmb3JcclxuICAgICAqIHBhdGgtbGVzcyBvciBjb21wb25lbnQtbGVzcyByb3V0ZXMuXHJcbiAgICAgKiBTZXQgdG8gJ2Fsd2F5cycgdG8gZW5hYmxlIHVuY29uZGl0aW9uYWwgaW5oZXJpdGFuY2Ugb2YgcGFyZW50IHBhcmFtZXRlcnMuXHJcbiAgICAgKi9cclxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k/OiAnZW1wdHlPbmx5JyB8ICdhbHdheXMnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGN1c3RvbSBoYW5kbGVyIGZvciBtYWxmb3JtZWQgVVJJIGVycm9ycy4gVGhlIGhhbmRsZXIgaXMgaW52b2tlZCB3aGVuIGBlbmNvZGVkVVJJYCBjb250YWluc1xyXG4gICAgICogaW52YWxpZCBjaGFyYWN0ZXIgc2VxdWVuY2VzLlxyXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gaXMgdG8gcmVkaXJlY3QgdG8gdGhlIHJvb3QgVVJMLCBkcm9wcGluZ1xyXG4gICAgICogYW55IHBhdGggb3IgcGFyYW1ldGVyIGluZm9ybWF0aW9uLiBUaGUgZnVuY3Rpb24gdGFrZXMgdGhyZWUgcGFyYW1ldGVyczpcclxuICAgICAqXHJcbiAgICAgKiAtIGAnVVJJRXJyb3InYCAtIEVycm9yIHRocm93biB3aGVuIHBhcnNpbmcgYSBiYWQgVVJMLlxyXG4gICAgICogLSBgJ1VybFNlcmlhbGl6ZXInYCAtIFVybFNlcmlhbGl6ZXIgdGhhdOKAmXMgY29uZmlndXJlZCB3aXRoIHRoZSByb3V0ZXIuXHJcbiAgICAgKiAtIGAndXJsJ2AgLSAgVGhlIG1hbGZvcm1lZCBVUkwgdGhhdCBjYXVzZWQgdGhlIFVSSUVycm9yXHJcbiAgICAgKiAqL1xyXG4gICAgbWFsZm9ybWVkVXJpRXJyb3JIYW5kbGVyPzogKGVycm9yOiBVUklFcnJvciwgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgdXJsOiBzdHJpbmcpID0+IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hlbiB0aGUgcm91dGVyIHVwZGF0ZXMgdGhlIGJyb3dzZXIgVVJMLiBCeSBkZWZhdWx0ICgnZGVmZXJyZWQnKSxcclxuICAgICAqIHVwZGF0ZSBhZnRlciBzdWNjZXNzZnVsIG5hdmlnYXRpb24uXHJcbiAgICAgKiBTZXQgdG8gJ2VhZ2VyJyBpZiBwcmVmZXIgdG8gdXBkYXRlIHRoZSBVUkwgYXQgdGhlIGJlZ2lubmluZyBvZiBuYXZpZ2F0aW9uLlxyXG4gICAgICogVXBkYXRpbmcgdGhlIFVSTCBlYXJseSBhbGxvd3MgeW91IHRvIGhhbmRsZSBhIGZhaWx1cmUgb2YgbmF2aWdhdGlvbiBieVxyXG4gICAgICogc2hvd2luZyBhbiBlcnJvciBtZXNzYWdlIHdpdGggdGhlIFVSTCB0aGF0IGZhaWxlZC5cclxuICAgICAqL1xyXG4gICAgdXJsVXBkYXRlU3RyYXRlZ3k/OiAnZGVmZXJyZWQnIHwgJ2VhZ2VyJztcclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlcyBhIGJ1ZyBmaXggdGhhdCBjb3JyZWN0cyByZWxhdGl2ZSBsaW5rIHJlc29sdXRpb24gaW4gY29tcG9uZW50cyB3aXRoIGVtcHR5IHBhdGhzLlxyXG4gICAgICogRXhhbXBsZTpcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIGNvbnN0IHJvdXRlcyA9IFtcclxuICAgICAqICAge1xyXG4gICAgICogICAgIHBhdGg6ICcnLFxyXG4gICAgICogICAgIGNvbXBvbmVudDogQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICogICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgKiAgICAgICB7IHBhdGg6ICdhJywgY29tcG9uZW50OiBBQ29tcG9uZW50IH0sXHJcbiAgICAgKiAgICAgICB7IHBhdGg6ICdiJywgY29tcG9uZW50OiBCQ29tcG9uZW50IH0sXHJcbiAgICAgKiAgICAgXVxyXG4gICAgICogICB9XHJcbiAgICAgKiBdO1xyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogRnJvbSB0aGUgYENvbnRhaW5lckNvbXBvbmVudGAsIHRoaXMgd2lsbCBub3Qgd29yazpcclxuICAgICAqXHJcbiAgICAgKiBgPGEgW3JvdXRlckxpbmtdPVwiWycuL2EnXVwiPkxpbmsgdG8gQTwvYT5gXHJcbiAgICAgKlxyXG4gICAgICogSG93ZXZlciwgdGhpcyB3aWxsIHdvcms6XHJcbiAgICAgKlxyXG4gICAgICogYDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vYSddXCI+TGluayB0byBBPC9hPmBcclxuICAgICAqXHJcbiAgICAgKiBJbiBvdGhlciB3b3JkcywgeW91J3JlIHJlcXVpcmVkIHRvIHVzZSBgLi4vYCByYXRoZXIgdGhhbiBgLi9gLiBUaGlzIGlzIGN1cnJlbnRseSB0aGUgZGVmYXVsdFxyXG4gICAgICogYmVoYXZpb3IuIFNldHRpbmcgdGhpcyBvcHRpb24gdG8gYGNvcnJlY3RlZGAgZW5hYmxlcyB0aGUgZml4LlxyXG4gICAgICovXHJcbiAgICByZWxhdGl2ZUxpbmtSZXNvbHV0aW9uPzogJ2xlZ2FjeScgfCAnY29ycmVjdGVkJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBHdWFyZCBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHdWFyZHNDaGVja0VuZCBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNob3VsZEFjdGl2YXRlOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzaG91bGRBY3RpdmF0ZTogYm9vbGVhbik7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBHdWFyZCBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHdWFyZHNDaGVja1N0YXJ0IGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmc7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsb3dlZCB2YWx1ZXMgaW4gYW4gYEV4dHJhT3B0aW9uc2Agb2JqZWN0IHRoYXQgY29uZmlndXJlXHJcbiAqIHdoZW4gdGhlIHJvdXRlciBwZXJmb3JtcyB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIG9wZXJhdGlvbi5cclxuICpcclxuICogKiAnZW5hYmxlZCcgLSBUaGUgaW5pdGlhbCBuYXZpZ2F0aW9uIHN0YXJ0cyBiZWZvcmUgdGhlIHJvb3QgY29tcG9uZW50IGlzIGNyZWF0ZWQuXHJcbiAqIFRoZSBib290c3RyYXAgaXMgYmxvY2tlZCB1bnRpbCB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIGNvbXBsZXRlLiBUaGlzIHZhbHVlIGlzIHJlcXVpcmVkXHJcbiAqIGZvciBbc2VydmVyLXNpZGUgcmVuZGVyaW5nXShndWlkZS91bml2ZXJzYWwpIHRvIHdvcmsuXHJcbiAqICogJ2Rpc2FibGVkJyAtIFRoZSBpbml0aWFsIG5hdmlnYXRpb24gaXMgbm90IHBlcmZvcm1lZC4gVGhlIGxvY2F0aW9uIGxpc3RlbmVyIGlzIHNldCB1cCBiZWZvcmVcclxuICogdGhlIHJvb3QgY29tcG9uZW50IGdldHMgY3JlYXRlZC4gVXNlIGlmIHRoZXJlIGlzIGEgcmVhc29uIHRvIGhhdmVcclxuICogbW9yZSBjb250cm9sIG92ZXIgd2hlbiB0aGUgcm91dGVyIHN0YXJ0cyBpdHMgaW5pdGlhbCBuYXZpZ2F0aW9uIGR1ZSB0byBzb21lIGNvbXBsZXhcclxuICogaW5pdGlhbGl6YXRpb24gbG9naWMuXHJcbiAqICogJ2xlZ2FjeV9lbmFibGVkJy0gKERlZmF1bHQsIGZvciBjb21wYXRpYmlsaXR5LikgVGhlIGluaXRpYWwgbmF2aWdhdGlvbiBzdGFydHMgYWZ0ZXIgdGhlIHJvb3RcclxuICogY29tcG9uZW50IGhhcyBiZWVuIGNyZWF0ZWQuIFRoZSBib290c3RyYXAgaXMgbm90IGJsb2NrZWQgdW50aWwgdGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpc1xyXG4gKiBjb21wbGV0ZS4gQGRlcHJlY2F0ZWRcclxuICogKiAnbGVnYWN5X2Rpc2FibGVkJy0gVGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBub3QgcGVyZm9ybWVkLiBUaGUgbG9jYXRpb24gbGlzdGVuZXIgaXMgc2V0IHVwXHJcbiAqIGFmdGVyIHRoZSByb290IGNvbXBvbmVudCBnZXRzIGNyZWF0ZWQuIEBkZXByZWNhdGVkIHNpbmNlIHY0XHJcbiAqICogYHRydWVgIC0gc2FtZSBhcyAnbGVnYWN5X2VuYWJsZWQnLiBAZGVwcmVjYXRlZCBzaW5jZSB2NFxyXG4gKiAqIGBmYWxzZWAgLSBzYW1lIGFzICdsZWdhY3lfZGlzYWJsZWQnLiBAZGVwcmVjYXRlZCBzaW5jZSB2NFxyXG4gKlxyXG4gKiBUaGUgJ2xlZ2FjeV9lbmFibGVkJyBhbmQgJ2xlZ2FjeV9kaXNhYmxlZCcgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBuZXcgYXBwbGljYXRpb25zLlxyXG4gKlxyXG4gKiBAc2VlIGBmb3JSb290KClgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgSW5pdGlhbE5hdmlnYXRpb24gPSB0cnVlIHwgZmFsc2UgfCAnZW5hYmxlZCcgfCAnZGlzYWJsZWQnIHwgJ2xlZ2FjeV9lbmFibGVkJyB8ICdsZWdhY3lfZGlzYWJsZWQnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtIGBwYXRoL3RvL2ZpbGUjZXhwb3J0TmFtZWAgdGhhdCBhY3RzIGFzIGEgVVJMIGZvciBhIHNldCBvZiByb3V0ZXMgdG8gbG9hZCxcclxuICogb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgc3VjaCBhIHNldC5cclxuICpcclxuICogVGhlIHN0cmluZyBmb3JtIG9mIGBMb2FkQ2hpbGRyZW5gIGlzIGRlcHJlY2F0ZWQgKHNlZSBgRGVwcmVjYXRlZExvYWRDaGlsZHJlbmApLiBUaGUgZnVuY3Rpb25cclxuICogZm9ybSAoYExvYWRDaGlsZHJlbkNhbGxiYWNrYCkgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cclxuICpcclxuICogQHNlZSBgUm91dGUjbG9hZENoaWxkcmVuYC5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBMb2FkQ2hpbGRyZW4gPSBMb2FkQ2hpbGRyZW5DYWxsYmFjayB8IERlcHJlY2F0ZWRMb2FkQ2hpbGRyZW47XHJcblxyXG4vKipcclxuICpcclxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byByZXNvbHZlIGEgY29sbGVjdGlvbiBvZiBsYXp5LWxvYWRlZCByb3V0ZXMuXHJcbiAqXHJcbiAqIE9mdGVuIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZCB1c2luZyBhbiBFUyBkeW5hbWljIGBpbXBvcnQoKWAgZXhwcmVzc2lvbi4gRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICdsYXp5JyxcclxuICogICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9sYXp5LXJvdXRlL2xhenkubW9kdWxlJykudGhlbihtb2QgPT4gbW9kLkxhenlNb2R1bGUpLFxyXG4gKiB9XTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb24gX211c3RfIG1hdGNoIHRoZSBmb3JtIGFib3ZlOiBhbiBhcnJvdyBmdW5jdGlvbiBvZiB0aGUgZm9ybVxyXG4gKiBgKCkgPT4gaW1wb3J0KCcuLi4nKS50aGVuKG1vZCA9PiBtb2QuTU9EVUxFKWAuXHJcbiAqXHJcbiAqIEBzZWUgYFJvdXRlI2xvYWRDaGlsZHJlbmAuXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTG9hZENoaWxkcmVuQ2FsbGJhY2sgPSAoKSA9PiBUeXBlPGFueT4gfCBOZ01vZHVsZUZhY3Rvcnk8YW55PiB8IE9ic2VydmFibGU8VHlwZTxhbnk+PiB8IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PGFueT4gfCBUeXBlPGFueT4gfCBhbnk+O1xyXG5cclxuLyoqXHJcbiAqIEluZm9ybWF0aW9uIGFib3V0IGEgbmF2aWdhdGlvbiBvcGVyYXRpb24uIFJldHJpZXZlIHRoZSBtb3N0IHJlY2VudFxyXG4gKiBuYXZpZ2F0aW9uIG9iamVjdCB3aXRoIHRoZSBgcm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKClgIG1ldGhvZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOYXZpZ2F0aW9uID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgb2YgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbi5cclxuICAgICAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhcmdldCBVUkwgcGFzc2VkIGludG8gdGhlIGBSb3V0ZXIjbmF2aWdhdGVCeVVybCgpYCBjYWxsIGJlZm9yZSBuYXZpZ2F0aW9uLiBUaGlzIGlzXHJcbiAgICAgKiB0aGUgdmFsdWUgYmVmb3JlIHRoZSByb3V0ZXIgaGFzIHBhcnNlZCBvciBhcHBsaWVkIHJlZGlyZWN0cyB0byBpdC5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbFVybDogc3RyaW5nIHwgVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGluaXRpYWwgdGFyZ2V0IFVSTCBhZnRlciBiZWluZyBwYXJzZWQgd2l0aCBgVXJsU2VyaWFsaXplci5leHRyYWN0KClgLlxyXG4gICAgICovXHJcbiAgICBleHRyYWN0ZWRVcmw6IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBleHRyYWN0ZWQgVVJMIGFmdGVyIHJlZGlyZWN0cyBoYXZlIGJlZW4gYXBwbGllZC5cclxuICAgICAqIFRoaXMgVVJMIG1heSBub3QgYmUgYXZhaWxhYmxlIGltbWVkaWF0ZWx5LCB0aGVyZWZvcmUgdGhpcyBwcm9wZXJ0eSBjYW4gYmUgYHVuZGVmaW5lZGAuXHJcbiAgICAgKiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIHNldCBhZnRlciB0aGUgYFJvdXRlc1JlY29nbml6ZWRgIGV2ZW50IGZpcmVzLlxyXG4gICAgICovXHJcbiAgICBmaW5hbFVybD86IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgaG93IHRoaXMgbmF2aWdhdGlvbiB3YXMgdHJpZ2dlcmVkLlxyXG4gICAgICpcclxuICAgICAqICogJ2ltcGVyYXRpdmUnLS1UcmlnZ2VyZWQgYnkgYHJvdXRlci5uYXZpZ2F0ZUJ5VXJsYCBvciBgcm91dGVyLm5hdmlnYXRlYC5cclxuICAgICAqICogJ3BvcHN0YXRlJy0tVHJpZ2dlcmVkIGJ5IGEgcG9wc3RhdGUgZXZlbnQuXHJcbiAgICAgKiAqICdoYXNoY2hhbmdlJy0tVHJpZ2dlcmVkIGJ5IGEgaGFzaGNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgdHJpZ2dlcjogJ2ltcGVyYXRpdmUnIHwgJ3BvcHN0YXRlJyB8ICdoYXNoY2hhbmdlJztcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9ucyB0aGF0IGNvbnRyb2xsZWQgdGhlIHN0cmF0ZWd5IHVzZWQgZm9yIHRoaXMgbmF2aWdhdGlvbi5cclxuICAgICAqIFNlZSBgTmF2aWdhdGlvbkV4dHJhc2AuXHJcbiAgICAgKi9cclxuICAgIGV4dHJhczogTmF2aWdhdGlvbkV4dHJhcztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByZXZpb3VzbHkgc3VjY2Vzc2Z1bCBgTmF2aWdhdGlvbmAgb2JqZWN0LiBPbmx5IG9uZSBwcmV2aW91cyBuYXZpZ2F0aW9uXHJcbiAgICAgKiBpcyBhdmFpbGFibGUsIHRoZXJlZm9yZSB0aGlzIHByZXZpb3VzIGBOYXZpZ2F0aW9uYCBvYmplY3QgaGFzIGEgYG51bGxgIHZhbHVlXHJcbiAgICAgKiBmb3IgaXRzIG93biBgcHJldmlvdXNOYXZpZ2F0aW9uYC5cclxuICAgICAqL1xyXG4gICAgcHJldmlvdXNOYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uIHwgbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gaXMgY2FuY2VsZWQsIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkuXHJcbiAqXHJcbiAqIFRoaXMgY2FuIGhhcHBlbiB3aGVuIGEgW3JvdXRlIGd1YXJkXShndWlkZS9yb3V0ZXIjbWlsZXN0b25lLTUtcm91dGUtZ3VhcmRzKVxyXG4gKiByZXR1cm5zIGBmYWxzZWAgb3IgaW5pdGlhdGVzIGEgcmVkaXJlY3QgYnkgcmV0dXJuaW5nIGEgYFVybFRyZWVgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYXZpZ2F0aW9uQ2FuY2VsIGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYXNvbjogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYXNvbjogc3RyaW5nKTtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gZW5kcyBzdWNjZXNzZnVsbHkuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25FbmQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nKTtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gZmFpbHMgZHVlIHRvIGFuIHVuZXhwZWN0ZWQgZXJyb3IuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25FcnJvciBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBlcnJvcjogYW55O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGVycm9yOiBhbnkpO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPcHRpb25zIHRoYXQgbW9kaWZ5IHRoZSBuYXZpZ2F0aW9uIHN0cmF0ZWd5LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgTmF2aWdhdGlvbkV4dHJhcyB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIHJvb3QgVVJJIHRvIHVzZSBmb3IgcmVsYXRpdmUgbmF2aWdhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhlIGZvbGxvd2luZyByb3V0ZSBjb25maWd1cmF0aW9uIHdoZXJlIHRoZSBwYXJlbnQgcm91dGVcclxuICAgICAqIGhhcyB0d28gY2hpbGRyZW4uXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiBbe1xyXG4gICAgICogICBwYXRoOiAncGFyZW50JyxcclxuICAgICAqICAgY29tcG9uZW50OiBQYXJlbnRDb21wb25lbnQsXHJcbiAgICAgKiAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICogICAgIHBhdGg6ICdsaXN0JyxcclxuICAgICAqICAgICBjb21wb25lbnQ6IExpc3RDb21wb25lbnRcclxuICAgICAqICAgfSx7XHJcbiAgICAgKiAgICAgcGF0aDogJ2NoaWxkJyxcclxuICAgICAqICAgICBjb21wb25lbnQ6IENoaWxkQ29tcG9uZW50XHJcbiAgICAgKiAgIH1dXHJcbiAgICAgKiB9XVxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGZvbGxvd2luZyBgZ28oKWAgZnVuY3Rpb24gbmF2aWdhdGVzIHRvIHRoZSBgbGlzdGAgcm91dGUgYnlcclxuICAgICAqIGludGVycHJldGluZyB0aGUgZGVzdGluYXRpb24gVVJJIGFzIHJlbGF0aXZlIHRvIHRoZSBhY3RpdmF0ZWQgYGNoaWxkYCAgcm91dGVcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqICBAQ29tcG9uZW50KHsuLi59KVxyXG4gICAgICogIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcclxuICAgICAqICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxyXG4gICAgICpcclxuICAgICAqICAgIGdvKCkge1xyXG4gICAgICogICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2xpc3QnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgICogICAgfVxyXG4gICAgICogIH1cclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICByZWxhdGl2ZVRvPzogQWN0aXZhdGVkUm91dGUgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gdGhlIFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIE5hdmlnYXRlIHRvIC9yZXN1bHRzP3BhZ2U9MVxyXG4gICAgICogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVzdWx0cyddLCB7IHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IDEgfSB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBxdWVyeVBhcmFtcz86IFBhcmFtcyB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGhhc2ggZnJhZ21lbnQgZm9yIHRoZSBVUkwuXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAvLyBOYXZpZ2F0ZSB0byAvcmVzdWx0cyN0b3BcclxuICAgICAqIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc3VsdHMnXSwgeyBmcmFnbWVudDogJ3RvcCcgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgZnJhZ21lbnQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqICoqREVQUkVDQVRFRCoqOiBVc2UgYHF1ZXJ5UGFyYW1zSGFuZGxpbmc6IFwicHJlc2VydmVcImAgaW5zdGVhZCB0byBwcmVzZXJ2ZVxyXG4gICAgICogcXVlcnkgcGFyYW1ldGVycyBmb3IgdGhlIG5leHQgbmF2aWdhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2NFxyXG4gICAgICovXHJcbiAgICBwcmVzZXJ2ZVF1ZXJ5UGFyYW1zPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogSG93IHRvIGhhbmRsZSBxdWVyeSBwYXJhbWV0ZXJzIGluIHRoZSByb3V0ZXIgbGluayBmb3IgdGhlIG5leHQgbmF2aWdhdGlvbi5cclxuICAgICAqIE9uZSBvZjpcclxuICAgICAqICogYG1lcmdlYCA6IE1lcmdlIG5ldyB3aXRoIGN1cnJlbnQgcGFyYW1ldGVycy5cclxuICAgICAqICogYHByZXNlcnZlYCA6IFByZXNlcnZlIGN1cnJlbnQgcGFyYW1ldGVycy5cclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIGZyb20gL3Jlc3VsdHM/cGFnZT0xIHRvIC92aWV3P3BhZ2U9MSZwYWdlPTJcclxuICAgICAqIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3ZpZXcnXSwgeyBxdWVyeVBhcmFtczogeyBwYWdlOiAyIH0sICBxdWVyeVBhcmFtc0hhbmRsaW5nOiBcIm1lcmdlXCIgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgcXVlcnlQYXJhbXNIYW5kbGluZz86IFF1ZXJ5UGFyYW1zSGFuZGxpbmcgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRydWUsIHByZXNlcnZlcyB0aGUgVVJMIGZyYWdtZW50IGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAvLyBQcmVzZXJ2ZSBmcmFnbWVudCBmcm9tIC9yZXN1bHRzI3RvcCB0byAvdmlldyN0b3BcclxuICAgICAqIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3ZpZXcnXSwgeyBwcmVzZXJ2ZUZyYWdtZW50OiB0cnVlIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHByZXNlcnZlRnJhZ21lbnQ/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRydWUsIG5hdmlnYXRlcyB3aXRob3V0IHB1c2hpbmcgYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogLy8gTmF2aWdhdGUgc2lsZW50bHkgdG8gL3ZpZXdcclxuICAgICAqIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3ZpZXcnXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc2tpcExvY2F0aW9uQ2hhbmdlPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0cnVlLCBuYXZpZ2F0ZXMgd2hpbGUgcmVwbGFjaW5nIHRoZSBjdXJyZW50IHN0YXRlIGluIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAvLyBOYXZpZ2F0ZSB0byAvdmlld1xyXG4gICAgICogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmlldyddLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgcmVwbGFjZVVybD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIERldmVsb3Blci1kZWZpbmVkIHN0YXRlIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbnkgbmF2aWdhdGlvbi5cclxuICAgICAqIEFjY2VzcyB0aGlzIHZhbHVlIHRocm91Z2ggdGhlIGBOYXZpZ2F0aW9uLmV4dHJhc2Agb2JqZWN0XHJcbiAgICAgKiByZXR1cm5lZCBmcm9tIGByb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKWAgd2hpbGUgYSBuYXZpZ2F0aW9uIGlzIGV4ZWN1dGluZy5cclxuICAgICAqXHJcbiAgICAgKiBBZnRlciBhIG5hdmlnYXRpb24gY29tcGxldGVzLCB0aGUgcm91dGVyIHdyaXRlcyBhbiBvYmplY3QgY29udGFpbmluZyB0aGlzXHJcbiAgICAgKiB2YWx1ZSB0b2dldGhlciB3aXRoIGEgYG5hdmlnYXRpb25JZGAgdG8gYGhpc3Rvcnkuc3RhdGVgLlxyXG4gICAgICogVGhlIHZhbHVlIGlzIHdyaXR0ZW4gd2hlbiBgbG9jYXRpb24uZ28oKWAgb3IgYGxvY2F0aW9uLnJlcGxhY2VTdGF0ZSgpYFxyXG4gICAgICogaXMgY2FsbGVkIGJlZm9yZSBhY3RpdmF0aW5nIHRoaXMgcm91dGUuXHJcbiAgICAgKlxyXG4gICAgICogTm90ZSB0aGF0IGBoaXN0b3J5LnN0YXRlYCBkb2VzIG5vdCBwYXNzIGFuIG9iamVjdCBlcXVhbGl0eSB0ZXN0IGJlY2F1c2VcclxuICAgICAqIHRoZSByb3V0ZXIgYWRkcyB0aGUgYG5hdmlnYXRpb25JZGAgb24gZWFjaCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0ZT86IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgbmF2aWdhdGlvbiBzdGFydHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25TdGFydCBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyB0aGUgY2FsbCBvciBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgbmF2aWdhdGlvbi5cclxuICAgICAqIEFuIGBpbXBlcmF0aXZlYCB0cmlnZ2VyIGlzIGEgY2FsbCB0byBgcm91dGVyLm5hdmlnYXRlQnlVcmwoKWAgb3IgYHJvdXRlci5uYXZpZ2F0ZSgpYC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIG5hdmlnYXRpb25UcmlnZ2VyPzogJ2ltcGVyYXRpdmUnIHwgJ3BvcHN0YXRlJyB8ICdoYXNoY2hhbmdlJztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hdmlnYXRpb24gc3RhdGUgdGhhdCB3YXMgcHJldmlvdXNseSBzdXBwbGllZCB0byB0aGUgYHB1c2hTdGF0ZWAgY2FsbCxcclxuICAgICAqIHdoZW4gdGhlIG5hdmlnYXRpb24gaXMgdHJpZ2dlcmVkIGJ5IGEgYHBvcHN0YXRlYCBldmVudC4gT3RoZXJ3aXNlIG51bGwuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHN0YXRlIG9iamVjdCBpcyBkZWZpbmVkIGJ5IGBOYXZpZ2F0aW9uRXh0cmFzYCwgYW5kIGNvbnRhaW5zIGFueVxyXG4gICAgICogZGV2ZWxvcGVyLWRlZmluZWQgc3RhdGUgdmFsdWUsIGFzIHdlbGwgYXMgYSB1bmlxdWUgSUQgdGhhdFxyXG4gICAgICogdGhlIHJvdXRlciBhc3NpZ25zIHRvIGV2ZXJ5IHJvdXRlciB0cmFuc2l0aW9uL25hdmlnYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogRnJvbSB0aGUgcGVyc3BlY3RpdmUgb2YgdGhlIHJvdXRlciwgdGhlIHJvdXRlciBuZXZlciBcImdvZXMgYmFja1wiLlxyXG4gICAgICogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJhY2sgYnV0dG9uIGluIHRoZSBicm93c2VyLFxyXG4gICAgICogYSBuZXcgbmF2aWdhdGlvbiBJRCBpcyBjcmVhdGVkLlxyXG4gICAgICpcclxuICAgICAqIFVzZSB0aGUgSUQgaW4gdGhpcyBwcmV2aW91cy1zdGF0ZSBvYmplY3QgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGEgbmV3bHkgY3JlYXRlZFxyXG4gICAgICogc3RhdGUgYW5kIG9uZSByZXR1cm5lZCB0byBieSBhIGBwb3BzdGF0ZWAgZXZlbnQsIHNvIHRoYXQgeW91IGNhbiByZXN0b3JlIHNvbWVcclxuICAgICAqIHJlbWVtYmVyZWQgc3RhdGUsIHN1Y2ggYXMgc2Nyb2xsIHBvc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcmVzdG9yZWRTdGF0ZT86IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgICAgIG5hdmlnYXRpb25JZDogbnVtYmVyO1xyXG4gICAgfSB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgbmF2aWdhdGlvblRyaWdnZXI/OiAnaW1wZXJhdGl2ZScgfCAncG9wc3RhdGUnIHwgJ2hhc2hjaGFuZ2UnLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByZXN0b3JlZFN0YXRlPzoge1xyXG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XHJcbiAgICAgICAgbmF2aWdhdGlvbklkOiBudW1iZXI7XHJcbiAgICB9IHwgbnVsbCk7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFByb3ZpZGVzIGEgcHJlbG9hZGluZyBzdHJhdGVneSB0aGF0IGRvZXMgbm90IHByZWxvYWQgYW55IG1vZHVsZXMuXHJcbiAqXHJcbiAqIFRoaXMgc3RyYXRlZ3kgaXMgZW5hYmxlZCBieSBkZWZhdWx0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOb1ByZWxvYWRpbmcgaW1wbGVtZW50cyBQcmVsb2FkaW5nU3RyYXRlZ3kge1xyXG4gICAgcHJlbG9hZChyb3V0ZTogUm91dGUsIGZuOiAoKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdG9yZSBjb250ZXh0dWFsIGluZm9ybWF0aW9uIGFib3V0IGEgYFJvdXRlck91dGxldGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3V0bGV0Q29udGV4dCB7XHJcbiAgICBvdXRsZXQ6IFJvdXRlck91dGxldCB8IG51bGw7XHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGUgfCBudWxsO1xyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB8IG51bGw7XHJcbiAgICBjaGlsZHJlbjogQ2hpbGRyZW5PdXRsZXRDb250ZXh0cztcclxuICAgIGF0dGFjaFJlZjogQ29tcG9uZW50UmVmPGFueT4gfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQSBtYXAgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIHJlcXVpcmVkIGFuZCBvcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAqIHNwZWNpZmljIHRvIGEgcm91dGUuXHJcbiAqIFRoZSBtYXAgc3VwcG9ydHMgcmV0cmlldmluZyBhIHNpbmdsZSB2YWx1ZSB3aXRoIGBnZXQoKWBcclxuICogb3IgbXVsdGlwbGUgdmFsdWVzIHdpdGggYGdldEFsbCgpYC5cclxuICpcclxuICogQHNlZSBbVVJMU2VhcmNoUGFyYW1zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVVJMU2VhcmNoUGFyYW1zKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUGFyYW1NYXAge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIHdoZXRoZXIgdGhlIG1hcCBjb250YWlucyBhIGdpdmVuIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBwYXJhbWV0ZXIgbmFtZS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG1hcCBjb250YWlucyB0aGUgZ2l2ZW4gcGFyYW1ldGVyLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgKi9cclxuICAgIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBzaW5nbGUgdmFsdWUgZm9yIGEgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIHBhcmFtZXRlciBuYW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgcGFyYW1ldGVyJ3Mgc2luZ2xlIHZhbHVlLFxyXG4gICAgICogb3IgdGhlIGZpcnN0IHZhbHVlIGlmIHRoZSBwYXJhbWV0ZXIgaGFzIG11bHRpcGxlIHZhbHVlcyxcclxuICAgICAqIG9yIGBudWxsYCB3aGVuIHRoZXJlIGlzIG5vIHN1Y2ggcGFyYW1ldGVyLlxyXG4gICAgICovXHJcbiAgICBnZXQobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIG11bHRpcGxlIHZhbHVlcyBmb3IgYSBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcmV0dXJuIEFuIGFycmF5IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgdmFsdWVzLFxyXG4gICAgICogb3IgYW4gZW1wdHkgYXJyYXkgaWYgdGhlcmUgaXMgbm8gc3VjaCBwYXJhbWV0ZXIuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXRBbGwobmFtZTogc3RyaW5nKTogc3RyaW5nW107XHJcbiAgICAvKiogTmFtZXMgb2YgdGhlIHBhcmFtZXRlcnMgaW4gdGhlIG1hcC4gKi9cclxuICAgIHJlYWRvbmx5IGtleXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb2xsZWN0aW9uIG9mIG1hdHJpeCBhbmQgcXVlcnkgVVJMIHBhcmFtZXRlcnMuXHJcbiAqIEBzZWUgYGNvbnZlcnRUb1BhcmFtTWFwKClgXHJcbiAqIEBzZWUgYFBhcmFtTWFwYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFBhcmFtcyA9IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUHJvdmlkZXMgYSBwcmVsb2FkaW5nIHN0cmF0ZWd5IHRoYXQgcHJlbG9hZHMgYWxsIG1vZHVsZXMgYXMgcXVpY2tseSBhcyBwb3NzaWJsZS5cclxuICpcclxuICogYGBgXHJcbiAqIFJvdXRlTW9kdWxlLmZvclJvb3QoUk9VVEVTLCB7cHJlbG9hZGluZ1N0cmF0ZWd5OiBQcmVsb2FkQWxsTW9kdWxlc30pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcmVsb2FkQWxsTW9kdWxlcyBpbXBsZW1lbnRzIFByZWxvYWRpbmdTdHJhdGVneSB7XHJcbiAgICBwcmVsb2FkKHJvdXRlOiBSb3V0ZSwgZm46ICgpID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBQcm92aWRlcyBhIHByZWxvYWRpbmcgc3RyYXRlZ3kuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFByZWxvYWRpbmdTdHJhdGVneSB7XHJcbiAgICBhYnN0cmFjdCBwcmVsb2FkKHJvdXRlOiBSb3V0ZSwgZm46ICgpID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBwcmltYXJ5IHJvdXRpbmcgb3V0bGV0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBQUklNQVJZX09VVExFVCA9IFwicHJpbWFyeVwiO1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBhIFtESSBwcm92aWRlcl0oZ3VpZGUvZ2xvc3NhcnkjcHJvdmlkZXIpIGZvciBhIHNldCBvZiByb3V0ZXMuXHJcbiAqIEBwYXJhbSByb3V0ZXMgVGhlIHJvdXRlIGNvbmZpZ3VyYXRpb24gdG8gcHJvdmlkZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChST1VURVMpXSxcclxuICogICBwcm92aWRlcnM6IFtwcm92aWRlUm91dGVzKEVYVFJBX1JPVVRFUyldXHJcbiAqIH0pXHJcbiAqIGNsYXNzIE15TmdNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHByb3ZpZGVSb3V0ZXMocm91dGVzOiBSb3V0ZXMpOiBhbnk7XHJcblxyXG4vKipcclxuICpcclxuICogSG93IHRvIGhhbmRsZSBxdWVyeSBwYXJhbWV0ZXJzIGluIGEgcm91dGVyIGxpbmsuXHJcbiAqIE9uZSBvZjpcclxuICogLSBgbWVyZ2VgIDogTWVyZ2UgbmV3IHdpdGggY3VycmVudCBwYXJhbWV0ZXJzLlxyXG4gKiAtIGBwcmVzZXJ2ZWAgOiBQcmVzZXJ2ZSBjdXJyZW50IHBhcmFtZXRlcnMuXHJcbiAqXHJcbiAqIEBzZWUgYE5hdmlnYXRpb25FeHRyYXMjcXVlcnlQYXJhbXNIYW5kbGluZ2BcclxuICogQHNlZSBgUm91dGVyTGlua2BcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBRdWVyeVBhcmFtc0hhbmRsaW5nID0gJ21lcmdlJyB8ICdwcmVzZXJ2ZScgfCAnJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogSW50ZXJmYWNlIHRoYXQgY2xhc3NlcyBjYW4gaW1wbGVtZW50IHRvIGJlIGEgZGF0YSBwcm92aWRlci5cclxuICogQSBkYXRhIHByb3ZpZGVyIGNsYXNzIGNhbiBiZSB1c2VkIHdpdGggdGhlIHJvdXRlciB0byByZXNvbHZlIGRhdGEgZHVyaW5nIG5hdmlnYXRpb24uXHJcbiAqIFRoZSBpbnRlcmZhY2UgZGVmaW5lcyBhIGByZXNvbHZlKClgIG1ldGhvZCB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBuYXZpZ2F0aW9uIHN0YXJ0cy5cclxuICogVGhlIHJvdXRlciB3aWxsIHRoZW4gd2FpdCBmb3IgdGhlIGRhdGEgdG8gYmUgcmVzb2x2ZWQgYmVmb3JlIHRoZSByb3V0ZSBpcyBmaW5hbGx5IGFjdGl2YXRlZC5cclxuICpcclxuICogYGBgXHJcbiAqIEBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBIZXJvUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPEhlcm8+IHtcclxuICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7fVxyXG4gKlxyXG4gKiAgIHJlc29sdmUoXHJcbiAqICAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICogICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAqICAgKTogT2JzZXJ2YWJsZTxhbnk+fFByb21pc2U8YW55Pnxhbnkge1xyXG4gKiAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRIZXJvKHJvdXRlLnBhcmFtTWFwLmdldCgnaWQnKSk7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ2RldGFpbC86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogSGVyb0RldGFpbENvbXBvbmVudCxcclxuICogICAgICAgICByZXNvbHZlOiB7XHJcbiAqICAgICAgICAgICBoZXJvOiBIZXJvUmVzb2x2ZXJcclxuICogICAgICAgICB9XHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBhbHRlcm5hdGl2ZWx5IHByb3ZpZGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBgcmVzb2x2ZWAgc2lnbmF0dXJlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogZXhwb3J0IGNvbnN0IG15SGVybzogSGVybyA9IHtcclxuICogICAvLyAuLi5cclxuICogfVxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcclxuICogICAgICAgICBjb21wb25lbnQ6IEhlcm9Db21wb25lbnQsXHJcbiAqICAgICAgICAgcmVzb2x2ZToge1xyXG4gKiAgICAgICAgICAgaGVybzogJ2hlcm9SZXNvbHZlcidcclxuICogICAgICAgICB9XHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIHtcclxuICogICAgICAgcHJvdmlkZTogJ2hlcm9SZXNvbHZlcicsXHJcbiAqICAgICAgIHVzZVZhbHVlOiAocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSA9PiBteUhlcm9cclxuICogICAgIH1cclxuICogICBdXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBSZXNvbHZlPFQ+IHtcclxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxUPiB8IFByb21pc2U8VD4gfCBUO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogUmVwcmVzZW50cyB0aGUgcmVzb2x2ZWQgZGF0YSBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIHJvdXRlLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZSNyZXNvbHZlYC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBSZXNvbHZlRGF0YSA9IHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBlbmQgb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICogQHNlZSBgUmVzb2x2ZVN0YXJ0YC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmVzb2x2ZUVuZCBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgdGhlIHN0YXJ0IG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqXHJcbiAqIFJ1bnMgaW4gdGhlIFwicmVzb2x2ZVwiIHBoYXNlIHdoZXRoZXIgb3Igbm90IHRoZXJlIGlzIGFueXRoaW5nIHRvIHJlc29sdmUuXHJcbiAqIEluIGZ1dHVyZSwgbWF5IGNoYW5nZSB0byBvbmx5IHJ1biB3aGVuIHRoZXJlIGFyZSB0aGluZ3MgdG8gYmUgcmVzb2x2ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlc29sdmVTdGFydCBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29uZmlndXJhdGlvbiBvYmplY3QgdGhhdCBkZWZpbmVzIGEgc2luZ2xlIHJvdXRlLlxyXG4gKiBBIHNldCBvZiByb3V0ZXMgYXJlIGNvbGxlY3RlZCBpbiBhIGBSb3V0ZXNgIGFycmF5IHRvIGRlZmluZSBhIGBSb3V0ZXJgIGNvbmZpZ3VyYXRpb24uXHJcbiAqIFRoZSByb3V0ZXIgYXR0ZW1wdHMgdG8gbWF0Y2ggc2VnbWVudHMgb2YgYSBnaXZlbiBVUkwgYWdhaW5zdCBlYWNoIHJvdXRlLFxyXG4gKiB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGRlZmluZWQgaW4gdGhpcyBvYmplY3QuXHJcbiAqXHJcbiAqIFN1cHBvcnRzIHN0YXRpYywgcGFyYW1ldGVyaXplZCwgcmVkaXJlY3QsIGFuZCB3aWxkY2FyZCByb3V0ZXMsIGFzIHdlbGwgYXNcclxuICogY3VzdG9tIHJvdXRlIGRhdGEgYW5kIHJlc29sdmUgbWV0aG9kcy5cclxuICpcclxuICogRm9yIGRldGFpbGVkIHVzYWdlIGluZm9ybWF0aW9uLCBzZWUgdGhlIFtSb3V0aW5nIEd1aWRlXShndWlkZS9yb3V0ZXIpLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgU2ltcGxlIENvbmZpZ3VyYXRpb25cclxuICpcclxuICogVGhlIGZvbGxvd2luZyByb3V0ZSBzcGVjaWZpZXMgdGhhdCB3aGVuIG5hdmlnYXRpbmcgdG8sIGZvciBleGFtcGxlLFxyXG4gKiBgL3RlYW0vMTEvdXNlci9ib2JgLCB0aGUgcm91dGVyIGNyZWF0ZXMgdGhlICdUZWFtJyBjb21wb25lbnRcclxuICogd2l0aCB0aGUgJ1VzZXInIGNoaWxkIGNvbXBvbmVudCBpbiBpdC5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICAqICBjb21wb25lbnQ6IFRlYW0sXHJcbiAqICAgY2hpbGRyZW46IFt7XHJcbiAqICAgICBwYXRoOiAndXNlci86bmFtZScsXHJcbiAqICAgICBjb21wb25lbnQ6IFVzZXJcclxuICogICB9XVxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIE11bHRpcGxlIE91dGxldHNcclxuICpcclxuICogVGhlIGZvbGxvd2luZyByb3V0ZSBjcmVhdGVzIHNpYmxpbmcgY29tcG9uZW50cyB3aXRoIG11bHRpcGxlIG91dGxldHMuXHJcbiAqIFdoZW4gbmF2aWdhdGluZyB0byBgL3RlYW0vMTEoYXV4OmNoYXQvamltKWAsIHRoZSByb3V0ZXIgY3JlYXRlcyB0aGUgJ1RlYW0nIGNvbXBvbmVudCBuZXh0IHRvXHJcbiAqIHRoZSAnQ2hhdCcgY29tcG9uZW50LiBUaGUgJ0NoYXQnIGNvbXBvbmVudCBpcyBwbGFjZWQgaW50byB0aGUgJ2F1eCcgb3V0bGV0LlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgIGNvbXBvbmVudDogVGVhbVxyXG4gKiB9LCB7XHJcbiAqICAgcGF0aDogJ2NoYXQvOnVzZXInLFxyXG4gKiAgIGNvbXBvbmVudDogQ2hhdFxyXG4gKiAgIG91dGxldDogJ2F1eCdcclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBXaWxkIENhcmRzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgcm91dGUgdXNlcyB3aWxkLWNhcmQgbm90YXRpb24gdG8gc3BlY2lmeSBhIGNvbXBvbmVudFxyXG4gKiB0aGF0IGlzIGFsd2F5cyBpbnN0YW50aWF0ZWQgcmVnYXJkbGVzcyBvZiB3aGVyZSB5b3UgbmF2aWdhdGUgdG8uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICcqKicsXHJcbiAqICAgY29tcG9uZW50OiBXaWxkY2FyZENvbXBvbmVudFxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFJlZGlyZWN0c1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHJvdXRlIHVzZXMgdGhlIGByZWRpcmVjdFRvYCBwcm9wZXJ0eSB0byBpZ25vcmUgYSBzZWdtZW50IG9mXHJcbiAqIGEgZ2l2ZW4gVVJMIHdoZW4gbG9va2luZyBmb3IgYSBjaGlsZCBwYXRoLlxyXG4gKlxyXG4gKiBXaGVuIG5hdmlnYXRpbmcgdG8gJy90ZWFtLzExL2xlZ2FjeS91c2VyL2ppbScsIHRoZSByb3V0ZXIgY2hhbmdlcyB0aGUgVVJMIHNlZ21lbnRcclxuICogJy90ZWFtLzExL2xlZ2FjeS91c2VyL2ppbScgdG8gJy90ZWFtLzExL3VzZXIvamltJywgYW5kIHRoZW4gaW5zdGFudGlhdGVzXHJcbiAqIHRoZSBUZWFtIGNvbXBvbmVudCB3aXRoIHRoZSBVc2VyIGNoaWxkIGNvbXBvbmVudCBpbiBpdC5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICBjb21wb25lbnQ6IFRlYW0sXHJcbiAqICAgY2hpbGRyZW46IFt7XHJcbiAqICAgICBwYXRoOiAnbGVnYWN5L3VzZXIvOm5hbWUnLFxyXG4gKiAgICAgcmVkaXJlY3RUbzogJ3VzZXIvOm5hbWUnXHJcbiAqICAgfSwge1xyXG4gKiAgICAgcGF0aDogJ3VzZXIvOm5hbWUnLFxyXG4gKiAgICAgY29tcG9uZW50OiBVc2VyXHJcbiAqICAgfV1cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSByZWRpcmVjdCBwYXRoIGNhbiBiZSByZWxhdGl2ZSwgYXMgc2hvd24gaW4gdGhpcyBleGFtcGxlLCBvciBhYnNvbHV0ZS5cclxuICogSWYgd2UgY2hhbmdlIHRoZSBgcmVkaXJlY3RUb2AgdmFsdWUgaW4gdGhlIGV4YW1wbGUgdG8gdGhlIGFic29sdXRlIFVSTCBzZWdtZW50ICcvdXNlci86bmFtZScsXHJcbiAqIHRoZSByZXN1bHQgVVJMIGlzIGFsc28gYWJzb2x1dGUsICcvdXNlci9qaW0nLlxyXG5cclxuICogIyMjIEVtcHR5IFBhdGhcclxuICpcclxuICogRW1wdHktcGF0aCByb3V0ZSBjb25maWd1cmF0aW9ucyBjYW4gYmUgdXNlZCB0byBpbnN0YW50aWF0ZSBjb21wb25lbnRzIHRoYXQgZG8gbm90ICdjb25zdW1lJ1xyXG4gKiBhbnkgVVJMIHNlZ21lbnRzLlxyXG4gKlxyXG4gKiBJbiB0aGUgZm9sbG93aW5nIGNvbmZpZ3VyYXRpb24sIHdoZW4gbmF2aWdhdGluZyB0b1xyXG4gKiBgL3RlYW0vMTFgLCB0aGUgcm91dGVyIGluc3RhbnRpYXRlcyB0aGUgJ0FsbFVzZXJzJyBjb21wb25lbnQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgY29tcG9uZW50OiBUZWFtLFxyXG4gKiAgIGNoaWxkcmVuOiBbe1xyXG4gKiAgICAgcGF0aDogJycsXHJcbiAqICAgICBjb21wb25lbnQ6IEFsbFVzZXJzXHJcbiAqICAgfSwge1xyXG4gKiAgICAgcGF0aDogJ3VzZXIvOm5hbWUnLFxyXG4gKiAgICAgY29tcG9uZW50OiBVc2VyXHJcbiAqICAgfV1cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqIEVtcHR5LXBhdGggcm91dGVzIGNhbiBoYXZlIGNoaWxkcmVuLiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIHdoZW4gbmF2aWdhdGluZ1xyXG4gKiB0byBgL3RlYW0vMTEvdXNlci9qaW1gLCB0aGUgcm91dGVyIGluc3RhbnRpYXRlcyB0aGUgd3JhcHBlciBjb21wb25lbnQgd2l0aFxyXG4gKiB0aGUgdXNlciBjb21wb25lbnQgaW4gaXQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBhbiBlbXB0eSBwYXRoIHJvdXRlIGluaGVyaXRzIGl0cyBwYXJlbnQncyBwYXJhbWV0ZXJzIGFuZCBkYXRhLlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgIGNvbXBvbmVudDogVGVhbSxcclxuICogICBjaGlsZHJlbjogW3tcclxuICogICAgIHBhdGg6ICcnLFxyXG4gKiAgICAgY29tcG9uZW50OiBXcmFwcGVyQ21wLFxyXG4gKiAgICAgY2hpbGRyZW46IFt7XHJcbiAqICAgICAgIHBhdGg6ICd1c2VyLzpuYW1lJyxcclxuICogICAgICAgY29tcG9uZW50OiBVc2VyXHJcbiAqICAgICB9XVxyXG4gKiAgIH1dXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgTWF0Y2hpbmcgU3RyYXRlZ3lcclxuICpcclxuICogVGhlIGRlZmF1bHQgcGF0aC1tYXRjaCBzdHJhdGVneSBpcyAncHJlZml4Jywgd2hpY2ggbWVhbnMgdGhhdCB0aGUgcm91dGVyXHJcbiAqIGNoZWNrcyBVUkwgZWxlbWVudHMgZnJvbSB0aGUgbGVmdCB0byBzZWUgaWYgdGhlIFVSTCBtYXRjaGVzIGEgc3BlY2lmaWVkIHBhdGguXHJcbiAqIEZvciBleGFtcGxlLCAnL3RlYW0vMTEvdXNlcicgbWF0Y2hlcyAndGVhbS86aWQnLlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAnJyxcclxuICogICBwYXRoTWF0Y2g6ICdwcmVmaXgnLCAvL2RlZmF1bHRcclxuICogICByZWRpcmVjdFRvOiAnbWFpbidcclxuICogfSwge1xyXG4gKiAgIHBhdGg6ICdtYWluJyxcclxuICogICBjb21wb25lbnQ6IE1haW5cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gc3BlY2lmeSB0aGUgcGF0aC1tYXRjaCBzdHJhdGVneSAnZnVsbCcgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBhdGhcclxuICogY292ZXJzIHRoZSB3aG9sZSB1bmNvbnN1bWVkIFVSTC4gSXQgaXMgaW1wb3J0YW50IHRvIGRvIHRoaXMgd2hlbiByZWRpcmVjdGluZ1xyXG4gKiBlbXB0eS1wYXRoIHJvdXRlcy4gT3RoZXJ3aXNlLCBiZWNhdXNlIGFuIGVtcHR5IHBhdGggaXMgYSBwcmVmaXggb2YgYW55IFVSTCxcclxuICogdGhlIHJvdXRlciB3b3VsZCBhcHBseSB0aGUgcmVkaXJlY3QgZXZlbiB3aGVuIG5hdmlnYXRpbmcgdG8gdGhlIHJlZGlyZWN0IGRlc3RpbmF0aW9uLFxyXG4gKiBjcmVhdGluZyBhbiBlbmRsZXNzIGxvb3AuXHJcbiAqXHJcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgc3VwcGx5aW5nIHRoZSAnZnVsbCcgYHBhdGhNYXRjaGAgc3RyYXRlZ3kgZW5zdXJlc1xyXG4gKiB0aGF0IHRoZSByb3V0ZXIgYXBwbGllcyB0aGUgcmVkaXJlY3QgaWYgYW5kIG9ubHkgaWYgbmF2aWdhdGluZyB0byAnLycuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICcnLFxyXG4gKiAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxyXG4gKiAgIHJlZGlyZWN0VG86ICdtYWluJ1xyXG4gKiB9LCB7XHJcbiAqICAgcGF0aDogJ21haW4nLFxyXG4gKiAgIGNvbXBvbmVudDogTWFpblxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIENvbXBvbmVudGxlc3MgUm91dGVzXHJcbiAqXHJcbiAqIFlvdSBjYW4gc2hhcmUgcGFyYW1ldGVycyBiZXR3ZWVuIHNpYmxpbmcgY29tcG9uZW50cy5cclxuICogRm9yIGV4YW1wbGUsIHN1cHBvc2UgdGhhdCB0d28gc2libGluZyBjb21wb25lbnRzIHNob3VsZCBnbyBuZXh0IHRvIGVhY2ggb3RoZXIsXHJcbiAqIGFuZCBib3RoIG9mIHRoZW0gcmVxdWlyZSBhbiBJRCBwYXJhbWV0ZXIuIFlvdSBjYW4gYWNjb21wbGlzaCB0aGlzIHVzaW5nIGEgcm91dGVcclxuICogdGhhdCBkb2VzIG5vdCBzcGVjaWZ5IGEgY29tcG9uZW50IGF0IHRoZSB0b3AgbGV2ZWwuXHJcbiAqXHJcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgJ01haW5DaGlsZCcgYW5kICdBdXhDaGlsZCcgYXJlIHNpYmxpbmdzLlxyXG4gKiBXaGVuIG5hdmlnYXRpbmcgdG8gJ3BhcmVudC8xMC8oYS8vYXV4OmIpJywgdGhlIHJvdXRlIGluc3RhbnRpYXRlc1xyXG4gKiB0aGUgbWFpbiBjaGlsZCBhbmQgYXV4IGNoaWxkIGNvbXBvbmVudHMgbmV4dCB0byBlYWNoIG90aGVyLlxyXG4gKiBGb3IgdGhpcyB0byB3b3JrLCB0aGUgYXBwbGljYXRpb24gY29tcG9uZW50IG11c3QgaGF2ZSB0aGUgcHJpbWFyeSBhbmQgYXV4IG91dGxldHMgZGVmaW5lZC5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgIHBhdGg6ICdwYXJlbnQvOmlkJyxcclxuICogICAgY2hpbGRyZW46IFtcclxuICogICAgICB7IHBhdGg6ICdhJywgY29tcG9uZW50OiBNYWluQ2hpbGQgfSxcclxuICogICAgICB7IHBhdGg6ICdiJywgY29tcG9uZW50OiBBdXhDaGlsZCwgb3V0bGV0OiAnYXV4JyB9XHJcbiAqICAgIF1cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSByb3V0ZXIgbWVyZ2VzIHRoZSBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZSBvZiB0aGUgY29tcG9uZW50bGVzc1xyXG4gKiBwYXJlbnQgaW50byB0aGUgcGFyYW1ldGVycywgZGF0YSwgYW5kIHJlc29sdmUgb2YgdGhlIGNoaWxkcmVuLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gY2hpbGQgY29tcG9uZW50cyBhcmUgZGVmaW5lZFxyXG4gKiB3aXRoIGFuIGVtcHR5IHBhdGggc3RyaW5nLCBhcyBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXHJcbiAqIFdpdGggdGhpcyBjb25maWd1cmF0aW9uLCBuYXZpZ2F0aW5nIHRvICcvcGFyZW50LzEwJyBjcmVhdGVzXHJcbiAqIHRoZSBtYWluIGNoaWxkIGFuZCBhdXggY29tcG9uZW50cy5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgIHBhdGg6ICdwYXJlbnQvOmlkJyxcclxuICogICAgY2hpbGRyZW46IFtcclxuICogICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IE1haW5DaGlsZCB9LFxyXG4gKiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQXV4Q2hpbGQsIG91dGxldDogJ2F1eCcgfVxyXG4gKiAgICBdXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgTGF6eSBMb2FkaW5nXHJcbiAqXHJcbiAqIExhenkgbG9hZGluZyBzcGVlZHMgdXAgYXBwbGljYXRpb24gbG9hZCB0aW1lIGJ5IHNwbGl0dGluZyB0aGUgYXBwbGljYXRpb25cclxuICogaW50byBtdWx0aXBsZSBidW5kbGVzIGFuZCBsb2FkaW5nIHRoZW0gb24gZGVtYW5kLlxyXG4gKiBUbyB1c2UgbGF6eSBsb2FkaW5nLCBwcm92aWRlIHRoZSBgbG9hZENoaWxkcmVuYCBwcm9wZXJ0eSAgaW5zdGVhZCBvZiB0aGUgYGNoaWxkcmVuYCBwcm9wZXJ0eS5cclxuICpcclxuICogR2l2ZW4gdGhlIGZvbGxvd2luZyBleGFtcGxlIHJvdXRlLCB0aGUgcm91dGVyIHdpbGwgbGF6eSBsb2FkXHJcbiAqIHRoZSBhc3NvY2lhdGVkIG1vZHVsZSBvbiBkZW1hbmQgdXNpbmcgdGhlIGJyb3dzZXIgbmF0aXZlIGltcG9ydCBzeXN0ZW0uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICdsYXp5JyxcclxuICogICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9sYXp5LXJvdXRlL2xhenkubW9kdWxlJykudGhlbihtb2QgPT4gbW9kLkxhenlNb2R1bGUpLFxyXG4gKiB9XTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBSb3V0ZSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXRoIHRvIG1hdGNoIGFnYWluc3QuIENhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggYSBjdXN0b20gYG1hdGNoZXJgIGZ1bmN0aW9uLlxyXG4gICAgICogQSBVUkwgc3RyaW5nIHRoYXQgdXNlcyByb3V0ZXIgbWF0Y2hpbmcgbm90YXRpb24uXHJcbiAgICAgKiBDYW4gYmUgYSB3aWxkIGNhcmQgKGAqKmApIHRoYXQgbWF0Y2hlcyBhbnkgVVJMIChzZWUgVXNhZ2UgTm90ZXMgYmVsb3cpLlxyXG4gICAgICogRGVmYXVsdCBpcyBcIi9cIiAodGhlIHJvb3QgcGF0aCkuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwYXRoPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGF0aC1tYXRjaGluZyBzdHJhdGVneSwgb25lIG9mICdwcmVmaXgnIG9yICdmdWxsJy5cclxuICAgICAqIERlZmF1bHQgaXMgJ3ByZWZpeCcuXHJcbiAgICAgKlxyXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIHJvdXRlciBjaGVja3MgVVJMIGVsZW1lbnRzIGZyb20gdGhlIGxlZnQgdG8gc2VlIGlmIHRoZSBVUkxcclxuICAgICAqIG1hdGNoZXMgYSBnaXZlbiAgcGF0aCwgYW5kIHN0b3BzIHdoZW4gdGhlcmUgaXMgYSBtYXRjaC4gRm9yIGV4YW1wbGUsXHJcbiAgICAgKiAnL3RlYW0vMTEvdXNlcicgbWF0Y2hlcyAndGVhbS86aWQnLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBwYXRoLW1hdGNoIHN0cmF0ZWd5ICdmdWxsJyBtYXRjaGVzIGFnYWluc3QgdGhlIGVudGlyZSBVUkwuXHJcbiAgICAgKiBJdCBpcyBpbXBvcnRhbnQgdG8gZG8gdGhpcyB3aGVuIHJlZGlyZWN0aW5nIGVtcHR5LXBhdGggcm91dGVzLlxyXG4gICAgICogT3RoZXJ3aXNlLCBiZWNhdXNlIGFuIGVtcHR5IHBhdGggaXMgYSBwcmVmaXggb2YgYW55IFVSTCxcclxuICAgICAqIHRoZSByb3V0ZXIgd291bGQgYXBwbHkgdGhlIHJlZGlyZWN0IGV2ZW4gd2hlbiBuYXZpZ2F0aW5nXHJcbiAgICAgKiB0byB0aGUgcmVkaXJlY3QgZGVzdGluYXRpb24sIGNyZWF0aW5nIGFuIGVuZGxlc3MgbG9vcC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHBhdGhNYXRjaD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQSBjdXN0b20gVVJMLW1hdGNoaW5nIGZ1bmN0aW9uLiBDYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIGBwYXRoYC5cclxuICAgICAqL1xyXG4gICAgbWF0Y2hlcj86IFVybE1hdGNoZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdG8gaW5zdGFudGlhdGUgd2hlbiB0aGUgcGF0aCBtYXRjaGVzLlxyXG4gICAgICogQ2FuIGJlIGVtcHR5IGlmIGNoaWxkIHJvdXRlcyBzcGVjaWZ5IGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudD86IFR5cGU8YW55PjtcclxuICAgIC8qKlxyXG4gICAgICogQSBVUkwgdG8gcmVkaXJlY3QgdG8gd2hlbiB0aGUgcGF0aCBtYXRjaGVzLlxyXG4gICAgICogQWJzb2x1dGUgaWYgdGhlIFVSTCBiZWdpbnMgd2l0aCBhIHNsYXNoICgvKSwgb3RoZXJ3aXNlIHJlbGF0aXZlIHRvIHRoZSBwYXRoIFVSTC5cclxuICAgICAqIFdoZW4gbm90IHByZXNlbnQsIHJvdXRlciBkb2VzIG5vdCByZWRpcmVjdC5cclxuICAgICAqL1xyXG4gICAgcmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiBhIGBSb3V0ZXJPdXRsZXRgIG9iamVjdCB3aGVyZSB0aGUgY29tcG9uZW50IGNhbiBiZSBwbGFjZWRcclxuICAgICAqIHdoZW4gdGhlIHBhdGggbWF0Y2hlcy5cclxuICAgICAqL1xyXG4gICAgb3V0bGV0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBkZXBlbmRlbmN5LWluamVjdGlvbiB0b2tlbnMgdXNlZCB0byBsb29rIHVwIGBDYW5BY3RpdmF0ZSgpYFxyXG4gICAgICogaGFuZGxlcnMsIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFsbG93ZWQgdG9cclxuICAgICAqIGFjdGl2YXRlIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBhY3RpdmF0ZS5cclxuICAgICAqL1xyXG4gICAgY2FuQWN0aXZhdGU/OiBhbnlbXTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgREkgdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuQWN0aXZhdGVDaGlsZCgpYCBoYW5kbGVycyxcclxuICAgICAqIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFsbG93ZWQgdG8gYWN0aXZhdGVcclxuICAgICAqIGEgY2hpbGQgb2YgdGhlIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgYW55IHVzZXIgY2FuIGFjdGl2YXRlIGEgY2hpbGQuXHJcbiAgICAgKi9cclxuICAgIGNhbkFjdGl2YXRlQ2hpbGQ/OiBhbnlbXTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgREkgdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuRGVhY3RpdmF0ZSgpYFxyXG4gICAgICogaGFuZGxlcnMsIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFsbG93ZWQgdG9cclxuICAgICAqIGRlYWN0aXZhdGUgdGhlIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgYW55IHVzZXIgY2FuIGRlYWN0aXZhdGUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjYW5EZWFjdGl2YXRlPzogYW55W107XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIERJIHRva2VucyB1c2VkIHRvIGxvb2sgdXAgYENhbkxvYWQoKWBcclxuICAgICAqIGhhbmRsZXJzLCBpbiBvcmRlciB0byBkZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhbGxvd2VkIHRvXHJcbiAgICAgKiBsb2FkIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBsb2FkLlxyXG4gICAgICovXHJcbiAgICBjYW5Mb2FkPzogYW55W107XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgZGV2ZWxvcGVyLWRlZmluZWQgZGF0YSBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IHZpYVxyXG4gICAgICogYEFjdGl2YXRlZFJvdXRlYC4gQnkgZGVmYXVsdCwgbm8gYWRkaXRpb25hbCBkYXRhIGlzIHBhc3NlZC5cclxuICAgICAqL1xyXG4gICAgZGF0YT86IERhdGE7XHJcbiAgICAvKipcclxuICAgICAqIEEgbWFwIG9mIERJIHRva2VucyB1c2VkIHRvIGxvb2sgdXAgZGF0YSByZXNvbHZlcnMuIFNlZSBgUmVzb2x2ZWAuXHJcbiAgICAgKi9cclxuICAgIHJlc29sdmU/OiBSZXNvbHZlRGF0YTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgY2hpbGQgYFJvdXRlYCBvYmplY3RzIHRoYXQgc3BlY2lmaWVzIGEgbmVzdGVkIHJvdXRlXHJcbiAgICAgKiBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbj86IFJvdXRlcztcclxuICAgIC8qKlxyXG4gICAgICogQSBgTG9hZENoaWxkcmVuYCBvYmplY3Qgc3BlY2lmeWluZyBsYXp5LWxvYWRlZCBjaGlsZCByb3V0ZXMuXHJcbiAgICAgKi9cclxuICAgIGxvYWRDaGlsZHJlbj86IExvYWRDaGlsZHJlbjtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGVuIGd1YXJkcyBhbmQgcmVzb2x2ZXJzIHdpbGwgYmUgcnVuLiBPbmUgb2ZcclxuICAgICAqIC0gYHBhcmFtc09yUXVlcnlQYXJhbXNDaGFuZ2VgIDogUnVuIHdoZW4gcXVlcnkgcGFyYW1ldGVycyBjaGFuZ2UuXHJcbiAgICAgKiAtIGBhbHdheXNgIDogUnVuIG9uIGV2ZXJ5IGV4ZWN1dGlvbi5cclxuICAgICAqIEJ5IGRlZmF1bHQsIGd1YXJkcyBhbmQgcmVzb2x2ZXJzIHJ1biBvbmx5IHdoZW4gdGhlIG1hdHJpeFxyXG4gICAgICogcGFyYW1ldGVycyBvZiB0aGUgcm91dGUgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBydW5HdWFyZHNBbmRSZXNvbHZlcnM/OiBSdW5HdWFyZHNBbmRSZXNvbHZlcnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIHJvdXRlIGhhcyBiZWVuIGxhenkgbG9hZGVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZUNvbmZpZ0xvYWRFbmQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJvdXRlOiBSb3V0ZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJvdXRlOiBSb3V0ZSk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYmVmb3JlIGxhenkgbG9hZGluZyBhIHJvdXRlIGNvbmZpZ3VyYXRpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlQ29uZmlnTG9hZFN0YXJ0IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZTogUm91dGU7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZTogUm91dGUpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEEgc2VydmljZSB0aGF0IHByb3ZpZGVzIG5hdmlnYXRpb24gYW5kIFVSTCBtYW5pcHVsYXRpb24gY2FwYWJpbGl0aWVzLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZWAuXHJcbiAqIEBzZWUgW1JvdXRpbmcgYW5kIE5hdmlnYXRpb24gR3VpZGVdKGd1aWRlL3JvdXRlcikuXHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBSb3V0ZXJNb2R1bGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyIHtcclxuICAgIHByaXZhdGUgcm9vdENvbXBvbmVudFR5cGU7XHJcbiAgICBwcml2YXRlIHVybFNlcmlhbGl6ZXI7XHJcbiAgICBwcml2YXRlIHJvb3RDb250ZXh0cztcclxuICAgIHByaXZhdGUgbG9jYXRpb247XHJcbiAgICBjb25maWc6IFJvdXRlcztcclxuICAgIHByaXZhdGUgY3VycmVudFVybFRyZWU7XHJcbiAgICBwcml2YXRlIHJhd1VybFRyZWU7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJVcmxUcmVlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFuc2l0aW9ucztcclxuICAgIHByaXZhdGUgbmF2aWdhdGlvbnM7XHJcbiAgICBwcml2YXRlIGxhc3RTdWNjZXNzZnVsTmF2aWdhdGlvbjtcclxuICAgIHByaXZhdGUgY3VycmVudE5hdmlnYXRpb247XHJcbiAgICBwcml2YXRlIGxvY2F0aW9uU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0aW9uSWQ7XHJcbiAgICBwcml2YXRlIGNvbmZpZ0xvYWRlcjtcclxuICAgIHByaXZhdGUgbmdNb2R1bGU7XHJcbiAgICBwcml2YXRlIGNvbnNvbGU7XHJcbiAgICBwcml2YXRlIGlzTmdab25lRW5hYmxlZDtcclxuICAgIC8qKlxyXG4gICAgICogQW4gZXZlbnQgc3RyZWFtIGZvciByb3V0aW5nIGV2ZW50cyBpbiB0aGlzIE5nTW9kdWxlLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBldmVudHM6IE9ic2VydmFibGU8RXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiByb3V0aW5nIGluIHRoaXMgTmdNb2R1bGUuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciBuYXZpZ2F0aW9uIGVycm9ycyBpbiB0aGlzIE5nTW9kdWxlLlxyXG4gICAgICovXHJcbiAgICBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcjtcclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciBlcnJvcnMgdGhyb3duIGJ5IGBSb3V0ZXIucGFyc2VVcmwodXJsKWBcclxuICAgICAqIHdoZW4gYHVybGAgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXIuXHJcbiAgICAgKiBUaGUgbW9zdCBjb21tb24gY2FzZSBpcyBhIGAlYCBzaWduXHJcbiAgICAgKiB0aGF0J3Mgbm90IGVuY29kZWQgYW5kIGlzIG5vdCBwYXJ0IG9mIGEgcGVyY2VudCBlbmNvZGVkIHNlcXVlbmNlLlxyXG4gICAgICovXHJcbiAgICBtYWxmb3JtZWRVcmlFcnJvckhhbmRsZXI6IChlcnJvcjogVVJJRXJyb3IsIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIHVybDogc3RyaW5nKSA9PiBVcmxUcmVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmIGF0IGxlYXN0IG9uZSBuYXZpZ2F0aW9uIGV2ZW50IGhhcyBvY2N1cnJlZCxcclxuICAgICAqIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xyXG4gICAgbmF2aWdhdGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBsYXN0U3VjY2Vzc2Z1bElkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0cmF0ZWd5IGZvciBleHRyYWN0aW5nIGFuZCBtZXJnaW5nIFVSTHMuXHJcbiAgICAgKiBVc2VkIGZvciBBbmd1bGFySlMgdG8gQW5ndWxhciBtaWdyYXRpb25zLlxyXG4gICAgICovXHJcbiAgICB1cmxIYW5kbGluZ1N0cmF0ZWd5OiBVcmxIYW5kbGluZ1N0cmF0ZWd5O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0cmF0ZWd5IGZvciByZS11c2luZyByb3V0ZXMuXHJcbiAgICAgKi9cclxuICAgIHJvdXRlUmV1c2VTdHJhdGVneTogUm91dGVSZXVzZVN0cmF0ZWd5O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgdG8gaGFuZGxlIGEgbmF2aWdhdGlvbiByZXF1ZXN0IHRvIHRoZSBjdXJyZW50IFVSTC4gT25lIG9mOlxyXG4gICAgICogLSBgJ2lnbm9yZSdgIDogIFRoZSByb3V0ZXIgaWdub3JlcyB0aGUgcmVxdWVzdC5cclxuICAgICAqIC0gYCdyZWxvYWQnYCA6IFRoZSByb3V0ZXIgcmVsb2FkcyB0aGUgVVJMLiBVc2UgdG8gaW1wbGVtZW50IGEgXCJyZWZyZXNoXCIgZmVhdHVyZS5cclxuICAgICAqL1xyXG4gICAgb25TYW1lVXJsTmF2aWdhdGlvbjogJ3JlbG9hZCcgfCAnaWdub3JlJztcclxuICAgIC8qKlxyXG4gICAgICogSG93IHRvIG1lcmdlIHBhcmFtZXRlcnMsIGRhdGEsIGFuZCByZXNvbHZlZCBkYXRhIGZyb20gcGFyZW50IHRvIGNoaWxkXHJcbiAgICAgKiByb3V0ZXMuIE9uZSBvZjpcclxuICAgICAqXHJcbiAgICAgKiAtIGAnZW1wdHlPbmx5J2AgOiBJbmhlcml0IHBhcmVudCBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZWQgZGF0YVxyXG4gICAgICogZm9yIHBhdGgtbGVzcyBvciBjb21wb25lbnQtbGVzcyByb3V0ZXMuXHJcbiAgICAgKiAtIGAnYWx3YXlzJ2AgOiBJbmhlcml0IHBhcmVudCBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZWQgZGF0YVxyXG4gICAgICogZm9yIGFsbCBjaGlsZCByb3V0ZXMuXHJcbiAgICAgKi9cclxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6ICdlbXB0eU9ubHknIHwgJ2Fsd2F5cyc7XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hlbiB0aGUgcm91dGVyIHVwZGF0ZXMgdGhlIGJyb3dzZXIgVVJMLlxyXG4gICAgICogQnkgZGVmYXVsdCAoYFwiZGVmZXJyZWRcImApLCB1cGRhdGVzIHRoZSBicm93c2VyIFVSTCBhZnRlciBuYXZpZ2F0aW9uIGhhcyBmaW5pc2hlZC5cclxuICAgICAqIFNldCB0byBgJ2VhZ2VyJ2AgdG8gdXBkYXRlIHRoZSBicm93c2VyIFVSTCBhdCB0aGUgYmVnaW5uaW5nIG9mIG5hdmlnYXRpb24uXHJcbiAgICAgKiBZb3UgY2FuIGNob29zZSB0byB1cGRhdGUgZWFybHkgc28gdGhhdCwgaWYgbmF2aWdhdGlvbiBmYWlscyxcclxuICAgICAqIHlvdSBjYW4gc2hvdyBhbiBlcnJvciBtZXNzYWdlIHdpdGggdGhlIFVSTCB0aGF0IGZhaWxlZC5cclxuICAgICAqL1xyXG4gICAgdXJsVXBkYXRlU3RyYXRlZ3k6ICdkZWZlcnJlZCcgfCAnZWFnZXInO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGVzIGEgYnVnIGZpeCB0aGF0IGNvcnJlY3RzIHJlbGF0aXZlIGxpbmsgcmVzb2x1dGlvbiBpbiBjb21wb25lbnRzIHdpdGggZW1wdHkgcGF0aHMuXHJcbiAgICAgKiBAc2VlIGBSb3V0ZXJNb2R1bGVgXHJcbiAgICAgKi9cclxuICAgIHJlbGF0aXZlTGlua1Jlc29sdXRpb246ICdsZWdhY3knIHwgJ2NvcnJlY3RlZCc7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHJvdXRlciBzZXJ2aWNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihyb290Q29tcG9uZW50VHlwZTogVHlwZTxhbnk+IHwgbnVsbCwgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgcm9vdENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogTG9jYXRpb24sIGluamVjdG9yOiBJbmplY3RvciwgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGNvbXBpbGVyOiBDb21waWxlciwgY29uZmlnOiBSb3V0ZXMpO1xyXG4gICAgcHJpdmF0ZSBzZXR1cE5hdmlnYXRpb25zO1xyXG4gICAgcHJpdmF0ZSBnZXRUcmFuc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBzZXRUcmFuc2l0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIHRoZSBsb2NhdGlvbiBjaGFuZ2UgbGlzdGVuZXIgYW5kIHBlcmZvcm1zIHRoZSBpbml0aWFsIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxOYXZpZ2F0aW9uKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgdGhlIGxvY2F0aW9uIGNoYW5nZSBsaXN0ZW5lci5cclxuICAgICAqL1xyXG4gICAgc2V0VXBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKCk6IHZvaWQ7XHJcbiAgICAvKiogVGhlIGN1cnJlbnQgVVJMLiAqL1xyXG4gICAgZ2V0IHVybCgpOiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIGN1cnJlbnQgTmF2aWdhdGlvbiBvYmplY3QgaWYgb25lIGV4aXN0cyAqL1xyXG4gICAgZ2V0Q3VycmVudE5hdmlnYXRpb24oKTogTmF2aWdhdGlvbiB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0cyB0aGUgY29uZmlndXJhdGlvbiB1c2VkIGZvciBuYXZpZ2F0aW9uIGFuZCBnZW5lcmF0aW5nIGxpbmtzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb25maWcgVGhlIHJvdXRlIGFycmF5IGZvciB0aGUgbmV3IGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHJvdXRlci5yZXNldENvbmZpZyhbXHJcbiAgICAgKiAgeyBwYXRoOiAndGVhbS86aWQnLCBjb21wb25lbnQ6IFRlYW1DbXAsIGNoaWxkcmVuOiBbXHJcbiAgICAgKiAgICB7IHBhdGg6ICdzaW1wbGUnLCBjb21wb25lbnQ6IFNpbXBsZUNtcCB9LFxyXG4gICAgICogICAgeyBwYXRoOiAndXNlci86bmFtZScsIGNvbXBvbmVudDogVXNlckNtcCB9XHJcbiAgICAgKiAgXX1cclxuICAgICAqIF0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHJlc2V0Q29uZmlnKGNvbmZpZzogUm91dGVzKTogdm9pZDtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgLyoqIERpc3Bvc2VzIG9mIHRoZSByb3V0ZXIuICovXHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpZXMgYW4gYXJyYXkgb2YgY29tbWFuZHMgdG8gdGhlIGN1cnJlbnQgVVJMIHRyZWUgYW5kIGNyZWF0ZXMgYSBuZXcgVVJMIHRyZWUuXHJcbiAgICAgKlxyXG4gICAgICogV2hlbiBnaXZlbiBhbiBhY3RpdmF0ZWQgcm91dGUsIGFwcGxpZXMgdGhlIGdpdmVuIGNvbW1hbmRzIHN0YXJ0aW5nIGZyb20gdGhlIHJvdXRlLlxyXG4gICAgICogT3RoZXJ3aXNlLCBhcHBsaWVzIHRoZSBnaXZlbiBjb21tYW5kIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbW1hbmRzIEFuIGFycmF5IG9mIGNvbW1hbmRzIHRvIGFwcGx5LlxyXG4gICAgICogQHBhcmFtIG5hdmlnYXRpb25FeHRyYXMgT3B0aW9ucyB0aGF0IGNvbnRyb2wgdGhlIG5hdmlnYXRpb24gc3RyYXRlZ3kuIFRoaXMgZnVuY3Rpb25cclxuICAgICAqIG9ubHkgdXRpbGl6ZXMgcHJvcGVydGllcyBpbiBgTmF2aWdhdGlvbkV4dHJhc2AgdGhhdCB3b3VsZCBjaGFuZ2UgdGhlIHByb3ZpZGVkIFVSTC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBuZXcgVVJMIHRyZWUuXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIGNyZWF0ZSAvdGVhbS8zMy91c2VyLzExXHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy90ZWFtJywgMzMsICd1c2VyJywgMTFdKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBjcmVhdGUgL3RlYW0vMzM7ZXhwYW5kPXRydWUvdXNlci8xMVxyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWycvdGVhbScsIDMzLCB7ZXhwYW5kOiB0cnVlfSwgJ3VzZXInLCAxMV0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIHlvdSBjYW4gY29sbGFwc2Ugc3RhdGljIHNlZ21lbnRzIGxpa2UgdGhpcyAodGhpcyB3b3JrcyBvbmx5IHdpdGggdGhlIGZpcnN0IHBhc3NlZC1pbiB2YWx1ZSk6XHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy90ZWFtLzMzL3VzZXInLCB1c2VySWRdKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBJZiB0aGUgZmlyc3Qgc2VnbWVudCBjYW4gY29udGFpbiBzbGFzaGVzLCBhbmQgeW91IGRvIG5vdCB3YW50IHRoZSByb3V0ZXIgdG8gc3BsaXQgaXQsXHJcbiAgICAgKiAvLyB5b3UgY2FuIGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbe3NlZ21lbnRQYXRoOiAnL29uZS90d28nfV0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIGNyZWF0ZSAvdGVhbS8zMy8odXNlci8xMS8vcmlnaHQ6Y2hhdClcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnL3RlYW0nLCAzMywge291dGxldHM6IHtwcmltYXJ5OiAndXNlci8xMScsIHJpZ2h0OiAnY2hhdCd9fV0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIHJlbW92ZSB0aGUgcmlnaHQgc2Vjb25kYXJ5IG5vZGVcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnL3RlYW0nLCAzMywge291dGxldHM6IHtwcmltYXJ5OiAndXNlci8xMScsIHJpZ2h0OiBudWxsfX1dKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBhc3N1bWluZyB0aGUgY3VycmVudCB1cmwgaXMgYC90ZWFtLzMzL3VzZXIvMTFgIGFuZCB0aGUgcm91dGUgcG9pbnRzIHRvIGB1c2VyLzExYFxyXG4gICAgICpcclxuICAgICAqIC8vIG5hdmlnYXRlIHRvIC90ZWFtLzMzL3VzZXIvMTEvZGV0YWlsc1xyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWydkZXRhaWxzJ10sIHtyZWxhdGl2ZVRvOiByb3V0ZX0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIG5hdmlnYXRlIHRvIC90ZWFtLzMzL3VzZXIvMjJcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnLi4vMjInXSwge3JlbGF0aXZlVG86IHJvdXRlfSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gbmF2aWdhdGUgdG8gL3RlYW0vNDQvdXNlci8yMlxyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWycuLi8uLi90ZWFtLzQ0L3VzZXIvMjInXSwge3JlbGF0aXZlVG86IHJvdXRlfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgY3JlYXRlVXJsVHJlZShjb21tYW5kczogYW55W10sIG5hdmlnYXRpb25FeHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIFVSTCwgd2hpY2ggbXVzdCBiZSBhYnNvbHV0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIEFuIGFic29sdXRlIFVSTC4gVGhlIGZ1bmN0aW9uIGRvZXMgbm90IGFwcGx5IGFueSBkZWx0YSB0byB0aGUgY3VycmVudCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gZXh0cmFzIEFuIG9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgdGhhdCBtb2RpZnkgdGhlIG5hdmlnYXRpb24gc3RyYXRlZ3kuXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gaWdub3JlcyBhbnkgcHJvcGVydGllcyBpbiB0aGUgYE5hdmlnYXRpb25FeHRyYXNgIHRoYXQgd291bGQgY2hhbmdlIHRoZVxyXG4gICAgICogcHJvdmlkZWQgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvICd0cnVlJyB3aGVuIG5hdmlnYXRpb24gc3VjY2VlZHMsXHJcbiAgICAgKiB0byAnZmFsc2UnIHdoZW4gbmF2aWdhdGlvbiBmYWlscywgb3IgaXMgcmVqZWN0ZWQgb24gZXJyb3IuXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RlYW0vMzMvdXNlci8xMVwiKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBOYXZpZ2F0ZSB3aXRob3V0IHVwZGF0aW5nIHRoZSBVUkxcclxuICAgICAqIHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RlYW0vMzMvdXNlci8xMVwiLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyB8IFVybFRyZWUsIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBOYXZpZ2F0ZSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYXJyYXkgb2YgY29tbWFuZHMgYW5kIGEgc3RhcnRpbmcgcG9pbnQuXHJcbiAgICAgKiBJZiBubyBzdGFydGluZyByb3V0ZSBpcyBwcm92aWRlZCwgdGhlIG5hdmlnYXRpb24gaXMgYWJzb2x1dGUuXHJcbiAgICAgKlxyXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdDpcclxuICAgICAqIC0gcmVzb2x2ZXMgdG8gJ3RydWUnIHdoZW4gbmF2aWdhdGlvbiBzdWNjZWVkcyxcclxuICAgICAqIC0gcmVzb2x2ZXMgdG8gJ2ZhbHNlJyB3aGVuIG5hdmlnYXRpb24gZmFpbHMsXHJcbiAgICAgKiAtIGlzIHJlamVjdGVkIHdoZW4gYW4gZXJyb3IgaGFwcGVucy5cclxuICAgICAqXHJcbiAgICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogcm91dGVyLm5hdmlnYXRlKFsndGVhbScsIDMzLCAndXNlcicsIDExXSwge3JlbGF0aXZlVG86IHJvdXRlfSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gTmF2aWdhdGUgd2l0aG91dCB1cGRhdGluZyB0aGUgVVJMXHJcbiAgICAgKiByb3V0ZXIubmF2aWdhdGUoWyd0ZWFtJywgMzMsICd1c2VyJywgMTFdLCB7cmVsYXRpdmVUbzogcm91dGUsIHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZX0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGZpcnN0IHBhcmFtZXRlciBvZiBgbmF2aWdhdGUoKWAgaXMgYSBkZWx0YSB0byBiZSBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IFVSTFxyXG4gICAgICogb3IgdGhlIG9uZSBwcm92aWRlZCBpbiB0aGUgYHJlbGF0aXZlVG9gIHByb3BlcnR5IG9mIHRoZSBzZWNvbmQgcGFyYW1ldGVyICh0aGVcclxuICAgICAqIGBOYXZpZ2F0aW9uRXh0cmFzYCkuXHJcbiAgICAgKlxyXG4gICAgICogSW4gb3JkZXIgdG8gYWZmZWN0IHRoaXMgYnJvd3NlcidzIGBoaXN0b3J5LnN0YXRlYCBlbnRyeSwgdGhlIGBzdGF0ZWBcclxuICAgICAqIHBhcmFtZXRlciBjYW4gYmUgcGFzc2VkLiBUaGlzIG11c3QgYmUgYW4gb2JqZWN0IGJlY2F1c2UgdGhlIHJvdXRlclxyXG4gICAgICogd2lsbCBhZGQgdGhlIGBuYXZpZ2F0aW9uSWRgIHByb3BlcnR5IHRvIHRoaXMgb2JqZWN0IGJlZm9yZSBjcmVhdGluZ1xyXG4gICAgICogdGhlIG5ldyBoaXN0b3J5IGl0ZW0uXHJcbiAgICAgKi9cclxuICAgIG5hdmlnYXRlKGNvbW1hbmRzOiBhbnlbXSwgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICAvKiogU2VyaWFsaXplcyBhIGBVcmxUcmVlYCBpbnRvIGEgc3RyaW5nICovXHJcbiAgICBzZXJpYWxpemVVcmwodXJsOiBVcmxUcmVlKTogc3RyaW5nO1xyXG4gICAgLyoqIFBhcnNlcyBhIHN0cmluZyBpbnRvIGEgYFVybFRyZWVgICovXHJcbiAgICBwYXJzZVVybCh1cmw6IHN0cmluZyk6IFVybFRyZWU7XHJcbiAgICAvKiogUmV0dXJucyB3aGV0aGVyIHRoZSB1cmwgaXMgYWN0aXZhdGVkICovXHJcbiAgICBpc0FjdGl2ZSh1cmw6IHN0cmluZyB8IFVybFRyZWUsIGV4YWN0OiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcmVtb3ZlRW1wdHlQcm9wcztcclxuICAgIHByaXZhdGUgcHJvY2Vzc05hdmlnYXRpb25zO1xyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZU5hdmlnYXRpb247XHJcbiAgICBwcml2YXRlIHNldEJyb3dzZXJVcmw7XHJcbiAgICBwcml2YXRlIHJlc2V0U3RhdGVBbmRVcmw7XHJcbiAgICBwcml2YXRlIHJlc2V0VXJsVG9DdXJyZW50VXJsVHJlZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgW0RJIHRva2VuXShndWlkZS9nbG9zc2FyeS8jZGktdG9rZW4pIGZvciB0aGUgcm91dGVyIHNlcnZpY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFJPVVRFUl9DT05GSUdVUkFUSU9OOiBJbmplY3Rpb25Ub2tlbjxFeHRyYU9wdGlvbnM+O1xyXG5cclxuLyoqXHJcbiAqIEEgW0RJIHRva2VuXShndWlkZS9nbG9zc2FyeS8jZGktdG9rZW4pIGZvciB0aGUgcm91dGVyIGluaXRpYWxpemVyIHRoYXRcclxuICogaXMgY2FsbGVkIGFmdGVyIHRoZSBhcHAgaXMgYm9vdHN0cmFwcGVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBST1VURVJfSU5JVElBTElaRVI6IEluamVjdGlvblRva2VuPChjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZD47XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFByb3ZpZGVzIGEgd2F5IHRvIGN1c3RvbWl6ZSB3aGVuIGFjdGl2YXRlZCByb3V0ZXMgZ2V0IHJldXNlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgUm91dGVSZXVzZVN0cmF0ZWd5IHtcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIHRoaXMgcm91dGUgKGFuZCBpdHMgc3VidHJlZSkgc2hvdWxkIGJlIGRldGFjaGVkIHRvIGJlIHJldXNlZCBsYXRlciAqL1xyXG4gICAgYWJzdHJhY3Qgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBkZXRhY2hlZCByb3V0ZS5cclxuICAgICAqXHJcbiAgICAgKiBTdG9yaW5nIGEgYG51bGxgIHZhbHVlIHNob3VsZCBlcmFzZSB0aGUgcHJldmlvdXNseSBzdG9yZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHN0b3JlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBoYW5kbGU6IERldGFjaGVkUm91dGVIYW5kbGUgfCBudWxsKTogdm9pZDtcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIHRoaXMgcm91dGUgKGFuZCBpdHMgc3VidHJlZSkgc2hvdWxkIGJlIHJlYXR0YWNoZWQgKi9cclxuICAgIGFic3RyYWN0IHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW47XHJcbiAgICAvKiogUmV0cmlldmVzIHRoZSBwcmV2aW91c2x5IHN0b3JlZCByb3V0ZSAqL1xyXG4gICAgYWJzdHJhY3QgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBEZXRhY2hlZFJvdXRlSGFuZGxlIHwgbnVsbDtcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIGEgcm91dGUgc2hvdWxkIGJlIHJldXNlZCAqL1xyXG4gICAgYWJzdHJhY3Qgc2hvdWxkUmV1c2VSb3V0ZShmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBmb3IgZXZlbnRzIHRoZSByb3V0ZXIgZ29lcyB0aHJvdWdoLCBhcyBvcHBvc2VkIHRvIGV2ZW50cyB0aWVkIHRvIGEgc3BlY2lmaWNcclxuICogcm91dGUuIEZpcmVkIG9uZSB0aW1lIGZvciBhbnkgZ2l2ZW4gbmF2aWdhdGlvbi5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogYGBgdHNcclxuICogY2xhc3MgTXlTZXJ2aWNlIHtcclxuICogICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIGxvZ2dlcjogTG9nZ2VyKSB7XHJcbiAqICAgICByb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAqICAgICAgICBmaWx0ZXIoKGU6IEV2ZW50KTogZSBpcyBSb3V0ZXJFdmVudCA9PiBlIGluc3RhbmNlb2YgUm91dGVyRXZlbnQpXHJcbiAqICAgICApLnN1YnNjcmliZSgoZTogUm91dGVyRXZlbnQpID0+IHtcclxuICogICAgICAgbG9nZ2VyLmxvZyhlLmlkLCBlLnVybCk7XHJcbiAqICAgICB9KTtcclxuICogICB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBzZWUgYEV2ZW50YFxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQSB1bmlxdWUgSUQgdGhhdCB0aGUgcm91dGVyIGFzc2lnbnMgdG8gZXZlcnkgcm91dGVyIG5hdmlnYXRpb24uICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBVUkwgdGhhdCBpcyB0aGUgZGVzdGluYXRpb24gZm9yIHRoaXMgbmF2aWdhdGlvbi4gKi9cclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQSB1bmlxdWUgSUQgdGhhdCB0aGUgcm91dGVyIGFzc2lnbnMgdG8gZXZlcnkgcm91dGVyIG5hdmlnYXRpb24uICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBUaGUgVVJMIHRoYXQgaXMgdGhlIGRlc3RpbmF0aW9uIGZvciB0aGlzIG5hdmlnYXRpb24uICovXHJcbiAgICB1cmw6IHN0cmluZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTGV0cyB5b3UgbGluayB0byBzcGVjaWZpYyByb3V0ZXMgaW4geW91ciBhcHAuXHJcbiAqXHJcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmcgcm91dGUgY29uZmlndXJhdGlvbjpcclxuICogYFt7IHBhdGg6ICd1c2VyLzpuYW1lJywgY29tcG9uZW50OiBVc2VyQ21wIH1dYC5cclxuICogV2hlbiBsaW5raW5nIHRvIHRoaXMgYHVzZXIvOm5hbWVgIHJvdXRlLCB5b3UgdXNlIHRoZSBgUm91dGVyTGlua2AgZGlyZWN0aXZlLlxyXG4gKlxyXG4gKiBJZiB0aGUgbGluayBpcyBzdGF0aWMsIHlvdSBjYW4gdXNlIHRoZSBkaXJlY3RpdmUgYXMgZm9sbG93czpcclxuICogYDxhIHJvdXRlckxpbms9XCIvdXNlci9ib2JcIj5saW5rIHRvIHVzZXIgY29tcG9uZW50PC9hPmBcclxuICpcclxuICogSWYgeW91IHVzZSBkeW5hbWljIHZhbHVlcyB0byBnZW5lcmF0ZSB0aGUgbGluaywgeW91IGNhbiBwYXNzIGFuIGFycmF5IG9mIHBhdGhcclxuICogc2VnbWVudHMsIGZvbGxvd2VkIGJ5IHRoZSBwYXJhbXMgZm9yIGVhY2ggc2VnbWVudC5cclxuICpcclxuICogRm9yIGluc3RhbmNlIGBbJy90ZWFtJywgdGVhbUlkLCAndXNlcicsIHVzZXJOYW1lLCB7ZGV0YWlsczogdHJ1ZX1dYFxyXG4gKiBtZWFucyB0aGF0IHdlIHdhbnQgdG8gZ2VuZXJhdGUgYSBsaW5rIHRvIGAvdGVhbS8xMS91c2VyL2JvYjtkZXRhaWxzPXRydWVgLlxyXG4gKlxyXG4gKiBNdWx0aXBsZSBzdGF0aWMgc2VnbWVudHMgY2FuIGJlIG1lcmdlZCBpbnRvIG9uZVxyXG4gKiAoZS5nLiwgYFsnL3RlYW0vMTEvdXNlcicsIHVzZXJOYW1lLCB7ZGV0YWlsczogdHJ1ZX1dYCkuXHJcbiAqXHJcbiAqIFRoZSBmaXJzdCBzZWdtZW50IG5hbWUgY2FuIGJlIHByZXBlbmRlZCB3aXRoIGAvYCwgYC4vYCwgb3IgYC4uL2A6XHJcbiAqICogSWYgdGhlIGZpcnN0IHNlZ21lbnQgYmVnaW5zIHdpdGggYC9gLCB0aGUgcm91dGVyIHdpbGwgbG9vayB1cCB0aGUgcm91dGUgZnJvbSB0aGUgcm9vdCBvZiB0aGVcclxuICogICBhcHAuXHJcbiAqICogSWYgdGhlIGZpcnN0IHNlZ21lbnQgYmVnaW5zIHdpdGggYC4vYCwgb3IgZG9lc24ndCBiZWdpbiB3aXRoIGEgc2xhc2gsIHRoZSByb3V0ZXIgd2lsbFxyXG4gKiAgIGluc3RlYWQgbG9vayBpbiB0aGUgY2hpbGRyZW4gb2YgdGhlIGN1cnJlbnQgYWN0aXZhdGVkIHJvdXRlLlxyXG4gKiAqIEFuZCBpZiB0aGUgZmlyc3Qgc2VnbWVudCBiZWdpbnMgd2l0aCBgLi4vYCwgdGhlIHJvdXRlciB3aWxsIGdvIHVwIG9uZSBsZXZlbC5cclxuICpcclxuICogWW91IGNhbiBzZXQgcXVlcnkgcGFyYW1zIGFuZCBmcmFnbWVudCBhcyBmb2xsb3dzOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgW3JvdXRlckxpbmtdPVwiWycvdXNlci9ib2InXVwiIFtxdWVyeVBhcmFtc109XCJ7ZGVidWc6IHRydWV9XCIgZnJhZ21lbnQ9XCJlZHVjYXRpb25cIj5cclxuICogICBsaW5rIHRvIHVzZXIgY29tcG9uZW50XHJcbiAqIDwvYT5cclxuICogYGBgXHJcbiAqIFJvdXRlckxpbmsgd2lsbCB1c2UgdGhlc2UgdG8gZ2VuZXJhdGUgdGhpcyBsaW5rOiBgL3VzZXIvYm9iI2VkdWNhdGlvbj9kZWJ1Zz10cnVlYC5cclxuICpcclxuICogKERlcHJlY2F0ZWQgaW4gdjQuMC4wIHVzZSBgcXVlcnlQYXJhbXNIYW5kbGluZ2AgaW5zdGVhZCkgWW91IGNhbiBhbHNvIHRlbGwgdGhlXHJcbiAqIGRpcmVjdGl2ZSB0byBwcmVzZXJ2ZSB0aGUgY3VycmVudCBxdWVyeSBwYXJhbXMgYW5kIGZyYWdtZW50OlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgW3JvdXRlckxpbmtdPVwiWycvdXNlci9ib2InXVwiIHByZXNlcnZlUXVlcnlQYXJhbXMgcHJlc2VydmVGcmFnbWVudD5cclxuICogICBsaW5rIHRvIHVzZXIgY29tcG9uZW50XHJcbiAqIDwvYT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gdGVsbCB0aGUgZGlyZWN0aXZlIGhvdyB0byBoYW5kbGUgcXVlcnlQYXJhbXMuIEF2YWlsYWJsZSBvcHRpb25zIGFyZTpcclxuICogIC0gYCdtZXJnZSdgOiBtZXJnZSB0aGUgcXVlcnlQYXJhbXMgaW50byB0aGUgY3VycmVudCBxdWVyeVBhcmFtc1xyXG4gKiAgLSBgJ3ByZXNlcnZlJ2A6IHByZXNlcnZlIHRoZSBjdXJyZW50IHF1ZXJ5UGFyYW1zXHJcbiAqICAtIGRlZmF1bHQvYCcnYDogdXNlIHRoZSBxdWVyeVBhcmFtcyBvbmx5XHJcbiAqXHJcbiAqIFNhbWUgb3B0aW9ucyBmb3Ige0BsaW5rIE5hdmlnYXRpb25FeHRyYXMjcXVlcnlQYXJhbXNIYW5kbGluZ1xyXG4gKiBOYXZpZ2F0aW9uRXh0cmFzI3F1ZXJ5UGFyYW1zSGFuZGxpbmd9LlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgW3JvdXRlckxpbmtdPVwiWycvdXNlci9ib2InXVwiIFtxdWVyeVBhcmFtc109XCJ7ZGVidWc6IHRydWV9XCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cIm1lcmdlXCI+XHJcbiAqICAgbGluayB0byB1c2VyIGNvbXBvbmVudFxyXG4gKiA8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIHByb3ZpZGUgYSBgc3RhdGVgIHZhbHVlIHRvIGJlIHBlcnNpc3RlZCB0byB0aGUgYnJvd3NlcidzIEhpc3Rvcnkuc3RhdGVcclxuICogcHJvcGVydHkgKFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeSNQcm9wZXJ0aWVzKS4gSXQnc1xyXG4gKiB1c2VkIGFzIGZvbGxvd3M6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy91c2VyL2JvYiddXCIgW3N0YXRlXT1cInt0cmFjaW5nSWQ6IDEyM31cIj5cclxuICogICBsaW5rIHRvIHVzZXIgY29tcG9uZW50XHJcbiAqIDwvYT5cclxuICogYGBgXHJcbiAqXHJcbiAqIEFuZCBsYXRlciB0aGUgdmFsdWUgY2FuIGJlIHJlYWQgZnJvbSB0aGUgcm91dGVyIHRocm91Z2ggYHJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbmAuXHJcbiAqIEZvciBleGFtcGxlLCB0byBjYXB0dXJlIHRoZSBgdHJhY2luZ0lkYCBhYm92ZSBkdXJpbmcgdGhlIGBOYXZpZ2F0aW9uU3RhcnRgIGV2ZW50OlxyXG4gKlxyXG4gKiBgYGBcclxuICogLy8gR2V0IE5hdmlnYXRpb25TdGFydCBldmVudHNcclxuICogcm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpKS5zdWJzY3JpYmUoZSA9PiB7XHJcbiAqICAgY29uc3QgbmF2aWdhdGlvbiA9IHJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xyXG4gKiAgIHRyYWNpbmdTZXJ2aWNlLnRyYWNlKHtpZDogbmF2aWdhdGlvbi5leHRyYXMuc3RhdGUudHJhY2luZ0lkfSk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIHJvdXRlciBsaW5rIGRpcmVjdGl2ZSBhbHdheXMgdHJlYXRzIHRoZSBwcm92aWRlZCBpbnB1dCBhcyBhIGRlbHRhIHRvIHRoZSBjdXJyZW50IHVybC5cclxuICpcclxuICogRm9yIGluc3RhbmNlLCBpZiB0aGUgY3VycmVudCB1cmwgaXMgYC91c2VyLyhib3gvL2F1eDp0ZWFtKWAuXHJcbiAqXHJcbiAqIFRoZW4gdGhlIGZvbGxvd2luZyBsaW5rIGA8YSBbcm91dGVyTGlua109XCJbJy91c2VyL2ppbSddXCI+SmltPC9hPmAgd2lsbCBnZW5lcmF0ZSB0aGUgbGlua1xyXG4gKiBgL3VzZXIvKGppbS8vYXV4OnRlYW0pYC5cclxuICpcclxuICogU2VlIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBjcmVhdGVVcmxUcmVlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICpcclxuICogQG5nTW9kdWxlIFJvdXRlck1vZHVsZVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJMaW5rIHtcclxuICAgIHByaXZhdGUgcm91dGVyO1xyXG4gICAgcHJpdmF0ZSByb3V0ZTtcclxuICAgIC8qKlxyXG4gICAgICogUGFzc2VkIHRvIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX0gYXMgcGFydCBvZiB0aGUgYE5hdmlnYXRpb25FeHRyYXNgLlxyXG4gICAgICogQHNlZSB7QGxpbmsgTmF2aWdhdGlvbkV4dHJhcyNxdWVyeVBhcmFtcyBOYXZpZ2F0aW9uRXh0cmFzI3F1ZXJ5UGFyYW1zfVxyXG4gICAgICogQHNlZSB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFBhc3NlZCB0byB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9IGFzIHBhcnQgb2YgdGhlIGBOYXZpZ2F0aW9uRXh0cmFzYC5cclxuICAgICAqIEBzZWUge0BsaW5rIE5hdmlnYXRpb25FeHRyYXMjZnJhZ21lbnQgTmF2aWdhdGlvbkV4dHJhcyNmcmFnbWVudH1cclxuICAgICAqIEBzZWUge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfVxyXG4gICAgICovXHJcbiAgICBmcmFnbWVudDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzZWQgdG8ge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfSBhcyBwYXJ0IG9mIHRoZSBgTmF2aWdhdGlvbkV4dHJhc2AuXHJcbiAgICAgKiBAc2VlIHtAbGluayBOYXZpZ2F0aW9uRXh0cmFzI3F1ZXJ5UGFyYW1zSGFuZGxpbmcgTmF2aWdhdGlvbkV4dHJhcyNxdWVyeVBhcmFtc0hhbmRsaW5nfVxyXG4gICAgICogQHNlZSB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6IFF1ZXJ5UGFyYW1zSGFuZGxpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFBhc3NlZCB0byB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9IGFzIHBhcnQgb2YgdGhlIGBOYXZpZ2F0aW9uRXh0cmFzYC5cclxuICAgICAqIEBzZWUge0BsaW5rIE5hdmlnYXRpb25FeHRyYXMjcHJlc2VydmVGcmFnbWVudCBOYXZpZ2F0aW9uRXh0cmFzI3ByZXNlcnZlRnJhZ21lbnR9XHJcbiAgICAgKiBAc2VlIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX1cclxuICAgICAqL1xyXG4gICAgcHJlc2VydmVGcmFnbWVudDogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogUGFzc2VkIHRvIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX0gYXMgcGFydCBvZiB0aGUgYE5hdmlnYXRpb25FeHRyYXNgLlxyXG4gICAgICogQHNlZSB7QGxpbmsgTmF2aWdhdGlvbkV4dHJhcyNza2lwTG9jYXRpb25DaGFuZ2UgTmF2aWdhdGlvbkV4dHJhcyNza2lwTG9jYXRpb25DaGFuZ2V9XHJcbiAgICAgKiBAc2VlIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX1cclxuICAgICAqL1xyXG4gICAgc2tpcExvY2F0aW9uQ2hhbmdlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzZWQgdG8ge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfSBhcyBwYXJ0IG9mIHRoZSBgTmF2aWdhdGlvbkV4dHJhc2AuXHJcbiAgICAgKiBAc2VlIHtAbGluayBOYXZpZ2F0aW9uRXh0cmFzI3JlcGxhY2VVcmwgTmF2aWdhdGlvbkV4dHJhcyNyZXBsYWNlVXJsfVxyXG4gICAgICogQHNlZSB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9XHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VVcmw6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFBhc3NlZCB0byB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9IGFzIHBhcnQgb2YgdGhlIGBOYXZpZ2F0aW9uRXh0cmFzYC5cclxuICAgICAqIEBzZWUge0BsaW5rIE5hdmlnYXRpb25FeHRyYXMjc3RhdGUgTmF2aWdhdGlvbkV4dHJhcyNzdGF0ZX1cclxuICAgICAqIEBzZWUge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfVxyXG4gICAgICovXHJcbiAgICBzdGF0ZT86IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY29tbWFuZHM7XHJcbiAgICBwcml2YXRlIHByZXNlcnZlO1xyXG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdGFiSW5kZXg6IHN0cmluZywgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWw6IEVsZW1lbnRSZWYpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gY29tbWFuZHMgQW4gYXJyYXkgb2YgY29tbWFuZHMgdG8gcGFzcyB0byB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWVcclxuICAgICAqICAgICBSb3V0ZXIjY3JlYXRlVXJsVHJlZX0uXHJcbiAgICAgKiAgIC0gKiphcnJheSoqOiBjb21tYW5kcyB0byBwYXNzIHRvIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX0uXHJcbiAgICAgKiAgIC0gKipzdHJpbmcqKjogc2hvcnRoYW5kIGZvciBhcnJheSBvZiBjb21tYW5kcyB3aXRoIGp1c3QgdGhlIHN0cmluZywgaS5lLiBgWycvcm91dGUnXWBcclxuICAgICAqICAgLSAqKm51bGx8dW5kZWZpbmVkKio6IHNob3J0aGFuZCBmb3IgYW4gZW1wdHkgYXJyYXkgb2YgY29tbWFuZHMsIGkuZS4gYFtdYFxyXG4gICAgICogQHNlZSB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9XHJcbiAgICAgKi9cclxuICAgIHNldCByb3V0ZXJMaW5rKGNvbW1hbmRzOiBhbnlbXSB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBBcyBvZiBBbmd1bGFyIHY0LjAgdXNlIGBxdWVyeVBhcmFtc0hhbmRsaW5nYCBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBzZXQgcHJlc2VydmVRdWVyeVBhcmFtcyh2YWx1ZTogYm9vbGVhbik7XHJcbiAgICBvbkNsaWNrKCk6IGJvb2xlYW47XHJcbiAgICBnZXQgdXJsVHJlZSgpOiBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIExldHMgeW91IGFkZCBhIENTUyBjbGFzcyB0byBhbiBlbGVtZW50IHdoZW4gdGhlIGxpbmsncyByb3V0ZSBiZWNvbWVzIGFjdGl2ZS5cclxuICpcclxuICogVGhpcyBkaXJlY3RpdmUgbGV0cyB5b3UgYWRkIGEgQ1NTIGNsYXNzIHRvIGFuIGVsZW1lbnQgd2hlbiB0aGUgbGluaydzIHJvdXRlXHJcbiAqIGJlY29tZXMgYWN0aXZlLlxyXG4gKlxyXG4gKiBDb25zaWRlciB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCI+Qm9iPC9hPlxyXG4gKiBgYGBcclxuICpcclxuICogV2hlbiB0aGUgdXJsIGlzIGVpdGhlciAnL3VzZXInIG9yICcvdXNlci9ib2InLCB0aGUgYWN0aXZlLWxpbmsgY2xhc3Mgd2lsbFxyXG4gKiBiZSBhZGRlZCB0byB0aGUgYGFgIHRhZy4gSWYgdGhlIHVybCBjaGFuZ2VzLCB0aGUgY2xhc3Mgd2lsbCBiZSByZW1vdmVkLlxyXG4gKlxyXG4gKiBZb3UgY2FuIHNldCBtb3JlIHRoYW4gb25lIGNsYXNzLCBhcyBmb2xsb3dzOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmU9XCJjbGFzczEgY2xhc3MyXCI+Qm9iPC9hPlxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgW3JvdXRlckxpbmtBY3RpdmVdPVwiWydjbGFzczEnLCAnY2xhc3MyJ11cIj5Cb2I8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGNvbmZpZ3VyZSBSb3V0ZXJMaW5rQWN0aXZlIGJ5IHBhc3NpbmcgYGV4YWN0OiB0cnVlYC4gVGhpcyB3aWxsIGFkZCB0aGUgY2xhc3Nlc1xyXG4gKiBvbmx5IHdoZW4gdGhlIHVybCBtYXRjaGVzIHRoZSBsaW5rIGV4YWN0bHkuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDpcclxuICogdHJ1ZX1cIj5Cb2I8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGFzc2lnbiB0aGUgUm91dGVyTGlua0FjdGl2ZSBpbnN0YW5jZSB0byBhIHRlbXBsYXRlIHZhcmlhYmxlIGFuZCBkaXJlY3RseSBjaGVja1xyXG4gKiB0aGUgYGlzQWN0aXZlYCBzdGF0dXMuXHJcbiAqIGBgYFxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZSAjcmxhPVwicm91dGVyTGlua0FjdGl2ZVwiPlxyXG4gKiAgIEJvYiB7eyBybGEuaXNBY3RpdmUgPyAnKGFscmVhZHkgb3BlbiknIDogJyd9fVxyXG4gKiA8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGaW5hbGx5LCB5b3UgY2FuIGFwcGx5IHRoZSBSb3V0ZXJMaW5rQWN0aXZlIGRpcmVjdGl2ZSB0byBhbiBhbmNlc3RvciBvZiBhIFJvdXRlckxpbmsuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8ZGl2IHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7ZXhhY3Q6IHRydWV9XCI+XHJcbiAqICAgPGEgcm91dGVyTGluaz1cIi91c2VyL2ppbVwiPkppbTwvYT5cclxuICogICA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCI+Qm9iPC9hPlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoaXMgd2lsbCBzZXQgdGhlIGFjdGl2ZS1saW5rIGNsYXNzIG9uIHRoZSBkaXYgdGFnIGlmIHRoZSB1cmwgaXMgZWl0aGVyICcvdXNlci9qaW0nIG9yXHJcbiAqICcvdXNlci9ib2InLlxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgUm91dGVyTW9kdWxlXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlckxpbmtBY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjtcclxuICAgIHByaXZhdGUgZWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIGxpbms/O1xyXG4gICAgcHJpdmF0ZSBsaW5rV2l0aEhyZWY/O1xyXG4gICAgbGlua3M6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rPjtcclxuICAgIGxpbmtzV2l0aEhyZWZzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcclxuICAgIHByaXZhdGUgY2xhc3NlcztcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xyXG4gICAgcmVhZG9ubHkgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICByb3V0ZXJMaW5rQWN0aXZlT3B0aW9uczoge1xyXG4gICAgICAgIGV4YWN0OiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBsaW5rPzogUm91dGVyTGluayB8IHVuZGVmaW5lZCwgbGlua1dpdGhIcmVmPzogUm91dGVyTGlua1dpdGhIcmVmIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgc2V0IHJvdXRlckxpbmtBY3RpdmUoZGF0YTogc3RyaW5nW10gfCBzdHJpbmcpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGU7XHJcbiAgICBwcml2YXRlIGlzTGlua0FjdGl2ZTtcclxuICAgIHByaXZhdGUgaGFzQWN0aXZlTGlua3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTGV0cyB5b3UgbGluayB0byBzcGVjaWZpYyByb3V0ZXMgaW4geW91ciBhcHAuXHJcbiAqXHJcbiAqIFNlZSBgUm91dGVyTGlua2AgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBSb3V0ZXJNb2R1bGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyTGlua1dpdGhIcmVmIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIHJvdXRlO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5O1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFBhc3NlZCB0byB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9IGFzIHBhcnQgb2YgdGhlIGBOYXZpZ2F0aW9uRXh0cmFzYC5cclxuICAgICAqIEBzZWUge0BsaW5rIE5hdmlnYXRpb25FeHRyYXMjcXVlcnlQYXJhbXMgTmF2aWdhdGlvbkV4dHJhcyNxdWVyeVBhcmFtc31cclxuICAgICAqIEBzZWUge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfVxyXG4gICAgICovXHJcbiAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzZWQgdG8ge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfSBhcyBwYXJ0IG9mIHRoZSBgTmF2aWdhdGlvbkV4dHJhc2AuXHJcbiAgICAgKiBAc2VlIHtAbGluayBOYXZpZ2F0aW9uRXh0cmFzI2ZyYWdtZW50IE5hdmlnYXRpb25FeHRyYXMjZnJhZ21lbnR9XHJcbiAgICAgKiBAc2VlIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX1cclxuICAgICAqL1xyXG4gICAgZnJhZ21lbnQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogUGFzc2VkIHRvIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX0gYXMgcGFydCBvZiB0aGUgYE5hdmlnYXRpb25FeHRyYXNgLlxyXG4gICAgICogQHNlZSB7QGxpbmsgTmF2aWdhdGlvbkV4dHJhcyNxdWVyeVBhcmFtc0hhbmRsaW5nIE5hdmlnYXRpb25FeHRyYXMjcXVlcnlQYXJhbXNIYW5kbGluZ31cclxuICAgICAqIEBzZWUge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfVxyXG4gICAgICovXHJcbiAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiBRdWVyeVBhcmFtc0hhbmRsaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzZWQgdG8ge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfSBhcyBwYXJ0IG9mIHRoZSBgTmF2aWdhdGlvbkV4dHJhc2AuXHJcbiAgICAgKiBAc2VlIHtAbGluayBOYXZpZ2F0aW9uRXh0cmFzI3ByZXNlcnZlRnJhZ21lbnQgTmF2aWdhdGlvbkV4dHJhcyNwcmVzZXJ2ZUZyYWdtZW50fVxyXG4gICAgICogQHNlZSB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9XHJcbiAgICAgKi9cclxuICAgIHByZXNlcnZlRnJhZ21lbnQ6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFBhc3NlZCB0byB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9IGFzIHBhcnQgb2YgdGhlIGBOYXZpZ2F0aW9uRXh0cmFzYC5cclxuICAgICAqIEBzZWUge0BsaW5rIE5hdmlnYXRpb25FeHRyYXMjc2tpcExvY2F0aW9uQ2hhbmdlIE5hdmlnYXRpb25FeHRyYXMjc2tpcExvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICogQHNlZSB7QGxpbmsgUm91dGVyI2NyZWF0ZVVybFRyZWUgUm91dGVyI2NyZWF0ZVVybFRyZWV9XHJcbiAgICAgKi9cclxuICAgIHNraXBMb2NhdGlvbkNoYW5nZTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogUGFzc2VkIHRvIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX0gYXMgcGFydCBvZiB0aGUgYE5hdmlnYXRpb25FeHRyYXNgLlxyXG4gICAgICogQHNlZSB7QGxpbmsgTmF2aWdhdGlvbkV4dHJhcyNyZXBsYWNlVXJsIE5hdmlnYXRpb25FeHRyYXMjcmVwbGFjZVVybH1cclxuICAgICAqIEBzZWUge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfVxyXG4gICAgICovXHJcbiAgICByZXBsYWNlVXJsOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzZWQgdG8ge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfSBhcyBwYXJ0IG9mIHRoZSBgTmF2aWdhdGlvbkV4dHJhc2AuXHJcbiAgICAgKiBAc2VlIHtAbGluayBOYXZpZ2F0aW9uRXh0cmFzI3N0YXRlIE5hdmlnYXRpb25FeHRyYXMjc3RhdGV9XHJcbiAgICAgKiBAc2VlIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX1cclxuICAgICAqL1xyXG4gICAgc3RhdGU/OiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGNvbW1hbmRzO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIHByZXNlcnZlO1xyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSk7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjb21tYW5kcyBBbiBhcnJheSBvZiBjb21tYW5kcyB0byBwYXNzIHRvIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZVxyXG4gICAgICogICAgIFJvdXRlciNjcmVhdGVVcmxUcmVlfS5cclxuICAgICAqICAgLSAqKmFycmF5Kio6IGNvbW1hbmRzIHRvIHBhc3MgdG8ge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIFJvdXRlciNjcmVhdGVVcmxUcmVlfS5cclxuICAgICAqICAgLSAqKnN0cmluZyoqOiBzaG9ydGhhbmQgZm9yIGFycmF5IG9mIGNvbW1hbmRzIHdpdGgganVzdCB0aGUgc3RyaW5nLCBpLmUuIGBbJy9yb3V0ZSddYFxyXG4gICAgICogICAtICoqbnVsbHx1bmRlZmluZWQqKjogc2hvcnRoYW5kIGZvciBhbiBlbXB0eSBhcnJheSBvZiBjb21tYW5kcywgaS5lLiBgW11gXHJcbiAgICAgKiBAc2VlIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBSb3V0ZXIjY3JlYXRlVXJsVHJlZX1cclxuICAgICAqL1xyXG4gICAgc2V0IHJvdXRlckxpbmsoY29tbWFuZHM6IGFueVtdIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIEFzIG9mIEFuZ3VsYXIgdjQuMCB1c2UgYHF1ZXJ5UGFyYW1zSGFuZGxpbmdgIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIHNldCBwcmVzZXJ2ZVF1ZXJ5UGFyYW1zKHZhbHVlOiBib29sZWFuKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHt9KTogYW55O1xyXG4gICAgbmdPbkRlc3Ryb3koKTogYW55O1xyXG4gICAgb25DbGljayhidXR0b246IG51bWJlciwgY3RybEtleTogYm9vbGVhbiwgbWV0YUtleTogYm9vbGVhbiwgc2hpZnRLZXk6IGJvb2xlYW4pOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUYXJnZXRVcmxBbmRIcmVmO1xyXG4gICAgZ2V0IHVybFRyZWUoKTogVXJsVHJlZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFJvdXRlck1vZHVsZSBjYW4gYmUgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXM6IG9uY2UgcGVyIGxhemlseS1sb2FkZWQgYnVuZGxlLlxyXG4gKiBTaW5jZSB0aGUgcm91dGVyIGRlYWxzIHdpdGggYSBnbG9iYWwgc2hhcmVkIHJlc291cmNlLS1sb2NhdGlvbiwgd2UgY2Fubm90IGhhdmVcclxuICogbW9yZSB0aGFuIG9uZSByb3V0ZXIgc2VydmljZSBhY3RpdmUuXHJcbiAqXHJcbiAqIFRoYXQgaXMgd2h5IHRoZXJlIGFyZSB0d28gd2F5cyB0byBjcmVhdGUgdGhlIG1vZHVsZTogYFJvdXRlck1vZHVsZS5mb3JSb290YCBhbmRcclxuICogYFJvdXRlck1vZHVsZS5mb3JDaGlsZGAuXHJcbiAqXHJcbiAqICogYGZvclJvb3RgIGNyZWF0ZXMgYSBtb2R1bGUgdGhhdCBjb250YWlucyBhbGwgdGhlIGRpcmVjdGl2ZXMsIHRoZSBnaXZlbiByb3V0ZXMsIGFuZCB0aGUgcm91dGVyXHJcbiAqICAgc2VydmljZSBpdHNlbGYuXHJcbiAqICogYGZvckNoaWxkYCBjcmVhdGVzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYWxsIHRoZSBkaXJlY3RpdmVzIGFuZCB0aGUgZ2l2ZW4gcm91dGVzLCBidXQgZG9lcyBub3RcclxuICogICBpbmNsdWRlIHRoZSByb3V0ZXIgc2VydmljZS5cclxuICpcclxuICogV2hlbiByZWdpc3RlcmVkIGF0IHRoZSByb290LCB0aGUgbW9kdWxlIHNob3VsZCBiZSB1c2VkIGFzIGZvbGxvd3NcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KFJPVVRFUyldXHJcbiAqIH0pXHJcbiAqIGNsYXNzIE15TmdNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEZvciBzdWJtb2R1bGVzIGFuZCBsYXp5IGxvYWRlZCBzdWJtb2R1bGVzIHRoZSBtb2R1bGUgc2hvdWxkIGJlIHVzZWQgYXMgZm9sbG93czpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChST1VURVMpXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBNeU5nTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQWRkcyByb3V0ZXIgZGlyZWN0aXZlcyBhbmQgcHJvdmlkZXJzLlxyXG4gKlxyXG4gKiBNYW5hZ2luZyBzdGF0ZSB0cmFuc2l0aW9ucyBpcyBvbmUgb2YgdGhlIGhhcmRlc3QgcGFydHMgb2YgYnVpbGRpbmcgYXBwbGljYXRpb25zLiBUaGlzIGlzXHJcbiAqIGVzcGVjaWFsbHkgdHJ1ZSBvbiB0aGUgd2ViLCB3aGVyZSB5b3UgYWxzbyBuZWVkIHRvIGVuc3VyZSB0aGF0IHRoZSBzdGF0ZSBpcyByZWZsZWN0ZWQgaW4gdGhlIFVSTC5cclxuICogSW4gYWRkaXRpb24sIHdlIG9mdGVuIHdhbnQgdG8gc3BsaXQgYXBwbGljYXRpb25zIGludG8gbXVsdGlwbGUgYnVuZGxlcyBhbmQgbG9hZCB0aGVtIG9uIGRlbWFuZC5cclxuICogRG9pbmcgdGhpcyB0cmFuc3BhcmVudGx5IGlzIG5vdCB0cml2aWFsLlxyXG4gKlxyXG4gKiBUaGUgQW5ndWxhciByb3V0ZXIgc2VydmljZSBzb2x2ZXMgdGhlc2UgcHJvYmxlbXMuIFVzaW5nIHRoZSByb3V0ZXIsIHlvdSBjYW4gZGVjbGFyYXRpdmVseSBzcGVjaWZ5XHJcbiAqIGFwcGxpY2F0aW9uIHN0YXRlcywgbWFuYWdlIHN0YXRlIHRyYW5zaXRpb25zIHdoaWxlIHRha2luZyBjYXJlIG9mIHRoZSBVUkwsIGFuZCBsb2FkIGJ1bmRsZXMgb25cclxuICogZGVtYW5kLlxyXG4gKlxyXG4gKiBAc2VlIFtSb3V0aW5nIGFuZCBOYXZpZ2F0aW9uXShndWlkZS9yb3V0ZXIuaHRtbCkgZm9yIGFuXHJcbiAqIG92ZXJ2aWV3IG9mIGhvdyB0aGUgcm91dGVyIHNlcnZpY2Ugc2hvdWxkIGJlIHVzZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlck1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihndWFyZDogYW55LCByb3V0ZXI6IFJvdXRlcik7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW5kIGNvbmZpZ3VyZXMgYSBtb2R1bGUgd2l0aCBhbGwgdGhlIHJvdXRlciBwcm92aWRlcnMgYW5kIGRpcmVjdGl2ZXMuXHJcbiAgICAgKiBPcHRpb25hbGx5IHNldHMgdXAgYW4gYXBwbGljYXRpb24gbGlzdGVuZXIgdG8gcGVyZm9ybSBhbiBpbml0aWFsIG5hdmlnYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJvdXRlcyBBbiBhcnJheSBvZiBgUm91dGVgIG9iamVjdHMgdGhhdCBkZWZpbmUgdGhlIG5hdmlnYXRpb24gcGF0aHMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSBjb25maWcgQW4gYEV4dHJhT3B0aW9uc2AgY29uZmlndXJhdGlvbiBvYmplY3QgdGhhdCBjb250cm9scyBob3cgbmF2aWdhdGlvbiBpcyBwZXJmb3JtZWQuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBuZXcgcm91dGVyIG1vZHVsZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvclJvb3Qocm91dGVzOiBSb3V0ZXMsIGNvbmZpZz86IEV4dHJhT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um91dGVyTW9kdWxlPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG1vZHVsZSB3aXRoIGFsbCB0aGUgcm91dGVyIGRpcmVjdGl2ZXMgYW5kIGEgcHJvdmlkZXIgcmVnaXN0ZXJpbmcgcm91dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9yQ2hpbGQocm91dGVzOiBSb3V0ZXMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvdXRlck1vZHVsZT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQWN0cyBhcyBhIHBsYWNlaG9sZGVyIHRoYXQgQW5ndWxhciBkeW5hbWljYWxseSBmaWxscyBiYXNlZCBvbiB0aGUgY3VycmVudCByb3V0ZXIgc3RhdGUuXHJcbiAqXHJcbiAqIEVhY2ggb3V0bGV0IGNhbiBoYXZlIGEgdW5pcXVlIG5hbWUsIGRldGVybWluZWQgYnkgdGhlIG9wdGlvbmFsIGBuYW1lYCBhdHRyaWJ1dGUuXHJcbiAqIFRoZSBuYW1lIGNhbm5vdCBiZSBzZXQgb3IgY2hhbmdlZCBkeW5hbWljYWxseS4gSWYgbm90IHNldCwgZGVmYXVsdCB2YWx1ZSBpcyBcInByaW1hcnlcIi5cclxuICpcclxuICogYGBgXHJcbiAqIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICogPHJvdXRlci1vdXRsZXQgbmFtZT0nbGVmdCc+PC9yb3V0ZXItb3V0bGV0PlxyXG4gKiA8cm91dGVyLW91dGxldCBuYW1lPSdyaWdodCc+PC9yb3V0ZXItb3V0bGV0PlxyXG4gKiBgYGBcclxuICpcclxuICogQSByb3V0ZXIgb3V0bGV0IGVtaXRzIGFuIGFjdGl2YXRlIGV2ZW50IHdoZW4gYSBuZXcgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCxcclxuICogYW5kIGEgZGVhY3RpdmF0ZSBldmVudCB3aGVuIGEgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuICpcclxuICogYGBgXHJcbiAqIDxyb3V0ZXItb3V0bGV0XHJcbiAqICAgKGFjdGl2YXRlKT0nb25BY3RpdmF0ZSgkZXZlbnQpJ1xyXG4gKiAgIChkZWFjdGl2YXRlKT0nb25EZWFjdGl2YXRlKCRldmVudCknPjwvcm91dGVyLW91dGxldD5cclxuICogYGBgXHJcbiAqIEBuZ01vZHVsZSBSb3V0ZXJNb2R1bGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRDb250ZXh0cztcclxuICAgIHByaXZhdGUgbG9jYXRpb247XHJcbiAgICBwcml2YXRlIHJlc29sdmVyO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjtcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU7XHJcbiAgICBwcml2YXRlIG5hbWU7XHJcbiAgICBhY3RpdmF0ZUV2ZW50czogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBkZWFjdGl2YXRlRXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZiwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgbmFtZTogc3RyaW5nLCBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBnZXQgaXNBY3RpdmF0ZWQoKTogYm9vbGVhbjtcclxuICAgIGdldCBjb21wb25lbnQoKTogT2JqZWN0O1xyXG4gICAgZ2V0IGFjdGl2YXRlZFJvdXRlKCk6IEFjdGl2YXRlZFJvdXRlO1xyXG4gICAgZ2V0IGFjdGl2YXRlZFJvdXRlRGF0YSgpOiBEYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYFJvdXRlUmV1c2VTdHJhdGVneWAgaW5zdHJ1Y3RzIHRvIGRldGFjaCB0aGUgc3VidHJlZVxyXG4gICAgICovXHJcbiAgICBkZXRhY2goKTogQ29tcG9uZW50UmVmPGFueT47XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBgUm91dGVSZXVzZVN0cmF0ZWd5YCBpbnN0cnVjdHMgdG8gcmUtYXR0YWNoIGEgcHJldmlvdXNseSBkZXRhY2hlZCBzdWJ0cmVlXHJcbiAgICAgKi9cclxuICAgIGF0dGFjaChyZWY6IENvbXBvbmVudFJlZjxhbnk+LCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiB2b2lkO1xyXG4gICAgZGVhY3RpdmF0ZSgpOiB2b2lkO1xyXG4gICAgYWN0aXZhdGVXaXRoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB8IG51bGwpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHByZWxvYWRlciBvcHRpbWlzdGljYWxseSBsb2FkcyBhbGwgcm91dGVyIGNvbmZpZ3VyYXRpb25zIHRvXHJcbiAqIG1ha2UgbmF2aWdhdGlvbnMgaW50byBsYXppbHktbG9hZGVkIHNlY3Rpb25zIG9mIHRoZSBhcHBsaWNhdGlvbiBmYXN0ZXIuXHJcbiAqXHJcbiAqIFRoZSBwcmVsb2FkZXIgcnVucyBpbiB0aGUgYmFja2dyb3VuZC4gV2hlbiB0aGUgcm91dGVyIGJvb3RzdHJhcHMsIHRoZSBwcmVsb2FkZXJcclxuICogc3RhcnRzIGxpc3RlbmluZyB0byBhbGwgbmF2aWdhdGlvbiBldmVudHMuIEFmdGVyIGV2ZXJ5IHN1Y2ggZXZlbnQsIHRoZSBwcmVsb2FkZXJcclxuICogd2lsbCBjaGVjayBpZiBhbnkgY29uZmlndXJhdGlvbnMgY2FuIGJlIGxvYWRlZCBsYXppbHkuXHJcbiAqXHJcbiAqIElmIGEgcm91dGUgaXMgcHJvdGVjdGVkIGJ5IGBjYW5Mb2FkYCBndWFyZHMsIHRoZSBwcmVsb2FkZWQgd2lsbCBub3QgbG9hZCBpdC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyUHJlbG9hZGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgcm91dGVyO1xyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcclxuICAgIHByaXZhdGUgcHJlbG9hZGluZ1N0cmF0ZWd5O1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBtb2R1bGVMb2FkZXI6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgY29tcGlsZXI6IENvbXBpbGVyLCBpbmplY3RvcjogSW5qZWN0b3IsIHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZGluZ1N0cmF0ZWd5KTtcclxuICAgIHNldFVwUHJlbG9hZGluZygpOiB2b2lkO1xyXG4gICAgcHJlbG9hZCgpOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzUm91dGVzO1xyXG4gICAgcHJpdmF0ZSBwcmVsb2FkQ29uZmlnO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgc3RhdGUgb2YgdGhlIHJvdXRlciBhcyBhIHRyZWUgb2YgYWN0aXZhdGVkIHJvdXRlcy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogRXZlcnkgbm9kZSBpbiB0aGUgcm91dGUgdHJlZSBpcyBhbiBgQWN0aXZhdGVkUm91dGVgIGluc3RhbmNlXHJcbiAqIHRoYXQga25vd3MgYWJvdXQgdGhlIFwiY29uc3VtZWRcIiBVUkwgc2VnbWVudHMsIHRoZSBleHRyYWN0ZWQgcGFyYW1ldGVycyxcclxuICogYW5kIHRoZSByZXNvbHZlZCBkYXRhLlxyXG4gKiBVc2UgdGhlIGBBY3RpdmF0ZWRSb3V0ZWAgcHJvcGVydGllcyB0byB0cmF2ZXJzZSB0aGUgdHJlZSBmcm9tIGFueSBub2RlLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBcclxuICogQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6J3RlbXBsYXRlLmh0bWwnfSlcclxuICogY2xhc3MgTXlDb21wb25lbnQge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XHJcbiAqICAgICBjb25zdCBzdGF0ZTogUm91dGVyU3RhdGUgPSByb3V0ZXIucm91dGVyU3RhdGU7XHJcbiAqICAgICBjb25zdCByb290OiBBY3RpdmF0ZWRSb3V0ZSA9IHN0YXRlLnJvb3Q7XHJcbiAqICAgICBjb25zdCBjaGlsZCA9IHJvb3QuZmlyc3RDaGlsZDtcclxuICogICAgIGNvbnN0IGlkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSBjaGlsZC5wYXJhbXMubWFwKHAgPT4gcC5pZCk7XHJcbiAqICAgICAvLy4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHNlZSBgQWN0aXZhdGVkUm91dGVgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlclN0YXRlIGV4dGVuZHMgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbTxBY3RpdmF0ZWRSb3V0ZT4ge1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IHNuYXBzaG90IG9mIHRoZSByb3V0ZXIgc3RhdGUgKi9cclxuICAgIHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSByb3V0ZXIgYXQgYSBtb21lbnQgaW4gdGltZS5cclxuICpcclxuICogVGhpcyBpcyBhIHRyZWUgb2YgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90cy4gRXZlcnkgbm9kZSBpbiB0aGlzIHRyZWUga25vd3MgYWJvdXRcclxuICogdGhlIFwiY29uc3VtZWRcIiBVUkwgc2VnbWVudHMsIHRoZSBleHRyYWN0ZWQgcGFyYW1ldGVycywgYW5kIHRoZSByZXNvbHZlZCBkYXRhLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBcclxuICogQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6J3RlbXBsYXRlLmh0bWwnfSlcclxuICogY2xhc3MgTXlDb21wb25lbnQge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XHJcbiAqICAgICBjb25zdCBzdGF0ZTogUm91dGVyU3RhdGUgPSByb3V0ZXIucm91dGVyU3RhdGU7XHJcbiAqICAgICBjb25zdCBzbmFwc2hvdDogUm91dGVyU3RhdGVTbmFwc2hvdCA9IHN0YXRlLnNuYXBzaG90O1xyXG4gKiAgICAgY29uc3Qgcm9vdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHNuYXBzaG90LnJvb3Q7XHJcbiAqICAgICBjb25zdCBjaGlsZCA9IHJvb3QuZmlyc3RDaGlsZDtcclxuICogICAgIGNvbnN0IGlkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSBjaGlsZC5wYXJhbXMubWFwKHAgPT4gcC5pZCk7XHJcbiAqICAgICAvLy4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyU3RhdGVTbmFwc2hvdCBleHRlbmRzIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX208QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4ge1xyXG4gICAgLyoqIFRoZSB1cmwgZnJvbSB3aGljaCB0aGlzIHNuYXBzaG90IHdhcyBjcmVhdGVkICovXHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBbREkgdG9rZW5dKGd1aWRlL2dsb3NzYXJ5LyNkaS10b2tlbikgZm9yIGEgcm91dGVyIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEBzZWUgYFJPVVRFU2BcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgUk9VVEVTOiBJbmplY3Rpb25Ub2tlbjxSb3V0ZVtdW10+O1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSByb3V0ZSBjb25maWd1cmF0aW9uIGZvciB0aGUgUm91dGVyIHNlcnZpY2UuXHJcbiAqIEFuIGFycmF5IG9mIGBSb3V0ZWAgb2JqZWN0cywgdXNlZCBpbiBgUm91dGVyLmNvbmZpZ2AgYW5kIGZvciBuZXN0ZWQgcm91dGUgY29uZmlndXJhdGlvbnNcclxuICogaW4gYFJvdXRlLmNoaWxkcmVuYC5cclxuICpcclxuICogQHNlZSBgUm91dGVgXHJcbiAqIEBzZWUgYFJvdXRlcmBcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBSb3V0ZXMgPSBSb3V0ZVtdO1xyXG5cclxuLyoqXHJcbiAqQW4gZXZlbnQgdHJpZ2dlcmVkIHdoZW4gcm91dGVzIGFyZSByZWNvZ25pemVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXNSZWNvZ25pemVkIGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmc7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgcG9saWN5IGZvciB3aGVuIHRvIHJ1biBndWFyZHMgYW5kIHJlc29sdmVycyBvbiBhIHJvdXRlLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZSNydW5HdWFyZHNBbmRSZXNvbHZlcnNgXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgUnVuR3VhcmRzQW5kUmVzb2x2ZXJzID0gJ3BhdGhQYXJhbXNDaGFuZ2UnIHwgJ3BhdGhQYXJhbXNPclF1ZXJ5UGFyYW1zQ2hhbmdlJyB8ICdwYXJhbXNDaGFuZ2UnIHwgJ3BhcmFtc09yUXVlcnlQYXJhbXNDaGFuZ2UnIHwgJ2Fsd2F5cycgfCAoKGZyb206IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHRvOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSA9PiBib29sZWFuKTtcclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgc2Nyb2xsaW5nLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTY3JvbGwge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYWRvbmx5IHJvdXRlckV2ZW50OiBOYXZpZ2F0aW9uRW5kO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYWRvbmx5IHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbDtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByZWFkb25seSBhbmNob3I6IHN0cmluZyB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZXJFdmVudDogTmF2aWdhdGlvbkVuZCwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0gfCBudWxsLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBhbmNob3I6IHN0cmluZyB8IG51bGwpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFByb3ZpZGVzIGEgd2F5IHRvIG1pZ3JhdGUgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyB0byBBbmd1bGFyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBVcmxIYW5kbGluZ1N0cmF0ZWd5IHtcclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgdGhlIHJvdXRlciBpZiB0aGlzIFVSTCBzaG91bGQgYmUgcHJvY2Vzc2VkLlxyXG4gICAgICpcclxuICAgICAqIFdoZW4gaXQgcmV0dXJucyB0cnVlLCB0aGUgcm91dGVyIHdpbGwgZXhlY3V0ZSB0aGUgcmVndWxhciBuYXZpZ2F0aW9uLlxyXG4gICAgICogV2hlbiBpdCByZXR1cm5zIGZhbHNlLCB0aGUgcm91dGVyIHdpbGwgc2V0IHRoZSByb3V0ZXIgc3RhdGUgdG8gYW4gZW1wdHkgc3RhdGUuXHJcbiAgICAgKiBBcyBhIHJlc3VsdCwgYWxsIHRoZSBhY3RpdmUgY29tcG9uZW50cyB3aWxsIGJlIGRlc3Ryb3llZC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNob3VsZFByb2Nlc3NVcmwodXJsOiBVcmxUcmVlKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdHMgdGhlIHBhcnQgb2YgdGhlIFVSTCB0aGF0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoZSByb3V0ZXIuXHJcbiAgICAgKiBUaGUgcmVzdCBvZiB0aGUgVVJMIHdpbGwgcmVtYWluIHVudG91Y2hlZC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZXh0cmFjdCh1cmw6IFVybFRyZWUpOiBVcmxUcmVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXJnZXMgdGhlIFVSTCBmcmFnbWVudCB3aXRoIHRoZSByZXN0IG9mIHRoZSBVUkwuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IG1lcmdlKG5ld1VybFBhcnQ6IFVybFRyZWUsIHJhd1VybDogVXJsVHJlZSk6IFVybFRyZWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGZ1bmN0aW9uIGZvciBtYXRjaGluZyBhIHJvdXRlIGFnYWluc3QgVVJMcy4gSW1wbGVtZW50IGEgY3VzdG9tIFVSTCBtYXRjaGVyXHJcbiAqIGZvciBgUm91dGUubWF0Y2hlcmAgd2hlbiBhIGNvbWJpbmF0aW9uIG9mIGBwYXRoYCBhbmQgYHBhdGhNYXRjaGBcclxuICogaXMgbm90IGV4cHJlc3NpdmUgZW5vdWdoLiBDYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIGBwYXRoYCBhbmQgYHBhdGhNYXRjaGAuXHJcbiAqXHJcbiAqIEBwYXJhbSBzZWdtZW50cyBBbiBhcnJheSBvZiBVUkwgc2VnbWVudHMuXHJcbiAqIEBwYXJhbSBncm91cCBBIHNlZ21lbnQgZ3JvdXAuXHJcbiAqIEBwYXJhbSByb3V0ZSBUaGUgcm91dGUgdG8gbWF0Y2ggYWdhaW5zdC5cclxuICogQHJldHVybnMgVGhlIG1hdGNoLXJlc3VsdC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBtYXRjaGVyIG1hdGNoZXMgSFRNTCBmaWxlcy5cclxuICpcclxuICogYGBgXHJcbiAqIGV4cG9ydCBmdW5jdGlvbiBodG1sRmlsZXModXJsOiBVcmxTZWdtZW50W10pIHtcclxuICogICByZXR1cm4gdXJsLmxlbmd0aCA9PT0gMSAmJiB1cmxbMF0ucGF0aC5lbmRzV2l0aCgnLmh0bWwnKSA/ICh7Y29uc3VtZWQ6IHVybH0pIDogbnVsbDtcclxuICogfVxyXG4gKlxyXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzID0gW3sgbWF0Y2hlcjogaHRtbEZpbGVzLCBjb21wb25lbnQ6IEFueUNvbXBvbmVudCB9XTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgVXJsTWF0Y2hlciA9IChzZWdtZW50czogVXJsU2VnbWVudFtdLCBncm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZTogUm91dGUpID0+IFVybE1hdGNoUmVzdWx0O1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBVUkxzIHdpdGggYSBjdXN0b20gbWF0Y2hpbmcgZnVuY3Rpb24uXHJcbiAqXHJcbiAqICogYGNvbnN1bWVkYCBpcyBhbiBhcnJheSBvZiB0aGUgY29uc3VtZWQgVVJMIHNlZ21lbnRzLlxyXG4gKiAqIGBwb3NQYXJhbXNgIGlzIGEgbWFwIG9mIHBvc2l0aW9uYWwgcGFyYW1ldGVycy5cclxuICpcclxuICogQHNlZSBgVXJsTWF0Y2hlcigpYFxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFVybE1hdGNoUmVzdWx0ID0ge1xyXG4gICAgY29uc3VtZWQ6IFVybFNlZ21lbnRbXTtcclxuICAgIHBvc1BhcmFtcz86IHtcclxuICAgICAgICBbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudDtcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgVVJMIHNlZ21lbnQuXHJcbiAqXHJcbiAqIEEgVXJsU2VnbWVudCBpcyBhIHBhcnQgb2YgYSBVUkwgYmV0d2VlbiB0aGUgdHdvIHNsYXNoZXMuIEl0IGNvbnRhaW5zIGEgcGF0aCBhbmQgdGhlIG1hdHJpeFxyXG4gKiBwYXJhbWV0ZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2VnbWVudC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICrCoCMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZVVybDondGVtcGxhdGUuaHRtbCd9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcclxuICogICAgIGNvbnN0IHRyZWU6IFVybFRyZWUgPSByb3V0ZXIucGFyc2VVcmwoJy90ZWFtO2lkPTMzJyk7XHJcbiAqICAgICBjb25zdCBnOiBVcmxTZWdtZW50R3JvdXAgPSB0cmVlLnJvb3QuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdO1xyXG4gKiAgICAgY29uc3QgczogVXJsU2VnbWVudFtdID0gZy5zZWdtZW50cztcclxuICogICAgIHNbMF0ucGF0aDsgLy8gcmV0dXJucyAndGVhbSdcclxuICogICAgIHNbMF0ucGFyYW1ldGVyczsgLy8gcmV0dXJucyB7aWQ6IDMzfVxyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsU2VnbWVudCB7XHJcbiAgICAvKiogVGhlIHBhdGggcGFydCBvZiBhIFVSTCBzZWdtZW50ICovXHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIG1hdHJpeCBwYXJhbWV0ZXJzIGFzc29jaWF0ZWQgd2l0aCBhIHNlZ21lbnQgKi9cclxuICAgIHBhcmFtZXRlcnM6IHtcclxuICAgICAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIFRoZSBwYXRoIHBhcnQgb2YgYSBVUkwgc2VnbWVudCAqL1xyXG4gICAgcGF0aDogc3RyaW5nLCBcclxuICAgIC8qKiBUaGUgbWF0cml4IHBhcmFtZXRlcnMgYXNzb2NpYXRlZCB3aXRoIGEgc2VnbWVudCAqL1xyXG4gICAgcGFyYW1ldGVyczoge1xyXG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9KTtcclxuICAgIGdldCBwYXJhbWV0ZXJNYXAoKTogUGFyYW1NYXA7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgdGhlIHBhcnNlZCBVUkwgc2VnbWVudCBncm91cC5cclxuICpcclxuICogU2VlIGBVcmxUcmVlYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsU2VnbWVudEdyb3VwIHtcclxuICAgIC8qKiBUaGUgVVJMIHNlZ21lbnRzIG9mIHRoaXMgZ3JvdXAuIFNlZSBgVXJsU2VnbWVudGAgZm9yIG1vcmUgaW5mb3JtYXRpb24gKi9cclxuICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W107XHJcbiAgICAvKiogVGhlIGxpc3Qgb2YgY2hpbGRyZW4gb2YgdGhpcyBncm91cCAqL1xyXG4gICAgY2hpbGRyZW46IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXA7XHJcbiAgICB9O1xyXG4gICAgLyoqIFRoZSBwYXJlbnQgbm9kZSBpbiB0aGUgdXJsIHRyZWUgKi9cclxuICAgIHBhcmVudDogVXJsU2VnbWVudEdyb3VwIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIFRoZSBVUkwgc2VnbWVudHMgb2YgdGhpcyBncm91cC4gU2VlIGBVcmxTZWdtZW50YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiAqL1xyXG4gICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgXHJcbiAgICAvKiogVGhlIGxpc3Qgb2YgY2hpbGRyZW4gb2YgdGhpcyBncm91cCAqL1xyXG4gICAgY2hpbGRyZW46IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXA7XHJcbiAgICB9KTtcclxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWdtZW50IGhhcyBjaGlsZCBzZWdtZW50cyAqL1xyXG4gICAgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbjtcclxuICAgIC8qKiBOdW1iZXIgb2YgY2hpbGQgc2VnbWVudHMgKi9cclxuICAgIGdldCBudW1iZXJPZkNoaWxkcmVuKCk6IG51bWJlcjtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VyaWFsaXplcyBhbmQgZGVzZXJpYWxpemVzIGEgVVJMIHN0cmluZyBpbnRvIGEgVVJMIHRyZWUuXHJcbiAqXHJcbiAqIFRoZSB1cmwgc2VyaWFsaXphdGlvbiBzdHJhdGVneSBpcyBjdXN0b21pemFibGUuIFlvdSBjYW5cclxuICogbWFrZSBhbGwgVVJMcyBjYXNlIGluc2Vuc2l0aXZlIGJ5IHByb3ZpZGluZyBhIGN1c3RvbSBVcmxTZXJpYWxpemVyLlxyXG4gKlxyXG4gKiBTZWUgYERlZmF1bHRVcmxTZXJpYWxpemVyYCBmb3IgYW4gZXhhbXBsZSBvZiBhIFVSTCBzZXJpYWxpemVyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBVcmxTZXJpYWxpemVyIHtcclxuICAgIC8qKiBQYXJzZSBhIHVybCBpbnRvIGEgYFVybFRyZWVgICovXHJcbiAgICBhYnN0cmFjdCBwYXJzZSh1cmw6IHN0cmluZyk6IFVybFRyZWU7XHJcbiAgICAvKiogQ29udmVydHMgYSBgVXJsVHJlZWAgaW50byBhIHVybCAqL1xyXG4gICAgYWJzdHJhY3Qgc2VyaWFsaXplKHRyZWU6IFVybFRyZWUpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVwcmVzZW50cyB0aGUgcGFyc2VkIFVSTC5cclxuICpcclxuICogU2luY2UgYSByb3V0ZXIgc3RhdGUgaXMgYSB0cmVlLCBhbmQgdGhlIFVSTCBpcyBub3RoaW5nIGJ1dCBhIHNlcmlhbGl6ZWQgc3RhdGUsIHRoZSBVUkwgaXMgYVxyXG4gKiBzZXJpYWxpemVkIHRyZWUuXHJcbiAqIFVybFRyZWUgaXMgYSBkYXRhIHN0cnVjdHVyZSB0aGF0IHByb3ZpZGVzIGEgbG90IG9mIGFmZm9yZGFuY2VzIGluIGRlYWxpbmcgd2l0aCBVUkxzXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZVVybDondGVtcGxhdGUuaHRtbCd9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcclxuICogICAgIGNvbnN0IHRyZWU6IFVybFRyZWUgPVxyXG4gKiAgICAgICByb3V0ZXIucGFyc2VVcmwoJy90ZWFtLzMzLyh1c2VyL3ZpY3Rvci8vc3VwcG9ydDpoZWxwKT9kZWJ1Zz10cnVlI2ZyYWdtZW50Jyk7XHJcbiAqICAgICBjb25zdCBmID0gdHJlZS5mcmFnbWVudDsgLy8gcmV0dXJuICdmcmFnbWVudCdcclxuICogICAgIGNvbnN0IHEgPSB0cmVlLnF1ZXJ5UGFyYW1zOyAvLyByZXR1cm5zIHtkZWJ1ZzogJ3RydWUnfVxyXG4gKiAgICAgY29uc3QgZzogVXJsU2VnbWVudEdyb3VwID0gdHJlZS5yb290LmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXTtcclxuICogICAgIGNvbnN0IHM6IFVybFNlZ21lbnRbXSA9IGcuc2VnbWVudHM7IC8vIHJldHVybnMgMiBzZWdtZW50cyAndGVhbScgYW5kICczMydcclxuICogICAgIGcuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdLnNlZ21lbnRzOyAvLyByZXR1cm5zIDIgc2VnbWVudHMgJ3VzZXInIGFuZCAndmljdG9yJ1xyXG4gKiAgICAgZy5jaGlsZHJlblsnc3VwcG9ydCddLnNlZ21lbnRzOyAvLyByZXR1cm4gMSBzZWdtZW50ICdoZWxwJ1xyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsVHJlZSB7XHJcbiAgICAvKiogVGhlIHJvb3Qgc2VnbWVudCBncm91cCBvZiB0aGUgVVJMIHRyZWUgKi9cclxuICAgIHJvb3Q6IFVybFNlZ21lbnRHcm91cDtcclxuICAgIC8qKiBUaGUgcXVlcnkgcGFyYW1zIG9mIHRoZSBVUkwgKi9cclxuICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXM7XHJcbiAgICAvKiogVGhlIGZyYWdtZW50IG9mIHRoZSBVUkwgKi9cclxuICAgIGZyYWdtZW50OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgZ2V0IHF1ZXJ5UGFyYW1NYXAoKTogUGFyYW1NYXA7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgVkVSU0lPTjogVmVyc2lvbjtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc05vdFJlcXVpcmVkXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9hOiBJbmplY3Rpb25Ub2tlbjx2b2lkPjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2IoKTogTmdQcm9iZVRva2VuO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfYyhyb3V0ZXI6IFJvdXRlciwgdmlld3BvcnRTY3JvbGxlcjogVmlld3BvcnRTY3JvbGxlciwgY29uZmlnOiBFeHRyYU9wdGlvbnMpOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9vO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfZChwbGF0Zm9ybUxvY2F0aW9uU3RyYXRlZ3k6IFBsYXRmb3JtTG9jYXRpb24sIGJhc2VIcmVmOiBzdHJpbmcsIG9wdGlvbnM/OiBFeHRyYU9wdGlvbnMpOiBIYXNoTG9jYXRpb25TdHJhdGVneSB8IFBhdGhMb2NhdGlvblN0cmF0ZWd5O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfZShyb3V0ZXI6IFJvdXRlcik6IGFueTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2YodXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgY29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGxvY2F0aW9uOiBMb2NhdGlvbiwgaW5qZWN0b3I6IEluamVjdG9yLCBsb2FkZXI6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgY29tcGlsZXI6IENvbXBpbGVyLCBjb25maWc6IFJvdXRlW11bXSwgb3B0cz86IEV4dHJhT3B0aW9ucywgdXJsSGFuZGxpbmdTdHJhdGVneT86IFVybEhhbmRsaW5nU3RyYXRlZ3ksIHJvdXRlUmV1c2VTdHJhdGVneT86IFJvdXRlUmV1c2VTdHJhdGVneSk6IFJvdXRlcjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2cocm91dGVyOiBSb3V0ZXIpOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbi8qKlxyXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24gcmVxdWlyZXMgdHdvIHN0ZXBzOlxyXG4gKlxyXG4gKiBGaXJzdCwgd2Ugc3RhcnQgdGhlIG5hdmlnYXRpb24gaW4gYSBgQVBQX0lOSVRJQUxJWkVSYCB0byBibG9jayB0aGUgYm9vdHN0cmFwIGlmXHJcbiAqIGEgcmVzb2x2ZXIgb3IgYSBndWFyZCBleGVjdXRlcyBhc3luY2hyb25vdXNseS5cclxuICpcclxuICogTmV4dCwgd2UgYWN0dWFsbHkgcnVuIGFjdGl2YXRpb24gaW4gYSBgQk9PVFNUUkFQX0xJU1RFTkVSYCwgdXNpbmcgdGhlXHJcbiAqIGBhZnRlclByZWFjdGl2YXRpb25gIGhvb2sgcHJvdmlkZWQgYnkgdGhlIHJvdXRlci5cclxuICogVGhlIHJvdXRlciBuYXZpZ2F0aW9uIHN0YXJ0cywgcmVhY2hlcyB0aGUgcG9pbnQgd2hlbiBwcmVhY3RpdmF0aW9uIGlzIGRvbmUsIGFuZCB0aGVuXHJcbiAqIHBhdXNlcy4gSXQgd2FpdHMgZm9yIHRoZSBob29rIHRvIGJlIHJlc29sdmVkLiBXZSB0aGVuIHJlc29sdmUgaXQgb25seSBpbiBhIGJvb3RzdHJhcCBsaXN0ZW5lci5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2gge1xyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcclxuICAgIHByaXZhdGUgaW5pdE5hdmlnYXRpb247XHJcbiAgICBwcml2YXRlIHJlc3VsdE9mUHJlYWN0aXZhdGlvbkRvbmU7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpO1xyXG4gICAgYXBwSW5pdGlhbGl6ZXIoKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgYm9vdHN0cmFwTGlzdGVuZXIoYm9vdHN0cmFwcGVkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGlzTGVnYWN5RW5hYmxlZDtcclxuICAgIHByaXZhdGUgaXNMZWdhY3lEaXNhYmxlZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaShyOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9oKTogKCkgPT4gUHJvbWlzZTxhbnk+O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaihyOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9oKTogKGJvb3RzdHJhcHBlZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9rKCk6ICh0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaCB8IHtcclxuICAgIHByb3ZpZGU6IEluamVjdGlvblRva2VuPCgoKSA9PiB2b2lkKVtdPjtcclxuICAgIG11bHRpOiBib29sZWFuO1xyXG4gICAgdXNlRmFjdG9yeTogdHlwZW9mIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2k7XHJcbiAgICBkZXBzOiAodHlwZW9mIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2gpW107XHJcbiAgICB1c2VFeGlzdGluZz86IHVuZGVmaW5lZDtcclxufSB8IHtcclxuICAgIHByb3ZpZGU6IEluamVjdGlvblRva2VuPChjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZD47XHJcbiAgICB1c2VGYWN0b3J5OiB0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfajtcclxuICAgIGRlcHM6ICh0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaClbXTtcclxuICAgIG11bHRpPzogdW5kZWZpbmVkO1xyXG4gICAgdXNlRXhpc3Rpbmc/OiB1bmRlZmluZWQ7XHJcbn0gfCB7XHJcbiAgICBwcm92aWRlOiBJbmplY3Rpb25Ub2tlbjwoKGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB2b2lkKVtdPjtcclxuICAgIG11bHRpOiBib29sZWFuO1xyXG4gICAgdXNlRXhpc3Rpbmc6IEluamVjdGlvblRva2VuPChjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZD47XHJcbiAgICB1c2VGYWN0b3J5PzogdW5kZWZpbmVkO1xyXG4gICAgZGVwcz86IHVuZGVmaW5lZDtcclxufSlbXTtcclxuXHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9tPFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3Q6IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX248VD4pO1xyXG4gICAgZ2V0IHJvb3QoKTogVDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbjxUPiB7XHJcbiAgICB2YWx1ZTogVDtcclxuICAgIGNoaWxkcmVuOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9uPFQ+W107XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCwgY2hpbGRyZW46IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX248VD5bXSk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX28gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqLyByZWFkb25seSB2aWV3cG9ydFNjcm9sbGVyOiBWaWV3cG9ydFNjcm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXJFdmVudHNTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIHNjcm9sbEV2ZW50c1N1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgbGFzdElkO1xyXG4gICAgcHJpdmF0ZSBsYXN0U291cmNlO1xyXG4gICAgcHJpdmF0ZSByZXN0b3JlZElkO1xyXG4gICAgcHJpdmF0ZSBzdG9yZTtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovIHZpZXdwb3J0U2Nyb2xsZXI6IFZpZXdwb3J0U2Nyb2xsZXIsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbj86ICdkaXNhYmxlZCcgfCAnZW5hYmxlZCcgfCAndG9wJztcclxuICAgICAgICBhbmNob3JTY3JvbGxpbmc/OiAnZGlzYWJsZWQnIHwgJ2VuYWJsZWQnO1xyXG4gICAgfSk7XHJcbiAgICBpbml0KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGNyZWF0ZVNjcm9sbEV2ZW50cztcclxuICAgIHByaXZhdGUgY29uc3VtZVNjcm9sbEV2ZW50cztcclxuICAgIHByaXZhdGUgc2NoZWR1bGVTY3JvbGxFdmVudDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCBpbnRlcm5hbGx5IHdpdGhpbiB0aGUgcm91dGVyIHRvIGJlIGEgcGxhY2Vob2xkZXIgd2hlbiBhbiBlbXB0eVxyXG4gKiByb3V0ZXItb3V0bGV0IGlzIG5lZWRlZC4gRm9yIGV4YW1wbGUsIHdpdGggYSBjb25maWcgc3VjaCBhczpcclxuICpcclxuICogYHtwYXRoOiAncGFyZW50Jywgb3V0bGV0OiAnbmF2JywgY2hpbGRyZW46IFsuLi5dfWBcclxuICpcclxuICogSW4gb3JkZXIgdG8gcmVuZGVyLCB0aGVyZSBuZWVkcyB0byBiZSBhIGNvbXBvbmVudCBvbiB0aGlzIGNvbmZpZywgd2hpY2ggd2lsbCBkZWZhdWx0XHJcbiAqIHRvIHRoaXMgYEVtcHR5T3V0bGV0Q29tcG9uZW50YC5cclxuICovXHJcbmRlY2xhcmUgY2xhc3MgybVFbXB0eU91dGxldENvbXBvbmVudCB7XHJcbn1cclxuZXhwb3J0IHsgybVFbXB0eU91dGxldENvbXBvbmVudCB9XHJcbmV4cG9ydCB7IMm1RW1wdHlPdXRsZXRDb21wb25lbnQgYXMgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbCB9XHJcblxyXG4vKipcclxuICogRmxhdHRlbnMgc2luZ2xlLWxldmVsIG5lc3RlZCBhcnJheXMuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWZsYXR0ZW48VD4oYXJyOiBUW11bXSk6IFRbXTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1Uk9VVEVSX1BST1ZJREVSUzogUHJvdmlkZXJbXTtcclxuXHJcbmV4cG9ydCB7IH1cclxuIl19