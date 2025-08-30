"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useEffect, useMemo, useRef, useState } from "react";

type RequirementCode =
  | "visa-free"
  | "visa-on-arrival"
  | "eVisa"
  | "eTA"
  | "visa-required"
  | "no-entry"
  | "unknown";

interface Rule {
  fromCode: string;
  toCode: string;
  raw: string;
  requirement: RequirementCode;
  durationDays?: number;
}

interface Option {
  label: string;
  code: string;
  region: "Africa" | "Caribbean";
  seed?: number;
}

const CACHE_MAX_AGE_DAYS = 14;

const AFRICA: Option[] = [
  { label: "Algeria", code: "DZA", region: "Africa", seed: 2 },
  { label: "Angola", code: "AGO", region: "Africa", seed: 2 },
  { label: "Benin", code: "BEN", region: "Africa", seed: 2 },
  { label: "Botswana", code: "BWA", region: "Africa", seed: 3 },
  { label: "Burkina Faso", code: "BFA", region: "Africa", seed: 2 },
  { label: "Burundi", code: "BDI", region: "Africa", seed: 1 },
  { label: "Cabo Verde", code: "CPV", region: "Africa", seed: 4 },
  { label: "Cameroon", code: "CMR", region: "Africa", seed: 3 },
  { label: "Central African Republic", code: "CAF", region: "Africa", seed: 1 },
  { label: "Chad", code: "TCD", region: "Africa", seed: 1 },
  { label: "Comoros", code: "COM", region: "Africa", seed: 1 },
  {
    label: "Democratic Republic of the Congo",
    code: "COD",
    region: "Africa",
    seed: 2,
  },
  { label: "Republic of the Congo", code: "COG", region: "Africa", seed: 2 },
  { label: "Côte d’Ivoire", code: "CIV", region: "Africa", seed: 4 },
  { label: "Djibouti", code: "DJI", region: "Africa", seed: 1 },
  { label: "Egypt", code: "EGY", region: "Africa", seed: 6 },
  { label: "Equatorial Guinea", code: "GNQ", region: "Africa", seed: 1 },
  { label: "Eritrea", code: "ERI", region: "Africa", seed: 1 },
  { label: "Eswatini", code: "SWZ", region: "Africa", seed: 2 },
  { label: "Ethiopia", code: "ETH", region: "Africa", seed: 6 },
  { label: "Gabon", code: "GAB", region: "Africa", seed: 2 },
  { label: "The Gambia", code: "GMB", region: "Africa", seed: 3 },
  { label: "Ghana", code: "GHA", region: "Africa", seed: 10 },
  { label: "Guinea", code: "GIN", region: "Africa", seed: 2 },
  { label: "Guinea-Bissau", code: "GNB", region: "Africa", seed: 1 },
  { label: "Kenya", code: "KEN", region: "Africa", seed: 9 },
  { label: "Lesotho", code: "LSO", region: "Africa", seed: 1 },
  { label: "Liberia", code: "LBR", region: "Africa", seed: 2 },
  { label: "Libya", code: "LBY", region: "Africa", seed: 1 },
  { label: "Madagascar", code: "MDG", region: "Africa", seed: 4 },
  { label: "Malawi", code: "MWI", region: "Africa", seed: 3 },
  { label: "Mali", code: "MLI", region: "Africa", seed: 2 },
  { label: "Mauritania", code: "MRT", region: "Africa", seed: 2 },
  { label: "Mauritius", code: "MUS", region: "Africa", seed: 6 },
  { label: "Morocco", code: "MAR", region: "Africa", seed: 8 },
  { label: "Mozambique", code: "MOZ", region: "Africa", seed: 4 },
  { label: "Namibia", code: "NAM", region: "Africa", seed: 4 },
  { label: "Niger", code: "NER", region: "Africa", seed: 1 },
  { label: "Nigeria", code: "NGA", region: "Africa", seed: 10 },
  { label: "Rwanda", code: "RWA", region: "Africa", seed: 7 },
  { label: "São Tomé and Príncipe", code: "STP", region: "Africa", seed: 2 },
  { label: "Senegal", code: "SEN", region: "Africa", seed: 8 },
  { label: "Seychelles", code: "SYC", region: "Africa", seed: 6 },
  { label: "Sierra Leone", code: "SLE", region: "Africa", seed: 2 },
  { label: "Somalia", code: "SOM", region: "Africa", seed: 1 },
  { label: "South Africa", code: "ZAF", region: "Africa", seed: 9 },
  { label: "South Sudan", code: "SSD", region: "Africa", seed: 1 },
  { label: "Sudan", code: "SDN", region: "Africa", seed: 2 },
  { label: "Tanzania", code: "TZA", region: "Africa", seed: 7 },
  { label: "Togo", code: "TGO", region: "Africa", seed: 3 },
  { label: "Tunisia", code: "TUN", region: "Africa", seed: 5 },
  { label: "Uganda", code: "UGA", region: "Africa", seed: 5 },
  { label: "Zambia", code: "ZMB", region: "Africa", seed: 4 },
  { label: "Zimbabwe", code: "ZWE", region: "Africa", seed: 4 },
];

const CARIBBEAN: Option[] = [
  { label: "Antigua and Barbuda", code: "ATG", region: "Caribbean", seed: 9 },
  { label: "The Bahamas", code: "BHS", region: "Caribbean", seed: 9 },
  { label: "Barbados", code: "BRB", region: "Caribbean", seed: 10 },
  { label: "Belize", code: "BLZ", region: "Caribbean", seed: 7 },
  { label: "Dominica", code: "DMA", region: "Caribbean", seed: 7 },
  { label: "Grenada", code: "GRD", region: "Caribbean", seed: 7 },
  { label: "Guyana", code: "GUY", region: "Caribbean", seed: 10 },
  { label: "Haiti", code: "HTI", region: "Caribbean", seed: 6 },
  { label: "Jamaica", code: "JAM", region: "Caribbean", seed: 10 },
  { label: "Montserrat", code: "MSR", region: "Caribbean", seed: 5 },
  { label: "Saint Kitts and Nevis", code: "KNA", region: "Caribbean", seed: 7 },
  { label: "Saint Lucia", code: "LCA", region: "Caribbean", seed: 8 },
  {
    label: "Saint Vincent and the Grenadines",
    code: "VCT",
    region: "Caribbean",
    seed: 8,
  },
  { label: "Suriname", code: "SUR", region: "Caribbean", seed: 6 },
  { label: "Trinidad and Tobago", code: "TTO", region: "Caribbean", seed: 10 },
  { label: "Anguilla", code: "AIA", region: "Caribbean", seed: 5 },
  { label: "Bermuda", code: "BMU", region: "Caribbean", seed: 6 },
  {
    label: "British Virgin Islands",
    code: "VGB",
    region: "Caribbean",
    seed: 7,
  },
  { label: "Cayman Islands", code: "CYM", region: "Caribbean", seed: 7 },
  {
    label: "Turks and Caicos Islands",
    code: "TCA",
    region: "Caribbean",
    seed: 7,
  },
  { label: "Aruba", code: "ABW", region: "Caribbean", seed: 8 },
  {
    label: "Caribbean Netherlands (Bonaire, St Eustatius, Saba)",
    code: "BES",
    region: "Caribbean",
    seed: 6,
  },
  { label: "Curaçao", code: "CUW", region: "Caribbean", seed: 8 },
  { label: "Cuba", code: "CUB", region: "Caribbean", seed: 9 },
  { label: "Dominican Republic", code: "DOM", region: "Caribbean", seed: 10 },
  { label: "Guadeloupe", code: "GLP", region: "Caribbean", seed: 6 },
  { label: "Martinique", code: "MTQ", region: "Caribbean", seed: 6 },
  { label: "Puerto Rico", code: "PRI", region: "Caribbean", seed: 9 },
  { label: "Saint Barthélemy", code: "BLM", region: "Caribbean", seed: 5 },
  { label: "Saint Martin (French)", code: "MAF", region: "Caribbean", seed: 7 },
  { label: "Sint Maarten (Dutch)", code: "SXM", region: "Caribbean", seed: 8 },
  { label: "U.S. Virgin Islands", code: "VIR", region: "Caribbean", seed: 8 },
];

const ALL_OPTIONS: Option[] = [...CARIBBEAN, ...AFRICA];

const NATIONALITY_MAP: Record<string, string> = {
  Algeria: "Algerian",
  Angola: "Angolan",
  Benin: "Beninese",
  Botswana: "Botswana",
  "Burkina Faso": "Burkinabe",
  Burundi: "Burundian",
  "Cabo Verde": "Cape Verdean",
  Cameroon: "Cameroonian",
  "Central African Republic": "Central African",
  Chad: "Chadian",
  Comoros: "Comorian",
  "Democratic Republic of the Congo": "Democratic Republic of the Congo",
  "Republic of the Congo": "Republic of the Congo",
  "Côte d’Ivoire": "Ivorian",
  Djibouti: "Djiboutian",
  Egypt: "Egyptian",
  "Equatorial Guinea": "Equatoguinean",
  Eritrea: "Eritrean",
  Eswatini: "Eswatini",
  Ethiopia: "Ethiopian",
  Gabon: "Gabonese",
  "The Gambia": "Gambian",
  Ghana: "Ghanaian",
  Guinea: "Guinean",
  "Guinea-Bissau": "Bissau-Guinean",
  Kenya: "Kenyan",
  Lesotho: "Lesotho",
  Liberia: "Liberian",
  Libya: "Libyan",
  Madagascar: "Malagasy",
  Malawi: "Malawian",
  Mali: "Malian",
  Mauritania: "Mauritanian",
  Mauritius: "Mauritian",
  Morocco: "Moroccan",
  Mozambique: "Mozambican",
  Namibia: "Namibian",
  Niger: "Nigerien",
  Nigeria: "Nigerian",
  Rwanda: "Rwandan",
  "São Tomé and Príncipe": "Sao Tomean",
  Senegal: "Senegalese",
  Seychelles: "Seychellois",
  "Sierra Leone": "Sierra Leonean",
  Somalia: "Somali",
  "South Africa": "South African",
  "South Sudan": "South Sudanese",
  Sudan: "Sudanese",
  Tanzania: "Tanzanian",
  Togo: "Togolese",
  Tunisia: "Tunisian",
  Uganda: "Ugandan",
  Zambia: "Zambian",
  Zimbabwe: "Zimbabwean",
  "Antigua and Barbuda": "Antiguan and Barbudan",
  "The Bahamas": "Bahamian",
  Barbados: "Barbadian",
  Belize: "Belizean",
  Dominica: "Dominican (Dominica)",
  Grenada: "Grenadian",
  Guyana: "Guyanese",
  Haiti: "Haitian",
  Jamaica: "Jamaican",
  Montserrat: "Montserratian",
  "Saint Kitts and Nevis": "Kittitian and Nevisian",
  "Saint Lucia": "Saint Lucian",
  "Saint Vincent and the Grenadines": "Vincentian",
  Suriname: "Surinamese",
  "Trinidad and Tobago": "Trinidad and Tobago",
  Anguilla: "Anguillian",
  Bermuda: "Bermudian",
  "British Virgin Islands": "British Virgin Islander",
  "Cayman Islands": "Caymanian",
  "Turks and Caicos Islands": "Turks and Caicos Islander",
  Aruba: "Aruban",
  "Caribbean Netherlands (Bonaire, St Eustatius, Saba)":
    "Caribbean Netherlands",
  Curaçao: "Curacaoan",
  Cuba: "Cuban",
  "Dominican Republic": "Dominican (Republic)",
  Guadeloupe: "Guadeloupean",
  Martinique: "Martinican",
  "Puerto Rico": "Puerto Rican",
  "Saint Barthélemy": "Saint Barthelemy",
  "Saint Martin (French)": "Saint Martin (French)",
  "Sint Maarten (Dutch)": "Sint Maartener",
  "U.S. Virgin Islands": "U.S. Virgin Islander",
};

const DEST_ALIASES: Record<string, string[]> = {
  "Côte d’Ivoire": ["Ivory Coast", "Cote d'Ivoire"],
  "The Gambia": ["Gambia"],
  "The Bahamas": ["Bahamas"],
  "Cabo Verde": ["Cape Verde"],
  "São Tomé and Príncipe": ["Sao Tome and Principe"],
};

function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[^A-Za-z0-9 ]+/g, "")
    .trim()
    .split(" ")
    .filter(Boolean)
    .join("_");
}

function nationalityFor(name: string) {
  return NATIONALITY_MAP[name] || name;
}

function wikiNationalityUrl(name: string) {
  return `https://en.wikipedia.org/wiki/Visa_requirements_for_${slugify(
    nationalityFor(name)
  )}_citizens`;
}

function keyName(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/^the\s+/i, "")
    .replace(/[^A-Za-z0-9 ]+/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function candidatesFor(label: string): string[] {
  const base = [label, ...(DEST_ALIASES[label] || [])];
  return base.map(keyName);
}

function mapRequirement(text: string): RequirementCode {
  const t = text.toLowerCase();
  if (/no visa required|visa not required|visa-free/.test(t))
    return "visa-free";
  if (/visa on arrival/.test(t)) return "visa-on-arrival";
  if (/(e-?visa|electronic visa)/.test(t)) return "eVisa";
  if (/\beta\b|electronic travel authorization/.test(t)) return "eTA";
  if (/visa required|obtain visa/.test(t)) return "visa-required";
  if (/no admission|entry refused|not permitted/.test(t)) return "no-entry";
  return "unknown";
}

function parseDuration(textA: string, textB?: string): number | undefined {
  const t = ((textA || "") + " " + (textB || "")).toLowerCase();
  const m = t.match(/(\d+)\s*(day|days|month|months)/);
  if (!m) return undefined;
  const n = Number(m[1]);
  if (/month/.test(m[2])) return n * 30;
  return n;
}

async function fetchWikiTable(nationality: string): Promise<{
  map: Record<string, { req: string; stay?: string }>;
  fetchedAt: number;
} | null> {
  const slug = slugify(nationality);
  const ck = `visa.wiki.table.${slug}`;
  const tsK = `visa.wiki.table.${slug}.ts`;
  try {
    const cached = localStorage.getItem(ck);
    const ts = localStorage.getItem(tsK);
    if (
      cached &&
      ts &&
      Date.now() - Number(ts) < CACHE_MAX_AGE_DAYS * 86400_000
    ) {
      return { map: JSON.parse(cached), fetchedAt: Number(ts) };
    }
  } catch {}
  const title = `Visa_requirements_for_${slug}_citizens`;
  const url = `https://en.wikipedia.org/w/api.php?action=parse&prop=text&page=${encodeURIComponent(
    title
  )}&format=json&origin=*`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = await res.json();
  const html = json?.parse?.text?.["*"] as string | undefined;
  if (!html) return null;
  const doc = new DOMParser().parseFromString(html, "text/html");
  const tables = Array.from(doc.querySelectorAll("table.wikitable"));
  const map: Record<string, { req: string; stay?: string }> = {};
  for (const tbl of tables) {
    const rows = Array.from(tbl.querySelectorAll("tr"));
    for (let i = 1; i < rows.length; i++) {
      const cells = Array.from(rows[i].querySelectorAll("th,td")).map(
        (c) => c.textContent?.trim() || ""
      );
      if (cells.length < 2) continue;
      const country = cells[0];
      const req = cells[1];
      const stay = cells[2];
      if (!country || !req) continue;
      map[keyName(country)] = { req, stay };
    }
  }
  const now = Date.now();
  try {
    localStorage.setItem(`visa.wiki.table.${slug}`, JSON.stringify(map));
    localStorage.setItem(`visa.wiki.table.${slug}.ts`, String(now));
  } catch {}
  return { map, fetchedAt: now };
}

function byPopularityThenAlpha(a: Option, b: Option) {
  const ca = a.seed ?? 0;
  const cb = b.seed ?? 0;
  if (cb !== ca) return cb - ca;
  return a.label.localeCompare(b.label);
}

function getUsageKey(role: "from" | "to") {
  return `visa.usage.${role}`;
}
function loadUsage(role: "from" | "to"): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(getUsageKey(role)) || "{}");
  } catch {
    return {};
  }
}
function bumpUsage(role: "from" | "to", code: string) {
  const map = loadUsage(role);
  map[code] = (map[code] || 0) + 1;
  localStorage.setItem(getUsageKey(role), JSON.stringify(map));
}

function sortWithUsage(options: Option[], role: "from" | "to") {
  const usage = loadUsage(role);
  return [...options].sort((a, b) => {
    const uA = usage[a.code] || 0;
    const uB = usage[b.code] || 0;
    if (uB !== uA) return uB - uA;
    return byPopularityThenAlpha(a, b);
  });
}

export default function page() {
  const [fromCode, setFromCode] = useState("");
  const [toCode, setToCode] = useState("");
  const [rule, setRule] = useState<Rule | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ts, setTs] = useState<string | null>(null);
  const dark = useMemo(() => localStorage.getItem("visa.theme") === "dark", []);
  const [compact, setCompact] = useState<boolean>(
    () => localStorage.getItem("visa.compact") === "1"
  );
  const [usageVersion, setUsageVersion] = useState(0);
  const lastBumpedRef = useRef<string>("");

  const fromOptions = useMemo(
    () => sortWithUsage(ALL_OPTIONS, "from"),
    [usageVersion]
  );
  const toOptions = useMemo(
    () => sortWithUsage(ALL_OPTIONS, "to"),
    [usageVersion]
  );

  useEffect(() => {
    if (!fromCode || !toCode) {
      setRule(null);
      return;
    }
    const from = ALL_OPTIONS.find((o) => o.code === fromCode)!;
    const to = ALL_OPTIONS.find((o) => o.code === toCode)!;
    const nationality = nationalityFor(from.label);
    setLoading(true);
    setError(null);
    fetchWikiTable(nationality)
      .then((data) => {
        if (!data) {
          setRule(null);
          return;
        }
        setTs(new Date(data.fetchedAt).toISOString());
        const cands = candidatesFor(to.label);
        let row: { req: string; stay?: string } | undefined;
        for (const c of cands) {
          if (data.map[c]) {
            row = data.map[c];
            break;
          }
        }
        if (!row) {
          setRule({ fromCode, toCode, raw: "", requirement: "unknown" });
          return;
        }
        const requirement = mapRequirement(row.req);
        const durationDays = parseDuration(row.stay || row.req);
        setRule({ fromCode, toCode, raw: row.req, requirement, durationDays });
        const key = `${fromCode}|${toCode}`;
        if (lastBumpedRef.current !== key) {
          bumpUsage("from", fromCode);
          bumpUsage("to", toCode);
          lastBumpedRef.current = key;
          setUsageVersion((v) => v + 1);
        }
      })
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, [fromCode, toCode]);

  function swap() {
    setFromCode(toCode);
    setToCode(fromCode);
  }
  function toggleCompact() {
    const n = !compact;
    setCompact(n);
    localStorage.setItem("visa.compact", n ? "1" : "0");
  }

  return (
    <>
      <Header />

      <div
        className={
          (dark ? "dark " : "") +
          "min-h-full bg-gradient-to-b from-teal-50 via-white to-white text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100"
        }
      >
        <main
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
            compact ? "py-6" : "py-8"
          } grid lg:grid-cols-3 ${compact ? "gap-4" : "gap-6"}`}
        >
          <section
            className={`lg:col-span-2 rounded-2xl shadow ${
              compact ? "p-3" : "p-5"
            } bg-white dark:bg-slate-900 border dark:border-slate-800`}
          >
            <h2 className="font-semibold mb-4">Check requirements</h2>
            <div
              className={`grid sm:grid-cols-2 ${compact ? "gap-3" : "gap-4"}`}
            >
              <div>
                <label className="text-base block mb-1">Traveling from</label>
                <select
                  className={`w-full rounded-xl border px-3 ${
                    compact ? "py-1.5" : "py-2"
                  } bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700`}
                  value={fromCode}
                  onChange={(e) => setFromCode(e.target.value)}
                >
                  <option value="">Select origin</option>
                  <optgroup label="Popular">
                    {fromOptions
                      .filter((o) => (o.seed || 0) >= 9)
                      .map((o) => (
                        <option key={o.code + "-pop"} value={o.code}>
                          {o.label}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Caribbean">
                    {fromOptions
                      .filter((o) => o.region === "Caribbean")
                      .map((o) => (
                        <option key={o.code} value={o.code}>
                          {o.label}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Africa">
                    {fromOptions
                      .filter((o) => o.region === "Africa")
                      .map((o) => (
                        <option key={o.code} value={o.code}>
                          {o.label}
                        </option>
                      ))}
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="text-base block mb-1">Traveling to</label>
                <select
                  className={`w-full rounded-xl border px-3 ${
                    compact ? "py-1.5" : "py-2"
                  } bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700`}
                  value={toCode}
                  onChange={(e) => setToCode(e.target.value)}
                >
                  <option value="">Select destination</option>
                  <optgroup label="Popular">
                    {toOptions
                      .filter((o) => (o.seed || 0) >= 9)
                      .map((o) => (
                        <option key={o.code + "-pop"} value={o.code}>
                          {o.label}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Caribbean">
                    {toOptions
                      .filter((o) => o.region === "Caribbean")
                      .map((o) => (
                        <option key={o.code} value={o.code}>
                          {o.label}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Africa">
                    {toOptions
                      .filter((o) => o.region === "Africa")
                      .map((o) => (
                        <option key={o.code} value={o.code}>
                          {o.label}
                        </option>
                      ))}
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <button
                className="px-3 py-2 rounded-xl border bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700"
                onClick={swap}
              >
                Swap
              </button>
              <button
                className="px-3 py-2 rounded-xl border bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700"
                onClick={() => {
                  setFromCode("");
                  setToCode("");
                  setRule(null);
                }}
              >
                Clear
              </button>
            </div>

            <div className="mt-6">
              {loading && (
                <div className="text-base text-slate-600 dark:text-slate-400">
                  Loading from Wikipedia…
                </div>
              )}
              {!loading && error && (
                <div className="text-base text-rose-600 dark:text-rose-400">
                  Failed to load: {error}
                </div>
              )}
              {!loading && !error && (!fromCode || !toCode) && (
                <div className="text-base text-slate-600 dark:text-slate-400">
                  Select both countries to see requirements.
                </div>
              )}
              {!loading && !error && fromCode && toCode && rule && (
                <ResultCard
                  rule={rule}
                  from={ALL_OPTIONS.find((o) => o.code === fromCode)!}
                  to={ALL_OPTIONS.find((o) => o.code === toCode)!}
                />
              )}
              {!loading && !error && fromCode && toCode && !rule && (
                <div className="rounded-xl border p-4 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-base">
                  No data found on the Wikipedia page for this pair.
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-4">
            <div
              className={`rounded-2xl shadow ${
                compact ? "p-3" : "p-5"
              } bg-white dark:bg-slate-900 border dark:border-slate-800 text-base`}
            >
              <h3 className="font-semibold mb-2">About</h3>
              <p>
                Uses the Wikipedia page “Visa requirements for{" "}
                <em>Nationality</em> citizens”. Data may vary by page; always
                confirm with official sources before travel.
              </p>
              <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Cached {ts ? new Date(ts).toLocaleString() : ""}
              </div>
            </div>

            <div
              className={`rounded-2xl shadow ${
                compact ? "p-3" : "p-5"
              } bg-white dark:bg-slate-900 border dark:border-slate-800 text-base`}
            >
              <h3 className="font-semibold mb-2">Most popular first</h3>
              <p>
                Options are ordered by a popularity seed and your recent
                selections. Your history is stored locally in your browser.
              </p>
            </div>
          </aside>
        </main>
      </div>

      <Footer />
    </>
  );
}

function badgeStyle(code: RequirementCode) {
  const base =
    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium";
  switch (code) {
    case "visa-free":
      return (
        base +
        " bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
      );
    case "visa-on-arrival":
      return (
        base + " bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200"
      );
    case "eVisa":
      return (
        base +
        " bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200"
      );
    case "eTA":
      return (
        base +
        " bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200"
      );
    case "visa-required":
      return (
        base +
        " bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200"
      );
    case "no-entry":
      return (
        base + " bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
      );
    default:
      return (
        base + " bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
      );
  }
}

function pretty(code: RequirementCode) {
  switch (code) {
    case "visa-free":
      return "Visa‑free";
    case "visa-on-arrival":
      return "Visa on arrival";
    case "eVisa":
      return "e‑Visa";
    case "eTA":
      return "eTA";
    case "visa-required":
      return "Visa required";
    case "no-entry":
      return "Entry not permitted";
    default:
      return "Unknown";
  }
}

function ResultCard({
  rule,
  from,
  to,
}: {
  rule: Rule;
  from: Option;
  to: Option;
}) {
  const wikiFrom = wikiNationalityUrl(from.label);
  const wikiTo = wikiNationalityUrl(to.label);
  return (
    <div className="rounded-2xl border p-5 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className={badgeStyle(rule.requirement)}>
          {pretty(rule.requirement)}
        </span>
        {typeof rule.durationDays === "number" && (
          <span className="text-base text-slate-600 dark:text-slate-300">
            Up to {rule.durationDays} days
          </span>
        )}
      </div>
      <div className="mt-3 text-base text-slate-700 dark:text-slate-200">
        <div>
          <span className="font-medium">From:</span> {from.label}
        </div>
        <div>
          <span className="font-medium">To:</span> {to.label}
        </div>
        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Parsed from Wikipedia: “{rule.raw || ""}”
        </div>
        <div className="mt-2 text-xs">
          <a
            className="underline"
            href={wikiFrom}
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia: {nationalityFor(from.label)} citizens
          </a>
          <span className="mx-1">·</span>
          <a
            className="underline"
            href={wikiTo}
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia: {nationalityFor(to.label)} citizens
          </a>
        </div>
      </div>
    </div>
  );
}
