// src/components/ThemeLogo/index.js
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common'; // Docusaurus 테마 Hook
import LogoLight from '@site/static/img/logo_light.svg'; // 라이트 모드 로고
import LogoDark from '@site/static/img/logo_dark.svg';   // 다크 모드 로고
import styles from './styles.module.css'; // 로고 스타일을 위한 CSS 모듈

export default function ThemeLogo({ width = 100, height = "auto" }) { // 기본 크기 props
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  // 현재 테마에 따라 적절한 로고 컴포넌트 선택
  const LogoComponent = isDarkTheme ? LogoDark : LogoLight;

  return (
    <div className={styles.logoContainer}>
      <LogoComponent className={styles.logoSvg} style={{ width, height }} />
    </div>
  );
}