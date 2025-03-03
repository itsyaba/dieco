import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";

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
  const [finalAmount, setFinalAmount] = useState<number>(10);

  const clientId =
    import.meta.env.VITE_PAYPAL_CLIENT_ID ||
    process.env.REACT_APP_PAYPAL_CLIENT_ID ||
    "";

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    if (value !== "custom") {
      const tier = TIERS.find((tier) => tier.name === value);
      setFinalAmount(tier ? tier.amount : 0);
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value) || 0;
    setCustomAmount(e.target.value);
    setSelectedOption("custom");
    setFinalAmount(amount);
  };

  const handleSubmit = () => {
    if (finalAmount <= 0) {
      toast.error("Please select a sponsorship tier or enter a valid amount.");
      return;
    }

    toast.success(
      `Donation confirmed: $${finalAmount.toLocaleString()} for ${
        selectedProject === "water"
          ? "Clean Drinking Water"
          : "Dikome Balue Hospital Rebuild"
      } project.`
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
        <PayPalScriptProvider options={{ clientId }}>
          {/* <Button
          className="w-full bg-greenish py-4 hover:bg-greenish/70 text-white text-xl"
          size="lg"
        >
          Confirm Donation
        </Button> */}

          <PayPalButtons
            onClick={handleSubmit}
            style={{
              layout: "horizontal",
              color: "gold",
              shape: "pill",
              label: "paypal",
              tagline: true,
              height: 55,
            }}
            createOrder={(_data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: finalAmount.toFixed(2),
                    },
                  },
                ],
              });
            }}
            onApprove={async (_data, actions) => {
              if (!actions.order) {
                toast.error("Order capture failed. Please try again.");
                return;
              }
              return actions.order.capture().then((details) => {
                const payerName =
                  details.purchase_units?.[0]?.shipping?.name?.full_name ||
                  "Donor";
                toast.success(
                  `Thank you, ${payerName}! You donated $${finalAmount.toFixed(
                    2
                  )}`
                );
              });
            }}
          />
        </PayPalScriptProvider>
    </div>
  );
}
