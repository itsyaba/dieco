import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const TIERS = [
  {
    name: "Platinum",
    amount: 50000,
    benefits: [
      "Maximum visibility",
      "VIP access to events",
      "Recognition in all materials",
    ],
  },
  {
    name: "Gold",
    amount: 45000,
    benefits: [
      "High visibility",
      "Priority access to events",
      "Recognition in major materials",
    ],
  },
  {
    name: "Silver",
    amount: 35000,
    benefits: [
      "Enhanced visibility",
      "Event access",
      "Recognition in select materials",
    ],
  },
  {
    name: "Bronze",
    amount: 25000,
    benefits: ["Standard visibility", "Event invitations", "Basic recognition"],
  },
];

interface SponsorshipTiersProps {
  selectedProject: string;
}

export function SponsorshipTiers({ selectedProject }: SponsorshipTiersProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    if (value !== "custom") {
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedOption("custom");
  };

  const handleSubmit = () => {
    let totalAmount = 0;
    let message = "";

    if (selectedOption === "custom") {
      totalAmount = Number.parseInt(customAmount) || 0;
      message = `Custom amount: $${totalAmount.toLocaleString()}`;
    } else {
      const selectedTier = TIERS.find((tier) => tier.name === selectedOption);
      if (selectedTier) {
        totalAmount = selectedTier.amount;
        message = `Selected tier: ${
          selectedTier.name
        } ($${totalAmount.toLocaleString()})`;
      }
    }

    alert(
      `${message}\nTotal donation: $${totalAmount.toLocaleString()} for ${
        selectedProject === "water"
          ? "Clean Drinking Water"
          : "Dikome Balue Hospital Rebuild"
      } project`
    );
  };

  return (
    <div className="space-y-6">
      <RadioGroup value={selectedOption} onValueChange={handleOptionChange}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <Card key={tier.name} className="flex flex-col bg-darkish">
              <CardHeader>
                <CardTitle>${tier.amount.toLocaleString()}</CardTitle>
                <CardDescription className="text-xl font-bold">
                  {tier.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={tier.name} id={`radio-${tier.name}`} />
                  <Label htmlFor={`radio-${tier.name}`}>
                    Select {tier.name}
                  </Label>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="bg-darkish">
          <CardHeader>
            <CardTitle>Custom Amount</CardTitle>
            <CardDescription>Enter a custom donation amount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="radio-custom" />
              <Label htmlFor="radio-custom" className="text-2xl font-bold">
                $
              </Label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="text-2xl"
              />
            </div>
          </CardContent>
        </Card>
      </RadioGroup>

      <Button onClick={handleSubmit} className="w-full bg-greenish py-4 hover:bg-greenish/70 text-white
      text-xl" size="lg">
        Confirm Donation
      </Button>
    </div>
  );
}
