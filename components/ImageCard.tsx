
import React from 'react';

interface ImageCardProps {
  imageUrl: string | null;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl }) => {
  return (
    <div className="w-full aspect-square bg-gray-800/50 rounded-lg shadow-lg flex items-center justify-center overflow-hidden transition-all duration-300">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Generated AI"
          className="w-full h-full object-contain animate-fade-in"
          style={{ animation: 'fadeIn 0.5s ease-in-out' }}
        />
      ) : (
        <div className="text-center text-gray-500 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2">Your generated image will appear here.</p>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ImageCard;
