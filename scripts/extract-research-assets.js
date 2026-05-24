const fs = require("fs");

const sourcePath =
  "c:/Users/adens/Desktop/work/frontend-stock-1/grove_v8 (2).html";
const outputPath =
  "c:/Users/adens/Desktop/work/frontend-stock-1/data/researchAssets.json";

const src = fs.readFileSync(sourcePath, "utf8");
const extractObjects = (label) => {
  const start = src.indexOf(label);
  if (start < 0) {
    console.error(`${label} not found`);
    process.exit(1);
  }

  const slice = src.slice(start);
  const openIdx = slice.indexOf("[");
  let i = openIdx + 1;
  let depth = 0;
  let inStr = false;
  let strChar = "";
  let cur = "";
  const objs = [];

  for (; i < slice.length; i += 1) {
    const ch = slice[i];
    const prev = slice[i - 1];

    if (inStr) {
      cur += ch;
      if (ch === strChar && prev !== "\\") {
        inStr = false;
      }
      continue;
    }

    if (ch === "'" || ch === '"') {
      inStr = true;
      strChar = ch;
      cur += ch;
      continue;
    }

    if (ch === "{") {
      if (depth === 0) {
        cur = "";
      }
      depth += 1;
      cur += ch;
      continue;
    }

    if (ch === "}") {
      depth -= 1;
      cur += ch;
      if (depth === 0) {
        objs.push(cur);
        cur = "";
      }
      continue;
    }

    if (depth > 0) {
      cur += ch;
      continue;
    }

    if (ch === "]") {
      break;
    }
  }

  return objs;
};

const objs = extractObjects("const ASSETS=[");
const smallCapObjs = extractObjects("const EXPANDED_SMALL_CAPS = [");
const globalObjs = extractObjects("const GLOBAL_STOCKS = [");

const pick = (obj, key) => {
  const re = new RegExp(`${key}\\s*:\\s*'([^']*)'`);
  const match = obj.match(re);
  return match ? match[1] : null;
};

const pickNum = (obj, key) => {
  const re = new RegExp(`${key}\\s*:\\s*([0-9]+)`);
  const match = obj.match(re);
  return match ? Number(match[1]) : null;
};

const pickBlock = (obj, key) => {
  const idx = obj.indexOf(`${key}:{`);
  if (idx < 0) return null;
  let j = idx + key.length + 2;
  let d = 1;
  let inS = false;
  let sc = "";
  let out = "";

  for (; j < obj.length; j += 1) {
    const c = obj[j];
    const p = obj[j - 1];

    if (inS) {
      out += c;
      if (c === sc && p !== "\\") {
        inS = false;
      }
      continue;
    }

    if (c === "'" || c === '"') {
      inS = true;
      sc = c;
      out += c;
      continue;
    }

    if (c === "{") {
      d += 1;
      out += c;
      continue;
    }

    if (c === "}") {
      d -= 1;
      if (d === 0) break;
      out += c;
      continue;
    }

    out += c;
  }

  return out;
};

const parseH = (block) => {
  if (!block) return null;
  return {
    prob: pickNum(block, "prob"),
    neg: pickNum(block, "neg"),
    ev: pick(block, "ev"),
    score: pickNum(block, "score"),
    stance: pick(block, "stance"),
  };
};

const output = [...objs, ...smallCapObjs, ...globalObjs]
  .map((obj) => ({
    ticker: pick(obj, "ticker"),
    name: pick(obj, "name"),
    sector: pick(obj, "sector"),
    color: pick(obj, "color"),
    assetClass: pick(obj, "assetClass"),
    price: pick(obj, "price"),
    change: pick(obj, "change"),
    fv: pick(obj, "fv"),
    intlSector: pick(obj, "intlSector"),
    region: pick(obj, "region"),
    isSmallCap: /isSmallCap\s*:\s*true/.test(obj),
    lt: parseH(pickBlock(obj, "lt")),
    mt: parseH(pickBlock(obj, "mt")),
    st: parseH(pickBlock(obj, "st")),
  }))
  .filter((asset) => asset.ticker);

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`assets ${output.length}`);
