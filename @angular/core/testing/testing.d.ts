/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AbstractType } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Compiler } from '@angular/core';
import { CompilerOptions } from '@angular/core';
import { Component } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { DebugElement } from '@angular/core';
import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { InjectFlags } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgZone } from '@angular/core';
import { Pipe } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { SchemaMetadata } from '@angular/core';
import { Type } from '@angular/core';


import * as ɵngcc0 from '@angular/core';
export declare const __core_private_testing_placeholder__ = "";


/**
 * Wraps a test function in an asynchronous test zone. The test will automatically
 * complete when all asynchronous calls within this zone are done. Can be used
 * to wrap an {@link inject} call.
 *
 * Example:
 *
 * ```
 * it('...', async(inject([AClass], (object) => {
 *   object.doSomething.then(() => {
 *     expect(...);
 *   })
 * });
 * ```
 *
 * @publicApi
 */
export declare function async(fn: Function): (done: any) => any;

/**
 * Fixture for debugging and testing a component.
 *
 * @publicApi
 */
export declare class ComponentFixture<T> {
    componentRef: ComponentRef<T>;
    ngZone: NgZone | null;
    private _autoDetect;
    /**
     * The DebugElement associated with the root element of this component.
     */
    debugElement: DebugElement;
    /**
     * The instance of the root component class.
     */
    componentInstance: T;
    /**
     * The native element at the root of the component.
     */
    nativeElement: any;
    /**
     * The ElementRef for the element at the root of the component.
     */
    elementRef: ElementRef;
    /**
     * The ChangeDetectorRef for the component
     */
    changeDetectorRef: ChangeDetectorRef;
    private _renderer;
    private _isStable;
    private _isDestroyed;
    private _resolve;
    private _promise;
    private _onUnstableSubscription;
    private _onStableSubscription;
    private _onMicrotaskEmptySubscription;
    private _onErrorSubscription;
    constructor(componentRef: ComponentRef<T>, ngZone: NgZone | null, _autoDetect: boolean);
    private _tick;
    /**
     * Trigger a change detection cycle for the component.
     */
    detectChanges(checkNoChanges?: boolean): void;
    /**
     * Do a change detection run to make sure there were no changes.
     */
    checkNoChanges(): void;
    /**
     * Set whether the fixture should autodetect changes.
     *
     * Also runs detectChanges once so that any existing change is detected.
     */
    autoDetectChanges(autoDetect?: boolean): void;
    /**
     * Return whether the fixture is currently stable or has async tasks that have not been completed
     * yet.
     */
    isStable(): boolean;
    /**
     * Get a promise that resolves when the fixture is stable.
     *
     * This can be used to resume testing after events have triggered asynchronous activity or
     * asynchronous change detection.
     */
    whenStable(): Promise<any>;
    private _getRenderer;
    /**
     * Get a promise that resolves when the ui state is stable following animations.
     */
    whenRenderingDone(): Promise<any>;
    /**
     * Trigger component destruction.
     */
    destroy(): void;
}

/**
 * @publicApi
 */
export declare const ComponentFixtureAutoDetect: InjectionToken<boolean[]>;

/**
 * @publicApi
 */
export declare const ComponentFixtureNoNgZone: InjectionToken<boolean[]>;

/**
 * Discard all remaining periodic tasks.
 *
 * @publicApi
 */
export declare function discardPeriodicTasks(): void;

/**
 * Wraps a function to be executed in the fakeAsync zone:
 * - microtasks are manually executed by calling `flushMicrotasks()`,
 * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
 *
 * If there are any pending timers at the end of the function, an exception will be thrown.
 *
 * Can be used to wrap inject() calls.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/testing/ts/fake_async.ts region='basic'}
 *
 * @param fn
 * @returns The function wrapped to be executed in the fakeAsync zone
 *
 * @publicApi
 */
export declare function fakeAsync(fn: Function): (...args: any[]) => any;

/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone by
 * draining the macrotask queue until it is empty. The returned value is the milliseconds
 * of time that would have been elapsed.
 *
 * @param maxTurns
 * @returns The simulated time elapsed, in millis.
 *
 * @publicApi
 */
export declare function flush(maxTurns?: number): number;

/**
 * Flush any pending microtasks.
 *
 * @publicApi
 */
export declare function flushMicrotasks(): void;

/**
 * Returns a singleton of the applicable `TestBed`.
 *
 * It will be either an instance of `TestBedViewEngine` or `TestBedRender3`.
 *
 * @publicApi
 */
export declare const getTestBed: () => TestBed;

/**
 * Allows injecting dependencies in `beforeEach()` and `it()`.
 *
 * Example:
 *
 * ```
 * beforeEach(inject([Dependency, AClass], (dep, object) => {
 *   // some code that uses `dep` and `object`
 *   // ...
 * }));
 *
 * it('...', inject([AClass], (object) => {
 *   object.doSomething();
 *   expect(...);
 * })
 * ```
 *
 * Notes:
 * - inject is currently a function because of some Traceur limitation the syntax should
 * eventually
 *   becomes `it('...', @Inject (object: AClass, async: AsyncTestCompleter) => { ... });`
 *
 * @publicApi
 */
export declare function inject(tokens: any[], fn: Function): () => any;

/**
 * @publicApi
 */
export declare class InjectSetupWrapper {
    private _moduleDef;
    constructor(_moduleDef: () => TestModuleMetadata);
    private _addModule;
    inject(tokens: any[], fn: Function): () => any;
}


/**
 * Type used for modifications to metadata
 *
 * @publicApi
 */
export declare type MetadataOverride<T> = {
    add?: Partial<T>;
    remove?: Partial<T>;
    set?: Partial<T>;
};

/**
 * Clears out the shared fake async zone for a test.
 * To be called in a global `beforeEach`.
 *
 * @publicApi
 */
export declare function resetFakeAsyncZone(): void;

/**
 * @publicApi
 */
export declare interface TestBed {
    platform: PlatformRef;
    ngModule: Type<any> | Type<any>[];
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     */
    initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, aotSummaries?: () => any[]): void;
    /**
     * Reset the providers for the test injector.
     */
    resetTestEnvironment(): void;
    resetTestingModule(): void;
    configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): void;
    configureTestingModule(moduleDef: TestModuleMetadata): void;
    compileComponents(): Promise<any>;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get(token: any, notFoundValue?: any): any;
    execute(tokens: any[], fn: Function, context?: any): any;
    overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): void;
    overrideComponent(component: Type<any>, override: MetadataOverride<Component>): void;
    overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): void;
    overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): void;
    /**
     * Overwrites all providers for the given token with the given provider definition.
     */
    overrideProvider(token: any, provider: {
        useFactory: Function;
        deps: any[];
    }): void;
    overrideProvider(token: any, provider: {
        useValue: any;
    }): void;
    overrideProvider(token: any, provider: {
        useFactory?: Function;
        useValue?: any;
        deps?: any[];
    }): void;
    overrideTemplateUsingTestingModule(component: Type<any>, template: string): void;
    createComponent<T>(component: Type<T>): ComponentFixture<T>;
}

/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * `TestBed` is the primary api for writing unit tests for Angular applications and libraries.
 *
 * Note: Use `TestBed` in tests. It will be set to either `TestBedViewEngine` or `TestBedRender3`
 * according to the compiler used.
 *
 * @publicApi
 */
export declare const TestBed: TestBedStatic;

/**
 * Static methods implemented by the `TestBedViewEngine` and `TestBedRender3`
 *
 * @publicApi
 */
export declare interface TestBedStatic {
    new (...args: any[]): TestBed;
    initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, aotSummaries?: () => any[]): TestBed;
    /**
     * Reset the providers for the test injector.
     */
    resetTestEnvironment(): void;
    resetTestingModule(): TestBedStatic;
    /**
     * Allows overriding default compiler providers and settings
     * which are defined in test_injector.js
     */
    configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): TestBedStatic;
    /**
     * Allows overriding default providers, directives, pipes, modules of the test injector,
     * which are defined in test_injector.js
     */
    configureTestingModule(moduleDef: TestModuleMetadata): TestBedStatic;
    /**
     * Compile components with a `templateUrl` for the test's NgModule.
     * It is necessary to call this function
     * as fetching urls is asynchronous.
     */
    compileComponents(): Promise<any>;
    overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): TestBedStatic;
    overrideComponent(component: Type<any>, override: MetadataOverride<Component>): TestBedStatic;
    overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): TestBedStatic;
    overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): TestBedStatic;
    overrideTemplate(component: Type<any>, template: string): TestBedStatic;
    /**
     * Overrides the template of the given component, compiling the template
     * in the context of the TestingModule.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    overrideTemplateUsingTestingModule(component: Type<any>, template: string): TestBedStatic;
    /**
     * Overwrites all providers for the given token with the given provider definition.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    overrideProvider(token: any, provider: {
        useFactory: Function;
        deps: any[];
    }): TestBedStatic;
    overrideProvider(token: any, provider: {
        useValue: any;
    }): TestBedStatic;
    overrideProvider(token: any, provider: {
        useFactory?: Function;
        useValue?: any;
        deps?: any[];
    }): TestBedStatic;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get(token: any, notFoundValue?: any): any;
    createComponent<T>(component: Type<T>): ComponentFixture<T>;
}

/**
 * An abstract class for inserting the root test component element in a platform independent way.
 *
 * @publicApi
 */
export declare class TestComponentRenderer {
    insertRootElement(rootElementId: string): void;
}

/**
 * @publicApi
 */
export declare type TestModuleMetadata = {
    providers?: any[];
    declarations?: any[];
    imports?: any[];
    schemas?: Array<SchemaMetadata | any[]>;
    aotSummaries?: () => any[];
};

/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
 *
 * The microtasks queue is drained at the very start of this function and after any timer callback
 * has been executed.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/testing/ts/fake_async.ts region='basic'}
 *
 * @param millis, the number of millisecond to advance the virtual timer
 * @param tickOptions, the options of tick with a flag called
 * processNewMacroTasksSynchronously, whether to invoke the new macroTasks, by default is
 * false, means the new macroTasks will be invoked
 *
 * For example,
 *
 * it ('test with nested setTimeout', fakeAsync(() => {
 *   let nestedTimeoutInvoked = false;
 *   function funcWithNestedTimeout() {
 *     setTimeout(() => {
 *       nestedTimeoutInvoked = true;
 *     });
 *   };
 *   setTimeout(funcWithNestedTimeout);
 *   tick();
 *   expect(nestedTimeoutInvoked).toBe(true);
 * }));
 *
 * in this case, we have a nested timeout (new macroTask), when we tick, both the
 * funcWithNestedTimeout and the nested timeout both will be invoked.
 *
 * it ('test with nested setTimeout', fakeAsync(() => {
 *   let nestedTimeoutInvoked = false;
 *   function funcWithNestedTimeout() {
 *     setTimeout(() => {
 *       nestedTimeoutInvoked = true;
 *     });
 *   };
 *   setTimeout(funcWithNestedTimeout);
 *   tick(0, {processNewMacroTasksSynchronously: false});
 *   expect(nestedTimeoutInvoked).toBe(false);
 * }));
 *
 * if we pass the tickOptions with processNewMacroTasksSynchronously to be false, the nested timeout
 * will not be invoked.
 *
 *
 * @publicApi
 */
export declare function tick(millis?: number, tickOptions?: {
    processNewMacroTasksSynchronously: boolean;
}): void;

/**
 * @publicApi
 */
export declare function withModule(moduleDef: TestModuleMetadata): InjectSetupWrapper;

export declare function withModule(moduleDef: TestModuleMetadata, fn: Function): () => any;

/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * `TestBed` is the primary api for writing unit tests for Angular applications and libraries.
 *
 * Note: Use `TestBed` in tests. It will be set to either `TestBedViewEngine` or `TestBedRender3`
 * according to the compiler used.
 */
export declare class ɵangular_packages_core_testing_testing_a implements TestBed {
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     */
    static initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, aotSummaries?: () => any[]): ɵangular_packages_core_testing_testing_a;
    /**
     * Reset the providers for the test injector.
     */
    static resetTestEnvironment(): void;
    static resetTestingModule(): TestBedStatic;
    /**
     * Allows overriding default compiler providers and settings
     * which are defined in test_injector.js
     */
    static configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): TestBedStatic;
    /**
     * Allows overriding default providers, directives, pipes, modules of the test injector,
     * which are defined in test_injector.js
     */
    static configureTestingModule(moduleDef: TestModuleMetadata): TestBedStatic;
    /**
     * Compile components with a `templateUrl` for the test's NgModule.
     * It is necessary to call this function
     * as fetching urls is asynchronous.
     */
    static compileComponents(): Promise<any>;
    static overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): TestBedStatic;
    static overrideComponent(component: Type<any>, override: MetadataOverride<Component>): TestBedStatic;
    static overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): TestBedStatic;
    static overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): TestBedStatic;
    static overrideTemplate(component: Type<any>, template: string): TestBedStatic;
    /**
     * Overrides the template of the given component, compiling the template
     * in the context of the TestingModule.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    static overrideTemplateUsingTestingModule(component: Type<any>, template: string): TestBedStatic;
    /**
     * Overwrites all providers for the given token with the given provider definition.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    static overrideProvider(token: any, provider: {
        useFactory: Function;
        deps: any[];
    }): TestBedStatic;
    static overrideProvider(token: any, provider: {
        useValue: any;
    }): TestBedStatic;
    static inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
    static inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    static get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /**
     * @deprecated from v9.0.0 use TestBed.inject
     * @suppress {duplicate}
     */
    static get(token: any, notFoundValue?: any): any;
    static createComponent<T>(component: Type<T>): ComponentFixture<T>;
    private _instantiated;
    private _compiler;
    private _moduleRef;
    private _moduleFactory;
    private _compilerOptions;
    private _moduleOverrides;
    private _componentOverrides;
    private _directiveOverrides;
    private _pipeOverrides;
    private _providers;
    private _declarations;
    private _imports;
    private _schemas;
    private _activeFixtures;
    private _testEnvAotSummaries;
    private _aotSummaries;
    private _templateOverrides;
    private _isRoot;
    private _rootProviderOverrides;
    platform: PlatformRef;
    ngModule: Type<any> | Type<any>[];
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     */
    initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, aotSummaries?: () => any[]): void;
    /**
     * Reset the providers for the test injector.
     */
    resetTestEnvironment(): void;
    resetTestingModule(): void;
    configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): void;
    configureTestingModule(moduleDef: TestModuleMetadata): void;
    compileComponents(): Promise<any>;
    private _initIfNeeded;
    private _createCompilerAndModule;
    private _assertNotInstantiated;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get(token: any, notFoundValue?: any): any;
    execute(tokens: any[], fn: Function, context?: any): any;
    overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): void;
    overrideComponent(component: Type<any>, override: MetadataOverride<Component>): void;
    overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): void;
    overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): void;
    /**
     * Overwrites all providers for the given token with the given provider definition.
     */
    overrideProvider(token: any, provider: {
        useFactory: Function;
        deps: any[];
    }): void;
    overrideProvider(token: any, provider: {
        useValue: any;
    }): void;
    private overrideProviderImpl;
    overrideTemplateUsingTestingModule(component: Type<any>, template: string): void;
    createComponent<T>(component: Type<T>): ComponentFixture<T>;
}

/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * TestBed is the primary api for writing unit tests for Angular applications and libraries.
 *
 * Note: Use `TestBed` in tests. It will be set to either `TestBedViewEngine` or `TestBedRender3`
 * according to the compiler used.
 */
export declare class ɵangular_packages_core_testing_testing_b implements TestBed {
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     *
     * @publicApi
     */
    static initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, aotSummaries?: () => any[]): TestBed;
    /**
     * Reset the providers for the test injector.
     *
     * @publicApi
     */
    static resetTestEnvironment(): void;
    static configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): TestBedStatic;
    /**
     * Allows overriding default providers, directives, pipes, modules of the test injector,
     * which are defined in test_injector.js
     */
    static configureTestingModule(moduleDef: TestModuleMetadata): TestBedStatic;
    /**
     * Compile components with a `templateUrl` for the test's NgModule.
     * It is necessary to call this function
     * as fetching urls is asynchronous.
     */
    static compileComponents(): Promise<any>;
    static overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): TestBedStatic;
    static overrideComponent(component: Type<any>, override: MetadataOverride<Component>): TestBedStatic;
    static overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): TestBedStatic;
    static overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): TestBedStatic;
    static overrideTemplate(component: Type<any>, template: string): TestBedStatic;
    /**
     * Overrides the template of the given component, compiling the template
     * in the context of the TestingModule.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    static overrideTemplateUsingTestingModule(component: Type<any>, template: string): TestBedStatic;
    static overrideProvider(token: any, provider: {
        useFactory: Function;
        deps: any[];
    }): TestBedStatic;
    static overrideProvider(token: any, provider: {
        useValue: any;
    }): TestBedStatic;
    static inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
    static inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    static get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    static get(token: any, notFoundValue?: any): any;
    static createComponent<T>(component: Type<T>): ComponentFixture<T>;
    static resetTestingModule(): TestBedStatic;
    platform: PlatformRef;
    ngModule: Type<any> | Type<any>[];
    private _compiler;
    private _testModuleRef;
    private _activeFixtures;
    private _globalCompilationChecked;
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     *
     * @publicApi
     */
    initTestEnvironment(ngModule: Type<any> | Type<any>[], platform: PlatformRef, aotSummaries?: () => any[]): void;
    /**
     * Reset the providers for the test injector.
     *
     * @publicApi
     */
    resetTestEnvironment(): void;
    resetTestingModule(): void;
    configureCompiler(config: {
        providers?: any[];
        useJit?: boolean;
    }): void;
    configureTestingModule(moduleDef: TestModuleMetadata): void;
    compileComponents(): Promise<any>;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
    inject<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue: null, flags?: InjectFlags): T | null;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): any;
    /** @deprecated from v9.0.0 use TestBed.inject */
    get(token: any, notFoundValue?: any): any;
    execute(tokens: any[], fn: Function, context?: any): any;
    overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): void;
    overrideComponent(component: Type<any>, override: MetadataOverride<Component>): void;
    overrideTemplateUsingTestingModule(component: Type<any>, template: string): void;
    overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>): void;
    overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>): void;
    /**
     * Overwrites all providers for the given token with the given provider definition.
     */
    overrideProvider(token: any, provider: {
        useFactory?: Function;
        useValue?: any;
        deps?: any[];
    }): void;
    createComponent<T>(type: Type<T>): ComponentFixture<T>;
    private assertNotInstantiated;
    /**
     * Check whether the module scoping queue should be flushed, and flush it if needed.
     *
     * When the TestBed is reset, it clears the JIT module compilation queue, cancelling any
     * in-progress module compilation. This creates a potential hazard - the very first time the
     * TestBed is initialized (or if it's reset without being initialized), there may be pending
     * compilations of modules declared in global scope. These compilations should be finished.
     *
     * To ensure that globally declared modules have their components scoped properly, this function
     * is called whenever TestBed is initialized or reset. The _first_ time that this happens, prior
     * to any other operations, the scoping queue is flushed.
     */
    private checkGlobalCompilationFinished;
    private destroyActiveFixtures;
}

export declare function ɵangular_packages_core_testing_testing_c(): ɵangular_packages_core_testing_testing_b;

export declare class ɵMetadataOverrider {
    private _references;
    /**
     * Creates a new instance for the given metadata class
     * based on an old instance and overrides.
     */
    overrideMetadata<C extends T, T>(metadataClass: {
        new (options: T): C;
    }, oldMetadata: C, override: MetadataOverride<T>): C;
}

/**
 * Special interface to the compiler only used by testing
 *
 * @publicApi
 */
export declare class ɵTestingCompiler extends Compiler {
    get injector(): Injector;
    overrideModule(module: Type<any>, overrides: MetadataOverride<NgModule>): void;
    overrideDirective(directive: Type<any>, overrides: MetadataOverride<Directive>): void;
    overrideComponent(component: Type<any>, overrides: MetadataOverride<Component>): void;
    overridePipe(directive: Type<any>, overrides: MetadataOverride<Pipe>): void;
    /**
     * Allows to pass the compile summary from AOT compilation to the JIT compiler,
     * so that it can use the code generated by AOT.
     */
    loadAotSummaries(summaries: () => any[]): void;
    /**
     * Gets the component factory for the given component.
     * This assumes that the component has been compiled before calling this call using
     * `compileModuleAndAllComponents*`.
     */
    getComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
    /**
     * Returns the component type that is stored in the given error.
     * This can be used for errors created by compileModule...
     */
    getComponentFromError(error: Error): Type<any> | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵTestingCompiler, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵTestingCompiler>;
}

/**
 * A factory for creating a Compiler
 *
 * @publicApi
 */
export declare abstract class ɵTestingCompilerFactory {
    abstract createTestingCompiler(options?: CompilerOptions[]): ɵTestingCompiler;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5kLnRzIiwic291cmNlcyI6WyJ0ZXN0aW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMS4xMlxuICogKGMpIDIwMTAtMjAyMCBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG5pbXBvcnQgeyBBYnN0cmFjdFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcGlsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcGlsZXJPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWJ1Z0VsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0RmxhZ3MgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm1SZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2NoZW1hTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IF9fY29yZV9wcml2YXRlX3Rlc3RpbmdfcGxhY2Vob2xkZXJfXyA9IFwiXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgdGVzdCBmdW5jdGlvbiBpbiBhbiBhc3luY2hyb25vdXMgdGVzdCB6b25lLiBUaGUgdGVzdCB3aWxsIGF1dG9tYXRpY2FsbHlcclxuICogY29tcGxldGUgd2hlbiBhbGwgYXN5bmNocm9ub3VzIGNhbGxzIHdpdGhpbiB0aGlzIHpvbmUgYXJlIGRvbmUuIENhbiBiZSB1c2VkXHJcbiAqIHRvIHdyYXAgYW4ge0BsaW5rIGluamVjdH0gY2FsbC5cclxuICpcclxuICogRXhhbXBsZTpcclxuICpcclxuICogYGBgXHJcbiAqIGl0KCcuLi4nLCBhc3luYyhpbmplY3QoW0FDbGFzc10sIChvYmplY3QpID0+IHtcclxuICogICBvYmplY3QuZG9Tb21ldGhpbmcudGhlbigoKSA9PiB7XHJcbiAqICAgICBleHBlY3QoLi4uKTtcclxuICogICB9KVxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGFzeW5jKGZuOiBGdW5jdGlvbik6IChkb25lOiBhbnkpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBGaXh0dXJlIGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcgYSBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbXBvbmVudEZpeHR1cmU8VD4ge1xyXG4gICAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47XHJcbiAgICBuZ1pvbmU6IE5nWm9uZSB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9hdXRvRGV0ZWN0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgRGVidWdFbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgcm9vdCBlbGVtZW50IG9mIHRoaXMgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBkZWJ1Z0VsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGluc3RhbmNlIG9mIHRoZSByb290IGNvbXBvbmVudCBjbGFzcy5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50SW5zdGFuY2U6IFQ7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYXRpdmUgZWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBuYXRpdmVFbGVtZW50OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBFbGVtZW50UmVmIGZvciB0aGUgZWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ2hhbmdlRGV0ZWN0b3JSZWYgZm9yIHRoZSBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIF9pc1N0YWJsZTtcclxuICAgIHByaXZhdGUgX2lzRGVzdHJveWVkO1xyXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZTtcclxuICAgIHByaXZhdGUgX3Byb21pc2U7XHJcbiAgICBwcml2YXRlIF9vblVuc3RhYmxlU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfb25TdGFibGVTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9vbk1pY3JvdGFza0VtcHR5U3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfb25FcnJvclN1YnNjcmlwdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+LCBuZ1pvbmU6IE5nWm9uZSB8IG51bGwsIF9hdXRvRGV0ZWN0OiBib29sZWFuKTtcclxuICAgIHByaXZhdGUgX3RpY2s7XHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgYSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGZvciB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBkZXRlY3RDaGFuZ2VzKGNoZWNrTm9DaGFuZ2VzPzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERvIGEgY2hhbmdlIGRldGVjdGlvbiBydW4gdG8gbWFrZSBzdXJlIHRoZXJlIHdlcmUgbm8gY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgY2hlY2tOb0NoYW5nZXMoKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IHdoZXRoZXIgdGhlIGZpeHR1cmUgc2hvdWxkIGF1dG9kZXRlY3QgY2hhbmdlcy5cclxuICAgICAqXHJcbiAgICAgKiBBbHNvIHJ1bnMgZGV0ZWN0Q2hhbmdlcyBvbmNlIHNvIHRoYXQgYW55IGV4aXN0aW5nIGNoYW5nZSBpcyBkZXRlY3RlZC5cclxuICAgICAqL1xyXG4gICAgYXV0b0RldGVjdENoYW5nZXMoYXV0b0RldGVjdD86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gd2hldGhlciB0aGUgZml4dHVyZSBpcyBjdXJyZW50bHkgc3RhYmxlIG9yIGhhcyBhc3luYyB0YXNrcyB0aGF0IGhhdmUgbm90IGJlZW4gY29tcGxldGVkXHJcbiAgICAgKiB5ZXQuXHJcbiAgICAgKi9cclxuICAgIGlzU3RhYmxlKCk6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaXh0dXJlIGlzIHN0YWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlc3VtZSB0ZXN0aW5nIGFmdGVyIGV2ZW50cyBoYXZlIHRyaWdnZXJlZCBhc3luY2hyb25vdXMgYWN0aXZpdHkgb3JcclxuICAgICAqIGFzeW5jaHJvbm91cyBjaGFuZ2UgZGV0ZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICB3aGVuU3RhYmxlKCk6IFByb21pc2U8YW55PjtcclxuICAgIHByaXZhdGUgX2dldFJlbmRlcmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdWkgc3RhdGUgaXMgc3RhYmxlIGZvbGxvd2luZyBhbmltYXRpb25zLlxyXG4gICAgICovXHJcbiAgICB3aGVuUmVuZGVyaW5nRG9uZSgpOiBQcm9taXNlPGFueT47XHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgY29tcG9uZW50IGRlc3RydWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDb21wb25lbnRGaXh0dXJlQXV0b0RldGVjdDogSW5qZWN0aW9uVG9rZW48Ym9vbGVhbltdPjtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDb21wb25lbnRGaXh0dXJlTm9OZ1pvbmU6IEluamVjdGlvblRva2VuPGJvb2xlYW5bXT47XHJcblxyXG4vKipcclxuICogRGlzY2FyZCBhbGwgcmVtYWluaW5nIHBlcmlvZGljIHRhc2tzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBkaXNjYXJkUGVyaW9kaWNUYXNrcygpOiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIGZha2VBc3luYyB6b25lOlxyXG4gKiAtIG1pY3JvdGFza3MgYXJlIG1hbnVhbGx5IGV4ZWN1dGVkIGJ5IGNhbGxpbmcgYGZsdXNoTWljcm90YXNrcygpYCxcclxuICogLSB0aW1lcnMgYXJlIHN5bmNocm9ub3VzLCBgdGljaygpYCBzaW11bGF0ZXMgdGhlIGFzeW5jaHJvbm91cyBwYXNzYWdlIG9mIHRpbWUuXHJcbiAqXHJcbiAqIElmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyB0aW1lcnMgYXQgdGhlIGVuZCBvZiB0aGUgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93bi5cclxuICpcclxuICogQ2FuIGJlIHVzZWQgdG8gd3JhcCBpbmplY3QoKSBjYWxscy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICoge0BleGFtcGxlIGNvcmUvdGVzdGluZy90cy9mYWtlX2FzeW5jLnRzIHJlZ2lvbj0nYmFzaWMnfVxyXG4gKlxyXG4gKiBAcGFyYW0gZm5cclxuICogQHJldHVybnMgVGhlIGZ1bmN0aW9uIHdyYXBwZWQgdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIGZha2VBc3luYyB6b25lXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZha2VBc3luYyhmbjogRnVuY3Rpb24pOiAoLi4uYXJnczogYW55W10pID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBTaW11bGF0ZXMgdGhlIGFzeW5jaHJvbm91cyBwYXNzYWdlIG9mIHRpbWUgZm9yIHRoZSB0aW1lcnMgaW4gdGhlIGZha2VBc3luYyB6b25lIGJ5XHJcbiAqIGRyYWluaW5nIHRoZSBtYWNyb3Rhc2sgcXVldWUgdW50aWwgaXQgaXMgZW1wdHkuIFRoZSByZXR1cm5lZCB2YWx1ZSBpcyB0aGUgbWlsbGlzZWNvbmRzXHJcbiAqIG9mIHRpbWUgdGhhdCB3b3VsZCBoYXZlIGJlZW4gZWxhcHNlZC5cclxuICpcclxuICogQHBhcmFtIG1heFR1cm5zXHJcbiAqIEByZXR1cm5zIFRoZSBzaW11bGF0ZWQgdGltZSBlbGFwc2VkLCBpbiBtaWxsaXMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZsdXNoKG1heFR1cm5zPzogbnVtYmVyKTogbnVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEZsdXNoIGFueSBwZW5kaW5nIG1pY3JvdGFza3MuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZsdXNoTWljcm90YXNrcygpOiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzaW5nbGV0b24gb2YgdGhlIGFwcGxpY2FibGUgYFRlc3RCZWRgLlxyXG4gKlxyXG4gKiBJdCB3aWxsIGJlIGVpdGhlciBhbiBpbnN0YW5jZSBvZiBgVGVzdEJlZFZpZXdFbmdpbmVgIG9yIGBUZXN0QmVkUmVuZGVyM2AuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGdldFRlc3RCZWQ6ICgpID0+IFRlc3RCZWQ7XHJcblxyXG4vKipcclxuICogQWxsb3dzIGluamVjdGluZyBkZXBlbmRlbmNpZXMgaW4gYGJlZm9yZUVhY2goKWAgYW5kIGBpdCgpYC5cclxuICpcclxuICogRXhhbXBsZTpcclxuICpcclxuICogYGBgXHJcbiAqIGJlZm9yZUVhY2goaW5qZWN0KFtEZXBlbmRlbmN5LCBBQ2xhc3NdLCAoZGVwLCBvYmplY3QpID0+IHtcclxuICogICAvLyBzb21lIGNvZGUgdGhhdCB1c2VzIGBkZXBgIGFuZCBgb2JqZWN0YFxyXG4gKiAgIC8vIC4uLlxyXG4gKiB9KSk7XHJcbiAqXHJcbiAqIGl0KCcuLi4nLCBpbmplY3QoW0FDbGFzc10sIChvYmplY3QpID0+IHtcclxuICogICBvYmplY3QuZG9Tb21ldGhpbmcoKTtcclxuICogICBleHBlY3QoLi4uKTtcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIGluamVjdCBpcyBjdXJyZW50bHkgYSBmdW5jdGlvbiBiZWNhdXNlIG9mIHNvbWUgVHJhY2V1ciBsaW1pdGF0aW9uIHRoZSBzeW50YXggc2hvdWxkXHJcbiAqIGV2ZW50dWFsbHlcclxuICogICBiZWNvbWVzIGBpdCgnLi4uJywgQEluamVjdCAob2JqZWN0OiBBQ2xhc3MsIGFzeW5jOiBBc3luY1Rlc3RDb21wbGV0ZXIpID0+IHsgLi4uIH0pO2BcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gaW5qZWN0KHRva2VuczogYW55W10sIGZuOiBGdW5jdGlvbik6ICgpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbmplY3RTZXR1cFdyYXBwZXIge1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlRGVmO1xyXG4gICAgY29uc3RydWN0b3IoX21vZHVsZURlZjogKCkgPT4gVGVzdE1vZHVsZU1ldGFkYXRhKTtcclxuICAgIHByaXZhdGUgX2FkZE1vZHVsZTtcclxuICAgIGluamVjdCh0b2tlbnM6IGFueVtdLCBmbjogRnVuY3Rpb24pOiAoKSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIGZvciBtb2RpZmljYXRpb25zIHRvIG1ldGFkYXRhXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTWV0YWRhdGFPdmVycmlkZTxUPiA9IHtcclxuICAgIGFkZD86IFBhcnRpYWw8VD47XHJcbiAgICByZW1vdmU/OiBQYXJ0aWFsPFQ+O1xyXG4gICAgc2V0PzogUGFydGlhbDxUPjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGVhcnMgb3V0IHRoZSBzaGFyZWQgZmFrZSBhc3luYyB6b25lIGZvciBhIHRlc3QuXHJcbiAqIFRvIGJlIGNhbGxlZCBpbiBhIGdsb2JhbCBgYmVmb3JlRWFjaGAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHJlc2V0RmFrZUFzeW5jWm9uZSgpOiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUZXN0QmVkIHtcclxuICAgIHBsYXRmb3JtOiBQbGF0Zm9ybVJlZjtcclxuICAgIG5nTW9kdWxlOiBUeXBlPGFueT4gfCBUeXBlPGFueT5bXTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgZW52aXJvbm1lbnQgZm9yIHRlc3Rpbmcgd2l0aCBhIGNvbXBpbGVyIGZhY3RvcnksIGEgUGxhdGZvcm1SZWYsIGFuZCBhblxyXG4gICAgICogYW5ndWxhciBtb2R1bGUuIFRoZXNlIGFyZSBjb21tb24gdG8gZXZlcnkgdGVzdCBpbiB0aGUgc3VpdGUuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBtYXkgb25seSBiZSBjYWxsZWQgb25jZSwgdG8gc2V0IHVwIHRoZSBjb21tb24gcHJvdmlkZXJzIGZvciB0aGUgY3VycmVudCB0ZXN0XHJcbiAgICAgKiBzdWl0ZSBvbiB0aGUgY3VycmVudCBwbGF0Zm9ybS4gSWYgeW91IGFic29sdXRlbHkgbmVlZCB0byBjaGFuZ2UgdGhlIHByb3ZpZGVycyxcclxuICAgICAqIGZpcnN0IHVzZSBgcmVzZXRUZXN0RW52aXJvbm1lbnRgLlxyXG4gICAgICpcclxuICAgICAqIFRlc3QgbW9kdWxlcyBhbmQgcGxhdGZvcm1zIGZvciBpbmRpdmlkdWFsIHBsYXRmb3JtcyBhcmUgYXZhaWxhYmxlIGZyb21cclxuICAgICAqICdAYW5ndWxhci88cGxhdGZvcm1fbmFtZT4vdGVzdGluZycuXHJcbiAgICAgKi9cclxuICAgIGluaXRUZXN0RW52aXJvbm1lbnQobmdNb2R1bGU6IFR5cGU8YW55PiB8IFR5cGU8YW55PltdLCBwbGF0Zm9ybTogUGxhdGZvcm1SZWYsIGFvdFN1bW1hcmllcz86ICgpID0+IGFueVtdKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIHByb3ZpZGVycyBmb3IgdGhlIHRlc3QgaW5qZWN0b3IuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0VGVzdEVudmlyb25tZW50KCk6IHZvaWQ7XHJcbiAgICByZXNldFRlc3RpbmdNb2R1bGUoKTogdm9pZDtcclxuICAgIGNvbmZpZ3VyZUNvbXBpbGVyKGNvbmZpZzoge1xyXG4gICAgICAgIHByb3ZpZGVycz86IGFueVtdO1xyXG4gICAgICAgIHVzZUppdD86IGJvb2xlYW47XHJcbiAgICB9KTogdm9pZDtcclxuICAgIGNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUobW9kdWxlRGVmOiBUZXN0TW9kdWxlTWV0YWRhdGEpOiB2b2lkO1xyXG4gICAgY29tcGlsZUNvbXBvbmVudHMoKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgaW5qZWN0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4gfCBBYnN0cmFjdFR5cGU8VD4sIG5vdEZvdW5kVmFsdWU/OiBULCBmbGFncz86IEluamVjdEZsYWdzKTogVDtcclxuICAgIGluamVjdDxUPih0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+IHwgQWJzdHJhY3RUeXBlPFQ+LCBub3RGb3VuZFZhbHVlOiBudWxsLCBmbGFncz86IEluamVjdEZsYWdzKTogVCB8IG51bGw7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgZnJvbSB2OS4wLjAgdXNlIFRlc3RCZWQuaW5qZWN0ICovXHJcbiAgICBnZXQ8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBhbnk7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgZnJvbSB2OS4wLjAgdXNlIFRlc3RCZWQuaW5qZWN0ICovXHJcbiAgICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueTtcclxuICAgIGV4ZWN1dGUodG9rZW5zOiBhbnlbXSwgZm46IEZ1bmN0aW9uLCBjb250ZXh0PzogYW55KTogYW55O1xyXG4gICAgb3ZlcnJpZGVNb2R1bGUobmdNb2R1bGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8TmdNb2R1bGU+KTogdm9pZDtcclxuICAgIG92ZXJyaWRlQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxDb21wb25lbnQ+KTogdm9pZDtcclxuICAgIG92ZXJyaWRlRGlyZWN0aXZlKGRpcmVjdGl2ZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxEaXJlY3RpdmU+KTogdm9pZDtcclxuICAgIG92ZXJyaWRlUGlwZShwaXBlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPFBpcGU+KTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlcyBhbGwgcHJvdmlkZXJzIGZvciB0aGUgZ2l2ZW4gdG9rZW4gd2l0aCB0aGUgZ2l2ZW4gcHJvdmlkZXIgZGVmaW5pdGlvbi5cclxuICAgICAqL1xyXG4gICAgb3ZlcnJpZGVQcm92aWRlcih0b2tlbjogYW55LCBwcm92aWRlcjoge1xyXG4gICAgICAgIHVzZUZhY3Rvcnk6IEZ1bmN0aW9uO1xyXG4gICAgICAgIGRlcHM6IGFueVtdO1xyXG4gICAgfSk6IHZvaWQ7XHJcbiAgICBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7XHJcbiAgICAgICAgdXNlVmFsdWU6IGFueTtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgb3ZlcnJpZGVQcm92aWRlcih0b2tlbjogYW55LCBwcm92aWRlcjoge1xyXG4gICAgICAgIHVzZUZhY3Rvcnk/OiBGdW5jdGlvbjtcclxuICAgICAgICB1c2VWYWx1ZT86IGFueTtcclxuICAgICAgICBkZXBzPzogYW55W107XHJcbiAgICB9KTogdm9pZDtcclxuICAgIG92ZXJyaWRlVGVtcGxhdGVVc2luZ1Rlc3RpbmdNb2R1bGUoY29tcG9uZW50OiBUeXBlPGFueT4sIHRlbXBsYXRlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZpeHR1cmU8VD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29uZmlndXJlcyBhbmQgaW5pdGlhbGl6ZXMgZW52aXJvbm1lbnQgZm9yIHVuaXQgdGVzdGluZyBhbmQgcHJvdmlkZXMgbWV0aG9kcyBmb3JcclxuICogY3JlYXRpbmcgY29tcG9uZW50cyBhbmQgc2VydmljZXMgaW4gdW5pdCB0ZXN0cy5cclxuICpcclxuICogYFRlc3RCZWRgIGlzIHRoZSBwcmltYXJ5IGFwaSBmb3Igd3JpdGluZyB1bml0IHRlc3RzIGZvciBBbmd1bGFyIGFwcGxpY2F0aW9ucyBhbmQgbGlicmFyaWVzLlxyXG4gKlxyXG4gKiBOb3RlOiBVc2UgYFRlc3RCZWRgIGluIHRlc3RzLiBJdCB3aWxsIGJlIHNldCB0byBlaXRoZXIgYFRlc3RCZWRWaWV3RW5naW5lYCBvciBgVGVzdEJlZFJlbmRlcjNgXHJcbiAqIGFjY29yZGluZyB0byB0aGUgY29tcGlsZXIgdXNlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgVGVzdEJlZDogVGVzdEJlZFN0YXRpYztcclxuXHJcbi8qKlxyXG4gKiBTdGF0aWMgbWV0aG9kcyBpbXBsZW1lbnRlZCBieSB0aGUgYFRlc3RCZWRWaWV3RW5naW5lYCBhbmQgYFRlc3RCZWRSZW5kZXIzYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVGVzdEJlZFN0YXRpYyB7XHJcbiAgICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVGVzdEJlZDtcclxuICAgIGluaXRUZXN0RW52aXJvbm1lbnQobmdNb2R1bGU6IFR5cGU8YW55PiB8IFR5cGU8YW55PltdLCBwbGF0Zm9ybTogUGxhdGZvcm1SZWYsIGFvdFN1bW1hcmllcz86ICgpID0+IGFueVtdKTogVGVzdEJlZDtcclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIHByb3ZpZGVycyBmb3IgdGhlIHRlc3QgaW5qZWN0b3IuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0VGVzdEVudmlyb25tZW50KCk6IHZvaWQ7XHJcbiAgICByZXNldFRlc3RpbmdNb2R1bGUoKTogVGVzdEJlZFN0YXRpYztcclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIG92ZXJyaWRpbmcgZGVmYXVsdCBjb21waWxlciBwcm92aWRlcnMgYW5kIHNldHRpbmdzXHJcbiAgICAgKiB3aGljaCBhcmUgZGVmaW5lZCBpbiB0ZXN0X2luamVjdG9yLmpzXHJcbiAgICAgKi9cclxuICAgIGNvbmZpZ3VyZUNvbXBpbGVyKGNvbmZpZzoge1xyXG4gICAgICAgIHByb3ZpZGVycz86IGFueVtdO1xyXG4gICAgICAgIHVzZUppdD86IGJvb2xlYW47XHJcbiAgICB9KTogVGVzdEJlZFN0YXRpYztcclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIG92ZXJyaWRpbmcgZGVmYXVsdCBwcm92aWRlcnMsIGRpcmVjdGl2ZXMsIHBpcGVzLCBtb2R1bGVzIG9mIHRoZSB0ZXN0IGluamVjdG9yLFxyXG4gICAgICogd2hpY2ggYXJlIGRlZmluZWQgaW4gdGVzdF9pbmplY3Rvci5qc1xyXG4gICAgICovXHJcbiAgICBjb25maWd1cmVUZXN0aW5nTW9kdWxlKG1vZHVsZURlZjogVGVzdE1vZHVsZU1ldGFkYXRhKTogVGVzdEJlZFN0YXRpYztcclxuICAgIC8qKlxyXG4gICAgICogQ29tcGlsZSBjb21wb25lbnRzIHdpdGggYSBgdGVtcGxhdGVVcmxgIGZvciB0aGUgdGVzdCdzIE5nTW9kdWxlLlxyXG4gICAgICogSXQgaXMgbmVjZXNzYXJ5IHRvIGNhbGwgdGhpcyBmdW5jdGlvblxyXG4gICAgICogYXMgZmV0Y2hpbmcgdXJscyBpcyBhc3luY2hyb25vdXMuXHJcbiAgICAgKi9cclxuICAgIGNvbXBpbGVDb21wb25lbnRzKCk6IFByb21pc2U8YW55PjtcclxuICAgIG92ZXJyaWRlTW9kdWxlKG5nTW9kdWxlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPE5nTW9kdWxlPik6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBvdmVycmlkZUNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8Q29tcG9uZW50Pik6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBvdmVycmlkZURpcmVjdGl2ZShkaXJlY3RpdmU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPik6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBvdmVycmlkZVBpcGUocGlwZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxQaXBlPik6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBvdmVycmlkZVRlbXBsYXRlKGNvbXBvbmVudDogVHlwZTxhbnk+LCB0ZW1wbGF0ZTogc3RyaW5nKTogVGVzdEJlZFN0YXRpYztcclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGVzIHRoZSB0ZW1wbGF0ZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50LCBjb21waWxpbmcgdGhlIHRlbXBsYXRlXHJcbiAgICAgKiBpbiB0aGUgY29udGV4dCBvZiB0aGUgVGVzdGluZ01vZHVsZS5cclxuICAgICAqXHJcbiAgICAgKiBOb3RlOiBUaGlzIHdvcmtzIGZvciBKSVQgYW5kIEFPVGVkIGNvbXBvbmVudHMgYXMgd2VsbC5cclxuICAgICAqL1xyXG4gICAgb3ZlcnJpZGVUZW1wbGF0ZVVzaW5nVGVzdGluZ01vZHVsZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZyk6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZXMgYWxsIHByb3ZpZGVycyBmb3IgdGhlIGdpdmVuIHRva2VuIHdpdGggdGhlIGdpdmVuIHByb3ZpZGVyIGRlZmluaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhpcyB3b3JrcyBmb3IgSklUIGFuZCBBT1RlZCBjb21wb25lbnRzIGFzIHdlbGwuXHJcbiAgICAgKi9cclxuICAgIG92ZXJyaWRlUHJvdmlkZXIodG9rZW46IGFueSwgcHJvdmlkZXI6IHtcclxuICAgICAgICB1c2VGYWN0b3J5OiBGdW5jdGlvbjtcclxuICAgICAgICBkZXBzOiBhbnlbXTtcclxuICAgIH0pOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgb3ZlcnJpZGVQcm92aWRlcih0b2tlbjogYW55LCBwcm92aWRlcjoge1xyXG4gICAgICAgIHVzZVZhbHVlOiBhbnk7XHJcbiAgICB9KTogVGVzdEJlZFN0YXRpYztcclxuICAgIG92ZXJyaWRlUHJvdmlkZXIodG9rZW46IGFueSwgcHJvdmlkZXI6IHtcclxuICAgICAgICB1c2VGYWN0b3J5PzogRnVuY3Rpb247XHJcbiAgICAgICAgdXNlVmFsdWU/OiBhbnk7XHJcbiAgICAgICAgZGVwcz86IGFueVtdO1xyXG4gICAgfSk6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBpbmplY3Q8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiB8IEFic3RyYWN0VHlwZTxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUO1xyXG4gICAgaW5qZWN0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4gfCBBYnN0cmFjdFR5cGU8VD4sIG5vdEZvdW5kVmFsdWU6IG51bGwsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUIHwgbnVsbDtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cclxuICAgIGdldDxUPih0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IGFueTtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cclxuICAgIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55O1xyXG4gICAgY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZpeHR1cmU8VD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBhYnN0cmFjdCBjbGFzcyBmb3IgaW5zZXJ0aW5nIHRoZSByb290IHRlc3QgY29tcG9uZW50IGVsZW1lbnQgaW4gYSBwbGF0Zm9ybSBpbmRlcGVuZGVudCB3YXkuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XHJcbiAgICBpbnNlcnRSb290RWxlbWVudChyb290RWxlbWVudElkOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBUZXN0TW9kdWxlTWV0YWRhdGEgPSB7XHJcbiAgICBwcm92aWRlcnM/OiBhbnlbXTtcclxuICAgIGRlY2xhcmF0aW9ucz86IGFueVtdO1xyXG4gICAgaW1wb3J0cz86IGFueVtdO1xyXG4gICAgc2NoZW1hcz86IEFycmF5PFNjaGVtYU1ldGFkYXRhIHwgYW55W10+O1xyXG4gICAgYW90U3VtbWFyaWVzPzogKCkgPT4gYW55W107XHJcbn07XHJcblxyXG4vKipcclxuICogU2ltdWxhdGVzIHRoZSBhc3luY2hyb25vdXMgcGFzc2FnZSBvZiB0aW1lIGZvciB0aGUgdGltZXJzIGluIHRoZSBmYWtlQXN5bmMgem9uZS5cclxuICpcclxuICogVGhlIG1pY3JvdGFza3MgcXVldWUgaXMgZHJhaW5lZCBhdCB0aGUgdmVyeSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uIGFuZCBhZnRlciBhbnkgdGltZXIgY2FsbGJhY2tcclxuICogaGFzIGJlZW4gZXhlY3V0ZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb3JlL3Rlc3RpbmcvdHMvZmFrZV9hc3luYy50cyByZWdpb249J2Jhc2ljJ31cclxuICpcclxuICogQHBhcmFtIG1pbGxpcywgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZCB0byBhZHZhbmNlIHRoZSB2aXJ0dWFsIHRpbWVyXHJcbiAqIEBwYXJhbSB0aWNrT3B0aW9ucywgdGhlIG9wdGlvbnMgb2YgdGljayB3aXRoIGEgZmxhZyBjYWxsZWRcclxuICogcHJvY2Vzc05ld01hY3JvVGFza3NTeW5jaHJvbm91c2x5LCB3aGV0aGVyIHRvIGludm9rZSB0aGUgbmV3IG1hY3JvVGFza3MsIGJ5IGRlZmF1bHQgaXNcclxuICogZmFsc2UsIG1lYW5zIHRoZSBuZXcgbWFjcm9UYXNrcyB3aWxsIGJlIGludm9rZWRcclxuICpcclxuICogRm9yIGV4YW1wbGUsXHJcbiAqXHJcbiAqIGl0ICgndGVzdCB3aXRoIG5lc3RlZCBzZXRUaW1lb3V0JywgZmFrZUFzeW5jKCgpID0+IHtcclxuICogICBsZXQgbmVzdGVkVGltZW91dEludm9rZWQgPSBmYWxzZTtcclxuICogICBmdW5jdGlvbiBmdW5jV2l0aE5lc3RlZFRpbWVvdXQoKSB7XHJcbiAqICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICogICAgICAgbmVzdGVkVGltZW91dEludm9rZWQgPSB0cnVlO1xyXG4gKiAgICAgfSk7XHJcbiAqICAgfTtcclxuICogICBzZXRUaW1lb3V0KGZ1bmNXaXRoTmVzdGVkVGltZW91dCk7XHJcbiAqICAgdGljaygpO1xyXG4gKiAgIGV4cGVjdChuZXN0ZWRUaW1lb3V0SW52b2tlZCkudG9CZSh0cnVlKTtcclxuICogfSkpO1xyXG4gKlxyXG4gKiBpbiB0aGlzIGNhc2UsIHdlIGhhdmUgYSBuZXN0ZWQgdGltZW91dCAobmV3IG1hY3JvVGFzayksIHdoZW4gd2UgdGljaywgYm90aCB0aGVcclxuICogZnVuY1dpdGhOZXN0ZWRUaW1lb3V0IGFuZCB0aGUgbmVzdGVkIHRpbWVvdXQgYm90aCB3aWxsIGJlIGludm9rZWQuXHJcbiAqXHJcbiAqIGl0ICgndGVzdCB3aXRoIG5lc3RlZCBzZXRUaW1lb3V0JywgZmFrZUFzeW5jKCgpID0+IHtcclxuICogICBsZXQgbmVzdGVkVGltZW91dEludm9rZWQgPSBmYWxzZTtcclxuICogICBmdW5jdGlvbiBmdW5jV2l0aE5lc3RlZFRpbWVvdXQoKSB7XHJcbiAqICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICogICAgICAgbmVzdGVkVGltZW91dEludm9rZWQgPSB0cnVlO1xyXG4gKiAgICAgfSk7XHJcbiAqICAgfTtcclxuICogICBzZXRUaW1lb3V0KGZ1bmNXaXRoTmVzdGVkVGltZW91dCk7XHJcbiAqICAgdGljaygwLCB7cHJvY2Vzc05ld01hY3JvVGFza3NTeW5jaHJvbm91c2x5OiBmYWxzZX0pO1xyXG4gKiAgIGV4cGVjdChuZXN0ZWRUaW1lb3V0SW52b2tlZCkudG9CZShmYWxzZSk7XHJcbiAqIH0pKTtcclxuICpcclxuICogaWYgd2UgcGFzcyB0aGUgdGlja09wdGlvbnMgd2l0aCBwcm9jZXNzTmV3TWFjcm9UYXNrc1N5bmNocm9ub3VzbHkgdG8gYmUgZmFsc2UsIHRoZSBuZXN0ZWQgdGltZW91dFxyXG4gKiB3aWxsIG5vdCBiZSBpbnZva2VkLlxyXG4gKlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiB0aWNrKG1pbGxpcz86IG51bWJlciwgdGlja09wdGlvbnM/OiB7XHJcbiAgICBwcm9jZXNzTmV3TWFjcm9UYXNrc1N5bmNocm9ub3VzbHk6IGJvb2xlYW47XHJcbn0pOiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHdpdGhNb2R1bGUobW9kdWxlRGVmOiBUZXN0TW9kdWxlTWV0YWRhdGEpOiBJbmplY3RTZXR1cFdyYXBwZXI7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiB3aXRoTW9kdWxlKG1vZHVsZURlZjogVGVzdE1vZHVsZU1ldGFkYXRhLCBmbjogRnVuY3Rpb24pOiAoKSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvbmZpZ3VyZXMgYW5kIGluaXRpYWxpemVzIGVudmlyb25tZW50IGZvciB1bml0IHRlc3RpbmcgYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yXHJcbiAqIGNyZWF0aW5nIGNvbXBvbmVudHMgYW5kIHNlcnZpY2VzIGluIHVuaXQgdGVzdHMuXHJcbiAqXHJcbiAqIGBUZXN0QmVkYCBpcyB0aGUgcHJpbWFyeSBhcGkgZm9yIHdyaXRpbmcgdW5pdCB0ZXN0cyBmb3IgQW5ndWxhciBhcHBsaWNhdGlvbnMgYW5kIGxpYnJhcmllcy5cclxuICpcclxuICogTm90ZTogVXNlIGBUZXN0QmVkYCBpbiB0ZXN0cy4gSXQgd2lsbCBiZSBzZXQgdG8gZWl0aGVyIGBUZXN0QmVkVmlld0VuZ2luZWAgb3IgYFRlc3RCZWRSZW5kZXIzYFxyXG4gKiBhY2NvcmRpbmcgdG8gdGhlIGNvbXBpbGVyIHVzZWQuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfY29yZV90ZXN0aW5nX3Rlc3RpbmdfYSBpbXBsZW1lbnRzIFRlc3RCZWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBlbnZpcm9ubWVudCBmb3IgdGVzdGluZyB3aXRoIGEgY29tcGlsZXIgZmFjdG9yeSwgYSBQbGF0Zm9ybVJlZiwgYW5kIGFuXHJcbiAgICAgKiBhbmd1bGFyIG1vZHVsZS4gVGhlc2UgYXJlIGNvbW1vbiB0byBldmVyeSB0ZXN0IGluIHRoZSBzdWl0ZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1heSBvbmx5IGJlIGNhbGxlZCBvbmNlLCB0byBzZXQgdXAgdGhlIGNvbW1vbiBwcm92aWRlcnMgZm9yIHRoZSBjdXJyZW50IHRlc3RcclxuICAgICAqIHN1aXRlIG9uIHRoZSBjdXJyZW50IHBsYXRmb3JtLiBJZiB5b3UgYWJzb2x1dGVseSBuZWVkIHRvIGNoYW5nZSB0aGUgcHJvdmlkZXJzLFxyXG4gICAgICogZmlyc3QgdXNlIGByZXNldFRlc3RFbnZpcm9ubWVudGAuXHJcbiAgICAgKlxyXG4gICAgICogVGVzdCBtb2R1bGVzIGFuZCBwbGF0Zm9ybXMgZm9yIGluZGl2aWR1YWwgcGxhdGZvcm1zIGFyZSBhdmFpbGFibGUgZnJvbVxyXG4gICAgICogJ0Bhbmd1bGFyLzxwbGF0Zm9ybV9uYW1lPi90ZXN0aW5nJy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluaXRUZXN0RW52aXJvbm1lbnQobmdNb2R1bGU6IFR5cGU8YW55PiB8IFR5cGU8YW55PltdLCBwbGF0Zm9ybTogUGxhdGZvcm1SZWYsIGFvdFN1bW1hcmllcz86ICgpID0+IGFueVtdKTogybVhbmd1bGFyX3BhY2thZ2VzX2NvcmVfdGVzdGluZ190ZXN0aW5nX2E7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBwcm92aWRlcnMgZm9yIHRoZSB0ZXN0IGluamVjdG9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVzZXRUZXN0RW52aXJvbm1lbnQoKTogdm9pZDtcclxuICAgIHN0YXRpYyByZXNldFRlc3RpbmdNb2R1bGUoKTogVGVzdEJlZFN0YXRpYztcclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIG92ZXJyaWRpbmcgZGVmYXVsdCBjb21waWxlciBwcm92aWRlcnMgYW5kIHNldHRpbmdzXHJcbiAgICAgKiB3aGljaCBhcmUgZGVmaW5lZCBpbiB0ZXN0X2luamVjdG9yLmpzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb25maWd1cmVDb21waWxlcihjb25maWc6IHtcclxuICAgICAgICBwcm92aWRlcnM/OiBhbnlbXTtcclxuICAgICAgICB1c2VKaXQ/OiBib29sZWFuO1xyXG4gICAgfSk6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBvdmVycmlkaW5nIGRlZmF1bHQgcHJvdmlkZXJzLCBkaXJlY3RpdmVzLCBwaXBlcywgbW9kdWxlcyBvZiB0aGUgdGVzdCBpbmplY3RvcixcclxuICAgICAqIHdoaWNoIGFyZSBkZWZpbmVkIGluIHRlc3RfaW5qZWN0b3IuanNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUobW9kdWxlRGVmOiBUZXN0TW9kdWxlTWV0YWRhdGEpOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb21waWxlIGNvbXBvbmVudHMgd2l0aCBhIGB0ZW1wbGF0ZVVybGAgZm9yIHRoZSB0ZXN0J3MgTmdNb2R1bGUuXHJcbiAgICAgKiBJdCBpcyBuZWNlc3NhcnkgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgKiBhcyBmZXRjaGluZyB1cmxzIGlzIGFzeW5jaHJvbm91cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbXBpbGVDb21wb25lbnRzKCk6IFByb21pc2U8YW55PjtcclxuICAgIHN0YXRpYyBvdmVycmlkZU1vZHVsZShuZ01vZHVsZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxOZ01vZHVsZT4pOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgc3RhdGljIG92ZXJyaWRlQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxDb21wb25lbnQ+KTogVGVzdEJlZFN0YXRpYztcclxuICAgIHN0YXRpYyBvdmVycmlkZURpcmVjdGl2ZShkaXJlY3RpdmU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPik6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBzdGF0aWMgb3ZlcnJpZGVQaXBlKHBpcGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8UGlwZT4pOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgc3RhdGljIG92ZXJyaWRlVGVtcGxhdGUoY29tcG9uZW50OiBUeXBlPGFueT4sIHRlbXBsYXRlOiBzdHJpbmcpOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZXMgdGhlIHRlbXBsYXRlIG9mIHRoZSBnaXZlbiBjb21wb25lbnQsIGNvbXBpbGluZyB0aGUgdGVtcGxhdGVcclxuICAgICAqIGluIHRoZSBjb250ZXh0IG9mIHRoZSBUZXN0aW5nTW9kdWxlLlxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IFRoaXMgd29ya3MgZm9yIEpJVCBhbmQgQU9UZWQgY29tcG9uZW50cyBhcyB3ZWxsLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgb3ZlcnJpZGVUZW1wbGF0ZVVzaW5nVGVzdGluZ01vZHVsZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZyk6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZXMgYWxsIHByb3ZpZGVycyBmb3IgdGhlIGdpdmVuIHRva2VuIHdpdGggdGhlIGdpdmVuIHByb3ZpZGVyIGRlZmluaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhpcyB3b3JrcyBmb3IgSklUIGFuZCBBT1RlZCBjb21wb25lbnRzIGFzIHdlbGwuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7XHJcbiAgICAgICAgdXNlRmFjdG9yeTogRnVuY3Rpb247XHJcbiAgICAgICAgZGVwczogYW55W107XHJcbiAgICB9KTogVGVzdEJlZFN0YXRpYztcclxuICAgIHN0YXRpYyBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7XHJcbiAgICAgICAgdXNlVmFsdWU6IGFueTtcclxuICAgIH0pOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgc3RhdGljIGluamVjdDxUPih0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+IHwgQWJzdHJhY3RUeXBlPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFQ7XHJcbiAgICBzdGF0aWMgaW5qZWN0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4gfCBBYnN0cmFjdFR5cGU8VD4sIG5vdEZvdW5kVmFsdWU6IG51bGwsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUIHwgbnVsbDtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cclxuICAgIHN0YXRpYyBnZXQ8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIGZyb20gdjkuMC4wIHVzZSBUZXN0QmVkLmluamVjdFxyXG4gICAgICogQHN1cHByZXNzIHtkdXBsaWNhdGV9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueTtcclxuICAgIHN0YXRpYyBjcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50Rml4dHVyZTxUPjtcclxuICAgIHByaXZhdGUgX2luc3RhbnRpYXRlZDtcclxuICAgIHByaXZhdGUgX2NvbXBpbGVyO1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlUmVmO1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlRmFjdG9yeTtcclxuICAgIHByaXZhdGUgX2NvbXBpbGVyT3B0aW9ucztcclxuICAgIHByaXZhdGUgX21vZHVsZU92ZXJyaWRlcztcclxuICAgIHByaXZhdGUgX2NvbXBvbmVudE92ZXJyaWRlcztcclxuICAgIHByaXZhdGUgX2RpcmVjdGl2ZU92ZXJyaWRlcztcclxuICAgIHByaXZhdGUgX3BpcGVPdmVycmlkZXM7XHJcbiAgICBwcml2YXRlIF9wcm92aWRlcnM7XHJcbiAgICBwcml2YXRlIF9kZWNsYXJhdGlvbnM7XHJcbiAgICBwcml2YXRlIF9pbXBvcnRzO1xyXG4gICAgcHJpdmF0ZSBfc2NoZW1hcztcclxuICAgIHByaXZhdGUgX2FjdGl2ZUZpeHR1cmVzO1xyXG4gICAgcHJpdmF0ZSBfdGVzdEVudkFvdFN1bW1hcmllcztcclxuICAgIHByaXZhdGUgX2FvdFN1bW1hcmllcztcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlT3ZlcnJpZGVzO1xyXG4gICAgcHJpdmF0ZSBfaXNSb290O1xyXG4gICAgcHJpdmF0ZSBfcm9vdFByb3ZpZGVyT3ZlcnJpZGVzO1xyXG4gICAgcGxhdGZvcm06IFBsYXRmb3JtUmVmO1xyXG4gICAgbmdNb2R1bGU6IFR5cGU8YW55PiB8IFR5cGU8YW55PltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBlbnZpcm9ubWVudCBmb3IgdGVzdGluZyB3aXRoIGEgY29tcGlsZXIgZmFjdG9yeSwgYSBQbGF0Zm9ybVJlZiwgYW5kIGFuXHJcbiAgICAgKiBhbmd1bGFyIG1vZHVsZS4gVGhlc2UgYXJlIGNvbW1vbiB0byBldmVyeSB0ZXN0IGluIHRoZSBzdWl0ZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1heSBvbmx5IGJlIGNhbGxlZCBvbmNlLCB0byBzZXQgdXAgdGhlIGNvbW1vbiBwcm92aWRlcnMgZm9yIHRoZSBjdXJyZW50IHRlc3RcclxuICAgICAqIHN1aXRlIG9uIHRoZSBjdXJyZW50IHBsYXRmb3JtLiBJZiB5b3UgYWJzb2x1dGVseSBuZWVkIHRvIGNoYW5nZSB0aGUgcHJvdmlkZXJzLFxyXG4gICAgICogZmlyc3QgdXNlIGByZXNldFRlc3RFbnZpcm9ubWVudGAuXHJcbiAgICAgKlxyXG4gICAgICogVGVzdCBtb2R1bGVzIGFuZCBwbGF0Zm9ybXMgZm9yIGluZGl2aWR1YWwgcGxhdGZvcm1zIGFyZSBhdmFpbGFibGUgZnJvbVxyXG4gICAgICogJ0Bhbmd1bGFyLzxwbGF0Zm9ybV9uYW1lPi90ZXN0aW5nJy5cclxuICAgICAqL1xyXG4gICAgaW5pdFRlc3RFbnZpcm9ubWVudChuZ01vZHVsZTogVHlwZTxhbnk+IHwgVHlwZTxhbnk+W10sIHBsYXRmb3JtOiBQbGF0Zm9ybVJlZiwgYW90U3VtbWFyaWVzPzogKCkgPT4gYW55W10pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgcHJvdmlkZXJzIGZvciB0aGUgdGVzdCBpbmplY3Rvci5cclxuICAgICAqL1xyXG4gICAgcmVzZXRUZXN0RW52aXJvbm1lbnQoKTogdm9pZDtcclxuICAgIHJlc2V0VGVzdGluZ01vZHVsZSgpOiB2b2lkO1xyXG4gICAgY29uZmlndXJlQ29tcGlsZXIoY29uZmlnOiB7XHJcbiAgICAgICAgcHJvdmlkZXJzPzogYW55W107XHJcbiAgICAgICAgdXNlSml0PzogYm9vbGVhbjtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgY29uZmlndXJlVGVzdGluZ01vZHVsZShtb2R1bGVEZWY6IFRlc3RNb2R1bGVNZXRhZGF0YSk6IHZvaWQ7XHJcbiAgICBjb21waWxlQ29tcG9uZW50cygpOiBQcm9taXNlPGFueT47XHJcbiAgICBwcml2YXRlIF9pbml0SWZOZWVkZWQ7XHJcbiAgICBwcml2YXRlIF9jcmVhdGVDb21waWxlckFuZE1vZHVsZTtcclxuICAgIHByaXZhdGUgX2Fzc2VydE5vdEluc3RhbnRpYXRlZDtcclxuICAgIGluamVjdDxUPih0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+IHwgQWJzdHJhY3RUeXBlPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFQ7XHJcbiAgICBpbmplY3Q8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiB8IEFic3RyYWN0VHlwZTxUPiwgbm90Rm91bmRWYWx1ZTogbnVsbCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFQgfCBudWxsO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkIGZyb20gdjkuMC4wIHVzZSBUZXN0QmVkLmluamVjdCAqL1xyXG4gICAgZ2V0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4sIG5vdEZvdW5kVmFsdWU/OiBULCBmbGFncz86IEluamVjdEZsYWdzKTogYW55O1xyXG4gICAgLyoqIEBkZXByZWNhdGVkIGZyb20gdjkuMC4wIHVzZSBUZXN0QmVkLmluamVjdCAqL1xyXG4gICAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnk7XHJcbiAgICBleGVjdXRlKHRva2VuczogYW55W10sIGZuOiBGdW5jdGlvbiwgY29udGV4dD86IGFueSk6IGFueTtcclxuICAgIG92ZXJyaWRlTW9kdWxlKG5nTW9kdWxlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPE5nTW9kdWxlPik6IHZvaWQ7XHJcbiAgICBvdmVycmlkZUNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8Q29tcG9uZW50Pik6IHZvaWQ7XHJcbiAgICBvdmVycmlkZURpcmVjdGl2ZShkaXJlY3RpdmU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPik6IHZvaWQ7XHJcbiAgICBvdmVycmlkZVBpcGUocGlwZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxQaXBlPik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZXMgYWxsIHByb3ZpZGVycyBmb3IgdGhlIGdpdmVuIHRva2VuIHdpdGggdGhlIGdpdmVuIHByb3ZpZGVyIGRlZmluaXRpb24uXHJcbiAgICAgKi9cclxuICAgIG92ZXJyaWRlUHJvdmlkZXIodG9rZW46IGFueSwgcHJvdmlkZXI6IHtcclxuICAgICAgICB1c2VGYWN0b3J5OiBGdW5jdGlvbjtcclxuICAgICAgICBkZXBzOiBhbnlbXTtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgb3ZlcnJpZGVQcm92aWRlcih0b2tlbjogYW55LCBwcm92aWRlcjoge1xyXG4gICAgICAgIHVzZVZhbHVlOiBhbnk7XHJcbiAgICB9KTogdm9pZDtcclxuICAgIHByaXZhdGUgb3ZlcnJpZGVQcm92aWRlckltcGw7XHJcbiAgICBvdmVycmlkZVRlbXBsYXRlVXNpbmdUZXN0aW5nTW9kdWxlKGNvbXBvbmVudDogVHlwZTxhbnk+LCB0ZW1wbGF0ZTogc3RyaW5nKTogdm9pZDtcclxuICAgIGNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQ6IFR5cGU8VD4pOiBDb21wb25lbnRGaXh0dXJlPFQ+O1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvbmZpZ3VyZXMgYW5kIGluaXRpYWxpemVzIGVudmlyb25tZW50IGZvciB1bml0IHRlc3RpbmcgYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yXHJcbiAqIGNyZWF0aW5nIGNvbXBvbmVudHMgYW5kIHNlcnZpY2VzIGluIHVuaXQgdGVzdHMuXHJcbiAqXHJcbiAqIFRlc3RCZWQgaXMgdGhlIHByaW1hcnkgYXBpIGZvciB3cml0aW5nIHVuaXQgdGVzdHMgZm9yIEFuZ3VsYXIgYXBwbGljYXRpb25zIGFuZCBsaWJyYXJpZXMuXHJcbiAqXHJcbiAqIE5vdGU6IFVzZSBgVGVzdEJlZGAgaW4gdGVzdHMuIEl0IHdpbGwgYmUgc2V0IHRvIGVpdGhlciBgVGVzdEJlZFZpZXdFbmdpbmVgIG9yIGBUZXN0QmVkUmVuZGVyM2BcclxuICogYWNjb3JkaW5nIHRvIHRoZSBjb21waWxlciB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX2NvcmVfdGVzdGluZ190ZXN0aW5nX2IgaW1wbGVtZW50cyBUZXN0QmVkIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgZW52aXJvbm1lbnQgZm9yIHRlc3Rpbmcgd2l0aCBhIGNvbXBpbGVyIGZhY3RvcnksIGEgUGxhdGZvcm1SZWYsIGFuZCBhblxyXG4gICAgICogYW5ndWxhciBtb2R1bGUuIFRoZXNlIGFyZSBjb21tb24gdG8gZXZlcnkgdGVzdCBpbiB0aGUgc3VpdGUuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBtYXkgb25seSBiZSBjYWxsZWQgb25jZSwgdG8gc2V0IHVwIHRoZSBjb21tb24gcHJvdmlkZXJzIGZvciB0aGUgY3VycmVudCB0ZXN0XHJcbiAgICAgKiBzdWl0ZSBvbiB0aGUgY3VycmVudCBwbGF0Zm9ybS4gSWYgeW91IGFic29sdXRlbHkgbmVlZCB0byBjaGFuZ2UgdGhlIHByb3ZpZGVycyxcclxuICAgICAqIGZpcnN0IHVzZSBgcmVzZXRUZXN0RW52aXJvbm1lbnRgLlxyXG4gICAgICpcclxuICAgICAqIFRlc3QgbW9kdWxlcyBhbmQgcGxhdGZvcm1zIGZvciBpbmRpdmlkdWFsIHBsYXRmb3JtcyBhcmUgYXZhaWxhYmxlIGZyb21cclxuICAgICAqICdAYW5ndWxhci88cGxhdGZvcm1fbmFtZT4vdGVzdGluZycuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY0FwaVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5pdFRlc3RFbnZpcm9ubWVudChuZ01vZHVsZTogVHlwZTxhbnk+IHwgVHlwZTxhbnk+W10sIHBsYXRmb3JtOiBQbGF0Zm9ybVJlZiwgYW90U3VtbWFyaWVzPzogKCkgPT4gYW55W10pOiBUZXN0QmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgcHJvdmlkZXJzIGZvciB0aGUgdGVzdCBpbmplY3Rvci5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljQXBpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZXNldFRlc3RFbnZpcm9ubWVudCgpOiB2b2lkO1xyXG4gICAgc3RhdGljIGNvbmZpZ3VyZUNvbXBpbGVyKGNvbmZpZzoge1xyXG4gICAgICAgIHByb3ZpZGVycz86IGFueVtdO1xyXG4gICAgICAgIHVzZUppdD86IGJvb2xlYW47XHJcbiAgICB9KTogVGVzdEJlZFN0YXRpYztcclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIG92ZXJyaWRpbmcgZGVmYXVsdCBwcm92aWRlcnMsIGRpcmVjdGl2ZXMsIHBpcGVzLCBtb2R1bGVzIG9mIHRoZSB0ZXN0IGluamVjdG9yLFxyXG4gICAgICogd2hpY2ggYXJlIGRlZmluZWQgaW4gdGVzdF9pbmplY3Rvci5qc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29uZmlndXJlVGVzdGluZ01vZHVsZShtb2R1bGVEZWY6IFRlc3RNb2R1bGVNZXRhZGF0YSk6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICAvKipcclxuICAgICAqIENvbXBpbGUgY29tcG9uZW50cyB3aXRoIGEgYHRlbXBsYXRlVXJsYCBmb3IgdGhlIHRlc3QncyBOZ01vZHVsZS5cclxuICAgICAqIEl0IGlzIG5lY2Vzc2FyeSB0byBjYWxsIHRoaXMgZnVuY3Rpb25cclxuICAgICAqIGFzIGZldGNoaW5nIHVybHMgaXMgYXN5bmNocm9ub3VzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29tcGlsZUNvbXBvbmVudHMoKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgc3RhdGljIG92ZXJyaWRlTW9kdWxlKG5nTW9kdWxlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPE5nTW9kdWxlPik6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBzdGF0aWMgb3ZlcnJpZGVDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPENvbXBvbmVudD4pOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgc3RhdGljIG92ZXJyaWRlRGlyZWN0aXZlKGRpcmVjdGl2ZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxEaXJlY3RpdmU+KTogVGVzdEJlZFN0YXRpYztcclxuICAgIHN0YXRpYyBvdmVycmlkZVBpcGUocGlwZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxQaXBlPik6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBzdGF0aWMgb3ZlcnJpZGVUZW1wbGF0ZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZyk6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRlcyB0aGUgdGVtcGxhdGUgb2YgdGhlIGdpdmVuIGNvbXBvbmVudCwgY29tcGlsaW5nIHRoZSB0ZW1wbGF0ZVxyXG4gICAgICogaW4gdGhlIGNvbnRleHQgb2YgdGhlIFRlc3RpbmdNb2R1bGUuXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhpcyB3b3JrcyBmb3IgSklUIGFuZCBBT1RlZCBjb21wb25lbnRzIGFzIHdlbGwuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBvdmVycmlkZVRlbXBsYXRlVXNpbmdUZXN0aW5nTW9kdWxlKGNvbXBvbmVudDogVHlwZTxhbnk+LCB0ZW1wbGF0ZTogc3RyaW5nKTogVGVzdEJlZFN0YXRpYztcclxuICAgIHN0YXRpYyBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7XHJcbiAgICAgICAgdXNlRmFjdG9yeTogRnVuY3Rpb247XHJcbiAgICAgICAgZGVwczogYW55W107XHJcbiAgICB9KTogVGVzdEJlZFN0YXRpYztcclxuICAgIHN0YXRpYyBvdmVycmlkZVByb3ZpZGVyKHRva2VuOiBhbnksIHByb3ZpZGVyOiB7XHJcbiAgICAgICAgdXNlVmFsdWU6IGFueTtcclxuICAgIH0pOiBUZXN0QmVkU3RhdGljO1xyXG4gICAgc3RhdGljIGluamVjdDxUPih0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+IHwgQWJzdHJhY3RUeXBlPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFQ7XHJcbiAgICBzdGF0aWMgaW5qZWN0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4gfCBBYnN0cmFjdFR5cGU8VD4sIG5vdEZvdW5kVmFsdWU6IG51bGwsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUIHwgbnVsbDtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cclxuICAgIHN0YXRpYyBnZXQ8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBhbnk7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgZnJvbSB2OS4wLjAgdXNlIFRlc3RCZWQuaW5qZWN0ICovXHJcbiAgICBzdGF0aWMgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnk7XHJcbiAgICBzdGF0aWMgY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZpeHR1cmU8VD47XHJcbiAgICBzdGF0aWMgcmVzZXRUZXN0aW5nTW9kdWxlKCk6IFRlc3RCZWRTdGF0aWM7XHJcbiAgICBwbGF0Zm9ybTogUGxhdGZvcm1SZWY7XHJcbiAgICBuZ01vZHVsZTogVHlwZTxhbnk+IHwgVHlwZTxhbnk+W107XHJcbiAgICBwcml2YXRlIF9jb21waWxlcjtcclxuICAgIHByaXZhdGUgX3Rlc3RNb2R1bGVSZWY7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVGaXh0dXJlcztcclxuICAgIHByaXZhdGUgX2dsb2JhbENvbXBpbGF0aW9uQ2hlY2tlZDtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgZW52aXJvbm1lbnQgZm9yIHRlc3Rpbmcgd2l0aCBhIGNvbXBpbGVyIGZhY3RvcnksIGEgUGxhdGZvcm1SZWYsIGFuZCBhblxyXG4gICAgICogYW5ndWxhciBtb2R1bGUuIFRoZXNlIGFyZSBjb21tb24gdG8gZXZlcnkgdGVzdCBpbiB0aGUgc3VpdGUuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBtYXkgb25seSBiZSBjYWxsZWQgb25jZSwgdG8gc2V0IHVwIHRoZSBjb21tb24gcHJvdmlkZXJzIGZvciB0aGUgY3VycmVudCB0ZXN0XHJcbiAgICAgKiBzdWl0ZSBvbiB0aGUgY3VycmVudCBwbGF0Zm9ybS4gSWYgeW91IGFic29sdXRlbHkgbmVlZCB0byBjaGFuZ2UgdGhlIHByb3ZpZGVycyxcclxuICAgICAqIGZpcnN0IHVzZSBgcmVzZXRUZXN0RW52aXJvbm1lbnRgLlxyXG4gICAgICpcclxuICAgICAqIFRlc3QgbW9kdWxlcyBhbmQgcGxhdGZvcm1zIGZvciBpbmRpdmlkdWFsIHBsYXRmb3JtcyBhcmUgYXZhaWxhYmxlIGZyb21cclxuICAgICAqICdAYW5ndWxhci88cGxhdGZvcm1fbmFtZT4vdGVzdGluZycuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY0FwaVxyXG4gICAgICovXHJcbiAgICBpbml0VGVzdEVudmlyb25tZW50KG5nTW9kdWxlOiBUeXBlPGFueT4gfCBUeXBlPGFueT5bXSwgcGxhdGZvcm06IFBsYXRmb3JtUmVmLCBhb3RTdW1tYXJpZXM/OiAoKSA9PiBhbnlbXSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBwcm92aWRlcnMgZm9yIHRoZSB0ZXN0IGluamVjdG9yLlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNBcGlcclxuICAgICAqL1xyXG4gICAgcmVzZXRUZXN0RW52aXJvbm1lbnQoKTogdm9pZDtcclxuICAgIHJlc2V0VGVzdGluZ01vZHVsZSgpOiB2b2lkO1xyXG4gICAgY29uZmlndXJlQ29tcGlsZXIoY29uZmlnOiB7XHJcbiAgICAgICAgcHJvdmlkZXJzPzogYW55W107XHJcbiAgICAgICAgdXNlSml0PzogYm9vbGVhbjtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgY29uZmlndXJlVGVzdGluZ01vZHVsZShtb2R1bGVEZWY6IFRlc3RNb2R1bGVNZXRhZGF0YSk6IHZvaWQ7XHJcbiAgICBjb21waWxlQ29tcG9uZW50cygpOiBQcm9taXNlPGFueT47XHJcbiAgICBpbmplY3Q8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiB8IEFic3RyYWN0VHlwZTxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUO1xyXG4gICAgaW5qZWN0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4gfCBBYnN0cmFjdFR5cGU8VD4sIG5vdEZvdW5kVmFsdWU6IG51bGwsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUIHwgbnVsbDtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cclxuICAgIGdldDxUPih0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IGFueTtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCBmcm9tIHY5LjAuMCB1c2UgVGVzdEJlZC5pbmplY3QgKi9cclxuICAgIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55O1xyXG4gICAgZXhlY3V0ZSh0b2tlbnM6IGFueVtdLCBmbjogRnVuY3Rpb24sIGNvbnRleHQ/OiBhbnkpOiBhbnk7XHJcbiAgICBvdmVycmlkZU1vZHVsZShuZ01vZHVsZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxOZ01vZHVsZT4pOiB2b2lkO1xyXG4gICAgb3ZlcnJpZGVDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPENvbXBvbmVudD4pOiB2b2lkO1xyXG4gICAgb3ZlcnJpZGVUZW1wbGF0ZVVzaW5nVGVzdGluZ01vZHVsZShjb21wb25lbnQ6IFR5cGU8YW55PiwgdGVtcGxhdGU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBvdmVycmlkZURpcmVjdGl2ZShkaXJlY3RpdmU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8RGlyZWN0aXZlPik6IHZvaWQ7XHJcbiAgICBvdmVycmlkZVBpcGUocGlwZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxQaXBlPik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZXMgYWxsIHByb3ZpZGVycyBmb3IgdGhlIGdpdmVuIHRva2VuIHdpdGggdGhlIGdpdmVuIHByb3ZpZGVyIGRlZmluaXRpb24uXHJcbiAgICAgKi9cclxuICAgIG92ZXJyaWRlUHJvdmlkZXIodG9rZW46IGFueSwgcHJvdmlkZXI6IHtcclxuICAgICAgICB1c2VGYWN0b3J5PzogRnVuY3Rpb247XHJcbiAgICAgICAgdXNlVmFsdWU/OiBhbnk7XHJcbiAgICAgICAgZGVwcz86IGFueVtdO1xyXG4gICAgfSk6IHZvaWQ7XHJcbiAgICBjcmVhdGVDb21wb25lbnQ8VD4odHlwZTogVHlwZTxUPik6IENvbXBvbmVudEZpeHR1cmU8VD47XHJcbiAgICBwcml2YXRlIGFzc2VydE5vdEluc3RhbnRpYXRlZDtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGUgbW9kdWxlIHNjb3BpbmcgcXVldWUgc2hvdWxkIGJlIGZsdXNoZWQsIGFuZCBmbHVzaCBpdCBpZiBuZWVkZWQuXHJcbiAgICAgKlxyXG4gICAgICogV2hlbiB0aGUgVGVzdEJlZCBpcyByZXNldCwgaXQgY2xlYXJzIHRoZSBKSVQgbW9kdWxlIGNvbXBpbGF0aW9uIHF1ZXVlLCBjYW5jZWxsaW5nIGFueVxyXG4gICAgICogaW4tcHJvZ3Jlc3MgbW9kdWxlIGNvbXBpbGF0aW9uLiBUaGlzIGNyZWF0ZXMgYSBwb3RlbnRpYWwgaGF6YXJkIC0gdGhlIHZlcnkgZmlyc3QgdGltZSB0aGVcclxuICAgICAqIFRlc3RCZWQgaXMgaW5pdGlhbGl6ZWQgKG9yIGlmIGl0J3MgcmVzZXQgd2l0aG91dCBiZWluZyBpbml0aWFsaXplZCksIHRoZXJlIG1heSBiZSBwZW5kaW5nXHJcbiAgICAgKiBjb21waWxhdGlvbnMgb2YgbW9kdWxlcyBkZWNsYXJlZCBpbiBnbG9iYWwgc2NvcGUuIFRoZXNlIGNvbXBpbGF0aW9ucyBzaG91bGQgYmUgZmluaXNoZWQuXHJcbiAgICAgKlxyXG4gICAgICogVG8gZW5zdXJlIHRoYXQgZ2xvYmFsbHkgZGVjbGFyZWQgbW9kdWxlcyBoYXZlIHRoZWlyIGNvbXBvbmVudHMgc2NvcGVkIHByb3Blcmx5LCB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgKiBpcyBjYWxsZWQgd2hlbmV2ZXIgVGVzdEJlZCBpcyBpbml0aWFsaXplZCBvciByZXNldC4gVGhlIF9maXJzdF8gdGltZSB0aGF0IHRoaXMgaGFwcGVucywgcHJpb3JcclxuICAgICAqIHRvIGFueSBvdGhlciBvcGVyYXRpb25zLCB0aGUgc2NvcGluZyBxdWV1ZSBpcyBmbHVzaGVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrR2xvYmFsQ29tcGlsYXRpb25GaW5pc2hlZDtcclxuICAgIHByaXZhdGUgZGVzdHJveUFjdGl2ZUZpeHR1cmVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29yZV90ZXN0aW5nX3Rlc3RpbmdfYygpOiDJtWFuZ3VsYXJfcGFja2FnZXNfY29yZV90ZXN0aW5nX3Rlc3RpbmdfYjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1TWV0YWRhdGFPdmVycmlkZXIge1xyXG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlcztcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIG1ldGFkYXRhIGNsYXNzXHJcbiAgICAgKiBiYXNlZCBvbiBhbiBvbGQgaW5zdGFuY2UgYW5kIG92ZXJyaWRlcy5cclxuICAgICAqL1xyXG4gICAgb3ZlcnJpZGVNZXRhZGF0YTxDIGV4dGVuZHMgVCwgVD4obWV0YWRhdGFDbGFzczoge1xyXG4gICAgICAgIG5ldyAob3B0aW9uczogVCk6IEM7XHJcbiAgICB9LCBvbGRNZXRhZGF0YTogQywgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8VD4pOiBDO1xyXG59XHJcblxyXG4vKipcclxuICogU3BlY2lhbCBpbnRlcmZhY2UgdG8gdGhlIGNvbXBpbGVyIG9ubHkgdXNlZCBieSB0ZXN0aW5nXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1VGVzdGluZ0NvbXBpbGVyIGV4dGVuZHMgQ29tcGlsZXIge1xyXG4gICAgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yO1xyXG4gICAgb3ZlcnJpZGVNb2R1bGUobW9kdWxlOiBUeXBlPGFueT4sIG92ZXJyaWRlczogTWV0YWRhdGFPdmVycmlkZTxOZ01vZHVsZT4pOiB2b2lkO1xyXG4gICAgb3ZlcnJpZGVEaXJlY3RpdmUoZGlyZWN0aXZlOiBUeXBlPGFueT4sIG92ZXJyaWRlczogTWV0YWRhdGFPdmVycmlkZTxEaXJlY3RpdmU+KTogdm9pZDtcclxuICAgIG92ZXJyaWRlQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+LCBvdmVycmlkZXM6IE1ldGFkYXRhT3ZlcnJpZGU8Q29tcG9uZW50Pik6IHZvaWQ7XHJcbiAgICBvdmVycmlkZVBpcGUoZGlyZWN0aXZlOiBUeXBlPGFueT4sIG92ZXJyaWRlczogTWV0YWRhdGFPdmVycmlkZTxQaXBlPik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB0byBwYXNzIHRoZSBjb21waWxlIHN1bW1hcnkgZnJvbSBBT1QgY29tcGlsYXRpb24gdG8gdGhlIEpJVCBjb21waWxlcixcclxuICAgICAqIHNvIHRoYXQgaXQgY2FuIHVzZSB0aGUgY29kZSBnZW5lcmF0ZWQgYnkgQU9ULlxyXG4gICAgICovXHJcbiAgICBsb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllczogKCkgPT4gYW55W10pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb21wb25lbnQgZmFjdG9yeSBmb3IgdGhlIGdpdmVuIGNvbXBvbmVudC5cclxuICAgICAqIFRoaXMgYXNzdW1lcyB0aGF0IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gY29tcGlsZWQgYmVmb3JlIGNhbGxpbmcgdGhpcyBjYWxsIHVzaW5nXHJcbiAgICAgKiBgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHMqYC5cclxuICAgICAqL1xyXG4gICAgZ2V0Q29tcG9uZW50RmFjdG9yeTxUPihjb21wb25lbnQ6IFR5cGU8VD4pOiBDb21wb25lbnRGYWN0b3J5PFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjb21wb25lbnQgdHlwZSB0aGF0IGlzIHN0b3JlZCBpbiB0aGUgZ2l2ZW4gZXJyb3IuXHJcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIGZvciBlcnJvcnMgY3JlYXRlZCBieSBjb21waWxlTW9kdWxlLi4uXHJcbiAgICAgKi9cclxuICAgIGdldENvbXBvbmVudEZyb21FcnJvcihlcnJvcjogRXJyb3IpOiBUeXBlPGFueT4gfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQSBmYWN0b3J5IGZvciBjcmVhdGluZyBhIENvbXBpbGVyXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIMm1VGVzdGluZ0NvbXBpbGVyRmFjdG9yeSB7XHJcbiAgICBhYnN0cmFjdCBjcmVhdGVUZXN0aW5nQ29tcGlsZXIob3B0aW9ucz86IENvbXBpbGVyT3B0aW9uc1tdKTogybVUZXN0aW5nQ29tcGlsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IH1cclxuIl19