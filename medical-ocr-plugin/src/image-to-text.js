import Tesseract from 'tesseract.js';

export function imageToText(images) {

    const imageList = Array.isArray(images) ? images : [images];

    return Promise.all(
        imageList.map(image =>
            Tesseract.recognize(image, 'eng+chi_sim')
                .then(({ data: { text } })=>{
                    return text;
                })
                .catch(()=>{
                    //If Image error, add error key;
                    let text = "";
                    return text;
                })
        )
    );

}