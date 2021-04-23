export default class LegalInformation {
  constructor(options) {
    this.disclaimer = ''
    // example:
    //this.privacy = {
    //  text: 'Privacy policy',
    //  href: '/privacy'
    //}
    this.agreement = null
    this.privacy = null

    Object.assign(this, options || {})
  }

  getHTML(elem) {
    return '<a class="link" ' +
      'target="_blank" rel="noopener noreferrer" href="' +
      elem.href + '" ' + 'style="color: cornflowerblue !important;">' +
      '' + elem.text + '</a>'
  }
}
