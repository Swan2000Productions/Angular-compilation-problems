/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ChangeDetectorRef } from '@angular/core';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { IterableDiffers } from '@angular/core';
import { KeyValueDiffers } from '@angular/core';
import { NgIterable } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { TrackByFunction } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

/**
 * A predefined [DI token](guide/glossary#di-token) for the base href
 * to be used with the `PathLocationStrategy`.
 * The base href is the URL prefix that should be preserved when generating
 * and recognizing URLs.
 *
 * @usageNotes
 *
 * The following example shows how to use this token to configure the root app injector
 * with a base href value, so that the DI framework can supply the dependency anywhere in the app.
 *
 * ```typescript
 * import {Component, NgModule} from '@angular/core';
 * import {APP_BASE_HREF} from '@angular/common';
 *
 * @NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare const APP_BASE_HREF: InjectionToken<string>;

/**
 * @ngModule CommonModule
 * @description
 *
 * Unwraps a value from an asynchronous primitive.
 *
 * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
 * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
 * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 * @usageNotes
 *
 * ### Examples
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. The Observable continuously updates the view with the current time.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
 *
 * @publicApi
 */
export declare class AsyncPipe implements OnDestroy, PipeTransform {
    private _ref;
    private _latestValue;
    private _latestReturnedValue;
    private _subscription;
    private _obj;
    private _strategy;
    constructor(_ref: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform<T>(obj: null): null;
    transform<T>(obj: undefined): undefined;
    transform<T>(obj: Observable<T> | null | undefined): T | null;
    transform<T>(obj: Promise<T> | null | undefined): T | null;
    private _subscribe;
    private _selectStrategy;
    private _dispose;
    private _updateLatestValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsyncPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<AsyncPipe, "async">;
}


/**
 * Exports all the basic Angular directives and pipes,
 * such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
 * Re-exported by `BrowserModule`, which is included automatically in the root
 * `AppModule` when you create a new app with the CLI `new` command.
 *
 * * The `providers` options configure the NgModule's injector to provide
 * localization dependencies to members.
 * * The `exports` options make the declared directives and pipes available for import
 * by other NgModules.
 *
 * @publicApi
 */
export declare class CommonModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CommonModule, [typeof NgClass, typeof NgComponentOutlet, typeof NgForOf, typeof NgIf, typeof NgTemplateOutlet, typeof NgStyle, typeof NgSwitch, typeof NgSwitchCase, typeof NgSwitchDefault, typeof NgPlural, typeof NgPluralCase, typeof AsyncPipe, typeof UpperCasePipe, typeof LowerCasePipe, typeof JsonPipe, typeof SlicePipe, typeof DecimalPipe, typeof PercentPipe, typeof TitleCasePipe, typeof CurrencyPipe, typeof DatePipe, typeof I18nPluralPipe, typeof I18nSelectPipe, typeof KeyValuePipe], never, [typeof NgClass, typeof NgComponentOutlet, typeof NgForOf, typeof NgIf, typeof NgTemplateOutlet, typeof NgStyle, typeof NgSwitch, typeof NgSwitchCase, typeof NgSwitchDefault, typeof NgPlural, typeof NgPluralCase, typeof AsyncPipe, typeof UpperCasePipe, typeof LowerCasePipe, typeof JsonPipe, typeof SlicePipe, typeof DecimalPipe, typeof PercentPipe, typeof TitleCasePipe, typeof CurrencyPipe, typeof DatePipe, typeof I18nPluralPipe, typeof I18nSelectPipe, typeof KeyValuePipe]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CommonModule>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a currency string, formatted according to locale rules
 * that determine group sizing and separator, decimal-point character,
 * and other locale-specific configurations.
 *
 * {@a currency-code-deprecation}
 * <div class="alert is-helpful">
 *
 * **Deprecation notice:**
 *
 * The default currency code is currently always `USD` but this is deprecated from v9.
 *
 * **In v11 the default currency code will be taken from the current locale identified by
 * the `LOCAL_ID` token. See the [i18n guide](guide/i18n#setting-up-the-locale-of-your-app) for
 * more information.**
 *
 * If you need the previous behavior then set it by creating a `DEFAULT_CURRENCY_CODE` provider in
 * your application `NgModule`:
 *
 * ```ts
 * {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
 * ```
 *
 * </div>
 *
 * @see `getCurrencySymbol()`
 * @see `formatCurrency()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>
 *
 * @publicApi
 */
export declare class CurrencyPipe implements PipeTransform {
    private _locale;
    private _defaultCurrencyCode;
    constructor(_locale: string, _defaultCurrencyCode?: string);
    /**
     *
     * @param value The number to be formatted as currency.
     * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
     * such as `USD` for the US dollar and `EUR` for the euro. The default currency code can be
     * configured using the `DEFAULT_CURRENCY_CODE` injection token.
     * @param display The format for the currency indicator. One of the following:
     *   - `code`: Show the code (such as `USD`).
     *   - `symbol`(default): Show the symbol (such as `$`).
     *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
     * currency.
     * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
     * locale has no narrow symbol, uses the standard symbol for the locale.
     *   - String: Use the given string value instead of a code or a symbol.
     * For example, an empty string will suppress the currency & symbol.
     *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
     *
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `2`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `2`.
     * If not provided, the number will be formatted with the proper amount of digits,
     * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
     * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrencyPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CurrencyPipe, "currency">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date value according to locale rules.
 *
 * Only the `en-US` locale data comes with Angular. To localize dates
 * in another language, you must import the corresponding locale data.
 * See the [I18n guide](guide/i18n#i18n-pipes) for more information.
 *
 * @see `formatDate()`
 *
 *
 * @usageNotes
 *
 * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
 * reformat the date on every change-detection cycle, treat the date as an immutable object
 * and change the reference when the pipe needs to run again.
 *
 * ### Pre-defined format options
 *
 * Examples are given in `en-US` locale.
 *
 * - `'short'`: equivalent to `'M/d/yy, h:mm a'` (`6/15/15, 9:03 AM`).
 * - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (`Jun 15, 2015, 9:03:01 AM`).
 * - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (`June 15, 2015 at 9:03:01 AM
 * GMT+1`).
 * - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (`Monday, June 15, 2015 at
 * 9:03:01 AM GMT+01:00`).
 * - `'shortDate'`: equivalent to `'M/d/yy'` (`6/15/15`).
 * - `'mediumDate'`: equivalent to `'MMM d, y'` (`Jun 15, 2015`).
 * - `'longDate'`: equivalent to `'MMMM d, y'` (`June 15, 2015`).
 * - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (`Monday, June 15, 2015`).
 * - `'shortTime'`: equivalent to `'h:mm a'` (`9:03 AM`).
 * - `'mediumTime'`: equivalent to `'h:mm:ss a'` (`9:03:01 AM`).
 * - `'longTime'`: equivalent to `'h:mm:ss a z'` (`9:03:01 AM GMT+1`).
 * - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (`9:03:01 AM GMT+01:00`).
 *
 * ### Custom format options
 *
 * You can construct a format string using symbols to specify the components
 * of a date-time value, as described in the following table.
 * Format details depend on the locale.
 * Fields marked with (*) are only available in the extra data set for the given locale.
 *
 *  | Field type         | Format      | Description                                                   | Example Value                                              |
 *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
 *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
 *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
 *  |                    | GGGGG       | Narrow                                                        | A                                                          |
 *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
 *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
 *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
 *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
 *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
 *  |                    | MMMM        | Wide                                                          | September                                                  |
 *  |                    | MMMMM       | Narrow                                                        | S                                                          |
 *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
 *  |                    | LLLL        | Wide                                                          | September                                                  |
 *  |                    | LLLLL       | Narrow                                                        | S                                                          |
 *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
 *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
 *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
 *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
 *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
 *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
 *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
 *  |                    | EEEEE       | Narrow                                                        | T                                                          |
 *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
 *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
 *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
 *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
 *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
 *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | BBBBB       | Narrow                                                        | md                                                         |
 *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
 *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | bbbbb       | Narrow                                                        | md                                                         |
 *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
 *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
 *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
 *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
 *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
 *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
 *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
 *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
 *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
 *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
 *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
 *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
 *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
 *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
 *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
 *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
 *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
 *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
 *
 * Note that timezone correction is not applied to an ISO string that has no time component, such as "2016-09-19"
 *
 * ### Format examples
 *
 * These examples transform a date into various formats,
 * assuming that `dateObj` is a JavaScript `Date` object for
 * year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
 * given in the local time for the `en-US` locale.
 *
 * ```
 * {{ dateObj | date }}               // output is 'Jun 15, 2015'
 * {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
 * {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
 * {{ dateObj | date:'mm:ss' }}       // output is '43:11'
 * ```
 *
 * ### Usage example
 *
 * The following component uses a date pipe to display the current date in different formats.
 *
 * ```
 * @Component({
 *  selector: 'date-pipe',
 *  template: `<div>
 *    <p>Today is {{today | date}}</p>
 *    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
 *    <p>The time is {{today | date:'h:mm a z'}}</p>
 *  </div>`
 * })
 * // Get the current date and time as a date-time value.
 * export class DatePipeComponent {
 *   today: number = Date.now();
 * }
 * ```
 *
 * @publicApi
 */
export declare class DatePipe implements PipeTransform {
    private locale;
    constructor(locale: string);
    /**
     * @param value The date expression: a `Date` object,  a number
     * (milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).
     * @param format The date/time components to include, using predefined options or a
     * custom format string.
     * @param timezone A timezone offset (such as `'+0430'`), or a standard
     * UTC/GMT or continental US timezone abbreviation.
     * When not supplied, uses the end-user's local system timezone.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     * @returns A date string in the desired format.
     */
    transform(value: any, format?: string, timezone?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DatePipe, "date">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number into a string,
 * formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * If no parameters are specified, the function rounds off to the nearest value using this
 * [rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
 * The behavior differs from that of the JavaScript ```Math.round()``` function.
 * In the following case for example, the pipe rounds down where
 * ```Math.round()``` rounds up:
 *
 * ```html
 * -2.5 | number:'1.0-0'
 * > -3
 * Math.round(-2.5)
 * > -2
 * ```
 *
 * @see `formatNumber()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * ### Example
 *
 * <code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>
 *
 * @publicApi
 */
export declare class DecimalPipe implements PipeTransform {
    private _locale;
    constructor(_locale: string);
    /**
     * @param value The number to be formatted.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `3`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DecimalPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DecimalPipe, "number">;
}

/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application in a Web Worker).
 *
 * @publicApi
 */
export declare const DOCUMENT: InjectionToken<Document>;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as currency using locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param currency A string containing the currency symbol or its name,
 * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
 * of the function.
 * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 * currency code, such as `USD` for the US dollar and `EUR` for the euro.
 * Used to determine the number of digits in the decimal part.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted currency value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatCurrency(value: number, locale: string, currency: string, currencyCode?: string, digitsInfo?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date according to locale rules.
 *
 * @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
 * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
 * @param format The date-time components to include. See `DatePipe` for details.
 * @param locale A locale code for the locale format rules to use.
 * @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
 * or a standard UTC/GMT or continental US time zone abbreviation.
 * If not specified, uses host system settings.
 *
 * @returns The formatted date string.
 *
 * @see `DatePipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatDate(value: string | number | Date, format: string, locale: string, timezone?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as text, with group sizing, separator, and other
 * parameters based on the locale.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted text string.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatNumber(value: number, locale: string, digitsInfo?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as a percentage according to locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted percentage value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 *
 */
export declare function formatPercent(value: number, locale: string, digitsInfo?: string): string;

/**
 * String widths available for date-time formats.
 * The specific character widths are locale-specific.
 * Examples are given for `en-US`.
 *
 * @see `getLocaleDateFormat()`
 * @see `getLocaleTimeFormat()``
 * @see `getLocaleDateTimeFormat()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 */
export declare enum FormatWidth {
    /**
     * For `en-US`, 'M/d/yy, h:mm a'`
     * (Example: `6/15/15, 9:03 AM`)
     */
    Short = 0,
    /**
     * For `en-US`, `'MMM d, y, h:mm:ss a'`
     * (Example: `Jun 15, 2015, 9:03:01 AM`)
     */
    Medium = 1,
    /**
     * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
     * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
     */
    Long = 2,
    /**
     * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
     * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
     */
    Full = 3
}

/**
 * Context-dependant translation forms for strings.
 * Typically the standalone version is for the nominative form of the word,
 * and the format version is used for the genitive case.
 * @see [CLDR website](http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum FormStyle {
    Format = 0,
    Standalone = 1
}

/**
 * Retrieves the currency symbol for a given currency code.
 *
 * For example, for the default `en-US` locale, the code `USD` can
 * be represented by the narrow symbol `$` or the wide symbol `US$`.
 *
 * @param code The currency code.
 * @param format The format, `wide` or `narrow`.
 * @param locale A locale code for the locale format rules to use.
 *
 * @returns The symbol, or the currency code if no symbol is available.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getCurrencySymbol(code: string, format: 'wide' | 'narrow', locale?: string): string;

/**
 * Retrieves the default currency code for the given locale.
 *
 * The default is defined as the first currency which is still in use.
 *
 * @param locale The code of the locale whose currency code we want.
 * @returns The code of the default currency for the given locale.
 *
 * @publicApi
 */
export declare function getLocaleCurrencyCode(locale: string): string | null;

/**
 * Retrieves the name of the currency for the main country corresponding
 * to a given locale. For example, 'US Dollar' for `en-US`.
 * @param locale A locale code for the locale format rules to use.
 * @returns The currency name,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleCurrencyName(locale: string): string | null;

/**
 * Retrieves the symbol used to represent the currency for the main country
 * corresponding to a given locale. For example, '$' for `en-US`.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The localized symbol character,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleCurrencySymbol(locale: string): string | null;

/**
 * Retrieves a localized date-value formating string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formating string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDateFormat(locale: string, width: FormatWidth): string;

/**
 * Retrieves a localized date-time formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDateTimeFormat(locale: string, width: FormatWidth): string;

/**
 * Retrieves days of the week for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDayNames(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves day period strings for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized period strings. For example, `[AM, PM]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDayPeriods(locale: string, formStyle: FormStyle, width: TranslationWidth): [string, string];

/**
 * Retrieves the writing direction of a specified locale
 * @param locale A locale code for the locale format rules to use.
 * @publicApi
 * @returns 'rtl' or 'ltr'
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 */
export declare function getLocaleDirection(locale: string): 'ltr' | 'rtl';

/**
 * Retrieves Gregorian-calendar eras for the given locale.
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.

 * @returns An array of localized era strings.
 * For example, `[AD, BC]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleEraNames(locale: string, width: TranslationWidth): [string, string];

/**
 * Retrieves locale-specific rules used to determine which day period to use
 * when more than one period is defined for a locale.
 *
 * There is a rule for each defined day period. The
 * first rule is applied to the first day period and so on.
 * Fall back to AM/PM when no rules are available.
 *
 * A rule can specify a period as time range, or as a single time value.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The rules for the locale, a single time value or array of *from-time, to-time*,
 * or null if no periods are available.
 *
 * @see `getLocaleExtraDayPeriods()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleExtraDayPeriodRules(locale: string): (Time | [Time, Time])[];

/**
 * Retrieves locale-specific day periods, which indicate roughly how a day is broken up
 * in different languages.
 * For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns The translated day-period strings.
 * @see `getLocaleExtraDayPeriodRules()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleExtraDayPeriods(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves the first day of the week for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns A day index number, using the 0-based week-day index for `en-US`
 * (Sunday = 0, Monday = 1, ...).
 * For example, for `fr-FR`, returns 1 to indicate that the first day is Monday.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleFirstDayOfWeek(locale: string): WeekDay;

/**
 * Retrieves the locale ID from the currently loaded locale.
 * The loaded locale could be, for example, a global one rather than a regional one.
 * @param locale A locale code, such as `fr-FR`.
 * @returns The locale code. For example, `fr`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleId(locale: string): string;

/**
 * Retrieves months of the year for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,  `[January, February, ...]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleMonthNames(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves a number format for a given locale.
 *
 * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
 * when used to format the number 12345.678 could result in "12'345,678". That would happen if the
 * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
 *
 * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
 * that stand for the decimal separator, and so on, and are NOT real characters.
 * You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
 * your language the decimal point is written with a comma. The symbols should be replaced by the
 * local equivalents, using the appropriate `NumberSymbol` for your language.
 *
 * Here are the special characters used in number patterns:
 *
 * | Symbol | Meaning |
 * |--------|---------|
 * | . | Replaced automatically by the character used for the decimal point. |
 * | , | Replaced by the "grouping" (thousands) separator. |
 * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
 * | # | Replaced by a digit (or nothing if there aren't enough). |
 * | ¤ | Replaced by a currency symbol, such as $ or USD. |
 * | % | Marks a percent format. The % symbol may change position, but must be retained. |
 * | E | Marks a scientific format. The E symbol may change position, but must be retained. |
 * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
 *
 * @param locale A locale code for the locale format rules to use.
 * @param type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
 * @returns The localized format string.
 * @see `NumberFormatStyle`
 * @see [CLDR website](http://cldr.unicode.org/translation/number-patterns)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleNumberFormat(locale: string, type: NumberFormatStyle): string;

/**
 * Retrieves a localized number symbol that can be used to replace placeholders in number formats.
 * @param locale The locale code.
 * @param symbol The symbol to localize.
 * @returns The character for the localized symbol.
 * @see `NumberSymbol`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleNumberSymbol(locale: string, symbol: NumberSymbol): string;

/**
 * @alias core/ɵgetLocalePluralCase
 * @publicApi
 */
export declare const getLocalePluralCase: (locale: string) => ((value: number) => Plural);

/**
 * Retrieves a localized time-value formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)

 * @publicApi
 */
export declare function getLocaleTimeFormat(locale: string, width: FormatWidth): string;

/**
 * Range of week days that are considered the week-end for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The range of day values, `[startDay, endDay]`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleWeekEndRange(locale: string): [WeekDay, WeekDay];

/**
 * Reports the number of decimal digits for a given currency.
 * The value depends upon the presence of cents in that particular currency.
 *
 * @param code The currency code.
 * @returns The number of decimal digits, typically 0 or 2.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getNumberOfCurrencyDigits(code: string): number;

/**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */
export declare class HashLocationStrategy extends LocationStrategy {
    private _platformLocation;
    private _baseHref;
    constructor(_platformLocation: PlatformLocation, _baseHref?: string);
    onPopState(fn: LocationChangeListener): void;
    getBaseHref(): string;
    path(includeHash?: boolean): string;
    prepareExternalUrl(internal: string): string;
    pushState(state: any, title: string, path: string, queryParams: string): void;
    replaceState(state: any, title: string, path: string, queryParams: string): void;
    forward(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HashLocationStrategy, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HashLocationStrategy>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Maps a value to a string that pluralizes the value according to locale rules.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
 *
 * @publicApi
 */
export declare class I18nPluralPipe implements PipeTransform {
    private _localization;
    constructor(_localization: NgLocalization);
    /**
     * @param value the number to be formatted
     * @param pluralMap an object that mimics the ICU format, see
     * http://userguide.icu-project.org/formatparse/messages.
     * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
     * default).
     */
    transform(value: number, pluralMap: {
        [count: string]: string;
    }, locale?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nPluralPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<I18nPluralPipe, "i18nPlural">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Generic selector that displays the string that matches the current value.
 *
 * If none of the keys of the `mapping` match the `value`, then the content
 * of the `other` key is returned when present, otherwise an empty string is returned.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
 *
 * @publicApi
 */
export declare class I18nSelectPipe implements PipeTransform {
    /**
     * @param value a string to be internationalized.
     * @param mapping an object that indicates the text that should be displayed
     * for different values of the provided `value`.
     */
    transform(value: string | null | undefined, mapping: {
        [key: string]: string;
    }): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nSelectPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<I18nSelectPipe, "i18nSelect">;
}

/**
 * Returns whether a platform id represents a browser platform.
 * @publicApi
 */
export declare function isPlatformBrowser(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a server platform.
 * @publicApi
 */
export declare function isPlatformServer(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a web worker app platform.
 * @publicApi
 */
export declare function isPlatformWorkerApp(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a web worker UI platform.
 * @publicApi
 */
export declare function isPlatformWorkerUi(platformId: Object): boolean;

/**
 * @ngModule CommonModule
 * @description
 *
 * Converts a value into its JSON-format representation.  Useful for debugging.
 *
 * @usageNotes
 *
 * The following component uses a JSON pipe to convert an object
 * to JSON format, and displays the string in both formats for comparison.
 *
 * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 * @publicApi
 */
export declare class JsonPipe implements PipeTransform {
    /**
     * @param value A value of any type to convert into a JSON-format string.
     */
    transform(value: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<JsonPipe, "json">;
}

/**
 * A key value pair.
 * Usually used to represent the key value pairs from a Map or Object.
 *
 * @publicApi
 */
export declare interface KeyValue<K, V> {
    key: K;
    value: V;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms Object or Map into an array of key value pairs.
 *
 * The output array will be ordered by keys.
 * By default the comparator will be by Unicode point value.
 * You can optionally pass a compareFn if your keys are complex types.
 *
 * @usageNotes
 * ### Examples
 *
 * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
 * pipe.
 *
 * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
 *
 * @publicApi
 */
export declare class KeyValuePipe implements PipeTransform {
    private readonly differs;
    constructor(differs: KeyValueDiffers);
    private differ;
    private keyValues;
    transform<K, V>(input: null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): null;
    transform<V>(input: {
        [key: string]: V;
    } | Map<string, V>, compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number): Array<KeyValue<string, V>>;
    transform<V>(input: {
        [key: string]: V;
    } | Map<string, V> | null, compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number): Array<KeyValue<string, V>> | null;
    transform<V>(input: {
        [key: number]: V;
    } | Map<number, V>, compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number): Array<KeyValue<number, V>>;
    transform<V>(input: {
        [key: number]: V;
    } | Map<number, V> | null, compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number): Array<KeyValue<number, V>> | null;
    transform<K, V>(input: Map<K, V>, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>>;
    transform<K, V>(input: Map<K, V> | null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>> | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KeyValuePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<KeyValuePipe, "keyvalue">;
}

/**
 * @description
 *
 * A service that applications can use to interact with a browser's URL.
 *
 * Depending on the `LocationStrategy` used, `Location` persists
 * to the URL's path or the URL's hash segment.
 *
 * @usageNotes
 *
 * It's better to use the `Router#navigate` service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 *
 * <code-example path='common/location/ts/path_location_component.ts'
 * region='LocationComponent'></code-example>
 *
 * @publicApi
 */
export declare class Location {
    constructor(platformStrategy: LocationStrategy, platformLocation: PlatformLocation);
    /**
     * Normalizes the URL path for this location.
     *
     * @param includeHash True to include an anchor fragment in the path.
     *
     * @returns The normalized URL path.
     */
    path(includeHash?: boolean): string;
    /**
     * Reports the current state of the location history.
     * @returns The current value of the `history.state` object.
     */
    getState(): unknown;
    /**
     * Normalizes the given path and compares to the current normalized path.
     *
     * @param path The given URL path.
     * @param query Query parameters.
     *
     * @returns True if the given URL path is equal to the current normalized path, false
     * otherwise.
     */
    isCurrentPathEqualTo(path: string, query?: string): boolean;
    /**
     * Normalizes a URL path by stripping any trailing slashes.
     *
     * @param url String representing a URL.
     *
     * @returns The normalized URL string.
     */
    normalize(url: string): string;
    /**
     * Normalizes an external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), adds one
     * before normalizing. Adds a hash if `HashLocationStrategy` is
     * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     *
     * @param url String representing a URL.
     *
     * @returns  A normalized platform-specific URL.
     */
    prepareExternalUrl(url: string): string;
    /**
     * Changes the browser's URL to a normalized version of a given URL, and pushes a
     * new item onto the platform's history.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     *
     */
    go(path: string, query?: string, state?: any): void;
    /**
     * Changes the browser's URL to a normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     */
    replaceState(path: string, query?: string, state?: any): void;
    /**
     * Navigates forward in the platform's history.
     */
    forward(): void;
    /**
     * Navigates back in the platform's history.
     */
    back(): void;
    /**
     * Registers a URL change listener. Use to catch updates performed by the Angular
     * framework that are not detectible through "popstate" or "hashchange" events.
     *
     * @param fn The change handler function, which take a URL and a location history state.
     */
    onUrlChange(fn: (url: string, state: unknown) => void): void;
    /**
     * Subscribes to the platform's `popState` events.
     *
     * @param value Event that is triggered when the state history changes.
     * @param exception The exception to throw.
     *
     * @returns Subscribed events.
     */
    subscribe(onNext: (value: PopStateEvent) => void, onThrow?: ((exception: any) => void) | null, onReturn?: (() => void) | null): SubscriptionLike;
    /**
     * Normalizes URL parameters by prepending with `?` if needed.
     *
     * @param  params String of URL parameters.
     *
     * @returns The normalized URL parameters string.
     */
    static normalizeQueryParams: (params: string) => string;
    /**
     * Joins two parts of a URL with a slash if needed.
     *
     * @param start  URL string
     * @param end    URL string
     *
     *
     * @returns The joined URL string.
     */
    static joinWithSlash: (start: string, end: string) => string;
    /**
     * Removes a trailing slash from a URL string if needed.
     * Looks for the first occurrence of either `#`, `?`, or the end of the
     * line as `/` characters and removes the trailing slash if one exists.
     *
     * @param url URL string.
     *
     * @returns The URL string, modified if needed.
     */
    static stripTrailingSlash: (url: string) => string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Location, never>;
}

/**
 * @description
 * Indicates when a location is initialized.
 *
 * @publicApi
 */
export declare const LOCATION_INITIALIZED: InjectionToken<Promise<any>>;

/**
 * @description
 * A serializable version of the event from `onPopState` or `onHashChange`
 *
 * @publicApi
 */
export declare interface LocationChangeEvent {
    type: string;
    state: any;
}

/**
 * @publicApi
 */
export declare interface LocationChangeListener {
    (event: LocationChangeEvent): any;
}

/**
 * Enables the `Location` service to read route state from the browser's URL.
 * Angular provides two strategies:
 * `HashLocationStrategy` and `PathLocationStrategy`.
 *
 * Applications should use the `Router` or `Location` services to
 * interact with application route state.
 *
 * For instance, `HashLocationStrategy` produces URLs like
 * <code class="no-auto-link">http://example.com#/foo</code>,
 * and `PathLocationStrategy` produces
 * <code class="no-auto-link">http://example.com/foo</code> as an equivalent URL.
 *
 * See these two classes for more.
 *
 * @publicApi
 */
export declare abstract class LocationStrategy {
    abstract path(includeHash?: boolean): string;
    abstract prepareExternalUrl(internal: string): string;
    abstract pushState(state: any, title: string, url: string, queryParams: string): void;
    abstract replaceState(state: any, title: string, url: string, queryParams: string): void;
    abstract forward(): void;
    abstract back(): void;
    abstract onPopState(fn: LocationChangeListener): void;
    abstract getBaseHref(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LocationStrategy, never>;
}

/**
 * Transforms text to all lower case.
 *
 * @see `UpperCasePipe`
 * @see `TitleCasePipe`
 * @usageNotes
 *
 * The following example defines a view that allows the user to enter
 * text, and then uses the pipe to convert the input text to all lower case.
 *
 * <code-example path="common/pipes/ts/lowerupper_pipe.ts" region='LowerUpperPipe'></code-example>
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class LowerCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to lower case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LowerCasePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<LowerCasePipe, "lowercase">;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * @description
 *
 * Adds and removes CSS classes on an HTML element.
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * @publicApi
 */
export declare class NgClass implements DoCheck {
    private _iterableDiffers;
    private _keyValueDiffers;
    private _ngEl;
    private _renderer;
    private _iterableDiffer;
    private _keyValueDiffer;
    private _initialClasses;
    private _rawClass;
    constructor(_iterableDiffers: IterableDiffers, _keyValueDiffers: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2);
    set klass(value: string);
    set ngClass(value: string | string[] | Set<string> | {
        [klass: string]: any;
    });
    ngDoCheck(): void;
    private _applyKeyValueChanges;
    private _applyIterableChanges;
    /**
     * Applies a collection of CSS classes to the DOM element.
     *
     * For argument of type Set and Array CSS class names contained in those collections are always
     * added.
     * For argument of type Map CSS class name in the map's key is toggled based on the value (added
     * for truthy and removed for falsy).
     */
    private _applyClasses;
    /**
     * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
     * purposes.
     */
    private _removeClasses;
    private _toggleClass;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgClass, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgClass, "[ngClass]", never, { "klass": "class"; "ngClass": "ngClass"; }, {}, never>;
}

/**
 * Instantiates a single {@link Component} type and inserts its Host View into current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will get destroyed.
 *
 * @usageNotes
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if exists.
 *
 * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
 * module, then load a component from that module.
 *
 * ### Syntax
 *
 * Simple
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * Customized injector/content
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized ngModuleFactory
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModuleFactory: moduleFactory;">
 * </ng-container>
 * ```
 *
 * ### A simple example
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 *
 * @publicApi
 * @ngModule CommonModule
 */
export declare class NgComponentOutlet implements OnChanges, OnDestroy {
    private _viewContainerRef;
    ngComponentOutlet: Type<any>;
    ngComponentOutletInjector: Injector;
    ngComponentOutletContent: any[][];
    ngComponentOutletNgModuleFactory: NgModuleFactory<any>;
    private _componentRef;
    private _moduleRef;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgComponentOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgComponentOutlet, "[ngComponentOutlet]", never, { "ngComponentOutlet": "ngComponentOutlet"; "ngComponentOutletInjector": "ngComponentOutletInjector"; "ngComponentOutletContent": "ngComponentOutletContent"; "ngComponentOutletNgModuleFactory": "ngComponentOutletNgModuleFactory"; }, {}, never>;
}

/**
 * A [structural directive](guide/structural-directives) that renders
 * a template for each item in a collection.
 * The directive is placed on an element, which becomes the parent
 * of the cloned templates.
 *
 * The `ngForOf` directive is generally used in the
 * [shorthand form](guide/structural-directives#the-asterisk--prefix) `*ngFor`.
 * In this form, the template to be rendered for each iteration is the content
 * of an anchor element containing the directive.
 *
 * The following example shows the shorthand syntax with some options,
 * contained in an `<li>` element.
 *
 * ```
 * <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
 * ```
 *
 * The shorthand form expands into a long form that uses the `ngForOf` selector
 * on an `<ng-template>` element.
 * The content of the `<ng-template>` element is the `<li>` element that held the
 * short-form directive.
 *
 * Here is the expanded version of the short-form example.
 *
 * ```
 * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
 *   <li>...</li>
 * </ng-template>
 * ```
 *
 * Angular automatically expands the shorthand syntax as it compiles the template.
 * The context for each embedded view is logically merged to the current component
 * context according to its lexical position.
 *
 * When using the shorthand syntax, Angular allows only [one structural directive
 * on an element](guide/structural-directives#one-structural-directive-per-host-element).
 * If you want to iterate conditionally, for example,
 * put the `*ngIf` on a container element that wraps the `*ngFor` element.
 * For futher discussion, see
 * [Structural Directives](guide/structural-directives#one-per-element).
 *
 * @usageNotes
 *
 * ### Local variables
 *
 * `NgForOf` provides exported values that can be aliased to local variables.
 * For example:
 *
 *  ```
 * <li *ngFor="let user of users; index as i; first as isFirst">
 *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
 * </li>
 * ```
 *
 * The following exported values can be aliased to local variables:
 *
 * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
 * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
 * more complex then a property access, for example when using the async pipe (`userStreams |
 * async`).
 * - `index: number`: The index of the current item in the iterable.
 * - `count: number`: The length of the iterable.
 * - `first: boolean`: True when the item is the first item in the iterable.
 * - `last: boolean`: True when the item is the last item in the iterable.
 * - `even: boolean`: True when the item has an even index in the iterable.
 * - `odd: boolean`: True when the item has an odd index in the iterable.
 *
 * ### Change propagation
 *
 * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
 *
 * * When an item is added, a new instance of the template is added to the DOM.
 * * When an item is removed, its template instance is removed from the DOM.
 * * When items are reordered, their respective templates are reordered in the DOM.
 *
 * Angular uses object identity to track insertions and deletions within the iterator and reproduce
 * those changes in the DOM. This has important implications for animations and any stateful
 * controls that are present, such as `<input>` elements that accept user input. Inserted rows can
 * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
 * such as user input.
 * For more on animations, see [Transitions and Triggers](guide/transition-and-triggers).
 *
 * The identities of elements in the iterator can change while the data does not.
 * This can happen, for example, if the iterator is produced from an RPC to the server, and that
 * RPC is re-run. Even if the data hasn't changed, the second response produces objects with
 * different identities, and Angular must tear down the entire DOM and rebuild it (as if all old
 * elements were deleted and all new elements inserted).
 *
 * To avoid this expensive operation, you can customize the default tracking algorithm.
 * by supplying the `trackBy` option to `NgForOf`.
 * `trackBy` takes a function that has two arguments: `index` and `item`.
 * If `trackBy` is given, Angular tracks changes by the return value of the function.
 *
 * @see [Structural Directives](guide/structural-directives)
 * @ngModule CommonModule
 * @publicApi
 */
export declare class NgForOf<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck {
    private _viewContainer;
    private _template;
    private _differs;
    /**
     * The value of the iterable expression, which can be used as a
     * [template input variable](guide/structural-directives#template-input-variable).
     */
    set ngForOf(ngForOf: (U & NgIterable<T>) | undefined | null);
    /**
     * A function that defines how to track changes for items in the iterable.
     *
     * When items are added, moved, or removed in the iterable,
     * the directive must re-render the appropriate DOM nodes.
     * To minimize churn in the DOM, only nodes that have changed
     * are re-rendered.
     *
     * By default, the change detector assumes that
     * the object instance identifies the node in the iterable.
     * When this function is supplied, the directive uses
     * the result of calling this function to identify the item node,
     * rather than the identity of the object itself.
     *
     * The function receives two inputs,
     * the iteration index and the node object ID.
     */
    set ngForTrackBy(fn: TrackByFunction<T>);
    get ngForTrackBy(): TrackByFunction<T>;
    private _ngForOf;
    private _ngForOfDirty;
    private _differ;
    private _trackByFn;
    constructor(_viewContainer: ViewContainerRef, _template: TemplateRef<NgForOfContext<T, U>>, _differs: IterableDiffers);
    /**
     * A reference to the template that is stamped out for each item in the iterable.
     * @see [template reference variable](guide/template-syntax#template-reference-variables--var-)
     */
    set ngForTemplate(value: TemplateRef<NgForOfContext<T, U>>);
    /**
     * Applies the changes when needed.
     */
    ngDoCheck(): void;
    private _applyChanges;
    private _perViewChange;
    /**
     * Asserts the correct type of the context for the template that `NgForOf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgForOf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T, U extends NgIterable<T>>(dir: NgForOf<T, U>, ctx: any): ctx is NgForOfContext<T, U>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgForOf<any, any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgForOf<any, any>, "[ngFor][ngForOf]", never, { "ngForOf": "ngForOf"; "ngForTrackBy": "ngForTrackBy"; "ngForTemplate": "ngForTemplate"; }, {}, never>;
}

/**
 * @publicApi
 */
export declare class NgForOfContext<T, U extends NgIterable<T> = NgIterable<T>> {
    $implicit: T;
    ngForOf: U;
    index: number;
    count: number;
    constructor($implicit: T, ngForOf: U, index: number, count: number);
    get first(): boolean;
    get last(): boolean;
    get even(): boolean;
    get odd(): boolean;
}

/**
 * A structural directive that conditionally includes a template based on the value of
 * an expression coerced to Boolean.
 * When the expression evaluates to true, Angular renders the template
 * provided in a `then` clause, and when  false or null,
 * Angular renders the template provided in an optional `else` clause. The default
 * template for the `else` clause is blank.
 *
 * A [shorthand form](guide/structural-directives#the-asterisk--prefix) of the directive,
 * `*ngIf="condition"`, is generally used, provided
 * as an attribute of the anchor element for the inserted template.
 * Angular expands this into a more explicit version, in which the anchor element
 * is contained in an `<ng-template>` element.
 *
 * Simple form with shorthand syntax:
 *
 * ```
 * <div *ngIf="condition">Content to render when condition is true.</div>
 * ```
 *
 * Simple form with expanded syntax:
 *
 * ```
 * <ng-template [ngIf]="condition"><div>Content to render when condition is
 * true.</div></ng-template>
 * ```
 *
 * Form with an "else" block:
 *
 * ```
 * <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Shorthand form with "then" and "else" blocks:
 *
 * ```
 * <div *ngIf="condition; then thenBlock else elseBlock"></div>
 * <ng-template #thenBlock>Content to render when condition is true.</ng-template>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Form with storing the value locally:
 *
 * ```
 * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
 * <ng-template #elseBlock>Content to render when value is null.</ng-template>
 * ```
 *
 * @usageNotes
 *
 * The `*ngIf` directive is most commonly used to conditionally show an inline template,
 * as seen in the following  example.
 * The default `else` template is blank.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfSimple'}
 *
 * ### Showing an alternative template using `else`
 *
 * To display a template when `expression` evaluates to false, use an `else` template
 * binding as shown in the following example.
 * The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
 * The template can be defined anywhere in the component view, but is typically placed right after
 * `ngIf` for readability.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfElse'}
 *
 * ### Using an external `then` template
 *
 * In the previous example, the then-clause template is specified inline, as the content of the
 * tag that contains the `ngIf` directive. You can also specify a template that is defined
 * externally, by referencing a labeled `<ng-template>` element. When you do this, you can
 * change which template to use at runtime, as shown in the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
 *
 * ### Storing a conditional result in a variable
 *
 * You might want to show a set of properties from the same object. If you are waiting
 * for asynchronous data, the object can be undefined.
 * In this case, you can use `ngIf` and store the result of the condition in a local
 * variable as shown in the the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfAs'}
 *
 * This code uses only one `AsyncPipe`, so only one subscription is created.
 * The conditional statement stores the result of `userStream|async` in the local variable `user`.
 * You can then bind the local `user` repeatedly.
 *
 * The conditional displays the data only if `userStream` returns a value,
 * so you don't need to use the
 * [safe-navigation-operator](guide/template-syntax#safe-navigation-operator) (`?.`)
 * to guard against null values when accessing properties.
 * You can display an alternative template while waiting for the data.
 *
 * ### Shorthand syntax
 *
 * The shorthand syntax `*ngIf` expands into two separate template specifications
 * for the "then" and "else" clauses. For example, consider the following shorthand statement,
 * that is meant to show a loading page while waiting for data to be loaded.
 *
 * ```
 * <div class="hero-list" *ngIf="heroes else loading">
 *  ...
 * </div>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * You can see that the "else" clause references the `<ng-template>`
 * with the `#loading` label, and the template for the "then" clause
 * is provided as the content of the anchor element.
 *
 * However, when Angular expands the shorthand syntax, it creates
 * another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
 * The anchor element containing the template for the "then" clause becomes
 * the content of this unlabeled `<ng-template>` tag.
 *
 * ```
 * <ng-template [ngIf]="heroes" [ngIfElse]="loading">
 *  <div class="hero-list">
 *   ...
 *  </div>
 * </ng-template>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * The presence of the implicit template object has implications for the nesting of
 * structural directives. For more on this subject, see
 * [Structural Directives](https://angular.io/guide/structural-directives#one-per-element).
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class NgIf<T = unknown> {
    private _viewContainer;
    private _context;
    private _thenTemplateRef;
    private _elseTemplateRef;
    private _thenViewRef;
    private _elseViewRef;
    constructor(_viewContainer: ViewContainerRef, templateRef: TemplateRef<NgIfContext<T>>);
    /**
     * The Boolean expression to evaluate as the condition for showing a template.
     */
    set ngIf(condition: T);
    /**
     * A template to show if the condition expression evaluates to true.
     */
    set ngIfThen(templateRef: TemplateRef<NgIfContext<T>> | null);
    /**
     * A template to show if the condition expression evaluates to false.
     */
    set ngIfElse(templateRef: TemplateRef<NgIfContext<T>> | null);
    private _updateView;
    /**
     * Assert the correct type of the expression bound to the `ngIf` input within the template.
     *
     * The presence of this static field is a signal to the Ivy template type check compiler that
     * when the `NgIf` structural directive renders its template, the type of the expression bound
     * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
     * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
     */
    static ngTemplateGuard_ngIf: 'binding';
    /**
     * Asserts the correct type of the context for the template that `NgIf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgIf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(dir: NgIf<T>, ctx: any): ctx is NgIfContext<NonNullable<T>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgIf<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgIf<any>, "[ngIf]", never, { "ngIf": "ngIf"; "ngIfThen": "ngIfThen"; "ngIfElse": "ngIfElse"; }, {}, never>;
}

/**
 * @publicApi
 */
export declare class NgIfContext<T = unknown> {
    $implicit: T;
    ngIf: T;
}

/**
 * Returns the plural case based on the locale
 *
 * @publicApi
 */
export declare class NgLocaleLocalization extends NgLocalization {
    protected locale: string;
    constructor(locale: string);
    getPluralCategory(value: any, locale?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgLocaleLocalization, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgLocaleLocalization>;
}


/**
 * @publicApi
 */
export declare abstract class NgLocalization {
    abstract getPluralCategory(value: any, locale?: string): string;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
 *   <ng-template ngPluralCase="=1">there is one</ng-template>
 *   <ng-template ngPluralCase="few">there are a few</ng-template>
 * </some-element>
 * ```
 *
 * @description
 *
 * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * @publicApi
 */
export declare class NgPlural {
    private _localization;
    private _switchValue;
    private _activeView;
    private _caseViews;
    constructor(_localization: NgLocalization);
    set ngPlural(value: number);
    addCase(value: string, switchView: SwitchView): void;
    private _updateView;
    private _clearViews;
    private _activateView;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgPlural, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgPlural, "[ngPlural]", never, { "ngPlural": "ngPlural"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that will be added/removed from the parent {@link NgPlural} when the
 * given expression matches the plural expression according to CLDR rules.
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">...</ng-template>
 *   <ng-template ngPluralCase="other">...</ng-template>
 * </some-element>
 *```
 *
 * See {@link NgPlural} for more details and example.
 *
 * @publicApi
 */
export declare class NgPluralCase {
    value: string;
    constructor(value: string, template: TemplateRef<Object>, viewContainer: ViewContainerRef, ngPlural: NgPlural);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgPluralCase, [{ attribute: "ngPluralCase"; }, null, null, { host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgPluralCase, "[ngPluralCase]", never, {}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 *
 * Set the font of the containing element to the result of an expression.
 *
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 * ```
 *
 * Set the width of the containing element to a pixel value returned by an expression.
 *
 * ```
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 * ```
 *
 * Set a collection of style values using an expression that returns key-value pairs.
 *
 * ```
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * @description
 *
 * An attribute directive that updates styles for the containing HTML element.
 * Sets one or more style properties, specified as colon-separated key-value pairs.
 * The key is a style name, with an optional `.<unit>` suffix
 * (such as 'top.px', 'font-style.em').
 * The value is an expression to be evaluated.
 * The resulting non-null value, expressed in the given unit,
 * is assigned to the given style property.
 * If the result of evaluation is null, the corresponding style is removed.
 *
 * @publicApi
 */
export declare class NgStyle implements DoCheck {
    private _ngEl;
    private _differs;
    private _renderer;
    private _ngStyle;
    private _differ;
    constructor(_ngEl: ElementRef, _differs: KeyValueDiffers, _renderer: Renderer2);
    set ngStyle(values: {
        [klass: string]: any;
    } | null);
    ngDoCheck(): void;
    private _setStyle;
    private _applyChanges;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgStyle, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgStyle, "[ngStyle]", never, { "ngStyle": "ngStyle"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 * The `[ngSwitch]` directive on a container specifies an expression to match against.
 * The expressions to match are provided by `ngSwitchCase` directives on views within the container.
 * - Every view that matches is rendered.
 * - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
 * - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
 * or `ngSwitchDefault` directive are preserved at the location.
 *
 * @usageNotes
 * Define a container element for the directive, and specify the switch expression
 * to match against as an attribute:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 * ```
 *
 * Within the container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *    <some-element *ngSwitchCase="match_expression_1">...</some-element>
 * ...
 *    <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * ### Usage Examples
 *
 * The following example shows how to use more than one case to display the same view:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <!-- the same view can be shown in more than one case -->
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *   <!--default case when there are no matches -->
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * The following example shows how cases can be nested:
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *       <ng-container *ngSwitchCase="match_expression_3">
 *         <!-- use a ng-container to group multiple root nodes -->
 *         <inner-element></inner-element>
 *         <inner-other-element></inner-other-element>
 *       </ng-container>
 *       <some-element *ngSwitchDefault>...</some-element>
 *     </container-element>
 * ```
 *
 * @publicApi
 * @see `NgSwitchCase`
 * @see `NgSwitchDefault`
 * @see [Structural Directives](guide/structural-directives)
 *
 */
export declare class NgSwitch {
    private _defaultViews;
    private _defaultUsed;
    private _caseCount;
    private _lastCaseCheckIndex;
    private _lastCasesMatched;
    private _ngSwitch;
    set ngSwitch(newValue: any);
    private _updateDefaultCases;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitch, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitch, "[ngSwitch]", never, { "ngSwitch": "ngSwitch"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 * Provides a switch case expression to match against an enclosing `ngSwitch` expression.
 * When the expressions match, the given `NgSwitchCase` template is rendered.
 * If multiple match expressions match the switch expression value, all of them are displayed.
 *
 * @usageNotes
 *
 * Within a switch container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   ...
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * Each switch-case statement contains an in-line HTML template or template reference
 * that defines the subtree to be selected if the value of the match expression
 * matches the value of the switch expression.
 *
 * Unlike JavaScript, which uses strict equality, Angular uses loose equality.
 * This means that the empty string, `""` matches 0.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchDefault`
 *
 */
export declare class NgSwitchCase implements DoCheck {
    private ngSwitch;
    private _view;
    /**
     * Stores the HTML template to be selected on match.
     */
    ngSwitchCase: any;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<Object>, ngSwitch: NgSwitch);
    /**
     * Performs case matching. For internal use only.
     */
    ngDoCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitchCase, [null, null, { host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitchCase, "[ngSwitchCase]", never, { "ngSwitchCase": "ngSwitchCase"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that is rendered when no `NgSwitchCase` expressions
 * match the `NgSwitch` expression.
 * This statement should be the final case in an `NgSwitch`.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchCase`
 *
 */
export declare class NgSwitchDefault {
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<Object>, ngSwitch: NgSwitch);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitchDefault, [null, null, { host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitchDefault, "[ngSwitchDefault]", never, {}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Inserts an embedded view from a prepared `TemplateRef`.
 *
 * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
 * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
 * by the local template `let` declarations.
 *
 * @usageNotes
 * ```
 * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
 * ```
 *
 * Using the key `$implicit` in the context object will set its value as default.
 *
 * ### Example
 *
 * {@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
 *
 * @publicApi
 */
export declare class NgTemplateOutlet implements OnChanges {
    private _viewContainerRef;
    private _viewRef;
    /**
     * A context object to attach to the {@link EmbeddedViewRef}. This should be an
     * object, the object's keys will be available for binding by the local template `let`
     * declarations.
     * Using the key `$implicit` in the context object will set its value as default.
     */
    ngTemplateOutletContext: Object | null;
    /**
     * A string defining the template reference and optionally the context object for the template.
     */
    ngTemplateOutlet: TemplateRef<any> | null;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * We need to re-create existing embedded view if:
     * - templateRef has changed
     * - context has changes
     *
     * We mark context object as changed when the corresponding object
     * shape changes (new properties are added or existing properties are removed).
     * In other words we consider context with the same properties as "the same" even
     * if object reference changes (see https://github.com/angular/angular/issues/13407).
     */
    private _shouldRecreateView;
    private _hasContextShapeChanged;
    private _updateExistingContext;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgTemplateOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgTemplateOutlet, "[ngTemplateOutlet]", never, { "ngTemplateOutletContext": "ngTemplateOutletContext"; "ngTemplateOutlet": "ngTemplateOutlet"; }, {}, never>;
}


/**
 * Format styles that can be used to represent numbers.
 * @see `getLocaleNumberFormat()`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum NumberFormatStyle {
    Decimal = 0,
    Percent = 1,
    Currency = 2,
    Scientific = 3
}

/**
 * Symbols that can be used to replace placeholders in number patterns.
 * Examples are based on `en-US` values.
 *
 * @see `getLocaleNumberSymbol()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum NumberSymbol {
    /**
     * Decimal separator.
     * For `en-US`, the dot character.
     * Example : 2,345`.`67
     */
    Decimal = 0,
    /**
     * Grouping separator, typically for thousands.
     * For `en-US`, the comma character.
     * Example: 2`,`345.67
     */
    Group = 1,
    /**
     * List-item separator.
     * Example: "one, two, and three"
     */
    List = 2,
    /**
     * Sign for percentage (out of 100).
     * Example: 23.4%
     */
    PercentSign = 3,
    /**
     * Sign for positive numbers.
     * Example: +23
     */
    PlusSign = 4,
    /**
     * Sign for negative numbers.
     * Example: -23
     */
    MinusSign = 5,
    /**
     * Computer notation for exponential value (n times a power of 10).
     * Example: 1.2E3
     */
    Exponential = 6,
    /**
     * Human-readable format of exponential.
     * Example: 1.2x103
     */
    SuperscriptingExponent = 7,
    /**
     * Sign for permille (out of 1000).
     * Example: 23.4‰
     */
    PerMille = 8,
    /**
     * Infinity, can be used with plus and minus.
     * Example: ∞, +∞, -∞
     */
    Infinity = 9,
    /**
     * Not a number.
     * Example: NaN
     */
    NaN = 10,
    /**
     * Symbol used between time units.
     * Example: 10:52
     */
    TimeSeparator = 11,
    /**
     * Decimal separator for currency values (fallback to `Decimal`).
     * Example: $2,345.67
     */
    CurrencyDecimal = 12,
    /**
     * Group separator for currency values (fallback to `Group`).
     * Example: $2,345.67
     */
    CurrencyGroup = 13
}

/**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
 * browser's URL.
 *
 * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
 * or add a base element to the document. This URL prefix that will be preserved
 * when generating and recognizing URLs.
 *
 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * Similarly, if you add `<base href='/my/app'/>` to the document and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */
export declare class PathLocationStrategy extends LocationStrategy {
    private _platformLocation;
    private _baseHref;
    constructor(_platformLocation: PlatformLocation, href?: string);
    onPopState(fn: LocationChangeListener): void;
    getBaseHref(): string;
    prepareExternalUrl(internal: string): string;
    path(includeHash?: boolean): string;
    pushState(state: any, title: string, url: string, queryParams: string): void;
    replaceState(state: any, title: string, url: string, queryParams: string): void;
    forward(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PathLocationStrategy, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PathLocationStrategy>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a percentage
 * string, formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * @see `formatPercent()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>
 *
 * @publicApi
 */
export declare class PercentPipe implements PipeTransform {
    private _locale;
    constructor(_locale: string);
    /**
     *
     * @param value The number to be formatted as a percentage.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `0`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PercentPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<PercentPipe, "percent">;
}

/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM APIs, which allows the Router to be
 * platform-agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms that Angular supports. For example, `@angular/platform-browser` provides an
 * implementation specific to the browser environment, while `@angular/platform-server` provides
 * one suitable for use with server-side rendering.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when they need to interact with the DOM APIs like pushState, popState, etc.
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM APIs flow through the `PlatformLocation`
 * class, they are all platform-agnostic.
 *
 * @publicApi
 */
export declare abstract class PlatformLocation {
    abstract getBaseHrefFromDOM(): string;
    abstract getState(): unknown;
    abstract onPopState(fn: LocationChangeListener): void;
    abstract onHashChange(fn: LocationChangeListener): void;
    abstract get href(): string;
    abstract get protocol(): string;
    abstract get hostname(): string;
    abstract get port(): string;
    abstract get pathname(): string;
    abstract get search(): string;
    abstract get hash(): string;
    abstract replaceState(state: any, title: string, url: string): void;
    abstract pushState(state: any, title: string, url: string): void;
    abstract forward(): void;
    abstract back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlatformLocation, never>;
}

/**
 * Plurality cases used for translating plurals to different languages.
 *
 * @see `NgPlural`
 * @see `NgPluralCase`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum Plural {
    Zero = 0,
    One = 1,
    Two = 2,
    Few = 3,
    Many = 4,
    Other = 5
}

/** @publicApi */
export declare interface PopStateEvent {
    pop?: boolean;
    state?: any;
    type?: string;
    url?: string;
}


/**
 * Register global data to be used internally by Angular. See the
 * ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.
 *
 * The signature registerLocaleData(data: any, extraData?: any) is deprecated since v5.1
 *
 * @publicApi
 */
export declare function registerLocaleData(data: any, localeId?: string | any, extraData?: any): void;

/**
 * @ngModule CommonModule
 * @description
 *
 * Creates a new `Array` or `String` containing a subset (slice) of the elements.
 *
 * @usageNotes
 *
 * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
 * and `String.prototype.slice()`.
 *
 * When operating on an `Array`, the returned `Array` is always a copy even when all
 * the elements are being returned.
 *
 * When operating on a blank value, the pipe returns the blank value.
 *
 * ### List Example
 *
 * This `ngFor` example:
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
 *
 * produces the following:
 *
 * ```html
 * <li>b</li>
 * <li>c</li>
 * ```
 *
 * ### String Examples
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
 *
 * @publicApi
 */
export declare class SlicePipe implements PipeTransform {
    /**
     * @param value a list or a string to be sliced.
     * @param start the starting index of the subset to return:
     *   - **a positive integer**: return the item at `start` index and all items after
     *     in the list or string expression.
     *   - **a negative integer**: return the item at `start` index from the end and all items after
     *     in the list or string expression.
     *   - **if positive and greater than the size of the expression**: return an empty list or
     * string.
     *   - **if negative and greater than the size of the expression**: return entire list or string.
     * @param end the ending index of the subset to return:
     *   - **omitted**: return all items until the end.
     *   - **if positive**: return all items before `end` index of the list or string.
     *   - **if negative**: return all items before `end` index from the end of the list or string.
     */
    transform<T>(value: ReadonlyArray<T>, start: number, end?: number): Array<T>;
    transform(value: string, start: number, end?: number): string;
    transform(value: null, start: number, end?: number): null;
    transform(value: undefined, start: number, end?: number): undefined;
    private supports;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SlicePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<SlicePipe, "slice">;
}

declare class SwitchView {
    private _viewContainerRef;
    private _templateRef;
    private _created;
    constructor(_viewContainerRef: ViewContainerRef, _templateRef: TemplateRef<Object>);
    create(): void;
    destroy(): void;
    enforceState(created: boolean): void;
}

/**
 * Represents a time value with hours and minutes.
 *
 * @publicApi
 */
export declare type Time = {
    hours: number;
    minutes: number;
};

/**
 * Transforms text to title case.
 * Capitalizes the first letter of each word and transforms the
 * rest of the word to lower case.
 * Words are delimited by any whitespace character, such as a space, tab, or line-feed character.
 *
 * @see `LowerCasePipe`
 * @see `UpperCasePipe`
 *
 * @usageNotes
 * The following example shows the result of transforming various strings into title case.
 *
 * <code-example path="common/pipes/ts/titlecase_pipe.ts" region='TitleCasePipe'></code-example>
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class TitleCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to title case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TitleCasePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TitleCasePipe, "titlecase">;
}

/**
 * String widths available for translations.
 * The specific character widths are locale-specific.
 * Examples are given for the word "Sunday" in English.
 *
 * @publicApi
 */
export declare enum TranslationWidth {
    /** 1 character for `en-US`. For example: 'S' */
    Narrow = 0,
    /** 3 characters for `en-US`. For example: 'Sun' */
    Abbreviated = 1,
    /** Full length for `en-US`. For example: "Sunday" */
    Wide = 2,
    /** 2 characters for `en-US`, For example: "Su" */
    Short = 3
}

/**
 * Transforms text to all upper case.
 * @see `LowerCasePipe`
 * @see `TitleCasePipe`
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class UpperCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to upper case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpperCasePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<UpperCasePipe, "uppercase">;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
 *
 * @publicApi
 */
export declare abstract class ViewportScroller {
    /** @nocollapse */
    static ɵprov: never;
    /**
     * Configures the top offset used when scrolling to an anchor.
     * @param offset A position in screen coordinates (a tuple with x and y values)
     * or a function that returns the top offset position.
     *
     */
    abstract setOffset(offset: [number, number] | (() => [number, number])): void;
    /**
     * Retrieves the current scroll position.
     * @returns A position in screen coordinates (a tuple with x and y values).
     */
    abstract getScrollPosition(): [number, number];
    /**
     * Scrolls to a specified position.
     * @param position A position in screen coordinates (a tuple with x and y values).
     */
    abstract scrollToPosition(position: [number, number]): void;
    /**
     * Scrolls to an anchor element.
     * @param anchor The ID of the anchor element.
     */
    abstract scrollToAnchor(anchor: string): void;
    /**
     * Disables automatic scroll restoration provided by the browser.
     * See also [window.history.scrollRestoration
     * info](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration).
     */
    abstract setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void;
}

/**
 * The value for each day of the week, based on the `en-US` locale
 *
 * @publicApi
 */
export declare enum WeekDay {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

export declare function ɵangular_packages_common_common_a(): ɵBrowserPlatformLocation;

export declare function ɵangular_packages_common_common_b(): ɵBrowserPlatformLocation;

export declare function ɵangular_packages_common_common_c(): Location;

export declare function ɵangular_packages_common_common_d(platformLocation: PlatformLocation): PathLocationStrategy;

/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 */
export declare const ɵangular_packages_common_common_e: Provider[];

/**
 * A collection of Angular pipes that are likely to be used in each and every application.
 */
export declare const ɵangular_packages_common_common_f: (typeof AsyncPipe | typeof SlicePipe | typeof DecimalPipe | typeof PercentPipe | typeof CurrencyPipe | typeof DatePipe | typeof I18nPluralPipe | typeof I18nSelectPipe | typeof KeyValuePipe)[];

/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 */
export declare class ɵBrowserPlatformLocation extends PlatformLocation {
    private _doc;
    readonly location: Location;
    private _history;
    constructor(_doc: any);
    getBaseHrefFromDOM(): string;
    onPopState(fn: LocationChangeListener): void;
    onHashChange(fn: LocationChangeListener): void;
    get href(): string;
    get protocol(): string;
    get hostname(): string;
    get port(): string;
    get pathname(): string;
    get search(): string;
    get hash(): string;
    set pathname(newPath: string);
    pushState(state: any, title: string, url: string): void;
    replaceState(state: any, title: string, url: string): void;
    forward(): void;
    back(): void;
    getState(): unknown;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵBrowserPlatformLocation, never>;
}

/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare abstract class ɵDomAdapter {
    abstract getProperty(el: Element, name: string): any;
    abstract dispatchEvent(el: any, evt: any): any;
    abstract log(error: any): any;
    abstract logGroup(error: any): any;
    abstract logGroupEnd(): any;
    abstract remove(el: any): Node;
    abstract createElement(tagName: any, doc?: any): HTMLElement;
    abstract createHtmlDocument(): HTMLDocument;
    abstract getDefaultDocument(): Document;
    abstract isElementNode(node: any): boolean;
    abstract isShadowRoot(node: any): boolean;
    abstract onAndCancel(el: any, evt: any, listener: any): Function;
    abstract supportsDOMEvents(): boolean;
    abstract getGlobalEventTarget(doc: Document, target: string): any;
    abstract getHistory(): History;
    abstract getLocation(): any; /** This is the ambient Location definition, NOT Location from @angular/common.  */
    abstract getBaseHref(doc: Document): string | null;
    abstract resetBaseElement(): void;
    abstract getUserAgent(): string;
    abstract performanceNow(): number;
    abstract supportsCookies(): boolean;
    abstract getCookie(name: string): string | null;
}


export declare function ɵgetDOM(): ɵDomAdapter;

/**
 * Provides an empty implementation of the viewport scroller. This will
 * live in @angular/common as it will be used by both platform-server and platform-webworker.
 */
export declare class ɵNullViewportScroller implements ViewportScroller {
    /**
     * Empty implementation
     */
    setOffset(offset: [number, number] | (() => [number, number])): void;
    /**
     * Empty implementation
     */
    getScrollPosition(): [number, number];
    /**
     * Empty implementation
     */
    scrollToPosition(position: [number, number]): void;
    /**
     * Empty implementation
     */
    scrollToAnchor(anchor: string): void;
    /**
     * Empty implementation
     */
    setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void;
}


export declare function ɵparseCookieValue(cookieStr: string, name: string): string | null;


export declare const ɵPLATFORM_BROWSER_ID = "browser";

export declare const ɵPLATFORM_SERVER_ID = "server";

export declare const ɵPLATFORM_WORKER_APP_ID = "browserWorkerApp";

export declare const ɵPLATFORM_WORKER_UI_ID = "browserWorkerUi";

export declare function ɵsetRootDomAdapter(adapter: ɵDomAdapter): void;

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmQudHMiLCJzb3VyY2VzIjpbImNvbW1vbi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4xLjEyXG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5VmFsdWVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nSXRlcmFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGVGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkxpa2UgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQSBwcmVkZWZpbmVkIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkjZGktdG9rZW4pIGZvciB0aGUgYmFzZSBocmVmXHJcbiAqIHRvIGJlIHVzZWQgd2l0aCB0aGUgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YC5cclxuICogVGhlIGJhc2UgaHJlZiBpcyB0aGUgVVJMIHByZWZpeCB0aGF0IHNob3VsZCBiZSBwcmVzZXJ2ZWQgd2hlbiBnZW5lcmF0aW5nXHJcbiAqIGFuZCByZWNvZ25pemluZyBVUkxzLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgaG93IHRvIHVzZSB0aGlzIHRva2VuIHRvIGNvbmZpZ3VyZSB0aGUgcm9vdCBhcHAgaW5qZWN0b3JcclxuICogd2l0aCBhIGJhc2UgaHJlZiB2YWx1ZSwgc28gdGhhdCB0aGUgREkgZnJhbWV3b3JrIGNhbiBzdXBwbHkgdGhlIGRlcGVuZGVuY3kgYW55d2hlcmUgaW4gdGhlIGFwcC5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQge0NvbXBvbmVudCwgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKiBpbXBvcnQge0FQUF9CQVNFX0hSRUZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiAnL215L2FwcCd9XVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEFQUF9CQVNFX0hSRUY6IEluamVjdGlvblRva2VuPHN0cmluZz47XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVW53cmFwcyBhIHZhbHVlIGZyb20gYW4gYXN5bmNocm9ub3VzIHByaW1pdGl2ZS5cclxuICpcclxuICogVGhlIGBhc3luY2AgcGlwZSBzdWJzY3JpYmVzIHRvIGFuIGBPYnNlcnZhYmxlYCBvciBgUHJvbWlzZWAgYW5kIHJldHVybnMgdGhlIGxhdGVzdCB2YWx1ZSBpdCBoYXNcclxuICogZW1pdHRlZC4gV2hlbiBhIG5ldyB2YWx1ZSBpcyBlbWl0dGVkLCB0aGUgYGFzeW5jYCBwaXBlIG1hcmtzIHRoZSBjb21wb25lbnQgdG8gYmUgY2hlY2tlZCBmb3JcclxuICogY2hhbmdlcy4gV2hlbiB0aGUgY29tcG9uZW50IGdldHMgZGVzdHJveWVkLCB0aGUgYGFzeW5jYCBwaXBlIHVuc3Vic2NyaWJlcyBhdXRvbWF0aWNhbGx5IHRvIGF2b2lkXHJcbiAqIHBvdGVudGlhbCBtZW1vcnkgbGVha3MuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlc1xyXG4gKlxyXG4gKiBUaGlzIGV4YW1wbGUgYmluZHMgYSBgUHJvbWlzZWAgdG8gdGhlIHZpZXcuIENsaWNraW5nIHRoZSBgUmVzb2x2ZWAgYnV0dG9uIHJlc29sdmVzIHRoZVxyXG4gKiBwcm9taXNlLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2FzeW5jX3BpcGUudHMgcmVnaW9uPSdBc3luY1BpcGVQcm9taXNlJ31cclxuICpcclxuICogSXQncyBhbHNvIHBvc3NpYmxlIHRvIHVzZSBgYXN5bmNgIHdpdGggT2JzZXJ2YWJsZXMuIFRoZSBleGFtcGxlIGJlbG93IGJpbmRzIHRoZSBgdGltZWAgT2JzZXJ2YWJsZVxyXG4gKiB0byB0aGUgdmlldy4gVGhlIE9ic2VydmFibGUgY29udGludW91c2x5IHVwZGF0ZXMgdGhlIHZpZXcgd2l0aCB0aGUgY3VycmVudCB0aW1lLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2FzeW5jX3BpcGUudHMgcmVnaW9uPSdBc3luY1BpcGVPYnNlcnZhYmxlJ31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXN5bmNQaXBlIGltcGxlbWVudHMgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHByaXZhdGUgX3JlZjtcclxuICAgIHByaXZhdGUgX2xhdGVzdFZhbHVlO1xyXG4gICAgcHJpdmF0ZSBfbGF0ZXN0UmV0dXJuZWRWYWx1ZTtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX29iajtcclxuICAgIHByaXZhdGUgX3N0cmF0ZWd5O1xyXG4gICAgY29uc3RydWN0b3IoX3JlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHRyYW5zZm9ybTxUPihvYmo6IG51bGwpOiBudWxsO1xyXG4gICAgdHJhbnNmb3JtPFQ+KG9iajogdW5kZWZpbmVkKTogdW5kZWZpbmVkO1xyXG4gICAgdHJhbnNmb3JtPFQ+KG9iajogT2JzZXJ2YWJsZTxUPiB8IG51bGwgfCB1bmRlZmluZWQpOiBUIHwgbnVsbDtcclxuICAgIHRyYW5zZm9ybTxUPihvYmo6IFByb21pc2U8VD4gfCBudWxsIHwgdW5kZWZpbmVkKTogVCB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpYmU7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RTdHJhdGVneTtcclxuICAgIHByaXZhdGUgX2Rpc3Bvc2U7XHJcbiAgICBwcml2YXRlIF91cGRhdGVMYXRlc3RWYWx1ZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHBvcnRzIGFsbCB0aGUgYmFzaWMgQW5ndWxhciBkaXJlY3RpdmVzIGFuZCBwaXBlcyxcclxuICogc3VjaCBhcyBgTmdJZmAsIGBOZ0Zvck9mYCwgYERlY2ltYWxQaXBlYCwgYW5kIHNvIG9uLlxyXG4gKiBSZS1leHBvcnRlZCBieSBgQnJvd3Nlck1vZHVsZWAsIHdoaWNoIGlzIGluY2x1ZGVkIGF1dG9tYXRpY2FsbHkgaW4gdGhlIHJvb3RcclxuICogYEFwcE1vZHVsZWAgd2hlbiB5b3UgY3JlYXRlIGEgbmV3IGFwcCB3aXRoIHRoZSBDTEkgYG5ld2AgY29tbWFuZC5cclxuICpcclxuICogKiBUaGUgYHByb3ZpZGVyc2Agb3B0aW9ucyBjb25maWd1cmUgdGhlIE5nTW9kdWxlJ3MgaW5qZWN0b3IgdG8gcHJvdmlkZVxyXG4gKiBsb2NhbGl6YXRpb24gZGVwZW5kZW5jaWVzIHRvIG1lbWJlcnMuXHJcbiAqICogVGhlIGBleHBvcnRzYCBvcHRpb25zIG1ha2UgdGhlIGRlY2xhcmVkIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIGF2YWlsYWJsZSBmb3IgaW1wb3J0XHJcbiAqIGJ5IG90aGVyIE5nTW9kdWxlcy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29tbW9uTW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFRyYW5zZm9ybXMgYSBudW1iZXIgdG8gYSBjdXJyZW5jeSBzdHJpbmcsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzXHJcbiAqIHRoYXQgZGV0ZXJtaW5lIGdyb3VwIHNpemluZyBhbmQgc2VwYXJhdG9yLCBkZWNpbWFsLXBvaW50IGNoYXJhY3RlcixcclxuICogYW5kIG90aGVyIGxvY2FsZS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucy5cclxuICpcclxuICoge0BhIGN1cnJlbmN5LWNvZGUtZGVwcmVjYXRpb259XHJcbiAqIDxkaXYgY2xhc3M9XCJhbGVydCBpcy1oZWxwZnVsXCI+XHJcbiAqXHJcbiAqICoqRGVwcmVjYXRpb24gbm90aWNlOioqXHJcbiAqXHJcbiAqIFRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgaXMgY3VycmVudGx5IGFsd2F5cyBgVVNEYCBidXQgdGhpcyBpcyBkZXByZWNhdGVkIGZyb20gdjkuXHJcbiAqXHJcbiAqICoqSW4gdjExIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgd2lsbCBiZSB0YWtlbiBmcm9tIHRoZSBjdXJyZW50IGxvY2FsZSBpZGVudGlmaWVkIGJ5XHJcbiAqIHRoZSBgTE9DQUxfSURgIHRva2VuLiBTZWUgdGhlIFtpMThuIGd1aWRlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkgZm9yXHJcbiAqIG1vcmUgaW5mb3JtYXRpb24uKipcclxuICpcclxuICogSWYgeW91IG5lZWQgdGhlIHByZXZpb3VzIGJlaGF2aW9yIHRoZW4gc2V0IGl0IGJ5IGNyZWF0aW5nIGEgYERFRkFVTFRfQ1VSUkVOQ1lfQ09ERWAgcHJvdmlkZXIgaW5cclxuICogeW91ciBhcHBsaWNhdGlvbiBgTmdNb2R1bGVgOlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiB7cHJvdmlkZTogREVGQVVMVF9DVVJSRU5DWV9DT0RFLCB1c2VWYWx1ZTogJ1VTRCd9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiA8L2Rpdj5cclxuICpcclxuICogQHNlZSBgZ2V0Q3VycmVuY3lTeW1ib2woKWBcclxuICogQHNlZSBgZm9ybWF0Q3VycmVuY3koKWBcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIGZvbGxvd2luZyBjb2RlIHNob3dzIGhvdyB0aGUgcGlwZSB0cmFuc2Zvcm1zIG51bWJlcnNcclxuICogaW50byB0ZXh0IHN0cmluZ3MsIGFjY29yZGluZyB0byB2YXJpb3VzIGZvcm1hdCBzcGVjaWZpY2F0aW9ucyxcclxuICogd2hlcmUgdGhlIGNhbGxlcidzIGRlZmF1bHQgbG9jYWxlIGlzIGBlbi1VU2AuXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy9jdXJyZW5jeV9waXBlLnRzXCIgcmVnaW9uPSdDdXJyZW5jeVBpcGUnPjwvY29kZS1leGFtcGxlPlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDdXJyZW5jeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHByaXZhdGUgX2xvY2FsZTtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDdXJyZW5jeUNvZGU7XHJcbiAgICBjb25zdHJ1Y3RvcihfbG9jYWxlOiBzdHJpbmcsIF9kZWZhdWx0Q3VycmVuY3lDb2RlPzogc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGJlIGZvcm1hdHRlZCBhcyBjdXJyZW5jeS5cclxuICAgICAqIEBwYXJhbSBjdXJyZW5jeUNvZGUgVGhlIFtJU08gNDIxN10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpIGN1cnJlbmN5IGNvZGUsXHJcbiAgICAgKiBzdWNoIGFzIGBVU0RgIGZvciB0aGUgVVMgZG9sbGFyIGFuZCBgRVVSYCBmb3IgdGhlIGV1cm8uIFRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgY2FuIGJlXHJcbiAgICAgKiBjb25maWd1cmVkIHVzaW5nIHRoZSBgREVGQVVMVF9DVVJSRU5DWV9DT0RFYCBpbmplY3Rpb24gdG9rZW4uXHJcbiAgICAgKiBAcGFyYW0gZGlzcGxheSBUaGUgZm9ybWF0IGZvciB0aGUgY3VycmVuY3kgaW5kaWNhdG9yLiBPbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICAgICAqICAgLSBgY29kZWA6IFNob3cgdGhlIGNvZGUgKHN1Y2ggYXMgYFVTRGApLlxyXG4gICAgICogICAtIGBzeW1ib2xgKGRlZmF1bHQpOiBTaG93IHRoZSBzeW1ib2wgKHN1Y2ggYXMgYCRgKS5cclxuICAgICAqICAgLSBgc3ltYm9sLW5hcnJvd2A6IFVzZSB0aGUgbmFycm93IHN5bWJvbCBmb3IgbG9jYWxlcyB0aGF0IGhhdmUgdHdvIHN5bWJvbHMgZm9yIHRoZWlyXHJcbiAgICAgKiBjdXJyZW5jeS5cclxuICAgICAqIEZvciBleGFtcGxlLCB0aGUgQ2FuYWRpYW4gZG9sbGFyIENBRCBoYXMgdGhlIHN5bWJvbCBgQ0EkYCBhbmQgdGhlIHN5bWJvbC1uYXJyb3cgYCRgLiBJZiB0aGVcclxuICAgICAqIGxvY2FsZSBoYXMgbm8gbmFycm93IHN5bWJvbCwgdXNlcyB0aGUgc3RhbmRhcmQgc3ltYm9sIGZvciB0aGUgbG9jYWxlLlxyXG4gICAgICogICAtIFN0cmluZzogVXNlIHRoZSBnaXZlbiBzdHJpbmcgdmFsdWUgaW5zdGVhZCBvZiBhIGNvZGUgb3IgYSBzeW1ib2wuXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgc3VwcHJlc3MgdGhlIGN1cnJlbmN5ICYgc3ltYm9sLlxyXG4gICAgICogICAtIEJvb2xlYW4gKG1hcmtlZCBkZXByZWNhdGVkIGluIHY1KTogYHRydWVgIGZvciBzeW1ib2wgYW5kIGZhbHNlIGZvciBgY29kZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRpZ2l0c0luZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmdcclxuICAgICAqIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0Ojxicj5cclxuICAgICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxyXG4gICAgICogICAtIGBtaW5JbnRlZ2VyRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDFgLlxyXG4gICAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAyYC5cclxuICAgICAqICAgLSBgbWF4RnJhY3Rpb25EaWdpdHNgOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgMmAuXHJcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIHRoZSBudW1iZXIgd2lsbCBiZSBmb3JtYXR0ZWQgd2l0aCB0aGUgcHJvcGVyIGFtb3VudCBvZiBkaWdpdHMsXHJcbiAgICAgKiBkZXBlbmRpbmcgb24gd2hhdCB0aGUgW0lTTyA0MjE3XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fNDIxNykgc3BlY2lmaWVzLlxyXG4gICAgICogRm9yIGV4YW1wbGUsIHRoZSBDYW5hZGlhbiBkb2xsYXIgaGFzIDIgZGlnaXRzLCB3aGVyZWFzIHRoZSBDaGlsZWFuIHBlc28gaGFzIG5vbmUuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxyXG4gICAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY3VycmVuY3lDb2RlPzogc3RyaW5nLCBkaXNwbGF5PzogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBzdHJpbmcgfCBib29sZWFuLCBkaWdpdHNJbmZvPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRm9ybWF0cyBhIGRhdGUgdmFsdWUgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cclxuICpcclxuICogT25seSB0aGUgYGVuLVVTYCBsb2NhbGUgZGF0YSBjb21lcyB3aXRoIEFuZ3VsYXIuIFRvIGxvY2FsaXplIGRhdGVzXHJcbiAqIGluIGFub3RoZXIgbGFuZ3VhZ2UsIHlvdSBtdXN0IGltcG9ydCB0aGUgY29ycmVzcG9uZGluZyBsb2NhbGUgZGF0YS5cclxuICogU2VlIHRoZSBbSTE4biBndWlkZV0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICpcclxuICogQHNlZSBgZm9ybWF0RGF0ZSgpYFxyXG4gKlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgcmVzdWx0IG9mIHRoaXMgcGlwZSBpcyBub3QgcmVldmFsdWF0ZWQgd2hlbiB0aGUgaW5wdXQgaXMgbXV0YXRlZC4gVG8gYXZvaWQgdGhlIG5lZWQgdG9cclxuICogcmVmb3JtYXQgdGhlIGRhdGUgb24gZXZlcnkgY2hhbmdlLWRldGVjdGlvbiBjeWNsZSwgdHJlYXQgdGhlIGRhdGUgYXMgYW4gaW1tdXRhYmxlIG9iamVjdFxyXG4gKiBhbmQgY2hhbmdlIHRoZSByZWZlcmVuY2Ugd2hlbiB0aGUgcGlwZSBuZWVkcyB0byBydW4gYWdhaW4uXHJcbiAqXHJcbiAqICMjIyBQcmUtZGVmaW5lZCBmb3JtYXQgb3B0aW9uc1xyXG4gKlxyXG4gKiBFeGFtcGxlcyBhcmUgZ2l2ZW4gaW4gYGVuLVVTYCBsb2NhbGUuXHJcbiAqXHJcbiAqIC0gYCdzaG9ydCdgOiBlcXVpdmFsZW50IHRvIGAnTS9kL3l5LCBoOm1tIGEnYCAoYDYvMTUvMTUsIDk6MDMgQU1gKS5cclxuICogLSBgJ21lZGl1bSdgOiBlcXVpdmFsZW50IHRvIGAnTU1NIGQsIHksIGg6bW06c3MgYSdgIChgSnVuIDE1LCAyMDE1LCA5OjAzOjAxIEFNYCkuXHJcbiAqIC0gYCdsb25nJ2A6IGVxdWl2YWxlbnQgdG8gYCdNTU1NIGQsIHksIGg6bW06c3MgYSB6J2AgKGBKdW5lIDE1LCAyMDE1IGF0IDk6MDM6MDEgQU1cclxuICogR01UKzFgKS5cclxuICogLSBgJ2Z1bGwnYDogZXF1aXZhbGVudCB0byBgJ0VFRUUsIE1NTU0gZCwgeSwgaDptbTpzcyBhIHp6enonYCAoYE1vbmRheSwgSnVuZSAxNSwgMjAxNSBhdFxyXG4gKiA5OjAzOjAxIEFNIEdNVCswMTowMGApLlxyXG4gKiAtIGAnc2hvcnREYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdNL2QveXknYCAoYDYvMTUvMTVgKS5cclxuICogLSBgJ21lZGl1bURhdGUnYDogZXF1aXZhbGVudCB0byBgJ01NTSBkLCB5J2AgKGBKdW4gMTUsIDIwMTVgKS5cclxuICogLSBgJ2xvbmdEYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdNTU1NIGQsIHknYCAoYEp1bmUgMTUsIDIwMTVgKS5cclxuICogLSBgJ2Z1bGxEYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdFRUVFLCBNTU1NIGQsIHknYCAoYE1vbmRheSwgSnVuZSAxNSwgMjAxNWApLlxyXG4gKiAtIGAnc2hvcnRUaW1lJ2A6IGVxdWl2YWxlbnQgdG8gYCdoOm1tIGEnYCAoYDk6MDMgQU1gKS5cclxuICogLSBgJ21lZGl1bVRpbWUnYDogZXF1aXZhbGVudCB0byBgJ2g6bW06c3MgYSdgIChgOTowMzowMSBBTWApLlxyXG4gKiAtIGAnbG9uZ1RpbWUnYDogZXF1aXZhbGVudCB0byBgJ2g6bW06c3MgYSB6J2AgKGA5OjAzOjAxIEFNIEdNVCsxYCkuXHJcbiAqIC0gYCdmdWxsVGltZSdgOiBlcXVpdmFsZW50IHRvIGAnaDptbTpzcyBhIHp6enonYCAoYDk6MDM6MDEgQU0gR01UKzAxOjAwYCkuXHJcbiAqXHJcbiAqICMjIyBDdXN0b20gZm9ybWF0IG9wdGlvbnNcclxuICpcclxuICogWW91IGNhbiBjb25zdHJ1Y3QgYSBmb3JtYXQgc3RyaW5nIHVzaW5nIHN5bWJvbHMgdG8gc3BlY2lmeSB0aGUgY29tcG9uZW50c1xyXG4gKiBvZiBhIGRhdGUtdGltZSB2YWx1ZSwgYXMgZGVzY3JpYmVkIGluIHRoZSBmb2xsb3dpbmcgdGFibGUuXHJcbiAqIEZvcm1hdCBkZXRhaWxzIGRlcGVuZCBvbiB0aGUgbG9jYWxlLlxyXG4gKiBGaWVsZHMgbWFya2VkIHdpdGggKCopIGFyZSBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgZXh0cmEgZGF0YSBzZXQgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqICB8IEZpZWxkIHR5cGUgICAgICAgICB8IEZvcm1hdCAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEV4YW1wbGUgVmFsdWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcclxuICogIHwgRXJhICAgICAgICAgICAgICAgIHwgRywgR0cgJiBHR0cgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQUQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEFubm8gRG9taW5pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBBICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgWWVhciAgICAgICAgICAgICAgIHwgeSAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiwgMjAsIDIwMSwgMjAxNywgMjAxNzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAyLCAyMCwgMDEsIDE3LCA3MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgICAgICB8IE51bWVyaWM6IDMgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMDIsIDAyMCwgMjAxLCAyMDE3LCAyMDE3MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICAgICAgfCBOdW1lcmljOiA0IGRpZ2l0cyBvciBtb3JlICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgIHwgMDAwMiwgMDAyMCwgMDIwMSwgMjAxNywgMjAxNzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IE1vbnRoICAgICAgICAgICAgICB8IE0gICAgICAgICAgIHwgTnVtZXJpYzogMSBkaWdpdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDksIDEyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwOSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICAgICAgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU2VwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNlcHRlbWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgTW9udGggc3RhbmRhbG9uZSAgIHwgTCAgICAgICAgICAgfCBOdW1lcmljOiAxIGRpZ2l0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgOSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDA5LCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgICAgICB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTZXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU2VwdGVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBXZWVrIG9mIHllYXIgICAgICAgfCB3ICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxLi4uIDUzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDEuLi4gNTMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IFdlZWsgb2YgbW9udGggICAgICB8IFcgICAgICAgICAgIHwgTnVtZXJpYzogMSBkaWdpdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEuLi4gNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBEYXkgb2YgbW9udGggICAgICAgfCBkICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBXZWVrIGRheSAgICAgICAgICAgfCBFLCBFRSAmIEVFRSB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUdWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVHVlc2RheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgICAgICB8IFNob3J0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUdSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgUGVyaW9kICAgICAgICAgICAgIHwgYSwgYWEgJiBhYWEgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYW0vcG0gb3IgQU0vUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgICAgIHwgV2lkZSAoZmFsbGJhY2sgdG8gYGFgIHdoZW4gbWlzc2luZykgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFudGUgbWVyaWRpZW0vcG9zdCBtZXJpZGllbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhL3AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgUGVyaW9kKiAgICAgICAgICAgIHwgQiwgQkIgJiBCQkIgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbWlkLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFtLCBwbSwgbWlkbmlnaHQsIG5vb24sIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgbmlnaHQgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgUGVyaW9kIHN0YW5kYWxvbmUqIHwgYiwgYmIgJiBiYmIgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbWlkLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFtLCBwbSwgbWlkbmlnaHQsIG5vb24sIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgbmlnaHQgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgSG91ciAxLTEyICAgICAgICAgIHwgaCAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAxLCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBIb3VyIDAtMjMgICAgICAgICAgfCBIICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwLCAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDAsIDIzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IE1pbnV0ZSAgICAgICAgICAgICB8IG0gICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDgsIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwOCwgNTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgU2Vjb25kICAgICAgICAgICAgIHwgcyAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMC4uLiA1OSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAwLi4uIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBGcmFjdGlvbmFsIHNlY29uZHMgfCBTICAgICAgICAgICB8IE51bWVyaWM6IDEgZGlnaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwLi4uIDkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDAuLi4gOTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgICAgIHwgTnVtZXJpYzogMyBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAoPSBtaWxsaXNlY29uZHMpICAgICAgICAgICAgICB8IDAwMC4uLiA5OTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBab25lICAgICAgICAgICAgICAgfCB6LCB6eiAmIHp6eiB8IFNob3J0IHNwZWNpZmljIG5vbiBsb2NhdGlvbiBmb3JtYXQgKGZhbGxiYWNrIHRvIE8pICAgICAgICAgICAgfCBHTVQtOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICAgICAgfCBMb25nIHNwZWNpZmljIG5vbiBsb2NhdGlvbiBmb3JtYXQgKGZhbGxiYWNrIHRvIE9PT08pICAgICAgICAgIHwgR01ULTA4OjAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IFosIFpaICYgWlpaIHwgSVNPODYwMSBiYXNpYyBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IC0wODAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBaWlpaICAgICAgICB8IExvbmcgbG9jYWxpemVkIEdNVCBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHTVQtODowMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgWlpaWlogICAgICAgfCBJU084NjAxIGV4dGVuZGVkIGZvcm1hdCArIFogaW5kaWNhdG9yIGZvciBvZmZzZXQgMCAoPSBYWFhYWCkgIHwgLTA4OjAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE8sIE9PICYgT09PIHwgU2hvcnQgbG9jYWxpemVkIEdNVCBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdNVC04ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgICAgICB8IExvbmcgbG9jYWxpemVkIEdNVCBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHTVQtMDg6MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICpcclxuICogTm90ZSB0aGF0IHRpbWV6b25lIGNvcnJlY3Rpb24gaXMgbm90IGFwcGxpZWQgdG8gYW4gSVNPIHN0cmluZyB0aGF0IGhhcyBubyB0aW1lIGNvbXBvbmVudCwgc3VjaCBhcyBcIjIwMTYtMDktMTlcIlxyXG4gKlxyXG4gKiAjIyMgRm9ybWF0IGV4YW1wbGVzXHJcbiAqXHJcbiAqIFRoZXNlIGV4YW1wbGVzIHRyYW5zZm9ybSBhIGRhdGUgaW50byB2YXJpb3VzIGZvcm1hdHMsXHJcbiAqIGFzc3VtaW5nIHRoYXQgYGRhdGVPYmpgIGlzIGEgSmF2YVNjcmlwdCBgRGF0ZWAgb2JqZWN0IGZvclxyXG4gKiB5ZWFyOiAyMDE1LCBtb250aDogNiwgZGF5OiAxNSwgaG91cjogMjEsIG1pbnV0ZTogNDMsIHNlY29uZDogMTEsXHJcbiAqIGdpdmVuIGluIHRoZSBsb2NhbCB0aW1lIGZvciB0aGUgYGVuLVVTYCBsb2NhbGUuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZSB9fSAgICAgICAgICAgICAgIC8vIG91dHB1dCBpcyAnSnVuIDE1LCAyMDE1J1xyXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZTonbWVkaXVtJyB9fSAgICAgIC8vIG91dHB1dCBpcyAnSnVuIDE1LCAyMDE1LCA5OjQzOjExIFBNJ1xyXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZTonc2hvcnRUaW1lJyB9fSAgIC8vIG91dHB1dCBpcyAnOTo0MyBQTSdcclxuICoge3sgZGF0ZU9iaiB8IGRhdGU6J21tOnNzJyB9fSAgICAgICAvLyBvdXRwdXQgaXMgJzQzOjExJ1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFVzYWdlIGV4YW1wbGVcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBjb21wb25lbnQgdXNlcyBhIGRhdGUgcGlwZSB0byBkaXNwbGF5IHRoZSBjdXJyZW50IGRhdGUgaW4gZGlmZmVyZW50IGZvcm1hdHMuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogIHNlbGVjdG9yOiAnZGF0ZS1waXBlJyxcclxuICogIHRlbXBsYXRlOiBgPGRpdj5cclxuICogICAgPHA+VG9kYXkgaXMge3t0b2RheSB8IGRhdGV9fTwvcD5cclxuICogICAgPHA+T3IgaWYgeW91IHByZWZlciwge3t0b2RheSB8IGRhdGU6J2Z1bGxEYXRlJ319PC9wPlxyXG4gKiAgICA8cD5UaGUgdGltZSBpcyB7e3RvZGF5IHwgZGF0ZTonaDptbSBhIHonfX08L3A+XHJcbiAqICA8L2Rpdj5gXHJcbiAqIH0pXHJcbiAqIC8vIEdldCB0aGUgY3VycmVudCBkYXRlIGFuZCB0aW1lIGFzIGEgZGF0ZS10aW1lIHZhbHVlLlxyXG4gKiBleHBvcnQgY2xhc3MgRGF0ZVBpcGVDb21wb25lbnQge1xyXG4gKiAgIHRvZGF5OiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBsb2NhbGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGU6IHN0cmluZyk7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZGF0ZSBleHByZXNzaW9uOiBhIGBEYXRlYCBvYmplY3QsICBhIG51bWJlclxyXG4gICAgICogKG1pbGxpc2Vjb25kcyBzaW5jZSBVVEMgZXBvY2gpLCBvciBhbiBJU08gc3RyaW5nIChodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZSkuXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFRoZSBkYXRlL3RpbWUgY29tcG9uZW50cyB0byBpbmNsdWRlLCB1c2luZyBwcmVkZWZpbmVkIG9wdGlvbnMgb3IgYVxyXG4gICAgICogY3VzdG9tIGZvcm1hdCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdGltZXpvbmUgQSB0aW1lem9uZSBvZmZzZXQgKHN1Y2ggYXMgYCcrMDQzMCdgKSwgb3IgYSBzdGFuZGFyZFxyXG4gICAgICogVVRDL0dNVCBvciBjb250aW5lbnRhbCBVUyB0aW1lem9uZSBhYmJyZXZpYXRpb24uXHJcbiAgICAgKiBXaGVuIG5vdCBzdXBwbGllZCwgdXNlcyB0aGUgZW5kLXVzZXIncyBsb2NhbCBzeXN0ZW0gdGltZXpvbmUuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxyXG4gICAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxyXG4gICAgICogQHJldHVybnMgQSBkYXRlIHN0cmluZyBpbiB0aGUgZGVzaXJlZCBmb3JtYXQuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVHJhbnNmb3JtcyBhIG51bWJlciBpbnRvIGEgc3RyaW5nLFxyXG4gKiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcyB0aGF0IGRldGVybWluZSBncm91cCBzaXppbmcgYW5kXHJcbiAqIHNlcGFyYXRvciwgZGVjaW1hbC1wb2ludCBjaGFyYWN0ZXIsIGFuZCBvdGhlciBsb2NhbGUtc3BlY2lmaWNcclxuICogY29uZmlndXJhdGlvbnMuXHJcbiAqXHJcbiAqIElmIG5vIHBhcmFtZXRlcnMgYXJlIHNwZWNpZmllZCwgdGhlIGZ1bmN0aW9uIHJvdW5kcyBvZmYgdG8gdGhlIG5lYXJlc3QgdmFsdWUgdXNpbmcgdGhpc1xyXG4gKiBbcm91bmRpbmcgbWV0aG9kXShodHRwczovL2VuLndpa2lib29rcy5vcmcvd2lraS9Bcml0aG1ldGljL1JvdW5kaW5nKS5cclxuICogVGhlIGJlaGF2aW9yIGRpZmZlcnMgZnJvbSB0aGF0IG9mIHRoZSBKYXZhU2NyaXB0IGBgYE1hdGgucm91bmQoKWBgYCBmdW5jdGlvbi5cclxuICogSW4gdGhlIGZvbGxvd2luZyBjYXNlIGZvciBleGFtcGxlLCB0aGUgcGlwZSByb3VuZHMgZG93biB3aGVyZVxyXG4gKiBgYGBNYXRoLnJvdW5kKClgYGAgcm91bmRzIHVwOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIC0yLjUgfCBudW1iZXI6JzEuMC0wJ1xyXG4gKiA+IC0zXHJcbiAqIE1hdGgucm91bmQoLTIuNSlcclxuICogPiAtMlxyXG4gKiBgYGBcclxuICpcclxuICogQHNlZSBgZm9ybWF0TnVtYmVyKClgXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBzaG93cyBob3cgdGhlIHBpcGUgdHJhbnNmb3JtcyBudW1iZXJzXHJcbiAqIGludG8gdGV4dCBzdHJpbmdzLCBhY2NvcmRpbmcgdG8gdmFyaW91cyBmb3JtYXQgc3BlY2lmaWNhdGlvbnMsXHJcbiAqIHdoZXJlIHRoZSBjYWxsZXIncyBkZWZhdWx0IGxvY2FsZSBpcyBgZW4tVVNgLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb21tb24vcGlwZXMvdHMvbnVtYmVyX3BpcGUudHNcIiByZWdpb249J051bWJlclBpcGUnPjwvY29kZS1leGFtcGxlPlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWNpbWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxlO1xyXG4gICAgY29uc3RydWN0b3IoX2xvY2FsZTogc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkLlxyXG4gICAgICogQHBhcmFtIGRpZ2l0c0luZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmdcclxuICAgICAqIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0Ojxicj5cclxuICAgICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxyXG4gICAgICogICAtIGBtaW5JbnRlZ2VyRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDFgLlxyXG4gICAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAwYC5cclxuICAgICAqICAgLSBgbWF4RnJhY3Rpb25EaWdpdHNgOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgM2AuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxyXG4gICAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGlnaXRzSW5mbz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgREkgVG9rZW4gcmVwcmVzZW50aW5nIHRoZSBtYWluIHJlbmRlcmluZyBjb250ZXh0LiBJbiBhIGJyb3dzZXIgdGhpcyBpcyB0aGUgRE9NIERvY3VtZW50LlxyXG4gKlxyXG4gKiBOb3RlOiBEb2N1bWVudCBtaWdodCBub3QgYmUgYXZhaWxhYmxlIGluIHRoZSBBcHBsaWNhdGlvbiBDb250ZXh0IHdoZW4gQXBwbGljYXRpb24gYW5kIFJlbmRlcmluZ1xyXG4gKiBDb250ZXh0cyBhcmUgbm90IHRoZSBzYW1lIChlLmcuIHdoZW4gcnVubmluZyB0aGUgYXBwbGljYXRpb24gaW4gYSBXZWIgV29ya2VyKS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgRE9DVU1FTlQ6IEluamVjdGlvblRva2VuPERvY3VtZW50PjtcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIGN1cnJlbmN5IHVzaW5nIGxvY2FsZSBydWxlcy5cclxuICpcclxuICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gZm9ybWF0LlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIGN1cnJlbmN5IEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGN1cnJlbmN5IHN5bWJvbCBvciBpdHMgbmFtZSxcclxuICogc3VjaCBhcyBcIiRcIiBvciBcIkNhbmFkaWFuIERvbGxhclwiLiBVc2VkIGluIG91dHB1dCBzdHJpbmcsIGJ1dCBkb2VzIG5vdCBhZmZlY3QgdGhlIG9wZXJhdGlvblxyXG4gKiBvZiB0aGUgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBjdXJyZW5jeUNvZGUgVGhlIFtJU08gNDIxN10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpXHJcbiAqIGN1cnJlbmN5IGNvZGUsIHN1Y2ggYXMgYFVTRGAgZm9yIHRoZSBVUyBkb2xsYXIgYW5kIGBFVVJgIGZvciB0aGUgZXVyby5cclxuICogVXNlZCB0byBkZXRlcm1pbmUgdGhlIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGRlY2ltYWwgcGFydC5cclxuICogQHBhcmFtIGRpZ2l0SW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuICogYHttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c31gLiBTZWUgYERlY2ltYWxQaXBlYCBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGN1cnJlbmN5IHZhbHVlLlxyXG4gKlxyXG4gKiBAc2VlIGBmb3JtYXROdW1iZXIoKWBcclxuICogQHNlZSBgRGVjaW1hbFBpcGVgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlOiBudW1iZXIsIGxvY2FsZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBjdXJyZW5jeUNvZGU/OiBzdHJpbmcsIGRpZ2l0c0luZm8/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRm9ybWF0cyBhIGRhdGUgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cclxuICpcclxuICogQHBhcmFtIHZhbHVlIFRoZSBkYXRlIHRvIGZvcm1hdCwgYXMgYSBEYXRlLCBvciBhIG51bWJlciAobWlsbGlzZWNvbmRzIHNpbmNlIFVUQyBlcG9jaClcclxuICogb3IgYW4gW0lTTyBkYXRlLXRpbWUgc3RyaW5nXShodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZSkuXHJcbiAqIEBwYXJhbSBmb3JtYXQgVGhlIGRhdGUtdGltZSBjb21wb25lbnRzIHRvIGluY2x1ZGUuIFNlZSBgRGF0ZVBpcGVgIGZvciBkZXRhaWxzLlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIHRpbWV6b25lIFRoZSB0aW1lIHpvbmUuIEEgdGltZSB6b25lIG9mZnNldCBmcm9tIEdNVCAoc3VjaCBhcyBgJyswNDMwJ2ApLFxyXG4gKiBvciBhIHN0YW5kYXJkIFVUQy9HTVQgb3IgY29udGluZW50YWwgVVMgdGltZSB6b25lIGFiYnJldmlhdGlvbi5cclxuICogSWYgbm90IHNwZWNpZmllZCwgdXNlcyBob3N0IHN5c3RlbSBzZXR0aW5ncy5cclxuICpcclxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZy5cclxuICpcclxuICogQHNlZSBgRGF0ZVBpcGVgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZvcm1hdERhdGUodmFsdWU6IHN0cmluZyB8IG51bWJlciB8IERhdGUsIGZvcm1hdDogc3RyaW5nLCBsb2NhbGU6IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRm9ybWF0cyBhIG51bWJlciBhcyB0ZXh0LCB3aXRoIGdyb3VwIHNpemluZywgc2VwYXJhdG9yLCBhbmQgb3RoZXJcclxuICogcGFyYW1ldGVycyBiYXNlZCBvbiB0aGUgbG9jYWxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBmb3JtYXQuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZGlnaXRJbmZvIERlY2ltYWwgcmVwcmVzZW50YXRpb24gb3B0aW9ucywgc3BlY2lmaWVkIGJ5IGEgc3RyaW5nIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBge21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfWAuIFNlZSBgRGVjaW1hbFBpcGVgIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgdGV4dCBzdHJpbmcuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZvcm1hdE51bWJlcih2YWx1ZTogbnVtYmVyLCBsb2NhbGU6IHN0cmluZywgZGlnaXRzSW5mbz86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgcGVyY2VudGFnZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBmb3JtYXQuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZGlnaXRJbmZvIERlY2ltYWwgcmVwcmVzZW50YXRpb24gb3B0aW9ucywgc3BlY2lmaWVkIGJ5IGEgc3RyaW5nIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBge21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfWAuIFNlZSBgRGVjaW1hbFBpcGVgIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgcGVyY2VudGFnZSB2YWx1ZS5cclxuICpcclxuICogQHNlZSBgZm9ybWF0TnVtYmVyKClgXHJcbiAqIEBzZWUgYERlY2ltYWxQaXBlYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKiBAcHVibGljQXBpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBmb3JtYXRQZXJjZW50KHZhbHVlOiBudW1iZXIsIGxvY2FsZTogc3RyaW5nLCBkaWdpdHNJbmZvPzogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFN0cmluZyB3aWR0aHMgYXZhaWxhYmxlIGZvciBkYXRlLXRpbWUgZm9ybWF0cy5cclxuICogVGhlIHNwZWNpZmljIGNoYXJhY3RlciB3aWR0aHMgYXJlIGxvY2FsZS1zcGVjaWZpYy5cclxuICogRXhhbXBsZXMgYXJlIGdpdmVuIGZvciBgZW4tVVNgLlxyXG4gKlxyXG4gKiBAc2VlIGBnZXRMb2NhbGVEYXRlRm9ybWF0KClgXHJcbiAqIEBzZWUgYGdldExvY2FsZVRpbWVGb3JtYXQoKWBgXHJcbiAqIEBzZWUgYGdldExvY2FsZURhdGVUaW1lRm9ybWF0KClgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gRm9ybWF0V2lkdGgge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgYGVuLVVTYCwgJ00vZC95eSwgaDptbSBhJ2BcclxuICAgICAqIChFeGFtcGxlOiBgNi8xNS8xNSwgOTowMyBBTWApXHJcbiAgICAgKi9cclxuICAgIFNob3J0ID0gMCxcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGBlbi1VU2AsIGAnTU1NIGQsIHksIGg6bW06c3MgYSdgXHJcbiAgICAgKiAoRXhhbXBsZTogYEp1biAxNSwgMjAxNSwgOTowMzowMSBBTWApXHJcbiAgICAgKi9cclxuICAgIE1lZGl1bSA9IDEsXHJcbiAgICAvKipcclxuICAgICAqIEZvciBgZW4tVVNgLCBgJ01NTU0gZCwgeSwgaDptbTpzcyBhIHonYFxyXG4gICAgICogKEV4YW1wbGU6IGBKdW5lIDE1LCAyMDE1IGF0IDk6MDM6MDEgQU0gR01UKzFgKVxyXG4gICAgICovXHJcbiAgICBMb25nID0gMixcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGBlbi1VU2AsIGAnRUVFRSwgTU1NTSBkLCB5LCBoOm1tOnNzIGEgenp6eidgXHJcbiAgICAgKiAoRXhhbXBsZTogYE1vbmRheSwgSnVuZSAxNSwgMjAxNSBhdCA5OjAzOjAxIEFNIEdNVCswMTowMGApXHJcbiAgICAgKi9cclxuICAgIEZ1bGwgPSAzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250ZXh0LWRlcGVuZGFudCB0cmFuc2xhdGlvbiBmb3JtcyBmb3Igc3RyaW5ncy5cclxuICogVHlwaWNhbGx5IHRoZSBzdGFuZGFsb25lIHZlcnNpb24gaXMgZm9yIHRoZSBub21pbmF0aXZlIGZvcm0gb2YgdGhlIHdvcmQsXHJcbiAqIGFuZCB0aGUgZm9ybWF0IHZlcnNpb24gaXMgdXNlZCBmb3IgdGhlIGdlbml0aXZlIGNhc2UuXHJcbiAqIEBzZWUgW0NMRFIgd2Vic2l0ZV0oaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lLTEvZGF0ZS10aW1lI1RPQy1TdGFuZGFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzKVxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBlbnVtIEZvcm1TdHlsZSB7XHJcbiAgICBGb3JtYXQgPSAwLFxyXG4gICAgU3RhbmRhbG9uZSA9IDFcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgY3VycmVuY3kgc3ltYm9sIGZvciBhIGdpdmVuIGN1cnJlbmN5IGNvZGUuXHJcbiAqXHJcbiAqIEZvciBleGFtcGxlLCBmb3IgdGhlIGRlZmF1bHQgYGVuLVVTYCBsb2NhbGUsIHRoZSBjb2RlIGBVU0RgIGNhblxyXG4gKiBiZSByZXByZXNlbnRlZCBieSB0aGUgbmFycm93IHN5bWJvbCBgJGAgb3IgdGhlIHdpZGUgc3ltYm9sIGBVUyRgLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29kZSBUaGUgY3VycmVuY3kgY29kZS5cclxuICogQHBhcmFtIGZvcm1hdCBUaGUgZm9ybWF0LCBgd2lkZWAgb3IgYG5hcnJvd2AuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgc3ltYm9sLCBvciB0aGUgY3VycmVuY3kgY29kZSBpZiBubyBzeW1ib2wgaXMgYXZhaWxhYmxlLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRDdXJyZW5jeVN5bWJvbChjb2RlOiBzdHJpbmcsIGZvcm1hdDogJ3dpZGUnIHwgJ25hcnJvdycsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIGRlZmF1bHQgY3VycmVuY3kgY29kZSBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cclxuICpcclxuICogVGhlIGRlZmF1bHQgaXMgZGVmaW5lZCBhcyB0aGUgZmlyc3QgY3VycmVuY3kgd2hpY2ggaXMgc3RpbGwgaW4gdXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIFRoZSBjb2RlIG9mIHRoZSBsb2NhbGUgd2hvc2UgY3VycmVuY3kgY29kZSB3ZSB3YW50LlxyXG4gKiBAcmV0dXJucyBUaGUgY29kZSBvZiB0aGUgZGVmYXVsdCBjdXJyZW5jeSBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlQ3VycmVuY3lDb2RlKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbmN5IGZvciB0aGUgbWFpbiBjb3VudHJ5IGNvcnJlc3BvbmRpbmdcclxuICogdG8gYSBnaXZlbiBsb2NhbGUuIEZvciBleGFtcGxlLCAnVVMgRG9sbGFyJyBmb3IgYGVuLVVTYC5cclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEByZXR1cm5zIFRoZSBjdXJyZW5jeSBuYW1lLFxyXG4gKiBvciBgbnVsbGAgaWYgdGhlIG1haW4gY291bnRyeSBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlQ3VycmVuY3lOYW1lKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIHN5bWJvbCB1c2VkIHRvIHJlcHJlc2VudCB0aGUgY3VycmVuY3kgZm9yIHRoZSBtYWluIGNvdW50cnlcclxuICogY29ycmVzcG9uZGluZyB0byBhIGdpdmVuIGxvY2FsZS4gRm9yIGV4YW1wbGUsICckJyBmb3IgYGVuLVVTYC5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgc3ltYm9sIGNoYXJhY3RlcixcclxuICogb3IgYG51bGxgIGlmIHRoZSBtYWluIGNvdW50cnkgY2Fubm90IGJlIGRldGVybWluZWQuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUN1cnJlbmN5U3ltYm9sKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSBsb2NhbGl6ZWQgZGF0ZS12YWx1ZSBmb3JtYXRpbmcgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSBmb3JtYXQgdHlwZS5cclxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBmb3JtYXRpbmcgc3RyaW5nLlxyXG4gKiBAc2VlIGBGb3JtYXRXaWR0aGBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRGF0ZUZvcm1hdChsb2NhbGU6IHN0cmluZywgd2lkdGg6IEZvcm1hdFdpZHRoKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIGxvY2FsaXplZCBkYXRlLXRpbWUgZm9ybWF0dGluZyBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIGZvcm1hdCB0eXBlLlxyXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxpemVkIGZvcm1hdHRpbmcgc3RyaW5nLlxyXG4gKiBAc2VlIGBGb3JtYXRXaWR0aGBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQobG9jYWxlOiBzdHJpbmcsIHdpZHRoOiBGb3JtYXRXaWR0aCk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgZGF5cyBvZiB0aGUgd2VlayBmb3IgdGhlIGdpdmVuIGxvY2FsZSwgdXNpbmcgdGhlIEdyZWdvcmlhbiBjYWxlbmRhci5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSBmb3JtU3R5bGUgVGhlIHJlcXVpcmVkIGdyYW1tYXRpY2FsIGZvcm0uXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBsb2NhbGl6ZWQgbmFtZSBzdHJpbmdzLlxyXG4gKiBGb3IgZXhhbXBsZSxgW1N1bmRheSwgTW9uZGF5LCAuLi4gU2F0dXJkYXldYCBmb3IgYGVuLVVTYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRGF5TmFtZXMobG9jYWxlOiBzdHJpbmcsIGZvcm1TdHlsZTogRm9ybVN0eWxlLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCk6IHN0cmluZ1tdO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBkYXkgcGVyaW9kIHN0cmluZ3MgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZm9ybVN0eWxlIFRoZSByZXF1aXJlZCBncmFtbWF0aWNhbCBmb3JtLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIHJlcXVpcmVkIGNoYXJhY3RlciB3aWR0aC5cclxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbG9jYWxpemVkIHBlcmlvZCBzdHJpbmdzLiBGb3IgZXhhbXBsZSwgYFtBTSwgUE1dYCBmb3IgYGVuLVVTYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRGF5UGVyaW9kcyhsb2NhbGU6IHN0cmluZywgZm9ybVN0eWxlOiBGb3JtU3R5bGUsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoKTogW3N0cmluZywgc3RyaW5nXTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIHdyaXRpbmcgZGlyZWN0aW9uIG9mIGEgc3BlY2lmaWVkIGxvY2FsZVxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHB1YmxpY0FwaVxyXG4gKiBAcmV0dXJucyAncnRsJyBvciAnbHRyJ1xyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRGlyZWN0aW9uKGxvY2FsZTogc3RyaW5nKTogJ2x0cicgfCAncnRsJztcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgR3JlZ29yaWFuLWNhbGVuZGFyIGVyYXMgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZm9ybVN0eWxlIFRoZSByZXF1aXJlZCBncmFtbWF0aWNhbCBmb3JtLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIHJlcXVpcmVkIGNoYXJhY3RlciB3aWR0aC5cclxuXHJcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGxvY2FsaXplZCBlcmEgc3RyaW5ncy5cclxuICogRm9yIGV4YW1wbGUsIGBbQUQsIEJDXWAgZm9yIGBlbi1VU2AuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUVyYU5hbWVzKGxvY2FsZTogc3RyaW5nLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCk6IFtzdHJpbmcsIHN0cmluZ107XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGxvY2FsZS1zcGVjaWZpYyBydWxlcyB1c2VkIHRvIGRldGVybWluZSB3aGljaCBkYXkgcGVyaW9kIHRvIHVzZVxyXG4gKiB3aGVuIG1vcmUgdGhhbiBvbmUgcGVyaW9kIGlzIGRlZmluZWQgZm9yIGEgbG9jYWxlLlxyXG4gKlxyXG4gKiBUaGVyZSBpcyBhIHJ1bGUgZm9yIGVhY2ggZGVmaW5lZCBkYXkgcGVyaW9kLiBUaGVcclxuICogZmlyc3QgcnVsZSBpcyBhcHBsaWVkIHRvIHRoZSBmaXJzdCBkYXkgcGVyaW9kIGFuZCBzbyBvbi5cclxuICogRmFsbCBiYWNrIHRvIEFNL1BNIHdoZW4gbm8gcnVsZXMgYXJlIGF2YWlsYWJsZS5cclxuICpcclxuICogQSBydWxlIGNhbiBzcGVjaWZ5IGEgcGVyaW9kIGFzIHRpbWUgcmFuZ2UsIG9yIGFzIGEgc2luZ2xlIHRpbWUgdmFsdWUuXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb25hbGl0eSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHlvdSBoYXZlIGxvYWRlZCB0aGUgZnVsbCBsb2NhbGUgZGF0YS5cclxuICogU2VlIHRoZSBbXCJJMThuIGd1aWRlXCJdKGd1aWRlL2kxOG4jaTE4bi1waXBlcykuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcmV0dXJucyBUaGUgcnVsZXMgZm9yIHRoZSBsb2NhbGUsIGEgc2luZ2xlIHRpbWUgdmFsdWUgb3IgYXJyYXkgb2YgKmZyb20tdGltZSwgdG8tdGltZSosXHJcbiAqIG9yIG51bGwgaWYgbm8gcGVyaW9kcyBhcmUgYXZhaWxhYmxlLlxyXG4gKlxyXG4gKiBAc2VlIGBnZXRMb2NhbGVFeHRyYURheVBlcmlvZHMoKWBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RSdWxlcyhsb2NhbGU6IHN0cmluZyk6IChUaW1lIHwgW1RpbWUsIFRpbWVdKVtdO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBsb2NhbGUtc3BlY2lmaWMgZGF5IHBlcmlvZHMsIHdoaWNoIGluZGljYXRlIHJvdWdobHkgaG93IGEgZGF5IGlzIGJyb2tlbiB1cFxyXG4gKiBpbiBkaWZmZXJlbnQgbGFuZ3VhZ2VzLlxyXG4gKiBGb3IgZXhhbXBsZSwgZm9yIGBlbi1VU2AsIHBlcmlvZHMgYXJlIG1vcm5pbmcsIG5vb24sIGFmdGVybm9vbiwgZXZlbmluZywgYW5kIG1pZG5pZ2h0LlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uYWxpdHkgaXMgb25seSBhdmFpbGFibGUgd2hlbiB5b3UgaGF2ZSBsb2FkZWQgdGhlIGZ1bGwgbG9jYWxlIGRhdGEuXHJcbiAqIFNlZSB0aGUgW1wiSTE4biBndWlkZVwiXShndWlkZS9pMThuI2kxOG4tcGlwZXMpLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSByZXF1aXJlZCBjaGFyYWN0ZXIgd2lkdGguXHJcbiAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGVkIGRheS1wZXJpb2Qgc3RyaW5ncy5cclxuICogQHNlZSBgZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RSdWxlcygpYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVFeHRyYURheVBlcmlvZHMobG9jYWxlOiBzdHJpbmcsIGZvcm1TdHlsZTogRm9ybVN0eWxlLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCk6IHN0cmluZ1tdO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHJldHVybnMgQSBkYXkgaW5kZXggbnVtYmVyLCB1c2luZyB0aGUgMC1iYXNlZCB3ZWVrLWRheSBpbmRleCBmb3IgYGVuLVVTYFxyXG4gKiAoU3VuZGF5ID0gMCwgTW9uZGF5ID0gMSwgLi4uKS5cclxuICogRm9yIGV4YW1wbGUsIGZvciBgZnItRlJgLCByZXR1cm5zIDEgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZmlyc3QgZGF5IGlzIE1vbmRheS5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRmlyc3REYXlPZldlZWsobG9jYWxlOiBzdHJpbmcpOiBXZWVrRGF5O1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgbG9jYWxlIElEIGZyb20gdGhlIGN1cnJlbnRseSBsb2FkZWQgbG9jYWxlLlxyXG4gKiBUaGUgbG9hZGVkIGxvY2FsZSBjb3VsZCBiZSwgZm9yIGV4YW1wbGUsIGEgZ2xvYmFsIG9uZSByYXRoZXIgdGhhbiBhIHJlZ2lvbmFsIG9uZS5cclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlLCBzdWNoIGFzIGBmci1GUmAuXHJcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGUgY29kZS4gRm9yIGV4YW1wbGUsIGBmcmAuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUlkKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBtb250aHMgb2YgdGhlIHllYXIgZm9yIHRoZSBnaXZlbiBsb2NhbGUsIHVzaW5nIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZm9ybVN0eWxlIFRoZSByZXF1aXJlZCBncmFtbWF0aWNhbCBmb3JtLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIHJlcXVpcmVkIGNoYXJhY3RlciB3aWR0aC5cclxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbG9jYWxpemVkIG5hbWUgc3RyaW5ncy5cclxuICogRm9yIGV4YW1wbGUsICBgW0phbnVhcnksIEZlYnJ1YXJ5LCAuLi5dYCBmb3IgYGVuLVVTYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlTW9udGhOYW1lcyhsb2NhbGU6IHN0cmluZywgZm9ybVN0eWxlOiBGb3JtU3R5bGUsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoKTogc3RyaW5nW107XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGEgbnVtYmVyIGZvcm1hdCBmb3IgYSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqIE51bWJlcnMgYXJlIGZvcm1hdHRlZCB1c2luZyBwYXR0ZXJucywgbGlrZSBgIywjIyMuMDBgLiBGb3IgZXhhbXBsZSwgdGhlIHBhdHRlcm4gYCMsIyMjLjAwYFxyXG4gKiB3aGVuIHVzZWQgdG8gZm9ybWF0IHRoZSBudW1iZXIgMTIzNDUuNjc4IGNvdWxkIHJlc3VsdCBpbiBcIjEyJzM0NSw2NzhcIi4gVGhhdCB3b3VsZCBoYXBwZW4gaWYgdGhlXHJcbiAqIGdyb3VwaW5nIHNlcGFyYXRvciBmb3IgeW91ciBsYW5ndWFnZSBpcyBhbiBhcG9zdHJvcGhlLCBhbmQgdGhlIGRlY2ltYWwgc2VwYXJhdG9yIGlzIGEgY29tbWEuXHJcbiAqXHJcbiAqIDxiPkltcG9ydGFudDo8L2I+IFRoZSBjaGFyYWN0ZXJzIGAuYCBgLGAgYDBgIGAjYCAoYW5kIG90aGVycyBiZWxvdykgYXJlIHNwZWNpYWwgcGxhY2Vob2xkZXJzXHJcbiAqIHRoYXQgc3RhbmQgZm9yIHRoZSBkZWNpbWFsIHNlcGFyYXRvciwgYW5kIHNvIG9uLCBhbmQgYXJlIE5PVCByZWFsIGNoYXJhY3RlcnMuXHJcbiAqIFlvdSBtdXN0IE5PVCBcInRyYW5zbGF0ZVwiIHRoZSBwbGFjZWhvbGRlcnMuIEZvciBleGFtcGxlLCBkb24ndCBjaGFuZ2UgYC5gIHRvIGAsYCBldmVuIHRob3VnaCBpblxyXG4gKiB5b3VyIGxhbmd1YWdlIHRoZSBkZWNpbWFsIHBvaW50IGlzIHdyaXR0ZW4gd2l0aCBhIGNvbW1hLiBUaGUgc3ltYm9scyBzaG91bGQgYmUgcmVwbGFjZWQgYnkgdGhlXHJcbiAqIGxvY2FsIGVxdWl2YWxlbnRzLCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgYE51bWJlclN5bWJvbGAgZm9yIHlvdXIgbGFuZ3VhZ2UuXHJcbiAqXHJcbiAqIEhlcmUgYXJlIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgdXNlZCBpbiBudW1iZXIgcGF0dGVybnM6XHJcbiAqXHJcbiAqIHwgU3ltYm9sIHwgTWVhbmluZyB8XHJcbiAqIHwtLS0tLS0tLXwtLS0tLS0tLS18XHJcbiAqIHwgLiB8IFJlcGxhY2VkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGNoYXJhY3RlciB1c2VkIGZvciB0aGUgZGVjaW1hbCBwb2ludC4gfFxyXG4gKiB8ICwgfCBSZXBsYWNlZCBieSB0aGUgXCJncm91cGluZ1wiICh0aG91c2FuZHMpIHNlcGFyYXRvci4gfFxyXG4gKiB8IDAgfCBSZXBsYWNlZCBieSBhIGRpZ2l0IChvciB6ZXJvIGlmIHRoZXJlIGFyZW4ndCBlbm91Z2ggZGlnaXRzKS4gfFxyXG4gKiB8ICMgfCBSZXBsYWNlZCBieSBhIGRpZ2l0IChvciBub3RoaW5nIGlmIHRoZXJlIGFyZW4ndCBlbm91Z2gpLiB8XHJcbiAqIHwgwqQgfCBSZXBsYWNlZCBieSBhIGN1cnJlbmN5IHN5bWJvbCwgc3VjaCBhcyAkIG9yIFVTRC4gfFxyXG4gKiB8ICUgfCBNYXJrcyBhIHBlcmNlbnQgZm9ybWF0LiBUaGUgJSBzeW1ib2wgbWF5IGNoYW5nZSBwb3NpdGlvbiwgYnV0IG11c3QgYmUgcmV0YWluZWQuIHxcclxuICogfCBFIHwgTWFya3MgYSBzY2llbnRpZmljIGZvcm1hdC4gVGhlIEUgc3ltYm9sIG1heSBjaGFuZ2UgcG9zaXRpb24sIGJ1dCBtdXN0IGJlIHJldGFpbmVkLiB8XHJcbiAqIHwgJyB8IFNwZWNpYWwgY2hhcmFjdGVycyB1c2VkIGFzIGxpdGVyYWwgY2hhcmFjdGVycyBhcmUgcXVvdGVkIHdpdGggQVNDSUkgc2luZ2xlIHF1b3Rlcy4gfFxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgbnVtZXJpYyB2YWx1ZSB0byBiZSBmb3JtYXR0ZWQgKHN1Y2ggYXMgYERlY2ltYWxgIG9yIGBDdXJyZW5jeWAuKVxyXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxpemVkIGZvcm1hdCBzdHJpbmcuXHJcbiAqIEBzZWUgYE51bWJlckZvcm1hdFN0eWxlYFxyXG4gKiBAc2VlIFtDTERSIHdlYnNpdGVdKGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL251bWJlci1wYXR0ZXJucylcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlTnVtYmVyRm9ybWF0KGxvY2FsZTogc3RyaW5nLCB0eXBlOiBOdW1iZXJGb3JtYXRTdHlsZSk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSBsb2NhbGl6ZWQgbnVtYmVyIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGluIG51bWJlciBmb3JtYXRzLlxyXG4gKiBAcGFyYW0gbG9jYWxlIFRoZSBsb2NhbGUgY29kZS5cclxuICogQHBhcmFtIHN5bWJvbCBUaGUgc3ltYm9sIHRvIGxvY2FsaXplLlxyXG4gKiBAcmV0dXJucyBUaGUgY2hhcmFjdGVyIGZvciB0aGUgbG9jYWxpemVkIHN5bWJvbC5cclxuICogQHNlZSBgTnVtYmVyU3ltYm9sYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlOiBzdHJpbmcsIHN5bWJvbDogTnVtYmVyU3ltYm9sKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIEBhbGlhcyBjb3JlL8m1Z2V0TG9jYWxlUGx1cmFsQ2FzZVxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBnZXRMb2NhbGVQbHVyYWxDYXNlOiAobG9jYWxlOiBzdHJpbmcpID0+ICgodmFsdWU6IG51bWJlcikgPT4gUGx1cmFsKTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSBsb2NhbGl6ZWQgdGltZS12YWx1ZSBmb3JtYXR0aW5nIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgZm9ybWF0IHR5cGUuXHJcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgZm9ybWF0dGluZyBzdHJpbmcuXHJcbiAqIEBzZWUgYEZvcm1hdFdpZHRoYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlVGltZUZvcm1hdChsb2NhbGU6IHN0cmluZywgd2lkdGg6IEZvcm1hdFdpZHRoKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFJhbmdlIG9mIHdlZWsgZGF5cyB0aGF0IGFyZSBjb25zaWRlcmVkIHRoZSB3ZWVrLWVuZCBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEByZXR1cm5zIFRoZSByYW5nZSBvZiBkYXkgdmFsdWVzLCBgW3N0YXJ0RGF5LCBlbmREYXldYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlV2Vla0VuZFJhbmdlKGxvY2FsZTogc3RyaW5nKTogW1dlZWtEYXksIFdlZWtEYXldO1xyXG5cclxuLyoqXHJcbiAqIFJlcG9ydHMgdGhlIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cyBmb3IgYSBnaXZlbiBjdXJyZW5jeS5cclxuICogVGhlIHZhbHVlIGRlcGVuZHMgdXBvbiB0aGUgcHJlc2VuY2Ugb2YgY2VudHMgaW4gdGhhdCBwYXJ0aWN1bGFyIGN1cnJlbmN5LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29kZSBUaGUgY3VycmVuY3kgY29kZS5cclxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cywgdHlwaWNhbGx5IDAgb3IgMi5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZDdXJyZW5jeURpZ2l0cyhjb2RlOiBzdHJpbmcpOiBudW1iZXI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IHVzZWQgdG8gY29uZmlndXJlIHRoZSB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2UgdG9cclxuICogcmVwcmVzZW50IGl0cyBzdGF0ZSBpbiB0aGVcclxuICogW2hhc2ggZnJhZ21lbnRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWZvcm1fUmVzb3VyY2VfTG9jYXRvciNTeW50YXgpXHJcbiAqIG9mIHRoZSBicm93c2VyJ3MgVVJMLlxyXG4gKlxyXG4gKiBGb3IgaW5zdGFuY2UsIGlmIHlvdSBjYWxsIGBsb2NhdGlvbi5nbygnL2ZvbycpYCwgdGhlIGJyb3dzZXIncyBVUkwgd2lsbCBiZWNvbWVcclxuICogYGV4YW1wbGUuY29tIy9mb29gLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL2xvY2F0aW9uL3RzL2hhc2hfbG9jYXRpb25fY29tcG9uZW50LnRzIHJlZ2lvbj0nTG9jYXRpb25Db21wb25lbnQnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIYXNoTG9jYXRpb25TdHJhdGVneSBleHRlbmRzIExvY2F0aW9uU3RyYXRlZ3kge1xyXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1Mb2NhdGlvbjtcclxuICAgIHByaXZhdGUgX2Jhc2VIcmVmO1xyXG4gICAgY29uc3RydWN0b3IoX3BsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sIF9iYXNlSHJlZj86IHN0cmluZyk7XHJcbiAgICBvblBvcFN0YXRlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcclxuICAgIGdldEJhc2VIcmVmKCk6IHN0cmluZztcclxuICAgIHBhdGgoaW5jbHVkZUhhc2g/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gICAgcHJlcGFyZUV4dGVybmFsVXJsKGludGVybmFsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcclxuICAgIHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTWFwcyBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgcGx1cmFsaXplcyB0aGUgdmFsdWUgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9pMThuX3BpcGUudHMgcmVnaW9uPSdJMThuUGx1cmFsUGlwZUNvbXBvbmVudCd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEkxOG5QbHVyYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBwcml2YXRlIF9sb2NhbGl6YXRpb247XHJcbiAgICBjb25zdHJ1Y3RvcihfbG9jYWxpemF0aW9uOiBOZ0xvY2FsaXphdGlvbik7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgbnVtYmVyIHRvIGJlIGZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHBsdXJhbE1hcCBhbiBvYmplY3QgdGhhdCBtaW1pY3MgdGhlIElDVSBmb3JtYXQsIHNlZVxyXG4gICAgICogaHR0cDovL3VzZXJndWlkZS5pY3UtcHJvamVjdC5vcmcvZm9ybWF0cGFyc2UvbWVzc2FnZXMuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIGEgYHN0cmluZ2AgZGVmaW5pbmcgdGhlIGxvY2FsZSB0byB1c2UgKHVzZXMgdGhlIGN1cnJlbnQge0BsaW5rIExPQ0FMRV9JRH0gYnlcclxuICAgICAqIGRlZmF1bHQpLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgcGx1cmFsTWFwOiB7XHJcbiAgICAgICAgW2NvdW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9LCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBHZW5lcmljIHNlbGVjdG9yIHRoYXQgZGlzcGxheXMgdGhlIHN0cmluZyB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgdmFsdWUuXHJcbiAqXHJcbiAqIElmIG5vbmUgb2YgdGhlIGtleXMgb2YgdGhlIGBtYXBwaW5nYCBtYXRjaCB0aGUgYHZhbHVlYCwgdGhlbiB0aGUgY29udGVudFxyXG4gKiBvZiB0aGUgYG90aGVyYCBrZXkgaXMgcmV0dXJuZWQgd2hlbiBwcmVzZW50LCBvdGhlcndpc2UgYW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2kxOG5fcGlwZS50cyByZWdpb249J0kxOG5TZWxlY3RQaXBlQ29tcG9uZW50J31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSTE4blNlbGVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIGEgc3RyaW5nIHRvIGJlIGludGVybmF0aW9uYWxpemVkLlxyXG4gICAgICogQHBhcmFtIG1hcHBpbmcgYW4gb2JqZWN0IHRoYXQgaW5kaWNhdGVzIHRoZSB0ZXh0IHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZFxyXG4gICAgICogZm9yIGRpZmZlcmVudCB2YWx1ZXMgb2YgdGhlIHByb3ZpZGVkIGB2YWx1ZWAuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgbWFwcGluZzoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH0pOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgYnJvd3NlciBwbGF0Zm9ybS5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZDogT2JqZWN0KTogYm9vbGVhbjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgc2VydmVyIHBsYXRmb3JtLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQ6IE9iamVjdCk6IGJvb2xlYW47XHJcblxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIHdlYiB3b3JrZXIgYXBwIHBsYXRmb3JtLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBpc1BsYXRmb3JtV29ya2VyQXBwKHBsYXRmb3JtSWQ6IE9iamVjdCk6IGJvb2xlYW47XHJcblxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIHdlYiB3b3JrZXIgVUkgcGxhdGZvcm0uXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGlzUGxhdGZvcm1Xb3JrZXJVaShwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuO1xyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbnZlcnRzIGEgdmFsdWUgaW50byBpdHMgSlNPTi1mb3JtYXQgcmVwcmVzZW50YXRpb24uICBVc2VmdWwgZm9yIGRlYnVnZ2luZy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBjb21wb25lbnQgdXNlcyBhIEpTT04gcGlwZSB0byBjb252ZXJ0IGFuIG9iamVjdFxyXG4gKiB0byBKU09OIGZvcm1hdCwgYW5kIGRpc3BsYXlzIHRoZSBzdHJpbmcgaW4gYm90aCBmb3JtYXRzIGZvciBjb21wYXJpc29uLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2pzb25fcGlwZS50cyByZWdpb249J0pzb25QaXBlJ31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSnNvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgb2YgYW55IHR5cGUgdG8gY29udmVydCBpbnRvIGEgSlNPTi1mb3JtYXQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEga2V5IHZhbHVlIHBhaXIuXHJcbiAqIFVzdWFsbHkgdXNlZCB0byByZXByZXNlbnQgdGhlIGtleSB2YWx1ZSBwYWlycyBmcm9tIGEgTWFwIG9yIE9iamVjdC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEtleVZhbHVlPEssIFY+IHtcclxuICAgIGtleTogSztcclxuICAgIHZhbHVlOiBWO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVHJhbnNmb3JtcyBPYmplY3Qgb3IgTWFwIGludG8gYW4gYXJyYXkgb2Yga2V5IHZhbHVlIHBhaXJzLlxyXG4gKlxyXG4gKiBUaGUgb3V0cHV0IGFycmF5IHdpbGwgYmUgb3JkZXJlZCBieSBrZXlzLlxyXG4gKiBCeSBkZWZhdWx0IHRoZSBjb21wYXJhdG9yIHdpbGwgYmUgYnkgVW5pY29kZSBwb2ludCB2YWx1ZS5cclxuICogWW91IGNhbiBvcHRpb25hbGx5IHBhc3MgYSBjb21wYXJlRm4gaWYgeW91ciBrZXlzIGFyZSBjb21wbGV4IHR5cGVzLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAjIyMgRXhhbXBsZXNcclxuICpcclxuICogVGhpcyBleGFtcGxlcyBzaG93IGhvdyBhbiBPYmplY3Qgb3IgYSBNYXAgY2FuIGJlIGl0ZXJhdGVkIGJ5IG5nRm9yIHdpdGggdGhlIHVzZSBvZiB0aGlzIGtleXZhbHVlXHJcbiAqIHBpcGUuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMva2V5dmFsdWVfcGlwZS50cyByZWdpb249J0tleVZhbHVlUGlwZSd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEtleVZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaWZmZXJzO1xyXG4gICAgY29uc3RydWN0b3IoZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKTtcclxuICAgIHByaXZhdGUgZGlmZmVyO1xyXG4gICAgcHJpdmF0ZSBrZXlWYWx1ZXM7XHJcbiAgICB0cmFuc2Zvcm08SywgVj4oaW5wdXQ6IG51bGwsIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxLLCBWPiwgYjogS2V5VmFsdWU8SywgVj4pID0+IG51bWJlcik6IG51bGw7XHJcbiAgICB0cmFuc2Zvcm08Vj4oaW5wdXQ6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBWO1xyXG4gICAgfSB8IE1hcDxzdHJpbmcsIFY+LCBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8c3RyaW5nLCBWPiwgYjogS2V5VmFsdWU8c3RyaW5nLCBWPikgPT4gbnVtYmVyKTogQXJyYXk8S2V5VmFsdWU8c3RyaW5nLCBWPj47XHJcbiAgICB0cmFuc2Zvcm08Vj4oaW5wdXQ6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBWO1xyXG4gICAgfSB8IE1hcDxzdHJpbmcsIFY+IHwgbnVsbCwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPHN0cmluZywgVj4sIGI6IEtleVZhbHVlPHN0cmluZywgVj4pID0+IG51bWJlcik6IEFycmF5PEtleVZhbHVlPHN0cmluZywgVj4+IHwgbnVsbDtcclxuICAgIHRyYW5zZm9ybTxWPihpbnB1dDoge1xyXG4gICAgICAgIFtrZXk6IG51bWJlcl06IFY7XHJcbiAgICB9IHwgTWFwPG51bWJlciwgVj4sIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxudW1iZXIsIFY+LCBiOiBLZXlWYWx1ZTxudW1iZXIsIFY+KSA9PiBudW1iZXIpOiBBcnJheTxLZXlWYWx1ZTxudW1iZXIsIFY+PjtcclxuICAgIHRyYW5zZm9ybTxWPihpbnB1dDoge1xyXG4gICAgICAgIFtrZXk6IG51bWJlcl06IFY7XHJcbiAgICB9IHwgTWFwPG51bWJlciwgVj4gfCBudWxsLCBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8bnVtYmVyLCBWPiwgYjogS2V5VmFsdWU8bnVtYmVyLCBWPikgPT4gbnVtYmVyKTogQXJyYXk8S2V5VmFsdWU8bnVtYmVyLCBWPj4gfCBudWxsO1xyXG4gICAgdHJhbnNmb3JtPEssIFY+KGlucHV0OiBNYXA8SywgVj4sIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxLLCBWPiwgYjogS2V5VmFsdWU8SywgVj4pID0+IG51bWJlcik6IEFycmF5PEtleVZhbHVlPEssIFY+PjtcclxuICAgIHRyYW5zZm9ybTxLLCBWPihpbnB1dDogTWFwPEssIFY+IHwgbnVsbCwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPEssIFY+LCBiOiBLZXlWYWx1ZTxLLCBWPikgPT4gbnVtYmVyKTogQXJyYXk8S2V5VmFsdWU8SywgVj4+IHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBIHNlcnZpY2UgdGhhdCBhcHBsaWNhdGlvbnMgY2FuIHVzZSB0byBpbnRlcmFjdCB3aXRoIGEgYnJvd3NlcidzIFVSTC5cclxuICpcclxuICogRGVwZW5kaW5nIG9uIHRoZSBgTG9jYXRpb25TdHJhdGVneWAgdXNlZCwgYExvY2F0aW9uYCBwZXJzaXN0c1xyXG4gKiB0byB0aGUgVVJMJ3MgcGF0aCBvciB0aGUgVVJMJ3MgaGFzaCBzZWdtZW50LlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBJdCdzIGJldHRlciB0byB1c2UgdGhlIGBSb3V0ZXIjbmF2aWdhdGVgIHNlcnZpY2UgdG8gdHJpZ2dlciByb3V0ZSBjaGFuZ2VzLiBVc2VcclxuICogYExvY2F0aW9uYCBvbmx5IGlmIHlvdSBuZWVkIHRvIGludGVyYWN0IHdpdGggb3IgY3JlYXRlIG5vcm1hbGl6ZWQgVVJMcyBvdXRzaWRlIG9mXHJcbiAqIHJvdXRpbmcuXHJcbiAqXHJcbiAqIGBMb2NhdGlvbmAgaXMgcmVzcG9uc2libGUgZm9yIG5vcm1hbGl6aW5nIHRoZSBVUkwgYWdhaW5zdCB0aGUgYXBwbGljYXRpb24ncyBiYXNlIGhyZWYuXHJcbiAqIEEgbm9ybWFsaXplZCBVUkwgaXMgYWJzb2x1dGUgZnJvbSB0aGUgVVJMIGhvc3QsIGluY2x1ZGVzIHRoZSBhcHBsaWNhdGlvbidzIGJhc2UgaHJlZiwgYW5kIGhhcyBub1xyXG4gKiB0cmFpbGluZyBzbGFzaDpcclxuICogLSBgL215L2FwcC91c2VyLzEyM2AgaXMgbm9ybWFsaXplZFxyXG4gKiAtIGBteS9hcHAvdXNlci8xMjNgICoqaXMgbm90Kiogbm9ybWFsaXplZFxyXG4gKiAtIGAvbXkvYXBwL3VzZXIvMTIzL2AgKippcyBub3QqKiBub3JtYWxpemVkXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD0nY29tbW9uL2xvY2F0aW9uL3RzL3BhdGhfbG9jYXRpb25fY29tcG9uZW50LnRzJ1xyXG4gKiByZWdpb249J0xvY2F0aW9uQ29tcG9uZW50Jz48L2NvZGUtZXhhbXBsZT5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9jYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSwgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbik7XHJcbiAgICAvKipcclxuICAgICAqIE5vcm1hbGl6ZXMgdGhlIFVSTCBwYXRoIGZvciB0aGlzIGxvY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbmNsdWRlSGFzaCBUcnVlIHRvIGluY2x1ZGUgYW4gYW5jaG9yIGZyYWdtZW50IGluIHRoZSBwYXRoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIFVSTCBwYXRoLlxyXG4gICAgICovXHJcbiAgICBwYXRoKGluY2x1ZGVIYXNoPzogYm9vbGVhbik6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgbG9jYXRpb24gaGlzdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBgaGlzdG9yeS5zdGF0ZWAgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpOiB1bmtub3duO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBwYXRoIGFuZCBjb21wYXJlcyB0byB0aGUgY3VycmVudCBub3JtYWxpemVkIHBhdGguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhdGggVGhlIGdpdmVuIFVSTCBwYXRoLlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5IFF1ZXJ5IHBhcmFtZXRlcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gVVJMIHBhdGggaXMgZXF1YWwgdG8gdGhlIGN1cnJlbnQgbm9ybWFsaXplZCBwYXRoLCBmYWxzZVxyXG4gICAgICogb3RoZXJ3aXNlLlxyXG4gICAgICovXHJcbiAgICBpc0N1cnJlbnRQYXRoRXF1YWxUbyhwYXRoOiBzdHJpbmcsIHF1ZXJ5Pzogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogTm9ybWFsaXplcyBhIFVSTCBwYXRoIGJ5IHN0cmlwcGluZyBhbnkgdHJhaWxpbmcgc2xhc2hlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFN0cmluZyByZXByZXNlbnRpbmcgYSBVUkwuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIG5vcm1hbGl6ZWQgVVJMIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgbm9ybWFsaXplKHVybDogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVzIGFuIGV4dGVybmFsIFVSTCBwYXRoLlxyXG4gICAgICogSWYgdGhlIGdpdmVuIFVSTCBkb2Vzbid0IGJlZ2luIHdpdGggYSBsZWFkaW5nIHNsYXNoIChgJy8nYCksIGFkZHMgb25lXHJcbiAgICAgKiBiZWZvcmUgbm9ybWFsaXppbmcuIEFkZHMgYSBoYXNoIGlmIGBIYXNoTG9jYXRpb25TdHJhdGVneWAgaXNcclxuICAgICAqIGluIHVzZSwgb3IgdGhlIGBBUFBfQkFTRV9IUkVGYCBpZiB0aGUgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YCBpcyBpbiB1c2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBTdHJpbmcgcmVwcmVzZW50aW5nIGEgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zICBBIG5vcm1hbGl6ZWQgcGxhdGZvcm0tc3BlY2lmaWMgVVJMLlxyXG4gICAgICovXHJcbiAgICBwcmVwYXJlRXh0ZXJuYWxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgdGhlIGJyb3dzZXIncyBVUkwgdG8gYSBub3JtYWxpemVkIHZlcnNpb24gb2YgYSBnaXZlbiBVUkwsIGFuZCBwdXNoZXMgYVxyXG4gICAgICogbmV3IGl0ZW0gb250byB0aGUgcGxhdGZvcm0ncyBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXRoICBVUkwgcGF0aCB0byBub3JtYWxpemUuXHJcbiAgICAgKiBAcGFyYW0gcXVlcnkgUXVlcnkgcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBMb2NhdGlvbiBoaXN0b3J5IHN0YXRlLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ28ocGF0aDogc3RyaW5nLCBxdWVyeT86IHN0cmluZywgc3RhdGU/OiBhbnkpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2VzIHRoZSBicm93c2VyJ3MgVVJMIHRvIGEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBVUkwsIGFuZCByZXBsYWNlc1xyXG4gICAgICogdGhlIHRvcCBpdGVtIG9uIHRoZSBwbGF0Zm9ybSdzIGhpc3Rvcnkgc3RhY2suXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhdGggIFVSTCBwYXRoIHRvIG5vcm1hbGl6ZS5cclxuICAgICAqIEBwYXJhbSBxdWVyeSBRdWVyeSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIExvY2F0aW9uIGhpc3Rvcnkgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VTdGF0ZShwYXRoOiBzdHJpbmcsIHF1ZXJ5Pzogc3RyaW5nLCBzdGF0ZT86IGFueSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE5hdmlnYXRlcyBmb3J3YXJkIGluIHRoZSBwbGF0Zm9ybSdzIGhpc3RvcnkuXHJcbiAgICAgKi9cclxuICAgIGZvcndhcmQoKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGVzIGJhY2sgaW4gdGhlIHBsYXRmb3JtJ3MgaGlzdG9yeS5cclxuICAgICAqL1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBVUkwgY2hhbmdlIGxpc3RlbmVyLiBVc2UgdG8gY2F0Y2ggdXBkYXRlcyBwZXJmb3JtZWQgYnkgdGhlIEFuZ3VsYXJcclxuICAgICAqIGZyYW1ld29yayB0aGF0IGFyZSBub3QgZGV0ZWN0aWJsZSB0aHJvdWdoIFwicG9wc3RhdGVcIiBvciBcImhhc2hjaGFuZ2VcIiBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZuIFRoZSBjaGFuZ2UgaGFuZGxlciBmdW5jdGlvbiwgd2hpY2ggdGFrZSBhIFVSTCBhbmQgYSBsb2NhdGlvbiBoaXN0b3J5IHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBvblVybENoYW5nZShmbjogKHVybDogc3RyaW5nLCBzdGF0ZTogdW5rbm93bikgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZXMgdG8gdGhlIHBsYXRmb3JtJ3MgYHBvcFN0YXRlYCBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEV2ZW50IHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIGhpc3RvcnkgY2hhbmdlcy5cclxuICAgICAqIEBwYXJhbSBleGNlcHRpb24gVGhlIGV4Y2VwdGlvbiB0byB0aHJvdy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBTdWJzY3JpYmVkIGV2ZW50cy5cclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKG9uTmV4dDogKHZhbHVlOiBQb3BTdGF0ZUV2ZW50KSA9PiB2b2lkLCBvblRocm93PzogKChleGNlcHRpb246IGFueSkgPT4gdm9pZCkgfCBudWxsLCBvblJldHVybj86ICgoKSA9PiB2b2lkKSB8IG51bGwpOiBTdWJzY3JpcHRpb25MaWtlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVzIFVSTCBwYXJhbWV0ZXJzIGJ5IHByZXBlbmRpbmcgd2l0aCBgP2AgaWYgbmVlZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgcGFyYW1zIFN0cmluZyBvZiBVUkwgcGFyYW1ldGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCBVUkwgcGFyYW1ldGVycyBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBub3JtYWxpemVRdWVyeVBhcmFtczogKHBhcmFtczogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEpvaW5zIHR3byBwYXJ0cyBvZiBhIFVSTCB3aXRoIGEgc2xhc2ggaWYgbmVlZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzdGFydCAgVVJMIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGVuZCAgICBVUkwgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBqb2luZWQgVVJMIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGpvaW5XaXRoU2xhc2g6IChzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZykgPT4gc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgdHJhaWxpbmcgc2xhc2ggZnJvbSBhIFVSTCBzdHJpbmcgaWYgbmVlZGVkLlxyXG4gICAgICogTG9va3MgZm9yIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGVpdGhlciBgI2AsIGA/YCwgb3IgdGhlIGVuZCBvZiB0aGVcclxuICAgICAqIGxpbmUgYXMgYC9gIGNoYXJhY3RlcnMgYW5kIHJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIGlmIG9uZSBleGlzdHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBVUkwgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBVUkwgc3RyaW5nLCBtb2RpZmllZCBpZiBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpcFRyYWlsaW5nU2xhc2g6ICh1cmw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEluZGljYXRlcyB3aGVuIGEgbG9jYXRpb24gaXMgaW5pdGlhbGl6ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IExPQ0FUSU9OX0lOSVRJQUxJWkVEOiBJbmplY3Rpb25Ub2tlbjxQcm9taXNlPGFueT4+O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSBldmVudCBmcm9tIGBvblBvcFN0YXRlYCBvciBgb25IYXNoQ2hhbmdlYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgTG9jYXRpb25DaGFuZ2VFdmVudCB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBzdGF0ZTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIge1xyXG4gICAgKGV2ZW50OiBMb2NhdGlvbkNoYW5nZUV2ZW50KTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogRW5hYmxlcyB0aGUgYExvY2F0aW9uYCBzZXJ2aWNlIHRvIHJlYWQgcm91dGUgc3RhdGUgZnJvbSB0aGUgYnJvd3NlcidzIFVSTC5cclxuICogQW5ndWxhciBwcm92aWRlcyB0d28gc3RyYXRlZ2llczpcclxuICogYEhhc2hMb2NhdGlvblN0cmF0ZWd5YCBhbmQgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YC5cclxuICpcclxuICogQXBwbGljYXRpb25zIHNob3VsZCB1c2UgdGhlIGBSb3V0ZXJgIG9yIGBMb2NhdGlvbmAgc2VydmljZXMgdG9cclxuICogaW50ZXJhY3Qgd2l0aCBhcHBsaWNhdGlvbiByb3V0ZSBzdGF0ZS5cclxuICpcclxuICogRm9yIGluc3RhbmNlLCBgSGFzaExvY2F0aW9uU3RyYXRlZ3lgIHByb2R1Y2VzIFVSTHMgbGlrZVxyXG4gKiA8Y29kZSBjbGFzcz1cIm5vLWF1dG8tbGlua1wiPmh0dHA6Ly9leGFtcGxlLmNvbSMvZm9vPC9jb2RlPixcclxuICogYW5kIGBQYXRoTG9jYXRpb25TdHJhdGVneWAgcHJvZHVjZXNcclxuICogPGNvZGUgY2xhc3M9XCJuby1hdXRvLWxpbmtcIj5odHRwOi8vZXhhbXBsZS5jb20vZm9vPC9jb2RlPiBhcyBhbiBlcXVpdmFsZW50IFVSTC5cclxuICpcclxuICogU2VlIHRoZXNlIHR3byBjbGFzc2VzIGZvciBtb3JlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBMb2NhdGlvblN0cmF0ZWd5IHtcclxuICAgIGFic3RyYWN0IHBhdGgoaW5jbHVkZUhhc2g/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgcHJlcGFyZUV4dGVybmFsVXJsKGludGVybmFsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGZvcndhcmQoKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGJhY2soKTogdm9pZDtcclxuICAgIGFic3RyYWN0IG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0ZXh0IHRvIGFsbCBsb3dlciBjYXNlLlxyXG4gKlxyXG4gKiBAc2VlIGBVcHBlckNhc2VQaXBlYFxyXG4gKiBAc2VlIGBUaXRsZUNhc2VQaXBlYFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIHZpZXcgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXJcclxuICogdGV4dCwgYW5kIHRoZW4gdXNlcyB0aGUgcGlwZSB0byBjb252ZXJ0IHRoZSBpbnB1dCB0ZXh0IHRvIGFsbCBsb3dlciBjYXNlLlxyXG4gKlxyXG4gKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb21tb24vcGlwZXMvdHMvbG93ZXJ1cHBlcl9waXBlLnRzXCIgcmVnaW9uPSdMb3dlclVwcGVyUGlwZSc+PC9jb2RlLWV4YW1wbGU+XHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG93ZXJDYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB0byB0cmFuc2Zvcm0gdG8gbG93ZXIgY2FzZS5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIGBgYFxyXG4gKiAgICAgPHNvbWUtZWxlbWVudCBbbmdDbGFzc109XCInZmlyc3Qgc2Vjb25kJ1wiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKlxyXG4gKiAgICAgPHNvbWUtZWxlbWVudCBbbmdDbGFzc109XCJbJ2ZpcnN0JywgJ3NlY29uZCddXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqXHJcbiAqICAgICA8c29tZS1lbGVtZW50IFtuZ0NsYXNzXT1cInsnZmlyc3QnOiB0cnVlLCAnc2Vjb25kJzogdHJ1ZSwgJ3RoaXJkJzogZmFsc2V9XCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqXHJcbiAqICAgICA8c29tZS1lbGVtZW50IFtuZ0NsYXNzXT1cInN0cmluZ0V4cHxhcnJheUV4cHxvYmpFeHBcIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICpcclxuICogICAgIDxzb21lLWVsZW1lbnQgW25nQ2xhc3NdPVwieydjbGFzczEgY2xhc3MyIGNsYXNzMycgOiB0cnVlfVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEFkZHMgYW5kIHJlbW92ZXMgQ1NTIGNsYXNzZXMgb24gYW4gSFRNTCBlbGVtZW50LlxyXG4gKlxyXG4gKiBUaGUgQ1NTIGNsYXNzZXMgYXJlIHVwZGF0ZWQgYXMgZm9sbG93cywgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHRoZSBleHByZXNzaW9uIGV2YWx1YXRpb246XHJcbiAqIC0gYHN0cmluZ2AgLSB0aGUgQ1NTIGNsYXNzZXMgbGlzdGVkIGluIHRoZSBzdHJpbmcgKHNwYWNlIGRlbGltaXRlZCkgYXJlIGFkZGVkLFxyXG4gKiAtIGBBcnJheWAgLSB0aGUgQ1NTIGNsYXNzZXMgZGVjbGFyZWQgYXMgQXJyYXkgZWxlbWVudHMgYXJlIGFkZGVkLFxyXG4gKiAtIGBPYmplY3RgIC0ga2V5cyBhcmUgQ1NTIGNsYXNzZXMgdGhhdCBnZXQgYWRkZWQgd2hlbiB0aGUgZXhwcmVzc2lvbiBnaXZlbiBpbiB0aGUgdmFsdWVcclxuICogICAgICAgICAgICAgIGV2YWx1YXRlcyB0byBhIHRydXRoeSB2YWx1ZSwgb3RoZXJ3aXNlIHRoZXkgYXJlIHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nQ2xhc3MgaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuICAgIHByaXZhdGUgX2l0ZXJhYmxlRGlmZmVycztcclxuICAgIHByaXZhdGUgX2tleVZhbHVlRGlmZmVycztcclxuICAgIHByaXZhdGUgX25nRWw7XHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcclxuICAgIHByaXZhdGUgX2l0ZXJhYmxlRGlmZmVyO1xyXG4gICAgcHJpdmF0ZSBfa2V5VmFsdWVEaWZmZXI7XHJcbiAgICBwcml2YXRlIF9pbml0aWFsQ2xhc3NlcztcclxuICAgIHByaXZhdGUgX3Jhd0NsYXNzO1xyXG4gICAgY29uc3RydWN0b3IoX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIF9uZ0VsOiBFbGVtZW50UmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMik7XHJcbiAgICBzZXQga2xhc3ModmFsdWU6IHN0cmluZyk7XHJcbiAgICBzZXQgbmdDbGFzcyh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHtcclxuICAgICAgICBba2xhc3M6IHN0cmluZ106IGFueTtcclxuICAgIH0pO1xyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9hcHBseUtleVZhbHVlQ2hhbmdlcztcclxuICAgIHByaXZhdGUgX2FwcGx5SXRlcmFibGVDaGFuZ2VzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIGEgY29sbGVjdGlvbiBvZiBDU1MgY2xhc3NlcyB0byB0aGUgRE9NIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogRm9yIGFyZ3VtZW50IG9mIHR5cGUgU2V0IGFuZCBBcnJheSBDU1MgY2xhc3MgbmFtZXMgY29udGFpbmVkIGluIHRob3NlIGNvbGxlY3Rpb25zIGFyZSBhbHdheXNcclxuICAgICAqIGFkZGVkLlxyXG4gICAgICogRm9yIGFyZ3VtZW50IG9mIHR5cGUgTWFwIENTUyBjbGFzcyBuYW1lIGluIHRoZSBtYXAncyBrZXkgaXMgdG9nZ2xlZCBiYXNlZCBvbiB0aGUgdmFsdWUgKGFkZGVkXHJcbiAgICAgKiBmb3IgdHJ1dGh5IGFuZCByZW1vdmVkIGZvciBmYWxzeSkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2FwcGx5Q2xhc3NlcztcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIGNvbGxlY3Rpb24gb2YgQ1NTIGNsYXNzZXMgZnJvbSB0aGUgRE9NIGVsZW1lbnQuIFRoaXMgaXMgbW9zdGx5IHVzZWZ1bCBmb3IgY2xlYW51cFxyXG4gICAgICogcHVycG9zZXMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlbW92ZUNsYXNzZXM7XHJcbiAgICBwcml2YXRlIF90b2dnbGVDbGFzcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEluc3RhbnRpYXRlcyBhIHNpbmdsZSB7QGxpbmsgQ29tcG9uZW50fSB0eXBlIGFuZCBpbnNlcnRzIGl0cyBIb3N0IFZpZXcgaW50byBjdXJyZW50IFZpZXcuXHJcbiAqIGBOZ0NvbXBvbmVudE91dGxldGAgcHJvdmlkZXMgYSBkZWNsYXJhdGl2ZSBhcHByb2FjaCBmb3IgZHluYW1pYyBjb21wb25lbnQgY3JlYXRpb24uXHJcbiAqXHJcbiAqIGBOZ0NvbXBvbmVudE91dGxldGAgcmVxdWlyZXMgYSBjb21wb25lbnQgdHlwZSwgaWYgYSBmYWxzeSB2YWx1ZSBpcyBzZXQgdGhlIHZpZXcgd2lsbCBjbGVhciBhbmRcclxuICogYW55IGV4aXN0aW5nIGNvbXBvbmVudCB3aWxsIGdldCBkZXN0cm95ZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBGaW5lIHR1bmUgY29udHJvbFxyXG4gKlxyXG4gKiBZb3UgY2FuIGNvbnRyb2wgdGhlIGNvbXBvbmVudCBjcmVhdGlvbiBwcm9jZXNzIGJ5IHVzaW5nIHRoZSBmb2xsb3dpbmcgb3B0aW9uYWwgYXR0cmlidXRlczpcclxuICpcclxuICogKiBgbmdDb21wb25lbnRPdXRsZXRJbmplY3RvcmA6IE9wdGlvbmFsIGN1c3RvbSB7QGxpbmsgSW5qZWN0b3J9IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHBhcmVudCBmb3JcclxuICogdGhlIENvbXBvbmVudC4gRGVmYXVsdHMgdG8gdGhlIGluamVjdG9yIG9mIHRoZSBjdXJyZW50IHZpZXcgY29udGFpbmVyLlxyXG4gKlxyXG4gKiAqIGBuZ0NvbXBvbmVudE91dGxldENvbnRlbnRgOiBPcHRpb25hbCBsaXN0IG9mIHByb2plY3RhYmxlIG5vZGVzIHRvIGluc2VydCBpbnRvIHRoZSBjb250ZW50XHJcbiAqIHNlY3Rpb24gb2YgdGhlIGNvbXBvbmVudCwgaWYgZXhpc3RzLlxyXG4gKlxyXG4gKiAqIGBuZ0NvbXBvbmVudE91dGxldE5nTW9kdWxlRmFjdG9yeWA6IE9wdGlvbmFsIG1vZHVsZSBmYWN0b3J5IHRvIGFsbG93IGR5bmFtaWNhbGx5IGxvYWRpbmcgb3RoZXJcclxuICogbW9kdWxlLCB0aGVuIGxvYWQgYSBjb21wb25lbnQgZnJvbSB0aGF0IG1vZHVsZS5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBTaW1wbGVcclxuICogYGBgXHJcbiAqIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50VHlwZUV4cHJlc3Npb25cIj48L25nLWNvbnRhaW5lcj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEN1c3RvbWl6ZWQgaW5qZWN0b3IvY29udGVudFxyXG4gKiBgYGBcclxuICogPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRUeXBlRXhwcmVzc2lvbjtcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdG9yOiBpbmplY3RvckV4cHJlc3Npb247XHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50Tm9kZXNFeHByZXNzaW9uO1wiPlxyXG4gKiA8L25nLWNvbnRhaW5lcj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEN1c3RvbWl6ZWQgbmdNb2R1bGVGYWN0b3J5XHJcbiAqIGBgYFxyXG4gKiA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudFR5cGVFeHByZXNzaW9uO1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdNb2R1bGVGYWN0b3J5OiBtb2R1bGVGYWN0b3J5O1wiPlxyXG4gKiA8L25nLWNvbnRhaW5lcj5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBBIHNpbXBsZSBleGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdDb21wb25lbnRPdXRsZXQvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nU2ltcGxlRXhhbXBsZSd9XHJcbiAqXHJcbiAqIEEgbW9yZSBjb21wbGV0ZSBleGFtcGxlIHdpdGggYWRkaXRpb25hbCBvcHRpb25zOlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nQ29tcG9uZW50T3V0bGV0L3RzL21vZHVsZS50cyByZWdpb249J0NvbXBsZXRlRXhhbXBsZSd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdDb21wb25lbnRPdXRsZXQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgbmdDb21wb25lbnRPdXRsZXQ6IFR5cGU8YW55PjtcclxuICAgIG5nQ29tcG9uZW50T3V0bGV0SW5qZWN0b3I6IEluamVjdG9yO1xyXG4gICAgbmdDb21wb25lbnRPdXRsZXRDb250ZW50OiBhbnlbXVtdO1xyXG4gICAgbmdDb21wb25lbnRPdXRsZXROZ01vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlUmVmO1xyXG4gICAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBbc3RydWN0dXJhbCBkaXJlY3RpdmVdKGd1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcykgdGhhdCByZW5kZXJzXHJcbiAqIGEgdGVtcGxhdGUgZm9yIGVhY2ggaXRlbSBpbiBhIGNvbGxlY3Rpb24uXHJcbiAqIFRoZSBkaXJlY3RpdmUgaXMgcGxhY2VkIG9uIGFuIGVsZW1lbnQsIHdoaWNoIGJlY29tZXMgdGhlIHBhcmVudFxyXG4gKiBvZiB0aGUgY2xvbmVkIHRlbXBsYXRlcy5cclxuICpcclxuICogVGhlIGBuZ0Zvck9mYCBkaXJlY3RpdmUgaXMgZ2VuZXJhbGx5IHVzZWQgaW4gdGhlXHJcbiAqIFtzaG9ydGhhbmQgZm9ybV0oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI3RoZS1hc3Rlcmlzay0tcHJlZml4KSBgKm5nRm9yYC5cclxuICogSW4gdGhpcyBmb3JtLCB0aGUgdGVtcGxhdGUgdG8gYmUgcmVuZGVyZWQgZm9yIGVhY2ggaXRlcmF0aW9uIGlzIHRoZSBjb250ZW50XHJcbiAqIG9mIGFuIGFuY2hvciBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGRpcmVjdGl2ZS5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIHRoZSBzaG9ydGhhbmQgc3ludGF4IHdpdGggc29tZSBvcHRpb25zLFxyXG4gKiBjb250YWluZWQgaW4gYW4gYDxsaT5gIGVsZW1lbnQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGluZGV4IGFzIGk7IHRyYWNrQnk6IHRyYWNrQnlGblwiPi4uLjwvbGk+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgc2hvcnRoYW5kIGZvcm0gZXhwYW5kcyBpbnRvIGEgbG9uZyBmb3JtIHRoYXQgdXNlcyB0aGUgYG5nRm9yT2ZgIHNlbGVjdG9yXHJcbiAqIG9uIGFuIGA8bmctdGVtcGxhdGU+YCBlbGVtZW50LlxyXG4gKiBUaGUgY29udGVudCBvZiB0aGUgYDxuZy10ZW1wbGF0ZT5gIGVsZW1lbnQgaXMgdGhlIGA8bGk+YCBlbGVtZW50IHRoYXQgaGVsZCB0aGVcclxuICogc2hvcnQtZm9ybSBkaXJlY3RpdmUuXHJcbiAqXHJcbiAqIEhlcmUgaXMgdGhlIGV4cGFuZGVkIHZlcnNpb24gb2YgdGhlIHNob3J0LWZvcm0gZXhhbXBsZS5cclxuICpcclxuICogYGBgXHJcbiAqIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJpdGVtc1wiIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlGblwiPlxyXG4gKiAgIDxsaT4uLi48L2xpPlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogQW5ndWxhciBhdXRvbWF0aWNhbGx5IGV4cGFuZHMgdGhlIHNob3J0aGFuZCBzeW50YXggYXMgaXQgY29tcGlsZXMgdGhlIHRlbXBsYXRlLlxyXG4gKiBUaGUgY29udGV4dCBmb3IgZWFjaCBlbWJlZGRlZCB2aWV3IGlzIGxvZ2ljYWxseSBtZXJnZWQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50XHJcbiAqIGNvbnRleHQgYWNjb3JkaW5nIHRvIGl0cyBsZXhpY2FsIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBXaGVuIHVzaW5nIHRoZSBzaG9ydGhhbmQgc3ludGF4LCBBbmd1bGFyIGFsbG93cyBvbmx5IFtvbmUgc3RydWN0dXJhbCBkaXJlY3RpdmVcclxuICogb24gYW4gZWxlbWVudF0oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI29uZS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZS1wZXItaG9zdC1lbGVtZW50KS5cclxuICogSWYgeW91IHdhbnQgdG8gaXRlcmF0ZSBjb25kaXRpb25hbGx5LCBmb3IgZXhhbXBsZSxcclxuICogcHV0IHRoZSBgKm5nSWZgIG9uIGEgY29udGFpbmVyIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgYCpuZ0ZvcmAgZWxlbWVudC5cclxuICogRm9yIGZ1dGhlciBkaXNjdXNzaW9uLCBzZWVcclxuICogW1N0cnVjdHVyYWwgRGlyZWN0aXZlc10oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI29uZS1wZXItZWxlbWVudCkuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBMb2NhbCB2YXJpYWJsZXNcclxuICpcclxuICogYE5nRm9yT2ZgIHByb3ZpZGVzIGV4cG9ydGVkIHZhbHVlcyB0aGF0IGNhbiBiZSBhbGlhc2VkIHRvIGxvY2FsIHZhcmlhYmxlcy5cclxuICogRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqICBgYGBcclxuICogPGxpICpuZ0Zvcj1cImxldCB1c2VyIG9mIHVzZXJzOyBpbmRleCBhcyBpOyBmaXJzdCBhcyBpc0ZpcnN0XCI+XHJcbiAqICAgIHt7aX19L3t7dXNlcnMubGVuZ3RofX0uIHt7dXNlcn19IDxzcGFuICpuZ0lmPVwiaXNGaXJzdFwiPmRlZmF1bHQ8L3NwYW4+XHJcbiAqIDwvbGk+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4cG9ydGVkIHZhbHVlcyBjYW4gYmUgYWxpYXNlZCB0byBsb2NhbCB2YXJpYWJsZXM6XHJcbiAqXHJcbiAqIC0gYCRpbXBsaWNpdDogVGA6IFRoZSB2YWx1ZSBvZiB0aGUgaW5kaXZpZHVhbCBpdGVtcyBpbiB0aGUgaXRlcmFibGUgKGBuZ0Zvck9mYCkuXHJcbiAqIC0gYG5nRm9yT2Y6IE5nSXRlcmFibGU8VD5gOiBUaGUgdmFsdWUgb2YgdGhlIGl0ZXJhYmxlIGV4cHJlc3Npb24uIFVzZWZ1bCB3aGVuIHRoZSBleHByZXNzaW9uIGlzXHJcbiAqIG1vcmUgY29tcGxleCB0aGVuIGEgcHJvcGVydHkgYWNjZXNzLCBmb3IgZXhhbXBsZSB3aGVuIHVzaW5nIHRoZSBhc3luYyBwaXBlIChgdXNlclN0cmVhbXMgfFxyXG4gKiBhc3luY2ApLlxyXG4gKiAtIGBpbmRleDogbnVtYmVyYDogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxyXG4gKiAtIGBjb3VudDogbnVtYmVyYDogVGhlIGxlbmd0aCBvZiB0aGUgaXRlcmFibGUuXHJcbiAqIC0gYGZpcnN0OiBib29sZWFuYDogVHJ1ZSB3aGVuIHRoZSBpdGVtIGlzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBpdGVyYWJsZS5cclxuICogLSBgbGFzdDogYm9vbGVhbmA6IFRydWUgd2hlbiB0aGUgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBpdGVyYWJsZS5cclxuICogLSBgZXZlbjogYm9vbGVhbmA6IFRydWUgd2hlbiB0aGUgaXRlbSBoYXMgYW4gZXZlbiBpbmRleCBpbiB0aGUgaXRlcmFibGUuXHJcbiAqIC0gYG9kZDogYm9vbGVhbmA6IFRydWUgd2hlbiB0aGUgaXRlbSBoYXMgYW4gb2RkIGluZGV4IGluIHRoZSBpdGVyYWJsZS5cclxuICpcclxuICogIyMjIENoYW5nZSBwcm9wYWdhdGlvblxyXG4gKlxyXG4gKiBXaGVuIHRoZSBjb250ZW50cyBvZiB0aGUgaXRlcmF0b3IgY2hhbmdlcywgYE5nRm9yT2ZgIG1ha2VzIHRoZSBjb3JyZXNwb25kaW5nIGNoYW5nZXMgdG8gdGhlIERPTTpcclxuICpcclxuICogKiBXaGVuIGFuIGl0ZW0gaXMgYWRkZWQsIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB0ZW1wbGF0ZSBpcyBhZGRlZCB0byB0aGUgRE9NLlxyXG4gKiAqIFdoZW4gYW4gaXRlbSBpcyByZW1vdmVkLCBpdHMgdGVtcGxhdGUgaW5zdGFuY2UgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00uXHJcbiAqICogV2hlbiBpdGVtcyBhcmUgcmVvcmRlcmVkLCB0aGVpciByZXNwZWN0aXZlIHRlbXBsYXRlcyBhcmUgcmVvcmRlcmVkIGluIHRoZSBET00uXHJcbiAqXHJcbiAqIEFuZ3VsYXIgdXNlcyBvYmplY3QgaWRlbnRpdHkgdG8gdHJhY2sgaW5zZXJ0aW9ucyBhbmQgZGVsZXRpb25zIHdpdGhpbiB0aGUgaXRlcmF0b3IgYW5kIHJlcHJvZHVjZVxyXG4gKiB0aG9zZSBjaGFuZ2VzIGluIHRoZSBET00uIFRoaXMgaGFzIGltcG9ydGFudCBpbXBsaWNhdGlvbnMgZm9yIGFuaW1hdGlvbnMgYW5kIGFueSBzdGF0ZWZ1bFxyXG4gKiBjb250cm9scyB0aGF0IGFyZSBwcmVzZW50LCBzdWNoIGFzIGA8aW5wdXQ+YCBlbGVtZW50cyB0aGF0IGFjY2VwdCB1c2VyIGlucHV0LiBJbnNlcnRlZCByb3dzIGNhblxyXG4gKiBiZSBhbmltYXRlZCBpbiwgZGVsZXRlZCByb3dzIGNhbiBiZSBhbmltYXRlZCBvdXQsIGFuZCB1bmNoYW5nZWQgcm93cyByZXRhaW4gYW55IHVuc2F2ZWQgc3RhdGVcclxuICogc3VjaCBhcyB1c2VyIGlucHV0LlxyXG4gKiBGb3IgbW9yZSBvbiBhbmltYXRpb25zLCBzZWUgW1RyYW5zaXRpb25zIGFuZCBUcmlnZ2Vyc10oZ3VpZGUvdHJhbnNpdGlvbi1hbmQtdHJpZ2dlcnMpLlxyXG4gKlxyXG4gKiBUaGUgaWRlbnRpdGllcyBvZiBlbGVtZW50cyBpbiB0aGUgaXRlcmF0b3IgY2FuIGNoYW5nZSB3aGlsZSB0aGUgZGF0YSBkb2VzIG5vdC5cclxuICogVGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgdGhlIGl0ZXJhdG9yIGlzIHByb2R1Y2VkIGZyb20gYW4gUlBDIHRvIHRoZSBzZXJ2ZXIsIGFuZCB0aGF0XHJcbiAqIFJQQyBpcyByZS1ydW4uIEV2ZW4gaWYgdGhlIGRhdGEgaGFzbid0IGNoYW5nZWQsIHRoZSBzZWNvbmQgcmVzcG9uc2UgcHJvZHVjZXMgb2JqZWN0cyB3aXRoXHJcbiAqIGRpZmZlcmVudCBpZGVudGl0aWVzLCBhbmQgQW5ndWxhciBtdXN0IHRlYXIgZG93biB0aGUgZW50aXJlIERPTSBhbmQgcmVidWlsZCBpdCAoYXMgaWYgYWxsIG9sZFxyXG4gKiBlbGVtZW50cyB3ZXJlIGRlbGV0ZWQgYW5kIGFsbCBuZXcgZWxlbWVudHMgaW5zZXJ0ZWQpLlxyXG4gKlxyXG4gKiBUbyBhdm9pZCB0aGlzIGV4cGVuc2l2ZSBvcGVyYXRpb24sIHlvdSBjYW4gY3VzdG9taXplIHRoZSBkZWZhdWx0IHRyYWNraW5nIGFsZ29yaXRobS5cclxuICogYnkgc3VwcGx5aW5nIHRoZSBgdHJhY2tCeWAgb3B0aW9uIHRvIGBOZ0Zvck9mYC5cclxuICogYHRyYWNrQnlgIHRha2VzIGEgZnVuY3Rpb24gdGhhdCBoYXMgdHdvIGFyZ3VtZW50czogYGluZGV4YCBhbmQgYGl0ZW1gLlxyXG4gKiBJZiBgdHJhY2tCeWAgaXMgZ2l2ZW4sIEFuZ3VsYXIgdHJhY2tzIGNoYW5nZXMgYnkgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBzZWUgW1N0cnVjdHVyYWwgRGlyZWN0aXZlc10oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzKVxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nRm9yT2Y8VCwgVSBleHRlbmRzIE5nSXRlcmFibGU8VD4gPSBOZ0l0ZXJhYmxlPFQ+PiBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlO1xyXG4gICAgcHJpdmF0ZSBfZGlmZmVycztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBpdGVyYWJsZSBleHByZXNzaW9uLCB3aGljaCBjYW4gYmUgdXNlZCBhcyBhXHJcbiAgICAgKiBbdGVtcGxhdGUgaW5wdXQgdmFyaWFibGVdKGd1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcyN0ZW1wbGF0ZS1pbnB1dC12YXJpYWJsZSkuXHJcbiAgICAgKi9cclxuICAgIHNldCBuZ0Zvck9mKG5nRm9yT2Y6IChVICYgTmdJdGVyYWJsZTxUPikgfCB1bmRlZmluZWQgfCBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHRvIHRyYWNrIGNoYW5nZXMgZm9yIGl0ZW1zIGluIHRoZSBpdGVyYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBXaGVuIGl0ZW1zIGFyZSBhZGRlZCwgbW92ZWQsIG9yIHJlbW92ZWQgaW4gdGhlIGl0ZXJhYmxlLFxyXG4gICAgICogdGhlIGRpcmVjdGl2ZSBtdXN0IHJlLXJlbmRlciB0aGUgYXBwcm9wcmlhdGUgRE9NIG5vZGVzLlxyXG4gICAgICogVG8gbWluaW1pemUgY2h1cm4gaW4gdGhlIERPTSwgb25seSBub2RlcyB0aGF0IGhhdmUgY2hhbmdlZFxyXG4gICAgICogYXJlIHJlLXJlbmRlcmVkLlxyXG4gICAgICpcclxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgYXNzdW1lcyB0aGF0XHJcbiAgICAgKiB0aGUgb2JqZWN0IGluc3RhbmNlIGlkZW50aWZpZXMgdGhlIG5vZGUgaW4gdGhlIGl0ZXJhYmxlLlxyXG4gICAgICogV2hlbiB0aGlzIGZ1bmN0aW9uIGlzIHN1cHBsaWVkLCB0aGUgZGlyZWN0aXZlIHVzZXNcclxuICAgICAqIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHRvIGlkZW50aWZ5IHRoZSBpdGVtIG5vZGUsXHJcbiAgICAgKiByYXRoZXIgdGhhbiB0aGUgaWRlbnRpdHkgb2YgdGhlIG9iamVjdCBpdHNlbGYuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byBpbnB1dHMsXHJcbiAgICAgKiB0aGUgaXRlcmF0aW9uIGluZGV4IGFuZCB0aGUgbm9kZSBvYmplY3QgSUQuXHJcbiAgICAgKi9cclxuICAgIHNldCBuZ0ZvclRyYWNrQnkoZm46IFRyYWNrQnlGdW5jdGlvbjxUPik7XHJcbiAgICBnZXQgbmdGb3JUcmFja0J5KCk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuICAgIHByaXZhdGUgX25nRm9yT2Y7XHJcbiAgICBwcml2YXRlIF9uZ0Zvck9mRGlydHk7XHJcbiAgICBwcml2YXRlIF9kaWZmZXI7XHJcbiAgICBwcml2YXRlIF90cmFja0J5Rm47XHJcbiAgICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxULCBVPj4sIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdGVtcGxhdGUgdGhhdCBpcyBzdGFtcGVkIG91dCBmb3IgZWFjaCBpdGVtIGluIHRoZSBpdGVyYWJsZS5cclxuICAgICAqIEBzZWUgW3RlbXBsYXRlIHJlZmVyZW5jZSB2YXJpYWJsZV0oZ3VpZGUvdGVtcGxhdGUtc3ludGF4I3RlbXBsYXRlLXJlZmVyZW5jZS12YXJpYWJsZXMtLXZhci0pXHJcbiAgICAgKi9cclxuICAgIHNldCBuZ0ZvclRlbXBsYXRlKHZhbHVlOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxULCBVPj4pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIHRoZSBjaGFuZ2VzIHdoZW4gbmVlZGVkLlxyXG4gICAgICovXHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZDtcclxuICAgIHByaXZhdGUgX2FwcGx5Q2hhbmdlcztcclxuICAgIHByaXZhdGUgX3BlclZpZXdDaGFuZ2U7XHJcbiAgICAvKipcclxuICAgICAqIEFzc2VydHMgdGhlIGNvcnJlY3QgdHlwZSBvZiB0aGUgY29udGV4dCBmb3IgdGhlIHRlbXBsYXRlIHRoYXQgYE5nRm9yT2ZgIHdpbGwgcmVuZGVyLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBwcmVzZW5jZSBvZiB0aGlzIG1ldGhvZCBpcyBhIHNpZ25hbCB0byB0aGUgSXZ5IHRlbXBsYXRlIHR5cGUtY2hlY2sgY29tcGlsZXIgdGhhdCB0aGVcclxuICAgICAqIGBOZ0Zvck9mYCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSByZW5kZXJzIGl0cyB0ZW1wbGF0ZSB3aXRoIGEgc3BlY2lmaWMgY29udGV4dCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxULCBVIGV4dGVuZHMgTmdJdGVyYWJsZTxUPj4oZGlyOiBOZ0Zvck9mPFQsIFU+LCBjdHg6IGFueSk6IGN0eCBpcyBOZ0Zvck9mQ29udGV4dDxULCBVPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nRm9yT2ZDb250ZXh0PFQsIFUgZXh0ZW5kcyBOZ0l0ZXJhYmxlPFQ+ID0gTmdJdGVyYWJsZTxUPj4ge1xyXG4gICAgJGltcGxpY2l0OiBUO1xyXG4gICAgbmdGb3JPZjogVTtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoJGltcGxpY2l0OiBULCBuZ0Zvck9mOiBVLCBpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTtcclxuICAgIGdldCBmaXJzdCgpOiBib29sZWFuO1xyXG4gICAgZ2V0IGxhc3QoKTogYm9vbGVhbjtcclxuICAgIGdldCBldmVuKCk6IGJvb2xlYW47XHJcbiAgICBnZXQgb2RkKCk6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHRoYXQgY29uZGl0aW9uYWxseSBpbmNsdWRlcyBhIHRlbXBsYXRlIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZlxyXG4gKiBhbiBleHByZXNzaW9uIGNvZXJjZWQgdG8gQm9vbGVhbi5cclxuICogV2hlbiB0aGUgZXhwcmVzc2lvbiBldmFsdWF0ZXMgdG8gdHJ1ZSwgQW5ndWxhciByZW5kZXJzIHRoZSB0ZW1wbGF0ZVxyXG4gKiBwcm92aWRlZCBpbiBhIGB0aGVuYCBjbGF1c2UsIGFuZCB3aGVuICBmYWxzZSBvciBudWxsLFxyXG4gKiBBbmd1bGFyIHJlbmRlcnMgdGhlIHRlbXBsYXRlIHByb3ZpZGVkIGluIGFuIG9wdGlvbmFsIGBlbHNlYCBjbGF1c2UuIFRoZSBkZWZhdWx0XHJcbiAqIHRlbXBsYXRlIGZvciB0aGUgYGVsc2VgIGNsYXVzZSBpcyBibGFuay5cclxuICpcclxuICogQSBbc2hvcnRoYW5kIGZvcm1dKGd1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcyN0aGUtYXN0ZXJpc2stLXByZWZpeCkgb2YgdGhlIGRpcmVjdGl2ZSxcclxuICogYCpuZ0lmPVwiY29uZGl0aW9uXCJgLCBpcyBnZW5lcmFsbHkgdXNlZCwgcHJvdmlkZWRcclxuICogYXMgYW4gYXR0cmlidXRlIG9mIHRoZSBhbmNob3IgZWxlbWVudCBmb3IgdGhlIGluc2VydGVkIHRlbXBsYXRlLlxyXG4gKiBBbmd1bGFyIGV4cGFuZHMgdGhpcyBpbnRvIGEgbW9yZSBleHBsaWNpdCB2ZXJzaW9uLCBpbiB3aGljaCB0aGUgYW5jaG9yIGVsZW1lbnRcclxuICogaXMgY29udGFpbmVkIGluIGFuIGA8bmctdGVtcGxhdGU+YCBlbGVtZW50LlxyXG4gKlxyXG4gKiBTaW1wbGUgZm9ybSB3aXRoIHNob3J0aGFuZCBzeW50YXg6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8ZGl2ICpuZ0lmPVwiY29uZGl0aW9uXCI+Q29udGVudCB0byByZW5kZXIgd2hlbiBjb25kaXRpb24gaXMgdHJ1ZS48L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFNpbXBsZSBmb3JtIHdpdGggZXhwYW5kZWQgc3ludGF4OlxyXG4gKlxyXG4gKiBgYGBcclxuICogPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImNvbmRpdGlvblwiPjxkaXY+Q29udGVudCB0byByZW5kZXIgd2hlbiBjb25kaXRpb24gaXNcclxuICogdHJ1ZS48L2Rpdj48L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogRm9ybSB3aXRoIGFuIFwiZWxzZVwiIGJsb2NrOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGRpdiAqbmdJZj1cImNvbmRpdGlvbjsgZWxzZSBlbHNlQmxvY2tcIj5Db250ZW50IHRvIHJlbmRlciB3aGVuIGNvbmRpdGlvbiBpcyB0cnVlLjwvZGl2PlxyXG4gKiA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5Db250ZW50IHRvIHJlbmRlciB3aGVuIGNvbmRpdGlvbiBpcyBmYWxzZS48L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogU2hvcnRoYW5kIGZvcm0gd2l0aCBcInRoZW5cIiBhbmQgXCJlbHNlXCIgYmxvY2tzOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGRpdiAqbmdJZj1cImNvbmRpdGlvbjsgdGhlbiB0aGVuQmxvY2sgZWxzZSBlbHNlQmxvY2tcIj48L2Rpdj5cclxuICogPG5nLXRlbXBsYXRlICN0aGVuQmxvY2s+Q29udGVudCB0byByZW5kZXIgd2hlbiBjb25kaXRpb24gaXMgdHJ1ZS48L25nLXRlbXBsYXRlPlxyXG4gKiA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5Db250ZW50IHRvIHJlbmRlciB3aGVuIGNvbmRpdGlvbiBpcyBmYWxzZS48L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogRm9ybSB3aXRoIHN0b3JpbmcgdGhlIHZhbHVlIGxvY2FsbHk6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8ZGl2ICpuZ0lmPVwiY29uZGl0aW9uIGFzIHZhbHVlOyBlbHNlIGVsc2VCbG9ja1wiPnt7dmFsdWV9fTwvZGl2PlxyXG4gKiA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5Db250ZW50IHRvIHJlbmRlciB3aGVuIHZhbHVlIGlzIG51bGwuPC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFRoZSBgKm5nSWZgIGRpcmVjdGl2ZSBpcyBtb3N0IGNvbW1vbmx5IHVzZWQgdG8gY29uZGl0aW9uYWxseSBzaG93IGFuIGlubGluZSB0ZW1wbGF0ZSxcclxuICogYXMgc2VlbiBpbiB0aGUgZm9sbG93aW5nICBleGFtcGxlLlxyXG4gKiBUaGUgZGVmYXVsdCBgZWxzZWAgdGVtcGxhdGUgaXMgYmxhbmsuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdJZi90cy9tb2R1bGUudHMgcmVnaW9uPSdOZ0lmU2ltcGxlJ31cclxuICpcclxuICogIyMjIFNob3dpbmcgYW4gYWx0ZXJuYXRpdmUgdGVtcGxhdGUgdXNpbmcgYGVsc2VgXHJcbiAqXHJcbiAqIFRvIGRpc3BsYXkgYSB0ZW1wbGF0ZSB3aGVuIGBleHByZXNzaW9uYCBldmFsdWF0ZXMgdG8gZmFsc2UsIHVzZSBhbiBgZWxzZWAgdGVtcGxhdGVcclxuICogYmluZGluZyBhcyBzaG93biBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXHJcbiAqIFRoZSBgZWxzZWAgYmluZGluZyBwb2ludHMgdG8gYW4gYDxuZy10ZW1wbGF0ZT5gICBlbGVtZW50IGxhYmVsZWQgYCNlbHNlQmxvY2tgLlxyXG4gKiBUaGUgdGVtcGxhdGUgY2FuIGJlIGRlZmluZWQgYW55d2hlcmUgaW4gdGhlIGNvbXBvbmVudCB2aWV3LCBidXQgaXMgdHlwaWNhbGx5IHBsYWNlZCByaWdodCBhZnRlclxyXG4gKiBgbmdJZmAgZm9yIHJlYWRhYmlsaXR5LlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nSWYvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nTmdJZkVsc2UnfVxyXG4gKlxyXG4gKiAjIyMgVXNpbmcgYW4gZXh0ZXJuYWwgYHRoZW5gIHRlbXBsYXRlXHJcbiAqXHJcbiAqIEluIHRoZSBwcmV2aW91cyBleGFtcGxlLCB0aGUgdGhlbi1jbGF1c2UgdGVtcGxhdGUgaXMgc3BlY2lmaWVkIGlubGluZSwgYXMgdGhlIGNvbnRlbnQgb2YgdGhlXHJcbiAqIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBgbmdJZmAgZGlyZWN0aXZlLiBZb3UgY2FuIGFsc28gc3BlY2lmeSBhIHRlbXBsYXRlIHRoYXQgaXMgZGVmaW5lZFxyXG4gKiBleHRlcm5hbGx5LCBieSByZWZlcmVuY2luZyBhIGxhYmVsZWQgYDxuZy10ZW1wbGF0ZT5gIGVsZW1lbnQuIFdoZW4geW91IGRvIHRoaXMsIHlvdSBjYW5cclxuICogY2hhbmdlIHdoaWNoIHRlbXBsYXRlIHRvIHVzZSBhdCBydW50aW1lLCBhcyBzaG93biBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdJZi90cy9tb2R1bGUudHMgcmVnaW9uPSdOZ0lmVGhlbkVsc2UnfVxyXG4gKlxyXG4gKiAjIyMgU3RvcmluZyBhIGNvbmRpdGlvbmFsIHJlc3VsdCBpbiBhIHZhcmlhYmxlXHJcbiAqXHJcbiAqIFlvdSBtaWdodCB3YW50IHRvIHNob3cgYSBzZXQgb2YgcHJvcGVydGllcyBmcm9tIHRoZSBzYW1lIG9iamVjdC4gSWYgeW91IGFyZSB3YWl0aW5nXHJcbiAqIGZvciBhc3luY2hyb25vdXMgZGF0YSwgdGhlIG9iamVjdCBjYW4gYmUgdW5kZWZpbmVkLlxyXG4gKiBJbiB0aGlzIGNhc2UsIHlvdSBjYW4gdXNlIGBuZ0lmYCBhbmQgc3RvcmUgdGhlIHJlc3VsdCBvZiB0aGUgY29uZGl0aW9uIGluIGEgbG9jYWxcclxuICogdmFyaWFibGUgYXMgc2hvd24gaW4gdGhlIHRoZSBmb2xsb3dpbmcgZXhhbXBsZS5cclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9uZ0lmL3RzL21vZHVsZS50cyByZWdpb249J05nSWZBcyd9XHJcbiAqXHJcbiAqIFRoaXMgY29kZSB1c2VzIG9ubHkgb25lIGBBc3luY1BpcGVgLCBzbyBvbmx5IG9uZSBzdWJzY3JpcHRpb24gaXMgY3JlYXRlZC5cclxuICogVGhlIGNvbmRpdGlvbmFsIHN0YXRlbWVudCBzdG9yZXMgdGhlIHJlc3VsdCBvZiBgdXNlclN0cmVhbXxhc3luY2AgaW4gdGhlIGxvY2FsIHZhcmlhYmxlIGB1c2VyYC5cclxuICogWW91IGNhbiB0aGVuIGJpbmQgdGhlIGxvY2FsIGB1c2VyYCByZXBlYXRlZGx5LlxyXG4gKlxyXG4gKiBUaGUgY29uZGl0aW9uYWwgZGlzcGxheXMgdGhlIGRhdGEgb25seSBpZiBgdXNlclN0cmVhbWAgcmV0dXJucyBhIHZhbHVlLFxyXG4gKiBzbyB5b3UgZG9uJ3QgbmVlZCB0byB1c2UgdGhlXHJcbiAqIFtzYWZlLW5hdmlnYXRpb24tb3BlcmF0b3JdKGd1aWRlL3RlbXBsYXRlLXN5bnRheCNzYWZlLW5hdmlnYXRpb24tb3BlcmF0b3IpIChgPy5gKVxyXG4gKiB0byBndWFyZCBhZ2FpbnN0IG51bGwgdmFsdWVzIHdoZW4gYWNjZXNzaW5nIHByb3BlcnRpZXMuXHJcbiAqIFlvdSBjYW4gZGlzcGxheSBhbiBhbHRlcm5hdGl2ZSB0ZW1wbGF0ZSB3aGlsZSB3YWl0aW5nIGZvciB0aGUgZGF0YS5cclxuICpcclxuICogIyMjIFNob3J0aGFuZCBzeW50YXhcclxuICpcclxuICogVGhlIHNob3J0aGFuZCBzeW50YXggYCpuZ0lmYCBleHBhbmRzIGludG8gdHdvIHNlcGFyYXRlIHRlbXBsYXRlIHNwZWNpZmljYXRpb25zXHJcbiAqIGZvciB0aGUgXCJ0aGVuXCIgYW5kIFwiZWxzZVwiIGNsYXVzZXMuIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGUgZm9sbG93aW5nIHNob3J0aGFuZCBzdGF0ZW1lbnQsXHJcbiAqIHRoYXQgaXMgbWVhbnQgdG8gc2hvdyBhIGxvYWRpbmcgcGFnZSB3aGlsZSB3YWl0aW5nIGZvciBkYXRhIHRvIGJlIGxvYWRlZC5cclxuICpcclxuICogYGBgXHJcbiAqIDxkaXYgY2xhc3M9XCJoZXJvLWxpc3RcIiAqbmdJZj1cImhlcm9lcyBlbHNlIGxvYWRpbmdcIj5cclxuICogIC4uLlxyXG4gKiA8L2Rpdj5cclxuICpcclxuICogPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxyXG4gKiAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAqIDwvbmctdGVtcGxhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIHNlZSB0aGF0IHRoZSBcImVsc2VcIiBjbGF1c2UgcmVmZXJlbmNlcyB0aGUgYDxuZy10ZW1wbGF0ZT5gXHJcbiAqIHdpdGggdGhlIGAjbG9hZGluZ2AgbGFiZWwsIGFuZCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBcInRoZW5cIiBjbGF1c2VcclxuICogaXMgcHJvdmlkZWQgYXMgdGhlIGNvbnRlbnQgb2YgdGhlIGFuY2hvciBlbGVtZW50LlxyXG4gKlxyXG4gKiBIb3dldmVyLCB3aGVuIEFuZ3VsYXIgZXhwYW5kcyB0aGUgc2hvcnRoYW5kIHN5bnRheCwgaXQgY3JlYXRlc1xyXG4gKiBhbm90aGVyIGA8bmctdGVtcGxhdGU+YCB0YWcsIHdpdGggYG5nSWZgIGFuZCBgbmdJZkVsc2VgIGRpcmVjdGl2ZXMuXHJcbiAqIFRoZSBhbmNob3IgZWxlbWVudCBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIFwidGhlblwiIGNsYXVzZSBiZWNvbWVzXHJcbiAqIHRoZSBjb250ZW50IG9mIHRoaXMgdW5sYWJlbGVkIGA8bmctdGVtcGxhdGU+YCB0YWcuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8bmctdGVtcGxhdGUgW25nSWZdPVwiaGVyb2VzXCIgW25nSWZFbHNlXT1cImxvYWRpbmdcIj5cclxuICogIDxkaXYgY2xhc3M9XCJoZXJvLWxpc3RcIj5cclxuICogICAuLi5cclxuICogIDwvZGl2PlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKlxyXG4gKiA8bmctdGVtcGxhdGUgI2xvYWRpbmc+XHJcbiAqICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICogPC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBwcmVzZW5jZSBvZiB0aGUgaW1wbGljaXQgdGVtcGxhdGUgb2JqZWN0IGhhcyBpbXBsaWNhdGlvbnMgZm9yIHRoZSBuZXN0aW5nIG9mXHJcbiAqIHN0cnVjdHVyYWwgZGlyZWN0aXZlcy4gRm9yIG1vcmUgb24gdGhpcyBzdWJqZWN0LCBzZWVcclxuICogW1N0cnVjdHVyYWwgRGlyZWN0aXZlc10oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcyNvbmUtcGVyLWVsZW1lbnQpLlxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nSWY8VCA9IHVua25vd24+IHtcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI7XHJcbiAgICBwcml2YXRlIF9jb250ZXh0O1xyXG4gICAgcHJpdmF0ZSBfdGhlblRlbXBsYXRlUmVmO1xyXG4gICAgcHJpdmF0ZSBfZWxzZVRlbXBsYXRlUmVmO1xyXG4gICAgcHJpdmF0ZSBfdGhlblZpZXdSZWY7XHJcbiAgICBwcml2YXRlIF9lbHNlVmlld1JlZjtcclxuICAgIGNvbnN0cnVjdG9yKF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdJZkNvbnRleHQ8VD4+KTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJvb2xlYW4gZXhwcmVzc2lvbiB0byBldmFsdWF0ZSBhcyB0aGUgY29uZGl0aW9uIGZvciBzaG93aW5nIGEgdGVtcGxhdGUuXHJcbiAgICAgKi9cclxuICAgIHNldCBuZ0lmKGNvbmRpdGlvbjogVCk7XHJcbiAgICAvKipcclxuICAgICAqIEEgdGVtcGxhdGUgdG8gc2hvdyBpZiB0aGUgY29uZGl0aW9uIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHNldCBuZ0lmVGhlbih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdJZkNvbnRleHQ8VD4+IHwgbnVsbCk7XHJcbiAgICAvKipcclxuICAgICAqIEEgdGVtcGxhdGUgdG8gc2hvdyBpZiB0aGUgY29uZGl0aW9uIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBzZXQgbmdJZkVsc2UodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5nSWZDb250ZXh0PFQ+PiB8IG51bGwpO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlVmlldztcclxuICAgIC8qKlxyXG4gICAgICogQXNzZXJ0IHRoZSBjb3JyZWN0IHR5cGUgb2YgdGhlIGV4cHJlc3Npb24gYm91bmQgdG8gdGhlIGBuZ0lmYCBpbnB1dCB3aXRoaW4gdGhlIHRlbXBsYXRlLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBwcmVzZW5jZSBvZiB0aGlzIHN0YXRpYyBmaWVsZCBpcyBhIHNpZ25hbCB0byB0aGUgSXZ5IHRlbXBsYXRlIHR5cGUgY2hlY2sgY29tcGlsZXIgdGhhdFxyXG4gICAgICogd2hlbiB0aGUgYE5nSWZgIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHJlbmRlcnMgaXRzIHRlbXBsYXRlLCB0aGUgdHlwZSBvZiB0aGUgZXhwcmVzc2lvbiBib3VuZFxyXG4gICAgICogdG8gYG5nSWZgIHNob3VsZCBiZSBuYXJyb3dlZCBpbiBzb21lIHdheS4gRm9yIGBOZ0lmYCwgdGhlIGJpbmRpbmcgZXhwcmVzc2lvbiBpdHNlbGYgaXMgdXNlZCB0b1xyXG4gICAgICogbmFycm93IGl0cyB0eXBlLCB3aGljaCBhbGxvd3MgdGhlIHN0cmljdE51bGxDaGVja3MgZmVhdHVyZSBvZiBUeXBlU2NyaXB0IHRvIHdvcmsgd2l0aCBgTmdJZmAuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBuZ1RlbXBsYXRlR3VhcmRfbmdJZjogJ2JpbmRpbmcnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBc3NlcnRzIHRoZSBjb3JyZWN0IHR5cGUgb2YgdGhlIGNvbnRleHQgZm9yIHRoZSB0ZW1wbGF0ZSB0aGF0IGBOZ0lmYCB3aWxsIHJlbmRlci5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBtZXRob2QgaXMgYSBzaWduYWwgdG8gdGhlIEl2eSB0ZW1wbGF0ZSB0eXBlLWNoZWNrIGNvbXBpbGVyIHRoYXQgdGhlXHJcbiAgICAgKiBgTmdJZmAgc3RydWN0dXJhbCBkaXJlY3RpdmUgcmVuZGVycyBpdHMgdGVtcGxhdGUgd2l0aCBhIHNwZWNpZmljIGNvbnRleHQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oZGlyOiBOZ0lmPFQ+LCBjdHg6IGFueSk6IGN0eCBpcyBOZ0lmQ29udGV4dDxOb25OdWxsYWJsZTxUPj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ0lmQ29udGV4dDxUID0gdW5rbm93bj4ge1xyXG4gICAgJGltcGxpY2l0OiBUO1xyXG4gICAgbmdJZjogVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHBsdXJhbCBjYXNlIGJhc2VkIG9uIHRoZSBsb2NhbGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdMb2NhbGVMb2NhbGl6YXRpb24gZXh0ZW5kcyBOZ0xvY2FsaXphdGlvbiB7XHJcbiAgICBwcm90ZWN0ZWQgbG9jYWxlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGU6IHN0cmluZyk7XHJcbiAgICBnZXRQbHVyYWxDYXRlZ29yeSh2YWx1ZTogYW55LCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTmdMb2NhbGl6YXRpb24ge1xyXG4gICAgYWJzdHJhY3QgZ2V0UGx1cmFsQ2F0ZWdvcnkodmFsdWU6IGFueSwgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBgYGBcclxuICogPHNvbWUtZWxlbWVudCBbbmdQbHVyYWxdPVwidmFsdWVcIj5cclxuICogICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwiPTBcIj50aGVyZSBpcyBub3RoaW5nPC9uZy10ZW1wbGF0ZT5cclxuICogICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwiPTFcIj50aGVyZSBpcyBvbmU8L25nLXRlbXBsYXRlPlxyXG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJmZXdcIj50aGVyZSBhcmUgYSBmZXc8L25nLXRlbXBsYXRlPlxyXG4gKiA8L3NvbWUtZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBZGRzIC8gcmVtb3ZlcyBET00gc3ViLXRyZWVzIGJhc2VkIG9uIGEgbnVtZXJpYyB2YWx1ZS4gVGFpbG9yZWQgZm9yIHBsdXJhbGl6YXRpb24uXHJcbiAqXHJcbiAqIERpc3BsYXlzIERPTSBzdWItdHJlZXMgdGhhdCBtYXRjaCB0aGUgc3dpdGNoIGV4cHJlc3Npb24gdmFsdWUsIG9yIGZhaWxpbmcgdGhhdCwgRE9NIHN1Yi10cmVlc1xyXG4gKiB0aGF0IG1hdGNoIHRoZSBzd2l0Y2ggZXhwcmVzc2lvbidzIHBsdXJhbGl6YXRpb24gY2F0ZWdvcnkuXHJcbiAqXHJcbiAqIFRvIHVzZSB0aGlzIGRpcmVjdGl2ZSB5b3UgbXVzdCBwcm92aWRlIGEgY29udGFpbmVyIGVsZW1lbnQgdGhhdCBzZXRzIHRoZSBgW25nUGx1cmFsXWAgYXR0cmlidXRlXHJcbiAqIHRvIGEgc3dpdGNoIGV4cHJlc3Npb24uIElubmVyIGVsZW1lbnRzIHdpdGggYSBgW25nUGx1cmFsQ2FzZV1gIHdpbGwgZGlzcGxheSBiYXNlZCBvbiB0aGVpclxyXG4gKiBleHByZXNzaW9uOlxyXG4gKiAtIGlmIGBbbmdQbHVyYWxDYXNlXWAgaXMgc2V0IHRvIGEgdmFsdWUgc3RhcnRpbmcgd2l0aCBgPWAsIGl0IHdpbGwgb25seSBkaXNwbGF5IGlmIHRoZSB2YWx1ZVxyXG4gKiAgIG1hdGNoZXMgdGhlIHN3aXRjaCBleHByZXNzaW9uIGV4YWN0bHksXHJcbiAqIC0gb3RoZXJ3aXNlLCB0aGUgdmlldyB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBcImNhdGVnb3J5IG1hdGNoXCIsIGFuZCB3aWxsIG9ubHkgZGlzcGxheSBpZiBleGFjdFxyXG4gKiAgIHZhbHVlIG1hdGNoZXMgYXJlbid0IGZvdW5kIGFuZCB0aGUgdmFsdWUgbWFwcyB0byBpdHMgY2F0ZWdvcnkgZm9yIHRoZSBkZWZpbmVkIGxvY2FsZS5cclxuICpcclxuICogU2VlIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL2luZGV4L2NsZHItc3BlYy9wbHVyYWwtcnVsZXNcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdQbHVyYWwge1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxpemF0aW9uO1xyXG4gICAgcHJpdmF0ZSBfc3dpdGNoVmFsdWU7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVWaWV3O1xyXG4gICAgcHJpdmF0ZSBfY2FzZVZpZXdzO1xyXG4gICAgY29uc3RydWN0b3IoX2xvY2FsaXphdGlvbjogTmdMb2NhbGl6YXRpb24pO1xyXG4gICAgc2V0IG5nUGx1cmFsKHZhbHVlOiBudW1iZXIpO1xyXG4gICAgYWRkQ2FzZSh2YWx1ZTogc3RyaW5nLCBzd2l0Y2hWaWV3OiBTd2l0Y2hWaWV3KTogdm9pZDtcclxuICAgIHByaXZhdGUgX3VwZGF0ZVZpZXc7XHJcbiAgICBwcml2YXRlIF9jbGVhclZpZXdzO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVWaWV3O1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ3JlYXRlcyBhIHZpZXcgdGhhdCB3aWxsIGJlIGFkZGVkL3JlbW92ZWQgZnJvbSB0aGUgcGFyZW50IHtAbGluayBOZ1BsdXJhbH0gd2hlbiB0aGVcclxuICogZ2l2ZW4gZXhwcmVzc2lvbiBtYXRjaGVzIHRoZSBwbHVyYWwgZXhwcmVzc2lvbiBhY2NvcmRpbmcgdG8gQ0xEUiBydWxlcy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogYGBgXHJcbiAqIDxzb21lLWVsZW1lbnQgW25nUGx1cmFsXT1cInZhbHVlXCI+XHJcbiAqICAgPG5nLXRlbXBsYXRlIG5nUGx1cmFsQ2FzZT1cIj0wXCI+Li4uPC9uZy10ZW1wbGF0ZT5cclxuICogICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwib3RoZXJcIj4uLi48L25nLXRlbXBsYXRlPlxyXG4gKiA8L3NvbWUtZWxlbWVudD5cclxuICpgYGBcclxuICpcclxuICogU2VlIHtAbGluayBOZ1BsdXJhbH0gZm9yIG1vcmUgZGV0YWlscyBhbmQgZXhhbXBsZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdQbHVyYWxDYXNlIHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nLCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8T2JqZWN0Piwgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgbmdQbHVyYWw6IE5nUGx1cmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogU2V0IHRoZSBmb250IG9mIHRoZSBjb250YWluaW5nIGVsZW1lbnQgdG8gdGhlIHJlc3VsdCBvZiBhbiBleHByZXNzaW9uLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPHNvbWUtZWxlbWVudCBbbmdTdHlsZV09XCJ7J2ZvbnQtc3R5bGUnOiBzdHlsZUV4cH1cIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFNldCB0aGUgd2lkdGggb2YgdGhlIGNvbnRhaW5pbmcgZWxlbWVudCB0byBhIHBpeGVsIHZhbHVlIHJldHVybmVkIGJ5IGFuIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8c29tZS1lbGVtZW50IFtuZ1N0eWxlXT1cInsnbWF4LXdpZHRoLnB4Jzogd2lkdGhFeHB9XCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBTZXQgYSBjb2xsZWN0aW9uIG9mIHN0eWxlIHZhbHVlcyB1c2luZyBhbiBleHByZXNzaW9uIHRoYXQgcmV0dXJucyBrZXktdmFsdWUgcGFpcnMuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8c29tZS1lbGVtZW50IFtuZ1N0eWxlXT1cIm9iakV4cFwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEFuIGF0dHJpYnV0ZSBkaXJlY3RpdmUgdGhhdCB1cGRhdGVzIHN0eWxlcyBmb3IgdGhlIGNvbnRhaW5pbmcgSFRNTCBlbGVtZW50LlxyXG4gKiBTZXRzIG9uZSBvciBtb3JlIHN0eWxlIHByb3BlcnRpZXMsIHNwZWNpZmllZCBhcyBjb2xvbi1zZXBhcmF0ZWQga2V5LXZhbHVlIHBhaXJzLlxyXG4gKiBUaGUga2V5IGlzIGEgc3R5bGUgbmFtZSwgd2l0aCBhbiBvcHRpb25hbCBgLjx1bml0PmAgc3VmZml4XHJcbiAqIChzdWNoIGFzICd0b3AucHgnLCAnZm9udC1zdHlsZS5lbScpLlxyXG4gKiBUaGUgdmFsdWUgaXMgYW4gZXhwcmVzc2lvbiB0byBiZSBldmFsdWF0ZWQuXHJcbiAqIFRoZSByZXN1bHRpbmcgbm9uLW51bGwgdmFsdWUsIGV4cHJlc3NlZCBpbiB0aGUgZ2l2ZW4gdW5pdCxcclxuICogaXMgYXNzaWduZWQgdG8gdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5LlxyXG4gKiBJZiB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpb24gaXMgbnVsbCwgdGhlIGNvcnJlc3BvbmRpbmcgc3R5bGUgaXMgcmVtb3ZlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdTdHlsZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gICAgcHJpdmF0ZSBfbmdFbDtcclxuICAgIHByaXZhdGUgX2RpZmZlcnM7XHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcclxuICAgIHByaXZhdGUgX25nU3R5bGU7XHJcbiAgICBwcml2YXRlIF9kaWZmZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihfbmdFbDogRWxlbWVudFJlZiwgX2RpZmZlcnM6IEtleVZhbHVlRGlmZmVycywgX3JlbmRlcmVyOiBSZW5kZXJlcjIpO1xyXG4gICAgc2V0IG5nU3R5bGUodmFsdWVzOiB7XHJcbiAgICAgICAgW2tsYXNzOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9IHwgbnVsbCk7XHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZDtcclxuICAgIHByaXZhdGUgX3NldFN0eWxlO1xyXG4gICAgcHJpdmF0ZSBfYXBwbHlDaGFuZ2VzO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIGBbbmdTd2l0Y2hdYCBkaXJlY3RpdmUgb24gYSBjb250YWluZXIgc3BlY2lmaWVzIGFuIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdC5cclxuICogVGhlIGV4cHJlc3Npb25zIHRvIG1hdGNoIGFyZSBwcm92aWRlZCBieSBgbmdTd2l0Y2hDYXNlYCBkaXJlY3RpdmVzIG9uIHZpZXdzIHdpdGhpbiB0aGUgY29udGFpbmVyLlxyXG4gKiAtIEV2ZXJ5IHZpZXcgdGhhdCBtYXRjaGVzIGlzIHJlbmRlcmVkLlxyXG4gKiAtIElmIHRoZXJlIGFyZSBubyBtYXRjaGVzLCBhIHZpZXcgd2l0aCB0aGUgYG5nU3dpdGNoRGVmYXVsdGAgZGlyZWN0aXZlIGlzIHJlbmRlcmVkLlxyXG4gKiAtIEVsZW1lbnRzIHdpdGhpbiB0aGUgYFtOZ1N3aXRjaF1gIHN0YXRlbWVudCBidXQgb3V0c2lkZSBvZiBhbnkgYE5nU3dpdGNoQ2FzZWBcclxuICogb3IgYG5nU3dpdGNoRGVmYXVsdGAgZGlyZWN0aXZlIGFyZSBwcmVzZXJ2ZWQgYXQgdGhlIGxvY2F0aW9uLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBEZWZpbmUgYSBjb250YWluZXIgZWxlbWVudCBmb3IgdGhlIGRpcmVjdGl2ZSwgYW5kIHNwZWNpZnkgdGhlIHN3aXRjaCBleHByZXNzaW9uXHJcbiAqIHRvIG1hdGNoIGFnYWluc3QgYXMgYW4gYXR0cmlidXRlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGNvbnRhaW5lci1lbGVtZW50IFtuZ1N3aXRjaF09XCJzd2l0Y2hfZXhwcmVzc2lvblwiPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aGluIHRoZSBjb250YWluZXIsIGAqbmdTd2l0Y2hDYXNlYCBzdGF0ZW1lbnRzIHNwZWNpZnkgdGhlIG1hdGNoIGV4cHJlc3Npb25zXHJcbiAqIGFzIGF0dHJpYnV0ZXMuIEluY2x1ZGUgYCpuZ1N3aXRjaERlZmF1bHRgIGFzIHRoZSBmaW5hbCBjYXNlLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGNvbnRhaW5lci1lbGVtZW50IFtuZ1N3aXRjaF09XCJzd2l0Y2hfZXhwcmVzc2lvblwiPlxyXG4gKiAgICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzFcIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICogLi4uXHJcbiAqICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cclxuICogPC9jb250YWluZXItZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBVc2FnZSBFeGFtcGxlc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgaG93IHRvIHVzZSBtb3JlIHRoYW4gb25lIGNhc2UgdG8gZGlzcGxheSB0aGUgc2FtZSB2aWV3OlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGNvbnRhaW5lci1lbGVtZW50IFtuZ1N3aXRjaF09XCJzd2l0Y2hfZXhwcmVzc2lvblwiPlxyXG4gKiAgIDwhLS0gdGhlIHNhbWUgdmlldyBjYW4gYmUgc2hvd24gaW4gbW9yZSB0aGFuIG9uZSBjYXNlIC0tPlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMlwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgIDxzb21lLW90aGVyLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fM1wiPi4uLjwvc29tZS1vdGhlci1lbGVtZW50PlxyXG4gKiAgIDwhLS1kZWZhdWx0IGNhc2Ugd2hlbiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyAtLT5cclxuICogICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaERlZmF1bHQ+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqIDwvY29udGFpbmVyLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgaG93IGNhc2VzIGNhbiBiZSBuZXN0ZWQ6XHJcbiAqIGBgYFxyXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XHJcbiAqICAgICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgICAgICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzJcIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICogICAgICAgPHNvbWUtb3RoZXItZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8zXCI+Li4uPC9zb21lLW90aGVyLWVsZW1lbnQ+XHJcbiAqICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fM1wiPlxyXG4gKiAgICAgICAgIDwhLS0gdXNlIGEgbmctY29udGFpbmVyIHRvIGdyb3VwIG11bHRpcGxlIHJvb3Qgbm9kZXMgLS0+XHJcbiAqICAgICAgICAgPGlubmVyLWVsZW1lbnQ+PC9pbm5lci1lbGVtZW50PlxyXG4gKiAgICAgICAgIDxpbm5lci1vdGhlci1lbGVtZW50PjwvaW5uZXItb3RoZXItZWxlbWVudD5cclxuICogICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAqICAgICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cclxuICogICAgIDwvY29udGFpbmVyLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBzZWUgYE5nU3dpdGNoQ2FzZWBcclxuICogQHNlZSBgTmdTd2l0Y2hEZWZhdWx0YFxyXG4gKiBAc2VlIFtTdHJ1Y3R1cmFsIERpcmVjdGl2ZXNdKGd1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcylcclxuICpcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nU3dpdGNoIHtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRWaWV3cztcclxuICAgIHByaXZhdGUgX2RlZmF1bHRVc2VkO1xyXG4gICAgcHJpdmF0ZSBfY2FzZUNvdW50O1xyXG4gICAgcHJpdmF0ZSBfbGFzdENhc2VDaGVja0luZGV4O1xyXG4gICAgcHJpdmF0ZSBfbGFzdENhc2VzTWF0Y2hlZDtcclxuICAgIHByaXZhdGUgX25nU3dpdGNoO1xyXG4gICAgc2V0IG5nU3dpdGNoKG5ld1ZhbHVlOiBhbnkpO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlRGVmYXVsdENhc2VzO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUHJvdmlkZXMgYSBzd2l0Y2ggY2FzZSBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QgYW4gZW5jbG9zaW5nIGBuZ1N3aXRjaGAgZXhwcmVzc2lvbi5cclxuICogV2hlbiB0aGUgZXhwcmVzc2lvbnMgbWF0Y2gsIHRoZSBnaXZlbiBgTmdTd2l0Y2hDYXNlYCB0ZW1wbGF0ZSBpcyByZW5kZXJlZC5cclxuICogSWYgbXVsdGlwbGUgbWF0Y2ggZXhwcmVzc2lvbnMgbWF0Y2ggdGhlIHN3aXRjaCBleHByZXNzaW9uIHZhbHVlLCBhbGwgb2YgdGhlbSBhcmUgZGlzcGxheWVkLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBXaXRoaW4gYSBzd2l0Y2ggY29udGFpbmVyLCBgKm5nU3dpdGNoQ2FzZWAgc3RhdGVtZW50cyBzcGVjaWZ5IHRoZSBtYXRjaCBleHByZXNzaW9uc1xyXG4gKiBhcyBhdHRyaWJ1dGVzLiBJbmNsdWRlIGAqbmdTd2l0Y2hEZWZhdWx0YCBhcyB0aGUgZmluYWwgY2FzZS5cclxuICpcclxuICogYGBgXHJcbiAqIDxjb250YWluZXItZWxlbWVudCBbbmdTd2l0Y2hdPVwic3dpdGNoX2V4cHJlc3Npb25cIj5cclxuICogICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzFcIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICogICAuLi5cclxuICogICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaERlZmF1bHQ+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqIDwvY29udGFpbmVyLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBFYWNoIHN3aXRjaC1jYXNlIHN0YXRlbWVudCBjb250YWlucyBhbiBpbi1saW5lIEhUTUwgdGVtcGxhdGUgb3IgdGVtcGxhdGUgcmVmZXJlbmNlXHJcbiAqIHRoYXQgZGVmaW5lcyB0aGUgc3VidHJlZSB0byBiZSBzZWxlY3RlZCBpZiB0aGUgdmFsdWUgb2YgdGhlIG1hdGNoIGV4cHJlc3Npb25cclxuICogbWF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHN3aXRjaCBleHByZXNzaW9uLlxyXG4gKlxyXG4gKiBVbmxpa2UgSmF2YVNjcmlwdCwgd2hpY2ggdXNlcyBzdHJpY3QgZXF1YWxpdHksIEFuZ3VsYXIgdXNlcyBsb29zZSBlcXVhbGl0eS5cclxuICogVGhpcyBtZWFucyB0aGF0IHRoZSBlbXB0eSBzdHJpbmcsIGBcIlwiYCBtYXRjaGVzIDAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQHNlZSBgTmdTd2l0Y2hgXHJcbiAqIEBzZWUgYE5nU3dpdGNoRGVmYXVsdGBcclxuICpcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nU3dpdGNoQ2FzZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gICAgcHJpdmF0ZSBuZ1N3aXRjaDtcclxuICAgIHByaXZhdGUgX3ZpZXc7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyB0aGUgSFRNTCB0ZW1wbGF0ZSB0byBiZSBzZWxlY3RlZCBvbiBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgbmdTd2l0Y2hDYXNlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PiwgbmdTd2l0Y2g6IE5nU3dpdGNoKTtcclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybXMgY2FzZSBtYXRjaGluZy4gRm9yIGludGVybmFsIHVzZSBvbmx5LlxyXG4gICAgICovXHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENyZWF0ZXMgYSB2aWV3IHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBubyBgTmdTd2l0Y2hDYXNlYCBleHByZXNzaW9uc1xyXG4gKiBtYXRjaCB0aGUgYE5nU3dpdGNoYCBleHByZXNzaW9uLlxyXG4gKiBUaGlzIHN0YXRlbWVudCBzaG91bGQgYmUgdGhlIGZpbmFsIGNhc2UgaW4gYW4gYE5nU3dpdGNoYC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAc2VlIGBOZ1N3aXRjaGBcclxuICogQHNlZSBgTmdTd2l0Y2hDYXNlYFxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdTd2l0Y2hEZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LCBuZ1N3aXRjaDogTmdTd2l0Y2gpO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogSW5zZXJ0cyBhbiBlbWJlZGRlZCB2aWV3IGZyb20gYSBwcmVwYXJlZCBgVGVtcGxhdGVSZWZgLlxyXG4gKlxyXG4gKiBZb3UgY2FuIGF0dGFjaCBhIGNvbnRleHQgb2JqZWN0IHRvIHRoZSBgRW1iZWRkZWRWaWV3UmVmYCBieSBzZXR0aW5nIGBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdYC5cclxuICogYFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF1gIHNob3VsZCBiZSBhbiBvYmplY3QsIHRoZSBvYmplY3QncyBrZXlzIHdpbGwgYmUgYXZhaWxhYmxlIGZvciBiaW5kaW5nXHJcbiAqIGJ5IHRoZSBsb2NhbCB0ZW1wbGF0ZSBgbGV0YCBkZWNsYXJhdGlvbnMuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIGBgYFxyXG4gKiA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVSZWZFeHA7IGNvbnRleHQ6IGNvbnRleHRFeHBcIj48L25nLWNvbnRhaW5lcj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFVzaW5nIHRoZSBrZXkgYCRpbXBsaWNpdGAgaW4gdGhlIGNvbnRleHQgb2JqZWN0IHdpbGwgc2V0IGl0cyB2YWx1ZSBhcyBkZWZhdWx0LlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nVGVtcGxhdGVPdXRsZXQvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nTmdUZW1wbGF0ZU91dGxldCd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nVGVtcGxhdGVPdXRsZXQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgX3ZpZXdSZWY7XHJcbiAgICAvKipcclxuICAgICAqIEEgY29udGV4dCBvYmplY3QgdG8gYXR0YWNoIHRvIHRoZSB7QGxpbmsgRW1iZWRkZWRWaWV3UmVmfS4gVGhpcyBzaG91bGQgYmUgYW5cclxuICAgICAqIG9iamVjdCwgdGhlIG9iamVjdCdzIGtleXMgd2lsbCBiZSBhdmFpbGFibGUgZm9yIGJpbmRpbmcgYnkgdGhlIGxvY2FsIHRlbXBsYXRlIGBsZXRgXHJcbiAgICAgKiBkZWNsYXJhdGlvbnMuXHJcbiAgICAgKiBVc2luZyB0aGUga2V5IGAkaW1wbGljaXRgIGluIHRoZSBjb250ZXh0IG9iamVjdCB3aWxsIHNldCBpdHMgdmFsdWUgYXMgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgbmdUZW1wbGF0ZU91dGxldENvbnRleHQ6IE9iamVjdCB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEEgc3RyaW5nIGRlZmluaW5nIHRoZSB0ZW1wbGF0ZSByZWZlcmVuY2UgYW5kIG9wdGlvbmFsbHkgdGhlIGNvbnRleHQgb2JqZWN0IGZvciB0aGUgdGVtcGxhdGUuXHJcbiAgICAgKi9cclxuICAgIG5nVGVtcGxhdGVPdXRsZXQ6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFdlIG5lZWQgdG8gcmUtY3JlYXRlIGV4aXN0aW5nIGVtYmVkZGVkIHZpZXcgaWY6XHJcbiAgICAgKiAtIHRlbXBsYXRlUmVmIGhhcyBjaGFuZ2VkXHJcbiAgICAgKiAtIGNvbnRleHQgaGFzIGNoYW5nZXNcclxuICAgICAqXHJcbiAgICAgKiBXZSBtYXJrIGNvbnRleHQgb2JqZWN0IGFzIGNoYW5nZWQgd2hlbiB0aGUgY29ycmVzcG9uZGluZyBvYmplY3RcclxuICAgICAqIHNoYXBlIGNoYW5nZXMgKG5ldyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCBvciBleGlzdGluZyBwcm9wZXJ0aWVzIGFyZSByZW1vdmVkKS5cclxuICAgICAqIEluIG90aGVyIHdvcmRzIHdlIGNvbnNpZGVyIGNvbnRleHQgd2l0aCB0aGUgc2FtZSBwcm9wZXJ0aWVzIGFzIFwidGhlIHNhbWVcIiBldmVuXHJcbiAgICAgKiBpZiBvYmplY3QgcmVmZXJlbmNlIGNoYW5nZXMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMzQwNykuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3Nob3VsZFJlY3JlYXRlVmlldztcclxuICAgIHByaXZhdGUgX2hhc0NvbnRleHRTaGFwZUNoYW5nZWQ7XHJcbiAgICBwcml2YXRlIF91cGRhdGVFeGlzdGluZ0NvbnRleHQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRm9ybWF0IHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcHJlc2VudCBudW1iZXJzLlxyXG4gKiBAc2VlIGBnZXRMb2NhbGVOdW1iZXJGb3JtYXQoKWAuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gTnVtYmVyRm9ybWF0U3R5bGUge1xyXG4gICAgRGVjaW1hbCA9IDAsXHJcbiAgICBQZXJjZW50ID0gMSxcclxuICAgIEN1cnJlbmN5ID0gMixcclxuICAgIFNjaWVudGlmaWMgPSAzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2xzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVwbGFjZSBwbGFjZWhvbGRlcnMgaW4gbnVtYmVyIHBhdHRlcm5zLlxyXG4gKiBFeGFtcGxlcyBhcmUgYmFzZWQgb24gYGVuLVVTYCB2YWx1ZXMuXHJcbiAqXHJcbiAqIEBzZWUgYGdldExvY2FsZU51bWJlclN5bWJvbCgpYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBlbnVtIE51bWJlclN5bWJvbCB7XHJcbiAgICAvKipcclxuICAgICAqIERlY2ltYWwgc2VwYXJhdG9yLlxyXG4gICAgICogRm9yIGBlbi1VU2AsIHRoZSBkb3QgY2hhcmFjdGVyLlxyXG4gICAgICogRXhhbXBsZSA6IDIsMzQ1YC5gNjdcclxuICAgICAqL1xyXG4gICAgRGVjaW1hbCA9IDAsXHJcbiAgICAvKipcclxuICAgICAqIEdyb3VwaW5nIHNlcGFyYXRvciwgdHlwaWNhbGx5IGZvciB0aG91c2FuZHMuXHJcbiAgICAgKiBGb3IgYGVuLVVTYCwgdGhlIGNvbW1hIGNoYXJhY3Rlci5cclxuICAgICAqIEV4YW1wbGU6IDJgLGAzNDUuNjdcclxuICAgICAqL1xyXG4gICAgR3JvdXAgPSAxLFxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0LWl0ZW0gc2VwYXJhdG9yLlxyXG4gICAgICogRXhhbXBsZTogXCJvbmUsIHR3bywgYW5kIHRocmVlXCJcclxuICAgICAqL1xyXG4gICAgTGlzdCA9IDIsXHJcbiAgICAvKipcclxuICAgICAqIFNpZ24gZm9yIHBlcmNlbnRhZ2UgKG91dCBvZiAxMDApLlxyXG4gICAgICogRXhhbXBsZTogMjMuNCVcclxuICAgICAqL1xyXG4gICAgUGVyY2VudFNpZ24gPSAzLFxyXG4gICAgLyoqXHJcbiAgICAgKiBTaWduIGZvciBwb3NpdGl2ZSBudW1iZXJzLlxyXG4gICAgICogRXhhbXBsZTogKzIzXHJcbiAgICAgKi9cclxuICAgIFBsdXNTaWduID0gNCxcclxuICAgIC8qKlxyXG4gICAgICogU2lnbiBmb3IgbmVnYXRpdmUgbnVtYmVycy5cclxuICAgICAqIEV4YW1wbGU6IC0yM1xyXG4gICAgICovXHJcbiAgICBNaW51c1NpZ24gPSA1LFxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlciBub3RhdGlvbiBmb3IgZXhwb25lbnRpYWwgdmFsdWUgKG4gdGltZXMgYSBwb3dlciBvZiAxMCkuXHJcbiAgICAgKiBFeGFtcGxlOiAxLjJFM1xyXG4gICAgICovXHJcbiAgICBFeHBvbmVudGlhbCA9IDYsXHJcbiAgICAvKipcclxuICAgICAqIEh1bWFuLXJlYWRhYmxlIGZvcm1hdCBvZiBleHBvbmVudGlhbC5cclxuICAgICAqIEV4YW1wbGU6IDEuMngxMDNcclxuICAgICAqL1xyXG4gICAgU3VwZXJzY3JpcHRpbmdFeHBvbmVudCA9IDcsXHJcbiAgICAvKipcclxuICAgICAqIFNpZ24gZm9yIHBlcm1pbGxlIChvdXQgb2YgMTAwMCkuXHJcbiAgICAgKiBFeGFtcGxlOiAyMy404oCwXHJcbiAgICAgKi9cclxuICAgIFBlck1pbGxlID0gOCxcclxuICAgIC8qKlxyXG4gICAgICogSW5maW5pdHksIGNhbiBiZSB1c2VkIHdpdGggcGx1cyBhbmQgbWludXMuXHJcbiAgICAgKiBFeGFtcGxlOiDiiJ4sICviiJ4sIC3iiJ5cclxuICAgICAqL1xyXG4gICAgSW5maW5pdHkgPSA5LFxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3QgYSBudW1iZXIuXHJcbiAgICAgKiBFeGFtcGxlOiBOYU5cclxuICAgICAqL1xyXG4gICAgTmFOID0gMTAsXHJcbiAgICAvKipcclxuICAgICAqIFN5bWJvbCB1c2VkIGJldHdlZW4gdGltZSB1bml0cy5cclxuICAgICAqIEV4YW1wbGU6IDEwOjUyXHJcbiAgICAgKi9cclxuICAgIFRpbWVTZXBhcmF0b3IgPSAxMSxcclxuICAgIC8qKlxyXG4gICAgICogRGVjaW1hbCBzZXBhcmF0b3IgZm9yIGN1cnJlbmN5IHZhbHVlcyAoZmFsbGJhY2sgdG8gYERlY2ltYWxgKS5cclxuICAgICAqIEV4YW1wbGU6ICQyLDM0NS42N1xyXG4gICAgICovXHJcbiAgICBDdXJyZW5jeURlY2ltYWwgPSAxMixcclxuICAgIC8qKlxyXG4gICAgICogR3JvdXAgc2VwYXJhdG9yIGZvciBjdXJyZW5jeSB2YWx1ZXMgKGZhbGxiYWNrIHRvIGBHcm91cGApLlxyXG4gICAgICogRXhhbXBsZTogJDIsMzQ1LjY3XHJcbiAgICAgKi9cclxuICAgIEN1cnJlbmN5R3JvdXAgPSAxM1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IHVzZWQgdG8gY29uZmlndXJlIHRoZSB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2UgdG9cclxuICogcmVwcmVzZW50IGl0cyBzdGF0ZSBpbiB0aGVcclxuICogW3BhdGhdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWZvcm1fUmVzb3VyY2VfTG9jYXRvciNTeW50YXgpIG9mIHRoZVxyXG4gKiBicm93c2VyJ3MgVVJMLlxyXG4gKlxyXG4gKiBJZiB5b3UncmUgdXNpbmcgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YCwgeW91IG11c3QgcHJvdmlkZSBhIHtAbGluayBBUFBfQkFTRV9IUkVGfVxyXG4gKiBvciBhZGQgYSBiYXNlIGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50LiBUaGlzIFVSTCBwcmVmaXggdGhhdCB3aWxsIGJlIHByZXNlcnZlZFxyXG4gKiB3aGVuIGdlbmVyYXRpbmcgYW5kIHJlY29nbml6aW5nIFVSTHMuXHJcbiAqXHJcbiAqIEZvciBpbnN0YW5jZSwgaWYgeW91IHByb3ZpZGUgYW4gYEFQUF9CQVNFX0hSRUZgIG9mIGAnL215L2FwcCdgIGFuZCBjYWxsXHJcbiAqIGBsb2NhdGlvbi5nbygnL2ZvbycpYCwgdGhlIGJyb3dzZXIncyBVUkwgd2lsbCBiZWNvbWVcclxuICogYGV4YW1wbGUuY29tL215L2FwcC9mb29gLlxyXG4gKlxyXG4gKiBTaW1pbGFybHksIGlmIHlvdSBhZGQgYDxiYXNlIGhyZWY9Jy9teS9hcHAnLz5gIHRvIHRoZSBkb2N1bWVudCBhbmQgY2FsbFxyXG4gKiBgbG9jYXRpb24uZ28oJy9mb28nKWAsIHRoZSBicm93c2VyJ3MgVVJMIHdpbGwgYmVjb21lXHJcbiAqIGBleGFtcGxlLmNvbS9teS9hcHAvZm9vYC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9sb2NhdGlvbi90cy9wYXRoX2xvY2F0aW9uX2NvbXBvbmVudC50cyByZWdpb249J0xvY2F0aW9uQ29tcG9uZW50J31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGF0aExvY2F0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBMb2NhdGlvblN0cmF0ZWd5IHtcclxuICAgIHByaXZhdGUgX3BsYXRmb3JtTG9jYXRpb247XHJcbiAgICBwcml2YXRlIF9iYXNlSHJlZjtcclxuICAgIGNvbnN0cnVjdG9yKF9wbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLCBocmVmPzogc3RyaW5nKTtcclxuICAgIG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xyXG4gICAgcHJlcGFyZUV4dGVybmFsVXJsKGludGVybmFsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBwYXRoKGluY2x1ZGVIYXNoPzogYm9vbGVhbik6IHN0cmluZztcclxuICAgIHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICByZXBsYWNlU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVHJhbnNmb3JtcyBhIG51bWJlciB0byBhIHBlcmNlbnRhZ2VcclxuICogc3RyaW5nLCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcyB0aGF0IGRldGVybWluZSBncm91cCBzaXppbmcgYW5kXHJcbiAqIHNlcGFyYXRvciwgZGVjaW1hbC1wb2ludCBjaGFyYWN0ZXIsIGFuZCBvdGhlciBsb2NhbGUtc3BlY2lmaWNcclxuICogY29uZmlndXJhdGlvbnMuXHJcbiAqXHJcbiAqIEBzZWUgYGZvcm1hdFBlcmNlbnQoKWBcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIGZvbGxvd2luZyBjb2RlIHNob3dzIGhvdyB0aGUgcGlwZSB0cmFuc2Zvcm1zIG51bWJlcnNcclxuICogaW50byB0ZXh0IHN0cmluZ3MsIGFjY29yZGluZyB0byB2YXJpb3VzIGZvcm1hdCBzcGVjaWZpY2F0aW9ucyxcclxuICogd2hlcmUgdGhlIGNhbGxlcidzIGRlZmF1bHQgbG9jYWxlIGlzIGBlbi1VU2AuXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy9wZXJjZW50X3BpcGUudHNcIiByZWdpb249J1BlcmNlbnRQaXBlJz48L2NvZGUtZXhhbXBsZT5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGVyY2VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHByaXZhdGUgX2xvY2FsZTtcclxuICAgIGNvbnN0cnVjdG9yKF9sb2NhbGU6IHN0cmluZyk7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBiZSBmb3JtYXR0ZWQgYXMgYSBwZXJjZW50YWdlLlxyXG4gICAgICogQHBhcmFtIGRpZ2l0c0luZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmdcclxuICAgICAqIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0Ojxicj5cclxuICAgICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxyXG4gICAgICogICAtIGBtaW5JbnRlZ2VyRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDFgLlxyXG4gICAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAwYC5cclxuICAgICAqICAgLSBgbWF4RnJhY3Rpb25EaWdpdHNgOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgMGAuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxyXG4gICAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGlnaXRzSW5mbz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IGFuIGFwcGxpY2F0aW9uIGRldmVsb3Blci4gSW5zdGVhZCwgdXNlXHJcbiAqIHtAbGluayBMb2NhdGlvbn0uXHJcbiAqXHJcbiAqIGBQbGF0Zm9ybUxvY2F0aW9uYCBlbmNhcHN1bGF0ZXMgYWxsIGNhbGxzIHRvIERPTSBBUElzLCB3aGljaCBhbGxvd3MgdGhlIFJvdXRlciB0byBiZVxyXG4gKiBwbGF0Zm9ybS1hZ25vc3RpYy5cclxuICogVGhpcyBtZWFucyB0aGF0IHdlIGNhbiBoYXZlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbiBvZiBgUGxhdGZvcm1Mb2NhdGlvbmAgZm9yIHRoZSBkaWZmZXJlbnRcclxuICogcGxhdGZvcm1zIHRoYXQgQW5ndWxhciBzdXBwb3J0cy4gRm9yIGV4YW1wbGUsIGBAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyYCBwcm92aWRlcyBhblxyXG4gKiBpbXBsZW1lbnRhdGlvbiBzcGVjaWZpYyB0byB0aGUgYnJvd3NlciBlbnZpcm9ubWVudCwgd2hpbGUgYEBhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcmAgcHJvdmlkZXNcclxuICogb25lIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXHJcbiAqXHJcbiAqIFRoZSBgUGxhdGZvcm1Mb2NhdGlvbmAgY2xhc3MgaXMgdXNlZCBkaXJlY3RseSBieSBhbGwgaW1wbGVtZW50YXRpb25zIG9mIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fVxyXG4gKiB3aGVuIHRoZXkgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHRoZSBET00gQVBJcyBsaWtlIHB1c2hTdGF0ZSwgcG9wU3RhdGUsIGV0Yy5cclxuICpcclxuICoge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IGluIHR1cm4gaXMgdXNlZCBieSB0aGUge0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlIHdoaWNoIGlzIHVzZWQgZGlyZWN0bHlcclxuICogYnkgdGhlIHtAbGluayBSb3V0ZXJ9IGluIG9yZGVyIHRvIG5hdmlnYXRlIGJldHdlZW4gcm91dGVzLiBTaW5jZSBhbGwgaW50ZXJhY3Rpb25zIGJldHdlZW4ge0BsaW5rXHJcbiAqIFJvdXRlcn0gL1xyXG4gKiB7QGxpbmsgTG9jYXRpb259IC8ge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IGFuZCBET00gQVBJcyBmbG93IHRocm91Z2ggdGhlIGBQbGF0Zm9ybUxvY2F0aW9uYFxyXG4gKiBjbGFzcywgdGhleSBhcmUgYWxsIHBsYXRmb3JtLWFnbm9zdGljLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBQbGF0Zm9ybUxvY2F0aW9uIHtcclxuICAgIGFic3RyYWN0IGdldEJhc2VIcmVmRnJvbURPTSgpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXRTdGF0ZSgpOiB1bmtub3duO1xyXG4gICAgYWJzdHJhY3Qgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBvbkhhc2hDaGFuZ2UoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZ2V0IGhyZWYoKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgZ2V0IHByb3RvY29sKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldCBob3N0bmFtZSgpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgcG9ydCgpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgcGF0aG5hbWUoKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgZ2V0IHNlYXJjaCgpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgaGFzaCgpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCByZXBsYWNlU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGZvcndhcmQoKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGJhY2soKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBsdXJhbGl0eSBjYXNlcyB1c2VkIGZvciB0cmFuc2xhdGluZyBwbHVyYWxzIHRvIGRpZmZlcmVudCBsYW5ndWFnZXMuXHJcbiAqXHJcbiAqIEBzZWUgYE5nUGx1cmFsYFxyXG4gKiBAc2VlIGBOZ1BsdXJhbENhc2VgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gUGx1cmFsIHtcclxuICAgIFplcm8gPSAwLFxyXG4gICAgT25lID0gMSxcclxuICAgIFR3byA9IDIsXHJcbiAgICBGZXcgPSAzLFxyXG4gICAgTWFueSA9IDQsXHJcbiAgICBPdGhlciA9IDVcclxufVxyXG5cclxuLyoqIEBwdWJsaWNBcGkgKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBvcFN0YXRlRXZlbnQge1xyXG4gICAgcG9wPzogYm9vbGVhbjtcclxuICAgIHN0YXRlPzogYW55O1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIHVybD86IHN0cmluZztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBnbG9iYWwgZGF0YSB0byBiZSB1c2VkIGludGVybmFsbHkgYnkgQW5ndWxhci4gU2VlIHRoZVxyXG4gKiBbXCJJMThuIGd1aWRlXCJdKGd1aWRlL2kxOG4jaTE4bi1waXBlcykgdG8ga25vdyBob3cgdG8gaW1wb3J0IGFkZGl0aW9uYWwgbG9jYWxlIGRhdGEuXHJcbiAqXHJcbiAqIFRoZSBzaWduYXR1cmUgcmVnaXN0ZXJMb2NhbGVEYXRhKGRhdGE6IGFueSwgZXh0cmFEYXRhPzogYW55KSBpcyBkZXByZWNhdGVkIHNpbmNlIHY1LjFcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gcmVnaXN0ZXJMb2NhbGVEYXRhKGRhdGE6IGFueSwgbG9jYWxlSWQ/OiBzdHJpbmcgfCBhbnksIGV4dHJhRGF0YT86IGFueSk6IHZvaWQ7XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlgIG9yIGBTdHJpbmdgIGNvbnRhaW5pbmcgYSBzdWJzZXQgKHNsaWNlKSBvZiB0aGUgZWxlbWVudHMuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIEFsbCBiZWhhdmlvciBpcyBiYXNlZCBvbiB0aGUgZXhwZWN0ZWQgYmVoYXZpb3Igb2YgdGhlIEphdmFTY3JpcHQgQVBJIGBBcnJheS5wcm90b3R5cGUuc2xpY2UoKWBcclxuICogYW5kIGBTdHJpbmcucHJvdG90eXBlLnNsaWNlKClgLlxyXG4gKlxyXG4gKiBXaGVuIG9wZXJhdGluZyBvbiBhbiBgQXJyYXlgLCB0aGUgcmV0dXJuZWQgYEFycmF5YCBpcyBhbHdheXMgYSBjb3B5IGV2ZW4gd2hlbiBhbGxcclxuICogdGhlIGVsZW1lbnRzIGFyZSBiZWluZyByZXR1cm5lZC5cclxuICpcclxuICogV2hlbiBvcGVyYXRpbmcgb24gYSBibGFuayB2YWx1ZSwgdGhlIHBpcGUgcmV0dXJucyB0aGUgYmxhbmsgdmFsdWUuXHJcbiAqXHJcbiAqICMjIyBMaXN0IEV4YW1wbGVcclxuICpcclxuICogVGhpcyBgbmdGb3JgIGV4YW1wbGU6XHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvc2xpY2VfcGlwZS50cyByZWdpb249J1NsaWNlUGlwZV9saXN0J31cclxuICpcclxuICogcHJvZHVjZXMgdGhlIGZvbGxvd2luZzpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8bGk+YjwvbGk+XHJcbiAqIDxsaT5jPC9saT5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBTdHJpbmcgRXhhbXBsZXNcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9zbGljZV9waXBlLnRzIHJlZ2lvbj0nU2xpY2VQaXBlX3N0cmluZyd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNsaWNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgYSBsaXN0IG9yIGEgc3RyaW5nIHRvIGJlIHNsaWNlZC5cclxuICAgICAqIEBwYXJhbSBzdGFydCB0aGUgc3RhcnRpbmcgaW5kZXggb2YgdGhlIHN1YnNldCB0byByZXR1cm46XHJcbiAgICAgKiAgIC0gKiphIHBvc2l0aXZlIGludGVnZXIqKjogcmV0dXJuIHRoZSBpdGVtIGF0IGBzdGFydGAgaW5kZXggYW5kIGFsbCBpdGVtcyBhZnRlclxyXG4gICAgICogICAgIGluIHRoZSBsaXN0IG9yIHN0cmluZyBleHByZXNzaW9uLlxyXG4gICAgICogICAtICoqYSBuZWdhdGl2ZSBpbnRlZ2VyKio6IHJldHVybiB0aGUgaXRlbSBhdCBgc3RhcnRgIGluZGV4IGZyb20gdGhlIGVuZCBhbmQgYWxsIGl0ZW1zIGFmdGVyXHJcbiAgICAgKiAgICAgaW4gdGhlIGxpc3Qgb3Igc3RyaW5nIGV4cHJlc3Npb24uXHJcbiAgICAgKiAgIC0gKippZiBwb3NpdGl2ZSBhbmQgZ3JlYXRlciB0aGFuIHRoZSBzaXplIG9mIHRoZSBleHByZXNzaW9uKio6IHJldHVybiBhbiBlbXB0eSBsaXN0IG9yXHJcbiAgICAgKiBzdHJpbmcuXHJcbiAgICAgKiAgIC0gKippZiBuZWdhdGl2ZSBhbmQgZ3JlYXRlciB0aGFuIHRoZSBzaXplIG9mIHRoZSBleHByZXNzaW9uKio6IHJldHVybiBlbnRpcmUgbGlzdCBvciBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gZW5kIHRoZSBlbmRpbmcgaW5kZXggb2YgdGhlIHN1YnNldCB0byByZXR1cm46XHJcbiAgICAgKiAgIC0gKipvbWl0dGVkKio6IHJldHVybiBhbGwgaXRlbXMgdW50aWwgdGhlIGVuZC5cclxuICAgICAqICAgLSAqKmlmIHBvc2l0aXZlKio6IHJldHVybiBhbGwgaXRlbXMgYmVmb3JlIGBlbmRgIGluZGV4IG9mIHRoZSBsaXN0IG9yIHN0cmluZy5cclxuICAgICAqICAgLSAqKmlmIG5lZ2F0aXZlKio6IHJldHVybiBhbGwgaXRlbXMgYmVmb3JlIGBlbmRgIGluZGV4IGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvciBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybTxUPih2YWx1ZTogUmVhZG9ubHlBcnJheTxUPiwgc3RhcnQ6IG51bWJlciwgZW5kPzogbnVtYmVyKTogQXJyYXk8VD47XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kPzogbnVtYmVyKTogc3RyaW5nO1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudWxsLCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpOiBudWxsO1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiB1bmRlZmluZWQsIHN0YXJ0OiBudW1iZXIsIGVuZD86IG51bWJlcik6IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgc3VwcG9ydHM7XHJcbn1cclxuXHJcbmRlY2xhcmUgY2xhc3MgU3dpdGNoVmlldyB7XHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY7XHJcbiAgICBwcml2YXRlIF9jcmVhdGVkO1xyXG4gICAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pik7XHJcbiAgICBjcmVhdGUoKTogdm9pZDtcclxuICAgIGRlc3Ryb3koKTogdm9pZDtcclxuICAgIGVuZm9yY2VTdGF0ZShjcmVhdGVkOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSB0aW1lIHZhbHVlIHdpdGggaG91cnMgYW5kIG1pbnV0ZXMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgVGltZSA9IHtcclxuICAgIGhvdXJzOiBudW1iZXI7XHJcbiAgICBtaW51dGVzOiBudW1iZXI7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0ZXh0IHRvIHRpdGxlIGNhc2UuXHJcbiAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGFuZCB0cmFuc2Zvcm1zIHRoZVxyXG4gKiByZXN0IG9mIHRoZSB3b3JkIHRvIGxvd2VyIGNhc2UuXHJcbiAqIFdvcmRzIGFyZSBkZWxpbWl0ZWQgYnkgYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyLCBzdWNoIGFzIGEgc3BhY2UsIHRhYiwgb3IgbGluZS1mZWVkIGNoYXJhY3Rlci5cclxuICpcclxuICogQHNlZSBgTG93ZXJDYXNlUGlwZWBcclxuICogQHNlZSBgVXBwZXJDYXNlUGlwZWBcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIHRoZSByZXN1bHQgb2YgdHJhbnNmb3JtaW5nIHZhcmlvdXMgc3RyaW5ncyBpbnRvIHRpdGxlIGNhc2UuXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy90aXRsZWNhc2VfcGlwZS50c1wiIHJlZ2lvbj0nVGl0bGVDYXNlUGlwZSc+PC9jb2RlLWV4YW1wbGU+XHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGl0bGVDYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB0byB0cmFuc2Zvcm0gdG8gdGl0bGUgY2FzZS5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdHJpbmcgd2lkdGhzIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxyXG4gKiBUaGUgc3BlY2lmaWMgY2hhcmFjdGVyIHdpZHRocyBhcmUgbG9jYWxlLXNwZWNpZmljLlxyXG4gKiBFeGFtcGxlcyBhcmUgZ2l2ZW4gZm9yIHRoZSB3b3JkIFwiU3VuZGF5XCIgaW4gRW5nbGlzaC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBUcmFuc2xhdGlvbldpZHRoIHtcclxuICAgIC8qKiAxIGNoYXJhY3RlciBmb3IgYGVuLVVTYC4gRm9yIGV4YW1wbGU6ICdTJyAqL1xyXG4gICAgTmFycm93ID0gMCxcclxuICAgIC8qKiAzIGNoYXJhY3RlcnMgZm9yIGBlbi1VU2AuIEZvciBleGFtcGxlOiAnU3VuJyAqL1xyXG4gICAgQWJicmV2aWF0ZWQgPSAxLFxyXG4gICAgLyoqIEZ1bGwgbGVuZ3RoIGZvciBgZW4tVVNgLiBGb3IgZXhhbXBsZTogXCJTdW5kYXlcIiAqL1xyXG4gICAgV2lkZSA9IDIsXHJcbiAgICAvKiogMiBjaGFyYWN0ZXJzIGZvciBgZW4tVVNgLCBGb3IgZXhhbXBsZTogXCJTdVwiICovXHJcbiAgICBTaG9ydCA9IDNcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGV4dCB0byBhbGwgdXBwZXIgY2FzZS5cclxuICogQHNlZSBgTG93ZXJDYXNlUGlwZWBcclxuICogQHNlZSBgVGl0bGVDYXNlUGlwZWBcclxuICpcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcHBlckNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHRvIHRyYW5zZm9ybSB0byB1cHBlciBjYXNlLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFZFUlNJT046IFZlcnNpb247XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIHNjcm9sbCBwb3NpdGlvbiBtYW5hZ2VyLiBJbXBsZW1lbnRlZCBieSBgQnJvd3NlclZpZXdwb3J0U2Nyb2xsZXJgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBWaWV3cG9ydFNjcm9sbGVyIHtcclxuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xyXG4gICAgc3RhdGljIMm1cHJvdjogbmV2ZXI7XHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHRvcCBvZmZzZXQgdXNlZCB3aGVuIHNjcm9sbGluZyB0byBhbiBhbmNob3IuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IEEgcG9zaXRpb24gaW4gc2NyZWVuIGNvb3JkaW5hdGVzIChhIHR1cGxlIHdpdGggeCBhbmQgeSB2YWx1ZXMpXHJcbiAgICAgKiBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdG9wIG9mZnNldCBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNldE9mZnNldChvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl0gfCAoKCkgPT4gW251bWJlciwgbnVtYmVyXSkpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxyXG4gICAgICogQHJldHVybnMgQSBwb3NpdGlvbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMgKGEgdHVwbGUgd2l0aCB4IGFuZCB5IHZhbHVlcykuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldFNjcm9sbFBvc2l0aW9uKCk6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvKipcclxuICAgICAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpZWQgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gQSBwb3NpdGlvbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMgKGEgdHVwbGUgd2l0aCB4IGFuZCB5IHZhbHVlcykuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNjcm9sbFRvUG9zaXRpb24ocG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGxzIHRvIGFuIGFuY2hvciBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGFuY2hvciBUaGUgSUQgb2YgdGhlIGFuY2hvciBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBzY3JvbGxUb0FuY2hvcihhbmNob3I6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGVzIGF1dG9tYXRpYyBzY3JvbGwgcmVzdG9yYXRpb24gcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIuXHJcbiAgICAgKiBTZWUgYWxzbyBbd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb25cclxuICAgICAqIGluZm9dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTUvMDkvaGlzdG9yeS1hcGktc2Nyb2xsLXJlc3RvcmF0aW9uKS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2V0SGlzdG9yeVNjcm9sbFJlc3RvcmF0aW9uKHNjcm9sbFJlc3RvcmF0aW9uOiAnYXV0bycgfCAnbWFudWFsJyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdmFsdWUgZm9yIGVhY2ggZGF5IG9mIHRoZSB3ZWVrLCBiYXNlZCBvbiB0aGUgYGVuLVVTYCBsb2NhbGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBXZWVrRGF5IHtcclxuICAgIFN1bmRheSA9IDAsXHJcbiAgICBNb25kYXkgPSAxLFxyXG4gICAgVHVlc2RheSA9IDIsXHJcbiAgICBXZWRuZXNkYXkgPSAzLFxyXG4gICAgVGh1cnNkYXkgPSA0LFxyXG4gICAgRnJpZGF5ID0gNSxcclxuICAgIFNhdHVyZGF5ID0gNlxyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9hKCk6IMm1QnJvd3NlclBsYXRmb3JtTG9jYXRpb247XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9iKCk6IMm1QnJvd3NlclBsYXRmb3JtTG9jYXRpb247XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9jKCk6IExvY2F0aW9uO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9jb21tb25fZChwbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uKTogUGF0aExvY2F0aW9uU3RyYXRlZ3k7XHJcblxyXG4vKipcclxuICogQSBjb2xsZWN0aW9uIG9mIEFuZ3VsYXIgZGlyZWN0aXZlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBlYWNoIGFuZCBldmVyeSBBbmd1bGFyXHJcbiAqIGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9jb21tb25fZTogUHJvdmlkZXJbXTtcclxuXHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgQW5ndWxhciBwaXBlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBlYWNoIGFuZCBldmVyeSBhcHBsaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25fY29tbW9uX2Y6ICh0eXBlb2YgQXN5bmNQaXBlIHwgdHlwZW9mIFNsaWNlUGlwZSB8IHR5cGVvZiBEZWNpbWFsUGlwZSB8IHR5cGVvZiBQZXJjZW50UGlwZSB8IHR5cGVvZiBDdXJyZW5jeVBpcGUgfCB0eXBlb2YgRGF0ZVBpcGUgfCB0eXBlb2YgSTE4blBsdXJhbFBpcGUgfCB0eXBlb2YgSTE4blNlbGVjdFBpcGUgfCB0eXBlb2YgS2V5VmFsdWVQaXBlKVtdO1xyXG5cclxuLyoqXHJcbiAqIGBQbGF0Zm9ybUxvY2F0aW9uYCBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSBkaXJlY3QgY2FsbHMgdG8gcGxhdGZvcm0gQVBJcy5cclxuICogVGhpcyBjbGFzcyBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgYW4gYXBwbGljYXRpb24gZGV2ZWxvcGVyLiBJbnN0ZWFkLCB1c2VcclxuICoge0BsaW5rIExvY2F0aW9ufS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1QnJvd3NlclBsYXRmb3JtTG9jYXRpb24gZXh0ZW5kcyBQbGF0Zm9ybUxvY2F0aW9uIHtcclxuICAgIHByaXZhdGUgX2RvYztcclxuICAgIHJlYWRvbmx5IGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICAgIHByaXZhdGUgX2hpc3Rvcnk7XHJcbiAgICBjb25zdHJ1Y3RvcihfZG9jOiBhbnkpO1xyXG4gICAgZ2V0QmFzZUhyZWZGcm9tRE9NKCk6IHN0cmluZztcclxuICAgIG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgb25IYXNoQ2hhbmdlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcclxuICAgIGdldCBocmVmKCk6IHN0cmluZztcclxuICAgIGdldCBwcm90b2NvbCgpOiBzdHJpbmc7XHJcbiAgICBnZXQgaG9zdG5hbWUoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHBvcnQoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHBhdGhuYW1lKCk6IHN0cmluZztcclxuICAgIGdldCBzZWFyY2goKTogc3RyaW5nO1xyXG4gICAgZ2V0IGhhc2goKTogc3RyaW5nO1xyXG4gICAgc2V0IHBhdGhuYW1lKG5ld1BhdGg6IHN0cmluZyk7XHJcbiAgICBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZDtcclxuICAgIGZvcndhcmQoKTogdm9pZDtcclxuICAgIGJhY2soKTogdm9pZDtcclxuICAgIGdldFN0YXRlKCk6IHVua25vd247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBET00gb3BlcmF0aW9ucyBpbiBhbiBlbnZpcm9ubWVudC1hZ25vc3RpYyB3YXkuXHJcbiAqXHJcbiAqIEBzZWN1cml0eSBUcmVhZCBjYXJlZnVsbHkhIEludGVyYWN0aW5nIHdpdGggdGhlIERPTSBkaXJlY3RseSBpcyBkYW5nZXJvdXMgYW5kXHJcbiAqIGNhbiBpbnRyb2R1Y2UgWFNTIHJpc2tzLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgybVEb21BZGFwdGVyIHtcclxuICAgIGFic3RyYWN0IGdldFByb3BlcnR5KGVsOiBFbGVtZW50LCBuYW1lOiBzdHJpbmcpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBkaXNwYXRjaEV2ZW50KGVsOiBhbnksIGV2dDogYW55KTogYW55O1xyXG4gICAgYWJzdHJhY3QgbG9nKGVycm9yOiBhbnkpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBsb2dHcm91cChlcnJvcjogYW55KTogYW55O1xyXG4gICAgYWJzdHJhY3QgbG9nR3JvdXBFbmQoKTogYW55O1xyXG4gICAgYWJzdHJhY3QgcmVtb3ZlKGVsOiBhbnkpOiBOb2RlO1xyXG4gICAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudCh0YWdOYW1lOiBhbnksIGRvYz86IGFueSk6IEhUTUxFbGVtZW50O1xyXG4gICAgYWJzdHJhY3QgY3JlYXRlSHRtbERvY3VtZW50KCk6IEhUTUxEb2N1bWVudDtcclxuICAgIGFic3RyYWN0IGdldERlZmF1bHREb2N1bWVudCgpOiBEb2N1bWVudDtcclxuICAgIGFic3RyYWN0IGlzRWxlbWVudE5vZGUobm9kZTogYW55KTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IGlzU2hhZG93Um9vdChub2RlOiBhbnkpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3Qgb25BbmRDYW5jZWwoZWw6IGFueSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBGdW5jdGlvbjtcclxuICAgIGFic3RyYWN0IHN1cHBvcnRzRE9NRXZlbnRzKCk6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IGFueTtcclxuICAgIGFic3RyYWN0IGdldEhpc3RvcnkoKTogSGlzdG9yeTtcclxuICAgIGFic3RyYWN0IGdldExvY2F0aW9uKCk6IGFueTsgLyoqIFRoaXMgaXMgdGhlIGFtYmllbnQgTG9jYXRpb24gZGVmaW5pdGlvbiwgTk9UIExvY2F0aW9uIGZyb20gQGFuZ3VsYXIvY29tbW9uLiAgKi9cclxuICAgIGFic3RyYWN0IGdldEJhc2VIcmVmKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYWJzdHJhY3QgcmVzZXRCYXNlRWxlbWVudCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZ2V0VXNlckFnZW50KCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IHBlcmZvcm1hbmNlTm93KCk6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IHN1cHBvcnRzQ29va2llcygpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWdldERPTSgpOiDJtURvbUFkYXB0ZXI7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYW4gZW1wdHkgaW1wbGVtZW50YXRpb24gb2YgdGhlIHZpZXdwb3J0IHNjcm9sbGVyLiBUaGlzIHdpbGxcclxuICogbGl2ZSBpbiBAYW5ndWxhci9jb21tb24gYXMgaXQgd2lsbCBiZSB1c2VkIGJ5IGJvdGggcGxhdGZvcm0tc2VydmVyIGFuZCBwbGF0Zm9ybS13ZWJ3b3JrZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtU51bGxWaWV3cG9ydFNjcm9sbGVyIGltcGxlbWVudHMgVmlld3BvcnRTY3JvbGxlciB7XHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHNldE9mZnNldChvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl0gfCAoKCkgPT4gW251bWJlciwgbnVtYmVyXSkpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbXB0eSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBnZXRTY3JvbGxQb3NpdGlvbigpOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbXB0eSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUb1Bvc2l0aW9uKHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogRW1wdHkgaW1wbGVtZW50YXRpb25cclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9yOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbXB0eSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBzZXRIaXN0b3J5U2Nyb2xsUmVzdG9yYXRpb24oc2Nyb2xsUmVzdG9yYXRpb246ICdhdXRvJyB8ICdtYW51YWwnKTogdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1cGFyc2VDb29raWVWYWx1ZShjb29raWVTdHI6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtVBMQVRGT1JNX0JST1dTRVJfSUQgPSBcImJyb3dzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1UExBVEZPUk1fU0VSVkVSX0lEID0gXCJzZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1UExBVEZPUk1fV09SS0VSX0FQUF9JRCA9IFwiYnJvd3NlcldvcmtlckFwcFwiO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVQTEFURk9STV9XT1JLRVJfVUlfSUQgPSBcImJyb3dzZXJXb3JrZXJVaVwiO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVzZXRSb290RG9tQWRhcHRlcihhZGFwdGVyOiDJtURvbUFkYXB0ZXIpOiB2b2lkO1xyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=