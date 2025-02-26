import { imageToText } from "./image-to-text.js";
import { parseMetrics } from "./parse-metrics.js";

export async function extractMetrics(images,local_map){
    //image ulr -> image file
    //image file -> better quality file
    //if few image-> each image

    //Image to String text.
    const text = await imageToText(images,local_map);

    //String to
    const metrics = await parseMetrics(text,local_map);
    return metrics;

}