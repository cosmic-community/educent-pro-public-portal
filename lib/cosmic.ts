import { createBucketClient } from '@cosmicjs/sdk';
import type { 
  SiteSettings, 
  HeroBlock, 
  PanelCard, 
  PricingPlan, 
  Announcement, 
  Feature, 
  Testimonial, 
  FAQ
} from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'site-settings' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    return response.objects[0] as SiteSettings;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch site settings');
  }
}

// Fetch hero block
export async function getHeroBlock(): Promise<HeroBlock | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'hero-block' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    return response.objects[0] as HeroBlock;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch hero block');
  }
}

// Fetch panel cards
export async function getPanelCards(): Promise<PanelCard[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'panel-cards' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    // Sort by priority
    const cards = response.objects as PanelCard[];
    return cards.sort((a, b) => {
      const aPriority = a.metadata?.priority || 999;
      const bPriority = b.metadata?.priority || 999;
      return aPriority - bPriority;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch panel cards');
  }
}

// Fetch pricing plans
export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pricing-plans' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    return response.objects as PricingPlan[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch pricing plans');
  }
}

// Fetch active announcements
export async function getActiveAnnouncements(): Promise<Announcement[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'announcements' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    const today = new Date();
    const announcements = response.objects as Announcement[];
    
    // Filter for active announcements
    return announcements.filter(announcement => {
      const startDate = new Date(announcement.metadata.start_date);
      const endDate = new Date(announcement.metadata.end_date);
      return today >= startDate && today <= endDate;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch announcements');
  }
}

// Fetch features
export async function getFeatures(): Promise<Feature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    return response.objects as Feature[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch features');
  }
}

// Fetch verified testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    const testimonials = response.objects as Testimonial[];
    // Only return verified testimonials
    return testimonials.filter(t => t.metadata?.verified === true);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Fetch FAQs
export async function getFAQs(): Promise<FAQ[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'faqs' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    const faqs = response.objects as FAQ[];
    // Sort by order
    return faqs.sort((a, b) => {
      const aOrder = a.metadata?.order || 999;
      const bOrder = b.metadata?.order || 999;
      return aOrder - bOrder;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch FAQs');
  }
}

// Helper to check if error has status property
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}