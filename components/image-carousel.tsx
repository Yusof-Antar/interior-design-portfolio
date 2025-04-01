import React from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleScrollLeft = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)); // Loop back to the last image
  };

  const handleScrollRight = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)); // Loop back to the first image
  };

  return (
    <div className="relative aspect-video size-full overflow-hidden">
      {/* Images Container */}
      <div
        className="flex transition-transform duration-300 ease-in-out size-full"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`, // Move images based on current index
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full aspect-video h-full flex-shrink-0 relative size-full"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover size-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Left Button */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 text-gray-600 p-2 rounded-full shadow hover:bg-white transition"
            onClick={handleScrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Right Button */}
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 text-gray-600 p-2 rounded-full shadow hover:bg-white transition"
            onClick={handleScrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
