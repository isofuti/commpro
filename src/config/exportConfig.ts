import { screensConfig, ScreenConfig } from './screens';

export const exportConfig = (enabledScreens: ScreenConfig[]) => {
  const config = {
    screens: enabledScreens.map(screen => ({
      id: screen.id,
      order: screen.order
    }))
  };

  // Создаем строку с конфигурацией
  const configString = `export const productionConfig = ${JSON.stringify(config, null, 2)};`;

  // Создаем Blob с конфигурацией
  const blob = new Blob([configString], { type: 'text/javascript' });
  
  // Создаем ссылку для скачивания
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'production-config.ts';
  
  // Добавляем ссылку на страницу и эмулируем клик
  document.body.appendChild(link);
  link.click();
  
  // Очищаем
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}; 