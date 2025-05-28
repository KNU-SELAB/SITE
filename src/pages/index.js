import React, { useState, useEffect } from 'react'; // useEffect 추가 (스크롤 애니메이션용)
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import DesktopHomepageCarousel from '@site/src/components/DesktopHomepageCarousel';
import MobileHomepageCarousel from '@site/src/components/MobileHomepageCarousel';
import { useViewportSize } from '@site/src/hooks/useViewportSize';

const MOBILE_BREAKPOINT = 768; // 모바일로 간주할 너비 기준

const heroStyle = {
  backgroundColor: '#003366',
  color: '#FFFFFF',
  padding: '5rem 0',
  textAlign: 'center',
};

const heroSubtitleStyle = {
  color: '#E0E0E0',
  fontWeight: '300',
  fontSize: '1.25rem',
  lineHeight: '1.8',
  maxWidth: '700px',
  margin: '0 auto 2.5rem auto',
};

const buttonPrimaryStyle = {
  backgroundColor: '#2979FF',
  color: '#FFFFFF',
  borderColor: '#2979FF',
  marginRight: '1rem',
  padding: '0.8rem 2rem',
  fontSize: '1.05rem',
};
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle, 'animate-on-scroll', styles.delay1)}>
          {siteConfig.title}
        </h1>
        <p className={clsx(styles.heroSubtitle, 'animate-on-scroll', styles.delay2)}>
          경북대학교 소프트웨어 테스팅 연구실입니다.
        </p>
        <div className={clsx(styles.buttons, 'animate-on-scroll', styles.delay3)}>
          <Link
            className={clsx('button button--lg', styles.heroButtonPrimary)}
            to="/STLAB">
            랩 소개 보기
          </Link>
        </div>
      </div>
    </header>
  );
}
// --- 스크롤 애니메이션을 위한 간단한 JS 로직 (useEffect 활용) ---
function useSimpleScrollAnimation() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const targets = document.querySelectorAll('.animate-on-scroll');
    if (targets.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
        }
      });
    }, {
      threshold: 0.1,
    });

    targets.forEach(target => {
      observer.observe(target);
    });

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  useSimpleScrollAnimation();
  const windowWidth = useViewportSize();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const isMobile = windowWidth !== undefined ? windowWidth <= MOBILE_BREAKPOINT : false; // 초기값 false
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="경북대학교 소프트웨어 테스팅 연구실입니다.">
      <HomepageHeader />
      <main>
        {isClient? (isMobile ? <MobileHomepageCarousel /> : <DesktopHomepageCarousel />) : (<div style={{ minHeight: '400px' }} />)}
      </main>
    </Layout>
  );
}