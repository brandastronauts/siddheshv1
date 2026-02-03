import { useState } from 'react';

// Placeholder gradients for different variants
const placeholders = {
  hero: 'linear-gradient(135deg, hsl(240 93% 25% / 0.1) 0%, hsl(195 100% 46% / 0.15) 100%)',
  card: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 13% 91%) 100%)',
  grid: 'linear-gradient(135deg, hsl(195 100% 46% / 0.1) 0%, hsl(209 93% 34% / 0.1) 100%)',
};

const aspectRatios = {
  '16:9': 'aspect-video',
  '1:1': 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '3:2': 'aspect-[3/2]',
};

const SmartImage = ({
  src,
  alt = '',
  caption,
  aspect = '16:9',
  variant = 'card',
  privacyBlur = false,
  className = '',
  imageNote,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const showPlaceholder = !src || hasError;
  const aspectClass = aspectRatios[aspect] || aspectRatios['16:9'];

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <div
        className={`relative ${aspectClass} rounded-lg overflow-hidden bg-surface`}
        style={showPlaceholder ? { background: placeholders[variant] } : undefined}
      >
        {!showPlaceholder && (
          <img
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${privacyBlur ? 'privacy-blur' : ''}`}
          />
        )}
        
        {showPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <svg
                className="w-12 h-12 mx-auto mb-2 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        )}
        
        {privacyBlur && !showPlaceholder && (
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/20 to-transparent pointer-events-none" />
        )}
      </div>
      
      {(caption || imageNote) && (
        <figcaption className="mt-3 text-sm text-muted-foreground text-center">
          {caption}
          {imageNote && (
            <span className="block text-xs italic mt-1">{imageNote}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default SmartImage;
