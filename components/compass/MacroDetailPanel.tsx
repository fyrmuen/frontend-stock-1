"use client";

import { useState } from "react";

export function MacroDetailPanel() {
  const [open, setOpen] = useState(false);

  return (
    <section className="rounded-grove-2 border border-grove-border bg-grove-bg2 p-4">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between text-left">
        <h3 className="font-serif text-[18px]">Macro Detail Panel</h3>
        <span className="text-grove-primary">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="mt-3 space-y-2 text-[12px] leading-[1.7] text-grove-muted2 animate-fadeUp">
          <p>Growth dan likuiditas masih mendukung selective risk-on rotation pada sektor domestik defensif.</p>
          <p>Kombinasi inflasi stabil dan kebijakan terukur menjaga downside pasar tetap terkendali.</p>
        </div>
      )}
    </section>
  );
}
