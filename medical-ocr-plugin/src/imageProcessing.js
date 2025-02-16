import cv from 'opencv4nodejs';

export function processImage(imagePath){
    const image = cv.imread(imagePath);
    // 转换为灰度图像
    const gray = image.bgrToGray();

    // 去噪
    const denoised = gray.medianBlur(5);

    // 二值化
    const binary = denoised.threshold(0, 255, cv.THRESH_BINARY_INV + cv.THRESH_OTSU);

    cv.imwrite(imagePath, binary);
}