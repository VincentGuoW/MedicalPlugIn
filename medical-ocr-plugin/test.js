import { recognizeText } from './src/ocr.js';  // 确保路径正确



const imagePath = "C:/Users/o_ovi/Desktop/MedicalPlugIn/Request/Sample/1.PNG";

recognizeText(imagePath)
    .then(metrics => {
        //Print out result as {"key":"value"}
        console.log('Extracted Metrics:', JSON.stringify(metrics, null, 2)); 
    })
    .catch(err => {
        console.log("Error:", err);
    });