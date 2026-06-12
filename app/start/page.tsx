"use client";

import { Button } from "@/components/ui/button";
import { SelectGameType, SelectTime } from "../_components/select-game";

export default function Page() {
  return (
    <main className="flex flex-col max-w-2xl w-full mx-auto">
      <h1 className="text-4xl mt-8 mb-4 text-center">Select gamemode</h1>
      <p className="text-sm text-foreground/50 mb-8 text-center">
        people online: 0
      </p>
      <section className="mb-4">
        <h2>Time</h2>
        <SelectTime />
        <p>How long you want the match to go on</p>
      </section>
      <section className="mb-4">
        <h2>game</h2>
        <SelectGameType />
        <p>The type of match</p>
      </section>
      <div className="">
        <Button>Start match!</Button>
      </div>
    </main>
  );
}
