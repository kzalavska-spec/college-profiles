/* @ds-bundle: {"format":4,"namespace":"USNewsDesignSystem_740152","components":[{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ArticleGrid","sourcePath":"ui_kits/website/ArticleGrid.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"NewsletterFooter","sourcePath":"ui_kits/website/NewsletterFooter.jsx"},{"name":"RankingsPanel","sourcePath":"ui_kits/website/RankingsPanel.jsx"},{"name":"SiteHeader","sourcePath":"ui_kits/website/SiteHeader.jsx"}],"sourceHashes":{"components/data-display/Badge.jsx":"e7ba512db05c","components/data-display/Card.jsx":"1f206c464434","components/data-display/Chip.jsx":"39512e8444d2","components/feedback/Alert.jsx":"9dfc51d9ed2b","components/feedback/Dialog.jsx":"20c8fdafefe3","components/feedback/Tooltip.jsx":"14917df09520","components/forms/Button.jsx":"9acf5c3e77af","components/forms/Checkbox.jsx":"87c1029e9c08","components/forms/IconButton.jsx":"536ff19f7a91","components/forms/Input.jsx":"53c25b747986","components/forms/Radio.jsx":"52ba0f27c787","components/forms/Select.jsx":"60978deb1fe1","components/forms/Switch.jsx":"1262c120d3ba","components/navigation/Tabs.jsx":"a040cbd730db","ui_kits/website/ArticleGrid.jsx":"7d79d0c2d701","ui_kits/website/Hero.jsx":"96966b0b1336","ui_kits/website/NewsletterFooter.jsx":"9bb69ebaaf6a","ui_kits/website/RankingsPanel.jsx":"ee25f66c12c8","ui_kits/website/SiteHeader.jsx":"1c1c8d92fa6d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.USNewsDesignSystem_740152 = window.USNewsDesignSystem_740152 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Badge — small count/status indicator, optionally wrapping a child.
 */
function Badge({
  badgeContent,
  color = "secondary",
  dot = false,
  children,
  style,
  ...rest
}) {
  const bg = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    success: "var(--color-success)",
    metric: "var(--color-metric-good)"
  }[color] || "var(--color-secondary)";
  const badge = /*#__PURE__*/React.createElement("span", {
    style: {
      position: children ? "absolute" : "static",
      top: children ? -6 : undefined,
      right: children ? -6 : undefined,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: dot ? 10 : 20,
      height: dot ? 10 : 20,
      padding: dot ? 0 : "0 6px",
      borderRadius: 999,
      background: bg,
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1,
      boxSizing: "border-box"
    }
  }, !dot && badgeContent);
  if (!children) return badge;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, badge);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Card — radius 8 (BorderRadius2), no shadow, 1px divider border.
 * Minimal visual noise per brand.
 */
const Card = React.forwardRef(function Card({
  children,
  padding = "var(--space-3)",
  interactive = false,
  onClick,
  style,
  ...rest
}, ref) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--background-default)",
      border: "1px solid var(--divider)",
      borderRadius: "var(--radius-2)",
      boxShadow: interactive && hover ? "var(--shadow-2)" : "var(--shadow-none)",
      padding,
      cursor: interactive ? "pointer" : "default",
      transition: "box-shadow .15s ease, border-color .15s ease",
      borderColor: interactive && hover ? "var(--color-primary)" : "var(--divider)",
      ...style
    }
  }, rest), children);
});
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Chip — static tag, radius 4 (BorderRadius).
 */
function Chip({
  label,
  color = "default",
  variant = "filled",
  onDelete,
  size = "medium",
  style,
  ...rest
}) {
  const palette = {
    default: {
      bg: "var(--background-paper)",
      fg: "var(--text-primary)",
      border: "var(--divider)"
    },
    primary: {
      bg: "rgba(18,99,211,0.10)",
      fg: "var(--color-primary)",
      border: "rgba(18,99,211,0.30)"
    },
    secondary: {
      bg: "rgba(206,41,39,0.10)",
      fg: "var(--color-secondary)",
      border: "rgba(206,41,39,0.30)"
    },
    success: {
      bg: "rgba(36,136,128,0.12)",
      fg: "var(--color-success)",
      border: "rgba(36,136,128,0.30)"
    },
    warning: {
      bg: "rgba(232,154,0,0.14)",
      fg: "#8a5c00",
      border: "rgba(232,154,0,0.35)"
    }
  }[color] || {};
  const isOutlined = variant === "outlined";
  const h = size === "small" ? 22 : 28;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: h,
      padding: "0 10px",
      borderRadius: "var(--radius-1)",
      fontFamily: "var(--font-body)",
      fontSize: size === "small" ? "var(--caption-size)" : "var(--h6-size)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      background: isOutlined ? "transparent" : palette.bg,
      color: palette.fg,
      border: `1px solid ${isOutlined ? palette.border : "transparent"}`,
      ...style
    }
  }, rest), label, onDelete && /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    type: "button",
    "aria-label": label ? `Remove ${label}` : "Remove",
    className: "usn-focusable",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "inherit",
      padding: 0,
      width: 16,
      height: 16,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Alert — inline status message. Radius 4 (container).
 */
function Alert({
  severity = "info",
  title,
  onClose,
  children,
  style,
  ...rest
}) {
  const map = {
    success: {
      fg: "var(--color-success)",
      bg: "rgba(36,136,128,0.10)",
      icon: "M20 6 9 17l-5-5"
    },
    info: {
      fg: "var(--color-info)",
      bg: "rgba(53,140,231,0.10)",
      icon: "M12 16v-4M12 8h.01"
    },
    warning: {
      fg: "#8a5c00",
      bg: "rgba(232,154,0,0.12)",
      icon: "M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    },
    error: {
      fg: "var(--color-error)",
      bg: "rgba(185,37,35,0.10)",
      icon: "M12 8v4M12 16h.01"
    }
  }[severity] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: "12px 16px",
      borderRadius: "var(--radius-1)",
      background: map.bg,
      border: `1px solid ${map.fg}`,
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: map.fg,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }, severity !== "warning" && /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: map.icon
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--body2-size)",
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--body2-size)",
      lineHeight: "var(--body2-line)",
      color: "var(--text-secondary)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-secondary)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Dialog — modal surface, radius 8 (BorderRadius2).
 */
function Dialog({
  open,
  onClose,
  title,
  actions,
  children,
  width = 480,
  style,
  ...rest
}) {
  const dialogRef = React.useRef(null);
  const titleId = React.useId();
  React.useEffect(() => {
    if (!open) return;
    const node = dialogRef.current;
    const prevFocus = document.activeElement;
    // Move focus into the dialog on open.
    if (node) {
      const focusable = node.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      (focusable || node).focus();
    }
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
      if (e.key !== "Tab" || !node) return;
      // Simple focus trap.
      const items = node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (prevFocus && prevFocus.focus) prevFocus.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(44,48,60,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1300,
      padding: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: dialogRef,
    role: "dialog",
    "aria-modal": "true",
    tabIndex: -1,
    "aria-labelledby": title ? titleId : undefined,
    "aria-label": !title ? "Dialog" : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--background-default)",
      borderRadius: "var(--radius-2)",
      boxShadow: "var(--shadow-2)",
      width,
      maxWidth: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      outline: "none",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-3) var(--space-3) var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    id: titleId,
    style: {
      fontSize: "var(--h4-size)",
      lineHeight: "var(--h4-line)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    type: "button",
    "aria-label": "Close",
    className: "usn-focusable",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-secondary)",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: title ? "0 var(--space-3) var(--space-3)" : "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--body2-size)",
      lineHeight: "var(--body2-line)",
      color: "var(--text-secondary)"
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-3)"
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Tooltip — hover/focus label. Dark surface, radius 4.
 */
function Tooltip({
  title,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      background: "var(--text-primary)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      lineHeight: 1.3,
      padding: "6px 8px",
      borderRadius: "var(--radius-1)",
      whiteSpace: "nowrap",
      zIndex: 1400,
      pointerEvents: "none",
      boxShadow: "var(--shadow-2)"
    }
  }, title));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Button — MUI-aligned.
 * Radius 4 (per Figma), textTransform none, padding 8px 16px.
 */
function Button({
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  type = "button",
  children,
  style,
  className,
  ...rest
}) {
  const colorHex = color === "secondary" ? "var(--color-secondary)" : "var(--color-primary)";
  const hoverHex = color === "secondary" ? "var(--color-secondary-hover)" : "var(--color-primary-hover)";
  const sizes = {
    small: {
      padding: "6px 12px",
      font: "var(--h6-size)"
    },
    medium: {
      padding: "8px 16px",
      font: "var(--body2-size)"
    },
    large: {
      padding: "12px 24px",
      font: "var(--body1-size)"
    }
  };
  const s = sizes[size] || sizes.medium;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--fw-medium)",
    fontSize: s.font,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
    padding: s.padding,
    borderRadius: "var(--radius-1)",
    textTransform: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    transition: "background-color .15s ease, border-color .15s ease, color .15s ease",
    border: "1px solid transparent",
    outline: "none",
    opacity: disabled ? 0.45 : 1
  };
  const variants = {
    contained: {
      backgroundColor: colorHex,
      color: "var(--color-primary-contrast)",
      "--hover-bg": hoverHex
    },
    outlined: {
      backgroundColor: "transparent",
      color: colorHex,
      borderColor: colorHex,
      "--hover-bg": "var(--state-hover-surface)"
    },
    text: {
      backgroundColor: "transparent",
      color: colorHex,
      "--hover-bg": "var(--state-hover-surface)"
    }
  };
  const v = variants[variant] || variants.contained;
  const [hover, setHover] = React.useState(false);
  const bg = hover && !disabled ? variant === "contained" ? hoverHex : "var(--state-hover-surface)" : v.backgroundColor;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: ["usn-focusable", className].filter(Boolean).join(" "),
    style: {
      ...base,
      ...v,
      backgroundColor: bg,
      ...style
    }
  }, rest), startIcon, children, endIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Checkbox — square check with label.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const cbId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    className: "usn-control",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--body2-size)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "usn-control-visual",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "var(--radius-1)",
      border: `2px solid ${checked ? "var(--color-primary)" : "var(--border-default)"}`,
      background: checked ? "var(--color-primary)" : "var(--background-default)",
      transition: "background-color .15s ease, border-color .15s ease",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News IconButton — square, icon-only interactive control.
 * Requires aria-label for accessibility.
 */
function IconButton({
  color = "default",
  size = "medium",
  disabled = false,
  onClick,
  children,
  "aria-label": ariaLabel,
  style,
  className,
  ...rest
}) {
  const dims = {
    small: 32,
    medium: 40,
    large: 48
  };
  const d = dims[size] || dims.medium;
  const colorHex = {
    default: "var(--text-secondary)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)"
  }[color] || "var(--text-secondary)";
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: ["usn-focusable", className].filter(Boolean).join(" "),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-3)",
      background: hover && !disabled ? "var(--state-hover-surface)" : "transparent",
      color: colorHex,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background-color .15s ease",
      outline: "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Input — text field with label + helper/error text.
 * Rounded input (radius 16), divider border, focus ring in primary blue.
 */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  helperText,
  error = false,
  disabled = false,
  fullWidth = false,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const helperId = `${inputId}-helper`;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--color-error)" : focus ? "var(--color-primary)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: fullWidth ? "100%" : "auto",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--h6-size)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": error,
    "aria-describedby": helperText ? helperId : undefined,
    className: "usn-focusable",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body2-size)",
      lineHeight: "var(--body2-line)",
      color: "var(--text-primary)",
      padding: "10px 16px",
      borderRadius: "var(--radius-3)",
      border: `1px solid ${borderColor}`,
      background: disabled ? "var(--background-paper)" : "var(--background-default)",
      outline: "none",
      boxShadow: focus && !error ? "var(--shadow-focus)" : "none",
      transition: "border-color .15s ease, box-shadow .15s ease",
      width: "100%",
      boxSizing: "border-box"
    }
  }, rest)), helperText && /*#__PURE__*/React.createElement("span", {
    id: helperId,
    role: error ? "alert" : undefined,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      lineHeight: "var(--caption-line)",
      color: error ? "var(--color-error)" : "var(--text-secondary)"
    }
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Radio — single-select circular control with label.
 */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const rId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    className: "usn-control",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--body2-size)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "usn-control-visual",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `2px solid ${checked ? "var(--color-primary)" : "var(--border-default)"}`,
      background: "var(--background-default)",
      transition: "border-color .15s ease",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--color-primary)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Select — native select styled to match Input.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  fullWidth = false,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const selectId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: fullWidth ? "100%" : "auto",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--h6-size)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    className: "usn-focusable",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--body2-size)",
      lineHeight: "var(--body2-line)",
      color: "var(--text-primary)",
      padding: "10px 40px 10px 16px",
      borderRadius: "var(--radius-3)",
      border: `1px solid ${focus ? "var(--color-primary)" : "var(--border-default)"}`,
      background: disabled ? "var(--background-paper)" : "var(--background-default)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color .15s ease, box-shadow .15s ease"
    }
  }, rest), options.map(o => {
    const val = typeof o === "object" ? o.value : o;
    const lab = typeof o === "object" ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-secondary)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Switch — on/off toggle.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const sId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sId,
    className: "usn-control",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--body2-size)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "usn-control-visual",
    style: {
      position: "relative",
      width: 40,
      height: 22,
      borderRadius: 999,
      background: checked ? "var(--color-primary)" : "var(--border-default)",
      transition: "background-color .15s ease",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-1)",
      transition: "left .15s ease"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: sId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U.S. News Tabs — underline-style navigation. Active tab uses primary blue.
 */
function Tabs({
  value,
  onChange,
  tabs = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-4)",
      borderBottom: "1px solid var(--divider)",
      ...style
    }
  }, rest), tabs.map(t => {
    const val = typeof t === "object" ? t.value : t;
    const lab = typeof t === "object" ? t.label : t;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      type: "button",
      "aria-selected": active,
      tabIndex: active ? 0 : -1,
      className: "usn-focusable",
      onClick: () => onChange && onChange(val),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "12px 0",
        fontFamily: "var(--font-body)",
        fontSize: "var(--body2-size)",
        fontWeight: active ? "var(--fw-semibold)" : "var(--fw-regular)",
        color: active ? "var(--color-primary)" : "var(--text-secondary)",
        transition: "color .15s ease"
      }
    }, lab, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: active ? "var(--color-primary)" : "transparent",
        borderRadius: "2px 2px 0 0"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticleGrid.jsx
try { (() => {
const ARTICLES = [{
  kicker: "Health",
  cat: "primary",
  title: "The Best Diets Overall for 2026, Ranked by Experts",
  meta: "Health · 6 min read"
}, {
  kicker: "Money",
  cat: "success",
  title: "How to Build an Emergency Fund on Any Income",
  meta: "Money · 4 min read"
}, {
  kicker: "Travel",
  cat: "primary",
  title: "The 30 Best Places to Visit in the U.S. This Year",
  meta: "Travel · 8 min read"
}, {
  kicker: "Cars",
  cat: "secondary",
  title: "Best New SUVs of 2026 for Families",
  meta: "Cars · 5 min read"
}, {
  kicker: "Education",
  cat: "primary",
  title: "10 Questions to Ask on Every Campus Tour",
  meta: "Education · 3 min read"
}, {
  kicker: "Real Estate",
  cat: "success",
  title: "The Best Places to Live for Young Professionals",
  meta: "Real Estate · 7 min read"
}];
function ArticleGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "24px 24px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", null, "The latest"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, "See all stories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, ARTICLES.map(a => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: a.title,
    interactive: true,
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: "var(--background-paper)",
      borderTopLeftRadius: "var(--radius-2)",
      borderTopRightRadius: "var(--radius-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    label: a.kicker,
    color: a.cat,
    size: "small"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "10px 0 8px",
      lineHeight: 1.3
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    className: "usn-caption",
    style: {
      fontStyle: "normal"
    }
  }, a.meta))))));
}
Object.assign(__ds_scope, { ArticleGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticleGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "40px 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 40,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("span", {
    className: "usn-kicker"
  }, "Best Colleges"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "8px 0 12px",
      maxWidth: 620
    }
  }, "The 2026 Best Colleges rankings are here"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--body1-size)",
      lineHeight: "var(--body1-line)",
      color: "var(--text-secondary)",
      maxWidth: 560,
      margin: "0 0 20px"
    }
  }, "Compare more than 1,500 schools on academics, cost, and outcomes \u2014 and find the right fit with our step-by-step tools."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    color: "secondary",
    size: "large"
  }, "Explore the rankings"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outlined",
    size: "large"
  }, "How we rank"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "linear-gradient(160deg, #1263D3, #0C489B)",
      borderRadius: "var(--radius-2)",
      padding: 28,
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      opacity: 0.85
    }
  }, "Featured tool"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.2,
      margin: "10px 0 8px"
    }
  }, "College Compass"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      opacity: 0.9,
      margin: "0 0 18px"
    }
  }, "Unlock detailed data, expanded rankings, and personalized fit scores."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    label: "1,500+ schools",
    style: {
      background: "rgba(255,255,255,0.18)",
      color: "#fff"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    label: "Fit scores",
    style: {
      background: "rgba(255,255,255,0.18)",
      color: "#fff"
    }
  })))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsletterFooter.jsx
try { (() => {
function NewsletterFooter() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--background-paper)",
      borderTop: "1px solid var(--divider)",
      borderBottom: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "40px 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "usn-kicker"
  }, "Newsletter"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 6px"
    }
  }, "Get the daily brief"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, "Rankings, analysis, and advice you can trust \u2014 in your inbox each morning.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Email address",
    placeholder: "you@example.com",
    fullWidth: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    color: "secondary",
    size: "large",
    style: {
      whiteSpace: "nowrap"
    }
  }, "Sign up")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--text-primary)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "40px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      background: "#fff",
      borderRadius: "var(--radius-1)",
      padding: "8px 10px",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/usnews-logo.png",
    alt: "U.S. News & World Report",
    style: {
      height: 28,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, [["Rankings", ["Best Colleges", "Best Hospitals", "Best Cars", "Best Diets"]], ["Company", ["About", "Careers", "Contact", "Press"]], ["Products", ["College Compass", "Doctor Finder", "360 Reviews", "Newsletters"]], ["Legal", ["Terms of Use", "Privacy Policy", "Advertising", "Accessibility"]]].map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      marginBottom: 12
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.75)",
      fontSize: 13,
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.15)",
      fontSize: 12,
      color: "rgba(255,255,255,0.55)"
    }
  }, "\xA9 2026 U.S. News & World Report L.P. All rights reserved."))));
}
Object.assign(__ds_scope, { NewsletterFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsletterFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RankingsPanel.jsx
try { (() => {
const RANKINGS = {
  colleges: [{
    rank: 1,
    name: "Princeton University",
    loc: "Princeton, NJ",
    score: "100"
  }, {
    rank: 2,
    name: "Massachusetts Institute of Technology",
    loc: "Cambridge, MA",
    score: "99"
  }, {
    rank: 3,
    name: "Harvard University",
    loc: "Cambridge, MA",
    score: "98"
  }, {
    rank: 4,
    name: "Stanford University",
    loc: "Stanford, CA",
    score: "98"
  }, {
    rank: 5,
    name: "Yale University",
    loc: "New Haven, CT",
    score: "97"
  }],
  hospitals: [{
    rank: 1,
    name: "Mayo Clinic",
    loc: "Rochester, MN",
    score: "100"
  }, {
    rank: 2,
    name: "Cleveland Clinic",
    loc: "Cleveland, OH",
    score: "98"
  }, {
    rank: 3,
    name: "Johns Hopkins Hospital",
    loc: "Baltimore, MD",
    score: "97"
  }, {
    rank: 4,
    name: "Massachusetts General Hospital",
    loc: "Boston, MA",
    score: "96"
  }, {
    rank: 5,
    name: "UCLA Medical Center",
    loc: "Los Angeles, CA",
    score: "95"
  }]
};
function RankingsPanel() {
  const [tab, setTab] = React.useState("colleges");
  const rows = RANKINGS[tab];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "8px 24px 48px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "usn-kicker"
  }, "Rankings"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "8px 0 16px"
    }
  }, "Explore the rankings"), /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "colleges",
      label: "Best Colleges"
    }, {
      value: "hospitals",
      label: "Best Hospitals"
    }]
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "0",
    style: {
      marginTop: 20
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.rank,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px",
      borderBottom: i < rows.length - 1 ? "1px solid var(--divider)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--color-primary)"
    }
  }, "#", r.rank), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, r.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-secondary)",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, "Score"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 18,
      color: "var(--color-metric-good)"
    }
  }, r.score))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outlined"
  }, "View full rankings")));
}
Object.assign(__ds_scope, { RankingsPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RankingsPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const NAV = ["Education", "Health", "Money", "Travel", "Cars", "News", "Real Estate"];
function SiteHeader({
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--divider)",
      background: "var(--background-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      gap: 24,
      height: 68
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/usnews-logo.png",
    alt: "U.S. News & World Report",
    style: {
      height: 34,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    "aria-label": "Search",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    badgeContent: 3,
    color: "secondary"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    "aria-label": "Alerts"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "small",
    color: "secondary"
  }, "Subscribe")), /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      gap: 28,
      height: 46,
      alignItems: "center"
    }
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: i === 0 ? 600 : 400,
      color: i === 0 ? "var(--color-primary)" : "var(--text-primary)",
      textDecoration: "none"
    }
  }, n)))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ArticleGrid = __ds_scope.ArticleGrid;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.NewsletterFooter = __ds_scope.NewsletterFooter;

__ds_ns.RankingsPanel = __ds_scope.RankingsPanel;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
