webpackHotUpdate(4,{

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__("./node_modules/xtend/immutable.js");
var unified = __webpack_require__("./node_modules/unified/index.js");
var parse = __webpack_require__("./node_modules/remark-parse/index.js");
var PropTypes = __webpack_require__("./node_modules/prop-types/index.js");
var naiveHtml = __webpack_require__("./node_modules/react-markdown/lib/plugins/naive-html.js");
var disallowNode = __webpack_require__("./node_modules/react-markdown/lib/plugins/disallow-node.js");
var astToReact = __webpack_require__("./node_modules/react-markdown/lib/ast-to-react.js");
var wrapTableRows = __webpack_require__("./node_modules/react-markdown/lib/wrap-table-rows.js");
var getDefinitions = __webpack_require__("./node_modules/react-markdown/lib/get-definitions.js");
var uriTransformer = __webpack_require__("./node_modules/react-markdown/lib/uriTransformer.js");
var defaultRenderers = __webpack_require__("./node_modules/react-markdown/lib/renderers.js");

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  var src = props.source || props.children || '';

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);

  var plugins = [parse].concat(props.plugins || []);
  var parser = plugins.reduce(applyParserPlugin, unified());

  var rawAst = parser.parse(src);
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(rawAst)
  });

  var astPlugins = determineAstPlugins(props);
  var ast = astPlugins.reduce(function (node, plugin) {
    return plugin(node, renderProps);
  }, rawAst);

  return astToReact(ast, renderProps);
};

function applyParserPlugin(parser, plugin) {
  return Array.isArray(plugin) ? parser.use(plugin[0], plugin[1]) : parser.use(plugin);
}

function determineAstPlugins(props) {
  var plugins = [wrapTableRows];

  var disallowedTypes = props.disallowedTypes;
  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';
  if (disallowedTypes && disallowedTypes.length > 0) {
    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }

  var renderHtml = !props.escapeHtml && !props.skipHtml;
  if (renderHtml) {
    plugins.push(naiveHtml);
  }

  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
}

ReactMarkdown.defaultProps = {
  renderers: {},
  escapeHtml: true,
  skipHtml: false,
  transformLinkUri: uriTransformer
};

ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object
};

ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;

module.exports = ReactMarkdown;

/***/ })

})
//# sourceMappingURL=4.b6d2586b13f91eb41bc6.hot-update.js.map