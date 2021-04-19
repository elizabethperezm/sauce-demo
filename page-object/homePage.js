const commands = [

]

const elements = {
  productLabel: '.title',
}

module.exports = {
  elements: elements,
  commands: commands,
  url: function () {
    return `${this.api.launchUrl}`
  }
}