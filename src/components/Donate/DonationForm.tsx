import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export function DonationForm() {
  const [amount, setAmount] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  const handlePresetClick = (value: number) => {
    setAmount(value.toString());
    setSelectedPreset(value);
  };

  const handleCustomAmount = (value: string) => {
    setAmount(value);
    setSelectedPreset(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Choose Amount</CardTitle>
        <CardDescription>
          How much would you like to donate? As a contributor to our community
          projects, we make sure your donation goes directly to supporting our
          cause. Thank you for your generosity!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <span className="text-gray-500">$</span>
          </div>
          <Input
            type="number"
            value={amount}
            onChange={(e) => handleCustomAmount(e.target.value)}
            className="pl-8"
            placeholder="Enter amount"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {PRESET_AMOUNTS.map((presetAmount) => (
            <Button
              key={presetAmount}
              variant={selectedPreset === presetAmount ? "default" : "outline"}
              onClick={() => handlePresetClick(presetAmount)}
              className="w-full"
            >
              ${presetAmount}
            </Button>
          ))}
          <Button
            variant={selectedPreset === null && amount ? "default" : "outline"}
            onClick={() => setSelectedPreset(null)}
            className="w-full"
          >
            Custom
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full" size="lg">
          Continue
        </Button>
        <div className="flex items-center justify-center text-sm text-muted-foreground gap-2">
          <Lock className="h-4 w-4" />
          Secure Donation
        </div>
      </CardFooter>
    </Card>
  );
}
