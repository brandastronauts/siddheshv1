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
import satelliteHardwareImg from '@/assets/placeholders/labs/satellite-hardware.jpg';
import dronePrototypeImg from '@/assets/placeholders/labs/drone-prototype.jpg';
import lunarSimImg from '@/assets/placeholders/labs/lunar-sim.jpg';

// Import publication/patent images
import authorizationLetterImg from '@/assets/placeholders/labs/authorization-letter.jpg';
import conferencePresentationImg from '@/assets/placeholders/labs/conference-presentation.jpg';
import patentUavImg from '@/assets/placeholders/labs/patent-uav.jpg';
import patentRescueImg from '@/assets/placeholders/labs/patent-rescue.jpg';
import patentDeliveryImg from '@/assets/placeholders/labs/patent-delivery.jpg';
import patentMedicalImg from '@/assets/placeholders/labs/patent-medical.jpg';
import patentHealthImg from '@/assets/placeholders/labs/patent-health.jpg';


// Import headshot placeholders
import headshot1 from '@/assets/placeholders/avatars/headshot-1.jpg';
import headshot2 from '@/assets/placeholders/avatars/headshot-2.jpg';
import headshot3 from '@/assets/placeholders/avatars/headshot-3.jpg';

// Import logo placeholder
import logoPlaceholder from '@/assets/placeholders/logos/logo-placeholder.png';

// Import avatar images
import pavanImg from '@/assets/placeholders/avatars/pavan.webp';
import muniraImg from '@/assets/placeholders/avatars/munira.jpg';
import directorPlaceholderImg from '@/assets/placeholders/avatars/director-placeholder.jpg';
import srikarImg from '@/assets/placeholders/avatars/srikar-avr.webp';
import apoorvImg from '@/assets/placeholders/avatars/apoorv-gogar.webp';
import rahulImg from '@/assets/placeholders/avatars/rahul-jindal.webp';
import suchethImg from '@/assets/placeholders/avatars/sucheth-davaluri.webp';
import manishImg from '@/assets/placeholders/avatars/manish-gupta.webp';
import ronakImg from '@/assets/placeholders/avatars/ronak-kumar.webp';
import vinayImg from '@/assets/placeholders/avatars/vinay-donakanti.webp';
import sreedharImg from '@/assets/placeholders/avatars/sreedhar-boddu.webp';
import sandhyaImg from '@/assets/placeholders/avatars/sandhya-rao.webp';
import sreemoyeeImg from '@/assets/placeholders/avatars/sreemoyee-chakraborty.webp';
import shobhaImg from '@/assets/placeholders/avatars/shobha-ediga.webp';
import sruthiImg from '@/assets/placeholders/avatars/sruthi-matta.webp';

// Import visual evidence images
import avionicsRig1 from '@/assets/placeholders/visual-evidence/avionics-rig-1.jpg';
import dataWing1 from '@/assets/placeholders/visual-evidence/data-wing-1.jpg';
import droneFrame1 from '@/assets/placeholders/visual-evidence/drone-frame-1.jpg';
import fieldSoil1 from '@/assets/placeholders/visual-evidence/field-soil-1.jpg';
import labBench1 from '@/assets/placeholders/visual-evidence/lab-bench-1.jpg';
import lunarSim1 from '@/assets/placeholders/visual-evidence/lunar-sim-1.jpg';

// Image path resolver map (supports both .jpg and .webp keys for banners)
const imageMap = {
  // Labs
  '/src/assets/placeholders/labs/space-lab.jpg': spaceLabImg,
  '/src/assets/placeholders/labs/drone-centre.jpg': droneCentreImg,
  '/src/assets/placeholders/labs/terra-utopia.jpg': terraUtopiaImg,
  '/src/assets/placeholders/labs/data-wing.jpg': dataWingImg,
  '/src/assets/placeholders/labs/avionics.jpg': avionicsImg,
  '/src/assets/placeholders/labs/protocol-notes.jpg': protocolNotesImg,
  '/src/assets/placeholders/labs/satellite-hardware.jpg': satelliteHardwareImg,
  '/src/assets/placeholders/labs/drone-prototype.jpg': dronePrototypeImg,
  '/src/assets/placeholders/labs/lunar-sim.jpg': lunarSimImg,
  
  // Avatars
  '/src/assets/placeholders/avatars/pavan.webp': pavanImg,
  '/src/assets/placeholders/avatars/munira.jpg': muniraImg,
  '/src/assets/placeholders/avatars/director-placeholder.jpg': directorPlaceholderImg,
  '/src/assets/placeholders/avatars/advisor-placeholder.jpg': advisorPlaceholder,
  '/src/assets/placeholders/avatars/srikar-avr.webp': srikarImg,
  '/src/assets/placeholders/avatars/apoorv-gogar.webp': apoorvImg,
  '/src/assets/placeholders/avatars/rahul-jindal.webp': rahulImg,
  '/src/assets/placeholders/avatars/sucheth-davaluri.webp': suchethImg,
  '/src/assets/placeholders/avatars/manish-gupta.webp': manishImg,
  '/src/assets/placeholders/avatars/ronak-kumar.webp': ronakImg,
  '/src/assets/placeholders/avatars/vinay-donakanti.webp': vinayImg,
  '/src/assets/placeholders/avatars/sreedhar-boddu.webp': sreedharImg,
  '/src/assets/placeholders/avatars/sandhya-rao.webp': sandhyaImg,
  '/src/assets/placeholders/avatars/sreemoyee-chakraborty.webp': sreemoyeeImg,
  '/src/assets/placeholders/avatars/shobha-ediga.webp': shobhaImg,
  '/src/assets/placeholders/avatars/sruthi-matta.webp': sruthiImg,
  '/src/assets/placeholders/avatars/headshot-1.jpg': headshot1,
  '/src/assets/placeholders/avatars/headshot-2.jpg': headshot2,
  '/src/assets/placeholders/avatars/headshot-3.jpg': headshot3,
  
  // Visual evidence
  '/src/assets/placeholders/visual-evidence/avionics-rig-1.jpg': avionicsRig1,
  '/src/assets/placeholders/visual-evidence/data-wing-1.jpg': dataWing1,
  '/src/assets/placeholders/visual-evidence/drone-frame-1.jpg': droneFrame1,
  '/src/assets/placeholders/visual-evidence/field-soil-1.jpg': fieldSoil1,
  '/src/assets/placeholders/visual-evidence/lab-bench-1.jpg': labBench1,
  '/src/assets/placeholders/visual-evidence/lunar-sim-1.jpg': lunarSim1,
  
  
  
  // Publications & Patents
  '/src/assets/placeholders/labs/authorization-letter.jpg': authorizationLetterImg,
  '/src/assets/placeholders/labs/conference-presentation.jpg': conferencePresentationImg,
  '/src/assets/placeholders/labs/patent-uav.jpg': patentUavImg,
  '/src/assets/placeholders/labs/patent-rescue.jpg': patentRescueImg,
  '/src/assets/placeholders/labs/patent-delivery.jpg': patentDeliveryImg,
  '/src/assets/placeholders/labs/patent-medical.jpg': patentMedicalImg,
  '/src/assets/placeholders/labs/patent-health.jpg': patentHealthImg,
  
  // Logos
  '/src/assets/placeholders/logos/logo-placeholder.png': logoPlaceholder,
  
  // Defaults
  '/src/assets/placeholders/hero-default.jpg': heroDefault,
  '/src/assets/placeholders/card-default.jpg': cardDefault,
};

// Placeholder gradients for different variants
const placeholders = {
  hero: 'linear-gradient(135deg, hsl(240 93% 25% / 0.1) 0%, hsl(195 100% 46% / 0.15) 100%)',
  card: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 13% 91%) 100%)',
  grid: 'linear-gradient(135deg, hsl(195 100% 46% / 0.1) 0%, hsl(209 93% 34% / 0.1) 100%)',
  avatar: 'linear-gradient(135deg, hsl(240 93% 25% / 0.2) 0%, hsl(220 20% 40%) 100%)',
  logo: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 13% 91%) 100%)',
};

const fallbackImages = {
  hero: heroDefault,
  card: cardDefault,
  grid: cardDefault,
  avatar: advisorPlaceholder,
  logo: null,
};

const aspectRatios = {
  '16:9': 'aspect-video',
  '1:1': 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '3:2': 'aspect-[3/2]',
};

const defaultDimensions = {
  '16:9': { width: 640, height: 360 },
  '1:1': { width: 400, height: 400 },
  '4:3': { width: 640, height: 480 },
  '3:2': { width: 600, height: 400 },
};

const resolveImageSrc = (src) => {
  if (!src || src.trim() === '') return null;
  if (imageMap[src]) return imageMap[src];
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

  const resolvedSrc = resolveImageSrc(src);
  const fallbackSrc = fallbackImages[variant] || fallbackImages.card;
  const effectiveSrc = resolvedSrc || fallbackSrc;
  const showPlaceholder = !effectiveSrc || hasError;
  const aspectClass = aspectRatios[aspect] || aspectRatios['16:9'];
  const effectiveAspectClass = variant === 'avatar' ? aspectRatios['1:1'] : aspectClass;
  const dims = variant === 'avatar' ? defaultDimensions['1:1'] : (defaultDimensions[aspect] || defaultDimensions['16:9']);

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
            loading="lazy"
            width={dims.width}
            height={dims.height}
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
              <svg className="w-12 h-12 mx-auto mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
