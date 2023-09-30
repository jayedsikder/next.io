import {
	a as Z,
	b as O
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-YI2K3KWV.mjs";
import {
	c as De
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-KQBCMZK7.mjs";
import {
	a as ar
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-IA44VQQ2.mjs";
import {
	a as Te,
	b as Ke,
	c as ee,
	d as Le
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-BQSI2E4X.mjs";
import {
	a as er,
	b as rr,
	c as tr,
	d as or,
	e as nr,
	f as ir
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-654WRPIV.mjs";
import {
	A as ce,
	B as de,
	C as je,
	a as Ae,
	b as Be,
	c as Me,
	d as le,
	e as pe,
	f as me,
	n as Ve,
	o as Qe,
	p as Oe,
	q as $e,
	r as Je,
	s as Ge,
	t as Ze,
	u as X,
	v as E,
	w as q,
	x as ke,
	y as f,
	z as fe
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-A4JW2NJ2.mjs";
import {
	a as Ie,
	b as F,
	d as r
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-A747MPFF.mjs";
import {
	a as ve,
	b as e,
	c as o
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-TUNJAFP7.mjs";
import "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-WVSZ6C2A.mjs";
import {
	$d as se,
	Jc as k,
	Pd as C,
	Qd as l,
	Xd as W,
	Yd as H,
	Zd as d,
	fe as We,
	ke as Xe,
	me as n,
	na as D,
	nb as u,
	ne as Ee,
	oa as U,
	pa as Ue,
	pe as qe,
	rd as t,
	re as J,
	se as G
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-3W72GGFJ.mjs";
import {
	C as Re,
	F as Y,
	d as ze,
	o as N
} from "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-XZ3MHRJZ.mjs";
import "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-PBBSTFBS.mjs";
import "https://framerusercontent.com/sites/76iY6VaPzrc4ez5hml1rjq/chunk-TGUT4IE2.mjs";
var ur = l(Te),
	yr = l(f),
	wr = {
		H2DDZC4Y0: {
			hover: !0
		}
	},
	br = ["H2DDZC4Y0", "ltnSvweTF"],
	_r = {
		H2DDZC4Y0: "framer-v-xattrb",
		ltnSvweTF: "framer-v-1588g5w"
	};

function vr(i, ...h) {
	let x = {};
	return h?.forEach(I => I && Object.assign(x, i[I])), x
}
var Vr = {
		"Variant 1": "H2DDZC4Y0",
		"Variant 2": "ltnSvweTF"
	},
	kr = {
		default: {
			type: "spring",
			ease: [.44, 0, .56, 1],
			duration: .3,
			delay: 0,
			stiffness: 500,
			damping: 60,
			mass: 1
		},
		"H2DDZC4Y0-hover": {
			type: "tween",
			ease: [.44, 0, .56, 1],
			duration: .3,
			delay: 0,
			stiffness: 500,
			damping: 60,
			mass: 1
		}
	},
	sr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	Tr = () => {
		let i = Y(null);
		return i.current === null && (i.current = Array(5).fill(0).map(() => sr[Math.floor(Math.random() * sr.length)]).join("")), i.current
	},
	Kr = N(function({
		id: i,
		style: h = {},
		className: x,
		width: I,
		height: ie,
		layoutId: c,
		variant: y = "H2DDZC4Y0",
		...P
	}, T) {
		let R = Vr[y] || y,
			{
				variants: a,
				baseVariant: _,
				gestureVariant: B,
				classNames: M,
				transition: w,
				setVariant: K,
				setGestureState: j
			} = W({
				defaultVariant: "H2DDZC4Y0",
				variant: R,
				transitions: kr,
				variantClassNames: _r,
				enabledGestures: wr,
				cycleOrder: br
			}),
			s = a.join("-") + P.layoutDependency,
			{
				activeVariantCallback: v,
				delay: V
			} = se(_),
			g = v(async (...xr) => {
				K("ltnSvweTF")
			}),
			L = () => _ === "ltnSvweTF",
			Q = () => _ !== "ltnSvweTF",
			p = Tr(),
			{
				pointerEvents: m,
				..._e
			} = h;
		return e(F, {
			id: c ?? p,
			children: e(r.div, {
				"data-framer-generated": !0,
				initial: R,
				animate: a,
				onHoverStart: () => j({
					isHovered: !0
				}),
				onHoverEnd: () => j({
					isHovered: !1
				}),
				onTapStart: () => j({
					isPressed: !0
				}),
				onTap: () => j({
					isPressed: !1
				}),
				onTapCancel: () => j({
					isPressed: !1
				}),
				className: u("framer-ehPL5", q, M),
				style: {
					display: "contents",
					pointerEvents: m ?? "auto"
				},
				children: o(r.div, {
					...P,
					className: u("framer-xattrb", x),
					style: {
						..._e
					},
					layoutId: "H2DDZC4Y0",
					transition: w,
					layoutDependency: s,
					background: null,
					"data-framer-name": "Variant 1",
					ref: T,
					...vr({
						ltnSvweTF: {
							"data-framer-name": "Variant 2"
						}
					}, _, B),
					children: [L() && e(r.div, {
						style: {},
						className: "framer-t0u3by-container",
						layoutId: "xzgga78OF-container",
						transition: w,
						layoutDependency: s,
						children: e(Te, {
							width: "100%",
							height: "100%",
							layoutId: "xzgga78OF",
							id: "xzgga78OF",
							type: "url",
							url: "https://my.spline.design/framercopy-bd9e7275da55ebaf7252e8a0e4e0055f/",
							html: "",
							style: {
								width: "100%",
								height: "100%"
							}
						})
					}), Q() && e(k, {
						className: "framer-1sws33j",
						style: {},
						layoutId: "LbXuTsO3U",
						transition: w,
						layoutDependency: s,
						background: {
							src: new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg").href,
							srcSet: `${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg").href} 3840w`,
							pixelWidth: 3840,
							pixelHeight: 2e3,
							intrinsicWidth: 3840,
							intrinsicHeight: 2e3,
							fit: "fill"
						},
						"data-highlight": !0,
						alt: "",
						onTap: g,
						children: o(r.div, {
							className: "framer-8nn08p",
							style: {
								borderBottomLeftRadius: 20,
								borderBottomRightRadius: 20,
								borderTopRightRadius: 20,
								borderTopLeftRadius: 20,
								backgroundColor: "rgba(255, 255, 255, 0.1)",
								opacity: 0,
								"--border-bottom-width": "1px",
								"--border-top-width": "1px",
								"--border-right-width": "1px",
								"--border-left-width": "1px",
								"--border-style": "solid",
								"--border-color": "rgba(255, 255, 255, 0.1)"
							},
							transformTemplate: (xr, gr) => `translate(-50%, -50%) ${gr}`,
							layoutId: "htCdfygAa",
							transition: w,
							layoutDependency: s,
							"data-border": !0,
							variants: {
								"H2DDZC4Y0-hover": {
									opacity: 1
								}
							},
							children: [e(t, {
								className: "framer-yvxyy1",
								style: {
									"--framer-paragraph-spacing": "0px",
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
									whiteSpace: "pre",
									"--extracted-1w3ko1f": "rgb(255, 255, 255)"
								},
								layoutId: "vehO9mce9",
								transition: w,
								layoutDependency: s,
								fonts: [],
								withExternalLayout: !0,
								verticalAlignment: "top",
								__fromCanvasComponent: !0,
								__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
								htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Click to view in 3D</span></p>'
							}), e(r.div, {
								style: {},
								className: "framer-1lvw0tt-container",
								layoutId: "v11za0ecX-container",
								transition: w,
								layoutDependency: s,
								children: e(f, {
									width: "100%",
									height: "100%",
									layoutId: "v11za0ecX",
									id: "v11za0ecX",
									selectByList: !0,
									iconSelection: "Cube",
									iconSearch: "House",
									color: "rgb(255, 255, 255)",
									weight: "duotone",
									mirrored: !1,
									style: {
										width: "100%",
										height: "100%"
									}
								})
							})]
						})
					})]
				})
			})
		})
	}),
	jr = ['.framer-ehPL5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ehPL5 * { box-sizing: border-box; }", ".framer-ehPL5 .framer-xattrb { position: relative; overflow: hidden; width: 1200px; height: 800px; }", ".framer-ehPL5 .framer-t0u3by-container { position: absolute; width: 100%; height: 100%; left: calc(50.00000000000002% - 100% / 2); top: calc(50.00000000000002% - 100% / 2); flex: none; }", ".framer-ehPL5 .framer-1sws33j { position: absolute; cursor: pointer; overflow: visible; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; }", ".framer-ehPL5 .framer-8nn08p { position: absolute; overflow: visible; width: min-content; height: min-content; left: 50%; top: 51%; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 4px 16px 4px 16px; }", ".framer-ehPL5 .framer-yvxyy1 { position: relative; width: auto; height: auto; flex: none; white-space: pre; }", ".framer-ehPL5 .framer-1lvw0tt-container { position: relative; width: 16px; height: 16px; flex: none; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ehPL5 framer-8nn08p > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ehPL5 framer-8nn08p > :first-child { margin-left: 0px; } .framer-ehPL5 framer-8nn08p > :last-child { margin-right: 0px; } }", ".framer-ehPL5.framer-v-xattrb .framer-xattrb { cursor: pointer; }", ".framer-ehPL5.framer-v-xattrb.hover .framer-8nn08p { width: min-content; height: min-content; right: auto; bottom: auto; left: 50%; top: 50%; flex: none; aspect-ratio: unset; }", ".framer-ehPL5.framer-v-xattrb.hover .framer-yvxyy1 { order: 0; }", ".framer-ehPL5.framer-v-xattrb.hover .framer-1lvw0tt-container { order: 1; }", ...E],
	re = H(Kr, jr),
	Pe = re;
re.displayName = "3D Asset";
re.defaultProps = {
	width: 1200,
	height: 800
};
U(re, {
	variant: {
		type: D.Enum,
		title: "Variant",
		options: ["H2DDZC4Y0", "ltnSvweTF"],
		optionTitles: ["Variant 1", "Variant 2"]
	}
});
C(re, [...ur, ...yr, ...X]);
var Lr = l(f),
	Sr = {
		lBT0jbLLt: {
			hover: !0
		}
	},
	Pr = ["lBT0jbLLt"],
	Nr = {
		lBT0jbLLt: "framer-v-1s1q65p"
	};
var Yr = {},
	Cr = {
		default: {
			type: "spring",
			ease: [.44, 0, .56, 1],
			duration: .3,
			delay: 0,
			stiffness: 500,
			damping: 60,
			mass: 1
		}
	},
	lr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	Hr = () => {
		let i = Y(null);
		return i.current === null && (i.current = Array(5).fill(0).map(() => lr[Math.floor(Math.random() * lr.length)]).join("")), i.current
	},
	Fr = N(function({
		id: i,
		style: h = {},
		className: x,
		width: I,
		height: ie,
		layoutId: c,
		variant: y = "lBT0jbLLt",
		title: P = "Updated for iOS 16",
		...T
	}, A) {
		let a = Yr[y] || y,
			{
				variants: _,
				baseVariant: B,
				gestureVariant: M,
				classNames: w,
				transition: K,
				setVariant: j,
				setGestureState: s
			} = W({
				defaultVariant: "lBT0jbLLt",
				variant: a,
				transitions: Cr,
				variantClassNames: Nr,
				enabledGestures: Sr,
				cycleOrder: Pr
			}),
			v = _.join("-") + T.layoutDependency,
			V = Hr(),
			{
				pointerEvents: g,
				...L
			} = h;
		return e(F, {
			id: c ?? V,
			children: e(r.div, {
				"data-framer-generated": !0,
				initial: a,
				animate: _,
				onHoverStart: () => s({
					isHovered: !0
				}),
				onHoverEnd: () => s({
					isHovered: !1
				}),
				onTapStart: () => s({
					isPressed: !0
				}),
				onTap: () => s({
					isPressed: !1
				}),
				onTapCancel: () => s({
					isPressed: !1
				}),
				className: u("framer-2DLwS", q, w),
				style: {
					display: "contents",
					pointerEvents: g ?? "auto"
				},
				children: o(r.div, {
					...T,
					className: u("framer-1s1q65p", x),
					style: {
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,
						borderTopRightRadius: 20,
						borderTopLeftRadius: 20,
						backgroundColor: "rgba(255, 255, 255, 0.1)",
						"--border-bottom-width": "1px",
						"--border-top-width": "1px",
						"--border-right-width": "1px",
						"--border-left-width": "1px",
						"--border-style": "solid",
						"--border-color": "rgba(255, 255, 255, 0.1)",
						...L
					},
					layoutId: "lBT0jbLLt",
					transition: K,
					layoutDependency: v,
					"data-framer-name": "Variant 1",
					"data-border": !0,
					ref: A,
					variants: {
						"lBT0jbLLt-hover": {
							backgroundColor: "rgba(0, 0, 0, 0.1)"
						}
					},
					children: [e(t, {
						className: "framer-1jwj6tg",
						style: {
							"--framer-paragraph-spacing": "0px",
							"--framer-link-text-color": "rgb(0, 153, 255)",
							"--framer-link-text-decoration": "underline",
							whiteSpace: "pre",
							"--extracted-1w3ko1f": "rgb(255, 255, 255)"
						},
						layoutId: "iRK67Fz3m",
						transition: K,
						layoutDependency: v,
						fonts: [],
						withExternalLayout: !0,
						verticalAlignment: "top",
						__fromCanvasComponent: !0,
						__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
						htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Updated for iOS 16</span></p>',
						textFromDesign: P
					}), e(r.div, {
						style: {
							opacity: 1
						},
						className: "framer-skpnn8-container",
						layoutId: "eMVBttOYq-container",
						transition: K,
						layoutDependency: v,
						variants: {
							"lBT0jbLLt-hover": {
								opacity: .5
							}
						},
						children: e(f, {
							width: "100%",
							height: "100%",
							layoutId: "eMVBttOYq",
							id: "eMVBttOYq",
							selectByList: !0,
							iconSelection: "ArrowRight",
							iconSearch: "House",
							color: "rgb(255, 255, 255)",
							weight: "duotone",
							mirrored: !1,
							style: {
								width: "100%",
								height: "100%"
							}
						})
					})]
				})
			})
		})
	}),
	zr = ['.framer-2DLwS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-2DLwS * { box-sizing: border-box; }", ".framer-2DLwS .framer-1s1q65p { position: relative; overflow: visible; width: min-content; height: min-content; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 4px 16px 4px 16px; }", ".framer-2DLwS .framer-1jwj6tg { position: relative; width: auto; height: auto; flex: none; white-space: pre; }", ".framer-2DLwS .framer-skpnn8-container { position: relative; width: 16px; height: 16px; flex: none; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-2DLwS framer-1s1q65p > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-2DLwS framer-1s1q65p > :first-child { margin-left: 0px; } .framer-2DLwS framer-1s1q65p > :last-child { margin-right: 0px; } }", ".framer-2DLwS.framer-v-1s1q65p .framer-1s1q65p { cursor: pointer; }", ".framer-2DLwS.framer-v-1s1q65p.hover .framer-1s1q65p { display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-2DLwSframer-1s1q65p > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-2DLwSframer-1s1q65p > :first-child { margin-left: 0px; } .framer-2DLwSframer-1s1q65p > :last-child { margin-right: 0px; } }", ...E],
	te = H(Fr, zr),
	Ne = te;
te.displayName = "Button Update";
te.defaultProps = {
	width: 178,
	height: 29
};
U(te, {
	ZXT0hMirU: {
		type: D.String,
		title: "Title",
		defaultValue: "Updated for iOS 16",
		displayTextArea: !1
	}
});
C(te, [...Lr, ...X]);
var Dr = l(f),
	Ur = {
		iUehSUYq8: {
			hover: !0
		}
	},
	Wr = ["iUehSUYq8"],
	Xr = {
		iUehSUYq8: "framer-v-wq259l"
	};
var Er = {},
	qr = {
		default: {
			type: "spring",
			ease: [.44, 0, .56, 1],
			duration: .3,
			delay: 0,
			stiffness: 500,
			damping: 60,
			mass: 1
		}
	},
	pr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	Ir = () => {
		let i = Y(null);
		return i.current === null && (i.current = Array(5).fill(0).map(() => pr[Math.floor(Math.random() * pr.length)]).join("")), i.current
	},
	Ar = N(function({
		id: i,
		style: h = {},
		className: x,
		width: I,
		height: ie,
		layoutId: c,
		variant: y = "iUehSUYq8",
		title: P = "Watch video",
		...T
	}, A) {
		let a = Er[y] || y,
			{
				variants: _,
				baseVariant: B,
				gestureVariant: M,
				classNames: w,
				transition: K,
				setVariant: j,
				setGestureState: s
			} = W({
				defaultVariant: "iUehSUYq8",
				variant: a,
				transitions: qr,
				variantClassNames: Xr,
				enabledGestures: Ur,
				cycleOrder: Wr
			}),
			v = _.join("-") + T.layoutDependency,
			V = Ir(),
			{
				pointerEvents: g,
				...L
			} = h;
		return e(F, {
			id: c ?? V,
			children: e(r.div, {
				"data-framer-generated": !0,
				initial: a,
				animate: _,
				onHoverStart: () => s({
					isHovered: !0
				}),
				onHoverEnd: () => s({
					isHovered: !1
				}),
				onTapStart: () => s({
					isPressed: !0
				}),
				onTap: () => s({
					isPressed: !1
				}),
				onTapCancel: () => s({
					isPressed: !1
				}),
				className: u("framer-tt29k", me, w),
				style: {
					display: "contents",
					pointerEvents: g ?? "auto"
				},
				children: o(r.div, {
					...T,
					className: u("framer-wq259l", x),
					style: {
						borderTopLeftRadius: 24,
						borderTopRightRadius: 24,
						borderBottomRightRadius: 0,
						borderBottomLeftRadius: 24,
						WebkitBackdropFilter: "blur(40px)",
						backdropFilter: "blur(40px)",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						"--border-bottom-width": "1px",
						"--border-top-width": "1px",
						"--border-right-width": "1px",
						"--border-left-width": "1px",
						"--border-style": "solid",
						"--border-color": "rgba(255, 255, 255, 0.1)",
						...L
					},
					layoutId: "iUehSUYq8",
					transition: K,
					layoutDependency: v,
					"data-framer-name": "Variant 1",
					"data-border": !0,
					ref: A,
					variants: {
						"iUehSUYq8-hover": {
							backgroundColor: "rgba(0, 0, 0, 0.2)",
							"--border-bottom-width": "1px",
							"--border-top-width": "1px",
							"--border-right-width": "1px",
							"--border-left-width": "1px",
							"--border-style": "solid",
							"--border-color": "rgba(255, 255, 255, 0.2)"
						}
					},
					children: [e(r.div, {
						style: {},
						className: "framer-jyy545-container",
						layoutId: "Gb9nyb257-container",
						transition: K,
						layoutDependency: v,
						children: e(f, {
							width: "100%",
							height: "100%",
							layoutId: "Gb9nyb257",
							id: "Gb9nyb257",
							selectByList: !0,
							iconSelection: "Play",
							iconSearch: "House",
							color: "rgb(255, 136, 170)",
							weight: "duotone",
							mirrored: !1,
							style: {
								width: "100%",
								height: "100%"
							}
						})
					}), e(t, {
						className: "framer-10p8sz7",
						style: {
							"--framer-paragraph-spacing": "0px",
							"--framer-link-text-color": "rgb(0, 153, 255)",
							"--framer-link-text-decoration": "underline",
							whiteSpace: "pre",
							"--extracted-1w3ko1f": "rgb(255, 255, 255)",
							opacity: 1
						},
						layoutId: "E37jAwC2c",
						transition: K,
						layoutDependency: v,
						fonts: [],
						withExternalLayout: !0,
						verticalAlignment: "top",
						__fromCanvasComponent: !0,
						__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
						htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Watch video</span></p>',
						textFromDesign: P,
						variants: {
							"iUehSUYq8-hover": {
								opacity: .6
							}
						}
					})]
				})
			})
		})
	}),
	Br = ['.framer-tt29k [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-tt29k * { box-sizing: border-box; }", ".framer-tt29k .framer-wq259l { position: relative; overflow: visible; width: 220px; height: min-content; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 16px; padding: 10px 10px 10px 10px; }", ".framer-tt29k .framer-jyy545-container { position: relative; width: 30px; height: 30px; flex: none; }", ".framer-tt29k .framer-10p8sz7 { position: relative; width: auto; height: auto; flex: none; white-space: pre; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-tt29k framer-wq259l > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-tt29k framer-wq259l > :first-child { margin-left: 0px; } .framer-tt29k framer-wq259l > :last-child { margin-right: 0px; } }", ".framer-tt29k.framer-v-wq259l .framer-wq259l { cursor: pointer; }", ".framer-tt29k.framer-v-wq259l.hover .framer-wq259l { display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 20px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-tt29kframer-wq259l > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-tt29kframer-wq259l > :first-child { margin-left: 0px; } .framer-tt29kframer-wq259l > :last-child { margin-right: 0px; } }", ...pe],
	ae = H(Ar, Br),
	Ye = ae;
ae.displayName = "Button Watch";
ae.defaultProps = {
	width: 220,
	height: 50
};
U(ae, {
	ggVetQkdR: {
		type: D.String,
		title: "Title",
		defaultValue: "Watch video",
		displayTextArea: !1
	}
});
C(ae, [...Dr, ...le]);
var Qr = l(f),
	ye = Ue(f),
	Or = ["y71DZB6xx"],
	$r = {
		y71DZB6xx: "framer-v-10o4lmc"
	};
var Jr = {},
	Gr = {
		default: {
			type: "spring",
			ease: [.44, 0, .56, 1],
			duration: .3,
			delay: 0,
			stiffness: 500,
			damping: 60,
			mass: 1
		}
	},
	mr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	Zr = () => {
		let i = Y(null);
		return i.current === null && (i.current = Array(5).fill(0).map(() => mr[Math.floor(Math.random() * mr.length)]).join("")), i.current
	},
	et = N(function({
		id: i,
		style: h = {},
		className: x,
		width: I,
		height: ie,
		layoutId: c,
		variant: y = "y71DZB6xx",
		icon: P = "Pen",
		title: T = "Flexible components",
		text: A = "No more complicated workflows. Just design and publish. That\u2019s it.",
		...R
	}, a) {
		let B = Jr[y] || y,
			{
				variants: M,
				baseVariant: w,
				gestureVariant: K,
				classNames: j,
				transition: s,
				setVariant: v,
				setGestureState: V
			} = W({
				defaultVariant: "y71DZB6xx",
				variant: B,
				transitions: Gr,
				variantClassNames: $r,
				cycleOrder: Or
			}),
			g = M.join("-") + R.layoutDependency,
			L = Zr(),
			{
				pointerEvents: Q,
				...p
			} = h;
		return e(F, {
			id: c ?? L,
			children: e(r.div, {
				"data-framer-generated": !0,
				initial: B,
				animate: M,
				onHoverStart: () => V({
					isHovered: !0
				}),
				onHoverEnd: () => V({
					isHovered: !1
				}),
				onTapStart: () => V({
					isPressed: !0
				}),
				onTap: () => V({
					isPressed: !1
				}),
				onTapCancel: () => V({
					isPressed: !1
				}),
				className: u("framer-FHh4c", de, q, j),
				style: {
					display: "contents",
					pointerEvents: Q ?? void 0
				},
				children: o(r.div, {
					...R,
					className: u("framer-10o4lmc", x),
					style: {
						borderBottomLeftRadius: 25,
						borderBottomRightRadius: 25,
						borderTopRightRadius: 25,
						borderTopLeftRadius: 25,
						backgroundColor: "rgba(0, 0, 0, 0.4)",
						"--border-bottom-width": "1px",
						"--border-top-width": "1px",
						"--border-right-width": "1px",
						"--border-left-width": "1px",
						"--border-style": "solid",
						"--border-color": "rgba(255, 255, 255, 0.1)",
						...p
					},
					layoutId: "y71DZB6xx",
					transition: s,
					layoutDependency: g,
					"data-framer-name": "Variant 1",
					"data-border": !0,
					ref: a,
					children: [e(r.div, {
						style: {},
						className: "framer-1y7cyz7-container",
						layoutId: "NEi28rAv2-container",
						transition: s,
						layoutDependency: g,
						children: e(f, {
							width: "100%",
							height: "100%",
							layoutId: "NEi28rAv2",
							id: "NEi28rAv2",
							selectByList: !0,
							iconSelection: P,
							iconSearch: "House",
							color: "rgb(255, 133, 133)",
							weight: "duotone",
							mirrored: !1,
							style: {
								width: "100%",
								height: "100%"
							}
						})
					}), e(t, {
						className: "framer-vw67jf",
						style: {
							"--framer-paragraph-spacing": "0px",
							"--framer-link-text-color": "rgb(0, 153, 255)",
							"--framer-link-text-decoration": "underline",
							whiteSpace: "pre",
							"--extracted-1w3ko1f": "rgb(255, 255, 255)"
						},
						layoutId: "lqnZwsIYl",
						transition: s,
						layoutDependency: g,
						fonts: [],
						withExternalLayout: !0,
						verticalAlignment: "top",
						__fromCanvasComponent: !0,
						__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
						htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Flexible components</span></p>',
						textFromDesign: T
					}), e(t, {
						className: "framer-qbo1zr",
						style: {
							"--framer-paragraph-spacing": "0px",
							"--framer-link-text-color": "rgb(0, 153, 255)",
							"--framer-link-text-decoration": "underline",
							whiteSpace: "pre-wrap",
							wordWrap: "break-word",
							wordBreak: "break-word",
							"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.7)"
						},
						layoutId: "mUJj8sJn4",
						transition: s,
						layoutDependency: g,
						fonts: [],
						withExternalLayout: !0,
						verticalAlignment: "top",
						__fromCanvasComponent: !0,
						__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
						htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">No more complicated workflows. Just design and publish. That\u2019s it.</span></p>',
						textFromDesign: A
					})]
				})
			})
		})
	}),
	rt = ['.framer-FHh4c [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-FHh4c * { box-sizing: border-box; }", ".framer-FHh4c .framer-10o4lmc { position: relative; overflow: visible; width: 247px; height: 196px; display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 30px 20px 30px 20px; }", ".framer-FHh4c .framer-1y7cyz7-container { position: relative; width: 32px; height: 32px; flex: none; }", ".framer-FHh4c .framer-vw67jf { position: relative; width: auto; height: auto; flex: none; white-space: pre; }", ".framer-FHh4c .framer-qbo1zr { position: relative; width: 100%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FHh4c framer-10o4lmc > * { margin: 0px; margin-top: calc(10px / 2); margin-bottom: calc(10px / 2); } .framer-FHh4c framer-10o4lmc > :first-child { margin-top: 0px; } .framer-FHh4c framer-10o4lmc > :last-child { margin-bottom: 0px; } }", ...ce, ...E],
	oe = H(et, rt),
	ne = oe;
oe.displayName = "Feature";
oe.defaultProps = {
	width: 247,
	height: 196
};
U(oe, {
	RkMYlZf9s: ye?.iconSelection && {
		...ye.iconSelection,
		hidden: void 0,
		title: "Icon",
		defaultValue: "Pen"
	},
	dD09scwrT: {
		type: D.String,
		title: "Title",
		defaultValue: "Flexible components",
		displayTextArea: !1
	},
	xguCKg5m7: {
		type: D.String,
		title: "Text",
		defaultValue: "No more complicated workflows. Just design and publish. That\u2019s it.",
		displayTextArea: !1
	}
});
C(oe, [...Qr, ...fe, ...X]);
var fr = G(t),
	S = J(t),
	Ce = G(k),
	b = J(r.div),
	tt = l(ke),
	at = l(Pe),
	ot = l(Ne),
	nt = l(Ke),
	it = l(Ye),
	st = l(ne),
	lt = l(Z),
	pt = l(O),
	mt = l(je),
	we = G(d),
	He = J(k),
	z = J(d),
	ft = l(ee),
	ct = l(f),
	dt = l(Le),
	$ = G(r.div),
	ht = l(Ve);
var dr = {
		N5jVBZ2oJ: "(min-width: 1600px)",
		WQLkyLRf1: "(min-width: 1200px) and (max-width: 1599px)",
		whrfYvRBp: "(min-width: 810px) and (max-width: 1199px)",
		vmE1JiIHl: "(max-width: 809px)"
	},
	Fe = typeof document < "u",
	hr = {
		WQLkyLRf1: "framer-v-72rtr7",
		whrfYvRBp: "framer-v-1wv4xmw",
		vmE1JiIHl: "framer-v-1o9hupe",
		N5jVBZ2oJ: "framer-v-1pu3sxf"
	};
Fe && qe("WQLkyLRf1", dr, hr);
var xt = {
		Desktop: "WQLkyLRf1",
		Tablet: "whrfYvRBp",
		Phone: "vmE1JiIHl",
		Large: "N5jVBZ2oJ"
	},
	gt = {
		default: {
			duration: 0
		}
	};

function ut({
	children: i
}) {
	let [h, x] = We();
	return i({
		visible: h,
		show: () => x(!0),
		hide: () => x(!1),
		toggle: () => x(!h)
	})
}
var cr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	yt = () => {
		let i = Y(null);
		return i.current === null && (i.current = Array(5).fill(0).map(() => cr[Math.floor(Math.random() * cr.length)]).join("")), i.current
	},
	wt = N(function({
		id: i,
		style: h = {},
		className: x,
		width: I,
		height: ie,
		layoutId: c,
		variant: y = "WQLkyLRf1",
		...P
	}, T) {
		let R = xt[y] || y;
		Re(() => {
			let p = ar();
			if (document.title = p.title || "", p.viewport) {
				var m;
				(m = document.querySelector('meta[name="viewport"]')) === null || m === void 0 || m.setAttribute("content", p.viewport)
			}
		}, []);
		let [a, _] = Ee(R, dr, !1), B = void 0, M = gt.default, {
			activeVariantCallback: w,
			delay: K
		} = se(), j = p => w(async (...m) => {
			p.toggle()
		}), s = p => w(async (...m) => {
			p.hide()
		}), v = () => !!(!Fe || ["whrfYvRBp", "vmE1JiIHl"].includes(a)), V = () => Fe ? !["whrfYvRBp", "vmE1JiIHl"].includes(a) : !0, g = yt(), {
			pointerEvents: L,
			...Q
		} = h;
		return e(Xe.Provider, {
			value: {
				primaryVariantId: "WQLkyLRf1",
				variantClassNames: hr
			},
			children: e(F, {
				id: c ?? g,
				children: o(r.div, {
					"data-framer-generated": !0,
					className: u("framer-T7VKV", ir, Ze, tr, Me, me, q, de, $e),
					style: {
						display: "contents",
						pointerEvents: L ?? void 0
					},
					children: [o(r.div, {
						...P,
						className: u("framer-72rtr7", x),
						style: {
							...Q
						},
						name: "Desktop",
						ref: T,
						children: [e(n, {
							breakpoint: a,
							overrides: {
								whrfYvRBp: {
									transformTemplate: (p, m) => `translateX(-50%) ${m}`
								},
								vmE1JiIHl: {
									transformTemplate: (p, m) => `translateX(-50%) ${m}`
								},
								N5jVBZ2oJ: {
									transformTemplate: (p, m) => `translateX(-50%) ${m}`
								}
							},
							children: e(d, {
								className: "framer-1vbxwnv-container",
								transformTemplate: (p, m) => `translateX(-50%) ${m}`,
								layoutScroll: !0,
								children: e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											style: {
												width: "100%"
											}
										},
										vmE1JiIHl: {
											variant: "q9lb2XYeY",
											style: {
												width: "100%"
											}
										},
										N5jVBZ2oJ: {
											style: {
												width: "100%"
											}
										}
									},
									children: e(ke, {
										width: "100%",
										height: "100%",
										layoutId: "PpXkJgdji",
										id: "PpXkJgdji",
										variant: "C9VCJawfM",
										style: {
											width: "100%"
										}
									})
								})
							})
						}), e(n, {
							breakpoint: a,
							overrides: {
								whrfYvRBp: {
									background: null
								},
								vmE1JiIHl: {
									background: null,
									intrinsicWidth: 2e3,
									transformTemplate: void 0
								},
								N5jVBZ2oJ: {
									background: null,
									intrinsicWidth: 6e3
								}
							},
							children: o(r.div, {
								className: "framer-ws79ko",
								name: "Hero",
								background: null,
								"data-framer-name": "Hero",
								children: [e(n, {
									breakpoint: a,
									overrides: {
										vmE1JiIHl: {
											background: {
												src: new URL("https://framerusercontent.com/images/BOqxcTaS4Z0GCSr8lL67Vl1I9E.jpg").href,
												srcSet: `${new URL("https://framerusercontent.com/images/BOqxcTaS4Z0GCSr8lL67Vl1I9E.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/BOqxcTaS4Z0GCSr8lL67Vl1I9E.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/BOqxcTaS4Z0GCSr8lL67Vl1I9E.jpg").href} 2000w`,
												sizes: "calc(((100vw * 1) * 1))",
												pixelWidth: 2e3,
												pixelHeight: 2e3,
												intrinsicWidth: 2e3,
												intrinsicHeight: 2e3,
												fit: "fill"
											},
											intrinsicWidth: 2e3
										}
									},
									children: v() && e(k, {
										className: "framer-ur0xi9 hidden-72rtr7 hidden-1pu3sxf",
										name: "Image",
										background: {
											src: new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg").href,
											srcSet: `${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/kFPtybNYWSz74ZUKzADjdSpSs4.jpg").href} 3840w`,
											sizes: "calc(((100vw * 1) * 1))",
											pixelWidth: 3840,
											pixelHeight: 2e3,
											intrinsicWidth: 3840,
											intrinsicHeight: 2e3,
											fit: "fill"
										},
										"data-framer-name": "Image",
										alt: ""
									})
								}), V() && e(we, {
									className: "framer-c1p3py-container hidden-1wv4xmw hidden-1o9hupe",
									exit: {
										x: 0,
										y: 0,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .8,
											ease: [.44, 0, .56, 1],
											delay: .1
										}
									},
									initial: {
										x: 0,
										y: 0,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0
									},
									animate: {
										x: 0,
										y: 0,
										scale: 1,
										opacity: 1,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .8,
											ease: [.44, 0, .56, 1],
											delay: .1
										}
									},
									__framer__speed: 80,
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									children: e(Pe, {
										width: "100%",
										height: "100%",
										layoutId: "QcWRYo1po",
										id: "QcWRYo1po",
										variant: "H2DDZC4Y0",
										style: {
											width: "100%",
											height: "100%"
										}
									})
								}), e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											transformTemplate: void 0,
											background: null
										},
										vmE1JiIHl: {
											transformTemplate: void 0,
											background: null
										},
										N5jVBZ2oJ: {
											transformTemplate: void 0,
											background: null
										}
									},
									children: o(r.div, {
										className: "framer-1gltdb",
										name: "Content",
										background: null,
										"data-framer-name": "Content",
										children: [e(d, {
											className: "framer-5sfnq1-container",
											exit: {
												x: 0,
												y: -20,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .2
												}
											},
											initial: {
												x: 0,
												y: -20,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .2
												}
											},
											children: e(Ne, {
												width: "100%",
												height: "100%",
												layoutId: "x0j_yzOG0",
												id: "x0j_yzOG0",
												title: "Updated for iOS 16"
											})
										}), e(n, {
											breakpoint: a,
											overrides: {
												vmE1JiIHl: {
													fonts: [],
													__htmlStructure: '<h1 class="framer-styles-preset-o3e5h0" data-styles-preset="stylesPresetHeading1" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1sp2osd);">{{ text-placeholder }}</span></h1>',
													htmlFromDesign: '<h1 class="framer-styles-preset-o3e5h0" data-styles-preset="stylesPresetHeading1" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1sp2osd);">Mix 3D <br>and 2D design <br>with Jayed</span></h1>',
													preload: []
												}
											},
											children: e(fr, {
												className: "framer-10mrn1k",
												style: {
													whiteSpace: "pre-wrap",
													wordWrap: "break-word",
													wordBreak: "break-word",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1sp2osd": "rgb(255, 255, 255)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												initial: {
													x: 0,
													y: -15,
													scale: 1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0
												},
												animate: {
													x: 0,
													y: 0,
													scale: 1,
													opacity: 1,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .3
													}
												},
												exit: {
													x: 0,
													y: -15,
													scale: 1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .3
													}
												},
												__htmlStructure: '<h1 class="framer-styles-preset-o3e5h0" data-styles-preset="stylesPresetHeading1"><span style="--framer-text-color:var(--extracted-1sp2osd);">{{ text-placeholder }}</span></h1>',
												htmlFromDesign: '<h1 class="framer-styles-preset-o3e5h0" data-styles-preset="stylesPresetHeading1"><span style="--framer-text-color:var(--extracted-1sp2osd);">Mix 3D <br>and 2D design <br>with Framer</span></h1>',
												__framer__speed: 90,
												__framer__adjustPosition: !1,
												__framer__offset: 0
											})
										}), e(n, {
											breakpoint: a,
											overrides: {
												vmE1JiIHl: {
													fonts: [],
													__htmlStructure: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">This is a demo showing a fully responsive page with a Spline 3D asset with mouse over interaction. It falls back to an image on smaller devices.</span></p>',
													preload: []
												}
											},
											children: e(fr, {
												className: "framer-16u0u6i",
												style: {
													whiteSpace: "pre-wrap",
													wordWrap: "break-word",
													wordBreak: "break-word",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1w3ko1f": "rgb(255, 255, 255)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												initial: {
													x: 0,
													y: -10,
													scale: 1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0
												},
												animate: {
													x: 0,
													y: 0,
													scale: 1,
													opacity: 1,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .4
													}
												},
												exit: {
													x: 0,
													y: -10,
													scale: 1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .4
													}
												},
												__htmlStructure: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
												htmlFromDesign: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">This is a demo showing a fully responsive page with a Spline 3D asset with mouse over interaction. It falls back to an image on smaller devices.</span></p>',
												__framer__speed: 85,
												__framer__adjustPosition: !1,
												__framer__offset: 0
											})
										}), e(n, {
											breakpoint: a,
											overrides: {
												vmE1JiIHl: {
													background: null
												}
											},
											children: o($, {
												className: "framer-15y7aei",
												background: null,
												initial: {
													x: 0,
													y: -5,
													scale: 1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0
												},
												animate: {
													x: 0,
													y: 0,
													scale: 1,
													opacity: 1,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .5
													}
												},
												exit: {
													x: 0,
													y: -5,
													scale: 1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .5
													}
												},
												__framer__speed: 80,
												__framer__adjustPosition: !1,
												__framer__offset: 0,
												children: [e(ut, {
													children: p => e(ve, {
														children: o(d, {
															className: "framer-1r7r56c-container",
															children: [e(Ke, {
																width: "100%",
																height: "100%",
																layoutId: "luzEJypcj",
																id: "luzEJypcj",
																title: "Get the App",
																tap: j(p)
															}), e(Ie, {
																children: p.visible && e(ve, {
																	children: De(o(ze, {
																		children: [e(r.div, {
																			initial: {
																				opacity: 0
																			},
																			animate: {
																				opacity: 1,
																				transition: {
																					type: "tween",
																					duration: .3,
																					ease: [.5, 0, .88, .77],
																					delay: 0
																				}
																			},
																			exit: {
																				opacity: 0,
																				transition: {
																					type: "tween",
																					duration: 0,
																					ease: [0, 0, 1, 1],
																					delay: 0
																				}
																			},
																			className: "framer-1fdeldd",
																			onTap: () => p.hide()
																		}, "CxMqftA_x"), o("div", {
																			className: "framer-1fdeldd-container",
																			children: [e(r.div, {
																				className: "framer-vrqh0x",
																				background: null,
																				initial: {
																					x: 0,
																					y: 0,
																					scale: 1,
																					opacity: 0,
																					transformPerspective: 1200,
																					rotate: 0,
																					rotateX: 0,
																					rotateY: 0
																				},
																				animate: {
																					x: 0,
																					y: 0,
																					scale: 1,
																					opacity: 1,
																					transformPerspective: 1200,
																					rotate: 0,
																					rotateX: 0,
																					rotateY: 0,
																					transition: {
																						type: "tween",
																						duration: 1,
																						ease: [.44, 0, .56, 1],
																						delay: 0
																					}
																				},
																				exit: {
																					x: 0,
																					y: 0,
																					scale: 1,
																					opacity: 0,
																					transformPerspective: 1200,
																					rotate: 0,
																					rotateX: 0,
																					rotateY: 0,
																					transition: {
																						type: "tween",
																						duration: 1,
																						ease: [.44, 0, .56, 1],
																						delay: 0
																					}
																				},
																				onTap: s(p)
																			}, "hFhIrEnRX"), o(r.div, {
																				className: "framer-1w8vgtj",
																				transformTemplate: (m, _e) => `translate(-50%, -50%) ${_e}`,
																				name: "Modal",
																				"data-framer-name": "Modal",
																				initial: {
																					x: 0,
																					y: -40,
																					scale: 1,
																					opacity: 0,
																					transformPerspective: 1200,
																					rotate: 0,
																					rotateX: 0,
																					rotateY: 0
																				},
																				animate: {
																					x: 0,
																					y: 0,
																					scale: 1,
																					opacity: 1,
																					transformPerspective: 1200,
																					rotate: 0,
																					rotateX: 0,
																					rotateY: 0,
																					transition: {
																						type: "tween",
																						duration: .3,
																						ease: [.44, 0, .56, 1],
																						delay: 0
																					}
																				},
																				exit: {
																					x: 0,
																					y: -40,
																					scale: 1,
																					opacity: 0,
																					transformPerspective: 1200,
																					rotate: 0,
																					rotateX: 0,
																					rotateY: 0,
																					transition: {
																						type: "tween",
																						duration: .3,
																						ease: [.44, 0, .56, 1],
																						delay: 0
																					}
																				},
																				"data-border": !0,
																				children: [e(t, {
																					className: "framer-wkaa3",
																					style: {
																						whiteSpace: "pre",
																						"--framer-link-text-color": "rgb(0, 153, 255)",
																						"--framer-link-text-decoration": "underline",
																						"--framer-paragraph-spacing": "0px",
																						"--extracted-1qn201a": "rgb(255, 255, 255)"
																					},
																					fonts: [],
																					withExternalLayout: !0,
																					verticalAlignment: "top",
																					__fromCanvasComponent: !0,
																					initial: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0
																					},
																					animate: {
																						x: 0,
																						y: 0,
																						scale: 1,
																						opacity: 1,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .2
																						}
																					},
																					exit: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .2
																						}
																					},
																					__htmlStructure: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2"><span style="--framer-text-color:var(--extracted-1qn201a);">{{ text-placeholder }}</span></h2>',
																					htmlFromDesign: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2"><span style="--framer-text-color:var(--extracted-1qn201a);">Sign up</span></h2>'
																				}), e(t, {
																					className: "framer-109mv8h",
																					style: {
																						whiteSpace: "pre-wrap",
																						wordWrap: "break-word",
																						wordBreak: "break-word",
																						"--framer-link-text-color": "rgb(0, 153, 255)",
																						"--framer-link-text-decoration": "underline",
																						"--framer-paragraph-spacing": "0px",
																						"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.7)"
																					},
																					fonts: [],
																					withExternalLayout: !0,
																					verticalAlignment: "top",
																					__fromCanvasComponent: !0,
																					initial: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0
																					},
																					animate: {
																						x: 0,
																						y: 0,
																						scale: 1,
																						opacity: 1,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .3
																						}
																					},
																					exit: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .3
																						}
																					},
																					__htmlStructure: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
																					htmlFromDesign: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Access to 120+ hours of courses, tutorials and livestreams</span></p>'
																				}), e(d, {
																					className: "framer-4isr8v-container",
																					exit: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .4
																						}
																					},
																					initial: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0
																					},
																					animate: {
																						x: 0,
																						y: 0,
																						scale: 1,
																						opacity: 1,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .4
																						}
																					},
																					children: e(Ve, {
																						width: "100%",
																						height: "100%",
																						layoutId: "XYeQU6Uxy",
																						id: "XYeQU6Uxy",
																						formId: "",
																						withName: !0,
																						nameField: {
																							placeholder: "Email",
																							value: ""
																						},
																						withEmail: !0,
																						email: {
																							placeholder: "Password",
																							value: ""
																						},
																						withMessage: !1,
																						message: {
																							placeholder: "Message",
																							value: ""
																						},
																						layout: "vertical",
																						inputs: {
																							fill: "rgb(235, 235, 235)",
																							color: "rgb(0, 0, 0)",
																							placeholderColor: "rgba(0, 0, 0, 0.5)",
																							error: "rgb(238, 68, 68)"
																						},
																						button: {
																							label: "Sign Up",
																							fontWeight: 600,
																							fill: "rgb(119, 85, 204)",
																							color: "rgb(255, 255, 255)"
																						},
																						font: !1,
																						fontFamily: "Inter",
																						fontWeight: 400,
																						fontSize: 16,
																						padding: 15,
																						paddingPerSide: !1,
																						paddingTop: 15,
																						paddingRight: 15,
																						paddingBottom: 15,
																						paddingLeft: 15,
																						borderRadius: 8,
																						isMixedBorderRadius: !1,
																						topLeftRadius: 8,
																						topRightRadius: 8,
																						bottomRightRadius: 8,
																						bottomLeftRadius: 8,
																						gap: 15,
																						style: {
																							width: "100%",
																							height: "100%"
																						}
																					})
																				}), e(t, {
																					className: "framer-18u2asq",
																					style: {
																						whiteSpace: "pre-wrap",
																						wordWrap: "break-word",
																						wordBreak: "break-word",
																						"--framer-link-text-color": "rgb(0, 153, 255)",
																						"--framer-link-text-decoration": "underline",
																						"--framer-paragraph-spacing": "0px",
																						"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.7)"
																					},
																					fonts: [],
																					withExternalLayout: !0,
																					verticalAlignment: "top",
																					__fromCanvasComponent: !0,
																					initial: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0
																					},
																					animate: {
																						x: 0,
																						y: 0,
																						scale: 1,
																						opacity: 1,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .5
																						}
																					},
																					exit: {
																						x: 0,
																						y: -5,
																						scale: 1,
																						opacity: 0,
																						transformPerspective: 1200,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						transition: {
																							type: "tween",
																							duration: .3,
																							ease: [.44, 0, .56, 1],
																							delay: .5
																						}
																					},
																					__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
																					htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">By clicking on Sign up, you agree to our Terms of service and Privacy policy.</span></p>'
																				})]
																			}, "fmSKKeeiG")]
																		})]
																	}), document.querySelector("#overlay"))
																})
															})]
														})
													})
												}), e(d, {
													className: "framer-1p1vo87-container",
													children: e(Ye, {
														width: "100%",
														height: "100%",
														layoutId: "sriCHOSLA",
														id: "sriCHOSLA",
														title: "Watch video"
													})
												})]
											})
										})]
									})
								})]
							})
						}), o(r.div, {
							className: "framer-es2yhr",
							children: [e(t, {
								className: "framer-1ds12ux",
								style: {
									whiteSpace: "pre-wrap",
									wordWrap: "break-word",
									wordBreak: "break-word",
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
									"--framer-paragraph-spacing": "0px",
									"--extracted-1k2zljd": "rgb(255, 255, 255)"
								},
								fonts: [],
								withExternalLayout: !0,
								verticalAlignment: "top",
								__fromCanvasComponent: !0,
								__htmlStructure: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1k2zljd);">{{ text-placeholder }}</span></h3>',
								htmlFromDesign: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1k2zljd);">Trusted by 8,000 companies worldwide</span></h3>'
							}), e(t, {
								className: "framer-1wn8qu9",
								style: {
									whiteSpace: "pre-wrap",
									wordWrap: "break-word",
									wordBreak: "break-word",
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
									"--framer-paragraph-spacing": "0px",
									"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.7)"
								},
								fonts: [],
								withExternalLayout: !0,
								verticalAlignment: "top",
								__fromCanvasComponent: !0,
								__htmlStructure: '<p class="framer-styles-preset-kqguaa" data-styles-preset="KfdEFPFFe" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
								htmlFromDesign: '<p class="framer-styles-preset-kqguaa" data-styles-preset="KfdEFPFFe" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Many teams choose Framer to iterate faster and publish at the blink of an eye without complex loops</span></p>'
							}), o(r.div, {
								className: "framer-kz79j9",
								background: null,
								children: [e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/l7MoNLHyOOxUDQM78XPPwO8lM.svg").href,
												pixelWidth: 132,
												pixelHeight: 33,
												intrinsicWidth: 132,
												intrinsicHeight: 33,
												fit: "fill"
											}
										},
										vmE1JiIHl: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/l7MoNLHyOOxUDQM78XPPwO8lM.svg").href,
												pixelWidth: 132,
												pixelHeight: 33,
												intrinsicWidth: 132,
												intrinsicHeight: 33,
												fit: "fill",
												loading: "lazy"
											}
										}
									},
									children: e(k, {
										className: "framer-wyueiv",
										background: {
											src: new URL("https://framerusercontent.com/images/l7MoNLHyOOxUDQM78XPPwO8lM.svg").href,
											pixelWidth: 132,
											pixelHeight: 33,
											intrinsicWidth: 132,
											intrinsicHeight: 33,
											fit: "fill",
											loading: "lazy"
										},
										alt: ""
									})
								}), e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/BkdZxkgrLyqPw6wUh6jO3KijntA.svg").href,
												pixelWidth: 38,
												pixelHeight: 46,
												intrinsicWidth: 38,
												intrinsicHeight: 46,
												fit: "fill"
											}
										},
										vmE1JiIHl: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/BkdZxkgrLyqPw6wUh6jO3KijntA.svg").href,
												pixelWidth: 38,
												pixelHeight: 46,
												intrinsicWidth: 38,
												intrinsicHeight: 46,
												fit: "fill",
												loading: "lazy"
											}
										}
									},
									children: e(k, {
										className: "framer-1drh8lo",
										background: {
											src: new URL("https://framerusercontent.com/images/BkdZxkgrLyqPw6wUh6jO3KijntA.svg").href,
											pixelWidth: 38,
											pixelHeight: 46,
											intrinsicWidth: 38,
											intrinsicHeight: 46,
											fit: "fill",
											loading: "lazy"
										},
										alt: ""
									})
								}), e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/I70W6bAu5j6PHCuo0ika29YctXo.svg").href,
												pixelWidth: 126,
												pixelHeight: 25,
												intrinsicWidth: 126,
												intrinsicHeight: 25,
												fit: "fill"
											}
										},
										vmE1JiIHl: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/I70W6bAu5j6PHCuo0ika29YctXo.svg").href,
												pixelWidth: 126,
												pixelHeight: 25,
												intrinsicWidth: 126,
												intrinsicHeight: 25,
												fit: "fill",
												loading: "lazy"
											}
										}
									},
									children: e(k, {
										className: "framer-1pj0rb6",
										background: {
											src: new URL("https://framerusercontent.com/images/I70W6bAu5j6PHCuo0ika29YctXo.svg").href,
											pixelWidth: 126,
											pixelHeight: 25,
											intrinsicWidth: 126,
											intrinsicHeight: 25,
											fit: "fill",
											loading: "lazy"
										},
										alt: ""
									})
								}), e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/6atV7Gi1m438cyQJiswhuRWgPI.svg").href,
												pixelWidth: 136,
												pixelHeight: 43,
												intrinsicWidth: 136,
												intrinsicHeight: 43,
												fit: "fill"
											}
										},
										vmE1JiIHl: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/6atV7Gi1m438cyQJiswhuRWgPI.svg").href,
												pixelWidth: 136,
												pixelHeight: 43,
												intrinsicWidth: 136,
												intrinsicHeight: 43,
												fit: "fill",
												loading: "lazy"
											}
										}
									},
									children: e(k, {
										className: "framer-16jh7qn",
										background: {
											src: new URL("https://framerusercontent.com/images/6atV7Gi1m438cyQJiswhuRWgPI.svg").href,
											pixelWidth: 136,
											pixelHeight: 43,
											intrinsicWidth: 136,
											intrinsicHeight: 43,
											fit: "fill",
											loading: "lazy"
										},
										alt: ""
									})
								}), e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/j9IL6bhJFwQEbMI9XLTo94epdlU.svg").href,
												pixelWidth: 112,
												pixelHeight: 38,
												intrinsicWidth: 112,
												intrinsicHeight: 38,
												fit: "fill"
											}
										},
										vmE1JiIHl: {
											transformTemplate: void 0,
											background: {
												src: new URL("https://framerusercontent.com/images/j9IL6bhJFwQEbMI9XLTo94epdlU.svg").href,
												pixelWidth: 112,
												pixelHeight: 38,
												intrinsicWidth: 112,
												intrinsicHeight: 38,
												fit: "fill",
												loading: "lazy"
											}
										}
									},
									children: e(k, {
										className: "framer-pugecg",
										background: {
											src: new URL("https://framerusercontent.com/images/j9IL6bhJFwQEbMI9XLTo94epdlU.svg").href,
											pixelWidth: 112,
											pixelHeight: 38,
											intrinsicWidth: 112,
											intrinsicHeight: 38,
											fit: "fill",
											loading: "lazy"
										},
										alt: ""
									})
								})]
							}), e(r.div, {
								className: "framer-fwrsck"
							}), e(t, {
								className: "framer-1gqvd57",
								style: {
									whiteSpace: "pre",
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
									"--framer-paragraph-spacing": "0px",
									"--extracted-1k2zljd": "rgb(255, 255, 255)"
								},
								fonts: [],
								withExternalLayout: !0,
								verticalAlignment: "top",
								__fromCanvasComponent: !0,
								__htmlStructure: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">{{ text-placeholder }}</span></h3>',
								htmlFromDesign: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">Publish a site in minutes</span></h3>'
							}), o(r.div, {
								className: "framer-z4ble0",
								background: null,
								children: [e(we, {
									className: "framer-1v2ekhd-container",
									__framer__speed: 99,
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									children: e(n, {
										breakpoint: a,
										overrides: {
											vmE1JiIHl: {
												style: {
													width: "100%"
												}
											}
										},
										children: e(ne, {
											width: "100%",
											height: "100%",
											layoutId: "VH7_FwUVm",
											id: "VH7_FwUVm",
											icon: "Pen",
											title: "Flexible components",
											text: "No more complicated workflows. Just design and publish. That\u2019s it.",
											style: {
												width: "100%"
											}
										})
									})
								}), e(we, {
									className: "framer-f53zbe-container",
									__framer__speed: 99,
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									children: e(n, {
										breakpoint: a,
										overrides: {
											vmE1JiIHl: {
												style: {
													width: "100%"
												}
											}
										},
										children: e(ne, {
											width: "100%",
											height: "100%",
											layoutId: "qr2y1StK1",
											id: "qr2y1StK1",
											icon: "Image",
											title: "Amazing integrations",
											text: "Grow your business, reach new audiences, and hit your goals with integrations.",
											style: {
												width: "100%"
											}
										})
									})
								}), e(we, {
									className: "framer-bft8fv-container",
									__framer__speed: 99,
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									children: e(n, {
										breakpoint: a,
										overrides: {
											vmE1JiIHl: {
												style: {
													width: "100%"
												}
											}
										},
										children: e(ne, {
											width: "100%",
											height: "100%",
											layoutId: "M9863Xt6Y",
											id: "M9863Xt6Y",
											icon: "Layout",
											title: "Fully responsive",
											text: "Control breakpoints for stunning designs on every device.",
											style: {
												width: "100%"
											}
										})
									})
								})]
							})]
						}), o(r.div, {
							className: "framer-160eo7j",
							name: "Section",
							"data-framer-name": "Section",
							children: [e(n, {
								breakpoint: a,
								overrides: {
									whrfYvRBp: {
										transformTemplate: void 0,
										background: {
											src: new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href,
											srcSet: `${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href} 9024w`,
											sizes: "calc(((100vw * 1) - 0px))",
											pixelWidth: 9024,
											pixelHeight: 5076,
											intrinsicWidth: 9024,
											intrinsicHeight: 5076,
											fit: "fill",
											loading: "lazy"
										}
									},
									vmE1JiIHl: {
										transformTemplate: void 0,
										background: {
											src: new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href,
											srcSet: `${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href} 9024w`,
											sizes: "calc(((100vw * 1) - 0px))",
											pixelWidth: 9024,
											pixelHeight: 5076,
											intrinsicWidth: 9024,
											intrinsicHeight: 5076,
											fit: "fill",
											loading: "lazy"
										}
									},
									N5jVBZ2oJ: {
										transformTemplate: void 0,
										background: {
											src: new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href,
											srcSet: `${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href} 9024w`,
											sizes: "calc(((100vw * 1) - 0px))",
											pixelWidth: 9024,
											pixelHeight: 5076,
											intrinsicWidth: 9024,
											intrinsicHeight: 5076,
											fit: "fill",
											loading: "lazy"
										}
									}
								},
								children: e(Ce, {
									className: "framer-10fe6i3",
									name: "Image",
									background: {
										src: new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href,
										srcSet: `${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/U1o89kiy5IEm1MDid90wigLMQ.jpg").href} 9024w`,
										sizes: "calc(((100vw * 1) - 0px))",
										pixelWidth: 9024,
										pixelHeight: 5076,
										intrinsicWidth: 9024,
										intrinsicHeight: 5076,
										fit: "fill",
										loading: "lazy"
									},
									"data-framer-name": "Image",
									alt: "",
									__framer__speed: 90,
									__framer__adjustPosition: !0,
									__framer__offset: 500
								})
							}), e(n, {
								breakpoint: a,
								overrides: {
									vmE1JiIHl: {
										background: null
									}
								},
								children: o($, {
									className: "framer-1wn0h9k",
									background: null,
									__framer__speed: 99,
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									children: [e(n, {
										breakpoint: a,
										overrides: {
											whrfYvRBp: {
												background: {
													src: new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg").href,
													srcSet: `${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg").href} 4096w`,
													sizes: "calc((300px * 1))",
													pixelWidth: 4096,
													pixelHeight: 3112,
													intrinsicWidth: 4096,
													intrinsicHeight: 3112,
													fit: "fill",
													loading: "lazy"
												}
											},
											vmE1JiIHl: {
												transformTemplate: void 0,
												background: {
													src: new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg").href,
													srcSet: `${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg").href} 4096w`,
													sizes: "calc((min((((100vw * 1) - 40px) * 1), 300px) * 1))",
													pixelWidth: 4096,
													pixelHeight: 3112,
													intrinsicWidth: 4096,
													intrinsicHeight: 3112,
													fit: "fill",
													loading: "lazy"
												}
											}
										},
										children: e(He, {
											className: "framer-vsswdm",
											name: "Card",
											background: {
												src: new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg").href,
												srcSet: `${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg").href} 4096w`,
												sizes: "calc((300px * 1))",
												pixelWidth: 4096,
												pixelHeight: 3112,
												intrinsicWidth: 4096,
												intrinsicHeight: 3112,
												fit: "fill",
												loading: "lazy"
											},
											"data-framer-name": "Card",
											alt: "",
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -10,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -10,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .3,
													ease: [.44, 0, .56, 1],
													delay: .1
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .3,
													ease: [.44, 0, .56, 1],
													delay: .1
												}
											},
											children: o(r.div, {
												className: "framer-18qygox",
												"data-border": !0,
												children: [e(t, {
													className: "framer-qg0a44",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgb(255, 255, 255)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Lac Superieur</span></p>'
												}), e(t, {
													className: "framer-srwo75",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.4)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">30 mins ago</span></p>'
												}), e(r.div, {
													className: "framer-1w9oj9t",
													name: "Button",
													background: null,
													"data-framer-name": "Button",
													"data-border": !0,
													children: e(t, {
														className: "framer-1t1zqa8",
														style: {
															whiteSpace: "pre",
															"--framer-link-text-color": "rgb(0, 153, 255)",
															"--framer-link-text-decoration": "underline",
															"--framer-paragraph-spacing": "0px",
															"--extracted-1w3ko1f": "rgb(255, 255, 255)"
														},
														fonts: [],
														withExternalLayout: !0,
														verticalAlignment: "top",
														__fromCanvasComponent: !0,
														__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
														htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Visit</span></p>'
													})
												}), e(t, {
													className: "framer-i5vk6u",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3% higher</span></p>'
												}), e(t, {
													className: "framer-1f2ivhy",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3,054 Steps</span></p>'
												})]
											})
										})
									}), e(n, {
										breakpoint: a,
										overrides: {
											whrfYvRBp: {
												background: {
													src: new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg").href,
													srcSet: `${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=512").href} 341w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=1024").href} 682w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=2048").href} 1365w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg").href} 2160w`,
													sizes: "calc((300px * 1))",
													pixelWidth: 2160,
													pixelHeight: 3240,
													intrinsicWidth: 2160,
													intrinsicHeight: 3240,
													fit: "fill",
													loading: "lazy"
												}
											},
											vmE1JiIHl: {
												transformTemplate: void 0,
												background: {
													src: new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg").href,
													srcSet: `${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=512").href} 341w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=1024").href} 682w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=2048").href} 1365w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg").href} 2160w`,
													sizes: "calc((min((((100vw * 1) - 40px) * 1), 300px) * 1))",
													pixelWidth: 2160,
													pixelHeight: 3240,
													intrinsicWidth: 2160,
													intrinsicHeight: 3240,
													fit: "fill",
													loading: "lazy"
												}
											}
										},
										children: e(He, {
											className: "framer-smvs9y",
											name: "Card",
											background: {
												src: new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg").href,
												srcSet: `${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=512").href} 341w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=1024").href} 682w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=2048").href} 1365w, ${new URL("https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg").href} 2160w`,
												sizes: "calc((300px * 1))",
												pixelWidth: 2160,
												pixelHeight: 3240,
												intrinsicWidth: 2160,
												intrinsicHeight: 3240,
												fit: "fill",
												loading: "lazy"
											},
											"data-framer-name": "Card",
											alt: "",
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -10,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -10,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .3,
													ease: [.44, 0, .56, 1],
													delay: .2
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .3,
													ease: [.44, 0, .56, 1],
													delay: .2
												}
											},
											children: o(r.div, {
												className: "framer-13sweva",
												"data-border": !0,
												children: [e(t, {
													className: "framer-eayjxm",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgb(255, 255, 255)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Coit Tower</span></p>'
												}), e(t, {
													className: "framer-1y90mk0",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.4)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">21 mins ago</span></p>'
												}), e(r.div, {
													className: "framer-1ddbpjz",
													name: "Button",
													background: null,
													"data-framer-name": "Button",
													"data-border": !0,
													children: e(t, {
														className: "framer-y68r4o",
														style: {
															whiteSpace: "pre",
															"--framer-link-text-color": "rgb(0, 153, 255)",
															"--framer-link-text-decoration": "underline",
															"--framer-paragraph-spacing": "0px",
															"--extracted-1w3ko1f": "rgb(255, 255, 255)"
														},
														fonts: [],
														withExternalLayout: !0,
														verticalAlignment: "top",
														__fromCanvasComponent: !0,
														__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
														htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Visit</span></p>'
													})
												}), e(t, {
													className: "framer-k8i6g7",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3% higher</span></p>'
												}), e(t, {
													className: "framer-17i5yzh",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3,054 Steps</span></p>'
												})]
											})
										})
									})]
								})
							}), e(n, {
								breakpoint: a,
								overrides: {
									vmE1JiIHl: {
										background: null
									}
								},
								children: o($, {
									className: "framer-vz3jrp",
									background: null,
									__framer__speed: 98,
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									children: [e(r.div, {
										className: "framer-11zm23j",
										background: null,
										children: e(n, {
											breakpoint: a,
											overrides: {
												whrfYvRBp: {
													transformTemplate: void 0,
													background: null
												},
												vmE1JiIHl: {
													transformTemplate: void 0,
													background: null
												}
											},
											children: o(b, {
												className: "framer-134veqe",
												background: null,
												"data-border": !0,
												__framer__threshold: .5,
												__framer__animateOnce: !0,
												__framer__enter: {
													x: 0,
													y: 0,
													scale: .1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0
												},
												__framer__exit: {
													x: 0,
													y: 0,
													scale: .1,
													opacity: 0,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .5
													}
												},
												__framer__animate: {
													x: 0,
													y: 0,
													scale: 1,
													opacity: 1,
													transformPerspective: 1200,
													rotate: 0,
													rotateX: 0,
													rotateY: 0,
													transition: {
														type: "tween",
														duration: .8,
														ease: [.44, 0, .56, 1],
														delay: .5
													}
												},
												children: [e(r.div, {
													className: "framer-1dkr16r",
													"data-border": !0
												}), e(r.div, {
													className: "framer-t3920h",
													"data-border": !0
												}), e(d, {
													className: "framer-b6ijkh-container",
													children: e(ee, {
														width: "100%",
														height: "100%",
														layoutId: "Xi3wZ5ZHb",
														id: "Xi3wZ5ZHb",
														type: "Circle",
														progress: 30,
														progressEnd: 100,
														progressColor: "rgb(255, 255, 255)",
														trackColor: "rgba(255, 255, 255, 0.3)",
														shouldAnimate: !0,
														animateFromStart: !1,
														animation: {
															type: "tween",
															ease: [0, 0, 1, 1],
															duration: 1,
															delay: .25
														},
														shouldAnimateTransition: !0,
														transition: {
															type: "spring",
															delay: 0,
															stiffness: 150,
															damping: 20,
															mass: 1
														},
														padding: 5,
														strokeWidth: 3,
														lineHeight: 5,
														borderRadius: 5,
														roundCap: !0,
														style: {
															width: "100%",
															height: "100%"
														}
													})
												}), e(r.div, {
													className: "framer-1oojbj2",
													"data-border": !0
												})]
											})
										})
									}), o(b, {
										className: "framer-o1eoz8",
										name: "Card Small",
										background: null,
										"data-framer-name": "Card Small",
										"data-border": !0,
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .3
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .3
											}
										},
										children: [o(r.div, {
											className: "framer-185n1ed",
											background: null,
											children: [e(d, {
												className: "framer-toale9-container",
												children: e(f, {
													width: "100%",
													height: "100%",
													layoutId: "glKVel3tX",
													id: "glKVel3tX",
													selectByList: !0,
													iconSelection: "PersonSimpleRun",
													iconSearch: "House",
													color: "rgb(255, 255, 255)",
													weight: "regular",
													mirrored: !1,
													style: {
														width: "100%",
														height: "100%"
													}
												})
											}), e(t, {
												className: "framer-1qksigh",
												style: {
													whiteSpace: "pre",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1k2zljd": "rgb(255, 255, 255)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												__htmlStructure: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">{{ text-placeholder }}</span></h3>',
												htmlFromDesign: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">Close Your Rings</span></h3>'
											})]
										}), e(t, {
											className: "framer-2zt5md",
											style: {
												whiteSpace: "pre-wrap",
												wordWrap: "break-word",
												wordBreak: "break-word",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Close your&nbsp;Move&nbsp;ring&nbsp;by hitting your personal goal of&nbsp;active calories&nbsp;burned.</span></p>'
										}), o(r.div, {
											className: "framer-2mw9q2",
											"data-border": !0,
											children: [e(t, {
												className: "framer-1bmoejt",
												style: {
													whiteSpace: "pre",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1w3ko1f": "rgb(255, 255, 255)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
												htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Netherlands</span></p>'
											}), e(t, {
												className: "framer-ocgpjn",
												style: {
													whiteSpace: "pre",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.4)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
												htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">21 mins ago</span></p>'
											}), e(r.div, {
												className: "framer-xgqu5n",
												name: "Button",
												background: null,
												"data-framer-name": "Button",
												"data-border": !0,
												children: e(t, {
													className: "framer-7j8ixb",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgb(255, 255, 255)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Visit</span></p>'
												})
											}), e(t, {
												className: "framer-15p57k8",
												style: {
													whiteSpace: "pre",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
												htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3% higher</span></p>'
											}), e(t, {
												className: "framer-1s7qroa",
												style: {
													whiteSpace: "pre",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
												htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3,054 Steps</span></p>'
											})]
										})]
									}), o(b, {
										className: "framer-1v5h9fz",
										name: "Card",
										"data-framer-name": "Card",
										"data-border": !0,
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .4
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .4
											}
										},
										children: [e(t, {
											className: "framer-135pr0q",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Montreal</span></p>'
										}), e(t, {
											className: "framer-aw5bc4",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.4)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">21 mins ago</span></p>'
										}), e(r.div, {
											className: "framer-16u1l33",
											name: "Button",
											background: null,
											"data-framer-name": "Button",
											"data-border": !0,
											children: e(t, {
												className: "framer-i8q5ap",
												style: {
													whiteSpace: "pre",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1w3ko1f": "rgb(255, 255, 255)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
												htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Visit</span></p>'
											})
										}), e(t, {
											className: "framer-1ko36zt",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3% higher</span></p>'
										}), e(t, {
											className: "framer-d5nsak",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3,054 Steps</span></p>'
										})]
									}), e(n, {
										breakpoint: a,
										overrides: {
											whrfYvRBp: {
												background: {
													src: new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg").href,
													srcSet: `${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=512").href} 384w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=1024").href} 768w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=2048").href} 1536w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg").href} 3000w`,
													sizes: "calc((300px * 1))",
													pixelWidth: 3e3,
													pixelHeight: 4e3,
													intrinsicWidth: 3e3,
													intrinsicHeight: 4e3,
													fit: "fill",
													loading: "lazy"
												}
											},
											vmE1JiIHl: {
												background: {
													src: new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg").href,
													srcSet: `${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=512").href} 384w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=1024").href} 768w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=2048").href} 1536w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg").href} 3000w`,
													sizes: "calc((min((((100vw * 1) - 40px) * 1), 300px) * 1))",
													pixelWidth: 3e3,
													pixelHeight: 4e3,
													intrinsicWidth: 3e3,
													intrinsicHeight: 4e3,
													fit: "fill",
													loading: "lazy"
												}
											}
										},
										children: e(He, {
											className: "framer-16jydw4",
											name: "Card",
											background: {
												src: new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg").href,
												srcSet: `${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=512").href} 384w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=1024").href} 768w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=2048").href} 1536w, ${new URL("https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg").href} 3000w`,
												sizes: "calc((300px * 1))",
												pixelWidth: 3e3,
												pixelHeight: 4e3,
												intrinsicWidth: 3e3,
												intrinsicHeight: 4e3,
												fit: "fill",
												loading: "lazy"
											},
											"data-framer-name": "Card",
											alt: "",
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -10,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -10,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .3,
													ease: [.44, 0, .56, 1],
													delay: .5
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .3,
													ease: [.44, 0, .56, 1],
													delay: .5
												}
											},
											children: o(r.div, {
												className: "framer-1olo669",
												"data-border": !0,
												children: [e(t, {
													className: "framer-k9l494",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgb(255, 255, 255)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">San Francisco</span></p>'
												}), e(t, {
													className: "framer-1gpp6sx",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.4)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">21 mins ago</span></p>'
												}), e(r.div, {
													className: "framer-1s9w9eh",
													name: "Button",
													background: null,
													"data-framer-name": "Button",
													"data-border": !0,
													children: e(t, {
														className: "framer-nf78sr",
														style: {
															whiteSpace: "pre",
															"--framer-link-text-color": "rgb(0, 153, 255)",
															"--framer-link-text-decoration": "underline",
															"--framer-paragraph-spacing": "0px",
															"--extracted-1w3ko1f": "rgb(255, 255, 255)"
														},
														fonts: [],
														withExternalLayout: !0,
														verticalAlignment: "top",
														__fromCanvasComponent: !0,
														__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
														htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Visit</span></p>'
													})
												}), e(t, {
													className: "framer-1fapt82",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:right;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3% higher</span></p>'
												}), e(t, {
													className: "framer-h748zs",
													style: {
														whiteSpace: "pre",
														"--framer-link-text-color": "rgb(0, 153, 255)",
														"--framer-link-text-decoration": "underline",
														"--framer-paragraph-spacing": "0px",
														"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.6)"
													},
													fonts: [],
													withExternalLayout: !0,
													verticalAlignment: "top",
													__fromCanvasComponent: !0,
													__htmlStructure: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
													htmlFromDesign: '<p class="framer-styles-preset-lp31na" data-styles-preset="NPgNY2xCM" style="--framer-text-alignment:left;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">3,054 Steps</span></p>'
												})]
											})
										})
									})]
								})
							}), e(n, {
								breakpoint: a,
								overrides: {
									vmE1JiIHl: {
										background: null
									}
								},
								children: o(r.div, {
									className: "framer-1mih4e8",
									name: "Content",
									background: null,
									"data-framer-name": "Content",
									children: [e(z, {
										className: "framer-fts48v-container",
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .1
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .1
											}
										},
										children: e(f, {
											width: "100%",
											height: "100%",
											layoutId: "D0SyA2QOf",
											id: "D0SyA2QOf",
											selectByList: !0,
											iconSelection: "Rocket",
											iconSearch: "House",
											color: "rgb(238, 68, 68)",
											weight: "duotone",
											mirrored: !1,
											style: {
												width: "100%",
												height: "100%"
											}
										})
									}), e(S, {
										className: "framer-5yei0g",
										style: {
											whiteSpace: "pre-wrap",
											wordWrap: "break-word",
											wordBreak: "break-word",
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
											"--extracted-1qn201a": "rgb(255, 255, 255)"
										},
										fonts: [],
										withExternalLayout: !0,
										verticalAlignment: "top",
										__fromCanvasComponent: !0,
										__htmlStructure: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1qn201a);">{{ text-placeholder }}</span></h2>',
										htmlFromDesign: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1qn201a);">Many types of components to customize</span></h2>',
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .2
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .2
											}
										}
									}), e(S, {
										className: "framer-jao0go",
										style: {
											whiteSpace: "pre-wrap",
											wordWrap: "break-word",
											wordBreak: "break-word",
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
											"--extracted-1w3ko1f": "rgb(255, 255, 255)"
										},
										fonts: [],
										withExternalLayout: !0,
										verticalAlignment: "top",
										__fromCanvasComponent: !0,
										__htmlStructure: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
										htmlFromDesign: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Build a website without writing a single line of code using Framer components and customizing the entire content</span></p>',
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .3
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .3
											}
										}
									}), o(b, {
										className: "framer-kd1tz6",
										name: "Button",
										"data-framer-name": "Button",
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .4
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .4
											}
										},
										children: [e(d, {
											className: "framer-l2mbxs-container",
											children: e(f, {
												width: "100%",
												height: "100%",
												layoutId: "pwCwgrtxQ",
												id: "pwCwgrtxQ",
												selectByList: !0,
												iconSelection: "Cards",
												iconSearch: "House",
												color: "rgb(255, 255, 255)",
												weight: "duotone",
												mirrored: !1,
												style: {
													width: "100%",
													height: "100%"
												}
											})
										}), e(t, {
											className: "framer-z2d0np",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">learn more</span></p>'
										})]
									}), e(b, {
										className: "framer-bv0lri",
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .5
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .5
											}
										}
									}), e(S, {
										className: "framer-10zbsv3",
										style: {
											whiteSpace: "pre-wrap",
											wordWrap: "break-word",
											wordBreak: "break-word",
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
											"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.7)"
										},
										fonts: [],
										withExternalLayout: !0,
										verticalAlignment: "top",
										__fromCanvasComponent: !0,
										__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
										htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Grow your business, reach new audiences, and hit your goals with integrations.</span></p>',
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .6
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .6
											}
										}
									})]
								})
							})]
						}), e(r.div, {
							className: "framer-5m0ard",
							children: o(r.div, {
								className: "framer-1srctax",
								background: null,
								children: [e(n, {
									breakpoint: a,
									overrides: {
										vmE1JiIHl: {
											background: null
										}
									},
									children: o(r.div, {
										className: "framer-1spkjc9",
										name: "Content",
										background: null,
										"data-framer-name": "Content",
										children: [e(z, {
											className: "framer-1szh0le-container",
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .1
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .1
												}
											},
											children: e(f, {
												width: "100%",
												height: "100%",
												layoutId: "idmLA6d2U",
												id: "idmLA6d2U",
												selectByList: !0,
												iconSelection: "Trophy",
												iconSearch: "House",
												color: "rgb(42, 25, 255)",
												weight: "duotone",
												mirrored: !1,
												style: {
													width: "100%",
													height: "100%"
												}
											})
										}), e(S, {
											className: "framer-1yiuvj2",
											style: {
												whiteSpace: "pre-wrap",
												wordWrap: "break-word",
												wordBreak: "break-word",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1qn201a": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1qn201a);">{{ text-placeholder }}</span></h2>',
											htmlFromDesign: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1qn201a);">Text styles, variants and overlays</span></h2>',
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .2
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .2
												}
											}
										}), e(S, {
											className: "framer-lw1m6n",
											style: {
												whiteSpace: "pre-wrap",
												wordWrap: "break-word",
												wordBreak: "break-word",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Build a website without writing a single line of code using Framer components and customizing the entire content</span></p>',
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .3
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .3
												}
											}
										}), o(b, {
											className: "framer-12ihm1b",
											name: "Button",
											"data-framer-name": "Button",
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .4
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .4
												}
											},
											children: [e(d, {
												className: "framer-xrk6ku-container",
												children: e(f, {
													width: "100%",
													height: "100%",
													layoutId: "DX8onCRut",
													id: "DX8onCRut",
													selectByList: !0,
													iconSelection: "DeviceMobile",
													iconSearch: "House",
													color: "rgb(0, 0, 0)",
													weight: "duotone",
													mirrored: !1,
													style: {
														width: "100%",
														height: "100%"
													}
												})
											}), e(t, {
												className: "framer-18nx703",
												style: {
													whiteSpace: "pre",
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
													"--framer-paragraph-spacing": "0px",
													"--extracted-1w3ko1f": "rgb(0, 0, 0)"
												},
												fonts: [],
												withExternalLayout: !0,
												verticalAlignment: "top",
												__fromCanvasComponent: !0,
												__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
												htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Get the App</span></p>'
											})]
										}), e(b, {
											className: "framer-lp9zrb",
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .5
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .5
												}
											}
										}), e(S, {
											className: "framer-1g9h234",
											style: {
												whiteSpace: "pre-wrap",
												wordWrap: "break-word",
												wordBreak: "break-word",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.7)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Grow your business, reach new audiences, and hit your goals with integrations.</span></p>',
											__framer__threshold: .5,
											__framer__animateOnce: !0,
											__framer__enter: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0
											},
											__framer__exit: {
												x: 0,
												y: -5,
												scale: 1,
												opacity: 0,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .6
												}
											},
											__framer__animate: {
												x: 0,
												y: 0,
												scale: 1,
												opacity: 1,
												transformPerspective: 1200,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												transition: {
													type: "tween",
													duration: .8,
													ease: [.44, 0, .56, 1],
													delay: .6
												}
											}
										})]
									})
								}), e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											transformTemplate: void 0,
											background: null
										},
										vmE1JiIHl: {
											transformTemplate: void 0,
											background: null
										}
									},
									children: o(b, {
										className: "framer-zxzo0h",
										background: null,
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: 0
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: 0
											}
										},
										children: [e(n, {
											breakpoint: a,
											overrides: {
												whrfYvRBp: {
													transformTemplate: void 0,
													background: null
												},
												vmE1JiIHl: {
													transformTemplate: void 0,
													background: null
												}
											},
											children: e(r.div, {
												className: "framer-1jmg9q8",
												background: null
											})
										}), e(n, {
											breakpoint: a,
											overrides: {
												whrfYvRBp: {
													transformTemplate: void 0,
													background: null
												},
												vmE1JiIHl: {
													transformTemplate: void 0,
													background: null
												}
											},
											children: o($, {
												className: "framer-5f5fo1",
												background: null,
												"data-border": !0,
												__framer__speed: 99,
												__framer__adjustPosition: !1,
												__framer__offset: 0,
												children: [e(n, {
													breakpoint: a,
													overrides: {
														vmE1JiIHl: {
															transformTemplate: void 0
														}
													},
													children: o(r.div, {
														className: "framer-1l80aaa",
														"data-border": !0,
														children: [e(n, {
															breakpoint: a,
															overrides: {
																vmE1JiIHl: {
																	transformTemplate: void 0
																}
															},
															children: e(r.div, {
																className: "framer-gi5tpe",
																"data-border": !0
															})
														}), e(r.div, {
															className: "framer-1vr86mq",
															"data-border": !0
														})]
													})
												}), e(d, {
													className: "framer-1xklztw-container",
													children: e(ee, {
														width: "100%",
														height: "100%",
														layoutId: "GtJ81Kn_t",
														id: "GtJ81Kn_t",
														type: "Circle",
														progress: 30,
														progressEnd: 100,
														progressColor: "rgb(255, 255, 255)",
														trackColor: "rgba(255, 255, 255, 0.3)",
														shouldAnimate: !0,
														animateFromStart: !1,
														animation: {
															type: "tween",
															ease: [0, 0, 1, 1],
															duration: 1,
															delay: .25
														},
														shouldAnimateTransition: !0,
														transition: {
															type: "spring",
															delay: 0,
															stiffness: 150,
															damping: 20,
															mass: 1
														},
														padding: 5,
														strokeWidth: 3,
														lineHeight: 5,
														borderRadius: 5,
														roundCap: !0,
														style: {
															width: "100%",
															height: "100%"
														}
													})
												})]
											})
										}), e(n, {
											breakpoint: a,
											overrides: {
												whrfYvRBp: {
													transformTemplate: void 0
												},
												vmE1JiIHl: {
													transformTemplate: (p, m) => `translateX(-50%) ${m}`
												}
											},
											children: o($, {
												className: "framer-aice1g",
												transformTemplate: (p, m) => `translateX(-50%) ${m}`,
												name: "Card Big",
												"data-framer-name": "Card Big",
												"data-border": !0,
												__framer__speed: 98,
												__framer__adjustPosition: !1,
												__framer__offset: 0,
												children: [o(k, {
													className: "framer-161oqzt",
													background: {
														src: new URL("https://framerusercontent.com/images/8cBLYztUFvxkmxMr4jnAoVlIfU.jpg").href,
														srcSet: `${new URL("https://framerusercontent.com/images/8cBLYztUFvxkmxMr4jnAoVlIfU.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/8cBLYztUFvxkmxMr4jnAoVlIfU.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/8cBLYztUFvxkmxMr4jnAoVlIfU.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/8cBLYztUFvxkmxMr4jnAoVlIfU.jpg").href} 3840w`,
														sizes: "calc(((360px - 20px) * 1))",
														pixelWidth: 3840,
														pixelHeight: 2160,
														intrinsicWidth: 3840,
														intrinsicHeight: 2160,
														fit: "fill",
														loading: "lazy"
													},
													alt: "",
													children: [e(r.div, {
														className: "framer-zvyzkw",
														"data-border": !0,
														children: e(t, {
															className: "framer-1ivichp",
															style: {
																whiteSpace: "pre",
																"--framer-link-text-color": "rgb(0, 153, 255)",
																"--framer-link-text-decoration": "underline",
																"--framer-paragraph-spacing": "0px",
																"--extracted-1w3ko1f": "rgb(255, 255, 255)"
															},
															fonts: [],
															withExternalLayout: !0,
															verticalAlignment: "top",
															__fromCanvasComponent: !0,
															__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
															htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">$95</span></p>'
														})
													}), o(r.div, {
														className: "framer-fud25t",
														background: null,
														children: [e(r.div, {
															className: "framer-jp3wz0",
															"data-border": !0,
															children: e(t, {
																className: "framer-1xsvkdq",
																style: {
																	whiteSpace: "pre",
																	"--framer-link-text-color": "rgb(0, 153, 255)",
																	"--framer-link-text-decoration": "underline",
																	"--framer-paragraph-spacing": "0px",
																	"--extracted-1w3ko1f": "rgb(255, 255, 255)"
																},
																fonts: [],
																withExternalLayout: !0,
																verticalAlignment: "top",
																__fromCanvasComponent: !0,
																__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
																htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">light</span></p>'
															})
														}), e(r.div, {
															className: "framer-14o2e2c",
															"data-border": !0,
															children: e(t, {
																className: "framer-uwvj3a",
																style: {
																	whiteSpace: "pre",
																	"--framer-link-text-color": "rgb(0, 153, 255)",
																	"--framer-link-text-decoration": "underline",
																	"--framer-paragraph-spacing": "0px",
																	"--extracted-1w3ko1f": "rgb(255, 255, 255)"
																},
																fonts: [],
																withExternalLayout: !0,
																verticalAlignment: "top",
																__fromCanvasComponent: !0,
																__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
																htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">tracking</span></p>'
															})
														})]
													})]
												}), e(r.div, {
													className: "framer-m8iqt5",
													background: null,
													children: e(t, {
														className: "framer-1pjhurl",
														style: {
															whiteSpace: "pre",
															"--framer-link-text-color": "rgb(0, 153, 255)",
															"--framer-link-text-decoration": "underline",
															"--framer-paragraph-spacing": "0px",
															"--extracted-1k2zljd": "rgb(255, 255, 255)"
														},
														fonts: [],
														withExternalLayout: !0,
														verticalAlignment: "top",
														__fromCanvasComponent: !0,
														__htmlStructure: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">{{ text-placeholder }}</span></h3>',
														htmlFromDesign: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">Super Shoes</span></h3>'
													})
												})]
											})
										})]
									})
								})]
							})
						}), o(r.div, {
							className: "framer-1jf2fz0",
							children: [e(n, {
								breakpoint: a,
								overrides: {
									whrfYvRBp: {
										transformTemplate: void 0,
										background: {
											src: new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href,
											srcSet: `${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href} 9024w`,
											sizes: "calc(((100vw * 1) - 0px))",
											pixelWidth: 9024,
											pixelHeight: 5076,
											intrinsicWidth: 9024,
											intrinsicHeight: 5076,
											fit: "fill",
											loading: "lazy"
										}
									},
									vmE1JiIHl: {
										transformTemplate: void 0,
										background: {
											src: new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href,
											srcSet: `${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href} 9024w`,
											sizes: "calc(((100vw * 1) - 0px))",
											pixelWidth: 9024,
											pixelHeight: 5076,
											intrinsicWidth: 9024,
											intrinsicHeight: 5076,
											fit: "fill",
											loading: "lazy"
										}
									},
									N5jVBZ2oJ: {
										transformTemplate: void 0,
										background: {
											src: new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href,
											srcSet: `${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href} 9024w`,
											sizes: "calc(((100vw * 1) - 0px))",
											pixelWidth: 9024,
											pixelHeight: 5076,
											intrinsicWidth: 9024,
											intrinsicHeight: 5076,
											fit: "fill",
											loading: "lazy"
										}
									}
								},
								children: e(Ce, {
									className: "framer-9gavgo",
									name: "Image",
									background: {
										src: new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href,
										srcSet: `${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/CLYFU1WHrwl3xKHm0aQk6KFomVQ.jpg").href} 9024w`,
										sizes: "calc(((100vw * 1) - 0px))",
										pixelWidth: 9024,
										pixelHeight: 5076,
										intrinsicWidth: 9024,
										intrinsicHeight: 5076,
										fit: "fill",
										loading: "lazy"
									},
									"data-framer-name": "Image",
									alt: "",
									__framer__speed: 90,
									__framer__adjustPosition: !0,
									__framer__offset: 0
								})
							}), e(n, {
								breakpoint: a,
								overrides: {
									vmE1JiIHl: {
										background: null
									}
								},
								children: o($, {
									className: "framer-lf8tbp",
									background: null,
									__framer__speed: 99,
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									children: [o(b, {
										className: "framer-1wchkqi",
										"data-border": !0,
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .1
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .1
											}
										},
										children: [e(t, {
											className: "framer-1iikpca",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1k2zljd": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">{{ text-placeholder }}</span></h3>',
											htmlFromDesign: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3"><span style="--framer-text-color:var(--extracted-1k2zljd);">Sit less. You\u2019ll go&nbsp;far.</span></h3>'
										}), e(d, {
											className: "framer-ra8c0m-container",
											children: e(Le, {
												width: "100%",
												height: "100%",
												layoutId: "lFQt1wrgX",
												id: "lFQt1wrgX",
												headSelection: "Short2",
												bodySelection: "Turtle",
												sittingSelection: "Skinny",
												standingSelection: "Baggy",
												isStanding: !1,
												direction: !1,
												skin: "rgb(178, 139, 103)",
												hair: "rgb(25, 24, 71)",
												style: {
													width: "100%",
													height: "100%"
												}
											})
										}), e(t, {
											className: "framer-1capnmv",
											style: {
												whiteSpace: "pre-wrap",
												wordWrap: "break-word",
												wordBreak: "break-word",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-kqguaa" data-styles-preset="KfdEFPFFe"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-kqguaa" data-styles-preset="KfdEFPFFe"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Replace your regular desk at work with a standing desk to reduce the amount of sedentary time in your day.</span></p>'
										})]
									}), o(b, {
										className: "framer-296ro2",
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -10,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .2
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .3,
												ease: [.44, 0, .56, 1],
												delay: .2
											}
										},
										children: [e(t, {
											className: "framer-pzzc2z",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3">{{ text-placeholder }}</h3>',
											htmlFromDesign: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3">Get maximum workout</h3>'
										}), e(t, {
											className: "framer-mqjq",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(0, 0, 0)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Swimming</span></p>'
										}), e(d, {
											className: "framer-1so26si-container",
											children: e(ee, {
												width: "100%",
												height: "100%",
												layoutId: "WQpvk5TTM",
												id: "WQpvk5TTM",
												type: "Circle",
												progress: 30,
												progressEnd: 100,
												progressColor: "rgb(255, 255, 255)",
												trackColor: "rgba(255, 255, 255, 0.3)",
												shouldAnimate: !0,
												animateFromStart: !1,
												animation: {
													type: "tween",
													ease: [0, 0, 1, 1],
													duration: 1,
													delay: .25
												},
												shouldAnimateTransition: !0,
												transition: {
													type: "spring",
													delay: 0,
													stiffness: 150,
													damping: 20,
													mass: 1
												},
												padding: 5,
												strokeWidth: 17,
												lineHeight: 5,
												borderRadius: 5,
												roundCap: !0,
												style: {
													width: "100%",
													height: "100%"
												}
											})
										}), e(t, {
											className: "framer-1ey8pbc",
											style: {
												whiteSpace: "pre-wrap",
												wordWrap: "break-word",
												wordBreak: "break-word",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(0, 0, 0)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-kqguaa" data-styles-preset="KfdEFPFFe"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-kqguaa" data-styles-preset="KfdEFPFFe"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Burn calories the easy way and get tracking</span></p>'
										})]
									})]
								})
							}), e(n, {
								breakpoint: a,
								overrides: {
									vmE1JiIHl: {
										background: null
									}
								},
								children: o(r.div, {
									className: "framer-1kygq5b",
									name: "Content",
									background: null,
									"data-framer-name": "Content",
									children: [e(z, {
										className: "framer-l76a7m-container",
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .1
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .1
											}
										},
										children: e(f, {
											width: "100%",
											height: "100%",
											layoutId: "PvyXec9rK",
											id: "PvyXec9rK",
											selectByList: !0,
											iconSelection: "Record",
											iconSearch: "House",
											color: "rgb(255, 255, 255)",
											weight: "duotone",
											mirrored: !1,
											style: {
												width: "100%",
												height: "100%"
											}
										})
									}), e(S, {
										className: "framer-1vrsle0",
										style: {
											whiteSpace: "pre-wrap",
											wordWrap: "break-word",
											wordBreak: "break-word",
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
											"--extracted-1qn201a": "rgb(255, 255, 255)"
										},
										fonts: [],
										withExternalLayout: !0,
										verticalAlignment: "top",
										__fromCanvasComponent: !0,
										__htmlStructure: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1qn201a);">{{ text-placeholder }}</span></h2>',
										htmlFromDesign: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1qn201a);">Multiple pages with unique content</span></h2>',
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .2
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .2
											}
										}
									}), e(S, {
										className: "framer-smrcri",
										style: {
											whiteSpace: "pre-wrap",
											wordWrap: "break-word",
											wordBreak: "break-word",
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
											"--extracted-1w3ko1f": "rgb(255, 255, 255)"
										},
										fonts: [],
										withExternalLayout: !0,
										verticalAlignment: "top",
										__fromCanvasComponent: !0,
										__htmlStructure: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
										htmlFromDesign: '<p class="framer-styles-preset-16bzrdu" data-styles-preset="stylesPresetParagraph" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Build a website without writing a single line of code using Framer components and customizing the entire content</span></p>',
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .3
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .3
											}
										}
									}), o(b, {
										className: "framer-1d1bvmn",
										name: "Button",
										"data-framer-name": "Button",
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .4
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .4
											}
										},
										children: [e(d, {
											className: "framer-6o2xj5-container",
											children: e(f, {
												width: "100%",
												height: "100%",
												layoutId: "i39aSX2g8",
												id: "i39aSX2g8",
												selectByList: !0,
												iconSelection: "Download",
												iconSearch: "House",
												color: "rgb(255, 255, 255)",
												weight: "duotone",
												mirrored: !1,
												style: {
													width: "100%",
													height: "100%"
												}
											})
										}), e(t, {
											className: "framer-1l2pryk",
											style: {
												whiteSpace: "pre",
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px",
												"--extracted-1w3ko1f": "rgb(255, 255, 255)"
											},
											fonts: [],
											withExternalLayout: !0,
											verticalAlignment: "top",
											__fromCanvasComponent: !0,
											__htmlStructure: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
											htmlFromDesign: '<p class="framer-styles-preset-9us7yb" data-styles-preset="bYf7b73wA" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Download</span></p>'
										})]
									}), e(b, {
										className: "framer-1d6uy3e",
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .5
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .5
											}
										}
									}), e(S, {
										className: "framer-c5iai3",
										style: {
											whiteSpace: "pre-wrap",
											wordWrap: "break-word",
											wordBreak: "break-word",
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
											"--extracted-1w3ko1f": "rgba(255, 255, 255, 0.7)"
										},
										fonts: [],
										withExternalLayout: !0,
										verticalAlignment: "top",
										__fromCanvasComponent: !0,
										__htmlStructure: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
										htmlFromDesign: '<p class="framer-styles-preset-605wog" data-styles-preset="l6qNW1TBq" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1w3ko1f);">Grow your business, reach new audiences, and hit your goals with integrations.</span></p>',
										__framer__threshold: .5,
										__framer__animateOnce: !0,
										__framer__enter: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0
										},
										__framer__exit: {
											x: 0,
											y: -5,
											scale: 1,
											opacity: 0,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .6
											}
										},
										__framer__animate: {
											x: 0,
											y: 0,
											scale: 1,
											opacity: 1,
											transformPerspective: 1200,
											rotate: 0,
											rotateX: 0,
											rotateY: 0,
											transition: {
												type: "tween",
												duration: .8,
												ease: [.44, 0, .56, 1],
												delay: .6
											}
										}
									})]
								})
							})]
						}), o(r.div, {
							className: "framer-ork5lf",
							children: [e(Ce, {
								className: "framer-1wz16gc",
								name: "Image",
								background: {
									src: new URL("https://framerusercontent.com/images/dsyEizBsa5B5a9H72HIuc8DM9C0.jpg").href,
									srcSet: `${new URL("https://framerusercontent.com/images/dsyEizBsa5B5a9H72HIuc8DM9C0.jpg?scale-down-to=512").href} 512w, ${new URL("https://framerusercontent.com/images/dsyEizBsa5B5a9H72HIuc8DM9C0.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://framerusercontent.com/images/dsyEizBsa5B5a9H72HIuc8DM9C0.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://framerusercontent.com/images/dsyEizBsa5B5a9H72HIuc8DM9C0.jpg?scale-down-to=4096").href} 4096w, ${new URL("https://framerusercontent.com/images/dsyEizBsa5B5a9H72HIuc8DM9C0.jpg").href} 9024w`,
									sizes: "calc(((100vw * 1) - 0px))",
									pixelWidth: 9024,
									pixelHeight: 5076,
									intrinsicWidth: 9024,
									intrinsicHeight: 5076,
									fit: "fill",
									loading: "lazy"
								},
								"data-framer-name": "Image",
								alt: "",
								__framer__speed: 90,
								__framer__adjustPosition: !0,
								__framer__offset: 0
							}), e(S, {
								className: "framer-i7fegd",
								style: {
									whiteSpace: "pre",
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
									"--framer-paragraph-spacing": "0px",
									"--extracted-1qn201a": "rgb(255, 255, 255)"
								},
								fonts: [],
								withExternalLayout: !0,
								verticalAlignment: "top",
								__fromCanvasComponent: !0,
								__htmlStructure: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2"><span style="--framer-text-color:var(--extracted-1qn201a);">{{ text-placeholder }}</span></h2>',
								htmlFromDesign: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2"><span style="--framer-text-color:var(--extracted-1qn201a);">Ready to start?</span></h2>',
								__framer__threshold: .5,
								__framer__animateOnce: !0,
								__framer__enter: {
									x: 0,
									y: -5,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0
								},
								__framer__exit: {
									x: 0,
									y: -5,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: .1
									}
								},
								__framer__animate: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 1,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: .1
									}
								}
							}), e(S, {
								className: "framer-lmppu1",
								style: {
									whiteSpace: "pre-wrap",
									wordWrap: "break-word",
									wordBreak: "break-word",
									maxWidth: "500px",
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
									"--framer-paragraph-spacing": "0px",
									"--extracted-1k2zljd": "rgb(255, 255, 255)"
								},
								fonts: [],
								withExternalLayout: !0,
								verticalAlignment: "top",
								__fromCanvasComponent: !0,
								__htmlStructure: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1k2zljd);">{{ text-placeholder }}</span></h3>',
								htmlFromDesign: '<h3 class="framer-styles-preset-ci2ngw" data-styles-preset="stylesPresetHeading3" style="--framer-text-alignment:center;"><span style="--framer-text-color:var(--extracted-1k2zljd);">Launch a site for free. Choose a site plan to unlock more features.</span></h3>',
								__framer__threshold: .5,
								__framer__animateOnce: !0,
								__framer__enter: {
									x: 0,
									y: -5,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0
								},
								__framer__exit: {
									x: 0,
									y: -5,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: .2
									}
								},
								__framer__animate: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 1,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: .2
									}
								}
							}), e(b, {
								className: "framer-151acul",
								__framer__threshold: .5,
								__framer__animateOnce: !0,
								__framer__enter: {
									x: 0,
									y: -5,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0
								},
								__framer__exit: {
									x: 0,
									y: -5,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: .3
									}
								},
								__framer__animate: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 1,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: .3
									}
								}
							}), o(r.div, {
								className: "framer-bnc6pz",
								background: null,
								children: [e(z, {
									className: "framer-kk7z6l-container",
									__framer__threshold: .5,
									__framer__animateOnce: !0,
									__framer__enter: {
										x: 0,
										y: -5,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0
									},
									__framer__exit: {
										x: 0,
										y: -5,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .3,
											ease: [.44, 0, .56, 1],
											delay: .4
										}
									},
									__framer__animate: {
										x: 0,
										y: 0,
										scale: 1,
										opacity: 1,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .3,
											ease: [.44, 0, .56, 1],
											delay: .4
										}
									},
									children: e(n, {
										breakpoint: a,
										overrides: {
											vmE1JiIHl: {
												style: {
													width: "100%"
												}
											}
										},
										children: e(Z, {
											width: "100%",
											height: "100%",
											layoutId: "smVudIcd5",
											id: "smVudIcd5",
											variant: "HBUQyzmXM",
											style: {
												width: "100%"
											}
										})
									})
								}), e(z, {
									className: "framer-64gm9-container",
									__framer__threshold: .5,
									__framer__animateOnce: !0,
									__framer__enter: {
										x: 0,
										y: -5,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0
									},
									__framer__exit: {
										x: 0,
										y: -5,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .3,
											ease: [.44, 0, .56, 1],
											delay: .5
										}
									},
									__framer__animate: {
										x: 0,
										y: 0,
										scale: 1,
										opacity: 1,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .3,
											ease: [.44, 0, .56, 1],
											delay: .5
										}
									},
									children: e(n, {
										breakpoint: a,
										overrides: {
											vmE1JiIHl: {
												style: {
													width: "100%"
												}
											}
										},
										children: e(Z, {
											width: "100%",
											height: "100%",
											layoutId: "FJtCpFmA_",
											id: "FJtCpFmA_",
											variant: "ElXDFMfh_",
											style: {
												width: "100%"
											}
										})
									})
								}), e(z, {
									className: "framer-1a7rowy-container",
									__framer__threshold: .5,
									__framer__animateOnce: !0,
									__framer__enter: {
										x: 0,
										y: -5,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0
									},
									__framer__exit: {
										x: 0,
										y: -5,
										scale: 1,
										opacity: 0,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .3,
											ease: [.44, 0, .56, 1],
											delay: .6
										}
									},
									__framer__animate: {
										x: 0,
										y: 0,
										scale: 1,
										opacity: 1,
										transformPerspective: 1200,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										transition: {
											type: "tween",
											duration: .3,
											ease: [.44, 0, .56, 1],
											delay: .6
										}
									},
									children: e(n, {
										breakpoint: a,
										overrides: {
											vmE1JiIHl: {
												style: {
													width: "100%"
												}
											}
										},
										children: e(Z, {
											width: "100%",
											height: "100%",
											layoutId: "hToTRNKHK",
											id: "hToTRNKHK",
											variant: "l9niAUydL",
											style: {
												width: "100%"
											}
										})
									})
								})]
							})]
						}), o(r.div, {
							className: "framer-e1nr4t",
							children: [e(t, {
								className: "framer-a985os",
								style: {
									whiteSpace: "pre",
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
									"--framer-paragraph-spacing": "0px",
									"--extracted-1qn201a": "rgb(255, 255, 255)"
								},
								fonts: [],
								withExternalLayout: !0,
								verticalAlignment: "top",
								__fromCanvasComponent: !0,
								__htmlStructure: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2"><span style="--framer-text-color:var(--extracted-1qn201a);">{{ text-placeholder }}</span></h2>',
								htmlFromDesign: '<h2 class="framer-styles-preset-1m9bzi2" data-styles-preset="stylesPresetHeading2"><span style="--framer-text-color:var(--extracted-1qn201a);">FAQ</span></h2>'
							}), e(z, {
								className: "framer-suw9mn-container",
								__framer__threshold: .5,
								__framer__animateOnce: !0,
								__framer__enter: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0
								},
								__framer__exit: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								__framer__animate: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 1,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								children: e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											style: {
												width: "100%"
											}
										},
										vmE1JiIHl: {
											style: {
												width: "100%"
											}
										}
									},
									children: e(O, {
										width: "100%",
										height: "100%",
										layoutId: "M8Gz7Ircf",
										id: "M8Gz7Ircf",
										variant: "mm1bTWopO",
										question: "How are paid plans billed?",
										answer: "Paid plans are billed both at a Site and Team level. Both subscriptions are always linked to the email of the purchaser. In order to get extra features and faster loading time to your site, you can acquire any of our site plans. In the moment of purchasing the first site plan within a team, a Team account will be added automatically so editors will be charged at a team level.",
										style: {
											width: "100%"
										}
									})
								})
							}), e(z, {
								className: "framer-jbc2uk-container",
								__framer__threshold: .5,
								__framer__animateOnce: !0,
								__framer__enter: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0
								},
								__framer__exit: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								__framer__animate: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 1,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								children: e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											style: {
												width: "100%"
											}
										},
										vmE1JiIHl: {
											style: {
												width: "100%"
											}
										}
									},
									children: e(O, {
										width: "100%",
										height: "100%",
										layoutId: "AWB8jH3zX",
										id: "AWB8jH3zX",
										variant: "rTcf48lKX",
										question: "Do you accept Paypal?",
										answer: "Yes, we accept PayPal for the one-year plan only. Purchasing through PayPal will not renew your subscription at the end of your one-year period.",
										style: {
											width: "100%"
										}
									})
								})
							}), e(z, {
								className: "framer-cjg49g-container",
								__framer__threshold: .5,
								__framer__animateOnce: !0,
								__framer__enter: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0
								},
								__framer__exit: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								__framer__animate: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 1,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								children: e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											style: {
												width: "100%"
											}
										},
										vmE1JiIHl: {
											style: {
												width: "100%"
											}
										}
									},
									children: e(O, {
										width: "100%",
										height: "100%",
										layoutId: "Hki2M3Xjb",
										id: "Hki2M3Xjb",
										variant: "rTcf48lKX",
										question: "How do I pay?",
										answer: "You can purchase a Pro subscription anytime with a credit card. Or, you can purchase an annual plan with PayPal that will not auto-renew.",
										style: {
											width: "100%"
										}
									})
								})
							}), e(z, {
								className: "framer-1bnh683-container",
								__framer__threshold: .5,
								__framer__animateOnce: !0,
								__framer__enter: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0
								},
								__framer__exit: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 0,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								__framer__animate: {
									x: 0,
									y: 0,
									scale: 1,
									opacity: 1,
									transformPerspective: 1200,
									rotate: 0,
									rotateX: 0,
									rotateY: 0,
									transition: {
										type: "tween",
										duration: .8,
										ease: [.44, 0, .56, 1],
										delay: 0
									}
								},
								children: e(n, {
									breakpoint: a,
									overrides: {
										whrfYvRBp: {
											style: {
												width: "100%"
											}
										},
										vmE1JiIHl: {
											style: {
												width: "100%"
											}
										}
									},
									children: e(O, {
										width: "100%",
										height: "100%",
										layoutId: "siMqe6pwJ",
										id: "siMqe6pwJ",
										variant: "rTcf48lKX",
										question: "Can I download the content?",
										answer: "Yes, you can download the videos, source files, ePub files and resources such as icons, illustrations, mockups, etc. These come with your subscription, even the monthly plan.",
										style: {
											width: "100%"
										}
									})
								})
							})]
						}), e(d, {
							className: "framer-uppqub-container",
							children: e(n, {
								breakpoint: a,
								overrides: {
									vmE1JiIHl: {
										variant: "e3g7bSGXr"
									}
								},
								children: e(je, {
									width: "100%",
									height: "100%",
									layoutId: "s3aCrpRPy",
									id: "s3aCrpRPy",
									variant: "nVQQXMv_a",
									style: {
										width: "100%"
									}
								})
							})
						})]
					}), e("div", {
						id: "overlay"
					})]
				})
			})
		})
	}),
	bt = ['.framer-T7VKV [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-T7VKV .framer-72rtr7 { position: relative; overflow: visible; width: 1200px; height: min-content; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 0px; padding: 0px 0px 0px 0px; background-color: #000000; }", ".framer-T7VKV .framer-1vbxwnv-container { position: fixed; z-index: 1; width: 100%; height: auto; left: 50%; top: 0px; flex: none; transform: translateX(-50%); }", ".framer-T7VKV .framer-ws79ko { position: relative; overflow: visible; width: 100%; height: 860px; flex: none; }", ".framer-T7VKV .framer-ur0xi9 { position: absolute; overflow: hidden; width: 100%; height: 100%; left: 0px; top: 0px; flex: none; }", ".framer-T7VKV .framer-c1p3py-container { position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; flex: none; }", ".framer-T7VKV .framer-1gltdb { position: absolute; overflow: visible; max-width: 560px; width: 560px; height: min-content; left: 0px; top: 140px; flex: none; display: flex; flex-direction: column; justify-content: flex-start; align-content: flex-start; align-items: flex-start; flex-wrap: nowrap; gap: 30px; padding: 50px 50px 50px 50px; }", ".framer-T7VKV .framer-5sfnq1-container, .framer-T7VKV .framer-1r7r56c-container, .framer-T7VKV .framer-1p1vo87-container { position: relative; width: auto; height: auto; flex: none; }", ".framer-T7VKV .framer-10mrn1k, .framer-T7VKV .framer-16u0u6i, .framer-T7VKV .framer-1ds12ux, .framer-T7VKV .framer-5yei0g, .framer-T7VKV .framer-jao0go, .framer-T7VKV .framer-10zbsv3, .framer-T7VKV .framer-1yiuvj2, .framer-T7VKV .framer-lw1m6n, .framer-T7VKV .framer-1g9h234, .framer-T7VKV .framer-1capnmv, .framer-T7VKV .framer-1ey8pbc, .framer-T7VKV .framer-1vrsle0, .framer-T7VKV .framer-smrcri, .framer-T7VKV .framer-c5iai3, .framer-T7VKV .framer-109mv8h, .framer-T7VKV .framer-18u2asq { position: relative; width: 100%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-15y7aei { position: relative; overflow: visible; width: 100%; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-es2yhr { position: relative; overflow: visible; width: 100%; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; padding: 100px 30px 100px 30px; background-color: #070818; }", ".framer-T7VKV .framer-1wn8qu9 { position: relative; width: 500px; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-kz79j9 { position: relative; overflow: visible; max-width: 800px; width: 100%; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: space-between; align-content: center; align-items: center; flex-wrap: wrap; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-wyueiv { position: relative; width: 132px; height: 32px; flex: none; }", ".framer-T7VKV .framer-1drh8lo { position: relative; width: 37px; height: 45px; flex: none; }", ".framer-T7VKV .framer-1pj0rb6 { position: relative; width: 125px; height: 24px; flex: none; }", ".framer-T7VKV .framer-16jh7qn { position: relative; width: 135px; height: 43px; flex: none; }", ".framer-T7VKV .framer-pugecg { position: relative; width: 111px; height: 37px; flex: none; }", ".framer-T7VKV .framer-fwrsck, .framer-T7VKV .framer-151acul { position: relative; overflow: visible; width: 25%; height: 1px; flex: none; background-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-1gqvd57, .framer-T7VKV .framer-1t1zqa8, .framer-T7VKV .framer-y68r4o, .framer-T7VKV .framer-1qksigh, .framer-T7VKV .framer-7j8ixb, .framer-T7VKV .framer-i8q5ap, .framer-T7VKV .framer-nf78sr, .framer-T7VKV .framer-z2d0np, .framer-T7VKV .framer-18nx703, .framer-T7VKV .framer-1ivichp, .framer-T7VKV .framer-1xsvkdq, .framer-T7VKV .framer-uwvj3a, .framer-T7VKV .framer-1pjhurl, .framer-T7VKV .framer-1iikpca, .framer-T7VKV .framer-pzzc2z, .framer-T7VKV .framer-mqjq, .framer-T7VKV .framer-1l2pryk, .framer-T7VKV .framer-i7fegd, .framer-T7VKV .framer-a985os, .framer-T7VKV .framer-wkaa3 { position: relative; width: auto; height: auto; flex: none; white-space: pre; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-z4ble0 { position: relative; overflow: visible; max-width: 800px; width: 100%; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 30px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-1v2ekhd-container, .framer-T7VKV .framer-f53zbe-container, .framer-T7VKV .framer-bft8fv-container, .framer-T7VKV .framer-kk7z6l-container, .framer-T7VKV .framer-64gm9-container, .framer-T7VKV .framer-1a7rowy-container { position: relative; width: 1px; height: auto; flex: 1 0 0px; }", ".framer-T7VKV .framer-160eo7j { position: relative; overflow: hidden; width: 100%; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 30px; padding: 100px 30px 100px 30px; -webkit-backdrop-filter: blur(0px); backdrop-filter: blur(0px); background-color: #150067; }", ".framer-T7VKV .framer-10fe6i3, .framer-T7VKV .framer-9gavgo, .framer-T7VKV .framer-1wz16gc { position: absolute; overflow: hidden; z-index: 0; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; }", ".framer-T7VKV .framer-1wn0h9k, .framer-T7VKV .framer-vz3jrp, .framer-T7VKV .framer-lf8tbp { position: relative; overflow: visible; max-width: 300px; width: 300px; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 50px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-vsswdm { position: relative; overflow: hidden; will-change: transform; width: 100%; height: 300px; flex: none; border-top-left-radius: 0px; border-top-right-radius: 40px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25); }", ".framer-T7VKV .framer-18qygox, .framer-T7VKV .framer-13sweva, .framer-T7VKV .framer-1olo669 { position: absolute; overflow: visible; height: 120px; right: 0px; bottom: 0px; left: 0px; flex: none; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-right-radius: 40px; border-top-left-radius: 40px; -webkit-backdrop-filter: blur(40px); backdrop-filter: blur(40px); background-color: rgba(0, 0, 0, 0.2); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-qg0a44, .framer-T7VKV .framer-eayjxm, .framer-T7VKV .framer-1bmoejt, .framer-T7VKV .framer-135pr0q, .framer-T7VKV .framer-k9l494 { position: absolute; width: auto; height: auto; left: 20px; top: 20px; flex: none; white-space: pre; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-srwo75, .framer-T7VKV .framer-1y90mk0, .framer-T7VKV .framer-1gpp6sx { position: absolute; width: auto; height: auto; left: 20px; top: 52px; flex: none; white-space: pre; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-1w9oj9t, .framer-T7VKV .framer-1ddbpjz, .framer-T7VKV .framer-xgqu5n, .framer-T7VKV .framer-1s9w9eh { position: absolute; overflow: visible; width: min-content; height: min-content; right: 20px; top: 20px; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 16px; padding: 8px 16px 8px 16px; border-top-left-radius: 24px; border-top-right-radius: 24px; border-bottom-right-radius: 0px; border-bottom-left-radius: 24px; -webkit-backdrop-filter: blur(0px); backdrop-filter: blur(0px); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: #ffffff; }", ".framer-T7VKV .framer-i5vk6u, .framer-T7VKV .framer-k8i6g7, .framer-T7VKV .framer-15p57k8, .framer-T7VKV .framer-1ko36zt, .framer-T7VKV .framer-1fapt82 { position: absolute; width: auto; height: auto; right: 20px; bottom: 20px; flex: none; white-space: pre; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-1f2ivhy, .framer-T7VKV .framer-17i5yzh, .framer-T7VKV .framer-1s7qroa, .framer-T7VKV .framer-d5nsak, .framer-T7VKV .framer-h748zs { position: absolute; width: auto; height: auto; bottom: 20px; left: 20px; flex: none; white-space: pre; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-smvs9y { position: relative; overflow: hidden; will-change: transform; width: 100%; height: 400px; flex: none; border-top-left-radius: 40px; border-top-right-radius: 0px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25); }", ".framer-T7VKV .framer-11zm23j { position: relative; overflow: visible; width: 100%; height: 1px; flex: none; }", ".framer-T7VKV .framer-134veqe { position: absolute; overflow: visible; right: -31px; bottom: -365px; left: -43px; top: -8px; flex: none; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-right-radius: 500px; border-top-left-radius: 500px; -webkit-filter: blur(0px); filter: blur(0px); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-1dkr16r { position: absolute; overflow: visible; width: 300px; height: 300px; left: calc(50.00000000000002% - 300px / 2); top: calc(50.00000000000002% - 300px / 2); flex: none; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-right-radius: 500px; border-top-left-radius: 500px; background: linear-gradient(135deg, rgba(255, 117, 161, 0.19) 0%, rgba(26, 64, 255, 0.27) 100%); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-t3920h, .framer-T7VKV .framer-1l80aaa { position: absolute; overflow: visible; width: 228px; height: 228px; left: calc(50.00000000000002% - 228px / 2); top: calc(50.00000000000002% - 228px / 2); flex: none; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-right-radius: 500px; border-top-left-radius: 500px; background: linear-gradient(135deg, rgba(255, 117, 161, 0.19) 0%, rgba(26, 64, 255, 0.27) 100%); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-b6ijkh-container, .framer-T7VKV .framer-1xklztw-container { position: absolute; width: 189px; height: 189px; left: calc(50.00000000000002% - 189px / 2); top: calc(50.00000000000002% - 189px / 2); flex: none; }", ".framer-T7VKV .framer-1oojbj2, .framer-T7VKV .framer-1vr86mq { position: absolute; overflow: visible; width: 154px; height: 154px; left: calc(50.00000000000002% - 154px / 2); top: calc(50.00000000000002% - 154px / 2); flex: none; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-right-radius: 500px; border-top-left-radius: 500px; background: linear-gradient(135deg, #FC7272 0%, #DF1515 100%); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.3); }", ".framer-T7VKV .framer-o1eoz8 { position: relative; overflow: hidden; will-change: transform; width: 100%; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: flex-end; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; padding: 20px 0px 0px 0px; border-top-left-radius: 0px; border-top-right-radius: 40px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; -webkit-backdrop-filter: blur(30px); backdrop-filter: blur(30px); box-shadow: 0px 40px 80px 0px rgba(0, 0, 0, 0.5); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-185n1ed { position: relative; overflow: visible; width: min-content; height: 31px; flex: none; display: flex; flex-direction: row; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-toale9-container, .framer-T7VKV .framer-l2mbxs-container, .framer-T7VKV .framer-xrk6ku-container, .framer-T7VKV .framer-6o2xj5-container { position: relative; width: 30px; height: 30px; flex: none; }", ".framer-T7VKV .framer-2zt5md { position: relative; width: 260px; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-2mw9q2 { position: relative; overflow: visible; width: 100%; height: 120px; flex: none; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-right-radius: 40px; border-top-left-radius: 40px; -webkit-backdrop-filter: blur(40px); backdrop-filter: blur(40px); background-color: rgba(0, 0, 0, 0.2); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-ocgpjn, .framer-T7VKV .framer-aw5bc4 { position: absolute; width: auto; height: auto; left: 20px; top: 53px; flex: none; white-space: pre; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-1v5h9fz { position: relative; overflow: visible; width: 100%; height: 120px; flex: none; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-right-radius: 40px; border-top-left-radius: 40px; -webkit-backdrop-filter: blur(40px); backdrop-filter: blur(40px); box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.2); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-16u1l33 { position: absolute; overflow: visible; width: 70px; height: 44px; right: 20px; top: 20px; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 16px; padding: 0px 0px 0px 0px; border-top-left-radius: 24px; border-top-right-radius: 24px; border-bottom-right-radius: 0px; border-bottom-left-radius: 24px; -webkit-backdrop-filter: blur(0px); backdrop-filter: blur(0px); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: #ffffff; }", ".framer-T7VKV .framer-16jydw4 { position: relative; overflow: hidden; will-change: transform; width: 100%; height: 300px; flex: none; border-top-left-radius: 40px; border-top-right-radius: 0px; border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25); }", ".framer-T7VKV .framer-1mih4e8 { position: relative; overflow: visible; max-width: 400px; width: 100%; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-fts48v-container, .framer-T7VKV .framer-1szh0le-container, .framer-T7VKV .framer-l76a7m-container { position: relative; width: 60px; height: 60px; flex: none; }", ".framer-T7VKV .framer-kd1tz6, .framer-T7VKV .framer-1d1bvmn { position: relative; overflow: visible; width: 220px; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 16px; padding: 10px 10px 10px 10px; border-top-left-radius: 24px; border-top-right-radius: 24px; border-bottom-right-radius: 0px; border-bottom-left-radius: 24px; -webkit-backdrop-filter: blur(30px); backdrop-filter: blur(30px); background-color: #000000; }", ".framer-T7VKV .framer-bv0lri, .framer-T7VKV .framer-lp9zrb, .framer-T7VKV .framer-1d6uy3e { position: relative; overflow: visible; width: 50%; height: 1px; flex: none; background-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-5m0ard { position: relative; overflow: visible; width: 100%; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 100px 30px 100px 30px; background-color: #070818; }", ".framer-T7VKV .framer-1srctax { position: relative; overflow: visible; max-width: 1200px; width: 1px; height: min-content; flex: 1 0 0px; display: flex; flex-direction: row; justify-content: space-evenly; align-content: center; align-items: center; flex-wrap: nowrap; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-1spkjc9 { position: relative; overflow: visible; max-width: 400px; width: 1px; height: min-content; flex: 1 0 0px; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-12ihm1b { position: relative; overflow: visible; width: 220px; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 16px; padding: 10px 10px 10px 10px; border-top-left-radius: 24px; border-top-right-radius: 24px; border-bottom-right-radius: 0px; border-bottom-left-radius: 24px; -webkit-backdrop-filter: blur(30px); backdrop-filter: blur(30px); background: linear-gradient(115deg, #b175ff 0%, hsl(242, 100%, 54%) 100%); }", ".framer-T7VKV .framer-zxzo0h { position: relative; overflow: visible; width: 400px; height: 570px; flex: none; }", ".framer-T7VKV .framer-1jmg9q8 { position: absolute; overflow: visible; width: 264px; height: 320px; left: 25px; top: 14px; flex: none; }", ".framer-T7VKV .framer-5f5fo1 { position: absolute; overflow: visible; width: 374px; height: 374px; bottom: 0px; left: calc(50.00000000000002% - 374px / 2); flex: none; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-right-radius: 500px; border-top-left-radius: 500px; -webkit-filter: blur(0px); filter: blur(0px); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-gi5tpe { position: absolute; overflow: visible; right: -36px; bottom: -36px; left: -36px; top: -36px; flex: none; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-right-radius: 500px; border-top-left-radius: 500px; background: linear-gradient(135deg, rgba(255, 117, 161, 0.19) 0%, rgba(26, 64, 255, 0.27) 100%); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-aice1g { position: absolute; overflow: hidden; will-change: transform; width: 360px; height: min-content; left: 50%; top: 0px; flex: none; transform: translateX(-50%); display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; padding: 10px 10px 20px 10px; border-top-left-radius: 50px; border-top-right-radius: 50px; border-bottom-right-radius: 0px; border-bottom-left-radius: 30px; -webkit-backdrop-filter: blur(30px); backdrop-filter: blur(30px); box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.3); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-161oqzt { position: relative; width: 100%; height: 188px; flex: none; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-right-radius: 40px; border-top-left-radius: 40px; box-shadow: 0px 0.6032302072222955px 0px -0.41666666666666663px rgba(0, 0, 0, 0.07), 0px 2.290210571630906px 0px -0.8333333333333333px rgba(0, 0, 0, 0.09113), 0px 10px 0px -1.25px rgba(0, 0, 0, 0.1875); }", ".framer-T7VKV .framer-zvyzkw { position: absolute; overflow: visible; width: min-content; height: 44px; right: 20px; bottom: -20px; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 8px 16px 8px 16px; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-right-radius: 40px; border-top-left-radius: 40px; -webkit-backdrop-filter: blur(40px); backdrop-filter: blur(40px); background-color: rgba(255, 255, 255, 0.3); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-fud25t { position: absolute; overflow: visible; width: min-content; height: min-content; bottom: 16px; left: 16px; flex: none; display: flex; flex-direction: row; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-jp3wz0, .framer-T7VKV .framer-14o2e2c { position: relative; overflow: visible; width: min-content; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 8px 16px 8px 16px; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-right-radius: 40px; border-top-left-radius: 40px; -webkit-backdrop-filter: blur(40px); backdrop-filter: blur(40px); background-color: rgba(255, 255, 255, 0.2); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-m8iqt5 { position: relative; overflow: visible; width: 100%; height: 31px; flex: none; display: flex; flex-direction: row; justify-content: space-between; align-content: center; align-items: center; flex-wrap: nowrap; padding: 0px 0px 0px 20px; }", ".framer-T7VKV .framer-1jf2fz0 { position: relative; overflow: hidden; width: 100%; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 30px; padding: 100px 30px 100px 30px; background-color: #150067; }", ".framer-T7VKV .framer-1wchkqi { position: relative; overflow: visible; width: 100%; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 30px 30px 30px 30px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-right-radius: 30px; border-top-left-radius: 30px; -webkit-backdrop-filter: blur(40px); backdrop-filter: blur(40px); box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.2); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-ra8c0m-container { position: relative; width: 220px; height: 220px; flex: none; }", ".framer-T7VKV .framer-296ro2 { position: relative; overflow: visible; width: 100%; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 10px; padding: 30px 30px 30px 30px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-right-radius: 30px; border-top-left-radius: 30px; box-shadow: 0px 0.8366578388263093px 0.8366578388263093px -0.3125px rgba(0, 0, 0, 0.13), 0px 1.9921031954847526px 1.9921031954847526px -0.625px rgba(0, 0, 0, 0.125), 0px 3.6296609414100724px 3.6296609414100724px -0.9375px rgba(0, 0, 0, 0.125), 0px 6.034192745980683px 6.034192745980683px -1.25px rgba(0, 0, 0, 0.125), 0px 9.750246371049485px 9.750246371049485px -1.5625px rgba(0, 0, 0, 0.125), 0px 15.950709106675731px 15.950709106675731px -1.875px rgba(0, 0, 0, 0.125), 0px 27.480176062851854px 27.480176062851854px -2.1875px rgba(0, 0, 0, 0.125), 0px 50px 50px -2.5px rgba(0, 0, 0, 0.125); background: linear-gradient(141deg, #fe9653 0%, #fb292c 100%); }", ".framer-T7VKV .framer-1so26si-container { position: relative; width: 175px; height: 175px; flex: none; }", ".framer-T7VKV .framer-1kygq5b { position: relative; overflow: visible; max-width: 400px; width: 1px; height: min-content; flex: 1 0 0px; display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 31px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-ork5lf { position: relative; overflow: hidden; width: 100%; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; padding: 100px 30px 100px 30px; background-color: #0a0a30; }", ".framer-T7VKV .framer-lmppu1 { position: relative; max-width: 500px; width: 100%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; --framer-paragraph-spacing: 0px; --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; }", ".framer-T7VKV .framer-bnc6pz { position: relative; overflow: visible; max-width: 1200px; width: 100%; height: min-content; flex: none; display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; padding: 0px 0px 0px 0px; }", ".framer-T7VKV .framer-e1nr4t { position: relative; overflow: visible; width: 100%; height: min-content; flex: none; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; padding: 100px 30px 100px 30px; background-color: #000000; }", ".framer-T7VKV .framer-suw9mn-container, .framer-T7VKV .framer-jbc2uk-container, .framer-T7VKV .framer-cjg49g-container, .framer-T7VKV .framer-1bnh683-container { position: relative; width: 800px; height: auto; flex: none; }", ".framer-T7VKV .framer-uppqub-container { position: relative; width: 100%; height: auto; flex: none; }", ".framer-T7VKV .framer-1fdeldd { position: fixed; inset: 0px; user-select: none; background-color: rgba(0, 0, 0, 0.3); }", ".framer-T7VKV .framer-1fdeldd-container { position: absolute; }", ".framer-T7VKV .framer-vrqh0x { position: fixed; cursor: pointer; overflow: hidden; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); }", ".framer-T7VKV .framer-1w8vgtj { position: fixed; overflow: hidden; will-change: transform; max-width: 500px; width: 500px; height: min-content; left: 50%; top: 50%; flex: none; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; padding: 60px 30px 60px 30px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-right-radius: 30px; border-top-left-radius: 30px; -webkit-backdrop-filter: blur(30px); backdrop-filter: blur(30px); box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.3); --border-bottom-width: 1px; --border-top-width: 1px; --border-right-width: 1px; --border-left-width: 1px; --border-style: solid; --border-color: rgba(255, 255, 255, 0.1); }", ".framer-T7VKV .framer-4isr8v-container { position: relative; width: 100%; height: 190px; flex: none; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-T7VKV framer-72rtr7 > * { margin: 0px; margin-top: calc(0px / 2); margin-bottom: calc(0px / 2); } .framer-T7VKV framer-72rtr7 > :first-child, .framer-T7VKV framer-1gltdb > :first-child, .framer-T7VKV framer-es2yhr > :first-child, .framer-T7VKV framer-1wn0h9k > :first-child, .framer-T7VKV framer-vz3jrp > :first-child, .framer-T7VKV framer-o1eoz8 > :first-child, .framer-T7VKV framer-1mih4e8 > :first-child, .framer-T7VKV framer-1spkjc9 > :first-child, .framer-T7VKV framer-aice1g > :first-child, .framer-T7VKV framer-zvyzkw > :first-child, .framer-T7VKV framer-jp3wz0 > :first-child, .framer-T7VKV framer-14o2e2c > :first-child, .framer-T7VKV framer-lf8tbp > :first-child, .framer-T7VKV framer-1wchkqi > :first-child, .framer-T7VKV framer-296ro2 > :first-child, .framer-T7VKV framer-1kygq5b > :first-child, .framer-T7VKV framer-ork5lf > :first-child, .framer-T7VKV framer-e1nr4t > :first-child, .framer-T7VKV framer-1w8vgtj > :first-child { margin-top: 0px; } .framer-T7VKV framer-72rtr7 > :last-child, .framer-T7VKV framer-1gltdb > :last-child, .framer-T7VKV framer-es2yhr > :last-child, .framer-T7VKV framer-1wn0h9k > :last-child, .framer-T7VKV framer-vz3jrp > :last-child, .framer-T7VKV framer-o1eoz8 > :last-child, .framer-T7VKV framer-1mih4e8 > :last-child, .framer-T7VKV framer-1spkjc9 > :last-child, .framer-T7VKV framer-aice1g > :last-child, .framer-T7VKV framer-zvyzkw > :last-child, .framer-T7VKV framer-jp3wz0 > :last-child, .framer-T7VKV framer-14o2e2c > :last-child, .framer-T7VKV framer-lf8tbp > :last-child, .framer-T7VKV framer-1wchkqi > :last-child, .framer-T7VKV framer-296ro2 > :last-child, .framer-T7VKV framer-1kygq5b > :last-child, .framer-T7VKV framer-ork5lf > :last-child, .framer-T7VKV framer-e1nr4t > :last-child, .framer-T7VKV framer-1w8vgtj > :last-child { margin-bottom: 0px; } .framer-T7VKV framer-1gltdb > *, .framer-T7VKV framer-es2yhr > *, .framer-T7VKV framer-1mih4e8 > *, .framer-T7VKV framer-1spkjc9 > *, .framer-T7VKV framer-ork5lf > *, .framer-T7VKV framer-e1nr4t > *, .framer-T7VKV framer-1w8vgtj > * { margin: 0px; margin-top: calc(30px / 2); margin-bottom: calc(30px / 2); } .framer-T7VKV framer-15y7aei > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-T7VKV framer-15y7aei > :first-child, .framer-T7VKV framer-z4ble0 > :first-child, .framer-T7VKV framer-160eo7j > :first-child, .framer-T7VKV framer-1w9oj9t > :first-child, .framer-T7VKV framer-1ddbpjz > :first-child, .framer-T7VKV framer-185n1ed > :first-child, .framer-T7VKV framer-xgqu5n > :first-child, .framer-T7VKV framer-16u1l33 > :first-child, .framer-T7VKV framer-1s9w9eh > :first-child, .framer-T7VKV framer-kd1tz6 > :first-child, .framer-T7VKV framer-5m0ard > :first-child, .framer-T7VKV framer-12ihm1b > :first-child, .framer-T7VKV framer-fud25t > :first-child, .framer-T7VKV framer-1jf2fz0 > :first-child, .framer-T7VKV framer-1d1bvmn > :first-child, .framer-T7VKV framer-bnc6pz > :first-child { margin-left: 0px; } .framer-T7VKV framer-15y7aei > :last-child, .framer-T7VKV framer-z4ble0 > :last-child, .framer-T7VKV framer-160eo7j > :last-child, .framer-T7VKV framer-1w9oj9t > :last-child, .framer-T7VKV framer-1ddbpjz > :last-child, .framer-T7VKV framer-185n1ed > :last-child, .framer-T7VKV framer-xgqu5n > :last-child, .framer-T7VKV framer-16u1l33 > :last-child, .framer-T7VKV framer-1s9w9eh > :last-child, .framer-T7VKV framer-kd1tz6 > :last-child, .framer-T7VKV framer-5m0ard > :last-child, .framer-T7VKV framer-12ihm1b > :last-child, .framer-T7VKV framer-fud25t > :last-child, .framer-T7VKV framer-1jf2fz0 > :last-child, .framer-T7VKV framer-1d1bvmn > :last-child, .framer-T7VKV framer-bnc6pz > :last-child { margin-right: 0px; } .framer-T7VKV framer-z4ble0 > *, .framer-T7VKV framer-160eo7j > *, .framer-T7VKV framer-1jf2fz0 > *, .framer-T7VKV framer-bnc6pz > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-T7VKV framer-1wn0h9k > *, .framer-T7VKV framer-vz3jrp > *, .framer-T7VKV framer-lf8tbp > * { margin: 0px; margin-top: calc(50px / 2); margin-bottom: calc(50px / 2); } .framer-T7VKV framer-1w9oj9t > *, .framer-T7VKV framer-1ddbpjz > *, .framer-T7VKV framer-xgqu5n > *, .framer-T7VKV framer-16u1l33 > *, .framer-T7VKV framer-1s9w9eh > *, .framer-T7VKV framer-kd1tz6 > *, .framer-T7VKV framer-12ihm1b > *, .framer-T7VKV framer-1d1bvmn > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-T7VKV framer-o1eoz8 > *, .framer-T7VKV framer-aice1g > * { margin: 0px; margin-top: calc(20px / 2); margin-bottom: calc(20px / 2); } .framer-T7VKV framer-185n1ed > *, .framer-T7VKV framer-5m0ard > *, .framer-T7VKV framer-fud25t > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-T7VKV framer-zvyzkw > *, .framer-T7VKV framer-jp3wz0 > *, .framer-T7VKV framer-14o2e2c > *, .framer-T7VKV framer-1wchkqi > *, .framer-T7VKV framer-296ro2 > * { margin: 0px; margin-top: calc(10px / 2); margin-bottom: calc(10px / 2); } .framer-T7VKV framer-1kygq5b > * { margin: 0px; margin-top: calc(31px / 2); margin-bottom: calc(31px / 2); } }", "@media (min-width: 1200px) and (max-width: 1599px) { .framer-T7VKV .hidden-72rtr7 { display: none !important; } }", "@media (min-width: 810px) and (max-width: 1199px) { .framer-T7VKV .hidden-1wv4xmw { display: none !important; } .framer-T7VKV .framer-72rtr7 { width: 810px; height: min-content; } .framer-T7VKV .framer-1vbxwnv-container { width: 100%; height: auto; right: auto; bottom: auto; left: 50%; top: 0px; flex: none; transform: translateX(-50%); align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-ws79ko { width: 100%; height: 620px; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1gltdb { display: flex; flex-direction: column; justify-content: flex-start; align-content: flex-start; align-items: flex-start; flex-wrap: nowrap; gap: 20px; width: 560px; height: min-content; right: auto; bottom: auto; left: 0px; top: 120px; flex: none; transform: none; aspect-ratio: unset; padding: 30px 30px 30px 30px; } .framer-T7VKV .framer-16u0u6i { width: 80%; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; aspect-ratio: unset; } .framer-T7VKV .framer-wyueiv { width: 116px; height: 28px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1drh8lo { width: 33px; height: 40px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1pj0rb6 { width: 110px; height: 21px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-16jh7qn { width: 119px; height: 38px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-pugecg { width: 98px; height: 33px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1v2ekhd-container, .framer-T7VKV .framer-f53zbe-container, .framer-T7VKV .framer-bft8fv-container { max-width: unset; min-width: unset; max-height: unset; min-height: unset; } .framer-T7VKV .framer-160eo7j { width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-10fe6i3, .framer-T7VKV .framer-9gavgo { width: auto; height: auto; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1wn0h9k { display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; } .framer-T7VKV .framer-vsswdm, .framer-T7VKV .framer-16jydw4 { width: 100%; height: 300px; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-smvs9y { width: 100%; height: 400px; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-vz3jrp { display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; } .framer-T7VKV .framer-134veqe { width: auto; height: auto; right: -37px; bottom: -365px; left: -37px; top: -8px; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-1mih4e8 { display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; } .framer-T7VKV .framer-zxzo0h { width: 1px; height: 566px; right: auto; bottom: auto; left: auto; top: auto; flex: 1 0 0px; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1jmg9q8 { width: 264px; height: 320px; right: auto; bottom: auto; left: -65px; top: -56px; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-5f5fo1 { width: 374px; height: 374px; right: auto; bottom: 0px; left: calc(50.00000000000002% - 374px / 2); top: auto; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-aice1g { width: 339px; height: 269px; right: auto; bottom: auto; left: calc(50.00000000000002% - 339px / 2); top: 0px; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-ork5lf { padding: 100px 20px 100px 20px; } .framer-T7VKV .framer-bnc6pz { display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 0px; } .framer-T7VKV .framer-suw9mn-container, .framer-T7VKV .framer-jbc2uk-container, .framer-T7VKV .framer-cjg49g-container, .framer-T7VKV .framer-1bnh683-container { width: 100%; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-T7VKV framer-1gltdb > *, .framer-T7VKV framer-vz3jrp > *, .framer-T7VKV framer-1mih4e8 > * { margin: 0px; margin-top: calc(20px / 2); margin-bottom: calc(20px / 2); } .framer-T7VKV framer-1gltdb > :first-child, .framer-T7VKV framer-1wn0h9k > :first-child, .framer-T7VKV framer-vz3jrp > :first-child, .framer-T7VKV framer-1mih4e8 > :first-child { margin-top: 0px; } .framer-T7VKV framer-1gltdb > :last-child, .framer-T7VKV framer-1wn0h9k > :last-child, .framer-T7VKV framer-vz3jrp > :last-child, .framer-T7VKV framer-1mih4e8 > :last-child { margin-bottom: 0px; } .framer-T7VKV framer-1wn0h9k > * { margin: 0px; margin-top: calc(30px / 2); margin-bottom: calc(30px / 2); } .framer-T7VKV framer-bnc6pz > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-T7VKV framer-bnc6pz > :first-child { margin-left: 0px; } .framer-T7VKV framer-bnc6pz > :last-child { margin-right: 0px; } }}", "@media (max-width: 809px) { .framer-T7VKV .hidden-1o9hupe { display: none !important; } .framer-T7VKV .framer-72rtr7 { width: 390px; height: min-content; } .framer-T7VKV .framer-1vbxwnv-container { width: 100%; height: auto; right: auto; bottom: auto; left: 50%; top: 0px; flex: none; transform: translateX(-50%); align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-ws79ko { width: 100%; height: 860px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; background-color: transparent; } .framer-T7VKV .framer-1gltdb { display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; max-width: 800px; min-width: unset; max-height: unset; min-height: unset; width: 100%; height: min-content; right: auto; bottom: auto; left: 0px; top: 100px; flex: none; transform: none; aspect-ratio: unset; padding: 20px 20px 20px 20px; } .framer-T7VKV .framer-10mrn1k { --extracted-1sp2osd: #ffffff; } .framer-T7VKV .framer-16u0u6i { width: 80%; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; aspect-ratio: unset; --extracted-1w3ko1f: #ffffff; } .framer-T7VKV .framer-15y7aei { display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1r7r56c-container, .framer-T7VKV .framer-1p1vo87-container { width: auto; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1w8vgtj { width: 90%; height: min-content; right: auto; bottom: auto; left: 50%; top: 50%; flex: none; aspect-ratio: unset; padding: 40px 20px 40px 20px; max-width: unset; min-width: unset; max-height: unset; min-height: unset; } .framer-T7VKV .framer-es2yhr, .framer-T7VKV .framer-5m0ard { padding: 80px 20px 80px 20px; } .framer-T7VKV .framer-1wn8qu9 { width: 100%; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; aspect-ratio: unset; } .framer-T7VKV .framer-kz79j9 { display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 20px; } .framer-T7VKV .framer-wyueiv { width: 102px; height: 25px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1drh8lo { width: 29px; height: 35px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1pj0rb6 { width: 97px; height: 19px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-16jh7qn { width: 105px; height: 33px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-pugecg { width: 86px; height: 29px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-z4ble0 { display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 10px; max-width: 400px; min-width: unset; max-height: unset; min-height: unset; } .framer-T7VKV .framer-1v2ekhd-container, .framer-T7VKV .framer-f53zbe-container, .framer-T7VKV .framer-bft8fv-container, .framer-T7VKV .framer-kk7z6l-container, .framer-T7VKV .framer-64gm9-container, .framer-T7VKV .framer-1a7rowy-container, .framer-T7VKV .framer-suw9mn-container, .framer-T7VKV .framer-jbc2uk-container, .framer-T7VKV .framer-cjg49g-container, .framer-T7VKV .framer-1bnh683-container { width: 100%; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-160eo7j { padding: 100px 20px 100px 20px; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 30px; width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-10fe6i3, .framer-T7VKV .framer-9gavgo { width: auto; height: auto; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1wn0h9k, .framer-T7VKV .framer-vz3jrp, .framer-T7VKV .framer-lf8tbp { width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; } .framer-T7VKV .framer-vsswdm { width: 100%; height: 300px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-smvs9y { width: 100%; height: 400px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-134veqe { width: auto; height: auto; right: -37px; bottom: -365px; left: -37px; top: -8px; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-16jydw4 { width: 100%; height: 300px; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-1mih4e8 { width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; } .framer-T7VKV .framer-1srctax { display: flex; flex-direction: column; justify-content: space-evenly; align-content: center; align-items: center; flex-wrap: nowrap; gap: unset; } .framer-T7VKV .framer-1spkjc9 { width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; order: 1; } .framer-T7VKV .framer-zxzo0h { width: 100%; height: 350px; right: auto; bottom: auto; left: auto; top: auto; flex: none; transform: none; align-self: auto; aspect-ratio: unset; order: 0; } .framer-T7VKV .framer-1jmg9q8 { width: 264px; height: 320px; right: -19px; bottom: auto; left: auto; top: -96px; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-5f5fo1 { width: 344px; height: 339px; right: auto; bottom: 0px; left: calc(50.00000000000002% - 344px / 2); top: auto; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-1l80aaa { width: 228px; height: 228px; right: auto; bottom: auto; left: calc(50.161812297734656% - 228px / 2); top: calc(46.92556634304209% - 228px / 2); flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-gi5tpe { width: auto; height: auto; right: -36px; bottom: -46px; left: -36px; top: -26px; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-aice1g { width: 340px; height: min-content; right: auto; bottom: auto; left: 50%; top: 0px; flex: none; transform: translateX(-50%); aspect-ratio: unset; } .framer-T7VKV .framer-1jf2fz0 { padding: 100px 20px 100px 20px; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: wrap; gap: 30px; } .framer-T7VKV .framer-1kygq5b { width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; display: flex; flex-direction: column; justify-content: flex-start; align-content: center; align-items: center; flex-wrap: nowrap; gap: 30px; } .framer-T7VKV .framer-ork5lf { display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; padding: 100px 20px 100px 20px; } .framer-T7VKV .framer-bnc6pz { display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; flex-wrap: nowrap; gap: 20px; max-width: 400px; min-width: unset; max-height: unset; min-height: unset; } .framer-T7VKV .framer-e1nr4t { padding: 100px 20px 100px 20px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-T7VKV framer-1gltdb > *, .framer-T7VKV framer-1wn0h9k > *, .framer-T7VKV framer-vz3jrp > *, .framer-T7VKV framer-1mih4e8 > *, .framer-T7VKV framer-1spkjc9 > *, .framer-T7VKV framer-lf8tbp > *, .framer-T7VKV framer-ork5lf > *, .framer-T7VKV framer-bnc6pz > * { margin: 0px; margin-top: calc(20px / 2); margin-bottom: calc(20px / 2); } .framer-T7VKV framer-1gltdb > :first-child, .framer-T7VKV framer-z4ble0 > :first-child, .framer-T7VKV framer-1wn0h9k > :first-child, .framer-T7VKV framer-vz3jrp > :first-child, .framer-T7VKV framer-1mih4e8 > :first-child, .framer-T7VKV framer-1spkjc9 > :first-child, .framer-T7VKV framer-lf8tbp > :first-child, .framer-T7VKV framer-1kygq5b > :first-child, .framer-T7VKV framer-ork5lf > :first-child, .framer-T7VKV framer-bnc6pz > :first-child { margin-top: 0px; } .framer-T7VKV framer-1gltdb > :last-child, .framer-T7VKV framer-z4ble0 > :last-child, .framer-T7VKV framer-1wn0h9k > :last-child, .framer-T7VKV framer-vz3jrp > :last-child, .framer-T7VKV framer-1mih4e8 > :last-child, .framer-T7VKV framer-1spkjc9 > :last-child, .framer-T7VKV framer-lf8tbp > :last-child, .framer-T7VKV framer-1kygq5b > :last-child, .framer-T7VKV framer-ork5lf > :last-child, .framer-T7VKV framer-bnc6pz > :last-child { margin-bottom: 0px; } .framer-T7VKV framer-kz79j9 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-T7VKV framer-kz79j9 > :first-child { margin-left: 0px; } .framer-T7VKV framer-kz79j9 > :last-child { margin-right: 0px; } .framer-T7VKV framer-z4ble0 > * { margin: 0px; margin-top: calc(10px / 2); margin-bottom: calc(10px / 2); } .framer-T7VKV framer-1kygq5b > * { margin: 0px; margin-top: calc(30px / 2); margin-bottom: calc(30px / 2); } }}", "@media (min-width: 1600px) { .framer-T7VKV .hidden-1pu3sxf { display: none !important; } .framer-T7VKV .framer-72rtr7 { width: 1600px; height: min-content; } .framer-T7VKV .framer-1vbxwnv-container { width: 100%; height: auto; right: auto; bottom: auto; left: 50%; top: 0px; flex: none; transform: translateX(-50%); align-self: auto; aspect-ratio: unset; } .framer-T7VKV .framer-ws79ko { background-color: transparent; } .framer-T7VKV .framer-1gltdb { width: 560px; height: min-content; right: auto; bottom: auto; left: 260px; top: 80px; flex: none; transform: none; aspect-ratio: unset; } .framer-T7VKV .framer-10fe6i3, .framer-T7VKV .framer-9gavgo { width: auto; height: auto; right: 0px; bottom: 0px; left: 0px; top: 0px; flex: none; transform: none; align-self: auto; aspect-ratio: unset; }}", ...nr, ...Ge, ...rr, ...Be, ...pe, ...E, ...ce, ...Oe],
	be = H(wt, bt),
	fa = be;
be.displayName = "Home";
be.defaultProps = {
	width: 1200,
	height: 6614
};
C(be, [...tt, ...at, ...ot, ...nt, ...it, ...st, ...lt, ...pt, ...mt, ...ft, ...ct, ...dt, ...ht, ...or, ...Je, ...er, ...Ae, ...le, ...X, ...fe, ...Qe]);
var ca = {
	exports: {
		default: {
			type: "reactComponent",
			name: "FrameraugiA20Il",
			slots: [],
			annotations: {
				framerIntrinsicHeight: "6614",
				framerContractVersion: "1",
				framerIntrinsicWidth: "1200",
				framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"whrfYvRBp":{"layout":["fixed","auto"]},"vmE1JiIHl":{"layout":["fixed","auto"]},"N5jVBZ2oJ":{"layout":["fixed","auto"]}}}',
				framerResponsiveScreen: ""
			}
		},
		Props: {
			type: "tsType",
			annotations: {
				framerContractVersion: "1"
			}
		},
		__FramerMetadata__: {
			type: "variable"
		}
	}
};
export {
	ca as __FramerMetadata__, fa as
	default
};
  
