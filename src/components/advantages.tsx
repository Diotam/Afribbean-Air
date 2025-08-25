import {
  Gauge,
  Route,
  PiggyBank,
  Handshake,
  Plane,
  Ship,
  Clock,
  ShieldAlert,
  Wallet,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Advantages() {
  return (
    <section
      id="benefits"
      className="pb-14 lg:pb-16"
      data-testid="advantages-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2
            className="text-3xl lg:text-5xl font-bold text-light-black mb-4"
            data-testid="advantages-title"
          >
            The direct advantage
          </h2>
          <p className="text-gray" data-testid="advantages-description">
            Nonstop regional bridges unlock growth for people and commerce
            across the Atlantic tropics.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-testid="advantages-grid"
        >
          {/* Faster Door-To-Door */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="card-faster-door-to-door"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-[#D0FFF1] rounded-full flex items-center justify-center mb-6">
                <Clock className="text-[#059669] h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-faster-door-to-door"
                >
                  Faster Door-To-Door
                </h3>
                <p
                  className="text-base text-gray"
                  data-testid="desc-faster-door-to-door"
                >
                  Save 6-12+ hours vs. detours. Same-day arrivals for business,
                  family, and events.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Simpler Travel */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="card-simpler-travel"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-[#D0FFF1] rounded-full flex items-center justify-center mb-6">
                <ShieldAlert
                  className="text-[#059669] h-6 w-6"
                  strokeWidth={1.5}
                />
              </div>
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
            data-testid="card-lower-total-cost"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-[#D0FFF1] rounded-full flex items-center justify-center mb-6">
                <Wallet className="text-[#059669] h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-lower-total-cost"
                >
                  Lower Total Cost
                </h3>
                <p
                  className="text-base text-gray"
                  data-testid="desc-lower-total-cost"
                >
                  Efficient single-aisle aircraft and shorter trips reduce fares
                  and ancillary costs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trade & Diaspora Links */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="card-trade-diaspora"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-[#D0FFF1] rounded-full flex items-center justify-center mb-6">
                <Globe className="text-[#059669] h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-trade-diaspora"
                >
                  Trade & Diaspora Links
                </h3>
                <p
                  className="text-base text-gray"
                  data-testid="desc-trade-diaspora"
                >
                  Belly cargo and direct access grow SME trade, culture, and
                  tourism across the regions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right-Sized Fleet */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="card-right-sized-fleet"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-[#D0FFF1] rounded-full flex items-center justify-center mb-6">
                <Plane className="text-[#059669] h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-right-sized-fleet"
                >
                  Right-Sized Fleet
                </h3>
                <p
                  className="text-base text-gray"
                  data-testid="desc-right-sized-fleet"
                >
                  Modern A220/A321LR-XLR range enables smart point-to-point
                  routes with excellent comfort.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seamless Sea-Air Logistics */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="card-sea-air-logistics"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-[#D0FFF1] rounded-full flex items-center justify-center mb-6">
                <Ship className="text-[#059669] h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-sea-air-logistics"
                >
                  Seamless Sea-Air Logistics
                </h3>
                <p
                  className="text-base text-gray"
                  data-testid="desc-sea-air-logistics"
                >
                  Pairing with ports shortens supply chains for perishables and
                  e-commerce.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
