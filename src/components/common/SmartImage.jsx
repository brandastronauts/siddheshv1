import { useState } from 'react';

// Import fallback images
import heroDefault from '@/assets/placeholders/hero-default.jpg';
import cardDefault from '@/assets/placeholders/card-default.jpg';
import advisorPlaceholder from '@/assets/placeholders/avatars/advisor-placeholder.jpg';

// Import lab images
import spaceLabImg from '@/assets/placeholders/labs/space-lab.jpg';
import droneCentreImg from '@/assets/placeholders/labs/drone-centre.jpg';
import terraUtopiaImg from '@/assets/placeholders/labs/terra-utopia.jpg';
import dataWingImg from '@/assets/placeholders/labs/data-wing.jpg';
import avionicsImg from '@/assets/placeholders/labs/avionics.jpg';
import protocolNotesImg from '@/assets/placeholders/labs/protocol-notes.jpg';

// Import avatar images
import pavanImg from '@/assets/placeholders/avatars/pavan.jpg';
import muniraImg from '@/assets/placeholders/avatars/munira.jpg';
import directorPlaceholderImg from '@/assets/placeholders/avatars/director-placeholder.jpg';

// Import visual evidence images
import avionicsRig1 from '@/assets/placeholders/visual-evidence/avionics-rig-1.jpg';
import dataWing1 from '@/assets/placeholders/visual-evidence/data-wing-1.jpg';
import droneFrame1 from '@/assets/placeholders/visual-evidence/drone-frame-1.jpg';
import fieldSoil1 from '@/assets/placeholders/visual-evidence/field-soil-1.jpg';
import labBench1 from '@/assets/placeholders/visual-evidence/lab-bench-1.jpg';
import lunarSim1 from '@/assets/placeholders/visual-evidence/lunar-sim-1.jpg';

// Image path resolver map
const imageMap = {
  // Labs
  '/src/assets/placeholders/labs/space-lab.jpg': spaceLabImg,
  '/src/assets/placeholders/labs/drone-centre.jpg': droneCentreImg,
  '/src/assets/placeholders/labs/terra-utopia.jpg': terraUtopiaImg,
  '/src/assets/placeholders/labs/data-wing.jpg': dataWingImg,
  '/src/assets/placeholders/labs/avionics.jpg': avionicsImg,
  '/src/assets/placeholders/labs/protocol-notes.jpg': protocolNotesImg,
  
  // Avatars
  '/src/assets/placeholders/avatars/pavan.jpg': pavanImg,
  '/src/assets/placeholders/avatars/munira.jpg': muniraImg,
  '/src/assets/placeholders/avatars/director-placeholder.jpg': directorPlaceholderImg,
  '/src/assets/placeholders/avatars/advisor-placeholder.jpg': advisorPlaceholder,
  
  // Visual evidence
  '/src/assets/placeholders/visual-evidence/avionics-rig-1.jpg': avionicsRig1,
  '/src/assets/placeholders/visual-evidence/data-wing-1.jpg': dataWing1,
  '/src/assets/placeholders/visual-evidence/drone-frame-1.jpg': droneFrame1,
  '/src/assets/placeholders/visual-evidence/field-soil-1.jpg': fieldSoil1,
  '/src/assets/placeholders/visual-evidence/lab-bench-1.jpg': labBench1,
  '/src/assets/placeholders/visual-evidence/lunar-sim-1.jpg': lunarSim1,
  
  // Defaults
  '/src/assets/placeholders/hero-default.jpg': heroDefault,
  '/src/assets/placeholders/card-default.jpg': cardDefault,
};

// Placeholder gradients for different variants (used only when no fallback image)
const placeholders = {
  hero: 'linear-gradient(135deg, hsl(240 93% 25% / 0.1) 0%, hsl(195 100% 46% / 0.15) 100%)',
  card: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 13% 91%) 100%)',
  grid: 'linear-gradient(135deg, hsl(195 100% 46% / 0.1) 0%, hsl(209 93% 34% / 0.1) 100%)',
  avatar: 'linear-gradient(135deg, hsl(240 93% 25% / 0.2) 0%, hsl(220 20% 40%) 100%)',
  logo: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 13% 91%) 100%)',
};

// Fallback images by variant
const fallbackImages = {
  hero: heroDefault,
  card: cardDefault,
  grid: cardDefault,
  avatar: advisorPlaceholder,
  logo: null, // Logos should always be provided
};

const aspectRatios = {
  '16:9': 'aspect-video',
  '1:1': 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '3:2': 'aspect-[3/2]',
};

// Resolve image path to actual import
const resolveImageSrc = (src) => {
  if (!src || src.trim() === '') return null;
  // Check if it's a path that needs resolution
  if (imageMap[src]) {
    return imageMap[src];
  }
  // Return as-is (might be an already-imported asset or external URL)
  return src;
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

  // Resolve the source path
  const resolvedSrc = resolveImageSrc(src);
  
  // Determine effective source: use provided src, or fall back to variant-based default
  const fallbackSrc = fallbackImages[variant] || fallbackImages.card;
  const effectiveSrc = resolvedSrc || fallbackSrc;
  
  const showPlaceholder = !effectiveSrc || hasError;
  const aspectClass = aspectRatios[aspect] || aspectRatios['16:9'];

  // For avatars, use square aspect ratio by default
  const effectiveAspectClass = variant === 'avatar' ? aspectRatios['1:1'] : aspectClass;

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <div
        className={`relative ${effectiveAspectClass} rounded-lg overflow-hidden bg-surface`}
        style={showPlaceholder ? { background: placeholders[variant] || placeholders.card } : undefined}
      >
        {!showPlaceholder && (
          <img
            src={effectiveSrc}
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
