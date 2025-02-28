import { imageToText } from "./image-to-text.js";
import { parseMetrics } from "./parse-metrics.js";

export async function extractMetrics(images,local_map){
   
    const imageTextArray = await imageToText(images);

    const metrics = await parseMetrics(imageTextArray,local_map);
    //map for diff images.
    return metrics;

}