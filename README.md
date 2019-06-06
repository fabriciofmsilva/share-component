# &lt;share&gt; element

A share element that uses Web Share API or shown a fallback to browser that doesn't supports.

## Installation

```
npm install @fabriciofmsilva/share-element
```

## Usage

```js
import '@fabriciofmsilva/share-element';
```

```html
<fm-share></fm-share>
```

### Requirements for using it

* Your website has to be served over HTTPS. To facilitate local development, the API also works when your site is running over localhost.
* To prevent abuse, the API can only be triggered in response to some user action (such as a click event).

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Browser support

Browsers without native [custom element support](https://caniuse.com/#feat=custom-elementsv1) require a [polyfill](https://github.com/webcomponents/custom-elements).

* Chrome
* Firefox
* Safari
* Microsoft Edge

## Development

```
npm install
npm test
```

## License

Distributed under the MIT license. See [LICENSE](LICENSE) for details.

## References

* [How to Use the Web Share API](https://css-tricks.com/how-to-use-the-web-share-api/)
* [<custom-element> element](https://github.com/github/custom-element-boilerplate)
* [npm Releasing](https://docs.travis-ci.com/user/deployment/npm/)
