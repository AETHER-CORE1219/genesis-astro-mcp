# GenesisCore Astrology MCP server — Western + Vedic (Jyotish)

Free remote [Model Context Protocol](https://modelcontextprotocol.io) server for astrology calculations. No API key, no signup, no install.

[![GenesisCore Astrology MCP connector](https://glama.ai/mcp/connectors/io.github.AETHER-CORE1219/genesis-astro/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.AETHER-CORE1219/genesis-astro)

**Endpoint (Streamable HTTP, JSON responses):** `https://genesis-astro-guide-r2owtywexa-an.a.run.app/mcp`

Also listed on [Glama](https://glama.ai/mcp/connectors/io.github.AETHER-CORE1219/genesis-astro), the [official MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers?search=genesis-astro) as `io.github.AETHER-CORE1219/genesis-astro`, [mcpservers.org](https://mcpservers.org/servers/aether-core1219/genesis-astro-mcp), and [Awesome MCP Servers](https://sagargupta.online/awesome-mcp-servers/?q=GenesisCore%20Astrology).

Ask your AI assistant things like *"What is my moon sign? I was born 15 Aug 1995 at 06:30 in Pune"*, *"What is my Vedic rashi and nakshatra?"*, *"When is the next Mercury retrograde?"* or *"When does Mars enter Virgo?"*.

## Tools

| Tool | What it returns |
|---|---|
| `calculate_birth_chart_signs` | Sun to Pluto signs in the Western **tropical** zodiac and the Vedic **sidereal (Lahiri)** zodiac, Moon **nakshatra**, retrograde flags, and Ascendant / MC / Lagna when latitude and longitude are given |
| `get_retrograde_periods` | Mercury, Venus, Mars, Jupiter and Saturn retrograde and direct station times (UTC) with sign and degree, 2025–2027, and whether each is retrograde now |
| `get_sign_ingresses` | Exact UTC times Mercury, Venus or Mars entered each sign, 1940–2030 |
| `get_current_sky` | Current tropical and sidereal positions of the Sun, Moon and planets |

Every result includes links to plain-language explanation pages and a `full_reading.app_url` for a complete free Western + Vedic chart analysis on [GenesisCore](https://app.aether-core.org/en?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo). For a paid Standard or Premium reading, [start a paid analysis](https://app.aether-core.org/en/paid/start?source=guide&utm_source=github&utm_medium=readme&utm_campaign=mcp-repo-paid). 日本語は[無料分析](https://app.aether-core.org/ja?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)と[有料版の入力](https://app.aether-core.org/ja/paid/start?source=guide&utm_source=github&utm_medium=readme&utm_campaign=mcp-repo-paid)。

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
- Free web calculators: [English](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/sign-checker?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Español](https://genesis-astro-guide-r2owtywexa-an.a.run.app/es?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Português](https://genesis-astro-guide-r2owtywexa-an.a.run.app/pt?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [हिन्दी](https://genesis-astro-guide-r2owtywexa-an.a.run.app/hi?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Türkçe](https://genesis-astro-guide-r2owtywexa-an.a.run.app/tr?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/tools/sign-checker?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)

## Free calendars and guides (same calculations, for people)
- [Mercury retrograde dates 2025–2027](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/retrograde?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) — station times, sign and degree for Mercury, Venus, Mars, Jupiter and Saturn ([日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/retrograde?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo))
- [Full moon and new moon calendar 2026–2027](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/full-moon-new-moon?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) — all 50 lunations and 9 eclipses in UTC/JST ([日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/full-moon-new-moon?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo))
- [Today's planetary positions](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/today?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) — Sun to Pluto, Moon sign and nakshatra
- [Moon sign meanings](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/moon?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Venus sign](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/venus?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Mars sign](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mars?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Mercury sign](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mercury?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)
- [Ascendant (rising sign) calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/ascendant?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [How the Ascendant is calculated](https://aether-core1219.github.io/planet-sign-ingress-data/ascendant.html) · [guide](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/ascendant?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Vimshottari Dasha calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/dasha?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) · [Navamsa (D9) calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/navamsa?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)
- [Sade Sati dates by Moon sign, 2000–2060](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/sade-sati?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/sade-sati-2000-2060.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/sade-sati?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo))
- [Saturn return calculator](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/saturn-return?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/saturn-returns.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/saturn-return?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo))
- [Jupiter transit dates 2020–2035 (tropical and Vedic)](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/jupiter-transit?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/jupiter-transits-2020-2035.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/jupiter-transit?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo))
- [Total solar eclipse of 2 August 2027, 50 cities](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/solar-eclipse-2027?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo) ([table](https://aether-core1219.github.io/planet-sign-ingress-data/solar-eclipses-2027-2028.html), [日本語](https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/solar-eclipse-2027?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo))
- [Developer page: REST API + MCP](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/developers?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)

Listed in the [official MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=genesis-astro) as `io.github.AETHER-CORE1219/genesis-astro`.

## Method
Astronomy Engine 2.1.19, geocentric apparent ecliptic longitude of date. Sidereal positions use the Lahiri ayanamsa (Swiss Ephemeris SIDM_LAHIRI fit). Retrograde stations are found from the sign change of daily motion, bisected to 30 s.

## Terms
Free, including commercial use. Where results are shown to people, keep a link to the [GenesisCore Astrology Guide](https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/developers?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo). Please cache and avoid bursts of traffic. The server does not store birth data.

---

### Español
Servidor MCP gratuito para asistentes de IA: signos occidentales (tropicales) y védicos (siderales, Lahiri), nakshatra lunar, ascendente y fechas de Mercurio retrógrado. Calculadora web: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/es](https://genesis-astro-guide-r2owtywexa-an.a.run.app/es?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)

### Português
Servidor MCP gratuito para assistentes de IA: signos ocidentais (tropicais) e védicos (siderais, Lahiri), nakshatra lunar, ascendente e datas de Mercúrio retrógrado. Calculadora: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/pt](https://genesis-astro-guide-r2owtywexa-an.a.run.app/pt?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)

### हिन्दी
AI सहायकों के लिए मुफ़्त MCP सर्वर: वैदिक (निरयण, लाहिड़ी) और पाश्चात्य (सायन) राशि, जन्म नक्षत्र, लग्न और बुध वक्री की तिथियाँ। कैलकुलेटर: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/hi](https://genesis-astro-guide-r2owtywexa-an.a.run.app/hi?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)

### Türkçe
Yapay zekâ asistanları için ücretsiz MCP sunucusu: Batı (tropikal) ve Vedik (sidereal, Lahiri) burçlar, Ay nakşatrası, yükselen ve Merkür retrosu tarihleri. Hesaplayıcı: [https://genesis-astro-guide-r2owtywexa-an.a.run.app/tr](https://genesis-astro-guide-r2owtywexa-an.a.run.app/tr?utm_source=github&utm_medium=readme&utm_campaign=mcp-repo)

## License
MIT (this repository: documentation and client configuration).
