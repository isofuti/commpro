export interface Slide {
  id: string;
  title: string;
  content: string;
  isEnabled: boolean;
  type: 'intro' | 'info' | 'gallery' | 'analytics' | 'contact';
  backgroundStyle?: {
    gradient?: string;
    image?: string;
  };
  additionalData?: Record<string, any>;
}

export interface SlideConfig {
  slides: Slide[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  analytics?: {
    googleSheetsId: string;
    sheetName: string;
  };
} 