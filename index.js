'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactImask = require('react-imask');
var ne = require('react-dom');
var ne__default = _interopDefault(ne);
var crypto = _interopDefault(require('crypto'));

var DotsClassEnum;
(function (DotsClassEnum) {
    DotsClassEnum["large"] = "uiKit-dots-largeSize";
    DotsClassEnum["regular"] = "uiKit-dots-regularSize";
    DotsClassEnum["small"] = "uiKit-dots-smallSize";
})(DotsClassEnum || (DotsClassEnum = {}));
(function (DotsSizeEnum) {
    DotsSizeEnum["large"] = "large";
    DotsSizeEnum["regular"] = "regular";
    DotsSizeEnum["small"] = "small";
})(exports.DotsSizeEnum || (exports.DotsSizeEnum = {}));

var DotsSvg = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20style%3D%22margin%3A%20auto%3B%20background%3A%20none%3B%20display%3A%20block%3B%20shape-rendering%3A%20auto%3B%22%20width%3D%2248px%22%20height%3D%2248px%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22xMidYMid%22%3E%20%20%3Ccircle%20cx%3D%2284%22%20cy%3D%2250%22%20r%3D%220.0201445%22%20fill%3D%22%23000000%22%3E%20%20%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20repeatCount%3D%22indefinite%22%20dur%3D%220.3571428571428571s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B1%22%20values%3D%2210%3B0%22%20keySplines%3D%220%200.5%200.5%201%22%20begin%3D%220s%22%20%2F%3E%20%20%20%20%20%20%3Canimate%20attributeName%3D%22fill%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22discrete%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%22%23000000%3B%23ffe28b%3B%23000000%3B%23ffe28b%3B%23000000%22%20begin%3D%220s%22%20%2F%3E%20%20%3C%2Fcircle%3E%20%20%3Ccircle%20cx%3D%2249.9307%22%20cy%3D%2250%22%20r%3D%2210%22%20fill%3D%22%23000000%22%3E%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%220%3B0%3B10%3B10%3B10%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%220s%22%20%2F%3E%20%20%20%20%3Canimate%20attributeName%3D%22cx%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%2216%3B16%3B16%3B50%3B84%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%220s%22%20%2F%3E%20%20%3C%2Fcircle%3E%20%20%3Ccircle%20cx%3D%2283.9307%22%20cy%3D%2250%22%20r%3D%2210%22%20fill%3D%22%23ffe28b%22%3E%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%220%3B0%3B10%3B10%3B10%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%22-0.3571428571428571s%22%20%2F%3E%20%20%20%20%3Canimate%20attributeName%3D%22cx%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%2216%3B16%3B16%3B50%3B84%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%22-0.3571428571428571s%22%20%2F%3E%20%20%3C%2Fcircle%3E%20%20%3Ccircle%20cx%3D%2216%22%20cy%3D%2250%22%20r%3D%220%22%20fill%3D%22%23000000%22%3E%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%220%3B0%3B10%3B10%3B10%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%22-0.7142857142857142s%22%20%2F%3E%20%20%20%20%3Canimate%20attributeName%3D%22cx%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%2216%3B16%3B16%3B50%3B84%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%22-0.7142857142857142s%22%20%2F%3E%20%20%3C%2Fcircle%3E%20%20%3Ccircle%20cx%3D%2216%22%20cy%3D%2250%22%20r%3D%229.97961%22%20fill%3D%22%23ffe28b%22%3E%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%220%3B0%3B10%3B10%3B10%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%22-1.0714285714285714s%22%20%2F%3E%20%20%20%20%3Canimate%20attributeName%3D%22cx%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.4285714285714284s%22%20calcMode%3D%22spline%22%20keyTimes%3D%220%3B0.25%3B0.5%3B0.75%3B1%22%20values%3D%2216%3B16%3B16%3B50%3B84%22%20keySplines%3D%220%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%3B0%200.5%200.5%201%22%20begin%3D%22-1.0714285714285714s%22%20%2F%3E%20%20%3C%2Fcircle%3E%3C%2Fsvg%3E";

const Dots = (props) => {
    const { size = exports.DotsSizeEnum.regular, className = '' } = props;
    // Memo
    const memoClassName = React.useMemo(() => `${DotsClassEnum[size]} ${className}`, [size, className]);
    return React__default.createElement("img", { src: DotsSvg, className: memoClassName, alt: "" });
};

(function (TypographyType) {
    TypographyType["body"] = "body";
    TypographyType["h1"] = "h1";
    TypographyType["h2"] = "h2";
    TypographyType["h3"] = "h3";
    TypographyType["h4"] = "h4";
    TypographyType["large"] = "large";
    TypographyType["small"] = "small";
})(exports.TypographyType || (exports.TypographyType = {}));
(function (TypographyFontWeight) {
    TypographyFontWeight["bold"] = "bold";
    TypographyFontWeight["regular"] = "regular";
    TypographyFontWeight["semibold"] = "semibold";
})(exports.TypographyFontWeight || (exports.TypographyFontWeight = {}));
(function (TypographyTag) {
    TypographyTag["figcaption"] = "figcaption";
    TypographyTag["h1"] = "h1";
    TypographyTag["h2"] = "h2";
    TypographyTag["h3"] = "h3";
    TypographyTag["h4"] = "h4";
    TypographyTag["h5"] = "h5";
    TypographyTag["h6"] = "h6";
    TypographyTag["p"] = "p";
    TypographyTag["span"] = "span";
})(exports.TypographyTag || (exports.TypographyTag = {}));
(function (TypographyFont) {
    TypographyFont["officina"] = "officina-serif";
    TypographyFont["sourceSans"] = "source-sans-pro";
})(exports.TypographyFont || (exports.TypographyFont = {}));

const Typography = ({ type = exports.TypographyType.body, weight, value, children, className = '', margin, ellipsis, multilineEllipsis, tag = exports.TypographyTag.p, font }) => {
    const classes = `uiKit-typography--${type} ${(ellipsis && 'uiKit-typography--text-ellipsis')} ${(font && `uiKit-typography--${font}`) || ''} ${(weight && `uiKit-typography--${weight}`) || ''} ${(multilineEllipsis && 'uiKit-typography--text-ellipsis-multiline') || ''}`;
    const style = { margin, WebkitLineClamp: multilineEllipsis };
    return React.createElement(tag, {
        className: `uiKit-typography ${className} ${classes}`,
        children: children || value,
        style
    });
};

(function (TypeButtonEnum) {
    TypeButtonEnum["danger"] = "danger";
    TypeButtonEnum["default"] = "default";
    TypeButtonEnum["primary"] = "primary";
    TypeButtonEnum["text"] = "text";
})(exports.TypeButtonEnum || (exports.TypeButtonEnum = {}));
var TypeButtonClassEnum;
(function (TypeButtonClassEnum) {
    TypeButtonClassEnum["danger"] = "uiKit-button-typeDanger";
    TypeButtonClassEnum["default"] = "uiKit-button-typeDefault";
    TypeButtonClassEnum["primary"] = "uiKit-button-typePrimary";
    TypeButtonClassEnum["text"] = "uiKit-button-typeText";
})(TypeButtonClassEnum || (TypeButtonClassEnum = {}));
(function (SizeButtonEnum) {
    SizeButtonEnum["large"] = "large";
    SizeButtonEnum["regular"] = "regular";
    SizeButtonEnum["small"] = "small";
})(exports.SizeButtonEnum || (exports.SizeButtonEnum = {}));
var SizeButtonClassEnum;
(function (SizeButtonClassEnum) {
    SizeButtonClassEnum["large"] = "uiKit-button-sizeLarge";
    SizeButtonClassEnum["regular"] = "uiKit-button-sizeRegular";
    SizeButtonClassEnum["small"] = "uiKit-button-sizeSmall";
})(SizeButtonClassEnum || (SizeButtonClassEnum = {}));

const DEFAULT_ANIMATION_TIMEOUT = 400;

// TODO какие-то изменения в макете по кнопке
const Button = (props) => {
    const { handleClick, value = '', isDisabled = false, isLoading = false, type = exports.TypeButtonEnum.default, size = exports.SizeButtonEnum.regular, className = '', } = props;
    // State //
    const [isAnimation, toggleAnimation] = React.useState(false);
    // Memo //
    const memoDisabled = React.useMemo(() => isDisabled, [isDisabled]);
    const memoLoading = React.useMemo(() => isLoading, [isLoading]);
    const memoTypographyType = React.useMemo(() => {
        if (size === exports.SizeButtonEnum.regular) {
            return exports.TypographyType.body;
        }
        if (size === exports.SizeButtonEnum.small) {
            return exports.TypographyType.small;
        }
        if (size === exports.SizeButtonEnum.large) {
            return exports.TypographyType.large;
        }
    }, [size]);
    const buttonClassName = React.useMemo(() => `${TypeButtonClassEnum[type]} ${SizeButtonClassEnum[size]} ${(isAnimation && 'animation-Click') || ''} ${className}`, [type, size, className, isAnimation]);
    // Callbacks //
    const useCallbackHandleClick = React.useCallback((event) => {
        if (memoDisabled || memoLoading)
            return null;
        const timeout = setTimeout(() => toggleAnimation(false), DEFAULT_ANIMATION_TIMEOUT);
        if (isAnimation) {
            clearTimeout(timeout);
        }
        else {
            toggleAnimation(true);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        handleClick && handleClick(event);
    }, [handleClick, isAnimation, memoDisabled, memoLoading]);
    return (React__default.createElement("button", { type: "button", className: buttonClassName, disabled: memoDisabled, onClick: useCallbackHandleClick },
        memoLoading && React__default.createElement(Dots, { size: exports.DotsSizeEnum[size] }),
        React__default.createElement(Typography, { value: value, type: memoTypographyType, weight: "semibold" })));
};

var TypeLinkClassEnum;
(function (TypeLinkClassEnum) {
    // External Link
    TypeLinkClassEnum["external"] = "uiKit-link-typeExternal";
    // Pseudo Link
    TypeLinkClassEnum["pseudo"] = "uiKit-link-typePseudo";
    // Regular Link
    TypeLinkClassEnum["regular"] = "uiKit-link-typeRegular";
})(TypeLinkClassEnum || (TypeLinkClassEnum = {}));
(function (TypeLinkEnum) {
    TypeLinkEnum["external"] = "external";
    TypeLinkEnum["pseudo"] = "pseudo";
    TypeLinkEnum["regular"] = "regular";
})(exports.TypeLinkEnum || (exports.TypeLinkEnum = {}));

const Link = (props) => {
    const { value, type = exports.TypeLinkEnum.regular, className = '' } = props;
    // Memo
    const memoValue = React.useMemo(() => value, [value]);
    const memoIsExternalLink = React.useMemo(() => type === exports.TypeLinkEnum.external, [type]);
    const memoClassName = React.useMemo(() => `uiKit-link-wrapper ${className}`, [className]);
    return (React__default.createElement("div", { className: memoClassName },
        React__default.createElement("span", { className: TypeLinkClassEnum[type], tabIndex: -1 },
            React__default.createElement(Typography, { value: memoValue })),
        memoIsExternalLink && (React__default.createElement("svg", { className: "uiKit-link-typeExternal-arrow", width: "16", height: "17", viewBox: "0 0 16 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default.createElement("path", { d: "M5.74994 4.00797C5.33573 4.00797 4.99994 4.34375 4.99994 4.75797C4.99994 5.17218 5.33573 5.50797 5.74994 5.50797H9.4533L3.49994 11.4473C3.20705 11.7402 3.20705 12.2151 3.49994 12.508C3.79283 12.8009 4.2677 12.8009 4.5606 12.508L10.5 6.58257V10.258C10.5 10.6722 10.8358 11.008 11.25 11.008C11.6642 11.008 12 10.6722 12 10.258V4.75797C12 4.34375 11.6642 4.00797 11.25 4.00797H5.74994Z", fill: "#595A5F" })))));
};

(function (TypeCheckboxEnum) {
    TypeCheckboxEnum["indeterminate"] = "indeterminate";
    TypeCheckboxEnum["normal"] = "normal";
})(exports.TypeCheckboxEnum || (exports.TypeCheckboxEnum = {}));
var TypeCheckboxEnumClassEnum;
(function (TypeCheckboxEnumClassEnum) {
    TypeCheckboxEnumClassEnum["indeterminate"] = "uiKit-button-indeterminate";
    TypeCheckboxEnumClassEnum["normal"] = "uiKit-checkbox-normal";
})(TypeCheckboxEnumClassEnum || (TypeCheckboxEnumClassEnum = {}));

function Checkbox({ name, isActive, hasError = false, disabled = false, type = exports.TypeCheckboxEnum.normal, onClick, onChange, onChangeField, className = '', }) {
    // Memo
    const memoClassName = `${TypeCheckboxEnumClassEnum[type]}${(hasError && '_hasError') || ''} ${className}`;
    const handleChange = React.useCallback((e) => {
        const { checked } = e.target;
        onChange === null || onChange === void 0 ? void 0 : onChange(checked);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(checked, name);
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    }, [name, onChange, onChangeField, onClick]);
    return (React__default.createElement("input", { className: memoClassName, type: "checkbox", disabled: disabled, onChange: handleChange, defaultChecked: isActive }));
}

const H1 = (props) => {
    const { value, children, className = '', margin, maxWidth } = props;
    const memoValue = React.useMemo(() => value || '', [value]);
    const memoClassName = React.useMemo(() => `uiKit-typography-h1${(maxWidth && '_eclipses') || ''} ${className}`, [className, maxWidth]);
    const style = { margin: `${margin}`, maxWidth: (maxWidth && `${maxWidth}px`) || 'auto' };
    return (React__default.createElement("h1", { style: style, className: memoClassName },
        memoValue,
        children));
};

const H2 = (props) => {
    const { value, children, className = '', margin, maxWidth } = props;
    const memoValue = React.useMemo(() => value || '', [value]);
    const memoClassName = React.useMemo(() => `uiKit-typography-h2${(maxWidth && '_eclipses') || ''} ${className}`, [className, maxWidth]);
    const style = { margin: `${margin}`, maxWidth: (maxWidth && `${maxWidth}px`) || 'auto' };
    return (React__default.createElement("h2", { style: style, className: memoClassName },
        memoValue,
        children));
};

const H3 = (props) => {
    const { value, children, className = '', margin, maxWidth } = props;
    const memoValue = React.useMemo(() => value || '', [value]);
    const memoClassName = React.useMemo(() => `uiKit-typography-h3${(maxWidth && '_eclipses') || ''} ${className}`, [className, maxWidth]);
    const style = { margin: `${margin}`, maxWidth: (maxWidth && `${maxWidth}px`) || 'auto' };
    return (React__default.createElement("h3", { style: style, className: memoClassName },
        memoValue,
        children));
};

const H4 = (props) => {
    const { value, children, className = '', margin, maxWidth } = props;
    const memoValue = React.useMemo(() => value || '', [value]);
    const memoClassName = React.useMemo(() => `uiKit-typography-h4${(maxWidth && '_eclipses') || ''} ${className}`, [className, maxWidth]);
    const style = { margin: `${margin}`, maxWidth: (maxWidth && `${maxWidth}px`) || 'auto' };
    return (React__default.createElement("h4", { style: style, className: memoClassName },
        memoValue,
        children));
};

var LargeClassNameEnum;
(function (LargeClassNameEnum) {
    LargeClassNameEnum["bold"] = "uiKit-typography-large-bold";
    LargeClassNameEnum["regular"] = "uiKit-typography-large-regular";
    LargeClassNameEnum["semiBold"] = "uiKit-typography-large-bold";
})(LargeClassNameEnum || (LargeClassNameEnum = {}));
var LargeWeightEnum;
(function (LargeWeightEnum) {
    LargeWeightEnum["bold"] = "bold";
    LargeWeightEnum["regular"] = "regular";
    LargeWeightEnum["semiBold"] = "bold";
})(LargeWeightEnum || (LargeWeightEnum = {}));

const Large = (props) => {
    const { value, weight = LargeWeightEnum.regular, children, className = '', margin, maxWidth } = props;
    const memoValue = React.useMemo(() => value || '', [value]);
    const memoClassName = React.useMemo(() => `${LargeClassNameEnum[weight] || LargeClassNameEnum.regular}${(maxWidth && '_eclipses') || ''} ${className}`, [weight, maxWidth, className]);
    const style = { margin: `${margin}`, maxWidth: (maxWidth && `${maxWidth}px`) || 'auto' };
    return (React__default.createElement("p", { style: style, className: memoClassName },
        memoValue,
        children));
};

var BodyClassNameEnum;
(function (BodyClassNameEnum) {
    BodyClassNameEnum["bold"] = "uiKit-typography-body-bold";
    BodyClassNameEnum["regular"] = "uiKit-typography-body-regular";
    BodyClassNameEnum["semiBold"] = "uiKit-typography-body-semiBold";
})(BodyClassNameEnum || (BodyClassNameEnum = {}));
var BodyWeightEnum;
(function (BodyWeightEnum) {
    BodyWeightEnum["bold"] = "bold";
    BodyWeightEnum["regular"] = "regular";
    BodyWeightEnum["semiBold"] = "semiBold";
})(BodyWeightEnum || (BodyWeightEnum = {}));

const Body = (props) => {
    const { value, weight = BodyWeightEnum.regular, children, className = '', margin, maxWidth } = props;
    const memoValue = React.useMemo(() => value || '', [value]);
    const memoClassName = React.useMemo(() => `${BodyClassNameEnum[weight] || BodyWeightEnum.regular}${(maxWidth && '_eclipses') || ''} ${className}`, [className, maxWidth, weight]);
    const style = { margin: `${margin}`, maxWidth: (maxWidth && `${maxWidth}px`) || 'auto' };
    return (React__default.createElement("p", { style: style, className: memoClassName },
        memoValue,
        children));
};

var SmallClassNameEnum;
(function (SmallClassNameEnum) {
    SmallClassNameEnum["bold"] = "uiKit-typography-small-semiBold";
    SmallClassNameEnum["regular"] = "uiKit-typography-small-regular";
    SmallClassNameEnum["semiBold"] = "uiKit-typography-small-semiBold";
})(SmallClassNameEnum || (SmallClassNameEnum = {}));
var SmallWeightEnum;
(function (SmallWeightEnum) {
    SmallWeightEnum["bold"] = "semiBold";
    SmallWeightEnum["regular"] = "regular";
    SmallWeightEnum["semiBold"] = "semiBold";
})(SmallWeightEnum || (SmallWeightEnum = {}));

const Small = (props) => {
    const { value, weight = SmallWeightEnum.regular, children, className = '', margin, maxWidth } = props;
    const memoValue = React.useMemo(() => value || '', [value]);
    const memoClassName = React.useMemo(() => `${SmallClassNameEnum[weight] || SmallClassNameEnum.regular}${(maxWidth && '_eclipses') || ''} ${className}`, [weight, maxWidth, className]);
    const style = { margin: `${margin}`, maxWidth: (maxWidth && `${maxWidth}px`) || 'auto' };
    return (React__default.createElement("p", { style: style, className: memoClassName },
        memoValue,
        children));
};

(function (TypeTypographyEnum) {
    TypeTypographyEnum["body"] = "body";
    TypeTypographyEnum["h1"] = "h1";
    TypeTypographyEnum["h2"] = "h2";
    TypeTypographyEnum["h3"] = "h3";
    TypeTypographyEnum["h4"] = "h4";
    TypeTypographyEnum["large"] = "large";
    TypeTypographyEnum["small"] = "small";
})(exports.TypeTypographyDeprecatedEnum || (exports.TypeTypographyDeprecatedEnum = {}));
(function (WeightTypographyEnum) {
    WeightTypographyEnum["bold"] = "bold";
    WeightTypographyEnum["regular"] = "regular";
    WeightTypographyEnum["semiBold"] = "semiBold";
})(exports.WeightTypographyDeprecatedEnum || (exports.WeightTypographyDeprecatedEnum = {}));

const Typography$1 = (props) => {
    const { type = exports.TypeTypographyDeprecatedEnum.body, weight = exports.WeightTypographyDeprecatedEnum.regular, value = '', children, className: classProp = '', margin, maxWidth = 0, ellipsis } = props;
    const className = (ellipsis && `${classProp} uiKit-typography--text-ellipsis`) || classProp;
    switch (type) {
        case exports.TypeTypographyDeprecatedEnum.h1:
            return (React__default.createElement(H1, { value: value, className: className, margin: margin, maxWidth: maxWidth }, children));
        case exports.TypeTypographyDeprecatedEnum.h2:
            return (React__default.createElement(H2, { value: value, className: className, margin: margin, maxWidth: maxWidth }, children));
        case exports.TypeTypographyDeprecatedEnum.h3:
            return (React__default.createElement(H3, { value: value, className: className, margin: margin, maxWidth: maxWidth }, children));
        case exports.TypeTypographyDeprecatedEnum.h4:
            return (React__default.createElement(H4, { value: value, className: className, margin: margin, maxWidth: maxWidth }, children));
        case exports.TypeTypographyDeprecatedEnum.large:
            return (React__default.createElement(Large, { value: value, weight: weight, className: className, margin: margin, maxWidth: maxWidth }, children));
        case exports.TypeTypographyDeprecatedEnum.body:
            return (React__default.createElement(Body, { value: value, weight: weight, className: className, margin: margin, maxWidth: maxWidth }, children));
        case exports.TypeTypographyDeprecatedEnum.small:
            return (React__default.createElement(Small, { value: value, weight: weight, className: className, margin: margin, maxWidth: maxWidth }, children));
        default:
            return (React__default.createElement(Body, { value: exports.TypeTypographyDeprecatedEnum.body, weight: exports.WeightTypographyDeprecatedEnum.regular, className: className, margin: margin, maxWidth: maxWidth }, children));
    }
};

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgExternal(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 9 9",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M2.75 0a.75.75 0 000 1.5h3.703L.5 7.44A.75.75 0 101.56 8.5L7.5 2.575V6.25a.75.75 0 101.5 0V.75A.75.75 0 008.25 0h-5.5z"
  })));
}

var _path$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgAngleDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    viewBox: "0 0 14 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M1.5 1.5l5.332 4.847a.25.25 0 00.336 0L12.5 1.5",
    stroke: "evenodd",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  })));
}

var _path$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgAngleUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    viewBox: "0 0 14 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M1.5 6.5l5.332-4.847a.25.25 0 01.336 0L12.5 6.5",
    stroke: "evenodd",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  })));
}

var _path$3;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function SvgAngleLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M6.5 1.5L1.653 6.832a.25.25 0 000 .336L6.5 12.5",
    stroke: "evenodd",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  })));
}

var _path$4;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function SvgAngleRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M1.5 1.5l4.847 5.332a.25.25 0 010 .336L1.5 12.5",
    stroke: "evenodd",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  })));
}

var _path$5;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    viewBox: "0 0 14 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "M2.03 5.47A.75.75 0 00.97 6.53l1.06-1.06zM5 9.5l-.53.53a.75.75 0 001.092-.034L5 9.5zm8.062-8.004a.75.75 0 00-1.124-.992l1.124.992zM.97 6.53l3.5 3.5 1.06-1.06-3.5-3.5L.97 6.53zm4.592 3.466l7.5-8.5-1.124-.992-7.5 8.5 1.124.992z",
    fill: "evenodd"
  })));
}

var _rect;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function SvgDash(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    viewBox: "0 0 10 2",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    width: 10,
    height: 2,
    rx: 1,
    fill: "evenodd"
  })));
}

var _rect$1;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function SvgBullet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    viewBox: "0 0 6 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect$1 || (_rect$1 = /*#__PURE__*/React.createElement("rect", {
    width: 6,
    height: 6,
    rx: 3,
    fill: "evenodd"
  })));
}

var _path$6, _path2;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function SvgCalendar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    viewBox: "0 0 12 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 1H2a1 1 0 00-1 1v7a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v7a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H2z",
    fill: "evenodd"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M1 1h10v2H1V1zM2.5 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM2.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM5 4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM5.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM8.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z",
    fill: "evenodd"
  })));
}

var _path$7;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function SvgCaretUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    viewBox: "0 0 10 5",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    d: "M4.558.442a.625.625 0 01.884 0l3.491 3.491A.625.625 0 018.491 5H1.51a.625.625 0 01-.442-1.067L4.558.442z",
    fill: "evenodd"
  })));
}

var _path$8;

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function SvgCaretDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
    viewBox: "0 0 10 5",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    d: "M4.646 4.646a.5.5 0 00.708 0L9.146.854A.5.5 0 008.793 0H1.207a.5.5 0 00-.353.854l3.792 3.792z",
    fill: "evenodd"
  })));
}

var _path$9;

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function SvgCross(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.53 1.53A.75.75 0 108.47.47L5 3.94 1.53.47A.75.75 0 10.47 1.53L3.94 5 .47 8.47a.75.75 0 101.06 1.06L5 6.06l3.47 3.47a.75.75 0 001.06-1.06L6.06 5l3.47-3.47z",
    fill: "evenodd"
  })));
}

var _path$a;

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function SvgArrowLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$a || (_path$a = /*#__PURE__*/React.createElement("path", {
    d: "M11.25 3.25H2.665L4.761 1.3A.75.75 0 103.739.203L.305 3.396a.749.749 0 000 1.207l3.434 3.194a.75.75 0 101.022-1.099L2.665 4.75h8.585a.75.75 0 000-1.5z",
    fill: "evenodd"
  })));
}

var _path$b;

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function SvgArrowRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$d({
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$b || (_path$b = /*#__PURE__*/React.createElement("path", {
    d: "M.75 3.25h8.585L7.239 1.3A.75.75 0 118.261.203l3.434 3.193a.75.75 0 010 1.207L8.261 7.797a.75.75 0 11-1.022-1.099L9.335 4.75H.75a.75.75 0 010-1.5z",
    fill: "evenodd"
  })));
}

var _path$c;

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function SvgArrowUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$e({
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$c || (_path$c = /*#__PURE__*/React.createElement("path", {
    d: "M4.75 11.25V2.665l1.949 2.096a.75.75 0 001.098-1.022L4.604.305a.749.749 0 00-1.208 0L.203 3.739A.75.75 0 101.3 4.761L3.25 2.665v8.585a.75.75 0 001.5 0z",
    fill: "evenodd"
  })));
}

var _path$d;

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function SvgArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$f({
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$d || (_path$d = /*#__PURE__*/React.createElement("path", {
    d: "M3.25.75v8.585L1.301 7.239A.75.75 0 10.203 8.261l3.193 3.434a.75.75 0 001.208 0l3.193-3.434A.75.75 0 006.7 7.239L4.75 9.335V.75a.75.75 0 10-1.5 0z",
    fill: "evenodd"
  })));
}

var _path$e;

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function SvgCaretLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$g({
    viewBox: "0 0 5 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$e || (_path$e = /*#__PURE__*/React.createElement("path", {
    d: "M.442 5.442a.625.625 0 010-.884l3.491-3.491A.625.625 0 015 1.509V8.49a.625.625 0 01-1.067.442L.442 5.442z",
    fill: "evenodd"
  })));
}

var _path$f;

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function SvgCaretRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$h({
    viewBox: "0 0 5 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$f || (_path$f = /*#__PURE__*/React.createElement("path", {
    d: "M4.558 4.558a.625.625 0 010 .884L1.067 8.933A.625.625 0 010 8.491V1.51a.625.625 0 011.067-.442l3.491 3.491z",
    fill: "evenodd"
  })));
}

var _path$g;

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function SvgQuestion(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$i({
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$g || (_path$g = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.396 8.996c-.936 0-1.702.57-1.702 1.498 0 .936.766 1.506 1.702 1.506.919 0 1.685-.57 1.685-1.506 0-.928-.766-1.498-1.685-1.498zM3.864 0C2.409 0 1.328.391.68.953.264 1.311 0 1.78 0 2.273c0 .57.383 1.114 1.14 1.114.417 0 .673-.17 1.005-.417a2.04 2.04 0 011.344-.502c.681 0 1.37.34 1.37 1.047 0 .664-.595 1.021-1.268 1.506-.936.69-1.455 1.294-1.455 2.11 0 .682.417 1.226 1.302 1.226.809 0 1.03-.46 1.413-.97.34-.493.723-.8 1.285-1.166C7.098 5.61 8 5.126 8 3.5 8 1.112 6.366 0 3.864 0z",
    fill: "evenodd"
  })));
}

var _path$h;

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function SvgPaperPlane(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$j({
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$h || (_path$h = /*#__PURE__*/React.createElement("path", {
    d: "M1.07 5.187L13 0l-2.04 12.245a.75.75 0 01-1.345.32L7.31 9.423a.75.75 0 01-.019-.86L13 0 5.293 7.225a.75.75 0 01-.684.183l-3.411-.803c-.703-.166-.79-1.13-.127-1.418z",
    fill: "evenodd"
  })));
}

var _path$i;

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

function SvgBell(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$k({
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$i || (_path$i = /*#__PURE__*/React.createElement("path", {
    d: "M.956 8.402C.7 8.634.5 8.817.5 9c0 1 1 1 1 1h9s1 0 1-1c0-.183-.2-.366-.456-.598C10.603 8 10 7.451 10 6.5V4c0-2-1.826-4-4-4S2 2 2 4v2.5C2 7.451 1.397 8 .956 8.402zM4 10.505V10.5v.01-.005zM6 12.505a2 2 0 01-1.937-1.5h3.874A2 2 0 016 12.504z",
    fill: "evenodd"
  })));
}

var _path$j;

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

function SvgUser(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$l({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$j || (_path$j = /*#__PURE__*/React.createElement("path", {
    d: "M5 5.751c1.657 0 3-1.094 3-2.751C8 1.343 6.657.253 5 .253S2 1.343 2 3C2 4.657 3.343 5.75 5 5.75zM8.23 7.126A2.847 2.847 0 007.363 7c-.123 0-.241.04-.47.16-.14.075-.305.16-.488.255-.157.08-.37.156-.633.225-.256.067-.516.1-.773.1s-.517-.033-.774-.1a3.164 3.164 0 01-.632-.225 70.54 70.54 0 01-.49-.254C2.878 7.04 2.759 7 2.637 7c-.312 0-.603.043-.866.127s-.491.2-.678.343a2.292 2.292 0 00-.472.497c-.13.184-.235.377-.313.573a4.687 4.687 0 00-.283 1.226 6.695 6.695 0 00-.024.57c0 .505.199.914.591 1.216.387.297.9.448 1.523.448h5.772c.623 0 1.135-.15 1.523-.448A1.46 1.46 0 0010 10.337c0-.195-.008-.388-.024-.572a4.706 4.706 0 00-.284-1.225 2.777 2.777 0 00-.313-.573 2.291 2.291 0 00-.472-.497 2.2 2.2 0 00-.678-.344z",
    fill: "evenodd"
  })));
}

var _path$k;

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

function SvgDocument(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$m({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$k || (_path$k = /*#__PURE__*/React.createElement("path", {
    d: "M6 3.5V.23c.463.175.883.446 1.232.795l1.743 1.743c.35.35.62.77.795 1.232H6.5a.5.5 0 01-.5-.5zm4 1.742V9.5A2.503 2.503 0 017.5 12h-5A2.503 2.503 0 010 9.5v-7A2.503 2.503 0 012.5 0h2.258c.081 0 .162.006.242.012V3.5A1.5 1.5 0 006.5 5h3.488c.005.08.012.161.012.242zM6 9.5a.5.5 0 00-.5-.5H3a.5.5 0 100 1h2.5a.5.5 0 00.5-.5zm1.5-2A.5.5 0 007 7H3a.5.5 0 100 1h4a.5.5 0 00.5-.5z",
    fill: "evenodd"
  })));
}

var _path$l;

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

function SvgSim(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$n({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$l || (_path$l = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 9.5A2.5 2.5 0 017.5 12h-5A2.5 2.5 0 010 9.5v-7A2.5 2.5 0 012.5 0h2.464a2.5 2.5 0 011.768.732l2.536 2.536A2.5 2.5 0 0110 5.036V9.5zM6.625 5.125a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-.25a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5h.25zm0 3.5a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5h-.25a.5.5 0 01-.5-.5v-.5a.5.5 0 01.5-.5h.25zm-1.5 1a.5.5 0 01-.5.5h-.25a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5h.25a.5.5 0 01.5.5v1.5zm-.5-3a.5.5 0 00.5-.5v-.5a.5.5 0 00-.5-.5h-.25a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5h.25zm-1.5-1a.5.5 0 00-.5-.5h-.25a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5h.25a.5.5 0 00.5-.5v-1.5zm-.5 3a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5h-.25a.5.5 0 01-.5-.5v-.5a.5.5 0 01.5-.5h.25z",
    fill: "evenodd"
  })));
}

var _path$m;

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

function SvgBox(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$o({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$m || (_path$m = /*#__PURE__*/React.createElement("path", {
    d: "M5 3V0h2v3a1 1 0 01-2 0zm3-.5h4A2.503 2.503 0 009.5 0H8v2.5zM4 0H2.5A2.503 2.503 0 000 2.5h4V0zm8 3.5v6A2.503 2.503 0 019.5 12h-7A2.503 2.503 0 010 9.5v-6h4.071a1.99 1.99 0 003.858 0H12zm-2 6a.5.5 0 00-.5-.5H8a.5.5 0 100 1h1.5a.5.5 0 00.5-.5z",
    fill: "evenodd"
  })));
}

var _path$n, _path2$1;

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

function SvgDuplicate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$p({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$n || (_path$n = /*#__PURE__*/React.createElement("path", {
    d: "M6.5 0v2A1.5 1.5 0 008 3.5h2V7a2.503 2.503 0 01-2.5 2.5H5A2.503 2.503 0 012.5 7V2.5A2.503 2.503 0 015 0h1.5z",
    fill: "evenodd"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M7.5 2a.5.5 0 00.5.5h1.983a1.49 1.49 0 00-.405-.864L8.435.456 8.433.453A1.506 1.506 0 007.5.014V2zM2.526 9.474A3.504 3.504 0 005 10.5h2.5c.1 0 .196-.006.296-.015A2.503 2.503 0 015.5 12h-3A2.503 2.503 0 010 9.5v-5a2.503 2.503 0 011.515-2.296A3.37 3.37 0 001.5 2.5V7c.001.928.37 1.818 1.026 2.474z",
    fill: "evenodd"
  })));
}

var _path$o;

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

function SvgUsers(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$q({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$o || (_path$o = /*#__PURE__*/React.createElement("path", {
    d: "M3.75 6.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM7 12H.5a.5.5 0 01-.5-.5v-.25a3.75 3.75 0 117.5 0v.25a.5.5 0 01-.5.5zm1.75-7.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-.71 1.01a3.412 3.412 0 00-2.335 1.416c1.12.509 2 1.431 2.457 2.574H11.5A.5.5 0 0012 9v-.019a3.502 3.502 0 00-3.96-3.47z",
    fill: "evenodd"
  })));
}

var _path$p;

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

function SvgPencil(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$r({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$p || (_path$p = /*#__PURE__*/React.createElement("path", {
    d: "M11.187.1A1.314 1.314 0 0112 1.317a1.316 1.316 0 01-.386.93l-1.76 1.76-1.86-1.861L9.751.386A1.316 1.316 0 0111.187.1zM0 10.97c0-.533.212-1.043.588-1.42l6.696-6.695 1.86 1.861-6.695 6.696A2.007 2.007 0 011.03 12H0v-1.03z",
    fill: "evenodd"
  })));
}

var _path$q;

function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

function SvgStar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$s({
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$q || (_path$q = /*#__PURE__*/React.createElement("path", {
    d: "M5.352 1.113a.75.75 0 011.296 0L8.097 3.6a.75.75 0 00.489.355l2.813.61a.75.75 0 01.4 1.232L9.882 7.943a.75.75 0 00-.187.576l.29 2.863a.75.75 0 01-1.049.762l-2.634-1.16a.75.75 0 00-.604 0l-2.634 1.16a.75.75 0 01-1.049-.762l.29-2.863a.75.75 0 00-.187-.576L.201 5.797a.75.75 0 01.4-1.233l2.813-.609a.75.75 0 00.49-.355l1.448-2.487z",
    fill: "evenodd"
  })));
}

var _path$r, _path2$2;

function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

function SvgPieces(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$t({
    viewBox: "0 0 12 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$r || (_path$r = /*#__PURE__*/React.createElement("path", {
    d: "M5.352 2.981L3.775.25a.5.5 0 00-.866 0L.066 5.174a.5.5 0 00.433.75H2.13a4.005 4.005 0 013.222-2.943zM11.5.424H7a.5.5 0 00-.5.5v2.035a4.007 4.007 0 013.368 2.966H11.5a.5.5 0 00.5-.5V.923a.5.5 0 00-.5-.5z",
    fill: "evenodd"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "M9 7a3 3 0 11-6.001 0 3 3 0 016 0z",
    fill: "evenodd"
  })));
}

var _path$s;

function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

function SvgChart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$u({
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$s || (_path$s = /*#__PURE__*/React.createElement("path", {
    d: "M4 1a1 1 0 012 0v8a1 1 0 11-2 0V1zM0 6.5a1 1 0 012 0V9a1 1 0 11-2 0V6.5zM9 2.5a1 1 0 00-1 1V9a1 1 0 102 0V3.5a1 1 0 00-1-1z",
    fill: "evenodd"
  })));
}

var _path$t;

function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

function SvgMegaphone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$v({
    viewBox: "0 0 13 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$t || (_path$t = /*#__PURE__*/React.createElement("path", {
    d: "M11.5 8a.5.5 0 01-.223-.053l-1-.5a.5.5 0 11.448-.894l1 .5A.5.5 0 0111.5 8zm-.776-4.55l1-.5a.5.5 0 00-.447-.895l-1 .5a.5.5 0 10.447.895zM12.001 5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1A.5.5 0 0012 5zM9 9.5v-9a.5.5 0 00-1 0c0 1.474-1.292 2-2.5 2H2a2 2 0 00-2 2v1a2 2 0 002 2h3.5c1.208 0 2.5.525 2.5 2a.5.5 0 101 0zm-4.908-1H2a3 3 0 01-.69-.084l1.25 2.791A1.336 1.336 0 003.78 12a1.232 1.232 0 001.12-1.736L4.093 8.5z",
    fill: "evenodd"
  })));
}

var _path$u;

function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

function SvgComment(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$w({
    viewBox: "0 0 13 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$u || (_path$u = /*#__PURE__*/React.createElement("path", {
    d: "M10.832 2.37A5.983 5.983 0 006.22 1.038a6.015 6.015 0 00.774 11.98h3.5A2.509 2.509 0 0013 10.51V6.624a6.039 6.039 0 00-2.168-4.254zM4.98 4.496h2.005a.501.501 0 110 1.003H4.98a.501.501 0 010-1.003zM8.99 9.51H4.98a.501.501 0 010-1.003h4.01a.501.501 0 110 1.003zm0-2.005H4.98a.501.501 0 010-1.003h4.01a.501.501 0 110 1.003z",
    fill: "evenodd"
  })));
}

var _path$v;

function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

function SvgFilter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$x({
    viewBox: "0 0 13 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$v || (_path$v = /*#__PURE__*/React.createElement("path", {
    d: "M8.091 13.003a.545.545 0 01-.327-.11L5.58 11.257a.545.545 0 01-.219-.436V7.848L1.534 3.54A2.128 2.128 0 013.124 0h7.75a2.128 2.128 0 011.59 3.54L8.637 7.849v4.609a.546.546 0 01-.546.546z",
    fill: "evenodd"
  })));
}

var _path$w, _path2$3;

function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

function SvgFilterSettings(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$y({
    viewBox: "0 0 15 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$w || (_path$w = /*#__PURE__*/React.createElement("path", {
    d: "M8.091 13a.546.546 0 01-.327-.11L5.58 11.255a.546.546 0 01-.219-.437v-2.97L1.534 3.54A2.128 2.128 0 013.124 0h7.75A2.128 2.128 0 0113 2.153a4.5 4.5 0 00-4.363 7.573v2.728A.546.546 0 018.09 13z",
    fill: "evenodd"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.622 8.285a.905.905 0 00.9.446.9.9 0 00.334-.114l.134-.077a2.7 2.7 0 00.857.496v.155a.908.908 0 00.903.907.902.902 0 00.903-.907v-.155c.314-.11.604-.28.857-.497l.135.078a.9.9 0 001.234-.332.91.91 0 00-.331-1.239l-.134-.077c.06-.329.06-.665 0-.994l.134-.077a.906.906 0 00.331-1.239.906.906 0 00-.9-.446.901.901 0 00-.334.114l-.134.078a2.702 2.702 0 00-.858-.496v-.155a.908.908 0 00-.903-.906.902.902 0 00-.903.906v.155c-.314.111-.604.28-.857.497l-.135-.078a.9.9 0 00-1.234.332.91.91 0 00.331 1.239l.134.077c-.06.329-.06.665 0 .994l-.134.077a.908.908 0 00-.33 1.238zm3.128-3.02a1.201 1.201 0 011.112.745 1.211 1.211 0 01-.877 1.648 1.2 1.2 0 01-1.236-.514 1.211 1.211 0 01.15-1.526c.225-.226.532-.354.851-.354z",
    fill: "evenodd"
  })));
}

var _path$x;

function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

function SvgVerticalArrows(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$z({
    viewBox: "0 0 6 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$x || (_path$x = /*#__PURE__*/React.createElement("path", {
    d: "M2.995 0a.63.63 0 01.094.007.499.499 0 01.364.146l1.995 1.994a.5.5 0 01-.708.707l-1.12-1.12v8.539l1.12-1.12a.5.5 0 11.708.707l-1.995 1.994a.5.5 0 01-.402.144.638.638 0 01-.096 0 .499.499 0 01-.389-.144L.572 9.86a.5.5 0 11.707-.708l1.091 1.09V1.765l-1.09 1.09a.5.5 0 01-.708-.707L2.566.153A.498.498 0 012.9.007.63.63 0 012.995 0z",
    fill: "evenodd"
  })));
}

var _path$y;

function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

function SvgSortAsc(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$A({
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$y || (_path$y = /*#__PURE__*/React.createElement("path", {
    d: "M0 .75A.75.75 0 01.75 0h2a.75.75 0 010 1.5h-2A.75.75 0 010 .75zM0 5a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5H.75A.75.75 0 010 5zM.75 8.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5H.75z",
    fill: "evenodd"
  })));
}

var _path$z;

function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

function SvgSortDesc(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$B({
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$z || (_path$z = /*#__PURE__*/React.createElement("path", {
    d: "M0 9.25c0 .414.336.75.75.75h2a.75.75 0 000-1.5h-2a.75.75 0 00-.75.75zM0 5c0 .414.336.75.75.75h5.5a.75.75 0 000-1.5H.75A.75.75 0 000 5zM.75 1.5a.75.75 0 010-1.5h8.5a.75.75 0 010 1.5H.75z",
    fill: "evenodd"
  })));
}

var _path$A;

function _extends$C() { _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }

function SvgLeftStop(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$C({
    viewBox: "0 0 13 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$A || (_path$A = /*#__PURE__*/React.createElement("path", {
    d: "M0 .75a.75.75 0 011.5 0V5c0-.248.12-.467.305-.604l3.434-3.193A.75.75 0 016.261 2.3L4.165 4.25h7.585a.75.75 0 010 1.5H4.165l2.096 1.948a.75.75 0 01-1.022 1.099L1.805 5.603A.749.749 0 011.5 5v4.25a.75.75 0 01-1.5 0V.75z",
    fill: "evenodd"
  })));
}

var _path$B;

function _extends$D() { _extends$D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }

function SvgRightStop(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$D({
    viewBox: "0 0 13 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$B || (_path$B = /*#__PURE__*/React.createElement("path", {
    d: "M13 .75a.75.75 0 00-1.5 0V5a.75.75 0 00-.305-.604L7.761 1.203A.75.75 0 006.739 2.3L8.835 4.25H1.25a.75.75 0 100 1.5h7.585L6.739 7.698a.75.75 0 001.022 1.099l3.434-3.194A.75.75 0 0011.5 5v4.25a.75.75 0 001.5 0V.75z",
    fill: "evenodd"
  })));
}

var _path$C;

function _extends$E() { _extends$E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }

function SvgUserCapture(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$E({
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$C || (_path$C = /*#__PURE__*/React.createElement("path", {
    d: "M2.579 0h.982a.614.614 0 110 1.228H2.58a1.35 1.35 0 00-1.35 1.35v.983a.614.614 0 11-1.229 0V2.58A2.582 2.582 0 012.579 0zM10.004.18A.614.614 0 0110.44 0h.982A2.582 2.582 0 0114 2.579v.982a.614.614 0 01-1.228 0V2.58a1.351 1.351 0 00-1.35-1.35h-.983a.614.614 0 01-.435-1.05zM.18 10.004a.614.614 0 011.048.435v.982a1.351 1.351 0 001.35 1.35h.983a.614.614 0 110 1.229H2.58A2.582 2.582 0 010 11.421v-.982c0-.163.065-.32.18-.435zM12.952 10.004A.614.614 0 0114 10.44v.982A2.583 2.583 0 0111.421 14h-.982a.614.614 0 010-1.228h.982a1.351 1.351 0 001.35-1.35v-.983c0-.163.066-.32.18-.435zM7 6.5a2 2 0 100-4 2 2 0 000 4zM6.5 7.5a3.003 3.003 0 00-3 3 .5.5 0 00.5.5h6a.5.5 0 00.5-.5 3.003 3.003 0 00-3-3h-1z",
    fill: "evenodd"
  })));
}

var _path$D, _path2$4;

function _extends$F() { _extends$F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }

function SvgDocumentCapture(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$F({
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$D || (_path$D = /*#__PURE__*/React.createElement("path", {
    d: "M2.579 0h.982a.614.614 0 110 1.228H2.58a1.35 1.35 0 00-1.35 1.35v.983a.614.614 0 11-1.229 0V2.58A2.582 2.582 0 012.579 0zM10.004.18A.614.614 0 0110.44 0h.982A2.582 2.582 0 0114 2.579v.982a.614.614 0 01-1.228 0V2.58a1.351 1.351 0 00-1.35-1.35h-.983a.614.614 0 01-.435-1.05zM.614 9.825a.614.614 0 00-.614.614v.982A2.582 2.582 0 002.579 14h.982a.614.614 0 000-1.228H2.58a1.351 1.351 0 01-1.35-1.35v-.983a.614.614 0 00-.615-.614zM12.952 10.004A.614.614 0 0114 10.44v.982A2.583 2.583 0 0111.421 14h-.982a.614.614 0 010-1.228h.982a1.351 1.351 0 001.35-1.35v-.983c0-.163.066-.32.18-.435z",
    fill: "evenodd"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.917 3A2.086 2.086 0 0112 5.083v3.834A2.086 2.086 0 019.917 11H4.083A2.086 2.086 0 012 8.917V5.083A2.086 2.086 0 014.083 3h5.834zM4.25 4.5a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM8 4.5a.5.5 0 000 1h2a.5.5 0 000-1H8zM7.5 7a.5.5 0 01.5-.5h2a.5.5 0 010 1H8a.5.5 0 01-.5-.5z",
    fill: "evenodd"
  })));
}

var _path$E, _path2$5;

function _extends$G() { _extends$G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }

function SvgE(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$G({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$E || (_path$E = /*#__PURE__*/React.createElement("path", {
    d: "M7.234 5.272H4.728c.075-.448.233-.78.476-.994a1.3 1.3 0 01.868-.322c.42 0 .719.122.896.364.177.243.266.56.266.952z",
    fill: "evenodd"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.5 0A2.5 2.5 0 000 2.5v7A2.5 2.5 0 002.5 12h7A2.5 2.5 0 0012 9.5v-7A2.5 2.5 0 009.5 0h-7zm2.382 9.43c.43.159.891.238 1.386.238.42 0 .845-.07 1.274-.21.439-.14.835-.331 1.19-.574l-.686-1.246c-.504.308-1.003.462-1.498.462-.467 0-.863-.116-1.19-.35-.317-.242-.523-.616-.616-1.12H8.9a4.824 4.824 0 00.084-.91c0-.476-.06-.914-.182-1.316a2.902 2.902 0 00-.56-1.064 2.48 2.48 0 00-.924-.7c-.364-.168-.793-.252-1.288-.252-.42 0-.826.084-1.218.252-.392.168-.742.41-1.05.728-.299.308-.541.69-.728 1.148-.187.448-.28.952-.28 1.512 0 .579.089 1.092.266 1.54.177.448.425.83.742 1.148.317.308.69.546 1.12.714z",
    fill: "evenodd"
  })));
}

var _path$F;

function _extends$H() { _extends$H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }

function SvgDots(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$H({
    viewBox: "0 0 10 2",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$F || (_path$F = /*#__PURE__*/React.createElement("path", {
    d: "M2 1a1 1 0 11-2 0 1 1 0 012 0zM4 1a1 1 0 102 0 1 1 0 00-2 0zM9 2a1 1 0 110-2 1 1 0 010 2z",
    fill: "evenodd"
  })));
}

var _path$G;

function _extends$I() { _extends$I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }

function SvgInfo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$I({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$G || (_path$G = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6A6 6 0 110 6a6 6 0 0112 0zm-7 .25h.25V9h-.5a.5.5 0 000 1h2.5a.5.5 0 000-1h-.5V5.963c0-.394-.336-.713-.75-.713H5a.5.5 0 000 1zm.875-2a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z",
    fill: "evenodd"
  })));
}

var _path$H;

function _extends$J() { _extends$J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }

function SvgCog(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$J({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$H || (_path$H = /*#__PURE__*/React.createElement("path", {
    d: "M.802 9a1.5 1.5 0 002.05.55l.222-.129c.42.36.903.639 1.424.822v.257a1.5 1.5 0 003 0v-.257a4.489 4.489 0 001.424-.822l.224.129a1.501 1.501 0 001.5-2.6l-.222-.128c.1-.544.1-1.102 0-1.646l.222-.128a1.5 1.5 0 00-.361-2.75 1.501 1.501 0 00-1.14.15l-.222.129a4.488 4.488 0 00-1.425-.82V1.5a1.5 1.5 0 10-3 0v.256a4.489 4.489 0 00-1.424.823l-.223-.129a1.5 1.5 0 00-1.5 2.6l.222.128a4.55 4.55 0 000 1.645l-.222.128A1.503 1.503 0 00.8 9zm5.196-5a2 2 0 110 4 2 2 0 010-4z",
    fill: "evenodd"
  })));
}

var _path$I;

function _extends$K() { _extends$K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }

function SvgGift(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$K({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$I || (_path$I = /*#__PURE__*/React.createElement("path", {
    d: "M2 1.5C2 .675 2.825 0 3.833 0 4.783 0 5.596.448 6 1.095 6.404.448 7.217 0 8.167 0 9.175 0 10 .675 10 1.5c0 .385-.183.735-.477 1H2.477C2.183 2.235 2 1.885 2 1.5zM0 5a1.5 1.5 0 011.5-1.5H4v3H1.5A1.5 1.5 0 010 5zM.5 7.5H4V12H2.75A2.25 2.25 0 01.5 9.75V7.5zM11.5 7.5H8V12h1.25a2.25 2.25 0 002.25-2.25V7.5zM8 3.5h2.5a1.5 1.5 0 010 3H8v-3zM7 3.5H5v3h2v-3zM5 7.5h2V12H5V7.5z",
    fill: "evenodd"
  })));
}

var _path$J, _path2$6;

function _extends$L() { _extends$L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }

function SvgTrash(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$L({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$J || (_path$J = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.75 2a.75.75 0 000 1.5h.75v6A2.5 2.5 0 004 12h4a2.5 2.5 0 002.5-2.5v-6h.75a.75.75 0 000-1.5H.75zm4 3a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm2.5 0a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5z",
    fill: "evenodd"
  })), _path2$6 || (_path2$6 = /*#__PURE__*/React.createElement("path", {
    d: "M3.309 1.382C3.732.535 4 0 5.545 0h.91C8 0 8.268.535 8.69 1.382L9 2H3l.309-.618z",
    fill: "evenodd"
  })));
}

var _path$K, _path2$7;

function _extends$M() { _extends$M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$M.apply(this, arguments); }

function SvgMoveIn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$M({
    viewBox: "0 0 12 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$K || (_path$K = /*#__PURE__*/React.createElement("path", {
    d: "M5.017 9.591a5 5 0 100-9.182L8.255 3.49C8.707 3.832 9 4.38 9 5s-.293 1.168-.745 1.51L5.017 9.59z",
    fill: "evenodd"
  })), _path2$7 || (_path2$7 = /*#__PURE__*/React.createElement("path", {
    d: "M.75 4.25h4.085L3.539 3.06A.75.75 0 014.56 1.962l2.635 2.434a.749.749 0 010 1.207L4.6 8.04A.75.75 0 113.577 6.94l1.258-1.19H.75a.75.75 0 010-1.5z",
    fill: "evenodd"
  })));
}

var _path$L, _path2$8;

function _extends$N() { _extends$N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$N.apply(this, arguments); }

function SvgSignOut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$N({
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$L || (_path$L = /*#__PURE__*/React.createElement("path", {
    d: "M2.5 0A2.5 2.5 0 000 2.5v7A2.5 2.5 0 002.5 12h3A2.5 2.5 0 008 9.5V8.25H5.75a2.25 2.25 0 010-4.5H8V2.5A2.5 2.5 0 005.5 0h-3z",
    fill: "evenodd"
  })), _path2$8 || (_path2$8 = /*#__PURE__*/React.createElement("path", {
    d: "M5.75 5.25h5.585l-1.296-1.19a.75.75 0 111.021-1.099l2.635 2.435a.75.75 0 010 1.207L11.098 9.04a.75.75 0 11-1.02-1.099l1.257-1.19H5.75a.75.75 0 110-1.5z",
    fill: "evenodd"
  })));
}

var _path$M;

function _extends$O() { _extends$O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$O.apply(this, arguments); }

function SvgPlus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$O({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$M || (_path$M = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.75.75a.75.75 0 00-1.5 0v4.5H.75a.75.75 0 100 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5V.75z",
    fill: "evenodd"
  })));
}

var _path$N;

function _extends$P() { _extends$P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$P.apply(this, arguments); }

function SvgCart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$P({
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$N || (_path$N = /*#__PURE__*/React.createElement("path", {
    d: "M11.642 2.552A1.534 1.534 0 0010.462 2H2.174l-.021-.642A1.538 1.538 0 00.626 0H.513A.513.513 0 00.15.875C.246.971.377 1 .513 1h.113a.54.54 0 01.34.155.513.513 0 01.17.323l.705 5.808c.073.624.373 1.2.842 1.616.469.418.817.623 1.817.623h4.987a.513.513 0 00.363-.15.456.456 0 00.15-.337.513.513 0 00-.513-.513H4.5c-.317 0-.792-.034-1-.283a1.538 1.538 0 01-.56-.742h6.11c.601 0 1.183-.211 1.644-.596.461-.386.772-.813.879-1.404l.402-1.69a1.535 1.535 0 00-.333-1.258zM3.708 12.05a1.025 1.025 0 100-2.05 1.025 1.025 0 000 2.05zM8.732 12.05a1.025 1.025 0 100-2.05 1.025 1.025 0 000 2.05z",
    fill: "evenodd"
  })));
}

var _path$O, _path2$9, _path3, _path4, _path5, _path6, _path7;

function _extends$Q() { _extends$Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Q.apply(this, arguments); }

function SvgQrCode(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Q({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$O || (_path$O = /*#__PURE__*/React.createElement("path", {
    d: "M1.75 2.5a.75.75 0 01.75-.75h1a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25H2a.25.25 0 01-.25-.25v-1z",
    fill: "evenodd"
  })), _path2$9 || (_path2$9 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.5 0A2.5 2.5 0 000 2.5v1.75C0 4.94.56 5.5 1.25 5.5h3c.69 0 1.25-.56 1.25-1.25v-3C5.5.56 4.94 0 4.25 0H2.5zM1 2.5A1.5 1.5 0 012.5 1H4a.5.5 0 01.5.5V4a.5.5 0 01-.5.5H1.5A.5.5 0 011 4V2.5z",
    fill: "evenodd"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M1.75 8.5A.25.25 0 012 8.25h1.5a.25.25 0 01.25.25V10a.25.25 0 01-.25.25h-.75a1 1 0 01-1-1V8.5z",
    fill: "evenodd"
  })), _path4 || (_path4 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.25 6.5C.56 6.5 0 7.06 0 7.75V9.5A2.5 2.5 0 002.5 12h1.75c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-3zM1 8a.5.5 0 01.5-.5H4a.5.5 0 01.5.5v2.5a.5.5 0 01-.5.5H2.5A1.5 1.5 0 011 9.5V8z",
    fill: "evenodd"
  })), _path5 || (_path5 = /*#__PURE__*/React.createElement("path", {
    d: "M8.25 2a.25.25 0 01.25-.25h.75a1 1 0 011 1v.75a.25.25 0 01-.25.25H8.5a.25.25 0 01-.25-.25V2z",
    fill: "evenodd"
  })), _path6 || (_path6 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.75 0C7.06 0 6.5.56 6.5 1.25v3c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25V2.5A2.5 2.5 0 009.5 0H7.75zM7.5 1.5A.5.5 0 018 1h1.5A1.5 1.5 0 0111 2.5V4a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5V1.5z",
    fill: "evenodd"
  })), _path7 || (_path7 = /*#__PURE__*/React.createElement("path", {
    d: "M6.5 7a.5.5 0 01.5-.5h.5A.5.5 0 018 7v.5a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V7zM6.5 11a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V11zM10.5 7a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5H11a.5.5 0 01-.5-.5V7zM10.5 11a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5H11a.5.5 0 01-.5-.5V11zM8.5 9a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5V9z",
    fill: "evenodd"
  })));
}

var _path$P;

function _extends$R() { _extends$R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$R.apply(this, arguments); }

function SvgPlusSquare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$R({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$P || (_path$P = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 5C0 2.643 0 1.464.732.732 1.464 0 2.643 0 5 0h2c2.357 0 3.536 0 4.268.732C12 1.464 12 2.643 12 5v2c0 2.357 0 3.536-.732 4.268C10.536 12 9.357 12 7 12H5c-2.357 0-3.536 0-4.268-.732C0 10.536 0 9.357 0 7V5zm6-2.5a.625.625 0 00-.625.625v2.25h-2.25a.625.625 0 100 1.25h2.25v2.25a.625.625 0 101.25 0v-2.25h2.25a.625.625 0 100-1.25h-2.25v-2.25A.625.625 0 006 2.5z",
    fill: "evenodd"
  })));
}

var _path$Q;

function _extends$S() { _extends$S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$S.apply(this, arguments); }

function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$S({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Q || (_path$Q = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.965 9.026a5 5 0 111.06-1.06l2.687 2.686a.75.75 0 01-1.06 1.06L7.965 9.026zM8.5 5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z",
    fill: "evenodd"
  })));
}

var _path$R;

function _extends$T() { _extends$T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$T.apply(this, arguments); }

function SvgComputer(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$T({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$R || (_path$R = /*#__PURE__*/React.createElement("path", {
    d: "M2.5.5h7A2.503 2.503 0 0112 3v3.5H0V3A2.503 2.503 0 012.5.5zM5.5 9.5h-3a2.504 2.504 0 01-2.45-2h11.9a2.505 2.505 0 01-2.45 2h-3v1h2a.5.5 0 110 1h-5a.5.5 0 010-1h2v-1z",
    fill: "evenodd"
  })));
}

var _path$S, _path2$a;

function _extends$U() { _extends$U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$U.apply(this, arguments); }

function SvgRefresh(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$U({
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$S || (_path$S = /*#__PURE__*/React.createElement("path", {
    d: "M11.31 1.148a.5.5 0 01.854.354V3.5a1 1 0 01-1 1h-2a.5.5 0 110-1h1.373a4.991 4.991 0 00-8.541 3.06.49.49 0 01-.494.439.503.503 0 01-.5-.55 5.987 5.987 0 0110.162-3.73V1.502a.5.5 0 01.146-.354zM12.166 7.124a.504.504 0 01.832.426 5.986 5.986 0 01-10.162 3.73v1.218a.5.5 0 01-1 0v-2a1 1 0 011-.999h2a.5.5 0 110 1H3.462a4.991 4.991 0 008.541-3.06.49.49 0 01.162-.315z",
    fill: "evenodd"
  })), _path2$a || (_path2$a = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.859 1.25a6.111 6.111 0 016.18 1.182v-.93a.625.625 0 011.25 0V3.5a1.125 1.125 0 01-1.125 1.125h-2a.625.625 0 110-1.25h1.062A4.866 4.866 0 002.12 6.572v.002a.616.616 0 01-.62.55L1.502 7v.125a.628.628 0 01-.624-.686 6.112 6.112 0 013.98-5.19zm3.344.007a5.861 5.861 0 00-7.076 5.204.38.38 0 00.375.414h.001a.366.366 0 00.368-.326 5.116 5.116 0 018.755-3.135l.208.212h-1.67a.375.375 0 000 .75h2a.875.875 0 00.875-.875v-2a.375.375 0 00-.75 0V3.02l-.213-.21a5.861 5.861 0 00-2.873-1.552zm3.88 5.773a.616.616 0 01.417-.155L12.498 7v-.125h.002a.628.628 0 01.623.686A6.111 6.111 0 012.96 11.568v-.288h-.125l-.088.089c.07.068.14.135.213.2v.93a.625.625 0 01-1.25 0v-2a1.125 1.125 0 011.125-1.125h2a.625.625 0 110 1.25H3.773a4.834 4.834 0 01-.221-.213l-.09.088v.125h.31a4.867 4.867 0 008.107-3.196v-.002a.616.616 0 01.203-.396zm.414.095a.366.366 0 00-.368.326 5.117 5.117 0 01-8.755 3.135l-.208-.212h1.67a.375.375 0 000-.75h-2a.875.875 0 00-.875.875v2a.375.375 0 00.75 0V10.98l.213.21a5.861 5.861 0 009.95-3.652.378.378 0 00-.376-.414h-.001z",
    fill: "evenodd"
  })));
}

var _path$T, _path2$b;

function _extends$V() { _extends$V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$V.apply(this, arguments); }

function SvgSliders(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$V({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$T || (_path$T = /*#__PURE__*/React.createElement("path", {
    d: "M0 1.625C0 1.28.28 1 .625 1h10.75a.625.625 0 110 1.25H.625A.625.625 0 010 1.625zM0 5.995c0-.345.28-.625.625-.625h10.75a.625.625 0 110 1.25H.625A.625.625 0 010 5.995zM0 10.375c0-.345.28-.625.625-.625h10.75a.625.625 0 110 1.25H.625A.625.625 0 010 10.375z",
    fill: "evenodd"
  })), _path2$b || (_path2$b = /*#__PURE__*/React.createElement("path", {
    d: "M5 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    fill: "evenodd"
  })));
}

var _path$U, _path2$c;

function _extends$W() { _extends$W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$W.apply(this, arguments); }

function SvgInfinity(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$W({
    viewBox: "0 0 14 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$U || (_path$U = /*#__PURE__*/React.createElement("path", {
    d: "M10 1C8.514 1 7.529 2.114 7 2.941 6.471 2.114 5.486 1 4 1a3 3 0 100 6c1.486 0 2.471-1.114 3-1.941C7.529 5.886 8.514 7 10 7a3 3 0 000-6zM4 6a2 2 0 110-4c1.346 0 2.191 1.473 2.45 2-.257.53-1.096 2-2.45 2zm6 0C8.653 6 7.809 4.527 7.55 4c.258-.529 1.096-2 2.45-2a2 2 0 010 4z",
    fill: "evenodd"
  })), _path2$c || (_path2$c = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.79 1.79A3.125 3.125 0 014 .875c1.457 0 2.443 1.023 3 1.84.557-.817 1.543-1.84 3-1.84a3.125 3.125 0 110 6.25c-1.457 0-2.443-1.023-3-1.84-.557.817-1.543 1.84-3 1.84A3.125 3.125 0 011.79 1.79zM4 1.125a2.875 2.875 0 100 5.75c1.418 0 2.371-1.064 2.895-1.883L7 4.827l.105.165C7.63 5.81 8.582 6.875 10 6.875a2.875 2.875 0 100-5.75c-1.418 0-2.371 1.064-2.895 1.883L7 3.173l-.105-.165C6.37 2.19 5.418 1.125 4 1.125zm0 1a1.875 1.875 0 000 3.75c.629 0 1.146-.341 1.546-.762A4.78 4.78 0 006.31 4a4.851 4.851 0 00-.768-1.112c-.4-.422-.917-.763-1.542-.763zm-1.503.372A2.125 2.125 0 014 1.875c.722 0 1.3.395 1.723.841.425.447.707.96.84 1.229L6.588 4l-.027.055c-.13.27-.411.783-.835 1.23-.423.446-1.002.84-1.727.84a2.125 2.125 0 01-1.503-3.628zM7.69 4c.136.268.395.719.768 1.112.4.422.917.763 1.542.763a1.875 1.875 0 100-3.75c-.628 0-1.146.341-1.545.763-.372.392-.63.843-.765 1.112zm.583-1.284c.423-.447 1.002-.841 1.727-.841a2.125 2.125 0 110 4.25c-.722 0-1.3-.395-1.723-.841a5.136 5.136 0 01-.84-1.229L7.412 4l.027-.055c.131-.27.412-.782.835-1.23z",
    fill: "evenodd"
  })));
}

var _path$V;

function _extends$X() { _extends$X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$X.apply(this, arguments); }

function SvgGrid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$X({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$V || (_path$V = /*#__PURE__*/React.createElement("path", {
    d: "M2 0h1.5a2 2 0 012 2v1.5a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM8.5 0H10a2 2 0 012 2v1.5a2 2 0 01-2 2H8.5a2 2 0 01-2-2V2a2 2 0 012-2zM3.5 6.5H2a2 2 0 00-2 2V10a2 2 0 002 2h1.5a2 2 0 002-2V8.5a2 2 0 00-2-2zM8.5 6.5H10a2 2 0 012 2V10a2 2 0 01-2 2H8.5a2 2 0 01-2-2V8.5a2 2 0 012-2z",
    fill: "evenodd"
  })));
}

var _path$W;

function _extends$Y() { _extends$Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Y.apply(this, arguments); }

function SvgBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Y({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$W || (_path$W = /*#__PURE__*/React.createElement("path", {
    d: "M9.5 8.5a3.5 3.5 0 00-2.023-3.168A3.493 3.493 0 004.5 0H1a1 1 0 00-1 1v10a1 1 0 001 1h5a3.504 3.504 0 003.5-3.5zM2 2h2.5a1.5 1.5 0 110 3H2V2zm4 8H2V7h4a1.5 1.5 0 010 3z",
    fill: "evenodd"
  })));
}

var _path$X;

function _extends$Z() { _extends$Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Z.apply(this, arguments); }

function SvgItalic(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Z({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$X || (_path$X = /*#__PURE__*/React.createElement("path", {
    d: "M9 0H2.5a.5.5 0 100 1h2.677L3.814 11H1a.5.5 0 000 1h6.5a.5.5 0 000-1H4.823L6.186 1H9a.5.5 0 100-1z",
    fill: "evenodd"
  })));
}

var _path$Y;

function _extends$_() { _extends$_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$_.apply(this, arguments); }

function SvgHeader(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$_({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Y || (_path$Y = /*#__PURE__*/React.createElement("path", {
    d: "M10 11.79c0 .093-.023.152-.07.175a.25.25 0 01-.14.035H6.14a.35.35 0 01-.158-.035c-.035-.023-.052-.082-.052-.175v-.718c0-.059.012-.106.035-.14.023-.047.082-.07.175-.07h1.106V6.376H2.754v4.484H3.86c.093 0 .152.024.175.07a.249.249 0 01.035.14v.719c0 .093-.023.152-.07.175a.25.25 0 01-.14.035H.21a.35.35 0 01-.157-.035C.018 11.942 0 11.883 0 11.79v-.718c0-.094.018-.152.053-.176a.348.348 0 01.158-.035h1.105V1.14H.21c-.094 0-.153-.018-.176-.053A.347.347 0 010 .928V.21C0 .152.012.105.035.07.058.023.117 0 .211 0H3.86c.093 0 .152.023.175.07a.249.249 0 01.035.14v.718a.347.347 0 01-.035.158c-.023.035-.082.053-.175.053H2.754V5.15h4.492V1.14H6.14c-.093 0-.152-.018-.175-.053A.347.347 0 015.93.928V.21c0-.058.012-.105.035-.14.023-.047.082-.07.175-.07h3.65a.25.25 0 01.14.035c.047.023.07.082.07.175v.718c0 .094-.023.152-.07.176a.25.25 0 01-.14.035H8.683v9.722H9.79a.25.25 0 01.14.035c.048.024.071.082.071.175v.719z",
    fill: "evenodd"
  })));
}

var _path$Z;

function _extends$$() { _extends$$ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$$.apply(this, arguments); }

function SvgUnorderedList(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$$({
    viewBox: "0 0 12 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Z || (_path$Z = /*#__PURE__*/React.createElement("path", {
    d: "M2 1.5a1 1 0 11-2 0 1 1 0 012 0zM11.5 2h-8a.5.5 0 110-1h8a.5.5 0 010 1zM3.5 4.5h8a.5.5 0 010 1h-8a.5.5 0 110-1zM11.5 8h-8a.5.5 0 100 1h8a.5.5 0 000-1zM1 6a1 1 0 100-2 1 1 0 000 2zM2 8.5a1 1 0 11-2 0 1 1 0 012 0z",
    fill: "evenodd"
  })));
}

var _path$_, _path2$d;

function _extends$10() { _extends$10 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$10.apply(this, arguments); }

function SvgLink(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$10({
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$_ || (_path$_ = /*#__PURE__*/React.createElement("path", {
    d: "M11.973 1.03A3.49 3.49 0 009.488-.001a3.492 3.492 0 00-2.485 1.029L5.37 2.66a.5.5 0 00.707.707L7.71 1.736A2.497 2.497 0 019.487.999a2.515 2.515 0 011.777 4.293L9.633 6.923a.5.5 0 10.708.708l1.63-1.63a3.52 3.52 0 00.002-4.971zM7.922 8.635l-1.631 1.631a2.515 2.515 0 01-3.556-3.555l1.63-1.633a.5.5 0 10-.707-.707l-1.63 1.633A3.515 3.515 0 007 10.974L8.63 9.341a.5.5 0 00-.707-.707h-.002z",
    fill: "evenodd"
  })), _path2$d || (_path2$d = /*#__PURE__*/React.createElement("path", {
    d: "M5.146 7.147l3-3a.5.5 0 01.708.707l-3.001 3a.5.5 0 11-.707-.707z",
    fill: "evenodd"
  })));
}

var _path$$, _path2$e;

function _extends$11() { _extends$11 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$11.apply(this, arguments); }

function SvgEye(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$11({
    viewBox: "0 0 12 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$$ || (_path$$ = /*#__PURE__*/React.createElement("path", {
    d: "M8 5c0 1.064-.896 1.926-2 1.926S4 6.064 4 5s.896-1.926 2-1.926S8 3.936 8 5z",
    fill: "evenodd"
  })), _path2$e || (_path2$e = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 .5c3.095 0 4.858 2.04 5.633 3.257A2.3 2.3 0 0112 5a2.3 2.3 0 01-.367 1.243C10.858 7.459 9.095 9.5 6 9.5S1.142 7.46.367 6.243A2.3 2.3 0 010 5c0-.439.127-.87.367-1.243C1.142 2.541 2.905.5 6 .5zM4.334 7.402A3.08 3.08 0 006 7.89a3.06 3.06 0 002.12-.847A2.84 2.84 0 008.999 5c0-.571-.176-1.13-.506-1.605A2.978 2.978 0 007.148 2.33a3.105 3.105 0 00-1.733-.165 3.036 3.036 0 00-1.536.791c-.419.404-.705.919-.82 1.48a2.791 2.791 0 00.17 1.669c.227.528.612.979 1.105 1.296z",
    fill: "evenodd"
  })));
}

var _path$10;

function _extends$12() { _extends$12 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$12.apply(this, arguments); }

function SvgEyeCrossed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$12({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$10 || (_path$10 = /*#__PURE__*/React.createElement("path", {
    d: "M11.633 4.719A7.933 7.933 0 009.95 2.764l1.399-1.4a.5.5 0 00-.707-.708L9.12 2.181A6.022 6.022 0 006 1.336c-3.094 0-4.858 2.12-5.633 3.383a2.456 2.456 0 000 2.581c.45.74 1.02 1.4 1.684 1.955l-1.399 1.4a.501.501 0 00.544.82.5.5 0 00.163-.112l1.525-1.526c.942.56 2.02.853 3.116.846 3.094 0 4.858-2.12 5.633-3.383a2.455 2.455 0 000-2.581zm-8.632 1.29a2.997 2.997 0 013.21-2.993c.548.04 1.076.23 1.524.55l-.726.727a1.972 1.972 0 00-2.423.302 1.975 1.975 0 00-.302 2.424l-.726.726a2.983 2.983 0 01-.557-1.736zM6 9.01a2.978 2.978 0 01-1.735-.557l.726-.727a1.972 1.972 0 002.423-.302A1.975 1.975 0 007.716 5l.726-.726A2.997 2.997 0 016 9.01z",
    fill: "evenodd"
  })));
}

var _path$11;

function _extends$13() { _extends$13 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$13.apply(this, arguments); }

function SvgSplit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$13({
    viewBox: "0 0 12 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$11 || (_path$11 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 7.5v-5A2.5 2.5 0 012.5 0h3v10h-3A2.5 2.5 0 010 7.5zM10.457 9.81A2.5 2.5 0 019.5 10h-3V0h3A2.5 2.5 0 0112 2.5v5a2.5 2.5 0 01-1.543 2.31z",
    fill: "evenodd"
  })));
}

var _path$12;

function _extends$14() { _extends$14 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$14.apply(this, arguments); }

function SvgExpand(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$14({
    viewBox: "0 0 13 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$12 || (_path$12 = /*#__PURE__*/React.createElement("path", {
    d: "M8.904 0h2.381a.718.718 0 01.718.718v2.38a.5.5 0 01-.853.355l-.946-.947L7.359 5.35a.5.5 0 11-.706-.706l2.844-2.845L8.55.853A.5.5 0 018.904 0zM3.099 11.997H.718A.718.718 0 010 11.279v-2.38a.5.5 0 01.853-.355l.946.946 2.845-2.844a.5.5 0 01.706.707l-2.844 2.845.946.946a.5.5 0 01-.353.853z",
    fill: "evenodd"
  })));
}

var _path$13;

function _extends$15() { _extends$15 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$15.apply(this, arguments); }

function SvgCollapse(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$15({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$13 || (_path$13 = /*#__PURE__*/React.createElement("path", {
    d: "M9.602 5.497h-2.38a.718.718 0 01-.718-.718v-2.38a.5.5 0 01.853-.355l.946.946L11.147.146a.5.5 0 01.707.707L9.01 3.698l.946.946a.5.5 0 01-.354.853zM2.404 6.497h2.381a.718.718 0 01.718.718v2.38a.5.5 0 01-.853.355l-.946-.947-2.845 2.844a.499.499 0 11-.706-.706l2.844-2.845-.946-.946a.5.5 0 01.353-.853z",
    fill: "evenodd"
  })));
}

var _path$14;

function _extends$16() { _extends$16 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$16.apply(this, arguments); }

function SvgCatalog(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$16({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$14 || (_path$14 = /*#__PURE__*/React.createElement("path", {
    d: "M11.375 2.5h-6.75a.625.625 0 010-1.25h6.75a.625.625 0 110 1.25zM4.625 5.25h6.75a.625.625 0 110 1.25h-6.75a.625.625 0 010-1.25zM8.375 9.25h-3.75a.625.625 0 000 1.25h3.75a.625.625 0 100-1.25zM2.5 2A1.25 1.25 0 110 2a1.25 1.25 0 012.5 0zM1.25 7.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM2.5 10A1.25 1.25 0 110 10a1.25 1.25 0 012.5 0z",
    fill: "evenodd"
  })));
}

var _path$15;

function _extends$17() { _extends$17 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$17.apply(this, arguments); }

function SvgBagCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$17({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$15 || (_path$15 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.56 3.44A1.5 1.5 0 0112 4.5v5A2.503 2.503 0 019.5 12h-7A2.503 2.503 0 010 9.5v-5A1.5 1.5 0 011.5 3H3a3 3 0 116 0h1.5a1.5 1.5 0 011.06.44zM4.587 1.585A2 2 0 004 3h4a2 2 0 00-3.414-1.414zm.513 7.106a.936.936 0 01-.306-.219l-.658-.705a.5.5 0 11.731-.683l.617.662L7.577 5.65a.502.502 0 01.709.71L6.15 8.498a.936.936 0 01-.668.276h-.016a.936.936 0 01-.367-.081z",
    fill: "evenodd"
  })));
}

var _path$16, _path2$f;

function _extends$18() { _extends$18 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$18.apply(this, arguments); }

function SvgArchive(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$18({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$16 || (_path$16 = /*#__PURE__*/React.createElement("path", {
    d: "M2 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM3 .5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5A.5.5 0 013 .5z",
    fill: "evenodd"
  })), _path2$f || (_path2$f = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.732 4.732C0 5.464 0 5.643 0 8c0 2.357 0 2.536.732 3.268C1.464 12 2.643 12 5 12h2c2.357 0 3.536 0 4.268-.732C12 10.536 12 10.357 12 8c0-2.357 0-2.536-.732-3.268C10.536 4 9.357 4 7 4H5c-2.357 0-3.536 0-4.268.732zM4 7.5a.5.5 0 011 0V8h2v-.5a.5.5 0 011 0V8a1 1 0 01-1 1H5a1 1 0 01-1-1v-.5z",
    fill: "evenodd"
  })));
}

var _path$17;

function _extends$19() { _extends$19 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$19.apply(this, arguments); }

function SvgInvoice(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$19({
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$17 || (_path$17 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.5 11.5V.5a.5.5 0 01.782-.412L2.335 1 3.388.088a.5.5 0 01.565 0L5 .999 6.053.089a.5.5 0 01.565 0l1.05.911 1.05-.91A.5.5 0 019.5.5v11a.5.5 0 01-.782.412L7.633 11l-1.015.912a.5.5 0 01-.565 0L4.967 11l-1.014.913a.5.5 0 01-.565 0L2.299 11l-1.017.913A.5.5 0 01.5 11.5zm2.633-3h3a.5.5 0 000-1h-3a.5.5 0 100 1zm4.353-2.146a.5.5 0 00-.353-.854h-4a.5.5 0 100 1h4a.5.5 0 00.353-.146zM7.633 4a.5.5 0 01-.5.5h-4a.5.5 0 010-1h4a.5.5 0 01.5.5z",
    fill: "evenodd"
  })));
}

var _path$18;

function _extends$1a() { _extends$1a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1a.apply(this, arguments); }

function SvgCertificate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1a({
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$18 || (_path$18 = /*#__PURE__*/React.createElement("path", {
    d: "M4 8a4 4 0 110-8 4 4 0 010 8zm0 1a4.97 4.97 0 01-3-1.01v2.76a1.25 1.25 0 002.031.976l.813-.65a.25.25 0 01.312 0l.813.65A1.25 1.25 0 007 10.75V7.99A4.97 4.97 0 014 9z",
    fill: "evenodd"
  })));
}

(function (TypeSimpleIconEnum) {
    TypeSimpleIconEnum["angleDown"] = "angleDown";
    TypeSimpleIconEnum["angleLeft"] = "angleLeft";
    TypeSimpleIconEnum["angleRight"] = "angleRight";
    TypeSimpleIconEnum["angleUp"] = "angleUp";
    TypeSimpleIconEnum["archive"] = "archive";
    TypeSimpleIconEnum["arrowDown"] = "arrowDown";
    TypeSimpleIconEnum["arrowLeft"] = "arrowLeft";
    TypeSimpleIconEnum["arrowRight"] = "arrowRight";
    TypeSimpleIconEnum["arrowUp"] = "arrowUp";
    TypeSimpleIconEnum["bagCheck"] = "bagCheck";
    TypeSimpleIconEnum["bell"] = "bell";
    TypeSimpleIconEnum["bold"] = "bold";
    TypeSimpleIconEnum["box"] = "box";
    TypeSimpleIconEnum["bullet"] = "bullet";
    TypeSimpleIconEnum["calendar"] = "calendar";
    TypeSimpleIconEnum["caretDown"] = "caretDown";
    TypeSimpleIconEnum["caretLeft"] = "caretLeft";
    TypeSimpleIconEnum["caretRight"] = "caretRight";
    TypeSimpleIconEnum["caretUp"] = "caretUp";
    TypeSimpleIconEnum["cart"] = "cart";
    TypeSimpleIconEnum["catalog"] = "catalog";
    TypeSimpleIconEnum["certificate"] = "certificate";
    TypeSimpleIconEnum["chart"] = "chart";
    TypeSimpleIconEnum["check"] = "check";
    TypeSimpleIconEnum["cog"] = "cog";
    TypeSimpleIconEnum["collapse"] = "collapse";
    TypeSimpleIconEnum["comment"] = "comment";
    TypeSimpleIconEnum["computer"] = "computer";
    TypeSimpleIconEnum["cross"] = "cross";
    TypeSimpleIconEnum["dash"] = "dash";
    TypeSimpleIconEnum["document"] = "document";
    TypeSimpleIconEnum["documentCapture"] = "documentCapture";
    TypeSimpleIconEnum["dots"] = "dots";
    TypeSimpleIconEnum["duplicate"] = "duplicate";
    TypeSimpleIconEnum["e"] = "e";
    TypeSimpleIconEnum["expand"] = "expand";
    TypeSimpleIconEnum["external"] = "external";
    TypeSimpleIconEnum["eye"] = "eye";
    TypeSimpleIconEnum["eyeCrossed"] = "eyeCrossed";
    TypeSimpleIconEnum["filter"] = "filter";
    TypeSimpleIconEnum["filterSettings"] = "filterSettings";
    TypeSimpleIconEnum["gift"] = "gift";
    TypeSimpleIconEnum["grid"] = "grid";
    TypeSimpleIconEnum["header"] = "header";
    TypeSimpleIconEnum["infinity"] = "infinity";
    TypeSimpleIconEnum["info"] = "info";
    TypeSimpleIconEnum["invoice"] = "invoice";
    TypeSimpleIconEnum["italic"] = "italic";
    TypeSimpleIconEnum["leftStop"] = "leftStop";
    TypeSimpleIconEnum["link"] = "link";
    TypeSimpleIconEnum["megaphone"] = "megaphone";
    TypeSimpleIconEnum["moveIn"] = "moveIn";
    TypeSimpleIconEnum["orderedList"] = "orderedList";
    TypeSimpleIconEnum["paperPlane"] = "paperPlane";
    TypeSimpleIconEnum["pencil"] = "pencil";
    TypeSimpleIconEnum["pieces"] = "pieces";
    TypeSimpleIconEnum["plus"] = "plus";
    TypeSimpleIconEnum["plusSquare"] = "plusSquare";
    TypeSimpleIconEnum["qrCode"] = "qrCode";
    TypeSimpleIconEnum["question"] = "question";
    TypeSimpleIconEnum["refresh"] = "refresh";
    TypeSimpleIconEnum["rightStop"] = "rightStop";
    TypeSimpleIconEnum["search"] = "search";
    TypeSimpleIconEnum["signOut"] = "signOut";
    TypeSimpleIconEnum["sim"] = "sim";
    TypeSimpleIconEnum["sliders"] = "sliders";
    TypeSimpleIconEnum["sortAsc"] = "sortAsc";
    TypeSimpleIconEnum["sortDesc"] = "sortDesc";
    TypeSimpleIconEnum["split"] = "split";
    TypeSimpleIconEnum["star"] = "star";
    TypeSimpleIconEnum["trash"] = "trash";
    TypeSimpleIconEnum["unorderedList"] = "unorderedList";
    TypeSimpleIconEnum["user"] = "user";
    TypeSimpleIconEnum["userCapture"] = "userCapture";
    TypeSimpleIconEnum["users"] = "users";
    TypeSimpleIconEnum["verticalArrows"] = "verticalArrows";
})(exports.TypeSimpleIconEnum || (exports.TypeSimpleIconEnum = {}));

const DEFAULT_ICON_SIZE = 16;

const SimpleIcon = (props) => {
    const { type, fill = 'currentColor', className = '', width = DEFAULT_ICON_SIZE, height = DEFAULT_ICON_SIZE, } = props;
    const style = React.useMemo(() => ({ width, height }), [height, width]);
    const memoClassName = `uiKit-icon ${className}`;
    switch (type) {
        case exports.TypeSimpleIconEnum.external:
            return React__default.createElement(SvgExternal, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.angleDown:
            return React__default.createElement(SvgAngleDown, Object.assign({ stroke: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.angleUp:
            return React__default.createElement(SvgAngleUp, Object.assign({ stroke: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.angleLeft:
            return React__default.createElement(SvgAngleLeft, Object.assign({ stroke: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.angleRight:
            return React__default.createElement(SvgAngleRight, Object.assign({ stroke: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.check:
            return React__default.createElement(SvgCheck, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.dash:
            return React__default.createElement(SvgDash, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.bullet:
            return React__default.createElement(SvgBullet, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.calendar:
            return React__default.createElement(SvgCalendar, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.caretUp:
            return React__default.createElement(SvgCaretUp, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.caretDown:
            return React__default.createElement(SvgCaretDown, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.cross:
            return React__default.createElement(SvgCross, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.arrowLeft:
            return React__default.createElement(SvgArrowLeft, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.arrowRight:
            return React__default.createElement(SvgArrowRight, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.arrowUp:
            return React__default.createElement(SvgArrowUp, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.arrowDown:
            return React__default.createElement(SvgArrowDown, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.caretLeft:
            return React__default.createElement(SvgCaretLeft, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.caretRight:
            return React__default.createElement(SvgCaretRight, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.bell:
            return React__default.createElement(SvgBell, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.question:
            return React__default.createElement(SvgQuestion, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.paperPlane:
            return React__default.createElement(SvgPaperPlane, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.user:
            return React__default.createElement(SvgUser, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.document:
            return React__default.createElement(SvgDocument, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.sim:
            return React__default.createElement(SvgSim, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.box:
            return React__default.createElement(SvgBox, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.duplicate:
            return React__default.createElement(SvgDuplicate, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.users:
            return React__default.createElement(SvgUsers, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.pencil:
            return React__default.createElement(SvgPencil, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.star:
            return React__default.createElement(SvgStar, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.pieces:
            return React__default.createElement(SvgPieces, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.chart:
            return React__default.createElement(SvgChart, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.megaphone:
            return React__default.createElement(SvgMegaphone, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.comment:
            return React__default.createElement(SvgComment, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.filter:
            return React__default.createElement(SvgFilter, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.filterSettings:
            return React__default.createElement(SvgFilterSettings, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.verticalArrows:
            return React__default.createElement(SvgVerticalArrows, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.sortAsc:
            return React__default.createElement(SvgSortAsc, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.sortDesc:
            return React__default.createElement(SvgSortDesc, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.leftStop:
            return React__default.createElement(SvgLeftStop, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.rightStop:
            return React__default.createElement(SvgRightStop, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.userCapture:
            return React__default.createElement(SvgUserCapture, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.documentCapture:
            return React__default.createElement(SvgDocumentCapture, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.e:
            return React__default.createElement(SvgE, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.dots:
            return React__default.createElement(SvgDots, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.info:
            return React__default.createElement(SvgInfo, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.cog:
            return React__default.createElement(SvgCog, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.gift:
            return React__default.createElement(SvgGift, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.trash:
            return React__default.createElement(SvgTrash, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.moveIn:
            return React__default.createElement(SvgMoveIn, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.signOut:
            return React__default.createElement(SvgSignOut, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.plus:
            return React__default.createElement(SvgPlus, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.cart:
            return React__default.createElement(SvgCart, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.qrCode:
            return React__default.createElement(SvgQrCode, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.plusSquare:
            return React__default.createElement(SvgPlusSquare, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.search:
            return React__default.createElement(SvgSearch, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.computer:
            return React__default.createElement(SvgComputer, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.refresh:
            return React__default.createElement(SvgRefresh, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.sliders:
            return React__default.createElement(SvgSliders, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.infinity:
            return React__default.createElement(SvgInfinity, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.grid:
            return React__default.createElement(SvgGrid, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.bold:
            return React__default.createElement(SvgBold, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.italic:
            return React__default.createElement(SvgItalic, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.header:
            return React__default.createElement(SvgHeader, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.unorderedList:
            return React__default.createElement(SvgUnorderedList, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.link:
            return React__default.createElement(SvgLink, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.eye:
            return React__default.createElement(SvgEye, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.eyeCrossed:
            return React__default.createElement(SvgEyeCrossed, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.split:
            return React__default.createElement(SvgSplit, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.expand:
            return React__default.createElement(SvgExpand, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.collapse:
            return React__default.createElement(SvgCollapse, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.catalog:
            return React__default.createElement(SvgCatalog, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.bagCheck:
            return React__default.createElement(SvgBagCheck, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.archive:
            return React__default.createElement(SvgArchive, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.invoice:
            return React__default.createElement(SvgInvoice, Object.assign({ fill: fill, className: memoClassName }, style));
        case exports.TypeSimpleIconEnum.certificate:
            return React__default.createElement(SvgCertificate, Object.assign({ fill: fill, className: memoClassName }, style));
        default:
            return React__default.createElement(SvgExternal, Object.assign({ fill: fill, className: memoClassName }, style));
    }
};

const min = 1;
const max = 1000;
const getRandomNumber = () => min + Math.random() * (max - min);

var IconSideEnum;
(function (IconSideEnum) {
    IconSideEnum["left"] = "left";
    IconSideEnum["right"] = "right";
})(IconSideEnum || (IconSideEnum = {}));
var IconClassEnum;
(function (IconClassEnum) {
    IconClassEnum["left"] = "uiKit-input-icon-left";
    IconClassEnum["right"] = "uiKit-input-icon-right";
})(IconClassEnum || (IconClassEnum = {}));

const EnterKeyCode = 13;
const EscKeyCode = 27;
const ArrowUpKeyCode = 40;
const ArrowDownKeyCode = 38;

function Input({ className = '', placeholder, value = '', handleChange, hasError = false, hint = '', disabled = false, onPressEnter, onPressEsc, onPressArrow, onFocus, onBlur, name, onChange, onChangeField, label = '', validation = [], withMask = undefined, icon, iconSide = IconSideEnum.right, htmlFor = false, }) {
    // State
    const [hintMessage, setHintMessage] = React.useState(hint);
    const convertValue = (typeof value === 'string' && value) || String(value);
    const validateInput = React.useCallback(() => {
        const resultValidation = validation === null || validation === void 0 ? void 0 : validation.find((rules) => {
            const { test, errorMessage } = rules;
            if (!test.test(convertValue)) {
                return errorMessage;
            }
            return undefined;
        });
        return resultValidation;
    }, [convertValue, validation]);
    // Effect
    React.useEffect(() => {
        if (validation.length) {
            const resultValidation = validateInput();
            const errorMessage = (resultValidation === null || resultValidation === void 0 ? void 0 : resultValidation.errorMessage) || '';
            const message = (convertValue.length && errorMessage) || hint;
            setHintMessage(message);
        }
    }, [convertValue, validation, validateInput, hint]);
    // Memo
    const memoClassName = React.useMemo(() => {
        const isError = hasError || (hintMessage !== hint && Boolean(hintMessage.length));
        return `uiKit-input-wrapper ${(isError && 'hasError') || ''} ${(disabled && 'hasDisabled') || ''} ${className} ${(icon && 'withIcon') || ''}`;
    }, [hasError, hintMessage, hint, disabled, className, icon]);
    const inputClass = (icon && `uiKit-input ${iconSide}`) || 'uiKit-input';
    // Callbacks
    const handleCallback = React.useCallback((event) => {
        const { value } = event.target;
        // @ts-ignore
        const { mask } = event;
        const resultValidation = validateInput();
        handleChange === null || handleChange === void 0 ? void 0 : handleChange(event, resultValidation);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name, resultValidation, mask);
        onChange === null || onChange === void 0 ? void 0 : onChange(value, resultValidation, mask);
    }, [handleChange, name, onChange, onChangeField, validateInput]);
    const handleAccept = React.useCallback((val, mask, event) => {
        // eslint-disable-next-line no-param-reassign
        event.mask = mask;
        handleCallback(event);
    }, [handleCallback]);
    const handleKeyDown = React.useCallback((event) => {
        if (onPressEnter && event.keyCode === EnterKeyCode) {
            onPressEnter(event);
        }
        if (onPressEsc && event.keyCode === EscKeyCode) {
            onPressEsc(event);
        }
        if (onPressArrow
            && (event.keyCode === ArrowUpKeyCode || event.keyCode === ArrowDownKeyCode)) {
            onPressArrow(event);
        }
    }, [onPressArrow, onPressEnter, onPressEsc]);
    const handleFocus = React.useCallback((event) => {
        // eslint-disable-next-line no-param-reassign
        event.target.autocomplete = 'whatever';
    }, [onFocus]);
    const forId = (htmlFor && label.length > 0 && `${getRandomNumber()}`) || '';
    return (React__default.createElement("div", { className: memoClassName },
        label.length > 0 && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        React__default.createElement("label", { htmlFor: forId, className: "uiKit-input-label" },
            React__default.createElement(Typography$1, { value: label, type: exports.TypeTypographyDeprecatedEnum.small, weight: exports.WeightTypographyDeprecatedEnum.bold, margin: "0 0 4px 12px" }))),
        React__default.createElement("div", { className: "uiKit-field-wrapper" },
            (withMask && (React__default.createElement(reactImask.IMaskInput, Object.assign({}, withMask, { 
                // @ts-ignore
                autoComplete: "off", id: forId, className: inputClass, name: name, placeholder: placeholder, disabled: disabled, value: convertValue, onAccept: handleAccept })))) || (React__default.createElement("input", { id: forId, autoComplete: "off", name: name, className: inputClass, placeholder: placeholder, disabled: disabled, value: convertValue, onChange: handleCallback, onKeyDown: handleKeyDown, onFocus: handleFocus, onBlur: onBlur })),
            (icon && icon in exports.TypeSimpleIconEnum && (React__default.createElement(SimpleIcon, { className: IconClassEnum[iconSide], type: icon }))) || React__default.createElement(Typography$1, { className: IconClassEnum[iconSide], value: icon })),
        hintMessage && (React__default.createElement("span", { className: "uiKit-input-hint" },
            React__default.createElement(Typography$1, { value: hintMessage, type: exports.TypeTypographyDeprecatedEnum.small })))));
}

var LabelClassEnum;
(function (LabelClassEnum) {
    LabelClassEnum["danger"] = "uiKit-label-danger";
    LabelClassEnum["default"] = "uiKit-label-default";
    LabelClassEnum["success"] = "uiKit-label-success";
    LabelClassEnum["warning"] = "uiKit-label-warning";
})(LabelClassEnum || (LabelClassEnum = {}));
(function (LabelTypeEnum) {
    LabelTypeEnum["danger"] = "danger";
    LabelTypeEnum["default"] = "default";
    LabelTypeEnum["success"] = "success";
    LabelTypeEnum["warning"] = "warning";
})(exports.LabelTypeEnum || (exports.LabelTypeEnum = {}));
(function (LabeSizeEnum) {
    LabeSizeEnum["regular"] = "regular";
    LabeSizeEnum["small"] = "small";
})(exports.LabeSizeEnum || (exports.LabeSizeEnum = {}));

const Label = (props) => {
    const { value, size = exports.LabeSizeEnum.regular, type = exports.LabelTypeEnum.default, className = '', } = props;
    // Memo
    const memoValue = React.useMemo(() => value, [value]);
    const memoClassName = React.useMemo(() => `${LabelClassEnum[type]}${(size === exports.LabeSizeEnum.regular && '_regular') || '_small'} ${className}`, [type, size, className]);
    const memoTypographyType = React.useMemo(() => (size === exports.LabeSizeEnum.regular && exports.TypographyType.body) || exports.TypographyType.small, [size]);
    return (React__default.createElement("div", { className: memoClassName },
        React__default.createElement(Typography, { type: memoTypographyType, weight: "semibold", value: memoValue })));
};

var NotificationClassEnum;
(function (NotificationClassEnum) {
    NotificationClassEnum["danger"] = "uiKit-notification-danger";
    NotificationClassEnum["default"] = "uiKit-notification-default";
    NotificationClassEnum["success"] = "uiKit-notification-success";
    NotificationClassEnum["warning"] = "uiKit-notification-warning";
})(NotificationClassEnum || (NotificationClassEnum = {}));
(function (NotificationTypeEnum) {
    NotificationTypeEnum["danger"] = "danger";
    NotificationTypeEnum["default"] = "default";
    NotificationTypeEnum["success"] = "success";
    NotificationTypeEnum["warning"] = "warning";
})(exports.NotificationTypeEnum || (exports.NotificationTypeEnum = {}));
(function (NotificationSizeEnum) {
    NotificationSizeEnum["regular"] = "regular";
    NotificationSizeEnum["small"] = "small";
})(exports.NotificationSizeEnum || (exports.NotificationSizeEnum = {}));

const Notification = (props) => {
    const { id, value, size = exports.NotificationSizeEnum.regular, type = exports.NotificationTypeEnum.default, closable = true, className = '', closeCallback, } = props;
    // useState
    const [isVisible, toggleVisible] = React.useState(true);
    // useMemo
    const memoClassName = React.useMemo(() => `${NotificationClassEnum[type]}_${exports.NotificationSizeEnum[size]} ${className}`, [type, size, className]);
    const TypographyTypeText = React.useMemo(() => (size === exports.NotificationSizeEnum.regular && exports.TypographyType.body)
        || exports.TypographyType.small, [size]);
    // useCallback
    const handleClose = React.useCallback(() => {
        toggleVisible(() => {
            if (closeCallback) {
                closeCallback(id);
            }
            return false;
        });
    }, [closeCallback, id]);
    return (React__default.createElement(React__default.Fragment, null, isVisible && (React__default.createElement("div", { className: memoClassName },
        React__default.createElement("div", { className: "uiKit-notification-icon" }),
        React__default.createElement(Typography, { type: TypographyTypeText, value: value }),
        closable && (React__default.createElement("div", { role: "button", "aria-label": value, tabIndex: 0, className: "uiKit-notification-close", onClick: handleClose, onKeyDown: undefined }))))));
};

var AutoCloseProgressClassEnum;
(function (AutoCloseProgressClassEnum) {
    AutoCloseProgressClassEnum["danger"] = "uiKit-autoCloseNotification-progress_danger";
    AutoCloseProgressClassEnum["success"] = "uiKit-autoCloseNotification-progress_success";
    AutoCloseProgressClassEnum["warning"] = "uiKit-autoCloseNotification-progress_warnign";
})(AutoCloseProgressClassEnum || (AutoCloseProgressClassEnum = {}));
(function (AutoCloseNitificationType) {
    AutoCloseNitificationType["danger"] = "danger";
    AutoCloseNitificationType["success"] = "success";
    AutoCloseNitificationType["warning"] = "warning";
})(exports.AutoCloseNitificationType || (exports.AutoCloseNitificationType = {}));

const default_time = 5000;
const time_interval = 50;

// TODO выкинуть ts-ignore
const AutoCloseNotification = (props) => {
    var _a;
    const { value, timeToClose = default_time, className = '', type = exports.AutoCloseNitificationType.warning, id, closeCallback, } = props;
    // useRef
    const notificationRef = React.useRef(null);
    const progressionBarRef = React.useRef(null);
    const timerRef = React.useRef(null);
    const animationRef = React.useRef(null);
    // useState
    const [isVisible, toggleVisible] = React.useState(true);
    const [timeCount, changeTime] = React.useState(0);
    // useMemo
    const memoProgressBarClassName = React.useMemo(() => AutoCloseProgressClassEnum[type], [type]);
    const memoClassName = React.useMemo(() => `uiKit-autoCloseNotification-wrapper ${className}`, [className]);
    // useEffect
    React.useEffect(() => {
        // Эффект старта таймаута + очистки на didmount
        if (timerRef.current)
            clearInterval(timerRef.current);
        if (progressionBarRef.current) {
            // @ts-ignore
            animationRef.current = progressionBarRef.current.animate([{ width: '100%' }, { width: '0%' }], {
                duration: timeToClose,
                fill: 'forwards',
            });
        }
        timerRef.current = setInterval(() => {
            changeTime((currentTime) => currentTime + time_interval);
        }, time_interval);
        return () => clearInterval(timerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        if (timeCount === timeToClose) {
            toggleVisible(() => {
                if (closeCallback && id !== undefined) {
                    closeCallback(id);
                }
                return false;
            });
        }
    }, [timeCount, id, closeCallback, timeToClose]);
    // Эффект очистки таймаута если пользователь закрыл уведомление
    React.useEffect(() => {
        var _a;
        // @ts-ignore
        if (((_a = notificationRef === null || notificationRef === void 0 ? void 0 : notificationRef.current) === null || _a === void 0 ? void 0 : _a.children[0]) === undefined) {
            clearInterval(timerRef.current);
        }
        // @ts-ignore
    }, [(_a = notificationRef === null || notificationRef === void 0 ? void 0 : notificationRef.current) === null || _a === void 0 ? void 0 : _a.children[0]]);
    // Callback
    const handleMouseEnter = React.useCallback(() => {
        var _a;
        clearInterval(timerRef.current);
        timerRef.current = null;
        (_a = animationRef === null || animationRef === void 0 ? void 0 : animationRef.current) === null || _a === void 0 ? void 0 : _a.pause();
    }, [timerRef.current, animationRef.current]);
    const handleMouseOut = React.useCallback(() => {
        if (timerRef.current === null) {
            animationRef.current.play();
            timerRef.current = setInterval(() => {
                changeTime((currentTime) => currentTime + time_interval);
            }, time_interval);
        }
    }, [timerRef.current, animationRef.current]);
    return (React__default.createElement(React__default.Fragment, null, isVisible && (React__default.createElement("div", { ref: notificationRef, className: memoClassName, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseOut },
        React__default.createElement(Notification, { id: id, value: value, size: exports.NotificationSizeEnum.regular, type: type, closeCallback: closeCallback }),
        React__default.createElement("div", { ref: progressionBarRef, className: memoProgressBarClassName })))));
};

/* eslint-disable @typescript-eslint/no-unused-expressions */
const eventManager = {
    list: new Map(),
    on(event, callback) {
        this.list.has(event) || this.list.set(event, []);
        this.list.get(event).push(callback);
        return this;
    },
    emit(event, ...args) {
        this.list.has(event)
            && this.list.get(event).forEach((callback) => {
                setTimeout(() => {
                    callback(...args);
                }, 0);
            });
    },
};

/**
 * Описание компонента
 * импортируются 2 вещи
 * 1) NotificationsContainer и вставляется в app или другое место на максимально верхнем уровне
 * 2) импортируется в нужные место метод toast
 *
 * вызов notifications производитеся через метод toast
 * пример вызова
 *
 * toast({
 * // тип notification берется из компонента AutoCloseNitification
    type: AutoCloseNitificationType.danger,
    // сообщение ошибки может быть или sting или string[]
    messages,
    // уникальный id для мониторинга состояния notification
    id,
    });
 */
const NotificationsContainer = (props) => {
    const [notificationList, updateNotification] = React.useState([]);
    const { className = '' } = props;
    // Memo
    const memoClassName = React.useMemo(() => `uiKit-notificationsContainer ${className}`, [className]);
    // Effect
    React.useEffect(() => {
        eventManager.on('show', (notification) => {
            updateNotification((currentNotifications) => [...currentNotifications, notification]);
        });
    }, []);
    // Callback
    const closeCallback = React.useCallback((id) => {
        updateNotification((currentNotificationList) => currentNotificationList.filter((notification) => notification.id !== id));
    }, [updateNotification]);
    return (React__default.createElement("div", { className: memoClassName }, notificationList.map((notification) => {
        const { message, type, id } = notification;
        return (React__default.createElement(AutoCloseNotification, { id: id, type: type, key: id, value: message, closeCallback: closeCallback }));
    })));
};

const toast = (props) => {
    const { messages = null, type, id = getRandomNumber() } = props;
    if (typeof messages === 'string') {
        const messageObject = { type, id, message: messages };
        eventManager.emit('show', messageObject);
    }
    else if (Array.isArray(messages)) {
        const messageObject = { type, id, message: messages.join(' ') };
        eventManager.emit('show', messageObject);
    }
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lodash_isequal = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

function ListItems({ options, handleSelect, selectedValue, arrowIndex, name }) {
    return (React__default.createElement("div", { className: "uiKit-dropDown-listItemsWrapper" }, (options.length
        && options.map((option, index) => {
            const { label, value } = option;
            const isSelectedClassName = ((selectedValue === label
                || selectedValue === value
                || lodash_isequal(selectedValue, value))
                && 'uiKit-dropDown-selected')
                || 'uiKit-dropDown-notSelected';
            const optionClassName = (arrowIndex !== null && arrowIndex === index && 'uiKit-dropDown-item_focus')
                || 'uiKit-dropDown-item';
            return (React__default.createElement("div", { role: "button", tabIndex: 0, className: optionClassName, key: `${label}-${index + 1}`, 
                // @ts-ignore
                name: name, onMouseDown: handleSelect(option, name) },
                React__default.createElement("div", { className: isSelectedClassName }),
                React__default.createElement(Typography$1, { value: label })));
        }))
        || (React__default.createElement("div", { className: "uiKit-dropDown-notFound" },
            React__default.createElement(Typography$1, { value: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" })))));
}

const ArrowUpKeyCode$1 = 40;
const ArrowDownKeyCode$1 = 38;

function Dropdown({ htmlFor, placeholder, value, handleSelect, onChange, onChangeField, hasError = false, disabled = false, options, name, className = '', disableFilter = false, label = '', ref, }) {
    const inputRef = React.useRef(null);
    const findValue = React.useCallback((value) => {
        var _a;
        return ((_a = options.find((option) => {
            if (option.value === value || lodash_isequal(option.value, value))
                return option.value || option.label || '';
            return false;
        })) === null || _a === void 0 ? void 0 : _a.label) || '';
    }, [options]);
    // useState
    const [searchValue, changeSearchValue] = React.useState(findValue(value));
    const [isOpenList, changeIsOpenList] = React.useState(false);
    const [isNotChangeValue, toogleIsNotChangeValue] = React.useState(true);
    const [selectedValue, changeSelectedValue] = React.useState(findValue(value));
    const [arrowIndex, changeArrowIndex] = React.useState(null);
    const filtredOptions = React.useMemo(() => {
        if (!disableFilter && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) > 0 && !isNotChangeValue) {
            return options.filter((option) => {
                const { label, value } = option;
                const lowerCaseSearchValue = searchValue.toLowerCase();
                if (label.toLowerCase().indexOf(lowerCaseSearchValue) !== -1
                    || (typeof value === 'string' && value.toLowerCase().indexOf(lowerCaseSearchValue) !== -1)) {
                    return option;
                }
                return false;
            });
        }
        return options;
    }, [disableFilter, searchValue, isNotChangeValue, options]);
    const maxLength = React.useMemo(() => (filtredOptions === null || filtredOptions === void 0 ? void 0 : filtredOptions.length) - 1 || 0, [filtredOptions]);
    // useCallback
    const handleFilter = React.useCallback((event) => {
        const { value } = event.target;
        event === null || event === void 0 ? void 0 : event.preventDefault();
        if (!disableFilter && typeof value === 'string') {
            changeSearchValue(value);
        }
        if (!disableFilter && isNotChangeValue) {
            toogleIsNotChangeValue(false);
        }
    }, [disableFilter, isNotChangeValue]);
    React.useEffect(() => {
        changeSearchValue(findValue(value));
    }, [findValue, value]);
    // выбор опции через клик
    const handleSelectCallback = React.useCallback((option, name) => () => {
        const { label, value } = option;
        changeSelectedValue(label);
        changeSearchValue(label);
        handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(value, name);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name);
        changeArrowIndex(null);
        if (!disableFilter && !isNotChangeValue) {
            toogleIsNotChangeValue(true);
        }
    }, [handleSelect, onChange, onChangeField, disableFilter, isNotChangeValue]);
    // открытие с клавиатуры options и выбор option через enter
    const handlePressEnter = React.useCallback((event) => {
        if ('preventDefault' in event) {
            event.preventDefault();
        }
        if (isOpenList === false && disabled !== true) {
            changeIsOpenList(true);
        }
        if (isOpenList === true && arrowIndex !== null && filtredOptions[arrowIndex]) {
            const { label, value } = filtredOptions[arrowIndex];
            changeIsOpenList(false);
            changeSelectedValue(label);
            changeSearchValue(label);
            handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(value, name);
            onChange === null || onChange === void 0 ? void 0 : onChange(value);
            onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name);
            changeArrowIndex(null);
            // @ts-ignore
            event.target.blur();
            if (!disableFilter && !isNotChangeValue) {
                toogleIsNotChangeValue(true);
            }
        }
    }, [isOpenList, disabled, arrowIndex, filtredOptions, handleSelect, name, onChange, onChangeField, disableFilter, isNotChangeValue]);
    // закрытие меню options
    const handleClose = React.useCallback(() => {
        if (isOpenList === true) {
            changeSelectedValue((currentValue) => {
                changeSearchValue(currentValue);
                return currentValue;
            });
            changeIsOpenList(false);
            toogleIsNotChangeValue(true);
            changeArrowIndex(null);
        }
    }, [changeSelectedValue, changeIsOpenList, isOpenList]);
    // Навигация по options с помошью стрелок
    const handlePressArrow = React.useCallback((event) => {
        if (isOpenList) {
            if (event.keyCode === ArrowDownKeyCode$1) {
                changeArrowIndex((current) => {
                    if (current === null || current === 0 || current > maxLength)
                        return maxLength;
                    return current - 1;
                });
            }
            if (event.keyCode === ArrowUpKeyCode$1) {
                changeArrowIndex((current) => {
                    if (current === null || current === maxLength || current > maxLength)
                        return 0;
                    return current + 1;
                });
            }
        }
    }, [changeArrowIndex, isOpenList, maxLength]);
    return (React__default.createElement("div", { className: `uiKit-wrapper ${className}` },
        label.length > 0 && (React__default.createElement("div", { className: "uiKit-select-label" },
            React__default.createElement(Typography$1, { value: label, type: exports.TypeTypographyDeprecatedEnum.small, weight: exports.WeightTypographyDeprecatedEnum.bold }))),
        React__default.createElement("div", { role: "button", tabIndex: -1, ref: ref, className: "uiKit-select-wrapper", onClick: handlePressEnter, onKeyDown: undefined },
            React__default.createElement(Input, { htmlFor: htmlFor, name: name, className: "uiKit-select-input", 
                // @ts-ignore
                ref: inputRef, hasError: hasError, disabled: disabled, value: searchValue, handleChange: handleFilter, placeholder: placeholder, onBlur: handleClose, onPressEnter: handlePressEnter, onPressEsc: handleClose, onPressArrow: handlePressArrow, icon: (isOpenList
                    && exports.TypeSimpleIconEnum.angleUp)
                    || exports.TypeSimpleIconEnum.angleDown }),
            isOpenList && (React__default.createElement(ListItems, { name: name, options: filtredOptions, handleSelect: handleSelectCallback, selectedValue: selectedValue, arrowIndex: arrowIndex })))));
}

const Radio = (props) => {
    const { isActive, hasError = false, disabled = false, onClick, className = '', name = '', value = '', } = props;
    // Memo
    const memoClassName = React.useMemo(() => `uiKit-Radio${(hasError && '_hasError') || ''} ${className}`, [hasError, className]);
    const handleCallback = React.useCallback((e) => {
        if (onClick)
            onClick(e);
    }, [onClick]);
    return (React__default.createElement("input", { name: name, className: memoClassName, type: "Radio", disabled: disabled, defaultChecked: isActive, onChange: handleCallback, value: value }));
};

function RadioGroup({ name, label, options, onChange, onChangeField, checked, className = '', }) {
    const [selected, changeSelected] = React.useState(`${checked}`);
    const tryParse = (value) => {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            if (value === 'undefined')
                return undefined;
            return value;
        }
    };
    const handleClick = React.useCallback((e) => {
        const { target } = e;
        onChange === null || onChange === void 0 ? void 0 : onChange(target.name);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(tryParse(target.name), name);
        changeSelected(() => `${target.name}`);
    }, [name, onChange, onChangeField]);
    React.useEffect(() => {
        changeSelected(`${checked}`);
    }, [checked]);
    const customClassName = `uiKit-radioGroup ${className}`;
    return (React__default.createElement("form", { className: customClassName },
        label && (React__default.createElement("div", { className: "uiKit-radioGroup-label" },
            React__default.createElement(Typography$1, { type: "small", weight: "semiBold", value: label }))),
        React__default.createElement("div", { className: "uiKit-radioGroup-wrapper" }, options
            && (options === null || options === void 0 ? void 0 : options.map((option) => {
                const key = getRandomNumber();
                const nameString = `${option.value}`;
                const isChecked = nameString === `${selected}`;
                return (React__default.createElement("div", { className: "uiKit-radioGroup-item", key: key },
                    React__default.createElement(Radio, { name: nameString, value: option.label, isActive: isChecked, onClick: handleClick }),
                    React__default.createElement(Typography$1, { value: option.label })));
            })))));
}

function Textarea({ name, className = '', placeholder, value = '', handleChange, onChange, onChangeField, hasError = false, disabled = false, label = '', htmlFor = false }) {
    const memoClassName = `uiKit-textArea ${(hasError && 'hasError') || ''} ${className}`;
    const handleCallback = React.useCallback((event) => {
        const { value } = event.target;
        handleChange === null || handleChange === void 0 ? void 0 : handleChange(event);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name);
    }, [handleChange, onChange, onChangeField, name]);
    const forId = (htmlFor && label.length > 0 && `${getRandomNumber()}`) || '';
    return (React__default.createElement("div", { className: "uiKit-textArea-wrapper" },
        label.length > 0 && (React__default.createElement("label", { htmlFor: forId, className: "uiKit-textArea-label" },
            React__default.createElement(Typography$1, { value: label, type: exports.TypeTypographyDeprecatedEnum.small, weight: exports.WeightTypographyDeprecatedEnum.bold, margin: "0 0 4px 12px" }))),
        React__default.createElement("textarea", { name: name, id: forId, className: memoClassName, placeholder: placeholder, disabled: disabled, value: value, onChange: handleCallback })));
}

(function (TooltipClassEnum) {
    TooltipClassEnum["bottomCenter"] = "uiKit-tooltip-arrowBottomCenter";
    TooltipClassEnum["bottomLeft"] = "uiKit-tooltip-arrowBottomLeft";
    TooltipClassEnum["bottomRight"] = "uiKit-tooltip-arrowBottomRight";
    TooltipClassEnum["left"] = "uiKit-tooltip-arrowLeft";
    TooltipClassEnum["right"] = "uiKit-tooltip-arrowRight";
    TooltipClassEnum["topCenter"] = "uiKit-tooltip-arrowTopCenter";
    TooltipClassEnum["topLeft"] = "uiKit-tooltip-arrowTopLeft";
    TooltipClassEnum["topRight"] = "uiKit-tooltip-arrowTopRight";
})(exports.TooltipClassEnum || (exports.TooltipClassEnum = {}));
(function (TooltipTypeEnum) {
    TooltipTypeEnum["bottomCenter"] = "bottomCenter";
    TooltipTypeEnum["bottomLeft"] = "bottomLeft";
    TooltipTypeEnum["bottomRight"] = "bottomRight";
    TooltipTypeEnum["left"] = "left";
    TooltipTypeEnum["right"] = "right";
    TooltipTypeEnum["topCenter"] = "topCenter";
    TooltipTypeEnum["topLeft"] = "topLeft";
    TooltipTypeEnum["topRight"] = "topRight";
})(exports.TooltipTypeEnum || (exports.TooltipTypeEnum = {}));

const Tooltip = (props) => {
    const { value, type = exports.TooltipTypeEnum.bottomLeft, className = '' } = props;
    // useMemo
    const tooltipArrowClassName = React.useMemo(() => `${exports.TooltipClassEnum[type]}`, [type]);
    const memoClassName = React.useMemo(() => `uiKit-tooltipWrapper ${className}`, [className]);
    return (React__default.createElement("div", { className: memoClassName },
        React__default.createElement("div", { className: "uiKit-tooltip" },
            React__default.createElement(Typography, { type: "small", weight: "regular", value: value }),
            React__default.createElement("div", { className: tooltipArrowClassName }))));
};

const PagingItem = (props) => {
    const { value, active, handleSelect } = props;
    const memoClassName = React.useMemo(() => `uiKit-pagging-paggingItem ${(active && 'uiKit-pagging-paggingItem-active') || ''}`, [active]);
    return (React__default.createElement("div", { tabIndex: 0, role: "button", onClick: handleSelect, onKeyDown: handleSelect, className: memoClassName },
        React__default.createElement(Typography, { value: value })));
};

const OVERFLOW_LIMIT = 2;
const SHIFT_LIMIT = 3;
const DOTS_LIMIT = 4;
const MAX_LIMIT = 7;

const PagingRow = (props) => {
    const { maxPage, currentPage, handleSelect } = props;
    const firstPage = 2;
    const lastPage = maxPage;
    const listPage = React.useMemo(() => {
        const list = [];
        for (let i = firstPage; i < lastPage; i++) {
            list.push(i);
        }
        return list;
    }, [lastPage]);
    const memoStylesOverflow = React.useMemo(() => {
        const width = 32;
        const padding = 16;
        let value = 0;
        const widthBlock = 'calc(32px * 5 + 8px * 5 * 2)';
        // Front
        if (currentPage === 1) {
            value = 0;
        }
        if (currentPage === DOTS_LIMIT) {
            value = currentPage - SHIFT_LIMIT;
        }
        if (currentPage > DOTS_LIMIT && currentPage < maxPage - DOTS_LIMIT) {
            value = currentPage - DOTS_LIMIT;
        }
        // End
        if (currentPage === maxPage || currentPage >= maxPage - SHIFT_LIMIT) {
            value = maxPage - MAX_LIMIT;
        }
        if (currentPage === maxPage - DOTS_LIMIT) {
            value = currentPage - DOTS_LIMIT;
        }
        // Limit
        if (maxPage < MAX_LIMIT) {
            value = 0;
        }
        const style = {
            left: `-${value * (width + padding)}px`,
            width: widthBlock,
        };
        return style;
    }, [currentPage, maxPage]);
    const memoStylesWrapper = React.useMemo(() => {
        let width = 'calc(32px * 5 + 8px * 5 * 2)';
        if (maxPage < MAX_LIMIT) {
            width = `calc(32px * ${maxPage - OVERFLOW_LIMIT} + 8px * ${maxPage - OVERFLOW_LIMIT} * 2)`;
        }
        const style = { width };
        return style;
    }, [maxPage]);
    return (React__default.createElement("div", { style: memoStylesWrapper, className: "uiKit-paging-row-wrapper" },
        React__default.createElement("div", { style: memoStylesOverflow, className: "uiKit-paging-row-overflow" }, listPage.map((item, index) => {
            const key = `uiKit-paging-row-${index}`;
            return (React__default.createElement(PagingItem, { key: key, active: item === currentPage, value: String(item), handleSelect: handleSelect(item) }));
        }))));
};

const DotsItem = () => (React__default.createElement("div", { className: "uiKit-paging-dots" },
    React__default.createElement(Typography, { value: "..." })));

const Paging = (props) => {
    const { maxPage, initialCurrentPage = 1, handleCallback, className = '' } = props;
    // State
    const [currentPagePagging, setCurrentPage] = React.useState(initialCurrentPage);
    // Memo
    const memoClassName = React.useMemo(() => `uiKit-paging-wrapper ${className}`, [className]);
    // Callback
    const handleSelect = React.useCallback((value) => () => {
        setCurrentPage(() => value);
        if (handleCallback)
            handleCallback(value);
    }, [handleCallback]);
    const isActive = React.useCallback((value) => value === currentPagePagging, [currentPagePagging]);
    return (React__default.createElement("div", { className: memoClassName },
        React__default.createElement(PagingItem, { value: "1", active: isActive(1), handleSelect: handleSelect(1) }),
        currentPagePagging >= DOTS_LIMIT && maxPage > MAX_LIMIT && React__default.createElement(DotsItem, null),
        React__default.createElement(PagingRow, { currentPage: currentPagePagging, maxPage: maxPage, handleSelect: handleSelect }),
        currentPagePagging <= maxPage - DOTS_LIMIT && maxPage > MAX_LIMIT && React__default.createElement(DotsItem, null),
        React__default.createElement(PagingItem, { value: String(maxPage), active: isActive(maxPage), handleSelect: handleSelect(maxPage) })));
};

var TypeIllustrationClassEnum;
(function (TypeIllustrationClassEnum) {
    TypeIllustrationClassEnum["catInBoxNormal"] = "uiKit-illustration-catInBoxNormal";
    TypeIllustrationClassEnum["catInBoxSuspicious"] = "uiKit-illustration-catInBoxSuspicious";
    TypeIllustrationClassEnum["catInTheCup"] = "uiKit-illustration-catInTheCup";
    TypeIllustrationClassEnum["catWithMagnifer"] = "uiKit-illustration-catWithMagnifer";
    TypeIllustrationClassEnum["coinAndThePaw"] = "uiKit-illustration-coinAndThePaw";
    TypeIllustrationClassEnum["cross"] = "uiKit-illustration-cross";
    TypeIllustrationClassEnum["magicWand"] = "uiKit-illustration-magicWand";
})(TypeIllustrationClassEnum || (TypeIllustrationClassEnum = {}));
(function (TypeIllustrationEnum) {
    TypeIllustrationEnum["catInBoxNormal"] = "catInBoxNormal";
    TypeIllustrationEnum["catInBoxSuspicious"] = "catInBoxSuspicious";
    TypeIllustrationEnum["catInTheCup"] = "catInTheCup";
    TypeIllustrationEnum["catWithMagnifer"] = "catWithMagnifer";
    TypeIllustrationEnum["coinAndThePaw"] = "coinAndThePaw";
    TypeIllustrationEnum["cross"] = "cross";
    TypeIllustrationEnum["magicWand"] = "magicWand";
})(exports.TypeIllustrationEnum || (exports.TypeIllustrationEnum = {}));

const DEFAULT_ILLISTRATION_SIZE = '192px';

const Illustrations = (props) => {
    const { type, width = 'auto', height = 'auto', className = '' } = props;
    // Memo
    const memoClassName = React.useMemo(() => `uiKit-illustration ${TypeIllustrationClassEnum[type]} ${className}`, [type]);
    const styles = React.useMemo(() => ({
        width: width || DEFAULT_ILLISTRATION_SIZE,
        height: height || DEFAULT_ILLISTRATION_SIZE,
        backgroundSize: `${width || DEFAULT_ILLISTRATION_SIZE} ${height || DEFAULT_ILLISTRATION_SIZE}`,
    }), [width, height]);
    return React__default.createElement("div", { style: styles, className: memoClassName });
};

(function (CircleClassEnum) {
    CircleClassEnum["large"] = "uiKit-circle-largeSize";
    CircleClassEnum["regular"] = "uiKit-circle-regularSize";
    CircleClassEnum["small"] = "uiKit-circle-smallSize";
})(exports.CircleClassEnum || (exports.CircleClassEnum = {}));
(function (CircleSizeEnum) {
    CircleSizeEnum["large"] = "large";
    CircleSizeEnum["regular"] = "regular";
    CircleSizeEnum["small"] = "small";
})(exports.CircleSizeEnum || (exports.CircleSizeEnum = {}));
(function (CircleColorEnum) {
    CircleColorEnum["black"] = "black";
    CircleColorEnum["yellow"] = "yellow";
})(exports.CircleColorEnum || (exports.CircleColorEnum = {}));

var yellowCircle = "data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.7039%201.67826C14.283%202.19135%2015.6836%203.14317%2016.742%204.42254C17.8004%205.70191%2018.4729%207.25602%2018.681%208.90334C18.8891%2010.5507%2018.6242%2012.2232%2017.9172%2013.7256C17.2103%2015.228%2016.0904%2016.4982%2014.6885%2017.3879C13.2866%2018.2776%2011.6604%2018.75%2010%2018.75C8.33959%2018.75%206.71345%2018.2776%205.31151%2017.3879C3.90958%2016.4982%202.78973%2015.228%202.08276%2013.7256C1.37579%2012.2232%201.11089%2010.5507%201.319%208.90333%22%20stroke%3D%22%23FFCD69%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E";

var blackCircle = "data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.7039%201.67826C14.283%202.19135%2015.6836%203.14317%2016.742%204.42254C17.8004%205.70191%2018.4729%207.25602%2018.681%208.90334C18.8891%2010.5507%2018.6242%2012.2232%2017.9172%2013.7256C17.2103%2015.228%2016.0904%2016.4982%2014.6885%2017.3879C13.2866%2018.2776%2011.6604%2018.75%2010%2018.75C8.33959%2018.75%206.71345%2018.2776%205.31151%2017.3879C3.90958%2016.4982%202.78973%2015.228%202.08276%2013.7256C1.37579%2012.2232%201.11089%2010.5507%201.319%208.90333%22%20stroke%3D%22%23463525%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E";

const Circle = (props) => {
    const { size = exports.CircleSizeEnum.regular, color = exports.CircleColorEnum.black, className = '' } = props;
    // Memo
    const memoClassName = React.useMemo(() => `${exports.CircleClassEnum[size]}-${color} ${className}`, [size, color, className]);
    const memoSrc = React.useMemo(() => (color === exports.CircleColorEnum.black && blackCircle) || yellowCircle, [color]);
    return React__default.createElement("img", { className: memoClassName, src: memoSrc, alt: "" });
};

var TypeCardClassEnum;
(function (TypeCardClassEnum) {
    TypeCardClassEnum["large"] = "uiKit-card-large";
    TypeCardClassEnum["regular"] = "uiKit-card-regular";
    TypeCardClassEnum["small"] = "uiKit-card-small";
})(TypeCardClassEnum || (TypeCardClassEnum = {}));
(function (SizeCardEnum) {
    SizeCardEnum["large"] = "large";
    SizeCardEnum["regular"] = "regular";
    SizeCardEnum["small"] = "small";
})(exports.SizeCardEnum || (exports.SizeCardEnum = {}));

const Card = (props) => {
    const { children, size = exports.SizeCardEnum.regular, className = '', handleClose } = props;
    // useState
    const [isVisible, toggleVisible] = React.useState(true);
    // useMemo
    const memoClassName = React.useMemo(() => `${TypeCardClassEnum[size]} ${className}`, [size, className]);
    // useCallback
    const handleClick = React.useCallback((event) => {
        toggleVisible(() => {
            if (handleClose)
                handleClose(event);
            return false;
        });
    }, [handleClose, toggleVisible]);
    return (React__default.createElement(React__default.Fragment, null, isVisible && (React__default.createElement("div", { className: memoClassName },
        React__default.createElement("div", { className: "uiKit-card-header" },
            React__default.createElement("button", { type: "button", "aria-label": " ", onClick: handleClick })),
        React__default.createElement("div", { className: "uiKit-card-content" }, children)))));
};

var TypeMulticolorClassEnum;
(function (TypeMulticolorClassEnum) {
    TypeMulticolorClassEnum["error"] = "uiKit-multicolor-error";
    TypeMulticolorClassEnum["info"] = "uiKit-multicolor-info";
    TypeMulticolorClassEnum["success"] = "uiKit-multicolor-success";
    TypeMulticolorClassEnum["warning"] = "uiKit-multicolor-warning";
})(TypeMulticolorClassEnum || (TypeMulticolorClassEnum = {}));
(function (TypeMulticolorEnum) {
    TypeMulticolorEnum["error"] = "error";
    TypeMulticolorEnum["info"] = "info";
    TypeMulticolorEnum["success"] = "success";
    TypeMulticolorEnum["warning"] = "warning";
})(exports.TypeMulticolorEnum || (exports.TypeMulticolorEnum = {}));

const DEFAULT_MULTICOLOR_SIZE = '16px';

const Multicolor = (props) => {
    const { type, width = 'auto', height = 'auto', className = '' } = props;
    // Memo
    const memoClassName = React.useMemo(() => `uiKit-multicolor ${TypeMulticolorClassEnum[type]} ${className}`, [type, className]);
    const styles = React.useMemo(() => ({
        width: width || DEFAULT_MULTICOLOR_SIZE,
        height: height || DEFAULT_MULTICOLOR_SIZE,
        backgroundSize: `${width || DEFAULT_MULTICOLOR_SIZE} ${height || DEFAULT_MULTICOLOR_SIZE}`,
    }), [width, height]);
    return React__default.createElement("div", { style: styles, className: memoClassName });
};

const MAX_LIMIT_BADGE = 99;

const Badge = (props) => {
    const { value, className = '' } = props;
    // Memo
    const memoValue = React.useMemo(() => (value <= MAX_LIMIT_BADGE && `${value}`) || '99+', [value]);
    const memoClassName = React.useMemo(() => `uiKit-badge ${className}`, [className]);
    return (React__default.createElement("div", { className: memoClassName },
        React__default.createElement(Typography, { type: "small" }, memoValue)));
};

const ModalLayer = (props) => {
    const { className = '', children, onMouseDown } = props;
    // Ref
    const wrapperRef = React.useRef(null);
    // Memo
    const memoClassName = React.useMemo(() => `uiKit-modalLayer ${className}`, [className]);
    // Callback
    const handleClose = React.useCallback((event) => {
        // event.preventDefault();
        if (onMouseDown && event.target === wrapperRef.current) {
            onMouseDown(event);
        }
    }, [onMouseDown]);
    return (React__default.createElement("div", { role: "button", tabIndex: 0, ref: wrapperRef, className: memoClassName, onMouseDown: handleClose }, children));
};

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
});

var ru = createCommonjsModule(function (module, exports) {
!function(_,t){module.exports=t(dayjs_min);}(commonjsGlobal,(function(_){function t(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var e=t(_),n="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),s="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),o="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function d(_,t,e){var n,s;return "m"===e?t?"минута":"минуту":_+" "+(n=+_,s={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[e].split("_"),n%10==1&&n%100!=11?s[0]:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?s[1]:s[2])}var u=function(_,t){return i.test(t)?n[_.month()]:s[_.month()]};u.s=s,u.f=n;var a=function(_,t){return i.test(t)?r[_.month()]:o[_.month()]};a.s=o,a.f=r;var m={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:u,monthsShort:a,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:d,mm:d,h:"час",hh:d,d:"день",dd:d,M:"месяц",MM:d,y:"год",yy:d},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};return e.default.locale(m,null,!0),m}));
});

var customParseFormat = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},s=function(t){return (t=+t)+(t>68?1900:2e3)};var a=function(t){return function(e){this[t]=+e;}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t);}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=h(t,!1);}],a:[i,function(t){this.afternoon=h(t,!0);}],S:[/\d/,function(t){this.milliseconds=100*+t;}],SS:[n,function(t){this.milliseconds=10*+t;}],SSS:[/\d{3}/,function(t){this.milliseconds=+t;}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r);}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[i,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e;}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(t){this.year=s(t);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=s.length,f=0;f<a;f+=1){var u=s[f],h=d[u],c=h&&h[0],l=h&&h[1];s[f]=l?{regex:c,parser:l}:u.replace(/^\[|\]$/g,"");}return function(t){for(var e={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else {var o=i.regex,f=i.parser,u=t.substr(r),h=o.exec(u)[0];f.call(e,h),t=t.replace(h,"");}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon;}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,s=t.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],u=!0===s[3],h=f||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=c(e)(t),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,u=r.seconds,h=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=u||0,g=h||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(t){return new Date("")}}(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!==this.format(a)&&(this.$d=new Date("")),o={};}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""));}else i.call(this,t);};}}));
});

var isYesterday = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t,n){t.prototype.isYesterday=function(){var e="YYYY-MM-DD",t=n().subtract(1,"day");return this.format(e)===t.format(e)};}}));
});

var isToday = createCommonjsModule(function (module, exports) {
!function(e,o){module.exports=o();}(commonjsGlobal,(function(){return function(e,o,t){o.prototype.isToday=function(){var e="YYYY-MM-DD",o=t();return this.format(e)===o.format(e)};}}));
});

dayjs_min.locale('ru');
dayjs_min.extend(customParseFormat);
dayjs_min.extend(isYesterday);
dayjs_min.extend(isToday);
const DDMMYYYY = 'DD.MM.YYYY';
const YYYYMMDDHHmmss = 'YYYY-MM-DD HH:mm:ss';

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

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
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
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
  if (process.env.NODE_ENV !== 'production') {
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
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
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
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
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

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
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
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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
      if (!reactIs.isValidElementType(propValue)) {
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
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
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
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  return !isNaN(date);
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters$1 = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return formatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;
  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale$1.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale$1.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = formatters$1[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addWeeks(dirtyDate, -amount);
}

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, -amount);
}

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount);
}

/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */

function getSeconds(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getISOYear` to `getISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */

function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$2 = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */

function getQuarter(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */

function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date;
}

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */

function setQuarter(dirtyDate, dirtyQuarter) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var quarter = toInteger(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return setMonth(date, date.getMonth() + diff * 3);
}

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `min` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   const date1 = new Date(1989, 6, 10)
 *   const date2 = new Date(1987, 1, 11)
 *   const minDate = min(date1, date2)
 *
 *   // v2.0.0 onward:
 *   const dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   const minDate = min(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} - the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */

function min$1(dirtyDatesArray) {
  requiredArgs(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate);

    if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `max` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var maxDate = max(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var maxDate = max(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max$1(dirtyDatesArray) {
  requiredArgs(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(Number(currentDate))) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

var MILLISECONDS_IN_DAY$1 = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY$1);
}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */

function startOfQuarter(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var cleanDate = toDate(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */

function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameYear(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 */

function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  requiredArgs(2, arguments);
  var time = toDate(dirtyDate).getTime();
  var startTime = toDate(interval.start).getTime();
  var endTime = toDate(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  requiredArgs(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_HOUR$1 = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$1 + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;

  if (!locale$1.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1
  }; // If timezone isn't specified, it will be set to the system timezone

  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp$1);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      throwProtectedError(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      throwProtectedError(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      assign(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}

var MILLISECONDS_IN_HOUR$2 = 3600000;
var MILLISECONDS_IN_MINUTE$2 = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR$2 + minutes * MILLISECONDS_IN_MINUTE$2 + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR$2 + minutes * MILLISECONDS_IN_MINUTE$2);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex$1(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex$1(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };

      _this.__getComponentNode = function () {
        var instance = _this.getInstance();

        if (config && typeof config.setClickOutsideRef === 'function') {
          return config.setClickOutsideRef()(instance);
        }

        if (typeof instance.setClickOutsideRef === 'function') {
          return instance.setClickOutsideRef();
        }

        return ne.findDOMNode(instance);
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }

      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside

      if (this.props.disableOnClickOutside) return;
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    }
    /**
     * Remove all document's event listeners for this component
     */
    ;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    }
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */
    ;

    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props;
          _this$props.excludeScrollbar;
          var props = _objectWithoutPropertiesLoose(_this$props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return React.createElement(WrappedComponent, props);
    };

    return onClickOutside;
  }(React.Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}

var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();
function Manager(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState(null),
      referenceNode = _React$useState[0],
      setReferenceNode = _React$useState[1];

  var hasUnmounted = React.useRef(false);
  React.useEffect(function () {
    return function () {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = React.useCallback(function (node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return /*#__PURE__*/React.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, /*#__PURE__*/React.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React.useLayoutEffect : React.useEffect;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max$2 = Math.max;
var min$2 = Math.min;
var round = Math.round;

function within(min, value, max) {
  return max$2(min, min$2(value, max));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max$2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max$2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max$2(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max$2(rect.top, accRect.top);
    accRect.right = min$2(rect.right, accRect.right);
    accRect.bottom = min$2(rect.bottom, accRect.bottom);
    accRect.left = max$2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min$2(min, tetherMin) : min, offset, tether ? max$2(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min$2(_min, tetherMin) : _min, _offset, tether ? max$2(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format$1(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format$1(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format$1(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var EMPTY_MODIFIERS = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = React.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = React.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = React.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        setState({
          styles: fromEntries(elements.map(function (element) {
            return [element, state.styles[element] || {}];
          })),
          attributes: fromEntries(elements.map(function (element) {
            return [element, state.attributes[element]];
          }))
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = React.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (reactFastCompare(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React.useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

var NOOP = function NOOP() {
  return void 0;
};

var NOOP_PROMISE = function NOOP_PROMISE() {
  return Promise.resolve(null);
};

var EMPTY_MODIFIERS$1 = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS$1 : _ref$modifiers,
      referenceElement = _ref.referenceElement,
      onFirstUpdate = _ref.onFirstUpdate,
      innerRef = _ref.innerRef,
      children = _ref.children;
  var referenceNode = React.useContext(ManagerReferenceNodeContext);

  var _React$useState = React.useState(null),
      popperElement = _React$useState[0],
      setPopperElement = _React$useState[1];

  var _React$useState2 = React.useState(null),
      arrowElement = _React$useState2[0],
      setArrowElement = _React$useState2[1];

  React.useEffect(function () {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React.useMemo(function () {
    return {
      placement: placement,
      strategy: strategy,
      onFirstUpdate: onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: 'arrow',
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options),
      state = _usePopper.state,
      styles = _usePopper.styles,
      forceUpdate = _usePopper.forceUpdate,
      update = _usePopper.update;

  var childrenProps = React.useMemo(function () {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning$2 = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
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

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning$2.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

function Reference(_ref) {
  var children = _ref.children,
      innerRef = _ref.innerRef;
  var setReferenceNode = React.useContext(ManagerReferenceNodeSetterContext);
  var refHandler = React.useCallback(function (node) {
    setRef(innerRef, node);
    safeInvoke(setReferenceNode, node);
  }, [innerRef, setReferenceNode]); // ran on unmount

  React.useEffect(function () {
    return function () {
      return setRef(innerRef, null);
    };
  });
  React.useEffect(function () {
    warning_1(Boolean(setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
  }, [setReferenceNode]);
  return unwrapArray(children)({
    ref: refHandler
  });
}

function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n);}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){le(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}function se(e){return (se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ie(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function ce(e,t,r){return t&&ie(e.prototype,t),r&&ie(e,r),e}function le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function de(){return (de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}function ue(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t);}function he(e){return (he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return (me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,t){return !t||"object"!=typeof t&&"function"!=typeof t?fe(e):t}function ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}();return function(){var r,n=he(e);if(t){var o=he(this).constructor;r=Reflect.construct(n,arguments,o);}else r=n.apply(this,arguments);return ye(this,r)}}function De(e){return function(e){if(Array.isArray(e))return we(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return we(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ke(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function ge(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var be={p:ge,P:function(e,t){var r,n=e.match(/(P+)(p+)?/),o=n[1],a=n[2];if(!a)return ke(e,t);switch(o){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"});}return r.replace("{{date}}",ke(o,t)).replace("{{time}}",ge(a,t))}},Ce=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function _e(e){var t=e?"string"==typeof e||e instanceof String?parseISO(e):toDate(e):new Date;return Me(t)?t:null}function Se(e,t,r,n,a){var s=null,p=qe(r)||qe(Ve()),i=!0;return Array.isArray(t)?(t.forEach((function(t){var r=parse(e,t,new Date,{locale:p});n&&(i=Me(r,a)&&e===format(r,t,{awareOfUnicodeTokens:!0})),Me(r,a)&&i&&(s=r);})),s):(s=parse(e,t,new Date,{locale:p}),n?i=Me(s)&&e===format(s,t,{awareOfUnicodeTokens:!0}):Me(s)||(t=t.match(Ce).map((function(e){var t=e[0];return "p"===t||"P"===t?p?(0, be[t])(e,p.formatLong):t:e})).join(""),e.length>0&&(s=parse(e,t.slice(0,e.length),new Date)),Me(s)||(s=new Date(e))),Me(s)&&i?s:null)}function Me(e,t){return t=t||new Date("1/1/1000"),isValid(e)&&isAfter(e,t)}function Pe(e,t,r){if("en"===r)return format(e,t,{awareOfUnicodeTokens:!0});var n=qe(r);return r&&!n&&console.warn('A locale object was not found for the provided string ["'.concat(r,'"].')),!n&&Ve()&&qe(Ve())&&(n=qe(Ve())),format(e,t,{locale:n||null,awareOfUnicodeTokens:!0})}function Ee(e,t){var r=t.dateFormat,n=t.locale;return e&&Pe(e,Array.isArray(r)?r[0]:r,n)||""}function Ne(e,t){var r=t.hour,n=void 0===r?0:r,o=t.minute,a=void 0===o?0:o,s=t.second;return setHours(setMinutes(setSeconds(e,void 0===s?0:s),a),n)}function Oe(e,t){var r=t&&qe(t)||Ve()&&qe(Ve());return getISOWeek(e,r?{locale:r}:null)}function xe(e,t){return Pe(e,"ddd",t)}function Te(e){return startOfDay(e)}function Ye(e,t,r){var n=qe(t||Ve());return startOfWeek(e,{locale:n,weekStartsOn:r})}function Ie(e){return startOfMonth(e)}function Le(e){return startOfYear(e)}function Fe(e){return startOfQuarter(e)}function Re(e,t){return e&&t?isSameYear(e,t):!e&&!t}function Ae(e,t){return e&&t?isSameMonth(e,t):!e&&!t}function Be(e,t){return e&&t?isSameQuarter(e,t):!e&&!t}function We(e,t){return e&&t?isSameDay(e,t):!e&&!t}function Ke(e,t){return e&&t?isEqual(e,t):!e&&!t}function je(e,t,r){var n,o=startOfDay(t),a=endOfDay(r);try{n=isWithinInterval(e,{start:o,end:a});}catch(e){n=!1;}return n}function Ve(){return ("undefined"!=typeof window?window:global).__localeId__}function qe(e){if("string"==typeof e){var t="undefined"!=typeof window?window:global;return t.__localeData__?t.__localeData__[e]:null}return e}function Ue(e,t){return Pe(setMonth(_e(),e),"LLLL",t)}function $e(e,t){return Pe(setMonth(_e(),e),"LLL",t)}function ze(e,t){return Pe(setQuarter(_e(),e),"QQQ",t)}function Ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return nt(e,{minDate:r,maxDate:n})||o&&o.some((function(t){return We(e,t)}))||a&&!a.some((function(t){return We(e,t)}))||s&&!s(_e(e))||!1}function Je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeDates;return r&&r.some((function(t){return We(e,t)}))||!1}function Xe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return nt(e,{minDate:r,maxDate:n})||o&&o.some((function(t){return Ae(e,t)}))||a&&!a.some((function(t){return Ae(e,t)}))||s&&!s(_e(e))||!1}function Ze(e,t,r,n){var o=getYear(e),a=getMonth(e),s=getYear(t),p=getMonth(t),i=getYear(n);return o===s&&o===i?a<=r&&r<=p:o<s?i===o&&a<=r||i===s&&p>=r||i<s&&i>o:void 0}function et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return nt(e,{minDate:r,maxDate:n})||o&&o.some((function(t){return Be(e,t)}))||a&&!a.some((function(t){return Be(e,t)}))||s&&!s(_e(e))||!1}function tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=new Date(e,0,1);return nt(o,{minDate:r,maxDate:n})||!1}function rt(e,t,r,n){var o=getYear(e),a=getQuarter(e),s=getYear(t),p=getQuarter(t),i=getYear(n);return o===s&&o===i?a<=r&&r<=p:o<s?i===o&&a<=r||i===s&&p>=r||i<s&&i>o:void 0}function nt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate;return r&&differenceInCalendarDays(e,r)<0||n&&differenceInCalendarDays(e,n)>0}function ot(e,t){return t.some((function(t){return getHours(t)===getHours(e)&&getMinutes(t)===getMinutes(e)}))}function at(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeTimes,n=t.includeTimes,o=t.filterTime;return r&&ot(e,r)||n&&!ot(e,n)||o&&!o(e)||!1}function st(e,t){var r=t.minTime,n=t.maxTime;if(!r||!n)throw new Error("Both minTime and maxTime props required");var o,a=_e(),s=setHours(setMinutes(a,getMinutes(e)),getHours(e)),p=setHours(setMinutes(a,getMinutes(r)),getHours(r)),i=setHours(setMinutes(a,getMinutes(n)),getHours(n));try{o=!isWithinInterval(s,{start:p,end:i});}catch(e){o=!1;}return o}function pt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.includeDates,o=subMonths(e,1);return r&&differenceInCalendarMonths(r,o)>0||n&&n.every((function(e){return differenceInCalendarMonths(e,o)>0}))||!1}function it(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,n=t.includeDates,o=addMonths(e,1);return r&&differenceInCalendarMonths(o,r)>0||n&&n.every((function(e){return differenceInCalendarMonths(o,e)>0}))||!1}function ct(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.includeDates,o=subYears(e,1);return r&&differenceInCalendarYears(r,o)>0||n&&n.every((function(e){return differenceInCalendarYears(e,o)>0}))||!1}function lt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,n=t.includeDates,o=addYears(e,1);return r&&differenceInCalendarYears(o,r)>0||n&&n.every((function(e){return differenceInCalendarYears(o,e)>0}))||!1}function dt(e){var t=e.minDate,r=e.includeDates;if(r&&t){var n=r.filter((function(e){return differenceInCalendarDays(e,t)>=0}));return min$1(n)}return r?min$1(r):t}function ut(e){var t=e.maxDate,r=e.includeDates;if(r&&t){var n=r.filter((function(e){return differenceInCalendarDays(e,t)<=0}));return max$1(n)}return r?max$1(r):t}function ht(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"react-datepicker__day--highlighted",n=new Map,o=0,a=e.length;o<a;o++){var s=e[o];if(isDate(s)){var p=Pe(s,"MM.dd.yyyy"),i=n.get(p)||[];i.includes(t)||(i.push(t),n.set(p,i));}else if("object"===se(s)){var c=Object.keys(s),l=c[0],d=s[c[0]];if("string"==typeof l&&d.constructor===Array)for(var u=0,h=d.length;u<h;u++){var m=Pe(d[u],"MM.dd.yyyy"),f=n.get(m)||[];f.includes(l)||(f.push(l),n.set(m,f));}}}return n}function mt(e,t,r,n,o){for(var p=o.length,i=[],c=0;c<p;c++){var l=addMinutes(addHours(e,getHours(o[c])),getMinutes(o[c])),d=addMinutes(e,(r+1)*n);isAfter(l,t)&&isBefore(l,d)&&i.push(o[c]);}return i}function ft(e){return e<10?"0".concat(e):"".concat(e)}function yt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,r=Math.ceil(getYear(e)/t)*t,n=r-(t-1);return {startPeriod:n,endPeriod:r}}function vt(e,t,r,n){for(var o=[],a=0;a<2*t+1;a++){var s=e+t-a,p=!0;r&&(p=getYear(r)<=s),n&&p&&(p=getYear(n)>=s),p&&o.push(s);}return o}var Dt=onClickOutsideHOC(function(r){ue(o,React__default.Component);var n=ve(o);function o(t){var r;pe(this,o),le(fe(r=n.call(this,t)),"renderOptions",(function(){var t=r.props.year,n=r.state.yearsList.map((function(n){return React__default.createElement("div",{className:t===n?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:n,onClick:r.onChange.bind(fe(r),n)},t===n?React__default.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",n)})),o=r.props.minDate?getYear(r.props.minDate):null,a=r.props.maxDate?getYear(r.props.maxDate):null;return a&&r.state.yearsList.find((function(e){return e===a}))||n.unshift(React__default.createElement("div",{className:"react-datepicker__year-option",key:"upcoming",onClick:r.incrementYears},React__default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),o&&r.state.yearsList.find((function(e){return e===o}))||n.push(React__default.createElement("div",{className:"react-datepicker__year-option",key:"previous",onClick:r.decrementYears},React__default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),n})),le(fe(r),"onChange",(function(e){r.props.onChange(e);})),le(fe(r),"handleClickOutside",(function(){r.props.onCancel();})),le(fe(r),"shiftYears",(function(e){var t=r.state.yearsList.map((function(t){return t+e}));r.setState({yearsList:t});})),le(fe(r),"incrementYears",(function(){return r.shiftYears(1)})),le(fe(r),"decrementYears",(function(){return r.shiftYears(-1)}));var a=t.yearDropdownItemNumber,s=t.scrollableYearDropdown,p=a||(s?10:5);return r.state={yearsList:vt(r.props.year,p,r.props.minDate,r.props.maxDate)},r}return ce(o,[{key:"render",value:function(){var r=classnames({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return React__default.createElement("div",{className:r},this.renderOptions())}}]),o}()),wt=function(t){ue(n,React__default.Component);var r=ve(n);function n(){var t;pe(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return le(fe(t=r.call.apply(r,[this].concat(a))),"state",{dropdownVisible:!1}),le(fe(t),"renderSelectOptions",(function(){for(var r=t.props.minDate?getYear(t.props.minDate):1900,n=t.props.maxDate?getYear(t.props.maxDate):2100,o=[],a=r;a<=n;a++)o.push(React__default.createElement("option",{key:a,value:a},a));return o})),le(fe(t),"onSelectChange",(function(e){t.onChange(e.target.value);})),le(fe(t),"renderSelectMode",(function(){return React__default.createElement("select",{value:t.props.year,className:"react-datepicker__year-select",onChange:t.onSelectChange},t.renderSelectOptions())})),le(fe(t),"renderReadView",(function(r){return React__default.createElement("div",{key:"read",style:{visibility:r?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(e){return t.toggleDropdown(e)}},React__default.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},t.props.year))})),le(fe(t),"renderDropdown",(function(){return React__default.createElement(Dt,{key:"dropdown",year:t.props.year,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableYearDropdown:t.props.scrollableYearDropdown,yearDropdownItemNumber:t.props.yearDropdownItemNumber})})),le(fe(t),"renderScrollMode",(function(){var e=t.state.dropdownVisible,r=[t.renderReadView(!e)];return e&&r.unshift(t.renderDropdown()),r})),le(fe(t),"onChange",(function(e){t.toggleDropdown(),e!==t.props.year&&t.props.onChange(e);})),le(fe(t),"toggleDropdown",(function(e){t.setState({dropdownVisible:!t.state.dropdownVisible},(function(){t.props.adjustDateOnChange&&t.handleYearChange(t.props.date,e);}));})),le(fe(t),"handleYearChange",(function(e,r){t.onSelect(e,r),t.setOpen();})),le(fe(t),"onSelect",(function(e,r){t.props.onSelect&&t.props.onSelect(e,r);})),le(fe(t),"setOpen",(function(){t.props.setOpen&&t.props.setOpen(!0);})),t}return ce(n,[{key:"render",value:function(){var t;switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode();break;case"select":t=this.renderSelectMode();}return React__default.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),n}(),kt=onClickOutsideHOC(function(t){ue(n,React__default.Component);var r=ve(n);function n(){var t;pe(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return le(fe(t=r.call.apply(r,[this].concat(a))),"renderOptions",(function(){return t.props.monthNames.map((function(r,n){return React__default.createElement("div",{className:t.props.month===n?"react-datepicker__month-option react-datepicker__month-option--selected_month":"react-datepicker__month-option",key:r,onClick:t.onChange.bind(fe(t),n)},t.props.month===n?React__default.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",r)}))})),le(fe(t),"onChange",(function(e){return t.props.onChange(e)})),le(fe(t),"handleClickOutside",(function(){return t.props.onCancel()})),t}return ce(n,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}]),n}()),gt=function(t){ue(n,React__default.Component);var r=ve(n);function n(){var t;pe(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return le(fe(t=r.call.apply(r,[this].concat(a))),"state",{dropdownVisible:!1}),le(fe(t),"renderSelectOptions",(function(t){return t.map((function(t,r){return React__default.createElement("option",{key:r,value:r},t)}))})),le(fe(t),"renderSelectMode",(function(r){return React__default.createElement("select",{value:t.props.month,className:"react-datepicker__month-select",onChange:function(e){return t.onChange(e.target.value)}},t.renderSelectOptions(r))})),le(fe(t),"renderReadView",(function(r,n){return React__default.createElement("div",{key:"read",style:{visibility:r?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:t.toggleDropdown},React__default.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},n[t.props.month]))})),le(fe(t),"renderDropdown",(function(r){return React__default.createElement(kt,{key:"dropdown",month:t.props.month,monthNames:r,onChange:t.onChange,onCancel:t.toggleDropdown})})),le(fe(t),"renderScrollMode",(function(e){var r=t.state.dropdownVisible,n=[t.renderReadView(!r,e)];return r&&n.unshift(t.renderDropdown(e)),n})),le(fe(t),"onChange",(function(e){t.toggleDropdown(),e!==t.props.month&&t.props.onChange(e);})),le(fe(t),"toggleDropdown",(function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})})),t}return ce(n,[{key:"render",value:function(){var t,r=this,n=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(e){return $e(e,r.props.locale)}:function(e){return Ue(e,r.props.locale)});switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode(n);break;case"select":t=this.renderSelectMode(n);}return React__default.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),n}();function bt(e,t){for(var r=[],n=Ie(e),o=Ie(t);!isAfter(n,o);)r.push(_e(n)),n=addMonths(n,1);return r}var Ct=onClickOutsideHOC(function(r){ue(o,React__default.Component);var n=ve(o);function o(t){var r;return pe(this,o),le(fe(r=n.call(this,t)),"renderOptions",(function(){return r.state.monthYearsList.map((function(t){var n=getTime(t),o=Re(r.props.date,t)&&Ae(r.props.date,t);return React__default.createElement("div",{className:o?"react-datepicker__month-year-option --selected_month-year":"react-datepicker__month-year-option",key:n,onClick:r.onChange.bind(fe(r),n)},o?React__default.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",Pe(t,r.props.dateFormat,r.props.locale))}))})),le(fe(r),"onChange",(function(e){return r.props.onChange(e)})),le(fe(r),"handleClickOutside",(function(){r.props.onCancel();})),r.state={monthYearsList:bt(r.props.minDate,r.props.maxDate)},r}return ce(o,[{key:"render",value:function(){var r=classnames({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return React__default.createElement("div",{className:r},this.renderOptions())}}]),o}()),_t=function(t){ue(n,React__default.Component);var r=ve(n);function n(){var t;pe(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return le(fe(t=r.call.apply(r,[this].concat(a))),"state",{dropdownVisible:!1}),le(fe(t),"renderSelectOptions",(function(){for(var r=Ie(t.props.minDate),n=Ie(t.props.maxDate),o=[];!isAfter(r,n);){var a=getTime(r);o.push(React__default.createElement("option",{key:a,value:a},Pe(r,t.props.dateFormat,t.props.locale))),r=addMonths(r,1);}return o})),le(fe(t),"onSelectChange",(function(e){t.onChange(e.target.value);})),le(fe(t),"renderSelectMode",(function(){return React__default.createElement("select",{value:getTime(Ie(t.props.date)),className:"react-datepicker__month-year-select",onChange:t.onSelectChange},t.renderSelectOptions())})),le(fe(t),"renderReadView",(function(r){var n=Pe(t.props.date,t.props.dateFormat,t.props.locale);return React__default.createElement("div",{key:"read",style:{visibility:r?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(e){return t.toggleDropdown(e)}},React__default.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},n))})),le(fe(t),"renderDropdown",(function(){return React__default.createElement(Ct,{key:"dropdown",date:t.props.date,dateFormat:t.props.dateFormat,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableMonthYearDropdown:t.props.scrollableMonthYearDropdown,locale:t.props.locale})})),le(fe(t),"renderScrollMode",(function(){var e=t.state.dropdownVisible,r=[t.renderReadView(!e)];return e&&r.unshift(t.renderDropdown()),r})),le(fe(t),"onChange",(function(e){t.toggleDropdown();var r=_e(parseInt(e));Re(t.props.date,r)&&Ae(t.props.date,r)||t.props.onChange(r);})),le(fe(t),"toggleDropdown",(function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})})),t}return ce(n,[{key:"render",value:function(){var t;switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode();break;case"select":t=this.renderSelectMode();}return React__default.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),n}(),St=function(r){ue(o,React__default.Component);var n=ve(o);function o(){var r;pe(this,o);for(var a=arguments.length,s=new Array(a),p=0;p<a;p++)s[p]=arguments[p];return le(fe(r=n.call.apply(n,[this].concat(s))),"dayEl",React__default.createRef()),le(fe(r),"handleClick",(function(e){!r.isDisabled()&&r.props.onClick&&r.props.onClick(e);})),le(fe(r),"handleMouseEnter",(function(e){!r.isDisabled()&&r.props.onMouseEnter&&r.props.onMouseEnter(e);})),le(fe(r),"handleOnKeyDown",(function(e){" "===e.key&&(e.preventDefault(),e.key="Enter"),r.props.handleOnKeyDown(e);})),le(fe(r),"isSameDay",(function(e){return We(r.props.day,e)})),le(fe(r),"isKeyboardSelected",(function(){return !r.props.disabledKeyboardNavigation&&!r.isSameDay(r.props.selected)&&r.isSameDay(r.props.preSelection)})),le(fe(r),"isDisabled",(function(){return Ge(r.props.day,r.props)})),le(fe(r),"isExcluded",(function(){return Je(r.props.day,r.props)})),le(fe(r),"getHighLightedClass",(function(e){var t=r.props,n=t.day,o=t.highlightDates;if(!o)return !1;var a=Pe(n,"MM.dd.yyyy");return o.get(a)})),le(fe(r),"isInRange",(function(){var e=r.props,t=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&je(t,n,o)})),le(fe(r),"isInSelectingRange",(function(){var e,t=r.props,n=t.day,o=t.selectsStart,a=t.selectsEnd,s=t.selectsRange,p=t.startDate,i=t.endDate,c=null!==(e=r.props.selectingDate)&&void 0!==e?e:r.props.preSelection;return !(!(o||a||s)||!c||r.isDisabled())&&(o&&i&&(isBefore(c,i)||Ke(c,i))?je(n,c,i):(a&&p&&(isAfter(c,p)||Ke(c,p))||!(!s||!p||i||!isAfter(c,p)&&!Ke(c,p)))&&je(n,p,c))})),le(fe(r),"isSelectingRangeStart",(function(){var e;if(!r.isInSelectingRange())return !1;var t=r.props,n=t.day,o=t.startDate,a=t.selectsStart,s=null!==(e=r.props.selectingDate)&&void 0!==e?e:r.props.preSelection;return We(n,a?s:o)})),le(fe(r),"isSelectingRangeEnd",(function(){var e;if(!r.isInSelectingRange())return !1;var t=r.props,n=t.day,o=t.endDate,a=t.selectsEnd,s=null!==(e=r.props.selectingDate)&&void 0!==e?e:r.props.preSelection;return We(n,a?s:o)})),le(fe(r),"isRangeStart",(function(){var e=r.props,t=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&We(n,t)})),le(fe(r),"isRangeEnd",(function(){var e=r.props,t=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&We(o,t)})),le(fe(r),"isWeekend",(function(){var e=getDay(r.props.day);return 0===e||6===e})),le(fe(r),"isOutsideMonth",(function(){return void 0!==r.props.month&&r.props.month!==getMonth(r.props.day)})),le(fe(r),"getClassNames",(function(e){var n=r.props.dayClassName?r.props.dayClassName(e):void 0;return classnames("react-datepicker__day",n,"react-datepicker__day--"+xe(r.props.day),{"react-datepicker__day--disabled":r.isDisabled(),"react-datepicker__day--excluded":r.isExcluded(),"react-datepicker__day--selected":r.isSameDay(r.props.selected),"react-datepicker__day--keyboard-selected":r.isKeyboardSelected(),"react-datepicker__day--range-start":r.isRangeStart(),"react-datepicker__day--range-end":r.isRangeEnd(),"react-datepicker__day--in-range":r.isInRange(),"react-datepicker__day--in-selecting-range":r.isInSelectingRange(),"react-datepicker__day--selecting-range-start":r.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":r.isSelectingRangeEnd(),"react-datepicker__day--today":r.isSameDay(_e()),"react-datepicker__day--weekend":r.isWeekend(),"react-datepicker__day--outside-month":r.isOutsideMonth()},r.getHighLightedClass("react-datepicker__day--highlighted"))})),le(fe(r),"getAriaLabel",(function(){var e=r.props,t=e.day,n=e.ariaLabelPrefixWhenEnabled,o=void 0===n?"Choose":n,a=e.ariaLabelPrefixWhenDisabled,s=void 0===a?"Not available":a,p=r.isDisabled()||r.isExcluded()?s:o;return "".concat(p," ").concat(Pe(t,"PPPP",r.props.locale))})),le(fe(r),"getTabIndex",(function(e,t){var n=e||r.props.selected,o=t||r.props.preSelection;return r.isKeyboardSelected()||r.isSameDay(n)&&We(o,n)?0:-1})),le(fe(r),"handleFocusDay",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!1;0===r.getTabIndex()&&!e.isInputFocused&&r.isSameDay(r.props.preSelection)&&(document.activeElement&&document.activeElement!==document.body||(t=!0),r.props.inline&&!r.props.shouldFocusDayInline&&(t=!1),r.props.containerRef&&r.props.containerRef.current&&r.props.containerRef.current.contains(document.activeElement)&&document.activeElement.classList.contains("react-datepicker__day")&&(t=!0)),t&&r.dayEl.current.focus({preventScroll:!0});})),le(fe(r),"renderDayContents",(function(){if(r.isOutsideMonth()){if(r.props.monthShowsDuplicateDaysEnd&&getDate(r.props.day)<10)return null;if(r.props.monthShowsDuplicateDaysStart&&getDate(r.props.day)>20)return null}return r.props.renderDayContents?r.props.renderDayContents(getDate(r.props.day),r.props.day):getDate(r.props.day)})),le(fe(r),"render",(function(){return React__default.createElement("div",{ref:r.dayEl,className:r.getClassNames(r.props.day),onKeyDown:r.handleOnKeyDown,onClick:r.handleClick,onMouseEnter:r.handleMouseEnter,tabIndex:r.getTabIndex(),"aria-label":r.getAriaLabel(),role:"button","aria-disabled":r.isDisabled()},r.renderDayContents())})),r}return ce(o,[{key:"componentDidMount",value:function(){this.handleFocusDay();}},{key:"componentDidUpdate",value:function(e){this.handleFocusDay(e);}}]),o}(),Mt=function(r){ue(o,React__default.Component);var n=ve(o);function o(){var e;pe(this,o);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return le(fe(e=n.call.apply(n,[this].concat(r))),"handleClick",(function(t){e.props.onClick&&e.props.onClick(t);})),e}return ce(o,[{key:"render",value:function(){var r=this.props,n=r.weekNumber,o=r.ariaLabelPrefix,a=void 0===o?"week ":o,s={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!r.onClick};return React__default.createElement("div",{className:classnames(s),"aria-label":"".concat(a," ").concat(this.props.weekNumber),onClick:this.handleClick},n)}}]),o}(),Pt=function(t){ue(n,React__default.Component);var r=ve(n);function n(){var t;pe(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return le(fe(t=r.call.apply(r,[this].concat(a))),"handleDayClick",(function(e,r){t.props.onDayClick&&t.props.onDayClick(e,r);})),le(fe(t),"handleDayMouseEnter",(function(e){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(e);})),le(fe(t),"handleWeekClick",(function(e,r,n){"function"==typeof t.props.onWeekSelect&&t.props.onWeekSelect(e,r,n),t.props.shouldCloseOnSelect&&t.props.setOpen(!1);})),le(fe(t),"formatWeekNumber",(function(e){return t.props.formatWeekNumber?t.props.formatWeekNumber(e):Oe(e)})),le(fe(t),"renderDays",(function(){var r=Ye(t.props.day,t.props.locale,t.props.calendarStartDay),n=[],o=t.formatWeekNumber(r);if(t.props.showWeekNumber){var a=t.props.onWeekSelect?t.handleWeekClick.bind(fe(t),r,o):void 0;n.push(React__default.createElement(Mt,{key:"W",weekNumber:o,onClick:a,ariaLabelPrefix:t.props.ariaLabelPrefix}));}return n.concat([0,1,2,3,4,5,6].map((function(n){var o=addDays(r,n);return React__default.createElement(St,{ariaLabelPrefixWhenEnabled:t.props.chooseDayAriaLabelPrefix,ariaLabelPrefixWhenDisabled:t.props.disabledDayAriaLabelPrefix,key:o.valueOf(),day:o,month:t.props.month,onClick:t.handleDayClick.bind(fe(t),o),onMouseEnter:t.handleDayMouseEnter.bind(fe(t),o),minDate:t.props.minDate,maxDate:t.props.maxDate,excludeDates:t.props.excludeDates,includeDates:t.props.includeDates,highlightDates:t.props.highlightDates,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:t.props.preSelection,selected:t.props.selected,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,renderDayContents:t.props.renderDayContents,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart,locale:t.props.locale})})))})),t}return ce(n,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__week"},this.renderDays())}}],[{key:"defaultProps",get:function(){return {shouldCloseOnSelect:!0}}}]),n}(),Et=function(r){ue(o,React__default.Component);var n=ve(o);function o(){var r;pe(this,o);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return le(fe(r=n.call.apply(n,[this].concat(s))),"MONTH_REFS",De(Array(12)).map((function(){return React__default.createRef()}))),le(fe(r),"isDisabled",(function(e){return Ge(e,r.props)})),le(fe(r),"isExcluded",(function(e){return Je(e,r.props)})),le(fe(r),"handleDayClick",(function(e,t){r.props.onDayClick&&r.props.onDayClick(e,t,r.props.orderInDisplay);})),le(fe(r),"handleDayMouseEnter",(function(e){r.props.onDayMouseEnter&&r.props.onDayMouseEnter(e);})),le(fe(r),"handleMouseLeave",(function(){r.props.onMouseLeave&&r.props.onMouseLeave();})),le(fe(r),"isRangeStartMonth",(function(e){var t=r.props,n=t.day,o=t.startDate,a=t.endDate;return !(!o||!a)&&Ae(setMonth(n,e),o)})),le(fe(r),"isRangeStartQuarter",(function(e){var t=r.props,n=t.day,o=t.startDate,a=t.endDate;return !(!o||!a)&&Be(setQuarter(n,e),o)})),le(fe(r),"isRangeEndMonth",(function(e){var t=r.props,n=t.day,o=t.startDate,a=t.endDate;return !(!o||!a)&&Ae(setMonth(n,e),a)})),le(fe(r),"isRangeEndQuarter",(function(e){var t=r.props,n=t.day,o=t.startDate,a=t.endDate;return !(!o||!a)&&Be(setQuarter(n,e),a)})),le(fe(r),"isWeekInMonth",(function(e){var t=r.props.day,n=addDays(e,6);return Ae(e,t)||Ae(n,t)})),le(fe(r),"renderWeeks",(function(){for(var t=[],n=r.props.fixedHeight,o=0,a=!1,s=Ye(Ie(r.props.day),r.props.locale,r.props.calendarStartDay);t.push(React__default.createElement(Pt,{ariaLabelPrefix:r.props.weekAriaLabelPrefix,chooseDayAriaLabelPrefix:r.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:r.props.disabledDayAriaLabelPrefix,key:o,day:s,month:getMonth(r.props.day),onDayClick:r.handleDayClick,onDayMouseEnter:r.handleDayMouseEnter,onWeekSelect:r.props.onWeekSelect,formatWeekNumber:r.props.formatWeekNumber,locale:r.props.locale,minDate:r.props.minDate,maxDate:r.props.maxDate,excludeDates:r.props.excludeDates,includeDates:r.props.includeDates,inline:r.props.inline,shouldFocusDayInline:r.props.shouldFocusDayInline,highlightDates:r.props.highlightDates,selectingDate:r.props.selectingDate,filterDate:r.props.filterDate,preSelection:r.props.preSelection,selected:r.props.selected,selectsStart:r.props.selectsStart,selectsEnd:r.props.selectsEnd,selectsRange:r.props.selectsRange,showWeekNumber:r.props.showWeekNumbers,startDate:r.props.startDate,endDate:r.props.endDate,dayClassName:r.props.dayClassName,setOpen:r.props.setOpen,shouldCloseOnSelect:r.props.shouldCloseOnSelect,disabledKeyboardNavigation:r.props.disabledKeyboardNavigation,renderDayContents:r.props.renderDayContents,handleOnKeyDown:r.props.handleOnKeyDown,isInputFocused:r.props.isInputFocused,containerRef:r.props.containerRef,calendarStartDay:r.props.calendarStartDay,monthShowsDuplicateDaysEnd:r.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:r.props.monthShowsDuplicateDaysStart})),!a;){o++,s=addWeeks(s,1);var p=n&&o>=6,c=!n&&!r.isWeekInMonth(s);if(p||c){if(!r.props.peekNextMonth)break;a=!0;}}return t})),le(fe(r),"onMonthClick",(function(e,t){r.handleDayClick(Ie(setMonth(r.props.day,t)),e);})),le(fe(r),"handleMonthNavigation",(function(e,t){r.isDisabled(t)||r.isExcluded(t)||(r.props.setPreSelection(t),r.MONTH_REFS[e].current&&r.MONTH_REFS[e].current.focus());})),le(fe(r),"onMonthKeyDown",(function(e,t){var n=e.key;if(!r.props.disabledKeyboardNavigation)switch(n){case"Enter":r.onMonthClick(e,t),r.props.setPreSelection(r.props.selected);break;case"ArrowRight":r.handleMonthNavigation(11===t?0:t+1,addMonths(r.props.preSelection,1));break;case"ArrowLeft":r.handleMonthNavigation(0===t?11:t-1,subMonths(r.props.preSelection,1));}})),le(fe(r),"onQuarterClick",(function(e,t){r.handleDayClick(Fe(setQuarter(r.props.day,t)),e);})),le(fe(r),"getMonthClassNames",(function(e){var n=r.props,o=n.day,a=n.startDate,s=n.endDate,p=n.selected,i=n.minDate,c=n.maxDate,l=n.preSelection,d=n.monthClassName,u=d?d(o):void 0;return classnames("react-datepicker__month-text","react-datepicker__month-".concat(e),u,{"react-datepicker__month--disabled":(i||c)&&Xe(setMonth(o,e),r.props),"react-datepicker__month--selected":getMonth(o)===e&&getYear(o)===getYear(p),"react-datepicker__month-text--keyboard-selected":getMonth(l)===e,"react-datepicker__month--in-range":Ze(a,s,e,o),"react-datepicker__month--range-start":r.isRangeStartMonth(e),"react-datepicker__month--range-end":r.isRangeEndMonth(e)})})),le(fe(r),"getTabIndex",(function(e){var t=getMonth(r.props.preSelection);return r.props.disabledKeyboardNavigation||e!==t?"-1":"0"})),le(fe(r),"getAriaLabel",(function(e){var t=r.props,n=t.ariaLabelPrefix,o=void 0===n?"Choose":n,a=t.disabledDayAriaLabelPrefix,s=void 0===a?"Not available":a,p=t.day,i=setMonth(p,e),c=r.isDisabled(i)||r.isExcluded(i)?s:o;return "".concat(c," ").concat(Pe(i,"MMMM yyyy"))})),le(fe(r),"getQuarterClassNames",(function(e){var n=r.props,o=n.day,a=n.startDate,s=n.endDate,p=n.selected,i=n.minDate,c=n.maxDate;return classnames("react-datepicker__quarter-text","react-datepicker__quarter-".concat(e),{"react-datepicker__quarter--disabled":(i||c)&&et(setQuarter(o,e),r.props),"react-datepicker__quarter--selected":getQuarter(o)===e&&getYear(o)===getYear(p),"react-datepicker__quarter--in-range":rt(a,s,e,o),"react-datepicker__quarter--range-start":r.isRangeStartQuarter(e),"react-datepicker__quarter--range-end":r.isRangeEndQuarter(e)})})),le(fe(r),"renderMonths",(function(){var t=r.props,n=t.showFullMonthYearPicker,o=t.showTwoColumnMonthYearPicker,a=t.showFourColumnMonthYearPicker,s=t.locale;return (a?[[0,1,2,3],[4,5,6,7],[8,9,10,11]]:o?[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]]:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]]).map((function(t,o){return React__default.createElement("div",{className:"react-datepicker__month-wrapper",key:o},t.map((function(t,o){return React__default.createElement("div",{ref:r.MONTH_REFS[t],key:o,onClick:function(e){r.onMonthClick(e,t);},onKeyDown:function(e){r.onMonthKeyDown(e,t);},tabIndex:r.getTabIndex(t),className:r.getMonthClassNames(t),role:"button","aria-label":r.getAriaLabel(t)},n?Ue(t,s):$e(t,s))})))}))})),le(fe(r),"renderQuarters",(function(){return React__default.createElement("div",{className:"react-datepicker__quarter-wrapper"},[1,2,3,4].map((function(t,n){return React__default.createElement("div",{key:n,onClick:function(e){r.onQuarterClick(e,t);},className:r.getQuarterClassNames(t)},ze(t,r.props.locale))})))})),le(fe(r),"getClassNames",(function(){var e=r.props;e.day;var n=e.selectingDate,o=e.selectsStart,a=e.selectsEnd,s=e.showMonthYearPicker,p=e.showQuarterYearPicker;return classnames("react-datepicker__month",{"react-datepicker__month--selecting-range":n&&(o||a)},{"react-datepicker__monthPicker":s},{"react-datepicker__quarterPicker":p})})),r}return ce(o,[{key:"render",value:function(){var t=this.props,r=t.showMonthYearPicker,n=t.showQuarterYearPicker,o=t.day,a=t.ariaLabelPrefix,s=void 0===a?"month ":a;return React__default.createElement("div",{className:this.getClassNames(),onMouseLeave:this.handleMouseLeave,"aria-label":"".concat(s," ").concat(Pe(o,"yyyy-MM"))},r?this.renderMonths():n?this.renderQuarters():this.renderWeeks())}}]),o}(),Nt=function(t){ue(n,React__default.Component);var r=ve(n);function n(){var t;pe(this,n);for(var o=arguments.length,s=new Array(o),p=0;p<o;p++)s[p]=arguments[p];return le(fe(t=r.call.apply(r,[this].concat(s))),"state",{height:null}),le(fe(t),"handleClick",(function(e){(t.props.minTime||t.props.maxTime)&&st(e,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&at(e,t.props)||t.props.onChange(e);})),le(fe(t),"liClasses",(function(e,r,n){var o=["react-datepicker__time-list-item",t.props.timeClassName?t.props.timeClassName(e,r,n):void 0];return t.props.selected&&r===getHours(e)&&n===getMinutes(e)&&o.push("react-datepicker__time-list-item--selected"),((t.props.minTime||t.props.maxTime)&&st(e,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&at(e,t.props))&&o.push("react-datepicker__time-list-item--disabled"),t.props.injectTimes&&(60*getHours(e)+getMinutes(e))%t.props.intervals!=0&&o.push("react-datepicker__time-list-item--injected"),o.join(" ")})),le(fe(t),"handleOnKeyDown",(function(e,r){" "===e.key&&(e.preventDefault(),e.key="Enter"),"Enter"===e.key&&t.handleClick(r),t.props.handleOnKeyDown(e);})),le(fe(t),"renderTimes",(function(){for(var r=[],n=t.props.format?t.props.format:"p",o=t.props.intervals,s=Te(_e(t.props.selected)),p=1440/o,i=t.props.injectTimes&&t.props.injectTimes.sort((function(e,t){return e-t})),c=t.props.selected||t.props.openToDate||_e(),l=getHours(c),d=getMinutes(c),u=setHours(setMinutes(s,d),l),h=0;h<p;h++){var m=addMinutes(s,h*o);if(r.push(m),i){var f=mt(s,m,h,o,i);r=r.concat(f);}}return r.map((function(r,o){return React__default.createElement("li",{key:o,onClick:t.handleClick.bind(fe(t),r),className:t.liClasses(r,l,d),ref:function(e){(isBefore(r,u)||Ke(r,u))&&(t.centerLi=e);},onKeyDown:function(e){t.handleOnKeyDown(e,r);},tabIndex:"0"},Pe(r,n,t.props.locale))}))})),t}return ce(n,[{key:"componentDidMount",value:function(){this.list.scrollTop=n.calcCenterPosition(this.props.monthRef?this.props.monthRef.clientHeight-this.header.clientHeight:this.list.clientHeight,this.centerLi),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight});}},{key:"render",value:function(){var t=this,r=this.state.height;return React__default.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},React__default.createElement("div",{className:"react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly?"react-datepicker__header--time--only":""),ref:function(e){t.header=e;}},React__default.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),React__default.createElement("div",{className:"react-datepicker__time"},React__default.createElement("div",{className:"react-datepicker__time-box"},React__default.createElement("ul",{className:"react-datepicker__time-list",ref:function(e){t.list=e;},style:r?{height:r}:{},tabIndex:"0"},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return {intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}]),n}();le(Nt,"calcCenterPosition",(function(e,t){return t.offsetTop-(e/2-t.clientHeight/2)}));var Ot=function(r){ue(o,React__default.Component);var n=ve(o);function o(e){var r;return pe(this,o),le(fe(r=n.call(this,e)),"handleYearClick",(function(e,t){r.props.onDayClick&&r.props.onDayClick(e,t);})),le(fe(r),"isSameDay",(function(e,t){return We(e,t)})),le(fe(r),"isKeyboardSelected",(function(e){var t=Le(setYear(r.props.date,e));return !r.props.disabledKeyboardNavigation&&!r.props.inline&&!We(t,Le(r.props.selected))&&We(t,Le(r.props.preSelection))})),le(fe(r),"onYearClick",(function(e,t){var n=r.props.date;r.handleYearClick(Le(setYear(n,t)),e);})),le(fe(r),"getYearClassNames",(function(e){var n=r.props,o=n.minDate,a=n.maxDate,s=n.selected;return classnames("react-datepicker__year-text",{"react-datepicker__year-text--selected":e===getYear(s),"react-datepicker__year-text--disabled":(o||a)&&tt(e,r.props),"react-datepicker__year-text--keyboard-selected":r.isKeyboardSelected(e),"react-datepicker__year-text--today":e===getYear(_e())})})),r}return ce(o,[{key:"render",value:function(){for(var t=this,r=[],n=this.props,o=yt(n.date,n.yearItemNumber),a=o.startPeriod,s=o.endPeriod,p=function(n){r.push(React__default.createElement("div",{onClick:function(e){t.onYearClick(e,n);},className:t.getYearClassNames(n),key:n},n));},i=a;i<=s;i++)p(i);return React__default.createElement("div",{className:"react-datepicker__year"},React__default.createElement("div",{className:"react-datepicker__year-wrapper"},r))}}]),o}(),xt=function(t){ue(n,React__default.Component);var r=ve(n);function n(t){var o;return pe(this,n),le(fe(o=r.call(this,t)),"onTimeChange",(function(e){o.setState({time:e});var t=new Date;t.setHours(e.split(":")[0]),t.setMinutes(e.split(":")[1]),o.props.onChange(t);})),le(fe(o),"renderTimeInput",(function(){var t=o.state.time,r=o.props,n=r.date,a=r.timeString,s=r.customTimeInput;return s?React__default.cloneElement(s,{date:n,value:t,onChange:o.onTimeChange}):React__default.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:t,onChange:function(e){o.onTimeChange(e.target.value||a);}})})),o.state={time:o.props.timeString},o}return ce(n,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__input-time-container"},React__default.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),React__default.createElement("div",{className:"react-datepicker-time__input-container"},React__default.createElement("div",{className:"react-datepicker-time__input"},this.renderTimeInput())))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.timeString!==t.time?{time:e.timeString}:null}}]),n}();function Tt(t){var r=t.className,n=t.children,o=t.showPopperArrow,a=t.arrowProps,s=void 0===a?{}:a;return React__default.createElement("div",{className:r},o&&React__default.createElement("div",de({className:"react-datepicker__triangle"},s)),n)}var Yt=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],It=function(r){ue(o,React__default.Component);var n=ve(o);function o(r){var a;return pe(this,o),le(fe(a=n.call(this,r)),"handleClickOutside",(function(e){a.props.onClickOutside(e);})),le(fe(a),"setClickOutsideRef",(function(){return a.containerRef.current})),le(fe(a),"handleDropdownFocus",(function(e){(function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).className||"").split(/\s+/);return Yt.some((function(t){return e.indexOf(t)>=0}))})(e.target)&&a.props.onDropdownFocus();})),le(fe(a),"getDateInView",(function(){var e=a.props,t=e.preSelection,r=e.selected,n=e.openToDate,o=dt(a.props),s=ut(a.props),p=_e(),i=n||r||t;return i||(o&&isBefore(p,o)?o:s&&isAfter(p,s)?s:p)})),le(fe(a),"increaseMonth",(function(){a.setState((function(e){var t=e.date;return {date:addMonths(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}));})),le(fe(a),"decreaseMonth",(function(){a.setState((function(e){var t=e.date;return {date:subMonths(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}));})),le(fe(a),"handleDayClick",(function(e,t,r){a.props.onSelect(e,t,r),a.props.setPreSelection&&a.props.setPreSelection(e);})),le(fe(a),"handleDayMouseEnter",(function(e){a.setState({selectingDate:e}),a.props.onDayMouseEnter&&a.props.onDayMouseEnter(e);})),le(fe(a),"handleMonthMouseLeave",(function(){a.setState({selectingDate:null}),a.props.onMonthMouseLeave&&a.props.onMonthMouseLeave();})),le(fe(a),"handleYearChange",(function(e){a.props.onYearChange&&a.props.onYearChange(e),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e);})),le(fe(a),"handleMonthChange",(function(e){a.props.onMonthChange&&a.props.onMonthChange(e),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e);})),le(fe(a),"handleMonthYearChange",(function(e){a.handleYearChange(e),a.handleMonthChange(e);})),le(fe(a),"changeYear",(function(e){a.setState((function(t){var r=t.date;return {date:setYear(r,e)}}),(function(){return a.handleYearChange(a.state.date)}));})),le(fe(a),"changeMonth",(function(e){a.setState((function(t){var r=t.date;return {date:setMonth(r,e)}}),(function(){return a.handleMonthChange(a.state.date)}));})),le(fe(a),"changeMonthYear",(function(e){a.setState((function(t){var r=t.date;return {date:setYear(setMonth(r,getMonth(e)),getYear(e))}}),(function(){return a.handleMonthYearChange(a.state.date)}));})),le(fe(a),"header",(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,n=Ye(r,a.props.locale,a.props.calendarStartDay),o=[];return a.props.showWeekNumbers&&o.push(React__default.createElement("div",{key:"W",className:"react-datepicker__day-name"},a.props.weekLabel||"#")),o.concat([0,1,2,3,4,5,6].map((function(r){var o=addDays(n,r),s=a.formatWeekday(o,a.props.locale),i=a.props.weekDayClassName?a.props.weekDayClassName(o):void 0;return React__default.createElement("div",{key:r,className:classnames("react-datepicker__day-name",i)},s)})))})),le(fe(a),"formatWeekday",(function(e,t){return a.props.formatWeekDay?function(e,t,r){return t(Pe(e,"EEEE",r))}(e,a.props.formatWeekDay,t):a.props.useWeekdaysShort?function(e,t){return Pe(e,"EEE",t)}(e,t):function(e,t){return Pe(e,"EEEEEE",t)}(e,t)})),le(fe(a),"decreaseYear",(function(){a.setState((function(e){var t=e.date;return {date:subYears(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}));})),le(fe(a),"renderPreviousButton",(function(){if(!a.props.renderCustomHeader){var t;switch(!0){case a.props.showMonthYearPicker:t=ct(a.state.date,a.props);break;case a.props.showYearPicker:t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.yearItemNumber,o=void 0===n?12:n,a=yt(Le(subYears(e,o)),o).endPeriod,s=r&&getYear(r);return s&&s>a||!1}(a.state.date,a.props);break;default:t=pt(a.state.date,a.props);}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!t)&&!a.props.showTimeSelectOnly){var r=["react-datepicker__navigation","react-datepicker__navigation--previous"],n=a.decreaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(n=a.decreaseYear),t&&a.props.showDisabledMonthNavigation&&(r.push("react-datepicker__navigation--previous--disabled"),n=null);var o=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,s=a.props,p=s.previousMonthAriaLabel,i=void 0===p?"Previous Month":p,c=s.previousYearAriaLabel,l=void 0===c?"Previous Year":c;return React__default.createElement("button",{type:"button",className:r.join(" "),onClick:n,"aria-label":o?l:i},React__default.createElement("span",{className:["react-datepicker__navigation-icon","react-datepicker__navigation-icon--previous"].join(" ")},o?a.props.previousYearButtonLabel:a.props.previousMonthButtonLabel))}}})),le(fe(a),"increaseYear",(function(){a.setState((function(e){var t=e.date;return {date:addYears(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}));})),le(fe(a),"renderNextButton",(function(){if(!a.props.renderCustomHeader){var t;switch(!0){case a.props.showMonthYearPicker:t=lt(a.state.date,a.props);break;case a.props.showYearPicker:t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,n=t.yearItemNumber,o=void 0===n?12:n,a=yt(addYears(e,o),o).startPeriod,s=r&&getYear(r);return s&&s<a||!1}(a.state.date,a.props);break;default:t=it(a.state.date,a.props);}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!t)&&!a.props.showTimeSelectOnly){var r=["react-datepicker__navigation","react-datepicker__navigation--next"];a.props.showTimeSelect&&r.push("react-datepicker__navigation--next--with-time"),a.props.todayButton&&r.push("react-datepicker__navigation--next--with-today-button");var n=a.increaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(n=a.increaseYear),t&&a.props.showDisabledMonthNavigation&&(r.push("react-datepicker__navigation--next--disabled"),n=null);var o=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,s=a.props,p=s.nextMonthAriaLabel,i=void 0===p?"Next Month":p,c=s.nextYearAriaLabel,d=void 0===c?"Next Year":c;return React__default.createElement("button",{type:"button",className:r.join(" "),onClick:n,"aria-label":o?d:i},React__default.createElement("span",{className:["react-datepicker__navigation-icon","react-datepicker__navigation-icon--next"].join(" ")},o?a.props.nextYearButtonLabel:a.props.nextMonthButtonLabel))}}})),le(fe(a),"renderCurrentMonth",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,r=["react-datepicker__current-month"];return a.props.showYearDropdown&&r.push("react-datepicker__current-month--hasYearDropdown"),a.props.showMonthDropdown&&r.push("react-datepicker__current-month--hasMonthDropdown"),a.props.showMonthYearDropdown&&r.push("react-datepicker__current-month--hasMonthYearDropdown"),React__default.createElement("div",{className:r.join(" ")},Pe(t,a.props.dateFormat,a.props.locale))})),le(fe(a),"renderYearDropdown",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showYearDropdown&&!t)return React__default.createElement(wt,{adjustDateOnChange:a.props.adjustDateOnChange,date:a.state.date,onSelect:a.props.onSelect,setOpen:a.props.setOpen,dropdownMode:a.props.dropdownMode,onChange:a.changeYear,minDate:a.props.minDate,maxDate:a.props.maxDate,year:getYear(a.state.date),scrollableYearDropdown:a.props.scrollableYearDropdown,yearDropdownItemNumber:a.props.yearDropdownItemNumber})})),le(fe(a),"renderMonthDropdown",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthDropdown&&!t)return React__default.createElement(gt,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,onChange:a.changeMonth,month:getMonth(a.state.date),useShortMonthInDropdown:a.props.useShortMonthInDropdown})})),le(fe(a),"renderMonthYearDropdown",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthYearDropdown&&!t)return React__default.createElement(_t,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,dateFormat:a.props.dateFormat,onChange:a.changeMonthYear,minDate:a.props.minDate,maxDate:a.props.maxDate,date:a.state.date,scrollableMonthYearDropdown:a.props.scrollableMonthYearDropdown})})),le(fe(a),"renderTodayButton",(function(){if(a.props.todayButton&&!a.props.showTimeSelectOnly)return React__default.createElement("div",{className:"react-datepicker__today-button",onClick:function(e){return a.props.onSelect(startOfDay(_e()),e)}},a.props.todayButton)})),le(fe(a),"renderDefaultHeader",(function(t){var r=t.monthDate,n=t.i;return React__default.createElement("div",{className:"react-datepicker__header ".concat(a.props.showTimeSelect?"react-datepicker__header--has-time-select":"")},a.renderCurrentMonth(r),React__default.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(a.props.dropdownMode),onFocus:a.handleDropdownFocus},a.renderMonthDropdown(0!==n),a.renderMonthYearDropdown(0!==n),a.renderYearDropdown(0!==n)),React__default.createElement("div",{className:"react-datepicker__day-names"},a.header(r)))})),le(fe(a),"renderCustomHeader",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.monthDate,n=t.i;if(a.props.showTimeSelect&&!a.state.monthContainer||a.props.showTimeSelectOnly)return null;var o=pt(a.state.date,a.props),s=it(a.state.date,a.props),p=ct(a.state.date,a.props),i=lt(a.state.date,a.props),c=!a.props.showMonthYearPicker&&!a.props.showQuarterYearPicker&&!a.props.showYearPicker;return React__default.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:a.props.onDropdownFocus},a.props.renderCustomHeader(ae(ae({},a.state),{},{customHeaderCount:n,monthDate:r,changeMonth:a.changeMonth,changeYear:a.changeYear,decreaseMonth:a.decreaseMonth,increaseMonth:a.increaseMonth,decreaseYear:a.decreaseYear,increaseYear:a.increaseYear,prevMonthButtonDisabled:o,nextMonthButtonDisabled:s,prevYearButtonDisabled:p,nextYearButtonDisabled:i})),c&&React__default.createElement("div",{className:"react-datepicker__day-names"},a.header(r)))})),le(fe(a),"renderYearHeader",(function(){var t=a.state.date,r=a.props,n=r.showYearPicker,o=yt(t,r.yearItemNumber),s=o.startPeriod,p=o.endPeriod;return React__default.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},n?"".concat(s," - ").concat(p):getYear(t))})),le(fe(a),"renderHeader",(function(e){switch(!0){case void 0!==a.props.renderCustomHeader:return a.renderCustomHeader(e);case a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker:return a.renderYearHeader(e);default:return a.renderDefaultHeader(e)}})),le(fe(a),"renderMonths",(function(){if(!a.props.showTimeSelectOnly&&!a.props.showYearPicker){for(var t=[],r=a.props.showPreviousMonths?a.props.monthsShown-1:0,n=subMonths(a.state.date,r),o=0;o<a.props.monthsShown;++o){var s=o-a.props.monthSelectedIn,p=addMonths(n,s),i="month-".concat(o),l=o<a.props.monthsShown-1,d=o>0;t.push(React__default.createElement("div",{key:i,ref:function(e){a.monthContainer=e;},className:"react-datepicker__month-container"},a.renderHeader({monthDate:p,i:o}),React__default.createElement(Et,{chooseDayAriaLabelPrefix:a.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:a.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:a.props.weekAriaLabelPrefix,onChange:a.changeMonthYear,day:p,dayClassName:a.props.dayClassName,calendarStartDay:a.props.calendarStartDay,monthClassName:a.props.monthClassName,onDayClick:a.handleDayClick,handleOnKeyDown:a.props.handleOnKeyDown,onDayMouseEnter:a.handleDayMouseEnter,onMouseLeave:a.handleMonthMouseLeave,onWeekSelect:a.props.onWeekSelect,orderInDisplay:o,formatWeekNumber:a.props.formatWeekNumber,locale:a.props.locale,minDate:a.props.minDate,maxDate:a.props.maxDate,excludeDates:a.props.excludeDates,highlightDates:a.props.highlightDates,selectingDate:a.state.selectingDate,includeDates:a.props.includeDates,inline:a.props.inline,shouldFocusDayInline:a.props.shouldFocusDayInline,fixedHeight:a.props.fixedHeight,filterDate:a.props.filterDate,preSelection:a.props.preSelection,setPreSelection:a.props.setPreSelection,selected:a.props.selected,selectsStart:a.props.selectsStart,selectsEnd:a.props.selectsEnd,selectsRange:a.props.selectsRange,showWeekNumbers:a.props.showWeekNumbers,startDate:a.props.startDate,endDate:a.props.endDate,peekNextMonth:a.props.peekNextMonth,setOpen:a.props.setOpen,shouldCloseOnSelect:a.props.shouldCloseOnSelect,renderDayContents:a.props.renderDayContents,disabledKeyboardNavigation:a.props.disabledKeyboardNavigation,showMonthYearPicker:a.props.showMonthYearPicker,showFullMonthYearPicker:a.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:a.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:a.props.showFourColumnMonthYearPicker,showYearPicker:a.props.showYearPicker,showQuarterYearPicker:a.props.showQuarterYearPicker,isInputFocused:a.props.isInputFocused,containerRef:a.containerRef,monthShowsDuplicateDaysEnd:l,monthShowsDuplicateDaysStart:d})));}return t}})),le(fe(a),"renderYears",(function(){if(!a.props.showTimeSelectOnly)return a.props.showYearPicker?React__default.createElement("div",{className:"react-datepicker__year--container"},a.renderHeader(),React__default.createElement(Ot,de({onDayClick:a.handleDayClick,date:a.state.date},a.props))):void 0})),le(fe(a),"renderTimeSection",(function(){if(a.props.showTimeSelect&&(a.state.monthContainer||a.props.showTimeSelectOnly))return React__default.createElement(Nt,{selected:a.props.selected,openToDate:a.props.openToDate,onChange:a.props.onTimeChange,timeClassName:a.props.timeClassName,format:a.props.timeFormat,includeTimes:a.props.includeTimes,intervals:a.props.timeIntervals,minTime:a.props.minTime,maxTime:a.props.maxTime,excludeTimes:a.props.excludeTimes,filterTime:a.props.filterTime,timeCaption:a.props.timeCaption,todayButton:a.props.todayButton,showMonthDropdown:a.props.showMonthDropdown,showMonthYearDropdown:a.props.showMonthYearDropdown,showYearDropdown:a.props.showYearDropdown,withPortal:a.props.withPortal,monthRef:a.state.monthContainer,injectTimes:a.props.injectTimes,locale:a.props.locale,handleOnKeyDown:a.props.handleTimeKeyDown,showTimeSelectOnly:a.props.showTimeSelectOnly})})),le(fe(a),"renderInputTimeSection",(function(){var t=new Date(a.props.selected),r=Me(t)&&Boolean(a.props.selected)?"".concat(ft(t.getHours()),":").concat(ft(t.getMinutes())):"";if(a.props.showTimeInput)return React__default.createElement(xt,{date:t,timeString:r,timeInputLabel:a.props.timeInputLabel,onChange:a.props.onTimeChange,customTimeInput:a.props.customTimeInput})})),a.containerRef=React__default.createRef(),a.state={date:a.getDateInView(),selectingDate:null,monthContainer:null},a}return ce(o,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=void e.setState({monthContainer:e.monthContainer}));}},{key:"componentDidUpdate",value:function(e){this.props.preSelection&&!We(this.props.preSelection,e.preSelection)?this.setState({date:this.props.preSelection}):this.props.openToDate&&!We(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate});}},{key:"render",value:function(){var r=this.props.container||Tt;return React__default.createElement("div",{ref:this.containerRef},React__default.createElement(r,{className:classnames("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly}),showPopperArrow:this.props.showPopperArrow,arrowProps:this.props.arrowProps},this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderYears(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.props.children))}}],[{key:"defaultProps",get:function(){return {onDropdownFocus:function(){},monthsShown:1,monthSelectedIn:0,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",customTimeInput:null,yearItemNumber:12}}}]),o}(),Lt=function(e){return !e.disabled&&-1!==e.tabIndex},Ft=function(t){ue(n,React__default.Component);var r=ve(n);function n(t){var o;return pe(this,n),le(fe(o=r.call(this,t)),"getTabChildren",(function(){return Array.prototype.slice.call(o.tabLoopRef.current.querySelectorAll("[tabindex], a, button, input, select, textarea"),1,-1).filter(Lt)})),le(fe(o),"handleFocusStart",(function(e){var t=o.getTabChildren();t&&t.length>1&&t[t.length-1].focus();})),le(fe(o),"handleFocusEnd",(function(e){var t=o.getTabChildren();t&&t.length>1&&t[0].focus();})),o.tabLoopRef=React__default.createRef(),o}return ce(n,[{key:"render",value:function(){return this.props.enableTabLoop?React__default.createElement("div",{className:"react-datepicker__tab-loop",ref:this.tabLoopRef},React__default.createElement("div",{className:"react-datepicker__tab-loop__start",tabIndex:"0",onFocus:this.handleFocusStart}),this.props.children,React__default.createElement("div",{className:"react-datepicker__tab-loop__end",tabIndex:"0",onFocus:this.handleFocusEnd})):this.props.children}}],[{key:"defaultProps",get:function(){return {enableTabLoop:!0}}}]),n}(),Rt=function(t){ue(n,React__default.Component);var r=ve(n);function n(e){var t;return pe(this,n),(t=r.call(this,e)).el=document.createElement("div"),t}return ce(n,[{key:"componentDidMount",value:function(){this.portalRoot=document.getElementById(this.props.portalId),this.portalRoot||(this.portalRoot=document.createElement("div"),this.portalRoot.setAttribute("id",this.props.portalId),document.body.appendChild(this.portalRoot)),this.portalRoot.appendChild(this.el);}},{key:"componentWillUnmount",value:function(){this.portalRoot.removeChild(this.el);}},{key:"render",value:function(){return ne__default.createPortal(this.props.children,this.el)}}]),n}(),At=function(r){ue(o,React__default.Component);var n=ve(o);function o(){return pe(this,o),n.apply(this,arguments)}return ce(o,[{key:"render",value:function(){var r,n=this.props,o=n.className,a=n.wrapperClassName,s=n.hidePopper,p=n.popperComponent,i=n.popperModifiers,c=n.popperPlacement,l=n.popperProps,d=n.targetComponent,u=n.enableTabLoop,h=n.popperOnKeyDown,m=n.portalId;if(!s){var f=classnames("react-datepicker-popper",o);r=React__default.createElement(Popper,de({modifiers:i,placement:c},l),(function(t){var r=t.ref,n=t.style,o=t.placement,a=t.arrowProps;return React__default.createElement(Ft,{enableTabLoop:u},React__default.createElement("div",{ref:r,style:n,className:f,"data-placement":o,onKeyDown:h},React__default.cloneElement(p,{arrowProps:a})))}));}this.props.popperContainer&&(r=React__default.createElement(this.props.popperContainer,{},r)),m&&!s&&(r=React__default.createElement(Rt,{portalId:m},r));var y=classnames("react-datepicker-wrapper",a);return React__default.createElement(Manager,{className:"react-datepicker-manager"},React__default.createElement(Reference,null,(function(t){var r=t.ref;return React__default.createElement("div",{ref:r,className:y},d)})),r)}}],[{key:"defaultProps",get:function(){return {hidePopper:!0,popperModifiers:[],popperProps:{},popperPlacement:"bottom-start"}}}]),o}(),Bt=onClickOutsideHOC(It);var Wt=function(n){ue(a,React__default.Component);var o=ve(a);function a(n){var s;return pe(this,a),le(fe(s=o.call(this,n)),"getPreSelection",(function(){return s.props.openToDate?s.props.openToDate:s.props.selectsEnd&&s.props.startDate?s.props.startDate:s.props.selectsStart&&s.props.endDate?s.props.endDate:_e()})),le(fe(s),"calcInitialState",(function(){var e,t=s.getPreSelection(),r=dt(s.props),n=ut(s.props),o=r&&isBefore(t,startOfDay(r))?r:n&&isAfter(t,endOfDay(n))?n:t;return {open:s.props.startOpen||!1,preventFocus:!1,preSelection:null!==(e=s.props.selectsRange?s.props.startDate:s.props.selected)&&void 0!==e?e:o,highlightDates:ht(s.props.highlightDates),focused:!1,shouldFocusDayInline:!1}})),le(fe(s),"clearPreventFocusTimeout",(function(){s.preventFocusTimeout&&clearTimeout(s.preventFocusTimeout);})),le(fe(s),"setFocus",(function(){s.input&&s.input.focus&&s.input.focus({preventScroll:!0});})),le(fe(s),"setBlur",(function(){s.input&&s.input.blur&&s.input.blur(),s.cancelFocusInput();})),le(fe(s),"setOpen",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.setState({open:e,preSelection:e&&s.state.open?s.state.preSelection:s.calcInitialState().preSelection,lastPreSelectChange:jt},(function(){e||s.setState((function(e){return {focused:!!t&&e.focused}}),(function(){!t&&s.setBlur(),s.setState({inputValue:null});}));}));})),le(fe(s),"inputOk",(function(){return isDate(s.state.preSelection)})),le(fe(s),"isCalendarOpen",(function(){return void 0===s.props.open?s.state.open&&!s.props.disabled&&!s.props.readOnly:s.props.open})),le(fe(s),"handleFocus",(function(e){s.state.preventFocus||(s.props.onFocus(e),s.props.preventOpenOnFocus||s.props.readOnly||s.setOpen(!0)),s.setState({focused:!0});})),le(fe(s),"cancelFocusInput",(function(){clearTimeout(s.inputFocusTimeout),s.inputFocusTimeout=null;})),le(fe(s),"deferFocusInput",(function(){s.cancelFocusInput(),s.inputFocusTimeout=setTimeout((function(){return s.setFocus()}),1);})),le(fe(s),"handleDropdownFocus",(function(){s.cancelFocusInput();})),le(fe(s),"handleBlur",(function(e){(!s.state.open||s.props.withPortal||s.props.showTimeInput)&&s.props.onBlur(e),s.setState({focused:!1});})),le(fe(s),"handleCalendarClickOutside",(function(e){s.props.inline||s.setOpen(!1),s.props.onClickOutside(e),s.props.withPortal&&e.preventDefault();})),le(fe(s),"handleChange",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if(!s.props.onChangeRaw||(s.props.onChangeRaw.apply(fe(s),t),"function"==typeof n.isDefaultPrevented&&!n.isDefaultPrevented())){s.setState({inputValue:n.target.value,lastPreSelectChange:Kt});var o=Se(n.target.value,s.props.dateFormat,s.props.locale,s.props.strictParsing,s.props.minDate);!o&&n.target.value||s.setSelected(o,n,!0);}})),le(fe(s),"handleSelect",(function(e,t,r){if(s.setState({preventFocus:!0},(function(){return s.preventFocusTimeout=setTimeout((function(){return s.setState({preventFocus:!1})}),50),s.preventFocusTimeout})),s.props.onChangeRaw&&s.props.onChangeRaw(t),s.setSelected(e,t,!1,r),!s.props.shouldCloseOnSelect||s.props.showTimeSelect)s.setPreSelection(e);else if(!s.props.inline){s.props.selectsRange||s.setOpen(!1);var n=s.props,o=n.startDate,a=n.endDate;!o||a||isBefore(e,o)||s.setOpen(!1);}})),le(fe(s),"setSelected",(function(e,t,r,n){var o=e;if(null===o||!Ge(o,s.props)){var a=s.props,p=a.onChange,i=a.selectsRange,c=a.startDate,l=a.endDate;if(!Ke(s.props.selected,o)||s.props.allowSameDay||i)if(null!==o&&(!s.props.selected||r&&(s.props.showTimeSelect||s.props.showTimeSelectOnly||s.props.showTimeInput)||(o=Ne(o,{hour:getHours(s.props.selected),minute:getMinutes(s.props.selected),second:getSeconds(s.props.selected)})),s.props.inline||s.setState({preSelection:o}),s.props.focusSelectedMonth||s.setState({monthSelectedIn:n})),i){var d=c&&!l,u=c&&l;!c&&!l?p([o,null],t):d&&(isBefore(o,c)?p([o,null],t):p([c,o],t)),u&&p([o,null],t);}else p(o,t);r||(s.props.onSelect(o,t),s.setState({inputValue:null}));}})),le(fe(s),"setPreSelection",(function(e){var t=void 0!==s.props.minDate,r=void 0!==s.props.maxDate,n=!0;if(e){var o=startOfDay(e);if(t&&r)n=je(e,s.props.minDate,s.props.maxDate);else if(t){var a=startOfDay(s.props.minDate);n=isAfter(e,a)||Ke(o,a);}else if(r){var p=endOfDay(s.props.maxDate);n=isBefore(e,p)||Ke(o,p);}}n&&s.setState({preSelection:e});})),le(fe(s),"handleTimeChange",(function(e){var t=Ne(s.props.selected?s.props.selected:s.getPreSelection(),{hour:getHours(e),minute:getMinutes(e)});s.setState({preSelection:t}),s.props.onChange(t),s.props.shouldCloseOnSelect&&s.setOpen(!1),s.props.showTimeInput&&s.setOpen(!0),s.setState({inputValue:null});})),le(fe(s),"onInputClick",(function(){s.props.disabled||s.props.readOnly||s.setOpen(!0),s.props.onInputClick();})),le(fe(s),"onInputKeyDown",(function(e){s.props.onKeyDown(e);var t=e.key;if(s.state.open||s.props.inline||s.props.preventOpenOnFocus){if(s.state.open){if("ArrowDown"===t||"ArrowUp"===t){e.preventDefault();var r=s.calendar.componentNode&&s.calendar.componentNode.querySelector('.react-datepicker__day[tabindex="0"]');return void(r&&r.focus({preventScroll:!0}))}var n=_e(s.state.preSelection);"Enter"===t?(e.preventDefault(),s.inputOk()&&s.state.lastPreSelectChange===jt?(s.handleSelect(n,e),!s.props.shouldCloseOnSelect&&s.setPreSelection(n)):s.setOpen(!1)):"Escape"===t&&(e.preventDefault(),s.setOpen(!1)),s.inputOk()||s.props.onInputError({code:1,msg:"Date input not valid."});}}else "ArrowDown"!==t&&"ArrowUp"!==t&&"Enter"!==t||s.onInputClick();})),le(fe(s),"onDayKeyDown",(function(e){s.props.onKeyDown(e);var t=e.key,r=_e(s.state.preSelection);if("Enter"===t)e.preventDefault(),s.handleSelect(r,e),!s.props.shouldCloseOnSelect&&s.setPreSelection(r);else if("Escape"===t)e.preventDefault(),s.setOpen(!1),s.inputOk()||s.props.onInputError({code:1,msg:"Date input not valid."});else if(!s.props.disabledKeyboardNavigation){var n;switch(t){case"ArrowLeft":n=subDays(r,1);break;case"ArrowRight":n=addDays(r,1);break;case"ArrowUp":n=subWeeks(r,1);break;case"ArrowDown":n=addWeeks(r,1);break;case"PageUp":n=subMonths(r,1);break;case"PageDown":n=addMonths(r,1);break;case"Home":n=subYears(r,1);break;case"End":n=addYears(r,1);}if(!n)return void(s.props.onInputError&&s.props.onInputError({code:1,msg:"Date input not valid."}));if(e.preventDefault(),s.setState({lastPreSelectChange:jt}),s.props.adjustDateOnChange&&s.setSelected(n),s.setPreSelection(n),s.props.inline){var o=getMonth(r),a=getMonth(n),f=getYear(r),y=getYear(n);o!==a||f!==y?s.setState({shouldFocusDayInline:!0}):s.setState({shouldFocusDayInline:!1});}}})),le(fe(s),"onPopperKeyDown",(function(e){"Escape"===e.key&&(e.preventDefault(),s.setState({preventFocus:!0},(function(){s.setOpen(!1),setTimeout((function(){s.setFocus(),s.setState({preventFocus:!1});}));})));})),le(fe(s),"onClearClick",(function(e){e&&e.preventDefault&&e.preventDefault(),s.props.selectsRange?s.props.onChange([null,null],e):s.props.onChange(null,e),s.setState({inputValue:null});})),le(fe(s),"clear",(function(){s.onClearClick();})),le(fe(s),"onScroll",(function(e){"boolean"==typeof s.props.closeOnScroll&&s.props.closeOnScroll?e.target!==document&&e.target!==document.documentElement&&e.target!==document.body||s.setOpen(!1):"function"==typeof s.props.closeOnScroll&&s.props.closeOnScroll(e)&&s.setOpen(!1);})),le(fe(s),"renderCalendar",(function(){return s.props.inline||s.isCalendarOpen()?React__default.createElement(Bt,{ref:function(e){s.calendar=e;},locale:s.props.locale,calendarStartDay:s.props.calendarStartDay,chooseDayAriaLabelPrefix:s.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:s.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:s.props.weekAriaLabelPrefix,adjustDateOnChange:s.props.adjustDateOnChange,setOpen:s.setOpen,shouldCloseOnSelect:s.props.shouldCloseOnSelect,dateFormat:s.props.dateFormatCalendar,useWeekdaysShort:s.props.useWeekdaysShort,formatWeekDay:s.props.formatWeekDay,dropdownMode:s.props.dropdownMode,selected:s.props.selected,preSelection:s.state.preSelection,onSelect:s.handleSelect,onWeekSelect:s.props.onWeekSelect,openToDate:s.props.openToDate,minDate:s.props.minDate,maxDate:s.props.maxDate,selectsStart:s.props.selectsStart,selectsEnd:s.props.selectsEnd,selectsRange:s.props.selectsRange,startDate:s.props.startDate,endDate:s.props.endDate,excludeDates:s.props.excludeDates,filterDate:s.props.filterDate,onClickOutside:s.handleCalendarClickOutside,formatWeekNumber:s.props.formatWeekNumber,highlightDates:s.state.highlightDates,includeDates:s.props.includeDates,includeTimes:s.props.includeTimes,injectTimes:s.props.injectTimes,inline:s.props.inline,shouldFocusDayInline:s.state.shouldFocusDayInline,peekNextMonth:s.props.peekNextMonth,showMonthDropdown:s.props.showMonthDropdown,showPreviousMonths:s.props.showPreviousMonths,useShortMonthInDropdown:s.props.useShortMonthInDropdown,showMonthYearDropdown:s.props.showMonthYearDropdown,showWeekNumbers:s.props.showWeekNumbers,showYearDropdown:s.props.showYearDropdown,withPortal:s.props.withPortal,forceShowMonthNavigation:s.props.forceShowMonthNavigation,showDisabledMonthNavigation:s.props.showDisabledMonthNavigation,scrollableYearDropdown:s.props.scrollableYearDropdown,scrollableMonthYearDropdown:s.props.scrollableMonthYearDropdown,todayButton:s.props.todayButton,weekLabel:s.props.weekLabel,outsideClickIgnoreClass:"react-datepicker-ignore-onclickoutside",fixedHeight:s.props.fixedHeight,monthsShown:s.props.monthsShown,monthSelectedIn:s.state.monthSelectedIn,onDropdownFocus:s.handleDropdownFocus,onMonthChange:s.props.onMonthChange,onYearChange:s.props.onYearChange,dayClassName:s.props.dayClassName,weekDayClassName:s.props.weekDayClassName,monthClassName:s.props.monthClassName,timeClassName:s.props.timeClassName,showTimeSelect:s.props.showTimeSelect,showTimeSelectOnly:s.props.showTimeSelectOnly,onTimeChange:s.handleTimeChange,timeFormat:s.props.timeFormat,timeIntervals:s.props.timeIntervals,minTime:s.props.minTime,maxTime:s.props.maxTime,excludeTimes:s.props.excludeTimes,filterTime:s.props.filterTime,timeCaption:s.props.timeCaption,className:s.props.calendarClassName,container:s.props.calendarContainer,yearItemNumber:s.props.yearItemNumber,yearDropdownItemNumber:s.props.yearDropdownItemNumber,previousMonthButtonLabel:s.props.previousMonthButtonLabel,nextMonthButtonLabel:s.props.nextMonthButtonLabel,previousYearButtonLabel:s.props.previousYearButtonLabel,nextYearButtonLabel:s.props.nextYearButtonLabel,timeInputLabel:s.props.timeInputLabel,disabledKeyboardNavigation:s.props.disabledKeyboardNavigation,renderCustomHeader:s.props.renderCustomHeader,popperProps:s.props.popperProps,renderDayContents:s.props.renderDayContents,onDayMouseEnter:s.props.onDayMouseEnter,onMonthMouseLeave:s.props.onMonthMouseLeave,showTimeInput:s.props.showTimeInput,showMonthYearPicker:s.props.showMonthYearPicker,showFullMonthYearPicker:s.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:s.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:s.props.showFourColumnMonthYearPicker,showYearPicker:s.props.showYearPicker,showQuarterYearPicker:s.props.showQuarterYearPicker,showPopperArrow:s.props.showPopperArrow,excludeScrollbar:s.props.excludeScrollbar,handleOnKeyDown:s.onDayKeyDown,handleTimeKeyDown:s.props.onKeyDown,isInputFocused:s.state.focused,customTimeInput:s.props.customTimeInput,setPreSelection:s.setPreSelection},s.props.children):null})),le(fe(s),"renderDateInput",(function(){var r,n=classnames(s.props.className,le({},"react-datepicker-ignore-onclickoutside",s.state.open)),o=s.props.customInput||React__default.createElement("input",{type:"text"}),a=s.props.customInputRef||"ref",p="string"==typeof s.props.value?s.props.value:"string"==typeof s.state.inputValue?s.state.inputValue:s.props.selectsRange?function(e,t,r){if(!e)return "";var n=Ee(e,r),o=t?Ee(t,r):"";return "".concat(n," - ").concat(o)}(s.props.startDate,s.props.endDate,s.props):Ee(s.props.selected,s.props);return React__default.cloneElement(o,(le(r={},a,(function(e){s.input=e;})),le(r,"value",p),le(r,"onBlur",s.handleBlur),le(r,"onChange",s.handleChange),le(r,"onClick",s.onInputClick),le(r,"onFocus",s.handleFocus),le(r,"onKeyDown",s.onInputKeyDown),le(r,"id",s.props.id),le(r,"name",s.props.name),le(r,"autoFocus",s.props.autoFocus),le(r,"placeholder",s.props.placeholderText),le(r,"disabled",s.props.disabled),le(r,"autoComplete",s.props.autoComplete),le(r,"className",classnames(o.props.className,n)),le(r,"title",s.props.title),le(r,"readOnly",s.props.readOnly),le(r,"required",s.props.required),le(r,"tabIndex",s.props.tabIndex),le(r,"aria-describedby",s.props.ariaDescribedBy),le(r,"aria-invalid",s.props.ariaInvalid),le(r,"aria-labelledby",s.props.ariaLabelledBy),le(r,"aria-required",s.props.ariaRequired),r))})),le(fe(s),"renderClearButton",(function(){var t=s.props,r=t.isClearable,n=t.selected,o=t.startDate,a=t.endDate,p=t.clearButtonTitle,i=t.clearButtonClassName,c=void 0===i?"":i,l=t.ariaLabelClose,d=void 0===l?"Close":l;return !r||null==n&&null==o&&null==a?null:React__default.createElement("button",{type:"button",className:"react-datepicker__close-icon ".concat(c).trim(),"aria-label":d,onClick:s.onClearClick,title:p,tabIndex:-1})})),s.state=s.calcInitialState(),s}return ce(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!0);}},{key:"componentDidUpdate",value:function(e,t){var r,n;e.inline&&(r=e.selected,n=this.props.selected,r&&n?getMonth(r)!==getMonth(n)||getYear(r)!==getYear(n):r!==n)&&this.setPreSelection(this.props.selected),void 0!==this.state.monthSelectedIn&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:ht(this.props.highlightDates)}),t.focused||Ke(e.selected,this.props.selected)||this.setState({inputValue:null}),t.open!==this.state.open&&(!1===t.open&&!0===this.state.open&&this.props.onCalendarOpen(),!0===t.open&&!1===this.state.open&&this.props.onCalendarClose());}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout(),window.removeEventListener("scroll",this.onScroll,!0);}},{key:"render",value:function(){var t=this.renderCalendar();return this.props.inline&&!this.props.withPortal?t:this.props.withPortal?React__default.createElement("div",null,this.props.inline?null:React__default.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),this.state.open||this.props.inline?React__default.createElement("div",{className:"react-datepicker__portal"},t):null):React__default.createElement(At,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),portalId:this.props.portalId,popperModifiers:this.props.popperModifiers,targetComponent:React__default.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),popperContainer:this.props.popperContainer,popperComponent:t,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps,popperOnKeyDown:this.onPopperKeyDown,enableTabLoop:this.props.enableTabLoop})}}],[{key:"defaultProps",get:function(){return {allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},onCalendarOpen:function(){},onCalendarClose:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showPreviousMonths:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTwoColumnMonthYearPicker:!1,showFourColumnMonthYearPicker:!1,showYearPicker:!1,showQuarterYearPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",enableTabLoop:!0,yearItemNumber:12,renderDayContents:function(e){return e},focusSelectedMonth:!1,showPopperArrow:!0,excludeScrollbar:!0,customTimeInput:null,calendarStartDay:0}}}]),a}(),Kt="input",jt="navigate";

function declension(scheme, count) {
  // scheme for count=1 exists
  if (scheme.one !== undefined && count === 1) {
    return scheme.one;
  }

  var rem10 = count % 10;
  var rem100 = count % 100; // 1, 21, 31, ...

  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace('{{count}}', count); // 2, 3, 4, 22, 23, 24, 32 ...
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace('{{count}}', count); // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace('{{count}}', count);
  }
}

function buildLocalizeTokenFn(scheme) {
  return function (count, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count);
        } else {
          return 'через ' + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + ' назад';
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}

var formatDistanceLocale$1 = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: 'меньше секунды',
      singularNominative: 'меньше {{count}} секунды',
      singularGenitive: 'меньше {{count}} секунд',
      pluralGenitive: 'меньше {{count}} секунд'
    },
    future: {
      one: 'меньше, чем через секунду',
      singularNominative: 'меньше, чем через {{count}} секунду',
      singularGenitive: 'меньше, чем через {{count}} секунды',
      pluralGenitive: 'меньше, чем через {{count}} секунд'
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} секунда',
      singularGenitive: '{{count}} секунды',
      pluralGenitive: '{{count}} секунд'
    },
    past: {
      singularNominative: '{{count}} секунду назад',
      singularGenitive: '{{count}} секунды назад',
      pluralGenitive: '{{count}} секунд назад'
    },
    future: {
      singularNominative: 'через {{count}} секунду',
      singularGenitive: 'через {{count}} секунды',
      pluralGenitive: 'через {{count}} секунд'
    }
  }),
  halfAMinute: function (_, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'через полминуты';
      } else {
        return 'полминуты назад';
      }
    }

    return 'полминуты';
  },
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: 'меньше минуты',
      singularNominative: 'меньше {{count}} минуты',
      singularGenitive: 'меньше {{count}} минут',
      pluralGenitive: 'меньше {{count}} минут'
    },
    future: {
      one: 'меньше, чем через минуту',
      singularNominative: 'меньше, чем через {{count}} минуту',
      singularGenitive: 'меньше, чем через {{count}} минуты',
      pluralGenitive: 'меньше, чем через {{count}} минут'
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} минута',
      singularGenitive: '{{count}} минуты',
      pluralGenitive: '{{count}} минут'
    },
    past: {
      singularNominative: '{{count}} минуту назад',
      singularGenitive: '{{count}} минуты назад',
      pluralGenitive: '{{count}} минут назад'
    },
    future: {
      singularNominative: 'через {{count}} минуту',
      singularGenitive: 'через {{count}} минуты',
      pluralGenitive: 'через {{count}} минут'
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} часа',
      singularGenitive: 'около {{count}} часов',
      pluralGenitive: 'около {{count}} часов'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} час',
      singularGenitive: 'приблизительно через {{count}} часа',
      pluralGenitive: 'приблизительно через {{count}} часов'
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} час',
      singularGenitive: '{{count}} часа',
      pluralGenitive: '{{count}} часов'
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} день',
      singularGenitive: '{{count}} дня',
      pluralGenitive: '{{count}} дней'
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} недели',
      singularGenitive: 'около {{count}} недель',
      pluralGenitive: 'около {{count}} недель'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} неделю',
      singularGenitive: 'приблизительно через {{count}} недели',
      pluralGenitive: 'приблизительно через {{count}} недель'
    }
  }),
  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} неделя',
      singularGenitive: '{{count}} недели',
      pluralGenitive: '{{count}} недель'
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} месяца',
      singularGenitive: 'около {{count}} месяцев',
      pluralGenitive: 'около {{count}} месяцев'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} месяц',
      singularGenitive: 'приблизительно через {{count}} месяца',
      pluralGenitive: 'приблизительно через {{count}} месяцев'
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} месяц',
      singularGenitive: '{{count}} месяца',
      pluralGenitive: '{{count}} месяцев'
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} года',
      singularGenitive: 'около {{count}} лет',
      pluralGenitive: 'около {{count}} лет'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} год',
      singularGenitive: 'приблизительно через {{count}} года',
      pluralGenitive: 'приблизительно через {{count}} лет'
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} год',
      singularGenitive: '{{count}} года',
      pluralGenitive: '{{count}} лет'
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'больше {{count}} года',
      singularGenitive: 'больше {{count}} лет',
      pluralGenitive: 'больше {{count}} лет'
    },
    future: {
      singularNominative: 'больше, чем через {{count}} год',
      singularGenitive: 'больше, чем через {{count}} года',
      pluralGenitive: 'больше, чем через {{count}} лет'
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'почти {{count}} год',
      singularGenitive: 'почти {{count}} года',
      pluralGenitive: 'почти {{count}} лет'
    },
    future: {
      singularNominative: 'почти через {{count}} год',
      singularGenitive: 'почти через {{count}} года',
      pluralGenitive: 'почти через {{count}} лет'
    }
  })
};
function formatDistance$1(token, count, options) {
  options = options || {};
  return formatDistanceLocale$1[token](count, options);
}

var dateFormats$1 = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: 'dd.MM.y'
};
var timeFormats$1 = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm'
};
var dateTimeFormats$1 = {
  any: '{{date}}, {{time}}'
};
var formatLong$1 = {
  date: buildFormatLongFn({
    formats: dateFormats$1,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats$1,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$1,
    defaultWidth: 'any'
  })
};

// See issue: https://github.com/date-fns/date-fns/issues/376

function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
  requiredArgs(2, arguments);
  var dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options);
  var dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

var accusativeWeekdays = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];

function lastWeek(day) {
  var weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
      return "'в прошлое " + weekday + " в' p";

    case 1:
    case 2:
    case 4:
      return "'в прошлый " + weekday + " в' p";

    case 3:
    case 5:
    case 6:
      return "'в прошлую " + weekday + " в' p";
  }
}

function thisWeek(day) {
  var weekday = accusativeWeekdays[day];

  if (day === 2
  /* Tue */
  ) {
      return "'во " + weekday + " в' p";
    } else {
    return "'в " + weekday + " в' p";
  }
}

function nextWeek(day) {
  var weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
      return "'в следующее " + weekday + " в' p";

    case 1:
    case 2:
    case 4:
      return "'в следующий " + weekday + " в' p";

    case 3:
    case 5:
    case 6:
      return "'в следующую " + weekday + " в' p";
  }
}

var formatRelativeLocale$1 = {
  lastWeek: function (date, baseDate, options) {
    var day = date.getUTCDay();

    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return lastWeek(day);
    }
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: function (date, baseDate, options) {
    var day = date.getUTCDay();

    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return nextWeek(day);
    }
  },
  other: 'P'
};
function formatRelative$1(token, date, baseDate, options) {
  var format = formatRelativeLocale$1[token];

  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }

  return format;
}

var eraValues$1 = {
  narrow: ['до н.э.', 'н.э.'],
  abbreviated: ['до н. э.', 'н. э.'],
  wide: ['до нашей эры', 'нашей эры']
};
var quarterValues$1 = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],
  wide: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал']
};
var monthValues$1 = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  wide: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
};
var formattingMonthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  wide: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
};
var dayValues$1 = {
  narrow: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'],
  wide: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
};
var dayPeriodValues$1 = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утро',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ночь'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утро',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ночь'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полночь',
    noon: 'полдень',
    morning: 'утро',
    afternoon: 'день',
    evening: 'вечер',
    night: 'ночь'
  }
};
var formattingDayPeriodValues$1 = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночи'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночи'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полночь',
    noon: 'полдень',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'вечера',
    night: 'ночи'
  }
};

function ordinalNumber$1(dirtyNumber, dirtyOptions) {
  var options = dirtyOptions || {};
  var unit = String(options.unit);
  var suffix;

  if (unit === 'date') {
    suffix = '-е';
  } else if (unit === 'week' || unit === 'minute' || unit === 'second') {
    suffix = '-я';
  } else {
    suffix = '-й';
  }

  return dirtyNumber + suffix;
}

var localize$1 = {
  ordinalNumber: ordinalNumber$1,
  era: buildLocalizeFn({
    values: eraValues$1,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$1,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues$1,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues$1,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$1,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues$1,
    defaultFormattingWidth: 'wide'
  })
};

var matchOrdinalNumberPattern$1 = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
var parseOrdinalNumberPattern$1 = /\d+/i;
var matchEraPatterns$1 = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
};
var parseEraPatterns$1 = {
  any: [/^д/i, /^н/i]
};
var matchQuarterPatterns$1 = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
};
var parseQuarterPatterns$1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns$1 = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
};
var parseMonthPatterns$1 = {
  narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
  any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
};
var matchDayPatterns$1 = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
};
var parseDayPatterns$1 = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns$1 = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
};
var parseDayPeriodPatterns$1 = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
};
var match$1 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$1,
    parsePattern: parseOrdinalNumberPattern$1,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns$1,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns$1,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns$1,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns$1,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns$1,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary Russian locale.
 * @language Russian
 * @iso-639-2 rus
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale$1 = {
  code: 'ru',
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 1
  }
};

const FormField = ({ children, hasError, hasDirty = true, error, hint, forId, label, disabled, className = '' }) => {
    const [dirty, setDirty] = React.useState(hasDirty);
    const isError = dirty && hasError && !disabled;
    const errorText = isError && error;
    const handleClick = React.useCallback(() => {
        setDirty(true);
    }, []);
    return (React__default.createElement("div", { className: `uiKit-form-field  ${className}`, onClick: handleClick },
        label && (React__default.createElement("label", { htmlFor: forId, className: "uiKit-form-field__label" },
            React__default.createElement(Typography, { ellipsis: true, value: label, type: "small", weight: "semibold", margin: "0 0 4px 12px" }))),
        React__default.createElement("div", { className: "uiKit-form-field__inner" },
            children,
            (errorText || hint) && (React__default.createElement(Typography, { className: `uiKit-form-field__hint ${(errorText && 'uiKit-form-field__error') || ''}`, value: errorText || hint, type: "small" })))));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

(function (IconSideEnum) {
    IconSideEnum["left"] = "left";
    IconSideEnum["right"] = "right";
})(exports.IconSideEnum || (exports.IconSideEnum = {}));

var InputDynamicTag;
(function (InputDynamicTag) {
    InputDynamicTag["input"] = "input";
    InputDynamicTag["textarea"] = "textarea";
})(InputDynamicTag || (InputDynamicTag = {}));
var InputDynamicType;
(function (InputDynamicType) {
    InputDynamicType["checkbox"] = "checkbox";
    InputDynamicType["password"] = "password";
    InputDynamicType["radio"] = "radio";
    InputDynamicType["text"] = "text";
})(InputDynamicType || (InputDynamicType = {}));
var KeyName;
(function (KeyName) {
    KeyName["ArrowDown"] = "ArrowDown";
    KeyName["ArrowUp"] = "ArrowUp";
    KeyName["Enter"] = "Enter";
    KeyName["Escape"] = "Escape";
})(KeyName || (KeyName = {}));
var InputAutoCompleteType;
(function (InputAutoCompleteType) {
    InputAutoCompleteType["off"] = "off";
    InputAutoCompleteType["on"] = "on";
})(InputAutoCompleteType || (InputAutoCompleteType = {}));

const parseValue = (val) => {
    if (val) {
        if (typeof val === 'number' && val < 0) {
            return '';
        }
        return String(val);
    }
    return '';
};

const InputDynamic = React.forwardRef((_a, ref) => {
    var { className = '', tag = InputDynamicTag.input, type = InputDynamicType.text, value, checked, hasError, hasDirty = true, autoComplete = InputAutoCompleteType.off, onFocus, onPressEnter, onPressEsc, onPressArrowUp, onPressArrowDown } = _a, rest = __rest(_a, ["className", "tag", "type", "value", "checked", "hasError", "hasDirty", "autoComplete", "onFocus", "onPressEnter", "onPressEsc", "onPressArrowUp", "onPressArrowDown"]);
    const [dirty, setDirty] = React.useState(hasDirty);
    const isError = dirty && hasError;
    const handleFocus = React.useCallback((e) => {
        setDirty(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    }, [onFocus]);
    const handleKeyDown = React.useCallback((e) => {
        const { key } = e;
        // eslint-disable-next-line default-case
        switch (key) {
            case KeyName.Enter:
                onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(e);
                break;
            case KeyName.Escape:
                onPressEsc === null || onPressEsc === void 0 ? void 0 : onPressEsc(e);
                break;
            case KeyName.ArrowUp:
                onPressArrowUp === null || onPressArrowUp === void 0 ? void 0 : onPressArrowUp(e);
                break;
            case KeyName.ArrowDown:
                onPressArrowDown === null || onPressArrowDown === void 0 ? void 0 : onPressArrowDown(e);
                break;
        }
    }, [onPressEnter, onPressEsc, onPressArrowUp, onPressArrowDown]);
    return React.createElement(tag, Object.assign({ autoComplete,
        ref,
        type, className: `uiKit-input-dynamic uiKit-input-dynamic--${tag} uiKit-input-dynamic--${type} ${className} ${(isError && 'uiKit-input-dynamic--error') || ''}`, value: parseValue(value), checked: Boolean(checked), onFocus: handleFocus, onKeyDown: handleKeyDown }, rest));
});

const InputBase = React.forwardRef((_a, ref) => {
    var { mark, className = '', icon, type = InputDynamicType.text, iconSide = exports.IconSideEnum.right, onIconClick } = _a, rest = __rest(_a, ["mark", "className", "icon", "type", "iconSide", "onIconClick"]);
    const inputClass = ((icon || mark) && `uiKit-input-base__field--icon-${iconSide}`) || '';
    const iconClass = `uiKit-input-base__icon uiKit-input-base__icon--${iconSide} ${(onIconClick && 'uiKit-input-base__icon--clickable') || ''}`;
    return (React__default.createElement("div", { className: `uiKit-input-base ${className}` },
        React__default.createElement(InputDynamic, Object.assign({ ref: ref, type: type }, rest, { className: inputClass })),
        React__default.createElement("div", { className: iconClass, onClick: onIconClick }, (icon && React__default.createElement(SimpleIcon, { type: icon }))
            || (mark && React__default.createElement(Typography, { value: mark })))));
});

// извлек что бы принудительно заблокировать ввод тк если передавать через пикер календарь перестает открываться
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DateField = React.forwardRef((_a, ref) => {
    var { onClick, readOnly } = _a, rest = __rest(_a, ["onClick", "readOnly"]);
    return (React__default.createElement(InputBase, Object.assign({ ref: ref, readOnly: true }, rest, { icon: "calendar", onClick: onClick })));
});

const checkDate = (date) => {
    if (date) {
        const parcedDate = dayjs_min(date);
        if (parcedDate.isValid() && parcedDate.valueOf() > 0) {
            return parcedDate.toDate();
        }
    }
    return null;
};
const prepareDate = (date) => (checkDate(date) && dayjs_min(date).format(YYYYMMDDHHmmss)) || '';

function DatePicker({ disabled, htmlFor = true, hasError, startDate, endDate, name, nameEnd, label, className = '', hasRange, hint, error, hasDirty, minDate, onChange, onChangeField, onChangePeriod, }) {
    const handleChangePeriod = React.useCallback((dates) => {
        const start = prepareDate(dates[0]);
        const end = prepareDate(dates[1]);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(start, name);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(end, nameEnd);
        onChangePeriod === null || onChangePeriod === void 0 ? void 0 : onChangePeriod({ start, end });
    }, [name, nameEnd, onChangeField, onChangePeriod]);
    const handleChange = React.useCallback((date) => {
        const formattedDate = prepareDate(date);
        onChange === null || onChange === void 0 ? void 0 : onChange(formattedDate);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(formattedDate, name);
    }, [name, onChange, onChangeField]);
    const forId = (htmlFor && label && `${getRandomNumber()}`) || '';
    const dates = React.useMemo(() => {
        const selectedDate = checkDate(startDate);
        const selected = { minDate: checkDate(minDate), selected: selectedDate, placeholderText: 'ДД.ММ.ГГГГ', };
        if (hasRange) {
            return Object.assign(Object.assign({}, selected), { startDate: selectedDate, endDate: checkDate(endDate), placeholderText: 'ДД.ММ.ГГГГ - ДД.ММ.ГГГГ' });
        }
        return selected;
    }, [endDate, hasRange, minDate, startDate]);
    const changeHandler = React.useMemo(() => (hasRange && handleChangePeriod) || handleChange, [handleChange, handleChangePeriod, hasRange]);
    return (React__default.createElement(FormField, { className: `uiKit-datepicker ${className}`, label: label, disabled: disabled, forId: forId, hasDirty: hasDirty, hasError: hasError, hint: hint, error: error },
        React__default.createElement(Wt, Object.assign({ disabledKeyboardNavigation: true, locale: locale$1, calendarStartDay: 1, disabled: disabled, id: forId, dateFormat: "d.MM.yyyy" }, dates, { selectsRange: hasRange, customInput: React__default.createElement(DateField, { hasDirty: hasDirty, hasError: hasError }), onChange: changeHandler }))));
}

const Checkbox$1 = (_a) => {
    var { name, label, content, children, className = '', disabled, hint, error, hasDirty, hasError, onChange, onChangeField } = _a, rest = __rest(_a, ["name", "label", "content", "children", "className", "disabled", "hint", "error", "hasDirty", "hasError", "onChange", "onChangeField"]);
    const handleChange = React.useCallback((e) => {
        const { checked } = e.target;
        onChange === null || onChange === void 0 ? void 0 : onChange(checked);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(checked, name);
    }, [name, onChange, onChangeField]);
    return (React__default.createElement(FormField, { className: className, label: label, hasDirty: hasDirty, hasError: hasError, hint: hint, error: error, disabled: disabled },
        React__default.createElement("label", { className: `uiKit-checkbox ${(disabled && 'uiKit-radio--disabled') || ''}` },
            React__default.createElement(InputDynamic, Object.assign({}, rest, { hasDirty: hasDirty, hasError: hasError, disabled: disabled, type: "checkbox", onChange: handleChange })),
            children || (content && React__default.createElement(Typography, { value: content })))));
};

const Radio$1 = (_a) => {
    var { label, disabled, children, className = '', onChange } = _a, rest = __rest(_a, ["label", "disabled", "children", "className", "onChange"]);
    const handleChange = React.useCallback((e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    }, [onChange]);
    return (React__default.createElement("label", { className: `uiKit-radio ${className} ${(disabled && 'uiKit-radio--disabled') || ''}` },
        React__default.createElement(InputDynamic, Object.assign({}, rest, { disabled: disabled, type: "radio", onChange: handleChange })),
        children || (label && React__default.createElement(Typography, { value: label }))));
};

const safeParse = (value) => {
    try {
        return JSON.parse(value);
    }
    catch (e) {
        if (value === 'undefined') {
            return undefined;
        }
        return value;
    }
};

function RadioGroup$1(_a) {
    var { name, hint, error, label, options, onChange, onChangeField, value, hasDirty, hasError, disabled, className = '' } = _a, rest = __rest(_a, ["name", "hint", "error", "label", "options", "onChange", "onChangeField", "value", "hasDirty", "hasError", "disabled", "className"]);
    const handleChange = React.useCallback((value) => {
        const parsedVal = safeParse(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(parsedVal);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(parsedVal, name);
    }, [name, onChange, onChangeField]);
    return (React__default.createElement(FormField, { className: className, label: label, hasDirty: hasDirty, hasError: hasError, disabled: disabled, hint: hint, error: error }, options === null || options === void 0 ? void 0 : options.map((option, i) => {
        const val = `${option.value}`;
        return (React__default.createElement(Radio$1, Object.assign({}, rest, { className: "uiKit-radio-group", hasDirty: hasDirty, hasError: hasError, key: `${name}-${i + 1}`, disabled: disabled, name: name, value: val, label: option.label, checked: val === `${value}`, onChange: handleChange })));
    })));
}

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

const InputMasked = reactImask.IMaskMixin((_a) => {
    var { inputRef } = _a, rest = __rest(_a, ["inputRef"]);
    return React__default.createElement(InputBase, Object.assign({}, rest, { ref: inputRef }));
});
const Input$1 = (_a) => {
    var { className = '', hint, error, name, label, withMask, htmlFor = true, value, hasDirty, disabled, hasError, inputRef, onChange, onChangeField } = _a, rest = __rest(_a, ["className", "hint", "error", "name", "label", "withMask", "htmlFor", "value", "hasDirty", "disabled", "hasError", "inputRef", "onChange", "onChangeField"]);
    const [maskRef, setMaskRef] = React.useState();
    const changeField = React.useCallback((value, mask) => {
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name, mask);
        onChange === null || onChange === void 0 ? void 0 : onChange(value, mask);
    }, [name, onChange, onChangeField]);
    const handleChange = React.useCallback((e) => {
        changeField(e.target.value);
    }, [changeField]);
    const handleAccept = React.useCallback((val, mask) => {
        setMaskRef(mask);
        changeField(mask.unmaskedValue, val);
    }, [changeField]);
    const forId = (htmlFor && label && v4()) || '';
    const typedName = name;
    React.useEffect(() => {
        if (withMask && maskRef) {
            maskRef.value = parseValue(value);
        }
    }, [value, maskRef, withMask]);
    return (React__default.createElement(FormField, { className: className, label: label, forId: forId, hasDirty: hasDirty, hasError: hasError, disabled: disabled, hint: hint, error: error }, (withMask && (React__default.createElement(InputMasked, Object.assign({}, rest, withMask, { ref: inputRef, hasDirty: hasDirty, hasError: hasError, value: parseValue(value), disabled: disabled, id: forId, name: typedName, onAccept: handleAccept })))) || (React__default.createElement(InputBase, Object.assign({}, rest, { ref: inputRef, hasDirty: hasDirty, disabled: disabled, hasError: hasError, value: value, id: forId, name: typedName, onChange: handleChange })))));
};

function ListItems$1({ options, onSelect, selectedLabel, arrowIndex, }) {
    return (React__default.createElement("div", { className: "uiKit-dropdown-popup" }, (options.length && options.map((option, i) => {
        const { label } = option;
        return (React__default.createElement("div", { key: `${label}-${i + 1}`, role: "button", tabIndex: 0, className: `uiKit-dropdown-popup__item uiKit-dropdown-popup__item--option ${(arrowIndex && arrowIndex === i && 'uiKit-dropdown-popup__item--focus') || ''}`, onMouseDown: () => onSelect(option) },
            React__default.createElement("div", { className: `uiKit-dropdown-popup__item-label ${(selectedLabel === label && 'uiKit-dropdown-popup__item-label--selected') || ''}` }),
            React__default.createElement(Typography, { value: label })));
    }))
        || (React__default.createElement("div", { className: "uiKit-dropdown-popup__item uiKit-dropdown-popup__item--empty" },
            React__default.createElement(Typography, { value: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" })))));
}

const findLabel = (value, options) => { var _a; return ((_a = options.find((option) => lodash_isequal(option.value, value))) === null || _a === void 0 ? void 0 : _a.label) || ''; };

function Dropdown$1(_a) {
    var { value, onChange, onChangeField, disabled, options, name, className = '', disableFilter } = _a, rest = __rest(_a, ["value", "onChange", "onChangeField", "disabled", "options", "name", "className", "disableFilter"]);
    const selectedLabel = findLabel(value, options);
    const [search, setSearch] = React.useState(selectedLabel);
    const [isOpenList, changeIsOpenList] = React.useState(false);
    const [arrowIndex, changeArrowIndex] = React.useState(null);
    const ref = React.useRef(null);
    const selectedOptions = React.useMemo(() => {
        if (disableFilter || lodash_isequal(selectedLabel, search)) {
            return options;
        }
        return options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()));
    }, [disableFilter, options, search, selectedLabel]);
    const handleChange = React.useCallback((e) => {
        if (!disableFilter) {
            setSearch(e);
        }
    }, [disableFilter]);
    React.useEffect(() => {
        setSearch(findLabel(value, options));
    }, [options, value]);
    // выбор опции через клик
    const handleSelectCallback = React.useCallback((option) => {
        const { label, value } = option;
        setSearch(label);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name);
        changeArrowIndex(null);
    }, [name, onChange, onChangeField]);
    // открытие с клавиатуры options и выбор option через enter
    const handlePressEnter = React.useCallback((e) => {
        var _a;
        e.persist();
        if (!isOpenList && !disabled) {
            changeIsOpenList(true);
        }
        if (isOpenList && arrowIndex && selectedOptions[arrowIndex]) {
            const { label, value } = selectedOptions[arrowIndex];
            changeIsOpenList(false);
            setSearch(label);
            onChange === null || onChange === void 0 ? void 0 : onChange(value);
            onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name);
            changeArrowIndex(null);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }, [isOpenList, disabled, arrowIndex, selectedOptions, name, onChange, onChangeField]);
    // закрытие меню options
    const handleClose = React.useCallback(() => {
        if (isOpenList) {
            setSearch(selectedLabel);
            changeIsOpenList(false);
            changeArrowIndex(null);
        }
    }, [isOpenList, selectedLabel]);
    // Навигация по options с помошью стрелок
    const maxLength = (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) - 1 || 0;
    const handlePressArrowDown = React.useCallback(() => {
        if (isOpenList) {
            changeArrowIndex((current) => {
                if (current === null || current === maxLength || current > maxLength) {
                    return 0;
                }
                return current + 1;
            });
        }
    }, [changeArrowIndex, isOpenList, maxLength]);
    const handlePressArrowUp = React.useCallback(() => {
        if (isOpenList) {
            changeArrowIndex((current) => {
                if (current === null || current === 0 || current > maxLength) {
                    return maxLength;
                }
                return current - 1;
            });
        }
    }, [changeArrowIndex, isOpenList, maxLength]);
    return (React__default.createElement("div", { role: "button", tabIndex: -1, className: `uiKit-select ${className}`, onClick: handlePressEnter },
        React__default.createElement(Input$1, Object.assign({}, rest, { inputRef: ref, name: name, disabled: disabled, readOnly: disableFilter, value: search, onChange: handleChange, onBlur: handleClose, onPressEnter: handlePressEnter, onPressEsc: handleClose, onPressArrowUp: handlePressArrowUp, onPressArrowDown: handlePressArrowDown, icon: (isOpenList && 'angleUp') || 'angleDown' })),
        isOpenList && (React__default.createElement(ListItems$1, { options: selectedOptions, onSelect: handleSelectCallback, selectedLabel: selectedLabel, arrowIndex: arrowIndex }))));
}

function InputPassword(_a) {
    var rest = __rest(_a, []);
    const [isShow, setIsShow] = React.useState(false);
    const handleIconClick = React.useCallback(() => {
        setIsShow((prev) => !prev);
    }, []);
    return (React__default.createElement(Input$1, Object.assign({}, rest, { autoComplete: "on", type: (isShow && InputDynamicType.text) || InputDynamicType.password, icon: (isShow && 'eyeCrossed') || 'eye', onIconClick: handleIconClick })));
}

function InputNumber(_a) {
    var { name, value, maxCount, onChange, onChangeField, withMask } = _a, rest = __rest(_a, ["name", "value", "maxCount", "onChange", "onChangeField", "withMask"]);
    const handleInput = React.useCallback((e) => {
        const { value } = e.target;
        let numberedValue = Number(value);
        if (value.trim()) {
            if (value.match(/[^\d]/g)) {
                const replacedValue = value.replace(/[^\d]/g, '');
                numberedValue = (replacedValue && Number(replacedValue)) || -1;
            }
        }
        else {
            numberedValue = -1;
        }
        if (!withMask && maxCount && numberedValue > maxCount) {
            numberedValue = Number(maxCount);
        }
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(numberedValue, name);
        onChange === null || onChange === void 0 ? void 0 : onChange(numberedValue);
    }, [maxCount, name, onChange, onChangeField, withMask]);
    const validValue = React.useMemo(() => {
        if (value && value > -1) {
            if (!withMask && maxCount) {
                return (Number(value) > maxCount && maxCount) || value;
            }
        }
        return value;
    }, [value, withMask, maxCount]);
    return (React__default.createElement(Input$1, Object.assign({}, rest, { value: validValue, name: name, onInput: handleInput })));
}

function Textarea$1(_a) {
    var { name, className, onChange, onChangeField, label, htmlFor = true, hasDirty, hasError, disabled, hint, error } = _a, rest = __rest(_a, ["name", "className", "onChange", "onChangeField", "label", "htmlFor", "hasDirty", "hasError", "disabled", "hint", "error"]);
    const handleCallback = React.useCallback((e) => {
        const { value } = e.target;
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        onChangeField === null || onChangeField === void 0 ? void 0 : onChangeField(value, name);
    }, [onChange, onChangeField, name]);
    const forId = (htmlFor && label && v4()) || '';
    return (React__default.createElement(FormField, { className: className, label: label, disabled: disabled, forId: forId, hasDirty: hasDirty, hasError: hasError, hint: hint, error: error },
        React__default.createElement(InputDynamic, Object.assign({}, rest, { id: forId, disabled: disabled, hasDirty: hasDirty, hasError: hasError, tag: "textarea", name: name, onChange: handleCallback }))));
}

exports.AutoCloseNotification = AutoCloseNotification;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox$1;
exports.CheckboxDeprecated = Checkbox;
exports.Circle = Circle;
exports.DDMMYYYY = DDMMYYYY;
exports.DatePicker = DatePicker;
exports.Dots = Dots;
exports.Dropdown = Dropdown$1;
exports.DropdownDeprecated = Dropdown;
exports.FormField = FormField;
exports.Illustrations = Illustrations;
exports.Input = Input$1;
exports.InputBase = InputBase;
exports.InputDeprecated = Input;
exports.InputNumber = InputNumber;
exports.InputPassword = InputPassword;
exports.Label = Label;
exports.Link = Link;
exports.ModalLayer = ModalLayer;
exports.Multicolor = Multicolor;
exports.Notification = Notification;
exports.NotificationsContainer = NotificationsContainer;
exports.Paging = Paging;
exports.Radio = Radio$1;
exports.RadioDeprecated = Radio;
exports.RadioGroup = RadioGroup$1;
exports.RadioGroupDeprecated = RadioGroup;
exports.SimpleIcon = SimpleIcon;
exports.Textarea = Textarea$1;
exports.TextareaDeprecated = Textarea;
exports.Tooltip = Tooltip;
exports.Typography = Typography;
exports.TypographyDeprecated = Typography$1;
exports.YYYYMMDDHHmmss = YYYYMMDDHHmmss;
exports.dayjs = dayjs_min;
exports.safeParse = safeParse;
exports.toast = toast;
//# sourceMappingURL=index.js.map
