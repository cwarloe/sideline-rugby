import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Printer, i as QrCode, o as Check, r as Shield, t as X } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-KrS2pWKh.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CFzibtez.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NOTE_KEY = "sideline-us-u12-note";
var sources = {
	tackle: "https://usa.rugby/news/usa-rugby-to-implement-world-rugby-global-law-variation-on-tackle-height-staring-september-1-2024-2024410",
	yhs: "https://usayhs.rugby/news/law-changes-for-the-2024-25-season",
	washington: "https://cdn.prod.website-files.com/6603416214d0f8f22542ab74/67d1c916086e3a50cd7fe59a_2025_Rugby-WA-Policies-and-Procedures%20(2).pdf",
	laws: "https://www.world.rugby/the-game/laws/home"
};
var national = [
	"Open-field tackles are below the base of the sternum. USA Rugby has used that line since September 1, 2024.",
	"Don’t lead with your head. A tackle around the neck is never “just a tackle.”",
	"The pass goes sideways or backwards. A forward pass is an infringement.",
	"Age grade is set on September 1. Your state youth organization can still move a player for safety."
];
var facts = {
	tens: [
		{
			k: "A side",
			v: "10",
			d: "Match the other team’s numbers"
		},
		{
			k: "Ball",
			v: "4",
			d: "Size"
		},
		{
			k: "Field",
			v: "70×40",
			d: "Metres, a shortened full field"
		},
		{
			k: "A half",
			v: "25",
			d: "Minutes. 70 max in a day"
		},
		{
			k: "Scrum",
			v: "Still",
			d: "Uncontested. Let the pass out"
		},
		{
			k: "Lineout",
			v: "Still",
			d: "Uncontested. No maul"
		}
	],
	fifteens: [
		{
			k: "A side",
			v: "15",
			d: "Full teams, World Rugby"
		},
		{
			k: "Try",
			v: "5",
			d: "Ground the ball over the line"
		},
		{
			k: "Kick",
			v: "2",
			d: "Conversion. Penalty goal is 3"
		},
		{
			k: "Scrum",
			v: "5m",
			d: "Backs stay off until it’s out"
		},
		{
			k: "Lineout",
			v: "10m",
			d: "Backs stay back until it’s over"
		},
		{
			k: "Tackle",
			v: "Low",
			d: "Below the sternum, open field"
		}
	]
};
var laws = {
	tens: [
		{
			title: "Tackle under the sternum",
			shout: "Arms on, below the base of the sternum. Not the chest.",
			detail: "Washington’s 2025 youth card says the tackle must be below the sternum. That matches the USA Rugby community law for open-field tackles. A direct hit on the head or neck is a penalty. So is swinging a player around."
		},
		{
			title: "Stiff-arm below the shoulder",
			shout: "A hand-off is legal only below the shoulder. Carry it in two hands.",
			detail: "The fend stops at the shoulder on this card. Coaches want two hands on the ball so the pass is actually there."
		},
		{
			title: "Pass it back",
			shout: "Sideways or backwards. Forward pass or knock-on: their scrum.",
			detail: "The scrum that follows is uncontested. You are restarting, not shoving."
		},
		{
			title: "Scrum does not shove",
			shout: "Uncontested. The defending scrum-half does not contest. Let the pass happen.",
			detail: "Five forwards a side on the Washington card. The attacking scrum-half must be allowed to get the pass away. This is a restart for the hook and the shape, not a push."
		},
		{
			title: "Lineout does not compete",
			shout: "Uncontested lineout. No maul off it.",
			detail: "The throw goes in and the throwing team is allowed the ball. Mauls are not part of this card. Indiana’s 5th/6th-grade games are different: their lineout is contested, with no lifting. If that is your state, write it in the club note."
		},
		{
			title: "The ruck is live",
			shout: "Rucks are contested. No squeeze ball. A jackal is allowed.",
			detail: "Arrive in control, stay on your feet, and come from your own side. Squeeze ball — falling over the ball and pushing it back between your legs — is not allowed. One or two support players is the picture coaches want, not a pile."
		},
		{
			title: "What scores",
			shout: "A try, plus a conversion kick.",
			detail: "The Washington sheet lists a try and a conversion kick. It does not reprint a points table. Unless your festival posts different numbers, a try is 5 and the kick is 2."
		},
		{
			title: "Done for the day",
			shout: "Suspected concussion: that player does not come back.",
			detail: "Subs are unlimited, and a player who left for an ordinary knock can return. A suspected concussion cannot. If someone stays down, the game stops."
		}
	],
	fifteens: [
		{
			title: "The US tackle line",
			shout: "In the open field, tackle below the base of the sternum.",
			detail: "USA Rugby’s community law, in force since September 1, 2024. It is written for players running in open play, not the low pick-and-drive next to a ruck or the try line. Leading with the head is dangerous play. Head or neck contact still goes through the Head Contact Process: penalty, yellow, or red."
		},
		{
			title: "Pass it back",
			shout: "Sideways or backwards only. A forward pass or knock-on is their scrum.",
			detail: "If you knock it forward and it hits the ground or another player before you catch it, that is a knock-on. Advantage can be played if the other team is already going somewhere useful and it is safe."
		},
		{
			title: "The scoreboard",
			shout: "Try 5. Conversion 2. Penalty goal 3. Drop goal 3.",
			detail: "Ground the ball on or behind the goal line with downward pressure. A conversion is taken from in line with where the try was scored. Some US youth competitions delete kicks at goal and invent a “converted try zone” instead. That is a local rule, not the national one."
		},
		{
			title: "Penalty is 10 metres",
			shout: "The other team walks back 10. You can tap and go, or kick.",
			detail: "Offside, not releasing, hands in the ruck, foul play, and a high open-field tackle are penalties. A free kick is a different, smaller restart. If the referee calls advantage, keep playing."
		},
		{
			title: "Scrum, five metres",
			shout: "Eight forwards. Ball in straight. Everyone else 5 metres back.",
			detail: "The team that did not infringe throws the ball in. Backs stay 5 metres from the hindmost foot until the ball is out. Crouch, bind, set. No charging in. A collapsed scrum is a whistle, immediately."
		},
		{
			title: "Lineout, ten metres",
			shout: "Throw it down the tunnel. Backs stay 10 metres off until it is over.",
			detail: "Lifting is legal in the full game. The lineout ends when the ball or the catcher leaves it. A maul can start from a catch. Quick throw-ins are legal if nobody else has touched the ball."
		},
		{
			title: "Tackle, then a ruck",
			shout: "Release the ball. Get up. Join from behind. No hands in the ruck.",
			detail: "A tackle is a hold that brings the carrier to ground. They place or pass the ball immediately. The tackler lets go. Once players from both teams are on their feet over the ball, it is a ruck: enter through your own gate, stay on your feet, and don’t dive on it."
		},
		{
			title: "Kick-off",
			shout: "Drop kick from halfway. It must travel 10 metres.",
			detail: "The kicker’s team stays behind the ball. Receivers stay behind their 10-metre line. A short kick that an opponent plays is play on. Otherwise the receivers choose a retake or a scrum. After a score, the scoring team kicks off, unless your competition flips it."
		}
	]
};
var yells = {
	tens: [
		{
			when: "“Push!”",
			what: "Not in this scrum. It is uncontested, and the pass has to be allowed out."
		},
		{
			when: "“Maul!”",
			what: "Washington’s U12 card doesn’t play mauls. If they form one, expect the whistle."
		},
		{
			when: "“Lift him!”",
			what: "Not on this lineout. Uncontested, no competition. Lifting is a U14 conversation."
		},
		{
			when: "“Hands!”",
			what: "A jackal is allowed. Squeeze ball is not. Those are different things."
		},
		{
			when: "“High!” at the shoulders",
			what: "The line is lower. Base of the sternum. Chest is high."
		}
	],
	fifteens: [
		{
			when: "“Lineout!” at every touch",
			what: "Yes in this game — unlike a lot of younger formats. Backs 10 metres."
		},
		{
			when: "“That’s below the shoulders”",
			what: "Since 2024 the open-field line is the base of the sternum, not the shoulders."
		},
		{
			when: "“Ten metres!” at a scrum",
			what: "Scrum offside is 5 metres. Ten is the penalty and the lineout."
		},
		{
			when: "“Knock-on!” when it went back",
			what: "Backwards onto the ground is play on. Anyone can pick it up."
		},
		{
			when: "“They’re fine, play on”",
			what: "If they are holding their head, or slow to get up, the day is over for that player."
		}
	]
};
var questions = {
	tens: [
		{
			prompt: "How many players does the Washington U12 card put on the field?",
			choices: [
				"7",
				"10",
				"15"
			],
			answer: 1,
			why: "10 a side, with 5 forwards. If one team is short, the numbers are matched."
		},
		{
			prompt: "The scrum is about to start. What is legal?",
			choices: [
				"Both packs shove",
				"Uncontested, and the pass must be allowed",
				"The defending scrum-half may grab the passer"
			],
			answer: 1,
			why: "Uncontested. The defending scrum-half does not contest the attacking scrum-half."
		},
		{
			prompt: "Ball in touch. What happens?",
			choices: [
				"A contested lineout with lifters",
				"An uncontested lineout",
				"A scrum on the 15"
			],
			answer: 1,
			why: "Uncontested lineout, and no maul. Indiana 5th/6th is the odd one out: contested, no lift."
		},
		{
			prompt: "Where is a legal tackle?",
			choices: [
				"Below the shoulders",
				"Below the base of the sternum",
				"Anywhere with a wrap"
			],
			answer: 1,
			why: "Sternum and below. Head or neck contact is a penalty on its own."
		},
		{
			prompt: "A player stands up dizzy after a tackle.",
			choices: [
				"One play off, then back on",
				"They are done for the day",
				"They can return at half if they want to"
			],
			answer: 1,
			why: "Suspected concussion: no return that day. Ordinary substitutions are otherwise unlimited."
		},
		{
			prompt: "What is on the score sheet?",
			choices: [
				"Tries only",
				"A try and a conversion kick",
				"Tries, penalty goals, and drop goals"
			],
			answer: 1,
			why: "Washington lists a try and a conversion kick. Drop goals are not the youth card."
		}
	],
	fifteens: [
		{
			prompt: "Open-field tackle. Where is the legal height in the US?",
			choices: [
				"Shoulders",
				"Base of the sternum",
				"Waist only"
			],
			answer: 1,
			why: "USA Rugby community law since September 1, 2024. Head contact is a separate, stricter call."
		},
		{
			prompt: "A try is worth…",
			choices: [
				"1",
				"3",
				"5"
			],
			answer: 2,
			why: "5 for the try, 2 for the conversion, 3 for a penalty goal or drop goal."
		},
		{
			prompt: "Where do the backs stand at a scrum?",
			choices: [
				"10 metres",
				"5 metres from the hindmost foot",
				"On the hindmost foot"
			],
			answer: 1,
			why: "Five metres until the ball is out. Ten metres is the lineout and the penalty."
		},
		{
			prompt: "The ball is thrown forward and hits the grass.",
			choices: [
				"Play on",
				"Scrum to the other team",
				"Penalty, 10 metres"
			],
			answer: 1,
			why: "That is a knock-on or a forward pass. Scrum to the other side, unless advantage is already alive."
		},
		{
			prompt: "Kick-off must travel…",
			choices: [
				"5 metres",
				"7 metres",
				"10 metres"
			],
			answer: 2,
			why: "A drop kick from halfway, 10 metres, receivers behind their 10-metre line."
		},
		{
			prompt: "Once a ruck has formed, hands on the ball are…",
			choices: [
				"How you jackal",
				"Illegal. Stay on your feet and enter through the gate",
				"Fine if you arrived first"
			],
			answer: 1,
			why: "Hands in the ruck are a penalty. Arrive from behind, on your feet."
		}
	]
};
var modeMeta = {
	tens: {
		label: "10-a-side",
		short: "Youth 10s",
		blurb: "The grade-school card used by Rugby Washington in 2025: 10 a side, size 4, uncontested set pieces, a real tackle.",
		score: "Try + conversion"
	},
	fifteens: {
		label: "15-a-side",
		short: "Full laws",
		blurb: "World Rugby, the way USA Rugby plays the community game: full scoring, scrums and lineouts, with the sternum tackle line.",
		score: "5 · 2 · 3"
	}
};
function SidelineApp({ mode }) {
	const navigate = useNavigate();
	const [note, setNote] = (0, import_react.useState)("");
	const [href, setHref] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem(NOTE_KEY);
		if (saved) setNote(saved.slice(0, 160));
	}, []);
	(0, import_react.useEffect)(() => {
		const url = new URL(window.location.href);
		url.searchParams.set("mode", mode);
		url.hash = "";
		setHref(url.toString());
	}, [mode]);
	function setMode(next) {
		navigate({
			to: "/",
			search: { mode: next }
		});
	}
	function onNote(value) {
		const next = value.slice(0, 160);
		setNote(next);
		localStorage.setItem(NOTE_KEY, next);
	}
	const meta = modeMeta[mode];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-print min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "touchline bg-ink text-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.18em] text-flag uppercase",
								children: "United States · Under 12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-5xl leading-none font-medium text-cream italic",
								children: "Sideline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-sm text-cream/80",
								children: "A touchline card for American age-grade rugby. The national tackle law is the same everywhere. The size of the game is not."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(true),
							className: "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-flag px-4 text-sm font-semibold text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {
								className: "size-4",
								"aria-hidden": true
							}), "Card"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						role: "tablist",
						"aria-label": "Which game",
						children: Object.keys(modeMeta).map((id) => {
							const on = id === mode;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": on,
								onClick: () => setMode(id),
								className: "min-h-11 rounded-2xl px-3 py-2 text-left transition-colors " + (on ? "bg-cream text-ink" : "bg-cream/10 text-cream"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold",
									children: modeMeta[id].label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-xs " + (on ? "text-muted" : "text-cream/70"),
									children: modeMeta[id].short
								})]
							}, id);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 bg-flag" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-ink",
						children: meta.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl bg-pitch px-4 py-4 text-cream",
						"aria-label": "National law",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold tracking-wide uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								className: "size-4",
								"aria-hidden": true
							}), "Every US club"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-2",
							children: national.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-snug",
								children: line
							}, line))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-label": "Match facts",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
							children: facts[mode].map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-line bg-paper px-3 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-wide text-muted uppercase",
										children: fact.k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl leading-none text-ink",
										children: fact.v
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: fact.d
									})
								]
							}, fact.k))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "laws",
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink italic",
							children: "On the card"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "flex flex-col gap-3",
							children: laws[mode].map((law, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-line bg-paper p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-flag tabular-nums",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-lg font-semibold text-ink",
										children: law.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-base font-medium text-ink",
										children: law.shout
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: law.detail
									})
								]
							}, law.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "yell",
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink italic",
							children: "Before you yell"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-3",
							children: yells[mode].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-line bg-paper p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-ink",
									children: row.when
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: row.what
								})]
							}, row.when))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, { items: questions[mode] }, mode),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "note",
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl text-ink italic",
								children: "Club note"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Stays on this phone and prints on the card. Use it for the thing your state does differently."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: note,
								maxLength: 160,
								onChange: (event) => onNote(event.target.value),
								rows: 3,
								placeholder: "e.g. Indiana 5th/6th: lineout is contested, no lifting. Mouthguards required.",
								suppressHydrationWarning: true,
								className: "min-h-24 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted tabular-nums",
								children: [note.length, "/160"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-line bg-paper p-4 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "There is no single USA Rugby Under-12 law book. The 10-a-side card follows Rugby Washington’s 2025 youth table. The 15-a-side card is World Rugby as the US community game plays it, including the sternum tackle line. If your coach disagrees with this page, the coach is right." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-semibold text-pitch underline",
									href: sources.tackle,
									children: "USA Rugby tackle-height law"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-semibold text-pitch underline",
									href: sources.yhs,
									children: "Youth & High School note, 2024–25"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-semibold text-pitch underline",
									href: sources.washington,
									children: "Rugby Washington youth laws, 2025"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-semibold text-pitch underline",
									href: sources.laws,
									children: "World Rugby laws"
								}) })
							]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pocket-print",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PocketCard, {
				mode,
				href,
				note
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "no-print fixed inset-0 z-40 bg-ink/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "no-print fixed inset-x-0 bottom-0 z-50 max-h-[92vh] overflow-y-auto rounded-t-2xl bg-cream p-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-2xl text-ink italic",
							children: "Pocket card"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
							className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-5",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Close"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PocketCard, {
						mode,
						href,
						note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => window.print(),
						className: "mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "size-4",
							"aria-hidden": true
						}), "Print this card"]
					})
				]
			})] })
		})
	] });
}
function Quiz({ items }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const done = step >= items.length;
	const current = items[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "quiz",
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl text-ink italic",
			children: "Check yourself"
		}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-ink px-4 py-5 text-cream",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-4xl italic",
					children: [
						score,
						"/",
						items.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-cream/80",
					children: "Enough to survive the first whistle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setStep(0);
						setPicked(null);
						setScore(0);
					},
					className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-flag px-4 text-sm font-semibold text-ink",
					children: "Try again"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold text-muted tabular-nums",
					children: [
						step + 1,
						" of ",
						items.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg font-semibold text-ink",
					children: current.prompt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: current.choices.map((choice, index) => {
						const show = picked !== null;
						const correct = index === current.answer;
						const mine = index === picked;
						let tone = "border-line bg-cream text-ink";
						if (show && correct) tone = "border-pitch bg-pitch text-cream";
						else if (show && mine) tone = "border-flag bg-flag text-ink";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: show,
							onClick: () => {
								setPicked(index);
								if (index === current.answer) setScore((value) => value + 1);
							},
							className: "min-h-11 rounded-2xl border px-3 py-2 text-left text-sm font-medium " + tone,
							children: choice
						}, choice);
					})
				}),
				picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-start gap-2 text-sm text-ink",
						children: [picked === current.answer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 size-4 shrink-0 text-pitch",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "mt-0.5 size-4 shrink-0 text-flag",
							"aria-hidden": true
						}), current.why]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setStep((value) => value + 1);
							setPicked(null);
						},
						className: "mt-3 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-cream",
						children: "Next"
					})]
				}) : null
			]
		})]
	});
}
function PocketCard({ mode, href, note }) {
	const meta = modeMeta[mode];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-line bg-paper p-4 text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 border-b border-line pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.16em] text-flag uppercase",
						children: "Under 12 · United States"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink italic",
						children: "Sideline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: meta.label
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl leading-none",
						children: meta.score
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Score"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 flex flex-col gap-2",
				children: laws[mode].map((law, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-flag tabular-nums",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: law.shout })]
				}, law.title))
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 border-t border-line pt-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "Club. "
				}), note]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-end justify-between gap-3 border-t border-line pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[14rem] text-xs text-muted",
					children: "Not the law book. Your state youth organization and the referee win. Scan for the long version."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 rounded-lg bg-paper p-1",
					children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QRCodeSVG, {
						value: href,
						size: 96,
						bgColor: "var(--color-paper)",
						fgColor: "var(--color-ink)",
						level: "M",
						"aria-label": "QR code for this Under 12 card"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-24 bg-line",
						"aria-hidden": true
					})
				})]
			})
		]
	});
}
function Home() {
	const { mode } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidelineApp, { mode });
}
//#endregion
export { Home as component };
