// init time
export function initTimeDate() {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
}

// zero fill
export function fixString(str) {
  str = "" + str;
  return str.length <= 1? "0" + str : str;
}

const maps = {
  'yyyy': date => date.getFullYear(),
  'MM': date => fixString(date.getMonth() + 1),
  'dd': date => fixString(date.getDate()),
  'HH': date => fixString(date.getHours()),
  'mm': date => fixString(date.getMinutes()),
  'ss': date => fixString(date.getSeconds())
};

// datetime format
export function handleFormat(value, format = "yyyy-MM-dd HH:mm:ss") {
  const trunk = new RegExp(Object.keys(maps).join('|'),'g');

  value = new Date(value);

  return format.replace(trunk, (capture) => {
    return maps[capture]? maps[capture](value): "";
  });
}

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

// getStyle
export function getStyle (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch(e) {
    return element.style[styleName];
  }
}

// judge type
export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}

// deepCopy
export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if ( t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

//debounce
export function debounce(fn) {
  let waiting;
  return function() {
    if (waiting) return;
    waiting = true;
    const context = this,
      args = arguments;
    const later = function() {
      waiting = false;
      fn.apply(context, args);
    };
    this.$nextTick(later);
  };
}


// Find components upward
export function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

// Find component downward
export function findComponentDownward (context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000/60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) return;

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}
