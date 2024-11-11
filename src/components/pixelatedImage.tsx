"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PixelatedImageProps {
  src: string;
  desiredBlocks?: number;
  alt?: string;
  guessNumber?: number;
}

const PixelatedImage: React.FC<PixelatedImageProps> = ({
  src,
  desiredBlocks = 50,
  alt = "Pixelated Image",
  guessNumber = 1, // Default to 1 quarter visible
}) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string | null>(
    null
  );
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img1 = new window.Image();
    img1.crossOrigin = "anonymous";
    img1.onload = () => {
      const w = img1.width;
      const h = img1.height;
      setImageWidth(w);
      setImageHeight(h);

      // Return the original image if the guessNumber is greater than 4
      if (guessNumber >= 4) {
        setProcessedImageSrc(src);
        return;
      }

      // Describes how many blocks the images should be across
      const sampleSize = Math.max(Math.floor(w / desiredBlocks), 1);

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img1, 0, 0);

      const imageData = ctx.getImageData(0, 0, w, h);
      const pixelArr = imageData.data;

      // Loop over blocks
      for (let y = 0; y < h; y += sampleSize) {
        for (let x = 0; x < w; x += sampleSize) {
          if (shouldPixelate(x, y, w, h, guessNumber)) {
            const p = (x + y * w) * 4;
            const r = pixelArr[p];
            const g = pixelArr[p + 1];
            const b = pixelArr[p + 2];
            const a = pixelArr[p + 3];

            ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
            ctx.fillRect(x, y, sampleSize, sampleSize);
          }
        }
      }

      const dataURL = canvas.toDataURL("image/jpeg");
      setProcessedImageSrc(dataURL);
    };
    img1.src = src;
  }, [src, desiredBlocks, guessNumber]);

  // Determine if a block should be pixelated
  function shouldPixelate(
    x: number,
    y: number,
    w: number,
    h: number,
    visibleQuarters: number
  ): boolean {
    const halfW = w / 2;
    const halfH = h / 2;

    let quarter = 0;

    if (x < halfW && y < halfH) {
      quarter = 1; // Top-left
    } else if (x >= halfW && y < halfH) {
      quarter = 2; // Top-right
    } else if (x < halfW && y >= halfH) {
      quarter = 3; // Bottom-left
    } else {
      quarter = 4; // Bottom-right
    }

    // If the quarter is within the visible quarters, do not pixelate
    if (quarter <= visibleQuarters) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="flex items-center justify-center">
      {processedImageSrc && imageWidth && imageHeight && (
        <Image
          src={processedImageSrc}
          alt={`Processed ${alt}`}
          width={imageWidth}
          height={imageHeight}
          unoptimized
          className="max-h-[50vh] object-contain rounded-lg mx-auto overflow-hidden"
        />
      )}
    </div>
  );
};

export default PixelatedImage;
