import Tesseract from 'tesseract.js';
import { parseMetrics } from './parse-metrics.js';

export function imageToText(images,local_map) {

    return Tesseract.recognize(images, 'eng+chi_sim')
        .then(({ data: { text } }) => {
            //Test
            throw new Error("Forcing error");
            //Test
            return text;


        })
        .catch(() => {
            //If Image error, add error key;
            let text = "";
            return text;
        });
}