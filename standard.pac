/*
  Algorithm-designed and Built with all the love in the world by XiaoXi.
  Project homepage: https://github.com/yanranxiaoxi/AWLC
  Thanks for: https://github.com/clowwindy/gfwlist2pac

  ANNOTATION
    Whitelists have higher priority than blacklists.
*/

var proxy = "SOCKS5 127.0.0.1:1080;";

var blacklist_domains = {
// BBC
  "bbc.co.uk": 1,
  "bbci.co.uk": 1,
  "bbc.com": 1,
// Blogger
  "blogger.com": 1,
  "blogspot.com": 1,
  "blogspot.hk": 1,
  "blogspot.jp": 1,
// box
  "box.com": 1,
// Discord
  "discordapp.com": 1,
// Disqus
  "disqus.com": 1,
  "disquscdn.com": 1,
// Doub
  "doub.io": 1,
// Dropbox
  "dropbox.com": 1,
  "dropboxstatic.com": 1,
  "dropboxusercontent.com": 1,
// DuckDuckGo
  "duckduckgo.com": 1,
// ExHentai
  "e-hentai.org": 1,
// Facebook
  "facebook.com": 1,
  "facebook.hu": 1,
  "facebook.in": 1,
  "facebook.nl": 1,
  "facebook.se": 1,
  "fb.com": 1,
  "fb.me": 1,
  "fbcdn.net": 1,
  "fbsbx.com": 1,
// Firefox
  "send.firefox.com": 1,
// Flickr
  "flickr.com": 1,
  "staticflickr.com": 1,
  "yimg.com": 1,
// Google
  "466453.com": 1,
  "adwords.com": 1,
  "adwords.net": 1,
  "adwords.org": 1,
  "android.com": 1,
  "chromium.org": 1,
  "deepmind.com": 1,
  "domains.google": 1,
  //"doubleclick.net": 1,
  "g.co": 1,
  "get.app": 1,
  "ggpht.com": 1,
  "gmail.com": 1,
  "goo.gl": 1,
  "google.ae": 1,
  "google.am": 1,
  "google.as": 1,
  "google.at": 1,
  "google.az": 1,
  "google.ba": 1,
  "google.be": 1,
  "google.bi": 1,
  "google.bg": 1,
  "google.bs": 1,
  "google.ca": 1,
  "google.cd": 1,
  "google.cg": 1,
  "google.ch": 1,
  "google.ci": 1,
  "google.cl": 1,
  //"google.cn": 1,
  "google.co": 1,
  "google.co.bw": 1,
  "google.co.ck": 1,
  "google.co.cr": 1,
  "google.co.hu": 1,
  "google.co.id": 1,
  "google.co.il": 1,
  "google.co.im": 1,
  "google.co.in": 1,
  "google.co.je": 1,
  "google.co.jp": 1,
  "google.co.ke": 1,
  "google.co.kr": 1,
  "google.co.ls": 1,
  "google.co.ma": 1,
  "google.co.nz": 1,
  "google.co.th": 1,
  "google.co.tz": 1,
  "google.co.ug": 1,
  "google.co.uk": 1,
  "google.co.uz": 1,
  "google.co.ve": 1,
  "google.co.vi": 1,
  "google.co.za": 1,
  "google.co.zm": 1,
  "google.com": 1,
  "google.com.af": 1,
  "google.com.ag": 1,
  "google.com.ai": 1,
  "google.com.ar": 1,
  "google.com.au": 1,
  "google.com.bd": 1,
  "google.com.bh": 1,
  "google.com.bo": 1,
  "google.com.br": 1,
  "google.com.bz": 1,
  "google.com.co": 1,
  "google.com.cu": 1,
  "google.com.dm": 1,
  "google.com.do": 1,
  "google.com.ec": 1,
  "google.com.eg": 1,
  "google.com.et": 1,
  "google.com.fj": 1,
  "google.com.gi": 1,
  "google.com.gt": 1,
  "google.com.hk": 1,
  "google.com.jm": 1,
  "google.com.ly": 1,
  "google.com.mt": 1,
  "google.com.mx": 1,
  "google.com.my": 1,
  "google.com.na": 1,
  "google.com.nf": 1,
  "google.com.ni": 1,
  "google.com.np": 1,
  "google.com.om": 1,
  "google.com.pa": 1,
  "google.com.pe": 1,
  "google.com.ph": 1,
  "google.com.pk": 1,
  "google.com.pr": 1,
  "google.com.py": 1,
  "google.com.sa": 1,
  "google.com.sb": 1,
  "google.com.sg": 1,
  "google.com.sv": 1,
  "google.com.tj": 1,
  "google.com.tr": 1,
  "google.com.tw": 1,
  "google.com.ua": 1,
  "google.com.uy": 1,
  "google.com.vc": 1,
  "google.com.vn": 1,
  "google.cz": 1,
  "google.de": 1,
  "google.dj": 1,
  "google.dk": 1,
  "google.ee": 1,
  "google.es": 1,
  "google.fi": 1,
  "google.fm": 1,
  "google.fr": 1,
  "google.gg": 1,
  "google.gl": 1,
  "google.gm": 1,
  "google.gr": 1,
  "google.hk": 1,
  "google.hn": 1,
  "google.hr": 1,
  "google.ht": 1,
  "google.hu": 1,
  "google.ie": 1,
  "google.in": 1,
  "google.info": 1,
  "google.io": 1,
  "google.is": 1,
  "google.it": 1,
  "google.jo": 1,
  "google.jp": 1,
  "google.kg": 1,
  "google.kr": 1,
  "google.kz": 1,
  "google.li": 1,
  "google.lk": 1,
  "google.lt": 1,
  "google.lu": 1,
  "google.lv": 1,
  "google.mn": 1,
  "google.ms": 1,
  "google.mu": 1,
  "google.mw": 1,
  "google.mx": 1,
  "google.net": 1,
  "google.nl": 1,
  "google.no": 1,
  "google.nu": 1,
  "google.off.ai": 1,
  "google.org": 1,
  "google.ph": 1,
  "google.pl": 1,
  "google.pn": 1,
  "google.pt": 1,
  "google.ro": 1,
  "google.ru": 1,
  "google.rw": 1,
  "google.sc": 1,
  "google.se": 1,
  "google.sg": 1,
  "google.sh": 1,
  "google.sk": 1,
  "google.sm": 1,
  "google.sn": 1,
  "google.tk": 1,
  "google.tm": 1,
  "google.to": 1,
  "google.tp": 1,
  "google.tt": 1,
  "google.vg": 1,
  "google.vn": 1,
  "google.vu": 1,
  "google.ws": 1,
  "googleapis.com": 1,
  "googleblog.com": 1,
  "googlecloud.com": 1,
  "googledomains.com": 1,
  "googledrive.com": 1,
  "googlemail.com": 1,
  "googlemaps.com": 1,
  "googlephotos.com": 1,
  "googleplay.com": 1,
  "googleplus.com": 1,
  "googlestore.com": 1,
  "googlesupport.com": 1,
  //"googletagmanager.com": 1,
  //"googletagservices.com": 1,
  "googlesyndication.com": 1,
  "googleusercontent.com": 1,
  "googlevideo.com": 1,
  //"google-analytics.com": 1,
  "gstatic.com": 1,
  "gsuite.com": 1,
  "keyhole.com": 1,
  "picasa.com": 1,
  "thinkwithgoogle.com": 1,
  "withgoogle.com": 1,
  "writely.com": 1,
  "youtube.com": 1,
  "ytimg.com": 1,
// EL Combo
  "erolord.com": 1,
// Instagram
  "cdninstagram.com": 1,
  "instagram.com": 1,
// Line
  "line.me": 1,
  "line-apps.com": 1,
  "line-scdn.net": 1,
  "static.line.naver.jp": 1,
// Mega
  "mega.co.nz": 1,
  "mega.nz": 1,
// Microsoft
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
// pixiv
  "pixiv.net": 1,
  //"pximg.net": 1,
// Pornhub
  "pornhub.com": 1,
// RawGit
  "rawgit.com": 1,
// Shadowsocks
  "shadowsocks.org": 1,
// Steam
  "steamcommunity.com": 1,
// Telegram
  "t.me": 1,
  "telegram.me": 1,
  "telegram.org": 1,
  "telesco.pe": 1,
// The New York Times
  "nytimes.com": 1,
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
// Vimeo
  "vimeo.com": 1,
  //"vimeocdn.com": 1,
// VirMach
  "virmach.com": 1,
// WhatsApp
  "whatsapp.com": 1,
  "whatsapp.net": 1,
// Wikipedia
  "wikipedia.org": 1,
};

var whitelist_domains = {
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
