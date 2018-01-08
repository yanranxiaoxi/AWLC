// Built by XiaoXi
// https://github.com/CollageTomato/PersonalPAC

var proxy = "SOCKS5 127.0.0.1:1080;";

var domains = {
// BBC
  "bbc.co.uk": 1,
  "bbci.co.uk": 1,
  "bbc.com": 1,
//Blogger
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
  "*.google": 1,
  //"doubleclick.net": 1,
  "goo.gl": 1,
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
  //"googleapis.com": 1,
  // Rule out fonts begin
  "*[!s].googleapis.com": 1,
  "*[!t]s.googleapis.com": 1,
  "*[!n]ts.googleapis.com": 1,
  "*[!o]nts.googleapis.com": 1,
  "*[!f]onts.googleapis.com": 1,
  // Rule out fonts end
  //"googletagservices.com": 1,
  "googlesyndication.com": 1,
  "googleusercontent.com": 1,
  "googlevideo.com": 1,
  //"gstatic.com": 1,
  // Rule out fonts begin
  "*[!s].gstatic.com": 1,
  "*[!t]s.gstatic.com": 1,
  "*[!n]ts.gstatic.com": 1,
  "*[!o]nts.gstatic.com": 1,
  "*[!f]onts.gstatic.com": 1,
  // Rule out fonts end
  "thinkwithgoogle.com": 1,
  "ytimg.com": 1,
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
// Telegram
  "t.me": 1,
  "telegram.me": 1,
  "telegram.org": 1,
// Tumblr
  "tumblr.com": 1,
// Twitter
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
// else
  "atdmt.com": 1,
  "greatfirewallofchina.org": 1,
  "rawgit.com": 1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
