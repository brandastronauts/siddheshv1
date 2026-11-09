import booksBanner from '@/assets/banners/publications-doi.webp'
import collaborateBanner from '@/assets/banners/collaborate-network.webp'
import contactBanner from '@/assets/banners/contact-institutional.webp'
import downloadsBanner from '@/assets/banners/downloads-archive.webp'
import governanceBanner from '@/assets/banners/governance-oversight.webp'
import homeBanner from '@/assets/banners/home-precision.webp'
import instituteBanner from '@/assets/banners/institute-stark.webp'
import methodologyBanner from '@/assets/banners/methodology-framework.webp'
import newsroomBanner from '@/assets/banners/newsroom-press.webp'
import patentsBanner from '@/assets/banners/technical-brief-aero.webp'
import presentationBanner from '@/assets/banners/presentation-conference.webp'
import proceedingsBanner from '@/assets/banners/proceedings-auditorium.webp'
import publicationsBanner from '@/assets/banners/publications-doi.webp'
import staffBanner from '@/assets/placeholders/hero-default.jpg'
import teamBanner from '@/assets/banners/governance-oversight.webp'
import amiLogo from '@/assets/brand/ami-logo.png'
import cambridgeLogo from '@/assets/brand/cambridge-logo.png'
import iitHyderabadLogo from '@/assets/brand/iit-hyderabad-logo.png'
import inSpaceLogo from '@/assets/brand/inspace-logo.png'
import takeMe2SpaceLogo from '@/assets/brand/takeme2space-logo.png'
import zenodoLogo from '@/assets/brand/zenodo-logo.png'
import raunakPortrait from '@/assets/placeholders/avatars/raunak-sharma.webp'
import achievementWithoutSight from '@/assets/publications/achievement-without-sight.jpg'
import amiCongress from '@/assets/publications/ami-congress-2026.jpg'
import biophiliaDataset from '@/assets/publications/biophilia-drawing-dataset.jpg'
import biophiliaPreregistration from '@/assets/publications/biophilia-drawing-preregistration.jpg'
import crocodilianSkull from '@/assets/publications/crocodilian-skull-kutch-taphonomy.jpg'
import crossStudyDataset from '@/assets/publications/cross-study-dataset.jpg'
import deepTimePalaeontology from '@/assets/publications/deep-time-palaeontology.jpg'
import meerkatDataset from '@/assets/publications/meerkat-bio-leadership-dataset.jpg'
import meerkatPaper from '@/assets/publications/meerkat-bio-leadership.jpg'
import tedxPaper from '@/assets/publications/tedx-hyderabad-orienting-question.jpg'

const staticAssets = {
  '/src/assets/banners/books.jpg': booksBanner,
  '/src/assets/banners/collaborate-network.jpg': collaborateBanner,
  '/src/assets/banners/contact-institutional.jpg': contactBanner,
  '/src/assets/banners/downloads-archive.jpg': downloadsBanner,
  '/src/assets/banners/governance-oversight.jpg': governanceBanner,
  '/src/assets/banners/home-precision.jpg': homeBanner,
  '/src/assets/banners/institute-stark.jpg': instituteBanner,
  '/src/assets/banners/methodology-framework.jpg': methodologyBanner,
  '/src/assets/banners/methodology-framework.webp': methodologyBanner,
  '/src/assets/banners/newsroom-press.jpg': newsroomBanner,
  '/src/assets/banners/patents.jpg': patentsBanner,
  '/src/assets/banners/presentations/marrakesh-human-capital.jpg': presentationBanner,
  '/src/assets/banners/proceedings/oslo-2026.jpg': proceedingsBanner,
  '/src/assets/banners/publications-doi.jpg': publicationsBanner,
  '/src/assets/banners/publications-doi.webp': publicationsBanner,
  '/src/assets/banners/staff-access.jpg': staffBanner,
  '/src/assets/banners/team.jpg': teamBanner,
  '/src/assets/brand/ami-logo.png': amiLogo,
  '/src/assets/brand/cambridge-logo.png': cambridgeLogo,
  '/src/assets/brand/iit-hyderabad-logo.png': iitHyderabadLogo,
  '/src/assets/brand/inspace-logo.png': inSpaceLogo,
  '/src/assets/brand/takeme2space-logo.png': takeMe2SpaceLogo,
  '/src/assets/brand/zenodo-logo.svg': zenodoLogo,
  '/src/assets/placeholders/avatars/raunak-sharma.webp': raunakPortrait,
  '/src/assets/publications/achievement-without-sight.jpg': achievementWithoutSight,
  '/src/assets/publications/ami-congress-2026.jpg': amiCongress,
  '/src/assets/publications/biophilia-drawing-dataset.jpg': biophiliaDataset,
  '/src/assets/publications/biophilia-drawing-preregistration.jpg': biophiliaPreregistration,
  '/src/assets/publications/crocodilian-skull-kutch-taphonomy.jpg': crocodilianSkull,
  '/src/assets/publications/cross-study-dataset.jpg': crossStudyDataset,
  '/src/assets/publications/deep-time-palaeontology.jpg': deepTimePalaeontology,
  '/src/assets/publications/meerkat-bio-leadership-dataset.jpg': meerkatDataset,
  '/src/assets/publications/meerkat-bio-leadership.jpg': meerkatPaper,
  '/src/assets/publications/tedx-hyderabad-orienting-question.jpg': tedxPaper,
}

const assetUrl = (asset) => {
  if (typeof asset === 'string') return asset
  return asset && typeof asset.src === 'string' ? asset.src : ''
}

/** Resolve Lovable source-asset paths to Next.js static imports while preserving CDN URLs. */
export function resolveAssetUrl(value) {
  if (typeof value !== 'string') return ''
  const source = value.trim()
  if (!source) return ''

  if (source.startsWith('https://') || source.startsWith('http://') || source.startsWith('data:')) return source
  if (source.startsWith('/__l5e/assets-v1/')) return `https://siddheshv1.lovable.app${source}`

  return assetUrl(staticAssets[source]) || source
}

export default resolveAssetUrl
