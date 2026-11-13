// Minimal MCP client call (Node 18+): node examples/client.mjs 1995-08-15 06:30 5.5
const [date = "1995-08-15", time = "06:30", off = "5.5"] = process.argv.slice(2);
const r = await fetch("https://genesis-astro-guide-r2owtywexa-an.a.run.app/mcp", { method: "POST", headers: { "content-type": "application/json" },
  body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/call", params: { name: "calculate_birth_chart_signs", arguments: { date, time, utc_offset: Number(off) } } }) });
const { result } = await r.json();
const c = result.structuredContent;
console.log("Western Moon:", c.tropical.moon.sign_en, "| Vedic Moon:", c.sidereal_lahiri.moon.sign_en, "| Nakshatra:", c.moon_nakshatra_lahiri);
