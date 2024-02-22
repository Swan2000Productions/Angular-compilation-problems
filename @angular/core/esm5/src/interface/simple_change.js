/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents a basic change from a previous to a new value for a single
 * property on a directive instance. Passed as a value in a
 * {@link SimpleChanges} object to the `ngOnChanges` hook.
 *
 * @see `OnChanges`
 *
 * @publicApi
 */
var SimpleChange = /** @class */ (function () {
    function SimpleChange(previousValue, currentValue, firstChange) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.firstChange = firstChange;
    }
    /**
     * Check whether the new value is the first value assigned.
     */
    SimpleChange.prototype.isFirstChange = function () {
        return this.firstChange;
    };
    return SimpleChange;
}());
export { SimpleChange };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlX2NoYW5nZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2ludGVyZmFjZS9zaW1wbGVfY2hhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOzs7Ozs7OztHQVFHO0FBQ0g7SUFDRSxzQkFBbUIsYUFBa0IsRUFBUyxZQUFpQixFQUFTLFdBQW9CO1FBQXpFLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUFHLENBQUM7SUFDaEc7O09BRUc7SUFDSCxvQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBiYXNpYyBjaGFuZ2UgZnJvbSBhIHByZXZpb3VzIHRvIGEgbmV3IHZhbHVlIGZvciBhIHNpbmdsZVxuICogcHJvcGVydHkgb24gYSBkaXJlY3RpdmUgaW5zdGFuY2UuIFBhc3NlZCBhcyBhIHZhbHVlIGluIGFcbiAqIHtAbGluayBTaW1wbGVDaGFuZ2VzfSBvYmplY3QgdG8gdGhlIGBuZ09uQ2hhbmdlc2AgaG9vay5cbiAqXG4gKiBAc2VlIGBPbkNoYW5nZXNgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2hhbmdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHByZXZpb3VzVmFsdWU6IGFueSwgcHVibGljIGN1cnJlbnRWYWx1ZTogYW55LCBwdWJsaWMgZmlyc3RDaGFuZ2U6IGJvb2xlYW4pIHt9XG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBuZXcgdmFsdWUgaXMgdGhlIGZpcnN0IHZhbHVlIGFzc2lnbmVkLlxuICAgKi9cbiAgaXNGaXJzdENoYW5nZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdENoYW5nZTtcbiAgfVxufVxuXG4vKipcbiAqIEEgaGFzaHRhYmxlIG9mIGNoYW5nZXMgcmVwcmVzZW50ZWQgYnkge0BsaW5rIFNpbXBsZUNoYW5nZX0gb2JqZWN0cyBzdG9yZWRcbiAqIGF0IHRoZSBkZWNsYXJlZCBwcm9wZXJ0eSBuYW1lIHRoZXkgYmVsb25nIHRvIG9uIGEgRGlyZWN0aXZlIG9yIENvbXBvbmVudC4gVGhpcyBpc1xuICogdGhlIHR5cGUgcGFzc2VkIHRvIHRoZSBgbmdPbkNoYW5nZXNgIGhvb2suXG4gKlxuICogQHNlZSBgT25DaGFuZ2VzYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVDaGFuZ2VzIHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2U7XG59XG4iXX0=