export interface ProgramItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface TrainerItem {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  isPopular?: boolean;
  features: {
    included: string[];
    excluded: string[];
  };
  ctaText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}
