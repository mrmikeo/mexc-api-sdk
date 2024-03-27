"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("./base");
const util_1 = require("../util");
/**
 * @stability stable
 */
class Market extends base_1.Base {
    /**
     * Exchange Information.
     *
     * @param options ``` [options.symbol] - symbol(optional) ex: BTCUSDT. [options.symbols] - for mutiple symbols, add comma for each symbol in string. ex: BTCUSDT,BNBBTC . ```.
     * @returns
     * @stability stable
     */
    exchangeInfo(options = {}) {
        if (Object.keys(options).includes("symbol")) {
            options["symbol"] = options["symbol"].toUpperCase();
        }
        if (Object.keys(options).includes("symbols")) {
            options["symbols"] = options["symbols"].split(',').map((symbol) => symbol.toUpperCase()).join(',');
        }
        const res = this.publicRequest("GET", "/exchangeInfo", options);
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Order Book.
     *
     * @param options ``` [options.limit] - Default 100; max 5000. Valid limits:[5, 10, 20, 50, 100, 500, 1000, 5000]. ```.
     * @returns
     * @stability stable
     */
    depth(symbol, options = { limit: 100 }) {
        const res = this.publicRequest("GET", "/depth", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Recent Trades List.
     *
     * @param options ``` [options.limit] -limit(optional) Default 500; max 1000. ex: 500. ```.
     * @returns
     * @stability stable
     */
    trades(symbol, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/trades", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Old Trade Lookup.
     *
     * @param options ``` [options.limit] -limit(optional) Default 500; max 1000. ex:500. ```.
     * @returns
     * @stability stable
     */
    historicalTrades(symbol, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/historicalTrades", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Compressed/Aggregate Trades List.
     *
     * Note: If sending startTime and endTime, the interval must be less than one hour
     *
     * @param options ``` [options.fromId] - id to get aggregate trades from INCLUSIVE. [options.startTime] - Timestamp in ms to get aggregate trades from INCLUSIVE. [options.endTime] - Timestamp in ms to get aggregate trades until INCLUSIVE. [options.limit] - Default 500; max 1000. ex:500 ```.
     * @returns
     * @stability stable
     */
    aggTrades(symbol, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/aggTrades", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Kline/Candlestick Data.
     *
     * @param options ``` [options.startTime] [options.endTime] [options.limit] -Default 500; max 1000. ex: 500 ```.
     * @returns
     * @stability stable
     */
    klines(symbol, interval, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/klines", Object.assign(options, {
            symbol: symbol.toUpperCase(),
            interval: interval,
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Current Average Price.
     *
     * @stability stable
     */
    avgPrice(symbol) {
        const res = this.publicRequest("GET", "/avgPrice", { symbol: symbol.toUpperCase() });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * 24hr Ticker Price Change Statistics.
     *
     * @stability stable
     */
    ticker24hr(symbol) {
        if (symbol) {
            symbol = symbol.toUpperCase();
        }
        const res = this.publicRequest("GET", "/ticker/24hr", { symbol });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Symbol Price Ticker.
     *
     * @stability stable
     */
    tickerPrice(symbol) {
        if (symbol) {
            symbol = symbol.toUpperCase();
        }
        const res = this.publicRequest("GET", "/ticker/price", { symbol });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Symbol Order Book Ticker.
     *
     * @stability stable
     */
    bookTicker(symbol) {
        if (symbol) {
            symbol = symbol.toUpperCase();
        }
        const res = this.publicRequest("GET", "/ticker/bookTicker", { symbol });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
}
exports.Market = Market;
_a = JSII_RTTI_SYMBOL_1;
Market[_a] = { fqn: "mexc-sdk.Market", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFya2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUNBQThCO0FBQzlCLGtDQUFvQzs7OztBQUVwQyxNQUFhLE1BQU8sU0FBUSxXQUFJOzs7Ozs7OztJQUU5QixZQUFZLENBQUMsVUFBZSxFQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyRDtRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekc7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7O0lBR0QsS0FBSyxDQUFDLE1BQWMsRUFBRSxVQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNqRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMs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LENBQUMsTUFBZTtRQUN4QixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0I7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O0FBL0lILHdCQWdKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgZnJvbWF0RGF0YSB9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBNYXJrZXQgZXh0ZW5kcyBCYXNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBleGNoYW5nZUluZm8ob3B0aW9uczogYW55ID0ge30pIHtcbiAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykuaW5jbHVkZXMoXCJzeW1ib2xcIikpIHtcbiAgICAgIG9wdGlvbnNbXCJzeW1ib2xcIl0gPSBvcHRpb25zW1wic3ltYm9sXCJdLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5pbmNsdWRlcyhcInN5bWJvbHNcIikpIHtcbiAgICAgIG9wdGlvbnNbXCJzeW1ib2xzXCJdID0gb3B0aW9uc1tcInN5bWJvbHNcIl0uc3BsaXQoJywnKS5tYXAoKHN5bWJvbDogYW55KSA9PiBzeW1ib2wudG9VcHBlckNhc2UoKSkuam9pbignLCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcIkdFVFwiLCBcIi9leGNoYW5nZUluZm9cIiwgb3B0aW9ucyk7XG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBkZXB0aChzeW1ib2w6IHN0cmluZywgb3B0aW9uczogYW55ID0geyBsaW1pdDogMTAwIH0pIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoXG4gICAgICBcIkdFVFwiLFxuICAgICAgXCIvZGVwdGhcIixcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgdHJhZGVzKHN5bWJvbDogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7IGxpbWl0OiA1MDAgfSkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcbiAgICAgIFwiR0VUXCIsXG4gICAgICBcIi90cmFkZXNcIixcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgaGlzdG9yaWNhbFRyYWRlcyhzeW1ib2w6IHN0cmluZywgb3B0aW9uczogYW55ID0geyBsaW1pdDogNTAwIH0pIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoXG4gICAgICBcIkdFVFwiLFxuICAgICAgXCIvaGlzdG9yaWNhbFRyYWRlc1wiLFxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIHN5bWJvbDogc3ltYm9sLnRvVXBwZXJDYXNlKCksXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBhZ2dUcmFkZXMoc3ltYm9sOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHsgbGltaXQ6IDUwMCB9KSB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5wdWJsaWNSZXF1ZXN0KFxuICAgICAgXCJHRVRcIixcbiAgICAgIFwiL2FnZ1RyYWRlc1wiLFxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIHN5bWJvbDogc3ltYm9sLnRvVXBwZXJDYXNlKCksXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIGtsaW5lcyhzeW1ib2w6IHN0cmluZywgaW50ZXJ2YWw6IHN0cmluZywgb3B0aW9uczogYW55ID0geyBsaW1pdDogNTAwIH0pIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoXG4gICAgICBcIkdFVFwiLFxuICAgICAgXCIva2xpbmVzXCIsXG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wudG9VcHBlckNhc2UoKSxcbiAgICAgICAgaW50ZXJ2YWw6IGludGVydmFsLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgIGNvbnN0IGZvcm1hdERhdGFzID0gZnJvbWF0RGF0YShyYXdEYXRhKTtcblxuICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBhdmdQcmljZShzeW1ib2w6IHN0cmluZykge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcIkdFVFwiLCBcIi9hdmdQcmljZVwiLCB7IHN5bWJvbDogc3ltYm9sLnRvVXBwZXJDYXNlKCkgfSk7XG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgdGlja2VyMjRocihzeW1ib2w/OiBzdHJpbmcpIHtcbiAgICBpZiAoc3ltYm9sKSB7XG4gICAgICBzeW1ib2wgPSBzeW1ib2wudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoXCJHRVRcIiwgXCIvdGlja2VyLzI0aHJcIiwgeyBzeW1ib2wgfSk7XG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICB0aWNrZXJQcmljZShzeW1ib2w/OiBzdHJpbmcpIHtcbiAgICBpZiAoc3ltYm9sKSB7XG4gICAgICBzeW1ib2wgPSBzeW1ib2wudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVzID0gdGhpcy5wdWJsaWNSZXF1ZXN0KFwiR0VUXCIsIFwiL3RpY2tlci9wcmljZVwiLCB7IHN5bWJvbCB9KTtcbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIGJvb2tUaWNrZXIoc3ltYm9sPzogc3RyaW5nKSB7XG4gICAgaWYgKHN5bWJvbCkge1xuICAgICAgc3ltYm9sID0gc3ltYm9sLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gdGhpcy5wdWJsaWNSZXF1ZXN0KFwiR0VUXCIsIFwiL3RpY2tlci9ib29rVGlja2VyXCIsIHsgc3ltYm9sIH0pO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgIGNvbnN0IGZvcm1hdERhdGFzID0gZnJvbWF0RGF0YShyYXdEYXRhKTtcblxuICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgfVxufVxuIl19