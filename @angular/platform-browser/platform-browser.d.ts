/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ComponentRef } from '@angular/core';
import { DebugElement } from '@angular/core';
import { DebugNode } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { GetTestability } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { NgProbeToken } from '@angular/core';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { Predicate } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { RendererType2 } from '@angular/core';
import { Sanitizer } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { Testability } from '@angular/core';
import { TestabilityRegistry } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ɵConsole } from '@angular/core';
import { ɵDomAdapter } from '@angular/common';
import { ɵgetDOM } from '@angular/common';

/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class BrowserModule {
    constructor(parentModule: BrowserModule | null);
    /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     */
    static withServerTransition(params: {
        appId: string;
    }): ModuleWithProviders<BrowserModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BrowserModule, never, never, [typeof ɵngcc1.CommonModule, typeof ɵngcc0.ApplicationModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BrowserModule>;
}

/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
export declare class BrowserTransferStateModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BrowserTransferStateModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BrowserTransferStateModule>;
}

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
export declare class By {
    /**
     * Match all nodes.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     */
    static all(): Predicate<DebugNode>;
    /**
     * Match elements by the given CSS selector.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     */
    static css(selector: string): Predicate<DebugElement>;
    /**
     * Match nodes that have the given directive present.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     */
    static directive(type: Type<any>): Predicate<DebugNode>;
}

/**
 * Disables Angular tools.
 *
 * @publicApi
 */
export declare function disableDebugTools(): void;

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 * @publicApi
 */
export declare abstract class DomSanitizer implements Sanitizer {
    /**
     * Sanitizes a value for use in the given SecurityContext.
     *
     * If value is trusted for the context, this method will unwrap the contained safe value and use
     * it directly. Otherwise, value will be sanitized to be safe in the given context, for example
     * by replacing URLs that have an unsafe protocol part (such as `javascript:`). The implementation
     * is responsible to make sure that the value can definitely be safely used in the given context.
     */
    abstract sanitize(context: SecurityContext, value: SafeValue | string | null): string | null;
    /**
     * Bypass security and trust the given value to be safe HTML. Only use this when the bound HTML
     * is unsafe (e.g. contains `<script>` tags) and the code should be executed. The sanitizer will
     * leave safe HTML intact, so in most situations this method should not be used.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustHtml(value: string): SafeHtml;
    /**
     * Bypass security and trust the given value to be safe style value (CSS).
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustStyle(value: string): SafeStyle;
    /**
     * Bypass security and trust the given value to be safe JavaScript.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustScript(value: string): SafeScript;
    /**
     * Bypass security and trust the given value to be a safe style URL, i.e. a value that can be used
     * in hyperlinks or `<img src>`.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustUrl(value: string): SafeUrl;
    /**
     * Bypass security and trust the given value to be a safe resource URL, i.e. a location that may
     * be used to load executable code from, like `<script src>`, or `<iframe src>`.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     */
    abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DomSanitizer, never>;
}

/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
export declare function enableDebugTools<T>(ref: ComponentRef<T>): ComponentRef<T>;

/**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */
export declare const EVENT_MANAGER_PLUGINS: InjectionToken<ɵangular_packages_platform_browser_platform_browser_g[]>;

/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
export declare class EventManager {
    private _zone;
    private _plugins;
    private _eventNameToPlugin;
    /**
     * Initializes an instance of the event-manager service.
     */
    constructor(plugins: ɵangular_packages_platform_browser_platform_browser_g[], _zone: NgZone);
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    /**
     * Registers a global handler for an event in a target view.
     *
     * @param target A target for global event notifications. One of "window", "document", or "body".
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns A callback function that can be used to remove the handler.
     */
    addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    getZone(): NgZone;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EventManager, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<EventManager>;
}

/**
 * DI token for providing [HammerJS](http://hammerjs.github.io/) support to Angular.
 * @see `HammerGestureConfig`
 *
 * @ngModule HammerModule
 * @publicApi
 */
export declare const HAMMER_GESTURE_CONFIG: InjectionToken<HammerGestureConfig>;

/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
export declare const HAMMER_LOADER: InjectionToken<HammerLoader>;

/**
 * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
export declare class HammerGestureConfig {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](http://hammerjs.github.io/).
     */
    events: string[];
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](http://hammerjs.github.io/).
     *
     */
    overrides: {
        [key: string]: Object;
    };
    /**
     * Properties whose default values can be overridden for a given event.
     * Different sets of properties apply to different events.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](http://hammerjs.github.io/).
     */
    options?: {
        cssProps?: any;
        domEvents?: boolean;
        enable?: boolean | ((manager: any) => boolean);
        preset?: any[];
        touchAction?: string;
        recognizers?: any[];
        inputClass?: any;
        inputTarget?: EventTarget;
    };
    /**
     * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    buildHammer(element: HTMLElement): HammerInstance;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HammerGestureConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HammerGestureConfig>;
}

declare interface HammerInstance {
    on(eventName: string, callback?: Function): void;
    off(eventName: string, callback?: Function): void;
    destroy?(): void;
}

/**
 * Function that loads HammerJS, returning a promise that is resolved once HammerJs is loaded.
 *
 * @publicApi
 */
export declare type HammerLoader = () => Promise<void>;

/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's EventManager.
 *
 * @publicApi
 */
export declare class HammerModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HammerModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HammerModule>;
}

/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
export declare function makeStateKey<T = void>(key: string): StateKey<T>;

/**
 * A service that can be used to get and add meta tags.
 *
 * @publicApi
 */
export declare class Meta {
    private _doc;
    private _dom;
    constructor(_doc: any);
    addTag(tag: MetaDefinition, forceCreation?: boolean): HTMLMetaElement | null;
    addTags(tags: MetaDefinition[], forceCreation?: boolean): HTMLMetaElement[];
    getTag(attrSelector: string): HTMLMetaElement | null;
    getTags(attrSelector: string): HTMLMetaElement[];
    updateTag(tag: MetaDefinition, selector?: string): HTMLMetaElement | null;
    removeTag(attrSelector: string): void;
    removeTagElement(meta: HTMLMetaElement): void;
    private _getOrCreateElement;
    private _setMetaElementAttributes;
    private _parseSelector;
    private _containsAttributes;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Meta, never>;
}


/**
 * Represents a meta element.
 *
 * @publicApi
 */
export declare type MetaDefinition = {
    charset?: string;
    content?: string;
    httpEquiv?: string;
    id?: string;
    itemprop?: string;
    name?: string;
    property?: string;
    scheme?: string;
    url?: string;
} & {
    [prop: string]: string;
};

/**
 * @publicApi
 */
export declare const platformBrowser: (extraProviders?: StaticProvider[]) => PlatformRef;

/**
 * Marker interface for a value that's safe to use as HTML.
 *
 * @publicApi
 */
export declare interface SafeHtml extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 * @publicApi
 */
export declare interface SafeResourceUrl extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 * @publicApi
 */
export declare interface SafeScript extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 * @publicApi
 */
export declare interface SafeStyle extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 * @publicApi
 */
export declare interface SafeUrl extends SafeValue {
}

/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 * @publicApi
 */
export declare interface SafeValue {
}

/**
 * A type-safe key to use with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
export declare type StateKey<T> = string & {
    __not_a_string: never;
};

/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
export declare class Title {
    private _doc;
    constructor(_doc: any);
    /**
     * Get the title of the current HTML document.
     */
    getTitle(): string;
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Title, never>;
}

/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
 * non-lossy manner.
 *
 * @publicApi
 */
export declare class TransferState {
    private store;
    private onSerializeCallbacks;
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    get<T>(key: StateKey<T>, defaultValue: T): T;
    /**
     * Set the value corresponding to a key.
     */
    set<T>(key: StateKey<T>, value: T): void;
    /**
     * Remove a key from the store.
     */
    remove<T>(key: StateKey<T>): void;
    /**
     * Test whether a key exists in the store.
     */
    hasKey<T>(key: StateKey<T>): boolean;
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    onSerialize<T>(key: StateKey<T>, callback: () => T): void;
    /**
     * Serialize the current state of the store to JSON.
     */
    toJson(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TransferState, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TransferState>;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

export declare function ɵangular_packages_platform_browser_platform_browser_a(): ErrorHandler;

export declare function ɵangular_packages_platform_browser_platform_browser_b(): any;

export declare const ɵangular_packages_platform_browser_platform_browser_c: StaticProvider[];

/**
 * Factory to create Meta service.
 */
export declare function ɵangular_packages_platform_browser_platform_browser_d(): Meta;


/**
 * Factory to create Title service.
 */
export declare function ɵangular_packages_platform_browser_platform_browser_e(): Title;

export declare function ɵangular_packages_platform_browser_platform_browser_f(doc: Document, appId: string): TransferState;

export declare abstract class ɵangular_packages_platform_browser_platform_browser_g {
    private _doc;
    constructor(_doc: any);
    manager: EventManager;
    abstract supports(eventName: string): boolean;
    abstract addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    addGlobalEventListener(element: string, eventName: string, handler: Function): Function;
}

/**
 * In View Engine, support for Hammer gestures is built-in by default.
 */
export declare const ɵangular_packages_platform_browser_platform_browser_h: Provider[];

export declare const ɵangular_packages_platform_browser_platform_browser_i: Provider[];

export declare function ɵangular_packages_platform_browser_platform_browser_j(injector: Injector): ɵDomSanitizerImpl;

export declare function ɵangular_packages_platform_browser_platform_browser_k(transitionId: string, document: any, injector: Injector): () => void;

export declare const ɵangular_packages_platform_browser_platform_browser_l: StaticProvider[];

export declare function ɵangular_packages_platform_browser_platform_browser_m(coreTokens: NgProbeToken[]): any;

/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
export declare const ɵangular_packages_platform_browser_platform_browser_n: Provider[];

/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare abstract class ɵangular_packages_platform_browser_platform_browser_o extends ɵDomAdapter {
    constructor();
    supportsDOMEvents(): boolean;
}

/**
 * @security Replacing built-in sanitization providers exposes the application to XSS risks.
 * Attacker-controlled data introduced by an unsanitized provider could expose your
 * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
 * @publicApi
 */
export declare const ɵBROWSER_SANITIZATION_PROVIDERS: StaticProvider[];

export declare const ɵBROWSER_SANITIZATION_PROVIDERS__POST_R3__: never[];

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare class ɵBrowserDomAdapter extends ɵangular_packages_platform_browser_platform_browser_o {
    static makeCurrent(): void;
    getProperty(el: Node, name: string): any;
    log(error: string): void;
    logGroup(error: string): void;
    logGroupEnd(): void;
    onAndCancel(el: Node, evt: any, listener: any): Function;
    dispatchEvent(el: Node, evt: any): void;
    remove(node: Node): Node;
    getValue(el: any): string;
    createElement(tagName: string, doc?: Document): HTMLElement;
    createHtmlDocument(): HTMLDocument;
    getDefaultDocument(): Document;
    isElementNode(node: Node): boolean;
    isShadowRoot(node: any): boolean;
    getGlobalEventTarget(doc: Document, target: string): EventTarget | null;
    getHistory(): History;
    getLocation(): Location;
    getBaseHref(doc: Document): string | null;
    resetBaseElement(): void;
    getUserAgent(): string;
    performanceNow(): number;
    supportsCookies(): boolean;
    getCookie(name: string): string | null;
}

export declare class ɵBrowserGetTestability implements GetTestability {
    static init(): void;
    addToWindow(registry: TestabilityRegistry): void;
    findTestabilityInTree(registry: TestabilityRegistry, elem: any, findInAncestors: boolean): Testability | null;
}

export declare class ɵDomEventsPlugin extends ɵangular_packages_platform_browser_platform_browser_g {
    constructor(doc: any);
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    removeEventListener(target: any, eventName: string, callback: Function): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomEventsPlugin, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDomEventsPlugin>;
}

export declare class ɵDomRendererFactory2 implements RendererFactory2 {
    private eventManager;
    private sharedStylesHost;
    private appId;
    private rendererByCompId;
    private defaultRenderer;
    constructor(eventManager: EventManager, sharedStylesHost: ɵDomSharedStylesHost, appId: string);
    createRenderer(element: any, type: RendererType2 | null): Renderer2;
    begin(): void;
    end(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomRendererFactory2, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDomRendererFactory2>;
}

export declare class ɵDomSanitizerImpl extends DomSanitizer {
    private _doc;
    constructor(_doc: any);
    sanitize(ctx: SecurityContext, value: SafeValue | string | null): string | null;
    bypassSecurityTrustHtml(value: string): SafeHtml;
    bypassSecurityTrustStyle(value: string): SafeStyle;
    bypassSecurityTrustScript(value: string): SafeScript;
    bypassSecurityTrustUrl(value: string): SafeUrl;
    bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomSanitizerImpl, never>;
}

export declare class ɵDomSharedStylesHost extends ɵSharedStylesHost implements OnDestroy {
    private _doc;
    private _hostNodes;
    private _styleNodes;
    constructor(_doc: any);
    private _addStylesToHost;
    addHost(hostNode: Node): void;
    removeHost(hostNode: Node): void;
    onStylesAdded(additions: Set<string>): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDomSharedStylesHost, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDomSharedStylesHost>;
}

export declare const ɵELEMENT_PROBE_PROVIDERS: Provider[];

/**
 * In Ivy, we don't support NgProbe because we have our own set of testing utilities
 * with more robust functionality.
 *
 * We shouldn't bring in NgProbe because it prevents DebugNode and friends from
 * tree-shaking properly.
 */
export declare const ɵELEMENT_PROBE_PROVIDERS__POST_R3__: never[];


export declare function ɵescapeHtml(text: string): string;

export declare function ɵflattenStyles(compId: string, styles: Array<any | any[]>, target: string[]): string[];
export { ɵgetDOM }

/**
 * In Ivy, support for Hammer gestures is optional, so applications must
 * import the `HammerModule` at root to turn on support. This means that
 * Hammer-specific code can be tree-shaken away if not needed.
 */
export declare const ɵHAMMER_PROVIDERS__POST_R3__: never[];

/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
export declare class ɵHammerGesturesPlugin extends ɵangular_packages_platform_browser_platform_browser_g {
    private _config;
    private console;
    private loader?;
    constructor(doc: any, _config: HammerGestureConfig, console: ɵConsole, loader?: HammerLoader | null | undefined);
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    isCustomEvent(eventName: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵHammerGesturesPlugin, [null, null, null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵHammerGesturesPlugin>;
}

export declare function ɵinitDomAdapter(): void;

export declare const ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS: StaticProvider[];

/**
 * @publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */
export declare class ɵKeyEventsPlugin extends ɵangular_packages_platform_browser_platform_browser_g {
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    constructor(doc: any);
    /**
     * Reports whether a named key event is supported.
     * @param eventName The event name to query.
     * @return True if the named key event is supported.
     */
    supports(eventName: string): boolean;
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
     */
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    static parseEventName(eventName: string): {
        [key: string]: string;
    } | null;
    static getEventFullKey(event: KeyboardEvent): string;
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    static eventCallback(fullKey: any, handler: Function, zone: NgZone): Function;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵKeyEventsPlugin, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵKeyEventsPlugin>;
}

export declare const ɵNAMESPACE_URIS: {
    [ns: string]: string;
};

export declare class ɵSharedStylesHost {
    addStyles(styles: string[]): void;
    onStylesAdded(additions: Set<string>): void;
    getAllStyles(): string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵSharedStylesHost, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵSharedStylesHost>;
}

export declare function ɵshimContentAttribute(componentShortId: string): string;

export declare function ɵshimHostAttribute(componentShortId: string): string;

/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
export declare const ɵTRANSITION_ID: InjectionToken<unknown>;

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0tYnJvd3Nlci5kLnRzIiwic291cmNlcyI6WyJwbGF0Zm9ybS1icm93c2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMS4xMlxuICogKGMpIDIwMTAtMjAyMCBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVidWdFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlYnVnTm9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2V0VGVzdGFiaWxpdHkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ1Byb2JlVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyZXJUeXBlMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RhYmlsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RhYmlsaXR5UmVnaXN0cnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IMm1Q29uc29sZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyDJtURvbUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyDJtWdldERPTSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG4vKipcclxuICogRXhwb3J0cyByZXF1aXJlZCBpbmZyYXN0cnVjdHVyZSBmb3IgYWxsIEFuZ3VsYXIgYXBwcy5cclxuICogSW5jbHVkZWQgYnkgZGVmYXVsdCBpbiBhbGwgQW5ndWxhciBhcHBzIGNyZWF0ZWQgd2l0aCB0aGUgQ0xJXHJcbiAqIGBuZXdgIGNvbW1hbmQuXHJcbiAqIFJlLWV4cG9ydHMgYENvbW1vbk1vZHVsZWAgYW5kIGBBcHBsaWNhdGlvbk1vZHVsZWAsIG1ha2luZyB0aGVpclxyXG4gKiBleHBvcnRzIGFuZCBwcm92aWRlcnMgYXZhaWxhYmxlIHRvIGFsbCBhcHBzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCcm93c2VyTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudE1vZHVsZTogQnJvd3Nlck1vZHVsZSB8IG51bGwpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGEgYnJvd3Nlci1iYXNlZCBhcHAgdG8gdHJhbnNpdGlvbiBmcm9tIGEgc2VydmVyLXJlbmRlcmVkIGFwcCwgaWZcclxuICAgICAqIG9uZSBpcyBwcmVzZW50IG9uIHRoZSBwYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgYW4gaWRlbnRpZmllciBmb3IgdGhlIGFwcCB0byB0cmFuc2l0aW9uLlxyXG4gICAgICogVGhlIElEIG11c3QgbWF0Y2ggYmV0d2VlbiB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIgdmVyc2lvbnMgb2YgdGhlIGFwcC5cclxuICAgICAqIEByZXR1cm5zIFRoZSByZWNvbmZpZ3VyZWQgYEJyb3dzZXJNb2R1bGVgIHRvIGltcG9ydCBpbnRvIHRoZSBhcHAncyByb290IGBBcHBNb2R1bGVgLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgd2l0aFNlcnZlclRyYW5zaXRpb24ocGFyYW1zOiB7XHJcbiAgICAgICAgYXBwSWQ6IHN0cmluZztcclxuICAgIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJyb3dzZXJNb2R1bGU+O1xyXG59XHJcblxyXG4vKipcclxuICogTmdNb2R1bGUgdG8gaW5zdGFsbCBvbiB0aGUgY2xpZW50IHNpZGUgd2hpbGUgdXNpbmcgdGhlIGBUcmFuc2ZlclN0YXRlYCB0byB0cmFuc2ZlciBzdGF0ZSBmcm9tXHJcbiAqIHNlcnZlciB0byBjbGllbnQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByZWRpY2F0ZXMgZm9yIHVzZSB3aXRoIHtAbGluayBEZWJ1Z0VsZW1lbnR9J3MgcXVlcnkgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCeSB7XHJcbiAgICAvKipcclxuICAgICAqIE1hdGNoIGFsbCBub2Rlcy5cclxuICAgICAqXHJcbiAgICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAgICogIyMjIEV4YW1wbGVcclxuICAgICAqXHJcbiAgICAgKiB7QGV4YW1wbGUgcGxhdGZvcm0tYnJvd3Nlci9kb20vZGVidWcvdHMvYnkvYnkudHMgcmVnaW9uPSdieV9hbGwnfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWxsKCk6IFByZWRpY2F0ZTxEZWJ1Z05vZGU+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXRjaCBlbGVtZW50cyBieSB0aGUgZ2l2ZW4gQ1NTIHNlbGVjdG9yLlxyXG4gICAgICpcclxuICAgICAqIEB1c2FnZU5vdGVzXHJcbiAgICAgKiAjIyMgRXhhbXBsZVxyXG4gICAgICpcclxuICAgICAqIHtAZXhhbXBsZSBwbGF0Zm9ybS1icm93c2VyL2RvbS9kZWJ1Zy90cy9ieS9ieS50cyByZWdpb249J2J5X2Nzcyd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjc3Moc2VsZWN0b3I6IHN0cmluZyk6IFByZWRpY2F0ZTxEZWJ1Z0VsZW1lbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXRjaCBub2RlcyB0aGF0IGhhdmUgdGhlIGdpdmVuIGRpcmVjdGl2ZSBwcmVzZW50LlxyXG4gICAgICpcclxuICAgICAqIEB1c2FnZU5vdGVzXHJcbiAgICAgKiAjIyMgRXhhbXBsZVxyXG4gICAgICpcclxuICAgICAqIHtAZXhhbXBsZSBwbGF0Zm9ybS1icm93c2VyL2RvbS9kZWJ1Zy90cy9ieS9ieS50cyByZWdpb249J2J5X2RpcmVjdGl2ZSd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaXJlY3RpdmUodHlwZTogVHlwZTxhbnk+KTogUHJlZGljYXRlPERlYnVnTm9kZT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNhYmxlcyBBbmd1bGFyIHRvb2xzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBkaXNhYmxlRGVidWdUb29scygpOiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIERvbVNhbml0aXplciBoZWxwcyBwcmV2ZW50aW5nIENyb3NzIFNpdGUgU2NyaXB0aW5nIFNlY3VyaXR5IGJ1Z3MgKFhTUykgYnkgc2FuaXRpemluZ1xyXG4gKiB2YWx1ZXMgdG8gYmUgc2FmZSB0byB1c2UgaW4gdGhlIGRpZmZlcmVudCBET00gY29udGV4dHMuXHJcbiAqXHJcbiAqIEZvciBleGFtcGxlLCB3aGVuIGJpbmRpbmcgYSBVUkwgaW4gYW4gYDxhIFtocmVmXT1cInNvbWVWYWx1ZVwiPmAgaHlwZXJsaW5rLCBgc29tZVZhbHVlYCB3aWxsIGJlXHJcbiAqIHNhbml0aXplZCBzbyB0aGF0IGFuIGF0dGFja2VyIGNhbm5vdCBpbmplY3QgZS5nLiBhIGBqYXZhc2NyaXB0OmAgVVJMIHRoYXQgd291bGQgZXhlY3V0ZSBjb2RlIG9uXHJcbiAqIHRoZSB3ZWJzaXRlLlxyXG4gKlxyXG4gKiBJbiBzcGVjaWZpYyBzaXR1YXRpb25zLCBpdCBtaWdodCBiZSBuZWNlc3NhcnkgdG8gZGlzYWJsZSBzYW5pdGl6YXRpb24sIGZvciBleGFtcGxlIGlmIHRoZVxyXG4gKiBhcHBsaWNhdGlvbiBnZW51aW5lbHkgbmVlZHMgdG8gcHJvZHVjZSBhIGBqYXZhc2NyaXB0OmAgc3R5bGUgbGluayB3aXRoIGEgZHluYW1pYyB2YWx1ZSBpbiBpdC5cclxuICogVXNlcnMgY2FuIGJ5cGFzcyBzZWN1cml0eSBieSBjb25zdHJ1Y3RpbmcgYSB2YWx1ZSB3aXRoIG9uZSBvZiB0aGUgYGJ5cGFzc1NlY3VyaXR5VHJ1c3QuLi5gXHJcbiAqIG1ldGhvZHMsIGFuZCB0aGVuIGJpbmRpbmcgdG8gdGhhdCB2YWx1ZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cclxuICpcclxuICogVGhlc2Ugc2l0dWF0aW9ucyBzaG91bGQgYmUgdmVyeSByYXJlLCBhbmQgZXh0cmFvcmRpbmFyeSBjYXJlIG11c3QgYmUgdGFrZW4gdG8gYXZvaWQgY3JlYXRpbmcgYVxyXG4gKiBDcm9zcyBTaXRlIFNjcmlwdGluZyAoWFNTKSBzZWN1cml0eSBidWchXHJcbiAqXHJcbiAqIFdoZW4gdXNpbmcgYGJ5cGFzc1NlY3VyaXR5VHJ1c3QuLi5gLCBtYWtlIHN1cmUgdG8gY2FsbCB0aGUgbWV0aG9kIGFzIGVhcmx5IGFzIHBvc3NpYmxlIGFuZCBhc1xyXG4gKiBjbG9zZSBhcyBwb3NzaWJsZSB0byB0aGUgc291cmNlIG9mIHRoZSB2YWx1ZSwgdG8gbWFrZSBpdCBlYXN5IHRvIHZlcmlmeSBubyBzZWN1cml0eSBidWcgaXNcclxuICogY3JlYXRlZCBieSBpdHMgdXNlLlxyXG4gKlxyXG4gKiBJdCBpcyBub3QgcmVxdWlyZWQgKGFuZCBub3QgcmVjb21tZW5kZWQpIHRvIGJ5cGFzcyBzZWN1cml0eSBpZiB0aGUgdmFsdWUgaXMgc2FmZSwgZS5nLiBhIFVSTCB0aGF0XHJcbiAqIGRvZXMgbm90IHN0YXJ0IHdpdGggYSBzdXNwaWNpb3VzIHByb3RvY29sLCBvciBhbiBIVE1MIHNuaXBwZXQgdGhhdCBkb2VzIG5vdCBjb250YWluIGRhbmdlcm91c1xyXG4gKiBjb2RlLiBUaGUgc2FuaXRpemVyIGxlYXZlcyBzYWZlIHZhbHVlcyBpbnRhY3QuXHJcbiAqXHJcbiAqIEBzZWN1cml0eSBDYWxsaW5nIGFueSBvZiB0aGUgYGJ5cGFzc1NlY3VyaXR5VHJ1c3QuLi5gIEFQSXMgZGlzYWJsZXMgQW5ndWxhcidzIGJ1aWx0LWluXHJcbiAqIHNhbml0aXphdGlvbiBmb3IgdGhlIHZhbHVlIHBhc3NlZCBpbi4gQ2FyZWZ1bGx5IGNoZWNrIGFuZCBhdWRpdCBhbGwgdmFsdWVzIGFuZCBjb2RlIHBhdGhzIGdvaW5nXHJcbiAqIGludG8gdGhpcyBjYWxsLiBNYWtlIHN1cmUgYW55IHVzZXIgZGF0YSBpcyBhcHByb3ByaWF0ZWx5IGVzY2FwZWQgZm9yIHRoaXMgc2VjdXJpdHkgY29udGV4dC5cclxuICogRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlIFtTZWN1cml0eSBHdWlkZV0oaHR0cDovL2cuY28vbmcvc2VjdXJpdHkpLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBEb21TYW5pdGl6ZXIgaW1wbGVtZW50cyBTYW5pdGl6ZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZXMgYSB2YWx1ZSBmb3IgdXNlIGluIHRoZSBnaXZlbiBTZWN1cml0eUNvbnRleHQuXHJcbiAgICAgKlxyXG4gICAgICogSWYgdmFsdWUgaXMgdHJ1c3RlZCBmb3IgdGhlIGNvbnRleHQsIHRoaXMgbWV0aG9kIHdpbGwgdW53cmFwIHRoZSBjb250YWluZWQgc2FmZSB2YWx1ZSBhbmQgdXNlXHJcbiAgICAgKiBpdCBkaXJlY3RseS4gT3RoZXJ3aXNlLCB2YWx1ZSB3aWxsIGJlIHNhbml0aXplZCB0byBiZSBzYWZlIGluIHRoZSBnaXZlbiBjb250ZXh0LCBmb3IgZXhhbXBsZVxyXG4gICAgICogYnkgcmVwbGFjaW5nIFVSTHMgdGhhdCBoYXZlIGFuIHVuc2FmZSBwcm90b2NvbCBwYXJ0IChzdWNoIGFzIGBqYXZhc2NyaXB0OmApLiBUaGUgaW1wbGVtZW50YXRpb25cclxuICAgICAqIGlzIHJlc3BvbnNpYmxlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBjYW4gZGVmaW5pdGVseSBiZSBzYWZlbHkgdXNlZCBpbiB0aGUgZ2l2ZW4gY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2FuaXRpemUoY29udGV4dDogU2VjdXJpdHlDb250ZXh0LCB2YWx1ZTogU2FmZVZhbHVlIHwgc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEJ5cGFzcyBzZWN1cml0eSBhbmQgdHJ1c3QgdGhlIGdpdmVuIHZhbHVlIHRvIGJlIHNhZmUgSFRNTC4gT25seSB1c2UgdGhpcyB3aGVuIHRoZSBib3VuZCBIVE1MXHJcbiAgICAgKiBpcyB1bnNhZmUgKGUuZy4gY29udGFpbnMgYDxzY3JpcHQ+YCB0YWdzKSBhbmQgdGhlIGNvZGUgc2hvdWxkIGJlIGV4ZWN1dGVkLiBUaGUgc2FuaXRpemVyIHdpbGxcclxuICAgICAqIGxlYXZlIHNhZmUgSFRNTCBpbnRhY3QsIHNvIGluIG1vc3Qgc2l0dWF0aW9ucyB0aGlzIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXHJcbiAgICAgKlxyXG4gICAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcclxuICAgICAqIHNlY3VyaXR5IHJpc2tzIVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZTogc3RyaW5nKTogU2FmZUh0bWw7XHJcbiAgICAvKipcclxuICAgICAqIEJ5cGFzcyBzZWN1cml0eSBhbmQgdHJ1c3QgdGhlIGdpdmVuIHZhbHVlIHRvIGJlIHNhZmUgc3R5bGUgdmFsdWUgKENTUykuXHJcbiAgICAgKlxyXG4gICAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcclxuICAgICAqIHNlY3VyaXR5IHJpc2tzIVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWU6IHN0cmluZyk6IFNhZmVTdHlsZTtcclxuICAgIC8qKlxyXG4gICAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBKYXZhU2NyaXB0LlxyXG4gICAgICpcclxuICAgICAqICoqV0FSTklORzoqKiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggdW50cnVzdGVkIHVzZXIgZGF0YSBleHBvc2VzIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTXHJcbiAgICAgKiBzZWN1cml0eSByaXNrcyFcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgYnlwYXNzU2VjdXJpdHlUcnVzdFNjcmlwdCh2YWx1ZTogc3RyaW5nKTogU2FmZVNjcmlwdDtcclxuICAgIC8qKlxyXG4gICAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgYSBzYWZlIHN0eWxlIFVSTCwgaS5lLiBhIHZhbHVlIHRoYXQgY2FuIGJlIHVzZWRcclxuICAgICAqIGluIGh5cGVybGlua3Mgb3IgYDxpbWcgc3JjPmAuXHJcbiAgICAgKlxyXG4gICAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcclxuICAgICAqIHNlY3VyaXR5IHJpc2tzIVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0VXJsKHZhbHVlOiBzdHJpbmcpOiBTYWZlVXJsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCeXBhc3Mgc2VjdXJpdHkgYW5kIHRydXN0IHRoZSBnaXZlbiB2YWx1ZSB0byBiZSBhIHNhZmUgcmVzb3VyY2UgVVJMLCBpLmUuIGEgbG9jYXRpb24gdGhhdCBtYXlcclxuICAgICAqIGJlIHVzZWQgdG8gbG9hZCBleGVjdXRhYmxlIGNvZGUgZnJvbSwgbGlrZSBgPHNjcmlwdCBzcmM+YCwgb3IgYDxpZnJhbWUgc3JjPmAuXHJcbiAgICAgKlxyXG4gICAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcclxuICAgICAqIHNlY3VyaXR5IHJpc2tzIVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWU6IHN0cmluZyk6IFNhZmVSZXNvdXJjZVVybDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuYWJsZWQgQW5ndWxhciBkZWJ1ZyB0b29scyB0aGF0IGFyZSBhY2Nlc3NpYmxlIHZpYSB5b3VyIGJyb3dzZXInc1xyXG4gKiBkZXZlbG9wZXIgY29uc29sZS5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqXHJcbiAqIDEuIE9wZW4gZGV2ZWxvcGVyIGNvbnNvbGUgKGUuZy4gaW4gQ2hyb21lIEN0cmwgKyBTaGlmdCArIGopXHJcbiAqIDEuIFR5cGUgYG5nLmAgKHVzdWFsbHkgdGhlIGNvbnNvbGUgd2lsbCBzaG93IGF1dG8tY29tcGxldGUgc3VnZ2VzdGlvbilcclxuICogMS4gVHJ5IHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHByb2ZpbGVyIGBuZy5wcm9maWxlci50aW1lQ2hhbmdlRGV0ZWN0aW9uKClgXHJcbiAqICAgIHRoZW4gaGl0IEVudGVyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBlbmFibGVEZWJ1Z1Rvb2xzPFQ+KHJlZjogQ29tcG9uZW50UmVmPFQ+KTogQ29tcG9uZW50UmVmPFQ+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpbmplY3Rpb24gdG9rZW4gZm9yIHRoZSBldmVudC1tYW5hZ2VyIHBsdWctaW4gc2VydmljZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgRVZFTlRfTUFOQUdFUl9QTFVHSU5TOiBJbmplY3Rpb25Ub2tlbjzJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2dbXT47XHJcblxyXG4vKipcclxuICogQW4gaW5qZWN0YWJsZSBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgZXZlbnQgbWFuYWdlbWVudCBmb3IgQW5ndWxhclxyXG4gKiB0aHJvdWdoIGEgYnJvd3NlciBwbHVnLWluLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBfem9uZTtcclxuICAgIHByaXZhdGUgX3BsdWdpbnM7XHJcbiAgICBwcml2YXRlIF9ldmVudE5hbWVUb1BsdWdpbjtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGV2ZW50LW1hbmFnZXIgc2VydmljZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocGx1Z2luczogybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9nW10sIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGVsZW1lbnQgYW5kIGV2ZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBIVE1MIGVsZW1lbnQgdG8gcmVjZWl2ZSBldmVudCBub3RpZmljYXRpb25zLlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIGZvci5cclxuICAgICAqIEBwYXJhbSBoYW5kbGVyIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBub3RpZmljYXRpb24gb2NjdXJzLiBSZWNlaXZlcyB0aGVcclxuICAgICAqIGV2ZW50IG9iamVjdCBhcyBhbiBhcmd1bWVudC5cclxuICAgICAqIEByZXR1cm5zICBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHRoZSBoYW5kbGVyLlxyXG4gICAgICovXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgZ2xvYmFsIGhhbmRsZXIgZm9yIGFuIGV2ZW50IGluIGEgdGFyZ2V0IHZpZXcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBmb3IgZ2xvYmFsIGV2ZW50IG5vdGlmaWNhdGlvbnMuIE9uZSBvZiBcIndpbmRvd1wiLCBcImRvY3VtZW50XCIsIG9yIFwiYm9keVwiLlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIGZvci5cclxuICAgICAqIEBwYXJhbSBoYW5kbGVyIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBub3RpZmljYXRpb24gb2NjdXJzLiBSZWNlaXZlcyB0aGVcclxuICAgICAqIGV2ZW50IG9iamVjdCBhcyBhbiBhcmd1bWVudC5cclxuICAgICAqIEByZXR1cm5zIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byByZW1vdmUgdGhlIGhhbmRsZXIuXHJcbiAgICAgKi9cclxuICAgIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXIodGFyZ2V0OiBzdHJpbmcsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGNvbXBpbGF0aW9uIHpvbmUgaW4gd2hpY2ggZXZlbnQgbGlzdGVuZXJzIGFyZSByZWdpc3RlcmVkLlxyXG4gICAgICovXHJcbiAgICBnZXRab25lKCk6IE5nWm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERJIHRva2VuIGZvciBwcm92aWRpbmcgW0hhbW1lckpTXShodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvLykgc3VwcG9ydCB0byBBbmd1bGFyLlxyXG4gKiBAc2VlIGBIYW1tZXJHZXN0dXJlQ29uZmlnYFxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgSGFtbWVyTW9kdWxlXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEhBTU1FUl9HRVNUVVJFX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48SGFtbWVyR2VzdHVyZUNvbmZpZz47XHJcblxyXG4vKipcclxuICogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gcHJvdmlkZSBhIHtAbGluayBIYW1tZXJMb2FkZXJ9IHRvIEFuZ3VsYXIuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEhBTU1FUl9MT0FERVI6IEluamVjdGlvblRva2VuPEhhbW1lckxvYWRlcj47XHJcblxyXG4vKipcclxuICogQW4gaW5qZWN0YWJsZSBbSGFtbWVySlMgTWFuYWdlcl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9hcGkvI2hhbW1lci5tYW5hZ2VyKVxyXG4gKiBmb3IgZ2VzdHVyZSByZWNvZ25pdGlvbi4gQ29uZmlndXJlcyBzcGVjaWZpYyBldmVudCByZWNvZ25pdGlvbi5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XHJcbiAgICAvKipcclxuICAgICAqIEEgc2V0IG9mIHN1cHBvcnRlZCBldmVudCBuYW1lcyBmb3IgZ2VzdHVyZXMgdG8gYmUgdXNlZCBpbiBBbmd1bGFyLlxyXG4gICAgICogQW5ndWxhciBzdXBwb3J0cyBhbGwgYnVpbHQtaW4gcmVjb2duaXplcnMsIGFzIGxpc3RlZCBpblxyXG4gICAgICogW0hhbW1lckpTIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKS5cclxuICAgICAqL1xyXG4gICAgZXZlbnRzOiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBnZXN0dXJlIGV2ZW50IG5hbWVzIHRvIGEgc2V0IG9mIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4gICAgICogdGhhdCBzcGVjaWZ5IG92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHNwZWNpZmljIHByb3BlcnRpZXMuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGtleSBpcyBhIHN1cHBvcnRlZCBldmVudCBuYW1lIHRvIGJlIGNvbmZpZ3VyZWQsXHJcbiAgICAgKiBhbmQgdGhlIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5zIGEgc2V0IG9mIHByb3BlcnRpZXMsIHdpdGggb3ZlcnJpZGUgdmFsdWVzXHJcbiAgICAgKiB0byBiZSBhcHBsaWVkIHRvIHRoZSBuYW1lZCByZWNvZ25pemVyIGV2ZW50LlxyXG4gICAgICogRm9yIGV4YW1wbGUsIHRvIGRpc2FibGUgcmVjb2duaXRpb24gb2YgdGhlIHJvdGF0ZSBldmVudCwgc3BlY2lmeVxyXG4gICAgICogIGB7XCJyb3RhdGVcIjoge1wiZW5hYmxlXCI6IGZhbHNlfX1gLlxyXG4gICAgICpcclxuICAgICAqIFByb3BlcnRpZXMgdGhhdCBhcmUgbm90IHByZXNlbnQgdGFrZSB0aGUgSGFtbWVySlMgZGVmYXVsdCB2YWx1ZXMuXHJcbiAgICAgKiBGb3IgaW5mb3JtYXRpb24gYWJvdXQgd2hpY2ggcHJvcGVydGllcyBhcmUgc3VwcG9ydGVkIGZvciB3aGljaCBldmVudHMsXHJcbiAgICAgKiBhbmQgdGhlaXIgYWxsb3dlZCBhbmQgZGVmYXVsdCB2YWx1ZXMsIHNlZVxyXG4gICAgICogW0hhbW1lckpTIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IE9iamVjdDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgd2hvc2UgZGVmYXVsdCB2YWx1ZXMgY2FuIGJlIG92ZXJyaWRkZW4gZm9yIGEgZ2l2ZW4gZXZlbnQuXHJcbiAgICAgKiBEaWZmZXJlbnQgc2V0cyBvZiBwcm9wZXJ0aWVzIGFwcGx5IHRvIGRpZmZlcmVudCBldmVudHMuXHJcbiAgICAgKiBGb3IgaW5mb3JtYXRpb24gYWJvdXQgd2hpY2ggcHJvcGVydGllcyBhcmUgc3VwcG9ydGVkIGZvciB3aGljaCBldmVudHMsXHJcbiAgICAgKiBhbmQgdGhlaXIgYWxsb3dlZCBhbmQgZGVmYXVsdCB2YWx1ZXMsIHNlZVxyXG4gICAgICogW0hhbW1lckpTIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKS5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICBjc3NQcm9wcz86IGFueTtcclxuICAgICAgICBkb21FdmVudHM/OiBib29sZWFuO1xyXG4gICAgICAgIGVuYWJsZT86IGJvb2xlYW4gfCAoKG1hbmFnZXI6IGFueSkgPT4gYm9vbGVhbik7XHJcbiAgICAgICAgcHJlc2V0PzogYW55W107XHJcbiAgICAgICAgdG91Y2hBY3Rpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgcmVjb2duaXplcnM/OiBhbnlbXTtcclxuICAgICAgICBpbnB1dENsYXNzPzogYW55O1xyXG4gICAgICAgIGlucHV0VGFyZ2V0PzogRXZlbnRUYXJnZXQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgW0hhbW1lckpTIE1hbmFnZXJdKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vYXBpLyNoYW1tZXIubWFuYWdlcilcclxuICAgICAqIGFuZCBhdHRhY2hlcyBpdCB0byBhIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCByZWNvZ25pemUgZ2VzdHVyZXMuXHJcbiAgICAgKiBAcmV0dXJucyBBIEhhbW1lckpTIGV2ZW50LW1hbmFnZXIgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlO1xyXG59XHJcblxyXG5kZWNsYXJlIGludGVyZmFjZSBIYW1tZXJJbnN0YW5jZSB7XHJcbiAgICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XHJcbiAgICBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkO1xyXG4gICAgZGVzdHJveT8oKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRoYXQgbG9hZHMgSGFtbWVySlMsIHJldHVybmluZyBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCBvbmNlIEhhbW1lckpzIGlzIGxvYWRlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBIYW1tZXJMb2FkZXIgPSAoKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgc3VwcG9ydCBmb3IgSGFtbWVySlMuXHJcbiAqXHJcbiAqIEltcG9ydCB0aGlzIG1vZHVsZSBhdCB0aGUgcm9vdCBvZiB5b3VyIGFwcGxpY2F0aW9uIHNvIHRoYXQgQW5ndWxhciBjYW4gd29yayB3aXRoXHJcbiAqIEhhbW1lckpTIHRvIGRldGVjdCBnZXN0dXJlIGV2ZW50cy5cclxuICpcclxuICogTm90ZSB0aGF0IGFwcGxpY2F0aW9ucyBzdGlsbCBuZWVkIHRvIGluY2x1ZGUgdGhlIEhhbW1lckpTIHNjcmlwdCBpdHNlbGYuIFRoaXMgbW9kdWxlXHJcbiAqIHNpbXBseSBzZXRzIHVwIHRoZSBjb29yZGluYXRpb24gbGF5ZXIgYmV0d2VlbiBIYW1tZXJKUyBhbmQgQW5ndWxhcidzIEV2ZW50TWFuYWdlci5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSGFtbWVyTW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIGBTdGF0ZUtleTxUPmAgdGhhdCBjYW4gYmUgdXNlZCB0byBzdG9yZSB2YWx1ZSBvZiB0eXBlIFQgd2l0aCBgVHJhbnNmZXJTdGF0ZWAuXHJcbiAqXHJcbiAqIEV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBDT1VOVEVSX0tFWSA9IG1ha2VTdGF0ZUtleTxudW1iZXI+KCdjb3VudGVyJyk7XHJcbiAqIGxldCB2YWx1ZSA9IDEwO1xyXG4gKlxyXG4gKiB0cmFuc2ZlclN0YXRlLnNldChDT1VOVEVSX0tFWSwgdmFsdWUpO1xyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gbWFrZVN0YXRlS2V5PFQgPSB2b2lkPihrZXk6IHN0cmluZyk6IFN0YXRlS2V5PFQ+O1xyXG5cclxuLyoqXHJcbiAqIEEgc2VydmljZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGdldCBhbmQgYWRkIG1ldGEgdGFncy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWV0YSB7XHJcbiAgICBwcml2YXRlIF9kb2M7XHJcbiAgICBwcml2YXRlIF9kb207XHJcbiAgICBjb25zdHJ1Y3RvcihfZG9jOiBhbnkpO1xyXG4gICAgYWRkVGFnKHRhZzogTWV0YURlZmluaXRpb24sIGZvcmNlQ3JlYXRpb24/OiBib29sZWFuKTogSFRNTE1ldGFFbGVtZW50IHwgbnVsbDtcclxuICAgIGFkZFRhZ3ModGFnczogTWV0YURlZmluaXRpb25bXSwgZm9yY2VDcmVhdGlvbj86IGJvb2xlYW4pOiBIVE1MTWV0YUVsZW1lbnRbXTtcclxuICAgIGdldFRhZyhhdHRyU2VsZWN0b3I6IHN0cmluZyk6IEhUTUxNZXRhRWxlbWVudCB8IG51bGw7XHJcbiAgICBnZXRUYWdzKGF0dHJTZWxlY3Rvcjogc3RyaW5nKTogSFRNTE1ldGFFbGVtZW50W107XHJcbiAgICB1cGRhdGVUYWcodGFnOiBNZXRhRGVmaW5pdGlvbiwgc2VsZWN0b3I/OiBzdHJpbmcpOiBIVE1MTWV0YUVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVtb3ZlVGFnKGF0dHJTZWxlY3Rvcjogc3RyaW5nKTogdm9pZDtcclxuICAgIHJlbW92ZVRhZ0VsZW1lbnQobWV0YTogSFRNTE1ldGFFbGVtZW50KTogdm9pZDtcclxuICAgIHByaXZhdGUgX2dldE9yQ3JlYXRlRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3NldE1ldGFFbGVtZW50QXR0cmlidXRlcztcclxuICAgIHByaXZhdGUgX3BhcnNlU2VsZWN0b3I7XHJcbiAgICBwcml2YXRlIF9jb250YWluc0F0dHJpYnV0ZXM7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIG1ldGEgZWxlbWVudC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBNZXRhRGVmaW5pdGlvbiA9IHtcclxuICAgIGNoYXJzZXQ/OiBzdHJpbmc7XHJcbiAgICBjb250ZW50Pzogc3RyaW5nO1xyXG4gICAgaHR0cEVxdWl2Pzogc3RyaW5nO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBpdGVtcHJvcD86IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBwcm9wZXJ0eT86IHN0cmluZztcclxuICAgIHNjaGVtZT86IHN0cmluZztcclxuICAgIHVybD86IHN0cmluZztcclxufSAmIHtcclxuICAgIFtwcm9wOiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgcGxhdGZvcm1Ccm93c2VyOiAoZXh0cmFQcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdKSA9PiBQbGF0Zm9ybVJlZjtcclxuXHJcbi8qKlxyXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBIVE1MLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU2FmZUh0bWwgZXh0ZW5kcyBTYWZlVmFsdWUge1xyXG59XHJcblxyXG4vKipcclxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgdG8gbG9hZCBleGVjdXRhYmxlIGNvZGUgZnJvbS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFNhZmVSZXNvdXJjZVVybCBleHRlbmRzIFNhZmVWYWx1ZSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBKYXZhU2NyaXB0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU2FmZVNjcmlwdCBleHRlbmRzIFNhZmVWYWx1ZSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBzdHlsZSAoQ1NTKS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFNhZmVTdHlsZSBleHRlbmRzIFNhZmVWYWx1ZSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBhIFVSTCBsaW5raW5nIHRvIGEgZG9jdW1lbnQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTYWZlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGluIGEgcGFydGljdWxhciBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU2FmZVZhbHVlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgdHlwZS1zYWZlIGtleSB0byB1c2Ugd2l0aCBgVHJhbnNmZXJTdGF0ZWAuXHJcbiAqXHJcbiAqIEV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBDT1VOVEVSX0tFWSA9IG1ha2VTdGF0ZUtleTxudW1iZXI+KCdjb3VudGVyJyk7XHJcbiAqIGxldCB2YWx1ZSA9IDEwO1xyXG4gKlxyXG4gKiB0cmFuc2ZlclN0YXRlLnNldChDT1VOVEVSX0tFWSwgdmFsdWUpO1xyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdGF0ZUtleTxUPiA9IHN0cmluZyAmIHtcclxuICAgIF9fbm90X2Ffc3RyaW5nOiBuZXZlcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHNlcnZpY2UgdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgYW5kIHNldCB0aGUgdGl0bGUgb2YgYSBjdXJyZW50IEhUTUwgZG9jdW1lbnQuXHJcbiAqXHJcbiAqIFNpbmNlIGFuIEFuZ3VsYXIgYXBwbGljYXRpb24gY2FuJ3QgYmUgYm9vdHN0cmFwcGVkIG9uIHRoZSBlbnRpcmUgSFRNTCBkb2N1bWVudCAoYDxodG1sPmAgdGFnKVxyXG4gKiBpdCBpcyBub3QgcG9zc2libGUgdG8gYmluZCB0byB0aGUgYHRleHRgIHByb3BlcnR5IG9mIHRoZSBgSFRNTFRpdGxlRWxlbWVudGAgZWxlbWVudHNcclxuICogKHJlcHJlc2VudGluZyB0aGUgYDx0aXRsZT5gIHRhZykuIEluc3RlYWQsIHRoaXMgc2VydmljZSBjYW4gYmUgdXNlZCB0byBzZXQgYW5kIGdldCB0aGUgY3VycmVudFxyXG4gKiB0aXRsZSB2YWx1ZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGl0bGUge1xyXG4gICAgcHJpdmF0ZSBfZG9jO1xyXG4gICAgY29uc3RydWN0b3IoX2RvYzogYW55KTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0aXRsZSBvZiB0aGUgY3VycmVudCBIVE1MIGRvY3VtZW50LlxyXG4gICAgICovXHJcbiAgICBnZXRUaXRsZSgpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgdGl0bGUgb2YgdGhlIGN1cnJlbnQgSFRNTCBkb2N1bWVudC5cclxuICAgICAqIEBwYXJhbSBuZXdUaXRsZVxyXG4gICAgICovXHJcbiAgICBzZXRUaXRsZShuZXdUaXRsZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEga2V5IHZhbHVlIHN0b3JlIHRoYXQgaXMgdHJhbnNmZXJyZWQgZnJvbSB0aGUgYXBwbGljYXRpb24gb24gdGhlIHNlcnZlciBzaWRlIHRvIHRoZSBhcHBsaWNhdGlvblxyXG4gKiBvbiB0aGUgY2xpZW50IHNpZGUuXHJcbiAqXHJcbiAqIGBUcmFuc2ZlclN0YXRlYCB3aWxsIGJlIGF2YWlsYWJsZSBhcyBhbiBpbmplY3RhYmxlIHRva2VuLiBUbyB1c2UgaXQgaW1wb3J0XHJcbiAqIGBTZXJ2ZXJUcmFuc2ZlclN0YXRlTW9kdWxlYCBvbiB0aGUgc2VydmVyIGFuZCBgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVgIG9uIHRoZSBjbGllbnQuXHJcbiAqXHJcbiAqIFRoZSB2YWx1ZXMgaW4gdGhlIHN0b3JlIGFyZSBzZXJpYWxpemVkL2Rlc2VyaWFsaXplZCB1c2luZyBKU09OLnN0cmluZ2lmeS9KU09OLnBhcnNlLiBTbyBvbmx5XHJcbiAqIGJvb2xlYW4sIG51bWJlciwgc3RyaW5nLCBudWxsIGFuZCBub24tY2xhc3Mgb2JqZWN0cyB3aWxsIGJlIHNlcmlhbGl6ZWQgYW5kIGRlc2VyaWFsemllZCBpbiBhXHJcbiAqIG5vbi1sb3NzeSBtYW5uZXIuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyYW5zZmVyU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBzdG9yZTtcclxuICAgIHByaXZhdGUgb25TZXJpYWxpemVDYWxsYmFja3M7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgY29ycmVzcG9uZGluZyB0byBhIGtleS4gUmV0dXJuIGBkZWZhdWx0VmFsdWVgIGlmIGtleSBpcyBub3QgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIGdldDxUPihrZXk6IFN0YXRlS2V5PFQ+LCBkZWZhdWx0VmFsdWU6IFQpOiBUO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gYSBrZXkuXHJcbiAgICAgKi9cclxuICAgIHNldDxUPihrZXk6IFN0YXRlS2V5PFQ+LCB2YWx1ZTogVCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGtleSBmcm9tIHRoZSBzdG9yZS5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlPFQ+KGtleTogU3RhdGVLZXk8VD4pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0IHdoZXRoZXIgYSBrZXkgZXhpc3RzIGluIHRoZSBzdG9yZS5cclxuICAgICAqL1xyXG4gICAgaGFzS2V5PFQ+KGtleTogU3RhdGVLZXk8VD4pOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIHByb3ZpZGUgdGhlIHZhbHVlIGZvciBhIGtleSB3aGVuIGB0b0pzb25gIGlzIGNhbGxlZC5cclxuICAgICAqL1xyXG4gICAgb25TZXJpYWxpemU8VD4oa2V5OiBTdGF0ZUtleTxUPiwgY2FsbGJhY2s6ICgpID0+IFQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemUgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHN0b3JlIHRvIEpTT04uXHJcbiAgICAgKi9cclxuICAgIHRvSnNvbigpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBWRVJTSU9OOiBWZXJzaW9uO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9hKCk6IEVycm9ySGFuZGxlcjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfYigpOiBhbnk7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2M6IFN0YXRpY1Byb3ZpZGVyW107XHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgTWV0YSBzZXJ2aWNlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9kKCk6IE1ldGE7XHJcblxyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gY3JlYXRlIFRpdGxlIHNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2UoKTogVGl0bGU7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2YoZG9jOiBEb2N1bWVudCwgYXBwSWQ6IHN0cmluZyk6IFRyYW5zZmVyU3RhdGU7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2cge1xyXG4gICAgcHJpdmF0ZSBfZG9jO1xyXG4gICAgY29uc3RydWN0b3IoX2RvYzogYW55KTtcclxuICAgIG1hbmFnZXI6IEV2ZW50TWFuYWdlcjtcclxuICAgIGFic3RyYWN0IHN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG4gICAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBzdHJpbmcsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG4vKipcclxuICogSW4gVmlldyBFbmdpbmUsIHN1cHBvcnQgZm9yIEhhbW1lciBnZXN0dXJlcyBpcyBidWlsdC1pbiBieSBkZWZhdWx0LlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9oOiBQcm92aWRlcltdO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9pOiBQcm92aWRlcltdO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9qKGluamVjdG9yOiBJbmplY3Rvcik6IMm1RG9tU2FuaXRpemVySW1wbDtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfayh0cmFuc2l0aW9uSWQ6IHN0cmluZywgZG9jdW1lbnQ6IGFueSwgaW5qZWN0b3I6IEluamVjdG9yKTogKCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfbDogU3RhdGljUHJvdmlkZXJbXTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfbShjb3JlVG9rZW5zOiBOZ1Byb2JlVG9rZW5bXSk6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcnMgd2hpY2ggc3VwcG9ydCBkZWJ1Z2dpbmcgQW5ndWxhciBhcHBsaWNhdGlvbnMgKGUuZy4gdmlhIGBuZy5wcm9iZWApLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfcGxhdGZvcm1fYnJvd3Nlcl9uOiBQcm92aWRlcltdO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIERPTSBvcGVyYXRpb25zIGluIGFueSBicm93c2VyIGVudmlyb25tZW50LlxyXG4gKlxyXG4gKiBAc2VjdXJpdHkgVHJlYWQgY2FyZWZ1bGx5ISBJbnRlcmFjdGluZyB3aXRoIHRoZSBET00gZGlyZWN0bHkgaXMgZGFuZ2Vyb3VzIGFuZFxyXG4gKiBjYW4gaW50cm9kdWNlIFhTUyByaXNrcy5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfbyBleHRlbmRzIMm1RG9tQWRhcHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgc3VwcG9ydHNET01FdmVudHMoKTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBzZWN1cml0eSBSZXBsYWNpbmcgYnVpbHQtaW4gc2FuaXRpemF0aW9uIHByb3ZpZGVycyBleHBvc2VzIHRoZSBhcHBsaWNhdGlvbiB0byBYU1Mgcmlza3MuXHJcbiAqIEF0dGFja2VyLWNvbnRyb2xsZWQgZGF0YSBpbnRyb2R1Y2VkIGJ5IGFuIHVuc2FuaXRpemVkIHByb3ZpZGVyIGNvdWxkIGV4cG9zZSB5b3VyXHJcbiAqIGFwcGxpY2F0aW9uIHRvIFhTUyByaXNrcy4gRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlIFtTZWN1cml0eSBHdWlkZV0oaHR0cDovL2cuY28vbmcvc2VjdXJpdHkpLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtUJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUzogU3RhdGljUHJvdmlkZXJbXTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1QlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTX19QT1NUX1IzX186IG5ldmVyW107XHJcblxyXG4vKipcclxuICogQSBgRG9tQWRhcHRlcmAgcG93ZXJlZCBieSBmdWxsIGJyb3dzZXIgRE9NIEFQSXMuXHJcbiAqXHJcbiAqIEBzZWN1cml0eSBUcmVhZCBjYXJlZnVsbHkhIEludGVyYWN0aW5nIHdpdGggdGhlIERPTSBkaXJlY3RseSBpcyBkYW5nZXJvdXMgYW5kXHJcbiAqIGNhbiBpbnRyb2R1Y2UgWFNTIHJpc2tzLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVCcm93c2VyRG9tQWRhcHRlciBleHRlbmRzIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfbyB7XHJcbiAgICBzdGF0aWMgbWFrZUN1cnJlbnQoKTogdm9pZDtcclxuICAgIGdldFByb3BlcnR5KGVsOiBOb2RlLCBuYW1lOiBzdHJpbmcpOiBhbnk7XHJcbiAgICBsb2coZXJyb3I6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBsb2dHcm91cChlcnJvcjogc3RyaW5nKTogdm9pZDtcclxuICAgIGxvZ0dyb3VwRW5kKCk6IHZvaWQ7XHJcbiAgICBvbkFuZENhbmNlbChlbDogTm9kZSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBGdW5jdGlvbjtcclxuICAgIGRpc3BhdGNoRXZlbnQoZWw6IE5vZGUsIGV2dDogYW55KTogdm9pZDtcclxuICAgIHJlbW92ZShub2RlOiBOb2RlKTogTm9kZTtcclxuICAgIGdldFZhbHVlKGVsOiBhbnkpOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZywgZG9jPzogRG9jdW1lbnQpOiBIVE1MRWxlbWVudDtcclxuICAgIGNyZWF0ZUh0bWxEb2N1bWVudCgpOiBIVE1MRG9jdW1lbnQ7XHJcbiAgICBnZXREZWZhdWx0RG9jdW1lbnQoKTogRG9jdW1lbnQ7XHJcbiAgICBpc0VsZW1lbnROb2RlKG5vZGU6IE5vZGUpOiBib29sZWFuO1xyXG4gICAgaXNTaGFkb3dSb290KG5vZGU6IGFueSk6IGJvb2xlYW47XHJcbiAgICBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IEV2ZW50VGFyZ2V0IHwgbnVsbDtcclxuICAgIGdldEhpc3RvcnkoKTogSGlzdG9yeTtcclxuICAgIGdldExvY2F0aW9uKCk6IExvY2F0aW9uO1xyXG4gICAgZ2V0QmFzZUhyZWYoZG9jOiBEb2N1bWVudCk6IHN0cmluZyB8IG51bGw7XHJcbiAgICByZXNldEJhc2VFbGVtZW50KCk6IHZvaWQ7XHJcbiAgICBnZXRVc2VyQWdlbnQoKTogc3RyaW5nO1xyXG4gICAgcGVyZm9ybWFuY2VOb3coKTogbnVtYmVyO1xyXG4gICAgc3VwcG9ydHNDb29raWVzKCk6IGJvb2xlYW47XHJcbiAgICBnZXRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVCcm93c2VyR2V0VGVzdGFiaWxpdHkgaW1wbGVtZW50cyBHZXRUZXN0YWJpbGl0eSB7XHJcbiAgICBzdGF0aWMgaW5pdCgpOiB2b2lkO1xyXG4gICAgYWRkVG9XaW5kb3cocmVnaXN0cnk6IFRlc3RhYmlsaXR5UmVnaXN0cnkpOiB2b2lkO1xyXG4gICAgZmluZFRlc3RhYmlsaXR5SW5UcmVlKHJlZ2lzdHJ5OiBUZXN0YWJpbGl0eVJlZ2lzdHJ5LCBlbGVtOiBhbnksIGZpbmRJbkFuY2VzdG9yczogYm9vbGVhbik6IFRlc3RhYmlsaXR5IHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVEb21FdmVudHNQbHVnaW4gZXh0ZW5kcyDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2cge1xyXG4gICAgY29uc3RydWN0b3IoZG9jOiBhbnkpO1xyXG4gICAgc3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb247XHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHRhcmdldDogYW55LCBldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVEb21SZW5kZXJlckZhY3RvcnkyIGltcGxlbWVudHMgUmVuZGVyZXJGYWN0b3J5MiB7XHJcbiAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjtcclxuICAgIHByaXZhdGUgc2hhcmVkU3R5bGVzSG9zdDtcclxuICAgIHByaXZhdGUgYXBwSWQ7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyQnlDb21wSWQ7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZW5kZXJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLCBzaGFyZWRTdHlsZXNIb3N0OiDJtURvbVNoYXJlZFN0eWxlc0hvc3QsIGFwcElkOiBzdHJpbmcpO1xyXG4gICAgY3JlYXRlUmVuZGVyZXIoZWxlbWVudDogYW55LCB0eXBlOiBSZW5kZXJlclR5cGUyIHwgbnVsbCk6IFJlbmRlcmVyMjtcclxuICAgIGJlZ2luKCk6IHZvaWQ7XHJcbiAgICBlbmQoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVEb21TYW5pdGl6ZXJJbXBsIGV4dGVuZHMgRG9tU2FuaXRpemVyIHtcclxuICAgIHByaXZhdGUgX2RvYztcclxuICAgIGNvbnN0cnVjdG9yKF9kb2M6IGFueSk7XHJcbiAgICBzYW5pdGl6ZShjdHg6IFNlY3VyaXR5Q29udGV4dCwgdmFsdWU6IFNhZmVWYWx1ZSB8IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWU6IHN0cmluZyk6IFNhZmVIdG1sO1xyXG4gICAgYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbHVlOiBzdHJpbmcpOiBTYWZlU3R5bGU7XHJcbiAgICBieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlOiBzdHJpbmcpOiBTYWZlU2NyaXB0O1xyXG4gICAgYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVVybDtcclxuICAgIGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVJlc291cmNlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtURvbVNoYXJlZFN0eWxlc0hvc3QgZXh0ZW5kcyDJtVNoYXJlZFN0eWxlc0hvc3QgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBfZG9jO1xyXG4gICAgcHJpdmF0ZSBfaG9zdE5vZGVzO1xyXG4gICAgcHJpdmF0ZSBfc3R5bGVOb2RlcztcclxuICAgIGNvbnN0cnVjdG9yKF9kb2M6IGFueSk7XHJcbiAgICBwcml2YXRlIF9hZGRTdHlsZXNUb0hvc3Q7XHJcbiAgICBhZGRIb3N0KGhvc3ROb2RlOiBOb2RlKTogdm9pZDtcclxuICAgIHJlbW92ZUhvc3QoaG9zdE5vZGU6IE5vZGUpOiB2b2lkO1xyXG4gICAgb25TdHlsZXNBZGRlZChhZGRpdGlvbnM6IFNldDxzdHJpbmc+KTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1RUxFTUVOVF9QUk9CRV9QUk9WSURFUlM6IFByb3ZpZGVyW107XHJcblxyXG4vKipcclxuICogSW4gSXZ5LCB3ZSBkb24ndCBzdXBwb3J0IE5nUHJvYmUgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gc2V0IG9mIHRlc3RpbmcgdXRpbGl0aWVzXHJcbiAqIHdpdGggbW9yZSByb2J1c3QgZnVuY3Rpb25hbGl0eS5cclxuICpcclxuICogV2Ugc2hvdWxkbid0IGJyaW5nIGluIE5nUHJvYmUgYmVjYXVzZSBpdCBwcmV2ZW50cyBEZWJ1Z05vZGUgYW5kIGZyaWVuZHMgZnJvbVxyXG4gKiB0cmVlLXNoYWtpbmcgcHJvcGVybHkuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtUVMRU1FTlRfUFJPQkVfUFJPVklERVJTX19QT1NUX1IzX186IG5ldmVyW107XHJcblxyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVlc2NhcGVIdG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1ZmxhdHRlblN0eWxlcyhjb21wSWQ6IHN0cmluZywgc3R5bGVzOiBBcnJheTxhbnkgfCBhbnlbXT4sIHRhcmdldDogc3RyaW5nW10pOiBzdHJpbmdbXTtcclxuZXhwb3J0IHsgybVnZXRET00gfVxyXG5cclxuLyoqXHJcbiAqIEluIEl2eSwgc3VwcG9ydCBmb3IgSGFtbWVyIGdlc3R1cmVzIGlzIG9wdGlvbmFsLCBzbyBhcHBsaWNhdGlvbnMgbXVzdFxyXG4gKiBpbXBvcnQgdGhlIGBIYW1tZXJNb2R1bGVgIGF0IHJvb3QgdG8gdHVybiBvbiBzdXBwb3J0LiBUaGlzIG1lYW5zIHRoYXRcclxuICogSGFtbWVyLXNwZWNpZmljIGNvZGUgY2FuIGJlIHRyZWUtc2hha2VuIGF3YXkgaWYgbm90IG5lZWRlZC5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1SEFNTUVSX1BST1ZJREVSU19fUE9TVF9SM19fOiBuZXZlcltdO1xyXG5cclxuLyoqXHJcbiAqIEV2ZW50IHBsdWdpbiB0aGF0IGFkZHMgSGFtbWVyIHN1cHBvcnQgdG8gYW4gYXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBIYW1tZXJNb2R1bGVcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1SGFtbWVyR2VzdHVyZXNQbHVnaW4gZXh0ZW5kcyDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9wbGF0Zm9ybV9icm93c2VyX2cge1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnO1xyXG4gICAgcHJpdmF0ZSBjb25zb2xlO1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI/O1xyXG4gICAgY29uc3RydWN0b3IoZG9jOiBhbnksIF9jb25maWc6IEhhbW1lckdlc3R1cmVDb25maWcsIGNvbnNvbGU6IMm1Q29uc29sZSwgbG9hZGVyPzogSGFtbWVyTG9hZGVyIHwgbnVsbCB8IHVuZGVmaW5lZCk7XHJcbiAgICBzdXBwb3J0cyhldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbjtcclxuICAgIGlzQ3VzdG9tRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWluaXREb21BZGFwdGVyKCk6IHZvaWQ7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtUlOVEVSTkFMX0JST1dTRVJfUExBVEZPUk1fUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQSBicm93c2VyIHBsdWctaW4gdGhhdCBwcm92aWRlcyBzdXBwb3J0IGZvciBoYW5kbGluZyBvZiBrZXkgZXZlbnRzIGluIEFuZ3VsYXIuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUtleUV2ZW50c1BsdWdpbiBleHRlbmRzIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX3BsYXRmb3JtX2Jyb3dzZXJfZyB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGFuIGluc3RhbmNlIG9mIHRoZSBicm93c2VyIHBsdWctaW4uXHJcbiAgICAgKiBAcGFyYW0gZG9jIFRoZSBkb2N1bWVudCBpbiB3aGljaCBrZXkgZXZlbnRzIHdpbGwgYmUgZGV0ZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRvYzogYW55KTtcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyB3aGV0aGVyIGEgbmFtZWQga2V5IGV2ZW50IGlzIHN1cHBvcnRlZC5cclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUgVGhlIGV2ZW50IG5hbWUgdG8gcXVlcnkuXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG5hbWVkIGtleSBldmVudCBpcyBzdXBwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIHN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBlbGVtZW50IGFuZCBrZXkgZXZlbnQuXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgSFRNTCBlbGVtZW50IHRvIHJlY2VpdmUgZXZlbnQgbm90aWZpY2F0aW9ucy5cclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGtleSBldmVudCB0byBsaXN0ZW4gZm9yLlxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIgQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBvY2N1cnMuIFJlY2VpdmVzIHRoZVxyXG4gICAgICogZXZlbnQgb2JqZWN0IGFzIGFuIGFyZ3VtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGtleSBldmVudCB0aGF0IHdhcyByZWdpc3RlcmVkLlxyXG4gICAgICovXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbjtcclxuICAgIHN0YXRpYyBwYXJzZUV2ZW50TmFtZShldmVudE5hbWU6IHN0cmluZyk6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9IHwgbnVsbDtcclxuICAgIHN0YXRpYyBnZXRFdmVudEZ1bGxLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgYSBoYW5kbGVyIGNhbGxiYWNrIGZvciBhIGtleSBldmVudC5cclxuICAgICAqIEBwYXJhbSBmdWxsS2V5IFRoZSBldmVudCBuYW1lIHRoYXQgY29tYmluZXMgYWxsIHNpbXVsdGFuZW91cyBrZXlzdHJva2VzLlxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIgVGhlIGZ1bmN0aW9uIHRoYXQgcmVzcG9uZHMgdG8gdGhlIGtleSBldmVudC5cclxuICAgICAqIEBwYXJhbSB6b25lIFRoZSB6b25lIGluIHdoaWNoIHRoZSBldmVudCBvY2N1cnJlZC5cclxuICAgICAqIEByZXR1cm5zIEEgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBldmVudENhbGxiYWNrKGZ1bGxLZXk6IGFueSwgaGFuZGxlcjogRnVuY3Rpb24sIHpvbmU6IE5nWm9uZSk6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtU5BTUVTUEFDRV9VUklTOiB7XHJcbiAgICBbbnM6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1U2hhcmVkU3R5bGVzSG9zdCB7XHJcbiAgICBhZGRTdHlsZXMoc3R5bGVzOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbiAgICBvblN0eWxlc0FkZGVkKGFkZGl0aW9uczogU2V0PHN0cmluZz4pOiB2b2lkO1xyXG4gICAgZ2V0QWxsU3R5bGVzKCk6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtXNoaW1Db250ZW50QXR0cmlidXRlKGNvbXBvbmVudFNob3J0SWQ6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1c2hpbUhvc3RBdHRyaWJ1dGUoY29tcG9uZW50U2hvcnRJZDogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIEFuIGlkIHRoYXQgaWRlbnRpZmllcyBhIHBhcnRpY3VsYXIgYXBwbGljYXRpb24gYmVpbmcgYm9vdHN0cmFwcGVkLCB0aGF0IHNob3VsZFxyXG4gKiBtYXRjaCBhY3Jvc3MgdGhlIGNsaWVudC9zZXJ2ZXIgYm91bmRhcnkuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtVRSQU5TSVRJT05fSUQ6IEluamVjdGlvblRva2VuPHVua25vd24+O1xyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=