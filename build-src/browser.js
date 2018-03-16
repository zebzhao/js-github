global.window.git = {
  objectCodec: require('js-git/lib/object-codec'),
  sha1: require('git-sha1'),
  github: require('../mixins/github-db'),
  formats: require('js-git/mixins/formats'),
  bodec: require('bodec')
}