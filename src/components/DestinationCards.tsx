"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ImageOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Attraction = { name: string; blurb: string };

type Destination = {
  region: "Caribbean" | "Africa" | "South America";
  country: string;
  blurb: string;
  attractions: Attraction[];
};

const regions = ["All", "Caribbean", "Africa", "South America"] as const;

const DESTINATIONS: Destination[] = [
  {
    region: "Caribbean",
    country: "Jamaica",
    blurb:
      "Reggae rhythms, lush mountains, and waterfalls. Jamaica blends adventure with culture and laid‑back beach life.",
    attractions: [
      {
        name: "Dunn’s River Falls",
        blurb: "Terraced cascades you can climb near Ocho Rios.",
      },
      {
        name: "Blue Mountains",
        blurb: "Cool misty trails and world‑famous coffee plantations.",
      },
      {
        name: "Seven Mile Beach",
        blurb: "Iconic white sands and sunset bars in Negril.",
      },
      {
        name: "Bob Marley Museum",
        blurb: "Reggae legend’s former home and studio in Kingston.",
      },
    ],
  },
  {
    region: "Caribbean",
    country: "Dominican Republic",
    blurb:
      "From Punta Cana’s resort beaches to Santo Domingo’s colonial core, the DR is a sun‑soaked crowd‑pleaser.",
    attractions: [
      {
        name: "Punta Cana",
        blurb: "Turquoise water and palm‑lined sands made for relaxing.",
      },
      {
        name: "Zona Colonial",
        blurb: "UNESCO‑listed Old Town with 16th‑century treasures.",
      },
      {
        name: "Saona Island",
        blurb: "Day‑trip paradise with shallow sandbars and starfish.",
      },
      {
        name: "27 Waterfalls",
        blurb: "Canyoning and natural slides at Damajagua.",
      },
    ],
  },
  {
    region: "Caribbean",
    country: "Barbados",
    blurb:
      "Boutique beaches, limestone caves, and a vibrant foodie scene — Barbados is refined island living.",
    attractions: [
      {
        name: "Harrison’s Cave",
        blurb: "Tram through glittering stalactites and pools.",
      },
      {
        name: "Bathsheba",
        blurb: "Surf‑pounded rock formations on the wild east coast.",
      },
      {
        name: "Carlisle Bay",
        blurb: "Calm waters, shipwreck snorkels, and sea turtles.",
      },
      {
        name: "Oistins",
        blurb: "Friday night fish fry with music and grills.",
      },
    ],
  },
  {
    region: "Caribbean",
    country: "Bahamas",
    blurb:
      "A constellation of cays where the water looks unreal — perfect for island‑hopping and soft‑sand escapes.",
    attractions: [
      {
        name: "Exuma Cays & Pig Beach",
        blurb: "Swim with famous pigs in electric‑blue seas.",
      },
      {
        name: "Paradise Island",
        blurb: "Waterparks, aquariums, and nightlife near Nassau.",
      },
      {
        name: "Dean’s Blue Hole",
        blurb: "One of the world’s deepest blue holes to free‑dive.",
      },
      {
        name: "Nassau Straw Market",
        blurb: "Colorful crafts and souvenirs downtown.",
      },
    ],
  },
  {
    region: "Caribbean",
    country: "Trinidad & Tobago",
    blurb:
      "Carnival culture, rainforest birding, and postcard‑perfect Tobago beaches — two islands, two vibes.",
    attractions: [
      {
        name: "Maracas Beach",
        blurb: "Fry‑bake, sharks, and swells on Trinidad’s north coast.",
      },
      {
        name: "Pigeon Point & Nylon Pool",
        blurb: "Shallow sandbar and piers framed by palms.",
      },
      {
        name: "Asa Wright Centre",
        blurb: "Renowned birding lodge in the Arima Valley.",
      },
      { name: "Buccoo Reef", blurb: "Glass‑bottom boats over vibrant corals." },
    ],
  },
  {
    region: "Caribbean",
    country: "St. Lucia",
    blurb:
      "Dramatic twin Pitons, rainforest drives, and chic bays — small island, big wow factor.",
    attractions: [
      {
        name: "The Pitons",
        blurb: "UNESCO‑listed volcanic spires over jade waters.",
      },
      {
        name: "Sulphur Springs",
        blurb: "Drive‑in volcano and mud baths near Soufrière.",
      },
      {
        name: "Marigot Bay",
        blurb: "Yacht‑speckled cove with calm, clear water.",
      },
      {
        name: "Anse Chastanet",
        blurb: "Black‑sand reef beach for snorkelers and divers.",
      },
    ],
  },
  {
    region: "Africa",
    country: "Ghana",
    blurb:
      "Heritage journeys on the Cape Coast, lush canopy walks, and buzzing Accra creativity.",
    attractions: [
      {
        name: "Cape Coast Castle",
        blurb: "Sobering Atlantic fortress and museum.",
      },
      {
        name: "Kakum Canopy Walk",
        blurb: "Suspension bridges high above rainforest.",
      },
      {
        name: "Makola Market",
        blurb: "Textiles, spices, and lively street life.",
      },
      { name: "Labadi Beach", blurb: "Weekend drumming, horses, and surf." },
    ],
  },
  {
    region: "Africa",
    country: "Senegal",
    blurb:
      "Dakar’s art and music pulse meet powerful history and surreal pink lakes.",
    attractions: [
      {
        name: "Île de Gorée",
        blurb: "House of Slaves and the Door of No Return.",
      },
      {
        name: "Lac Rose",
        blurb: "Algae‑tinted waters that glow bubble‑gum pink.",
      },
      {
        name: "Almadies Coast",
        blurb: "Surf breaks and seafood grills at Africa’s western tip.",
      },
      {
        name: "Djoudj Park",
        blurb: "Birdwatching paradise north of St‑Louis.",
      },
    ],
  },
  {
    region: "Africa",
    country: "Morocco",
    blurb:
      "From blue‑washed medinas to Saharan dunes and spice‑laden souks — endlessly photogenic.",
    attractions: [
      {
        name: "Chefchaouen",
        blurb: "Fair‑blue alleys tumbling down the Rif Mountains.",
      },
      {
        name: "Jemaa el‑Fnaa",
        blurb: "Marrakech’s famous square of storytellers and stalls.",
      },
      { name: "Erg Chebbi", blurb: "Golden dunes for camel treks at sunrise." },
      { name: "Aït Benhaddou", blurb: "Ancient ksar of earthen towers." },
    ],
  },
  {
    region: "Africa",
    country: "South Africa",
    blurb:
      "Wildlife megadiversity, coastal drives, and world‑class wine — a one‑trip greatest hits.",
    attractions: [
      {
        name: "Table Mountain",
        blurb: "Cableway views over Cape Town’s amphitheater bay.",
      },
      {
        name: "Kruger National Park",
        blurb: "Big Five safaris on classic savanna.",
      },
      {
        name: "Boulders Beach",
        blurb: "Penguin colony waddling between granite boulders.",
      },
      {
        name: "Cape Winelands",
        blurb: "Sun‑dappled vineyards and Cape Dutch estates.",
      },
    ],
  },
  {
    region: "Africa",
    country: "Kenya",
    blurb:
      "Classic safari country with Indian Ocean beaches and a lively capital skyline.",
    attractions: [
      {
        name: "Maasai Mara",
        blurb: "Great Migration drama and wide horizons.",
      },
      {
        name: "Nairobi NP",
        blurb: "Giraffes and rhinos with city towers beyond.",
      },
      {
        name: "Diani Beach",
        blurb: "Pale sands and swaying palms on the south coast.",
      },
      {
        name: "Lake Naivasha",
        blurb: "Hippos and boat safaris in the Rift Valley.",
      },
    ],
  },
  {
    region: "Africa",
    country: "Egypt",
    blurb:
      "Ancient wonders on the Nile meet Red Sea reefs and desert adventure.",
    attractions: [
      {
        name: "Pyramids of Giza",
        blurb: "Iconic tombs watched by the Sphinx.",
      },
      { name: "Luxor & Karnak", blurb: "Temple complexes and royal tombs." },
      { name: "Hurghada Reefs", blurb: "Clear water diving and kiteboarding." },
      { name: "Aswan", blurb: "Granite outcrops and Nubian culture." },
    ],
  },
  {
    region: "South America",
    country: "Brazil",
    blurb:
      "Beach culture, rainforest thunder, and samba‑charged cities — Brazil is pure energy.",
    attractions: [
      {
        name: "Christ the Redeemer",
        blurb: "Panoramic Rio views from Corcovado.",
      },
      {
        name: "Ipanema & Copacabana",
        blurb: "Sunkissed city beaches and promenades.",
      },
      {
        name: "Iguaçu Falls (BR)",
        blurb: "Roaring curtains of water on the border.",
      },
      {
        name: "Lençóis Maranhenses",
        blurb: "Blue lagoons among wind‑sculpted dunes.",
      },
    ],
  },
  {
    region: "South America",
    country: "Argentina",
    blurb:
      "From tangoed boulevards to glacier‑carved Patagonia — dramatic and delicious.",
    attractions: [
      {
        name: "Buenos Aires",
        blurb: "Cafés, parrillas, and colorful La Boca.",
      },
      { name: "Iguazú (AR)", blurb: "Walkways into the Devil’s Throat spray." },
      {
        name: "Perito Moreno",
        blurb: "Blue glacier walls calving into milky lakes.",
      },
      { name: "Mendoza", blurb: "Malbec vineyards beneath the Andes." },
    ],
  },
  {
    region: "South America",
    country: "Colombia",
    blurb:
      "Caribbean‑walled cities, emerald mountains, and coffee highlands with a creative spark.",
    attractions: [
      {
        name: "Cartagena Old City",
        blurb: "Rainbow balconies on cobbled streets.",
      },
      { name: "Tayrona", blurb: "Jungle‑to‑beach trails and boulder coves." },
      {
        name: "Medellín Comuna 13",
        blurb: "Street art and hillside escalators.",
      },
      { name: "Cocora Valley", blurb: "Sky‑high wax palms over green trails." },
    ],
  },
  {
    region: "South America",
    country: "Peru",
    blurb:
      "Andean archaeology, culinary capital Lima, and once‑in‑a‑lifetime mountain treks.",
    attractions: [
      {
        name: "Machu Picchu",
        blurb: "Cloud‑ringed Inca citadel above Urubamba.",
      },
      { name: "Sacred Valley", blurb: "Terraces, markets, and village life." },
      { name: "Rainbow Mountain", blurb: "Striped slopes at high altitude." },
      { name: "Lima", blurb: "World‑class ceviche and coastal cliffs." },
    ],
  },
  {
    region: "South America",
    country: "Chile",
    blurb:
      "A ribbon of extremes: Patagonian towers, otherworldly deserts, and artsy port towns.",
    attractions: [
      {
        name: "Torres del Paine",
        blurb: "Granite spires over blue lakes and guanacos.",
      },
      {
        name: "Atacama Desert",
        blurb: "Salt flats, geysers, and lunar valleys.",
      },
      {
        name: "Valparaíso",
        blurb: "Steep funiculars and mural‑splashed alleys.",
      },
      { name: "Lakes District", blurb: "Volcanoes mirrored in deep lakes." },
    ],
  },
  {
    region: "South America",
    country: "Ecuador",
    blurb:
      "Biodiversity powerhouse from Andean capitals to wildlife‑rich islands.",
    attractions: [
      {
        name: "Galápagos",
        blurb: "Close‑up encounters with giant tortoises and iguanas.",
      },
      { name: "Quito Old Town", blurb: "Baroque plazas on the equator line." },
      { name: "Baños", blurb: "Waterfalls, swings at the edge of the world." },
      { name: "Otavalo", blurb: "Indigenous markets and highland crafts." },
    ],
  },
  {
    region: "South America",
    country: "Guyana",
    blurb:
      "Untamed rainforest, thundering waterfalls, and genuine eco‑adventures off the grid.",
    attractions: [
      {
        name: "Kaieteur Falls",
        blurb: "Single‑drop giant plunging into jungle.",
      },
      {
        name: "Iwokrama Canopy",
        blurb: "Walkways above green cathedral forest.",
      },
      {
        name: "Shell Beach",
        blurb: "Remote turtle nesting sands on the Atlantic.",
      },
      {
        name: "Georgetown Stabroek",
        blurb: "Cast‑iron market and wooden cathedral.",
      },
    ],
  },
];

function aiImageUrl(prompt: string, width = 900, height = 600) {
  const base = "https://image.pollinations.ai/prompt/";
  const seed = Math.floor(Math.random() * 1000000);
  const fullPrompt = `${prompt}, travel photography, high detail, golden hour, ultra realistic, no text, no watermark`;
  return `${base}${encodeURIComponent(
    fullPrompt
  )}?width=${width}&height=${height}&seed=${seed}&nologo=true&nofeed=true`;
}

function buildPrompt(d: Destination): string {
  const head = d.attractions[0]?.name ?? d.country;
  return `${head} in ${d.country}, ${d.region}`;
}

function DestinationCard({ d }: { d: Destination }) {
  const [imgSrc] = useState<string>(() => aiImageUrl(buildPrompt(d)));
  const [imgOk, setImgOk] = useState<boolean>(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="h-full overflow-hidden rounded-2xl shadow-lg border-0 bg-gradient-to-b from-white to-sky-50">
        <div className="relative aspect-[3/2] bg-slate-100">
          {imgOk ? (
            <img
              src={imgSrc}
              alt={`${d.country} – ${d.attractions[0]?.name ?? "scenery"}`}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200">
              <ImageOff className="h-10 w-10 opacity-60" />
              <p className="text-xs text-slate-600">
                Couldn’t load AI image. Try again.
              </p>
            </div>
          )}
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <Badge className="bg-emerald-600 text-white/95 shadow">
              {d.region}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {d.country}
            </h3>
            <p className="mt-1 text-slate-600 leading-relaxed">{d.blurb}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {d.attractions.slice(0, 3).map((a) => (
              <Badge
                key={a.name}
                variant="secondary"
                className="bg-white border"
              >
                <MapPin className="h-3 w-3 mr-1.5" /> {a.name}
              </Badge>
            ))}
          </div>
          <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
            {d.attractions.slice(0, 3).map((a) => (
              <li key={a.name}>
                <span className="font-medium">{a.name}:</span> {a.blurb}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function DestinationCards() {
  const [region, setRegion] = useState<(typeof regions)[number]>("All");

  const filtered = useMemo(() => {
    return region === "All"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === region);
  }, [region]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 py-14 lg:py-16">
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-light-black mb-4">
                Afribbean Destinations
              </h1>
              <p className="text-gray">
                Popular countries across the{" "}
                <span className="font-medium">Caribbean</span>,{" "}
                <span className="font-medium">Africa</span>, and{" "}
                <span className="font-medium">South America</span>.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Tabs value={region} onValueChange={(v: any) => setRegion(v)}>
              <TabsList className="bg-white/80 backdrop-blur">
                {regions.map((r) => (
                  <TabsTrigger key={r} value={r}>
                    {r}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((d) => (
            <DestinationCard key={`${d.region}-${d.country}`} d={d} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-slate-600">
            No matches. Try a different search or region.
          </div>
        )}
      </main>
    </div>
  );
}
