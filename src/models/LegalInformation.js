export default class LegalInformation {
  constructor(options) {
    this.show = false
    this.disclaimer = ''
    this.privacyHTML = ''

    Object.assign(this, options || {})
  }
}
