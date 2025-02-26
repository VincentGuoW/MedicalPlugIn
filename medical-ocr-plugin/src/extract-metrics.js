import { imageToText } from "./image-to-text.js";
import { parseMetrics } from "./parse-metrics.js";

export async function extractMetrics(images,local_map){
    //image ulr -> image file
    //image file -> better quality file
    //if few image-> each image

    // Convert images to an array (like an ArrayList in Java), 
    // where each image's OCR result is stored at its own index. in an array.
    const imageTextArray = await imageToText(images);

    //String to
    const metrics = await parseMetrics(imageTextArray,local_map);
    return metrics;

}