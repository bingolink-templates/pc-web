(function() {
    var ssoUrl = 'http://link-test.bingosoft.net/sso/'

    var PATH = {
        'authUrl': ssoUrl + 'oauth2/authorize?client_id=clientId&response_type=token&redirect_uri=' + location.origin + location.pathname + location.hash,
        'logOutUrl': ssoUrl + 'oauth2/logout?post_logout_redirect_uri='
    }

    window.PATH = PATH
})()
