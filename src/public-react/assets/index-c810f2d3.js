function rf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : {enumerable: !0, get: () => r[l]}
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'})
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, {childList: !0, subtree: !0});
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ns = {exports: {}},
  vl = {},
  Ps = {exports: {}},
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ir = Symbol.for('react.element'),
  lf = Symbol.for('react.portal'),
  of = Symbol.for('react.fragment'),
  uf = Symbol.for('react.strict_mode'),
  sf = Symbol.for('react.profiler'),
  af = Symbol.for('react.provider'),
  cf = Symbol.for('react.context'),
  ff = Symbol.for('react.forward_ref'),
  df = Symbol.for('react.suspense'),
  pf = Symbol.for('react.memo'),
  hf = Symbol.for('react.lazy'),
  su = Symbol.iterator;
function mf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (su && e[su]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var js = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _s = Object.assign,
  Ts = {};
function hn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ts),
    (this.updater = n || js);
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
hn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Rs() {}
Rs.prototype = hn.prototype;
function ci(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ts),
    (this.updater = n || js);
}
var fi = (ci.prototype = new Rs());
fi.constructor = ci;
_s(fi, hn.prototype);
fi.isPureReactComponent = !0;
var au = Array.isArray,
  Ls = Object.prototype.hasOwnProperty,
  di = {current: null},
  Is = {key: !0, ref: !0, __self: !0, __source: !0};
function zs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Ls.call(t, r) && !Is.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {$$typeof: ir, type: e, key: o, ref: i, props: l, _owner: di.current};
}
function vf(e, t) {
  return {
    $$typeof: ir,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pi(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ir;
}
function gf(e) {
  var t = {'=': '=0', ':': '=2'};
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cu = /\/+/g;
function Ul(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? gf('' + e.key)
    : t.toString(36);
}
function Lr(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ir:
          case lf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Ul(i, 0) : r),
      au(l)
        ? ((n = ''),
          e != null && (n = e.replace(cu, '$&/') + '/'),
          Lr(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (pi(l) &&
            (l = vf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(cu, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), au(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ul(o, u);
      i += Lr(o, t, n, s, l);
    }
  else if (((s = mf(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ul(o, u++)), (i += Lr(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function hr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Lr(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function yf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = {current: null},
  Ir = {transition: null},
  wf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: di,
  };
O.Children = {
  map: hr,
  forEach: function (e, t, n) {
    hr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pi(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
O.Component = hn;
O.Fragment = of;
O.Profiler = sf;
O.PureComponent = ci;
O.StrictMode = uf;
O.Suspense = df;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wf;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = _s({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = di.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ls.call(t, s) &&
        !Is.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return {$$typeof: ir, type: e.type, key: l, ref: o, props: r, _owner: i};
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: cf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {$$typeof: af, _context: e}),
    (e.Consumer = e)
  );
};
O.createElement = zs;
O.createFactory = function (e) {
  var t = zs.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return {current: null};
};
O.forwardRef = function (e) {
  return {$$typeof: ff, render: e};
};
O.isValidElement = pi;
O.lazy = function (e) {
  return {$$typeof: hf, _payload: {_status: -1, _result: e}, _init: yf};
};
O.memo = function (e, t) {
  return {$$typeof: pf, type: e, compare: t === void 0 ? null : t};
};
O.startTransition = function (e) {
  var t = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = t;
  }
};
O.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
O.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
O.useId = function () {
  return ce.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ce.current.useRef(e);
};
O.useState = function (e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ce.current.useTransition();
};
O.version = '18.2.0';
Ps.exports = O;
var x = Ps.exports;
const Os = Cs(x),
  Sf = rf({__proto__: null, default: Os}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kf = x,
  xf = Symbol.for('react.element'),
  Ef = Symbol.for('react.fragment'),
  Cf = Object.prototype.hasOwnProperty,
  Nf = kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pf = {key: !0, ref: !0, __self: !0, __source: !0};
function Ds(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Cf.call(t, r) && !Pf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {$$typeof: xf, type: e, key: o, ref: i, props: l, _owner: Nf.current};
}
vl.Fragment = Ef;
vl.jsx = Ds;
vl.jsxs = Ds;
Ns.exports = vl;
var g = Ns.exports,
  co = {},
  Ms = {exports: {}},
  xe = {},
  Us = {exports: {}},
  Fs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, I) {
    var R = C.length;
    C.push(I);
    e: for (; 0 < R; ) {
      var F = (R - 1) >>> 1,
        M = C[F];
      if (0 < l(M, I)) (C[F] = I), (C[R] = M), (R = F);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var I = C[0],
      R = C.pop();
    if (R !== I) {
      C[0] = R;
      e: for (var F = 0, M = C.length, Ze = M >>> 1; F < Ze; ) {
        var Et = 2 * (F + 1) - 1,
          Ml = C[Et],
          Ct = Et + 1,
          pr = C[Ct];
        if (0 > l(Ml, R))
          Ct < M && 0 > l(pr, Ml)
            ? ((C[F] = pr), (C[Ct] = R), (F = Ct))
            : ((C[F] = Ml), (C[Et] = R), (F = Et));
        else if (Ct < M && 0 > l(pr, R)) (C[F] = pr), (C[Ct] = R), (F = Ct);
        else break e;
      }
    }
    return I;
  }
  function l(C, I) {
    var R = C.sortIndex - I.sortIndex;
    return R !== 0 ? R : C.id - I.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    m = null,
    h = 3,
    S = !1,
    w = !1,
    y = !1,
    _ = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var I = n(a); I !== null; ) {
      if (I.callback === null) r(a);
      else if (I.startTime <= C)
        r(a), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = n(a);
    }
  }
  function v(C) {
    if (((y = !1), d(C), !w))
      if (n(s) !== null) (w = !0), yn(E);
      else {
        var I = n(a);
        I !== null && wn(v, I.startTime - C);
      }
  }
  function E(C, I) {
    (w = !1), y && ((y = !1), f(T), (T = -1)), (S = !0);
    var R = h;
    try {
      for (
        d(I), m = n(s);
        m !== null && (!(m.expirationTime > I) || (C && !ge()));

      ) {
        var F = m.callback;
        if (typeof F == 'function') {
          (m.callback = null), (h = m.priorityLevel);
          var M = F(m.expirationTime <= I);
          (I = e.unstable_now()),
            typeof M == 'function' ? (m.callback = M) : m === n(s) && r(s),
            d(I);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Ze = !0;
      else {
        var Et = n(a);
        Et !== null && wn(v, Et.startTime - I), (Ze = !1);
      }
      return Ze;
    } finally {
      (m = null), (h = R), (S = !1);
    }
  }
  var P = !1,
    j = null,
    T = -1,
    W = 5,
    z = -1;
  function ge() {
    return !(e.unstable_now() - z < W);
  }
  function kt() {
    if (j !== null) {
      var C = e.unstable_now();
      z = C;
      var I = !0;
      try {
        I = j(!0, C);
      } finally {
        I ? xt() : ((P = !1), (j = null));
      }
    } else P = !1;
  }
  var xt;
  if (typeof c == 'function')
    xt = function () {
      c(kt);
    };
  else if (typeof MessageChannel < 'u') {
    var dr = new MessageChannel(),
      Dl = dr.port2;
    (dr.port1.onmessage = kt),
      (xt = function () {
        Dl.postMessage(null);
      });
  } else
    xt = function () {
      _(kt, 0);
    };
  function yn(C) {
    (j = C), P || ((P = !0), xt());
  }
  function wn(C, I) {
    T = _(function () {
      C(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), yn(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (W = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = h;
      }
      var R = h;
      h = I;
      try {
        return C();
      } finally {
        h = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, I) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var R = h;
      h = C;
      try {
        return I();
      } finally {
        h = R;
      }
    }),
    (e.unstable_scheduleCallback = function (C, I, R) {
      var F = e.unstable_now();
      switch (
        (typeof R == 'object' && R !== null
          ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? F + R : F))
          : (R = F),
        C)
      ) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return (
        (M = R + M),
        (C = {
          id: p++,
          callback: I,
          priorityLevel: C,
          startTime: R,
          expirationTime: M,
          sortIndex: -1,
        }),
        R > F
          ? ((C.sortIndex = R),
            t(a, C),
            n(s) === null &&
              C === n(a) &&
              (y ? (f(T), (T = -1)) : (y = !0), wn(v, R - F)))
          : ((C.sortIndex = M), t(s, C), w || S || ((w = !0), yn(E))),
        C
      );
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (C) {
      var I = h;
      return function () {
        var R = h;
        h = I;
        try {
          return C.apply(this, arguments);
        } finally {
          h = R;
        }
      };
    });
})(Fs);
Us.exports = Fs;
var jf = Us.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var As = x,
  ke = jf;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Bs = new Set(),
  Hn = {};
function Ut(e, t) {
  un(e, t), un(e + 'Capture', t);
}
function un(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) Bs.add(t[e]);
}
var Ye = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  fo = Object.prototype.hasOwnProperty,
  _f =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fu = {},
  du = {};
function Tf(e) {
  return fo.call(du, e)
    ? !0
    : fo.call(fu, e)
    ? !1
    : _f.test(e)
    ? (du[e] = !0)
    : ((fu[e] = !0), !1);
}
function Rf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Lf(e, t, n, r) {
  if (t === null || typeof t > 'u' || Rf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hi = /[\-:]([a-z])/g;
function mi(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(hi, mi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(hi, mi);
    re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(hi, mi);
  re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vi(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Lf(t, n, l, r) && (n = null),
    r || l === null
      ? Tf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = As.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mr = Symbol.for('react.element'),
  Ht = Symbol.for('react.portal'),
  Wt = Symbol.for('react.fragment'),
  gi = Symbol.for('react.strict_mode'),
  po = Symbol.for('react.profiler'),
  Vs = Symbol.for('react.provider'),
  Hs = Symbol.for('react.context'),
  yi = Symbol.for('react.forward_ref'),
  ho = Symbol.for('react.suspense'),
  mo = Symbol.for('react.suspense_list'),
  wi = Symbol.for('react.memo'),
  et = Symbol.for('react.lazy'),
  Ws = Symbol.for('react.offscreen'),
  pu = Symbol.iterator;
function Sn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pu && e[pu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var K = Object.assign,
  Fl;
function Tn(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = (t && t[1]) || '';
    }
  return (
    `
` +
    Fl +
    e
  );
}
var Al = !1;
function Bl(e, t) {
  if (!e || Al) return '';
  Al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Tn(e) : '';
}
function If(e) {
  switch (e.tag) {
    case 5:
      return Tn(e.type);
    case 16:
      return Tn('Lazy');
    case 13:
      return Tn('Suspense');
    case 19:
      return Tn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Bl(e.type, !1)), e;
    case 11:
      return (e = Bl(e.type.render, !1)), e;
    case 1:
      return (e = Bl(e.type, !0)), e;
    default:
      return '';
  }
}
function vo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Wt:
      return 'Fragment';
    case Ht:
      return 'Portal';
    case po:
      return 'Profiler';
    case gi:
      return 'StrictMode';
    case ho:
      return 'Suspense';
    case mo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Hs:
        return (e.displayName || 'Context') + '.Consumer';
      case Vs:
        return (e._context.displayName || 'Context') + '.Provider';
      case yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case wi:
        return (
          (t = e.displayName || null), t !== null ? t : vo(e.type) || 'Memo'
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return vo(e(t));
        } catch {}
    }
  return null;
}
function zf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return vo(t);
    case 8:
      return t === gi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Qs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Of(e) {
  var t = Qs(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, {enumerable: n.enumerable}),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vr(e) {
  e._valueTracker || (e._valueTracker = Of(e));
}
function $s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Qs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function go(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Ks(e, t) {
  (t = t.checked), t != null && vi(e, 'checked', t, !1);
}
function yo(e, t) {
  Ks(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? wo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && wo(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function wo(e, t, n) {
  (t !== 'number' || Wr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Rn = Array.isArray;
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function So(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = {initialValue: vt(n)};
}
function Ys(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function gu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Gs(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ko(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Gs(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var gr,
  qs = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        gr = gr || document.createElement('div'),
          gr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Df = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zn).forEach(function (e) {
  Df.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
  });
});
function Js(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (zn.hasOwnProperty(e) && zn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Xs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Js(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Mf = K(
  {menuitem: !0},
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xo(e, t) {
  if (t) {
    if (Mf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function Eo(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Co = null;
function Si(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var No = null,
  tn = null,
  nn = null;
function yu(e) {
  if ((e = ar(e))) {
    if (typeof No != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = kl(t)), No(e.stateNode, e.type, t));
  }
}
function Zs(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function bs() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), yu(e), t)) for (e = 0; e < t.length; e++) yu(t[e]);
  }
}
function ea(e, t) {
  return e(t);
}
function ta() {}
var Vl = !1;
function na(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return ea(e, t, n);
  } finally {
    (Vl = !1), (tn !== null || nn !== null) && (ta(), bs());
  }
}
function Qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var Po = !1;
if (Ye)
  try {
    var kn = {};
    Object.defineProperty(kn, 'passive', {
      get: function () {
        Po = !0;
      },
    }),
      window.addEventListener('test', kn, kn),
      window.removeEventListener('test', kn, kn);
  } catch {
    Po = !1;
  }
function Uf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var On = !1,
  Qr = null,
  $r = !1,
  jo = null,
  Ff = {
    onError: function (e) {
      (On = !0), (Qr = e);
    },
  };
function Af(e, t, n, r, l, o, i, u, s) {
  (On = !1), (Qr = null), Uf.apply(Ff, arguments);
}
function Bf(e, t, n, r, l, o, i, u, s) {
  if ((Af.apply(this, arguments), On)) {
    if (On) {
      var a = Qr;
      (On = !1), (Qr = null);
    } else throw Error(k(198));
    $r || (($r = !0), (jo = a));
  }
}
function Ft(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ra(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wu(e) {
  if (Ft(e) !== e) throw Error(k(188));
}
function Vf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return wu(l), e;
        if (o === r) return wu(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function la(e) {
  return (e = Vf(e)), e !== null ? oa(e) : null;
}
function oa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = oa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ia = ke.unstable_scheduleCallback,
  Su = ke.unstable_cancelCallback,
  Hf = ke.unstable_shouldYield,
  Wf = ke.unstable_requestPaint,
  G = ke.unstable_now,
  Qf = ke.unstable_getCurrentPriorityLevel,
  ki = ke.unstable_ImmediatePriority,
  ua = ke.unstable_UserBlockingPriority,
  Kr = ke.unstable_NormalPriority,
  $f = ke.unstable_LowPriority,
  sa = ke.unstable_IdlePriority,
  gl = null,
  Be = null;
function Kf(e) {
  if (Be && typeof Be.onCommitFiberRoot == 'function')
    try {
      Be.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : qf,
  Yf = Math.log,
  Gf = Math.LN2;
function qf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yf(e) / Gf) | 0)) | 0;
}
var yr = 64,
  wr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Ln(u)) : ((o &= i), o !== 0 && (r = Ln(o)));
  } else (i = n & ~l), i !== 0 ? (r = Ln(i)) : o !== 0 && (r = Ln(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Jf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Jf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function _o(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function aa() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ur(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Zf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function xi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var U = 0;
function ca(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fa,
  Ei,
  da,
  pa,
  ha,
  To = !1,
  Sr = [],
  ut = null,
  st = null,
  at = null,
  $n = new Map(),
  Kn = new Map(),
  nt = [],
  bf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function ku(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ut = null;
      break;
    case 'dragenter':
    case 'dragleave':
      st = null;
      break;
    case 'mouseover':
    case 'mouseout':
      at = null;
      break;
    case 'pointerover':
    case 'pointerout':
      $n.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Kn.delete(t.pointerId);
  }
}
function xn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ar(t)), t !== null && Ei(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function ed(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (ut = xn(ut, e, t, n, r, l)), !0;
    case 'dragenter':
      return (st = xn(st, e, t, n, r, l)), !0;
    case 'mouseover':
      return (at = xn(at, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return $n.set(o, xn($n.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Kn.set(o, xn(Kn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ma(e) {
  var t = jt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ra(n)), t !== null)) {
          (e.blockedOn = t),
            ha(e.priority, function () {
              da(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ro(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Co = r), n.target.dispatchEvent(r), (Co = null);
    } else return (t = ar(n)), t !== null && Ei(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xu(e, t, n) {
  zr(e) && n.delete(t);
}
function td() {
  (To = !1),
    ut !== null && zr(ut) && (ut = null),
    st !== null && zr(st) && (st = null),
    at !== null && zr(at) && (at = null),
    $n.forEach(xu),
    Kn.forEach(xu);
}
function En(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    To ||
      ((To = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, td)));
}
function Yn(e) {
  function t(l) {
    return En(l, e);
  }
  if (0 < Sr.length) {
    En(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && En(ut, e),
      st !== null && En(st, e),
      at !== null && En(at, e),
      $n.forEach(t),
      Kn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    ma(n), n.blockedOn === null && nt.shift();
}
var rn = Xe.ReactCurrentBatchConfig,
  Gr = !0;
function nd(e, t, n, r) {
  var l = U,
    o = rn.transition;
  rn.transition = null;
  try {
    (U = 1), Ci(e, t, n, r);
  } finally {
    (U = l), (rn.transition = o);
  }
}
function rd(e, t, n, r) {
  var l = U,
    o = rn.transition;
  rn.transition = null;
  try {
    (U = 4), Ci(e, t, n, r);
  } finally {
    (U = l), (rn.transition = o);
  }
}
function Ci(e, t, n, r) {
  if (Gr) {
    var l = Ro(e, t, n, r);
    if (l === null) Zl(e, t, r, qr, n), ku(e, r);
    else if (ed(l, e, t, n, r)) r.stopPropagation();
    else if ((ku(e, r), t & 4 && -1 < bf.indexOf(e))) {
      for (; l !== null; ) {
        var o = ar(l);
        if (
          (o !== null && fa(o),
          (o = Ro(e, t, n, r)),
          o === null && Zl(e, t, r, qr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var qr = null;
function Ro(e, t, n, r) {
  if (((qr = null), (e = Si(r)), (e = jt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ra(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qr = e), null;
}
function va(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Qf()) {
        case ki:
          return 1;
        case ua:
          return 4;
        case Kr:
        case $f:
          return 16;
        case sa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  Ni = null,
  Or = null;
function ga() {
  if (Or) return Or;
  var e,
    t = Ni,
    n = t.length,
    r,
    l = 'value' in lt ? lt.value : lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Dr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function Eu() {
  return !1;
}
function Ee(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : Eu),
      (this.isPropagationStopped = Eu),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pi = Ee(mn),
  sr = K({}, mn, {view: 0, detail: 0}),
  ld = Ee(sr),
  Wl,
  Ql,
  Cn,
  yl = K({}, sr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ji,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Cn &&
            (Cn && e.type === 'mousemove'
              ? ((Wl = e.screenX - Cn.screenX), (Ql = e.screenY - Cn.screenY))
              : (Ql = Wl = 0),
            (Cn = e)),
          Wl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ql;
    },
  }),
  Cu = Ee(yl),
  od = K({}, yl, {dataTransfer: 0}),
  id = Ee(od),
  ud = K({}, sr, {relatedTarget: 0}),
  $l = Ee(ud),
  sd = K({}, mn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
  ad = Ee(sd),
  cd = K({}, mn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fd = Ee(cd),
  dd = K({}, mn, {data: 0}),
  Nu = Ee(dd),
  pd = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  hd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  md = {Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey'};
function vd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = md[e]) ? !!t[e] : !1;
}
function ji() {
  return vd;
}
var gd = K({}, sr, {
    key: function (e) {
      if (e.key) {
        var t = pd[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Dr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? hd[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ji,
    charCode: function (e) {
      return e.type === 'keypress' ? Dr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Dr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  yd = Ee(gd),
  wd = K({}, yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pu = Ee(wd),
  Sd = K({}, sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ji,
  }),
  kd = Ee(Sd),
  xd = K({}, mn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
  Ed = Ee(xd),
  Cd = K({}, yl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nd = Ee(Cd),
  Pd = [9, 13, 27, 32],
  _i = Ye && 'CompositionEvent' in window,
  Dn = null;
Ye && 'documentMode' in document && (Dn = document.documentMode);
var jd = Ye && 'TextEvent' in window && !Dn,
  ya = Ye && (!_i || (Dn && 8 < Dn && 11 >= Dn)),
  ju = String.fromCharCode(32),
  _u = !1;
function wa(e, t) {
  switch (e) {
    case 'keyup':
      return Pd.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Sa(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Qt = !1;
function _d(e, t) {
  switch (e) {
    case 'compositionend':
      return Sa(t);
    case 'keypress':
      return t.which !== 32 ? null : ((_u = !0), ju);
    case 'textInput':
      return (e = t.data), e === ju && _u ? null : e;
    default:
      return null;
  }
}
function Td(e, t) {
  if (Qt)
    return e === 'compositionend' || (!_i && wa(e, t))
      ? ((e = ga()), (Or = Ni = lt = null), (Qt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ya && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Rd = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Rd[e.type] : t === 'textarea';
}
function ka(e, t, n, r) {
  Zs(r),
    (t = Jr(t, 'onChange')),
    0 < t.length &&
      ((n = new Pi('onChange', 'change', null, n, r)),
      e.push({event: n, listeners: t}));
}
var Mn = null,
  Gn = null;
function Ld(e) {
  Ia(e, 0);
}
function wl(e) {
  var t = Yt(e);
  if ($s(t)) return e;
}
function Id(e, t) {
  if (e === 'change') return t;
}
var xa = !1;
if (Ye) {
  var Kl;
  if (Ye) {
    var Yl = 'oninput' in document;
    if (!Yl) {
      var Ru = document.createElement('div');
      Ru.setAttribute('oninput', 'return;'),
        (Yl = typeof Ru.oninput == 'function');
    }
    Kl = Yl;
  } else Kl = !1;
  xa = Kl && (!document.documentMode || 9 < document.documentMode);
}
function Lu() {
  Mn && (Mn.detachEvent('onpropertychange', Ea), (Gn = Mn = null));
}
function Ea(e) {
  if (e.propertyName === 'value' && wl(Gn)) {
    var t = [];
    ka(t, Gn, e, Si(e)), na(Ld, t);
  }
}
function zd(e, t, n) {
  e === 'focusin'
    ? (Lu(), (Mn = t), (Gn = n), Mn.attachEvent('onpropertychange', Ea))
    : e === 'focusout' && Lu();
}
function Od(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return wl(Gn);
}
function Dd(e, t) {
  if (e === 'click') return wl(t);
}
function Md(e, t) {
  if (e === 'input' || e === 'change') return wl(t);
}
function Ud(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == 'function' ? Object.is : Ud;
function qn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!fo.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = Iu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {node: n, offset: t - e};
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Iu(n);
  }
}
function Ca(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ca(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Na() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function Ti(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Fd(e) {
  var t = Na(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ca(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ti(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = zu(n, o));
        var i = zu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ad = Ye && 'documentMode' in document && 11 >= document.documentMode,
  $t = null,
  Lo = null,
  Un = null,
  Io = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Io ||
    $t == null ||
    $t !== Wr(r) ||
    ((r = $t),
    'selectionStart' in r && Ti(r)
      ? (r = {start: r.selectionStart, end: r.selectionEnd})
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && qn(Un, r)) ||
      ((Un = r),
      (r = Jr(Lo, 'onSelect')),
      0 < r.length &&
        ((t = new Pi('onSelect', 'select', null, t, n)),
        e.push({event: t, listeners: r}),
        (t.target = $t))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Kt = {
    animationend: xr('Animation', 'AnimationEnd'),
    animationiteration: xr('Animation', 'AnimationIteration'),
    animationstart: xr('Animation', 'AnimationStart'),
    transitionend: xr('Transition', 'TransitionEnd'),
  },
  Gl = {},
  Pa = {};
Ye &&
  ((Pa = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Kt.animationend.animation,
    delete Kt.animationiteration.animation,
    delete Kt.animationstart.animation),
  'TransitionEvent' in window || delete Kt.transitionend.transition);
function Sl(e) {
  if (Gl[e]) return Gl[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Pa) return (Gl[e] = t[n]);
  return e;
}
var ja = Sl('animationend'),
  _a = Sl('animationiteration'),
  Ta = Sl('animationstart'),
  Ra = Sl('transitionend'),
  La = new Map(),
  Du =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function yt(e, t) {
  La.set(e, t), Ut(t, [e]);
}
for (var ql = 0; ql < Du.length; ql++) {
  var Jl = Du[ql],
    Bd = Jl.toLowerCase(),
    Vd = Jl[0].toUpperCase() + Jl.slice(1);
  yt(Bd, 'on' + Vd);
}
yt(ja, 'onAnimationEnd');
yt(_a, 'onAnimationIteration');
yt(Ta, 'onAnimationStart');
yt('dblclick', 'onDoubleClick');
yt('focusin', 'onFocus');
yt('focusout', 'onBlur');
yt(Ra, 'onTransitionEnd');
un('onMouseEnter', ['mouseout', 'mouseover']);
un('onMouseLeave', ['mouseout', 'mouseover']);
un('onPointerEnter', ['pointerout', 'pointerover']);
un('onPointerLeave', ['pointerout', 'pointerover']);
Ut(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Ut(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Ut('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ut(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Ut(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Ut(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var In =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Hd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(In));
function Mu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Bf(r, t, void 0, e), (e.currentTarget = null);
}
function Ia(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Mu(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Mu(l, u, a), (o = s);
        }
    }
  }
  if ($r) throw ((e = jo), ($r = !1), (jo = null), e);
}
function B(e, t) {
  var n = t[Uo];
  n === void 0 && (n = t[Uo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (za(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), za(n, e, r, t);
}
var Er = '_reactListening' + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Bs.forEach(function (n) {
        n !== 'selectionchange' && (Hd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), Xl('selectionchange', !1, t));
  }
}
function za(e, t, n, r) {
  switch (va(t)) {
    case 1:
      var l = nd;
      break;
    case 4:
      l = rd;
      break;
    default:
      l = Ci;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Po ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, {capture: !0, passive: l})
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, {passive: l})
      : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = jt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  na(function () {
    var a = o,
      p = Si(n),
      m = [];
    e: {
      var h = La.get(e);
      if (h !== void 0) {
        var S = Pi,
          w = e;
        switch (e) {
          case 'keypress':
            if (Dr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = yd;
            break;
          case 'focusin':
            (w = 'focus'), (S = $l);
            break;
          case 'focusout':
            (w = 'blur'), (S = $l);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = $l;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            S = Cu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = id;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = kd;
            break;
          case ja:
          case _a:
          case Ta:
            S = ad;
            break;
          case Ra:
            S = Ed;
            break;
          case 'scroll':
            S = ld;
            break;
          case 'wheel':
            S = Nd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = fd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = Pu;
        }
        var y = (t & 4) !== 0,
          _ = !y && e === 'scroll',
          f = y ? (h !== null ? h + 'Capture' : null) : h;
        y = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Qn(c, f)), v != null && y.push(Xn(c, v, d)))),
            _)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((h = new S(h, w, null, n, p)), m.push({event: h, listeners: y}));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== Co &&
            (w = n.relatedTarget || n.fromElement) &&
            (jt(w) || w[Ge]))
        )
          break e;
        if (
          (S || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          S
            ? ((w = n.relatedTarget || n.toElement),
              (S = a),
              (w = w ? jt(w) : null),
              w !== null &&
                ((_ = Ft(w)), w !== _ || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = a)),
          S !== w)
        ) {
          if (
            ((y = Cu),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Pu),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (_ = S == null ? h : Yt(S)),
            (d = w == null ? h : Yt(w)),
            (h = new y(v, c + 'leave', S, n, p)),
            (h.target = _),
            (h.relatedTarget = d),
            (v = null),
            jt(p) === a &&
              ((y = new y(f, c + 'enter', w, n, p)),
              (y.target = d),
              (y.relatedTarget = _),
              (v = y)),
            (_ = v),
            S && w)
          )
            t: {
              for (y = S, f = w, c = 0, d = y; d; d = Vt(d)) c++;
              for (d = 0, v = f; v; v = Vt(v)) d++;
              for (; 0 < c - d; ) (y = Vt(y)), c--;
              for (; 0 < d - c; ) (f = Vt(f)), d--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = Vt(y)), (f = Vt(f));
              }
              y = null;
            }
          else y = null;
          S !== null && Uu(m, h, S, y, !1),
            w !== null && _ !== null && Uu(m, _, w, y, !0);
        }
      }
      e: {
        if (
          ((h = a ? Yt(a) : window),
          (S = h.nodeName && h.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && h.type === 'file'))
        )
          var E = Id;
        else if (Tu(h))
          if (xa) E = Md;
          else {
            E = Od;
            var P = zd;
          }
        else
          (S = h.nodeName) &&
            S.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (E = Dd);
        if (E && (E = E(e, a))) {
          ka(m, E, n, p);
          break e;
        }
        P && P(e, h, a),
          e === 'focusout' &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === 'number' &&
            wo(h, 'number', h.value);
      }
      switch (((P = a ? Yt(a) : window), e)) {
        case 'focusin':
          (Tu(P) || P.contentEditable === 'true') &&
            (($t = P), (Lo = a), (Un = null));
          break;
        case 'focusout':
          Un = Lo = $t = null;
          break;
        case 'mousedown':
          Io = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Io = !1), Ou(m, n, p);
          break;
        case 'selectionchange':
          if (Ad) break;
        case 'keydown':
        case 'keyup':
          Ou(m, n, p);
      }
      var j;
      if (_i)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        Qt
          ? wa(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (ya &&
          n.locale !== 'ko' &&
          (Qt || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Qt && (j = ga())
            : ((lt = p),
              (Ni = 'value' in lt ? lt.value : lt.textContent),
              (Qt = !0))),
        (P = Jr(a, T)),
        0 < P.length &&
          ((T = new Nu(T, e, null, n, p)),
          m.push({event: T, listeners: P}),
          j ? (T.data = j) : ((j = Sa(n)), j !== null && (T.data = j)))),
        (j = jd ? _d(e, n) : Td(e, n)) &&
          ((a = Jr(a, 'onBeforeInput')),
          0 < a.length &&
            ((p = new Nu('onBeforeInput', 'beforeinput', null, n, p)),
            m.push({event: p, listeners: a}),
            (p.data = j)));
    }
    Ia(m, t);
  });
}
function Xn(e, t, n) {
  return {instance: e, listener: t, currentTarget: n};
}
function Jr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qn(e, n)),
      o != null && r.unshift(Xn(e, o, l)),
      (o = Qn(e, t)),
      o != null && r.push(Xn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Qn(n, o)), s != null && i.unshift(Xn(n, s, u)))
        : l || ((s = Qn(n, o)), s != null && i.push(Xn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({event: t, listeners: i});
}
var Wd = /\r\n?/g,
  Qd = /\u0000|\uFFFD/g;
function Fu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Wd,
      `
`
    )
    .replace(Qd, '');
}
function Cr(e, t, n) {
  if (((t = Fu(t)), Fu(e) !== t && n)) throw Error(k(425));
}
function Xr() {}
var zo = null,
  Oo = null;
function Do(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Mo = typeof setTimeout == 'function' ? setTimeout : void 0,
  $d = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Au = typeof Promise == 'function' ? Promise : void 0,
  Kd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Au < 'u'
      ? function (e) {
          return Au.resolve(null).then(e).catch(Yd);
        }
      : Mo;
function Yd(e) {
  setTimeout(function () {
    throw e;
  });
}
function bl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Yn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Bu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vn = Math.random().toString(36).slice(2),
  Ae = '__reactFiber$' + vn,
  Zn = '__reactProps$' + vn,
  Ge = '__reactContainer$' + vn,
  Uo = '__reactEvents$' + vn,
  Gd = '__reactListeners$' + vn,
  qd = '__reactHandles$' + vn;
function jt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bu(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = Bu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ar(e) {
  return (
    (e = e[Ae] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function kl(e) {
  return e[Zn] || null;
}
var Fo = [],
  Gt = -1;
function wt(e) {
  return {current: e};
}
function V(e) {
  0 > Gt || ((e.current = Fo[Gt]), (Fo[Gt] = null), Gt--);
}
function A(e, t) {
  Gt++, (Fo[Gt] = e.current), (e.current = t);
}
var gt = {},
  ue = wt(gt),
  he = wt(!1),
  It = gt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function Zr() {
  V(he), V(ue);
}
function Vu(e, t, n) {
  if (ue.current !== gt) throw Error(k(168));
  A(ue, t), A(he, n);
}
function Oa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, zf(e) || 'Unknown', l));
  return K({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (It = ue.current),
    A(ue, e),
    A(he, he.current),
    !0
  );
}
function Hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Oa(e, t, It)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(he),
      V(ue),
      A(ue, e))
    : V(he),
    A(he, n);
}
var We = null,
  xl = !1,
  eo = !1;
function Da(e) {
  We === null ? (We = [e]) : We.push(e);
}
function Jd(e) {
  (xl = !0), Da(e);
}
function St() {
  if (!eo && We !== null) {
    eo = !0;
    var e = 0,
      t = U;
    try {
      var n = We;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (xl = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), ia(ki, St), l);
    } finally {
      (U = t), (eo = !1);
    }
  }
  return null;
}
var qt = [],
  Jt = 0,
  el = null,
  tl = 0,
  Ce = [],
  Ne = 0,
  zt = null,
  Qe = 1,
  $e = '';
function Nt(e, t) {
  (qt[Jt++] = tl), (qt[Jt++] = el), (el = e), (tl = t);
}
function Ma(e, t, n) {
  (Ce[Ne++] = Qe), (Ce[Ne++] = $e), (Ce[Ne++] = zt), (zt = e);
  var r = Qe;
  e = $e;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Qe = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      ($e = o + e);
  } else (Qe = (1 << o) | (n << l) | r), ($e = e);
}
function Ri(e) {
  e.return !== null && (Nt(e, 1), Ma(e, 1, 0));
}
function Li(e) {
  for (; e === el; )
    (el = qt[--Jt]), (qt[Jt] = null), (tl = qt[--Jt]), (qt[Jt] = null);
  for (; e === zt; )
    (zt = Ce[--Ne]),
      (Ce[Ne] = null),
      ($e = Ce[--Ne]),
      (Ce[Ne] = null),
      (Qe = Ce[--Ne]),
      (Ce[Ne] = null);
}
var Se = null,
  we = null,
  H = !1,
  ze = null;
function Ua(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (we = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? {id: Qe, overflow: $e} : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bo(e) {
  if (H) {
    var t = we;
    if (t) {
      var n = t;
      if (!Wu(e, t)) {
        if (Ao(e)) throw Error(k(418));
        t = ct(n.nextSibling);
        var r = Se;
        t && Wu(e, t)
          ? Ua(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e));
      }
    } else {
      if (Ao(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e);
    }
  }
}
function Qu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Nr(e) {
  if (e !== Se) return !1;
  if (!H) return Qu(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Do(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Ao(e)) throw (Fa(), Error(k(418)));
    for (; t; ) Ua(e, t), (t = ct(t.nextSibling));
  }
  if ((Qu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              we = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Fa() {
  for (var e = we; e; ) e = ct(e.nextSibling);
}
function an() {
  (we = Se = null), (H = !1);
}
function Ii(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var Xd = Xe.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var nl = wt(null),
  rl = null,
  Xt = null,
  zi = null;
function Oi() {
  zi = Xt = rl = null;
}
function Di(e) {
  var t = nl.current;
  V(nl), (e._currentValue = t);
}
function Vo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ln(e, t) {
  (rl = e),
    (zi = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (zi !== e)
    if (((e = {context: e, memoizedValue: t, next: null}), Xt === null)) {
      if (rl === null) throw Error(k(308));
      (Xt = e), (rl.dependencies = {lanes: 0, firstContext: e});
    } else Xt = Xt.next = e;
  return t;
}
var _t = null;
function Mi(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Aa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Mi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    qe(e, r)
  );
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function Ui(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {pending: null, interleaved: null, lanes: 0},
    effects: null,
  };
}
function Ba(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Mi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    qe(e, n)
  );
}
function Mr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xi(e, n);
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var h = u.lane,
        S = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((h = t), (S = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == 'function')) {
                m = w.call(S, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (h = typeof w == 'function' ? w.call(S, m, h) : w),
                h == null)
              )
                break e;
              m = K({}, m, h);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (S = {
          eventTime: S,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = S), (s = m)) : (p = p.next = S),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Dt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Va = new As.Component().refs;
function Ho(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = pt(e),
      o = Ke(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ft(e, o, l)),
      t !== null && (De(t, e, l, r), Mr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = pt(e),
      o = Ke(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ft(e, o, l)),
      t !== null && (De(t, e, l, r), Mr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = pt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ft(e, l, r)),
      t !== null && (De(t, e, r, n), Mr(t, e, r));
  },
};
function Yu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qn(n, r) || !qn(l, o)
      : !0
  );
}
function Ha(e, t, n) {
  var r = !1,
    l = gt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = _e(o))
      : ((l = me(t) ? It : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? sn(e, l) : gt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Gu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Wo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Va), Ui(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = _e(o))
    : ((o = me(t) ? It : ue.current), (l.context = sn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Ho(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Nn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Va && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function qu(e) {
  var t = e._init;
  return t(e._payload);
}
function Wa(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = ht(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = uo(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var E = d.type;
    return E === Wt
      ? p(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === et &&
            qu(E) === c.type))
      ? ((v = l(c, d.props)), (v.ref = Nn(f, c, d)), (v.return = f), v)
      : ((v = Hr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = Nn(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = so(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, v, E) {
    return c === null || c.tag !== 7
      ? ((c = Lt(d, f.mode, v, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function m(f, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = uo('' + c, f.mode, d)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case mr:
          return (
            (d = Hr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Nn(f, null, c)),
            (d.return = f),
            d
          );
        case Ht:
          return (c = so(c, f.mode, d)), (c.return = f), c;
        case et:
          var v = c._init;
          return m(f, v(c._payload), d);
      }
      if (Rn(c) || Sn(c))
        return (c = Lt(c, f.mode, d, null)), (c.return = f), c;
      Pr(f, c);
    }
    return null;
  }
  function h(f, c, d, v) {
    var E = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, c, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case mr:
          return d.key === E ? s(f, c, d, v) : null;
        case Ht:
          return d.key === E ? a(f, c, d, v) : null;
        case et:
          return (E = d._init), h(f, c, E(d._payload), v);
      }
      if (Rn(d) || Sn(d)) return E !== null ? null : p(f, c, d, v, null);
      Pr(f, d);
    }
    return null;
  }
  function S(f, c, d, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(c, f, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case mr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, E);
        case Ht:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, E);
        case et:
          var P = v._init;
          return S(f, c, d, P(v._payload), E);
      }
      if (Rn(v) || Sn(v)) return (f = f.get(d) || null), p(c, f, v, E, null);
      Pr(c, v);
    }
    return null;
  }
  function w(f, c, d, v) {
    for (
      var E = null, P = null, j = c, T = (c = 0), W = null;
      j !== null && T < d.length;
      T++
    ) {
      j.index > T ? ((W = j), (j = null)) : (W = j.sibling);
      var z = h(f, j, d[T], v);
      if (z === null) {
        j === null && (j = W);
        break;
      }
      e && j && z.alternate === null && t(f, j),
        (c = o(z, c, T)),
        P === null ? (E = z) : (P.sibling = z),
        (P = z),
        (j = W);
    }
    if (T === d.length) return n(f, j), H && Nt(f, T), E;
    if (j === null) {
      for (; T < d.length; T++)
        (j = m(f, d[T], v)),
          j !== null &&
            ((c = o(j, c, T)), P === null ? (E = j) : (P.sibling = j), (P = j));
      return H && Nt(f, T), E;
    }
    for (j = r(f, j); T < d.length; T++)
      (W = S(j, f, T, d[T], v)),
        W !== null &&
          (e && W.alternate !== null && j.delete(W.key === null ? T : W.key),
          (c = o(W, c, T)),
          P === null ? (E = W) : (P.sibling = W),
          (P = W));
    return (
      e &&
        j.forEach(function (ge) {
          return t(f, ge);
        }),
      H && Nt(f, T),
      E
    );
  }
  function y(f, c, d, v) {
    var E = Sn(d);
    if (typeof E != 'function') throw Error(k(150));
    if (((d = E.call(d)), d == null)) throw Error(k(151));
    for (
      var P = (E = null), j = c, T = (c = 0), W = null, z = d.next();
      j !== null && !z.done;
      T++, z = d.next()
    ) {
      j.index > T ? ((W = j), (j = null)) : (W = j.sibling);
      var ge = h(f, j, z.value, v);
      if (ge === null) {
        j === null && (j = W);
        break;
      }
      e && j && ge.alternate === null && t(f, j),
        (c = o(ge, c, T)),
        P === null ? (E = ge) : (P.sibling = ge),
        (P = ge),
        (j = W);
    }
    if (z.done) return n(f, j), H && Nt(f, T), E;
    if (j === null) {
      for (; !z.done; T++, z = d.next())
        (z = m(f, z.value, v)),
          z !== null &&
            ((c = o(z, c, T)), P === null ? (E = z) : (P.sibling = z), (P = z));
      return H && Nt(f, T), E;
    }
    for (j = r(f, j); !z.done; T++, z = d.next())
      (z = S(j, f, T, z.value, v)),
        z !== null &&
          (e && z.alternate !== null && j.delete(z.key === null ? T : z.key),
          (c = o(z, c, T)),
          P === null ? (E = z) : (P.sibling = z),
          (P = z));
    return (
      e &&
        j.forEach(function (kt) {
          return t(f, kt);
        }),
      H && Nt(f, T),
      E
    );
  }
  function _(f, c, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Wt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case mr:
          e: {
            for (var E = d.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (((E = d.type), E === Wt)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === et &&
                    qu(E) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = Nn(f, P, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Wt
              ? ((c = Lt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Hr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = Nn(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Ht:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = so(d, f.mode, v)), (c.return = f), (f = c);
          }
          return i(f);
        case et:
          return (P = d._init), _(f, c, P(d._payload), v);
      }
      if (Rn(d)) return w(f, c, d, v);
      if (Sn(d)) return y(f, c, d, v);
      Pr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = uo(d, f.mode, v)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return _;
}
var cn = Wa(!0),
  Qa = Wa(!1),
  cr = {},
  Ve = wt(cr),
  bn = wt(cr),
  er = wt(cr);
function Tt(e) {
  if (e === cr) throw Error(k(174));
  return e;
}
function Fi(e, t) {
  switch ((A(er, t), A(bn, e), A(Ve, cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ko(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ko(t, e));
  }
  V(Ve), A(Ve, t);
}
function fn() {
  V(Ve), V(bn), V(er);
}
function $a(e) {
  Tt(er.current);
  var t = Tt(Ve.current),
    n = ko(t, e.type);
  t !== n && (A(bn, e), A(Ve, n));
}
function Ai(e) {
  bn.current === e && (V(Ve), V(bn));
}
var Q = wt(0);
function ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var to = [];
function Bi() {
  for (var e = 0; e < to.length; e++)
    to[e]._workInProgressVersionPrimary = null;
  to.length = 0;
}
var Ur = Xe.ReactCurrentDispatcher,
  no = Xe.ReactCurrentBatchConfig,
  Ot = 0,
  $ = null,
  X = null,
  b = null,
  il = !1,
  Fn = !1,
  tr = 0,
  Zd = 0;
function le() {
  throw Error(k(321));
}
function Vi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Hi(e, t, n, r, l, o) {
  if (
    ((Ot = o),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? np : rp),
    (e = n(r, l)),
    Fn)
  ) {
    o = 0;
    do {
      if (((Fn = !1), (tr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (b = X = null),
        (t.updateQueue = null),
        (Ur.current = lp),
        (e = n(r, l));
    } while (Fn);
  }
  if (
    ((Ur.current = ul),
    (t = X !== null && X.next !== null),
    (Ot = 0),
    (b = X = $ = null),
    (il = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Wi() {
  var e = tr !== 0;
  return (tr = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? ($.memoizedState = b = e) : (b = b.next = e), b;
}
function Te() {
  if (X === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = b === null ? $.memoizedState : b.next;
  if (t !== null) (b = t), (X = e);
  else {
    if (e === null) throw Error(k(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      b === null ? ($.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function nr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ro(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Ot & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          ($.lanes |= p),
          (Dt |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Me(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (Dt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function lo(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ka() {}
function Ya(e, t) {
  var n = $,
    r = Te(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Qi(Ja.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rr(9, qa.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(k(349));
    Ot & 30 || Ga(n, t, l);
  }
  return l;
}
function Ga(e, t, n) {
  (e.flags |= 16384),
    (e = {getSnapshot: t, value: n}),
    (t = $.updateQueue),
    t === null
      ? ((t = {lastEffect: null, stores: null}),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Xa(t) && Za(e);
}
function Ja(e, t, n) {
  return n(function () {
    Xa(t) && Za(e);
  });
}
function Xa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Za(e) {
  var t = qe(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Ju(e) {
  var t = Fe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tp.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function rr(e, t, n, r) {
  return (
    (e = {tag: e, create: t, destroy: n, deps: r, next: null}),
    (t = $.updateQueue),
    t === null
      ? ((t = {lastEffect: null, stores: null}),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ba() {
  return Te().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Fe();
  ($.flags |= e),
    (l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cl(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Vi(r, i.deps))) {
      l.memoizedState = rr(t, n, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = rr(1 | t, n, o, r));
}
function Xu(e, t) {
  return Fr(8390656, 8, e, t);
}
function Qi(e, t) {
  return Cl(2048, 8, e, t);
}
function ec(e, t) {
  return Cl(4, 2, e, t);
}
function tc(e, t) {
  return Cl(4, 4, e, t);
}
function nc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function rc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cl(4, 4, nc.bind(null, t, e), n)
  );
}
function $i() {}
function lc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ic(e, t, n) {
  return Ot & 21
    ? (Me(n, t) || ((n = aa()), ($.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function bd(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = no.transition;
  no.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (no.transition = r);
  }
}
function uc() {
  return Te().memoizedState;
}
function ep(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sc(e))
  )
    ac(t, n);
  else if (((n = Aa(e, t, n, r)), n !== null)) {
    var l = ae();
    De(n, e, r, l), cc(n, t, r);
  }
}
function tp(e, t, n) {
  var r = pt(e),
    l = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
  if (sc(e)) ac(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Mi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Aa(e, t, l, r)),
      n !== null && ((l = ae()), De(n, e, r, l), cc(n, t, r));
  }
}
function sc(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function ac(e, t) {
  Fn = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xi(e, n);
  }
}
var ul = {
    readContext: _e,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Xu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fr(4194308, 4, nc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ep.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = {current: e}), (t.memoizedState = e);
    },
    useState: Ju,
    useDebugValue: $i,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Ju(!1),
        t = e[0];
      return (e = bd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Fe();
      if (H) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(k(349));
        Ot & 30 || Ga(r, t, n);
      }
      l.memoizedState = n;
      var o = {value: n, getSnapshot: t};
      return (
        (l.queue = o),
        Xu(Ja.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rr(9, qa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = ee.identifierPrefix;
      if (H) {
        var n = $e,
          r = Qe;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = tr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Zd++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: _e,
    useCallback: lc,
    useContext: _e,
    useEffect: Qi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: ro,
    useRef: ba,
    useState: function () {
      return ro(nr);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Te();
      return ic(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ro(nr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Ya,
    useId: uc,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: _e,
    useCallback: lc,
    useContext: _e,
    useEffect: Qi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: lo,
    useRef: ba,
    useState: function () {
      return lo(nr);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Te();
      return X === null ? (t.memoizedState = e) : ic(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(nr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Ya,
    useId: uc,
    unstable_isNewReconciler: !1,
  };
function dn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += If(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return {value: e, source: t, stack: l, digest: null};
}
function oo(e, t, n) {
  return {value: e, source: null, stack: n ?? null, digest: t ?? null};
}
function Qo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var op = typeof WeakMap == 'function' ? WeakMap : Map;
function fc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = {element: null});
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (ei = r)), Qo(e, t);
    }),
    n
  );
}
function dc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Qo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Qo(e, t),
          typeof r != 'function' &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {componentStack: i !== null ? i : ''});
      }),
    n
  );
}
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new op();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = wp.bind(null, e, t, n)), t.then(e, e));
}
function bu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function es(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ip = Xe.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Qa(t, null, n, r) : cn(t, e.child, n, r);
}
function ts(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    ln(t, l),
    (r = Hi(e, t, n, r, o, l)),
    (n = Wi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (H && n && Ri(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function ns(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !bi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), pc(e, t, o, r, l))
      : ((e = Hr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qn), n(i, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ht(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (qn(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Je(e, t, l);
  }
  return $o(e, t, n, r, l);
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
        A(bt, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(bt, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
        (r = o !== null ? o.baseLanes : n),
        A(bt, ye),
        (ye |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(bt, ye),
      (ye |= r);
  return se(e, t, l, n), t.child;
}
function mc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $o(e, t, n, r, l) {
  var o = me(n) ? It : ue.current;
  return (
    (o = sn(t, o)),
    ln(t, l),
    (n = Hi(e, t, n, r, o, l)),
    (r = Wi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (H && r && Ri(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function rs(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    br(t);
  } else o = !1;
  if ((ln(t, l), t.stateNode === null))
    Ar(e, t), Ha(t, n, r), Wo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = _e(a))
      : ((a = me(n) ? It : ue.current), (a = sn(t, a)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Gu(t, i, r, a)),
      (tt = !1);
    var h = t.memoizedState;
    (i.state = h),
      ll(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || he.current || tt
        ? (typeof p == 'function' && (Ho(t, n, p, r), (s = t.memoizedState)),
          (u = tt || Yu(t, n, u, r, h, s, a))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ba(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = a),
      (m = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = _e(s))
        : ((s = me(n) ? It : ue.current), (s = sn(t, s)));
    var S = n.getDerivedStateFromProps;
    (p =
      typeof S == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== m || h !== s) && Gu(t, i, r, s)),
      (tt = !1),
      (h = t.memoizedState),
      (i.state = h),
      ll(t, r, i, l);
    var w = t.memoizedState;
    u !== m || h !== w || he.current || tt
      ? (typeof S == 'function' && (Ho(t, n, S, r), (w = t.memoizedState)),
        (a = tt || Yu(t, n, a, r, h, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ko(e, t, n, r, o, l);
}
function Ko(e, t, n, r, l, o) {
  mc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Hu(t, n, !1), Je(e, t, o);
  (r = t.stateNode), (ip.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = cn(t, e.child, null, o)), (t.child = cn(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && Hu(t, n, !0),
    t.child
  );
}
function vc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vu(e, t.context, !1),
    Fi(e, t.containerInfo);
}
function ls(e, t, n, r, l) {
  return an(), Ii(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Yo = {dehydrated: null, treeContext: null, retryLane: 0};
function Go(e) {
  return {baseLanes: e, cachePool: null, transitions: null};
}
function gc(e, t, n) {
  var r = t.pendingProps,
    l = Q.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(Q, l & 1),
    e === null)
  )
    return (
      Bo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = {mode: 'hidden', children: i}),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = jl(i, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Go(n)),
              (t.memoizedState = Yo),
              e)
            : Ki(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return up(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = {mode: 'hidden', children: r.children};
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ht(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ht(u, o)) : ((o = Lt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Go(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ht(o, {mode: 'visible', children: r.children})),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ki(e, t) {
  return (
    (t = jl({mode: 'visible', children: t}, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && Ii(r),
    cn(t, e.child, null, n),
    (e = Ki(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function up(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = oo(Error(k(422)))), jr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = jl({mode: 'visible', children: r.children}, l, 0, null)),
        (o = Lt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && cn(t, e.child, null, i),
        (t.child.memoizedState = Go(i)),
        (t.memoizedState = Yo),
        o);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = oo(o, r, void 0)), jr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), pe || u)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), qe(e, l), De(r, e, l, -1));
    }
    return Zi(), (r = oo(Error(k(421)))), jr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (we = ct(l.nextSibling)),
      (Se = t),
      (H = !0),
      (ze = null),
      e !== null &&
        ((Ce[Ne++] = Qe),
        (Ce[Ne++] = $e),
        (Ce[Ne++] = zt),
        (Qe = e.id),
        ($e = e.overflow),
        (zt = t)),
      (t = Ki(t, r.children)),
      (t.flags |= 4096),
      t);
}
function os(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vo(e.return, t, n);
}
function io(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function yc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && os(e, n, t);
        else if (e.tag === 19) os(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          io(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        io(t, !0, n, null, o);
        break;
      case 'together':
        io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sp(e, t, n) {
  switch (t.tag) {
    case 3:
      vc(t), an();
      break;
    case 5:
      $a(t);
      break;
    case 1:
      me(t.type) && br(t);
      break;
    case 4:
      Fi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gc(e, t, n)
          : (A(Q, Q.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      A(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hc(e, t, n);
  }
  return Je(e, t, n);
}
var wc, qo, Sc, kc;
wc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qo = function () {};
Sc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Tt(Ve.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = go(e, l)), (r = go(e, r)), (o = []);
        break;
      case 'select':
        (l = K({}, l, {value: void 0})),
          (r = K({}, r, {value: void 0})),
          (o = []);
        break;
      case 'textarea':
        (l = So(e, l)), (r = So(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Xr);
    }
    xo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === 'style') {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Hn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Hn.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && B('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
kc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ap(e, t, n) {
  var r = t.pendingProps;
  switch ((Li(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return me(t.type) && Zr(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fn(),
        V(he),
        V(ue),
        Bi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (ri(ze), (ze = null)))),
        qo(e, t),
        oe(t),
        null
      );
    case 5:
      Ai(t);
      var l = Tt(er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return oe(t), null;
        }
        if (((e = Tt(Ve.current)), Nr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ae] = t), (r[Zn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              B('cancel', r), B('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < In.length; l++) B(In[l], r);
              break;
            case 'source':
              B('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              B('error', r), B('load', r);
              break;
            case 'details':
              B('toggle', r);
              break;
            case 'input':
              hu(r, o), B('invalid', r);
              break;
            case 'select':
              (r._wrapperState = {wasMultiple: !!o.multiple}), B('invalid', r);
              break;
            case 'textarea':
              vu(r, o), B('invalid', r);
          }
          xo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Hn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  B('scroll', r);
            }
          switch (n) {
            case 'input':
              vr(r), mu(r, o, !0);
              break;
            case 'textarea':
              vr(r), gu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Xr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Gs(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, {is: r.is}))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ae] = t),
            (e[Zn] = r),
            wc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Eo(n, r)), n)) {
              case 'dialog':
                B('cancel', e), B('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                B('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < In.length; l++) B(In[l], e);
                l = r;
                break;
              case 'source':
                B('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                B('error', e), B('load', e), (l = r);
                break;
              case 'details':
                B('toggle', e), (l = r);
                break;
              case 'input':
                hu(e, r), (l = go(e, r)), B('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = {wasMultiple: !!r.multiple}),
                  (l = K({}, r, {value: void 0})),
                  B('invalid', e);
                break;
              case 'textarea':
                vu(e, r), (l = So(e, r)), B('invalid', e);
                break;
              default:
                l = r;
            }
            xo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? Xs(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && qs(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Wn(e, s)
                    : typeof s == 'number' && Wn(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Hn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && B('scroll', e)
                      : s != null && vi(e, o, s, i));
              }
            switch (n) {
              case 'input':
                vr(e), mu(e, r, !1);
                break;
              case 'textarea':
                vr(e), gu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + vt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? en(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      en(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Xr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = Tt(er.current)), Tt(Ve.current), Nr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (o = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (V(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && we !== null && t.mode & 1 && !(t.flags & 128))
          Fa(), an(), (t.flags |= 98560), (o = !1);
        else if (((o = Nr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[Ae] = t;
          } else
            an(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else ze !== null && (ri(ze), (ze = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? Z === 0 && (Z = 3) : Zi())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        fn(), qo(e, t), e === null && Jn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Di(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && Zr(), oe(t), null;
    case 19:
      if ((V(Q), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pn(o, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ol(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {lanes: e.lanes, firstContext: e.firstContext})),
                    (n = n.sibling);
                return A(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > pn &&
            ((t.flags |= 128), (r = !0), Pn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ol(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !H)
            )
              return oe(t), null;
          } else
            2 * G() - o.renderingStartTime > pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = Q.current),
          A(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Xi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function cp(e, t) {
  switch ((Li(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Zr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        fn(),
        V(he),
        V(ue),
        Bi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ai(t), null;
    case 13:
      if ((V(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        an();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(Q), null;
    case 4:
      return fn(), null;
    case 10:
      return Di(t.type._context), null;
    case 22:
    case 23:
      return Xi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1,
  ie = !1,
  fp = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Jo(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var is = !1;
function dp(e, t) {
  if (((zo = Gr), (e = Na()), Ti(e))) {
    if ('selectionStart' in e)
      var n = {start: e.selectionStart, end: e.selectionEnd};
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var S;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (S = m.firstChild) !== null;

            )
              (h = m), (m = S);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === l && (u = i),
                h === o && ++p === r && (s = i),
                (S = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = S;
          }
          n = u === -1 || s === -1 ? null : {start: u, end: s};
        } else n = null;
      }
    n = n || {start: 0, end: 0};
  } else n = null;
  for (Oo = {focusedElem: e, selectionRange: n}, Gr = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    _ = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Le(t.type, y),
                      _
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (v) {
          Y(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (w = is), (is = !1), w;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Jo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function xc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[Zn], delete t[Uo], delete t[Gd], delete t[qd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ec(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function us(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ec(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zo(e, t, n), e = e.sibling; e !== null; ) Zo(e, t, n), (e = e.sibling);
}
function bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), (e = e.sibling);
}
var te = null,
  Ie = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) Cc(e, t, n), (n = n.sibling);
}
function Cc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == 'function')
    try {
      Be.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = te,
        l = Ie;
      (te = null),
        be(e, t, n),
        (te = r),
        (Ie = l),
        te !== null &&
          (Ie
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Ie
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? bl(e.parentNode, n)
              : e.nodeType === 1 && bl(e, n),
            Yn(e))
          : bl(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = Ie),
        (te = n.stateNode.containerInfo),
        (Ie = !0),
        be(e, t, n),
        (te = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Jo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Y(n, t, u);
        }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), be(e, t, n), (ie = r))
        : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fp()),
      t.forEach(function (r) {
        var l = kp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (te = u.stateNode), (Ie = !1);
              break e;
            case 3:
              (te = u.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (te = u.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          u = u.return;
        }
        if (te === null) throw Error(k(160));
        Cc(o, i, l), (te = null), (Ie = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Y(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nc(t, e), (t = t.sibling);
}
function Nc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Ue(e), r & 4)) {
        try {
          An(3, e, e.return), Nl(3, e);
        } catch (y) {
          Y(e, e.return, y);
        }
        try {
          An(5, e, e.return);
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      break;
    case 1:
      Re(t, e), Ue(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Ue(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, '');
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && Ks(l, o),
              Eo(u, i);
            var a = Eo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === 'style'
                ? Xs(l, m)
                : p === 'dangerouslySetInnerHTML'
                ? qs(l, m)
                : p === 'children'
                ? Wn(l, m)
                : vi(l, p, m, a);
            }
            switch (u) {
              case 'input':
                yo(l, o);
                break;
              case 'textarea':
                Ys(l, o);
                break;
              case 'select':
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? en(l, !!o.multiple, S, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? en(l, !!o.multiple, o.defaultValue, !0)
                      : en(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Zn] = o;
          } catch (y) {
            Y(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yn(t.containerInfo);
        } catch (y) {
          Y(e, e.return, y);
        }
      break;
    case 4:
      Re(t, e), Ue(e);
      break;
    case 13:
      Re(t, e),
        Ue(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qi = G())),
        r & 4 && ss(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || p), Re(t, e), (ie = a)) : Re(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (N = e, p = e.child; p !== null; ) {
            for (m = N = p; N !== null; ) {
              switch (((h = N), (S = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  An(4, h, h.return);
                  break;
                case 1:
                  Zt(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      Y(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    cs(m);
                    continue;
                  }
              }
              S !== null ? ((S.return = h), (N = S)) : cs(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Js('display', i)));
              } catch (y) {
                Y(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = a ? '' : m.memoizedProps;
              } catch (y) {
                Y(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Ue(e), r & 4 && ss(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ec(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ''), (r.flags &= -33));
          var o = us(e);
          bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = us(e);
          Zo(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pp(e, t, n) {
  (N = e), Pc(e);
}
function Pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || _r;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = _r;
        var a = ie;
        if (((_r = i), (ie = s) && !a))
          for (N = l; N !== null; )
            (i = N),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? fs(l)
                : s !== null
                ? ((s.return = i), (N = s))
                : fs(l);
        for (; o !== null; ) (N = o), Pc(o), (o = o.sibling);
        (N = l), (_r = u), (ie = a);
      }
      as(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : as(e);
  }
}
function as(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ku(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ku(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Yn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && Xo(t));
      } catch (h) {
        Y(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function cs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function fs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var o = t.return;
          try {
            Xo(t);
          } catch (s) {
            Y(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Xo(t);
          } catch (s) {
            Y(t, i, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var hp = Math.ceil,
  sl = Xe.ReactCurrentDispatcher,
  Yi = Xe.ReactCurrentOwner,
  je = Xe.ReactCurrentBatchConfig,
  D = 0,
  ee = null,
  q = null,
  ne = 0,
  ye = 0,
  bt = wt(0),
  Z = 0,
  lr = null,
  Dt = 0,
  Pl = 0,
  Gi = 0,
  Bn = null,
  de = null,
  qi = 0,
  pn = 1 / 0,
  He = null,
  al = !1,
  ei = null,
  dt = null,
  Tr = !1,
  ot = null,
  cl = 0,
  Vn = 0,
  ti = null,
  Br = -1,
  Vr = 0;
function ae() {
  return D & 6 ? G() : Br !== -1 ? Br : (Br = G());
}
function pt(e) {
  return e.mode & 1
    ? D & 2 && ne !== 0
      ? ne & -ne
      : Xd.transition !== null
      ? (Vr === 0 && (Vr = aa()), Vr)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : va(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Vn) throw ((Vn = 0), (ti = null), Error(k(185)));
  ur(e, n, r),
    (!(D & 2) || e !== ee) &&
      (e === ee && (!(D & 2) && (Pl |= n), Z === 4 && rt(e, ne)),
      ve(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((pn = G() + 500), xl && St()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Xf(e, t);
  var r = Yr(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? Jd(ds.bind(null, e)) : Da(ds.bind(null, e)),
        Kd(function () {
          !(D & 6) && St();
        }),
        (n = null);
    else {
      switch (ca(r)) {
        case 1:
          n = ki;
          break;
        case 4:
          n = ua;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = sa;
          break;
        default:
          n = Kr;
      }
      n = Oc(n, jc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jc(e, t) {
  if (((Br = -1), (Vr = 0), D & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = Yr(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = Tc();
    (ee !== e || ne !== t) && ((He = null), (pn = G() + 500), Rt(e, t));
    do
      try {
        gp();
        break;
      } catch (u) {
        _c(e, u);
      }
    while (1);
    Oi(),
      (sl.current = o),
      (D = l),
      q !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = _o(e)), l !== 0 && ((r = l), (t = ni(e, l)))), t === 1)
    )
      throw ((n = lr), Rt(e, 0), rt(e, r), ve(e, G()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !mp(l) &&
          ((t = fl(e, r)),
          t === 2 && ((o = _o(e)), o !== 0 && ((r = o), (t = ni(e, o)))),
          t === 1))
      )
        throw ((n = lr), Rt(e, 0), rt(e, r), ve(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Pt(e, de, He);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = qi + 500 - G()), 10 < t))
          ) {
            if (Yr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Mo(Pt.bind(null, e, de, He), t);
            break;
          }
          Pt(e, de, He);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Mo(Pt.bind(null, e, de, He), r);
            break;
          }
          Pt(e, de, He);
          break;
        case 5:
          Pt(e, de, He);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ve(e, G()), e.callbackNode === n ? jc.bind(null, e) : null;
}
function ni(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && ri(t)),
    e
  );
}
function ri(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function mp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~Gi,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ds(e) {
  if (D & 6) throw Error(k(327));
  on();
  var t = Yr(e, 0);
  if (!(t & 1)) return ve(e, G()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _o(e);
    r !== 0 && ((t = r), (n = ni(e, r)));
  }
  if (n === 1) throw ((n = lr), Rt(e, 0), rt(e, t), ve(e, G()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pt(e, de, He),
    ve(e, G()),
    null
  );
}
function Ji(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((pn = G() + 500), xl && St());
  }
}
function Mt(e) {
  ot !== null && ot.tag === 0 && !(D & 6) && on();
  var t = D;
  D |= 1;
  var n = je.transition,
    r = U;
  try {
    if (((je.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (je.transition = n), (D = t), !(D & 6) && St();
  }
}
function Xi() {
  (ye = bt.current), V(bt);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $d(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((Li(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zr();
          break;
        case 3:
          fn(), V(he), V(ue), Bi();
          break;
        case 5:
          Ai(r);
          break;
        case 4:
          fn();
          break;
        case 13:
          V(Q);
          break;
        case 19:
          V(Q);
          break;
        case 10:
          Di(r.type._context);
          break;
        case 22:
        case 23:
          Xi();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (q = e = ht(e.current, null)),
    (ne = ye = t),
    (Z = 0),
    (lr = null),
    (Gi = Pl = Dt = 0),
    (de = Bn = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function _c(e, t) {
  do {
    var n = q;
    try {
      if ((Oi(), (Ur.current = ul), il)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Ot = 0),
        (b = X = $ = null),
        (Fn = !1),
        (tr = 0),
        (Yi.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (lr = t), (q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            p = u,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var S = bu(i);
          if (S !== null) {
            (S.flags &= -257),
              es(S, i, u, o, t),
              S.mode & 1 && Zu(o, a, t),
              (t = S),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(o, a, t), Zi();
              break e;
            }
            s = Error(k(426));
          }
        } else if (H && u.mode & 1) {
          var _ = bu(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              es(_, i, u, o, t),
              Ii(dn(s, u));
            break e;
          }
        }
        (o = s = dn(s, u)),
          Z !== 4 && (Z = 2),
          Bn === null ? (Bn = [o]) : Bn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = fc(o, s, t);
              $u(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (dt === null || !dt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = dc(o, u, t);
                $u(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Lc(n);
    } catch (E) {
      (t = E), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Tc() {
  var e = sl.current;
  return (sl.current = ul), e === null ? ul : e;
}
function Zi() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    ee === null || (!(Dt & 268435455) && !(Pl & 268435455)) || rt(ee, ne);
}
function fl(e, t) {
  var n = D;
  D |= 2;
  var r = Tc();
  (ee !== e || ne !== t) && ((He = null), Rt(e, t));
  do
    try {
      vp();
      break;
    } catch (l) {
      _c(e, l);
    }
  while (1);
  if ((Oi(), (D = n), (sl.current = r), q !== null)) throw Error(k(261));
  return (ee = null), (ne = 0), Z;
}
function vp() {
  for (; q !== null; ) Rc(q);
}
function gp() {
  for (; q !== null && !Hf(); ) Rc(q);
}
function Rc(e) {
  var t = zc(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lc(e) : (q = t),
    (Yi.current = null);
}
function Lc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cp(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (q = null);
        return;
      }
    } else if (((n = ap(n, t, ye)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Pt(e, t, n) {
  var r = U,
    l = je.transition;
  try {
    (je.transition = null), (U = 1), yp(e, t, n, r);
  } finally {
    (je.transition = l), (U = r);
  }
  return null;
}
function yp(e, t, n, r) {
  do on();
  while (ot !== null);
  if (D & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Zf(e, o),
    e === ee && ((q = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Tr ||
      ((Tr = !0),
      Oc(Kr, function () {
        return on(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = je.transition), (je.transition = null);
    var i = U;
    U = 1;
    var u = D;
    (D |= 4),
      (Yi.current = null),
      dp(e, n),
      Nc(n, e),
      Fd(Oo),
      (Gr = !!zo),
      (Oo = zo = null),
      (e.current = n),
      pp(n),
      Wf(),
      (D = u),
      (U = i),
      (je.transition = o);
  } else e.current = n;
  if (
    (Tr && ((Tr = !1), (ot = e), (cl = l)),
    (o = e.pendingLanes),
    o === 0 && (dt = null),
    Kf(n.stateNode),
    ve(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, {componentStack: l.stack, digest: l.digest});
  if (al) throw ((al = !1), (e = ei), (ei = null), e);
  return (
    cl & 1 && e.tag !== 0 && on(),
    (o = e.pendingLanes),
    o & 1 ? (e === ti ? Vn++ : ((Vn = 0), (ti = e))) : (Vn = 0),
    St(),
    null
  );
}
function on() {
  if (ot !== null) {
    var e = ca(cl),
      t = je.transition,
      n = U;
    try {
      if (((je.transition = null), (U = 16 > e ? 16 : e), ot === null))
        var r = !1;
      else {
        if (((e = ot), (ot = null), (cl = 0), D & 6)) throw Error(k(331));
        var l = D;
        for (D |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (N = m);
                  else
                    for (; N !== null; ) {
                      p = N;
                      var h = p.sibling,
                        S = p.return;
                      if ((xc(p), p === a)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = S), (N = h);
                        break;
                      }
                      N = S;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var _ = y.sibling;
                    (y.sibling = null), (y = _);
                  } while (y !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    An(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (N = f);
                break e;
              }
              N = o.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (N = d);
          else
            e: for (i = c; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, u);
                  }
                } catch (E) {
                  Y(u, u.return, E);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (N = v);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((D = l), St(), Be && typeof Be.onPostCommitFiberRoot == 'function')
        )
          try {
            Be.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (je.transition = t);
    }
  }
  return !1;
}
function ps(e, t, n) {
  (t = dn(n, t)),
    (t = fc(e, t, 1)),
    (e = ft(e, t, 1)),
    (t = ae()),
    e !== null && (ur(e, 1, t), ve(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) ps(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ps(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (dt === null || !dt.has(r)))
        ) {
          (e = dn(n, e)),
            (e = dc(t, e, 1)),
            (t = ft(t, e, 1)),
            (e = ae()),
            t !== null && (ur(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > G() - qi)
        ? Rt(e, 0)
        : (Gi |= n)),
    ve(e, t);
}
function Ic(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = ae();
  (e = qe(e, t)), e !== null && (ur(e, t, n), ve(e, n));
}
function Sp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ic(e, n);
}
function kp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Ic(e, n);
}
var zc;
zc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), sp(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), H && t.flags & 1048576 && Ma(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ar(e, t), (e = t.pendingProps);
      var l = sn(t, ue.current);
      ln(t, n), (l = Hi(null, t, r, e, l, n));
      var o = Wi();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), br(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ui(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            Wo(t, r, e, n),
            (t = Ko(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && Ri(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ar(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ep(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = $o(null, t, r, e, n);
            break e;
          case 1:
            t = rs(null, t, r, e, n);
            break e;
          case 11:
            t = ts(null, t, r, e, n);
            break e;
          case 14:
            t = ns(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        $o(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        rs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((vc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ba(e, t),
          ll(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = dn(Error(k(423)), t)), (t = ls(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = dn(Error(k(424)), t)), (t = ls(e, t, r, n, l));
            break e;
          } else
            for (
              we = ct(t.stateNode.containerInfo.firstChild),
                Se = t,
                H = !0,
                ze = null,
                n = Qa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((an(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $a(t),
        e === null && Bo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Do(r, l) ? (i = null) : o !== null && Do(r, o) && (t.flags |= 32),
        mc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Bo(t), null;
    case 13:
      return gc(e, t, n);
    case 4:
      return (
        Fi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        ts(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          A(nl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Vo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Vo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ln(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        ns(e, t, r, l, n)
      );
    case 15:
      return pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ar(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), br(t)) : (e = !1),
        ln(t, n),
        Ha(t, r, l),
        Wo(t, r, l, n),
        Ko(null, t, r, !0, e, n)
      );
    case 19:
      return yc(e, t, n);
    case 22:
      return hc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Oc(e, t) {
  return ia(e, t);
}
function xp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new xp(e, t, n, r);
}
function bi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ep(e) {
  if (typeof e == 'function') return bi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === yi)) return 11;
    if (e === wi) return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : {lanes: t.lanes, firstContext: t.firstContext}),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) bi(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Wt:
        return Lt(n.children, l, o, t);
      case gi:
        (i = 8), (l |= 8);
        break;
      case po:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = po), (e.lanes = o), e
        );
      case ho:
        return (e = Pe(13, n, t, l)), (e.elementType = ho), (e.lanes = o), e;
      case mo:
        return (e = Pe(19, n, t, l)), (e.elementType = mo), (e.lanes = o), e;
      case Ws:
        return jl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Vs:
              i = 10;
              break e;
            case Hs:
              i = 9;
              break e;
            case yi:
              i = 11;
              break e;
            case wi:
              i = 14;
              break e;
            case et:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = Ws),
    (e.lanes = n),
    (e.stateNode = {isHidden: !1}),
    e
  );
}
function uo(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function so(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function eu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Cp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Pe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ui(o),
    e
  );
}
function Np(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ht,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return Oa(e, n, t);
  }
  return t;
}
function Mc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = eu(n, r, !0, e, l, o, i, u, s)),
    (e.context = Dc(null)),
    (n = e.current),
    (r = ae()),
    (l = pt(n)),
    (o = Ke(r, l)),
    (o.callback = t ?? null),
    ft(n, o, l),
    (e.current.lanes = l),
    ur(e, l, r),
    ve(e, r),
    e
  );
}
function _l(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = pt(l);
  return (
    (n = Dc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(o, i)),
    (t.payload = {element: e}),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ft(l, t, i)),
    e !== null && (De(e, l, i, o), Mr(e, l, i)),
    i
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tu(e, t) {
  hs(e, t), (e = e.alternate) && hs(e, t);
}
function Pp() {
  return null;
}
var Uc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function nu(e) {
  this._internalRoot = e;
}
Tl.prototype.render = nu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  _l(e, t, null, null);
};
Tl.prototype.unmount = nu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function () {
      _l(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pa();
    e = {blockedOn: null, target: e, priority: t};
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && ma(e);
  }
};
function ru(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ms() {}
function jp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = dl(i);
        o.call(a);
      };
    }
    var i = Mc(t, r, e, 0, null, !1, !1, '', ms);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      Jn(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = dl(s);
      u.call(a);
    };
  }
  var s = eu(e, 0, !1, null, null, !1, !1, '', ms);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      _l(t, s, n, r);
    }),
    s
  );
}
function Ll(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = dl(i);
        u.call(s);
      };
    }
    _l(t, i, e, l);
  } else i = jp(n, t, e, l, r);
  return dl(i);
}
fa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (xi(t, n | 1), ve(t, G()), !(D & 6) && ((pn = G() + 500), St()));
      }
      break;
    case 13:
      Mt(function () {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ae();
          De(r, e, 1, l);
        }
      }),
        tu(e, 1);
  }
};
Ei = function (e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ae();
      De(t, e, 134217728, n);
    }
    tu(e, 134217728);
  }
};
da = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = qe(e, t);
    if (n !== null) {
      var r = ae();
      De(n, e, t, r);
    }
    tu(e, t);
  }
};
pa = function () {
  return U;
};
ha = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
No = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((yo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = kl(r);
            if (!l) throw Error(k(90));
            $s(r), yo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Ys(e, n);
      break;
    case 'select':
      (t = n.value), t != null && en(e, !!n.multiple, t, !1);
  }
};
ea = Ji;
ta = Mt;
var _p = {usingClientEntryPoint: !1, Events: [ar, Yt, kl, Zs, bs, Ji]},
  jn = {
    findFiberByHostInstance: jt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Tp = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = la(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jn.findFiberByHostInstance || Pp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber)
    try {
      (gl = Rr.inject(Tp)), (Be = Rr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ru(t)) throw Error(k(200));
  return Np(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!ru(e)) throw Error(k(299));
  var n = !1,
    r = '',
    l = Uc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = eu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    new nu(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return (e = la(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return Mt(e);
};
xe.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Ll(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!ru(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Uc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Mc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ge] = t.current),
    Jn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
xe.render = function (e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Ll(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Mt(function () {
        Ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Ji;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ll(e, t, n, !1, r);
};
xe.version = '18.2.0-next-9e3b772b8-20220608';
function Fc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc);
    } catch (e) {
      console.error(e);
    }
}
Fc(), (Ms.exports = xe);
var Rp = Ms.exports,
  vs = Rp;
(co.createRoot = vs.createRoot), (co.hydrateRoot = vs.hydrateRoot);
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function or() {
  return (
    (or = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    or.apply(this, arguments)
  );
}
var it;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(it || (it = {}));
const gs = 'popstate';
function Lp(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = '/',
      search: u = '',
      hash: s = '',
    } = At(l.location.hash.substr(1));
    return (
      !i.startsWith('/') && !i.startsWith('.') && (i = '/' + i),
      li(
        '',
        {pathname: i, search: u, hash: s},
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || 'default'
      )
    );
  }
  function n(l, o) {
    let i = l.document.querySelector('base'),
      u = '';
    if (i && i.getAttribute('href')) {
      let s = l.location.href,
        a = s.indexOf('#');
      u = a === -1 ? s : s.slice(0, a);
    }
    return u + '#' + (typeof o == 'string' ? o : pl(o));
  }
  function r(l, o) {
    Il(
      l.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(o) +
        ')'
    );
  }
  return zp(t, n, r, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Il(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ip() {
  return Math.random().toString(36).substr(2, 8);
}
function ys(e, t) {
  return {usr: e.state, key: e.key, idx: t};
}
function li(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    or(
      {pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: ''},
      typeof t == 'string' ? At(t) : t,
      {state: n, key: (t && t.key) || r || Ip()}
    )
  );
}
function pl(e) {
  let {pathname: t = '/', search: n = '', hash: r = ''} = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function At(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function zp(e, t, n, r) {
  r === void 0 && (r = {});
  let {window: l = document.defaultView, v5Compat: o = !1} = r,
    i = l.history,
    u = it.Pop,
    s = null,
    a = p();
  a == null && ((a = 0), i.replaceState(or({}, i.state, {idx: a}), ''));
  function p() {
    return (i.state || {idx: null}).idx;
  }
  function m() {
    u = it.Pop;
    let _ = p(),
      f = _ == null ? null : _ - a;
    (a = _), s && s({action: u, location: y.location, delta: f});
  }
  function h(_, f) {
    u = it.Push;
    let c = li(y.location, _, f);
    n && n(c, _), (a = p() + 1);
    let d = ys(c, a),
      v = y.createHref(c);
    try {
      i.pushState(d, '', v);
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
      l.location.assign(v);
    }
    o && s && s({action: u, location: y.location, delta: 1});
  }
  function S(_, f) {
    u = it.Replace;
    let c = li(y.location, _, f);
    n && n(c, _), (a = p());
    let d = ys(c, a),
      v = y.createHref(c);
    i.replaceState(d, '', v),
      o && s && s({action: u, location: y.location, delta: 0});
  }
  function w(_) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof _ == 'string' ? _ : pl(_);
    return (
      J(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, f)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(_) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(gs, m),
        (s = _),
        () => {
          l.removeEventListener(gs, m), (s = null);
        }
      );
    },
    createHref(_) {
      return t(l, _);
    },
    createURL: w,
    encodeLocation(_) {
      let f = w(_);
      return {pathname: f.pathname, search: f.search, hash: f.hash};
    },
    push: h,
    replace: S,
    go(_) {
      return i.go(_);
    },
  };
  return y;
}
var ws;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ws || (ws = {}));
function Op(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? At(t) : t,
    l = lu(r.pathname || '/', n);
  if (l == null) return null;
  let o = Ac(e);
  Dp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Qp(o[u], Yp(l));
  return i;
}
function Ac(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith('/') &&
      (J(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = mt([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (J(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      Ac(o.children, t, p, a)),
      !(o.path == null && !o.index) &&
        t.push({path: a, score: Hp(a, o.index), routesMeta: p});
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let s of Bc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Bc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = Bc(r.join('/')),
    u = [];
  return (
    u.push(...i.map((s) => (s === '' ? o : [o, s].join('/')))),
    l && u.push(...i),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Dp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Wp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Mp = /^:\w+$/,
  Up = 3,
  Fp = 2,
  Ap = 1,
  Bp = 10,
  Vp = -2,
  Ss = (e) => e === '*';
function Hp(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Ss) && (r += Vp),
    t && (r += Fp),
    n
      .filter((l) => !Ss(l))
      .reduce((l, o) => l + (Mp.test(o) ? Up : o === '' ? Ap : Bp), r)
  );
}
function Wp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Qp(e, t) {
  let {routesMeta: n} = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === '/' ? t : t.slice(l.length) || '/',
      p = $p({path: u.relativePath, caseSensitive: u.caseSensitive, end: s}, a);
    if (!p) return null;
    Object.assign(r, p.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: mt([l, p.pathname]),
      pathnameBase: Xp(mt([l, p.pathnameBase])),
      route: m,
    }),
      p.pathnameBase !== '/' && (l = mt([l, p.pathnameBase]));
  }
  return o;
}
function $p(e, t) {
  typeof e == 'string' && (e = {path: e, caseSensitive: !1, end: !0});
  let [n, r] = Kp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, m) => {
      if (p === '*') {
        let h = u[m] || '';
        i = o.slice(0, o.length - h.length).replace(/(.)\/+$/, '$1');
      }
      return (a[p] = Gp(u[m] || '', p)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Kp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Il(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Yp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Il(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Gp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Il(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function lu(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function qp(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? At(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Jp(n, t)) : t,
    search: Zp(r),
    hash: bp(l),
  };
}
function Jp(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function ao(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Vc(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = At(e))
    : ((l = or({}, e)),
      J(
        !l.pathname || !l.pathname.includes('?'),
        ao('?', 'pathname', 'search', l)
      ),
      J(
        !l.pathname || !l.pathname.includes('#'),
        ao('#', 'pathname', 'hash', l)
      ),
      J(!l.search || !l.search.includes('#'), ao('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let m = t.length - 1;
    if (i.startsWith('..')) {
      let h = i.split('/');
      for (; h[0] === '..'; ) h.shift(), (m -= 1);
      l.pathname = h.join('/');
    }
    u = m >= 0 ? t[m] : '/';
  }
  let s = qp(l, u),
    a = i && i !== '/' && i.endsWith('/'),
    p = (o || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || p) && (s.pathname += '/'), s;
}
const mt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Xp = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Zp = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  bp = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function eh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Wc = ['post', 'put', 'patch', 'delete'];
new Set(Wc);
const th = ['get', ...Wc];
new Set(th);
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hl.apply(this, arguments)
  );
}
const ou = x.createContext(null),
  nh = x.createContext(null),
  gn = x.createContext(null),
  zl = x.createContext(null),
  Bt = x.createContext({outlet: null, matches: [], isDataRoute: !1}),
  Qc = x.createContext(null);
function rh(e, t) {
  let {relative: n} = t === void 0 ? {} : t;
  fr() || J(!1);
  let {basename: r, navigator: l} = x.useContext(gn),
    {hash: o, pathname: i, search: u} = Kc(e, {relative: n}),
    s = i;
  return (
    r !== '/' && (s = i === '/' ? r : mt([r, i])),
    l.createHref({pathname: s, search: u, hash: o})
  );
}
function fr() {
  return x.useContext(zl) != null;
}
function Ol() {
  return fr() || J(!1), x.useContext(zl).location;
}
function $c(e) {
  x.useContext(gn).static || x.useLayoutEffect(e);
}
function lh() {
  let {isDataRoute: e} = x.useContext(Bt);
  return e ? gh() : oh();
}
function oh() {
  fr() || J(!1);
  let e = x.useContext(ou),
    {basename: t, navigator: n} = x.useContext(gn),
    {matches: r} = x.useContext(Bt),
    {pathname: l} = Ol(),
    o = JSON.stringify(Vc(r).map((s) => s.pathnameBase)),
    i = x.useRef(!1);
  return (
    $c(() => {
      i.current = !0;
    }),
    x.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !i.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let p = Hc(s, JSON.parse(o), l, a.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : mt([t, p.pathname])),
          (a.replace ? n.replace : n.push)(p, a.state, a);
      },
      [t, n, o, l, e]
    )
  );
}
function Kc(e, t) {
  let {relative: n} = t === void 0 ? {} : t,
    {matches: r} = x.useContext(Bt),
    {pathname: l} = Ol(),
    o = JSON.stringify(Vc(r).map((i) => i.pathnameBase));
  return x.useMemo(() => Hc(e, JSON.parse(o), l, n === 'path'), [e, o, l, n]);
}
function ih(e, t) {
  return uh(e, t);
}
function uh(e, t, n) {
  fr() || J(!1);
  let {navigator: r} = x.useContext(gn),
    {matches: l} = x.useContext(Bt),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let s = Ol(),
    a;
  if (t) {
    var p;
    let y = typeof t == 'string' ? At(t) : t;
    u === '/' || ((p = y.pathname) != null && p.startsWith(u)) || J(!1),
      (a = y);
  } else a = s;
  let m = a.pathname || '/',
    h = u === '/' ? m : m.slice(u.length) || '/',
    S = Op(e, {pathname: h}),
    w = dh(
      S &&
        S.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: mt([
              u,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? u
                : mt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && w
    ? x.createElement(
        zl.Provider,
        {
          value: {
            location: hl(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              a
            ),
            navigationType: it.Pop,
          },
        },
        w
      )
    : w;
}
function sh() {
  let e = vh(),
    t = eh(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = {padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)'},
    o = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', {style: {fontStyle: 'italic'}}, t),
    n ? x.createElement('pre', {style: l}, n) : null,
    o
  );
}
const ah = x.createElement(sh, null);
class ch extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return {error: t};
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? {error: t.error, location: t.location, revalidation: t.revalidation}
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          Bt.Provider,
          {value: this.props.routeContext},
          x.createElement(Qc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function fh(e) {
  let {routeContext: t, match: n, children: r} = e,
    l = x.useContext(ou);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Bt.Provider, {value: t}, r)
  );
}
function dh(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id])
    );
    u >= 0 || J(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, s, a) => {
    let p = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      m = null;
    n && (m = s.route.errorElement || ah);
    let h = t.concat(o.slice(0, a + 1)),
      S = () => {
        let w;
        return (
          p
            ? (w = m)
            : s.route.Component
            ? (w = x.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = u),
          x.createElement(fh, {
            match: s,
            routeContext: {outlet: u, matches: h, isDataRoute: n != null},
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? x.createElement(ch, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: p,
          children: S(),
          routeContext: {outlet: null, matches: h, isDataRoute: !0},
        })
      : S();
  }, null);
}
var Yc = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Yc || {}),
  ml = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(ml || {});
function ph(e) {
  let t = x.useContext(ou);
  return t || J(!1), t;
}
function hh(e) {
  let t = x.useContext(nh);
  return t || J(!1), t;
}
function mh(e) {
  let t = x.useContext(Bt);
  return t || J(!1), t;
}
function Gc(e) {
  let t = mh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || J(!1), n.route.id;
}
function vh() {
  var e;
  let t = x.useContext(Qc),
    n = hh(ml.UseRouteError),
    r = Gc(ml.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function gh() {
  let {router: e} = ph(Yc.UseNavigateStable),
    t = Gc(ml.UseNavigateStable),
    n = x.useRef(!1);
  return (
    $c(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, hl({fromRouteId: t}, o)));
      },
      [e, t]
    )
  );
}
function oi(e) {
  J(!1);
}
function yh(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = it.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  fr() && J(!1);
  let u = t.replace(/^\/*/, '/'),
    s = x.useMemo(() => ({basename: u, navigator: o, static: i}), [u, o, i]);
  typeof r == 'string' && (r = At(r));
  let {
      pathname: a = '/',
      search: p = '',
      hash: m = '',
      state: h = null,
      key: S = 'default',
    } = r,
    w = x.useMemo(() => {
      let y = lu(a, u);
      return y == null
        ? null
        : {
            location: {pathname: y, search: p, hash: m, state: h, key: S},
            navigationType: l,
          };
    }, [u, a, p, m, h, S, l]);
  return w == null
    ? null
    : x.createElement(
        gn.Provider,
        {value: s},
        x.createElement(zl.Provider, {children: n, value: w})
      );
}
function wh(e) {
  let {children: t, location: n} = e;
  return ih(ii(t), n);
}
new Promise(() => {});
function ii(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === x.Fragment) {
        n.push.apply(n, ii(r.props.children, o));
        return;
      }
      r.type !== oi && J(!1), !r.props.index || !r.props.children || J(!1);
      let i = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = ii(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ui() {
  return (
    (ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ui.apply(this, arguments)
  );
}
function Sh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function kh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function xh(e, t) {
  return e.button === 0 && (!t || t === '_self') && !kh(e);
}
const Eh = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Ch = 'startTransition',
  ks = Sf[Ch];
function Nh(e) {
  let {basename: t, children: n, future: r, window: l} = e,
    o = x.useRef();
  o.current == null && (o.current = Lp({window: l, v5Compat: !0}));
  let i = o.current,
    [u, s] = x.useState({action: i.action, location: i.location}),
    {v7_startTransition: a} = r || {},
    p = x.useCallback(
      (m) => {
        a && ks ? ks(() => s(m)) : s(m);
      },
      [s, a]
    );
  return (
    x.useLayoutEffect(() => i.listen(p), [i, p]),
    x.createElement(yh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
const Ph =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qc = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: p,
        unstable_viewTransition: m,
      } = t,
      h = Sh(t, Eh),
      {basename: S} = x.useContext(gn),
      w,
      y = !1;
    if (typeof a == 'string' && jh.test(a) && ((w = a), Ph))
      try {
        let d = new URL(window.location.href),
          v = a.startsWith('//') ? new URL(d.protocol + a) : new URL(a),
          E = lu(v.pathname, S);
        v.origin === d.origin && E != null
          ? (a = E + v.search + v.hash)
          : (y = !0);
      } catch {}
    let _ = rh(a, {relative: l}),
      f = _h(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: p,
        relative: l,
        unstable_viewTransition: m,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || f(d);
    }
    return x.createElement(
      'a',
      ui({}, h, {href: w || _, onClick: y || o ? r : c, ref: n, target: s})
    );
  });
var xs;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(xs || (xs = {}));
var Es;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Es || (Es = {}));
function _h(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = lh(),
    a = Ol(),
    p = Kc(e, {relative: i});
  return x.useCallback(
    (m) => {
      if (xh(m, n)) {
        m.preventDefault();
        let h = r !== void 0 ? r : pl(a) === pl(p);
        s(e, {
          replace: h,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, p, r, l, n, e, o, i, u]
  );
}
const Th = (e) => (
    console.log(e),
    fetch('https://proyectosmagicos.onrender.com/createproject', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(e),
    })
      .then((t) => t.json())
      .then((t) => {
        if (t.success) return t.cardURL;
      })
  ),
  Rh = (e) =>
    fetch(`https://proyectosmagicos.onrender.com/listprojects?sort=${e.sort}`)
      .then((t) => t.json())
      .then((t) =>
        t.data.map((r) => ({
          idProject: r.idProject,
          name: r.nameProject,
          slogan: r.sloganProject,
          technologies: r.techProject,
          repo: r.urlGit,
          demo: r.urlDemo,
          desc: r.descProject,
          autor: r.nameAutor,
          job: r.jobAutor,
          photo: r.imageProject,
          image: r.imageAutor,
          idAutor: r.idAutor,
        }))
      ),
  Lh = (e) => (
    console.log(e),
    fetch(`https://proyectosmagicos.onrender.com/project/${e}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
      .then((t) => t.json())
      .then((t) => t)
  ),
  si = {post: Th, get: Rh, delete: Lh};
var Jc = {exports: {}},
  Ih = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  zh = Ih,
  Oh = zh;
function Xc() {}
function Zc() {}
Zc.resetWarningCache = Xc;
var Dh = function () {
  function e(r, l, o, i, u, s) {
    if (s !== Oh) {
      var a = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((a.name = 'Invariant Violation'), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Zc,
    resetWarningCache: Xc,
  };
  return (n.PropTypes = n), n;
};
Jc.exports = Dh();
var Mh = Jc.exports;
const L = Cs(Mh);
const Uh = '/assets/brujafondo-ed51e000.jpg',
  Fh = '/assets/avatar-a91e8c67.png',
  iu = ({
    data: e,
    autorLanding: t,
    titleLanding: n,
    descLanding: r,
    sloganLanding: l,
    showIcon: o,
    handleRemoveCard: i,
  }) => {
    const u = e.image === '' ? Fh : e.image,
      s = (a) => {
        a.preventDefault(), console.log('he hecho clicl'), i(e.idProject);
      };
    return g.jsxs('section', {
      className: `preview_autor ${t}`,
      children: [
        g.jsxs('section', {
          className: 'infoProject',
          children: [
            g.jsxs('div', {
              className: 'infoProject_container',
              children: [
                g.jsx('hr', {className: 'infoProject_container-line1'}),
                g.jsx('p', {
                  className: 'infoProject_container-subtitle',
                  children: 'Personal Project Card',
                }),
                g.jsx('hr', {className: 'infoProject_container-line2'}),
              ],
            }),
            g.jsx('h2', {
              className: `infoProject_title ${n}`,
              children: e.name || 'Elegant Workspace',
            }),
            g.jsx('p', {
              className: `infoProject_slogan ${l}`,
              children: e.slogan || 'Diseños Exclusivos',
            }),
            g.jsx('p', {
              className: `infoProject_desc ${r}`,
              children:
                e.desc ||
                'Gestión de proyectos en línea, diseñado para simplificar y agilizar tu trabajo como programadora. Con solo crear una tarjeta para cada proyecto, podrás organizarlos de manera eficiente. ¡Optimiza tu productividad y alcanza tus metas de manera efectiva con nosotras!',
            }),
            g.jsxs('section', {
              className: 'technologies',
              children: [
                g.jsx('p', {
                  className: 'technologies_text',
                  children: e.technologies || 'React JS - HTML - CSS',
                }),
                g.jsx('button', {
                  src: e.demo,
                  target: '_blank',
                  className: 'technologies_icon',
                  children: g.jsx('i', {
                    className: 'fa-solid fa-globe technologies_icon-img',
                  }),
                }),
                g.jsx('button', {
                  src: e.repo,
                  target: '_blank',
                  className: 'technologies_icon',
                  children: g.jsx('i', {
                    className: 'fa-brands fa-github technologies_icon-img',
                  }),
                }),
              ],
            }),
          ],
        }),
        g.jsxs('section', {
          className: 'infoAutor',
          children: [
            g.jsx('div', {
              className: 'infoAutor_image',
              style: {backgroundImage: `url(${u})`},
            }),
            g.jsx('p', {
              className: 'infoAutor_job',
              children: e.job || 'Full Stack Developer',
            }),
            g.jsx('p', {
              className: 'infoAutor_name',
              children: e.autor || 'Emmelie Björklund',
            }),
            g.jsx('button', {
              className: 'btn',
              onClick: s,
              children: o
                ? g.jsx('i', {
                    className: 'fa-regular fa-trash-can fa-2xl btn_iconTrash',
                  })
                : null,
            }),
          ],
        }),
      ],
    });
  };
iu.propTypes = {data: L.object, autorLanding: L.string};
const bc = ({data: e}) => {
  const t = e.photo === '' ? Uh : e.photo;
  return g.jsxs('section', {
    className: 'preview',
    children: [
      g.jsx('div', {
        className: 'preview_image',
        style: {backgroundImage: `url(${t})`},
      }),
      g.jsx(iu, {data: e}),
    ],
  });
};
bc.propTypes = {data: L.object};
function ai({update: e, text: t}) {
  const n = new FileReader(),
    r = Os.createRef(),
    l = (i) => {
      if (
        (console.log('La usuaria ha abierto la ventana para elegir ficheros'),
        console.log(
          'La usuaria ha elegido los ficheros',
          i.currentTarget.files
        ),
        console.log(
          'El primero de los ficheros elegidos es',
          i.currentTarget.files[0]
        ),
        i.currentTarget.files.length > 0)
      ) {
        const u = i.currentTarget.files[0];
        n.addEventListener('load', o), n.readAsDataURL(u);
      }
    },
    o = () => {
      const i = n.result;
      e(i);
    };
  return g.jsxs('label', {
    className: 'form_btn-first-upload',
    children: [
      t,
      g.jsx('input', {
        type: 'file',
        ref: r,
        style: {display: 'none'},
        onChange: l,
      }),
    ],
  });
}
ai.propTypes = {avatar: L.string, update: L.func.isRequired, text: L.string};
const ef = ({
  data: e,
  handleInput: t,
  handleClickCreateCard: n,
  errorName: r,
  errorSlogan: l,
  errorRepo: o,
  errorDemo: i,
  errorTech: u,
  errorDesc: s,
  errorAutor: a,
  errorJob: p,
  errorPhoto: m,
  errorImage: h,
  responseUrl: S,
  isHidden: w,
  avatar: y,
  updateAvatar: _,
  project: f,
  updateProject: c,
  handleReset: d,
}) => {
  const v = (E) => {
    const P = E.target.id,
      j = E.target.value;
    t(P, j);
  };
  return g.jsxs('section', {
    className: 'form',
    children: [
      g.jsx('i', {
        className: 'fa-regular fa-trash-can fa-2xl form_trash',
        onClick: d,
      }),
      g.jsx('h2', {className: 'form_title', children: 'Información'}),
      g.jsx('section', {
        className: 'form_askInfo',
        children: g.jsxs('div', {
          className: 'form_askInfo_container',
          children: [
            g.jsx('p', {
              className: 'form_askInfo_container-subtitle',
              children: 'Cuéntanos sobre el proyecto',
            }),
            g.jsx('hr', {className: 'form_askInfo-line'}),
          ],
        }),
      }),
      g.jsxs('fieldset', {
        className: 'form_project',
        children: [
          g.jsx('input', {
            className: 'form_project-input',
            type: 'text',
            placeholder: 'Nombre del proyecto *',
            name: 'name',
            id: 'name',
            value: e.name,
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: r}),
          g.jsx('input', {
            className: 'form_project-input',
            type: 'text',
            name: 'slogan',
            id: 'slogan',
            value: e.slogan,
            placeholder: 'Slogan *',
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: l}),
          g.jsx('input', {
            className: 'form_project-input',
            type: 'text',
            name: 'repo',
            id: 'repo',
            value: e.repo,
            placeholder: 'Repo *',
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: o}),
          g.jsx('input', {
            className: 'form_project-input',
            type: 'text',
            placeholder: 'Demo *',
            name: 'demo',
            id: 'demo',
            value: e.demo,
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: i}),
          g.jsx('input', {
            className: 'form_project-input',
            type: 'text',
            placeholder: 'Tecnologías *',
            name: 'technologies',
            id: 'technologies',
            value: e.technologies,
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: u}),
          g.jsx('textarea', {
            maxLength: '300',
            className: 'form_project-textarea',
            type: 'text',
            placeholder: 'Descripción * (Máx. 300 caracteres)',
            name: 'desc',
            id: 'desc',
            value: e.desc,
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: s}),
        ],
      }),
      g.jsxs('section', {
        className: 'form_askInfo',
        children: [
          g.jsx('p', {
            className: 'form_askInfo-autor',
            children: 'Cuéntanos sobre la autora',
          }),
          g.jsx('hr', {className: 'form_askInfo-line'}),
        ],
      }),
      g.jsxs('fieldset', {
        className: 'form_project',
        children: [
          g.jsx('input', {
            className: 'form_project-input',
            type: 'text',
            placeholder: 'Nombre *',
            name: 'autor',
            id: 'autor',
            value: e.autor,
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: a}),
          g.jsx('input', {
            className: 'form_project-input',
            type: 'text',
            placeholder: 'Trabajo *',
            name: 'job',
            id: 'job',
            value: e.job,
            onChange: v,
            required: !0,
          }),
          g.jsx('p', {className: 'error', children: p}),
        ],
      }),
      g.jsxs('section', {
        className: 'form_btn',
        children: [
          g.jsxs('div', {
            className: 'form_btn-first',
            children: [
              g.jsx(ai, {
                project: f,
                update: c,
                text: 'Subir foto del proyecto',
              }),
              g.jsx(ai, {
                avatar: y,
                update: _,
                text: 'Subir foto de la autora',
              }),
            ],
          }),
          g.jsx('p', {className: 'error', children: m}),
          g.jsx('p', {className: 'error', children: h}),
          g.jsx('div', {
            children: g.jsx('button', {
              className: 'form_btn-create',
              onClick: n,
              children: 'Crear Tarjeta',
            }),
          }),
        ],
      }),
      g.jsxs('section', {
        className: `form_card ${w ? 'hidden' : ''}`,
        children: [
          g.jsx('span', {
            className: 'form_card-msg',
            children: ' La tarjeta ha sido creada:',
          }),
          g.jsx('a', {
            href: S,
            className: 'form_card-link',
            target: '_blank',
            rel: 'noreferrer',
            children: S,
          }),
        ],
      }),
    ],
  });
};
ef.propTypes = {
  data: L.object,
  handleInput: L.func,
  handleClickCreateCard: L.func,
  handleReset: L.func,
  errorName: L.string,
  errorSlogan: L.string,
  errorRepo: L.string,
  errorDemo: L.string,
  errorTech: L.string,
  errorDesc: L.string,
  errorAutor: L.string,
  errorJob: L.string,
  errorImage: L.string,
  errorPhoto: L.string,
  responseUrl: L.string,
  isHidden: L.bool,
  avatar: L.string,
  updateAvatar: L.func,
  project: L.string,
  updateProject: L.func,
};
const uu = ({text: e, route: t}) =>
  g.jsx(g.Fragment, {
    children: g.jsx(qc, {
      className: 'linkProject',
      to: `${t}`,
      children: g.jsx('section', {
        className: 'linkProject_project',
        children: g.jsx('button', {
          className: 'linkProject_project-btn',
          children: e,
        }),
      }),
    }),
  });
uu.propTypes = {text: L.string, route: L.string};
const tf = ({
  data: e,
  handleInput: t,
  handleClickCreateCard: n,
  errorName: r,
  errorSlogan: l,
  errorRepo: o,
  errorDemo: i,
  errorTech: u,
  errorDesc: s,
  errorAutor: a,
  errorJob: p,
  errorPhoto: m,
  errorImage: h,
  responseUrl: S,
  isHidden: w,
  avatar: y,
  updateAvatar: _,
  project: f,
  updateProject: c,
  handleReset: d,
}) =>
  g.jsxs(g.Fragment, {
    children: [
      g.jsx(uu, {text: 'Ver Proyectos', route: '/'}),
      g.jsx(bc, {data: e, avatar: y, project: f}),
      g.jsx(ef, {
        data: e,
        handleInput: t,
        handleClickCreateCard: n,
        handleReset: d,
        errorName: r,
        errorSlogan: l,
        errorRepo: o,
        errorDemo: i,
        errorTech: u,
        errorDesc: s,
        errorAutor: a,
        errorJob: p,
        errorPhoto: m,
        errorImage: h,
        responseUrl: S,
        isHidden: w,
        avatar: y,
        updateAvatar: _,
        project: f,
        updateProject: c,
      }),
    ],
  });
tf.propTypes = {
  data: L.object,
  handleInput: L.func,
  handleClickCreateCard: L.func,
  handleReset: L.func,
  errorName: L.string,
  errorSlogan: L.string,
  errorRepo: L.string,
  errorDemo: L.string,
  errorTech: L.string,
  errorDesc: L.string,
  errorAutor: L.string,
  errorJob: L.string,
  errorImage: L.string,
  errorPhoto: L.string,
  responseUrl: L.string,
  isHidden: L.bool,
  avatar: L.string,
  updateAvatar: L.func,
  project: L.string,
  updateProject: L.func,
};
const Ah = (e, t) => {
    const n = localStorage.getItem(e);
    return n === null ? t : JSON.parse(n);
  },
  Bh = (e, t) => {
    const n = JSON.stringify(t);
    localStorage.setItem(e, n);
  },
  Vh = (e) => {
    localStorage.removeItem(e);
  },
  Hh = () => {
    localStorage.clear();
  },
  _n = {get: Ah, set: Bh, remove: Vh, clear: Hh},
  nf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAABQCAYAAAAEEqmpAAAABGdBTUEAALGPC/xhBQAADQlJREFUeAHtXUtsY1cZPsdx4ggJyWWBhIRUR0iUFXjYUolElVqyYqrOMGkokkeobFjMRBULVok3CITKZCRY0SquhKYzzIwmLNCMZhNXwIYNhg1qhRqzQKJigVF52Intw/9f+0+uj8+5D9+nnf9K0bnn/Z/vnO9+53GvIwRfjEAMCFSPj8r4F0NRF7KIwoVsNTc6fgS6xao4WT6uvv+bvfgLX/wSmYiL38dpthAUUe5W3//tcfWD39XSrHje62IiznsP5tP+ilDqgAkZvHOYiMGx4pThEWBCBsSMiRgQKE4WCQEmpA98TEQfgDg6VgSYkBY4mYgWYDg4UQSYkBq8TEQNEPamigATcgw3EzHVcceVWRC48IRkIlpGBgdngsCFJSQTMZPxxpX6IHDhCMlE9BkRHJ0pAheGkEzETMcZVx4QgYUnJBMx4EjgZLlAYGEJyUTMxfhiI0IisHCEZCKGHAGcPFcILAwhmYi5GldszIwIzD0hmYgz9jxnyyUCc0tIJmIuxxMbFRGBuSMkEzFij3P2MQKr/ZYQqg6+To4wmRtCyhyBxqYsAALOD0idFG/CT2bcgObAT2fk6moLKeutz3+lkSurwBgmYt56ZEHsYUKG60gmYji8OHVIBJiQwQBjIgbDiVNFRIAJ6Q0gE9EbH46NGQEmpBlQJqIZFw5NGAEm5CTATMRJPNiXMgJMyBHgmRNxa2urcvfu3XaU/r+y9dp6kPwP7v6iGSRd2DSXL9fKh4eNSOdniENfFCt63UnZrNcTtR8Qg+Jqv6qXa/IXRb+t9/lFJ2SmRMTOWyqd/GHQW7kUZSBfubatTB1uCWvBoc2vimLY0AeDJb1v8CvXtg8KUrx3/+6dhm9iS4IrW9t7QoldPfrBvTuJ95HzIFOD3Qf33t3Q6w/qH5UxPAqaHtK1lFL1h79899CdxyFkb7kGfYTnkBV3XA7uEzuHzPTNmuLqyU0YZRV0UwS5igO+rwrHV669egsfBlHqRiWBNtSGBhJFKTfVvEBCOFJeDzqziMm2qpTyET7E3OW11jY6rS88v9967vk1OHy/DnFtd3zG94m9qZMZER0CKOepB29GiRtRCTFbB8mbqMhXr24HmlKZ6jhVBUfF8IFydWu7ZkqT57AR+eS6Y6NDyHStxYeYMxswVItvwOSVkKrbPfjcw7ePK2+/WTOYHjooMyKOVZDUCNYXqariGVBIIFUQR7OQkdSQCptLVZwgX+qqOILO50GcJ0KqXk/8+4MPRef3LdH/Z6eilDh49q03IxMyEyJOqCGNYp/OoGQJuWUkY1hVJjUkm+ZNFSfUkBoxQUwKTNwtF0unNb9asiSkm4CnH/1DNzUyITMhoqaG1Kh4VVGKOm504F+/t/KMkIUNmAPvQ2UdqlBzYTD0HmlhVq+uhpRwrlTRSLq4VVHuONgj/vAnpbhOWLldJdSX3H6v+zQJ6UNA3cwzQn7t4Gc1PdLLnzoRjWpIFiakirgji8cAsCu4A6RcA+U6pCon3eCDUFdDKmdeVNGohtQII0EpMqQrZcvBHvGHP9xZVoYNGClUJWTJIklChiSgbnrlz4PuwQuNnx5Xfv7jdT3S5C+aApMMc9RQWT+PIVXcS8qG8THJy7hbB6SpTdUzGoTNqXBXAKphXxnyjtOMVbHhypK/W6edgIDxGj2QYjnDVMNbsDvtmoXIMlRZmapWyvemwgIGICEhacP5L8VK4eZZBf5mupCA//nr34Rh+hm6vL/0exWYBRw9+9ZPmlIN6u3Xv9e0FZKqInqqIVmYkCpS8eTC2eWO6cmM2/hINEpncm1qSGlheOd6B9VTDakR8aliFTE9/xPgn77UULWmQ8OFRFHIiAroY6haVyNCHtkUMlUiWtaGeiNIFfXwWP2ojHAIXzcVejqUxsGCaW1rQ72cXK8VA5Es+DRdb/ss/sFJqTlLPlOeMIRMloC6dXZCpkbEQGpIdqekiqfdlUOq0u3Kgp2IfmpI5eRVFV/5xquXR+pElnq4gQjrkT9EVLF0chQieaCkXoRMl4C6udOETI2IAdWQLE5NFanCIK6HGnZM+XOpilLeMtlqDktVFau2g32zbcFD3YRU/+u26RwwjnVgcCtMKc8JmQoRvdTQtp2Nb9v4rdVMTUsyzKqGUtyGo5GmXnfeVBHf/EGbdDtxrWzvB3z9LdLVGmGD+DgYgd9yJTgTevz4ceWHH3781R/9fVD5zmlJVJaWLUakHgzYq3dSIaJdDRVtZzcMzS9bB74h8SxBzgMiYEYvNex3V/aFXKqbisqTKtpswbWy7VgBp7GjzR1T6wKEycIOvkx+/nfnUlEO1yCniZDl5dWTywFKDZwECfjkyZMDKQvH0JYaZvziJ8ri+595Tnz3U5/NkpAdqUT9mRe+fKn97TcaiRPRSw1p8C7LoXEQSzheSFIVbZ1u2sGzPhRADemcMs+q6KWG9NWIbfNKxLxWxK9egIwvm9gEX2QEPtg35acwEwEpjtyMCOkQUC4V1tqvv7GHL7mjPYkT0UsN6ZwKOwamRw0CyO1aCeBONMM9PiBsCrFcmNxK91VDqj/Hqmhrq5t8iaki4eNyx5+gmVSx6koW+jYIAfVCUyLkBAHb13ccApItiRIxiBqSIWmrInx1cQsUt0L1n7uqqX+naH0YjNWQ8o4eLPlbKwZRQ2qDFBLWu4YrZlUc11DRa4L6JwaoHm/zz0JAvayECOlJQLIhUSLa1BDVj9SQDElLFfHhcPXa9iOc9lLdE66mavhVhiVtx1kbTmQGj5afom2KRPFJura63WpI9fd7yw24N5Ah4lqRKhi740/GylqwUFL8UQ/z8sdBQL38mAgZiIBUd2KvuI3U8OQGVeR2beqH4fDBbs2dFu+RCDA9rOtKpafz8jsbDmrwdSFOavAgmBoAo7zKeR/SXY4qKNjuBwv0S1NDisYHDLzS1YQ86xSGLpTgvG1D6zF3nNd9kC19KLttKxcHPHyqU9HrAAzaDwy/KIDrXajzNuxa7+p5xmvF5lR4iACc5vdFAW2aLh/KMa3PTcUjAeHDYihD1kzxcYQhIfHvT//tiF//6yPRHpwGKRYJeFsUC/v69NMrc2JEdNTQ8E4pDADrT1Qg0eAd0AYMrJpu9Hh6eF0Pt/qho+EnNM47Ww0hKZRsvzpFqSbKH5F3uG7IYlZDSoiqqKbzjZWpQckCuZYB684LXy40wd9wh9E91mlqtUkNKQ8qPRyw40NUe2CNVFGfzVA+o6uGR9APZ1Hwjq71gqi2/tMZeuI0CKjXGZCQMxGQ6kpkauq1NrSpIRlki4fBlOQOakcOxcaU4trWRRY1pDbkZa0YZm1ItqPrvBgPbXSHnd3bMDlLEOFGqR1b7iSmoLa6bOGWKWuoKait7ESI6LU2nBrsmmUYj6qpBTte66aJKXHwMIeE9+/fabmzeLwY7a2GVEgO1oph1oZkNrnj9W+H/OduvGtFKhf73KSGeSAg2UjumJCdb37y03U6hggzDaVy3G7sRIyihmRYWqqInY/fJ+okdOywPfl91JDakLUqzqqGZH+6qqj2H967M7EsyCMBx9h0YH1bL5VW1n5w7Vt7UQlIeMdOxChqSEYlqYq4DoEtgX18uwM73xlwVPHYjayGVF6GqhhFDcn8pFURlhuH+NU+frBNdT59+rSqvwlDcRm7ZwTc3Hxpb2NjdBAfl02xb9bIgThUS4WmbuCgW5yY+unxuh+/F4QfrH1HD4fOm76gM6cDp0NMP2w7nUoITNeXxaky5WDYMRHXVAaGOTuoW69NlwNxOHNwl4W/swp1NjFf2AvtcufBsqXsX3eH0f192NWlez8X7YPjmw3oz7KeFjFyh/Whf6G/ptrqTuO+x/Tu9oMCrku5tDscqnWfTTV3MWncIwFvr66u7MdNPrfx0u3he0YgbQSIgDBLWU+7bp/6UiEg2cBEJCTYTRUBJuAk3EzESTzYlzACOSYgtFw1SqXSTpJTUBu8TEQbMhweKwJAQHgTZukgh1NQaKdq4P/h2NzcbMfa6BCFMRFDgMVJwyMwImCyr6KFt4pyZE9AsoSJSEiwGysCTMBwcDIRw+HFqX0QYAL6AGSJZiJagOHgcAgcHR2Ve70efqlSC5czjdT5mYLaWhv7gb6tIg5fbAS63S78v8NCLV+tzD8BCS8mIiHB7gIhMD8EJNCZiIQEuwuAwPwRkEBnIhIS7M4xAvNLQAKdiUhIsDuHCMw/AQl0JiIhwe4cIbA4BCTQmYiEBLtzgMDiEZBAZyISEuzmGIHFJSCBzkQkJNjNIQKyWSiInRdffCnUR+U5bIivSUxEX4g4QfoIyKaCf3UNX0M00687mxqZiNngzrUaEbh4BCQYmIiEBLsZInBxCUigMxEJCXYzQIAJSKAzEQkJdlNEgAmog81E1BFhf4IIMAFt4DIRbchweIwIMAH9wGQi+iHE8REQYAIGBY+JGBQpThcCASZgCLCcpP8HY6u482HbREEAAAAASUVORK5CYII=';
const Wh = () =>
  g.jsxs('header', {
    className: 'header',
    children: [
      g.jsx(qc, {
        to: '/',
        children: g.jsxs('div', {
          className: 'header_left',
          children: [
            g.jsx('i', {className: 'fa-solid fa-cat fa-2xl header_left-icon'}),
            g.jsx('p', {
              className: 'header_left-text',
              children: 'Proyectos Mágicos',
            }),
          ],
        }),
      }),
      g.jsx('img', {className: 'header_logo', src: nf, alt: 'Logo Adalab'}),
    ],
  });
const Qh = () =>
  g.jsx('footer', {
    className: 'footer',
    children: g.jsx('img', {className: 'footer_img', src: nf, alt: ''}),
  });
const $h = () =>
  g.jsxs('section', {
    className: 'intro',
    children: [
      g.jsx('h1', {className: 'intro_title', children: 'Proyectos Mágicos'}),
      g.jsx('p', {
        className: 'intro_text',
        children:
          'Escaparate en línea para recoger ideas mágicas a través de la tecnología.',
      }),
    ],
  });
const Kh = () => {
  const [e, t] = x.useState([]),
    [n, r] = x.useState('asc'),
    l = (u) => {
      const s = u.target.value;
      u.target.name === 'sort' && r(s);
    },
    o = async (u) => {
      console.log('estoy borrando'),
        si.delete(u),
        t((s) => s.filter((a) => a.idProject !== u));
    };
  x.useEffect(() => {
    const u = {sort: n};
    si.get(u).then((s) => {
      const a = s;
      console.log(a), t(a);
    });
  }, [n]);
  const i = () =>
    e.map((u) =>
      g.jsx(
        'a',
        {
          href: `https://proyectosmagicos.onrender.com/project/${u.idProject}`,
          className: 'cardClick',
          children: g.jsx(
            iu,
            {
              data: u,
              autorLanding: 'autorLanding',
              titleLanding: 'titleLanding',
              descLanding: 'descLanding',
              sloganLanding: 'sloganLanding',
              showIcon: !0,
              handleRemoveCard: o,
            },
            u.idProject
          ),
        },
        u.idProject
      )
    );
  return g.jsxs(g.Fragment, {
    children: [
      g.jsxs('div', {
        className: 'divIntro',
        children: [
          g.jsx(uu, {text: 'Nuevo Proyecto', route: '/project'}),
          g.jsxs('div', {
            className: 'divSort',
            children: [
              g.jsxs('label', {
                className: `labelSort ${n === 'asc' ? 'clicked' : ''}`,
                htmlFor: 'sortAsc',
                children: [
                  'A-Z',
                  g.jsx('input', {
                    className: 'inputSort',
                    id: 'sortAsc',
                    type: 'radio',
                    name: 'sort',
                    value: 'asc',
                    checked: n === 'asc',
                    onChange: l,
                  }),
                ],
              }),
              g.jsxs('label', {
                className: `labelSort ${n === 'desc' ? 'clicked' : ''}`,
                htmlFor: 'sortDesc',
                children: [
                  'Z-A',
                  g.jsx('input', {
                    className: 'inputSort',
                    id: 'sortDesc',
                    type: 'radio',
                    name: 'sort',
                    value: 'desc',
                    checked: n === 'desc',
                    onChange: l,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      g.jsx('section', {className: 'preview previewLanding', children: i()}),
    ],
  });
};
const Yh = () => {
  const [e, t] = x.useState([]),
    [n, r] = x.useState(0),
    l = (i) => {
      const u = {x: i.clientX, y: i.clientY + n, id: Date.now()};
      t((s) => {
        s.length >= 30 && s.shift();
        const p = 150;
        return [...s.filter((h) => Date.now() - h.id < p), u];
      });
    },
    o = () => {
      r(window.scrollY);
    };
  return (
    x.useEffect(() => {
      const i = setInterval(() => {
        t((u) => {
          const s = Date.now();
          return u.filter((a) => s - a.id < 1e3);
        });
      }, 100);
      return (
        document.addEventListener('mousemove', l),
        window.addEventListener('scroll', o),
        () => {
          document.removeEventListener('mousemove', l),
            window.removeEventListener('scroll', o),
            clearInterval(i);
        }
      );
    }, [n]),
    g.jsx('div', {
      children: e.map((i, u) =>
        g.jsx(
          'div',
          {
            className: 'trail',
            style: {
              left: i.x + 'px',
              top: i.y + 'px',
              width: '15px',
              height: '15px',
            },
          },
          u
        )
      ),
    })
  );
};
function Gh() {
  const e = _n.get('data', {
      name: '',
      slogan: '',
      technologies: '',
      repo: '',
      demo: '',
      desc: '',
      autor: '',
      job: '',
      photo: '',
      image: '',
    }),
    [t, n] = x.useState(e),
    [r, l] = x.useState(''),
    [o, i] = x.useState(''),
    [u, s] = x.useState(''),
    [a, p] = x.useState(''),
    [m, h] = x.useState(''),
    [S, w] = x.useState(''),
    [y, _] = x.useState(''),
    [f, c] = x.useState(''),
    [d, v] = x.useState(''),
    [E, P] = x.useState(''),
    [j, T] = x.useState(''),
    [W, z] = x.useState(!0),
    [ge, kt] = x.useState(''),
    xt = (R) => {
      kt(R), (t.image = R), _n.set('data', {...t, image: R});
    },
    [dr, Dl] = x.useState(''),
    yn = (R) => {
      Dl(R), (t.photo = R), _n.set('data', {...t, photo: R});
    },
    wn = (R, F) => {
      n({...t, [R]: F}), _n.set('data', {...t, [R]: F});
    },
    C = () => {
      const R = {
        name: '',
        slogan: '',
        technologies: '',
        repo: '',
        demo: '',
        desc: '',
        autor: '',
        job: '',
        photo: '',
        image: '',
      };
      l(''),
        i(''),
        h(''),
        w(''),
        p(''),
        P(''),
        c(''),
        v(''),
        _(''),
        s(''),
        _n.clear(),
        z(!0),
        n(R);
    },
    I = () => {
      const R = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\-']+$/,
        F = /^(https?|ftp):\/\/[^\s$?#][^\s]*$/;
      let M = !0;
      t.name === ''
        ? (l('Necesitamos saber el nombre de tu proyecto'), (M = !1))
        : R.test(t.name)
        ? l('')
        : (l('El nombre no debe contener números, ni caracteres especiales'),
          (M = !1)),
        t.slogan === '' ? i('Déjanos saber tu original slogan') : i(''),
        t.technologies === '' ? s('Cuéntanos que tecnologías manejas') : s(''),
        t.desc === ''
          ? p('Queremos conocer un poco más de tu proyecto')
          : p(''),
        t.repo === ''
          ? (h('Incluye la url de tu repo'), (M = !1))
          : F.test(t.repo)
          ? h('')
          : (h(
              'La url debe de ser algo como "https://github.com/Adalab/project-promo-u-module-3-team-2"'
            ),
            (M = !1)),
        t.demo === ''
          ? (w('Por favor, añade el enlace de tu página'), (M = !1))
          : F.test(t.demo)
          ? w('')
          : (w(
              'La url debe de ser algo como "https://beta.adalab.es/project-promo-U-module-3-team-2"'
            ),
            (M = !1)),
        t.autor === ''
          ? (_('¿Cuál es tu nombre?'), (M = !1))
          : R.test(t.autor)
          ? _('')
          : (_('El nombre no debe contener números, ni caracteres especiales'),
            (M = !1)),
        t.job === ''
          ? (c('¿A qué te dedicas?'), (M = !1))
          : R.test(t.job)
          ? c('')
          : (c('El trabajo no debe contener números, ni caracteres especiales'),
            (M = !1)),
        t.photo === '' ? v('Por favor, añade una foto de tu proyecto') : v(''),
        t.image === '' ? P('Por favor, añade una foto de perfil') : P(''),
        M
          ? si.post(t).then((Ze) => {
              T(Ze), Ze !== void 0 && z(!1), console.log(Ze);
            })
          : z(!0);
    };
  return g.jsxs('div', {
    className: 'container',
    children: [
      g.jsx(Yh, {}),
      g.jsx(Wh, {}),
      g.jsxs('main', {
        className: 'main',
        children: [
          g.jsx($h, {}),
          g.jsxs(wh, {
            children: [
              g.jsx(oi, {path: '/', element: g.jsx(Kh, {})}),
              g.jsx(oi, {
                path: '/project',
                element: g.jsx(tf, {
                  data: t,
                  handleInput: wn,
                  handleClickCreateCard: I,
                  handleReset: C,
                  errorName: r,
                  errorSlogan: o,
                  errorRepo: m,
                  errorDemo: S,
                  errorTech: u,
                  errorDesc: a,
                  errorAutor: y,
                  errorJob: f,
                  errorPhoto: d,
                  errorImage: E,
                  responseUrl: j,
                  isHidden: W,
                  avatar: ge,
                  updateAvatar: xt,
                  project: dr,
                  updateProject: yn,
                }),
              }),
            ],
          }),
        ],
      }),
      g.jsx(Qh, {}),
    ],
  });
}
const qh = co.createRoot(document.getElementById('root'));
qh.render(g.jsx(Nh, {children: g.jsx(Gh, {})}));
