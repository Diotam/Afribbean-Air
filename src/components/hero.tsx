import {
  Clock,
  IdCard,
  DollarSign,
  Truck,
  MapPin,
  Plane,
  ShieldAlert,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="bg-white pb-14 lg:pb-16 pt-8 lg:pt-10"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-left mb-8">
          <Badge
            variant="outline"
            className="inline-flex items-center px-8 py-2.5 rounded-full text-base font-medium text-primary-color border border-primary-color"
            data-testid="badge-afribbean-airlines"
          >
            <span className="inline-flex items-center gap-2">
              <Plane className="size-5" /> Nonstop is the new bridge
            </span>
          </Badge>
        </div>

        {/* Headline */}
        <div className="text-left mb-8">
          <h1
            className="text-4xl lg:text-7xl font-bold text-light-black mb-6"
            data-testid="headline"
          >
            Directly connecting the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              Caribbean
            </span>
            ,
            <br />
            <span className="green-blue-grad">Africa</span> and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              South America
            </span>
          </h1>
          <p
            className="text-lg text-gray leading-relaxed"
            data-testid="description"
          >
            Today, travelers zig-zag through distant hubs, adding visas,
            layovers and days of lost time. Afribbean Air brings the regions
            together with efficient, sustainable, direct routes that turn long
            detours into same-day journeys.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-white font-semibold shadow hover:bg-emerald-700 transition-colors duration-300 cursor-pointer"
            >
              Get Early Access <ArrowRight className="size-4" />
            </a>
            <a
              href="#network"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-emerald-700 font-semibold ring-1 ring-emerald-200 hover:bg-emerald-50 transition-colors duration-300 cursor-pointer"
            >
              See Route Vision
            </a>
          </div>
        </div>

        {/* Feature Badges */}
        <div
          className="flex flex-wrap justify-start gap-4 mb-12"
          data-testid="feature-badges"
        >
          <div
            className="w-full sm:w-fit flex justify-center items-center px-6 py-2.5 rounded-full border border-gray hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            data-testid="badge-time-saved"
          >
            <Clock className="mr-2 h-6 w-6 text-gray" strokeWidth={1.5} />
            <span className=" text-gray">Up to 12h saved</span>
          </div>
          <div
            className="w-full sm:w-fit flex justify-center items-center px-6 py-2.5 rounded-full border border-gray hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            data-testid="badge-fewer-visas"
          >
            <ShieldAlert
              className=" mr-2 h-6 w-6 text-gray"
              strokeWidth={1.5}
            />
            <span className=" text-gray">Fewer visas</span>
          </div>
          <div
            className="w-full sm:w-fit flex justify-center items-center px-6 py-2.5 rounded-full border border-gray hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            data-testid="badge-lower-cost"
          >
            <Wallet className=" mr-2 h-6 w-6 text-gray" strokeWidth={1.5} />
            <span className=" text-gray">Lower total cost</span>
          </div>
          <div
            className="w-full sm:w-fit flex justify-center items-center px-6 py-2.5 rounded-full border border-gray hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            data-testid="badge-cargo-capacity"
          >
            <Truck className=" mr-2 h-6 w-6 text-gray" strokeWidth={1.5} />
            <span className="text-gray">Cargo belly capacity</span>
          </div>
        </div>

        {/* Map Illustration */}
        <div
          className="bg-primary-color-200 rounded-xl overflow-hidden h-[400px] md:h-[500px]"
          data-testid="map-illustration"
        >
          <div className="h-full w-full flex justify-center items-center">
            <Image
              src="/images/hero.svg"
              alt="hero"
              width={100}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
