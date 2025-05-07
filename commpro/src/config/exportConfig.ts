import { ScreenConfig } from './screens';

export const exportConfig = (screens: ScreenConfig[]) => {
  const config = {
    screens: screens.map(screen => ({
      id: screen.id,
      order: screen.order,
      enabled: screen.enabled
    }))
  };

  // Создаем строку с конфигурацией в формате TypeScript
  const configString = `import { ScreenConfig } from './screens';\n\nexport const productionConfig: { screens: ScreenConfig[] } = ${JSON.stringify(config, null, 2)};`;

  // Создаем Blob с конфигурацией
  const blob = new Blob([configString], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'production-config.ts';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}; 