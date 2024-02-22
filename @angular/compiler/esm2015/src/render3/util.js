/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { StaticSymbol } from '../aot/static_symbol';
import * as o from '../output/output_ast';
/**
 * Convert an object map with `Expression` values into a `LiteralMapExpr`.
 */
export function mapToMapExpression(map) {
    const result = Object.keys(map).map(key => ({
        key,
        // The assertion here is because really TypeScript doesn't allow us to express that if the
        // key is present, it will have a value, but this is true in reality.
        value: map[key],
        quoted: false,
    }));
    return o.literalMap(result);
}
/**
 * Convert metadata into an `Expression` in the given `OutputContext`.
 *
 * This operation will handle arrays, references to symbols, or literal `null` or `undefined`.
 */
export function convertMetaToOutput(meta, ctx) {
    if (Array.isArray(meta)) {
        return o.literalArr(meta.map(entry => convertMetaToOutput(entry, ctx)));
    }
    if (meta instanceof StaticSymbol) {
        return ctx.importExpr(meta);
    }
    if (meta == null) {
        return o.literal(meta);
    }
    throw new Error(`Internal error: Unsupported or unknown metadata: ${meta}`);
}
export function typeWithParameters(type, numParams) {
    let params = null;
    if (numParams > 0) {
        params = [];
        for (let i = 0; i < numParams; i++) {
            params.push(o.DYNAMIC_TYPE);
        }
    }
    return o.expressionType(type, null, params);
}
const ANIMATE_SYMBOL_PREFIX = '@';
export function prepareSyntheticPropertyName(name) {
    return `${ANIMATE_SYMBOL_PREFIX}${name}`;
}
export function prepareSyntheticListenerName(name, phase) {
    return `${ANIMATE_SYMBOL_PREFIX}${name}.${phase}`;
}
export function isSyntheticPropertyOrListener(name) {
    return name.charAt(0) == ANIMATE_SYMBOL_PREFIX;
}
export function getSyntheticPropertyName(name) {
    // this will strip out listener phase values...
    // @foo.start => @foo
    const i = name.indexOf('.');
    name = i > 0 ? name.substring(0, i) : name;
    if (name.charAt(0) !== ANIMATE_SYMBOL_PREFIX) {
        name = ANIMATE_SYMBOL_PREFIX + name;
    }
    return name;
}
export function prepareSyntheticListenerFunctionName(name, phase) {
    return `animation_${name}_${phase}`;
}
export function jitOnlyGuardedExpression(expr) {
    const ngJitMode = new o.ExternalExpr({ name: 'ngJitMode', moduleName: null });
    const jitFlagNotDefined = new o.BinaryOperatorExpr(o.BinaryOperator.Identical, new o.TypeofExpr(ngJitMode), o.literal('undefined'));
    const jitFlagUndefinedOrTrue = new o.BinaryOperatorExpr(o.BinaryOperator.Or, jitFlagNotDefined, ngJitMode, /* type */ undefined, 
    /* sourceSpan */ undefined, true);
    return new o.BinaryOperatorExpr(o.BinaryOperator.And, jitFlagUndefinedOrTrue, expr);
}
export function wrapReference(value) {
    const wrapped = new o.WrappedNodeExpr(value);
    return { value: wrapped, type: wrapped };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sS0FBSyxDQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHMUM7O0dBRUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsR0FBNEM7SUFDN0UsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQy9CLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLEdBQUc7UUFDSCwwRkFBMEY7UUFDMUYscUVBQXFFO1FBQ3JFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFFO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDUixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBUyxFQUFFLEdBQWtCO0lBQy9ELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekU7SUFDRCxJQUFJLElBQUksWUFBWSxZQUFZLEVBQUU7UUFDaEMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxDQUFD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S0FBVTtJQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsT0FBTyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U3RhdGljU3ltYm9sfSBmcm9tICcuLi9hb3Qvc3RhdGljX3N5bWJvbCc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7T3V0cHV0Q29udGV4dH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogQ29udmVydCBhbiBvYmplY3QgbWFwIHdpdGggYEV4cHJlc3Npb25gIHZhbHVlcyBpbnRvIGEgYExpdGVyYWxNYXBFeHByYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvTWFwRXhwcmVzc2lvbihtYXA6IHtba2V5OiBzdHJpbmddOiBvLkV4cHJlc3Npb258dW5kZWZpbmVkfSk6IG8uTGl0ZXJhbE1hcEV4cHIge1xuICBjb25zdCByZXN1bHQgPSBPYmplY3Qua2V5cyhtYXApLm1hcChcbiAgICAgIGtleSA9PiAoe1xuICAgICAgICBrZXksXG4gICAgICAgIC8vIFRoZSBhc3NlcnRpb24gaGVyZSBpcyBiZWNhdXNlIHJlYWxseSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgdXMgdG8gZXhwcmVzcyB0aGF0IGlmIHRoZVxuICAgICAgICAvLyBrZXkgaXMgcHJlc2VudCwgaXQgd2lsbCBoYXZlIGEgdmFsdWUsIGJ1dCB0aGlzIGlzIHRydWUgaW4gcmVhbGl0eS5cbiAgICAgICAgdmFsdWU6IG1hcFtrZXldISxcbiAgICAgICAgcXVvdGVkOiBmYWxzZSxcbiAgICAgIH0pKTtcbiAgcmV0dXJuIG8ubGl0ZXJhbE1hcChyZXN1bHQpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgbWV0YWRhdGEgaW50byBhbiBgRXhwcmVzc2lvbmAgaW4gdGhlIGdpdmVuIGBPdXRwdXRDb250ZXh0YC5cbiAqXG4gKiBUaGlzIG9wZXJhdGlvbiB3aWxsIGhhbmRsZSBhcnJheXMsIHJlZmVyZW5jZXMgdG8gc3ltYm9scywgb3IgbGl0ZXJhbCBgbnVsbGAgb3IgYHVuZGVmaW5lZGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TWV0YVRvT3V0cHV0KG1ldGE6IGFueSwgY3R4OiBPdXRwdXRDb250ZXh0KTogby5FeHByZXNzaW9uIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWV0YSkpIHtcbiAgICByZXR1cm4gby5saXRlcmFsQXJyKG1ldGEubWFwKGVudHJ5ID0+IGNvbnZlcnRNZXRhVG9PdXRwdXQoZW50cnksIGN0eCkpKTtcbiAgfVxuICBpZiAobWV0YSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgIHJldHVybiBjdHguaW1wb3J0RXhwcihtZXRhKTtcbiAgfVxuICBpZiAobWV0YSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG8ubGl0ZXJhbChtZXRhKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgZXJyb3I6IFVuc3VwcG9ydGVkIG9yIHVua25vd24gbWV0YWRhdGE6ICR7bWV0YX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVXaXRoUGFyYW1ldGVycyh0eXBlOiBvLkV4cHJlc3Npb24sIG51bVBhcmFtczogbnVtYmVyKTogby5FeHByZXNzaW9uVHlwZSB7XG4gIGxldCBwYXJhbXM6IG8uVHlwZVtdfG51bGwgPSBudWxsO1xuICBpZiAobnVtUGFyYW1zID4gMCkge1xuICAgIHBhcmFtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGFyYW1zOyBpKyspIHtcbiAgICAgIHBhcmFtcy5wdXNoKG8uRFlOQU1JQ19UWVBFKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG8uZXhwcmVzc2lvblR5cGUodHlwZSwgbnVsbCwgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM1JlZmVyZW5jZSB7XG4gIHZhbHVlOiBvLkV4cHJlc3Npb247XG4gIHR5cGU6IG8uRXhwcmVzc2lvbjtcbn1cblxuY29uc3QgQU5JTUFURV9TWU1CT0xfUFJFRklYID0gJ0AnO1xuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVTeW50aGV0aWNQcm9wZXJ0eU5hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBgJHtBTklNQVRFX1NZTUJPTF9QUkVGSVh9JHtuYW1lfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlU3ludGhldGljTGlzdGVuZXJOYW1lKG5hbWU6IHN0cmluZywgcGhhc2U6IHN0cmluZykge1xuICByZXR1cm4gYCR7QU5JTUFURV9TWU1CT0xfUFJFRklYfSR7bmFtZX0uJHtwaGFzZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTeW50aGV0aWNQcm9wZXJ0eU9yTGlzdGVuZXIobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmNoYXJBdCgwKSA9PSBBTklNQVRFX1NZTUJPTF9QUkVGSVg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeW50aGV0aWNQcm9wZXJ0eU5hbWUobmFtZTogc3RyaW5nKSB7XG4gIC8vIHRoaXMgd2lsbCBzdHJpcCBvdXQgbGlzdGVuZXIgcGhhc2UgdmFsdWVzLi4uXG4gIC8vIEBmb28uc3RhcnQgPT4gQGZvb1xuICBjb25zdCBpID0gbmFtZS5pbmRleE9mKCcuJyk7XG4gIG5hbWUgPSBpID4gMCA/IG5hbWUuc3Vic3RyaW5nKDAsIGkpIDogbmFtZTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9PSBBTklNQVRFX1NZTUJPTF9QUkVGSVgpIHtcbiAgICBuYW1lID0gQU5JTUFURV9TWU1CT0xfUFJFRklYICsgbmFtZTtcbiAgfVxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVTeW50aGV0aWNMaXN0ZW5lckZ1bmN0aW9uTmFtZShuYW1lOiBzdHJpbmcsIHBoYXNlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBhbmltYXRpb25fJHtuYW1lfV8ke3BoYXNlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqaXRPbmx5R3VhcmRlZEV4cHJlc3Npb24oZXhwcjogby5FeHByZXNzaW9uKTogby5FeHByZXNzaW9uIHtcbiAgY29uc3QgbmdKaXRNb2RlID0gbmV3IG8uRXh0ZXJuYWxFeHByKHtuYW1lOiAnbmdKaXRNb2RlJywgbW9kdWxlTmFtZTogbnVsbH0pO1xuICBjb25zdCBqaXRGbGFnTm90RGVmaW5lZCA9IG5ldyBvLkJpbmFyeU9wZXJhdG9yRXhwcihcbiAgICAgIG8uQmluYXJ5T3BlcmF0b3IuSWRlbnRpY2FsLCBuZXcgby5UeXBlb2ZFeHByKG5nSml0TW9kZSksIG8ubGl0ZXJhbCgndW5kZWZpbmVkJykpO1xuICBjb25zdCBqaXRGbGFnVW5kZWZpbmVkT3JUcnVlID0gbmV3IG8uQmluYXJ5T3BlcmF0b3JFeHByKFxuICAgICAgby5CaW5hcnlPcGVyYXRvci5Pciwgaml0RmxhZ05vdERlZmluZWQsIG5nSml0TW9kZSwgLyogdHlwZSAqLyB1bmRlZmluZWQsXG4gICAgICAvKiBzb3VyY2VTcGFuICovIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIHJldHVybiBuZXcgby5CaW5hcnlPcGVyYXRvckV4cHIoby5CaW5hcnlPcGVyYXRvci5BbmQsIGppdEZsYWdVbmRlZmluZWRPclRydWUsIGV4cHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJlZmVyZW5jZSh2YWx1ZTogYW55KTogUjNSZWZlcmVuY2Uge1xuICBjb25zdCB3cmFwcGVkID0gbmV3IG8uV3JhcHBlZE5vZGVFeHByKHZhbHVlKTtcbiAgcmV0dXJuIHt2YWx1ZTogd3JhcHBlZCwgdHlwZTogd3JhcHBlZH07XG59Il19