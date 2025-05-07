export interface ScreenConfig {
  id: string;
  title: string;
  enabled: boolean;
  order: number;
}

export const screensConfig: ScreenConfig[] = [
  {
    id: 'title',
    title: 'Титульный экран',
    enabled: true,
    order: 1
  },
  {
    id: 'analytics',
    title: 'Аналитика',
    enabled: true,
    order: 2
  },
  {
    id: 'statistics',
    title: 'Статистика',
    enabled: true,
    order: 3
  },
  {
    id: 'situation',
    title: 'Ситуация в сети',
    enabled: true,
    order: 4
  },
  {
    id: 'painPoints',
    title: 'Боли клиентов',
    enabled: true,
    order: 5
  },
  {
    id: 'services',
    title: 'Услуги',
    enabled: true,
    order: 6
  },
  {
    id: 'roadmap',
    title: 'Дорожная карта',
    enabled: true,
    order: 7
  },
  {
    id: 'benefits',
    title: 'Преимущества',
    enabled: true,
    order: 8
  }
]; 