import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { QRCodeSVG } from "qrcode.react";
import { Check, Printer, QrCode, Shield, X } from "lucide-react";
import {
  NOTE_KEY,
  facts,
  laws,
  modeMeta,
  national,
  questions,
  sources,
  yells,
  type Mode,
  type Question,
} from "@/lib/u12";

export function SidelineApp({ mode }: { mode: Mode }) {
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [href, setHref] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(NOTE_KEY);
    if (saved) setNote(saved.slice(0, 160));
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("mode", mode);
    url.hash = "";
    setHref(url.toString());
  }, [mode]);

  function setMode(next: Mode) {
    void navigate({ to: "/", search: { mode: next } });
  }

  function onNote(value: string) {
    const next = value.slice(0, 160);
    setNote(next);
    localStorage.setItem(NOTE_KEY, next);
  }

  const meta = modeMeta[mode];

  return (
    <>
      <div className="no-print min-h-screen">
        <header className="touchline bg-ink text-cream">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-flag uppercase">
                  United States · Under 12
                </p>
                <h1 className="mt-1 font-display text-5xl leading-none font-medium text-cream italic">
                  Sideline
                </h1>
                <p className="mt-3 max-w-md text-sm text-cream/80">
                  A touchline card for American age-grade rugby. The national tackle law is the
                  same everywhere. The size of the game is not.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-flag px-4 text-sm font-semibold text-ink"
              >
                <QrCode className="size-4" aria-hidden />
                Card
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2" role="tablist" aria-label="Which game">
              {(Object.keys(modeMeta) as Mode[]).map((id) => {
                const on = id === mode;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setMode(id)}
                    className={
                      "min-h-11 rounded-2xl px-3 py-2 text-left transition-colors " +
                      (on ? "bg-cream text-ink" : "bg-cream/10 text-cream")
                    }
                  >
                    <span className="block text-sm font-semibold">{modeMeta[id].label}</span>
                    <span className={"mt-0.5 block text-xs " + (on ? "text-muted" : "text-cream/70")}>
                      {modeMeta[id].short}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="h-1.5 bg-flag" />
        </header>

        <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 sm:px-6">
          <p className="text-base text-ink">{meta.blurb}</p>

          <section className="rounded-2xl bg-pitch px-4 py-4 text-cream" aria-label="National law">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
              <Shield className="size-4" aria-hidden />
              Every US club
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {national.map((line) => (
                <li key={line} className="text-sm leading-snug">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Match facts">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {facts[mode].map((fact) => (
                <div key={fact.k} className="rounded-2xl border border-line bg-paper px-3 py-3">
                  <p className="text-xs font-semibold tracking-wide text-muted uppercase">{fact.k}</p>
                  <p className="font-display text-3xl leading-none text-ink">{fact.v}</p>
                  <p className="mt-1 text-xs text-muted">{fact.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="laws" className="flex flex-col gap-3">
            <h2 className="font-display text-3xl text-ink italic">On the card</h2>
            <ol className="flex flex-col gap-3">
              {laws[mode].map((law, i) => (
                <li key={law.title} className="rounded-2xl border border-line bg-paper p-4">
                  <p className="text-xs font-semibold text-flag tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{law.title}</h3>
                  <p className="mt-1 text-base font-medium text-ink">{law.shout}</p>
                  <p className="mt-2 text-sm text-muted">{law.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="yell" className="flex flex-col gap-3">
            <h2 className="font-display text-3xl text-ink italic">Before you yell</h2>
            <ul className="flex flex-col gap-3">
              {yells[mode].map((row) => (
                <li key={row.when} className="rounded-2xl border border-line bg-paper p-4">
                  <p className="font-semibold text-ink">{row.when}</p>
                  <p className="mt-1 text-sm text-muted">{row.what}</p>
                </li>
              ))}
            </ul>
          </section>

          <Quiz key={mode} items={questions[mode]} />

          <section id="note" className="flex flex-col gap-3">
            <h2 className="font-display text-3xl text-ink italic">Club note</h2>
            <p className="text-sm text-muted">
              Stays on this phone and prints on the card. Use it for the thing your state does
              differently.
            </p>
            <textarea
              value={note}
              maxLength={160}
              onChange={(event) => onNote(event.target.value)}
              rows={3}
              placeholder="e.g. Indiana 5th/6th: lineout is contested, no lifting. Mouthguards required."
              suppressHydrationWarning
              className="min-h-24 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink"
            />
            <p className="text-xs text-muted tabular-nums">{note.length}/160</p>
          </section>

          <section className="rounded-2xl border border-line bg-paper p-4 text-sm text-muted">
            <p>
              There is no single USA Rugby Under-12 law book. The 10-a-side card follows Rugby
              Washington’s 2025 youth table. The 15-a-side card is World Rugby as the US community
              game plays it, including the sternum tackle line. If your coach disagrees with this
              page, the coach is right.
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a className="font-semibold text-pitch underline" href={sources.tackle}>
                  USA Rugby tackle-height law
                </a>
              </li>
              <li>
                <a className="font-semibold text-pitch underline" href={sources.yhs}>
                  Youth & High School note, 2024–25
                </a>
              </li>
              <li>
                <a className="font-semibold text-pitch underline" href={sources.washington}>
                  Rugby Washington youth laws, 2025
                </a>
              </li>
              <li>
                <a className="font-semibold text-pitch underline" href={sources.laws}>
                  World Rugby laws
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <div className="pocket-print">
        <PocketCard mode={mode} href={href} note={note} />
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="no-print fixed inset-0 z-40 bg-ink/70" />
          <Dialog.Content className="no-print fixed inset-x-0 bottom-0 z-50 max-h-[92vh] overflow-y-auto rounded-t-2xl bg-cream p-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <Dialog.Title className="font-display text-2xl text-ink italic">Pocket card</Dialog.Title>
              <Dialog.Close className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink">
                <X className="size-5" aria-hidden />
                <span className="sr-only">Close</span>
              </Dialog.Close>
            </div>
            <PocketCard mode={mode} href={href} note={note} />
            <button
              type="button"
              onClick={() => window.print()}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-cream"
            >
              <Printer className="size-4" aria-hidden />
              Print this card
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function Quiz({ items }: { items: Question[] }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = step >= items.length;
  const current = items[step];

  return (
    <section id="quiz" className="flex flex-col gap-3">
      <h2 className="font-display text-3xl text-ink italic">Check yourself</h2>
      {done ? (
        <div className="rounded-2xl bg-ink px-4 py-5 text-cream">
          <p className="font-display text-4xl italic">{score}/{items.length}</p>
          <p className="mt-2 text-sm text-cream/80">Enough to survive the first whistle.</p>
          <button
            type="button"
            onClick={() => {
              setStep(0);
              setPicked(null);
              setScore(0);
            }}
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-flag px-4 text-sm font-semibold text-ink"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-line bg-paper p-4">
          <p className="text-xs font-semibold text-muted tabular-nums">
            {step + 1} of {items.length}
          </p>
          <p className="mt-2 text-lg font-semibold text-ink">{current.prompt}</p>
          <div className="mt-3 flex flex-col gap-2">
            {current.choices.map((choice, index) => {
              const show = picked !== null;
              const correct = index === current.answer;
              const mine = index === picked;
              let tone = "border-line bg-cream text-ink";
              if (show && correct) tone = "border-pitch bg-pitch text-cream";
              else if (show && mine) tone = "border-flag bg-flag text-ink";
              return (
                <button
                  key={choice}
                  type="button"
                  disabled={show}
                  onClick={() => {
                    setPicked(index);
                    if (index === current.answer) setScore((value) => value + 1);
                  }}
                  className={"min-h-11 rounded-2xl border px-3 py-2 text-left text-sm font-medium " + tone}
                >
                  {choice}
                </button>
              );
            })}
          </div>
          {picked !== null ? (
            <div className="mt-3">
              <p className="flex items-start gap-2 text-sm text-ink">
                {picked === current.answer ? (
                  <Check className="mt-0.5 size-4 shrink-0 text-pitch" aria-hidden />
                ) : (
                  <X className="mt-0.5 size-4 shrink-0 text-flag" aria-hidden />
                )}
                {current.why}
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep((value) => value + 1);
                  setPicked(null);
                }}
                className="mt-3 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-cream"
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}

function PocketCard({
  mode,
  href,
  note,
}: {
  mode: Mode;
  href: string | null;
  note: string;
}) {
  const meta = modeMeta[mode];
  return (
    <article className="rounded-2xl border border-line bg-paper p-4 text-ink">
      <div className="flex items-start justify-between gap-3 border-b border-line pb-3">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-flag uppercase">
            Under 12 · United States
          </p>
          <h2 className="font-display text-3xl text-ink italic">Sideline</h2>
          <p className="text-sm font-semibold">{meta.label}</p>
        </div>
        <div className="text-right">
          <p className="font-display text-xl leading-none">{meta.score}</p>
          <p className="mt-1 text-xs text-muted">Score</p>
        </div>
      </div>
      <ol className="mt-3 flex flex-col gap-2">
        {laws[mode].map((law, index) => (
          <li key={law.title} className="flex gap-2 text-sm">
            <span className="font-semibold text-flag tabular-nums">{index + 1}</span>
            <span>{law.shout}</span>
          </li>
        ))}
      </ol>
      {note ? (
        <p className="mt-3 border-t border-line pt-3 text-sm">
          <span className="font-semibold">Club. </span>
          {note}
        </p>
      ) : null}
      <div className="mt-3 flex items-end justify-between gap-3 border-t border-line pt-3">
        <p className="max-w-[14rem] text-xs text-muted">
          Not the law book. Your state youth organization and the referee win. Scan for the long
          version.
        </p>
        <div className="shrink-0 rounded-lg bg-paper p-1">
          {href ? (
            <QRCodeSVG
              value={href}
              size={96}
              bgColor="var(--color-paper)"
              fgColor="var(--color-ink)"
              level="M"
              aria-label="QR code for this Under 12 card"
            />
          ) : (
            <div className="size-24 bg-line" aria-hidden />
          )}
        </div>
      </div>
    </article>
  );
}
