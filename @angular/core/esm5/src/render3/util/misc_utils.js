/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../../util/global';
/**
 * Used for stringify render output in Ivy.
 * Important! This function is very performance-sensitive and we should
 * be extra careful not to introduce megamorphic reads in it.
 */
export function renderStringify(value) {
    if (typeof value === 'string')
        return value;
    if (value == null)
        return '';
    return '' + value;
}
/**
 * Used to stringify a value so that it can be displayed in an error message.
 * Important! This function contains a megamorphic read and should only be
 * used for error messages.
 */
export function stringifyForError(value) {
    if (typeof value === 'function')
        return value.name || value.toString();
    if (typeof value === 'object' && value != null && typeof value.type === 'function') {
        return value.type.name || value.type.toString();
    }
    return renderStringify(value);
}
var ɵ0 = function () { return (typeof requestAnimationFrame !== 'undefined' &&
    requestAnimationFrame || // browser only
    setTimeout // everything else
)
    .bind(global); };
export var defaultScheduler = (ɵ0)();
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveWindow(element) {
    return { name: 'window', target: element.ownerDocument.defaultView };
}
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveDocument(element) {
    return { name: 'document', target: element.ownerDocument };
}
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveBody(element) {
    return { name: 'body', target: element.ownerDocument.body };
}
/**
 * The special delimiter we use to separate property names, prefixes, and suffixes
 * in property binding metadata. See storeBindingMetadata().
 *
 * We intentionally use the Unicode "REPLACEMENT CHARACTER" (U+FFFD) as a delimiter
 * because it is a very uncommon character that is unlikely to be part of a user's
 * property names or interpolation strings. If it is in fact used in a property
 * binding, DebugElement.properties will not return the correct value for that
 * binding. However, there should be no runtime effect for real applications.
 *
 * This character is typically rendered as a question mark inside of a diamond.
 * See https://en.wikipedia.org/wiki/Specials_(Unicode_block)
 *
 */
export var INTERPOLATION_DELIMITER = "\uFFFD";
/**
 * Unwrap a value which might be behind a closure (for forward declaration reasons).
 */
export function maybeUnwrapFn(value) {
    if (value instanceof Function) {
        return value();
    }
    else {
        return value;
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvdXRpbC9taXNjX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUd6Qzs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFVO0lBQ3hDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzVDLElBQUksS0FBSyxJQUFJLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM3QixPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDcEIsQ0FBQztBQUdEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBVTtJQUMxQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVU7UUFBRSxPQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUNsRixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakQ7SUFFRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO1NBSUksY0FBTSxPQUFBLENBQ0ksT0FBTyxxQkFBcUIsS0FBSyxXQUFXO0lBQ3hDLHFCQUFxQixJQUFLLGVBQWU7SUFDN0MsVUFBVSxDQUFvQixrQkFBa0I7Q0FDL0M7S0FDQSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBTGpCLENBS2lCO0FBTjVCLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUN6QixJQUt5QixFQUFFLENBQUM7QUFFaEM7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUEyQztJQUN6RSxPQUFPLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQTJDO0lBQzNFLE9BQU8sRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFDLENBQUM7QUFDM0QsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQUMsT0FBMkM7SUFDdkUsT0FBTyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBRyxRQUFHLENBQUM7QUFFM0M7O0dBRUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFJLEtBQWtCO0lBQ2pELElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtRQUM3QixPQUFPLEtBQUssRUFBRSxDQUFDO0tBQ2hCO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnbG9iYWx9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYmFsJztcbmltcG9ydCB7UkVsZW1lbnR9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVuZGVyZXInO1xuXG4vKipcbiAqIFVzZWQgZm9yIHN0cmluZ2lmeSByZW5kZXIgb3V0cHV0IGluIEl2eS5cbiAqIEltcG9ydGFudCEgVGhpcyBmdW5jdGlvbiBpcyB2ZXJ5IHBlcmZvcm1hbmNlLXNlbnNpdGl2ZSBhbmQgd2Ugc2hvdWxkXG4gKiBiZSBleHRyYSBjYXJlZnVsIG5vdCB0byBpbnRyb2R1Y2UgbWVnYW1vcnBoaWMgcmVhZHMgaW4gaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdHJpbmdpZnkodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuXG5cbi8qKlxuICogVXNlZCB0byBzdHJpbmdpZnkgYSB2YWx1ZSBzbyB0aGF0IGl0IGNhbiBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEltcG9ydGFudCEgVGhpcyBmdW5jdGlvbiBjb250YWlucyBhIG1lZ2Ftb3JwaGljIHJlYWQgYW5kIHNob3VsZCBvbmx5IGJlXG4gKiB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeUZvckVycm9yKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWUubmFtZSB8fCB2YWx1ZS50b1N0cmluZygpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlLnR5cGUubmFtZSB8fCB2YWx1ZS50eXBlLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyU3RyaW5naWZ5KHZhbHVlKTtcbn1cblxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNjaGVkdWxlciA9XG4gICAgKCgpID0+IChcbiAgICAgICAgICAgICAgIHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBicm93c2VyIG9ubHlcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQgICAgICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgLmJpbmQoZ2xvYmFsKSkoKTtcblxuLyoqXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVyZXNvbHZlV2luZG93KGVsZW1lbnQ6IFJFbGVtZW50Jntvd25lckRvY3VtZW50OiBEb2N1bWVudH0pIHtcbiAgcmV0dXJuIHtuYW1lOiAnd2luZG93JywgdGFyZ2V0OiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd9O1xufVxuXG4vKipcbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXJlc29sdmVEb2N1bWVudChlbGVtZW50OiBSRWxlbWVudCZ7b3duZXJEb2N1bWVudDogRG9jdW1lbnR9KSB7XG4gIHJldHVybiB7bmFtZTogJ2RvY3VtZW50JywgdGFyZ2V0OiBlbGVtZW50Lm93bmVyRG9jdW1lbnR9O1xufVxuXG4vKipcbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXJlc29sdmVCb2R5KGVsZW1lbnQ6IFJFbGVtZW50Jntvd25lckRvY3VtZW50OiBEb2N1bWVudH0pIHtcbiAgcmV0dXJuIHtuYW1lOiAnYm9keScsIHRhcmdldDogZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHl9O1xufVxuXG4vKipcbiAqIFRoZSBzcGVjaWFsIGRlbGltaXRlciB3ZSB1c2UgdG8gc2VwYXJhdGUgcHJvcGVydHkgbmFtZXMsIHByZWZpeGVzLCBhbmQgc3VmZml4ZXNcbiAqIGluIHByb3BlcnR5IGJpbmRpbmcgbWV0YWRhdGEuIFNlZSBzdG9yZUJpbmRpbmdNZXRhZGF0YSgpLlxuICpcbiAqIFdlIGludGVudGlvbmFsbHkgdXNlIHRoZSBVbmljb2RlIFwiUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXCIgKFUrRkZGRCkgYXMgYSBkZWxpbWl0ZXJcbiAqIGJlY2F1c2UgaXQgaXMgYSB2ZXJ5IHVuY29tbW9uIGNoYXJhY3RlciB0aGF0IGlzIHVubGlrZWx5IHRvIGJlIHBhcnQgb2YgYSB1c2VyJ3NcbiAqIHByb3BlcnR5IG5hbWVzIG9yIGludGVycG9sYXRpb24gc3RyaW5ncy4gSWYgaXQgaXMgaW4gZmFjdCB1c2VkIGluIGEgcHJvcGVydHlcbiAqIGJpbmRpbmcsIERlYnVnRWxlbWVudC5wcm9wZXJ0aWVzIHdpbGwgbm90IHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZSBmb3IgdGhhdFxuICogYmluZGluZy4gSG93ZXZlciwgdGhlcmUgc2hvdWxkIGJlIG5vIHJ1bnRpbWUgZWZmZWN0IGZvciByZWFsIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBUaGlzIGNoYXJhY3RlciBpcyB0eXBpY2FsbHkgcmVuZGVyZWQgYXMgYSBxdWVzdGlvbiBtYXJrIGluc2lkZSBvZiBhIGRpYW1vbmQuXG4gKiBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbHNfKFVuaWNvZGVfYmxvY2spXG4gKlxuICovXG5leHBvcnQgY29uc3QgSU5URVJQT0xBVElPTl9ERUxJTUlURVIgPSBg77+9YDtcblxuLyoqXG4gKiBVbndyYXAgYSB2YWx1ZSB3aGljaCBtaWdodCBiZSBiZWhpbmQgYSBjbG9zdXJlIChmb3IgZm9yd2FyZCBkZWNsYXJhdGlvbiByZWFzb25zKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlVW53cmFwRm48VD4odmFsdWU6IFR8KCgpID0+IFQpKTogVCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHZhbHVlKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=