import Tesseract from 'tesseract.js';
import { parseMetrics } from './parse-metrics.js';

export function imageToText(images,local_map) {

    return Tesseract.recognize(images, 'eng+chi_sim')
        .then(({ data: { text } }) => {
            //Test
            //throw new Error("Forcing error");
            //Test

            console.log(text);
            const metrics = parseMetrics(text,local_map);
            return metrics;
        })
        .catch(() => {
            //If Image error, add error key;
            local_map['error']="error xxx"
            return local_map;
        });
}