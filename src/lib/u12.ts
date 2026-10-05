export type Mode = "tens" | "fifteens";

export const NOTE_KEY = "sideline-us-u12-note";

export const sources = {
  tackle:
    "https://usa.rugby/news/usa-rugby-to-implement-world-rugby-global-law-variation-on-tackle-height-staring-september-1-2024-2024410",
  yhs: "https://usayhs.rugby/news/law-changes-for-the-2024-25-season",
  washington:
    "https://cdn.prod.website-files.com/6603416214d0f8f22542ab74/67d1c916086e3a50cd7fe59a_2025_Rugby-WA-Policies-and-Procedures%20(2).pdf",
  laws: "https://www.world.rugby/the-game/laws/home",
} as const;

export type Fact = { k: string; v: string; d: string };
export type Law = { title: string; shout: string; detail: string };
export type Row = { when: string; what: string };
export type Question = {
  prompt: string;
  choices: [string, string, string];
  answer: 0 | 1 | 2;
  why: string;
};

export const national = [
  "Open-field tackles are below the base of the sternum. USA Rugby has used that line since September 1, 2024.",
  "Don’t lead with your head. A tackle around the neck is never “just a tackle.”",
  "The pass goes sideways or backwards. A forward pass is an infringement.",
  "Age grade is set on September 1. Your state youth organization can still move a player for safety.",
];

export const facts: Record<Mode, Fact[]> = {
  tens: [
    { k: "A side", v: "10", d: "Match the other team’s numbers" },
    { k: "Ball", v: "4", d: "Size" },
    { k: "Field", v: "70×40", d: "Metres, a shortened full field" },
    { k: "A half", v: "25", d: "Minutes. 70 max in a day" },
    { k: "Scrum", v: "Still", d: "Uncontested. Let the pass out" },
    { k: "Lineout", v: "Still", d: "Uncontested. No maul" },
  ],
  fifteens: [
    { k: "A side", v: "15", d: "Full teams, World Rugby" },
    { k: "Try", v: "5", d: "Ground the ball over the line" },
    { k: "Kick", v: "2", d: "Conversion. Penalty goal is 3" },
    { k: "Scrum", v: "5m", d: "Backs stay off until it’s out" },
    { k: "Lineout", v: "10m", d: "Backs stay back until it’s over" },
    { k: "Tackle", v: "Low", d: "Below the sternum, open field" },
  ],
};

export const laws: Record<Mode, Law[]> = {
  tens: [
    {
      title: "Tackle under the sternum",
      shout: "Arms on, below the base of the sternum. Not the chest.",
      detail:
        "Washington’s 2025 youth card says the tackle must be below the sternum. That matches the USA Rugby community law for open-field tackles. A direct hit on the head or neck is a penalty. So is swinging a player around.",
    },
    {
      title: "Stiff-arm below the shoulder",
      shout: "A hand-off is legal only below the shoulder. Carry it in two hands.",
      detail:
        "The fend stops at the shoulder on this card. Coaches want two hands on the ball so the pass is actually there.",
    },
    {
      title: "Pass it back",
      shout: "Sideways or backwards. Forward pass or knock-on: their scrum.",
      detail:
        "The scrum that follows is uncontested. You are restarting, not shoving.",
    },
    {
      title: "Scrum does not shove",
      shout: "Uncontested. The defending scrum-half does not contest. Let the pass happen.",
      detail:
        "Five forwards a side on the Washington card. The attacking scrum-half must be allowed to get the pass away. This is a restart for the hook and the shape, not a push.",
    },
    {
      title: "Lineout does not compete",
      shout: "Uncontested lineout. No maul off it.",
      detail:
        "The throw goes in and the throwing team is allowed the ball. Mauls are not part of this card. Indiana’s 5th/6th-grade games are different: their lineout is contested, with no lifting. If that is your state, write it in the club note.",
    },
    {
      title: "The ruck is live",
      shout: "Rucks are contested. No squeeze ball. A jackal is allowed.",
      detail:
        "Arrive in control, stay on your feet, and come from your own side. Squeeze ball — falling over the ball and pushing it back between your legs — is not allowed. One or two support players is the picture coaches want, not a pile.",
    },
    {
      title: "What scores",
      shout: "A try, plus a conversion kick.",
      detail:
        "The Washington sheet lists a try and a conversion kick. It does not reprint a points table. Unless your festival posts different numbers, a try is 5 and the kick is 2.",
    },
    {
      title: "Done for the day",
      shout: "Suspected concussion: that player does not come back.",
      detail:
        "Subs are unlimited, and a player who left for an ordinary knock can return. A suspected concussion cannot. If someone stays down, the game stops.",
    },
  ],
  fifteens: [
    {
      title: "The US tackle line",
      shout: "In the open field, tackle below the base of the sternum.",
      detail:
        "USA Rugby’s community law, in force since September 1, 2024. It is written for players running in open play, not the low pick-and-drive next to a ruck or the try line. Leading with the head is dangerous play. Head or neck contact still goes through the Head Contact Process: penalty, yellow, or red.",
    },
    {
      title: "Pass it back",
      shout: "Sideways or backwards only. A forward pass or knock-on is their scrum.",
      detail:
        "If you knock it forward and it hits the ground or another player before you catch it, that is a knock-on. Advantage can be played if the other team is already going somewhere useful and it is safe.",
    },
    {
      title: "The scoreboard",
      shout: "Try 5. Conversion 2. Penalty goal 3. Drop goal 3.",
      detail:
        "Ground the ball on or behind the goal line with downward pressure. A conversion is taken from in line with where the try was scored. Some US youth competitions delete kicks at goal and invent a “converted try zone” instead. That is a local rule, not the national one.",
    },
    {
      title: "Penalty is 10 metres",
      shout: "The other team walks back 10. You can tap and go, or kick.",
      detail:
        "Offside, not releasing, hands in the ruck, foul play, and a high open-field tackle are penalties. A free kick is a different, smaller restart. If the referee calls advantage, keep playing.",
    },
    {
      title: "Scrum, five metres",
      shout: "Eight forwards. Ball in straight. Everyone else 5 metres back.",
      detail:
        "The team that did not infringe throws the ball in. Backs stay 5 metres from the hindmost foot until the ball is out. Crouch, bind, set. No charging in. A collapsed scrum is a whistle, immediately.",
    },
    {
      title: "Lineout, ten metres",
      shout: "Throw it down the tunnel. Backs stay 10 metres off until it is over.",
      detail:
        "Lifting is legal in the full game. The lineout ends when the ball or the catcher leaves it. A maul can start from a catch. Quick throw-ins are legal if nobody else has touched the ball.",
    },
    {
      title: "Tackle, then a ruck",
      shout: "Release the ball. Get up. Join from behind. No hands in the ruck.",
      detail:
        "A tackle is a hold that brings the carrier to ground. They place or pass the ball immediately. The tackler lets go. Once players from both teams are on their feet over the ball, it is a ruck: enter through your own gate, stay on your feet, and don’t dive on it.",
    },
    {
      title: "Kick-off",
      shout: "Drop kick from halfway. It must travel 10 metres.",
      detail:
        "The kicker’s team stays behind the ball. Receivers stay behind their 10-metre line. A short kick that an opponent plays is play on. Otherwise the receivers choose a retake or a scrum. After a score, the scoring team kicks off, unless your competition flips it.",
    },
  ],
};

export const yells: Record<Mode, Row[]> = {
  tens: [
    {
      when: "“Push!”",
      what: "Not in this scrum. It is uncontested, and the pass has to be allowed out.",
    },
    {
      when: "“Maul!”",
      what: "Washington’s U12 card doesn’t play mauls. If they form one, expect the whistle.",
    },
    {
      when: "“Lift him!”",
      what: "Not on this lineout. Uncontested, no competition. Lifting is a U14 conversation.",
    },
    {
      when: "“Hands!”",
      what: "A jackal is allowed. Squeeze ball is not. Those are different things.",
    },
    {
      when: "“High!” at the shoulders",
      what: "The line is lower. Base of the sternum. Chest is high.",
    },
  ],
  fifteens: [
    {
      when: "“Lineout!” at every touch",
      what: "Yes in this game — unlike a lot of younger formats. Backs 10 metres.",
    },
    {
      when: "“That’s below the shoulders”",
      what: "Since 2024 the open-field line is the base of the sternum, not the shoulders.",
    },
    {
      when: "“Ten metres!” at a scrum",
      what: "Scrum offside is 5 metres. Ten is the penalty and the lineout.",
    },
    {
      when: "“Knock-on!” when it went back",
      what: "Backwards onto the ground is play on. Anyone can pick it up.",
    },
    {
      when: "“They’re fine, play on”",
      what: "If they are holding their head, or slow to get up, the day is over for that player.",
    },
  ],
};

export const questions: Record<Mode, Question[]> = {
  tens: [
    {
      prompt: "How many players does the Washington U12 card put on the field?",
      choices: ["7", "10", "15"],
      answer: 1,
      why: "10 a side, with 5 forwards. If one team is short, the numbers are matched.",
    },
    {
      prompt: "The scrum is about to start. What is legal?",
      choices: [
        "Both packs shove",
        "Uncontested, and the pass must be allowed",
        "The defending scrum-half may grab the passer",
      ],
      answer: 1,
      why: "Uncontested. The defending scrum-half does not contest the attacking scrum-half.",
    },
    {
      prompt: "Ball in touch. What happens?",
      choices: ["A contested lineout with lifters", "An uncontested lineout", "A scrum on the 15"],
      answer: 1,
      why: "Uncontested lineout, and no maul. Indiana 5th/6th is the odd one out: contested, no lift.",
    },
    {
      prompt: "Where is a legal tackle?",
      choices: ["Below the shoulders", "Below the base of the sternum", "Anywhere with a wrap"],
      answer: 1,
      why: "Sternum and below. Head or neck contact is a penalty on its own.",
    },
    {
      prompt: "A player stands up dizzy after a tackle.",
      choices: [
        "One play off, then back on",
        "They are done for the day",
        "They can return at half if they want to",
      ],
      answer: 1,
      why: "Suspected concussion: no return that day. Ordinary substitutions are otherwise unlimited.",
    },
    {
      prompt: "What is on the score sheet?",
      choices: ["Tries only", "A try and a conversion kick", "Tries, penalty goals, and drop goals"],
      answer: 1,
      why: "Washington lists a try and a conversion kick. Drop goals are not the youth card.",
    },
  ],
  fifteens: [
    {
      prompt: "Open-field tackle. Where is the legal height in the US?",
      choices: ["Shoulders", "Base of the sternum", "Waist only"],
      answer: 1,
      why: "USA Rugby community law since September 1, 2024. Head contact is a separate, stricter call.",
    },
    {
      prompt: "A try is worth…",
      choices: ["1", "3", "5"],
      answer: 2,
      why: "5 for the try, 2 for the conversion, 3 for a penalty goal or drop goal.",
    },
    {
      prompt: "Where do the backs stand at a scrum?",
      choices: ["10 metres", "5 metres from the hindmost foot", "On the hindmost foot"],
      answer: 1,
      why: "Five metres until the ball is out. Ten metres is the lineout and the penalty.",
    },
    {
      prompt: "The ball is thrown forward and hits the grass.",
      choices: ["Play on", "Scrum to the other team", "Penalty, 10 metres"],
      answer: 1,
      why: "That is a knock-on or a forward pass. Scrum to the other side, unless advantage is already alive.",
    },
    {
      prompt: "Kick-off must travel…",
      choices: ["5 metres", "7 metres", "10 metres"],
      answer: 2,
      why: "A drop kick from halfway, 10 metres, receivers behind their 10-metre line.",
    },
    {
      prompt: "Once a ruck has formed, hands on the ball are…",
      choices: ["How you jackal", "Illegal. Stay on your feet and enter through the gate", "Fine if you arrived first"],
      answer: 1,
      why: "Hands in the ruck are a penalty. Arrive from behind, on your feet.",
    },
  ],
};

export const modeMeta: Record<
  Mode,
  { label: string; short: string; blurb: string; score: string }
> = {
  tens: {
    label: "10-a-side",
    short: "Youth 10s",
    blurb:
      "The grade-school card used by Rugby Washington in 2025: 10 a side, size 4, uncontested set pieces, a real tackle.",
    score: "Try + conversion",
  },
  fifteens: {
    label: "15-a-side",
    short: "Full laws",
    blurb:
      "World Rugby, the way USA Rugby plays the community game: full scoring, scrums and lineouts, with the sternum tackle line.",
    score: "5 · 2 · 3",
  },
};
