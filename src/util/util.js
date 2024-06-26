"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromatData = exports.isEmptyValue = exports.removeEmptyValue = exports.buildQueryString = exports.createRequest = void 0;
const sync_request_1 = require("sync-request");
const createRequest = (config) => {
    const { baseURL, method, url, headers } = config;
    return sync_request_1.default(method, `${baseURL}${url}`, { headers });
};
exports.createRequest = createRequest;
const stringifyKeyValuePair = ([key, value]) => {
    return `${key}=${encodeRFC3986URIComponent(value)}`;
};
const encodeRFC3986URIComponent = (str) => {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
};
const removeEmptyValue = (obj) => {
    if (!(obj instanceof Object))
        return {};
    Object.keys(obj).forEach(key => isEmptyValue(obj[key]) && delete obj[key]);
    return obj;
};
exports.removeEmptyValue = removeEmptyValue;
const isEmptyValue = (input) => {
    /**
     * input is considered empty value: falsy value (like null, undefined, '', except false and 0),
     * string with white space characters only, empty array, empty object
     */
    return (!input && input !== false && input !== 0) ||
        ((input instanceof String || typeof input === 'string') && !input.trim()) ||
        (Array.isArray(input) && !input.length) ||
        (input instanceof Object && !Object.keys(input).length);
};
exports.isEmptyValue = isEmptyValue;
const buildQueryString = (params) => {
    if (!params)
        return '';
    return Object.entries(params)
        .map(stringifyKeyValuePair)
        .join('&');
};
exports.buildQueryString = buildQueryString;
const fromatData = (datas) => {
    if (Array.isArray(datas)) {
        return datas.map((data) => {
            return fromatData(data);
        });
    }
    else if (typeof datas === "object" && datas !== null) {
        const newObj = {};
        Object.entries(datas).map(([key, value]) => newObj[key] = fromatData(value));
        return newObj;
    }
    else {
        return (datas === undefined || datas === null) ? "" : datas;
    }
};
exports.fromatData = fromatData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQW1DO0FBRW5DLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDbEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQTtJQUNoRCxPQUFPLHNCQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtBQUMzRCxDQUFDLENBQUE7QUE2Q0csc0NBQWE7QUEzQ2pCLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQVEsRUFBRSxFQUFFO0lBQ2xELE9BQU8sR0FBRyxHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQTtBQUNoRCxDQUFDLENBQUE7QUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUU7SUFDbEMsSUFBRyxDQUFDLENBQUMsR0FBRyxZQUFZLE1BQU0sQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFBO0lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDMUUsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDLENBQUE7QUFxQ0csNENBQWdCO0FBbkNwQixNQUFNLFlBQVksR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQ2hDOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxDQUFDLEtBQUssWUFBWSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQy9ELENBQUMsQ0FBQTtBQTJCRyxvQ0FBWTtBQXpCaEIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO0lBQ3JDLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxFQUFFLENBQUE7SUFDdEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUMxQixHQUFHLENBQUMscUJBQXFCLENBQUM7U0FDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLENBQUMsQ0FBQTtBQWtCRyw0Q0FBZ0I7QUFoQnBCLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBVSxFQUFPLEVBQUU7SUFDbkMsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzNCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0tBQ0w7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2hELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQTtRQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDbkYsT0FBTyxNQUFNLENBQUM7S0FDckI7U0FBTTtRQUNILE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7S0FDOUQ7QUFDTCxDQUFDLENBQUE7QUFPRyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCJzeW5jLXJlcXVlc3RcIjtcblxuY29uc3QgY3JlYXRlUmVxdWVzdCA9IChjb25maWc6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgYmFzZVVSTCwgbWV0aG9kLCB1cmwsIGhlYWRlcnMgfSA9IGNvbmZpZ1xuICAgIHJldHVybiByZXF1ZXN0KG1ldGhvZCwgYCR7YmFzZVVSTH0ke3VybH1gLCB7IGhlYWRlcnMgfSlcbn1cblxuY29uc3Qgc3RyaW5naWZ5S2V5VmFsdWVQYWlyID0gKFtrZXksIHZhbHVlXTogYW55W10pID0+IHtcbiAgICByZXR1cm4gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YFxufVxuXG5jb25zdCByZW1vdmVFbXB0eVZhbHVlID0gKG9iajogYW55KSA9PiB7XG4gICAgaWYoIShvYmogaW5zdGFuY2VvZiBPYmplY3QpKSByZXR1cm4ge31cbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IGlzRW1wdHlWYWx1ZShvYmpba2V5XSkgJiYgZGVsZXRlIG9ialtrZXldKVxuICAgIHJldHVybiBvYmpcbn1cblxuY29uc3QgaXNFbXB0eVZhbHVlID0gKGlucHV0OiBhbnkpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbnB1dCBpcyBjb25zaWRlcmVkIGVtcHR5IHZhbHVlOiBmYWxzeSB2YWx1ZSAobGlrZSBudWxsLCB1bmRlZmluZWQsICcnLCBleGNlcHQgZmFsc2UgYW5kIDApLFxuICAgICAqIHN0cmluZyB3aXRoIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMgb25seSwgZW1wdHkgYXJyYXksIGVtcHR5IG9iamVjdFxuICAgICAqL1xuICAgIHJldHVybiAoIWlucHV0ICYmIGlucHV0ICE9PSBmYWxzZSAmJiBpbnB1dCAhPT0gMCkgfHxcbiAgICAgICAgKChpbnB1dCBpbnN0YW5jZW9mIFN0cmluZyB8fCB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSAmJiAhaW5wdXQudHJpbSgpKSB8fFxuICAgICAgICAoQXJyYXkuaXNBcnJheShpbnB1dCkgJiYgIWlucHV0Lmxlbmd0aCkgfHxcbiAgICAgICAgKGlucHV0IGluc3RhbmNlb2YgT2JqZWN0ICYmICFPYmplY3Qua2V5cyhpbnB1dCkubGVuZ3RoKVxufVxuXG5jb25zdCBidWlsZFF1ZXJ5U3RyaW5nID0gKHBhcmFtczogYW55KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiAnJ1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhwYXJhbXMpXG4gICAgICAubWFwKHN0cmluZ2lmeUtleVZhbHVlUGFpcilcbiAgICAgIC5qb2luKCcmJylcbn1cblxuY29uc3QgZnJvbWF0RGF0YSA9IChkYXRhczogYW55KTogYW55ID0+IHtcbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGFzKSkge1xuICAgICAgICByZXR1cm4gZGF0YXMubWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tYXREYXRhKGRhdGEpXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YXMgPT09IFwib2JqZWN0XCIgJiYgZGF0YXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09iajogYW55ID0ge31cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGFzKS5tYXAoKFtrZXksIHZhbHVlXTogYW55W10pID0+IG5ld09ialtrZXldID0gZnJvbWF0RGF0YSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoZGF0YXMgPT09IHVuZGVmaW5lZCB8fCBkYXRhcyA9PT0gbnVsbCkgPyBcIlwiIDogZGF0YXNcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUmVxdWVzdCxcbiAgICBidWlsZFF1ZXJ5U3RyaW5nLFxuICAgIHJlbW92ZUVtcHR5VmFsdWUsXG4gICAgaXNFbXB0eVZhbHVlLFxuICAgIGZyb21hdERhdGFcbn0iXX0=
