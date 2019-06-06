describe('share-element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('fm-share')
      assert.equal('FM-SHARE', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.ShareElement()
      assert.equal('FM-SHARE', el.nodeName)
    })
  })

  describe('after tree insertion', function () {
    beforeEach(function () {
      document.body.innerHTML = '<fm-share></fm-share>'
    })

    afterEach(function () {
      document.body.innerHTML = ''
    })

    it('initiates', function () {
      const ce = document.querySelector('fm-share')
      assert.equal(ce.textContent, ':wave:')
    })
  })
})
