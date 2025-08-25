import { Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Network() {
  const routes = [
    {
      from: "Barbados (BGI)",
      to: "Dakar, Senegal (DSS)",
      duration: "6h 30m",
      purpose: "West Africa gateway",
    },
    {
      from: "Georgetown, Guyana (GEO)",
      to: "Freetown, Sierra Leone (FNA)",
      duration: "6h 50m",
      purpose: "Mining & diaspora",
    },
    {
      from: "Port Of Spain, Trinidad (POS)",
      to: "Accra, Ghana (ACC)",
      duration: "7h 20m",
      purpose: "Energy & culture",
    },
    {
      from: "Paramaribo, Suriname (PBM)",
      to: "Praia, Cabo Verde (RAI)",
      duration: "5h 50m",
      purpose: "Atlantic hub",
    },
  ];

  return (
    <section
      id="network"
      className="pb-14 lg:pb-16"
      data-testid="network-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2
            className="text-3xl lg:text-5xl font-bold text-light-black mb-4"
            data-testid="network-title"
          >
            Pilot network vision
          </h2>
          <p className="text-gray" data-testid="network-description">
            Illustrative nonstop links to collapse travel times and open new
            markets. Final network subject to regulatory approvals and demand.
          </p>
        </div>

        {/* Airplane wing image */}
        <div
          className="mb-8 rounded-xl overflow-hidden"
          data-testid="airplane-wing-image"
        >
          <Image
            src="/images/network.png"
            alt="Airplane wing view above clouds during flight"
            width={500}
            height={500}
            className="w-full h-[400px] md:h-[550px] object-cover"
          />
        </div>

        {/* Route Cards */}
        <div className="grid gap-4" data-testid="route-cards">
          {routes.map((route, index) => (
            <Card
              key={index}
              className="bg-white shadow-sm border border-gray-200 p-0 transition-all duration-300 transform hover:scale-[102%]"
              data-testid={`route-card-${index}`}
            >
              <CardContent className="p-6 flex items-start gap-3.5">
                <div className="min-w-9 min-h-9 bg-[#D0FFF1] rounded-full flex items-center justify-center">
                  <MapPin
                    className="text-[#059669] h-5 w-5"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span
                      className="font-semibold text-light-black"
                      data-testid={`route-from-${index}`}
                    >
                      {route.from}
                    </span>
                    <span className="text-gray-400 mx-2">→</span>
                    <span
                      className="font-semibold text-light-black"
                      data-testid={`route-to-${index}`}
                    >
                      {route.to}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-sm text-gray"
                    data-testid={`route-details-${index}`}
                  >
                    <Clock className="mr-2 h-4 w-4 text-primary-color" />
                    <span
                      className="mr-4"
                      data-testid={`route-duration-${index}`}
                    >
                      {route.duration}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span
                      className="ml-4"
                      data-testid={`route-purpose-${index}`}
                    >
                      {route.purpose}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
