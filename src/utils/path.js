module.exports = {
    /**
     * 解析url path
     */
    resolveUrlParams: function(url) {
        if (!url) return {};
        url = url + '';
        var index = url.indexOf('?');
        if (index > -1) {
            url = url.substring(index + 1, url.length);
        }
        var pairs = url.split('&'), params = {};
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            var indexEq = pair.indexOf('='), key = pair, value = null;
            if (indexEq > 0) {
                key = pair.substring(0, indexEq);
                value = pair.substring(indexEq + 1, pair.length);
            }
            params[key] = value;
        }
        return params;
    },
    appendSSORedirectUrlParams: function(url, params) {
        var ps = [];
        for (var key in params) {
            ps.push(key + '=' + params[key]);
        }
        if (ps.length > 0) {
            url += encodeURIComponent('?' + ps.join('&'));
        }
        return url;
    }
}
