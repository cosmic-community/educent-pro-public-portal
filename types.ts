// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Site Settings
export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_title: string;
    tagline: string;
    primary_gradient_start: string;
    primary_gradient_end: string;
    contact_email: string;
    social_links?: Array<{
      platform: string;
      url: string;
    }>;
    meta_description: string;
    seo_image?: {
      url: string;
      imgix_url: string;
    };
    disable_cosmic_branding?: boolean;
    canonical_domain: string;
    require_publisher_approval?: boolean;
  };
}

// Hero Block
export interface HeroBlock extends CosmicObject {
  type: 'hero-block';
  metadata: {
    headline: string;
    subline: string;
    primary_cta_label: string;
    primary_cta_type?: {
      key: string;
      value: string;
    };
    primary_cta_target?: string;
    secondary_cta_label: string;
    secondary_cta_type?: {
      key: string;
      value: string;
    };
    secondary_cta_url?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    hero_image_alt?: string;
    trust_logos?: Array<{
      url: string;
      imgix_url: string;
    }> | null;
    trust_logo_licenses?: any[];
  };
}

// Panel Cards
export interface PanelCard extends CosmicObject {
  type: 'panel-cards';
  metadata: {
    role?: {
      key: string;
      value: string;
    };
    icon?: {
      url: string;
      imgix_url: string;
    };
    icon_alt?: string;
    role_color?: string;
    card_title: string;
    card_subtitle: string;
    login_action?: {
      key: string;
      value: string;
    };
    priority?: number;
  };
}

// Pricing Plans
export interface PricingPlan extends CosmicObject {
  type: 'pricing-plans';
  metadata: {
    plan_name: string;
    monthly_below_700: number;
    monthly_above_1200: number;
    yearly_below_700: number;
    yearly_above_1200: number;
    permanent_below_700: number;
    permanent_above_1200: number;
    effective_date?: string;
    requires_admin_ack?: boolean;
    change_reason?: string;
  };
}

// Announcements
export interface Announcement extends CosmicObject {
  type: 'announcements';
  metadata: {
    announcement_title: string;
    body: string;
    start_date: string;
    end_date: string;
    display_target?: {
      key: string;
      value: string;
    };
  };
}

// Features
export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    feature_title: string;
    summary: string;
    body: string;
    feature_image?: {
      url: string;
      imgix_url: string;
    };
    image_alt?: string;
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    author_name: string;
    author_role: string;
    quote: string;
    institute_name: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    logo_alt?: string;
    verified?: boolean;
  };
}

// FAQs
export interface FAQ extends CosmicObject {
  type: 'faqs';
  metadata: {
    question: string;
    answer: string;
    category?: {
      key: string;
      value: string;
    };
    order?: number;
  };
}

// Docs/Resources
export interface DocResource extends CosmicObject {
  type: 'docs-resources';
  metadata: {
    doc_title: string;
    body: string;
    file?: {
      url: string;
      imgix_url: string;
    };
    version?: string;
    tags?: any;
  };
}

// Helper type guard for error handling
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}