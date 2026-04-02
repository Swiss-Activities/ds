import { useCallback, useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { logoMarkupDefault } from "@swiss-activities/ui/logo/markup";
import { grayColors, saColors } from "@swiss-activities/ui/tokens";
import satori from "satori";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const logoDataUrl = `data:image/svg+xml;base64,${btoa(logoMarkupDefault)}`;

type OgTemplateProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

function OgTemplate({ title, subtitle, imageUrl }: OgTemplateProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        {/* Content area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
            flex: 1,
          }}
        >
          {/* Logo */}
          <img
            src={logoDataUrl}
            width={178}
            height={96}
            style={{ marginBottom: 40 }}
          />
          {/* Title */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: grayColors[900],
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          {/* Subtitle */}
          {subtitle && (
            <div
              style={{
                fontSize: 28,
                fontWeight: 400,
                color: grayColors[600],
                marginTop: 16,
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
        {/* Image area (50/50 split) */}
        {imageUrl && (
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "100%",
            }}
          >
            <img
              src={imageUrl}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

async function loadFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  return res.arrayBuffer();
}

function OgImageGenerator() {
  const [title, setTitle] = useState("Your OG Image Title");
  const [subtitle, setSubtitle] = useState("Optional subtitle text goes here");
  const [imageUrl, setImageUrl] = useState("");
  const [svgDataUrl, setSvgDataUrl] = useState<string | null>(null);
  const [fonts, setFonts] = useState<ArrayBuffer[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load fonts once
  useEffect(() => {
    Promise.all([
      loadFont("/assets/fonts/inter-v11-latin-regular.ttf"),
      loadFont("/assets/fonts/inter-v11-latin-700.ttf"),
    ]).then(setFonts);
  }, []);

  // Render SVG preview whenever inputs change
  useEffect(() => {
    if (!fonts) return;

    let cancelled = false;

    satori(
      <OgTemplate
        title={title || "Enter a title"}
        subtitle={subtitle}
        imageUrl={imageUrl}
      />,
      {
        width: OG_WIDTH,
        height: OG_HEIGHT,
        fonts: [
          { name: "Inter", data: fonts[0], weight: 400, style: "normal" },
          { name: "Inter", data: fonts[1], weight: 700, style: "normal" },
        ],
      }
    ).then((svg) => {
      if (!cancelled) {
        setSvgDataUrl(
          `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, [title, subtitle, imageUrl, fonts]);

  const handleDownload = useCallback(async () => {
    if (!svgDataUrl) return;
    setIsGenerating(true);

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = OG_WIDTH;
      canvas.height = OG_HEIGHT;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.src = svgDataUrl;

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
      });

      ctx.drawImage(img, 0, 0, OG_WIDTH, OG_HEIGHT);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `og-image-${Date.now()}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } finally {
      setIsGenerating(false);
    }
  }, [svgDataUrl]);

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
          OG Image Generator
        </h1>
        <p
          style={{
            fontSize: 14,
            color: grayColors[600],
            marginBottom: 32,
          }}
        >
          Generate branded Open Graph images for Swiss Activities pages. Enter a
          title and optional subtitle, then download as PNG.
        </p>

        {/* Form */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 260px" }}>
            <label
              htmlFor="og-title"
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 500,
                color: grayColors[700],
                marginBottom: 6,
              }}
            >
              Title
            </label>
            <input
              id="og-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title..."
              style={{
                width: "100%",
                padding: "10px 14px",
                fontSize: 15,
                borderRadius: 8,
                border: `1px solid ${saColors.border}`,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ flex: "1 1 260px" }}>
            <label
              htmlFor="og-subtitle"
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 500,
                color: grayColors[700],
                marginBottom: 6,
              }}
            >
              Subtitle (optional)
            </label>
            <input
              id="og-subtitle"
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Enter a subtitle..."
              style={{
                width: "100%",
                padding: "10px 14px",
                fontSize: 15,
                borderRadius: 8,
                border: `1px solid ${saColors.border}`,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ flex: "1 1 260px" }}>
            <label
              htmlFor="og-image"
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 500,
                color: grayColors[700],
                marginBottom: 6,
              }}
            >
              Image URL (optional)
            </label>
            <input
              id="og-image"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              style={{
                width: "100%",
                padding: "10px 14px",
                fontSize: 15,
                borderRadius: 8,
                border: `1px solid ${saColors.border}`,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Preview */}
        <div
          style={{
            borderRadius: 12,
            border: `1px solid ${saColors.border}`,
            overflow: "hidden",
            backgroundColor: "white",
            marginBottom: 24,
          }}
        >
          {svgDataUrl ? (
            <img
              src={svgDataUrl}
              alt="OG Image Preview"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                aspectRatio: `${OG_WIDTH} / ${OG_HEIGHT}`,
              }}
            />
          ) : (
            <div
              style={{
                aspectRatio: `${OG_WIDTH} / ${OG_HEIGHT}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: grayColors[400],
                fontSize: 14,
              }}
            >
              Loading fonts...
            </div>
          )}
        </div>

        {/* Download button */}
        <button
          type="button"
          onClick={handleDownload}
          disabled={!svgDataUrl || isGenerating}
          style={{
            padding: "12px 28px",
            fontSize: 15,
            fontWeight: 600,
            color: "white",
            backgroundColor:
              !svgDataUrl || isGenerating ? grayColors[300] : saColors.primary,
            border: "none",
            borderRadius: 8,
            cursor: !svgDataUrl || isGenerating ? "not-allowed" : "pointer",
          }}
        >
          {isGenerating ? "Generating..." : "Download PNG"}
        </button>

        {/* Hidden canvas for PNG export */}
        <canvas ref={canvasRef} style={{ display: "none" }} />

        {/* Dimensions info */}
        <p
          style={{
            fontSize: 12,
            color: grayColors[400],
            marginTop: 12,
          }}
        >
          Output: {OG_WIDTH} x {OG_HEIGHT}px PNG
        </p>
      </div>
    </main>
  );
}

const meta = {
  title: "Generators/OG Image",
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  render: () => <OgImageGenerator />,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
