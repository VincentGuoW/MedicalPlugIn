import Tesseract from 'tesseract.js';
import {extractMetrics} from './extract-metrics.js';
//import {processImage } from './imageProcessing.js';

export function recognizeText(imagePath) {
    //processImage(imagePath);
    return Tesseract.recognize(imagePath, 'eng+chi_sim')
        .then(({ data: { text } }) => {
            console.log(text);
            const metrics = extractMetrics(text);
            return metrics;
        })
        //.then(({ data: { text } }) =>{
        //    console.log(text)
        //})
        .catch(() => null);
}