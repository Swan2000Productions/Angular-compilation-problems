/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AnimationMetadata } from '@angular/animations';
import { AnimationOptions } from '@angular/animations';
import { AnimationPlayer } from '@angular/animations';
import { AnimationTriggerMetadata } from '@angular/animations';
import { ɵStyleData } from '@angular/animations';

/**
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class AnimationDriver {
    static NOOP: AnimationDriver;
    abstract validateStyleProperty(prop: string): boolean;
    abstract matchesElement(element: any, selector: string): boolean;
    abstract containsElement(elm1: any, elm2: any): boolean;
    abstract query(element: any, selector: string, multi: boolean): any[];
    abstract computeStyle(element: any, prop: string, defaultValue?: string): string;
    abstract animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, delay: number, easing?: string | null, previousPlayers?: any[], scrubberAccessRequested?: boolean): any;
}

declare interface AnimationEngineInstruction {
    type: AnimationTransitionInstructionType;
}

declare interface AnimationTimelineInstruction extends AnimationEngineInstruction {
    element: any;
    keyframes: ɵStyleData[];
    preStyleProps: string[];
    postStyleProps: string[];
    duration: number;
    delay: number;
    totalTime: number;
    easing: string | null;
    stretchStartingKeyframe?: boolean;
    subTimeline: boolean;
}


declare const enum AnimationTransitionInstructionType {
    TransitionAnimation = 0,
    TimelineAnimation = 1
}


/**
 * DOMAnimation represents the Animation Web API.
 *
 * It is an external API by the browser, and must thus use "declare interface",
 * to prevent renaming by Closure Compiler.
 *
 * @see https://developer.mozilla.org/de/docs/Web/API/Animation
 */
declare interface DOMAnimation {
    cancel(): void;
    play(): void;
    pause(): void;
    finish(): void;
    onfinish: Function;
    position: number;
    currentTime: number;
    addEventListener(eventName: string, handler: (event: any) => any): any;
    dispatchEvent(eventName: string): any;
}

declare class ElementInstructionMap {
    private _map;
    consume(element: any): AnimationTimelineInstruction[];
    append(element: any, instructions: AnimationTimelineInstruction[]): void;
    has(element: any): boolean;
    clear(): void;
}

export declare function ɵallowPreviousPlayerStylesMerge(duration: number, delay: number): boolean;

/**
 * Designed to be executed during a keyframe-based animation to apply any special-cased styles.
 *
 * When started (when the `start()` method is run) then the provided `startStyles`
 * will be applied. When finished (when the `finish()` method is called) the
 * `endStyles` will be applied as well any any starting styles. Finally when
 * `destroy()` is called then all styles will be removed.
 */
export declare class ɵangular_packages_animations_browser_browser_a {
    private _element;
    private _startStyles;
    private _endStyles;
    static initialStylesByElement: WeakMap<any, {
        [key: string]: any;
    }>;
    private _state;
    private _initialStyles;
    constructor(_element: any, _startStyles: {
        [key: string]: any;
    } | null, _endStyles: {
        [key: string]: any;
    } | null);
    start(): void;
    finish(): void;
    destroy(): void;
}

export declare class ɵAnimation {
    private _driver;
    private _animationAst;
    constructor(_driver: AnimationDriver, input: AnimationMetadata | AnimationMetadata[]);
    buildTimelines(element: any, startingStyles: ɵStyleData | ɵStyleData[], destinationStyles: ɵStyleData | ɵStyleData[], options: AnimationOptions, subInstructions?: ElementInstructionMap): AnimationTimelineInstruction[];
}

export declare class ɵAnimationEngine {
    private bodyNode;
    private _driver;
    private _transitionEngine;
    private _timelineEngine;
    private _triggerCache;
    onRemovalComplete: (element: any, context: any) => void;
    constructor(bodyNode: any, _driver: AnimationDriver, normalizer: ɵAnimationStyleNormalizer);
    registerTrigger(componentId: string, namespaceId: string, hostElement: any, name: string, metadata: AnimationTriggerMetadata): void;
    register(namespaceId: string, hostElement: any): void;
    destroy(namespaceId: string, context: any): void;
    onInsert(namespaceId: string, element: any, parent: any, insertBefore: boolean): void;
    onRemove(namespaceId: string, element: any, context: any, isHostElement?: boolean): void;
    disableAnimations(element: any, disable: boolean): void;
    process(namespaceId: string, element: any, property: string, value: any): void;
    listen(namespaceId: string, element: any, eventName: string, eventPhase: string, callback: (event: any) => any): () => any;
    flush(microtaskId?: number): void;
    get players(): AnimationPlayer[];
    whenRenderingDone(): Promise<any>;
}


/**
 * @publicApi
 */
export declare abstract class ɵAnimationStyleNormalizer {
    abstract normalizePropertyName(propertyName: string, errors: string[]): string;
    abstract normalizeStyleValue(userProvidedProperty: string, normalizedProperty: string, value: string | number, errors: string[]): string;
}

export declare const ɵcontainsElement: (elm1: any, elm2: any) => boolean;

export declare class ɵCssKeyframesDriver implements AnimationDriver {
    private _count;
    private readonly _head;
    private _warningIssued;
    validateStyleProperty(prop: string): boolean;
    matchesElement(element: any, selector: string): boolean;
    containsElement(elm1: any, elm2: any): boolean;
    query(element: any, selector: string, multi: boolean): any[];
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    buildKeyframeElement(element: any, name: string, keyframes: {
        [key: string]: any;
    }[]): any;
    animate(element: any, keyframes: ɵStyleData[], duration: number, delay: number, easing: string, previousPlayers?: AnimationPlayer[], scrubberAccessRequested?: boolean): AnimationPlayer;
    private _notifyFaultyScrubber;
}

export declare class ɵCssKeyframesPlayer implements AnimationPlayer {
    readonly element: any;
    readonly keyframes: {
        [key: string]: string | number;
    }[];
    readonly animationName: string;
    private readonly _duration;
    private readonly _delay;
    private readonly _finalStyles;
    private readonly _specialStyles?;
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _started;
    private _styler;
    parentPlayer: AnimationPlayer;
    readonly totalTime: number;
    readonly easing: string;
    currentSnapshot: {
        [key: string]: string;
    };
    private _state;
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], animationName: string, _duration: number, _delay: number, easing: string, _finalStyles: {
        [key: string]: any;
    }, _specialStyles?: ɵangular_packages_animations_browser_browser_a | null | undefined);
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    destroy(): void;
    private _flushDoneFns;
    private _flushStartFns;
    finish(): void;
    setPosition(value: number): void;
    getPosition(): number;
    hasStarted(): boolean;
    init(): void;
    play(): void;
    pause(): void;
    restart(): void;
    reset(): void;
    private _buildStyler;
    beforeDestroy(): void;
}

export declare const ɵinvokeQuery: (element: any, selector: string, multi: boolean) => any[];

export declare const ɵmatchesElement: (element: any, selector: string) => boolean;

/**
 * @publicApi
 */
export declare class ɵNoopAnimationDriver implements AnimationDriver {
    validateStyleProperty(prop: string): boolean;
    matchesElement(element: any, selector: string): boolean;
    containsElement(elm1: any, elm2: any): boolean;
    query(element: any, selector: string, multi: boolean): any[];
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, delay: number, easing: string, previousPlayers?: any[], scrubberAccessRequested?: boolean): AnimationPlayer;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵNoopAnimationDriver, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵNoopAnimationDriver>;
}

/**
 * @publicApi
 */
export declare class ɵNoopAnimationStyleNormalizer {
    normalizePropertyName(propertyName: string, errors: string[]): string;
    normalizeStyleValue(userProvidedProperty: string, normalizedProperty: string, value: string | number, errors: string[]): string;
}

export declare function ɵsupportsWebAnimations(): boolean;

export declare function ɵvalidateStyleProperty(prop: string): boolean;

export declare class ɵWebAnimationsDriver implements AnimationDriver {
    private _isNativeImpl;
    private _cssKeyframesDriver;
    validateStyleProperty(prop: string): boolean;
    matchesElement(element: any, selector: string): boolean;
    containsElement(elm1: any, elm2: any): boolean;
    query(element: any, selector: string, multi: boolean): any[];
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    overrideWebAnimationsSupport(supported: boolean): void;
    animate(element: any, keyframes: ɵStyleData[], duration: number, delay: number, easing: string, previousPlayers?: AnimationPlayer[], scrubberAccessRequested?: boolean): AnimationPlayer;
}

export declare class ɵWebAnimationsPlayer implements AnimationPlayer {
    element: any;
    keyframes: {
        [key: string]: string | number;
    }[];
    options: {
        [key: string]: string | number;
    };
    private _specialStyles?;
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _duration;
    private _delay;
    private _initialized;
    private _finished;
    private _started;
    private _destroyed;
    private _finalKeyframe;
    readonly domPlayer: DOMAnimation;
    time: number;
    parentPlayer: AnimationPlayer | null;
    currentSnapshot: {
        [styleName: string]: string | number;
    };
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], options: {
        [key: string]: string | number;
    }, _specialStyles?: ɵangular_packages_animations_browser_browser_a | null | undefined);
    private _onFinish;
    init(): void;
    private _buildPlayer;
    private _preparePlayerBeforeStart;
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    play(): void;
    pause(): void;
    finish(): void;
    reset(): void;
    private _resetDomPlayerState;
    restart(): void;
    hasStarted(): boolean;
    destroy(): void;
    setPosition(p: number): void;
    getPosition(): number;
    get totalTime(): number;
    beforeDestroy(): void;
}

export declare class ɵWebAnimationsStyleNormalizer extends ɵAnimationStyleNormalizer {
    normalizePropertyName(propertyName: string, errors: string[]): string;
    normalizeStyleValue(userProvidedProperty: string, normalizedProperty: string, value: string | number, errors: string[]): string;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5kLnRzIiwic291cmNlcyI6WyJicm93c2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4xLjEyXG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IEFuaW1hdGlvbk1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uUGxheWVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyDJtVN0eWxlRGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEFuaW1hdGlvbkRyaXZlciB7XHJcbiAgICBzdGF0aWMgTk9PUDogQW5pbWF0aW9uRHJpdmVyO1xyXG4gICAgYWJzdHJhY3QgdmFsaWRhdGVTdHlsZVByb3BlcnR5KHByb3A6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBtYXRjaGVzRWxlbWVudChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgY29udGFpbnNFbGVtZW50KGVsbTE6IGFueSwgZWxtMjogYW55KTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IHF1ZXJ5KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pOiBhbnlbXTtcclxuICAgIGFic3RyYWN0IGNvbXB1dGVTdHlsZShlbGVtZW50OiBhbnksIHByb3A6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgYW5pbWF0ZShlbGVtZW50OiBhbnksIGtleWZyYW1lczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxuICAgIH1bXSwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciwgZWFzaW5nPzogc3RyaW5nIHwgbnVsbCwgcHJldmlvdXNQbGF5ZXJzPzogYW55W10sIHNjcnViYmVyQWNjZXNzUmVxdWVzdGVkPzogYm9vbGVhbik6IGFueTtcclxufVxyXG5cclxuZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uRW5naW5lSW5zdHJ1Y3Rpb24ge1xyXG4gICAgdHlwZTogQW5pbWF0aW9uVHJhbnNpdGlvbkluc3RydWN0aW9uVHlwZTtcclxufVxyXG5cclxuZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uVGltZWxpbmVJbnN0cnVjdGlvbiBleHRlbmRzIEFuaW1hdGlvbkVuZ2luZUluc3RydWN0aW9uIHtcclxuICAgIGVsZW1lbnQ6IGFueTtcclxuICAgIGtleWZyYW1lczogybVTdHlsZURhdGFbXTtcclxuICAgIHByZVN0eWxlUHJvcHM6IHN0cmluZ1tdO1xyXG4gICAgcG9zdFN0eWxlUHJvcHM6IHN0cmluZ1tdO1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICB0b3RhbFRpbWU6IG51bWJlcjtcclxuICAgIGVhc2luZzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHN0cmV0Y2hTdGFydGluZ0tleWZyYW1lPzogYm9vbGVhbjtcclxuICAgIHN1YlRpbWVsaW5lOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZGVjbGFyZSBjb25zdCBlbnVtIEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvblR5cGUge1xyXG4gICAgVHJhbnNpdGlvbkFuaW1hdGlvbiA9IDAsXHJcbiAgICBUaW1lbGluZUFuaW1hdGlvbiA9IDFcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBET01BbmltYXRpb24gcmVwcmVzZW50cyB0aGUgQW5pbWF0aW9uIFdlYiBBUEkuXHJcbiAqXHJcbiAqIEl0IGlzIGFuIGV4dGVybmFsIEFQSSBieSB0aGUgYnJvd3NlciwgYW5kIG11c3QgdGh1cyB1c2UgXCJkZWNsYXJlIGludGVyZmFjZVwiLFxyXG4gKiB0byBwcmV2ZW50IHJlbmFtaW5nIGJ5IENsb3N1cmUgQ29tcGlsZXIuXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZGUvZG9jcy9XZWIvQVBJL0FuaW1hdGlvblxyXG4gKi9cclxuZGVjbGFyZSBpbnRlcmZhY2UgRE9NQW5pbWF0aW9uIHtcclxuICAgIGNhbmNlbCgpOiB2b2lkO1xyXG4gICAgcGxheSgpOiB2b2lkO1xyXG4gICAgcGF1c2UoKTogdm9pZDtcclxuICAgIGZpbmlzaCgpOiB2b2lkO1xyXG4gICAgb25maW5pc2g6IEZ1bmN0aW9uO1xyXG4gICAgcG9zaXRpb246IG51bWJlcjtcclxuICAgIGN1cnJlbnRUaW1lOiBudW1iZXI7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiAoZXZlbnQ6IGFueSkgPT4gYW55KTogYW55O1xyXG4gICAgZGlzcGF0Y2hFdmVudChldmVudE5hbWU6IHN0cmluZyk6IGFueTtcclxufVxyXG5cclxuZGVjbGFyZSBjbGFzcyBFbGVtZW50SW5zdHJ1Y3Rpb25NYXAge1xyXG4gICAgcHJpdmF0ZSBfbWFwO1xyXG4gICAgY29uc3VtZShlbGVtZW50OiBhbnkpOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW107XHJcbiAgICBhcHBlbmQoZWxlbWVudDogYW55LCBpbnN0cnVjdGlvbnM6IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb25bXSk6IHZvaWQ7XHJcbiAgICBoYXMoZWxlbWVudDogYW55KTogYm9vbGVhbjtcclxuICAgIGNsZWFyKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YWxsb3dQcmV2aW91c1BsYXllclN0eWxlc01lcmdlKGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpOiBib29sZWFuO1xyXG5cclxuLyoqXHJcbiAqIERlc2lnbmVkIHRvIGJlIGV4ZWN1dGVkIGR1cmluZyBhIGtleWZyYW1lLWJhc2VkIGFuaW1hdGlvbiB0byBhcHBseSBhbnkgc3BlY2lhbC1jYXNlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIFdoZW4gc3RhcnRlZCAod2hlbiB0aGUgYHN0YXJ0KClgIG1ldGhvZCBpcyBydW4pIHRoZW4gdGhlIHByb3ZpZGVkIGBzdGFydFN0eWxlc2BcclxuICogd2lsbCBiZSBhcHBsaWVkLiBXaGVuIGZpbmlzaGVkICh3aGVuIHRoZSBgZmluaXNoKClgIG1ldGhvZCBpcyBjYWxsZWQpIHRoZVxyXG4gKiBgZW5kU3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgYXMgd2VsbCBhbnkgYW55IHN0YXJ0aW5nIHN0eWxlcy4gRmluYWxseSB3aGVuXHJcbiAqIGBkZXN0cm95KClgIGlzIGNhbGxlZCB0aGVuIGFsbCBzdHlsZXMgd2lsbCBiZSByZW1vdmVkLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX2FuaW1hdGlvbnNfYnJvd3Nlcl9icm93c2VyX2Ege1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDtcclxuICAgIHByaXZhdGUgX3N0YXJ0U3R5bGVzO1xyXG4gICAgcHJpdmF0ZSBfZW5kU3R5bGVzO1xyXG4gICAgc3RhdGljIGluaXRpYWxTdHlsZXNCeUVsZW1lbnQ6IFdlYWtNYXA8YW55LCB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfT47XHJcbiAgICBwcml2YXRlIF9zdGF0ZTtcclxuICAgIHByaXZhdGUgX2luaXRpYWxTdHlsZXM7XHJcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudDogYW55LCBfc3RhcnRTdHlsZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICB9IHwgbnVsbCwgX2VuZFN0eWxlczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIH0gfCBudWxsKTtcclxuICAgIHN0YXJ0KCk6IHZvaWQ7XHJcbiAgICBmaW5pc2goKTogdm9pZDtcclxuICAgIGRlc3Ryb3koKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVBbmltYXRpb24ge1xyXG4gICAgcHJpdmF0ZSBfZHJpdmVyO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uQXN0O1xyXG4gICAgY29uc3RydWN0b3IoX2RyaXZlcjogQW5pbWF0aW9uRHJpdmVyLCBpbnB1dDogQW5pbWF0aW9uTWV0YWRhdGEgfCBBbmltYXRpb25NZXRhZGF0YVtdKTtcclxuICAgIGJ1aWxkVGltZWxpbmVzKGVsZW1lbnQ6IGFueSwgc3RhcnRpbmdTdHlsZXM6IMm1U3R5bGVEYXRhIHwgybVTdHlsZURhdGFbXSwgZGVzdGluYXRpb25TdHlsZXM6IMm1U3R5bGVEYXRhIHwgybVTdHlsZURhdGFbXSwgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucywgc3ViSW5zdHJ1Y3Rpb25zPzogRWxlbWVudEluc3RydWN0aW9uTWFwKTogQW5pbWF0aW9uVGltZWxpbmVJbnN0cnVjdGlvbltdO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUFuaW1hdGlvbkVuZ2luZSB7XHJcbiAgICBwcml2YXRlIGJvZHlOb2RlO1xyXG4gICAgcHJpdmF0ZSBfZHJpdmVyO1xyXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkVuZ2luZTtcclxuICAgIHByaXZhdGUgX3RpbWVsaW5lRW5naW5lO1xyXG4gICAgcHJpdmF0ZSBfdHJpZ2dlckNhY2hlO1xyXG4gICAgb25SZW1vdmFsQ29tcGxldGU6IChlbGVtZW50OiBhbnksIGNvbnRleHQ6IGFueSkgPT4gdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKGJvZHlOb2RlOiBhbnksIF9kcml2ZXI6IEFuaW1hdGlvbkRyaXZlciwgbm9ybWFsaXplcjogybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIpO1xyXG4gICAgcmVnaXN0ZXJUcmlnZ2VyKGNvbXBvbmVudElkOiBzdHJpbmcsIG5hbWVzcGFjZUlkOiBzdHJpbmcsIGhvc3RFbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZywgbWV0YWRhdGE6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSk6IHZvaWQ7XHJcbiAgICByZWdpc3RlcihuYW1lc3BhY2VJZDogc3RyaW5nLCBob3N0RWxlbWVudDogYW55KTogdm9pZDtcclxuICAgIGRlc3Ryb3kobmFtZXNwYWNlSWQ6IHN0cmluZywgY29udGV4dDogYW55KTogdm9pZDtcclxuICAgIG9uSW5zZXJ0KG5hbWVzcGFjZUlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgcGFyZW50OiBhbnksIGluc2VydEJlZm9yZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBvblJlbW92ZShuYW1lc3BhY2VJZDogc3RyaW5nLCBlbGVtZW50OiBhbnksIGNvbnRleHQ6IGFueSwgaXNIb3N0RWxlbWVudD86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgZGlzYWJsZUFuaW1hdGlvbnMoZWxlbWVudDogYW55LCBkaXNhYmxlOiBib29sZWFuKTogdm9pZDtcclxuICAgIHByb2Nlc3MobmFtZXNwYWNlSWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIGxpc3RlbihuYW1lc3BhY2VJZDogc3RyaW5nLCBlbGVtZW50OiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFBoYXNlOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYW55KTogKCkgPT4gYW55O1xyXG4gICAgZmx1c2gobWljcm90YXNrSWQ/OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgZ2V0IHBsYXllcnMoKTogQW5pbWF0aW9uUGxheWVyW107XHJcbiAgICB3aGVuUmVuZGVyaW5nRG9uZSgpOiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIge1xyXG4gICAgYWJzdHJhY3Qgbm9ybWFsaXplUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3Qgbm9ybWFsaXplU3R5bGVWYWx1ZSh1c2VyUHJvdmlkZWRQcm9wZXJ0eTogc3RyaW5nLCBub3JtYWxpemVkUHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVjb250YWluc0VsZW1lbnQ6IChlbG0xOiBhbnksIGVsbTI6IGFueSkgPT4gYm9vbGVhbjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1Q3NzS2V5ZnJhbWVzRHJpdmVyIGltcGxlbWVudHMgQW5pbWF0aW9uRHJpdmVyIHtcclxuICAgIHByaXZhdGUgX2NvdW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaGVhZDtcclxuICAgIHByaXZhdGUgX3dhcm5pbmdJc3N1ZWQ7XHJcbiAgICB2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBjb250YWluc0VsZW1lbnQoZWxtMTogYW55LCBlbG0yOiBhbnkpOiBib29sZWFuO1xyXG4gICAgcXVlcnkoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbik6IGFueVtdO1xyXG4gICAgY29tcHV0ZVN0eWxlKGVsZW1lbnQ6IGFueSwgcHJvcDogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBidWlsZEtleWZyYW1lRWxlbWVudChlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZywga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfVtdKTogYW55O1xyXG4gICAgYW5pbWF0ZShlbGVtZW50OiBhbnksIGtleWZyYW1lczogybVTdHlsZURhdGFbXSwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciwgZWFzaW5nOiBzdHJpbmcsIHByZXZpb3VzUGxheWVycz86IEFuaW1hdGlvblBsYXllcltdLCBzY3J1YmJlckFjY2Vzc1JlcXVlc3RlZD86IGJvb2xlYW4pOiBBbmltYXRpb25QbGF5ZXI7XHJcbiAgICBwcml2YXRlIF9ub3RpZnlGYXVsdHlTY3J1YmJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVDc3NLZXlmcmFtZXNQbGF5ZXIgaW1wbGVtZW50cyBBbmltYXRpb25QbGF5ZXIge1xyXG4gICAgcmVhZG9ubHkgZWxlbWVudDogYW55O1xyXG4gICAgcmVhZG9ubHkga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfVtdO1xyXG4gICAgcmVhZG9ubHkgYW5pbWF0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZHVyYXRpb247XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZWxheTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZpbmFsU3R5bGVzO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BlY2lhbFN0eWxlcz87XHJcbiAgICBwcml2YXRlIF9vbkRvbmVGbnM7XHJcbiAgICBwcml2YXRlIF9vblN0YXJ0Rm5zO1xyXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95Rm5zO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRlZDtcclxuICAgIHByaXZhdGUgX3N0eWxlcjtcclxuICAgIHBhcmVudFBsYXllcjogQW5pbWF0aW9uUGxheWVyO1xyXG4gICAgcmVhZG9ubHkgdG90YWxUaW1lOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBlYXNpbmc6IHN0cmluZztcclxuICAgIGN1cnJlbnRTbmFwc2hvdDoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICBwcml2YXRlIF9zdGF0ZTtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IGFueSwga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfVtdLCBhbmltYXRpb25OYW1lOiBzdHJpbmcsIF9kdXJhdGlvbjogbnVtYmVyLCBfZGVsYXk6IG51bWJlciwgZWFzaW5nOiBzdHJpbmcsIF9maW5hbFN0eWxlczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIH0sIF9zcGVjaWFsU3R5bGVzPzogybVhbmd1bGFyX3BhY2thZ2VzX2FuaW1hdGlvbnNfYnJvd3Nlcl9icm93c2VyX2EgfCBudWxsIHwgdW5kZWZpbmVkKTtcclxuICAgIG9uU3RhcnQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgb25Eb25lKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIG9uRGVzdHJveShmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBkZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9mbHVzaERvbmVGbnM7XHJcbiAgICBwcml2YXRlIF9mbHVzaFN0YXJ0Rm5zO1xyXG4gICAgZmluaXNoKCk6IHZvaWQ7XHJcbiAgICBzZXRQb3NpdGlvbih2YWx1ZTogbnVtYmVyKTogdm9pZDtcclxuICAgIGdldFBvc2l0aW9uKCk6IG51bWJlcjtcclxuICAgIGhhc1N0YXJ0ZWQoKTogYm9vbGVhbjtcclxuICAgIGluaXQoKTogdm9pZDtcclxuICAgIHBsYXkoKTogdm9pZDtcclxuICAgIHBhdXNlKCk6IHZvaWQ7XHJcbiAgICByZXN0YXJ0KCk6IHZvaWQ7XHJcbiAgICByZXNldCgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfYnVpbGRTdHlsZXI7XHJcbiAgICBiZWZvcmVEZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1aW52b2tlUXVlcnk6IChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKSA9PiBhbnlbXTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1bWF0Y2hlc0VsZW1lbnQ6IChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVOb29wQW5pbWF0aW9uRHJpdmVyIGltcGxlbWVudHMgQW5pbWF0aW9uRHJpdmVyIHtcclxuICAgIHZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgbWF0Y2hlc0VsZW1lbnQoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIGNvbnRhaW5zRWxlbWVudChlbG0xOiBhbnksIGVsbTI6IGFueSk6IGJvb2xlYW47XHJcbiAgICBxdWVyeShlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKTogYW55W107XHJcbiAgICBjb21wdXRlU3R5bGUoZWxlbWVudDogYW55LCBwcm9wOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZztcclxuICAgIGFuaW1hdGUoZWxlbWVudDogYW55LCBrZXlmcmFtZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB9W10sIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsIGVhc2luZzogc3RyaW5nLCBwcmV2aW91c1BsYXllcnM/OiBhbnlbXSwgc2NydWJiZXJBY2Nlc3NSZXF1ZXN0ZWQ/OiBib29sZWFuKTogQW5pbWF0aW9uUGxheWVyO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVOb29wQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyIHtcclxuICAgIG5vcm1hbGl6ZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZztcclxuICAgIG5vcm1hbGl6ZVN0eWxlVmFsdWUodXNlclByb3ZpZGVkUHJvcGVydHk6IHN0cmluZywgbm9ybWFsaXplZFByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1c3VwcG9ydHNXZWJBbmltYXRpb25zKCk6IGJvb2xlYW47XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtXZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVXZWJBbmltYXRpb25zRHJpdmVyIGltcGxlbWVudHMgQW5pbWF0aW9uRHJpdmVyIHtcclxuICAgIHByaXZhdGUgX2lzTmF0aXZlSW1wbDtcclxuICAgIHByaXZhdGUgX2Nzc0tleWZyYW1lc0RyaXZlcjtcclxuICAgIHZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgbWF0Y2hlc0VsZW1lbnQoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIGNvbnRhaW5zRWxlbWVudChlbG0xOiBhbnksIGVsbTI6IGFueSk6IGJvb2xlYW47XHJcbiAgICBxdWVyeShlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKTogYW55W107XHJcbiAgICBjb21wdXRlU3R5bGUoZWxlbWVudDogYW55LCBwcm9wOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZztcclxuICAgIG92ZXJyaWRlV2ViQW5pbWF0aW9uc1N1cHBvcnQoc3VwcG9ydGVkOiBib29sZWFuKTogdm9pZDtcclxuICAgIGFuaW1hdGUoZWxlbWVudDogYW55LCBrZXlmcmFtZXM6IMm1U3R5bGVEYXRhW10sIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsIGVhc2luZzogc3RyaW5nLCBwcmV2aW91c1BsYXllcnM/OiBBbmltYXRpb25QbGF5ZXJbXSwgc2NydWJiZXJBY2Nlc3NSZXF1ZXN0ZWQ/OiBib29sZWFuKTogQW5pbWF0aW9uUGxheWVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtVdlYkFuaW1hdGlvbnNQbGF5ZXIgaW1wbGVtZW50cyBBbmltYXRpb25QbGF5ZXIge1xyXG4gICAgZWxlbWVudDogYW55O1xyXG4gICAga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfVtdO1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBwcml2YXRlIF9zcGVjaWFsU3R5bGVzPztcclxuICAgIHByaXZhdGUgX29uRG9uZUZucztcclxuICAgIHByaXZhdGUgX29uU3RhcnRGbnM7XHJcbiAgICBwcml2YXRlIF9vbkRlc3Ryb3lGbnM7XHJcbiAgICBwcml2YXRlIF9kdXJhdGlvbjtcclxuICAgIHByaXZhdGUgX2RlbGF5O1xyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ7XHJcbiAgICBwcml2YXRlIF9maW5pc2hlZDtcclxuICAgIHByaXZhdGUgX3N0YXJ0ZWQ7XHJcbiAgICBwcml2YXRlIF9kZXN0cm95ZWQ7XHJcbiAgICBwcml2YXRlIF9maW5hbEtleWZyYW1lO1xyXG4gICAgcmVhZG9ubHkgZG9tUGxheWVyOiBET01BbmltYXRpb247XHJcbiAgICB0aW1lOiBudW1iZXI7XHJcbiAgICBwYXJlbnRQbGF5ZXI6IEFuaW1hdGlvblBsYXllciB8IG51bGw7XHJcbiAgICBjdXJyZW50U25hcHNob3Q6IHtcclxuICAgICAgICBbc3R5bGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogYW55LCBrZXlmcmFtZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB9W10sIG9wdGlvbnM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB9LCBfc3BlY2lhbFN0eWxlcz86IMm1YW5ndWxhcl9wYWNrYWdlc19hbmltYXRpb25zX2Jyb3dzZXJfYnJvd3Nlcl9hIHwgbnVsbCB8IHVuZGVmaW5lZCk7XHJcbiAgICBwcml2YXRlIF9vbkZpbmlzaDtcclxuICAgIGluaXQoKTogdm9pZDtcclxuICAgIHByaXZhdGUgX2J1aWxkUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBfcHJlcGFyZVBsYXllckJlZm9yZVN0YXJ0O1xyXG4gICAgb25TdGFydChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBvbkRvbmUoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgb25EZXN0cm95KGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIHBsYXkoKTogdm9pZDtcclxuICAgIHBhdXNlKCk6IHZvaWQ7XHJcbiAgICBmaW5pc2goKTogdm9pZDtcclxuICAgIHJlc2V0KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9yZXNldERvbVBsYXllclN0YXRlO1xyXG4gICAgcmVzdGFydCgpOiB2b2lkO1xyXG4gICAgaGFzU3RhcnRlZCgpOiBib29sZWFuO1xyXG4gICAgZGVzdHJveSgpOiB2b2lkO1xyXG4gICAgc2V0UG9zaXRpb24ocDogbnVtYmVyKTogdm9pZDtcclxuICAgIGdldFBvc2l0aW9uKCk6IG51bWJlcjtcclxuICAgIGdldCB0b3RhbFRpbWUoKTogbnVtYmVyO1xyXG4gICAgYmVmb3JlRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgZXh0ZW5kcyDJtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplciB7XHJcbiAgICBub3JtYWxpemVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmc7XHJcbiAgICBub3JtYWxpemVTdHlsZVZhbHVlKHVzZXJQcm92aWRlZFByb3BlcnR5OiBzdHJpbmcsIG5vcm1hbGl6ZWRQcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgeyB9XHJcbiJdfQ==