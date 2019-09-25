class BrowserDetect {

  static isOpera() {
    return (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  }

  static isFirefox(){
    return typeof InstallTrigger !== 'undefined';
  }

  static isSafari() {
    return /ructor/i.test(window.HTMLElement) || (function(p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(!window.safari || (typeof window.safari !== 'undefined' && window.safari.pushNotification));
  }

  static isIE(){
    return /* @cc_on!@ */ false || !!document.documentMode;
  }
  static isEdge(){
    return !this.isIE() && !!window.StyleMedia;
  }

  static isChrome() {
    return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  }

  static isBlink() {
    return (this.isChrome() || this.isOpera()) && !!window.CSS;
  }
}

export default BrowserDetect;
