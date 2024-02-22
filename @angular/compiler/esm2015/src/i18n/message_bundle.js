/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { extractMessages } from './extractor_merger';
import * as i18n from './i18n_ast';
/**
 * A container for message extracted from the templates.
 */
export class MessageBundle {
    constructor(_htmlParser, _implicitTags, _implicitAttrs, _locale = null) {
        this._htmlParser = _htmlParser;
        this._implicitTags = _implicitTags;
        this._implicitAttrs = _implicitAttrs;
        this._locale = _locale;
        this._messages = [];
    }
    updateFromTemplate(html, url, interpolationConfig) {
        const htmlParserResult = this._htmlParser.parse(html, url, { tokenizeExpansionForms: true, interpolationConfig });
        if (htmlParserResult.errors.length) {
            return htmlParserResult.errors;
        }
        const i18nParserResult = extractMessages(htmlParserResult.rootNodes, interpolationConfig, this._implicitTags, this._implicitAttrs);
        if (i18nParserResult.errors.length) {
            return i18nParserResult.errors;
        }
        this._messages.push(...i18nParserResult.messages);
        return [];
    }
    // Return the message in the internal format
    // The public (serialized) format might be different, see the `write` method.
    getMessages() {
        return this._messages;
    }
    write(serializer, filterSources) {
        const messages = {};
        const mapperVisitor = new MapPlaceholderNames();
        // Deduplicate messages based on their ID
        this._messages.forEach(message => {
            const id = serializer.digest(message);
            if (!messages.hasOwnProperty(id)) {
                messages[id] = message;
            }
            else {
                messages[id].sources.push(...message.sources);
            }
        });
        // Transform placeholder names using the serializer mapping
        const msgList = Object.keys(messages).map(id => {
            const mapper = serializer.createNameMapper(messages[id]);
            const src = messages[id];
            const nodes = mapper ? mapperVisitor.convert(src.nodes, mapper) : src.nodes;
            let transformedMessage = new i18n.Message(nodes, {}, {}, src.meaning, src.description, id);
            transformedMessage.sources = src.sources;
            if (filterSources) {
                transformedMessage.sources.forEach((source) => source.filePath = filterSources(source.filePath));
            }
            return transformedMessage;
        });
        return serializer.write(msgList, this._locale);
    }
}
// Transform an i18n AST by renaming the placeholder nodes with the given mapper
class MapPlaceholderNames extends i18n.CloneVisitor {
    convert(nodes, mapper) {
        return mapper ? nodes.map(n => n.visit(this, mapper)) : nodes;
    }
    visitTagPlaceholder(ph, mapper) {
        const startName = mapper.toPublicName(ph.startName);
        const closeName = ph.closeName ? mapper.toPublicName(ph.closeName) : ph.closeName;
        const children = ph.children.map(n => n.visit(this, mapper));
        return new i18n.TagPlaceholder(ph.tag, ph.attrs, startName, closeName, children, ph.isVoid, ph.sourceSpan);
    }
    visitPlaceholder(ph, mapper) {
        return new i18n.Placeholder(ph.value, mapper.toPublicName(ph.name), ph.sourceSpan);
    }
    visitIcuPlaceholder(ph, mapper) {
        return new i18n.IcuPlaceholder(ph.value, mapper.toPublicName(ph.name), ph.sourceSpan);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZV9idW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9tZXNzYWdlX2J1bmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFNSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUNZLFdBQXVCLEVBQVUsYUFBdUIsRUFDeEQsY0FBdUMsRUFBVSxVQUF1QixJQUFJO1FBRDVFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQVU7UUFDeEQsbUJBQWMsR0FBZCxjQUFjLENBQXlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFKaEYsY0FBUyxHQUFtQixFQUFFLENBQUM7SUFJb0QsQ0FBQztJQUU1RixrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLG1CQUF3QztRQUVwRixNQUFNLGdCQUFnQixHQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7U0FDaEM7UUFFRCxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FDcEMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTlGLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFP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Q0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ25GLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FDMUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFvQixFQUFFLE1BQXlCO1FBQzlELE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxFQUF1QixFQUFFLE1BQXlCO1FBQ3BFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICcuLi9tbF9wYXJzZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuLi9tbF9wYXJzZXIvaW50ZXJwb2xhdGlvbl9jb25maWcnO1xuaW1wb3J0IHtQYXJzZUVycm9yfSBmcm9tICcuLi9wYXJzZV91dGlsJztcblxuaW1wb3J0IHtleHRyYWN0TWVzc2FnZXN9IGZyb20gJy4vZXh0cmFjdG9yX21lcmdlcic7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4vaTE4bl9hc3QnO1xuaW1wb3J0IHtQbGFjZWhvbGRlck1hcHBlciwgU2VyaWFsaXplcn0gZnJvbSAnLi9zZXJpYWxpemVycy9zZXJpYWxpemVyJztcblxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBtZXNzYWdlIGV4dHJhY3RlZCBmcm9tIHRoZSB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVuZGxlIHtcbiAgcHJpdmF0ZSBfbWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9odG1sUGFyc2VyOiBIdG1sUGFyc2VyLCBwcml2YXRlIF9pbXBsaWNpdFRhZ3M6IHN0cmluZ1tdLFxuICAgICAgcHJpdmF0ZSBfaW1wbGljaXRBdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmdbXX0sIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nfG51bGwgPSBudWxsKSB7fVxuXG4gIHVwZGF0ZUZyb21UZW1wbGF0ZShodG1sOiBzdHJpbmcsIHVybDogc3RyaW5nLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTpcbiAgICAgIFBhcnNlRXJyb3JbXSB7XG4gICAgY29uc3QgaHRtbFBhcnNlclJlc3VsdCA9XG4gICAgICAgIHRoaXMuX2h0bWxQYXJzZXIucGFyc2UoaHRtbCwgdXJsLCB7dG9rZW5pemVFeHBhbnNpb25Gb3JtczogdHJ1ZSwgaW50ZXJwb2xhdGlvbkNvbmZpZ30pO1xuXG4gICAgaWYgKGh0bWxQYXJzZXJSZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGh0bWxQYXJzZXJSZXN1bHQuZXJyb3JzO1xuICAgIH1cblxuICAgIGNvbnN0IGkxOG5QYXJzZXJSZXN1bHQgPSBleHRyYWN0TWVzc2FnZXMoXG4gICAgICAgIGh0bWxQYXJzZXJSZXN1bHQucm9vdE5vZGVzLCBpbnRlcnBvbGF0aW9uQ29uZmlnLCB0aGlzLl9pbXBsaWNpdFRhZ3MsIHRoaXMuX2ltcGxpY2l0QXR0cnMpO1xuXG4gICAgaWYgKGkxOG5QYXJzZXJSZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGkxOG5QYXJzZXJSZXN1bHQuZXJyb3JzO1xuICAgIH1cblxuICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goLi4uaTE4blBhcnNlclJlc3VsdC5tZXNzYWdlcyk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBtZXNzYWdlIGluIHRoZSBpbnRlcm5hbCBmb3JtYXRcbiAgLy8gVGhlIHB1YmxpYyAoc2VyaWFsaXplZCkgZm9ybWF0IG1pZ2h0IGJlIGRpZmZlcmVudCwgc2VlIHRoZSBgd3JpdGVgIG1ldGhvZC5cbiAgZ2V0TWVzc2FnZXMoKTogaTE4bi5NZXNzYWdlW10ge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlcztcbiAgfVxuXG4gIHdyaXRlKHNlcmlhbGl6ZXI6IFNlcmlhbGl6ZXIsIGZpbHRlclNvdXJjZXM/OiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lc3NhZ2VzOiB7W2lkOiBzdHJpbmddOiBpMThuLk1lc3NhZ2V9ID0ge307XG4gICAgY29uc3QgbWFwcGVyVmlzaXRvciA9IG5ldyBNYXBQbGFjZWhvbGRlck5hbWVzKCk7XG5cbiAgICAvLyBEZWR1cGxpY2F0ZSBtZXNzYWdlcyBiYXNlZCBvbiB0aGVpciBJRFxuICAgIHRoaXMuX21lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHNlcmlhbGl6ZXIuZGlnZXN0KG1lc3NhZ2UpO1xuICAgICAgaWYgKCFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgbWVzc2FnZXNbaWRdID0gbWVzc2FnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VzW2lkXS5zb3VyY2VzLnB1c2goLi4ubWVzc2FnZS5zb3VyY2VzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRyYW5zZm9ybSBwbGFjZWhvbGRlciBuYW1lcyB1c2luZyB0aGUgc2VyaWFsaXplciBtYXBwaW5nXG4gICAgY29uc3QgbXNnTGlzdCA9IE9iamVjdC5rZXlzKG1lc3NhZ2VzKS5tYXAoaWQgPT4ge1xuICAgICAgY29uc3QgbWFwcGVyID0gc2VyaWFsaXplci5jcmVhdGVOYW1lTWFwcGVyKG1lc3NhZ2VzW2lkXSk7XG4gICAgICBjb25zdCBzcmMgPSBtZXNzYWdlc1tpZF07XG4gICAgICBjb25zdCBub2RlcyA9IG1hcHBlciA/IG1hcHBlclZpc2l0b3IuY29udmVydChzcmMubm9kZXMsIG1hcHBlcikgOiBzcmMubm9kZXM7XG4gICAgICBsZXQgdHJhbnNmb3JtZWRNZXNzYWdlID0gbmV3IGkxOG4uTWVzc2FnZShub2Rlcywge30sIHt9LCBzcmMubWVhbmluZywgc3JjLmRlc2NyaXB0aW9uLCBpZCk7XG4gICAgICB0cmFuc2Zvcm1lZE1lc3NhZ2Uuc291cmNlcyA9IHNyYy5zb3VyY2VzO1xuICAgICAgaWYgKGZpbHRlclNvdXJjZXMpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRNZXNzYWdlLnNvdXJjZXMuZm9yRWFjaChcbiAgICAgICAgICAgIChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHNvdXJjZS5maWxlUGF0aCA9IGZpbHRlclNvdXJjZXMoc291cmNlLmZpbGVQYXRoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNmb3JtZWRNZXNzYWdlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlcmlhbGl6ZXIud3JpdGUobXNnTGlzdCwgdGhpcy5fbG9jYWxlKTtcbiAgfVxufVxuXG4vLyBUcmFuc2Zvcm0gYW4gaTE4biBBU1QgYnkgcmVuYW1pbmcgdGhlIHBsYWNlaG9sZGVyIG5vZGVzIHdpdGggdGhlIGdpdmVuIG1hcHBlclxuY2xhc3MgTWFwUGxhY2Vob2xkZXJOYW1lcyBleHRlbmRzIGkxOG4uQ2xvbmVWaXNpdG9yIHtcbiAgY29udmVydChub2RlczogaTE4bi5Ob2RlW10sIG1hcHBlcjogUGxhY2Vob2xkZXJNYXBwZXIpOiBpMThuLk5vZGVbXSB7XG4gICAgcmV0dXJuIG1hcHBlciA/IG5vZGVzLm1hcChuID0+IG4udmlzaXQodGhpcywgbWFwcGVyKSkgOiBub2RlcztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIG1hcHBlcjogUGxhY2Vob2xkZXJNYXBwZXIpOiBpMThuLlRhZ1BsYWNlaG9sZGVyIHtcbiAgICBjb25zdCBzdGFydE5hbWUgPSBtYXBwZXIudG9QdWJsaWNOYW1lKHBoLnN0YXJ0TmFtZSkhO1xuICAgIGNvbnN0IGNsb3NlTmFtZSA9IHBoLmNsb3NlTmFtZSA/IG1hcHBlci50b1B1YmxpY05hbWUocGguY2xvc2VOYW1lKSEgOiBwaC5jbG9zZU5hbWU7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIG1hcHBlcikpO1xuICAgIHJldHVybiBuZXcgaTE4bi5UYWdQbGFjZWhvbGRlcihcbiAgICAgICAgcGgudGFnLCBwaC5hdHRycywgc3RhcnROYW1lLCBjbG9zZU5hbWUsIGNoaWxkcmVuLCBwaC5pc1ZvaWQsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgbWFwcGVyOiBQbGFjZWhvbGRlck1hcHBlcik6IGkxOG4uUGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgaTE4bi5QbGFjZWhvbGRlcihwaC52YWx1ZSwgbWFwcGVyLnRvUHVibGljTmFtZShwaC5uYW1lKSEsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgbWFwcGVyOiBQbGFjZWhvbGRlck1hcHBlcik6IGkxOG4uSWN1UGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgaTE4bi5JY3VQbGFjZWhvbGRlcihwaC52YWx1ZSwgbWFwcGVyLnRvUHVibGljTmFtZShwaC5uYW1lKSEsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG59XG4iXX0=