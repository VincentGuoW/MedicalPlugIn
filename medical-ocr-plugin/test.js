import { extractMetrics } from "./src/extract-metrics.js";



const imagePath = "../Request/Sample/1.png";
//const local_map = "../Request/local_map.json"; This one not working

import local_map from "../Request/local_map.json" assert { type: 'json' };

const metrics = await extractMetrics(imagePath, local_map);

//Print out result as {"key":"value"}
console.log('Extracted Metrics:', JSON.stringify(metrics, null, 2)); 