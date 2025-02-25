import { imageToText } from "./image-to-text.js";

export async function extractMetrics(images,local_map){
    const metrics = await imageToText(images,local_map);
    return  metrics;
}