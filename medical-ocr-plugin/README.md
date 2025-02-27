1. created package.json torecord all the dependence.
2. node_modules can be download by package.json & package-lock.json
    // npm install （Under medical-ocr-plugin file）（They have package-lock.json and package.json files）
3. picPath into ocr.js ==> return {local map key:value}

input format会是array of images (e.g., png, jpg, jpeg, ...  
应该是bytestream


fun(array of images, map): if parsing failed: add a new key called error and put error message as value if images contains key in map and value is empty: update key else if value is already in the map: add a new key called error and put error message as value return map