/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */


/**
 * Defines an animation step that combines styling information with timing information.
 *
 * @param timings Sets `AnimateTimings` for the parent animation.
 * A string in the format "duration [delay] [easing]".
 *  - Duration and delay are expressed as a number and optional time unit,
 * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
 * The default unit is milliseconds.
 *  - The easing value controls how the animation accelerates and decelerates
 * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
 * `ease-in-out`, or a `cubic-bezier()` function call.
 * If not supplied, no easing is applied.
 *
 * For example, the string "1s 100ms ease-out" specifies a duration of
 * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
 * which decelerates near the end of the duration.
 * @param styles Sets AnimationStyles for the parent animation.
 * A function call to either `style()` or `keyframes()`
 * that returns a collection of CSS style entries to be applied to the parent animation.
 * When null, uses the styles from the destination state.
 * This is useful when describing an animation step that will complete an animation;
 * see "Animating to the final state" in `transitions()`.
 * @returns An object that encapsulates the animation step.
 *
 * @usageNotes
 * Call within an animation `sequence()`, `{@link animations/group group()}`, or
 * `transition()` call to specify an animation step
 * that applies given style data to the parent animation for a given amount of time.
 *
 * ### Syntax Examples
 * **Timing examples**
 *
 * The following examples show various `timings` specifications.
 * - `animate(500)` : Duration is 500 milliseconds.
 * - `animate("1s")` : Duration is 1000 milliseconds.
 * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
 * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
 * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
 * milliseconds, easing according to a bezier curve.
 *
 * **Style examples**
 *
 * The following example calls `style()` to set a single CSS style.
 * ```typescript
 * animate(500, style({ background: "red" }))
 * ```
 * The following example calls `keyframes()` to set a CSS style
 * to different values for successive keyframes.
 * ```typescript
 * animate(500, keyframes(
 *  [
 *   style({ background: "blue" })),
 *   style({ background: "red" }))
 *  ])
 * ```
 *
 * @publicApi
 */
export declare function animate(timings: string | number, styles?: AnimationStyleMetadata | AnimationKeyframesSequenceMetadata | null): AnimationAnimateMetadata;

/**
 * Executes a queried inner animation element within an animation sequence.
 *
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional override values for developer-defined parameters.
 * @return An object that encapsulates the child animation data.
 *
 * @usageNotes
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature is designed to be used with `query()` and it will only work
 * with animations that are assigned using the Angular animation library. CSS keyframes
 * and transitions are not handled by this API.
 *
 * @publicApi
 */
export declare function animateChild(options?: AnimateChildOptions | null): AnimationAnimateChildMetadata;

/**
 * Adds duration options to control animation styling and timing for a child animation.
 *
 * @see `animateChild()`
 *
 * @publicApi
 */
export declare interface AnimateChildOptions extends AnimationOptions {
    duration?: number | string;
}

/**
 * Represents animation-step timing parameters for an animation step.
 * @see `animate()`
 *
 * @publicApi
 */
export declare type AnimateTimings = {
    /**
     * The full duration of an animation step. A number and optional time unit,
     * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
     * The default unit is milliseconds.
     */
    duration: number;
    /**
     * The delay in applying an animation step. A number and optional time unit.
     * The default unit is milliseconds.
     */
    delay: number;
    /**
     * An easing style that controls how an animations step accelerates
     * and decelerates during its run time. An easing function such as `cubic-bezier()`,
     * or one of the following constants:
     * - `ease-in`
     * - `ease-out`
     * - `ease-in-and-out`
     */
    easing: string | null;
};

/**
 * Produces a reusable animation that can be invoked in another animation or sequence,
 * by calling the `useAnimation()` function.
 *
 * @param steps One or more animation objects, as returned by the `animate()`
 * or `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional developer-defined parameters.
 * Provided values for additional parameters are used as defaults,
 * and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the animation data.
 *
 * @usageNotes
 * The following example defines a reusable animation, providing some default parameter
 * values.
 *
 * ```typescript
 * var fadeAnimation = animation([
 *   style({ opacity: '{{ start }}' }),
 *   animate('{{ time }}',
 *   style({ opacity: '{{ end }}'}))
 *   ],
 *   { params: { time: '1000ms', start: 0, end: 1 }});
 * ```
 *
 * The following invokes the defined animation with a call to `useAnimation()`,
 * passing in override parameter values.
 *
 * ```js
 * useAnimation(fadeAnimation, {
 *   params: {
 *     time: '2s',
 *     start: 1,
 *     end: 0
 *   }
 * })
 * ```
 *
 * If any of the passed-in parameter values are missing from this call,
 * the default values are used. If one or more parameter values are missing before a step is
 * animated, `useAnimation()` throws an error.
 *
 * @publicApi
 */
export declare function animation(steps: AnimationMetadata | AnimationMetadata[], options?: AnimationOptions | null): AnimationReferenceMetadata;

/**
 * Encapsulates a child animation, that can be run explicitly when the parent is run.
 * Instantiated and returned by the `animateChild` function.
 *
 * @publicApi
 */
export declare interface AnimationAnimateChildMetadata extends AnimationMetadata {
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     */
    options: AnimationOptions | null;
}

/**
 * Encapsulates an animation step. Instantiated and returned by
 * the `animate()` function.
 *
 * @publicApi
 */
export declare interface AnimationAnimateMetadata extends AnimationMetadata {
    /**
     * The timing data for the step.
     */
    timings: string | number | AnimateTimings;
    /**
     * A set of styles used in the step.
     */
    styles: AnimationStyleMetadata | AnimationKeyframesSequenceMetadata | null;
}

/**
 * Encapsulates a reusable animation.
 * Instantiated and returned by the `useAnimation()` function.
 *
 * @publicApi
 */
export declare interface AnimationAnimateRefMetadata extends AnimationMetadata {
    /**
     * An animation reference object.
     */
    animation: AnimationReferenceMetadata;
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     */
    options: AnimationOptions | null;
}

/**
 * An injectable service that produces an animation sequence programmatically within an
 * Angular component or directive.
 * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
 *
 * @usageNotes
 *
 * To use this service, add it to your component or directive as a dependency.
 * The service is instantiated along with your component.
 *
 * Apps do not typically need to create their own animation players, but if you
 * do need to, follow these steps:
 *
 * 1. Use the `build()` method to create a programmatic animation using the
 * `animate()` function. The method returns an `AnimationFactory` instance.
 *
 * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
 *
 * 3. Use the player object to control the animation programmatically.
 *
 * For example:
 *
 * ```ts
 * // import the service from BrowserAnimationsModule
 * import {AnimationBuilder} from '@angular/animations';
 * // require the service as a dependency
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first define a reusable animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // use the returned factory object to create a player
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare abstract class AnimationBuilder {
    /**
     * Builds a factory for producing a defined animation.
     * @param animation A reusable animation definition.
     * @returns A factory object that can create a player for the defined animation.
     * @see `animate()`
     */
    abstract build(animation: AnimationMetadata | AnimationMetadata[]): AnimationFactory;
}


/**
 * An instance of this class is returned as an event parameter when an animation
 * callback is captured for an animation either during the start or done phase.
 *
 * ```typescript
 * @Component({
 *   host: {
 *     '[@myAnimationTrigger]': 'someExpression',
 *     '(@myAnimationTrigger.start)': 'captureStartEvent($event)',
 *     '(@myAnimationTrigger.done)': 'captureDoneEvent($event)',
 *   },
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *        // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   someExpression: any = false;
 *   captureStartEvent(event: AnimationEvent) {
 *     // the toState, fromState and totalTime data is accessible from the event variable
 *   }
 *
 *   captureDoneEvent(event: AnimationEvent) {
 *     // the toState, fromState and totalTime data is accessible from the event variable
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare interface AnimationEvent {
    /**
     * The name of the state from which the animation is triggered.
     */
    fromState: string;
    /**
     * The name of the state in which the animation completes.
     */
    toState: string;
    /**
     * The time it takes the animation to complete, in milliseconds.
     */
    totalTime: number;
    /**
     * The animation phase in which the callback was invoked, one of
     * "start" or "done".
     */
    phaseName: string;
    /**
     * The element to which the animation is attached.
     */
    element: any;
    /**
     * Internal.
     */
    triggerName: string;
    /**
     * Internal.
     */
    disabled: boolean;
}

/**
 * A factory object returned from the `AnimationBuilder`.`build()` method.
 *
 * @publicApi
 */
export declare abstract class AnimationFactory {
    /**
     * Creates an `AnimationPlayer` instance for the reusable animation defined by
     * the `AnimationBuilder`.`build()` method that created this factory.
     * Attaches the new player a DOM element.
     * @param element The DOM element to which to attach the animation.
     * @param options A set of options that can include a time delay and
     * additional developer-defined parameters.
     */
    abstract create(element: any, options?: AnimationOptions): AnimationPlayer;
}

/**
 * Encapsulates an animation group.
 * Instantiated and returned by the `{@link animations/group group()}` function.
 *
 * @publicApi
 */
export declare interface AnimationGroupMetadata extends AnimationMetadata {
    /**
     * One or more animation or style steps that form this group.
     */
    steps: AnimationMetadata[];
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     */
    options: AnimationOptions | null;
}

/**
 * Encapsulates a keyframes sequence. Instantiated and returned by
 * the `keyframes()` function.
 *
 * @publicApi
 */
export declare interface AnimationKeyframesSequenceMetadata extends AnimationMetadata {
    /**
     * An array of animation styles.
     */
    steps: AnimationStyleMetadata[];
}

/**
 * Base for animation data structures.
 *
 * @publicApi
 */
export declare interface AnimationMetadata {
    type: AnimationMetadataType;
}

/**
 * @description Constants for the categories of parameters that can be defined for animations.
 *
 * A corresponding function defines a set of parameters for each category, and
 * collects them into a corresponding `AnimationMetadata` object.
 *
 * @publicApi
 */
export declare const enum AnimationMetadataType {
    /**
     * Associates a named animation state with a set of CSS styles.
     * See `state()`
     */
    State = 0,
    /**
     * Data for a transition from one animation state to another.
     * See `transition()`
     */
    Transition = 1,
    /**
     * Contains a set of animation steps.
     * See `sequence()`
     */
    Sequence = 2,
    /**
     * Contains a set of animation steps.
     * See `{@link animations/group group()}`
     */
    Group = 3,
    /**
     * Contains an animation step.
     * See `animate()`
     */
    Animate = 4,
    /**
     * Contains a set of animation steps.
     * See `keyframes()`
     */
    Keyframes = 5,
    /**
     * Contains a set of CSS property-value pairs into a named style.
     * See `style()`
     */
    Style = 6,
    /**
     * Associates an animation with an entry trigger that can be attached to an element.
     * See `trigger()`
     */
    Trigger = 7,
    /**
     * Contains a re-usable animation.
     * See `animation()`
     */
    Reference = 8,
    /**
     * Contains data to use in executing child animations returned by a query.
     * See `animateChild()`
     */
    AnimateChild = 9,
    /**
     * Contains animation parameters for a re-usable animation.
     * See `useAnimation()`
     */
    AnimateRef = 10,
    /**
     * Contains child-animation query data.
     * See `query()`
     */
    Query = 11,
    /**
     * Contains data for staggering an animation sequence.
     * See `stagger()`
     */
    Stagger = 12
}

/**
 * @description Options that control animation styling and timing.
 *
 * The following animation functions accept `AnimationOptions` data:
 *
 * - `transition()`
 * - `sequence()`
 * - `{@link animations/group group()}`
 * - `query()`
 * - `animation()`
 * - `useAnimation()`
 * - `animateChild()`
 *
 * Programmatic animations built using the `AnimationBuilder` service also
 * make use of `AnimationOptions`.
 *
 * @publicApi
 */
export declare interface AnimationOptions {
    /**
     * Sets a time-delay for initiating an animation action.
     * A number and optional time unit, such as "1s" or "10ms" for one second
     * and 10 milliseconds, respectively.The default unit is milliseconds.
     * Default value is 0, meaning no delay.
     */
    delay?: number | string;
    /**
     * A set of developer-defined parameters that modify styling and timing
     * when an animation action starts. An array of key-value pairs, where the provided value
     * is used as a default.
     */
    params?: {
        [name: string]: any;
    };
}

/**
 * Provides programmatic control of a reusable animation sequence,
 * built using the `build()` method of `AnimationBuilder`. The `build()` method
 * returns a factory, whose `create()` method instantiates and initializes this interface.
 *
 * @see `AnimationBuilder`
 * @see `AnimationFactory`
 * @see `animate()`
 *
 * @publicApi
 */
export declare interface AnimationPlayer {
    /**
     * Provides a callback to invoke when the animation finishes.
     * @param fn The callback function.
     * @see `finish()`
     */
    onDone(fn: () => void): void;
    /**
     * Provides a callback to invoke when the animation starts.
     * @param fn The callback function.
     * @see `run()`
     */
    onStart(fn: () => void): void;
    /**
     * Provides a callback to invoke after the animation is destroyed.
     * @param fn The callback function.
     * @see `destroy()`
     * @see `beforeDestroy()`
     */
    onDestroy(fn: () => void): void;
    /**
     * Initializes the animation.
     */
    init(): void;
    /**
     * Reports whether the animation has started.
     * @returns True if the animation has started, false otherwise.
     */
    hasStarted(): boolean;
    /**
     * Runs the animation, invoking the `onStart()` callback.
     */
    play(): void;
    /**
     * Pauses the animation.
     */
    pause(): void;
    /**
     * Restarts the paused animation.
     */
    restart(): void;
    /**
     * Ends the animation, invoking the `onDone()` callback.
     */
    finish(): void;
    /**
     * Destroys the animation, after invoking the `beforeDestroy()` callback.
     * Calls the `onDestroy()` callback when destruction is completed.
     */
    destroy(): void;
    /**
     * Resets the animation to its initial state.
     */
    reset(): void;
    /**
     * Sets the position of the animation.
     * @param position A 0-based offset into the duration, in milliseconds.
     */
    setPosition(position: any /** TODO #9100 */): void;
    /**
     * Reports the current position of the animation.
     * @returns A 0-based offset into the duration, in milliseconds.
     */
    getPosition(): number;
    /**
     * The parent of this player, if any.
     */
    parentPlayer: AnimationPlayer | null;
    /**
     * The total run time of the animation, in milliseconds.
     */
    readonly totalTime: number;
    /**
     * Provides a callback to invoke before the animation is destroyed.
     */
    beforeDestroy?: () => any;
}

/**
 * Encapsulates an animation query. Instantiated and returned by
 * the `query()` function.
 *
 * @publicApi
 */
export declare interface AnimationQueryMetadata extends AnimationMetadata {
    /**
     *  The CSS selector for this query.
     */
    selector: string;
    /**
     * One or more animation step objects.
     */
    animation: AnimationMetadata | AnimationMetadata[];
    /**
     * A query options object.
     */
    options: AnimationQueryOptions | null;
}

/**
 * Encapsulates animation query options.
 * Passed to the `query()` function.
 *
 * @publicApi
 */
export declare interface AnimationQueryOptions extends AnimationOptions {
    /**
     * True if this query is optional, false if it is required. Default is false.
     * A required query throws an error if no elements are retrieved when
     * the query is executed. An optional query does not.
     *
     */
    optional?: boolean;
    /**
     * A maximum total number of results to return from the query.
     * If negative, results are limited from the end of the query list towards the beginning.
     * By default, results are not limited.
     */
    limit?: number;
}

/**
 * Encapsulates a reusable animation, which is a collection of individual animation steps.
 * Instantiated and returned by the `animation()` function, and
 * passed to the `useAnimation()` function.
 *
 * @publicApi
 */
export declare interface AnimationReferenceMetadata extends AnimationMetadata {
    /**
     *  One or more animation step objects.
     */
    animation: AnimationMetadata | AnimationMetadata[];
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     */
    options: AnimationOptions | null;
}

/**
 * Encapsulates an animation sequence.
 * Instantiated and returned by the `sequence()` function.
 *
 * @publicApi
 */
export declare interface AnimationSequenceMetadata extends AnimationMetadata {
    /**
     *  An array of animation step objects.
     */
    steps: AnimationMetadata[];
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     */
    options: AnimationOptions | null;
}

/**
 * Encapsulates parameters for staggering the start times of a set of animation steps.
 * Instantiated and returned by the `stagger()` function.
 *
 * @publicApi
 **/
export declare interface AnimationStaggerMetadata extends AnimationMetadata {
    /**
     * The timing data for the steps.
     */
    timings: string | number;
    /**
     * One or more animation steps.
     */
    animation: AnimationMetadata | AnimationMetadata[];
}

/**
 * Encapsulates an animation state by associating a state name with a set of CSS styles.
 * Instantiated and returned by the `state()` function.
 *
 * @publicApi
 */
export declare interface AnimationStateMetadata extends AnimationMetadata {
    /**
     * The state name, unique within the component.
     */
    name: string;
    /**
     *  The CSS styles associated with this state.
     */
    styles: AnimationStyleMetadata;
    /**
     * An options object containing
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation.
     */
    options?: {
        params: {
            [name: string]: any;
        };
    };
}

/**
 * Encapsulates an animation style. Instantiated and returned by
 * the `style()` function.
 *
 * @publicApi
 */
export declare interface AnimationStyleMetadata extends AnimationMetadata {
    /**
     * A set of CSS style properties.
     */
    styles: '*' | {
        [key: string]: string | number;
    } | Array<{
        [key: string]: string | number;
    } | '*'>;
    /**
     * A percentage of the total animate time at which the style is to be applied.
     */
    offset: number | null;
}

/**
 * Encapsulates an animation transition. Instantiated and returned by the
 * `transition()` function.
 *
 * @publicApi
 */
export declare interface AnimationTransitionMetadata extends AnimationMetadata {
    /**
     * An expression that describes a state change.
     */
    expr: string | ((fromState: string, toState: string, element?: any, params?: {
        [key: string]: any;
    }) => boolean);
    /**
     * One or more animation objects to which this transition applies.
     */
    animation: AnimationMetadata | AnimationMetadata[];
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     */
    options: AnimationOptions | null;
}

/**
 * Contains an animation trigger. Instantiated and returned by the
 * `trigger()` function.
 *
 * @publicApi
 */
export declare interface AnimationTriggerMetadata extends AnimationMetadata {
    /**
     * The trigger name, used to associate it with an element. Unique within the component.
     */
    name: string;
    /**
     * An animation definition object, containing an array of state and transition declarations.
     */
    definitions: AnimationMetadata[];
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     */
    options: {
        params?: {
            [name: string]: any;
        };
    } | null;
}

/**
 * Specifies automatic styling.
 *
 * @publicApi
 */
export declare const AUTO_STYLE = "*";

/**
 * @description Defines a list of animation steps to be run in parallel.
 *
 * @param steps An array of animation step objects.
 * - When steps are defined by `style()` or `animate()`
 * function calls, each call within the group is executed instantly.
 * - To specify offset styles to be applied at a later time, define steps with
 * `keyframes()`, or use `animate()` calls with a delay value.
 * For example:
 *
 * ```typescript
 * group([
 *   animate("1s", style({ background: "black" })),
 *   animate("2s", style({ color: "white" }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the group data.
 *
 * @usageNotes
 * Grouped animations are useful when a series of styles must be
 * animated at different starting times and closed off at different ending times.
 *
 * When called within a `sequence()` or a
 * `transition()` call, does not continue to the next
 * instruction until all of the inner animation steps have completed.
 *
 * @publicApi
 */
export declare function group(steps: AnimationMetadata[], options?: AnimationOptions | null): AnimationGroupMetadata;

/**
 * Defines a set of animation styles, associating each style with an optional `offset` value.
 *
 * @param steps A set of animation styles with optional offset data.
 * The optional `offset` value for a style specifies a percentage of the total animation
 * time at which that style is applied.
 * @returns An object that encapsulates the keyframes data.
 *
 * @usageNotes
 * Use with the `animate()` call. Instead of applying animations
 * from the current state
 * to the destination state, keyframes describe how each style entry is applied and at what point
 * within the animation arc.
 * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
 *
 * ### Usage
 *
 * In the following example, the offset values describe
 * when each `backgroundColor` value is applied. The color is red at the start, and changes to
 * blue when 20% of the total time has elapsed.
 *
 * ```typescript
 * // the provided offset values
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * If there are no `offset` values specified in the style entries, the offsets
 * are calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 *```

 * @publicApi
 */
export declare function keyframes(steps: AnimationStyleMetadata[]): AnimationKeyframesSequenceMetadata;

/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see `animate()`
 * @see `AnimationPlayer`
 * @see `GroupPlayer`
 *
 * @publicApi
 */
export declare class NoopAnimationPlayer implements AnimationPlayer {
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _started;
    private _destroyed;
    private _finished;
    parentPlayer: AnimationPlayer | null;
    readonly totalTime: number;
    constructor(duration?: number, delay?: number);
    private _onFinish;
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    hasStarted(): boolean;
    init(): void;
    play(): void;
    private _onStart;
    pause(): void;
    restart(): void;
    finish(): void;
    destroy(): void;
    reset(): void;
    setPosition(position: number): void;
    getPosition(): number;
}

/**
 * Finds one or more inner elements within the current element that is
 * being animated within a sequence. Use with `animate()`.
 *
 * @param selector The element to query, or a set of elements that contain Angular-specific
 * characteristics, specified with one or more of the following tokens.
 *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements.
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("@*")` : Query all elements that contain an animation triggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
 *
 * @param animation One or more animation steps to apply to the queried element or elements.
 * An array is treated as an animation sequence.
 * @param options An options object. Use the 'limit' field to limit the total number of
 * items to collect.
 * @return An object that encapsulates the query data.
 *
 * @usageNotes
 * Tokens can be merged into a combined query selector string. For example:
 *
 * ```typescript
 *  query(':self, .record:enter, .record:leave, @subTrigger', [...])
 * ```
 *
 * The `query()` function collects multiple elements and works internally by using
 * `element.querySelectorAll`. Use the `limit` field of an options object to limit
 * the total number of items to be collected. For example:
 *
 * ```js
 * query('div', [
 *   animate(...),
 *   animate(...)
 * ], { limit: 1 })
 * ```
 *
 * By default, throws an error when zero items are found. Set the
 * `optional` flag to ignore this error. For example:
 *
 * ```js
 * query('.some-element-that-may-not-be-there', [
 *   animate(...),
 *   animate(...)
 * ], { optional: true })
 * ```
 *
 * ### Usage Example
 *
 * The following example queries for inner elements and animates them
 * individually using `animate()`.
 *
 * ```typescript
 * @Component({
 *   selector: 'inner',
 *   template: `
 *     <div [@queryAnimation]="exp">
 *       <h1>Title</h1>
 *       <div class="content">
 *         Blah blah blah
 *       </div>
 *     </div>
 *   `,
 *   animations: [
 *    trigger('queryAnimation', [
 *      transition('* => goAnimate', [
 *        // hide the inner elements
 *        query('h1', style({ opacity: 0 })),
 *        query('.content', style({ opacity: 0 })),
 *
 *        // animate the inner elements in, one by one
 *        query('h1', animate(1000, style({ opacity: 1 }))),
 *        query('.content', animate(1000, style({ opacity: 1 }))),
 *      ])
 *    ])
 *  ]
 * })
 * class Cmp {
 *   exp = '';
 *
 *   goAnimate() {
 *     this.exp = 'goAnimate';
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare function query(selector: string, animation: AnimationMetadata | AnimationMetadata[], options?: AnimationQueryOptions | null): AnimationQueryMetadata;

/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * @param steps An array of animation step objects.
 * - Steps defined by `style()` calls apply the styling data immediately.
 * - Steps defined by `animate()` calls apply the styling data over time
 *   as specified by the timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 }),
 *   animate("1s", style({ opacity: 1 }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the sequence data.
 *
 * @usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{@link animations/group group()}` call, which runs animation steps in
 *parallel.
 *
 * When a sequence is used within a `{@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * @publicApi
 **/
export declare function sequence(steps: AnimationMetadata[], options?: AnimationOptions | null): AnimationSequenceMetadata;

/**
 * Use within an animation `query()` call to issue a timing gap after
 * each queried item is animated.
 *
 * @param timings A delay value.
 * @param animation One ore more animation steps.
 * @returns An object that encapsulates the stagger data.
 *
 * @usageNotes
 * In the following example, a container element wraps a list of items stamped out
 * by an `ngFor`. The container element contains an animation trigger that will later be set
 * to query for each of the inner items.
 *
 * Each time items are added, the opacity fade-in animation runs,
 * and each removed item is faded out.
 * When either of these animations occur, the stagger effect is
 * applied after each item's animation is started.
 *
 * ```html
 * <!-- list.component.html -->
 * <button (click)="toggle()">Show / Hide Items</button>
 * <hr />
 * <div [@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * Here is the component code:
 *
 * ```typescript
 * import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
 * @Component({
 *   templateUrl: 'list.component.html',
 *   animations: [
 *     trigger('listAnimation', [
 *     ...
 *     ])
 *   ]
 * })
 * class ListComponent {
 *   items = [];
 *
 *   showItems() {
 *     this.items = [0,1,2,3,4];
 *   }
 *
 *   hideItems() {
 *     this.items = [];
 *   }
 *
 *   toggle() {
 *     this.items.length ? this.hideItems() : this.showItems();
 *    }
 *  }
 * ```
 *
 * Here is the animation trigger code:
 *
 * ```typescript
 * trigger('listAnimation', [
 *   transition('* => *', [ // each time the binding value changes
 *     query(':leave', [
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 0 }))
 *       ])
 *     ]),
 *     query(':enter', [
 *       style({ opacity: 0 }),
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 1 }))
 *       ])
 *     ])
 *   ])
 * ])
 * ```
 *
 * @publicApi
 */
export declare function stagger(timings: string | number, animation: AnimationMetadata | AnimationMetadata[]): AnimationStaggerMetadata;

/**
 * Declares an animation state within a trigger attached to an element.
 *
 * @param name One or more names for the defined state in a comma-separated string.
 * The following reserved state names can be supplied to define a style for specific use
 * cases:
 *
 * - `void` You can associate styles with this name to be used when
 * the element is detached from the application. For example, when an `ngIf` evaluates
 * to false, the state of the associated element is void.
 *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
 * to be used as the fallback when the state that is being animated is not declared
 * within the trigger.
 *
 * @param styles A set of CSS styles associated with this state, created using the
 * `style()` function.
 * This set of styles persists on the element once the state has been reached.
 * @param options Parameters that can be passed to the state when it is invoked.
 * 0 or more key-value pairs.
 * @return An object that encapsulates the new state data.
 *
 * @usageNotes
 * Use the `trigger()` function to register states to an animation trigger.
 * Use the `transition()` function to animate between states.
 * When a state is active within a component, its associated styles persist on the element,
 * even when the animation ends.
 *
 * @publicApi
 **/
export declare function state(name: string, styles: AnimationStyleMetadata, options?: {
    params: {
        [name: string]: any;
    };
}): AnimationStateMetadata;

/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation `state`, within an animation `sequence`,
 * or as styling data for calls to `animate()` and `keyframes()`.
 *
 * @param tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return An object that encapsulates the style data.
 *
 * @usageNotes
 * The following examples create animation styles that collect a set of
 * CSS property values:
 *
 * ```typescript
 * // string values for CSS properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical pixel values
 * style({ width: 100, height: 0 })
 * ```
 *
 * The following example uses auto-styling to allow a component to animate from
 * a height of 0 up to the height of the parent element:
 *
 * ```
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * @publicApi
 **/
export declare function style(tokens: '*' | {
    [key: string]: string | number;
} | Array<'*' | {
    [key: string]: string | number;
}>): AnimationStyleMetadata;

/**
 * Declares an animation transition as a sequence of animation steps to run when a given
 * condition is satisfied. The condition is a Boolean expression or function that compares
 * the previous and current animation states, and returns true if this transition should occur.
 * When the state criteria of a defined transition are met, the associated animation is
 * triggered.
 *
 * @param stateChangeExpr A Boolean expression or function that compares the previous and current
 * animation states, and returns true if this transition should occur. Note that  "true" and "false"
 * match 1 and 0, respectively. An expression is evaluated each time a state change occurs in the
 * animation trigger element.
 * The animation steps run when the expression evaluates to true.
 *
 * - A state-change string takes the form "state1 => state2", where each side is a defined animation
 * state, or an asterix (*) to refer to a dynamic start or end state.
 *   - The expression string can contain multiple comma-separated statements;
 * for example "state1 => state2, state3 => state4".
 *   - Special values `:enter` and `:leave` initiate a transition on the entry and exit states,
 * equivalent to  "void => *"  and "* => void".
 *   - Special values `:increment` and `:decrement` initiate a transition when a numeric value has
 * increased or decreased in value.
 * - A function is executed each time a state change occurs in the animation trigger element.
 * The animation steps run when the function returns true.
 *
 * @param steps One or more animation objects, as returned by the `animate()` or
 * `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the animation,
 * and additional developer-defined parameters. Provided values for additional parameters are used
 * as defaults, and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the transition data.
 *
 * @usageNotes
 * The template associated with a component binds an animation trigger to an element.
 *
 * ```HTML
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * All transitions are defined within an animation trigger,
 * along with named states that the transitions change to and from.
 *
 * ```typescript
 * trigger("myAnimationTrigger", [
 *  // define states
 *  state("on", style({ background: "green" })),
 *  state("off", style({ background: "grey" })),
 *  ...]
 * ```
 *
 * Note that when you call the `sequence()` function within a `{@link animations/group group()}`
 * or a `transition()` call, execution does not continue to the next instruction
 * until each of the inner animation steps have completed.
 *
 * ### Syntax examples
 *
 * The following examples define transitions between the two defined states (and default states),
 * using various options:
 *
 * ```typescript
 * // Transition occurs when the state value
 * // bound to "myAnimationTrigger" changes from "on" to "off"
 * transition("on => off", animate(500))
 * // Run the same animation for both directions
 * transition("on <=> off", animate(500))
 * // Define multiple state-change pairs separated by commas
 * transition("on => off, off => void", animate(500))
 * ```
 *
 * ### Special values for state-change expressions
 *
 * - Catch-all state change for when an element is inserted into the page and the
 * destination state is unknown:
 *
 * ```typescript
 * transition("void => *", [
 *  style({ opacity: 0 }),
 *  animate(500)
 *  ])
 * ```
 *
 * - Capture a state change between any states:
 *
 *  `transition("* => *", animate("1s 0s"))`
 *
 * - Entry and exit transitions:
 *
 * ```typescript
 * transition(":enter", [
 *   style({ opacity: 0 }),
 *   animate(500, style({ opacity: 1 }))
 *   ]),
 * transition(":leave", [
 *   animate(500, style({ opacity: 0 }))
 *   ])
 * ```
 *
 * - Use `:increment` and `:decrement` to initiate transitions:
 *
 * ```typescript
 * transition(":increment", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 *
 * transition(":decrement", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 * ```
 *
 * ### State-change functions
 *
 * Here is an example of a `fromState` specified as a state-change function that invokes an
 * animation when true:
 *
 * ```typescript
 * transition((fromState, toState) =>
 *  {
 *   return fromState == "off" && toState == "on";
 *  },
 *  animate("1s 0s"))
 * ```
 *
 * ### Animating to the final state
 *
 * If the final step in a transition is a call to `animate()` that uses a timing value
 * with no style data, that step is automatically considered the final animation arc,
 * for the element to reach the final state. Angular automatically adds or removes
 * CSS styles to ensure that the element is in the correct final state.
 *
 * The following example defines a transition that starts by hiding the element,
 * then makes sure that it animates properly to whatever state is currently active for trigger:
 *
 * ```typescript
 * transition("void => *", [
 *   style({ opacity: 0 }),
 *   animate(500)
 *  ])
 * ```
 * ### Boolean value matching
 * If a trigger binding value is a Boolean, it can be matched using a transition expression
 * that compares true and false or 1 and 0. For example:
 *
 * ```
 * // in the template
 * <div [@openClose]="open ? true : false">...</div>
 * // in the component metadata
 * trigger('openClose', [
 *   state('true', style({ height: '*' })),
 *   state('false', style({ height: '0px' })),
 *   transition('false <=> true', animate(500))
 * ])
 * ```
 *
 * @publicApi
 **/
export declare function transition(stateChangeExpr: string | ((fromState: string, toState: string, element?: any, params?: {
    [key: string]: any;
}) => boolean), steps: AnimationMetadata | AnimationMetadata[], options?: AnimationOptions | null): AnimationTransitionMetadata;

/**
 * Creates a named animation trigger, containing a  list of `state()`
 * and `transition()` entries to be evaluated when the expression
 * bound to the trigger changes.
 *
 * @param name An identifying string.
 * @param definitions  An animation definition object, containing an array of `state()`
 * and `transition()` declarations.
 *
 * @return An object that encapsulates the trigger data.
 *
 * @usageNotes
 * Define an animation trigger in the `animations` section of `@Component` metadata.
 * In the template, reference the trigger by name and bind it to a trigger expression that
 * evaluates to a defined animation state, using the following format:
 *
 * `[@triggerName]="expression"`
 *
 * Animation trigger bindings convert all values to strings, and then match the
 * previous and current values against any linked transitions.
 * Booleans can be specified as `1` or `true` and `0` or `false`.
 *
 * ### Usage Example
 *
 * The following example creates an animation trigger reference based on the provided
 * name value.
 * The provided animation value is expected to be an array consisting of state and
 * transition declarations.
 *
 * ```typescript
 * @Component({
 *   selector: "my-component",
 *   templateUrl: "my-component-tpl.html",
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component makes use of the defined trigger
 * by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Using an inline function
 * The `transition` animation method also supports reading an inline function which can decide
 * if its associated animation should be run.
 *
 * ```typescript
 * // this method is run each time the `myAnimationTrigger` trigger value changes.
 * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
 string]: any}): boolean {
 *   // notice that `element` and `params` are also available here
 *   return toState == 'yes-please-animate';
 * }
 *
 * @Component({
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger('myAnimationTrigger', [
 *       transition(myInlineMatcherFn, [
 *         // the animation sequence code
 *       ]),
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "yes-please-animate";
 * }
 * ```
 *
 * ### Disabling Animations
 * When true, the special animation control binding `@.disabled` binding prevents
 * all animations from rendering.
 * Place the  `@.disabled` binding on an element to disable
 * animations on the element itself, as well as any inner animation triggers
 * within the element.
 *
 * The following example shows how to use this feature:
 *
 * ```typescript
 * @Component({
 *   selector: 'my-component',
 *   template: `
 *     <div [@.disabled]="isDisabled">
 *       <div [@childAnimation]="exp"></div>
 *     </div>
 *   `,
 *   animations: [
 *     trigger("childAnimation", [
 *       // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   isDisabled = true;
 *   exp = '...';
 * }
 * ```
 *
 * When `@.disabled` is true, it prevents the `@childAnimation` trigger from animating,
 * along with any inner animations.
 *
 * ### Disable animations application-wide
 * When an area of the template is set to have animations disabled,
 * **all** inner components have their animations disabled as well.
 * This means that you can disable all animations for an app
 * by placing a host binding set on `@.disabled` on the topmost Angular component.
 *
 * ```typescript
 * import {Component, HostBinding} from '@angular/core';
 *
 * @Component({
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 *   @HostBinding('@.disabled')
 *   public animationsDisabled = true;
 * }
 * ```
 *
 * ### Overriding disablement of inner animations
 * Despite inner animations being disabled, a parent animation can `query()`
 * for inner elements located in disabled areas of the template and still animate
 * them if needed. This is also the case for when a sub animation is
 * queried by a parent and then later animated using `animateChild()`.
 *
 * ### Detecting when an animation is disabled
 * If a region of the DOM (or the entire application) has its animations disabled, the animation
 * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
 * an instance of an `AnimationEvent`. If animations are disabled,
 * the `.disabled` flag on the event is true.
 *
 * @publicApi
 */
export declare function trigger(name: string, definitions: AnimationMetadata[]): AnimationTriggerMetadata;

/**
 * Starts a reusable animation that is created using the `animation()` function.
 *
 * @param animation The reusable animation to start.
 * @param options An options object that can contain a delay value for the start of
 * the animation, and additional override values for developer-defined parameters.
 * @return An object that contains the animation parameters.
 *
 * @publicApi
 */
export declare function useAnimation(animation: AnimationReferenceMetadata, options?: AnimationOptions | null): AnimationAnimateRefMetadata;

/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see `AnimationPlayer`
 * @see `{@link animations/group group()}`
 *
 */
export declare class ɵAnimationGroupPlayer implements AnimationPlayer {
    private _onDoneFns;
    private _onStartFns;
    private _finished;
    private _started;
    private _destroyed;
    private _onDestroyFns;
    parentPlayer: AnimationPlayer | null;
    totalTime: number;
    readonly players: AnimationPlayer[];
    constructor(_players: AnimationPlayer[]);
    private _onFinish;
    init(): void;
    onStart(fn: () => void): void;
    private _onStart;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    hasStarted(): boolean;
    play(): void;
    pause(): void;
    restart(): void;
    finish(): void;
    destroy(): void;
    private _onDestroy;
    reset(): void;
    setPosition(p: number): void;
    getPosition(): number;
    beforeDestroy(): void;
}

export declare const ɵPRE_STYLE = "!";


/**
 * Represents a set of CSS styles for use in an animation style.
 */
export declare interface ɵStyleData {
    [key: string]: string | number;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5kLnRzIiwic291cmNlcyI6WyJhbmltYXRpb25zLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMS4xMlxuICogKGMpIDIwMTAtMjAyMCBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYW4gYW5pbWF0aW9uIHN0ZXAgdGhhdCBjb21iaW5lcyBzdHlsaW5nIGluZm9ybWF0aW9uIHdpdGggdGltaW5nIGluZm9ybWF0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0gdGltaW5ncyBTZXRzIGBBbmltYXRlVGltaW5nc2AgZm9yIHRoZSBwYXJlbnQgYW5pbWF0aW9uLlxyXG4gKiBBIHN0cmluZyBpbiB0aGUgZm9ybWF0IFwiZHVyYXRpb24gW2RlbGF5XSBbZWFzaW5nXVwiLlxyXG4gKiAgLSBEdXJhdGlvbiBhbmQgZGVsYXkgYXJlIGV4cHJlc3NlZCBhcyBhIG51bWJlciBhbmQgb3B0aW9uYWwgdGltZSB1bml0LFxyXG4gKiBzdWNoIGFzIFwiMXNcIiBvciBcIjEwbXNcIiBmb3Igb25lIHNlY29uZCBhbmQgMTAgbWlsbGlzZWNvbmRzLCByZXNwZWN0aXZlbHkuXHJcbiAqIFRoZSBkZWZhdWx0IHVuaXQgaXMgbWlsbGlzZWNvbmRzLlxyXG4gKiAgLSBUaGUgZWFzaW5nIHZhbHVlIGNvbnRyb2xzIGhvdyB0aGUgYW5pbWF0aW9uIGFjY2VsZXJhdGVzIGFuZCBkZWNlbGVyYXRlc1xyXG4gKiBkdXJpbmcgaXRzIHJ1bnRpbWUuIFZhbHVlIGlzIG9uZSBvZiAgYGVhc2VgLCBgZWFzZS1pbmAsIGBlYXNlLW91dGAsXHJcbiAqIGBlYXNlLWluLW91dGAsIG9yIGEgYGN1YmljLWJlemllcigpYCBmdW5jdGlvbiBjYWxsLlxyXG4gKiBJZiBub3Qgc3VwcGxpZWQsIG5vIGVhc2luZyBpcyBhcHBsaWVkLlxyXG4gKlxyXG4gKiBGb3IgZXhhbXBsZSwgdGhlIHN0cmluZyBcIjFzIDEwMG1zIGVhc2Utb3V0XCIgc3BlY2lmaWVzIGEgZHVyYXRpb24gb2ZcclxuICogMTAwMCBtaWxsaXNlY29uZHMsIGFuZCBkZWxheSBvZiAxMDAgbXMsIGFuZCB0aGUgXCJlYXNlLW91dFwiIGVhc2luZyBzdHlsZSxcclxuICogd2hpY2ggZGVjZWxlcmF0ZXMgbmVhciB0aGUgZW5kIG9mIHRoZSBkdXJhdGlvbi5cclxuICogQHBhcmFtIHN0eWxlcyBTZXRzIEFuaW1hdGlvblN0eWxlcyBmb3IgdGhlIHBhcmVudCBhbmltYXRpb24uXHJcbiAqIEEgZnVuY3Rpb24gY2FsbCB0byBlaXRoZXIgYHN0eWxlKClgIG9yIGBrZXlmcmFtZXMoKWBcclxuICogdGhhdCByZXR1cm5zIGEgY29sbGVjdGlvbiBvZiBDU1Mgc3R5bGUgZW50cmllcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBwYXJlbnQgYW5pbWF0aW9uLlxyXG4gKiBXaGVuIG51bGwsIHVzZXMgdGhlIHN0eWxlcyBmcm9tIHRoZSBkZXN0aW5hdGlvbiBzdGF0ZS5cclxuICogVGhpcyBpcyB1c2VmdWwgd2hlbiBkZXNjcmliaW5nIGFuIGFuaW1hdGlvbiBzdGVwIHRoYXQgd2lsbCBjb21wbGV0ZSBhbiBhbmltYXRpb247XHJcbiAqIHNlZSBcIkFuaW1hdGluZyB0byB0aGUgZmluYWwgc3RhdGVcIiBpbiBgdHJhbnNpdGlvbnMoKWAuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgYW5pbWF0aW9uIHN0ZXAuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIENhbGwgd2l0aGluIGFuIGFuaW1hdGlvbiBgc2VxdWVuY2UoKWAsIGB7QGxpbmsgYW5pbWF0aW9ucy9ncm91cCBncm91cCgpfWAsIG9yXHJcbiAqIGB0cmFuc2l0aW9uKClgIGNhbGwgdG8gc3BlY2lmeSBhbiBhbmltYXRpb24gc3RlcFxyXG4gKiB0aGF0IGFwcGxpZXMgZ2l2ZW4gc3R5bGUgZGF0YSB0byB0aGUgcGFyZW50IGFuaW1hdGlvbiBmb3IgYSBnaXZlbiBhbW91bnQgb2YgdGltZS5cclxuICpcclxuICogIyMjIFN5bnRheCBFeGFtcGxlc1xyXG4gKiAqKlRpbWluZyBleGFtcGxlcyoqXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZXMgc2hvdyB2YXJpb3VzIGB0aW1pbmdzYCBzcGVjaWZpY2F0aW9ucy5cclxuICogLSBgYW5pbWF0ZSg1MDApYCA6IER1cmF0aW9uIGlzIDUwMCBtaWxsaXNlY29uZHMuXHJcbiAqIC0gYGFuaW1hdGUoXCIxc1wiKWAgOiBEdXJhdGlvbiBpcyAxMDAwIG1pbGxpc2Vjb25kcy5cclxuICogLSBgYW5pbWF0ZShcIjEwMG1zIDAuNXNcIilgIDogRHVyYXRpb24gaXMgMTAwIG1pbGxpc2Vjb25kcywgZGVsYXkgaXMgNTAwIG1pbGxpc2Vjb25kcy5cclxuICogLSBgYW5pbWF0ZShcIjVzIGVhc2UtaW5cIilgIDogRHVyYXRpb24gaXMgNTAwMCBtaWxsaXNlY29uZHMsIGVhc2luZyBpbi5cclxuICogLSBgYW5pbWF0ZShcIjVzIDEwbXMgY3ViaWMtYmV6aWVyKC4xNywuNjcsLjg4LC4xKVwiKWAgOiBEdXJhdGlvbiBpcyA1MDAwIG1pbGxpc2Vjb25kcywgZGVsYXkgaXMgMTBcclxuICogbWlsbGlzZWNvbmRzLCBlYXNpbmcgYWNjb3JkaW5nIHRvIGEgYmV6aWVyIGN1cnZlLlxyXG4gKlxyXG4gKiAqKlN0eWxlIGV4YW1wbGVzKipcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGNhbGxzIGBzdHlsZSgpYCB0byBzZXQgYSBzaW5nbGUgQ1NTIHN0eWxlLlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGFuaW1hdGUoNTAwLCBzdHlsZSh7IGJhY2tncm91bmQ6IFwicmVkXCIgfSkpXHJcbiAqIGBgYFxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgY2FsbHMgYGtleWZyYW1lcygpYCB0byBzZXQgYSBDU1Mgc3R5bGVcclxuICogdG8gZGlmZmVyZW50IHZhbHVlcyBmb3Igc3VjY2Vzc2l2ZSBrZXlmcmFtZXMuXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogYW5pbWF0ZSg1MDAsIGtleWZyYW1lcyhcclxuICogIFtcclxuICogICBzdHlsZSh7IGJhY2tncm91bmQ6IFwiYmx1ZVwiIH0pKSxcclxuICogICBzdHlsZSh7IGJhY2tncm91bmQ6IFwicmVkXCIgfSkpXHJcbiAqICBdKVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gYW5pbWF0ZSh0aW1pbmdzOiBzdHJpbmcgfCBudW1iZXIsIHN0eWxlcz86IEFuaW1hdGlvblN0eWxlTWV0YWRhdGEgfCBBbmltYXRpb25LZXlmcmFtZXNTZXF1ZW5jZU1ldGFkYXRhIHwgbnVsbCk6IEFuaW1hdGlvbkFuaW1hdGVNZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBFeGVjdXRlcyBhIHF1ZXJpZWQgaW5uZXIgYW5pbWF0aW9uIGVsZW1lbnQgd2l0aGluIGFuIGFuaW1hdGlvbiBzZXF1ZW5jZS5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QgdGhhdCBjYW4gY29udGFpbiBhIGRlbGF5IHZhbHVlIGZvciB0aGUgc3RhcnQgb2YgdGhlXHJcbiAqIGFuaW1hdGlvbiwgYW5kIGFkZGl0aW9uYWwgb3ZlcnJpZGUgdmFsdWVzIGZvciBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzLlxyXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgY2hpbGQgYW5pbWF0aW9uIGRhdGEuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIEVhY2ggdGltZSBhbiBhbmltYXRpb24gaXMgdHJpZ2dlcmVkIGluIEFuZ3VsYXIsIHRoZSBwYXJlbnQgYW5pbWF0aW9uXHJcbiAqIGhhcyBwcmlvcml0eSBhbmQgYW55IGNoaWxkIGFuaW1hdGlvbnMgYXJlIGJsb2NrZWQuIEluIG9yZGVyXHJcbiAqIGZvciBhIGNoaWxkIGFuaW1hdGlvbiB0byBydW4sIHRoZSBwYXJlbnQgYW5pbWF0aW9uIG11c3QgcXVlcnkgZWFjaCBvZiB0aGUgZWxlbWVudHNcclxuICogY29udGFpbmluZyBjaGlsZCBhbmltYXRpb25zLCBhbmQgcnVuIHRoZW0gdXNpbmcgdGhpcyBmdW5jdGlvbi5cclxuICpcclxuICogTm90ZSB0aGF0IHRoaXMgZmVhdHVyZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggYHF1ZXJ5KClgIGFuZCBpdCB3aWxsIG9ubHkgd29ya1xyXG4gKiB3aXRoIGFuaW1hdGlvbnMgdGhhdCBhcmUgYXNzaWduZWQgdXNpbmcgdGhlIEFuZ3VsYXIgYW5pbWF0aW9uIGxpYnJhcnkuIENTUyBrZXlmcmFtZXNcclxuICogYW5kIHRyYW5zaXRpb25zIGFyZSBub3QgaGFuZGxlZCBieSB0aGlzIEFQSS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gYW5pbWF0ZUNoaWxkKG9wdGlvbnM/OiBBbmltYXRlQ2hpbGRPcHRpb25zIHwgbnVsbCk6IEFuaW1hdGlvbkFuaW1hdGVDaGlsZE1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgZHVyYXRpb24gb3B0aW9ucyB0byBjb250cm9sIGFuaW1hdGlvbiBzdHlsaW5nIGFuZCB0aW1pbmcgZm9yIGEgY2hpbGQgYW5pbWF0aW9uLlxyXG4gKlxyXG4gKiBAc2VlIGBhbmltYXRlQ2hpbGQoKWBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGVDaGlsZE9wdGlvbnMgZXh0ZW5kcyBBbmltYXRpb25PcHRpb25zIHtcclxuICAgIGR1cmF0aW9uPzogbnVtYmVyIHwgc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhbmltYXRpb24tc3RlcCB0aW1pbmcgcGFyYW1ldGVycyBmb3IgYW4gYW5pbWF0aW9uIHN0ZXAuXHJcbiAqIEBzZWUgYGFuaW1hdGUoKWBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBBbmltYXRlVGltaW5ncyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZ1bGwgZHVyYXRpb24gb2YgYW4gYW5pbWF0aW9uIHN0ZXAuIEEgbnVtYmVyIGFuZCBvcHRpb25hbCB0aW1lIHVuaXQsXHJcbiAgICAgKiBzdWNoIGFzIFwiMXNcIiBvciBcIjEwbXNcIiBmb3Igb25lIHNlY29uZCBhbmQgMTAgbWlsbGlzZWNvbmRzLCByZXNwZWN0aXZlbHkuXHJcbiAgICAgKiBUaGUgZGVmYXVsdCB1bml0IGlzIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRlbGF5IGluIGFwcGx5aW5nIGFuIGFuaW1hdGlvbiBzdGVwLiBBIG51bWJlciBhbmQgb3B0aW9uYWwgdGltZSB1bml0LlxyXG4gICAgICogVGhlIGRlZmF1bHQgdW5pdCBpcyBtaWxsaXNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEFuIGVhc2luZyBzdHlsZSB0aGF0IGNvbnRyb2xzIGhvdyBhbiBhbmltYXRpb25zIHN0ZXAgYWNjZWxlcmF0ZXNcclxuICAgICAqIGFuZCBkZWNlbGVyYXRlcyBkdXJpbmcgaXRzIHJ1biB0aW1lLiBBbiBlYXNpbmcgZnVuY3Rpb24gc3VjaCBhcyBgY3ViaWMtYmV6aWVyKClgLFxyXG4gICAgICogb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgY29uc3RhbnRzOlxyXG4gICAgICogLSBgZWFzZS1pbmBcclxuICAgICAqIC0gYGVhc2Utb3V0YFxyXG4gICAgICogLSBgZWFzZS1pbi1hbmQtb3V0YFxyXG4gICAgICovXHJcbiAgICBlYXNpbmc6IHN0cmluZyB8IG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogUHJvZHVjZXMgYSByZXVzYWJsZSBhbmltYXRpb24gdGhhdCBjYW4gYmUgaW52b2tlZCBpbiBhbm90aGVyIGFuaW1hdGlvbiBvciBzZXF1ZW5jZSxcclxuICogYnkgY2FsbGluZyB0aGUgYHVzZUFuaW1hdGlvbigpYCBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHN0ZXBzIE9uZSBvciBtb3JlIGFuaW1hdGlvbiBvYmplY3RzLCBhcyByZXR1cm5lZCBieSB0aGUgYGFuaW1hdGUoKWBcclxuICogb3IgYHNlcXVlbmNlKClgIGZ1bmN0aW9uLCB0aGF0IGZvcm0gYSB0cmFuc2Zvcm1hdGlvbiBmcm9tIG9uZSBzdGF0ZSB0byBhbm90aGVyLlxyXG4gKiBBIHNlcXVlbmNlIGlzIHVzZWQgYnkgZGVmYXVsdCB3aGVuIHlvdSBwYXNzIGFuIGFycmF5LlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvcHRpb25zIG9iamVjdCB0aGF0IGNhbiBjb250YWluIGEgZGVsYXkgdmFsdWUgZm9yIHRoZSBzdGFydCBvZiB0aGVcclxuICogYW5pbWF0aW9uLCBhbmQgYWRkaXRpb25hbCBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzLlxyXG4gKiBQcm92aWRlZCB2YWx1ZXMgZm9yIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBhcmUgdXNlZCBhcyBkZWZhdWx0cyxcclxuICogYW5kIG92ZXJyaWRlIHZhbHVlcyBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjYWxsZXIgb24gaW52b2NhdGlvbi5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBhbmltYXRpb24gZGF0YS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGRlZmluZXMgYSByZXVzYWJsZSBhbmltYXRpb24sIHByb3ZpZGluZyBzb21lIGRlZmF1bHQgcGFyYW1ldGVyXHJcbiAqIHZhbHVlcy5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB2YXIgZmFkZUFuaW1hdGlvbiA9IGFuaW1hdGlvbihbXHJcbiAqICAgc3R5bGUoeyBvcGFjaXR5OiAne3sgc3RhcnQgfX0nIH0pLFxyXG4gKiAgIGFuaW1hdGUoJ3t7IHRpbWUgfX0nLFxyXG4gKiAgIHN0eWxlKHsgb3BhY2l0eTogJ3t7IGVuZCB9fSd9KSlcclxuICogICBdLFxyXG4gKiAgIHsgcGFyYW1zOiB7IHRpbWU6ICcxMDAwbXMnLCBzdGFydDogMCwgZW5kOiAxIH19KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgaW52b2tlcyB0aGUgZGVmaW5lZCBhbmltYXRpb24gd2l0aCBhIGNhbGwgdG8gYHVzZUFuaW1hdGlvbigpYCxcclxuICogcGFzc2luZyBpbiBvdmVycmlkZSBwYXJhbWV0ZXIgdmFsdWVzLlxyXG4gKlxyXG4gKiBgYGBqc1xyXG4gKiB1c2VBbmltYXRpb24oZmFkZUFuaW1hdGlvbiwge1xyXG4gKiAgIHBhcmFtczoge1xyXG4gKiAgICAgdGltZTogJzJzJyxcclxuICogICAgIHN0YXJ0OiAxLFxyXG4gKiAgICAgZW5kOiAwXHJcbiAqICAgfVxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICogSWYgYW55IG9mIHRoZSBwYXNzZWQtaW4gcGFyYW1ldGVyIHZhbHVlcyBhcmUgbWlzc2luZyBmcm9tIHRoaXMgY2FsbCxcclxuICogdGhlIGRlZmF1bHQgdmFsdWVzIGFyZSB1c2VkLiBJZiBvbmUgb3IgbW9yZSBwYXJhbWV0ZXIgdmFsdWVzIGFyZSBtaXNzaW5nIGJlZm9yZSBhIHN0ZXAgaXNcclxuICogYW5pbWF0ZWQsIGB1c2VBbmltYXRpb24oKWAgdGhyb3dzIGFuIGVycm9yLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBhbmltYXRpb24oc3RlcHM6IEFuaW1hdGlvbk1ldGFkYXRhIHwgQW5pbWF0aW9uTWV0YWRhdGFbXSwgb3B0aW9ucz86IEFuaW1hdGlvbk9wdGlvbnMgfCBudWxsKTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIGEgY2hpbGQgYW5pbWF0aW9uLCB0aGF0IGNhbiBiZSBydW4gZXhwbGljaXRseSB3aGVuIHRoZSBwYXJlbnQgaXMgcnVuLlxyXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgYW5pbWF0ZUNoaWxkYCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvbkFuaW1hdGVDaGlsZE1ldGFkYXRhIGV4dGVuZHMgQW5pbWF0aW9uTWV0YWRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXHJcbiAgICAgKiBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzIHRoYXQgcHJvdmlkZSBzdHlsaW5nIGRlZmF1bHRzIGFuZFxyXG4gICAgICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi4gRGVmYXVsdCBkZWxheSBpcyAwLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zOiBBbmltYXRpb25PcHRpb25zIHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsYXRlcyBhbiBhbmltYXRpb24gc3RlcC4gSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieVxyXG4gKiB0aGUgYGFuaW1hdGUoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25BbmltYXRlTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aW1pbmcgZGF0YSBmb3IgdGhlIHN0ZXAuXHJcbiAgICAgKi9cclxuICAgIHRpbWluZ3M6IHN0cmluZyB8IG51bWJlciB8IEFuaW1hdGVUaW1pbmdzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHNldCBvZiBzdHlsZXMgdXNlZCBpbiB0aGUgc3RlcC5cclxuICAgICAqL1xyXG4gICAgc3R5bGVzOiBBbmltYXRpb25TdHlsZU1ldGFkYXRhIHwgQW5pbWF0aW9uS2V5ZnJhbWVzU2VxdWVuY2VNZXRhZGF0YSB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bGF0ZXMgYSByZXVzYWJsZSBhbmltYXRpb24uXHJcbiAqIEluc3RhbnRpYXRlZCBhbmQgcmV0dXJuZWQgYnkgdGhlIGB1c2VBbmltYXRpb24oKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25BbmltYXRlUmVmTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFuaW1hdGlvbiByZWZlcmVuY2Ugb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXHJcbiAgICAgKiBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzIHRoYXQgcHJvdmlkZSBzdHlsaW5nIGRlZmF1bHRzIGFuZFxyXG4gICAgICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi4gRGVmYXVsdCBkZWxheSBpcyAwLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zOiBBbmltYXRpb25PcHRpb25zIHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGluamVjdGFibGUgc2VydmljZSB0aGF0IHByb2R1Y2VzIGFuIGFuaW1hdGlvbiBzZXF1ZW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpdGhpbiBhblxyXG4gKiBBbmd1bGFyIGNvbXBvbmVudCBvciBkaXJlY3RpdmUuXHJcbiAqIFByb3ZpZGVkIGJ5IHRoZSBgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVgIG9yIGBOb29wQW5pbWF0aW9uc01vZHVsZWAuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFRvIHVzZSB0aGlzIHNlcnZpY2UsIGFkZCBpdCB0byB5b3VyIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgYXMgYSBkZXBlbmRlbmN5LlxyXG4gKiBUaGUgc2VydmljZSBpcyBpbnN0YW50aWF0ZWQgYWxvbmcgd2l0aCB5b3VyIGNvbXBvbmVudC5cclxuICpcclxuICogQXBwcyBkbyBub3QgdHlwaWNhbGx5IG5lZWQgdG8gY3JlYXRlIHRoZWlyIG93biBhbmltYXRpb24gcGxheWVycywgYnV0IGlmIHlvdVxyXG4gKiBkbyBuZWVkIHRvLCBmb2xsb3cgdGhlc2Ugc3RlcHM6XHJcbiAqXHJcbiAqIDEuIFVzZSB0aGUgYGJ1aWxkKClgIG1ldGhvZCB0byBjcmVhdGUgYSBwcm9ncmFtbWF0aWMgYW5pbWF0aW9uIHVzaW5nIHRoZVxyXG4gKiBgYW5pbWF0ZSgpYCBmdW5jdGlvbi4gVGhlIG1ldGhvZCByZXR1cm5zIGFuIGBBbmltYXRpb25GYWN0b3J5YCBpbnN0YW5jZS5cclxuICpcclxuICogMi4gVXNlIHRoZSBmYWN0b3J5IG9iamVjdCB0byBjcmVhdGUgYW4gYEFuaW1hdGlvblBsYXllcmAgYW5kIGF0dGFjaCBpdCB0byBhIERPTSBlbGVtZW50LlxyXG4gKlxyXG4gKiAzLiBVc2UgdGhlIHBsYXllciBvYmplY3QgdG8gY29udHJvbCB0aGUgYW5pbWF0aW9uIHByb2dyYW1tYXRpY2FsbHkuXHJcbiAqXHJcbiAqIEZvciBleGFtcGxlOlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiAvLyBpbXBvcnQgdGhlIHNlcnZpY2UgZnJvbSBCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG4gKiBpbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG4gKiAvLyByZXF1aXJlIHRoZSBzZXJ2aWNlIGFzIGEgZGVwZW5kZW5jeVxyXG4gKiBjbGFzcyBNeUNtcCB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge31cclxuICpcclxuICogICBtYWtlQW5pbWF0aW9uKGVsZW1lbnQ6IGFueSkge1xyXG4gKiAgICAgLy8gZmlyc3QgZGVmaW5lIGEgcmV1c2FibGUgYW5pbWF0aW9uXHJcbiAqICAgICBjb25zdCBteUFuaW1hdGlvbiA9IHRoaXMuX2J1aWxkZXIuYnVpbGQoW1xyXG4gKiAgICAgICBzdHlsZSh7IHdpZHRoOiAwIH0pLFxyXG4gKiAgICAgICBhbmltYXRlKDEwMDAsIHN0eWxlKHsgd2lkdGg6ICcxMDBweCcgfSkpXHJcbiAqICAgICBdKTtcclxuICpcclxuICogICAgIC8vIHVzZSB0aGUgcmV0dXJuZWQgZmFjdG9yeSBvYmplY3QgdG8gY3JlYXRlIGEgcGxheWVyXHJcbiAqICAgICBjb25zdCBwbGF5ZXIgPSBteUFuaW1hdGlvbi5jcmVhdGUoZWxlbWVudCk7XHJcbiAqXHJcbiAqICAgICBwbGF5ZXIucGxheSgpO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgQW5pbWF0aW9uQnVpbGRlciB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBhIGZhY3RvcnkgZm9yIHByb2R1Y2luZyBhIGRlZmluZWQgYW5pbWF0aW9uLlxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBBIHJldXNhYmxlIGFuaW1hdGlvbiBkZWZpbml0aW9uLlxyXG4gICAgICogQHJldHVybnMgQSBmYWN0b3J5IG9iamVjdCB0aGF0IGNhbiBjcmVhdGUgYSBwbGF5ZXIgZm9yIHRoZSBkZWZpbmVkIGFuaW1hdGlvbi5cclxuICAgICAqIEBzZWUgYGFuaW1hdGUoKWBcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgYnVpbGQoYW5pbWF0aW9uOiBBbmltYXRpb25NZXRhZGF0YSB8IEFuaW1hdGlvbk1ldGFkYXRhW10pOiBBbmltYXRpb25GYWN0b3J5O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaXMgcmV0dXJuZWQgYXMgYW4gZXZlbnQgcGFyYW1ldGVyIHdoZW4gYW4gYW5pbWF0aW9uXHJcbiAqIGNhbGxiYWNrIGlzIGNhcHR1cmVkIGZvciBhbiBhbmltYXRpb24gZWl0aGVyIGR1cmluZyB0aGUgc3RhcnQgb3IgZG9uZSBwaGFzZS5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogICBob3N0OiB7XHJcbiAqICAgICAnW0BteUFuaW1hdGlvblRyaWdnZXJdJzogJ3NvbWVFeHByZXNzaW9uJyxcclxuICogICAgICcoQG15QW5pbWF0aW9uVHJpZ2dlci5zdGFydCknOiAnY2FwdHVyZVN0YXJ0RXZlbnQoJGV2ZW50KScsXHJcbiAqICAgICAnKEBteUFuaW1hdGlvblRyaWdnZXIuZG9uZSknOiAnY2FwdHVyZURvbmVFdmVudCgkZXZlbnQpJyxcclxuICogICB9LFxyXG4gKiAgIGFuaW1hdGlvbnM6IFtcclxuICogICAgIHRyaWdnZXIoXCJteUFuaW1hdGlvblRyaWdnZXJcIiwgW1xyXG4gKiAgICAgICAgLy8gLi4uXHJcbiAqICAgICBdKVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgTXlDb21wb25lbnQge1xyXG4gKiAgIHNvbWVFeHByZXNzaW9uOiBhbnkgPSBmYWxzZTtcclxuICogICBjYXB0dXJlU3RhcnRFdmVudChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcclxuICogICAgIC8vIHRoZSB0b1N0YXRlLCBmcm9tU3RhdGUgYW5kIHRvdGFsVGltZSBkYXRhIGlzIGFjY2Vzc2libGUgZnJvbSB0aGUgZXZlbnQgdmFyaWFibGVcclxuICogICB9XHJcbiAqXHJcbiAqICAgY2FwdHVyZURvbmVFdmVudChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcclxuICogICAgIC8vIHRoZSB0b1N0YXRlLCBmcm9tU3RhdGUgYW5kIHRvdGFsVGltZSBkYXRhIGlzIGFjY2Vzc2libGUgZnJvbSB0aGUgZXZlbnQgdmFyaWFibGVcclxuICogICB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25FdmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBzdGF0ZSBmcm9tIHdoaWNoIHRoZSBhbmltYXRpb24gaXMgdHJpZ2dlcmVkLlxyXG4gICAgICovXHJcbiAgICBmcm9tU3RhdGU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHN0YXRlIGluIHdoaWNoIHRoZSBhbmltYXRpb24gY29tcGxldGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0YXRlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aW1lIGl0IHRha2VzIHRoZSBhbmltYXRpb24gdG8gY29tcGxldGUsIGluIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgdG90YWxUaW1lOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhbmltYXRpb24gcGhhc2UgaW4gd2hpY2ggdGhlIGNhbGxiYWNrIHdhcyBpbnZva2VkLCBvbmUgb2ZcclxuICAgICAqIFwic3RhcnRcIiBvciBcImRvbmVcIi5cclxuICAgICAqL1xyXG4gICAgcGhhc2VOYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBlbGVtZW50IHRvIHdoaWNoIHRoZSBhbmltYXRpb24gaXMgYXR0YWNoZWQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwuXHJcbiAgICAgKi9cclxuICAgIHRyaWdnZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsLlxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZmFjdG9yeSBvYmplY3QgcmV0dXJuZWQgZnJvbSB0aGUgYEFuaW1hdGlvbkJ1aWxkZXJgLmBidWlsZCgpYCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEFuaW1hdGlvbkZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGBBbmltYXRpb25QbGF5ZXJgIGluc3RhbmNlIGZvciB0aGUgcmV1c2FibGUgYW5pbWF0aW9uIGRlZmluZWQgYnlcclxuICAgICAqIHRoZSBgQW5pbWF0aW9uQnVpbGRlcmAuYGJ1aWxkKClgIG1ldGhvZCB0aGF0IGNyZWF0ZWQgdGhpcyBmYWN0b3J5LlxyXG4gICAgICogQXR0YWNoZXMgdGhlIG5ldyBwbGF5ZXIgYSBET00gZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBET00gZWxlbWVudCB0byB3aGljaCB0byBhdHRhY2ggdGhlIGFuaW1hdGlvbi5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEEgc2V0IG9mIG9wdGlvbnMgdGhhdCBjYW4gaW5jbHVkZSBhIHRpbWUgZGVsYXkgYW5kXHJcbiAgICAgKiBhZGRpdGlvbmFsIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGNyZWF0ZShlbGVtZW50OiBhbnksIG9wdGlvbnM/OiBBbmltYXRpb25PcHRpb25zKTogQW5pbWF0aW9uUGxheWVyO1xyXG59XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIGFuIGFuaW1hdGlvbiBncm91cC5cclxuICogSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieSB0aGUgYHtAbGluayBhbmltYXRpb25zL2dyb3VwIGdyb3VwKCl9YCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvbkdyb3VwTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uZSBvciBtb3JlIGFuaW1hdGlvbiBvciBzdHlsZSBzdGVwcyB0aGF0IGZvcm0gdGhpcyBncm91cC5cclxuICAgICAqL1xyXG4gICAgc3RlcHM6IEFuaW1hdGlvbk1ldGFkYXRhW107XHJcbiAgICAvKipcclxuICAgICAqIEFuIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmcgYSBkZWxheSBhbmRcclxuICAgICAqIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMgdGhhdCBwcm92aWRlIHN0eWxpbmcgZGVmYXVsdHMgYW5kXHJcbiAgICAgKiBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBpbnZvY2F0aW9uLiBEZWZhdWx0IGRlbGF5IGlzIDAuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIGEga2V5ZnJhbWVzIHNlcXVlbmNlLiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5XHJcbiAqIHRoZSBga2V5ZnJhbWVzKClgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uS2V5ZnJhbWVzU2VxdWVuY2VNZXRhZGF0YSBleHRlbmRzIEFuaW1hdGlvbk1ldGFkYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgYW5pbWF0aW9uIHN0eWxlcy5cclxuICAgICAqL1xyXG4gICAgc3RlcHM6IEFuaW1hdGlvblN0eWxlTWV0YWRhdGFbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgZm9yIGFuaW1hdGlvbiBkYXRhIHN0cnVjdHVyZXMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25NZXRhZGF0YSB7XHJcbiAgICB0eXBlOiBBbmltYXRpb25NZXRhZGF0YVR5cGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ29uc3RhbnRzIGZvciB0aGUgY2F0ZWdvcmllcyBvZiBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIGRlZmluZWQgZm9yIGFuaW1hdGlvbnMuXHJcbiAqXHJcbiAqIEEgY29ycmVzcG9uZGluZyBmdW5jdGlvbiBkZWZpbmVzIGEgc2V0IG9mIHBhcmFtZXRlcnMgZm9yIGVhY2ggY2F0ZWdvcnksIGFuZFxyXG4gKiBjb2xsZWN0cyB0aGVtIGludG8gYSBjb3JyZXNwb25kaW5nIGBBbmltYXRpb25NZXRhZGF0YWAgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEFuaW1hdGlvbk1ldGFkYXRhVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFzc29jaWF0ZXMgYSBuYW1lZCBhbmltYXRpb24gc3RhdGUgd2l0aCBhIHNldCBvZiBDU1Mgc3R5bGVzLlxyXG4gICAgICogU2VlIGBzdGF0ZSgpYFxyXG4gICAgICovXHJcbiAgICBTdGF0ZSA9IDAsXHJcbiAgICAvKipcclxuICAgICAqIERhdGEgZm9yIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBhbmltYXRpb24gc3RhdGUgdG8gYW5vdGhlci5cclxuICAgICAqIFNlZSBgdHJhbnNpdGlvbigpYFxyXG4gICAgICovXHJcbiAgICBUcmFuc2l0aW9uID0gMSxcclxuICAgIC8qKlxyXG4gICAgICogQ29udGFpbnMgYSBzZXQgb2YgYW5pbWF0aW9uIHN0ZXBzLlxyXG4gICAgICogU2VlIGBzZXF1ZW5jZSgpYFxyXG4gICAgICovXHJcbiAgICBTZXF1ZW5jZSA9IDIsXHJcbiAgICAvKipcclxuICAgICAqIENvbnRhaW5zIGEgc2V0IG9mIGFuaW1hdGlvbiBzdGVwcy5cclxuICAgICAqIFNlZSBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gXHJcbiAgICAgKi9cclxuICAgIEdyb3VwID0gMyxcclxuICAgIC8qKlxyXG4gICAgICogQ29udGFpbnMgYW4gYW5pbWF0aW9uIHN0ZXAuXHJcbiAgICAgKiBTZWUgYGFuaW1hdGUoKWBcclxuICAgICAqL1xyXG4gICAgQW5pbWF0ZSA9IDQsXHJcbiAgICAvKipcclxuICAgICAqIENvbnRhaW5zIGEgc2V0IG9mIGFuaW1hdGlvbiBzdGVwcy5cclxuICAgICAqIFNlZSBga2V5ZnJhbWVzKClgXHJcbiAgICAgKi9cclxuICAgIEtleWZyYW1lcyA9IDUsXHJcbiAgICAvKipcclxuICAgICAqIENvbnRhaW5zIGEgc2V0IG9mIENTUyBwcm9wZXJ0eS12YWx1ZSBwYWlycyBpbnRvIGEgbmFtZWQgc3R5bGUuXHJcbiAgICAgKiBTZWUgYHN0eWxlKClgXHJcbiAgICAgKi9cclxuICAgIFN0eWxlID0gNixcclxuICAgIC8qKlxyXG4gICAgICogQXNzb2NpYXRlcyBhbiBhbmltYXRpb24gd2l0aCBhbiBlbnRyeSB0cmlnZ2VyIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIGFuIGVsZW1lbnQuXHJcbiAgICAgKiBTZWUgYHRyaWdnZXIoKWBcclxuICAgICAqL1xyXG4gICAgVHJpZ2dlciA9IDcsXHJcbiAgICAvKipcclxuICAgICAqIENvbnRhaW5zIGEgcmUtdXNhYmxlIGFuaW1hdGlvbi5cclxuICAgICAqIFNlZSBgYW5pbWF0aW9uKClgXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZSA9IDgsXHJcbiAgICAvKipcclxuICAgICAqIENvbnRhaW5zIGRhdGEgdG8gdXNlIGluIGV4ZWN1dGluZyBjaGlsZCBhbmltYXRpb25zIHJldHVybmVkIGJ5IGEgcXVlcnkuXHJcbiAgICAgKiBTZWUgYGFuaW1hdGVDaGlsZCgpYFxyXG4gICAgICovXHJcbiAgICBBbmltYXRlQ2hpbGQgPSA5LFxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250YWlucyBhbmltYXRpb24gcGFyYW1ldGVycyBmb3IgYSByZS11c2FibGUgYW5pbWF0aW9uLlxyXG4gICAgICogU2VlIGB1c2VBbmltYXRpb24oKWBcclxuICAgICAqL1xyXG4gICAgQW5pbWF0ZVJlZiA9IDEwLFxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250YWlucyBjaGlsZC1hbmltYXRpb24gcXVlcnkgZGF0YS5cclxuICAgICAqIFNlZSBgcXVlcnkoKWBcclxuICAgICAqL1xyXG4gICAgUXVlcnkgPSAxMSxcclxuICAgIC8qKlxyXG4gICAgICogQ29udGFpbnMgZGF0YSBmb3Igc3RhZ2dlcmluZyBhbiBhbmltYXRpb24gc2VxdWVuY2UuXHJcbiAgICAgKiBTZWUgYHN0YWdnZXIoKWBcclxuICAgICAqL1xyXG4gICAgU3RhZ2dlciA9IDEyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gT3B0aW9ucyB0aGF0IGNvbnRyb2wgYW5pbWF0aW9uIHN0eWxpbmcgYW5kIHRpbWluZy5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBhbmltYXRpb24gZnVuY3Rpb25zIGFjY2VwdCBgQW5pbWF0aW9uT3B0aW9uc2AgZGF0YTpcclxuICpcclxuICogLSBgdHJhbnNpdGlvbigpYFxyXG4gKiAtIGBzZXF1ZW5jZSgpYFxyXG4gKiAtIGB7QGxpbmsgYW5pbWF0aW9ucy9ncm91cCBncm91cCgpfWBcclxuICogLSBgcXVlcnkoKWBcclxuICogLSBgYW5pbWF0aW9uKClgXHJcbiAqIC0gYHVzZUFuaW1hdGlvbigpYFxyXG4gKiAtIGBhbmltYXRlQ2hpbGQoKWBcclxuICpcclxuICogUHJvZ3JhbW1hdGljIGFuaW1hdGlvbnMgYnVpbHQgdXNpbmcgdGhlIGBBbmltYXRpb25CdWlsZGVyYCBzZXJ2aWNlIGFsc29cclxuICogbWFrZSB1c2Ugb2YgYEFuaW1hdGlvbk9wdGlvbnNgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgYSB0aW1lLWRlbGF5IGZvciBpbml0aWF0aW5nIGFuIGFuaW1hdGlvbiBhY3Rpb24uXHJcbiAgICAgKiBBIG51bWJlciBhbmQgb3B0aW9uYWwgdGltZSB1bml0LCBzdWNoIGFzIFwiMXNcIiBvciBcIjEwbXNcIiBmb3Igb25lIHNlY29uZFxyXG4gICAgICogYW5kIDEwIG1pbGxpc2Vjb25kcywgcmVzcGVjdGl2ZWx5LlRoZSBkZWZhdWx0IHVuaXQgaXMgbWlsbGlzZWNvbmRzLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyAwLCBtZWFuaW5nIG5vIGRlbGF5LlxyXG4gICAgICovXHJcbiAgICBkZWxheT86IG51bWJlciB8IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQSBzZXQgb2YgZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IG1vZGlmeSBzdHlsaW5nIGFuZCB0aW1pbmdcclxuICAgICAqIHdoZW4gYW4gYW5pbWF0aW9uIGFjdGlvbiBzdGFydHMuIEFuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlycywgd2hlcmUgdGhlIHByb3ZpZGVkIHZhbHVlXHJcbiAgICAgKiBpcyB1c2VkIGFzIGEgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgcGFyYW1zPzoge1xyXG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgcHJvZ3JhbW1hdGljIGNvbnRyb2wgb2YgYSByZXVzYWJsZSBhbmltYXRpb24gc2VxdWVuY2UsXHJcbiAqIGJ1aWx0IHVzaW5nIHRoZSBgYnVpbGQoKWAgbWV0aG9kIG9mIGBBbmltYXRpb25CdWlsZGVyYC4gVGhlIGBidWlsZCgpYCBtZXRob2RcclxuICogcmV0dXJucyBhIGZhY3RvcnksIHdob3NlIGBjcmVhdGUoKWAgbWV0aG9kIGluc3RhbnRpYXRlcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcyBpbnRlcmZhY2UuXHJcbiAqXHJcbiAqIEBzZWUgYEFuaW1hdGlvbkJ1aWxkZXJgXHJcbiAqIEBzZWUgYEFuaW1hdGlvbkZhY3RvcnlgXHJcbiAqIEBzZWUgYGFuaW1hdGUoKWBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvblBsYXllciB7XHJcbiAgICAvKipcclxuICAgICAqIFByb3ZpZGVzIGEgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIGFuaW1hdGlvbiBmaW5pc2hlcy5cclxuICAgICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKiBAc2VlIGBmaW5pc2goKWBcclxuICAgICAqL1xyXG4gICAgb25Eb25lKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZXMgYSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgYW5pbWF0aW9uIHN0YXJ0cy5cclxuICAgICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKiBAc2VlIGBydW4oKWBcclxuICAgICAqL1xyXG4gICAgb25TdGFydChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFByb3ZpZGVzIGEgY2FsbGJhY2sgdG8gaW52b2tlIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgZGVzdHJveWVkLlxyXG4gICAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqIEBzZWUgYGRlc3Ryb3koKWBcclxuICAgICAqIEBzZWUgYGJlZm9yZURlc3Ryb3koKWBcclxuICAgICAqL1xyXG4gICAgb25EZXN0cm95KGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgaW5pdCgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIHdoZXRoZXIgdGhlIGFuaW1hdGlvbiBoYXMgc3RhcnRlZC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGFuaW1hdGlvbiBoYXMgc3RhcnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICovXHJcbiAgICBoYXNTdGFydGVkKCk6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgdGhlIGFuaW1hdGlvbiwgaW52b2tpbmcgdGhlIGBvblN0YXJ0KClgIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBwbGF5KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlcyB0aGUgYW5pbWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwYXVzZSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0YXJ0cyB0aGUgcGF1c2VkIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVzdGFydCgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbmRzIHRoZSBhbmltYXRpb24sIGludm9raW5nIHRoZSBgb25Eb25lKClgIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBmaW5pc2goKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveXMgdGhlIGFuaW1hdGlvbiwgYWZ0ZXIgaW52b2tpbmcgdGhlIGBiZWZvcmVEZXN0cm95KClgIGNhbGxiYWNrLlxyXG4gICAgICogQ2FsbHMgdGhlIGBvbkRlc3Ryb3koKWAgY2FsbGJhY2sgd2hlbiBkZXN0cnVjdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRzIHRoZSBhbmltYXRpb24gdG8gaXRzIGluaXRpYWwgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gQSAwLWJhc2VkIG9mZnNldCBpbnRvIHRoZSBkdXJhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbjogYW55IC8qKiBUT0RPICM5MTAwICovKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgYW5pbWF0aW9uLlxyXG4gICAgICogQHJldHVybnMgQSAwLWJhc2VkIG9mZnNldCBpbnRvIHRoZSBkdXJhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBnZXRQb3NpdGlvbigpOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXJlbnQgb2YgdGhpcyBwbGF5ZXIsIGlmIGFueS5cclxuICAgICAqL1xyXG4gICAgcGFyZW50UGxheWVyOiBBbmltYXRpb25QbGF5ZXIgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdG90YWwgcnVuIHRpbWUgb2YgdGhlIGFuaW1hdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSB0b3RhbFRpbWU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZXMgYSBjYWxsYmFjayB0byBpbnZva2UgYmVmb3JlIHRoZSBhbmltYXRpb24gaXMgZGVzdHJveWVkLlxyXG4gICAgICovXHJcbiAgICBiZWZvcmVEZXN0cm95PzogKCkgPT4gYW55O1xyXG59XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIGFuIGFuaW1hdGlvbiBxdWVyeS4gSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieVxyXG4gKiB0aGUgYHF1ZXJ5KClgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uUXVlcnlNZXRhZGF0YSBleHRlbmRzIEFuaW1hdGlvbk1ldGFkYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogIFRoZSBDU1Mgc2VsZWN0b3IgZm9yIHRoaXMgcXVlcnkuXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdG9yOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIE9uZSBvciBtb3JlIGFuaW1hdGlvbiBzdGVwIG9iamVjdHMuXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uTWV0YWRhdGEgfCBBbmltYXRpb25NZXRhZGF0YVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHF1ZXJ5IG9wdGlvbnMgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zOiBBbmltYXRpb25RdWVyeU9wdGlvbnMgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIGFuaW1hdGlvbiBxdWVyeSBvcHRpb25zLlxyXG4gKiBQYXNzZWQgdG8gdGhlIGBxdWVyeSgpYCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvblF1ZXJ5T3B0aW9ucyBleHRlbmRzIEFuaW1hdGlvbk9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmIHRoaXMgcXVlcnkgaXMgb3B0aW9uYWwsIGZhbHNlIGlmIGl0IGlzIHJlcXVpcmVkLiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4gICAgICogQSByZXF1aXJlZCBxdWVyeSB0aHJvd3MgYW4gZXJyb3IgaWYgbm8gZWxlbWVudHMgYXJlIHJldHJpZXZlZCB3aGVuXHJcbiAgICAgKiB0aGUgcXVlcnkgaXMgZXhlY3V0ZWQuIEFuIG9wdGlvbmFsIHF1ZXJ5IGRvZXMgbm90LlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgb3B0aW9uYWw/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIG1heGltdW0gdG90YWwgbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuIGZyb20gdGhlIHF1ZXJ5LlxyXG4gICAgICogSWYgbmVnYXRpdmUsIHJlc3VsdHMgYXJlIGxpbWl0ZWQgZnJvbSB0aGUgZW5kIG9mIHRoZSBxdWVyeSBsaXN0IHRvd2FyZHMgdGhlIGJlZ2lubmluZy5cclxuICAgICAqIEJ5IGRlZmF1bHQsIHJlc3VsdHMgYXJlIG5vdCBsaW1pdGVkLlxyXG4gICAgICovXHJcbiAgICBsaW1pdD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsYXRlcyBhIHJldXNhYmxlIGFuaW1hdGlvbiwgd2hpY2ggaXMgYSBjb2xsZWN0aW9uIG9mIGluZGl2aWR1YWwgYW5pbWF0aW9uIHN0ZXBzLlxyXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgYW5pbWF0aW9uKClgIGZ1bmN0aW9uLCBhbmRcclxuICogcGFzc2VkIHRvIHRoZSBgdXNlQW5pbWF0aW9uKClgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqICBPbmUgb3IgbW9yZSBhbmltYXRpb24gc3RlcCBvYmplY3RzLlxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb246IEFuaW1hdGlvbk1ldGFkYXRhIHwgQW5pbWF0aW9uTWV0YWRhdGFbXTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gb3B0aW9ucyBvYmplY3QgY29udGFpbmluZyBhIGRlbGF5IGFuZFxyXG4gICAgICogZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IHByb3ZpZGUgc3R5bGluZyBkZWZhdWx0cyBhbmRcclxuICAgICAqIGNhbiBiZSBvdmVycmlkZGVuIG9uIGludm9jYXRpb24uIERlZmF1bHQgZGVsYXkgaXMgMC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucyB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bGF0ZXMgYW4gYW5pbWF0aW9uIHNlcXVlbmNlLlxyXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgc2VxdWVuY2UoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25TZXF1ZW5jZU1ldGFkYXRhIGV4dGVuZHMgQW5pbWF0aW9uTWV0YWRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiAgQW4gYXJyYXkgb2YgYW5pbWF0aW9uIHN0ZXAgb2JqZWN0cy5cclxuICAgICAqL1xyXG4gICAgc3RlcHM6IEFuaW1hdGlvbk1ldGFkYXRhW107XHJcbiAgICAvKipcclxuICAgICAqIEFuIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmcgYSBkZWxheSBhbmRcclxuICAgICAqIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMgdGhhdCBwcm92aWRlIHN0eWxpbmcgZGVmYXVsdHMgYW5kXHJcbiAgICAgKiBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBpbnZvY2F0aW9uLiBEZWZhdWx0IGRlbGF5IGlzIDAuXHJcbiAgICAgKi9cclxuICAgIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIHBhcmFtZXRlcnMgZm9yIHN0YWdnZXJpbmcgdGhlIHN0YXJ0IHRpbWVzIG9mIGEgc2V0IG9mIGFuaW1hdGlvbiBzdGVwcy5cclxuICogSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieSB0aGUgYHN0YWdnZXIoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICoqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uU3RhZ2dlck1ldGFkYXRhIGV4dGVuZHMgQW5pbWF0aW9uTWV0YWRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGltaW5nIGRhdGEgZm9yIHRoZSBzdGVwcy5cclxuICAgICAqL1xyXG4gICAgdGltaW5nczogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmUgb3IgbW9yZSBhbmltYXRpb24gc3RlcHMuXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uTWV0YWRhdGEgfCBBbmltYXRpb25NZXRhZGF0YVtdO1xyXG59XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIGFuIGFuaW1hdGlvbiBzdGF0ZSBieSBhc3NvY2lhdGluZyBhIHN0YXRlIG5hbWUgd2l0aCBhIHNldCBvZiBDU1Mgc3R5bGVzLlxyXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgc3RhdGUoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25TdGF0ZU1ldGFkYXRhIGV4dGVuZHMgQW5pbWF0aW9uTWV0YWRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RhdGUgbmFtZSwgdW5pcXVlIHdpdGhpbiB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqICBUaGUgQ1NTIHN0eWxlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgc3R5bGVzOiBBbmltYXRpb25TdHlsZU1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nXHJcbiAgICAgKiBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzIHRoYXQgcHJvdmlkZSBzdHlsaW5nIGRlZmF1bHRzIGFuZFxyXG4gICAgICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi5cclxuICAgICAqL1xyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgW25hbWU6IHN0cmluZ106IGFueTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsYXRlcyBhbiBhbmltYXRpb24gc3R5bGUuIEluc3RhbnRpYXRlZCBhbmQgcmV0dXJuZWQgYnlcclxuICogdGhlIGBzdHlsZSgpYCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvblN0eWxlTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIEEgc2V0IG9mIENTUyBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcbiAgICBzdHlsZXM6ICcqJyB8IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB9IHwgQXJyYXk8e1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxuICAgIH0gfCAnKic+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIGFuaW1hdGUgdGltZSBhdCB3aGljaCB0aGUgc3R5bGUgaXMgdG8gYmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgb2Zmc2V0OiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRW5jYXBzdWxhdGVzIGFuIGFuaW1hdGlvbiB0cmFuc2l0aW9uLiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZVxyXG4gKiBgdHJhbnNpdGlvbigpYCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvblRyYW5zaXRpb25NZXRhZGF0YSBleHRlbmRzIEFuaW1hdGlvbk1ldGFkYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogQW4gZXhwcmVzc2lvbiB0aGF0IGRlc2NyaWJlcyBhIHN0YXRlIGNoYW5nZS5cclxuICAgICAqL1xyXG4gICAgZXhwcjogc3RyaW5nIHwgKChmcm9tU3RhdGU6IHN0cmluZywgdG9TdGF0ZTogc3RyaW5nLCBlbGVtZW50PzogYW55LCBwYXJhbXM/OiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfSkgPT4gYm9vbGVhbik7XHJcbiAgICAvKipcclxuICAgICAqIE9uZSBvciBtb3JlIGFuaW1hdGlvbiBvYmplY3RzIHRvIHdoaWNoIHRoaXMgdHJhbnNpdGlvbiBhcHBsaWVzLlxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb246IEFuaW1hdGlvbk1ldGFkYXRhIHwgQW5pbWF0aW9uTWV0YWRhdGFbXTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gb3B0aW9ucyBvYmplY3QgY29udGFpbmluZyBhIGRlbGF5IGFuZFxyXG4gICAgICogZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IHByb3ZpZGUgc3R5bGluZyBkZWZhdWx0cyBhbmRcclxuICAgICAqIGNhbiBiZSBvdmVycmlkZGVuIG9uIGludm9jYXRpb24uIERlZmF1bHQgZGVsYXkgaXMgMC5cclxuICAgICAqL1xyXG4gICAgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucyB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBhbiBhbmltYXRpb24gdHJpZ2dlci4gSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieSB0aGVcclxuICogYHRyaWdnZXIoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0cmlnZ2VyIG5hbWUsIHVzZWQgdG8gYXNzb2NpYXRlIGl0IHdpdGggYW4gZWxlbWVudC4gVW5pcXVlIHdpdGhpbiB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFuaW1hdGlvbiBkZWZpbml0aW9uIG9iamVjdCwgY29udGFpbmluZyBhbiBhcnJheSBvZiBzdGF0ZSBhbmQgdHJhbnNpdGlvbiBkZWNsYXJhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGRlZmluaXRpb25zOiBBbmltYXRpb25NZXRhZGF0YVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXHJcbiAgICAgKiBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzIHRoYXQgcHJvdmlkZSBzdHlsaW5nIGRlZmF1bHRzIGFuZFxyXG4gICAgICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi4gRGVmYXVsdCBkZWxheSBpcyAwLlxyXG4gICAgICovXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgcGFyYW1zPzoge1xyXG4gICAgICAgICAgICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG4gICAgICAgIH07XHJcbiAgICB9IHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNwZWNpZmllcyBhdXRvbWF0aWMgc3R5bGluZy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgQVVUT19TVFlMRSA9IFwiKlwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGEgbGlzdCBvZiBhbmltYXRpb24gc3RlcHMgdG8gYmUgcnVuIGluIHBhcmFsbGVsLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RlcHMgQW4gYXJyYXkgb2YgYW5pbWF0aW9uIHN0ZXAgb2JqZWN0cy5cclxuICogLSBXaGVuIHN0ZXBzIGFyZSBkZWZpbmVkIGJ5IGBzdHlsZSgpYCBvciBgYW5pbWF0ZSgpYFxyXG4gKiBmdW5jdGlvbiBjYWxscywgZWFjaCBjYWxsIHdpdGhpbiB0aGUgZ3JvdXAgaXMgZXhlY3V0ZWQgaW5zdGFudGx5LlxyXG4gKiAtIFRvIHNwZWNpZnkgb2Zmc2V0IHN0eWxlcyB0byBiZSBhcHBsaWVkIGF0IGEgbGF0ZXIgdGltZSwgZGVmaW5lIHN0ZXBzIHdpdGhcclxuICogYGtleWZyYW1lcygpYCwgb3IgdXNlIGBhbmltYXRlKClgIGNhbGxzIHdpdGggYSBkZWxheSB2YWx1ZS5cclxuICogRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogZ3JvdXAoW1xyXG4gKiAgIGFuaW1hdGUoXCIxc1wiLCBzdHlsZSh7IGJhY2tncm91bmQ6IFwiYmxhY2tcIiB9KSksXHJcbiAqICAgYW5pbWF0ZShcIjJzXCIsIHN0eWxlKHsgY29sb3I6IFwid2hpdGVcIiB9KSlcclxuICogXSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmcgYSBkZWxheSBhbmRcclxuICogZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IHByb3ZpZGUgc3R5bGluZyBkZWZhdWx0cyBhbmRcclxuICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi5cclxuICpcclxuICogQHJldHVybiBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIGdyb3VwIGRhdGEuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIEdyb3VwZWQgYW5pbWF0aW9ucyBhcmUgdXNlZnVsIHdoZW4gYSBzZXJpZXMgb2Ygc3R5bGVzIG11c3QgYmVcclxuICogYW5pbWF0ZWQgYXQgZGlmZmVyZW50IHN0YXJ0aW5nIHRpbWVzIGFuZCBjbG9zZWQgb2ZmIGF0IGRpZmZlcmVudCBlbmRpbmcgdGltZXMuXHJcbiAqXHJcbiAqIFdoZW4gY2FsbGVkIHdpdGhpbiBhIGBzZXF1ZW5jZSgpYCBvciBhXHJcbiAqIGB0cmFuc2l0aW9uKClgIGNhbGwsIGRvZXMgbm90IGNvbnRpbnVlIHRvIHRoZSBuZXh0XHJcbiAqIGluc3RydWN0aW9uIHVudGlsIGFsbCBvZiB0aGUgaW5uZXIgYW5pbWF0aW9uIHN0ZXBzIGhhdmUgY29tcGxldGVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBncm91cChzdGVwczogQW5pbWF0aW9uTWV0YWRhdGFbXSwgb3B0aW9ucz86IEFuaW1hdGlvbk9wdGlvbnMgfCBudWxsKTogQW5pbWF0aW9uR3JvdXBNZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgc2V0IG9mIGFuaW1hdGlvbiBzdHlsZXMsIGFzc29jaWF0aW5nIGVhY2ggc3R5bGUgd2l0aCBhbiBvcHRpb25hbCBgb2Zmc2V0YCB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHN0ZXBzIEEgc2V0IG9mIGFuaW1hdGlvbiBzdHlsZXMgd2l0aCBvcHRpb25hbCBvZmZzZXQgZGF0YS5cclxuICogVGhlIG9wdGlvbmFsIGBvZmZzZXRgIHZhbHVlIGZvciBhIHN0eWxlIHNwZWNpZmllcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIGFuaW1hdGlvblxyXG4gKiB0aW1lIGF0IHdoaWNoIHRoYXQgc3R5bGUgaXMgYXBwbGllZC5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBrZXlmcmFtZXMgZGF0YS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVXNlIHdpdGggdGhlIGBhbmltYXRlKClgIGNhbGwuIEluc3RlYWQgb2YgYXBwbHlpbmcgYW5pbWF0aW9uc1xyXG4gKiBmcm9tIHRoZSBjdXJyZW50IHN0YXRlXHJcbiAqIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGF0ZSwga2V5ZnJhbWVzIGRlc2NyaWJlIGhvdyBlYWNoIHN0eWxlIGVudHJ5IGlzIGFwcGxpZWQgYW5kIGF0IHdoYXQgcG9pbnRcclxuICogd2l0aGluIHRoZSBhbmltYXRpb24gYXJjLlxyXG4gKiBDb21wYXJlIFtDU1MgS2V5ZnJhbWUgQW5pbWF0aW9uc10oaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3MvY3NzM19hbmltYXRpb25zLmFzcCkuXHJcbiAqXHJcbiAqICMjIyBVc2FnZVxyXG4gKlxyXG4gKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIHRoZSBvZmZzZXQgdmFsdWVzIGRlc2NyaWJlXHJcbiAqIHdoZW4gZWFjaCBgYmFja2dyb3VuZENvbG9yYCB2YWx1ZSBpcyBhcHBsaWVkLiBUaGUgY29sb3IgaXMgcmVkIGF0IHRoZSBzdGFydCwgYW5kIGNoYW5nZXMgdG9cclxuICogYmx1ZSB3aGVuIDIwJSBvZiB0aGUgdG90YWwgdGltZSBoYXMgZWxhcHNlZC5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAvLyB0aGUgcHJvdmlkZWQgb2Zmc2V0IHZhbHVlc1xyXG4gKiBhbmltYXRlKFwiNXNcIiwga2V5ZnJhbWVzKFtcclxuICogICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiwgb2Zmc2V0OiAwIH0pLFxyXG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIiwgb2Zmc2V0OiAwLjIgfSksXHJcbiAqICAgc3R5bGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsIG9mZnNldDogMC4zIH0pLFxyXG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIG9mZnNldDogMSB9KVxyXG4gKiBdKSlcclxuICogYGBgXHJcbiAqXHJcbiAqIElmIHRoZXJlIGFyZSBubyBgb2Zmc2V0YCB2YWx1ZXMgc3BlY2lmaWVkIGluIHRoZSBzdHlsZSBlbnRyaWVzLCB0aGUgb2Zmc2V0c1xyXG4gKiBhcmUgY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGFuaW1hdGUoXCI1c1wiLCBrZXlmcmFtZXMoW1xyXG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiIH0pIC8vIG9mZnNldCA9IDBcclxuICogICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIgfSkgLy8gb2Zmc2V0ID0gMC4zM1xyXG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiIH0pIC8vIG9mZnNldCA9IDAuNjZcclxuICogICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH0pIC8vIG9mZnNldCA9IDFcclxuICogXSkpXHJcbiAqYGBgXHJcblxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBrZXlmcmFtZXMoc3RlcHM6IEFuaW1hdGlvblN0eWxlTWV0YWRhdGFbXSk6IEFuaW1hdGlvbktleWZyYW1lc1NlcXVlbmNlTWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQW4gZW1wdHkgcHJvZ3JhbW1hdGljIGNvbnRyb2xsZXIgZm9yIHJldXNhYmxlIGFuaW1hdGlvbnMuXHJcbiAqIFVzZWQgaW50ZXJuYWxseSB3aGVuIGFuaW1hdGlvbnMgYXJlIGRpc2FibGVkLCB0byBhdm9pZFxyXG4gKiBjaGVja2luZyBmb3IgdGhlIG51bGwgY2FzZSB3aGVuIGFuIGFuaW1hdGlvbiBwbGF5ZXIgaXMgZXhwZWN0ZWQuXHJcbiAqXHJcbiAqIEBzZWUgYGFuaW1hdGUoKWBcclxuICogQHNlZSBgQW5pbWF0aW9uUGxheWVyYFxyXG4gKiBAc2VlIGBHcm91cFBsYXllcmBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTm9vcEFuaW1hdGlvblBsYXllciBpbXBsZW1lbnRzIEFuaW1hdGlvblBsYXllciB7XHJcbiAgICBwcml2YXRlIF9vbkRvbmVGbnM7XHJcbiAgICBwcml2YXRlIF9vblN0YXJ0Rm5zO1xyXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95Rm5zO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRlZDtcclxuICAgIHByaXZhdGUgX2Rlc3Ryb3llZDtcclxuICAgIHByaXZhdGUgX2ZpbmlzaGVkO1xyXG4gICAgcGFyZW50UGxheWVyOiBBbmltYXRpb25QbGF5ZXIgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgdG90YWxUaW1lOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihkdXJhdGlvbj86IG51bWJlciwgZGVsYXk/OiBudW1iZXIpO1xyXG4gICAgcHJpdmF0ZSBfb25GaW5pc2g7XHJcbiAgICBvblN0YXJ0KGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIG9uRG9uZShmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBvbkRlc3Ryb3koZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgaGFzU3RhcnRlZCgpOiBib29sZWFuO1xyXG4gICAgaW5pdCgpOiB2b2lkO1xyXG4gICAgcGxheSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfb25TdGFydDtcclxuICAgIHBhdXNlKCk6IHZvaWQ7XHJcbiAgICByZXN0YXJ0KCk6IHZvaWQ7XHJcbiAgICBmaW5pc2goKTogdm9pZDtcclxuICAgIGRlc3Ryb3koKTogdm9pZDtcclxuICAgIHJlc2V0KCk6IHZvaWQ7XHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZDtcclxuICAgIGdldFBvc2l0aW9uKCk6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIG9uZSBvciBtb3JlIGlubmVyIGVsZW1lbnRzIHdpdGhpbiB0aGUgY3VycmVudCBlbGVtZW50IHRoYXQgaXNcclxuICogYmVpbmcgYW5pbWF0ZWQgd2l0aGluIGEgc2VxdWVuY2UuIFVzZSB3aXRoIGBhbmltYXRlKClgLlxyXG4gKlxyXG4gKiBAcGFyYW0gc2VsZWN0b3IgVGhlIGVsZW1lbnQgdG8gcXVlcnksIG9yIGEgc2V0IG9mIGVsZW1lbnRzIHRoYXQgY29udGFpbiBBbmd1bGFyLXNwZWNpZmljXHJcbiAqIGNoYXJhY3RlcmlzdGljcywgc3BlY2lmaWVkIHdpdGggb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyB0b2tlbnMuXHJcbiAqICAtIGBxdWVyeShcIjplbnRlclwiKWAgb3IgYHF1ZXJ5KFwiOmxlYXZlXCIpYCA6IFF1ZXJ5IGZvciBuZXdseSBpbnNlcnRlZC9yZW1vdmVkIGVsZW1lbnRzLlxyXG4gKiAgLSBgcXVlcnkoXCI6YW5pbWF0aW5nXCIpYCA6IFF1ZXJ5IGFsbCBjdXJyZW50bHkgYW5pbWF0aW5nIGVsZW1lbnRzLlxyXG4gKiAgLSBgcXVlcnkoXCJAdHJpZ2dlck5hbWVcIilgIDogUXVlcnkgZWxlbWVudHMgdGhhdCBjb250YWluIGFuIGFuaW1hdGlvbiB0cmlnZ2VyLlxyXG4gKiAgLSBgcXVlcnkoXCJAKlwiKWAgOiBRdWVyeSBhbGwgZWxlbWVudHMgdGhhdCBjb250YWluIGFuIGFuaW1hdGlvbiB0cmlnZ2Vycy5cclxuICogIC0gYHF1ZXJ5KFwiOnNlbGZcIilgIDogSW5jbHVkZSB0aGUgY3VycmVudCBlbGVtZW50IGludG8gdGhlIGFuaW1hdGlvbiBzZXF1ZW5jZS5cclxuICpcclxuICogQHBhcmFtIGFuaW1hdGlvbiBPbmUgb3IgbW9yZSBhbmltYXRpb24gc3RlcHMgdG8gYXBwbHkgdG8gdGhlIHF1ZXJpZWQgZWxlbWVudCBvciBlbGVtZW50cy5cclxuICogQW4gYXJyYXkgaXMgdHJlYXRlZCBhcyBhbiBhbmltYXRpb24gc2VxdWVuY2UuXHJcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9wdGlvbnMgb2JqZWN0LiBVc2UgdGhlICdsaW1pdCcgZmllbGQgdG8gbGltaXQgdGhlIHRvdGFsIG51bWJlciBvZlxyXG4gKiBpdGVtcyB0byBjb2xsZWN0LlxyXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgcXVlcnkgZGF0YS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVG9rZW5zIGNhbiBiZSBtZXJnZWQgaW50byBhIGNvbWJpbmVkIHF1ZXJ5IHNlbGVjdG9yIHN0cmluZy4gRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIHF1ZXJ5KCc6c2VsZiwgLnJlY29yZDplbnRlciwgLnJlY29yZDpsZWF2ZSwgQHN1YlRyaWdnZXInLCBbLi4uXSlcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBgcXVlcnkoKWAgZnVuY3Rpb24gY29sbGVjdHMgbXVsdGlwbGUgZWxlbWVudHMgYW5kIHdvcmtzIGludGVybmFsbHkgYnkgdXNpbmdcclxuICogYGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbGAuIFVzZSB0aGUgYGxpbWl0YCBmaWVsZCBvZiBhbiBvcHRpb25zIG9iamVjdCB0byBsaW1pdFxyXG4gKiB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIHRvIGJlIGNvbGxlY3RlZC4gRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYGpzXHJcbiAqIHF1ZXJ5KCdkaXYnLCBbXHJcbiAqICAgYW5pbWF0ZSguLi4pLFxyXG4gKiAgIGFuaW1hdGUoLi4uKVxyXG4gKiBdLCB7IGxpbWl0OiAxIH0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBCeSBkZWZhdWx0LCB0aHJvd3MgYW4gZXJyb3Igd2hlbiB6ZXJvIGl0ZW1zIGFyZSBmb3VuZC4gU2V0IHRoZVxyXG4gKiBgb3B0aW9uYWxgIGZsYWcgdG8gaWdub3JlIHRoaXMgZXJyb3IuIEZvciBleGFtcGxlOlxyXG4gKlxyXG4gKiBgYGBqc1xyXG4gKiBxdWVyeSgnLnNvbWUtZWxlbWVudC10aGF0LW1heS1ub3QtYmUtdGhlcmUnLCBbXHJcbiAqICAgYW5pbWF0ZSguLi4pLFxyXG4gKiAgIGFuaW1hdGUoLi4uKVxyXG4gKiBdLCB7IG9wdGlvbmFsOiB0cnVlIH0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgVXNhZ2UgRXhhbXBsZVxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgcXVlcmllcyBmb3IgaW5uZXIgZWxlbWVudHMgYW5kIGFuaW1hdGVzIHRoZW1cclxuICogaW5kaXZpZHVhbGx5IHVzaW5nIGBhbmltYXRlKClgLlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgIHNlbGVjdG9yOiAnaW5uZXInLFxyXG4gKiAgIHRlbXBsYXRlOiBgXHJcbiAqICAgICA8ZGl2IFtAcXVlcnlBbmltYXRpb25dPVwiZXhwXCI+XHJcbiAqICAgICAgIDxoMT5UaXRsZTwvaDE+XHJcbiAqICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAqICAgICAgICAgQmxhaCBibGFoIGJsYWhcclxuICogICAgICAgPC9kaXY+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICBgLFxyXG4gKiAgIGFuaW1hdGlvbnM6IFtcclxuICogICAgdHJpZ2dlcigncXVlcnlBbmltYXRpb24nLCBbXHJcbiAqICAgICAgdHJhbnNpdGlvbignKiA9PiBnb0FuaW1hdGUnLCBbXHJcbiAqICAgICAgICAvLyBoaWRlIHRoZSBpbm5lciBlbGVtZW50c1xyXG4gKiAgICAgICAgcXVlcnkoJ2gxJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcclxuICogICAgICAgIHF1ZXJ5KCcuY29udGVudCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXHJcbiAqXHJcbiAqICAgICAgICAvLyBhbmltYXRlIHRoZSBpbm5lciBlbGVtZW50cyBpbiwgb25lIGJ5IG9uZVxyXG4gKiAgICAgICAgcXVlcnkoJ2gxJywgYW5pbWF0ZSgxMDAwLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpKSxcclxuICogICAgICAgIHF1ZXJ5KCcuY29udGVudCcsIGFuaW1hdGUoMTAwMCwgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKSksXHJcbiAqICAgICAgXSlcclxuICogICAgXSlcclxuICogIF1cclxuICogfSlcclxuICogY2xhc3MgQ21wIHtcclxuICogICBleHAgPSAnJztcclxuICpcclxuICogICBnb0FuaW1hdGUoKSB7XHJcbiAqICAgICB0aGlzLmV4cCA9ICdnb0FuaW1hdGUnO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3I6IHN0cmluZywgYW5pbWF0aW9uOiBBbmltYXRpb25NZXRhZGF0YSB8IEFuaW1hdGlvbk1ldGFkYXRhW10sIG9wdGlvbnM/OiBBbmltYXRpb25RdWVyeU9wdGlvbnMgfCBudWxsKTogQW5pbWF0aW9uUXVlcnlNZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgbGlzdCBvZiBhbmltYXRpb24gc3RlcHMgdG8gYmUgcnVuIHNlcXVlbnRpYWxseSwgb25lIGJ5IG9uZS5cclxuICpcclxuICogQHBhcmFtIHN0ZXBzIEFuIGFycmF5IG9mIGFuaW1hdGlvbiBzdGVwIG9iamVjdHMuXHJcbiAqIC0gU3RlcHMgZGVmaW5lZCBieSBgc3R5bGUoKWAgY2FsbHMgYXBwbHkgdGhlIHN0eWxpbmcgZGF0YSBpbW1lZGlhdGVseS5cclxuICogLSBTdGVwcyBkZWZpbmVkIGJ5IGBhbmltYXRlKClgIGNhbGxzIGFwcGx5IHRoZSBzdHlsaW5nIGRhdGEgb3ZlciB0aW1lXHJcbiAqICAgYXMgc3BlY2lmaWVkIGJ5IHRoZSB0aW1pbmcgZGF0YS5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBzZXF1ZW5jZShbXHJcbiAqICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG4gKiAgIGFuaW1hdGUoXCIxc1wiLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXHJcbiAqIF0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXHJcbiAqIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMgdGhhdCBwcm92aWRlIHN0eWxpbmcgZGVmYXVsdHMgYW5kXHJcbiAqIGNhbiBiZSBvdmVycmlkZGVuIG9uIGludm9jYXRpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4gQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBzZXF1ZW5jZSBkYXRhLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBXaGVuIHlvdSBwYXNzIGFuIGFycmF5IG9mIHN0ZXBzIHRvIGFcclxuICogYHRyYW5zaXRpb24oKWAgY2FsbCwgdGhlIHN0ZXBzIHJ1biBzZXF1ZW50aWFsbHkgYnkgZGVmYXVsdC5cclxuICogQ29tcGFyZSB0aGlzIHRvIHRoZSBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gIGNhbGwsIHdoaWNoIHJ1bnMgYW5pbWF0aW9uIHN0ZXBzIGluXHJcbiAqcGFyYWxsZWwuXHJcbiAqXHJcbiAqIFdoZW4gYSBzZXF1ZW5jZSBpcyB1c2VkIHdpdGhpbiBhIGB7QGxpbmsgYW5pbWF0aW9ucy9ncm91cCBncm91cCgpfWAgb3IgYSBgdHJhbnNpdGlvbigpYCBjYWxsLFxyXG4gKiBleGVjdXRpb24gY29udGludWVzIHRvIHRoZSBuZXh0IGluc3RydWN0aW9uIG9ubHkgYWZ0ZXIgZWFjaCBvZiB0aGUgaW5uZXIgYW5pbWF0aW9uXHJcbiAqIHN0ZXBzIGhhdmUgY29tcGxldGVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gc2VxdWVuY2Uoc3RlcHM6IEFuaW1hdGlvbk1ldGFkYXRhW10sIG9wdGlvbnM/OiBBbmltYXRpb25PcHRpb25zIHwgbnVsbCk6IEFuaW1hdGlvblNlcXVlbmNlTWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogVXNlIHdpdGhpbiBhbiBhbmltYXRpb24gYHF1ZXJ5KClgIGNhbGwgdG8gaXNzdWUgYSB0aW1pbmcgZ2FwIGFmdGVyXHJcbiAqIGVhY2ggcXVlcmllZCBpdGVtIGlzIGFuaW1hdGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gdGltaW5ncyBBIGRlbGF5IHZhbHVlLlxyXG4gKiBAcGFyYW0gYW5pbWF0aW9uIE9uZSBvcmUgbW9yZSBhbmltYXRpb24gc3RlcHMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgc3RhZ2dlciBkYXRhLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIGEgY29udGFpbmVyIGVsZW1lbnQgd3JhcHMgYSBsaXN0IG9mIGl0ZW1zIHN0YW1wZWQgb3V0XHJcbiAqIGJ5IGFuIGBuZ0ZvcmAuIFRoZSBjb250YWluZXIgZWxlbWVudCBjb250YWlucyBhbiBhbmltYXRpb24gdHJpZ2dlciB0aGF0IHdpbGwgbGF0ZXIgYmUgc2V0XHJcbiAqIHRvIHF1ZXJ5IGZvciBlYWNoIG9mIHRoZSBpbm5lciBpdGVtcy5cclxuICpcclxuICogRWFjaCB0aW1lIGl0ZW1zIGFyZSBhZGRlZCwgdGhlIG9wYWNpdHkgZmFkZS1pbiBhbmltYXRpb24gcnVucyxcclxuICogYW5kIGVhY2ggcmVtb3ZlZCBpdGVtIGlzIGZhZGVkIG91dC5cclxuICogV2hlbiBlaXRoZXIgb2YgdGhlc2UgYW5pbWF0aW9ucyBvY2N1ciwgdGhlIHN0YWdnZXIgZWZmZWN0IGlzXHJcbiAqIGFwcGxpZWQgYWZ0ZXIgZWFjaCBpdGVtJ3MgYW5pbWF0aW9uIGlzIHN0YXJ0ZWQuXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPCEtLSBsaXN0LmNvbXBvbmVudC5odG1sIC0tPlxyXG4gKiA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGUoKVwiPlNob3cgLyBIaWRlIEl0ZW1zPC9idXR0b24+XHJcbiAqIDxociAvPlxyXG4gKiA8ZGl2IFtAbGlzdEFuaW1hdGlvbl09XCJpdGVtcy5sZW5ndGhcIj5cclxuICogICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XHJcbiAqICAgICB7eyBpdGVtIH19XHJcbiAqICAgPC9kaXY+XHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogSGVyZSBpcyB0aGUgY29tcG9uZW50IGNvZGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHt0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgcXVlcnksIHN0YWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG4gKiBAQ29tcG9uZW50KHtcclxuICogICB0ZW1wbGF0ZVVybDogJ2xpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gKiAgIGFuaW1hdGlvbnM6IFtcclxuICogICAgIHRyaWdnZXIoJ2xpc3RBbmltYXRpb24nLCBbXHJcbiAqICAgICAuLi5cclxuICogICAgIF0pXHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuICogICBpdGVtcyA9IFtdO1xyXG4gKlxyXG4gKiAgIHNob3dJdGVtcygpIHtcclxuICogICAgIHRoaXMuaXRlbXMgPSBbMCwxLDIsMyw0XTtcclxuICogICB9XHJcbiAqXHJcbiAqICAgaGlkZUl0ZW1zKCkge1xyXG4gKiAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gKiAgIH1cclxuICpcclxuICogICB0b2dnbGUoKSB7XHJcbiAqICAgICB0aGlzLml0ZW1zLmxlbmd0aCA/IHRoaXMuaGlkZUl0ZW1zKCkgOiB0aGlzLnNob3dJdGVtcygpO1xyXG4gKiAgICB9XHJcbiAqICB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBIZXJlIGlzIHRoZSBhbmltYXRpb24gdHJpZ2dlciBjb2RlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHRyaWdnZXIoJ2xpc3RBbmltYXRpb24nLCBbXHJcbiAqICAgdHJhbnNpdGlvbignKiA9PiAqJywgWyAvLyBlYWNoIHRpbWUgdGhlIGJpbmRpbmcgdmFsdWUgY2hhbmdlc1xyXG4gKiAgICAgcXVlcnkoJzpsZWF2ZScsIFtcclxuICogICAgICAgc3RhZ2dlcigxMDAsIFtcclxuICogICAgICAgICBhbmltYXRlKCcwLjVzJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxyXG4gKiAgICAgICBdKVxyXG4gKiAgICAgXSksXHJcbiAqICAgICBxdWVyeSgnOmVudGVyJywgW1xyXG4gKiAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAqICAgICAgIHN0YWdnZXIoMTAwLCBbXHJcbiAqICAgICAgICAgYW5pbWF0ZSgnMC41cycsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcclxuICogICAgICAgXSlcclxuICogICAgIF0pXHJcbiAqICAgXSlcclxuICogXSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHN0YWdnZXIodGltaW5nczogc3RyaW5nIHwgbnVtYmVyLCBhbmltYXRpb246IEFuaW1hdGlvbk1ldGFkYXRhIHwgQW5pbWF0aW9uTWV0YWRhdGFbXSk6IEFuaW1hdGlvblN0YWdnZXJNZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBEZWNsYXJlcyBhbiBhbmltYXRpb24gc3RhdGUgd2l0aGluIGEgdHJpZ2dlciBhdHRhY2hlZCB0byBhbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSBPbmUgb3IgbW9yZSBuYW1lcyBmb3IgdGhlIGRlZmluZWQgc3RhdGUgaW4gYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxyXG4gKiBUaGUgZm9sbG93aW5nIHJlc2VydmVkIHN0YXRlIG5hbWVzIGNhbiBiZSBzdXBwbGllZCB0byBkZWZpbmUgYSBzdHlsZSBmb3Igc3BlY2lmaWMgdXNlXHJcbiAqIGNhc2VzOlxyXG4gKlxyXG4gKiAtIGB2b2lkYCBZb3UgY2FuIGFzc29jaWF0ZSBzdHlsZXMgd2l0aCB0aGlzIG5hbWUgdG8gYmUgdXNlZCB3aGVuXHJcbiAqIHRoZSBlbGVtZW50IGlzIGRldGFjaGVkIGZyb20gdGhlIGFwcGxpY2F0aW9uLiBGb3IgZXhhbXBsZSwgd2hlbiBhbiBgbmdJZmAgZXZhbHVhdGVzXHJcbiAqIHRvIGZhbHNlLCB0aGUgc3RhdGUgb2YgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBpcyB2b2lkLlxyXG4gKiAgLSBgKmAgKGFzdGVyaXNrKSBJbmRpY2F0ZXMgdGhlIGRlZmF1bHQgc3RhdGUuIFlvdSBjYW4gYXNzb2NpYXRlIHN0eWxlcyB3aXRoIHRoaXMgbmFtZVxyXG4gKiB0byBiZSB1c2VkIGFzIHRoZSBmYWxsYmFjayB3aGVuIHRoZSBzdGF0ZSB0aGF0IGlzIGJlaW5nIGFuaW1hdGVkIGlzIG5vdCBkZWNsYXJlZFxyXG4gKiB3aXRoaW4gdGhlIHRyaWdnZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHlsZXMgQSBzZXQgb2YgQ1NTIHN0eWxlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBzdGF0ZSwgY3JlYXRlZCB1c2luZyB0aGVcclxuICogYHN0eWxlKClgIGZ1bmN0aW9uLlxyXG4gKiBUaGlzIHNldCBvZiBzdHlsZXMgcGVyc2lzdHMgb24gdGhlIGVsZW1lbnQgb25jZSB0aGUgc3RhdGUgaGFzIGJlZW4gcmVhY2hlZC5cclxuICogQHBhcmFtIG9wdGlvbnMgUGFyYW1ldGVycyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIHN0YXRlIHdoZW4gaXQgaXMgaW52b2tlZC5cclxuICogMCBvciBtb3JlIGtleS12YWx1ZSBwYWlycy5cclxuICogQHJldHVybiBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIG5ldyBzdGF0ZSBkYXRhLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBVc2UgdGhlIGB0cmlnZ2VyKClgIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyIHN0YXRlcyB0byBhbiBhbmltYXRpb24gdHJpZ2dlci5cclxuICogVXNlIHRoZSBgdHJhbnNpdGlvbigpYCBmdW5jdGlvbiB0byBhbmltYXRlIGJldHdlZW4gc3RhdGVzLlxyXG4gKiBXaGVuIGEgc3RhdGUgaXMgYWN0aXZlIHdpdGhpbiBhIGNvbXBvbmVudCwgaXRzIGFzc29jaWF0ZWQgc3R5bGVzIHBlcnNpc3Qgb24gdGhlIGVsZW1lbnQsXHJcbiAqIGV2ZW4gd2hlbiB0aGUgYW5pbWF0aW9uIGVuZHMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICoqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBzdGF0ZShuYW1lOiBzdHJpbmcsIHN0eWxlczogQW5pbWF0aW9uU3R5bGVNZXRhZGF0YSwgb3B0aW9ucz86IHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG59KTogQW5pbWF0aW9uU3RhdGVNZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBEZWNsYXJlcyBhIGtleS92YWx1ZSBvYmplY3QgY29udGFpbmluZyBDU1MgcHJvcGVydGllcy9zdHlsZXMgdGhhdFxyXG4gKiBjYW4gdGhlbiBiZSB1c2VkIGZvciBhbiBhbmltYXRpb24gYHN0YXRlYCwgd2l0aGluIGFuIGFuaW1hdGlvbiBgc2VxdWVuY2VgLFxyXG4gKiBvciBhcyBzdHlsaW5nIGRhdGEgZm9yIGNhbGxzIHRvIGBhbmltYXRlKClgIGFuZCBga2V5ZnJhbWVzKClgLlxyXG4gKlxyXG4gKiBAcGFyYW0gdG9rZW5zIEEgc2V0IG9mIENTUyBzdHlsZXMgb3IgSFRNTCBzdHlsZXMgYXNzb2NpYXRlZCB3aXRoIGFuIGFuaW1hdGlvbiBzdGF0ZS5cclxuICogVGhlIHZhbHVlIGNhbiBiZSBhbnkgb2YgdGhlIGZvbGxvd2luZzpcclxuICogLSBBIGtleS12YWx1ZSBzdHlsZSBwYWlyIGFzc29jaWF0aW5nIGEgQ1NTIHByb3BlcnR5IHdpdGggYSB2YWx1ZS5cclxuICogLSBBbiBhcnJheSBvZiBrZXktdmFsdWUgc3R5bGUgcGFpcnMuXHJcbiAqIC0gQW4gYXN0ZXJpc2sgKCopLCB0byB1c2UgYXV0by1zdHlsaW5nLCB3aGVyZSBzdHlsZXMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgZWxlbWVudFxyXG4gKiBiZWluZyBhbmltYXRlZCBhbmQgYXBwbGllZCB0byB0aGUgYW5pbWF0aW9uIHdoZW4gaXQgc3RhcnRzLlxyXG4gKlxyXG4gKiBBdXRvLXN0eWxpbmcgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgc3RhdGUgdGhhdCBkZXBlbmRzIG9uIGxheW91dCBvciBvdGhlclxyXG4gKiBlbnZpcm9ubWVudGFsIGZhY3RvcnMuXHJcbiAqXHJcbiAqIEByZXR1cm4gQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBzdHlsZSBkYXRhLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGVzIGNyZWF0ZSBhbmltYXRpb24gc3R5bGVzIHRoYXQgY29sbGVjdCBhIHNldCBvZlxyXG4gKiBDU1MgcHJvcGVydHkgdmFsdWVzOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIC8vIHN0cmluZyB2YWx1ZXMgZm9yIENTUyBwcm9wZXJ0aWVzXHJcbiAqIHN0eWxlKHsgYmFja2dyb3VuZDogXCJyZWRcIiwgY29sb3I6IFwiYmx1ZVwiIH0pXHJcbiAqXHJcbiAqIC8vIG51bWVyaWNhbCBwaXhlbCB2YWx1ZXNcclxuICogc3R5bGUoeyB3aWR0aDogMTAwLCBoZWlnaHQ6IDAgfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSB1c2VzIGF1dG8tc3R5bGluZyB0byBhbGxvdyBhIGNvbXBvbmVudCB0byBhbmltYXRlIGZyb21cclxuICogYSBoZWlnaHQgb2YgMCB1cCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgZWxlbWVudDpcclxuICpcclxuICogYGBgXHJcbiAqIHN0eWxlKHsgaGVpZ2h0OiAwIH0pLFxyXG4gKiBhbmltYXRlKFwiMXNcIiwgc3R5bGUoeyBoZWlnaHQ6IFwiKlwiIH0pKVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKiovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHN0eWxlKHRva2VuczogJyonIHwge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG59IHwgQXJyYXk8JyonIHwge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG59Pik6IEFuaW1hdGlvblN0eWxlTWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogRGVjbGFyZXMgYW4gYW5pbWF0aW9uIHRyYW5zaXRpb24gYXMgYSBzZXF1ZW5jZSBvZiBhbmltYXRpb24gc3RlcHMgdG8gcnVuIHdoZW4gYSBnaXZlblxyXG4gKiBjb25kaXRpb24gaXMgc2F0aXNmaWVkLiBUaGUgY29uZGl0aW9uIGlzIGEgQm9vbGVhbiBleHByZXNzaW9uIG9yIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXNcclxuICogdGhlIHByZXZpb3VzIGFuZCBjdXJyZW50IGFuaW1hdGlvbiBzdGF0ZXMsIGFuZCByZXR1cm5zIHRydWUgaWYgdGhpcyB0cmFuc2l0aW9uIHNob3VsZCBvY2N1ci5cclxuICogV2hlbiB0aGUgc3RhdGUgY3JpdGVyaWEgb2YgYSBkZWZpbmVkIHRyYW5zaXRpb24gYXJlIG1ldCwgdGhlIGFzc29jaWF0ZWQgYW5pbWF0aW9uIGlzXHJcbiAqIHRyaWdnZXJlZC5cclxuICpcclxuICogQHBhcmFtIHN0YXRlQ2hhbmdlRXhwciBBIEJvb2xlYW4gZXhwcmVzc2lvbiBvciBmdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudFxyXG4gKiBhbmltYXRpb24gc3RhdGVzLCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoaXMgdHJhbnNpdGlvbiBzaG91bGQgb2NjdXIuIE5vdGUgdGhhdCAgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIlxyXG4gKiBtYXRjaCAxIGFuZCAwLCByZXNwZWN0aXZlbHkuIEFuIGV4cHJlc3Npb24gaXMgZXZhbHVhdGVkIGVhY2ggdGltZSBhIHN0YXRlIGNoYW5nZSBvY2N1cnMgaW4gdGhlXHJcbiAqIGFuaW1hdGlvbiB0cmlnZ2VyIGVsZW1lbnQuXHJcbiAqIFRoZSBhbmltYXRpb24gc3RlcHMgcnVuIHdoZW4gdGhlIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRydWUuXHJcbiAqXHJcbiAqIC0gQSBzdGF0ZS1jaGFuZ2Ugc3RyaW5nIHRha2VzIHRoZSBmb3JtIFwic3RhdGUxID0+IHN0YXRlMlwiLCB3aGVyZSBlYWNoIHNpZGUgaXMgYSBkZWZpbmVkIGFuaW1hdGlvblxyXG4gKiBzdGF0ZSwgb3IgYW4gYXN0ZXJpeCAoKikgdG8gcmVmZXIgdG8gYSBkeW5hbWljIHN0YXJ0IG9yIGVuZCBzdGF0ZS5cclxuICogICAtIFRoZSBleHByZXNzaW9uIHN0cmluZyBjYW4gY29udGFpbiBtdWx0aXBsZSBjb21tYS1zZXBhcmF0ZWQgc3RhdGVtZW50cztcclxuICogZm9yIGV4YW1wbGUgXCJzdGF0ZTEgPT4gc3RhdGUyLCBzdGF0ZTMgPT4gc3RhdGU0XCIuXHJcbiAqICAgLSBTcGVjaWFsIHZhbHVlcyBgOmVudGVyYCBhbmQgYDpsZWF2ZWAgaW5pdGlhdGUgYSB0cmFuc2l0aW9uIG9uIHRoZSBlbnRyeSBhbmQgZXhpdCBzdGF0ZXMsXHJcbiAqIGVxdWl2YWxlbnQgdG8gIFwidm9pZCA9PiAqXCIgIGFuZCBcIiogPT4gdm9pZFwiLlxyXG4gKiAgIC0gU3BlY2lhbCB2YWx1ZXMgYDppbmNyZW1lbnRgIGFuZCBgOmRlY3JlbWVudGAgaW5pdGlhdGUgYSB0cmFuc2l0aW9uIHdoZW4gYSBudW1lcmljIHZhbHVlIGhhc1xyXG4gKiBpbmNyZWFzZWQgb3IgZGVjcmVhc2VkIGluIHZhbHVlLlxyXG4gKiAtIEEgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgZWFjaCB0aW1lIGEgc3RhdGUgY2hhbmdlIG9jY3VycyBpbiB0aGUgYW5pbWF0aW9uIHRyaWdnZXIgZWxlbWVudC5cclxuICogVGhlIGFuaW1hdGlvbiBzdGVwcyBydW4gd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyB0cnVlLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RlcHMgT25lIG9yIG1vcmUgYW5pbWF0aW9uIG9iamVjdHMsIGFzIHJldHVybmVkIGJ5IHRoZSBgYW5pbWF0ZSgpYCBvclxyXG4gKiBgc2VxdWVuY2UoKWAgZnVuY3Rpb24sIHRoYXQgZm9ybSBhIHRyYW5zZm9ybWF0aW9uIGZyb20gb25lIHN0YXRlIHRvIGFub3RoZXIuXHJcbiAqIEEgc2VxdWVuY2UgaXMgdXNlZCBieSBkZWZhdWx0IHdoZW4geW91IHBhc3MgYW4gYXJyYXkuXHJcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9wdGlvbnMgb2JqZWN0IHRoYXQgY2FuIGNvbnRhaW4gYSBkZWxheSB2YWx1ZSBmb3IgdGhlIHN0YXJ0IG9mIHRoZSBhbmltYXRpb24sXHJcbiAqIGFuZCBhZGRpdGlvbmFsIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMuIFByb3ZpZGVkIHZhbHVlcyBmb3IgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGFyZSB1c2VkXHJcbiAqIGFzIGRlZmF1bHRzLCBhbmQgb3ZlcnJpZGUgdmFsdWVzIGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNhbGxlciBvbiBpbnZvY2F0aW9uLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHRyYW5zaXRpb24gZGF0YS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIHRlbXBsYXRlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbXBvbmVudCBiaW5kcyBhbiBhbmltYXRpb24gdHJpZ2dlciB0byBhbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBgYGBIVE1MXHJcbiAqIDwhLS0gc29tZXdoZXJlIGluc2lkZSBvZiBteS1jb21wb25lbnQtdHBsLmh0bWwgLS0+XHJcbiAqIDxkaXYgW0BteUFuaW1hdGlvblRyaWdnZXJdPVwibXlTdGF0dXNFeHBcIj4uLi48L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEFsbCB0cmFuc2l0aW9ucyBhcmUgZGVmaW5lZCB3aXRoaW4gYW4gYW5pbWF0aW9uIHRyaWdnZXIsXHJcbiAqIGFsb25nIHdpdGggbmFtZWQgc3RhdGVzIHRoYXQgdGhlIHRyYW5zaXRpb25zIGNoYW5nZSB0byBhbmQgZnJvbS5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0cmlnZ2VyKFwibXlBbmltYXRpb25UcmlnZ2VyXCIsIFtcclxuICogIC8vIGRlZmluZSBzdGF0ZXNcclxuICogIHN0YXRlKFwib25cIiwgc3R5bGUoeyBiYWNrZ3JvdW5kOiBcImdyZWVuXCIgfSkpLFxyXG4gKiAgc3RhdGUoXCJvZmZcIiwgc3R5bGUoeyBiYWNrZ3JvdW5kOiBcImdyZXlcIiB9KSksXHJcbiAqICAuLi5dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgd2hlbiB5b3UgY2FsbCB0aGUgYHNlcXVlbmNlKClgIGZ1bmN0aW9uIHdpdGhpbiBhIGB7QGxpbmsgYW5pbWF0aW9ucy9ncm91cCBncm91cCgpfWBcclxuICogb3IgYSBgdHJhbnNpdGlvbigpYCBjYWxsLCBleGVjdXRpb24gZG9lcyBub3QgY29udGludWUgdG8gdGhlIG5leHQgaW5zdHJ1Y3Rpb25cclxuICogdW50aWwgZWFjaCBvZiB0aGUgaW5uZXIgYW5pbWF0aW9uIHN0ZXBzIGhhdmUgY29tcGxldGVkLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4IGV4YW1wbGVzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZXMgZGVmaW5lIHRyYW5zaXRpb25zIGJldHdlZW4gdGhlIHR3byBkZWZpbmVkIHN0YXRlcyAoYW5kIGRlZmF1bHQgc3RhdGVzKSxcclxuICogdXNpbmcgdmFyaW91cyBvcHRpb25zOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIC8vIFRyYW5zaXRpb24gb2NjdXJzIHdoZW4gdGhlIHN0YXRlIHZhbHVlXHJcbiAqIC8vIGJvdW5kIHRvIFwibXlBbmltYXRpb25UcmlnZ2VyXCIgY2hhbmdlcyBmcm9tIFwib25cIiB0byBcIm9mZlwiXHJcbiAqIHRyYW5zaXRpb24oXCJvbiA9PiBvZmZcIiwgYW5pbWF0ZSg1MDApKVxyXG4gKiAvLyBSdW4gdGhlIHNhbWUgYW5pbWF0aW9uIGZvciBib3RoIGRpcmVjdGlvbnNcclxuICogdHJhbnNpdGlvbihcIm9uIDw9PiBvZmZcIiwgYW5pbWF0ZSg1MDApKVxyXG4gKiAvLyBEZWZpbmUgbXVsdGlwbGUgc3RhdGUtY2hhbmdlIHBhaXJzIHNlcGFyYXRlZCBieSBjb21tYXNcclxuICogdHJhbnNpdGlvbihcIm9uID0+IG9mZiwgb2ZmID0+IHZvaWRcIiwgYW5pbWF0ZSg1MDApKVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFNwZWNpYWwgdmFsdWVzIGZvciBzdGF0ZS1jaGFuZ2UgZXhwcmVzc2lvbnNcclxuICpcclxuICogLSBDYXRjaC1hbGwgc3RhdGUgY2hhbmdlIGZvciB3aGVuIGFuIGVsZW1lbnQgaXMgaW5zZXJ0ZWQgaW50byB0aGUgcGFnZSBhbmQgdGhlXHJcbiAqIGRlc3RpbmF0aW9uIHN0YXRlIGlzIHVua25vd246XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHJhbnNpdGlvbihcInZvaWQgPT4gKlwiLCBbXHJcbiAqICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAqICBhbmltYXRlKDUwMClcclxuICogIF0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAtIENhcHR1cmUgYSBzdGF0ZSBjaGFuZ2UgYmV0d2VlbiBhbnkgc3RhdGVzOlxyXG4gKlxyXG4gKiAgYHRyYW5zaXRpb24oXCIqID0+ICpcIiwgYW5pbWF0ZShcIjFzIDBzXCIpKWBcclxuICpcclxuICogLSBFbnRyeSBhbmQgZXhpdCB0cmFuc2l0aW9uczpcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0cmFuc2l0aW9uKFwiOmVudGVyXCIsIFtcclxuICogICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAqICAgYW5pbWF0ZSg1MDAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcclxuICogICBdKSxcclxuICogdHJhbnNpdGlvbihcIjpsZWF2ZVwiLCBbXHJcbiAqICAgYW5pbWF0ZSg1MDAsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcclxuICogICBdKVxyXG4gKiBgYGBcclxuICpcclxuICogLSBVc2UgYDppbmNyZW1lbnRgIGFuZCBgOmRlY3JlbWVudGAgdG8gaW5pdGlhdGUgdHJhbnNpdGlvbnM6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHJhbnNpdGlvbihcIjppbmNyZW1lbnRcIiwgZ3JvdXAoW1xyXG4gKiAgcXVlcnkoJzplbnRlcicsIFtcclxuICogICAgIHN0eWxlKHsgbGVmdDogJzEwMCUnIH0pLFxyXG4gKiAgICAgYW5pbWF0ZSgnMC41cyBlYXNlLW91dCcsIHN0eWxlKCcqJykpXHJcbiAqICAgXSksXHJcbiAqICBxdWVyeSgnOmxlYXZlJywgW1xyXG4gKiAgICAgYW5pbWF0ZSgnMC41cyBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJy0xMDAlJyB9KSlcclxuICogIF0pXHJcbiAqIF0pKVxyXG4gKlxyXG4gKiB0cmFuc2l0aW9uKFwiOmRlY3JlbWVudFwiLCBncm91cChbXHJcbiAqICBxdWVyeSgnOmVudGVyJywgW1xyXG4gKiAgICAgc3R5bGUoeyBsZWZ0OiAnMTAwJScgfSksXHJcbiAqICAgICBhbmltYXRlKCcwLjVzIGVhc2Utb3V0Jywgc3R5bGUoJyonKSlcclxuICogICBdKSxcclxuICogIHF1ZXJ5KCc6bGVhdmUnLCBbXHJcbiAqICAgICBhbmltYXRlKCcwLjVzIGVhc2Utb3V0Jywgc3R5bGUoeyBsZWZ0OiAnLTEwMCUnIH0pKVxyXG4gKiAgXSlcclxuICogXSkpXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgU3RhdGUtY2hhbmdlIGZ1bmN0aW9uc1xyXG4gKlxyXG4gKiBIZXJlIGlzIGFuIGV4YW1wbGUgb2YgYSBgZnJvbVN0YXRlYCBzcGVjaWZpZWQgYXMgYSBzdGF0ZS1jaGFuZ2UgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGFuXHJcbiAqIGFuaW1hdGlvbiB3aGVuIHRydWU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHJhbnNpdGlvbigoZnJvbVN0YXRlLCB0b1N0YXRlKSA9PlxyXG4gKiAge1xyXG4gKiAgIHJldHVybiBmcm9tU3RhdGUgPT0gXCJvZmZcIiAmJiB0b1N0YXRlID09IFwib25cIjtcclxuICogIH0sXHJcbiAqICBhbmltYXRlKFwiMXMgMHNcIikpXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgQW5pbWF0aW5nIHRvIHRoZSBmaW5hbCBzdGF0ZVxyXG4gKlxyXG4gKiBJZiB0aGUgZmluYWwgc3RlcCBpbiBhIHRyYW5zaXRpb24gaXMgYSBjYWxsIHRvIGBhbmltYXRlKClgIHRoYXQgdXNlcyBhIHRpbWluZyB2YWx1ZVxyXG4gKiB3aXRoIG5vIHN0eWxlIGRhdGEsIHRoYXQgc3RlcCBpcyBhdXRvbWF0aWNhbGx5IGNvbnNpZGVyZWQgdGhlIGZpbmFsIGFuaW1hdGlvbiBhcmMsXHJcbiAqIGZvciB0aGUgZWxlbWVudCB0byByZWFjaCB0aGUgZmluYWwgc3RhdGUuIEFuZ3VsYXIgYXV0b21hdGljYWxseSBhZGRzIG9yIHJlbW92ZXNcclxuICogQ1NTIHN0eWxlcyB0byBlbnN1cmUgdGhhdCB0aGUgZWxlbWVudCBpcyBpbiB0aGUgY29ycmVjdCBmaW5hbCBzdGF0ZS5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGRlZmluZXMgYSB0cmFuc2l0aW9uIHRoYXQgc3RhcnRzIGJ5IGhpZGluZyB0aGUgZWxlbWVudCxcclxuICogdGhlbiBtYWtlcyBzdXJlIHRoYXQgaXQgYW5pbWF0ZXMgcHJvcGVybHkgdG8gd2hhdGV2ZXIgc3RhdGUgaXMgY3VycmVudGx5IGFjdGl2ZSBmb3IgdHJpZ2dlcjpcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0cmFuc2l0aW9uKFwidm9pZCA9PiAqXCIsIFtcclxuICogICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAqICAgYW5pbWF0ZSg1MDApXHJcbiAqICBdKVxyXG4gKiBgYGBcclxuICogIyMjIEJvb2xlYW4gdmFsdWUgbWF0Y2hpbmdcclxuICogSWYgYSB0cmlnZ2VyIGJpbmRpbmcgdmFsdWUgaXMgYSBCb29sZWFuLCBpdCBjYW4gYmUgbWF0Y2hlZCB1c2luZyBhIHRyYW5zaXRpb24gZXhwcmVzc2lvblxyXG4gKiB0aGF0IGNvbXBhcmVzIHRydWUgYW5kIGZhbHNlIG9yIDEgYW5kIDAuIEZvciBleGFtcGxlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogLy8gaW4gdGhlIHRlbXBsYXRlXHJcbiAqIDxkaXYgW0BvcGVuQ2xvc2VdPVwib3BlbiA/IHRydWUgOiBmYWxzZVwiPi4uLjwvZGl2PlxyXG4gKiAvLyBpbiB0aGUgY29tcG9uZW50IG1ldGFkYXRhXHJcbiAqIHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcclxuICogICBzdGF0ZSgndHJ1ZScsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxyXG4gKiAgIHN0YXRlKCdmYWxzZScsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSksXHJcbiAqICAgdHJhbnNpdGlvbignZmFsc2UgPD0+IHRydWUnLCBhbmltYXRlKDUwMCkpXHJcbiAqIF0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gdHJhbnNpdGlvbihzdGF0ZUNoYW5nZUV4cHI6IHN0cmluZyB8ICgoZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU6IHN0cmluZywgZWxlbWVudD86IGFueSwgcGFyYW1zPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59KSA9PiBib29sZWFuKSwgc3RlcHM6IEFuaW1hdGlvbk1ldGFkYXRhIHwgQW5pbWF0aW9uTWV0YWRhdGFbXSwgb3B0aW9ucz86IEFuaW1hdGlvbk9wdGlvbnMgfCBudWxsKTogQW5pbWF0aW9uVHJhbnNpdGlvbk1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuYW1lZCBhbmltYXRpb24gdHJpZ2dlciwgY29udGFpbmluZyBhICBsaXN0IG9mIGBzdGF0ZSgpYFxyXG4gKiBhbmQgYHRyYW5zaXRpb24oKWAgZW50cmllcyB0byBiZSBldmFsdWF0ZWQgd2hlbiB0aGUgZXhwcmVzc2lvblxyXG4gKiBib3VuZCB0byB0aGUgdHJpZ2dlciBjaGFuZ2VzLlxyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSBBbiBpZGVudGlmeWluZyBzdHJpbmcuXHJcbiAqIEBwYXJhbSBkZWZpbml0aW9ucyAgQW4gYW5pbWF0aW9uIGRlZmluaXRpb24gb2JqZWN0LCBjb250YWluaW5nIGFuIGFycmF5IG9mIGBzdGF0ZSgpYFxyXG4gKiBhbmQgYHRyYW5zaXRpb24oKWAgZGVjbGFyYXRpb25zLlxyXG4gKlxyXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgdHJpZ2dlciBkYXRhLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBEZWZpbmUgYW4gYW5pbWF0aW9uIHRyaWdnZXIgaW4gdGhlIGBhbmltYXRpb25zYCBzZWN0aW9uIG9mIGBAQ29tcG9uZW50YCBtZXRhZGF0YS5cclxuICogSW4gdGhlIHRlbXBsYXRlLCByZWZlcmVuY2UgdGhlIHRyaWdnZXIgYnkgbmFtZSBhbmQgYmluZCBpdCB0byBhIHRyaWdnZXIgZXhwcmVzc2lvbiB0aGF0XHJcbiAqIGV2YWx1YXRlcyB0byBhIGRlZmluZWQgYW5pbWF0aW9uIHN0YXRlLCB1c2luZyB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuICpcclxuICogYFtAdHJpZ2dlck5hbWVdPVwiZXhwcmVzc2lvblwiYFxyXG4gKlxyXG4gKiBBbmltYXRpb24gdHJpZ2dlciBiaW5kaW5ncyBjb252ZXJ0IGFsbCB2YWx1ZXMgdG8gc3RyaW5ncywgYW5kIHRoZW4gbWF0Y2ggdGhlXHJcbiAqIHByZXZpb3VzIGFuZCBjdXJyZW50IHZhbHVlcyBhZ2FpbnN0IGFueSBsaW5rZWQgdHJhbnNpdGlvbnMuXHJcbiAqIEJvb2xlYW5zIGNhbiBiZSBzcGVjaWZpZWQgYXMgYDFgIG9yIGB0cnVlYCBhbmQgYDBgIG9yIGBmYWxzZWAuXHJcbiAqXHJcbiAqICMjIyBVc2FnZSBFeGFtcGxlXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBjcmVhdGVzIGFuIGFuaW1hdGlvbiB0cmlnZ2VyIHJlZmVyZW5jZSBiYXNlZCBvbiB0aGUgcHJvdmlkZWRcclxuICogbmFtZSB2YWx1ZS5cclxuICogVGhlIHByb3ZpZGVkIGFuaW1hdGlvbiB2YWx1ZSBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHN0YXRlIGFuZFxyXG4gKiB0cmFuc2l0aW9uIGRlY2xhcmF0aW9ucy5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogICBzZWxlY3RvcjogXCJteS1jb21wb25lbnRcIixcclxuICogICB0ZW1wbGF0ZVVybDogXCJteS1jb21wb25lbnQtdHBsLmh0bWxcIixcclxuICogICBhbmltYXRpb25zOiBbXHJcbiAqICAgICB0cmlnZ2VyKFwibXlBbmltYXRpb25UcmlnZ2VyXCIsIFtcclxuICogICAgICAgc3RhdGUoLi4uKSxcclxuICogICAgICAgc3RhdGUoLi4uKSxcclxuICogICAgICAgdHJhbnNpdGlvbiguLi4pLFxyXG4gKiAgICAgICB0cmFuc2l0aW9uKC4uLilcclxuICogICAgIF0pXHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgbXlTdGF0dXNFeHAgPSBcInNvbWV0aGluZ1wiO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgdGVtcGxhdGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29tcG9uZW50IG1ha2VzIHVzZSBvZiB0aGUgZGVmaW5lZCB0cmlnZ2VyXHJcbiAqIGJ5IGJpbmRpbmcgdG8gYW4gZWxlbWVudCB3aXRoaW4gaXRzIHRlbXBsYXRlIGNvZGUuXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPCEtLSBzb21ld2hlcmUgaW5zaWRlIG9mIG15LWNvbXBvbmVudC10cGwuaHRtbCAtLT5cclxuICogPGRpdiBbQG15QW5pbWF0aW9uVHJpZ2dlcl09XCJteVN0YXR1c0V4cFwiPi4uLjwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFVzaW5nIGFuIGlubGluZSBmdW5jdGlvblxyXG4gKiBUaGUgYHRyYW5zaXRpb25gIGFuaW1hdGlvbiBtZXRob2QgYWxzbyBzdXBwb3J0cyByZWFkaW5nIGFuIGlubGluZSBmdW5jdGlvbiB3aGljaCBjYW4gZGVjaWRlXHJcbiAqIGlmIGl0cyBhc3NvY2lhdGVkIGFuaW1hdGlvbiBzaG91bGQgYmUgcnVuLlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIC8vIHRoaXMgbWV0aG9kIGlzIHJ1biBlYWNoIHRpbWUgdGhlIGBteUFuaW1hdGlvblRyaWdnZXJgIHRyaWdnZXIgdmFsdWUgY2hhbmdlcy5cclxuICogZnVuY3Rpb24gbXlJbmxpbmVNYXRjaGVyRm4oZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU6IHN0cmluZywgZWxlbWVudDogYW55LCBwYXJhbXM6IHtba2V5OlxyXG4gc3RyaW5nXTogYW55fSk6IGJvb2xlYW4ge1xyXG4gKiAgIC8vIG5vdGljZSB0aGF0IGBlbGVtZW50YCBhbmQgYHBhcmFtc2AgYXJlIGFsc28gYXZhaWxhYmxlIGhlcmVcclxuICogICByZXR1cm4gdG9TdGF0ZSA9PSAneWVzLXBsZWFzZS1hbmltYXRlJztcclxuICogfVxyXG4gKlxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogICBzZWxlY3RvcjogJ215LWNvbXBvbmVudCcsXHJcbiAqICAgdGVtcGxhdGVVcmw6ICdteS1jb21wb25lbnQtdHBsLmh0bWwnLFxyXG4gKiAgIGFuaW1hdGlvbnM6IFtcclxuICogICAgIHRyaWdnZXIoJ215QW5pbWF0aW9uVHJpZ2dlcicsIFtcclxuICogICAgICAgdHJhbnNpdGlvbihteUlubGluZU1hdGNoZXJGbiwgW1xyXG4gKiAgICAgICAgIC8vIHRoZSBhbmltYXRpb24gc2VxdWVuY2UgY29kZVxyXG4gKiAgICAgICBdKSxcclxuICogICAgIF0pXHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgbXlTdGF0dXNFeHAgPSBcInllcy1wbGVhc2UtYW5pbWF0ZVwiO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRGlzYWJsaW5nIEFuaW1hdGlvbnNcclxuICogV2hlbiB0cnVlLCB0aGUgc3BlY2lhbCBhbmltYXRpb24gY29udHJvbCBiaW5kaW5nIGBALmRpc2FibGVkYCBiaW5kaW5nIHByZXZlbnRzXHJcbiAqIGFsbCBhbmltYXRpb25zIGZyb20gcmVuZGVyaW5nLlxyXG4gKiBQbGFjZSB0aGUgIGBALmRpc2FibGVkYCBiaW5kaW5nIG9uIGFuIGVsZW1lbnQgdG8gZGlzYWJsZVxyXG4gKiBhbmltYXRpb25zIG9uIHRoZSBlbGVtZW50IGl0c2VsZiwgYXMgd2VsbCBhcyBhbnkgaW5uZXIgYW5pbWF0aW9uIHRyaWdnZXJzXHJcbiAqIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIGhvdyB0byB1c2UgdGhpcyBmZWF0dXJlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcclxuICogICB0ZW1wbGF0ZTogYFxyXG4gKiAgICAgPGRpdiBbQC5kaXNhYmxlZF09XCJpc0Rpc2FibGVkXCI+XHJcbiAqICAgICAgIDxkaXYgW0BjaGlsZEFuaW1hdGlvbl09XCJleHBcIj48L2Rpdj5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgIGAsXHJcbiAqICAgYW5pbWF0aW9uczogW1xyXG4gKiAgICAgdHJpZ2dlcihcImNoaWxkQW5pbWF0aW9uXCIsIFtcclxuICogICAgICAgLy8gLi4uXHJcbiAqICAgICBdKVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgTXlDb21wb25lbnQge1xyXG4gKiAgIGlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gKiAgIGV4cCA9ICcuLi4nO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaGVuIGBALmRpc2FibGVkYCBpcyB0cnVlLCBpdCBwcmV2ZW50cyB0aGUgYEBjaGlsZEFuaW1hdGlvbmAgdHJpZ2dlciBmcm9tIGFuaW1hdGluZyxcclxuICogYWxvbmcgd2l0aCBhbnkgaW5uZXIgYW5pbWF0aW9ucy5cclxuICpcclxuICogIyMjIERpc2FibGUgYW5pbWF0aW9ucyBhcHBsaWNhdGlvbi13aWRlXHJcbiAqIFdoZW4gYW4gYXJlYSBvZiB0aGUgdGVtcGxhdGUgaXMgc2V0IHRvIGhhdmUgYW5pbWF0aW9ucyBkaXNhYmxlZCxcclxuICogKiphbGwqKiBpbm5lciBjb21wb25lbnRzIGhhdmUgdGhlaXIgYW5pbWF0aW9ucyBkaXNhYmxlZCBhcyB3ZWxsLlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgeW91IGNhbiBkaXNhYmxlIGFsbCBhbmltYXRpb25zIGZvciBhbiBhcHBcclxuICogYnkgcGxhY2luZyBhIGhvc3QgYmluZGluZyBzZXQgb24gYEAuZGlzYWJsZWRgIG9uIHRoZSB0b3Btb3N0IEFuZ3VsYXIgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgIHNlbGVjdG9yOiAnYXBwLWNvbXBvbmVudCcsXHJcbiAqICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gKiAgIEBIb3N0QmluZGluZygnQC5kaXNhYmxlZCcpXHJcbiAqICAgcHVibGljIGFuaW1hdGlvbnNEaXNhYmxlZCA9IHRydWU7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBPdmVycmlkaW5nIGRpc2FibGVtZW50IG9mIGlubmVyIGFuaW1hdGlvbnNcclxuICogRGVzcGl0ZSBpbm5lciBhbmltYXRpb25zIGJlaW5nIGRpc2FibGVkLCBhIHBhcmVudCBhbmltYXRpb24gY2FuIGBxdWVyeSgpYFxyXG4gKiBmb3IgaW5uZXIgZWxlbWVudHMgbG9jYXRlZCBpbiBkaXNhYmxlZCBhcmVhcyBvZiB0aGUgdGVtcGxhdGUgYW5kIHN0aWxsIGFuaW1hdGVcclxuICogdGhlbSBpZiBuZWVkZWQuIFRoaXMgaXMgYWxzbyB0aGUgY2FzZSBmb3Igd2hlbiBhIHN1YiBhbmltYXRpb24gaXNcclxuICogcXVlcmllZCBieSBhIHBhcmVudCBhbmQgdGhlbiBsYXRlciBhbmltYXRlZCB1c2luZyBgYW5pbWF0ZUNoaWxkKClgLlxyXG4gKlxyXG4gKiAjIyMgRGV0ZWN0aW5nIHdoZW4gYW4gYW5pbWF0aW9uIGlzIGRpc2FibGVkXHJcbiAqIElmIGEgcmVnaW9uIG9mIHRoZSBET00gKG9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24pIGhhcyBpdHMgYW5pbWF0aW9ucyBkaXNhYmxlZCwgdGhlIGFuaW1hdGlvblxyXG4gKiB0cmlnZ2VyIGNhbGxiYWNrcyBzdGlsbCBmaXJlLCBidXQgZm9yIHplcm8gc2Vjb25kcy4gV2hlbiB0aGUgY2FsbGJhY2sgZmlyZXMsIGl0IHByb3ZpZGVzXHJcbiAqIGFuIGluc3RhbmNlIG9mIGFuIGBBbmltYXRpb25FdmVudGAuIElmIGFuaW1hdGlvbnMgYXJlIGRpc2FibGVkLFxyXG4gKiB0aGUgYC5kaXNhYmxlZGAgZmxhZyBvbiB0aGUgZXZlbnQgaXMgdHJ1ZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gdHJpZ2dlcihuYW1lOiBzdHJpbmcsIGRlZmluaXRpb25zOiBBbmltYXRpb25NZXRhZGF0YVtdKTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIFN0YXJ0cyBhIHJldXNhYmxlIGFuaW1hdGlvbiB0aGF0IGlzIGNyZWF0ZWQgdXNpbmcgdGhlIGBhbmltYXRpb24oKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBhbmltYXRpb24gVGhlIHJldXNhYmxlIGFuaW1hdGlvbiB0byBzdGFydC5cclxuICogQHBhcmFtIG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QgdGhhdCBjYW4gY29udGFpbiBhIGRlbGF5IHZhbHVlIGZvciB0aGUgc3RhcnQgb2ZcclxuICogdGhlIGFuaW1hdGlvbiwgYW5kIGFkZGl0aW9uYWwgb3ZlcnJpZGUgdmFsdWVzIGZvciBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzLlxyXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBhbmltYXRpb24gcGFyYW1ldGVycy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gdXNlQW5pbWF0aW9uKGFuaW1hdGlvbjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsIG9wdGlvbnM/OiBBbmltYXRpb25PcHRpb25zIHwgbnVsbCk6IEFuaW1hdGlvbkFuaW1hdGVSZWZNZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBIHByb2dyYW1tYXRpYyBjb250cm9sbGVyIGZvciBhIGdyb3VwIG9mIHJldXNhYmxlIGFuaW1hdGlvbnMuXHJcbiAqIFVzZWQgaW50ZXJuYWxseSB0byBjb250cm9sIGFuaW1hdGlvbnMuXHJcbiAqXHJcbiAqIEBzZWUgYEFuaW1hdGlvblBsYXllcmBcclxuICogQHNlZSBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUFuaW1hdGlvbkdyb3VwUGxheWVyIGltcGxlbWVudHMgQW5pbWF0aW9uUGxheWVyIHtcclxuICAgIHByaXZhdGUgX29uRG9uZUZucztcclxuICAgIHByaXZhdGUgX29uU3RhcnRGbnM7XHJcbiAgICBwcml2YXRlIF9maW5pc2hlZDtcclxuICAgIHByaXZhdGUgX3N0YXJ0ZWQ7XHJcbiAgICBwcml2YXRlIF9kZXN0cm95ZWQ7XHJcbiAgICBwcml2YXRlIF9vbkRlc3Ryb3lGbnM7XHJcbiAgICBwYXJlbnRQbGF5ZXI6IEFuaW1hdGlvblBsYXllciB8IG51bGw7XHJcbiAgICB0b3RhbFRpbWU6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBsYXllcnM6IEFuaW1hdGlvblBsYXllcltdO1xyXG4gICAgY29uc3RydWN0b3IoX3BsYXllcnM6IEFuaW1hdGlvblBsYXllcltdKTtcclxuICAgIHByaXZhdGUgX29uRmluaXNoO1xyXG4gICAgaW5pdCgpOiB2b2lkO1xyXG4gICAgb25TdGFydChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9vblN0YXJ0O1xyXG4gICAgb25Eb25lKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIG9uRGVzdHJveShmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBoYXNTdGFydGVkKCk6IGJvb2xlYW47XHJcbiAgICBwbGF5KCk6IHZvaWQ7XHJcbiAgICBwYXVzZSgpOiB2b2lkO1xyXG4gICAgcmVzdGFydCgpOiB2b2lkO1xyXG4gICAgZmluaXNoKCk6IHZvaWQ7XHJcbiAgICBkZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9vbkRlc3Ryb3k7XHJcbiAgICByZXNldCgpOiB2b2lkO1xyXG4gICAgc2V0UG9zaXRpb24ocDogbnVtYmVyKTogdm9pZDtcclxuICAgIGdldFBvc2l0aW9uKCk6IG51bWJlcjtcclxuICAgIGJlZm9yZURlc3Ryb3koKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVQUkVfU1RZTEUgPSBcIiFcIjtcclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHNldCBvZiBDU1Mgc3R5bGVzIGZvciB1c2UgaW4gYW4gYW5pbWF0aW9uIHN0eWxlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIMm1U3R5bGVEYXRhIHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=