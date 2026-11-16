# GenesisCore Astrology MCP server — Western + Vedic (Jyotish)

Free remote [Model Context Protocol](https://modelcontextprotocol.io) server for astrology calculations. No API key, no signup, no install.

**Endpoint (Streamable HTTP, JSON responses):** `https://genesis-astro-guide-r2owtywexa-an.a.run.app/mcp`

Ask your AI assistant things like *"What is my moon sign? I was born 15 Aug 1995 at 06:30 in Pune"*, *"What is my Vedic rashi and nakshatra?"*, *"When is the next Mercury retrograde?"* or *"When does Mars enter Virgo?"*.

## Tools

| Tool | What it returns |
|---|---|
| `calculate_birth_chart_signs` | Sun to Pluto signs in the Western **tropical** zodiac and the Vedic **sidereal (Lahiri)** zodiac, Moon **nakshatra**, retrograde flags, and Ascendant / MC / Lagna when latitude and longitude are given |
| `get_retrograde_periods` | Mercury, Venus, Mars, Jupiter and Saturn retrograde and direct station times (UTC) with sign and degree, 2025–2027, and whether each is retrograde now |
| `get_sign_ingresses` | Exact UTC times Mercury, Venus or Mars entered each sign, 1940–2030 |
| `get_current_sky` | Current tropical and sidereal positions of the Sun, Moon and planets |

Every result includes links to plain-language explanation pages and a `full_reading.app_url` for a complete free Western + Vedic chart analysis on [GenesisCore](https://app.aether-core.org/en?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo).

## Connect

**Claude Code**
```bash
claude mcp add --transport http genesis-astro https://genesis-astro-guide-r2owtywexa-an.a.run.app/mcp
```

**Claude Desktop / Cursor / VS Code / any client with remote MCP support** (`mcp.json`)
```json
{
  "mcpServers": {
    "genesis-astro": { "type": "http", "url": "https://genesis-astro-guide-r2owtywexa-an.a.run.app/mcp" }
  }
}
```

**Clients that only support stdio** (via [mcp-remote](https://www.npmjs.com/package/mcp-remote))
```json
{
  "mcpServers": {
    "genesis-astro": { "command": "npx", "args": ["-y", "mcp-remote", "https://genesis-astro-guide-r2owtywexa-an.a.run.app/mcp"] }
  }
}
```

**Raw JSON-RPC**
```bash
curl -s -X POST https://genesis-astro-guide-r2owtywexa-an.a.run.app/mcp -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"calculate_birth_chart_signs","arguments":{"date":"1995-08-15","time":"06:30","utc_offset":5.5,"latitude":18.52,"longitude":73.86}}}'
```
→ sidereal Moon in Pisces, nakshatra Revati, Lagna Leo.

## Also available
- REST: `GET https://genesis-astro-guide-r2owtywexa-an.a.run.app/api/v1/chart?date=YYYY-MM-DD&time=HH:MM&offset=<hours>[&lat=&lon=]` — [OpenAPI 3.1](https://genesis-astro-guide-r2owtywexa-an.a.run.app/openapi.json)
- [llms.txt](https://genesis-astro-guide-r2owtywexa-an.a.run.app/llms.txt)
- Open data (CSV/JSON, CC BY 4.0): [planet-sign-ingress-data](https://github.com/AETHER-CORE1219/planet-sign-ingress-data)
- Free web calculators: [English](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/sign-checker) · [Español](https://genesis-astro-guide-r2owtywexa-an.a.run.app/es) · [Português](https://genesis-astro-guide-r2owtywexa-an.a.run.app/pt) · [हिन्दी](https://genesis-astro-guide-r2owtywexa-an.a.run.app/hi) · [Türkçe](https://genesis-astro-guide-r2owtywexa-an.a.run.app/tr) · [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/tools/sign-checker)

## Free calendars and guides (same calculations, for people)
- [Mercury retrograde dates 2025–2027](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/retrograde) — station times, sign and degree for Mercury, Venus, Mars, Jupiter and Saturn ([日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/retrograde))
- [Full moon and new moon calendar 2026–2027](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/full-moon-new-moon) — all 50 lunations and 9 eclipses in UTC/JST ([日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/full-moon-new-moon))
- [Today's planetary positions](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/today) — Sun to Pluto, Moon sign and nakshatra
- [Moon sign meanings](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/moon) · [Venus sign](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/venus) · [Mars sign](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mars) · [Mercury sign](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mercury)
- [Ascendant (rising sign) calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/ascendant) · [How the Ascendant is calculated](https://aether-core1219.github.io/planet-sign-ingress-data/ascendant.html) · [guide](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/ascendant) · [Vimshottari Dasha calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/dasha) · [Navamsa (D9) calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/navamsa)
- [Sade Sati dates by Moon sign, 2000–2060](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/sade-sati) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/sade-sati-2000-2060.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/sade-sati))
- [Saturn return calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/saturn-return) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/saturn-returns.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/saturn-return))
- [Jupiter transit dates 2020–2035 (tropical and Vedic)](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/jupiter-transit) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/jupiter-transits-2020-2035.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/jupiter-transit))
- [Total solar eclipse of 2 August 2027, 50 cities](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/solar-eclipse-2027) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/solar-eclipses-2027-2028.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/solar-eclipse-2027))
- [Developer page: REST API + MCP](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/developers)

Listed in the [official MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=genesis-astro) as `io.github.AETHER-CORE1219/genesis-astro`.

## Method
Astronomy Engine 2.1.19, geocentric apparent ecliptic longitude of date. Sidereal positions use the Lahiri ayanamsa (Swiss Ephemeris SIDM_LAHIRI fit). Retrograde stations are found from the sign change of daily motion, bisected to 30 s.

## Terms
Free, including commercial use. Where results are shown to people, keep a link to the [GenesisCore Astrology Guide](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/developers). Please cache and avoid bursts of traffic. The server does not store birth data.

---

### Español
Servidor MCP gratuito para asistentes de IA: signos occidentales (tropicales) y védicos (siderales, Lahiri), nakshatra lunar, ascendente y fechas de Mercurio retrógrado. Calculadora web: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/es](https://genesis-astro-guide-r2owtywexa-an.a.run.app/es)

### Português
Servidor MCP gratuito para assistentes de IA: signos ocidentais (tropicais) e védicos (siderais, Lahiri), nakshatra lunar, ascendente e datas de Mercúrio retrógrado. Calculadora: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/pt](https://genesis-astro-guide-r2owtywexa-an.a.run.app/pt)

### हिन्दी
AI सहायकों के लिए मुफ़्त MCP सर्वर: वैदिक (निरयण, लाहिड़ी) और पाश्चात्य (सायन) राशि, जन्म नक्षत्र, लग्न और बुध वक्री की तिथियाँ। कैलकुलेटर: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/hi](https://genesis-astro-guide-r2owtywexa-an.a.run.app/hi)

### Türkçe
Yapay zekâ asistanları için ücretsiz MCP sunucusu: Batı (tropikal) ve Vedik (sidereal, Lahiri) burçlar, Ay nakşatrası, yükselen ve Merkür retrosu tarihleri. Hesaplayıcı: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/tr](https://genesis-astro-guide-r2owtywexa-an.a.run.app/tr)

## License
MIT (this repository: documentation and client configuration).
