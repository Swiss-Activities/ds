import { useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionActivityGrid } from "@swiss-activities/ui";
import { grayColors, saColors } from "@swiss-activities/ui/tokens";
import type {
  TGatewayHome,
  TGatewayHomeItem,
} from "@swiss-activities/data";
import { Field, Input, Select, SubmitButton } from "./form";

const DEFAULT_GATEWAY_URL = "https://www.swissactivities.com/api/gateway/home";

const LOCALES = [
  { value: "de_CH", label: "Deutsch" },
  { value: "en_CH", label: "English" },
  { value: "fr_CH", label: "Français" },
  { value: "it_CH", label: "Italiano" },
  { value: "ar_AE", label: "العربية" },
  { value: "cs_CZ", label: "Čeština" },
  { value: "da_DK", label: "Dansk" },
  { value: "el_GR", label: "Ελληνικά" },
  { value: "es_ES", label: "Español" },
  { value: "hi_IN", label: "हिन्दी" },
  { value: "hr_HR", label: "Hrvatski" },
  { value: "hu_HU", label: "Magyar" },
  { value: "id_ID", label: "Bahasa Indonesia" },
  { value: "ja_JP", label: "日本語" },
  { value: "ko_KR", label: "한국어" },
  { value: "ms_MY", label: "Bahasa Melayu" },
  { value: "nb_NO", label: "Norsk bokmål" },
  { value: "nl_NL", label: "Nederlands" },
  { value: "pl_PL", label: "Polski" },
  { value: "pt_PT", label: "Português" },
  { value: "ro_RO", label: "Română" },
  { value: "ru_RU", label: "Русский" },
  { value: "sk_SK", label: "Slovenčina" },
  { value: "sq_AL", label: "Shqip" },
  { value: "sv_SE", label: "Svenska" },
  { value: "th_TH", label: "ภาษาไทย" },
  { value: "tr_TR", label: "Türkçe" },
  { value: "uk_UA", label: "Українська" },
  { value: "vi_VN", label: "Tiếng Việt" },
  { value: "zh_CN", label: "中文" },
];

const COUNTRIES = [
  { value: "", label: "None" },
  { value: "CH", label: "Switzerland" },
  { value: "DE", label: "Germany" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "FR", label: "France" },
  { value: "JP", label: "Japan" },
  { value: "KR", label: "South Korea" },
  { value: "CN", label: "China" },
];

function toActivityItem(item: TGatewayHomeItem) {
  return {
    image: item.image_url ? (
      <img src={item.image_url} alt={item.title} />
    ) : null,
    title: item.title,
    score: item.rating ?? 0,
    reviewCount: item.review_count ?? 0,
    priceLabel: "pro Person",
    price: item.price_formatted ? `ab ${item.price_formatted}` : "",
  };
}

function GatewayPlayground() {
  const [gatewayUrl, setGatewayUrl] = useState(DEFAULT_GATEWAY_URL);
  const [locale, setLocale] = useState("de_CH");
  const [country, setCountry] = useState("DE");
  const [lat, setLat] = useState("52.55206707292657");
  const [lng, setLng] = useState("13.413339798137264");
  const [data, setData] = useState<TGatewayHome | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const buildUrl = useCallback(() => {
    const params = new URLSearchParams();
    if (locale) params.set("locale", locale.toLowerCase().replace("_", "-"));
    if (country) params.set("country", country);
    if (lat) params.set("lat", lat);
    if (lng) params.set("lng", lng);
    return `${gatewayUrl}?${params.toString()}`;
  }, [gatewayUrl, locale, country, lat, lng]);

  const requestUrl = buildUrl();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(requestUrl);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [requestUrl]);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: saColors.bg,
        padding: "40px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: grayColors[900],
            marginBottom: 8,
          }}
        >
          Gateway Playground
        </h1>
        <p
          style={{
            fontSize: 14,
            color: grayColors[600],
            marginBottom: 32,
          }}
        >
          Test the gateway API with different parameters and see how sections
          render with real data.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <Field label="Gateway URL" htmlFor="gw-url" style={{ flex: "2 1 300px" }}>
            <Input
              id="gw-url"
              type="text"
              value={gatewayUrl}
              onChange={(e) => setGatewayUrl(e.target.value)}
            />
          </Field>
          <Field label="Locale" htmlFor="gw-locale" style={{ flex: "1 1 160px" }}>
            <Select
              id="gw-locale"
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
            >
              {LOCALES.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Country" htmlFor="gw-country" style={{ flex: "1 1 160px" }}>
            <Select
              id="gw-country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {COUNTRIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 32,
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <Field label="Latitude" htmlFor="gw-lat" style={{ flex: "1 1 140px" }}>
            <Input
              id="gw-lat"
              type="text"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="46.6863"
            />
          </Field>
          <Field label="Longitude" htmlFor="gw-lng" style={{ flex: "1 1 140px" }}>
            <Input
              id="gw-lng"
              type="text"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              placeholder="7.8632"
            />
          </Field>
          <div>
            <SubmitButton loading={loading} onClick={fetchData}>
              Fetch
            </SubmitButton>
          </div>
        </div>

        {(data || error) && (
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              backgroundColor: grayColors[50],
              border: `1px solid ${saColors.border}`,
              fontSize: 13,
              fontFamily: "monospace",
              color: grayColors[600],
              marginBottom: 24,
              wordBreak: "break-all",
            }}
          >
            {requestUrl}
          </div>
        )}

        {error && (
          <div
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#dc2626",
              fontSize: 14,
              marginBottom: 24,
            }}
          >
            {error}
          </div>
        )}

        {data && (
          <div
            style={{
              fontSize: 13,
              color: grayColors[500],
              marginBottom: 24,
            }}
          >
            {data.sections.length} section{data.sections.length !== 1 && "s"}{" "}
            returned
          </div>
        )}

        {data?.sections.map((section) => (
          <div key={section.id} style={{ marginBottom: 48 }}>
            <SectionActivityGrid
              title={section.title}
              activities={section.data
                .filter((item) => !!item.price_formatted)
                .map(toActivityItem)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

const meta = {
  title: "Playgrounds/Gateway",
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  render: () => <GatewayPlayground />,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
