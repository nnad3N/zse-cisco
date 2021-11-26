(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./assets/styles/GlobalStyle.js":
/*!**************************************!*\
  !*** ./assets/styles/GlobalStyle.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": function() { return /* binding */ GlobalStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{box-sizing:border-box;margin:0;padding:0;}html{font-size:10px;", "{font-size:9px;}", "{font-size:8px;}", "{font-size:6px;}", "{font-size:16px;}}body{font-family:'Open Sans',sans-serif;background-color:", ";}a,button{font-family:'Open Sans',sans-serif;font-size:", ";font-weight:600;cursor:pointer;}a{text-decoration:none;}h1{font-size:", ";font-weight:700;", "{font-size:", ";}}h2{font-size:", ";font-weight:400;}h3{font-size:", ";color:", ";font-weight:700;}h4{font-size:", ";font-weight:700;}h5{font-size:", ";font-weight:600;}h6{font-size:", ";}p{font-size:", ";font-weight:400;text-align:justify;line-height:1.6;}ul{text-decoration:none;}li{a{color:white;font-size:", ";&:visited{color:white;}}}span{font-size:", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.mq.mobileLarge;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.mq.mobileMedium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mq.mobileSmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mq.desktopTall;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.backgroundColor;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSize.body;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontSize.header;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.mq.tablet;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.fontSize.headerMobile;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.fontSize.subHeader;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.fontSize.navHeader;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.white;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.fontSize.captionLarge;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.fontSize.captionMedium;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.fontSize.captionSmall;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.fontSize.body;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.fontSize.body;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.fontSize.body;
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./assets/styles/theme.js":
/*!********************************!*\
  !*** ./assets/styles/theme.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    backgroundColor: '#E8EBF1',
    mainColor: '#0E274D',
    lighterMainColor: '#103369',
    accentColor: '#00BCEA',
    lighterAccentColor: '#00cdff'
  },
  fontSize: {
    header: '4.8rem',
    headerMobile: '4rem',
    navHeader: '3.6rem',
    navList: '1.8rem',
    subHeader: '2rem',
    subText: '1.8rem',
    captionLarge: '3rem',
    captionLargeMedium: '2.4rem',
    captionMedium: '1.3rem',
    captionSmall: '1.2rem',
    body: '1.6rem',
    bodySmall: '1.4rem'
  },
  padding: {
    xl: '18vw',
    x: '15vw',
    m: '10vw',
    xs: '8vw',
    s: '5vw',
    xxlV: '10rem',
    xlV: '8rem',
    xV: '7rem',
    mV: '5rem',
    xsV: '4rem',
    sV: '3rem',
    ssV: '2rem'
  },
  dimensions: {
    tilePadding: '4rem 3.5rem',
    tilePaddingMobile: '3rem 5vw',
    tileWidth: '65rem',
    pageSectionPadding: '4rem 5rem',
    pageSectionWidth: '100rem',
    richTextMarginTop: '4rem'
  },
  utils: {
    borderRadius: '6px',
    boxShadow: '0px 4px 14px  rgba(0, 0, 0, 0.1)'
  },
  mq: {
    heroInstructors: "@media (min-width: 1570px)",
    desktop: "@media (max-width: 1550px)",
    desktopTall: "@media (min-height: 1100px) and (min-width: 1000px) and (max-width: 1400px)",
    desktopWide: "@media (min-width: 1400px)",
    laptopLarge: "@media (max-width: 1450px)",
    laptop: "@media (max-width: 1224px)",
    tabletLarge: "@media (max-width: 1050px)",
    tablet: "@media (max-width: 850px)",
    mobileLarge: "@media (max-width: 568px)",
    mobileMedium: "@media (max-width: 450px)",
    mobileSmall: "@media (max-width: 350px)"
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function get() {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function get() {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "./node_modules/next/dist/shared/lib/utils.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils).loadGetInitialProps(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/_react["default"].createElement(Component, Object.assign({}, pageProps));
    }
  }]);

  return App;
}(_react["default"].Component);

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var propTypes_appTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! propTypes/appTypes */ "./propTypes/appTypes.js");
/* harmony import */ var providers_AppProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! providers/AppProvider */ "./providers/AppProvider.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var public_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/nprogress.css */ "./public/nprogress.css");
/* harmony import */ var public_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(public_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_styles_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/styles/theme */ "./assets/styles/theme.js");
/* harmony import */ var assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/styles/GlobalStyle */ "./assets/styles/GlobalStyle.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\_app.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var MyApp = function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var global = pageProps.global;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_15___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }, _this);
  }

  var favicon = global.favicon,
      _global$defaultSeo = global.defaultSeo,
      metaTitleSuffix = _global$defaultSeo.metaTitleSuffix,
      metaTitle = _global$defaultSeo.metaTitle,
      metaDescription = _global$defaultSeo.metaDescription,
      sharedImage = _global$defaultSeo.sharedImage;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_11__.getStrapiMedia)(favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 14
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_12__.DefaultSeo, {
      titleTemplate: "%s | ".concat(metaTitleSuffix),
      title: metaTitle,
      description: metaDescription,
      openGraph: _objectSpread({}, sharedImage && sharedImage.formats && {
        images: Object.values(sharedImage.formats).map(function (image) {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_11__.getStrapiMedia)(image),
            width: image.width,
            height: image.height
          };
        })
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_17__.ThemeProvider, {
      theme: assets_styles_theme__WEBPACK_IMPORTED_MODULE_13__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_14__.GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(providers_AppProvider__WEBPACK_IMPORTED_MODULE_5__.default, {
        router: router,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MyApp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = MyApp;
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  pageProps: propTypes_appTypes__WEBPACK_IMPORTED_MODULE_4__.pagePropsShape
};
MyApp.defaultProps = {
  pageProps: {
    global: {
      defaultSeo: {
        metaDescription: 'Akademia Cisco w Zespole Szkół Elektronicznych w Radomiu',
        metaTitle: 'Akademia Cisco',
        metaTitleSuffix: 'Zespół Szkół Elektronicznych'
      }
    }
  }
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(ctx) {
    var appProps, global;
    return C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_8___default().getInitialProps(ctx);

          case 2:
            appProps = _context.sent;
            _context.next = 5;
            return (0,utils_api__WEBPACK_IMPORTED_MODULE_10__.fetchAPI)('/global');

          case 5:
            global = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              pageProps: {
                global: global
              }
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./propTypes/appTypes.js":
/*!*******************************!*\
  !*** ./propTypes/appTypes.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagePropsShape": function() { return /* binding */ pagePropsShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var pagePropsShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  global: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    defaultSeo: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
      metaDescription: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
      metaTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
      metaTitleSuffix: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
      sharedImage: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
    }),
    favicon: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
  }),
  navigation: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  sections: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
  seo: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./providers/AppProvider.js":
/*!**********************************!*\
  !*** ./providers/AppProvider.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": function() { return /* binding */ AppContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\providers\\AppProvider.js",
    _this = undefined,
    _s = $RefreshSig$();




var AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isLoading: false,
  isNavOpen: false,
  setIsNavOpen: function setIsNavOpen() {}
});

var AppProvider = function AppProvider(_ref) {
  _s();

  var children = _ref.children,
      router = _ref.router;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isNavOpen = _useState2[0],
      setIsNavOpen = _useState2[1];

  if (router) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      var handleStart = function handleStart() {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().configure({
          parent: '#loader'
        });
        setIsLoading(true);
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      };

      var handleStop = function handleStop() {
        setIsLoading(false);
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleStop);
      router.events.on('routeChangeError', handleStop);
      return function () {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleStop);
        router.events.off('routeChangeError', handleStop);
      };
    }, [router]);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AppContext.Provider, {
    value: {
      isLoading: isLoading,
      isNavOpen: isNavOpen,
      setIsNavOpen: setIsNavOpen
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(AppProvider, "9s+MYfagXWImpusk4OzIe1Yx6KU=");

_c = AppProvider;
/* harmony default export */ __webpack_exports__["default"] = (AppProvider);

var _c;

$RefreshReg$(_c, "AppProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337').concat(path);
} // Helper to make GET requests to Strapi

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}

function _fetchAPI() {
  _fetchAPI = (0,C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(path) {
    var requestUrl, response, data;
    return C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            requestUrl = getStrapiURL(path);
            _context.next = 3;
            return fetch(requestUrl);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/media.js":
/*!************************!*\
  !*** ./utils/media.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./utils/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function getStrapiMedia(_ref) {
  var url = _ref.url;
  var imageUrl = url.startsWith('/') ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;
  return imageUrl;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/next-seo/lib/next-seo.module.js":
/*!******************************************************!*\
  !*** ./node_modules/next-seo/lib/next-seo.module.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleJsonLd": function() { return /* binding */ ArticleJsonLd; },
/* harmony export */   "BlogJsonLd": function() { return /* binding */ BlogJsonLd; },
/* harmony export */   "BreadcrumbJsonLd": function() { return /* binding */ BreadCrumbJsonLd; },
/* harmony export */   "CarouselJsonLd": function() { return /* binding */ CarouselJsonLd; },
/* harmony export */   "CollectionPageJsonLd": function() { return /* binding */ CollectionPageJsonLd; },
/* harmony export */   "CorporateContactJsonLd": function() { return /* binding */ CorporateContactJsonLd; },
/* harmony export */   "CourseJsonLd": function() { return /* binding */ CourseJsonLd; },
/* harmony export */   "DatasetJsonLd": function() { return /* binding */ DatasetJsonLd; },
/* harmony export */   "DefaultSeo": function() { return /* binding */ DefaultSeo; },
/* harmony export */   "EventJsonLd": function() { return /* binding */ EventJsonLd; },
/* harmony export */   "FAQPageJsonLd": function() { return /* binding */ FAQPageJsonLd; },
/* harmony export */   "JobPostingJsonLd": function() { return /* binding */ JobPostingJsonLd; },
/* harmony export */   "LocalBusinessJsonLd": function() { return /* binding */ LocalBusinessJsonLd; },
/* harmony export */   "LogoJsonLd": function() { return /* binding */ LogoJsonLd; },
/* harmony export */   "NewsArticleJsonLd": function() { return /* binding */ NewsArticleJsonLd; },
/* harmony export */   "NextSeo": function() { return /* binding */ NextSeo; },
/* harmony export */   "ProductJsonLd": function() { return /* binding */ ProductJsonLd; },
/* harmony export */   "ProfilePageJsonLd": function() { return /* binding */ ProfilePageJsonLd; },
/* harmony export */   "QAPageJsonld": function() { return /* binding */ QAPageJsonLd; },
/* harmony export */   "RecipeJsonLd": function() { return /* binding */ RecipeJsonLd; },
/* harmony export */   "SiteLinksSearchBoxJsonLd": function() { return /* binding */ SiteLinksSearchBoxJsonLd; },
/* harmony export */   "SocialProfileJsonLd": function() { return /* binding */ SocialProfileJsonLd; },
/* harmony export */   "SoftwareAppJsonLd": function() { return /* binding */ SoftwareAppJsonLd; },
/* harmony export */   "VideoGameJsonLd": function() { return /* binding */ VideoGameJsonLd; },
/* harmony export */   "VideoJsonLd": function() { return /* binding */ VideoJsonLd; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaults = {
  templateTitle: '',
  noindex: false,
  nofollow: false,
  defaultOpenGraphImageWidth: 0,
  defaultOpenGraphImageHeight: 0,
  defaultOpenGraphVideoWidth: 0,
  defaultOpenGraphVideoHeight: 0,
  disableGooglebot: false
};

var buildOpenGraphMediaTags = function buildOpenGraphMediaTags(mediaType, media, _temp) {
  if (media === void 0) {
    media = [];
  }

  var _ref = _temp === void 0 ? {} : _temp,
      defaultWidth = _ref.defaultWidth,
      defaultHeight = _ref.defaultHeight;

  return media.reduce(function (tags, medium, index) {
    tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "og:" + mediaType + ":0" + index,
      property: "og:" + mediaType,
      content: medium.url
    }));

    if (medium.alt) {
      tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:" + mediaType + ":alt0" + index,
        property: "og:" + mediaType + ":alt",
        content: medium.alt
      }));
    }

    if (medium.secureUrl) {
      tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:" + mediaType + ":secure_url0" + index,
        property: "og:" + mediaType + ":secure_url",
        content: medium.secureUrl.toString()
      }));
    }

    if (medium.type) {
      tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:" + mediaType + ":type0" + index,
        property: "og:" + mediaType + ":type",
        content: medium.type.toString()
      }));
    }

    if (medium.width) {
      tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:" + mediaType + ":width0" + index,
        property: "og:" + mediaType + ":width",
        content: medium.width.toString()
      }));
    } else if (defaultWidth) {
      tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:" + mediaType + ":width0" + index,
        property: "og:" + mediaType + ":width",
        content: defaultWidth.toString()
      }));
    }

    if (medium.height) {
      tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:" + mediaType + ":height" + index,
        property: "og:" + mediaType + ":height",
        content: medium.height.toString()
      }));
    } else if (defaultHeight) {
      tags.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:" + mediaType + ":height" + index,
        property: "og:" + mediaType + ":height",
        content: defaultHeight.toString()
      }));
    }

    return tags;
  }, []);
};

var buildTags = function buildTags(config) {
  var _config$openGraph, _config$openGraph3, _config$additionalLin;

  var tagsToRender = [];

  if (config.titleTemplate) {
    defaults.templateTitle = config.titleTemplate;
  }

  var updatedTitle = '';

  if (config.title) {
    updatedTitle = config.title;

    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }
  } else if (config.defaultTitle) {
    updatedTitle = config.defaultTitle;
  }

  if (updatedTitle) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", {
      key: "title"
    }, updatedTitle));
  }

  var noindex = config.noindex || defaults.noindex || config.dangerouslySetAllPagesToNoIndex;
  var nofollow = config.nofollow || defaults.nofollow || config.dangerouslySetAllPagesToNoFollow;
  var disableGooglebot = config.disableGooglebot || defaults.disableGooglebot || config.dangerouslyDisableGooglebot;
  var robotsParams = '';

  if (config.robotsProps) {
    var _config$robotsProps = config.robotsProps,
        nosnippet = _config$robotsProps.nosnippet,
        maxSnippet = _config$robotsProps.maxSnippet,
        maxImagePreview = _config$robotsProps.maxImagePreview,
        maxVideoPreview = _config$robotsProps.maxVideoPreview,
        noarchive = _config$robotsProps.noarchive,
        noimageindex = _config$robotsProps.noimageindex,
        notranslate = _config$robotsProps.notranslate,
        unavailableAfter = _config$robotsProps.unavailableAfter;
    robotsParams = "" + (nosnippet ? ',nosnippet' : '') + (maxSnippet ? ",max-snippet:" + maxSnippet : '') + (maxImagePreview ? ",max-image-preview:" + maxImagePreview : '') + (noarchive ? ',noarchive' : '') + (unavailableAfter ? ",unavailable_after:" + unavailableAfter : '') + (noimageindex ? ',noimageindex' : '') + (maxVideoPreview ? ",max-video-preview:" + maxVideoPreview : '') + (notranslate ? ',notranslate' : '');
  }

  if (config.dangerouslyDisableGooglebot) {
    defaults.disableGooglebot = true;
  }

  if (noindex || nofollow) {
    if (config.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }

    if (config.dangerouslySetAllPagesToNoFollow) {
      defaults.nofollow = true;
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow') + robotsParams
    }));

    if (!disableGooglebot) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "googlebot",
        name: "googlebot",
        content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow') + robotsParams
      }));
    }
  } else {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow" + robotsParams
    }));

    if (!disableGooglebot) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "googlebot",
        name: "googlebot",
        content: "index,follow" + robotsParams
      }));
    }
  }

  if (config.description) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "description",
      name: "description",
      content: config.description
    }));
  }

  if (config.mobileAlternate) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "alternate",
      key: "mobileAlternate",
      media: config.mobileAlternate.media,
      href: config.mobileAlternate.href
    }));
  }

  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach(function (languageAlternate) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "alternate",
        key: "languageAlternate-" + languageAlternate.hrefLang,
        hrefLang: languageAlternate.hrefLang,
        href: languageAlternate.href
      }));
    });
  }

  if (config.twitter) {
    if (config.twitter.cardType) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType
      }));
    }

    if (config.twitter.site) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site
      }));
    }

    if (config.twitter.handle) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle
      }));
    }
  }

  if (config.facebook) {
    if (config.facebook.appId) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "fb:app_id",
        property: "fb:app_id",
        content: config.facebook.appId
      }));
    }
  }

  if ((_config$openGraph = config.openGraph) != null && _config$openGraph.title || config.title) {
    var _config$openGraph2;

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "og:title",
      property: "og:title",
      content: ((_config$openGraph2 = config.openGraph) == null ? void 0 : _config$openGraph2.title) || updatedTitle
    }));
  }

  if ((_config$openGraph3 = config.openGraph) != null && _config$openGraph3.description || config.description) {
    var _config$openGraph4;

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "og:description",
      property: "og:description",
      content: ((_config$openGraph4 = config.openGraph) == null ? void 0 : _config$openGraph4.description) || config.description
    }));
  }

  if (config.openGraph) {
    if (config.openGraph.url || config.canonical) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url || config.canonical
      }));
    }

    if (config.openGraph.type) {
      var type = config.openGraph.type.toLowerCase();
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: type
      }));

      if (type === 'profile' && config.openGraph.profile) {
        if (config.openGraph.profile.firstName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:first_name",
            property: "profile:first_name",
            content: config.openGraph.profile.firstName
          }));
        }

        if (config.openGraph.profile.lastName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:last_name",
            property: "profile:last_name",
            content: config.openGraph.profile.lastName
          }));
        }

        if (config.openGraph.profile.username) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:username",
            property: "profile:username",
            content: config.openGraph.profile.username
          }));
        }

        if (config.openGraph.profile.gender) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:gender",
            property: "profile:gender",
            content: config.openGraph.profile.gender
          }));
        }
      } else if (type === 'book' && config.openGraph.book) {
        if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
          config.openGraph.book.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:author:0" + index,
              property: "book:author",
              content: author
            }));
          });
        }

        if (config.openGraph.book.isbn) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:isbn",
            property: "book:isbn",
            content: config.openGraph.book.isbn
          }));
        }

        if (config.openGraph.book.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:release_date",
            property: "book:release_date",
            content: config.openGraph.book.releaseDate
          }));
        }

        if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
          config.openGraph.book.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:tag:0" + index,
              property: "book:tag",
              content: tag
            }));
          });
        }
      } else if (type === 'article' && config.openGraph.article) {
        if (config.openGraph.article.publishedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:published_time",
            property: "article:published_time",
            content: config.openGraph.article.publishedTime
          }));
        }

        if (config.openGraph.article.modifiedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:modified_time",
            property: "article:modified_time",
            content: config.openGraph.article.modifiedTime
          }));
        }

        if (config.openGraph.article.expirationTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:expiration_time",
            property: "article:expiration_time",
            content: config.openGraph.article.expirationTime
          }));
        }

        if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
          config.openGraph.article.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:author:0" + index,
              property: "article:author",
              content: author
            }));
          });
        }

        if (config.openGraph.article.section) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:section",
            property: "article:section",
            content: config.openGraph.article.section
          }));
        }

        if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
          config.openGraph.article.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:tag:0" + index,
              property: "article:tag",
              content: tag
            }));
          });
        }
      } else if ((type === 'video.movie' || type === 'video.episode' || type === 'video.tv_show' || type === 'video.other') && config.openGraph.video) {
        if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
          config.openGraph.video.actors.forEach(function (actor, index) {
            if (actor.profile) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:0" + index,
                property: "video:actor",
                content: actor.profile
              }));
            }

            if (actor.role) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:role:0" + index,
                property: "video:actor:role",
                content: actor.role
              }));
            }
          });
        }

        if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
          config.openGraph.video.directors.forEach(function (director, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:director:0" + index,
              property: "video:director",
              content: director
            }));
          });
        }

        if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
          config.openGraph.video.writers.forEach(function (writer, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:writer:0" + index,
              property: "video:writer",
              content: writer
            }));
          });
        }

        if (config.openGraph.video.duration) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:duration",
            property: "video:duration",
            content: config.openGraph.video.duration.toString()
          }));
        }

        if (config.openGraph.video.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:release_date",
            property: "video:release_date",
            content: config.openGraph.video.releaseDate
          }));
        }

        if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
          config.openGraph.video.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:tag:0" + index,
              property: "video:tag",
              content: tag
            }));
          });
        }

        if (config.openGraph.video.series) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:series",
            property: "video:series",
            content: config.openGraph.video.series
          }));
        }
      }
    } // images


    if (config.defaultOpenGraphImageWidth) {
      defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
    }

    if (config.defaultOpenGraphImageHeight) {
      defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      tagsToRender.push.apply(tagsToRender, buildOpenGraphMediaTags('image', config.openGraph.images, {
        defaultWidth: defaults.defaultOpenGraphImageWidth,
        defaultHeight: defaults.defaultOpenGraphImageHeight
      }));
    } // videos


    if (config.defaultOpenGraphVideoWidth) {
      defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
    }

    if (config.defaultOpenGraphVideoHeight) {
      defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
    }

    if (config.openGraph.videos && config.openGraph.videos.length) {
      tagsToRender.push.apply(tagsToRender, buildOpenGraphMediaTags('video', config.openGraph.videos, {
        defaultWidth: defaults.defaultOpenGraphVideoWidth,
        defaultHeight: defaults.defaultOpenGraphVideoHeight
      }));
    }

    if (config.openGraph.locale) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale
      }));
    }

    if (config.openGraph.site_name) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:site_name",
        property: "og:site_name",
        content: config.openGraph.site_name
      }));
    }
  }

  if (config.canonical) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical"
    }));
  }

  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach(function (tag) {
      var _ref2, _ref3, _tag$keyOverride;

      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", _extends({
        key: "meta:" + ((_ref2 = (_ref3 = (_tag$keyOverride = tag.keyOverride) != null ? _tag$keyOverride : tag.name) != null ? _ref3 : tag.property) != null ? _ref2 : tag.httpEquiv)
      }, tag)));
    });
  }

  if ((_config$additionalLin = config.additionalLinkTags) != null && _config$additionalLin.length) {
    config.additionalLinkTags.forEach(function (tag) {
      var _tag$keyOverride2;

      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", _extends({
        key: "link" + ((_tag$keyOverride2 = tag.keyOverride) != null ? _tag$keyOverride2 : tag.href) + tag.rel
      }, tag)));
    });
  }

  return tagsToRender;
};

var DefaultSeo = /*#__PURE__*/function (_Component) {
  _inheritsLoose(DefaultSeo, _Component);

  function DefaultSeo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DefaultSeo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        titleTemplate = _this$props.titleTemplate,
        defaultTitle = _this$props.defaultTitle,
        _this$props$dangerous = _this$props.dangerouslyDisableGooglebot,
        dangerouslyDisableGooglebot = _this$props$dangerous === void 0 ? false : _this$props$dangerous,
        _this$props$dangerous2 = _this$props.dangerouslySetAllPagesToNoIndex,
        dangerouslySetAllPagesToNoIndex = _this$props$dangerous2 === void 0 ? false : _this$props$dangerous2,
        _this$props$dangerous3 = _this$props.dangerouslySetAllPagesToNoFollow,
        dangerouslySetAllPagesToNoFollow = _this$props$dangerous3 === void 0 ? false : _this$props$dangerous3,
        description = _this$props.description,
        canonical = _this$props.canonical,
        facebook = _this$props.facebook,
        openGraph = _this$props.openGraph,
        additionalMetaTags = _this$props.additionalMetaTags,
        twitter = _this$props.twitter,
        defaultOpenGraphImageWidth = _this$props.defaultOpenGraphImageWidth,
        defaultOpenGraphImageHeight = _this$props.defaultOpenGraphImageHeight,
        defaultOpenGraphVideoWidth = _this$props.defaultOpenGraphVideoWidth,
        defaultOpenGraphVideoHeight = _this$props.defaultOpenGraphVideoHeight,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates,
        additionalLinkTags = _this$props.additionalLinkTags;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      titleTemplate: titleTemplate,
      defaultTitle: defaultTitle,
      dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
      dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
      defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
      defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
      defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates,
      additionalLinkTags: additionalLinkTags,
      dangerouslyDisableGooglebot: dangerouslyDisableGooglebot
    }));
  };

  return DefaultSeo;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var NextSeo = /*#__PURE__*/function (_Component) {
  _inheritsLoose(NextSeo, _Component);

  function NextSeo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NextSeo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        _this$props$noindex = _this$props.noindex,
        noindex = _this$props$noindex === void 0 ? false : _this$props$noindex,
        nofollow = _this$props.nofollow,
        robotsProps = _this$props.robotsProps,
        description = _this$props.description,
        canonical = _this$props.canonical,
        openGraph = _this$props.openGraph,
        facebook = _this$props.facebook,
        twitter = _this$props.twitter,
        additionalMetaTags = _this$props.additionalMetaTags,
        titleTemplate = _this$props.titleTemplate,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates,
        additionalLinkTags = _this$props.additionalLinkTags,
        disableGooglebot = _this$props.disableGooglebot;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      noindex: noindex,
      nofollow: nofollow,
      robotsProps: robotsProps,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      titleTemplate: titleTemplate,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates,
      additionalLinkTags: additionalLinkTags,
      disableGooglebot: disableGooglebot
    }));
  };

  return NextSeo;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var markup = function markup(jsonld) {
  return {
    __html: jsonld
  };
};

var formatAuthorName = function formatAuthorName(authorName) {
  return Array.isArray(authorName) ? "[" + authorName.map(function (name) {
    return "{\"@type\": \"Person\",\"name\": \"" + name + "\"}";
  }) + "]" : "{\"@type\": \"Person\",\"name\": \"" + authorName + "\"}";
};

var ArticleJsonLd = function ArticleJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-article" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var BreadCrumbJsonLd = function BreadCrumbJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      _ref$itemListElements = _ref.itemListElements,
      itemListElements = _ref$itemListElements === void 0 ? [] : _ref$itemListElements;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      " + itemListElements.map(function (itemListElement) {
    return "{\n        \"@type\": \"ListItem\",\n        \"position\": " + itemListElement.position + ",\n        \"item\": {\n          \"@id\": \"" + itemListElement.item + "\",\n          \"name\": \"" + itemListElement.name + "\"\n        }\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-breadcrumb" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildQuestions = function buildQuestions(mainEntity) {
  return "\n  " + mainEntity.map(function (question) {
    return "{\n      \"@type\": \"Question\",\n      \"name\": \"" + question.questionName + "\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"" + question.acceptedAnswerText + "\"\n      }\n  }";
  });
};

var FAQPageJsonLd = function FAQPageJsonLd(_ref) {
  var _ref$mainEntity = _ref.mainEntity,
      mainEntity = _ref$mainEntity === void 0 ? [] : _ref$mainEntity;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [" + buildQuestions(mainEntity) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-faq-page"
  }));
};

var buildBaseSalary = function buildBaseSalary(baseSalary) {
  return "\n  \"baseSalary\": {\n    \"@type\": \"MonetaryAmount\",\n    " + (baseSalary.currency ? "\"currency\": \"" + baseSalary.currency + "\"," : '') + "\n    \"value\": {\n      " + (baseSalary.value ? Array.isArray(baseSalary.value) ? "\"minValue\": \"" + baseSalary.value[0] + "\", \"maxValue\": \"" + baseSalary.value[1] + "\"," : "\"value\": \"" + baseSalary.value + "\"," : '') + "\n      " + (baseSalary.unitText ? "\"unitText\": \"" + baseSalary.unitText + "\"," : '') + "\n      \"@type\": \"QuantitativeValue\"\n    }\n  },\n";
};

var JobPostingJsonLd = function JobPostingJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      baseSalary = _ref.baseSalary,
      datePosted = _ref.datePosted,
      description = _ref.description,
      employmentType = _ref.employmentType,
      hiringOrganization = _ref.hiringOrganization,
      jobLocation = _ref.jobLocation,
      applicantLocationRequirements = _ref.applicantLocationRequirements,
      jobLocationType = _ref.jobLocationType,
      title = _ref.title,
      validThrough = _ref.validThrough;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"JobPosting\",\n    " + (baseSalary ? buildBaseSalary(baseSalary) : '') + "\n    \"datePosted\": \"" + datePosted + "\",\n    \"description\": \"" + description + "\",\n    " + (employmentType ? "\"employmentType\": \"" + employmentType + "\"," : '') + "\n    \"hiringOrganization\" : {\n      \"@type\" : \"Organization\",\n      \"name\" : \"" + hiringOrganization.name + "\",\n      \"sameAs\" : \"" + hiringOrganization.sameAs + "\"\n      " + (hiringOrganization.logo ? ",\"logo\": \"" + hiringOrganization.logo + "\"" : '') + "\n    },\n    " + (jobLocation ? "\"jobLocation\": {\n      \"@type\": \"Place\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"" + jobLocation.addressLocality + "\",\n        \"addressRegion\": \"" + jobLocation.addressRegion + "\",\n        \"postalCode\" : \"" + jobLocation.postalCode + "\",\n        \"streetAddress\" : \"" + jobLocation.streetAddress + "\",\n        \"addressCountry\" : \"" + jobLocation.addressCountry + "\"\n          }\n      }," : '') + "\n    " + (applicantLocationRequirements ? " \"applicantLocationRequirements\": {\n        \"@type\": \"Country\",\n        \"name\": \"" + applicantLocationRequirements + "\"\n    }," : '') + "\n    " + (jobLocationType ? "\"jobLocationType\": \"" + jobLocationType + "\"," : '') + "\n    " + (validThrough ? "\"validThrough\": \"" + validThrough + "\"," : '') + "\n    \"title\": \"" + title + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-jobposting" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var BlogJsonLd = function BlogJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-blog" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var CourseJsonLd = function CourseJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"" + courseName + "\",\n    \"description\": \"" + description + "\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + providerName + "\"" + (providerUrl ? ",\n      \"sameAs\": \"" + providerUrl + "\"" : '') + "\n    }\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-course" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var DatasetJsonLd = function DatasetJsonLd(_ref) {
  var description = _ref.description,
      name = _ref.name,
      license = _ref.license;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Dataset\",\n    \"description\": \"" + description + "\",\n    \"name\": \"" + name + "\"" + (license ? ",\n        \"license\": \"" + license + "\"" : '') + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-dataset"
  }));
};

var formatIfArray = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildAddress = (function (address) {
  return "\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"" + address.streetAddress + "\",\n    \"addressLocality\": \"" + address.addressLocality + "\",\n    " + (address.addressRegion ? "\"addressRegion\": \"" + address.addressRegion + "\"," : '') + "\n    \"postalCode\": \"" + address.postalCode + "\",\n    \"addressCountry\": \"" + address.addressCountry + "\"\n  },\n";
});

var buildAction = function buildAction(action) {
  return "\n  \"" + action.actionName + "\": {\n    \"@type\": \"" + action.actionType + "\",\n    \"target\": \"" + action.target + "\"\n  }\n";
};

var buildAreaServed = function buildAreaServed(areaServed) {
  return "\n  \"areaServed\": [\n    " + areaServed.map(function (area) {
    return buildGeoCircle(area);
  }) + "\n  ]\n";
};

var buildAggregateRating = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n    \"ratingCount\": \"" + aggregateRating.ratingCount + "\"\n  },\n";
};

var buildGeo = function buildGeo(geo) {
  return "\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": \"" + geo.latitude + "\",\n    \"longitude\": \"" + geo.longitude + "\"\n  },\n";
};

var buildGeoCircle = function buildGeoCircle(geoCircle) {
  return "\n  {\n    \"@type\": \"GeoCircle\",\n    \"geoMidpoint\": {\n      \"@type\": \"GeoCoordinates\",\n      \"latitude\": \"" + geoCircle.geoMidpoint.latitude + "\",\n      \"longitude\": \"" + geoCircle.geoMidpoint.longitude + "\"\n    },\n    \"geoRadius\": \"" + geoCircle.geoRadius + "\"\n  }\n";
};

var buildMakesOffer = function buildMakesOffer(makesOffer) {
  return "\n  \"makesOffer\":[\n    " + makesOffer.map(function (offer) {
    return buildOffer(offer);
  }) + "\n  ]\n";
};

var buildOffer = function buildOffer(offer) {
  return "\n  {\n    \"@type\": \"Offer\",\n    " + buildPriceSpecification(offer.priceSpecification) + ",\n    " + buildItemOffered(offer.itemOffered) + "\n  }\n";
};

var buildOpeningHours = function buildOpeningHours(openingHours) {
  return "\n  {\n    \"@type\": \"OpeningHoursSpecification\",\n    " + (openingHours.dayOfWeek ? "\"dayOfWeek\": " + formatIfArray(openingHours.dayOfWeek) + "," : '') + "\n    \"opens\": \"" + openingHours.opens + "\",\n    " + (openingHours.validFrom ? "\"validFrom\": \"" + openingHours.validFrom + "\"," : '') + "\n    " + (openingHours.validThrough ? "\"validThrough\": \"" + openingHours.validThrough + "\"," : '') + "\n    \"closes\": \"" + openingHours.closes + "\"\n  }\n";
};

var buildPriceSpecification = function buildPriceSpecification(priceSpecification) {
  return "\n  \"priceSpecification\": {\n    \"@type\": \"" + priceSpecification.type + "\",\n    \"priceCurrency\": \"" + priceSpecification.priceCurrency + "\",\n    \"price\": \"" + priceSpecification.price + "\"\n  }\n";
};

var buildRating = function buildRating(rating) {
  return "\n  {\n    \"@type\": \"Rating\",\n    " + (rating.bestRating ? "\"bestRating\": \"" + rating.bestRating + "\"," : '') + "\n    " + (rating.reviewAspect ? "\"reviewAspect\": \"" + rating.reviewAspect + "\"," : '') + "\n    " + (rating.worstRating ? "\"worstRating\": \"" + rating.worstRating + "\"," : '') + "\n    \"ratingValue\": \"" + rating.ratingValue + "\"\n  }\n";
};

var buildReview = function buildReview(reviews) {
  return "\n  \"review\": [\n    " + reviews.map(function (review) {
    return "\n      {\n        \"@type\": \"Review\",\n        \"author\": \"" + review.author + "\",\n        \"datePublished\": \"" + review.datePublished + "\",\n        " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n        \"reviewBody\": \"" + review.reviewBody + "\",\n        \"reviewRating\": " + buildRating(review.reviewRating) + "\n      }\n    ";
  }) + "\n  ],\n";
};

var buildItemOffered = function buildItemOffered(service) {
  return "\n  \"itemOffered\": {\n    \"@type\": \"Service\",\n    \"name\": \"" + service.name + "\",\n    \"description\": \"" + service.description + "\"\n  }\n";
};

var LocalBusinessJsonLd = function LocalBusinessJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      description = _ref.description,
      url = _ref.url,
      telephone = _ref.telephone,
      address = _ref.address,
      geo = _ref.geo,
      images = _ref.images,
      rating = _ref.rating,
      review = _ref.review,
      priceRange = _ref.priceRange,
      servesCuisine = _ref.servesCuisine,
      sameAs = _ref.sameAs,
      openingHours = _ref.openingHours,
      action = _ref.action,
      areaServed = _ref.areaServed,
      makesOffer = _ref.makesOffer;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"" + type + "\",\n    " + (id ? "\"@id\": \"" + id + "\"," : '') + "\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (url ? "\"url\": \"" + url + "\"," : '') + "\n    " + (telephone ? "\"telephone\": \"" + telephone + "\"," : '') + "\n    " + buildAddress(address) + "\n    " + (geo ? "" + buildGeo(geo) : '') + "\n    " + (rating ? "" + buildAggregateRating(rating) : '') + "\n    " + (review ? "" + buildReview(review) : '') + "\n    " + (action ? buildAction(action) + "," : '') + "\n    " + (areaServed ? buildAreaServed(areaServed) + "," : '') + "\n    " + (makesOffer ? buildMakesOffer(makesOffer) + "," : '') + "\n    " + (priceRange ? "\"priceRange\": \"" + priceRange + "\"," : '') + "\n    " + (servesCuisine ? "\"servesCuisine\":" + formatIfArray(servesCuisine) + "," : '') + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : '') + "\n    " + (sameAs ? "\"sameAs\": [" + sameAs.map(function (url) {
    return "\"" + url + "\"";
  }) + "]," : '') + "\n    " + (openingHours ? "\"openingHoursSpecification\": " + (Array.isArray(openingHours) ? "[" + openingHours.map(function (hours) {
    return "" + buildOpeningHours(hours);
  }) + "]" : buildOpeningHours(openingHours)) + "," : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-local-business" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var LogoJsonLd = function LogoJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    \"logo\": \"" + logo + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-logo" + (keyOverride ? "-" + keyOverride : '')
  }));
};

// TODO: Docs for offers itemCondition & availability
// TODO: Seller type, make dynamic
var buildOffers = function buildOffers(offers) {
  return "\n  {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"" + offers.priceCurrency + "\",\n    " + (offers.priceValidUntil ? "\"priceValidUntil\": \"" + offers.priceValidUntil + "\"," : '') + "\n    " + (offers.itemCondition ? "\"itemCondition\": \"" + offers.itemCondition + "\"," : '') + "\n    " + (offers.availability ? "\"availability\": \"" + offers.availability + "\"," : '') + "\n    " + (offers.url ? "\"url\": \"" + offers.url + "\"," : '') + "\n    " + (offers.seller ? "\n      \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + offers.seller.name + "\"\n    },\n    " : '') + "\n    \"price\": \"" + offers.price + "\"\n  }\n";
};

var buildAggregateOffer = function buildAggregateOffer(offer) {
  return "\n  {\n    \"@type\": \"AggregateOffer\",\n    \"priceCurrency\": \"" + offer.priceCurrency + "\",\n    " + (offer.highPrice ? "\"highPrice\": \"" + offer.highPrice + "\"," : '') + "\n    " + (offer.offerCount ? "\"offerCount\": \"" + offer.offerCount + "\"," : '') + "\n    " + (offer.offers ? "\"offers\": " + (Array.isArray(offer.offers) ? "[" + offer.offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offer.offers)) + "," : '') + "\n    \"lowPrice\": \"" + offer.lowPrice + "\"\n  }\n";
};

var buildAggregateRating$1 = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      " + (aggregateRating.ratingCount ? "\"ratingCount\": \"" + aggregateRating.ratingCount + "\"," : '') + "\n      " + (aggregateRating.reviewCount ? "\"reviewCount\": \"" + aggregateRating.reviewCount + "\"," : '') + "\n      " + (aggregateRating.bestRating ? "\"bestRating\": \"" + aggregateRating.bestRating + "\"," : '') + "\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\"\n    },\n";
};

var buildReviewRating = function buildReviewRating(rating) {
  return rating ? "\"reviewRating\": {\n          \"@type\": \"Rating\",\n          " + (rating.bestRating ? "\"bestRating\": \"" + rating.bestRating + "\"," : '') + "\n          " + (rating.worstRating ? "\"worstRating\": \"" + rating.worstRating + "\"," : '') + "\n          \"ratingValue\": \"" + rating.ratingValue + "\"\n        }" : '';
};
var buildAuthor = function buildAuthor(author) {
  return "\n  \"author\": {\n      \"@type\": \"" + author.type + "\",\n      \"name\": \"" + author.name + "\"\n  },\n";
};
var buildPublisher = function buildPublisher(publisher) {
  return "\n  \"publisher\": {\n      \"@type\": \"" + publisher.type + "\",\n      \"name\": \"" + publisher.name + "\"\n  },\n";
};
var buildReviews = function buildReviews(reviews) {
  return "\n  \"review\": [\n    " + reviews.map(function (review) {
    return "{\n        \"@type\": \"Review\",\n        " + (review.author ? buildAuthor(review.author) : '') + "\n        " + (review.publisher ? buildPublisher(review.publisher) : '') + "\n        " + (review.datePublished ? "\"datePublished\": \"" + review.datePublished + "\"," : '') + "\n        " + (review.reviewBody ? "\"reviewBody\": \"" + review.reviewBody + "\"," : '') + "\n        " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n        " + buildReviewRating(review.reviewRating) + "\n    }";
  }) + "\n  ],\n";
};

var buildBrand = function buildBrand(brand) {
  return "\n  \"brand\": {\n      \"@type\": \"Thing\",\n      \"name\": \"" + brand + "\"\n    },\n";
};

var ProductJsonLd = function ProductJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      productName = _ref.productName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      description = _ref.description,
      sku = _ref.sku,
      gtin8 = _ref.gtin8,
      gtin13 = _ref.gtin13,
      gtin14 = _ref.gtin14,
      mpn = _ref.mpn,
      brand = _ref.brand,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews,
      aggregateRating = _ref.aggregateRating,
      offers = _ref.offers,
      aggregateOffer = _ref.aggregateOffer,
      color = _ref.color,
      manufacturerName = _ref.manufacturerName,
      manufacturerLogo = _ref.manufacturerLogo,
      material = _ref.material,
      slogan = _ref.slogan,
      disambiguatingDescription = _ref.disambiguatingDescription,
      productionDate = _ref.productionDate,
      releaseDate = _ref.releaseDate,
      purchaseDate = _ref.purchaseDate,
      award = _ref.award;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"Product\",\n    " + (images.length ? "\"image\":" + formatIfArray(images) + "," : '') + "\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (mpn ? "\"mpn\": \"" + mpn + "\"," : '') + "\n    " + (sku ? "\"sku\": \"" + sku + "\"," : '') + "\n    " + (gtin8 ? "\"gtin8\": \"" + gtin8 + "\"," : '') + "\n    " + (gtin13 ? "\"gtin13\": \"" + gtin13 + "\"," : '') + "\n    " + (gtin14 ? "\"gtin14\": \"" + gtin14 + "\"," : '') + "\n    " + (brand ? buildBrand(brand) : '') + "\n    " + (reviews.length ? buildReviews(reviews) : '') + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (color ? "\"color\": \"" + color + "\"," : '') + "\n    " + (material ? "\"material\": \"" + material + "\"," : '') + "\n    " + (slogan ? "\"slogan\": \"" + slogan + "\"," : '') + "\n    " + (disambiguatingDescription ? "\"disambiguatingDescription\": \"" + disambiguatingDescription + "\"," : '') + "\n    " + (productionDate ? "\"productionDate\": \"" + productionDate + "\"," : '') + "\n    " + (releaseDate ? "\"releaseDate\": \"" + releaseDate + "\"," : '') + "\n    " + (purchaseDate ? "\"purchaseDate\": \"" + purchaseDate + "\"," : '') + "\n    " + (award ? "\"award\": \"" + award + "\"," : '') + "\n    " + (manufacturerName ? "\n        \"manufacturer\": {\n          \"@type\": \"Organization\",\n          " + (manufacturerLogo ? "\n              \"logo\": {\n                \"@type\": \"ImageObject\",\n                \"url\": \"" + manufacturerLogo + "\"\n              },\n              " : '') + "\n          \"name\": \"" + manufacturerName + "\"\n        },\n        " : '') + "\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) + "," : '') + "\n    " + (aggregateOffer && !offers ? "\"offers\": " + buildAggregateOffer(aggregateOffer) + "," : '') + "\n    \"name\": \"" + productName + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-product" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var SocialProfileJsonLd = function SocialProfileJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      type = _ref.type,
      name = _ref.name,
      url = _ref.url,
      _ref$sameAs = _ref.sameAs,
      sameAs = _ref$sameAs === void 0 ? [] : _ref$sameAs;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"" + type + "\",\n    \"name\": \"" + name + "\",\n    \"url\": \"" + url + "\",\n    \"sameAs\": [\n      " + sameAs.map(function (socialUrl) {
    return "\"" + socialUrl + "\"";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-social" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var formatIfArray$1 = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildContactPoint = function buildContactPoint(contactPoint) {
  return contactPoint.map(function (contact) {
    return "{\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"" + contact.telephone + "\",\n    \"contactType\": \"" + contact.contactType + "\"" + (contact.areaServed ? ",\n    \"areaServed\": " + formatIfArray$1(contact.areaServed) : '') + (contact.availableLanguage ? ",\n    \"availableLanguage\": " + formatIfArray$1(contact.availableLanguage) : '') + (contact.contactOption ? ",\n    \"contactOption\": \"" + contact.contactOption + "\"" : '') + "\n    }";
  });
};

var CorporateContactJsonLd = function CorporateContactJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo,
      contactPoint = _ref.contactPoint;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    " + (logo ? "\"logo\": \"" + logo + "\"," : '') + "\n    \"contactPoint\": [" + buildContactPoint(contactPoint) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-corporate-contact" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var NewsArticleJsonLd = function NewsArticleJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      section = _ref.section,
      keywords = _ref.keywords,
      datePublished = _ref.datePublished,
      _ref$dateCreated = _ref.dateCreated,
      dateCreated = _ref$dateCreated === void 0 ? null : _ref$dateCreated,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      body = _ref.body,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"NewsArticle\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"articleSection\":\"" + section + "\",\n    \"keywords\": \"" + keywords + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateCreated\": \"" + (dateCreated || datePublished) + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\",\n    \"articleBody\": \"" + body + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-newsarticle" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildLocation = function buildLocation(location) {
  return "\n  \"location\": {\n    \"@type\": \"Place\",\n    " + buildAddress(location.address) + "\n    " + (location.sameAs ? "\"sameAs\": \"" + location.sameAs + "\"," : "") + "\n    \"name\": \"" + location.name + "\"\n  },\n";
};

var buildPerformer = function buildPerformer(performer) {
  return "\n  {\n    \"@type\": \"PerformingGroup\",\n    \"name\": \"" + performer.name + "\"\n  }\n";
};

var EventJsonLd = function EventJsonLd(_ref) {
  var name = _ref.name,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      location = _ref.location,
      url = _ref.url,
      description = _ref.description,
      images = _ref.images,
      offers = _ref.offers,
      aggregateOffer = _ref.aggregateOffer,
      performers = _ref.performers;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Event\",\n    \"startDate\": \"" + startDate + "\",\n    \"endDate\": \"" + endDate + "\",\n    " + buildLocation(location) + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : "") + "\n    " + (url ? "\"url\": \"" + url + "\"," : "") + "\n    " + (description ? "\"description\": \"" + description + "\"," : "") + "\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) + "," : '') + "\n    " + (aggregateOffer && !offers ? "\"offers\": " + buildAggregateOffer(aggregateOffer) + "," : '') + "\n    " + (performers ? "\"performer\": " + (Array.isArray(performers) ? "[" + performers.map(function (performer) {
    return "" + buildPerformer(performer);
  }) + "]" : buildPerformer(performers)) + "," : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-event"
  }));
};

var buildVideo = (function (video, context) {
  if (context === void 0) {
    context = false;
  }

  return "{\n      " + (context ? "\"@context\": \"https://schema.org\"," : "") + "\n      \"@type\": \"VideoObject\",\n      \"name\": \"" + video.name + "\",\n      \"description\": \"" + video.description + "\",\n      \"thumbnailUrl\": [\n          " + video.thumbnailUrls.map(function (thumbnailUrl) {
    return "\"" + thumbnailUrl + "\"";
  }).join(',') + "\n        ],\n        " + (video.contentUrl ? "\"contentUrl\": \"" + video.contentUrl + "\"," : "") + "\n        " + (video.duration ? "\"duration\": \"" + video.duration + "\"," : "") + "\n        " + (video.embedUrl ? "\"embedUrl\": \"" + video.embedUrl + "\"," : "") + "\n        " + (video.expires ? "\"expires\": \"" + video.expires + "\"," : "") + "        \n        " + (video.hasPart ? "\"hasPart\": " + (Array.isArray(video.hasPart) ? "[" + video.hasPart.map(function (clip) {
    return "" + buildClip(clip);
  }).join(',') + "]" : buildClip(video.hasPart)) + "," : '') + "\n        " + (video.watchCount ? "" + buildInteractionStatistic(video.watchCount) : "") + "        \n        " + (video.publication ? "\"publication\": " + (Array.isArray(video.publication) ? "[" + video.publication.map(function (broadcastEvent) {
    return "" + buildBroadcastEvent(broadcastEvent);
  }).join(',') + "]" : buildBroadcastEvent(video.publication)) + "," : '') + "\n        " + (video.regionsAllowed ? "\"regionsAllowed\": " + formatIfArray(video.regionsAllowed) + "," : '') + "\n        \"uploadDate\": \"" + video.uploadDate + "\"\n  }";
});

var buildClip = function buildClip(clip) {
  return "\n  \"geo\": {\n    \"@type\": \"Clip\",\n    \"name\": \"" + clip.name + "\",\n    \"startOffset\": " + clip.startOffset + ",\n    \"url\": \"" + clip.url + "\"\n  }\n";
};

var buildInteractionStatistic = function buildInteractionStatistic(watchCount) {
  return "\n  \"interactionStatistic\": {\n    \"@type\": \"InteractionCounter\",\n    \"interactionType\": { \"@type\": \"https://schema.org/WatchAction\" },\n    \"userInteractionCount\": " + watchCount + "\n  },\n";
};

var buildBroadcastEvent = function buildBroadcastEvent(publication) {
  return "\n  \"publication\": {\n    \"@type\": \"BroadcastEvent\",\n    \"name\": \"" + publication.name + "\",\n    \"isLiveBroadcast\": " + publication.isLiveBroadcast + ",\n    \"startDate\": \"" + publication.startDate + "\",\n    \"endDate\": \"" + publication.endDate + "\"\n  }\n";
};

var VideoJsonLd = function VideoJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      name = _ref.name,
      description = _ref.description,
      thumbnailUrls = _ref.thumbnailUrls,
      uploadDate = _ref.uploadDate,
      contentUrl = _ref.contentUrl,
      duration = _ref.duration,
      embedUrl = _ref.embedUrl,
      expires = _ref.expires,
      hasPart = _ref.hasPart,
      watchCount = _ref.watchCount,
      publication = _ref.publication,
      regionsAllowed = _ref.regionsAllowed;
  var jslonld = buildVideo({
    name: name,
    description: description,
    thumbnailUrls: thumbnailUrls,
    uploadDate: uploadDate,
    contentUrl: contentUrl,
    duration: duration,
    embedUrl: embedUrl,
    expires: expires,
    hasPart: hasPart,
    watchCount: watchCount,
    publication: publication,
    regionsAllowed: regionsAllowed
  }, true);
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-video" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildQuestions$1 = function buildQuestions(mainEntity) {
  return "{\n        \"@type\": \"Question\",\n        \"name\": \"" + mainEntity.name + "\",\n        " + (mainEntity.text ? "\"text\": \"" + mainEntity.text + "\"," : '') + "\n        \"answerCount\": " + mainEntity.answerCount + ",\n        " + (mainEntity.upvotedCount ? "\"upvoteCount\": " + mainEntity.upvotedCount + "," : '') + "\n        " + (mainEntity.dateCreated ? "\"dateCreated\": \"" + mainEntity.dateCreated + "\"," : '') + "\n        " + (mainEntity.author ? "\"author\": {\n          \"@type\": \"Person\",\n          \"name\": \"" + mainEntity.author.name + "\"\n        }," : '') + "\n        " + (mainEntity.acceptedAnswer ? "\"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"" + mainEntity.acceptedAnswer.text + "\",\n          " + (mainEntity.acceptedAnswer.dateCreated ? "\"dateCreated\": \"" + mainEntity.acceptedAnswer.dateCreated + "\"," : '') + "\n          " + (mainEntity.acceptedAnswer.upvotedCount ? "\"upvoteCount\": " + mainEntity.acceptedAnswer.upvotedCount + "," : '') + "\n          " + (mainEntity.acceptedAnswer.url ? "\"url\": \"" + mainEntity.acceptedAnswer.url + "\"," : '') + "\n          " + (mainEntity.acceptedAnswer.author ? "\"author\": {\n            \"@type\": \"Person\",\n            \"name\": \"" + mainEntity.acceptedAnswer.author.name + "\"\n          }" : '') + "\n        }," : '') + "\n        " + (mainEntity.suggestedAnswer ? "\"suggestedAnswer\": [" + mainEntity.suggestedAnswer.map(function (suggested) {
    return "{\n            \"@type\": \"Answer\",\n            \"text\": \"" + suggested.text + "\",\n            " + (suggested.dateCreated ? "\"dateCreated\": \"" + suggested.dateCreated + "\"," : '') + "\n            " + (suggested.upvotedCount ? "\"upvoteCount\": " + suggested.upvotedCount + "," : "\"upvoteCount\": " + 0 + ",") + "\n            " + (suggested.url ? "\"url\": \"" + suggested.url + "\"," : '') + "\n              " + (suggested.author ? "\"author\": {\n                        \"@type\": \"Person\",\n                        \"name\": \"" + suggested.author.name + "\"\n                    }" : '') + "\n        }";
  }) + "\n    ]" : '') + "\n}";
};

var QAPageJsonLd = function QAPageJsonLd(_ref) {
  var mainEntity = _ref.mainEntity,
      keyOverride = _ref.keyOverride;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"QAPage\",\n    \"mainEntity\": " + buildQuestions$1(mainEntity) + "\n    }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-qa" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildInstruction = function buildInstruction(instruction) {
  return "{\n  \"@type\": \"HowToStep\",\n  " + (instruction.name ? "\"name\": \"" + instruction.name + "\"," : '') + "\n  " + (instruction.image ? "\"image\": \"" + instruction.image + "\"," : '') + "\n  " + (instruction.url ? "\"url\": \"" + instruction.url + "\"," : '') + "\n  \"text\": \"" + instruction.text + "\"\n}";
};

var RecipeJsonLd = function RecipeJsonLd(_ref) {
  var name = _ref.name,
      description = _ref.description,
      authorName = _ref.authorName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      prepTime = _ref.prepTime,
      cookTime = _ref.cookTime,
      totalTime = _ref.totalTime,
      keywords = _ref.keywords,
      yields = _ref.yields,
      category = _ref.category,
      cuisine = _ref.cuisine,
      calories = _ref.calories,
      ingredients = _ref.ingredients,
      instructions = _ref.instructions,
      aggregateRating = _ref.aggregateRating,
      video = _ref.video;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"Recipe\",\n    \"name\": \"" + name + "\",\n    \"description\": \"" + description + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }).join(',') + "\n    ],\n    " + (prepTime ? "\"prepTime\": \"" + prepTime + "\"," : "") + "\n    " + (cookTime ? "\"cookTime\": \"" + cookTime + "\"," : "") + "\n    " + (totalTime ? "\"totalTime\": \"" + totalTime + "\"," : "") + "\n    " + (keywords ? "\"keywords\": \"" + keywords + "\"," : "") + "\n    " + (yields ? "\"recipeYield\": \"" + yields + "\"," : "") + "\n    " + (category ? "\"recipeCategory\": \"" + category + "\"," : "") + "\n    " + (cuisine ? "\"recipeCuisine\": \"" + cuisine + "\"," : "") + "\n    " + (calories ? "\"nutrition\": { \"@type\": \"NutritionInformation\", \"calories\": \"" + calories + " calories\" }," : "") + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (video ? "\"video\": " + buildVideo(video) + "," : '') + "\n    \"recipeIngredient\": [\n      " + ingredients.map(function (ingredient) {
    return "\"" + ingredient + "\"";
  }).join(',') + "\n    ],\n    \"recipeInstructions\": [\n      " + instructions.map(buildInstruction).join(',') + "\n    ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-recipe"
  }));
};

var VideoGameJsonLd = function VideoGameJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      name = _ref.name,
      url = _ref.url,
      image = _ref.image,
      description = _ref.description,
      languageName = _ref.languageName,
      translatorName = _ref.translatorName,
      authorName = _ref.authorName,
      aggregateRating = _ref.aggregateRating,
      applicationCategory = _ref.applicationCategory,
      platformName = _ref.platformName,
      operatingSystemName = _ref.operatingSystemName,
      datePublished = _ref.datePublished,
      keywords = _ref.keywords,
      producerName = _ref.producerName,
      producerUrl = _ref.producerUrl,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl,
      publisherName = _ref.publisherName,
      offers = _ref.offers,
      genreName = _ref.genreName,
      playMode = _ref.playMode,
      processorRequirements = _ref.processorRequirements,
      memoryRequirements = _ref.memoryRequirements,
      storageRequirements = _ref.storageRequirements,
      trailer = _ref.trailer,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"VideoGame\",\n    \"name\": \"" + name + "\",\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (datePublished ? "\"datePublished\": \"" + datePublished + "\"," : '') + "\n    " + (url ? "\"url\": \"" + url + "\"," : '') + "\n    " + (trailer ? "\"trailer\": " + buildVideo(trailer) + "," : '') + "\n    " + (reviews.length ? buildReviews(reviews) : '') + "\n    " + (keywords ? "\"keywords\": \"" + keywords + "\"," : '') + "\n    " + (processorRequirements ? "\"processorRequirements\": \"" + processorRequirements + "\"," : '') + "\n    " + (memoryRequirements ? "\"memoryRequirements\": \"" + memoryRequirements + "\"," : '') + "\n    " + (storageRequirements ? "\"storageRequirements\": \"" + storageRequirements + "\"," : '') + "\n    " + (playMode ? "\"playMode\": \"" + playMode + "\"," : '') + "\n    " + (applicationCategory ? "\"applicationCategory\": \"" + applicationCategory + "\"," : '') + "\n    " + (operatingSystemName ? "\"operatingSystem\": " + (Array.isArray(operatingSystemName) ? formatIfArray(operatingSystemName) : "\"" + operatingSystemName + "\"") + "," : '') + "\n    " + (platformName ? "\"gamePlatform\": " + (Array.isArray(platformName) ? formatIfArray(platformName) : "\"" + platformName + "\"") + "," : '') + "\n    " + (translatorName ? "\"translator\": " + (Array.isArray(translatorName) ? formatIfArray(translatorName) : "\"" + translatorName + "\"") + "," : '') + "\n    " + (languageName ? "\"inLanguage\": " + (Array.isArray(languageName) ? formatIfArray(languageName) : "\"" + languageName + "\"") + "," : '') + "\n    " + (genreName ? "\"genre\": " + (Array.isArray(genreName) ? formatIfArray(genreName) : "\"" + genreName + "\"") + "," : '') + "\n    " + (publisherName ? "\"publisher\": " + (Array.isArray(publisherName) ? formatIfArray(publisherName) : "\"" + publisherName + "\"") + "," : '') + "\n    " + (image ? "\n        \"image\": {\n          \"@type\": \"ImageObject\",\n          \"url\": \"" + image + "\"\n        },\n        " : '') + "\n    " + (authorName ? "\n        \"author\": {\n          \"@type\": \"Organization\",\n          \"name\": \"" + authorName + "\"\n        },\n        " : '') + "\n    " + (providerName ? "\n        \"provider\": {\n          \"@type\": \"Organization\",\n          " + (providerUrl ? "\"sameAs\": \"" + providerUrl + "\"," : '') + "\n          \"name\": \"" + providerName + "\"\n        },\n        " : '') + "\n    " + (producerName ? "\n        \"producer\": {\n          \"@type\": \"Organization\",\n          " + (producerUrl ? "\"sameAs\": \"" + producerUrl + "\"," : '') + "\n          \"name\": \"" + producerName + "\"\n        },\n        " : '') + "\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) : '') + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-video-game" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var CarouselJsonLd = function CarouselJsonLd(_ref) {
  var type = _ref.type,
      data = _ref.data;
  var itemListElement = [];

  switch (type) {
    case 'default':
      itemListElement = data.map(function (item, index) {
        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"url\": \"" + item.url + "\"\n      }";
      });
      break;

    case 'course':
      itemListElement = data.map(function (item, index) {
        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"item\": {\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"Course\",\n          \"url\": \"" + item.url + "\",\n          \"name\": \"" + item.courseName + "\",\n          \"description\": \"" + item.description + "\",\n          \"provider\": {\n            \"@type\": \"Organization\",\n            \"name\": \"" + item.providerName + "\"" + (item.providerUrl ? ",\n                \"sameAs\": \"" + item.providerUrl + "\"" : '') + "\n          }\n      }\n    }";
      });
      break;

    case 'movie':
      itemListElement = data.map(function (item, index) {
        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"item\": {\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"Movie\",\n          \"name\": \"" + item.name + "\",\n          \"url\": \"" + item.url + "\",\n          \"image\": \"" + item.image + "\",\n          " + (item.dateCreated ? "\"dateCreated\": \"" + item.dateCreated + "\"," : "") + "\n          " + (item.director ? "\"director\": " + (Array.isArray(item.director) ? "[" + item.director.map(function (director) {
          return "{\n                          \"@type\": \"Person\",\n                          \"name\": \"" + director.name + "\"\n                        }";
        }).join(',') + "]" : "{\n                      \"@type\": \"Person\",\n                      \"name\": \"" + item.director.name + "\"\n                    }") : '') + "\n          " + (item.review ? ",\n              \"review\": {\n                \"@type\": \"Review\",\n                " + (item.review.author ? buildAuthor(item.review.author) : '') + "\n                " + (item.review.publisher ? buildPublisher(item.review.publisher) : '') + "\n                " + (item.review.datePublished ? "\"datePublished\": \"" + item.review.datePublished + "\"," : '') + "\n                " + (item.review.reviewBody ? "\"reviewBody\": \"" + item.review.reviewBody + "\"," : '') + "\n                " + (item.review.name ? "\"name\": \"" + item.review.name + "\"," : '') + "\n                " + buildReviewRating(item.review.reviewRating) + "\n            }" : '') + "\n        }\n      }";
      });
      break;

    case 'recipe':
      itemListElement = data.map(function (item, index) {
        var _item$images;

        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"item\": {\n          \"@context\": \"https://schema.org/\",\n          \"@type\": \"Recipe\",\n          \"name\": \"" + item.name + "\",\n          \"url\" : \"" + item.url + "\",\n          \"description\": \"" + item.description + "\",\n          \"datePublished\": \"" + item.datePublished + "\",\n          \"author\": {\n            \"@type\": \"Person\",\n            \"name\": \"" + item.authorName + "\"\n          },\n          \"image\": [\n            " + ((_item$images = item.images) == null ? void 0 : _item$images.map(function (image) {
          return "\"" + image + "\"";
        }).join(',')) + "\n          ],\n          " + (item.prepTime ? "\"prepTime\": \"" + item.prepTime + "\"," : "") + "\n          " + (item.cookTime ? "\"cookTime\": \"" + item.cookTime + "\"," : "") + "\n          " + (item.totalTime ? "\"totalTime\": \"" + item.totalTime + "\"," : "") + "\n          " + (item.keywords ? "\"keywords\": \"" + item.keywords + "\"," : "") + "\n          " + (item.yields ? "\"recipeYield\": \"" + item.yields + "\"," : "") + "\n          " + (item.category ? "\"recipeCategory\": \"" + item.category + "\"," : "") + "\n          " + (item.cuisine ? "\"recipeCuisine\": \"" + item.cuisine + "\"," : "") + "\n          " + (item.calories ? "\"nutrition\": { \"@type\": \"NutritionInformation\", \"calories\": \"" + item.calories + " calories\" }," : "") + "\n          " + (item.aggregateRating ? buildAggregateRating$1(item.aggregateRating) : '') + "\n          " + (item.video ? "\"video\": " + buildVideo(item.video) + "," : '') + "\n          \"recipeIngredient\": [\n            " + item.ingredients.map(function (ingredient) {
          return "\"" + ingredient + "\"";
        }).join(',') + "\n          ],\n          \"recipeInstructions\": [\n            " + item.instructions.map(buildInstruction).join(',') + "\n          ]\n      }\n      }";
      });
      break;
  }

  var jsonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"ItemList\",\n    \"itemListElement\": [" + itemListElement.join(',') + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jsonld),
    key: "jsonld-course"
  }));
};

var SiteLinksSearchBoxJsonLd = function SiteLinksSearchBoxJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      _ref$potentialActions = _ref.potentialActions,
      potentialActions = _ref$potentialActions === void 0 ? [] : _ref$potentialActions;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebSite\",\n    \"url\": \"" + url + "\",\n    \"potentialAction\": [\n      " + potentialActions.map(function (_ref2) {
    var target = _ref2.target,
        queryInput = _ref2.queryInput;
    return "{\n        \"@type\": \"SearchAction\",\n        \"target\": \"" + target + "={" + queryInput + "}\",\n        \"query-input\": \"required name=" + queryInput + "\"\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-siteLinksSearchBox" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildReview$1 = function buildReview(review) {
  return "\n    \"review\": {\n        \"@type\": \"Review\",\n        " + (review.author ? buildAuthor(review.author) : '') + "\n        " + (review.publisher ? buildPublisher(review.publisher) : '') + "\n        " + (review.datePublished ? "\"datePublished\": \"" + review.datePublished + "\"," : '') + "\n        " + (review.reviewBody ? "\"reviewBody\": \"" + review.reviewBody + "\"," : '') + "\n        " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n        " + buildReviewRating(review.reviewRating) + "\n      },\n  ";
};

var SoftwareAppJsonLd = function SoftwareAppJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      name = _ref.name,
      applicationCategory = _ref.applicationCategory,
      operatingSystem = _ref.operatingSystem,
      priceCurrency = _ref.priceCurrency,
      price = _ref.price,
      aggregateRating = _ref.aggregateRating,
      review = _ref.review;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"SoftwareApplication\",\n    \"offers\": {\n      \"@type\": \"Offer\",\n      \"priceCurrency\": \"" + priceCurrency + "\",\n      \"price\": \"" + price + "\"\n    },\n    " + (applicationCategory ? "\"applicationCategory\": \"" + applicationCategory + "\"," : '') + "\n    " + (operatingSystem ? "\"operatingSystem\": \"" + operatingSystem + "\"," : '') + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (review ? buildReview$1(review) : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-softwareApp" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var CollectionPageJsonLd = function CollectionPageJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      name = _ref.name,
      _ref$hasPart = _ref.hasPart,
      hasPart = _ref$hasPart === void 0 ? [] : _ref$hasPart;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"CollectionPage\",\n    \"name\": \"" + name + "\",\n    \"hasPart\": [\n      " + hasPart.map(function (creativeWork) {
    return "{\n        \"@type\": \"CreativeWork\",\n        \"author\": \"" + creativeWork.author + "\",\n        \"about\": \"" + creativeWork.about + "\",\n        \"name\": \"" + creativeWork.name + "\",\n        " + (creativeWork.audience ? "\"audience\": \"" + creativeWork.audience + "\"," : '') + "\n        " + (creativeWork.keywords ? "\"keywords\": \"" + creativeWork.keywords + "\"," : '') + "\n        " + (creativeWork.thumbnailUrl ? "\"thumbnailUrl\": \"" + creativeWork.thumbnailUrl + "\"," : '') + "\n        " + (creativeWork.image ? "\"image\": \"" + creativeWork.image + "\"," : '') + "\n        \"datePublished\": \"" + creativeWork.datePublished + "\"\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-collection-page" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildBreadcrumb = function buildBreadcrumb(itemListElements) {
  return "{\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": " + buildBreadcrumbList(itemListElements) + "\n}";
};

var buildBreadcrumbList = function buildBreadcrumbList(itemListElements) {
  return "[\n  " + itemListElements.map(function (itemListElement) {
    return "{\n    \"@type\": \"ListItem\",\n    \"position\": " + itemListElement.position + ",\n    \"item\": {\n      \"@id\": \"" + itemListElement.item + "\",\n      \"name\": \"" + itemListElement.name + "\"\n    }\n  }";
  }) + "\n]";
};

var ProfilePageJsonLd = function ProfilePageJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      breadcrumb = _ref.breadcrumb,
      lastReviewed = _ref.lastReviewed;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"ProfilePage\",\n    " + (lastReviewed ? "\"lastReviewed\": \"" + lastReviewed + "\"," : '') + "\n    \"breadcrumb\": " + (typeof breadcrumb === 'string' ? "\"" + breadcrumb + "\"" : buildBreadcrumb(breadcrumb)) + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-profile-page" + (keyOverride ? "-" + keyOverride : '')
  }));
};




/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./public/nprogress.css":
/*!******************************!*\
  !*** ./public/nprogress.css ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./nprogress.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./public/nprogress.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./nprogress.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./public/nprogress.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./nprogress.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./public/nprogress.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./public/nprogress.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./public/nprogress.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Make clicks pass-through */\r\n#nprogress {\r\n  pointer-events: none;\r\n}\r\n\r\n#nprogress .bar {\r\n  background: #00bcea;\r\n  position: relative;\r\n  z-index: 1031;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 0.5rem;\r\n}\r\n\r\n/* Fancy blur effect */\r\n#nprogress .peg {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 10rem;\r\n  height: 100%;\r\n  -webkit-box-shadow: 0 0 1rem #29d, 0 0 0.5rem #29d;\r\n          box-shadow: 0 0 1rem #29d, 0 0 0.5rem #29d;\r\n  opacity: 1;\r\n\r\n  -webkit-transform: rotate(3deg) translate(0px, -0.4rem);\r\n  transform: rotate(3deg) translate(0px, -0.4rem);\r\n}\r\n\r\n.nprogress-custom-parent {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.nprogress-custom-parent #nprogress .bar {\r\n  position: absolute;\r\n}\r\n\r\n@-webkit-keyframes nprogress-spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes nprogress-spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://public/nprogress.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,OAAO;EACP,WAAW;EACX,cAAc;AAChB;;AAEA,sBAAsB;AACtB;EACE,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,kDAA0C;UAA1C,0CAA0C;EAC1C,UAAU;;EAEV,uDAAuD;EAEvD,+CAA+C;AACjD;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;AACF;AACA;EACE;IACE,+BAAuB;YAAvB,uBAAuB;EACzB;EACA;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;AACF","sourcesContent":["/* Make clicks pass-through */\r\n#nprogress {\r\n  pointer-events: none;\r\n}\r\n\r\n#nprogress .bar {\r\n  background: #00bcea;\r\n  position: relative;\r\n  z-index: 1031;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 0.5rem;\r\n}\r\n\r\n/* Fancy blur effect */\r\n#nprogress .peg {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 10rem;\r\n  height: 100%;\r\n  box-shadow: 0 0 1rem #29d, 0 0 0.5rem #29d;\r\n  opacity: 1;\r\n\r\n  -webkit-transform: rotate(3deg) translate(0px, -0.4rem);\r\n  -ms-transform: rotate(3deg) translate(0px, -0.4rem);\r\n  transform: rotate(3deg) translate(0px, -0.4rem);\r\n}\r\n\r\n.nprogress-custom-parent {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.nprogress-custom-parent #nprogress .bar {\r\n  position: absolute;\r\n}\r\n\r\n@-webkit-keyframes nprogress-spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes nprogress-spinner {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js")


/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.0
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": function() { return /* binding */ Je; },
/* harmony export */   "StyleSheetConsumer": function() { return /* binding */ le; },
/* harmony export */   "StyleSheetContext": function() { return /* binding */ ue; },
/* harmony export */   "StyleSheetManager": function() { return /* binding */ ye; },
/* harmony export */   "ThemeConsumer": function() { return /* binding */ Ge; },
/* harmony export */   "ThemeContext": function() { return /* binding */ Le; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ Fe; },
/* harmony export */   "__PRIVATE__": function() { return /* binding */ Ke; },
/* harmony export */   "createGlobalStyle": function() { return /* binding */ We; },
/* harmony export */   "css": function() { return /* binding */ Ce; },
/* harmony export */   "isStyledComponent": function() { return /* binding */ N; },
/* harmony export */   "keyframes": function() { return /* binding */ Ue; },
/* harmony export */   "useTheme": function() { return /* binding */ Ze; },
/* harmony export */   "version": function() { return /* binding */ C; },
/* harmony export */   "withTheme": function() { return /* binding */ Xe; }
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.1",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){t>=V&&(V=t+1),k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.3.1"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.innerHTML||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.1");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.1"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var ke=function(e){return ee(ne(e)>>>0)};function xe(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Me(e,t,n){var r=e[n];Ve(t)&&Ve(r)?ze(r,t):e[n]=t}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&Me(e,i[a],a)}return e}var Le=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Ge=Le.Consumer;function Fe(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Le),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Le.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!xe(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+ke("5.3.1"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Le),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default,_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?ze({},e.defaultProps,t):t}}), true&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+ke(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Le),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function Ue(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=ke(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Le),i=e.defaultProps,a=Re(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Le)},Ke={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDOztBQUV2QyxtN0hBQW03SDs7QUFFbjdILFlBQVkseURBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrREFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQ0E7QUFDQSwwS0FBMEssTUFBTTtBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLE1BQU07QUFDTixpQkFBaUI7QUFDakIsTUFBTTtBQUNOLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMxZEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUyxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySEFBMkg7QUFDM0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxH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LXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvc3R5bGVzL0dsb2JhbFN0eWxlLmpzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3Byb3BUeXBlcy9hcHBUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHJvdmlkZXJzL0FwcFByb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1zZW8vbGliL25leHQtc2VvLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvbnByb2dyZXNzLmNzcz9jNmFiIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL25wcm9ncmVzcy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbnByb2dyZXNzL25wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTWVkaXVtfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVTbWFsbH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgIFxyXG59XHJcblxyXG5hLCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgIFxyXG59XHJcblxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmhlYWRlck1vYmlsZX07XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViSGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZIZWFkZXJ9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2V9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICAgXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcblxyXG4gICAgICAgICY6dmlzaXRlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX1cclxufVxyXG5cclxuYDtcclxuIiwiZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcclxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRThFQkYxJyxcclxuICAgIG1haW5Db2xvcjogJyMwRTI3NEQnLFxyXG4gICAgbGlnaHRlck1haW5Db2xvcjogJyMxMDMzNjknLFxyXG4gICAgYWNjZW50Q29sb3I6ICcjMDBCQ0VBJyxcclxuICAgIGxpZ2h0ZXJBY2NlbnRDb2xvcjogJyMwMGNkZmYnLFxyXG4gIH0sXHJcbiAgZm9udFNpemU6IHtcclxuICAgIGhlYWRlcjogJzQuOHJlbScsXHJcbiAgICBoZWFkZXJNb2JpbGU6ICc0cmVtJyxcclxuICAgIG5hdkhlYWRlcjogJzMuNnJlbScsXHJcbiAgICBuYXZMaXN0OiAnMS44cmVtJyxcclxuICAgIHN1YkhlYWRlcjogJzJyZW0nLFxyXG4gICAgc3ViVGV4dDogJzEuOHJlbScsXHJcbiAgICBjYXB0aW9uTGFyZ2U6ICczcmVtJyxcclxuICAgIGNhcHRpb25MYXJnZU1lZGl1bTogJzIuNHJlbScsXHJcbiAgICBjYXB0aW9uTWVkaXVtOiAnMS4zcmVtJyxcclxuICAgIGNhcHRpb25TbWFsbDogJzEuMnJlbScsXHJcbiAgICBib2R5OiAnMS42cmVtJyxcclxuICAgIGJvZHlTbWFsbDogJzEuNHJlbScsXHJcbiAgfSxcclxuICBwYWRkaW5nOiB7XHJcbiAgICB4bDogJzE4dncnLFxyXG4gICAgeDogJzE1dncnLFxyXG4gICAgbTogJzEwdncnLFxyXG4gICAgeHM6ICc4dncnLFxyXG4gICAgczogJzV2dycsXHJcblxyXG4gICAgeHhsVjogJzEwcmVtJyxcclxuICAgIHhsVjogJzhyZW0nLFxyXG4gICAgeFY6ICc3cmVtJyxcclxuICAgIG1WOiAnNXJlbScsXHJcbiAgICB4c1Y6ICc0cmVtJyxcclxuICAgIHNWOiAnM3JlbScsXHJcbiAgICBzc1Y6ICcycmVtJyxcclxuICB9LFxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHRpbGVQYWRkaW5nOiAnNHJlbSAzLjVyZW0nLFxyXG4gICAgdGlsZVBhZGRpbmdNb2JpbGU6ICczcmVtIDV2dycsXHJcbiAgICB0aWxlV2lkdGg6ICc2NXJlbScsXHJcbiAgICBwYWdlU2VjdGlvblBhZGRpbmc6ICc0cmVtIDVyZW0nLFxyXG4gICAgcGFnZVNlY3Rpb25XaWR0aDogJzEwMHJlbScsXHJcbiAgICByaWNoVGV4dE1hcmdpblRvcDogJzRyZW0nLFxyXG4gIH0sXHJcbiAgdXRpbHM6IHtcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggNHB4IDE0cHggIHJnYmEoMCwgMCwgMCwgMC4xKScsXHJcbiAgfSxcclxuICBtcToge1xyXG4gICAgaGVyb0luc3RydWN0b3JzOiBgQG1lZGlhIChtaW4td2lkdGg6IDE1NzBweClgLFxyXG4gICAgZGVza3RvcDogYEBtZWRpYSAobWF4LXdpZHRoOiAxNTUwcHgpYCxcclxuICAgIGRlc2t0b3BUYWxsOiBgQG1lZGlhIChtaW4taGVpZ2h0OiAxMTAwcHgpIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpYCxcclxuICAgIGRlc2t0b3BXaWRlOiBgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweClgLFxyXG4gICAgbGFwdG9wTGFyZ2U6IGBAbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KWAsXHJcbiAgICBsYXB0b3A6IGBAbWVkaWEgKG1heC13aWR0aDogMTIyNHB4KWAsXHJcbiAgICB0YWJsZXRMYXJnZTogYEBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpYCxcclxuICAgIHRhYmxldDogYEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweClgLFxyXG4gICAgbW9iaWxlTGFyZ2U6IGBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpYCxcclxuICAgIG1vYmlsZU1lZGl1bTogYEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweClgLFxyXG4gICAgbW9iaWxlU21hbGw6IGBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpYCxcclxuICB9LFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFwcEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkFwcEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5leHRXZWJWaXRhbHNNZXRyaWNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfYXBwR2V0SW5pdGlhbFByb3BzKCkge1xuICAgIF9hcHBHZXRJbml0aWFsUHJvcHMgPSAvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoXykge1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgLCBwYWdlUHJvcHMgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHBhZ2VQcm9wcykpKTtcbiAgICB9XG59XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcGFnZVByb3BzU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvYXBwVHlwZXMnO1xyXG5pbXBvcnQgQXBwUHJvdmlkZXIgZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgJ3B1YmxpYy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAndXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICd1dGlscy9tZWRpYSc7XHJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnYXNzZXRzL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnYXNzZXRzL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcic7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzO1xyXG5cclxuICBpZiAoZ2xvYmFsID09IG51bGwpIHtcclxuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBmYXZpY29uLFxyXG4gICAgZGVmYXVsdFNlbzogeyBtZXRhVGl0bGVTdWZmaXgsIG1ldGFUaXRsZSwgbWV0YURlc2NyaXB0aW9uLCBzaGFyZWRJbWFnZSB9LFxyXG4gIH0gPSBnbG9iYWw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD57PGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9e2dldFN0cmFwaU1lZGlhKGZhdmljb24pfSAvPn08L0hlYWQ+XHJcbiAgICAgIDxEZWZhdWx0U2VvXHJcbiAgICAgICAgdGl0bGVUZW1wbGF0ZT17YCVzIHwgJHttZXRhVGl0bGVTdWZmaXh9YH1cclxuICAgICAgICB0aXRsZT17bWV0YVRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259XHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICAuLi4oc2hhcmVkSW1hZ2UgJiZcclxuICAgICAgICAgICAgc2hhcmVkSW1hZ2UuZm9ybWF0cyAmJiB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNoYXJlZEltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8QXBwUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQXBwUHJvdmlkZXI+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuICBwYWdlUHJvcHM6IHBhZ2VQcm9wc1NoYXBlLFxyXG59O1xyXG5cclxuTXlBcHAuZGVmYXVsdFByb3BzID0ge1xyXG4gIHBhZ2VQcm9wczoge1xyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIGRlZmF1bHRTZW86IHtcclxuICAgICAgICBtZXRhRGVzY3JpcHRpb246ICdBa2FkZW1pYSBDaXNjbyB3IFplc3BvbGUgU3prw7PFgiBFbGVrdHJvbmljem55Y2ggdyBSYWRvbWl1JyxcclxuICAgICAgICBtZXRhVGl0bGU6ICdBa2FkZW1pYSBDaXNjbycsXHJcbiAgICAgICAgbWV0YVRpdGxlU3VmZml4OiAnWmVzcMOzxYIgU3prw7PFgiBFbGVrdHJvbmljem55Y2gnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XHJcbi8vIGhhdmUgZ2V0U3RhdGljUHJvcHMuIFNvIFtbLi4uc2x1Z11dIHBhZ2VzIHN0aWxsIGdldCBTU0cuXHJcbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGZldGNoQVBJKCcvZ2xvYmFsJyk7XHJcblxyXG4gIHJldHVybiB7IC4uLmFwcFByb3BzLCBwYWdlUHJvcHM6IHsgZ2xvYmFsIH0gfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VQcm9wc1NoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBnbG9iYWw6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBkZWZhdWx0U2VvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgbWV0YURlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIG1ldGFUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBtZXRhVGl0bGVTdWZmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHNoYXJlZEltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgfSksXHJcbiAgICBmYXZpY29uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfSksXHJcbiAgbmF2aWdhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgc2VvOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGlzTmF2T3BlbjogZmFsc2UsXHJcbiAgc2V0SXNOYXZPcGVuOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBBcHBQcm92aWRlciA9ICh7IGNoaWxkcmVuLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTmF2T3Blbiwgc2V0SXNOYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKHJvdXRlcikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHBhcmVudDogJyNsb2FkZXInIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTmF2T3BlbixcclxuICAgICAgICBzZXRJc05hdk9wZW4sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwUHJvdmlkZXI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnfSR7cGF0aH1gO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKHsgdXJsIH0pIHtcclxuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBnZXRTdHJhcGlVUkwodXJsKSA6IHVybDtcclxuICByZXR1cm4gaW1hZ2VVcmw7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICB0ZW1wbGF0ZVRpdGxlOiAnJyxcbiAgbm9pbmRleDogZmFsc2UsXG4gIG5vZm9sbG93OiBmYWxzZSxcbiAgZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodDogMCxcbiAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGg6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDogMCxcbiAgZGlzYWJsZUdvb2dsZWJvdDogZmFsc2Vcbn07XG5cbnZhciBidWlsZE9wZW5HcmFwaE1lZGlhVGFncyA9IGZ1bmN0aW9uIGJ1aWxkT3BlbkdyYXBoTWVkaWFUYWdzKG1lZGlhVHlwZSwgbWVkaWEsIF90ZW1wKSB7XG4gIGlmIChtZWRpYSA9PT0gdm9pZCAwKSB7XG4gICAgbWVkaWEgPSBbXTtcbiAgfVxuXG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBkZWZhdWx0V2lkdGggPSBfcmVmLmRlZmF1bHRXaWR0aCxcbiAgICAgIGRlZmF1bHRIZWlnaHQgPSBfcmVmLmRlZmF1bHRIZWlnaHQ7XG5cbiAgcmV0dXJuIG1lZGlhLnJlZHVjZShmdW5jdGlvbiAodGFncywgbWVkaXVtLCBpbmRleCkge1xuICAgIHRhZ3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjowXCIgKyBpbmRleCxcbiAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlLFxuICAgICAgY29udGVudDogbWVkaXVtLnVybFxuICAgIH0pKTtcblxuICAgIGlmIChtZWRpdW0uYWx0KSB7XG4gICAgICB0YWdzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjphbHQwXCIgKyBpbmRleCxcbiAgICAgICAgcHJvcGVydHk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjphbHRcIixcbiAgICAgICAgY29udGVudDogbWVkaXVtLmFsdFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChtZWRpdW0uc2VjdXJlVXJsKSB7XG4gICAgICB0YWdzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjpzZWN1cmVfdXJsMFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6c2VjdXJlX3VybFwiLFxuICAgICAgICBjb250ZW50OiBtZWRpdW0uc2VjdXJlVXJsLnRvU3RyaW5nKClcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAobWVkaXVtLnR5cGUpIHtcbiAgICAgIHRhZ3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOnR5cGUwXCIgKyBpbmRleCxcbiAgICAgICAgcHJvcGVydHk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjp0eXBlXCIsXG4gICAgICAgIGNvbnRlbnQ6IG1lZGl1bS50eXBlLnRvU3RyaW5nKClcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAobWVkaXVtLndpZHRoKSB7XG4gICAgICB0YWdzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjp3aWR0aDBcIiArIGluZGV4LFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOndpZHRoXCIsXG4gICAgICAgIGNvbnRlbnQ6IG1lZGl1bS53aWR0aC50b1N0cmluZygpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmIChkZWZhdWx0V2lkdGgpIHtcbiAgICAgIHRhZ3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6d2lkdGhcIixcbiAgICAgICAgY29udGVudDogZGVmYXVsdFdpZHRoLnRvU3RyaW5nKClcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAobWVkaXVtLmhlaWdodCkge1xuICAgICAgdGFncy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgcHJvcGVydHk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjpoZWlnaHRcIixcbiAgICAgICAgY29udGVudDogbWVkaXVtLmhlaWdodC50b1N0cmluZygpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmIChkZWZhdWx0SGVpZ2h0KSB7XG4gICAgICB0YWdzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjpoZWlnaHRcIiArIGluZGV4LFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOmhlaWdodFwiLFxuICAgICAgICBjb250ZW50OiBkZWZhdWx0SGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbiAgfSwgW10pO1xufTtcblxudmFyIGJ1aWxkVGFncyA9IGZ1bmN0aW9uIGJ1aWxkVGFncyhjb25maWcpIHtcbiAgdmFyIF9jb25maWckb3BlbkdyYXBoLCBfY29uZmlnJG9wZW5HcmFwaDMsIF9jb25maWckYWRkaXRpb25hbExpbjtcblxuICB2YXIgdGFnc1RvUmVuZGVyID0gW107XG5cbiAgaWYgKGNvbmZpZy50aXRsZVRlbXBsYXRlKSB7XG4gICAgZGVmYXVsdHMudGVtcGxhdGVUaXRsZSA9IGNvbmZpZy50aXRsZVRlbXBsYXRlO1xuICB9XG5cbiAgdmFyIHVwZGF0ZWRUaXRsZSA9ICcnO1xuXG4gIGlmIChjb25maWcudGl0bGUpIHtcbiAgICB1cGRhdGVkVGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICBpZiAoZGVmYXVsdHMudGVtcGxhdGVUaXRsZSkge1xuICAgICAgdXBkYXRlZFRpdGxlID0gZGVmYXVsdHMudGVtcGxhdGVUaXRsZS5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVkVGl0bGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29uZmlnLmRlZmF1bHRUaXRsZSkge1xuICAgIHVwZGF0ZWRUaXRsZSA9IGNvbmZpZy5kZWZhdWx0VGl0bGU7XG4gIH1cblxuICBpZiAodXBkYXRlZFRpdGxlKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIHtcbiAgICAgIGtleTogXCJ0aXRsZVwiXG4gICAgfSwgdXBkYXRlZFRpdGxlKSk7XG4gIH1cblxuICB2YXIgbm9pbmRleCA9IGNvbmZpZy5ub2luZGV4IHx8IGRlZmF1bHRzLm5vaW5kZXggfHwgY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXg7XG4gIHZhciBub2ZvbGxvdyA9IGNvbmZpZy5ub2ZvbGxvdyB8fCBkZWZhdWx0cy5ub2ZvbGxvdyB8fCBjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3c7XG4gIHZhciBkaXNhYmxlR29vZ2xlYm90ID0gY29uZmlnLmRpc2FibGVHb29nbGVib3QgfHwgZGVmYXVsdHMuZGlzYWJsZUdvb2dsZWJvdCB8fCBjb25maWcuZGFuZ2Vyb3VzbHlEaXNhYmxlR29vZ2xlYm90O1xuICB2YXIgcm9ib3RzUGFyYW1zID0gJyc7XG5cbiAgaWYgKGNvbmZpZy5yb2JvdHNQcm9wcykge1xuICAgIHZhciBfY29uZmlnJHJvYm90c1Byb3BzID0gY29uZmlnLnJvYm90c1Byb3BzLFxuICAgICAgICBub3NuaXBwZXQgPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vc25pcHBldCxcbiAgICAgICAgbWF4U25pcHBldCA9IF9jb25maWckcm9ib3RzUHJvcHMubWF4U25pcHBldCxcbiAgICAgICAgbWF4SW1hZ2VQcmV2aWV3ID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5tYXhJbWFnZVByZXZpZXcsXG4gICAgICAgIG1heFZpZGVvUHJldmlldyA9IF9jb25maWckcm9ib3RzUHJvcHMubWF4VmlkZW9QcmV2aWV3LFxuICAgICAgICBub2FyY2hpdmUgPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vYXJjaGl2ZSxcbiAgICAgICAgbm9pbWFnZWluZGV4ID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5ub2ltYWdlaW5kZXgsXG4gICAgICAgIG5vdHJhbnNsYXRlID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5ub3RyYW5zbGF0ZSxcbiAgICAgICAgdW5hdmFpbGFibGVBZnRlciA9IF9jb25maWckcm9ib3RzUHJvcHMudW5hdmFpbGFibGVBZnRlcjtcbiAgICByb2JvdHNQYXJhbXMgPSBcIlwiICsgKG5vc25pcHBldCA/ICcsbm9zbmlwcGV0JyA6ICcnKSArIChtYXhTbmlwcGV0ID8gXCIsbWF4LXNuaXBwZXQ6XCIgKyBtYXhTbmlwcGV0IDogJycpICsgKG1heEltYWdlUHJldmlldyA/IFwiLG1heC1pbWFnZS1wcmV2aWV3OlwiICsgbWF4SW1hZ2VQcmV2aWV3IDogJycpICsgKG5vYXJjaGl2ZSA/ICcsbm9hcmNoaXZlJyA6ICcnKSArICh1bmF2YWlsYWJsZUFmdGVyID8gXCIsdW5hdmFpbGFibGVfYWZ0ZXI6XCIgKyB1bmF2YWlsYWJsZUFmdGVyIDogJycpICsgKG5vaW1hZ2VpbmRleCA/ICcsbm9pbWFnZWluZGV4JyA6ICcnKSArIChtYXhWaWRlb1ByZXZpZXcgPyBcIixtYXgtdmlkZW8tcHJldmlldzpcIiArIG1heFZpZGVvUHJldmlldyA6ICcnKSArIChub3RyYW5zbGF0ZSA/ICcsbm90cmFuc2xhdGUnIDogJycpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5kYW5nZXJvdXNseURpc2FibGVHb29nbGVib3QpIHtcbiAgICBkZWZhdWx0cy5kaXNhYmxlR29vZ2xlYm90ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChub2luZGV4IHx8IG5vZm9sbG93KSB7XG4gICAgaWYgKGNvbmZpZy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4KSB7XG4gICAgICBkZWZhdWx0cy5ub2luZGV4ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93KSB7XG4gICAgICBkZWZhdWx0cy5ub2ZvbGxvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcInJvYm90c1wiLFxuICAgICAgbmFtZTogXCJyb2JvdHNcIixcbiAgICAgIGNvbnRlbnQ6IChub2luZGV4ID8gJ25vaW5kZXgnIDogJ2luZGV4JykgKyBcIixcIiArIChub2ZvbGxvdyA/ICdub2ZvbGxvdycgOiAnZm9sbG93JykgKyByb2JvdHNQYXJhbXNcbiAgICB9KSk7XG5cbiAgICBpZiAoIWRpc2FibGVHb29nbGVib3QpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcImdvb2dsZWJvdFwiLFxuICAgICAgICBuYW1lOiBcImdvb2dsZWJvdFwiLFxuICAgICAgICBjb250ZW50OiAobm9pbmRleCA/ICdub2luZGV4JyA6ICdpbmRleCcpICsgXCIsXCIgKyAobm9mb2xsb3cgPyAnbm9mb2xsb3cnIDogJ2ZvbGxvdycpICsgcm9ib3RzUGFyYW1zXG4gICAgICB9KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJyb2JvdHNcIixcbiAgICAgIG5hbWU6IFwicm9ib3RzXCIsXG4gICAgICBjb250ZW50OiBcImluZGV4LGZvbGxvd1wiICsgcm9ib3RzUGFyYW1zXG4gICAgfSkpO1xuXG4gICAgaWYgKCFkaXNhYmxlR29vZ2xlYm90KSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJnb29nbGVib3RcIixcbiAgICAgICAgbmFtZTogXCJnb29nbGVib3RcIixcbiAgICAgICAgY29udGVudDogXCJpbmRleCxmb2xsb3dcIiArIHJvYm90c1BhcmFtc1xuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIGNvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcubW9iaWxlQWx0ZXJuYXRlKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImFsdGVybmF0ZVwiLFxuICAgICAga2V5OiBcIm1vYmlsZUFsdGVybmF0ZVwiLFxuICAgICAgbWVkaWE6IGNvbmZpZy5tb2JpbGVBbHRlcm5hdGUubWVkaWEsXG4gICAgICBocmVmOiBjb25maWcubW9iaWxlQWx0ZXJuYXRlLmhyZWZcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcyAmJiBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmZvckVhY2goZnVuY3Rpb24gKGxhbmd1YWdlQWx0ZXJuYXRlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIHJlbDogXCJhbHRlcm5hdGVcIixcbiAgICAgICAga2V5OiBcImxhbmd1YWdlQWx0ZXJuYXRlLVwiICsgbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZkxhbmcsXG4gICAgICAgIGhyZWZMYW5nOiBsYW5ndWFnZUFsdGVybmF0ZS5ocmVmTGFuZyxcbiAgICAgICAgaHJlZjogbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50d2l0dGVyKSB7XG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLmNhcmRUeXBlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuY2FyZFR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuc2l0ZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIG5hbWU6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy50d2l0dGVyLnNpdGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuaGFuZGxlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuaGFuZGxlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5mYWNlYm9vaykge1xuICAgIGlmIChjb25maWcuZmFjZWJvb2suYXBwSWQpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcImZiOmFwcF9pZFwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJmYjphcHBfaWRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLmZhY2Vib29rLmFwcElkXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKChfY29uZmlnJG9wZW5HcmFwaCA9IGNvbmZpZy5vcGVuR3JhcGgpICE9IG51bGwgJiYgX2NvbmZpZyRvcGVuR3JhcGgudGl0bGUgfHwgY29uZmlnLnRpdGxlKSB7XG4gICAgdmFyIF9jb25maWckb3BlbkdyYXBoMjtcblxuICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJvZzp0aXRsZVwiLFxuICAgICAgcHJvcGVydHk6IFwib2c6dGl0bGVcIixcbiAgICAgIGNvbnRlbnQ6ICgoX2NvbmZpZyRvcGVuR3JhcGgyID0gY29uZmlnLm9wZW5HcmFwaCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb25maWckb3BlbkdyYXBoMi50aXRsZSkgfHwgdXBkYXRlZFRpdGxlXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKChfY29uZmlnJG9wZW5HcmFwaDMgPSBjb25maWcub3BlbkdyYXBoKSAhPSBudWxsICYmIF9jb25maWckb3BlbkdyYXBoMy5kZXNjcmlwdGlvbiB8fCBjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgX2NvbmZpZyRvcGVuR3JhcGg0O1xuXG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICBwcm9wZXJ0eTogXCJvZzpkZXNjcmlwdGlvblwiLFxuICAgICAgY29udGVudDogKChfY29uZmlnJG9wZW5HcmFwaDQgPSBjb25maWcub3BlbkdyYXBoKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbmZpZyRvcGVuR3JhcGg0LmRlc2NyaXB0aW9uKSB8fCBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLm9wZW5HcmFwaCkge1xuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnVybCB8fCBjb25maWcuY2Fub25pY2FsKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzp1cmxcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dXJsXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudXJsIHx8IGNvbmZpZy5jYW5vbmljYWxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC50eXBlKSB7XG4gICAgICB2YXIgdHlwZSA9IGNvbmZpZy5vcGVuR3JhcGgudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dHlwZVwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsXG4gICAgICAgIGNvbnRlbnQ6IHR5cGVcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdwcm9maWxlJyAmJiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5maXJzdE5hbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTpmaXJzdF9uYW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJwcm9maWxlOmZpcnN0X25hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5maXJzdE5hbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmxhc3ROYW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6bGFzdF9uYW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJwcm9maWxlOmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmxhc3ROYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS51c2VybmFtZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOnVzZXJuYW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJwcm9maWxlOnVzZXJuYW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUudXNlcm5hbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmdlbmRlcikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOmdlbmRlclwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpnZW5kZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5nZW5kZXJcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Jvb2snICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vaykge1xuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLmF1dGhvcnMgJiYgY29uZmlnLm9wZW5HcmFwaC5ib29rLmF1dGhvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC5ib29rLmF1dGhvcnMuZm9yRWFjaChmdW5jdGlvbiAoYXV0aG9yLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYm9vazphdXRob3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6YXV0aG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGF1dGhvclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay5pc2JuKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImJvb2s6aXNiblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYm9vazppc2JuXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmJvb2suaXNiblxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2sucmVsZWFzZURhdGUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYm9vazpyZWxlYXNlX2RhdGVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmJvb2sucmVsZWFzZURhdGVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLnRhZ3MgJiYgY29uZmlnLm9wZW5HcmFwaC5ib29rLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC5ib29rLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYm9vazp0YWc6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhcnRpY2xlJyAmJiBjb25maWcub3BlbkdyYXBoLmFydGljbGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5wdWJsaXNoZWRUaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6cHVibGlzaGVkX3RpbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6cHVibGlzaGVkX3RpbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5wdWJsaXNoZWRUaW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5tb2RpZmllZFRpbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOm1vZGlmaWVkX3RpbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5tb2RpZmllZFRpbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLmV4cGlyYXRpb25UaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6ZXhwaXJhdGlvbl90aW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOmV4cGlyYXRpb25fdGltZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLmV4cGlyYXRpb25UaW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5hdXRob3JzICYmIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5hdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5hdXRob3JzLmZvckVhY2goZnVuY3Rpb24gKGF1dGhvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImFydGljbGU6YXV0aG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOmF1dGhvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBhdXRob3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUuc2VjdGlvbikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOnNlY3Rpb25cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6c2VjdGlvblwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnNlY3Rpb25cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnRhZ3MgJiYgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTp0YWc6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCh0eXBlID09PSAndmlkZW8ubW92aWUnIHx8IHR5cGUgPT09ICd2aWRlby5lcGlzb2RlJyB8fCB0eXBlID09PSAndmlkZW8udHZfc2hvdycgfHwgdHlwZSA9PT0gJ3ZpZGVvLm90aGVyJykgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlbykge1xuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5hY3RvcnMgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby5hY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby5hY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0b3IsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWN0b3IucHJvZmlsZSkge1xuICAgICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZpZGVvOmFjdG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmFjdG9yXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0b3IucHJvZmlsZVxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rvci5yb2xlKSB7XG4gICAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidmlkZW86YWN0b3I6cm9sZTowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzphY3Rvcjpyb2xlXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0b3Iucm9sZVxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5kaXJlY3RvcnMgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby5kaXJlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby5kaXJlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0b3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJ2aWRlbzpkaXJlY3RvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86ZGlyZWN0b3JcIixcbiAgICAgICAgICAgICAgY29udGVudDogZGlyZWN0b3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLndyaXRlcnMgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby53cml0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ud3JpdGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3cml0ZXIsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJ2aWRlbzp3cml0ZXI6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOndyaXRlclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiB3cml0ZXJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLmR1cmF0aW9uKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOmR1cmF0aW9uXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzpkdXJhdGlvblwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC52aWRlby5kdXJhdGlvbi50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ucmVsZWFzZURhdGUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwidmlkZW86cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzpyZWxlYXNlX2RhdGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ucmVsZWFzZURhdGVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8udGFncy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzp0YWdcIixcbiAgICAgICAgICAgICAgY29udGVudDogdGFnXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5zZXJpZXMpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwidmlkZW86c2VyaWVzXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzpzZXJpZXNcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uc2VyaWVzXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBpbWFnZXNcblxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGggPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzICYmIGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2guYXBwbHkodGFnc1RvUmVuZGVyLCBidWlsZE9wZW5HcmFwaE1lZGlhVGFncygnaW1hZ2UnLCBjb25maWcub3BlbkdyYXBoLmltYWdlcywge1xuICAgICAgICBkZWZhdWx0V2lkdGg6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoLFxuICAgICAgICBkZWZhdWx0SGVpZ2h0OiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHRcbiAgICAgIH0pKTtcbiAgICB9IC8vIHZpZGVvc1xuXG5cbiAgICBpZiAoY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoKSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aDtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0ID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlb3MgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlb3MubGVuZ3RoKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaC5hcHBseSh0YWdzVG9SZW5kZXIsIGJ1aWxkT3BlbkdyYXBoTWVkaWFUYWdzKCd2aWRlbycsIGNvbmZpZy5vcGVuR3JhcGgudmlkZW9zLCB7XG4gICAgICAgIGRlZmF1bHRXaWR0aDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgsXG4gICAgICAgIGRlZmF1bHRIZWlnaHQ6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLmxvY2FsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6bG9jYWxlXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOmxvY2FsZVwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmxvY2FsZVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnNpdGVfbmFtZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6c2l0ZV9uYW1lXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnNpdGVfbmFtZVwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnNpdGVfbmFtZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuY2Fub25pY2FsKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImNhbm9uaWNhbFwiLFxuICAgICAgaHJlZjogY29uZmlnLmNhbm9uaWNhbCxcbiAgICAgIGtleTogXCJjYW5vbmljYWxcIlxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzICYmIGNvbmZpZy5hZGRpdGlvbmFsTWV0YVRhZ3MubGVuZ3RoID4gMCkge1xuICAgIGNvbmZpZy5hZGRpdGlvbmFsTWV0YVRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgX3JlZjIsIF9yZWYzLCBfdGFnJGtleU92ZXJyaWRlO1xuXG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJtZXRhOlwiICsgKChfcmVmMiA9IChfcmVmMyA9IChfdGFnJGtleU92ZXJyaWRlID0gdGFnLmtleU92ZXJyaWRlKSAhPSBudWxsID8gX3RhZyRrZXlPdmVycmlkZSA6IHRhZy5uYW1lKSAhPSBudWxsID8gX3JlZjMgOiB0YWcucHJvcGVydHkpICE9IG51bGwgPyBfcmVmMiA6IHRhZy5odHRwRXF1aXYpXG4gICAgICB9LCB0YWcpKSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoKF9jb25maWckYWRkaXRpb25hbExpbiA9IGNvbmZpZy5hZGRpdGlvbmFsTGlua1RhZ3MpICE9IG51bGwgJiYgX2NvbmZpZyRhZGRpdGlvbmFsTGluLmxlbmd0aCkge1xuICAgIGNvbmZpZy5hZGRpdGlvbmFsTGlua1RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgX3RhZyRrZXlPdmVycmlkZTI7XG5cbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiBcImxpbmtcIiArICgoX3RhZyRrZXlPdmVycmlkZTIgPSB0YWcua2V5T3ZlcnJpZGUpICE9IG51bGwgPyBfdGFnJGtleU92ZXJyaWRlMiA6IHRhZy5ocmVmKSArIHRhZy5yZWxcbiAgICAgIH0sIHRhZykpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YWdzVG9SZW5kZXI7XG59O1xuXG52YXIgRGVmYXVsdFNlbyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEZWZhdWx0U2VvLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEZWZhdWx0U2VvKCkge1xuICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEZWZhdWx0U2VvLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgIHRpdGxlVGVtcGxhdGUgPSBfdGhpcyRwcm9wcy50aXRsZVRlbXBsYXRlLFxuICAgICAgICBkZWZhdWx0VGl0bGUgPSBfdGhpcyRwcm9wcy5kZWZhdWx0VGl0bGUsXG4gICAgICAgIF90aGlzJHByb3BzJGRhbmdlcm91cyA9IF90aGlzJHByb3BzLmRhbmdlcm91c2x5RGlzYWJsZUdvb2dsZWJvdCxcbiAgICAgICAgZGFuZ2Vyb3VzbHlEaXNhYmxlR29vZ2xlYm90ID0gX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJGRhbmdlcm91cyxcbiAgICAgICAgX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzMiA9IF90aGlzJHByb3BzLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgsXG4gICAgICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXggPSBfdGhpcyRwcm9wcyRkYW5nZXJvdXMyID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJGRhbmdlcm91czIsXG4gICAgICAgIF90aGlzJHByb3BzJGRhbmdlcm91czMgPSBfdGhpcyRwcm9wcy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3cgPSBfdGhpcyRwcm9wcyRkYW5nZXJvdXMzID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJGRhbmdlcm91czMsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gX3RoaXMkcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCA9IF90aGlzJHByb3BzLmNhbm9uaWNhbCxcbiAgICAgICAgZmFjZWJvb2sgPSBfdGhpcyRwcm9wcy5mYWNlYm9vayxcbiAgICAgICAgb3BlbkdyYXBoID0gX3RoaXMkcHJvcHMub3BlbkdyYXBoLFxuICAgICAgICBhZGRpdGlvbmFsTWV0YVRhZ3MgPSBfdGhpcyRwcm9wcy5hZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICAgIHR3aXR0ZXIgPSBfdGhpcyRwcm9wcy50d2l0dGVyLFxuICAgICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoLFxuICAgICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQgPSBfdGhpcyRwcm9wcy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gX3RoaXMkcHJvcHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCxcbiAgICAgICAgbW9iaWxlQWx0ZXJuYXRlID0gX3RoaXMkcHJvcHMubW9iaWxlQWx0ZXJuYXRlLFxuICAgICAgICBsYW5ndWFnZUFsdGVybmF0ZXMgPSBfdGhpcyRwcm9wcy5sYW5ndWFnZUFsdGVybmF0ZXMsXG4gICAgICAgIGFkZGl0aW9uYWxMaW5rVGFncyA9IF90aGlzJHByb3BzLmFkZGl0aW9uYWxMaW5rVGFncztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBidWlsZFRhZ3Moe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGl0bGVUZW1wbGF0ZTogdGl0bGVUZW1wbGF0ZSxcbiAgICAgIGRlZmF1bHRUaXRsZTogZGVmYXVsdFRpdGxlLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleDogZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCxcbiAgICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93OiBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGNhbm9uaWNhbDogY2Fub25pY2FsLFxuICAgICAgZmFjZWJvb2s6IGZhY2Vib29rLFxuICAgICAgb3BlbkdyYXBoOiBvcGVuR3JhcGgsXG4gICAgICBhZGRpdGlvbmFsTWV0YVRhZ3M6IGFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICAgIHR3aXR0ZXI6IHR3aXR0ZXIsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aDogZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ6IGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCxcbiAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoOiBkZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCxcbiAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDogZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0LFxuICAgICAgbW9iaWxlQWx0ZXJuYXRlOiBtb2JpbGVBbHRlcm5hdGUsXG4gICAgICBsYW5ndWFnZUFsdGVybmF0ZXM6IGxhbmd1YWdlQWx0ZXJuYXRlcyxcbiAgICAgIGFkZGl0aW9uYWxMaW5rVGFnczogYWRkaXRpb25hbExpbmtUYWdzLFxuICAgICAgZGFuZ2Vyb3VzbHlEaXNhYmxlR29vZ2xlYm90OiBkYW5nZXJvdXNseURpc2FibGVHb29nbGVib3RcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIERlZmF1bHRTZW87XG59KENvbXBvbmVudCk7XG5cbnZhciBOZXh0U2VvID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE5leHRTZW8sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5leHRTZW8oKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5leHRTZW8ucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wcy50aXRsZSxcbiAgICAgICAgX3RoaXMkcHJvcHMkbm9pbmRleCA9IF90aGlzJHByb3BzLm5vaW5kZXgsXG4gICAgICAgIG5vaW5kZXggPSBfdGhpcyRwcm9wcyRub2luZGV4ID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJG5vaW5kZXgsXG4gICAgICAgIG5vZm9sbG93ID0gX3RoaXMkcHJvcHMubm9mb2xsb3csXG4gICAgICAgIHJvYm90c1Byb3BzID0gX3RoaXMkcHJvcHMucm9ib3RzUHJvcHMsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gX3RoaXMkcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCA9IF90aGlzJHByb3BzLmNhbm9uaWNhbCxcbiAgICAgICAgb3BlbkdyYXBoID0gX3RoaXMkcHJvcHMub3BlbkdyYXBoLFxuICAgICAgICBmYWNlYm9vayA9IF90aGlzJHByb3BzLmZhY2Vib29rLFxuICAgICAgICB0d2l0dGVyID0gX3RoaXMkcHJvcHMudHdpdHRlcixcbiAgICAgICAgYWRkaXRpb25hbE1ldGFUYWdzID0gX3RoaXMkcHJvcHMuYWRkaXRpb25hbE1ldGFUYWdzLFxuICAgICAgICB0aXRsZVRlbXBsYXRlID0gX3RoaXMkcHJvcHMudGl0bGVUZW1wbGF0ZSxcbiAgICAgICAgbW9iaWxlQWx0ZXJuYXRlID0gX3RoaXMkcHJvcHMubW9iaWxlQWx0ZXJuYXRlLFxuICAgICAgICBsYW5ndWFnZUFsdGVybmF0ZXMgPSBfdGhpcyRwcm9wcy5sYW5ndWFnZUFsdGVybmF0ZXMsXG4gICAgICAgIGFkZGl0aW9uYWxMaW5rVGFncyA9IF90aGlzJHByb3BzLmFkZGl0aW9uYWxMaW5rVGFncyxcbiAgICAgICAgZGlzYWJsZUdvb2dsZWJvdCA9IF90aGlzJHByb3BzLmRpc2FibGVHb29nbGVib3Q7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgYnVpbGRUYWdzKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG5vaW5kZXg6IG5vaW5kZXgsXG4gICAgICBub2ZvbGxvdzogbm9mb2xsb3csXG4gICAgICByb2JvdHNQcm9wczogcm9ib3RzUHJvcHMsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBjYW5vbmljYWw6IGNhbm9uaWNhbCxcbiAgICAgIGZhY2Vib29rOiBmYWNlYm9vayxcbiAgICAgIG9wZW5HcmFwaDogb3BlbkdyYXBoLFxuICAgICAgYWRkaXRpb25hbE1ldGFUYWdzOiBhZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICB0d2l0dGVyOiB0d2l0dGVyLFxuICAgICAgdGl0bGVUZW1wbGF0ZTogdGl0bGVUZW1wbGF0ZSxcbiAgICAgIG1vYmlsZUFsdGVybmF0ZTogbW9iaWxlQWx0ZXJuYXRlLFxuICAgICAgbGFuZ3VhZ2VBbHRlcm5hdGVzOiBsYW5ndWFnZUFsdGVybmF0ZXMsXG4gICAgICBhZGRpdGlvbmFsTGlua1RhZ3M6IGFkZGl0aW9uYWxMaW5rVGFncyxcbiAgICAgIGRpc2FibGVHb29nbGVib3Q6IGRpc2FibGVHb29nbGVib3RcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIE5leHRTZW87XG59KENvbXBvbmVudCk7XG5cbnZhciBtYXJrdXAgPSBmdW5jdGlvbiBtYXJrdXAoanNvbmxkKSB7XG4gIHJldHVybiB7XG4gICAgX19odG1sOiBqc29ubGRcbiAgfTtcbn07XG5cbnZhciBmb3JtYXRBdXRob3JOYW1lID0gZnVuY3Rpb24gZm9ybWF0QXV0aG9yTmFtZShhdXRob3JOYW1lKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGF1dGhvck5hbWUpID8gXCJbXCIgKyBhdXRob3JOYW1lLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBcIntcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCJ9XCI7XG4gIH0pICsgXCJdXCIgOiBcIntcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXFwibmFtZVxcXCI6IFxcXCJcIiArIGF1dGhvck5hbWUgKyBcIlxcXCJ9XCI7XG59O1xuXG52YXIgQXJ0aWNsZUpzb25MZCA9IGZ1bmN0aW9uIEFydGljbGVKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkYXRlUHVibGlzaGVkID0gX3JlZi5kYXRlUHVibGlzaGVkLFxuICAgICAgX3JlZiRkYXRlTW9kaWZpZWQgPSBfcmVmLmRhdGVNb2RpZmllZCxcbiAgICAgIGRhdGVNb2RpZmllZCA9IF9yZWYkZGF0ZU1vZGlmaWVkID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRkYXRlTW9kaWZpZWQsXG4gICAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgcHVibGlzaGVyTmFtZSA9IF9yZWYucHVibGlzaGVyTmFtZSxcbiAgICAgIHB1Ymxpc2hlckxvZ28gPSBfcmVmLnB1Ymxpc2hlckxvZ287XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQXJ0aWNsZVxcXCIsXFxuICAgIFxcXCJtYWluRW50aXR5T2ZQYWdlXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJXZWJQYWdlXFxcIixcXG4gICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJoZWFkbGluZVxcXCI6IFxcXCJcIiArIHRpdGxlICsgXCJcXFwiLFxcbiAgICBcXFwiaW1hZ2VcXFwiOiBbXFxuICAgICAgXCIgKyBpbWFnZXMubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIGltYWdlICsgXCJcXFwiXCI7XG4gIH0pICsgXCJcXG4gICAgIF0sXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImRhdGVNb2RpZmllZFxcXCI6IFxcXCJcIiArIChkYXRlTW9kaWZpZWQgfHwgZGF0ZVB1Ymxpc2hlZCkgKyBcIlxcXCIsXFxuICAgIFxcXCJhdXRob3JcXFwiOiBcIiArIGZvcm1hdEF1dGhvck5hbWUoYXV0aG9yTmFtZSkgKyBcIixcXG4gICAgXFxcInB1Ymxpc2hlclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlck5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcImxvZ29cXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW1hZ2VPYmplY3RcXFwiLFxcbiAgICAgICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlckxvZ28gKyBcIlxcXCJcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1hcnRpY2xlXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBCcmVhZENydW1iSnNvbkxkID0gZnVuY3Rpb24gQnJlYWRDcnVtYkpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBfcmVmJGl0ZW1MaXN0RWxlbWVudHMgPSBfcmVmLml0ZW1MaXN0RWxlbWVudHMsXG4gICAgICBpdGVtTGlzdEVsZW1lbnRzID0gX3JlZiRpdGVtTGlzdEVsZW1lbnRzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaXRlbUxpc3RFbGVtZW50cztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJCcmVhZGNydW1iTGlzdFxcXCIsXFxuICAgIFxcXCJpdGVtTGlzdEVsZW1lbnRcXFwiOiBbXFxuICAgICAgXCIgKyBpdGVtTGlzdEVsZW1lbnRzLm1hcChmdW5jdGlvbiAoaXRlbUxpc3RFbGVtZW50KSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkxpc3RJdGVtXFxcIixcXG4gICAgICAgIFxcXCJwb3NpdGlvblxcXCI6IFwiICsgaXRlbUxpc3RFbGVtZW50LnBvc2l0aW9uICsgXCIsXFxuICAgICAgICBcXFwiaXRlbVxcXCI6IHtcXG4gICAgICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIGl0ZW1MaXN0RWxlbWVudC5pdGVtICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGl0ZW1MaXN0RWxlbWVudC5uYW1lICsgXCJcXFwiXFxuICAgICAgICB9XFxuICAgICAgfVwiO1xuICB9KSArIFwiXFxuICAgICBdXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1icmVhZGNydW1iXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBidWlsZFF1ZXN0aW9ucyA9IGZ1bmN0aW9uIGJ1aWxkUXVlc3Rpb25zKG1haW5FbnRpdHkpIHtcbiAgcmV0dXJuIFwiXFxuICBcIiArIG1haW5FbnRpdHkubWFwKGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgIHJldHVybiBcIntcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUXVlc3Rpb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcXVlc3Rpb24ucXVlc3Rpb25OYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJhY2NlcHRlZEFuc3dlclxcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBbnN3ZXJcXFwiLFxcbiAgICAgICAgXFxcInRleHRcXFwiOiBcXFwiXCIgKyBxdWVzdGlvbi5hY2NlcHRlZEFuc3dlclRleHQgKyBcIlxcXCJcXG4gICAgICB9XFxuICB9XCI7XG4gIH0pO1xufTtcblxudmFyIEZBUVBhZ2VKc29uTGQgPSBmdW5jdGlvbiBGQVFQYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkbWFpbkVudGl0eSA9IF9yZWYubWFpbkVudGl0eSxcbiAgICAgIG1haW5FbnRpdHkgPSBfcmVmJG1haW5FbnRpdHkgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRtYWluRW50aXR5O1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnL1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJGQVFQYWdlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlcXFwiOiBbXCIgKyBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSArIFwiXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZmFxLXBhZ2VcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRCYXNlU2FsYXJ5ID0gZnVuY3Rpb24gYnVpbGRCYXNlU2FsYXJ5KGJhc2VTYWxhcnkpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYmFzZVNhbGFyeVxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk1vbmV0YXJ5QW1vdW50XFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeS5jdXJyZW5jeSA/IFwiXFxcImN1cnJlbmN5XFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS5jdXJyZW5jeSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJ2YWx1ZVxcXCI6IHtcXG4gICAgICBcIiArIChiYXNlU2FsYXJ5LnZhbHVlID8gQXJyYXkuaXNBcnJheShiYXNlU2FsYXJ5LnZhbHVlKSA/IFwiXFxcIm1pblZhbHVlXFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS52YWx1ZVswXSArIFwiXFxcIiwgXFxcIm1heFZhbHVlXFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS52YWx1ZVsxXSArIFwiXFxcIixcIiA6IFwiXFxcInZhbHVlXFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS52YWx1ZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAoYmFzZVNhbGFyeS51bml0VGV4dCA/IFwiXFxcInVuaXRUZXh0XFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS51bml0VGV4dCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlF1YW50aXRhdGl2ZVZhbHVlXFxcIlxcbiAgICB9XFxuICB9LFxcblwiO1xufTtcblxudmFyIEpvYlBvc3RpbmdKc29uTGQgPSBmdW5jdGlvbiBKb2JQb3N0aW5nSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIGJhc2VTYWxhcnkgPSBfcmVmLmJhc2VTYWxhcnksXG4gICAgICBkYXRlUG9zdGVkID0gX3JlZi5kYXRlUG9zdGVkLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgZW1wbG95bWVudFR5cGUgPSBfcmVmLmVtcGxveW1lbnRUeXBlLFxuICAgICAgaGlyaW5nT3JnYW5pemF0aW9uID0gX3JlZi5oaXJpbmdPcmdhbml6YXRpb24sXG4gICAgICBqb2JMb2NhdGlvbiA9IF9yZWYuam9iTG9jYXRpb24sXG4gICAgICBhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyA9IF9yZWYuYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMsXG4gICAgICBqb2JMb2NhdGlvblR5cGUgPSBfcmVmLmpvYkxvY2F0aW9uVHlwZSxcbiAgICAgIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIHZhbGlkVGhyb3VnaCA9IF9yZWYudmFsaWRUaHJvdWdoO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkpvYlBvc3RpbmdcXFwiLFxcbiAgICBcIiArIChiYXNlU2FsYXJ5ID8gYnVpbGRCYXNlU2FsYXJ5KGJhc2VTYWxhcnkpIDogJycpICsgXCJcXG4gICAgXFxcImRhdGVQb3N0ZWRcXFwiOiBcXFwiXCIgKyBkYXRlUG9zdGVkICsgXCJcXFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcXG4gICAgXCIgKyAoZW1wbG95bWVudFR5cGUgPyBcIlxcXCJlbXBsb3ltZW50VHlwZVxcXCI6IFxcXCJcIiArIGVtcGxveW1lbnRUeXBlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImhpcmluZ09yZ2FuaXphdGlvblxcXCIgOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIiA6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIiA6IFxcXCJcIiArIGhpcmluZ09yZ2FuaXphdGlvbi5uYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJzYW1lQXNcXFwiIDogXFxcIlwiICsgaGlyaW5nT3JnYW5pemF0aW9uLnNhbWVBcyArIFwiXFxcIlxcbiAgICAgIFwiICsgKGhpcmluZ09yZ2FuaXphdGlvbi5sb2dvID8gXCIsXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBoaXJpbmdPcmdhbml6YXRpb24ubG9nbyArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gICAgfSxcXG4gICAgXCIgKyAoam9iTG9jYXRpb24gPyBcIlxcXCJqb2JMb2NhdGlvblxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGxhY2VcXFwiLFxcbiAgICAgIFxcXCJhZGRyZXNzXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBvc3RhbEFkZHJlc3NcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NMb2NhbGl0eVxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NMb2NhbGl0eSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJhZGRyZXNzUmVnaW9uXFxcIjogXFxcIlwiICsgam9iTG9jYXRpb24uYWRkcmVzc1JlZ2lvbiArIFwiXFxcIixcXG4gICAgICAgIFxcXCJwb3N0YWxDb2RlXFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLnBvc3RhbENvZGUgKyBcIlxcXCIsXFxuICAgICAgICBcXFwic3RyZWV0QWRkcmVzc1xcXCIgOiBcXFwiXCIgKyBqb2JMb2NhdGlvbi5zdHJlZXRBZGRyZXNzICsgXCJcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NDb3VudHJ5XFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NDb3VudHJ5ICsgXCJcXFwiXFxuICAgICAgICAgIH1cXG4gICAgICB9LFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMgPyBcIiBcXFwiYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHNcXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQ291bnRyeVxcXCIsXFxuICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzICsgXCJcXFwiXFxuICAgIH0sXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChqb2JMb2NhdGlvblR5cGUgPyBcIlxcXCJqb2JMb2NhdGlvblR5cGVcXFwiOiBcXFwiXCIgKyBqb2JMb2NhdGlvblR5cGUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArICh2YWxpZFRocm91Z2ggPyBcIlxcXCJ2YWxpZFRocm91Z2hcXFwiOiBcXFwiXCIgKyB2YWxpZFRocm91Z2ggKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwidGl0bGVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtam9icG9zdGluZ1wiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgQmxvZ0pzb25MZCA9IGZ1bmN0aW9uIEJsb2dKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkYXRlUHVibGlzaGVkID0gX3JlZi5kYXRlUHVibGlzaGVkLFxuICAgICAgX3JlZiRkYXRlTW9kaWZpZWQgPSBfcmVmLmRhdGVNb2RpZmllZCxcbiAgICAgIGRhdGVNb2RpZmllZCA9IF9yZWYkZGF0ZU1vZGlmaWVkID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRkYXRlTW9kaWZpZWQsXG4gICAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkJsb2dcXFwiLFxcbiAgICBcXFwibWFpbkVudGl0eU9mUGFnZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiV2ViUGFnZVxcXCIsXFxuICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiaGVhZGxpbmVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIixcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KSArIFwiXFxuICAgICBdLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlTW9kaWZpZWRcXFwiOiBcXFwiXCIgKyAoZGF0ZU1vZGlmaWVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiYXV0aG9yXFxcIjogXCIgKyBmb3JtYXRBdXRob3JOYW1lKGF1dGhvck5hbWUpICsgXCIsXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1ibG9nXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBDb3Vyc2VKc29uTGQgPSBmdW5jdGlvbiBDb3Vyc2VKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgY291cnNlTmFtZSA9IF9yZWYuY291cnNlTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHByb3ZpZGVyTmFtZSA9IF9yZWYucHJvdmlkZXJOYW1lLFxuICAgICAgcHJvdmlkZXJVcmwgPSBfcmVmLnByb3ZpZGVyVXJsO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvdXJzZVxcXCIsXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgY291cnNlTmFtZSArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJwcm92aWRlclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHByb3ZpZGVyTmFtZSArIFwiXFxcIlwiICsgKHByb3ZpZGVyVXJsID8gXCIsXFxuICAgICAgXFxcInNhbWVBc1xcXCI6IFxcXCJcIiArIHByb3ZpZGVyVXJsICsgXCJcXFwiXCIgOiAnJykgKyBcIlxcbiAgICB9XFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1jb3Vyc2VcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIERhdGFzZXRKc29uTGQgPSBmdW5jdGlvbiBEYXRhc2V0SnNvbkxkKF9yZWYpIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBsaWNlbnNlID0gX3JlZi5saWNlbnNlO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkRhdGFzZXRcXFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIgKyAobGljZW5zZSA/IFwiLFxcbiAgICAgICAgXFxcImxpY2Vuc2VcXFwiOiBcXFwiXCIgKyBsaWNlbnNlICsgXCJcXFwiXCIgOiAnJykgKyBcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZGF0YXNldFwiXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5ID0gZnVuY3Rpb24gZm9ybWF0SWZBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBcIltcIiArIHZhbHVlLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgdmFsICsgXCJcXFwiXCI7XG4gIH0pICsgXCJdXCIgOiBcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCI7XG59O1xuXG52YXIgYnVpbGRBZGRyZXNzID0gKGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImFkZHJlc3NcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQb3N0YWxBZGRyZXNzXFxcIixcXG4gICAgXFxcInN0cmVldEFkZHJlc3NcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLnN0cmVldEFkZHJlc3MgKyBcIlxcXCIsXFxuICAgIFxcXCJhZGRyZXNzTG9jYWxpdHlcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NMb2NhbGl0eSArIFwiXFxcIixcXG4gICAgXCIgKyAoYWRkcmVzcy5hZGRyZXNzUmVnaW9uID8gXCJcXFwiYWRkcmVzc1JlZ2lvblxcXCI6IFxcXCJcIiArIGFkZHJlc3MuYWRkcmVzc1JlZ2lvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJwb3N0YWxDb2RlXFxcIjogXFxcIlwiICsgYWRkcmVzcy5wb3N0YWxDb2RlICsgXCJcXFwiLFxcbiAgICBcXFwiYWRkcmVzc0NvdW50cnlcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NDb3VudHJ5ICsgXCJcXFwiXFxuICB9LFxcblwiO1xufSk7XG5cbnZhciBidWlsZEFjdGlvbiA9IGZ1bmN0aW9uIGJ1aWxkQWN0aW9uKGFjdGlvbikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJcIiArIGFjdGlvbi5hY3Rpb25OYW1lICsgXCJcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJcIiArIGFjdGlvbi5hY3Rpb25UeXBlICsgXCJcXFwiLFxcbiAgICBcXFwidGFyZ2V0XFxcIjogXFxcIlwiICsgYWN0aW9uLnRhcmdldCArIFwiXFxcIlxcbiAgfVxcblwiO1xufTtcblxudmFyIGJ1aWxkQXJlYVNlcnZlZCA9IGZ1bmN0aW9uIGJ1aWxkQXJlYVNlcnZlZChhcmVhU2VydmVkKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImFyZWFTZXJ2ZWRcXFwiOiBbXFxuICAgIFwiICsgYXJlYVNlcnZlZC5tYXAoZnVuY3Rpb24gKGFyZWEpIHtcbiAgICByZXR1cm4gYnVpbGRHZW9DaXJjbGUoYXJlYSk7XG4gIH0pICsgXCJcXG4gIF1cXG5cIjtcbn07XG5cbnZhciBidWlsZEFnZ3JlZ2F0ZVJhdGluZyA9IGZ1bmN0aW9uIGJ1aWxkQWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhZ2dyZWdhdGVSYXRpbmdcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBZ2dyZWdhdGVSYXRpbmdcXFwiLFxcbiAgICBcXFwicmF0aW5nVmFsdWVcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nVmFsdWUgKyBcIlxcXCIsXFxuICAgIFxcXCJyYXRpbmdDb3VudFxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdDb3VudCArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZEdlbyA9IGZ1bmN0aW9uIGJ1aWxkR2VvKGdlbykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJnZW9cXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJHZW9Db29yZGluYXRlc1xcXCIsXFxuICAgIFxcXCJsYXRpdHVkZVxcXCI6IFxcXCJcIiArIGdlby5sYXRpdHVkZSArIFwiXFxcIixcXG4gICAgXFxcImxvbmdpdHVkZVxcXCI6IFxcXCJcIiArIGdlby5sb25naXR1ZGUgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRHZW9DaXJjbGUgPSBmdW5jdGlvbiBidWlsZEdlb0NpcmNsZShnZW9DaXJjbGUpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJHZW9DaXJjbGVcXFwiLFxcbiAgICBcXFwiZ2VvTWlkcG9pbnRcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkdlb0Nvb3JkaW5hdGVzXFxcIixcXG4gICAgICBcXFwibGF0aXR1ZGVcXFwiOiBcXFwiXCIgKyBnZW9DaXJjbGUuZ2VvTWlkcG9pbnQubGF0aXR1ZGUgKyBcIlxcXCIsXFxuICAgICAgXFxcImxvbmdpdHVkZVxcXCI6IFxcXCJcIiArIGdlb0NpcmNsZS5nZW9NaWRwb2ludC5sb25naXR1ZGUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcImdlb1JhZGl1c1xcXCI6IFxcXCJcIiArIGdlb0NpcmNsZS5nZW9SYWRpdXMgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZE1ha2VzT2ZmZXIgPSBmdW5jdGlvbiBidWlsZE1ha2VzT2ZmZXIobWFrZXNPZmZlcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJtYWtlc09mZmVyXFxcIjpbXFxuICAgIFwiICsgbWFrZXNPZmZlci5tYXAoZnVuY3Rpb24gKG9mZmVyKSB7XG4gICAgcmV0dXJuIGJ1aWxkT2ZmZXIob2ZmZXIpO1xuICB9KSArIFwiXFxuICBdXFxuXCI7XG59O1xuXG52YXIgYnVpbGRPZmZlciA9IGZ1bmN0aW9uIGJ1aWxkT2ZmZXIob2ZmZXIpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPZmZlclxcXCIsXFxuICAgIFwiICsgYnVpbGRQcmljZVNwZWNpZmljYXRpb24ob2ZmZXIucHJpY2VTcGVjaWZpY2F0aW9uKSArIFwiLFxcbiAgICBcIiArIGJ1aWxkSXRlbU9mZmVyZWQob2ZmZXIuaXRlbU9mZmVyZWQpICsgXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZE9wZW5pbmdIb3VycyA9IGZ1bmN0aW9uIGJ1aWxkT3BlbmluZ0hvdXJzKG9wZW5pbmdIb3Vycykge1xuICByZXR1cm4gXCJcXG4gIHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk9wZW5pbmdIb3Vyc1NwZWNpZmljYXRpb25cXFwiLFxcbiAgICBcIiArIChvcGVuaW5nSG91cnMuZGF5T2ZXZWVrID8gXCJcXFwiZGF5T2ZXZWVrXFxcIjogXCIgKyBmb3JtYXRJZkFycmF5KG9wZW5pbmdIb3Vycy5kYXlPZldlZWspICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwib3BlbnNcXFwiOiBcXFwiXCIgKyBvcGVuaW5nSG91cnMub3BlbnMgKyBcIlxcXCIsXFxuICAgIFwiICsgKG9wZW5pbmdIb3Vycy52YWxpZEZyb20gPyBcIlxcXCJ2YWxpZEZyb21cXFwiOiBcXFwiXCIgKyBvcGVuaW5nSG91cnMudmFsaWRGcm9tICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob3BlbmluZ0hvdXJzLnZhbGlkVGhyb3VnaCA/IFwiXFxcInZhbGlkVGhyb3VnaFxcXCI6IFxcXCJcIiArIG9wZW5pbmdIb3Vycy52YWxpZFRocm91Z2ggKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwiY2xvc2VzXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLmNsb3NlcyArIFwiXFxcIlxcbiAgfVxcblwiO1xufTtcblxudmFyIGJ1aWxkUHJpY2VTcGVjaWZpY2F0aW9uID0gZnVuY3Rpb24gYnVpbGRQcmljZVNwZWNpZmljYXRpb24ocHJpY2VTcGVjaWZpY2F0aW9uKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcInByaWNlU3BlY2lmaWNhdGlvblxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgcHJpY2VTcGVjaWZpY2F0aW9uLnR5cGUgKyBcIlxcXCIsXFxuICAgIFxcXCJwcmljZUN1cnJlbmN5XFxcIjogXFxcIlwiICsgcHJpY2VTcGVjaWZpY2F0aW9uLnByaWNlQ3VycmVuY3kgKyBcIlxcXCIsXFxuICAgIFxcXCJwcmljZVxcXCI6IFxcXCJcIiArIHByaWNlU3BlY2lmaWNhdGlvbi5wcmljZSArIFwiXFxcIlxcbiAgfVxcblwiO1xufTtcblxudmFyIGJ1aWxkUmF0aW5nID0gZnVuY3Rpb24gYnVpbGRSYXRpbmcocmF0aW5nKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUmF0aW5nXFxcIixcXG4gICAgXCIgKyAocmF0aW5nLmJlc3RSYXRpbmcgPyBcIlxcXCJiZXN0UmF0aW5nXFxcIjogXFxcIlwiICsgcmF0aW5nLmJlc3RSYXRpbmcgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChyYXRpbmcucmV2aWV3QXNwZWN0ID8gXCJcXFwicmV2aWV3QXNwZWN0XFxcIjogXFxcIlwiICsgcmF0aW5nLnJldmlld0FzcGVjdCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHJhdGluZy53b3JzdFJhdGluZyA/IFwiXFxcIndvcnN0UmF0aW5nXFxcIjogXFxcIlwiICsgcmF0aW5nLndvcnN0UmF0aW5nICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgcmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRSZXZpZXcgPSBmdW5jdGlvbiBidWlsZFJldmlldyhyZXZpZXdzKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcInJldmlld1xcXCI6IFtcXG4gICAgXCIgKyByZXZpZXdzLm1hcChmdW5jdGlvbiAocmV2aWV3KSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlJldmlld1xcXCIsXFxuICAgICAgICBcXFwiYXV0aG9yXFxcIjogXFxcIlwiICsgcmV2aWV3LmF1dGhvciArIFwiXFxcIixcXG4gICAgICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgcmV2aWV3LmRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgICAgICBcIiArIChyZXZpZXcubmFtZSA/IFwiXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyByZXZpZXcubmFtZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcXFwicmV2aWV3Qm9keVxcXCI6IFxcXCJcIiArIHJldmlldy5yZXZpZXdCb2R5ICsgXCJcXFwiLFxcbiAgICAgICAgXFxcInJldmlld1JhdGluZ1xcXCI6IFwiICsgYnVpbGRSYXRpbmcocmV2aWV3LnJldmlld1JhdGluZykgKyBcIlxcbiAgICAgIH1cXG4gICAgXCI7XG4gIH0pICsgXCJcXG4gIF0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRJdGVtT2ZmZXJlZCA9IGZ1bmN0aW9uIGJ1aWxkSXRlbU9mZmVyZWQoc2VydmljZSkge1xuICByZXR1cm4gXCJcXG4gIFxcXCJpdGVtT2ZmZXJlZFxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlNlcnZpY2VcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHNlcnZpY2UubmFtZSArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgc2VydmljZS5kZXNjcmlwdGlvbiArIFwiXFxcIlxcbiAgfVxcblwiO1xufTtcblxudmFyIExvY2FsQnVzaW5lc3NKc29uTGQgPSBmdW5jdGlvbiBMb2NhbEJ1c2luZXNzSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICB0ZWxlcGhvbmUgPSBfcmVmLnRlbGVwaG9uZSxcbiAgICAgIGFkZHJlc3MgPSBfcmVmLmFkZHJlc3MsXG4gICAgICBnZW8gPSBfcmVmLmdlbyxcbiAgICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgcmF0aW5nID0gX3JlZi5yYXRpbmcsXG4gICAgICByZXZpZXcgPSBfcmVmLnJldmlldyxcbiAgICAgIHByaWNlUmFuZ2UgPSBfcmVmLnByaWNlUmFuZ2UsXG4gICAgICBzZXJ2ZXNDdWlzaW5lID0gX3JlZi5zZXJ2ZXNDdWlzaW5lLFxuICAgICAgc2FtZUFzID0gX3JlZi5zYW1lQXMsXG4gICAgICBvcGVuaW5nSG91cnMgPSBfcmVmLm9wZW5pbmdIb3VycyxcbiAgICAgIGFjdGlvbiA9IF9yZWYuYWN0aW9uLFxuICAgICAgYXJlYVNlcnZlZCA9IF9yZWYuYXJlYVNlcnZlZCxcbiAgICAgIG1ha2VzT2ZmZXIgPSBfcmVmLm1ha2VzT2ZmZXI7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiXCIgKyB0eXBlICsgXCJcXFwiLFxcbiAgICBcIiArIChpZCA/IFwiXFxcIkBpZFxcXCI6IFxcXCJcIiArIGlkICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoZGVzY3JpcHRpb24gPyBcIlxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodGVsZXBob25lID8gXCJcXFwidGVsZXBob25lXFxcIjogXFxcIlwiICsgdGVsZXBob25lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyBidWlsZEFkZHJlc3MoYWRkcmVzcykgKyBcIlxcbiAgICBcIiArIChnZW8gPyBcIlwiICsgYnVpbGRHZW8oZ2VvKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKHJhdGluZyA/IFwiXCIgKyBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhyYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAocmV2aWV3ID8gXCJcIiArIGJ1aWxkUmV2aWV3KHJldmlldykgOiAnJykgKyBcIlxcbiAgICBcIiArIChhY3Rpb24gPyBidWlsZEFjdGlvbihhY3Rpb24pICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChhcmVhU2VydmVkID8gYnVpbGRBcmVhU2VydmVkKGFyZWFTZXJ2ZWQpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChtYWtlc09mZmVyID8gYnVpbGRNYWtlc09mZmVyKG1ha2VzT2ZmZXIpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChwcmljZVJhbmdlID8gXCJcXFwicHJpY2VSYW5nZVxcXCI6IFxcXCJcIiArIHByaWNlUmFuZ2UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChzZXJ2ZXNDdWlzaW5lID8gXCJcXFwic2VydmVzQ3Vpc2luZVxcXCI6XCIgKyBmb3JtYXRJZkFycmF5KHNlcnZlc0N1aXNpbmUpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChpbWFnZXMgPyBcIlxcXCJpbWFnZVxcXCI6XCIgKyBmb3JtYXRJZkFycmF5KGltYWdlcykgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHNhbWVBcyA/IFwiXFxcInNhbWVBc1xcXCI6IFtcIiArIHNhbWVBcy5tYXAoZnVuY3Rpb24gKHVybCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIHVybCArIFwiXFxcIlwiO1xuICB9KSArIFwiXSxcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9wZW5pbmdIb3VycyA/IFwiXFxcIm9wZW5pbmdIb3Vyc1NwZWNpZmljYXRpb25cXFwiOiBcIiArIChBcnJheS5pc0FycmF5KG9wZW5pbmdIb3VycykgPyBcIltcIiArIG9wZW5pbmdIb3Vycy5tYXAoZnVuY3Rpb24gKGhvdXJzKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBidWlsZE9wZW5pbmdIb3Vycyhob3Vycyk7XG4gIH0pICsgXCJdXCIgOiBidWlsZE9wZW5pbmdIb3VycyhvcGVuaW5nSG91cnMpKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1sb2NhbC1idXNpbmVzc1wiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgTG9nb0pzb25MZCA9IGZ1bmN0aW9uIExvZ29Kc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCIsXFxuICAgIFxcXCJsb2dvXFxcIjogXFxcIlwiICsgbG9nbyArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtbG9nb1wiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG4vLyBUT0RPOiBEb2NzIGZvciBvZmZlcnMgaXRlbUNvbmRpdGlvbiAmIGF2YWlsYWJpbGl0eVxuLy8gVE9ETzogU2VsbGVyIHR5cGUsIG1ha2UgZHluYW1pY1xudmFyIGJ1aWxkT2ZmZXJzID0gZnVuY3Rpb24gYnVpbGRPZmZlcnMob2ZmZXJzKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT2ZmZXJcXFwiLFxcbiAgICBcXFwicHJpY2VDdXJyZW5jeVxcXCI6IFxcXCJcIiArIG9mZmVycy5wcmljZUN1cnJlbmN5ICsgXCJcXFwiLFxcbiAgICBcIiArIChvZmZlcnMucHJpY2VWYWxpZFVudGlsID8gXCJcXFwicHJpY2VWYWxpZFVudGlsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnByaWNlVmFsaWRVbnRpbCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5pdGVtQ29uZGl0aW9uID8gXCJcXFwiaXRlbUNvbmRpdGlvblxcXCI6IFxcXCJcIiArIG9mZmVycy5pdGVtQ29uZGl0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzLmF2YWlsYWJpbGl0eSA/IFwiXFxcImF2YWlsYWJpbGl0eVxcXCI6IFxcXCJcIiArIG9mZmVycy5hdmFpbGFiaWxpdHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMudXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5zZWxsZXIgPyBcIlxcbiAgICAgIFxcXCJzZWxsZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBvZmZlcnMuc2VsbGVyLm5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXCIgOiAnJykgKyBcIlxcbiAgICBcXFwicHJpY2VcXFwiOiBcXFwiXCIgKyBvZmZlcnMucHJpY2UgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZEFnZ3JlZ2F0ZU9mZmVyID0gZnVuY3Rpb24gYnVpbGRBZ2dyZWdhdGVPZmZlcihvZmZlcikge1xuICByZXR1cm4gXCJcXG4gIHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkFnZ3JlZ2F0ZU9mZmVyXFxcIixcXG4gICAgXFxcInByaWNlQ3VycmVuY3lcXFwiOiBcXFwiXCIgKyBvZmZlci5wcmljZUN1cnJlbmN5ICsgXCJcXFwiLFxcbiAgICBcIiArIChvZmZlci5oaWdoUHJpY2UgPyBcIlxcXCJoaWdoUHJpY2VcXFwiOiBcXFwiXCIgKyBvZmZlci5oaWdoUHJpY2UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlci5vZmZlckNvdW50ID8gXCJcXFwib2ZmZXJDb3VudFxcXCI6IFxcXCJcIiArIG9mZmVyLm9mZmVyQ291bnQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlci5vZmZlcnMgPyBcIlxcXCJvZmZlcnNcXFwiOiBcIiArIChBcnJheS5pc0FycmF5KG9mZmVyLm9mZmVycykgPyBcIltcIiArIG9mZmVyLm9mZmVycy5tYXAoZnVuY3Rpb24gKG9mZmVyKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBidWlsZE9mZmVycyhvZmZlcik7XG4gIH0pICsgXCJdXCIgOiBidWlsZE9mZmVycyhvZmZlci5vZmZlcnMpKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImxvd1ByaWNlXFxcIjogXFxcIlwiICsgb2ZmZXIubG93UHJpY2UgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZEFnZ3JlZ2F0ZVJhdGluZyQxID0gZnVuY3Rpb24gYnVpbGRBZ2dyZWdhdGVSYXRpbmcoYWdncmVnYXRlUmF0aW5nKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImFnZ3JlZ2F0ZVJhdGluZ1xcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQWdncmVnYXRlUmF0aW5nXFxcIixcXG4gICAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcucmF0aW5nQ291bnQgPyBcIlxcXCJyYXRpbmdDb3VudFxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdDb3VudCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAoYWdncmVnYXRlUmF0aW5nLnJldmlld0NvdW50ID8gXCJcXFwicmV2aWV3Q291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmV2aWV3Q291bnQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZy5iZXN0UmF0aW5nID8gXCJcXFwiYmVzdFJhdGluZ1xcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5iZXN0UmF0aW5nICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICBcXFwicmF0aW5nVmFsdWVcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nVmFsdWUgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFJldmlld1JhdGluZyA9IGZ1bmN0aW9uIGJ1aWxkUmV2aWV3UmF0aW5nKHJhdGluZykge1xuICByZXR1cm4gcmF0aW5nID8gXCJcXFwicmV2aWV3UmF0aW5nXFxcIjoge1xcbiAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUmF0aW5nXFxcIixcXG4gICAgICAgICAgXCIgKyAocmF0aW5nLmJlc3RSYXRpbmcgPyBcIlxcXCJiZXN0UmF0aW5nXFxcIjogXFxcIlwiICsgcmF0aW5nLmJlc3RSYXRpbmcgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChyYXRpbmcud29yc3RSYXRpbmcgPyBcIlxcXCJ3b3JzdFJhdGluZ1xcXCI6IFxcXCJcIiArIHJhdGluZy53b3JzdFJhdGluZyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIHJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIlxcbiAgICAgICAgfVwiIDogJyc7XG59O1xudmFyIGJ1aWxkQXV0aG9yID0gZnVuY3Rpb24gYnVpbGRBdXRob3IoYXV0aG9yKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiXCIgKyBhdXRob3IudHlwZSArIFwiXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGF1dGhvci5uYW1lICsgXCJcXFwiXFxuICB9LFxcblwiO1xufTtcbnZhciBidWlsZFB1Ymxpc2hlciA9IGZ1bmN0aW9uIGJ1aWxkUHVibGlzaGVyKHB1Ymxpc2hlcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgcHVibGlzaGVyLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXIubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG52YXIgYnVpbGRSZXZpZXdzID0gZnVuY3Rpb24gYnVpbGRSZXZpZXdzKHJldmlld3MpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwicmV2aWV3XFxcIjogW1xcbiAgICBcIiArIHJldmlld3MubWFwKGZ1bmN0aW9uIChyZXZpZXcpIHtcbiAgICByZXR1cm4gXCJ7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUmV2aWV3XFxcIixcXG4gICAgICAgIFwiICsgKHJldmlldy5hdXRob3IgPyBidWlsZEF1dGhvcihyZXZpZXcuYXV0aG9yKSA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChyZXZpZXcucHVibGlzaGVyID8gYnVpbGRQdWJsaXNoZXIocmV2aWV3LnB1Ymxpc2hlcikgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAocmV2aWV3LmRhdGVQdWJsaXNoZWQgPyBcIlxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgcmV2aWV3LmRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAocmV2aWV3LnJldmlld0JvZHkgPyBcIlxcXCJyZXZpZXdCb2R5XFxcIjogXFxcIlwiICsgcmV2aWV3LnJldmlld0JvZHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAocmV2aWV3Lm5hbWUgPyBcIlxcXCJuYW1lXFxcIjogXFxcIlwiICsgcmV2aWV3Lm5hbWUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyBidWlsZFJldmlld1JhdGluZyhyZXZpZXcucmV2aWV3UmF0aW5nKSArIFwiXFxuICAgIH1cIjtcbiAgfSkgKyBcIlxcbiAgXSxcXG5cIjtcbn07XG5cbnZhciBidWlsZEJyYW5kID0gZnVuY3Rpb24gYnVpbGRCcmFuZChicmFuZCkge1xuICByZXR1cm4gXCJcXG4gIFxcXCJicmFuZFxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiVGhpbmdcXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYnJhbmQgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07XG5cbnZhciBQcm9kdWN0SnNvbkxkID0gZnVuY3Rpb24gUHJvZHVjdEpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBwcm9kdWN0TmFtZSA9IF9yZWYucHJvZHVjdE5hbWUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBza3UgPSBfcmVmLnNrdSxcbiAgICAgIGd0aW44ID0gX3JlZi5ndGluOCxcbiAgICAgIGd0aW4xMyA9IF9yZWYuZ3RpbjEzLFxuICAgICAgZ3RpbjE0ID0gX3JlZi5ndGluMTQsXG4gICAgICBtcG4gPSBfcmVmLm1wbixcbiAgICAgIGJyYW5kID0gX3JlZi5icmFuZCxcbiAgICAgIF9yZWYkcmV2aWV3cyA9IF9yZWYucmV2aWV3cyxcbiAgICAgIHJldmlld3MgPSBfcmVmJHJldmlld3MgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRyZXZpZXdzLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICBvZmZlcnMgPSBfcmVmLm9mZmVycyxcbiAgICAgIGFnZ3JlZ2F0ZU9mZmVyID0gX3JlZi5hZ2dyZWdhdGVPZmZlcixcbiAgICAgIGNvbG9yID0gX3JlZi5jb2xvcixcbiAgICAgIG1hbnVmYWN0dXJlck5hbWUgPSBfcmVmLm1hbnVmYWN0dXJlck5hbWUsXG4gICAgICBtYW51ZmFjdHVyZXJMb2dvID0gX3JlZi5tYW51ZmFjdHVyZXJMb2dvLFxuICAgICAgbWF0ZXJpYWwgPSBfcmVmLm1hdGVyaWFsLFxuICAgICAgc2xvZ2FuID0gX3JlZi5zbG9nYW4sXG4gICAgICBkaXNhbWJpZ3VhdGluZ0Rlc2NyaXB0aW9uID0gX3JlZi5kaXNhbWJpZ3VhdGluZ0Rlc2NyaXB0aW9uLFxuICAgICAgcHJvZHVjdGlvbkRhdGUgPSBfcmVmLnByb2R1Y3Rpb25EYXRlLFxuICAgICAgcmVsZWFzZURhdGUgPSBfcmVmLnJlbGVhc2VEYXRlLFxuICAgICAgcHVyY2hhc2VEYXRlID0gX3JlZi5wdXJjaGFzZURhdGUsXG4gICAgICBhd2FyZCA9IF9yZWYuYXdhcmQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlByb2R1Y3RcXFwiLFxcbiAgICBcIiArIChpbWFnZXMubGVuZ3RoID8gXCJcXFwiaW1hZ2VcXFwiOlwiICsgZm9ybWF0SWZBcnJheShpbWFnZXMpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChkZXNjcmlwdGlvbiA/IFwiXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChtcG4gPyBcIlxcXCJtcG5cXFwiOiBcXFwiXCIgKyBtcG4gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChza3UgPyBcIlxcXCJza3VcXFwiOiBcXFwiXCIgKyBza3UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluOCA/IFwiXFxcImd0aW44XFxcIjogXFxcIlwiICsgZ3RpbjggKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluMTMgPyBcIlxcXCJndGluMTNcXFwiOiBcXFwiXCIgKyBndGluMTMgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluMTQgPyBcIlxcXCJndGluMTRcXFwiOiBcXFwiXCIgKyBndGluMTQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChicmFuZCA/IGJ1aWxkQnJhbmQoYnJhbmQpIDogJycpICsgXCJcXG4gICAgXCIgKyAocmV2aWV3cy5sZW5ndGggPyBidWlsZFJldmlld3MocmV2aWV3cykgOiAnJykgKyBcIlxcbiAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcgPyBidWlsZEFnZ3JlZ2F0ZVJhdGluZyQxKGFnZ3JlZ2F0ZVJhdGluZykgOiAnJykgKyBcIlxcbiAgICBcIiArIChjb2xvciA/IFwiXFxcImNvbG9yXFxcIjogXFxcIlwiICsgY29sb3IgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChtYXRlcmlhbCA/IFwiXFxcIm1hdGVyaWFsXFxcIjogXFxcIlwiICsgbWF0ZXJpYWwgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChzbG9nYW4gPyBcIlxcXCJzbG9nYW5cXFwiOiBcXFwiXCIgKyBzbG9nYW4gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChkaXNhbWJpZ3VhdGluZ0Rlc2NyaXB0aW9uID8gXCJcXFwiZGlzYW1iaWd1YXRpbmdEZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRpc2FtYmlndWF0aW5nRGVzY3JpcHRpb24gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChwcm9kdWN0aW9uRGF0ZSA/IFwiXFxcInByb2R1Y3Rpb25EYXRlXFxcIjogXFxcIlwiICsgcHJvZHVjdGlvbkRhdGUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChyZWxlYXNlRGF0ZSA/IFwiXFxcInJlbGVhc2VEYXRlXFxcIjogXFxcIlwiICsgcmVsZWFzZURhdGUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChwdXJjaGFzZURhdGUgPyBcIlxcXCJwdXJjaGFzZURhdGVcXFwiOiBcXFwiXCIgKyBwdXJjaGFzZURhdGUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChhd2FyZCA/IFwiXFxcImF3YXJkXFxcIjogXFxcIlwiICsgYXdhcmQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChtYW51ZmFjdHVyZXJOYW1lID8gXCJcXG4gICAgICAgIFxcXCJtYW51ZmFjdHVyZXJcXFwiOiB7XFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICAgICAgICBcIiArIChtYW51ZmFjdHVyZXJMb2dvID8gXCJcXG4gICAgICAgICAgICAgIFxcXCJsb2dvXFxcIjoge1xcbiAgICAgICAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW1hZ2VPYmplY3RcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgbWFudWZhY3R1cmVyTG9nbyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgIFwiIDogJycpICsgXCJcXG4gICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBtYW51ZmFjdHVyZXJOYW1lICsgXCJcXFwiXFxuICAgICAgICB9LFxcbiAgICAgICAgXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMgPyBcIlxcXCJvZmZlcnNcXFwiOiBcIiArIChBcnJheS5pc0FycmF5KG9mZmVycykgPyBcIltcIiArIG9mZmVycy5tYXAoZnVuY3Rpb24gKG9mZmVyKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBidWlsZE9mZmVycyhvZmZlcik7XG4gIH0pICsgXCJdXCIgOiBidWlsZE9mZmVycyhvZmZlcnMpKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoYWdncmVnYXRlT2ZmZXIgJiYgIW9mZmVycyA/IFwiXFxcIm9mZmVyc1xcXCI6IFwiICsgYnVpbGRBZ2dyZWdhdGVPZmZlcihhZ2dyZWdhdGVPZmZlcikgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHJvZHVjdE5hbWUgKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXByb2R1Y3RcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIFNvY2lhbFByb2ZpbGVKc29uTGQgPSBmdW5jdGlvbiBTb2NpYWxQcm9maWxlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBfcmVmJHNhbWVBcyA9IF9yZWYuc2FtZUFzLFxuICAgICAgc2FtZUFzID0gX3JlZiRzYW1lQXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRzYW1lQXM7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiXCIgKyB0eXBlICsgXCJcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCIsXFxuICAgIFxcXCJzYW1lQXNcXFwiOiBbXFxuICAgICAgXCIgKyBzYW1lQXMubWFwKGZ1bmN0aW9uIChzb2NpYWxVcmwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBzb2NpYWxVcmwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIlxcbiAgICAgXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtc29jaWFsXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5JDEgPSBmdW5jdGlvbiBmb3JtYXRJZkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiW1wiICsgdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl1cIiA6IFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIjtcbn07XG5cbnZhciBidWlsZENvbnRhY3RQb2ludCA9IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkge1xuICByZXR1cm4gY29udGFjdFBvaW50Lm1hcChmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIHJldHVybiBcIntcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvbnRhY3RQb2ludFxcXCIsXFxuICAgIFxcXCJ0ZWxlcGhvbmVcXFwiOiBcXFwiXCIgKyBjb250YWN0LnRlbGVwaG9uZSArIFwiXFxcIixcXG4gICAgXFxcImNvbnRhY3RUeXBlXFxcIjogXFxcIlwiICsgY29udGFjdC5jb250YWN0VHlwZSArIFwiXFxcIlwiICsgKGNvbnRhY3QuYXJlYVNlcnZlZCA/IFwiLFxcbiAgICBcXFwiYXJlYVNlcnZlZFxcXCI6IFwiICsgZm9ybWF0SWZBcnJheSQxKGNvbnRhY3QuYXJlYVNlcnZlZCkgOiAnJykgKyAoY29udGFjdC5hdmFpbGFibGVMYW5ndWFnZSA/IFwiLFxcbiAgICBcXFwiYXZhaWxhYmxlTGFuZ3VhZ2VcXFwiOiBcIiArIGZvcm1hdElmQXJyYXkkMShjb250YWN0LmF2YWlsYWJsZUxhbmd1YWdlKSA6ICcnKSArIChjb250YWN0LmNvbnRhY3RPcHRpb24gPyBcIixcXG4gICAgXFxcImNvbnRhY3RPcHRpb25cXFwiOiBcXFwiXCIgKyBjb250YWN0LmNvbnRhY3RPcHRpb24gKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cIjtcbiAgfSk7XG59O1xuXG52YXIgQ29ycG9yYXRlQ29udGFjdEpzb25MZCA9IGZ1bmN0aW9uIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvLFxuICAgICAgY29udGFjdFBvaW50ID0gX3JlZi5jb250YWN0UG9pbnQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXCIgKyAobG9nbyA/IFwiXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImNvbnRhY3RQb2ludFxcXCI6IFtcIiArIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWNvcnBvcmF0ZS1jb250YWN0XCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBOZXdzQXJ0aWNsZUpzb25MZCA9IGZ1bmN0aW9uIE5ld3NBcnRpY2xlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgc2VjdGlvbiA9IF9yZWYuc2VjdGlvbixcbiAgICAgIGtleXdvcmRzID0gX3JlZi5rZXl3b3JkcyxcbiAgICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgICBfcmVmJGRhdGVDcmVhdGVkID0gX3JlZi5kYXRlQ3JlYXRlZCxcbiAgICAgIGRhdGVDcmVhdGVkID0gX3JlZiRkYXRlQ3JlYXRlZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZUNyZWF0ZWQsXG4gICAgICBfcmVmJGRhdGVNb2RpZmllZCA9IF9yZWYuZGF0ZU1vZGlmaWVkLFxuICAgICAgZGF0ZU1vZGlmaWVkID0gX3JlZiRkYXRlTW9kaWZpZWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGRhdGVNb2RpZmllZCxcbiAgICAgIGF1dGhvck5hbWUgPSBfcmVmLmF1dGhvck5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBib2R5ID0gX3JlZi5ib2R5LFxuICAgICAgcHVibGlzaGVyTmFtZSA9IF9yZWYucHVibGlzaGVyTmFtZSxcbiAgICAgIHB1Ymxpc2hlckxvZ28gPSBfcmVmLnB1Ymxpc2hlckxvZ287XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTmV3c0FydGljbGVcXFwiLFxcbiAgICBcXFwibWFpbkVudGl0eU9mUGFnZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiV2ViUGFnZVxcXCIsXFxuICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiaGVhZGxpbmVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIixcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KSArIFwiXFxuICAgICBdLFxcbiAgICBcXFwiYXJ0aWNsZVNlY3Rpb25cXFwiOlxcXCJcIiArIHNlY3Rpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJrZXl3b3Jkc1xcXCI6IFxcXCJcIiArIGtleXdvcmRzICsgXCJcXFwiLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIChkYXRlQ3JlYXRlZCB8fCBkYXRlUHVibGlzaGVkKSArIFwiXFxcIixcXG4gICAgXFxcImRhdGVNb2RpZmllZFxcXCI6IFxcXCJcIiArIChkYXRlTW9kaWZpZWQgfHwgZGF0ZVB1Ymxpc2hlZCkgKyBcIlxcXCIsXFxuICAgIFxcXCJhdXRob3JcXFwiOiBcIiArIGZvcm1hdEF1dGhvck5hbWUoYXV0aG9yTmFtZSkgKyBcIixcXG4gICAgXFxcInB1Ymxpc2hlclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlck5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcImxvZ29cXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW1hZ2VPYmplY3RcXFwiLFxcbiAgICAgICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlckxvZ28gKyBcIlxcXCJcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwiYXJ0aWNsZUJvZHlcXFwiOiBcXFwiXCIgKyBib2R5ICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1uZXdzYXJ0aWNsZVwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRMb2NhdGlvbiA9IGZ1bmN0aW9uIGJ1aWxkTG9jYXRpb24obG9jYXRpb24pIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwibG9jYXRpb25cXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQbGFjZVxcXCIsXFxuICAgIFwiICsgYnVpbGRBZGRyZXNzKGxvY2F0aW9uLmFkZHJlc3MpICsgXCJcXG4gICAgXCIgKyAobG9jYXRpb24uc2FtZUFzID8gXCJcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgbG9jYXRpb24uc2FtZUFzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGxvY2F0aW9uLm5hbWUgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRQZXJmb3JtZXIgPSBmdW5jdGlvbiBidWlsZFBlcmZvcm1lcihwZXJmb3JtZXIpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJmb3JtaW5nR3JvdXBcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHBlcmZvcm1lci5uYW1lICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgRXZlbnRKc29uTGQgPSBmdW5jdGlvbiBFdmVudEpzb25MZChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgc3RhcnREYXRlID0gX3JlZi5zdGFydERhdGUsXG4gICAgICBlbmREYXRlID0gX3JlZi5lbmREYXRlLFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIG9mZmVycyA9IF9yZWYub2ZmZXJzLFxuICAgICAgYWdncmVnYXRlT2ZmZXIgPSBfcmVmLmFnZ3JlZ2F0ZU9mZmVyLFxuICAgICAgcGVyZm9ybWVycyA9IF9yZWYucGVyZm9ybWVycztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJFdmVudFxcXCIsXFxuICAgIFxcXCJzdGFydERhdGVcXFwiOiBcXFwiXCIgKyBzdGFydERhdGUgKyBcIlxcXCIsXFxuICAgIFxcXCJlbmREYXRlXFxcIjogXFxcIlwiICsgZW5kRGF0ZSArIFwiXFxcIixcXG4gICAgXCIgKyBidWlsZExvY2F0aW9uKGxvY2F0aW9uKSArIFwiXFxuICAgIFwiICsgKGltYWdlcyA/IFwiXFxcImltYWdlXFxcIjpcIiArIGZvcm1hdElmQXJyYXkoaW1hZ2VzKSArIFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArICh1cmwgPyBcIlxcXCJ1cmxcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGRlc2NyaXB0aW9uID8gXCJcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzID8gXCJcXFwib2ZmZXJzXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvZmZlcnMpID8gXCJbXCIgKyBvZmZlcnMubWFwKGZ1bmN0aW9uIChvZmZlcikge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPZmZlcnMob2ZmZXIpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPZmZlcnMob2ZmZXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGFnZ3JlZ2F0ZU9mZmVyICYmICFvZmZlcnMgPyBcIlxcXCJvZmZlcnNcXFwiOiBcIiArIGJ1aWxkQWdncmVnYXRlT2ZmZXIoYWdncmVnYXRlT2ZmZXIpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChwZXJmb3JtZXJzID8gXCJcXFwicGVyZm9ybWVyXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShwZXJmb3JtZXJzKSA/IFwiW1wiICsgcGVyZm9ybWVycy5tYXAoZnVuY3Rpb24gKHBlcmZvcm1lcikge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRQZXJmb3JtZXIocGVyZm9ybWVyKTtcbiAgfSkgKyBcIl1cIiA6IGJ1aWxkUGVyZm9ybWVyKHBlcmZvcm1lcnMpKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1ldmVudFwiXG4gIH0pKTtcbn07XG5cbnZhciBidWlsZFZpZGVvID0gKGZ1bmN0aW9uICh2aWRlbywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIFwie1xcbiAgICAgIFwiICsgKGNvbnRleHQgPyBcIlxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJWaWRlb09iamVjdFxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyB2aWRlby5uYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIHZpZGVvLmRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICAgIFxcXCJ0aHVtYm5haWxVcmxcXFwiOiBbXFxuICAgICAgICAgIFwiICsgdmlkZW8udGh1bWJuYWlsVXJscy5tYXAoZnVuY3Rpb24gKHRodW1ibmFpbFVybCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIHRodW1ibmFpbFVybCArIFwiXFxcIlwiO1xuICB9KS5qb2luKCcsJykgKyBcIlxcbiAgICAgICAgXSxcXG4gICAgICAgIFwiICsgKHZpZGVvLmNvbnRlbnRVcmwgPyBcIlxcXCJjb250ZW50VXJsXFxcIjogXFxcIlwiICsgdmlkZW8uY29udGVudFVybCArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgIFwiICsgKHZpZGVvLmR1cmF0aW9uID8gXCJcXFwiZHVyYXRpb25cXFwiOiBcXFwiXCIgKyB2aWRlby5kdXJhdGlvbiArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgIFwiICsgKHZpZGVvLmVtYmVkVXJsID8gXCJcXFwiZW1iZWRVcmxcXFwiOiBcXFwiXCIgKyB2aWRlby5lbWJlZFVybCArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgIFwiICsgKHZpZGVvLmV4cGlyZXMgPyBcIlxcXCJleHBpcmVzXFxcIjogXFxcIlwiICsgdmlkZW8uZXhwaXJlcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCIgICAgICAgIFxcbiAgICAgICAgXCIgKyAodmlkZW8uaGFzUGFydCA/IFwiXFxcImhhc1BhcnRcXFwiOiBcIiArIChBcnJheS5pc0FycmF5KHZpZGVvLmhhc1BhcnQpID8gXCJbXCIgKyB2aWRlby5oYXNQYXJ0Lm1hcChmdW5jdGlvbiAoY2xpcCkge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRDbGlwKGNsaXApO1xuICB9KS5qb2luKCcsJykgKyBcIl1cIiA6IGJ1aWxkQ2xpcCh2aWRlby5oYXNQYXJ0KSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArICh2aWRlby53YXRjaENvdW50ID8gXCJcIiArIGJ1aWxkSW50ZXJhY3Rpb25TdGF0aXN0aWModmlkZW8ud2F0Y2hDb3VudCkgOiBcIlwiKSArIFwiICAgICAgICBcXG4gICAgICAgIFwiICsgKHZpZGVvLnB1YmxpY2F0aW9uID8gXCJcXFwicHVibGljYXRpb25cXFwiOiBcIiArIChBcnJheS5pc0FycmF5KHZpZGVvLnB1YmxpY2F0aW9uKSA/IFwiW1wiICsgdmlkZW8ucHVibGljYXRpb24ubWFwKGZ1bmN0aW9uIChicm9hZGNhc3RFdmVudCkge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRCcm9hZGNhc3RFdmVudChicm9hZGNhc3RFdmVudCk7XG4gIH0pLmpvaW4oJywnKSArIFwiXVwiIDogYnVpbGRCcm9hZGNhc3RFdmVudCh2aWRlby5wdWJsaWNhdGlvbikpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAodmlkZW8ucmVnaW9uc0FsbG93ZWQgPyBcIlxcXCJyZWdpb25zQWxsb3dlZFxcXCI6IFwiICsgZm9ybWF0SWZBcnJheSh2aWRlby5yZWdpb25zQWxsb3dlZCkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcXFwidXBsb2FkRGF0ZVxcXCI6IFxcXCJcIiArIHZpZGVvLnVwbG9hZERhdGUgKyBcIlxcXCJcXG4gIH1cIjtcbn0pO1xuXG52YXIgYnVpbGRDbGlwID0gZnVuY3Rpb24gYnVpbGRDbGlwKGNsaXApIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiZ2VvXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQ2xpcFxcXCIsXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgY2xpcC5uYW1lICsgXCJcXFwiLFxcbiAgICBcXFwic3RhcnRPZmZzZXRcXFwiOiBcIiArIGNsaXAuc3RhcnRPZmZzZXQgKyBcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIGNsaXAudXJsICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRJbnRlcmFjdGlvblN0YXRpc3RpYyA9IGZ1bmN0aW9uIGJ1aWxkSW50ZXJhY3Rpb25TdGF0aXN0aWMod2F0Y2hDb3VudCkge1xuICByZXR1cm4gXCJcXG4gIFxcXCJpbnRlcmFjdGlvblN0YXRpc3RpY1xcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkludGVyYWN0aW9uQ291bnRlclxcXCIsXFxuICAgIFxcXCJpbnRlcmFjdGlvblR5cGVcXFwiOiB7IFxcXCJAdHlwZVxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvV2F0Y2hBY3Rpb25cXFwiIH0sXFxuICAgIFxcXCJ1c2VySW50ZXJhY3Rpb25Db3VudFxcXCI6IFwiICsgd2F0Y2hDb3VudCArIFwiXFxuICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkQnJvYWRjYXN0RXZlbnQgPSBmdW5jdGlvbiBidWlsZEJyb2FkY2FzdEV2ZW50KHB1YmxpY2F0aW9uKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcInB1YmxpY2F0aW9uXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQnJvYWRjYXN0RXZlbnRcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHB1YmxpY2F0aW9uLm5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJpc0xpdmVCcm9hZGNhc3RcXFwiOiBcIiArIHB1YmxpY2F0aW9uLmlzTGl2ZUJyb2FkY2FzdCArIFwiLFxcbiAgICBcXFwic3RhcnREYXRlXFxcIjogXFxcIlwiICsgcHVibGljYXRpb24uc3RhcnREYXRlICsgXCJcXFwiLFxcbiAgICBcXFwiZW5kRGF0ZVxcXCI6IFxcXCJcIiArIHB1YmxpY2F0aW9uLmVuZERhdGUgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBWaWRlb0pzb25MZCA9IGZ1bmN0aW9uIFZpZGVvSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICB0aHVtYm5haWxVcmxzID0gX3JlZi50aHVtYm5haWxVcmxzLFxuICAgICAgdXBsb2FkRGF0ZSA9IF9yZWYudXBsb2FkRGF0ZSxcbiAgICAgIGNvbnRlbnRVcmwgPSBfcmVmLmNvbnRlbnRVcmwsXG4gICAgICBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb24sXG4gICAgICBlbWJlZFVybCA9IF9yZWYuZW1iZWRVcmwsXG4gICAgICBleHBpcmVzID0gX3JlZi5leHBpcmVzLFxuICAgICAgaGFzUGFydCA9IF9yZWYuaGFzUGFydCxcbiAgICAgIHdhdGNoQ291bnQgPSBfcmVmLndhdGNoQ291bnQsXG4gICAgICBwdWJsaWNhdGlvbiA9IF9yZWYucHVibGljYXRpb24sXG4gICAgICByZWdpb25zQWxsb3dlZCA9IF9yZWYucmVnaW9uc0FsbG93ZWQ7XG4gIHZhciBqc2xvbmxkID0gYnVpbGRWaWRlbyh7XG4gICAgbmFtZTogbmFtZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGh1bWJuYWlsVXJsczogdGh1bWJuYWlsVXJscyxcbiAgICB1cGxvYWREYXRlOiB1cGxvYWREYXRlLFxuICAgIGNvbnRlbnRVcmw6IGNvbnRlbnRVcmwsXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIGVtYmVkVXJsOiBlbWJlZFVybCxcbiAgICBleHBpcmVzOiBleHBpcmVzLFxuICAgIGhhc1BhcnQ6IGhhc1BhcnQsXG4gICAgd2F0Y2hDb3VudDogd2F0Y2hDb3VudCxcbiAgICBwdWJsaWNhdGlvbjogcHVibGljYXRpb24sXG4gICAgcmVnaW9uc0FsbG93ZWQ6IHJlZ2lvbnNBbGxvd2VkXG4gIH0sIHRydWUpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtdmlkZW9cIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkUXVlc3Rpb25zJDEgPSBmdW5jdGlvbiBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSB7XG4gIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJRdWVzdGlvblxcXCIsXFxuICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkubmFtZSArIFwiXFxcIixcXG4gICAgICAgIFwiICsgKG1haW5FbnRpdHkudGV4dCA/IFwiXFxcInRleHRcXFwiOiBcXFwiXCIgKyBtYWluRW50aXR5LnRleHQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXFxcImFuc3dlckNvdW50XFxcIjogXCIgKyBtYWluRW50aXR5LmFuc3dlckNvdW50ICsgXCIsXFxuICAgICAgICBcIiArIChtYWluRW50aXR5LnVwdm90ZWRDb3VudCA/IFwiXFxcInVwdm90ZUNvdW50XFxcIjogXCIgKyBtYWluRW50aXR5LnVwdm90ZWRDb3VudCArIFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgIFwiICsgKG1haW5FbnRpdHkuZGF0ZUNyZWF0ZWQgPyBcIlxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkuZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAobWFpbkVudGl0eS5hdXRob3IgPyBcIlxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkuYXV0aG9yLm5hbWUgKyBcIlxcXCJcXG4gICAgICAgIH0sXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAobWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlciA/IFwiXFxcImFjY2VwdGVkQW5zd2VyXFxcIjoge1xcbiAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQW5zd2VyXFxcIixcXG4gICAgICAgICAgXFxcInRleHRcXFwiOiBcXFwiXCIgKyBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnRleHQgKyBcIlxcXCIsXFxuICAgICAgICAgIFwiICsgKG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIuZGF0ZUNyZWF0ZWQgPyBcIlxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIuZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnVwdm90ZWRDb3VudCA/IFwiXFxcInVwdm90ZUNvdW50XFxcIjogXCIgKyBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnVwdm90ZWRDb3VudCArIFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgXCIgKyAobWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlci51cmwgPyBcIlxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFwiICsgKG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIuYXV0aG9yID8gXCJcXFwiYXV0aG9yXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlci5hdXRob3IubmFtZSArIFwiXFxcIlxcbiAgICAgICAgICB9XCIgOiAnJykgKyBcIlxcbiAgICAgICAgfSxcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChtYWluRW50aXR5LnN1Z2dlc3RlZEFuc3dlciA/IFwiXFxcInN1Z2dlc3RlZEFuc3dlclxcXCI6IFtcIiArIG1haW5FbnRpdHkuc3VnZ2VzdGVkQW5zd2VyLm1hcChmdW5jdGlvbiAoc3VnZ2VzdGVkKSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBbnN3ZXJcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ0ZXh0XFxcIjogXFxcIlwiICsgc3VnZ2VzdGVkLnRleHQgKyBcIlxcXCIsXFxuICAgICAgICAgICAgXCIgKyAoc3VnZ2VzdGVkLmRhdGVDcmVhdGVkID8gXCJcXFwiZGF0ZUNyZWF0ZWRcXFwiOiBcXFwiXCIgKyBzdWdnZXN0ZWQuZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICAgIFwiICsgKHN1Z2dlc3RlZC51cHZvdGVkQ291bnQgPyBcIlxcXCJ1cHZvdGVDb3VudFxcXCI6IFwiICsgc3VnZ2VzdGVkLnVwdm90ZWRDb3VudCArIFwiLFwiIDogXCJcXFwidXB2b3RlQ291bnRcXFwiOiBcIiArIDAgKyBcIixcIikgKyBcIlxcbiAgICAgICAgICAgIFwiICsgKHN1Z2dlc3RlZC51cmwgPyBcIlxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBzdWdnZXN0ZWQudXJsICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgIFwiICsgKHN1Z2dlc3RlZC5hdXRob3IgPyBcIlxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBzdWdnZXN0ZWQuYXV0aG9yLm5hbWUgKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIH1cIiA6ICcnKSArIFwiXFxuICAgICAgICB9XCI7XG4gIH0pICsgXCJcXG4gICAgXVwiIDogJycpICsgXCJcXG59XCI7XG59O1xuXG52YXIgUUFQYWdlSnNvbkxkID0gZnVuY3Rpb24gUUFQYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIG1haW5FbnRpdHkgPSBfcmVmLm1haW5FbnRpdHksXG4gICAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGU7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUUFQYWdlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlcXFwiOiBcIiArIGJ1aWxkUXVlc3Rpb25zJDEobWFpbkVudGl0eSkgKyBcIlxcbiAgICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1xYVwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uIGJ1aWxkSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24pIHtcbiAgcmV0dXJuIFwie1xcbiAgXFxcIkB0eXBlXFxcIjogXFxcIkhvd1RvU3RlcFxcXCIsXFxuICBcIiArIChpbnN0cnVjdGlvbi5uYW1lID8gXCJcXFwibmFtZVxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLm5hbWUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgXCIgKyAoaW5zdHJ1Y3Rpb24uaW1hZ2UgPyBcIlxcXCJpbWFnZVxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLmltYWdlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gIFwiICsgKGluc3RydWN0aW9uLnVybCA/IFwiXFxcInVybFxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLnVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICBcXFwidGV4dFxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLnRleHQgKyBcIlxcXCJcXG59XCI7XG59O1xuXG52YXIgUmVjaXBlSnNvbkxkID0gZnVuY3Rpb24gUmVjaXBlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIHByZXBUaW1lID0gX3JlZi5wcmVwVGltZSxcbiAgICAgIGNvb2tUaW1lID0gX3JlZi5jb29rVGltZSxcbiAgICAgIHRvdGFsVGltZSA9IF9yZWYudG90YWxUaW1lLFxuICAgICAga2V5d29yZHMgPSBfcmVmLmtleXdvcmRzLFxuICAgICAgeWllbGRzID0gX3JlZi55aWVsZHMsXG4gICAgICBjYXRlZ29yeSA9IF9yZWYuY2F0ZWdvcnksXG4gICAgICBjdWlzaW5lID0gX3JlZi5jdWlzaW5lLFxuICAgICAgY2Fsb3JpZXMgPSBfcmVmLmNhbG9yaWVzLFxuICAgICAgaW5ncmVkaWVudHMgPSBfcmVmLmluZ3JlZGllbnRzLFxuICAgICAgaW5zdHJ1Y3Rpb25zID0gX3JlZi5pbnN0cnVjdGlvbnMsXG4gICAgICBhZ2dyZWdhdGVSYXRpbmcgPSBfcmVmLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICAgIHZpZGVvID0gX3JlZi52aWRlbztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZy9cXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUmVjaXBlXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcXG4gICAgXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyBkYXRlUHVibGlzaGVkICsgXCJcXFwiLFxcbiAgICBcXFwiYXV0aG9yXFxcIjogXCIgKyBmb3JtYXRBdXRob3JOYW1lKGF1dGhvck5hbWUpICsgXCIsXFxuICAgIFxcXCJpbWFnZVxcXCI6IFtcXG4gICAgICBcIiArIGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgaW1hZ2UgKyBcIlxcXCJcIjtcbiAgfSkuam9pbignLCcpICsgXCJcXG4gICAgXSxcXG4gICAgXCIgKyAocHJlcFRpbWUgPyBcIlxcXCJwcmVwVGltZVxcXCI6IFxcXCJcIiArIHByZXBUaW1lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChjb29rVGltZSA/IFwiXFxcImNvb2tUaW1lXFxcIjogXFxcIlwiICsgY29va1RpbWUgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKHRvdGFsVGltZSA/IFwiXFxcInRvdGFsVGltZVxcXCI6IFxcXCJcIiArIHRvdGFsVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoa2V5d29yZHMgPyBcIlxcXCJrZXl3b3Jkc1xcXCI6IFxcXCJcIiArIGtleXdvcmRzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArICh5aWVsZHMgPyBcIlxcXCJyZWNpcGVZaWVsZFxcXCI6IFxcXCJcIiArIHlpZWxkcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoY2F0ZWdvcnkgPyBcIlxcXCJyZWNpcGVDYXRlZ29yeVxcXCI6IFxcXCJcIiArIGNhdGVnb3J5ICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChjdWlzaW5lID8gXCJcXFwicmVjaXBlQ3Vpc2luZVxcXCI6IFxcXCJcIiArIGN1aXNpbmUgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGNhbG9yaWVzID8gXCJcXFwibnV0cml0aW9uXFxcIjogeyBcXFwiQHR5cGVcXFwiOiBcXFwiTnV0cml0aW9uSW5mb3JtYXRpb25cXFwiLCBcXFwiY2Fsb3JpZXNcXFwiOiBcXFwiXCIgKyBjYWxvcmllcyArIFwiIGNhbG9yaWVzXFxcIiB9LFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcgPyBidWlsZEFnZ3JlZ2F0ZVJhdGluZyQxKGFnZ3JlZ2F0ZVJhdGluZykgOiAnJykgKyBcIlxcbiAgICBcIiArICh2aWRlbyA/IFwiXFxcInZpZGVvXFxcIjogXCIgKyBidWlsZFZpZGVvKHZpZGVvKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcInJlY2lwZUluZ3JlZGllbnRcXFwiOiBbXFxuICAgICAgXCIgKyBpbmdyZWRpZW50cy5tYXAoZnVuY3Rpb24gKGluZ3JlZGllbnQpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbmdyZWRpZW50ICsgXCJcXFwiXCI7XG4gIH0pLmpvaW4oJywnKSArIFwiXFxuICAgIF0sXFxuICAgIFxcXCJyZWNpcGVJbnN0cnVjdGlvbnNcXFwiOiBbXFxuICAgICAgXCIgKyBpbnN0cnVjdGlvbnMubWFwKGJ1aWxkSW5zdHJ1Y3Rpb24pLmpvaW4oJywnKSArIFwiXFxuICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXJlY2lwZVwiXG4gIH0pKTtcbn07XG5cbnZhciBWaWRlb0dhbWVKc29uTGQgPSBmdW5jdGlvbiBWaWRlb0dhbWVKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgaW1hZ2UgPSBfcmVmLmltYWdlLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgbGFuZ3VhZ2VOYW1lID0gX3JlZi5sYW5ndWFnZU5hbWUsXG4gICAgICB0cmFuc2xhdG9yTmFtZSA9IF9yZWYudHJhbnNsYXRvck5hbWUsXG4gICAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICBhcHBsaWNhdGlvbkNhdGVnb3J5ID0gX3JlZi5hcHBsaWNhdGlvbkNhdGVnb3J5LFxuICAgICAgcGxhdGZvcm1OYW1lID0gX3JlZi5wbGF0Zm9ybU5hbWUsXG4gICAgICBvcGVyYXRpbmdTeXN0ZW1OYW1lID0gX3JlZi5vcGVyYXRpbmdTeXN0ZW1OYW1lLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIGtleXdvcmRzID0gX3JlZi5rZXl3b3JkcyxcbiAgICAgIHByb2R1Y2VyTmFtZSA9IF9yZWYucHJvZHVjZXJOYW1lLFxuICAgICAgcHJvZHVjZXJVcmwgPSBfcmVmLnByb2R1Y2VyVXJsLFxuICAgICAgcHJvdmlkZXJOYW1lID0gX3JlZi5wcm92aWRlck5hbWUsXG4gICAgICBwcm92aWRlclVybCA9IF9yZWYucHJvdmlkZXJVcmwsXG4gICAgICBwdWJsaXNoZXJOYW1lID0gX3JlZi5wdWJsaXNoZXJOYW1lLFxuICAgICAgb2ZmZXJzID0gX3JlZi5vZmZlcnMsXG4gICAgICBnZW5yZU5hbWUgPSBfcmVmLmdlbnJlTmFtZSxcbiAgICAgIHBsYXlNb2RlID0gX3JlZi5wbGF5TW9kZSxcbiAgICAgIHByb2Nlc3NvclJlcXVpcmVtZW50cyA9IF9yZWYucHJvY2Vzc29yUmVxdWlyZW1lbnRzLFxuICAgICAgbWVtb3J5UmVxdWlyZW1lbnRzID0gX3JlZi5tZW1vcnlSZXF1aXJlbWVudHMsXG4gICAgICBzdG9yYWdlUmVxdWlyZW1lbnRzID0gX3JlZi5zdG9yYWdlUmVxdWlyZW1lbnRzLFxuICAgICAgdHJhaWxlciA9IF9yZWYudHJhaWxlcixcbiAgICAgIF9yZWYkcmV2aWV3cyA9IF9yZWYucmV2aWV3cyxcbiAgICAgIHJldmlld3MgPSBfcmVmJHJldmlld3MgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRyZXZpZXdzO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnL1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJWaWRlb0dhbWVcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsXFxuICAgIFwiICsgKGRlc2NyaXB0aW9uID8gXCJcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZyA/IGJ1aWxkQWdncmVnYXRlUmF0aW5nJDEoYWdncmVnYXRlUmF0aW5nKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKGRhdGVQdWJsaXNoZWQgPyBcIlxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHVybCA/IFwiXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHRyYWlsZXIgPyBcIlxcXCJ0cmFpbGVyXFxcIjogXCIgKyBidWlsZFZpZGVvKHRyYWlsZXIpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChyZXZpZXdzLmxlbmd0aCA/IGJ1aWxkUmV2aWV3cyhyZXZpZXdzKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKGtleXdvcmRzID8gXCJcXFwia2V5d29yZHNcXFwiOiBcXFwiXCIgKyBrZXl3b3JkcyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHByb2Nlc3NvclJlcXVpcmVtZW50cyA/IFwiXFxcInByb2Nlc3NvclJlcXVpcmVtZW50c1xcXCI6IFxcXCJcIiArIHByb2Nlc3NvclJlcXVpcmVtZW50cyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG1lbW9yeVJlcXVpcmVtZW50cyA/IFwiXFxcIm1lbW9yeVJlcXVpcmVtZW50c1xcXCI6IFxcXCJcIiArIG1lbW9yeVJlcXVpcmVtZW50cyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHN0b3JhZ2VSZXF1aXJlbWVudHMgPyBcIlxcXCJzdG9yYWdlUmVxdWlyZW1lbnRzXFxcIjogXFxcIlwiICsgc3RvcmFnZVJlcXVpcmVtZW50cyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHBsYXlNb2RlID8gXCJcXFwicGxheU1vZGVcXFwiOiBcXFwiXCIgKyBwbGF5TW9kZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGFwcGxpY2F0aW9uQ2F0ZWdvcnkgPyBcIlxcXCJhcHBsaWNhdGlvbkNhdGVnb3J5XFxcIjogXFxcIlwiICsgYXBwbGljYXRpb25DYXRlZ29yeSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9wZXJhdGluZ1N5c3RlbU5hbWUgPyBcIlxcXCJvcGVyYXRpbmdTeXN0ZW1cXFwiOiBcIiArIChBcnJheS5pc0FycmF5KG9wZXJhdGluZ1N5c3RlbU5hbWUpID8gZm9ybWF0SWZBcnJheShvcGVyYXRpbmdTeXN0ZW1OYW1lKSA6IFwiXFxcIlwiICsgb3BlcmF0aW5nU3lzdGVtTmFtZSArIFwiXFxcIlwiKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAocGxhdGZvcm1OYW1lID8gXCJcXFwiZ2FtZVBsYXRmb3JtXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShwbGF0Zm9ybU5hbWUpID8gZm9ybWF0SWZBcnJheShwbGF0Zm9ybU5hbWUpIDogXCJcXFwiXCIgKyBwbGF0Zm9ybU5hbWUgKyBcIlxcXCJcIikgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHRyYW5zbGF0b3JOYW1lID8gXCJcXFwidHJhbnNsYXRvclxcXCI6IFwiICsgKEFycmF5LmlzQXJyYXkodHJhbnNsYXRvck5hbWUpID8gZm9ybWF0SWZBcnJheSh0cmFuc2xhdG9yTmFtZSkgOiBcIlxcXCJcIiArIHRyYW5zbGF0b3JOYW1lICsgXCJcXFwiXCIpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChsYW5ndWFnZU5hbWUgPyBcIlxcXCJpbkxhbmd1YWdlXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShsYW5ndWFnZU5hbWUpID8gZm9ybWF0SWZBcnJheShsYW5ndWFnZU5hbWUpIDogXCJcXFwiXCIgKyBsYW5ndWFnZU5hbWUgKyBcIlxcXCJcIikgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGdlbnJlTmFtZSA/IFwiXFxcImdlbnJlXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShnZW5yZU5hbWUpID8gZm9ybWF0SWZBcnJheShnZW5yZU5hbWUpIDogXCJcXFwiXCIgKyBnZW5yZU5hbWUgKyBcIlxcXCJcIikgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHB1Ymxpc2hlck5hbWUgPyBcIlxcXCJwdWJsaXNoZXJcXFwiOiBcIiArIChBcnJheS5pc0FycmF5KHB1Ymxpc2hlck5hbWUpID8gZm9ybWF0SWZBcnJheShwdWJsaXNoZXJOYW1lKSA6IFwiXFxcIlwiICsgcHVibGlzaGVyTmFtZSArIFwiXFxcIlwiKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoaW1hZ2UgPyBcIlxcbiAgICAgICAgXFxcImltYWdlXFxcIjoge1xcbiAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW1hZ2VPYmplY3RcXFwiLFxcbiAgICAgICAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgaW1hZ2UgKyBcIlxcXCJcXG4gICAgICAgIH0sXFxuICAgICAgICBcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGF1dGhvck5hbWUgPyBcIlxcbiAgICAgICAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXV0aG9yTmFtZSArIFwiXFxcIlxcbiAgICAgICAgfSxcXG4gICAgICAgIFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAocHJvdmlkZXJOYW1lID8gXCJcXG4gICAgICAgIFxcXCJwcm92aWRlclxcXCI6IHtcXG4gICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgICAgIFwiICsgKHByb3ZpZGVyVXJsID8gXCJcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgcHJvdmlkZXJVcmwgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHByb3ZpZGVyTmFtZSArIFwiXFxcIlxcbiAgICAgICAgfSxcXG4gICAgICAgIFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAocHJvZHVjZXJOYW1lID8gXCJcXG4gICAgICAgIFxcXCJwcm9kdWNlclxcXCI6IHtcXG4gICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgICAgIFwiICsgKHByb2R1Y2VyVXJsID8gXCJcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgcHJvZHVjZXJVcmwgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHByb2R1Y2VyTmFtZSArIFwiXFxcIlxcbiAgICAgICAgfSxcXG4gICAgICAgIFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzID8gXCJcXFwib2ZmZXJzXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvZmZlcnMpID8gXCJbXCIgKyBvZmZlcnMubWFwKGZ1bmN0aW9uIChvZmZlcikge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPZmZlcnMob2ZmZXIpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPZmZlcnMob2ZmZXJzKSkgOiAnJykgKyBcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtdmlkZW8tZ2FtZVwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgQ2Fyb3VzZWxKc29uTGQgPSBmdW5jdGlvbiBDYXJvdXNlbEpzb25MZChfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YTtcbiAgdmFyIGl0ZW1MaXN0RWxlbWVudCA9IFtdO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgaXRlbUxpc3RFbGVtZW50ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJMaXN0SXRlbVxcXCIsXFxuICAgICAgICBcXFwicG9zaXRpb25cXFwiOiBcXFwiXCIgKyAoaW5kZXggKyAxKSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBpdGVtLnVybCArIFwiXFxcIlxcbiAgICAgIH1cIjtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjb3Vyc2UnOlxuICAgICAgaXRlbUxpc3RFbGVtZW50ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJMaXN0SXRlbVxcXCIsXFxuICAgICAgICBcXFwicG9zaXRpb25cXFwiOiBcXFwiXCIgKyAoaW5kZXggKyAxKSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJpdGVtXFxcIjoge1xcbiAgICAgICAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvdXJzZVxcXCIsXFxuICAgICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBpdGVtLnVybCArIFwiXFxcIixcXG4gICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtLmNvdXJzZU5hbWUgKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGl0ZW0uZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJwcm92aWRlclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGl0ZW0ucHJvdmlkZXJOYW1lICsgXCJcXFwiXCIgKyAoaXRlbS5wcm92aWRlclVybCA/IFwiLFxcbiAgICAgICAgICAgICAgICBcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgaXRlbS5wcm92aWRlclVybCArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gICAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVwiO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21vdmllJzpcbiAgICAgIGl0ZW1MaXN0RWxlbWVudCA9IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gXCJ7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTGlzdEl0ZW1cXFwiLFxcbiAgICAgICAgXFxcInBvc2l0aW9uXFxcIjogXFxcIlwiICsgKGluZGV4ICsgMSkgKyBcIlxcXCIsXFxuICAgICAgICBcXFwiaXRlbVxcXCI6IHtcXG4gICAgICAgICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJNb3ZpZVxcXCIsXFxuICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgaXRlbS5uYW1lICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgaXRlbS51cmwgKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJpbWFnZVxcXCI6IFxcXCJcIiArIGl0ZW0uaW1hZ2UgKyBcIlxcXCIsXFxuICAgICAgICAgIFwiICsgKGl0ZW0uZGF0ZUNyZWF0ZWQgPyBcIlxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIGl0ZW0uZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgICAgICAgIFwiICsgKGl0ZW0uZGlyZWN0b3IgPyBcIlxcXCJkaXJlY3RvclxcXCI6IFwiICsgKEFycmF5LmlzQXJyYXkoaXRlbS5kaXJlY3RvcikgPyBcIltcIiArIGl0ZW0uZGlyZWN0b3IubWFwKGZ1bmN0aW9uIChkaXJlY3Rvcikge1xuICAgICAgICAgIHJldHVybiBcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBkaXJlY3Rvci5uYW1lICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiO1xuICAgICAgICB9KS5qb2luKCcsJykgKyBcIl1cIiA6IFwie1xcbiAgICAgICAgICAgICAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtLmRpcmVjdG9yLm5hbWUgKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIH1cIikgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLnJldmlldyA/IFwiLFxcbiAgICAgICAgICAgICAgXFxcInJldmlld1xcXCI6IHtcXG4gICAgICAgICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlJldmlld1xcXCIsXFxuICAgICAgICAgICAgICAgIFwiICsgKGl0ZW0ucmV2aWV3LmF1dGhvciA/IGJ1aWxkQXV0aG9yKGl0ZW0ucmV2aWV3LmF1dGhvcikgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIiArIChpdGVtLnJldmlldy5wdWJsaXNoZXIgPyBidWlsZFB1Ymxpc2hlcihpdGVtLnJldmlldy5wdWJsaXNoZXIpIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyAoaXRlbS5yZXZpZXcuZGF0ZVB1Ymxpc2hlZCA/IFwiXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyBpdGVtLnJldmlldy5kYXRlUHVibGlzaGVkICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyAoaXRlbS5yZXZpZXcucmV2aWV3Qm9keSA/IFwiXFxcInJldmlld0JvZHlcXFwiOiBcXFwiXCIgKyBpdGVtLnJldmlldy5yZXZpZXdCb2R5ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyAoaXRlbS5yZXZpZXcubmFtZSA/IFwiXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtLnJldmlldy5uYW1lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBidWlsZFJldmlld1JhdGluZyhpdGVtLnJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gICAgICAgICAgICB9XCIgOiAnJykgKyBcIlxcbiAgICAgICAgfVxcbiAgICAgIH1cIjtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWNpcGUnOlxuICAgICAgaXRlbUxpc3RFbGVtZW50ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBfaXRlbSRpbWFnZXM7XG5cbiAgICAgICAgcmV0dXJuIFwie1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkxpc3RJdGVtXFxcIixcXG4gICAgICAgIFxcXCJwb3NpdGlvblxcXCI6IFxcXCJcIiArIChpbmRleCArIDEpICsgXCJcXFwiLFxcbiAgICAgICAgXFxcIml0ZW1cXFwiOiB7XFxuICAgICAgICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlJlY2lwZVxcXCIsXFxuICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgaXRlbS5uYW1lICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwidXJsXFxcIiA6IFxcXCJcIiArIGl0ZW0udXJsICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBpdGVtLmRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGl0ZW0uZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgICAgICAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGl0ZW0uYXV0aG9yTmFtZSArIFwiXFxcIlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaW1hZ2VcXFwiOiBbXFxuICAgICAgICAgICAgXCIgKyAoKF9pdGVtJGltYWdlcyA9IGl0ZW0uaW1hZ2VzKSA9PSBudWxsID8gdm9pZCAwIDogX2l0ZW0kaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICAgICAgICB9KS5qb2luKCcsJykpICsgXCJcXG4gICAgICAgICAgXSxcXG4gICAgICAgICAgXCIgKyAoaXRlbS5wcmVwVGltZSA/IFwiXFxcInByZXBUaW1lXFxcIjogXFxcIlwiICsgaXRlbS5wcmVwVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS5jb29rVGltZSA/IFwiXFxcImNvb2tUaW1lXFxcIjogXFxcIlwiICsgaXRlbS5jb29rVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS50b3RhbFRpbWUgPyBcIlxcXCJ0b3RhbFRpbWVcXFwiOiBcXFwiXCIgKyBpdGVtLnRvdGFsVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS5rZXl3b3JkcyA/IFwiXFxcImtleXdvcmRzXFxcIjogXFxcIlwiICsgaXRlbS5rZXl3b3JkcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS55aWVsZHMgPyBcIlxcXCJyZWNpcGVZaWVsZFxcXCI6IFxcXCJcIiArIGl0ZW0ueWllbGRzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLmNhdGVnb3J5ID8gXCJcXFwicmVjaXBlQ2F0ZWdvcnlcXFwiOiBcXFwiXCIgKyBpdGVtLmNhdGVnb3J5ICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLmN1aXNpbmUgPyBcIlxcXCJyZWNpcGVDdWlzaW5lXFxcIjogXFxcIlwiICsgaXRlbS5jdWlzaW5lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLmNhbG9yaWVzID8gXCJcXFwibnV0cml0aW9uXFxcIjogeyBcXFwiQHR5cGVcXFwiOiBcXFwiTnV0cml0aW9uSW5mb3JtYXRpb25cXFwiLCBcXFwiY2Fsb3JpZXNcXFwiOiBcXFwiXCIgKyBpdGVtLmNhbG9yaWVzICsgXCIgY2Fsb3JpZXNcXFwiIH0sXCIgOiBcIlwiKSArIFwiXFxuICAgICAgICAgIFwiICsgKGl0ZW0uYWdncmVnYXRlUmF0aW5nID8gYnVpbGRBZ2dyZWdhdGVSYXRpbmckMShpdGVtLmFnZ3JlZ2F0ZVJhdGluZykgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLnZpZGVvID8gXCJcXFwidmlkZW9cXFwiOiBcIiArIGJ1aWxkVmlkZW8oaXRlbS52aWRlbykgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFxcXCJyZWNpcGVJbmdyZWRpZW50XFxcIjogW1xcbiAgICAgICAgICAgIFwiICsgaXRlbS5pbmdyZWRpZW50cy5tYXAoZnVuY3Rpb24gKGluZ3JlZGllbnQpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBpbmdyZWRpZW50ICsgXCJcXFwiXCI7XG4gICAgICAgIH0pLmpvaW4oJywnKSArIFwiXFxuICAgICAgICAgIF0sXFxuICAgICAgICAgIFxcXCJyZWNpcGVJbnN0cnVjdGlvbnNcXFwiOiBbXFxuICAgICAgICAgICAgXCIgKyBpdGVtLmluc3RydWN0aW9ucy5tYXAoYnVpbGRJbnN0cnVjdGlvbikuam9pbignLCcpICsgXCJcXG4gICAgICAgICAgXVxcbiAgICAgIH1cXG4gICAgICB9XCI7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGpzb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkl0ZW1MaXN0XFxcIixcXG4gICAgXFxcIml0ZW1MaXN0RWxlbWVudFxcXCI6IFtcIiArIGl0ZW1MaXN0RWxlbWVudC5qb2luKCcsJykgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc29ubGQpLFxuICAgIGtleTogXCJqc29ubGQtY291cnNlXCJcbiAgfSkpO1xufTtcblxudmFyIFNpdGVMaW5rc1NlYXJjaEJveEpzb25MZCA9IGZ1bmN0aW9uIFNpdGVMaW5rc1NlYXJjaEJveEpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIF9yZWYkcG90ZW50aWFsQWN0aW9ucyA9IF9yZWYucG90ZW50aWFsQWN0aW9ucyxcbiAgICAgIHBvdGVudGlhbEFjdGlvbnMgPSBfcmVmJHBvdGVudGlhbEFjdGlvbnMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRwb3RlbnRpYWxBY3Rpb25zO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIldlYlNpdGVcXFwiLFxcbiAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFxcbiAgICBcXFwicG90ZW50aWFsQWN0aW9uXFxcIjogW1xcbiAgICAgIFwiICsgcG90ZW50aWFsQWN0aW9ucy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgICAgcXVlcnlJbnB1dCA9IF9yZWYyLnF1ZXJ5SW5wdXQ7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlNlYXJjaEFjdGlvblxcXCIsXFxuICAgICAgICBcXFwidGFyZ2V0XFxcIjogXFxcIlwiICsgdGFyZ2V0ICsgXCI9e1wiICsgcXVlcnlJbnB1dCArIFwifVxcXCIsXFxuICAgICAgICBcXFwicXVlcnktaW5wdXRcXFwiOiBcXFwicmVxdWlyZWQgbmFtZT1cIiArIHF1ZXJ5SW5wdXQgKyBcIlxcXCJcXG4gICAgICB9XCI7XG4gIH0pICsgXCJcXG4gICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXNpdGVMaW5rc1NlYXJjaEJveFwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRSZXZpZXckMSA9IGZ1bmN0aW9uIGJ1aWxkUmV2aWV3KHJldmlldykge1xuICByZXR1cm4gXCJcXG4gICAgXFxcInJldmlld1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSZXZpZXdcXFwiLFxcbiAgICAgICAgXCIgKyAocmV2aWV3LmF1dGhvciA/IGJ1aWxkQXV0aG9yKHJldmlldy5hdXRob3IpIDogJycpICsgXCJcXG4gICAgICAgIFwiICsgKHJldmlldy5wdWJsaXNoZXIgPyBidWlsZFB1Ymxpc2hlcihyZXZpZXcucHVibGlzaGVyKSA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChyZXZpZXcuZGF0ZVB1Ymxpc2hlZCA/IFwiXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyByZXZpZXcuZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChyZXZpZXcucmV2aWV3Qm9keSA/IFwiXFxcInJldmlld0JvZHlcXFwiOiBcXFwiXCIgKyByZXZpZXcucmV2aWV3Qm9keSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChyZXZpZXcubmFtZSA/IFwiXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyByZXZpZXcubmFtZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIGJ1aWxkUmV2aWV3UmF0aW5nKHJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gICAgICB9LFxcbiAgXCI7XG59O1xuXG52YXIgU29mdHdhcmVBcHBKc29uTGQgPSBmdW5jdGlvbiBTb2Z0d2FyZUFwcEpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgYXBwbGljYXRpb25DYXRlZ29yeSA9IF9yZWYuYXBwbGljYXRpb25DYXRlZ29yeSxcbiAgICAgIG9wZXJhdGluZ1N5c3RlbSA9IF9yZWYub3BlcmF0aW5nU3lzdGVtLFxuICAgICAgcHJpY2VDdXJyZW5jeSA9IF9yZWYucHJpY2VDdXJyZW5jeSxcbiAgICAgIHByaWNlID0gX3JlZi5wcmljZSxcbiAgICAgIGFnZ3JlZ2F0ZVJhdGluZyA9IF9yZWYuYWdncmVnYXRlUmF0aW5nLFxuICAgICAgcmV2aWV3ID0gX3JlZi5yZXZpZXc7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiU29mdHdhcmVBcHBsaWNhdGlvblxcXCIsXFxuICAgIFxcXCJvZmZlcnNcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9mZmVyXFxcIixcXG4gICAgICBcXFwicHJpY2VDdXJyZW5jeVxcXCI6IFxcXCJcIiArIHByaWNlQ3VycmVuY3kgKyBcIlxcXCIsXFxuICAgICAgXFxcInByaWNlXFxcIjogXFxcIlwiICsgcHJpY2UgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXCIgKyAoYXBwbGljYXRpb25DYXRlZ29yeSA/IFwiXFxcImFwcGxpY2F0aW9uQ2F0ZWdvcnlcXFwiOiBcXFwiXCIgKyBhcHBsaWNhdGlvbkNhdGVnb3J5ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob3BlcmF0aW5nU3lzdGVtID8gXCJcXFwib3BlcmF0aW5nU3lzdGVtXFxcIjogXFxcIlwiICsgb3BlcmF0aW5nU3lzdGVtICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoYWdncmVnYXRlUmF0aW5nID8gYnVpbGRBZ2dyZWdhdGVSYXRpbmckMShhZ2dyZWdhdGVSYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAocmV2aWV3ID8gYnVpbGRSZXZpZXckMShyZXZpZXcpIDogJycpICsgXCJcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1zb2Z0d2FyZUFwcFwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgQ29sbGVjdGlvblBhZ2VKc29uTGQgPSBmdW5jdGlvbiBDb2xsZWN0aW9uUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgX3JlZiRoYXNQYXJ0ID0gX3JlZi5oYXNQYXJ0LFxuICAgICAgaGFzUGFydCA9IF9yZWYkaGFzUGFydCA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGhhc1BhcnQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQ29sbGVjdGlvblBhZ2VcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJoYXNQYXJ0XFxcIjogW1xcbiAgICAgIFwiICsgaGFzUGFydC5tYXAoZnVuY3Rpb24gKGNyZWF0aXZlV29yaykge1xuICAgIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJDcmVhdGl2ZVdvcmtcXFwiLFxcbiAgICAgICAgXFxcImF1dGhvclxcXCI6IFxcXCJcIiArIGNyZWF0aXZlV29yay5hdXRob3IgKyBcIlxcXCIsXFxuICAgICAgICBcXFwiYWJvdXRcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuYWJvdXQgKyBcIlxcXCIsXFxuICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGNyZWF0aXZlV29yay5uYW1lICsgXCJcXFwiLFxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLmF1ZGllbmNlID8gXCJcXFwiYXVkaWVuY2VcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuYXVkaWVuY2UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLmtleXdvcmRzID8gXCJcXFwia2V5d29yZHNcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsua2V5d29yZHMgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLnRodW1ibmFpbFVybCA/IFwiXFxcInRodW1ibmFpbFVybFxcXCI6IFxcXCJcIiArIGNyZWF0aXZlV29yay50aHVtYm5haWxVcmwgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLmltYWdlID8gXCJcXFwiaW1hZ2VcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuaW1hZ2UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIlxcbiAgICAgIH1cIjtcbiAgfSkgKyBcIlxcbiAgICAgXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtY29sbGVjdGlvbi1wYWdlXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBidWlsZEJyZWFkY3J1bWIgPSBmdW5jdGlvbiBidWlsZEJyZWFkY3J1bWIoaXRlbUxpc3RFbGVtZW50cykge1xuICByZXR1cm4gXCJ7XFxuICBcXFwiQHR5cGVcXFwiOiBcXFwiQnJlYWRjcnVtYkxpc3RcXFwiLFxcbiAgXFxcIml0ZW1MaXN0RWxlbWVudFxcXCI6IFwiICsgYnVpbGRCcmVhZGNydW1iTGlzdChpdGVtTGlzdEVsZW1lbnRzKSArIFwiXFxufVwiO1xufTtcblxudmFyIGJ1aWxkQnJlYWRjcnVtYkxpc3QgPSBmdW5jdGlvbiBidWlsZEJyZWFkY3J1bWJMaXN0KGl0ZW1MaXN0RWxlbWVudHMpIHtcbiAgcmV0dXJuIFwiW1xcbiAgXCIgKyBpdGVtTGlzdEVsZW1lbnRzLm1hcChmdW5jdGlvbiAoaXRlbUxpc3RFbGVtZW50KSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTGlzdEl0ZW1cXFwiLFxcbiAgICBcXFwicG9zaXRpb25cXFwiOiBcIiArIGl0ZW1MaXN0RWxlbWVudC5wb3NpdGlvbiArIFwiLFxcbiAgICBcXFwiaXRlbVxcXCI6IHtcXG4gICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgaXRlbUxpc3RFbGVtZW50Lml0ZW0gKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtTGlzdEVsZW1lbnQubmFtZSArIFwiXFxcIlxcbiAgICB9XFxuICB9XCI7XG4gIH0pICsgXCJcXG5dXCI7XG59O1xuXG52YXIgUHJvZmlsZVBhZ2VKc29uTGQgPSBmdW5jdGlvbiBQcm9maWxlUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBicmVhZGNydW1iID0gX3JlZi5icmVhZGNydW1iLFxuICAgICAgbGFzdFJldmlld2VkID0gX3JlZi5sYXN0UmV2aWV3ZWQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUHJvZmlsZVBhZ2VcXFwiLFxcbiAgICBcIiArIChsYXN0UmV2aWV3ZWQgPyBcIlxcXCJsYXN0UmV2aWV3ZWRcXFwiOiBcXFwiXCIgKyBsYXN0UmV2aWV3ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwiYnJlYWRjcnVtYlxcXCI6IFwiICsgKHR5cGVvZiBicmVhZGNydW1iID09PSAnc3RyaW5nJyA/IFwiXFxcIlwiICsgYnJlYWRjcnVtYiArIFwiXFxcIlwiIDogYnVpbGRCcmVhZGNydW1iKGJyZWFkY3J1bWIpKSArIFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1wcm9maWxlLXBhZ2VcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxuZXhwb3J0IHsgQXJ0aWNsZUpzb25MZCwgQmxvZ0pzb25MZCwgQnJlYWRDcnVtYkpzb25MZCBhcyBCcmVhZGNydW1iSnNvbkxkLCBDYXJvdXNlbEpzb25MZCwgQ29sbGVjdGlvblBhZ2VKc29uTGQsIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQsIENvdXJzZUpzb25MZCwgRGF0YXNldEpzb25MZCwgRGVmYXVsdFNlbywgRXZlbnRKc29uTGQsIEZBUVBhZ2VKc29uTGQsIEpvYlBvc3RpbmdKc29uTGQsIExvY2FsQnVzaW5lc3NKc29uTGQsIExvZ29Kc29uTGQsIE5ld3NBcnRpY2xlSnNvbkxkLCBOZXh0U2VvLCBQcm9kdWN0SnNvbkxkLCBQcm9maWxlUGFnZUpzb25MZCwgUUFQYWdlSnNvbkxkIGFzIFFBUGFnZUpzb25sZCwgUmVjaXBlSnNvbkxkLCBTaXRlTGlua3NTZWFyY2hCb3hKc29uTGQsIFNvY2lhbFByb2ZpbGVKc29uTGQsIFNvZnR3YXJlQXBwSnNvbkxkLCBWaWRlb0dhbWVKc29uTGQsIFZpZGVvSnNvbkxkIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vbnByb2dyZXNzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vbnByb2dyZXNzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vbnByb2dyZXNzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFMSgpIHtcbiAgICBsZXQgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAgICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAgICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG59KCk7XG5jb25zdCBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQxKCkge1xuICAgIGNvbnN0IG1lbW8gPSB7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICAgICAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gICAgfTtcbn0oKTtcbmNvbnN0IHN0eWxlc0luRG9tID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gICAgY29uc3QgaWRDb3VudE1hcCA9IHtcbiAgICB9O1xuICAgIGNvbnN0IGlkZW50aWZpZXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgY29uc3QgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICAgICAgY29uc3QgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gaWQgKyAnICcgKyBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICAgICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IG5vbmNlID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICAgIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi8gY29uc3QgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dDEoKSB7XG4gICAgY29uc3QgdGV4dFN0b3JlID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gICAgfTtcbn0oKTtcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICAgIGNvbnN0IGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gJ0BtZWRpYSAnICsgb2JqLm1lZGlhICsgJyB7JyArIG9iai5jc3MgKyAnfScgOiBvYmouY3NzO1xuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcbiAgICAgICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgICBsZXQgY3NzID0gb2JqLmNzcztcbiAgICBjb25zdCBtZWRpYSA9IG9iai5tZWRpYTtcbiAgICBjb25zdCBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICAgIGlmIChtZWRpYSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLyc7XG4gICAgfVxuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZShzdHlsZS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbn1cbmxldCBzaW5nbGV0b24gPSBudWxsO1xubGV0IHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGxldCB1cGRhdGU7XG4gICAgbGV0IHJlbW92ZTtcbiAgICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICAgICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgICAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuICAgICAgICByZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZShvYmopO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICAgICAgaWYgKG5ld09iaikge1xuICAgICAgICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIH07XG4gICAgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gICAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuICAgIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gICAgfVxuICAgIGxpc3QgPSBsaXN0IHx8IFtdO1xuICAgIGxldCBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgICBmb3IobGV0IGkxID0gMDsgaTEgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpMSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaTFdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmIChzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gICAgfTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWtlIGNsaWNrcyBwYXNzLXRocm91Z2ggKi9cXHJcXG4jbnByb2dyZXNzIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbnByb2dyZXNzIC5iYXIge1xcclxcbiAgYmFja2dyb3VuZDogIzAwYmNlYTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDEwMzE7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cXHJcXG4jbnByb2dyZXNzIC5wZWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXJlbSAjMjlkLCAwIDAgMC41cmVtICMyOWQ7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtICMyOWQsIDAgMCAwLjVyZW0gIzI5ZDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuXFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC0wLjRyZW0pO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTAuNHJlbSk7XFxyXFxufVxcclxcblxcclxcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcHVibGljL25wcm9ncmVzcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGtEQUEwQztVQUExQywwQ0FBMEM7RUFDMUMsVUFBVTs7RUFFVix1REFBdUQ7RUFFdkQsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjtBQUNBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXFxyXFxuI25wcm9ncmVzcyB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI25wcm9ncmVzcyAuYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMGJjZWE7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxMDMxO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXFxyXFxuI25wcm9ncmVzcyAucGVnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtICMyOWQsIDAgMCAwLjVyZW0gIzI5ZDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuXFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC0wLjRyZW0pO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC0wLjRyZW0pO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTAuNHJlbSk7XFxyXFxufVxcclxcblxcclxcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2Vycm9yJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvaGVhZCcpXG4iLCIvKiBOUHJvZ3Jlc3MsIChjKSAyMDEzLCAyMDE0IFJpY28gU3RhLiBDcnV6IC0gaHR0cDovL3JpY29zdGFjcnV6LmNvbS9ucHJvZ3Jlc3NcbiAqIEBsaWNlbnNlIE1JVCAqL1xuXG47KGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuTlByb2dyZXNzID0gZmFjdG9yeSgpO1xuICB9XG5cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xuICB2YXIgTlByb2dyZXNzID0ge307XG5cbiAgTlByb2dyZXNzLnZlcnNpb24gPSAnMC4yLjAnO1xuXG4gIHZhciBTZXR0aW5ncyA9IE5Qcm9ncmVzcy5zZXR0aW5ncyA9IHtcbiAgICBtaW5pbXVtOiAwLjA4LFxuICAgIGVhc2luZzogJ2Vhc2UnLFxuICAgIHBvc2l0aW9uVXNpbmc6ICcnLFxuICAgIHNwZWVkOiAyMDAsXG4gICAgdHJpY2tsZTogdHJ1ZSxcbiAgICB0cmlja2xlUmF0ZTogMC4wMixcbiAgICB0cmlja2xlU3BlZWQ6IDgwMCxcbiAgICBzaG93U3Bpbm5lcjogdHJ1ZSxcbiAgICBiYXJTZWxlY3RvcjogJ1tyb2xlPVwiYmFyXCJdJyxcbiAgICBzcGlubmVyU2VsZWN0b3I6ICdbcm9sZT1cInNwaW5uZXJcIl0nLFxuICAgIHBhcmVudDogJ2JvZHknLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImJhclwiIHJvbGU9XCJiYXJcIj48ZGl2IGNsYXNzPVwicGVnXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cInNwaW5uZXJcIiByb2xlPVwic3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJzcGlubmVyLWljb25cIj48L2Rpdj48L2Rpdj4nXG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoe1xuICAgKiAgICAgICBtaW5pbXVtOiAwLjFcbiAgICogICAgIH0pO1xuICAgKi9cbiAgTlByb2dyZXNzLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIga2V5LCB2YWx1ZTtcbiAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkgU2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMYXN0IG51bWJlci5cbiAgICovXG5cbiAgTlByb2dyZXNzLnN0YXR1cyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByb2dyZXNzIGJhciBzdGF0dXMsIHdoZXJlIGBuYCBpcyBhIG51bWJlciBmcm9tIGAwLjBgIHRvIGAxLjBgLlxuICAgKlxuICAgKiAgICAgTlByb2dyZXNzLnNldCgwLjQpO1xuICAgKiAgICAgTlByb2dyZXNzLnNldCgxLjApO1xuICAgKi9cblxuICBOUHJvZ3Jlc3Muc2V0ID0gZnVuY3Rpb24obikge1xuICAgIHZhciBzdGFydGVkID0gTlByb2dyZXNzLmlzU3RhcnRlZCgpO1xuXG4gICAgbiA9IGNsYW1wKG4sIFNldHRpbmdzLm1pbmltdW0sIDEpO1xuICAgIE5Qcm9ncmVzcy5zdGF0dXMgPSAobiA9PT0gMSA/IG51bGwgOiBuKTtcblxuICAgIHZhciBwcm9ncmVzcyA9IE5Qcm9ncmVzcy5yZW5kZXIoIXN0YXJ0ZWQpLFxuICAgICAgICBiYXIgICAgICA9IHByb2dyZXNzLnF1ZXJ5U2VsZWN0b3IoU2V0dGluZ3MuYmFyU2VsZWN0b3IpLFxuICAgICAgICBzcGVlZCAgICA9IFNldHRpbmdzLnNwZWVkLFxuICAgICAgICBlYXNlICAgICA9IFNldHRpbmdzLmVhc2luZztcblxuICAgIHByb2dyZXNzLm9mZnNldFdpZHRoOyAvKiBSZXBhaW50ICovXG5cbiAgICBxdWV1ZShmdW5jdGlvbihuZXh0KSB7XG4gICAgICAvLyBTZXQgcG9zaXRpb25Vc2luZyBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNldFxuICAgICAgaWYgKFNldHRpbmdzLnBvc2l0aW9uVXNpbmcgPT09ICcnKSBTZXR0aW5ncy5wb3NpdGlvblVzaW5nID0gTlByb2dyZXNzLmdldFBvc2l0aW9uaW5nQ1NTKCk7XG5cbiAgICAgIC8vIEFkZCB0cmFuc2l0aW9uXG4gICAgICBjc3MoYmFyLCBiYXJQb3NpdGlvbkNTUyhuLCBzcGVlZCwgZWFzZSkpO1xuXG4gICAgICBpZiAobiA9PT0gMSkge1xuICAgICAgICAvLyBGYWRlIG91dFxuICAgICAgICBjc3MocHJvZ3Jlc3MsIHsgXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnLCBcbiAgICAgICAgICBvcGFjaXR5OiAxIFxuICAgICAgICB9KTtcbiAgICAgICAgcHJvZ3Jlc3Mub2Zmc2V0V2lkdGg7IC8qIFJlcGFpbnQgKi9cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNzcyhwcm9ncmVzcywgeyBcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgJyArIHNwZWVkICsgJ21zIGxpbmVhcicsIFxuICAgICAgICAgICAgb3BhY2l0eTogMCBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgTlByb2dyZXNzLnJlbW92ZSgpO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0sIHNwZWVkKTtcbiAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChuZXh0LCBzcGVlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBOUHJvZ3Jlc3MuaXNTdGFydGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBOUHJvZ3Jlc3Muc3RhdHVzID09PSAnbnVtYmVyJztcbiAgfTtcblxuICAvKipcbiAgICogU2hvd3MgdGhlIHByb2dyZXNzIGJhci5cbiAgICogVGhpcyBpcyB0aGUgc2FtZSBhcyBzZXR0aW5nIHRoZSBzdGF0dXMgdG8gMCUsIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgZ28gYmFja3dhcmRzLlxuICAgKlxuICAgKiAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAqXG4gICAqL1xuICBOUHJvZ3Jlc3Muc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIU5Qcm9ncmVzcy5zdGF0dXMpIE5Qcm9ncmVzcy5zZXQoMCk7XG5cbiAgICB2YXIgd29yayA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFOUHJvZ3Jlc3Muc3RhdHVzKSByZXR1cm47XG4gICAgICAgIE5Qcm9ncmVzcy50cmlja2xlKCk7XG4gICAgICAgIHdvcmsoKTtcbiAgICAgIH0sIFNldHRpbmdzLnRyaWNrbGVTcGVlZCk7XG4gICAgfTtcblxuICAgIGlmIChTZXR0aW5ncy50cmlja2xlKSB3b3JrKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSGlkZXMgdGhlIHByb2dyZXNzIGJhci5cbiAgICogVGhpcyBpcyB0aGUgKnNvcnQgb2YqIHRoZSBzYW1lIGFzIHNldHRpbmcgdGhlIHN0YXR1cyB0byAxMDAlLCB3aXRoIHRoZVxuICAgKiBkaWZmZXJlbmNlIGJlaW5nIGBkb25lKClgIG1ha2VzIHNvbWUgcGxhY2VibyBlZmZlY3Qgb2Ygc29tZSByZWFsaXN0aWMgbW90aW9uLlxuICAgKlxuICAgKiAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICpcbiAgICogSWYgYHRydWVgIGlzIHBhc3NlZCwgaXQgd2lsbCBzaG93IHRoZSBwcm9ncmVzcyBiYXIgZXZlbiBpZiBpdHMgaGlkZGVuLlxuICAgKlxuICAgKiAgICAgTlByb2dyZXNzLmRvbmUodHJ1ZSk7XG4gICAqL1xuXG4gIE5Qcm9ncmVzcy5kb25lID0gZnVuY3Rpb24oZm9yY2UpIHtcbiAgICBpZiAoIWZvcmNlICYmICFOUHJvZ3Jlc3Muc3RhdHVzKSByZXR1cm4gdGhpcztcblxuICAgIHJldHVybiBOUHJvZ3Jlc3MuaW5jKDAuMyArIDAuNSAqIE1hdGgucmFuZG9tKCkpLnNldCgxKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5jcmVtZW50cyBieSBhIHJhbmRvbSBhbW91bnQuXG4gICAqL1xuXG4gIE5Qcm9ncmVzcy5pbmMgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICB2YXIgbiA9IE5Qcm9ncmVzcy5zdGF0dXM7XG5cbiAgICBpZiAoIW4pIHtcbiAgICAgIHJldHVybiBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBhbW91bnQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGFtb3VudCA9ICgxIC0gbikgKiBjbGFtcChNYXRoLnJhbmRvbSgpICogbiwgMC4xLCAwLjk1KTtcbiAgICAgIH1cblxuICAgICAgbiA9IGNsYW1wKG4gKyBhbW91bnQsIDAsIDAuOTk0KTtcbiAgICAgIHJldHVybiBOUHJvZ3Jlc3Muc2V0KG4pO1xuICAgIH1cbiAgfTtcblxuICBOUHJvZ3Jlc3MudHJpY2tsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBOUHJvZ3Jlc3MuaW5jKE1hdGgucmFuZG9tKCkgKiBTZXR0aW5ncy50cmlja2xlUmF0ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdhaXRzIGZvciBhbGwgc3VwcGxpZWQgalF1ZXJ5IHByb21pc2VzIGFuZFxuICAgKiBpbmNyZWFzZXMgdGhlIHByb2dyZXNzIGFzIHRoZSBwcm9taXNlcyByZXNvbHZlLlxuICAgKlxuICAgKiBAcGFyYW0gJHByb21pc2UgalFVZXJ5IFByb21pc2VcbiAgICovXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5pdGlhbCA9IDAsIGN1cnJlbnQgPSAwO1xuXG4gICAgTlByb2dyZXNzLnByb21pc2UgPSBmdW5jdGlvbigkcHJvbWlzZSkge1xuICAgICAgaWYgKCEkcHJvbWlzZSB8fCAkcHJvbWlzZS5zdGF0ZSgpID09PSBcInJlc29sdmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50ID09PSAwKSB7XG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgfVxuXG4gICAgICBpbml0aWFsKys7XG4gICAgICBjdXJyZW50Kys7XG5cbiAgICAgICRwcm9taXNlLmFsd2F5cyhmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudC0tO1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gMCkge1xuICAgICAgICAgICAgaW5pdGlhbCA9IDA7XG4gICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTlByb2dyZXNzLnNldCgoaW5pdGlhbCAtIGN1cnJlbnQpIC8gaW5pdGlhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIChJbnRlcm5hbCkgcmVuZGVycyB0aGUgcHJvZ3Jlc3MgYmFyIG1hcmt1cCBiYXNlZCBvbiB0aGUgYHRlbXBsYXRlYFxuICAgKiBzZXR0aW5nLlxuICAgKi9cblxuICBOUHJvZ3Jlc3MucmVuZGVyID0gZnVuY3Rpb24oZnJvbVN0YXJ0KSB7XG4gICAgaWYgKE5Qcm9ncmVzcy5pc1JlbmRlcmVkKCkpIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnByb2dyZXNzJyk7XG5cbiAgICBhZGRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICducHJvZ3Jlc3MtYnVzeScpO1xuICAgIFxuICAgIHZhciBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2dyZXNzLmlkID0gJ25wcm9ncmVzcyc7XG4gICAgcHJvZ3Jlc3MuaW5uZXJIVE1MID0gU2V0dGluZ3MudGVtcGxhdGU7XG5cbiAgICB2YXIgYmFyICAgICAgPSBwcm9ncmVzcy5xdWVyeVNlbGVjdG9yKFNldHRpbmdzLmJhclNlbGVjdG9yKSxcbiAgICAgICAgcGVyYyAgICAgPSBmcm9tU3RhcnQgPyAnLTEwMCcgOiB0b0JhclBlcmMoTlByb2dyZXNzLnN0YXR1cyB8fCAwKSxcbiAgICAgICAgcGFyZW50ICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNldHRpbmdzLnBhcmVudCksXG4gICAgICAgIHNwaW5uZXI7XG4gICAgXG4gICAgY3NzKGJhciwge1xuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwIGxpbmVhcicsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgcGVyYyArICclLDAsMCknXG4gICAgfSk7XG5cbiAgICBpZiAoIVNldHRpbmdzLnNob3dTcGlubmVyKSB7XG4gICAgICBzcGlubmVyID0gcHJvZ3Jlc3MucXVlcnlTZWxlY3RvcihTZXR0aW5ncy5zcGlubmVyU2VsZWN0b3IpO1xuICAgICAgc3Bpbm5lciAmJiByZW1vdmVFbGVtZW50KHNwaW5uZXIpO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgYWRkQ2xhc3MocGFyZW50LCAnbnByb2dyZXNzLWN1c3RvbS1wYXJlbnQnKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpO1xuICAgIHJldHVybiBwcm9ncmVzcztcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZWxlbWVudC4gT3Bwb3NpdGUgb2YgcmVuZGVyKCkuXG4gICAqL1xuXG4gIE5Qcm9ncmVzcy5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICducHJvZ3Jlc3MtYnVzeScpO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU2V0dGluZ3MucGFyZW50KSwgJ25wcm9ncmVzcy1jdXN0b20tcGFyZW50Jyk7XG4gICAgdmFyIHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25wcm9ncmVzcycpO1xuICAgIHByb2dyZXNzICYmIHJlbW92ZUVsZW1lbnQocHJvZ3Jlc3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHByb2dyZXNzIGJhciBpcyByZW5kZXJlZC5cbiAgICovXG5cbiAgTlByb2dyZXNzLmlzUmVuZGVyZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnByb2dyZXNzJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGljaCBwb3NpdGlvbmluZyBDU1MgcnVsZSB0byB1c2UuXG4gICAqL1xuXG4gIE5Qcm9ncmVzcy5nZXRQb3NpdGlvbmluZ0NTUyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFNuaWZmIG9uIGRvY3VtZW50LmJvZHkuc3R5bGVcbiAgICB2YXIgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgIC8vIFNuaWZmIHByZWZpeGVzXG4gICAgdmFyIHZlbmRvclByZWZpeCA9ICgnV2Via2l0VHJhbnNmb3JtJyBpbiBib2R5U3R5bGUpID8gJ1dlYmtpdCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAoJ01velRyYW5zZm9ybScgaW4gYm9keVN0eWxlKSA/ICdNb3onIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKCdtc1RyYW5zZm9ybScgaW4gYm9keVN0eWxlKSA/ICdtcycgOlxuICAgICAgICAgICAgICAgICAgICAgICAoJ09UcmFuc2Zvcm0nIGluIGJvZHlTdHlsZSkgPyAnTycgOiAnJztcblxuICAgIGlmICh2ZW5kb3JQcmVmaXggKyAnUGVyc3BlY3RpdmUnIGluIGJvZHlTdHlsZSkge1xuICAgICAgLy8gTW9kZXJuIGJyb3dzZXJzIHdpdGggM0Qgc3VwcG9ydCwgZS5nLiBXZWJraXQsIElFMTBcbiAgICAgIHJldHVybiAndHJhbnNsYXRlM2QnO1xuICAgIH0gZWxzZSBpZiAodmVuZG9yUHJlZml4ICsgJ1RyYW5zZm9ybScgaW4gYm9keVN0eWxlKSB7XG4gICAgICAvLyBCcm93c2VycyB3aXRob3V0IDNEIHN1cHBvcnQsIGUuZy4gSUU5XG4gICAgICByZXR1cm4gJ3RyYW5zbGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXJzIHdpdGhvdXQgdHJhbnNsYXRlKCkgc3VwcG9ydCwgZS5nLiBJRTctOFxuICAgICAgcmV0dXJuICdtYXJnaW4nO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyc1xuICAgKi9cblxuICBmdW5jdGlvbiBjbGFtcChuLCBtaW4sIG1heCkge1xuICAgIGlmIChuIDwgbWluKSByZXR1cm4gbWluO1xuICAgIGlmIChuID4gbWF4KSByZXR1cm4gbWF4O1xuICAgIHJldHVybiBuO1xuICB9XG5cbiAgLyoqXG4gICAqIChJbnRlcm5hbCkgY29udmVydHMgYSBwZXJjZW50YWdlIChgMC4uMWApIHRvIGEgYmFyIHRyYW5zbGF0ZVhcbiAgICogcGVyY2VudGFnZSAoYC0xMDAlLi4wJWApLlxuICAgKi9cblxuICBmdW5jdGlvbiB0b0JhclBlcmMobikge1xuICAgIHJldHVybiAoLTEgKyBuKSAqIDEwMDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIChJbnRlcm5hbCkgcmV0dXJucyB0aGUgY29ycmVjdCBDU1MgZm9yIGNoYW5naW5nIHRoZSBiYXInc1xuICAgKiBwb3NpdGlvbiBnaXZlbiBhbiBuIHBlcmNlbnRhZ2UsIGFuZCBzcGVlZCBhbmQgZWFzZSBmcm9tIFNldHRpbmdzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJhclBvc2l0aW9uQ1NTKG4sIHNwZWVkLCBlYXNlKSB7XG4gICAgdmFyIGJhckNTUztcblxuICAgIGlmIChTZXR0aW5ncy5wb3NpdGlvblVzaW5nID09PSAndHJhbnNsYXRlM2QnKSB7XG4gICAgICBiYXJDU1MgPSB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcrdG9CYXJQZXJjKG4pKyclLDAsMCknIH07XG4gICAgfSBlbHNlIGlmIChTZXR0aW5ncy5wb3NpdGlvblVzaW5nID09PSAndHJhbnNsYXRlJykge1xuICAgICAgYmFyQ1NTID0geyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoJyt0b0JhclBlcmMobikrJyUsMCknIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhckNTUyA9IHsgJ21hcmdpbi1sZWZ0JzogdG9CYXJQZXJjKG4pKyclJyB9O1xuICAgIH1cblxuICAgIGJhckNTUy50cmFuc2l0aW9uID0gJ2FsbCAnK3NwZWVkKydtcyAnK2Vhc2U7XG5cbiAgICByZXR1cm4gYmFyQ1NTO1xuICB9XG5cbiAgLyoqXG4gICAqIChJbnRlcm5hbCkgUXVldWVzIGEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqL1xuXG4gIHZhciBxdWV1ZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcGVuZGluZyA9IFtdO1xuICAgIFxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgZm4gPSBwZW5kaW5nLnNoaWZ0KCk7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgZm4obmV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGZuKSB7XG4gICAgICBwZW5kaW5nLnB1c2goZm4pO1xuICAgICAgaWYgKHBlbmRpbmcubGVuZ3RoID09IDEpIG5leHQoKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiAoSW50ZXJuYWwpIEFwcGxpZXMgY3NzIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudCwgc2ltaWxhciB0byB0aGUgalF1ZXJ5IFxuICAgKiBjc3MgbWV0aG9kLlxuICAgKlxuICAgKiBXaGlsZSB0aGlzIGhlbHBlciBkb2VzIGFzc2lzdCB3aXRoIHZlbmRvciBwcmVmaXhlZCBwcm9wZXJ0eSBuYW1lcywgaXQgXG4gICAqIGRvZXMgbm90IHBlcmZvcm0gYW55IG1hbmlwdWxhdGlvbiBvZiB2YWx1ZXMgcHJpb3IgdG8gc2V0dGluZyBzdHlsZXMuXG4gICAqL1xuXG4gIHZhciBjc3MgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNzc1ByZWZpeGVzID0gWyAnV2Via2l0JywgJ08nLCAnTW96JywgJ21zJyBdLFxuICAgICAgICBjc3NQcm9wcyAgICA9IHt9O1xuXG4gICAgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eLW1zLS8sICdtcy0nKS5yZXBsYWNlKC8tKFtcXGRhLXpdKS9naSwgZnVuY3Rpb24obWF0Y2gsIGxldHRlcikge1xuICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWZW5kb3JQcm9wKG5hbWUpIHtcbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgICBpZiAobmFtZSBpbiBzdHlsZSkgcmV0dXJuIG5hbWU7XG5cbiAgICAgIHZhciBpID0gY3NzUHJlZml4ZXMubGVuZ3RoLFxuICAgICAgICAgIGNhcE5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSxcbiAgICAgICAgICB2ZW5kb3JOYW1lO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2ZW5kb3JOYW1lID0gY3NzUHJlZml4ZXNbaV0gKyBjYXBOYW1lO1xuICAgICAgICBpZiAodmVuZG9yTmFtZSBpbiBzdHlsZSkgcmV0dXJuIHZlbmRvck5hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0eWxlUHJvcChuYW1lKSB7XG4gICAgICBuYW1lID0gY2FtZWxDYXNlKG5hbWUpO1xuICAgICAgcmV0dXJuIGNzc1Byb3BzW25hbWVdIHx8IChjc3NQcm9wc1tuYW1lXSA9IGdldFZlbmRvclByb3AobmFtZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5Q3NzKGVsZW1lbnQsIHByb3AsIHZhbHVlKSB7XG4gICAgICBwcm9wID0gZ2V0U3R5bGVQcm9wKHByb3ApO1xuICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9wLCBcbiAgICAgICAgICB2YWx1ZTtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09IDIpIHtcbiAgICAgICAgZm9yIChwcm9wIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICB2YWx1ZSA9IHByb3BlcnRpZXNbcHJvcF07XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgYXBwbHlDc3MoZWxlbWVudCwgcHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBseUNzcyhlbGVtZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIChJbnRlcm5hbCkgRGV0ZXJtaW5lcyBpZiBhbiBlbGVtZW50IG9yIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzIG5hbWVzIGNvbnRhaW5zIGEgY2xhc3MgbmFtZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgbmFtZSkge1xuICAgIHZhciBsaXN0ID0gdHlwZW9mIGVsZW1lbnQgPT0gJ3N0cmluZycgPyBlbGVtZW50IDogY2xhc3NMaXN0KGVsZW1lbnQpO1xuICAgIHJldHVybiBsaXN0LmluZGV4T2YoJyAnICsgbmFtZSArICcgJykgPj0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiAoSW50ZXJuYWwpIEFkZHMgYSBjbGFzcyB0byBhbiBlbGVtZW50LlxuICAgKi9cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBuYW1lKSB7XG4gICAgdmFyIG9sZExpc3QgPSBjbGFzc0xpc3QoZWxlbWVudCksXG4gICAgICAgIG5ld0xpc3QgPSBvbGRMaXN0ICsgbmFtZTtcblxuICAgIGlmIChoYXNDbGFzcyhvbGRMaXN0LCBuYW1lKSkgcmV0dXJuOyBcblxuICAgIC8vIFRyaW0gdGhlIG9wZW5pbmcgc3BhY2UuXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBuZXdMaXN0LnN1YnN0cmluZygxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAoSW50ZXJuYWwpIFJlbW92ZXMgYSBjbGFzcyBmcm9tIGFuIGVsZW1lbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIG5hbWUpIHtcbiAgICB2YXIgb2xkTGlzdCA9IGNsYXNzTGlzdChlbGVtZW50KSxcbiAgICAgICAgbmV3TGlzdDtcblxuICAgIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgbmFtZSkpIHJldHVybjtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGNsYXNzIG5hbWUuXG4gICAgbmV3TGlzdCA9IG9sZExpc3QucmVwbGFjZSgnICcgKyBuYW1lICsgJyAnLCAnICcpO1xuXG4gICAgLy8gVHJpbSB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyBzcGFjZXMuXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBuZXdMaXN0LnN1YnN0cmluZygxLCBuZXdMaXN0Lmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIChJbnRlcm5hbCkgR2V0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIHRoZSBjbGFzcyBuYW1lcyBvbiB0aGUgZWxlbWVudC4gXG4gICAqIFRoZSBsaXN0IGlzIHdyYXBwZWQgd2l0aCBhIHNpbmdsZSBzcGFjZSBvbiBlYWNoIGVuZCB0byBmYWNpbGl0YXRlIGZpbmRpbmcgXG4gICAqIG1hdGNoZXMgd2l0aGluIHRoZSBsaXN0LlxuICAgKi9cblxuICBmdW5jdGlvbiBjbGFzc0xpc3QoZWxlbWVudCkge1xuICAgIHJldHVybiAoJyAnICsgKGVsZW1lbnQuY2xhc3NOYW1lIHx8ICcnKSArICcgJykucmVwbGFjZSgvXFxzKy9naSwgJyAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAoSW50ZXJuYWwpIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBET00uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBOUHJvZ3Jlc3M7XG59KTtcblxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjBcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydHt0eXBlT2YgYXMgZSxpc0VsZW1lbnQgYXMgdCxpc1ZhbGlkRWxlbWVudFR5cGUgYXMgbn1mcm9tXCJyZWFjdC1pc1wiO2ltcG9ydCByLHt1c2VTdGF0ZSBhcyBvLHVzZUNvbnRleHQgYXMgcyx1c2VNZW1vIGFzIGksdXNlRWZmZWN0IGFzIGEsdXNlUmVmIGFzIGMsY3JlYXRlRWxlbWVudCBhcyB1LHVzZURlYnVnVmFsdWUgYXMgbCx1c2VMYXlvdXRFZmZlY3QgYXMgZH1mcm9tXCJyZWFjdFwiO2ltcG9ydCBoIGZyb21cInNoYWxsb3dlcXVhbFwiO2ltcG9ydCBwIGZyb21cIkBlbW90aW9uL3N0eWxpc1wiO2ltcG9ydCBmIGZyb21cIkBlbW90aW9uL3VuaXRsZXNzXCI7aW1wb3J0IG0gZnJvbVwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO2ltcG9ydCB5IGZyb21cImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7ZnVuY3Rpb24gdigpe3JldHVybih2PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGc9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W2VbMF1dLHI9MCxvPXQubGVuZ3RoO3I8bztyKz0xKW4ucHVzaCh0W3JdLGVbcisxXSk7cmV0dXJuIG59LFM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJbb2JqZWN0IE9iamVjdF1cIj09PSh0LnRvU3RyaW5nP3QudG9TdHJpbmcoKTpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpJiYhZSh0KX0sdz1PYmplY3QuZnJlZXplKFtdKSxFPU9iamVjdC5mcmVlemUoe30pO2Z1bmN0aW9uIGIoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiBfKGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlfHxlLmRpc3BsYXlOYW1lfHxlLm5hbWV8fFwiQ29tcG9uZW50XCJ9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUuc3R5bGVkQ29tcG9uZW50SWR9dmFyIEE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJihwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUnx8cHJvY2Vzcy5lbnYuU0NfQVRUUil8fFwiZGF0YS1zdHlsZWRcIixDPVwiNS4zLjFcIixJPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxQPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWTpcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKSxPPXt9LFI9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj97MTpcIkNhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAlcy5cXG5cXG5cIiwyOlwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY29uc3VtZWQgYSBgU2VydmVyU3R5bGVTaGVldGAncyBzdHlsZXMhIGBTZXJ2ZXJTdHlsZVNoZWV0YCBpcyBhIG9uZSBvZmYgaW5zdGFuY2UgZm9yIGVhY2ggc2VydmVyLXNpZGUgcmVuZGVyIGN5Y2xlLlxcblxcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcmV1c2UgaXQgYWNyb3NzIHJlbmRlcnM/XFxuLSBBcmUgeW91IGFjY2lkZW50YWxseSBjYWxsaW5nIGNvbGxlY3RTdHlsZXMgdHdpY2U/XFxuXFxuXCIsMzpcIlN0cmVhbWluZyBTU1IgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50OyBQbGVhc2UgZG8gbm90IHRyeSB0byBjYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBicm93c2VyLlxcblxcblwiLDQ6XCJUaGUgYFN0eWxlU2hlZXRNYW5hZ2VyYCBleHBlY3RzIGEgdmFsaWQgdGFyZ2V0IG9yIHNoZWV0IHByb3AhXFxuXFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIGNsaWVudCBhbmQgaXMgeW91ciB0YXJnZXQgZmFsc3k/XFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIHNlcnZlciBhbmQgaXMgdGhlIHNoZWV0IGZhbHN5P1xcblxcblwiLDU6XCJUaGUgY2xvbmUgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBjbGllbnQhXFxuXFxuLSBBcmUgeW91IHJ1bm5pbmcgaW4gYSBjbGllbnQtbGlrZSBlbnZpcm9ubWVudCBvbiB0aGUgc2VydmVyP1xcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcnVuIFNTUiBvbiB0aGUgY2xpZW50P1xcblxcblwiLDY6XCJUcnlpbmcgdG8gaW5zZXJ0IGEgbmV3IHN0eWxlIHRhZywgYnV0IHRoZSBnaXZlbiBOb2RlIGlzIHVubW91bnRlZCFcXG5cXG4tIEFyZSB5b3UgdXNpbmcgYSBjdXN0b20gdGFyZ2V0IHRoYXQgaXNuJ3QgbW91bnRlZD9cXG4tIERvZXMgeW91ciBkb2N1bWVudCBub3QgaGF2ZSBhIHZhbGlkIGhlYWQgZWxlbWVudD9cXG4tIEhhdmUgeW91IGFjY2lkZW50YWxseSByZW1vdmVkIGEgc3R5bGUgdGFnIG1hbnVhbGx5P1xcblxcblwiLDc6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcInRoZW1lXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuJyw4OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFwidGhlbWVcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG4nLDk6XCJNaXNzaW5nIGRvY3VtZW50IGA8aGVhZD5gXFxuXFxuXCIsMTA6XCJDYW5ub3QgZmluZCBhIFN0eWxlU2hlZXQgaW5zdGFuY2UuIFVzdWFsbHkgdGhpcyBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3BpZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgbG9hZGVkIGF0IG9uY2UuIENoZWNrIG91dCB0aGlzIGlzc3VlIGZvciBob3cgdG8gdHJvdWJsZXNob290IGFuZCBmaXggdGhlIGNvbW1vbiBjYXNlcyB3aGVyZSB0aGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuOiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvaXNzdWVzLzE5NDEjaXNzdWVjb21tZW50LTQxNzg2MjAyMVxcblxcblwiLDExOlwiX1RoaXMgZXJyb3Igd2FzIHJlcGxhY2VkIHdpdGggYSBkZXYtdGltZSB3YXJuaW5nLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZm9yIHY0IGZpbmFsLl8gW2NyZWF0ZUdsb2JhbFN0eWxlXSByZWNlaXZlZCBjaGlsZHJlbiB3aGljaCB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUGxlYXNlIHVzZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgcGFzc2luZyBjaGlsZHJlbiBlbGVtZW50cy5cXG5cXG5cIiwxMjpcIkl0IHNlZW1zIHlvdSBhcmUgaW50ZXJwb2xhdGluZyBhIGtleWZyYW1lIGRlY2xhcmF0aW9uICglcykgaW50byBhbiB1bnRhZ2dlZCBzdHJpbmcuIFRoaXMgd2FzIHN1cHBvcnRlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2MywgYnV0IGlzIG5vdCBsb25nZXIgc3VwcG9ydGVkIGluIHY0IGFzIGtleWZyYW1lcyBhcmUgbm93IGluamVjdGVkIG9uLWRlbWFuZC4gUGxlYXNlIHdyYXAgeW91ciBzdHJpbmcgaW4gdGhlIGNzc1xcXFxgXFxcXGAgaGVscGVyIHdoaWNoIGVuc3VyZXMgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYXBpI2Nzc1xcblxcblwiLDEzOlwiJXMgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxcblxcblwiLDE0OidUaGVtZVByb3ZpZGVyOiBcInRoZW1lXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG4nLDE1OlwiQSBzdHlsaXMgcGx1Z2luIGhhcyBiZWVuIHN1cHBsaWVkIHRoYXQgaXMgbm90IG5hbWVkLiBXZSBuZWVkIGEgbmFtZSBmb3IgZWFjaCBwbHVnaW4gdG8gYmUgYWJsZSB0byBwcmV2ZW50IHN0eWxpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBzdHlsaXMgY29uZmlndXJhdGlvbnMgd2l0aGluIHRoZSBzYW1lIGFwcC4gQmVmb3JlIHlvdSBwYXNzIHlvdXIgcGx1Z2luIHRvIGA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17W119PmAsIHBsZWFzZSBtYWtlIHN1cmUgZWFjaCBwbHVnaW4gaXMgdW5pcXVlbHktbmFtZWQsIGUuZy5cXG5cXG5gYGBqc1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbXBvcnRlZFBsdWdpbiwgJ25hbWUnLCB7IHZhbHVlOiAnc29tZS11bmlxdWUtbmFtZScgfSk7XFxuYGBgXFxuXFxuXCIsMTY6XCJSZWFjaGVkIHRoZSBsaW1pdCBvZiBob3cgbWFueSBzdHlsZWQgY29tcG9uZW50cyBtYXkgYmUgY3JlYXRlZCBhdCBncm91cCAlcy5cXG5Zb3UgbWF5IG9ubHkgY3JlYXRlIHVwIHRvIDEsMDczLDc0MSw4MjQgY29tcG9uZW50cy4gSWYgeW91J3JlIGNyZWF0aW5nIGNvbXBvbmVudHMgZHluYW1pY2FsbHksXFxuYXMgZm9yIGluc3RhbmNlIGluIHlvdXIgcmVuZGVyIG1ldGhvZCB0aGVuIHlvdSBtYXkgYmUgcnVubmluZyBpbnRvIHRoaXMgbGltaXRhdGlvbi5cXG5cXG5cIiwxNzpcIkNTU1N0eWxlU2hlZXQgY291bGQgbm90IGJlIGZvdW5kIG9uIEhUTUxTdHlsZUVsZW1lbnQuXFxuSGFzIHN0eWxlZC1jb21wb25lbnRzJyBzdHlsZSB0YWcgYmVlbiB1bm1vdW50ZWQgb3IgYWx0ZXJlZCBieSBhbm90aGVyIHNjcmlwdD9cXG5cIn06e307ZnVuY3Rpb24gRCgpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wP3ZvaWQgMDphcmd1bWVudHNbMF0sdD1bXSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKz0xKXQucHVzaChuPDB8fGFyZ3VtZW50cy5sZW5ndGg8PW4/dm9pZCAwOmFyZ3VtZW50c1tuXSk7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZT1lLnJlcGxhY2UoLyVbYS16XS8sdCl9KSksZX1mdW5jdGlvbiBqKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt0aHJvd1wicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/bmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdC5pby9KVUlhRSNcIitlK1wiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKyhuLmxlbmd0aD4wP1wiIEFyZ3M6IFwiK24uam9pbihcIiwgXCIpOlwiXCIpKTpuZXcgRXJyb3IoRC5hcHBseSh2b2lkIDAsW1JbZV1dLmNvbmNhdChuKSkudHJpbSgpKX12YXIgVD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheSg1MTIpLHRoaXMubGVuZ3RoPTUxMix0aGlzLnRhZz1lfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmluZGV4T2ZHcm91cD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7bjxlO24rKyl0Kz10aGlzLmdyb3VwU2l6ZXNbbl07cmV0dXJuIHR9LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0KXtpZihlPj10aGlzLmdyb3VwU2l6ZXMubGVuZ3RoKXtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzLHI9bi5sZW5ndGgsbz1yO2U+PW87KShvPDw9MSk8MCYmaigxNixcIlwiK2UpO3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkobyksdGhpcy5ncm91cFNpemVzLnNldChuKSx0aGlzLmxlbmd0aD1vO2Zvcih2YXIgcz1yO3M8bztzKyspdGhpcy5ncm91cFNpemVzW3NdPTB9Zm9yKHZhciBpPXRoaXMuaW5kZXhPZkdyb3VwKGUrMSksYT0wLGM9dC5sZW5ndGg7YTxjO2ErKyl0aGlzLnRhZy5pbnNlcnRSdWxlKGksdFthXSkmJih0aGlzLmdyb3VwU2l6ZXNbZV0rKyxpKyspfSx0LmNsZWFyR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZTx0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpcy5ncm91cFNpemVzW2VdLG49dGhpcy5pbmRleE9mR3JvdXAoZSkscj1uK3Q7dGhpcy5ncm91cFNpemVzW2VdPTA7Zm9yKHZhciBvPW47bzxyO28rKyl0aGlzLnRhZy5kZWxldGVSdWxlKG4pfX0sdC5nZXRHcm91cD1mdW5jdGlvbihlKXt2YXIgdD1cIlwiO2lmKGU+PXRoaXMubGVuZ3RofHwwPT09dGhpcy5ncm91cFNpemVzW2VdKXJldHVybiB0O2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXNbZV0scj10aGlzLmluZGV4T2ZHcm91cChlKSxvPXIrbixzPXI7czxvO3MrKyl0Kz10aGlzLnRhZy5nZXRSdWxlKHMpK1wiLyohc2MqL1xcblwiO3JldHVybiB0fSxlfSgpLGs9bmV3IE1hcCx4PW5ldyBNYXAsVj0xLEI9ZnVuY3Rpb24oZSl7aWYoay5oYXMoZSkpcmV0dXJuIGsuZ2V0KGUpO2Zvcig7eC5oYXMoVik7KVYrKzt2YXIgdD1WKys7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKCgwfHQpPDB8fHQ+MTw8MzApJiZqKDE2LFwiXCIrdCksay5zZXQoZSx0KSx4LnNldCh0LGUpLHR9LE09ZnVuY3Rpb24oZSl7cmV0dXJuIHguZ2V0KGUpfSx6PWZ1bmN0aW9uKGUsdCl7dD49ViYmKFY9dCsxKSxrLnNldChlLHQpLHguc2V0KHQsZSl9LEw9XCJzdHlsZVtcIitBKyddW2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjMuMVwiXScsRz1uZXcgUmVnRXhwKFwiXlwiK0ErJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpLEY9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcixvPW4uc3BsaXQoXCIsXCIpLHM9MCxpPW8ubGVuZ3RoO3M8aTtzKyspKHI9b1tzXSkmJmUucmVnaXN0ZXJOYW1lKHQscil9LFk9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49KHQuaW5uZXJIVE1MfHxcIlwiKS5zcGxpdChcIi8qIXNjKi9cXG5cIikscj1bXSxvPTAscz1uLmxlbmd0aDtvPHM7bysrKXt2YXIgaT1uW29dLnRyaW0oKTtpZihpKXt2YXIgYT1pLm1hdGNoKEcpO2lmKGEpe3ZhciBjPTB8cGFyc2VJbnQoYVsxXSwxMCksdT1hWzJdOzAhPT1jJiYoeih1LGMpLEYoZSx1LGFbM10pLGUuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoYyxyKSksci5sZW5ndGg9MH1lbHNlIHIucHVzaChpKX19fSxxPWZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmdm9pZCAwIT09d2luZG93Ll9fd2VicGFja19ub25jZV9fP3dpbmRvdy5fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMy4xXCIpO3ZhciBpPXEoKTtyZXR1cm4gaSYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkpLG4uaW5zZXJ0QmVmb3JlKHIscykscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksdGhpcy5zZXJ2ZXI9ISFlLmlzU2VydmVyLCF0aGlzLnNlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoTCksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgcz1NKG8pO2lmKHZvaWQgMCE9PXMpe3ZhciBpPWUubmFtZXMuZ2V0KHMpLGE9dC5nZXRHcm91cChvKTtpZihpJiZhJiZpLnNpemUpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicrcysnXCJdJyx1PVwiXCI7dm9pZCAwIT09aSYmaS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4zLjFcIiksc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIHM9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxpPWVlKHRlKHRoaXMuYmFzZUhhc2gscyk+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixpKSl7dmFyIGE9bihzLFwiLlwiK2ksdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixpLGEpfW8ucHVzaChpKSx0aGlzLnN0YXRpY1J1bGVzSWQ9aX1lbHNle2Zvcih2YXIgYz10aGlzLnJ1bGVzLmxlbmd0aCx1PXRlKHRoaXMuYmFzZUhhc2gsbi5oYXNoKSxsPVwiXCIsZD0wO2Q8YztkKyspe3ZhciBoPXRoaXMucnVsZXNbZF07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGgpbCs9aCxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodT10ZSh1LGgrZCkpO2Vsc2UgaWYoaCl7dmFyIHA9TmUoaCxlLHQsbiksZj1BcnJheS5pc0FycmF5KHApP3Auam9pbihcIlwiKTpwO3U9dGUodSxmK2QpLGwrPWZ9fWlmKGwpe3ZhciBtPWVlKHU+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixtKSl7dmFyIHk9bihsLFwiLlwiK20sdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixtLHkpfW8ucHVzaChtKX19cmV0dXJuIG8uam9pbihcIiBcIil9LGV9KCksaWU9L15cXHMqXFwvXFwvLiokL2dtLGFlPVtcIjpcIixcIltcIixcIi5cIixcIiNcIl07ZnVuY3Rpb24gY2UoZSl7dmFyIHQsbixyLG8scz12b2lkIDA9PT1lP0U6ZSxpPXMub3B0aW9ucyxhPXZvaWQgMD09PWk/RTppLGM9cy5wbHVnaW5zLHU9dm9pZCAwPT09Yz93OmMsbD1uZXcgcChhKSxkPVtdLGg9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXtpZih0KXRyeXtlKHQrXCJ9XCIpfWNhdGNoKGUpe319cmV0dXJuIGZ1bmN0aW9uKG4scixvLHMsaSxhLGMsdSxsLGQpe3N3aXRjaChuKXtjYXNlIDE6aWYoMD09PWwmJjY0PT09ci5jaGFyQ29kZUF0KDApKXJldHVybiBlKHIrXCI7XCIpLFwiXCI7YnJlYWs7Y2FzZSAyOmlmKDA9PT11KXJldHVybiByK1wiLyp8Ki9cIjticmVhaztjYXNlIDM6c3dpdGNoKHUpe2Nhc2UgMTAyOmNhc2UgMTEyOnJldHVybiBlKG9bMF0rciksXCJcIjtkZWZhdWx0OnJldHVybiByKygwPT09ZD9cIi8qfCovXCI6XCJcIil9Y2FzZS0yOnIuc3BsaXQoXCIvKnwqL31cIikuZm9yRWFjaCh0KX19fSgoZnVuY3Rpb24oZSl7ZC5wdXNoKGUpfSkpLGY9ZnVuY3Rpb24oZSxyLHMpe3JldHVybiAwPT09ciYmLTEhPT1hZS5pbmRleE9mKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShpZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0saCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxqKDE1KSx0ZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgdWU9ci5jcmVhdGVDb250ZXh0KCksbGU9dWUuQ29uc3VtZXIsZGU9ci5jcmVhdGVDb250ZXh0KCksaGU9KGRlLkNvbnN1bWVyLG5ldyBaKSxwZT1jZSgpO2Z1bmN0aW9uIGZlKCl7cmV0dXJuIHModWUpfHxoZX1mdW5jdGlvbiBtZSgpe3JldHVybiBzKGRlKXx8cGV9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1mZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBjZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2gobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KHVlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQoZGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXBlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gaigxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXBlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLGdlPS8oW0EtWl0pLyxTZT0vKFtBLVpdKS9nLHdlPS9ebXMtLyxFZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIGJlKGUpe3JldHVybiBnZS50ZXN0KGUpP2UucmVwbGFjZShTZSxFZSkucmVwbGFjZSh3ZSxcIi1tcy1cIik6ZX12YXIgX2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIE5lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1OZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoX2UoZSkpcmV0dXJuXCJcIjtpZihOKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoYihlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKF8oZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxOZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHZlP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOlMoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhX2UodFtpXSkmJihBcnJheS5pc0FycmF5KHRbaV0pJiZ0W2ldLmlzQ3NzfHxiKHRbaV0pP3MucHVzaChiZShpKStcIjpcIix0W2ldLFwiO1wiKTpTKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6cy5wdXNoKGJlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIGY/U3RyaW5nKG8pLnRyaW0oKTpvK1wicHhcIikrXCI7XCIpKTtyZXR1cm4gbj9bbitcIiB7XCJdLmNvbmNhdChzLFtcIn1cIl0pOnN9KGUpOmUudG9TdHJpbmcoKX12YXIgQWU9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSkmJihlLmlzQ3NzPSEwKSxlfTtmdW5jdGlvbiBDZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07cmV0dXJuIGIoZSl8fFMoZSk/QWUoTmUoZyh3LFtlXS5jb25jYXQobikpKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6QWUoTmUoZyhlLG4pKSl9dmFyIEllPS9pbnZhbGlkIGhvb2sgY2FsbC9pLFBlPW5ldyBTZXQsT2U9ZnVuY3Rpb24oZSx0KXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgbj1cIlRoZSBjb21wb25lbnQgXCIrZSsodD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIikrXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5Zb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3UndmUgY2FsbGVkIHN0eWxlZCBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXFxuVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC5cIixyPWNvbnNvbGUuZXJyb3I7dHJ5e3ZhciBvPSEwO2NvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oZSl7aWYoSWUudGVzdChlKSlvPSExLFBlLmRlbGV0ZShuKTtlbHNle2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHM9bmV3IEFycmF5KHQ+MT90LTE6MCksaT0xO2k8dDtpKyspc1tpLTFdPWFyZ3VtZW50c1tpXTtyLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KHMpKX19LGMoKSxvJiYhUGUuaGFzKG4pJiYoY29uc29sZS53YXJuKG4pLFBlLmFkZChuKSl9Y2F0Y2goZSl7SWUudGVzdChlLm1lc3NhZ2UpJiZQZS5kZWxldGUobil9ZmluYWxseXtjb25zb2xlLmVycm9yPXJ9fX0sUmU9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sRGU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxqZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIFRlKGUpe3JldHVybiBlLnJlcGxhY2UoRGUsXCItXCIpLnJlcGxhY2UoamUsXCJcIil9dmFyIGtlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiB4ZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LEJlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gTWUoZSx0LG4pe3ZhciByPWVbbl07VmUodCkmJlZlKHIpP3plKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIHplKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoVmUoaSkpZm9yKHZhciBhIGluIGkpQmUoYSkmJk1lKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgTGU9ci5jcmVhdGVDb250ZXh0KCksR2U9TGUuQ29uc3VtZXI7ZnVuY3Rpb24gRmUoZSl7dmFyIHQ9cyhMZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KExlLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBZZT17fTtmdW5jdGlvbiBxZShlLHQsbil7dmFyIG89TihlKSxpPSF4ZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOlRlKGUpO1llW25dPShZZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK2tlKFwiNS4zLjFcIituK1llW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIHhlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/VGUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyLG8pe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scixvKSYmdC5zaG91bGRGb3J3YXJkUHJvcChuLHIsbyl9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KFJlKHQscyhMZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPXhlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSxfKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxzPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxzLmxlbmd0aDtyKyspbj1zW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLHM9ciYmcitcIi1cIisoeGUoZSk/ZTpUZShfKGUpKSk7cmV0dXJuIHFlKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOnN9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP3plKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKE9lKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgcz10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK3MrXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9LGkmJnkoQyxlLHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwLHdpdGhDb21wb25lbnQ6ITB9KSxDfXZhciBIZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7aWYodm9pZCAwPT09byYmKG89RSksIW4ocikpcmV0dXJuIGooMSxTdHJpbmcocikpO3ZhciBzPWZ1bmN0aW9uKCl7cmV0dXJuIHQocixvLENlLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX07cmV0dXJuIHMud2l0aENvbmZpZz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHt9LG4pKX0scy5hdHRycz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHthdHRyczpBcnJheS5wcm90b3R5cGUuY29uY2F0KG8uYXR0cnMsbikuZmlsdGVyKEJvb2xlYW4pfSkpfSxzfShxZSxlKX07W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcImNpcmNsZVwiLFwiY2xpcFBhdGhcIixcImRlZnNcIixcImVsbGlwc2VcIixcImZvcmVpZ25PYmplY3RcIixcImdcIixcImltYWdlXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibWFya2VyXCIsXCJtYXNrXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJlY3RcIixcInN0b3BcIixcInN2Z1wiLFwidGV4dFwiLFwidGV4dFBhdGhcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe0hlW2VdPUhlKGUpfSkpO3ZhciAkZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uIFdlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgaT1DZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIitrZShKU09OLnN0cmluZ2lmeShpKSksdT1uZXcgJGUoaSxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89cyhMZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLHQuc2VydmVyJiZoKGwsZSx0LG8sbiksZCgoZnVuY3Rpb24oKXtpZighdC5zZXJ2ZXIpcmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIHM9dih7fSx0LHt0aGVtZTpSZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxzLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJk9lKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBVZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1DZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxzPWtlKG8pO3JldHVybiBuZXcgdmUocyxvKX12YXIgSmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCk7aWYoIXQpcmV0dXJuXCJcIjt2YXIgbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjMuMVwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMy4xXCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLFhlPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKExlKSxpPWUuZGVmYXVsdFByb3BzLGE9UmUodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFplPWZ1bmN0aW9uKCl7cmV0dXJuIHMoTGUpfSxLZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgSGU7ZXhwb3J0e0plIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLEdlIGFzIFRoZW1lQ29uc3VtZXIsTGUgYXMgVGhlbWVDb250ZXh0LEZlIGFzIFRoZW1lUHJvdmlkZXIsS2UgYXMgX19QUklWQVRFX18sV2UgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQ2UgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsVWUgYXMga2V5ZnJhbWVzLFplIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixYZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZSIsInRoZW1lIiwibXEiLCJtb2JpbGVMYXJnZSIsIm1vYmlsZU1lZGl1bSIsIm1vYmlsZVNtYWxsIiwiZGVza3RvcFRhbGwiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImJvZHkiLCJoZWFkZXIiLCJ0YWJsZXQiLCJoZWFkZXJNb2JpbGUiLCJzdWJIZWFkZXIiLCJuYXZIZWFkZXIiLCJ3aGl0ZSIsImNhcHRpb25MYXJnZSIsImNhcHRpb25NZWRpdW0iLCJjYXB0aW9uU21hbGwiLCJibGFjayIsIm1haW5Db2xvciIsImxpZ2h0ZXJNYWluQ29sb3IiLCJhY2NlbnRDb2xvciIsImxpZ2h0ZXJBY2NlbnRDb2xvciIsIm5hdkxpc3QiLCJzdWJUZXh0IiwiY2FwdGlvbkxhcmdlTWVkaXVtIiwiYm9keVNtYWxsIiwicGFkZGluZyIsInhsIiwieCIsIm0iLCJ4cyIsInMiLCJ4eGxWIiwieGxWIiwieFYiLCJtViIsInhzViIsInNWIiwic3NWIiwiZGltZW5zaW9ucyIsInRpbGVQYWRkaW5nIiwidGlsZVBhZGRpbmdNb2JpbGUiLCJ0aWxlV2lkdGgiLCJwYWdlU2VjdGlvblBhZGRpbmciLCJwYWdlU2VjdGlvbldpZHRoIiwicmljaFRleHRNYXJnaW5Ub3AiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImhlcm9JbnN0cnVjdG9ycyIsImRlc2t0b3AiLCJkZXNrdG9wV2lkZSIsImxhcHRvcExhcmdlIiwibGFwdG9wIiwidGFibGV0TGFyZ2UiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInBhZ2VQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl8iLCJBcHAiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJhc3NpZ24iLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiUHJvcFR5cGVzIiwicGFnZVByb3BzU2hhcGUiLCJBcHBQcm92aWRlciIsInVzZVJvdXRlciIsIkhlYWQiLCJmZXRjaEFQSSIsImdldFN0cmFwaU1lZGlhIiwiRGVmYXVsdFNlbyIsIlRoZW1lUHJvdmlkZXIiLCJFcnJvclBhZ2UiLCJNeUFwcCIsInJvdXRlciIsImdsb2JhbCIsImZhdmljb24iLCJkZWZhdWx0U2VvIiwibWV0YVRpdGxlU3VmZml4IiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwic2hhcmVkSW1hZ2UiLCJmb3JtYXRzIiwiaW1hZ2VzIiwidmFsdWVzIiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJhcHBQcm9wcyIsInNoYXBlIiwiaWQiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwibmF2aWdhdGlvbiIsInNlY3Rpb25zIiwiYXJyYXlPZiIsInNlbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsIk5Qcm9ncmVzcyIsIkFwcENvbnRleHQiLCJpc0xvYWRpbmciLCJpc05hdk9wZW4iLCJzZXRJc05hdk9wZW4iLCJjaGlsZHJlbiIsInNldElzTG9hZGluZyIsImhhbmRsZVN0YXJ0IiwiY29uZmlndXJlIiwicGFyZW50Iiwic3RhcnQiLCJoYW5kbGVTdG9wIiwiZXZlbnRzIiwib24iLCJvZmYiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImltYWdlVXJsIiwic3RhcnRzV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=