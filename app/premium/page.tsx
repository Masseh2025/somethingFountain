import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const features = [
  "Unlimited saved stories",
  "Premium themes",
  "AI opponent matches",
  "Private rematches",
  "Longer writing rounds",
];

export default function Pricing() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Upgrade your writing
        </h2>
        <p className="mt-4 text-muted-foreground">
          One simple plan. Unlock the full experience.
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Premium</CardTitle>
          <CardDescription>
            For users who want more writing features.
          </CardDescription>

          <div className="mt-6">
            <span className="text-5xl font-bold">$7</span>
            <span className="text-muted-foreground"> / month</span>
          </div>
        </CardHeader>

        <CardContent>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/premium">Upgrade</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
