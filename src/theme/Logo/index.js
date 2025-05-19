// src/theme/Logo/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'; // baseUrl 처리를 위해 유지
import { useThemeConfig } from '@docusaurus/theme-common'; // 테마 설정을 가져오기 위함

export default function Logo(props) {
  const { className: navbarBrandClassName, style: navbarBrandStyle } = props;
  const { navbar: { title: navbarTitleFromConfig, logo } } = useThemeConfig();
  const withBaseUrl = useBaseUrl;
  // const { colorMode } = useColorMode(); // 테마별 다른 SVG 파일 선택 로직이 없어졌으므로 제거 가능

  // 로고로 표시할 텍스트 결정: logo.text가 있으면 사용, 없으면 navbar.title 사용
  const logoTextToShow = logo?.text || navbarTitleFromConfig || '사이트 제목'; // 최종 fallback

  // 로고 설정이 아예 없거나, 표시할 텍스트가 없다면 null 반환 (또는 기본 타이틀)
  if (!logo && !navbarTitleFromConfig) {
    return null;
  }
  // 만약 logo 객체는 있는데 text 필드가 없고 navbarTitleFromConfig도 없다면,
  // 그리고 logo.alt만 있다면 그것을 표시할 수도 있습니다.
  // 여기서는 logo.text 또는 navbarTitleFromConfig 우선
  if (!logoTextToShow) {
      return null; // 혹은 logo.alt 를 표시하는 로직
  }


  const logoLink = logo?.href || '/'; // Config에 href가 없으면 홈페이지로

  return (
    <Link
      to={logoLink.startsWith('http') ? logoLink : withBaseUrl(logoLink)}
      {...(logo?.target && { target: logo.target })}
      className={navbarBrandClassName} // Docusaurus에서 'navbar__brand' 클래스를 전달함
      style={navbarBrandStyle}
      aria-label={logo?.alt || logoTextToShow} // 접근성을 위한 레이블
    >
      {/* 이미지 대신 텍스트를 렌더링합니다. */}
      {/* Docusaurus 기본 .navbar__title 클래스를 사용하거나 커스텀 클래스 사용 가능 */}
      <span className="stlab-logo">{logoTextToShow}</span>
    </Link>
  );
}