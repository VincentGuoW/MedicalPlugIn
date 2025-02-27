import { extractMetrics } from "./src/extract-metrics.js";
import fs from 'fs';

const imagePath = "../Request/Sample/1.png";
const imageBuffer = fs.readFileSync(imagePath); 

import local_map from "../Request/local_map.json" with { type: 'json' };


const metrics = await extractMetrics(imageBuffer, local_map);

//Print out result as {"key":"value"}
console.log('Extracted Metrics:', JSON.stringify(metrics, null, 2)); 