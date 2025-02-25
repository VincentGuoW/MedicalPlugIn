import { extractMetrics } from "./src/extract-metrics.js";

const imagePath = "../Request/Sample/1.png";

import local_map from "../Request/local_map.json" with { type: 'json' };

const metrics = await extractMetrics(imagePath, local_map);

//Print out result as {"key":"value"}
console.log('Extracted Metrics:', JSON.stringify(metrics, null, 2)); 