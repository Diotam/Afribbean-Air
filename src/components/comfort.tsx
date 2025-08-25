import { useState } from "react";
import {
  Sofa,
  Route,
  PiggyBank,
  ArrowRight,
  Globe,
  MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Comfort() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      // toast({
      //   title: "Email required",
      //   description: "Please enter your email address to join the waitlist.",
      //   variant: "destructive",
      // });
      return;
    }

    if (!email.includes("@")) {
      // toast({
      //   title: "Invalid email",
      //   description: "Please enter a valid email address.",
      //   variant: "destructive",
      // });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // toast({
      //   title: "Welcome to the waitlist!",
      //   description: "We'll notify you when routes become available.",
      // });

      setEmail("");
    } catch (error) {
      // toast({
      //   title: "Something went wrong",
      //   description: "Please try again later.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="experience"
      className="pb-14 lg:pb-16"
      data-testid="comfort-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2
            className="text-3xl lg:text-5xl font-bold text-light-black mb-4"
            data-testid="comfort-title"
          >
            Comfort built for long narrow-body hops
          </h2>
          <p className="text-gray" data-testid="comfort-description">
            Spacious cabins, Caribbean hospitality, and regionally curated meals
            keep the journey fresh and productive.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          data-testid="comfort-features"
        >
          {/* A220/A321 Interiors */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="feature-interiors"
          >
            <CardContent className="p-8">
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-interiors"
                >
                  A220/A321 Interiors
                </h3>
                <p className="text-base text-gray" data-testid="desc-interiors">
                  Save 6-12+ hours vs. detours. Same-day arrivals for business,
                  family, and events.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Simpler Travel */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="feature-simpler-travel"
          >
            <CardContent className="p-8 ">
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-simpler-travel"
                >
                  Simpler Travel
                </h3>
                <p
                  className="text-base text-gray"
                  data-testid="desc-simpler-travel"
                >
                  Many travelers need extra visas to simply change planes in the
                  US/EU, blocking trips entirely.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Lower Total Cost */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="feature-lower-cost"
          >
            <CardContent className="p-8 ">
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-lower-cost"
                >
                  Lower Total Cost
                </h3>
                <p
                  className="text-base text-gray"
                  data-testid="desc-lower-cost"
                >
                  Efficient single-aisle aircraft and shorter trips reduce fares
                  and ancillary costs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div
          className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center"
          data-testid="newsletter-signup"
        >
          <h3
            className="text-2xl font-bold text-light-black mb-4"
            data-testid="signup-title"
          >
            Be first to know
          </h3>
          <p className="text-gray mb-8" data-testid="signup-description">
            Join the insider list for launch routes, fares, and partnerships.
          </p>

          <form
            onSubmit={handleEmailSignup}
            className="flex gap-4 max-w-lg bg-white rounded-full p-2 mx-auto mb-12"
            data-testid="signup-form"
          >
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // className="flex-1 px-4 py-3 rounded-lg border border-none active:ring-0  ring-0 focus:ring-0 focus:ring-none focus:border-transparent shadow-none"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus-visible:ring-0  focus:outline-none focus:ring-0 focus:border-transparent shadow-none"
              // className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-0 focus:border-transparent shadow-none"
              disabled={isSubmitting}
              data-testid="input-email"
            />

            <Button
              disabled={isSubmitting}
              className="bg-primary-color hover:bg-primary-color-hover text-white px-3 py-5 
              rounded-full transition-colors flex items-center cursor-pointer"
              data-testid="button-join-waitlist-header"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}

              <span className="bg-white text-black p-1 rounded-full">
                <MoveRight strokeWidth={1} className="h-1 w-1" />
              </span>
            </Button>
          </form>

          {/* Company Branding */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-22 md:h-22 mr-3">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="font-semibold text-black">Afribbean Air</h1>
              <p className="text-[10px] text-gray">
                Caribbean • Africa • South America
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
