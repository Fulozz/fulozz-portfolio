import React from 'react';
import useLanguageSelector from './useLanguageSelector';

const LanguageSwitcher = () => {
  const { selectedLanguage, handleChangeLanguage } = useLanguageSelector();
  const { t } = useTranslation('common');

  return (
    <div>
      <p>{t('hello')}</p>
      <select value={selectedLanguage} onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="pt-BR">Português</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;