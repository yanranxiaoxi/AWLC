/*
  Algorithm-designed and Built with all the love in the world by XiaoXi.
  Project homepage: https://github.com/CollageTomato/PersonalPAC
  Thanks for: https://github.com/clowwindy/gfwlist2pac

  ANNOTATION
    Whitelists have higher priority than blacklists.
*/

var proxy = "SOCKS5 127.0.0.1:1080;";

var blacklist_domains = {

//Here is banned domains

// BBC
  "bbc.co.uk": 1,
  "bbci.co.uk": 1,
  "bbc.com": 1,
// Blogger
  "blogger.com": 1,
  "blogspot.com": 1,
  "blogspot.hk": 1,
  "blogspot.jp": 1,
// Disqus
  "disqus.com": 1,
  "disquscdn.com": 1,
// Dropbox
  "dropbox.com": 1,
  "dropboxstatic.com": 1,
  "dropboxusercontent.com": 1,
// DuckDuckGo
  "duckduckgo.com": 1,
// Facebook
  "facebook.br": 1,
  "facebook.com": 1,
  "facebook.hu": 1,
  "facebook.in": 1,
  "facebook.net": 1,
  "facebook.nl": 1,
  "facebook.se": 1,
  "fb.com": 1,
  "fb.me": 1,
  "fbcdn.net": 1,
  "fbsbx.com": 1,
// Flickr
  "flickr.com": 1,
  "staticflickr.com": 1,
  "yimg.com": 1,
// Google
  "domains.google": 1,
  //"doubleclick.net": 1,
  "goo.gl": 1,
  "google": 1,
  "google.ae": 1,
  "google.am": 1,
  "google.as": 1,
  "google.at": 1,
  "google.az": 1,
  "google.ba": 1,
  "google.be": 1,
  "google.bg": 1,
  "google.ca": 1,
  "google.cd": 1,
  "google.ci": 1,
  //"google.cn": 1,
  "google.co.id": 1,
  "google.co.jp": 1,
  "google.co.kr": 1,
  "google.co.ma": 1,
  "google.com": 1,
  "google.de": 1,
  "google.dj": 1,
  "google.dk": 1,
  "google.es": 1,
  "google.fi": 1,
  "google.fm": 1,
  "google.fr": 1,
  "google.gg": 1,
  "google.gl": 1,
  "google.gr": 1,
  "google.ie": 1,
  "google.is": 1,
  "google.it": 1,
  "google.jo": 1,
  "google.kz": 1,
  "google.lv": 1,
  "google.mn": 1,
  "google.ms": 1,
  "google.nl": 1,
  "google.no": 1,
  "google.nu": 1,
  "google.ro": 1,
  "google.ru": 1,
  "google.rw": 1,
  "google.sc": 1,
  "google.sh": 1,
  "google.sk": 1,
  "google.sm": 1,
  "google.sn": 1,
  "google.tk": 1,
  "google.tm": 1,
  "google.to": 1,
  "google.tt": 1,
  "google.vu": 1,
  "google.ws": 1,
  "googleapis.com": 1,
  //"googletagmanager.com": 1,
  //"googletagservices.com": 1,
  "googlesyndication.com": 1,
  "googleusercontent.com": 1,
  "googlevideo.com": 1,
  "gstatic.com": 1,
  "thinkwithgoogle.com": 1,
// Hentai online
  "erolord.com": 1,
// Instagram
  "cdninstagram.com": 1,
  "instagram.com": 1,
// Line
  "line.me": 1,
  "line-apps.com": 1,
  "line-scdn.net": 1,
  "static.line.naver.jp": 1,
// OneDrive
  "onedrive.live.com": 1,
// Pinterest
  "pinimg.com": 1,
  "pinterest.at": 1,
  "pinterest.co.kr": 1,
  "pinterest.com": 1,
  "pinterest.de": 1,
  "pinterest.dk": 1,
  "pinterest.fr": 1,
  "pinterest.jp": 1,
  "pinterest.nl": 1,
  "pinterest.se": 1,
// RawGit
  "rawgit.com": 1,
// Steam
  "steamcommunity.com": 1,
// Telegram
  "t.me": 1,
  "telegram.me": 1,
  "telegram.org": 1,
// Tor Project
  "torproject.org": 1,
// Tumblr
  "tumblr.com": 1,
// Twitter
  "ads-twitter.com": 1,
  "t.co": 1,
  "twimg.com": 1,
  "twitter.com": 1,
  "twitter.jp": 1,
// WhatsApp
  "whatsapp.com": 1,
  "whatsapp.net": 1,
// Wikipedia
  "zh.wikipedia.org": 1,
// Youtube
  "ggpht.com": 1,
  "youtube.com": 1,
  "ytimg.com": 1,
// else
  "atdmt.com": 1,
  "greatfirewallofchina.org": 1,

//Here is slowed domains

// Adobe
  "adobe.com": 1,
  "typekit.com": 1,
// Akamai
  "akamai.com": 1
  "akamaihd.net": 1
  "akamaized.net": 1,
// Atlassian
  "atlassian.com": 1,
  "bitbucket.org": 1,
  "statuspage.io": 1,
  "stride.com": 1,
  "trello.com": 1,
// autopilot
  "autopilothq.com": 1,
// BlueConic
  "blueconic.com": 1,
  "blueconic.net": 1,
// Clicktale
  "clicktale.com": 1,
  "clicktale.net": 1,
// CloudFront
  "cloudfront.net": 1,
// Gravatar
  "gravatar.com": 1,
// Hostinger
  "hostinger.co.uk": 1,
  "hostinger.com": 1,
  "hostinger.com.hk": 1,
  "hostinger.io": 1,
  "hostinger.jp": 1,
// imgur
  "imgur.com": 1,
// Microsoft
  "gfx.ms": 1,
  "microsoft.com": 1,
  "assets.onestore.ms": 1,
  "s-microsoft.com": 1,
// Optimizely
  "demandbase.com": 1,
  "optimizely.com": 1,
// reddit
  "reddit.com": 1,
  "redditmedia.com": 1,
  "redditstatic.com": 1,
// Segment
  "segment.com": 1,
  "segment.io": 1,
// Steam
  "steampowered.com": 1,
// WordPress
  "wordpress.com": 1,
  "wp.com": 1,
};

var whitelist_domains = {
// Google
  "fonts.googleapis.com": 1,
  "fonts.gstatic.com": 1,
  "ssl.gstatic.com": 1,
  "www.gstatic.com": 1,
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(blacklist_domains, host)) {
			    if (hasOwnProperty.call(whitelist_domains, host)) {
				  return direct;
				} else {
				  return proxy;
				}
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(blacklist_domains, suffix)) {
			if (hasOwnProperty.call(whitelist_domains, host)) {
			  return direct;
			} else {
			  return proxy;
			}
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
