import { Match } from "@/app/_components/match";
import { Suspense } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ matchId: string }>;
}) {
  return (
    <Suspense>
      <Match params={params} />
    </Suspense>
  );
}
