import { Clock, IdCard, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Problems() {
  return (
    <section
      id="problem"
      className="pb-14 lg:pb-16"
      data-testid="problems-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2
            className="text-3xl lg:text-5xl font-bold text-light-black mb-4"
            data-testid="problems-title"
          >
            The problem with current travel
          </h2>
          <p className="text-gray" data-testid="problems-description">
            Caribbean-Africa-South America journeys often require 2-3
            connections through the US or Europe, creating cost, visa, and time
            barriers.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-testid="problems-grid"
        >
          {/* Lost Time */}
          <Card
            className="bg-white shadow-sm border border-gray-200 p-0 hover:-translate-y-1 transition-all duration-300"
            data-testid="card-lost-time"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-bg-danger rounded-full flex items-center justify-center mb-6">
                <Clock className="text-color-danger h-6 w-6" />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-lost-time"
                >
                  Lost Time
                </h3>
                <p className="text-base text-gray" data-testid="desc-lost-time">
                  Up to 10-24 hours added from multi-stop itineraries and
                  overnight layovers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="card-lost-time"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-bg-danger rounded-full flex items-center justify-center mb-6">
                <IdCard className="text-color-danger h-6 w-6" />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-visa-hurdles"
                >
                  Transit Visa Hurdles
                </h3>
                <p className="text-base text-gray" data-testid="desc-lost-time">
                  Many travelers need extra visas to simply change planes in the
                  US/EU, blocking trips entirely.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-white shadow-sm border border-gray-200 p-0  hover:-translate-y-1 transition-all duration-300"
            data-testid="card-lost-time"
          >
            <CardContent className="p-8 flex items-start gap-3.5">
              <div className="min-w-9 min-h-9 bg-bg-danger rounded-full flex items-center justify-center mb-6">
                <DollarSign className="text-color-danger h-6 w-6" />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-light-black mb-3"
                  data-testid="title-higher-cost"
                >
                  Higher Total Cost
                </h3>
                <p className="text-base text-gray" data-testid="desc-lost-time">
                  Detours mean extra taxes, hotels, and fees—raising fares and
                  squeezing trade & tourism.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
