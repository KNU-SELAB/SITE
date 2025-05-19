import React, { useState, useEffect } from 'react'; // useEffect 추가 (스크롤 애니메이션용)
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import DesktopHomepageCarousel from '@site/src/components/DesktopHomepageCarousel';
import MobileHomepageCarousel from '@site/src/components/MobileHomepageCarousel'; // 새로 추가
import { useViewportSize } from '@site/src/hooks/useViewportSize';
import ThemeLogo from '@site/src/components/ThemeLogo';

const MOBILE_BREAKPOINT = 768; // 모바일로 간주할 너비 기준 (예: 768px 이하)

const heroStyle = {
  backgroundColor: '#003366',
  color: '#FFFFFF',
  padding: '5rem 0', // 여백 증가
  textAlign: 'center',
};

const heroSubtitleStyle = {
  color: '#E0E0E0',
  fontWeight: '300',
  fontSize: '1.25rem', // 약간 크게
  lineHeight: '1.8', // 줄 간격
  maxWidth: '700px', // 너무 길지 않게
  margin: '0 auto 2.5rem auto', // 버튼과의 간격 확보
};

const buttonPrimaryStyle = {
  backgroundColor: '#2979FF',
  color: '#FFFFFF',
  borderColor: '#2979FF',
  marginRight: '1rem',
  padding: '0.8rem 2rem', // 버튼 크기 증가
  fontSize: '1.05rem',
};
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        {/* h1 태그에 animate-on-scroll 클래스 추가 */}
        <h1 className={clsx('hero__title', styles.heroTitle, 'animate-on-scroll', styles.delay1)}>
          {siteConfig.title}
        </h1>
        {/* 부제목과 버튼에도 순차적 애니메이션을 위해 클래스 추가 가능 */}
        <p className={clsx(styles.heroSubtitle, 'animate-on-scroll', styles.delay2)}>
          정밀한 분석과 혁신적 솔루션으로 신뢰할 수 있는 소프트웨어 품질을 연구합니다.
        </p>
        <div className={clsx(styles.buttons, 'animate-on-scroll', styles.delay3)}>
          <Link
            className={clsx('button button--lg', styles.heroButtonPrimary)}
            to="/docs/intro">
            랩 소개 보기
          </Link>
        </div>
      </div>
    </header>
  );
}

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     // CSS 모듈의 클래스로 스타일 적용
//     <header className={clsx('hero', styles.heroBanner)}> {/* hero--primary 제거 가능 */}
//       <div className="container">
//         <h1 className={clsx('hero__title', styles.heroTitle)}>KNU {siteConfig.title}</h1>
//         <p className={styles.heroSubtitle}> {/* heroSubtitleStyle 대신 클래스 사용 */}
//           소프트웨어 공학이란 주어진 예산과 기간 내에서 고품질 소프트웨어의 개발 및 유지보수를 위한 모든 기법, 도구, 방법론의 총칭으로써 전산학, 경영학, 심리학을 토대로 한 종합 학문입니다.
//           본 연구실에서는 공학적인 접근 방식에 의거하여 효율적이고 신뢰성 높은 소프트웨어를 개발하는데 필요한 소프트웨어 공학 이론과 응용 기술을 연구합니다.
//           특히, 소프트웨어의 유연성(flexibility)을 높이기 위한 프레임워크 연구로 서비스 지향 소프트웨어 구조에 대한 연구와 소프트웨어의 안전성(safety), 보안성(security) 등의 핵심 특성 분석을 위한 소프트웨어의 정형적 모델링 및 분석 기술에 대한 연구를 진행하고 있습니다.
//         </p>
//         <div className={styles.buttons}>
//           <Link
//             className={clsx('button button--lg', styles.heroButtonPrimary)} /* buttonPrimaryStyle 대신 클래스 사용 */
//             to="/docs/intro">
//             랩 소개 보기
//           </Link>
//           {/* 필요시 보조 버튼
//           <Link
//             className={clsx('button button--outline button--lg', styles.heroButtonSecondary)}
//             to="/projects">
//             연구 프로젝트
//           </Link>
//           */}
//         </div>
//       </div>
//     </header>
//   );
// }


// --- 연구 분야 섹션 ---
function ResearchAreaSection() {
  return (
    <section className={clsx(styles.researchAreaSection, styles.sectionPadding, 'animate-on-scroll')}>
      <div className="container">
        <div className={clsx(styles.sectionHeader, 'animate-on-scroll', styles.delay1)}>
          <span className={styles.sectionIcon}>🔬</span>
          <h2 className={styles.sectionTitle}>연구 분야</h2>
        </div>
        <div className={clsx(styles.researchAreaContent, 'animate-on-scroll', styles.delay2)}>
          <p>
            소프트웨어 공학이란 주어진 예산과 기간 내에서 고품질 소프트웨어의 개발 및 유지보수를 위한 모든 기법, 도구, 방법론의 총칭으로써 전산학, 경영학, 심리학을 토대로 한 종합 학문입니다.
            본 연구실에서는 공학적인 접근 방식에 의거하여 효율적이고 신뢰성 높은 소프트웨어를 개발하는데 필요한 소프트웨어 공학 이론과 응용 기술을 연구합니다.
          </p>
          <p>
            특히, 소프트웨어의 유연성(flexibility)을 높이기 위한 프레임워크 연구로 서비스 지향 소프트웨어 구조(Service-Oriented Architecture)에 대한 연구와, 소프트웨어의 안전성(safety), 보안성(security) 등의 핵심 특성 분석을 위한 소프트웨어의 정형적 모델링 및 분석 기술에 대한 연구를 진행하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function RelatedTechnologiesSection() {
  return (
    <section className={clsx(styles.relatedTechnologiesSection, styles.sectionPadding, 'animate-on-scroll')}>
      <div className="container">
        <div className={clsx(styles.sectionHeader, 'animate-on-scroll', styles.delay1)}>
          <span className={styles.sectionIcon}>💡</span>
          <h2 className={styles.sectionTitle}>관련 기술</h2>
        </div>
        <p className={clsx(styles.relatedTechIntro, 'animate-on-scroll', styles.delay2)}>
          소프트웨어 테스팅 연구실은 다양한 소프트웨어공학 기술을 임베디드 소프트웨어 개발에 적용하는 방법을 주로 연구하며, 특히 임베디드 소프트웨어의 VP(Virtual Prototyping) 기반 개발 환경 및 테스팅 기술을 중점적으로 다룹니다.
        </p>
        <div className={clsx('row', styles.techColumnsContainer)}>
          <div className={clsx('col col--6', styles.techColumn, 'animate-on-scroll', styles.delay3)}>
            <div className={styles.techCard}>
              <h3 className={styles.techCardTitle}>
                <span className={styles.cardIcon}>🧪</span> 소프트웨어 테스팅 및 검증
              </h3>
              <p>가상 테스트 환경 생성 기법, 모델 기반 테스트 시나리오 생성 기법, 테스트 자동화 환경, 상호작용 기반 통합 테스트 기술 등을 다루며, 또한 오류 재생성을 위한 Capture & Replay 기술을 연구하고 있습니다.</p>
            </div>
          </div>
          <div className={clsx('col col--6', styles.techColumn, 'animate-on-scroll', styles.delay4)}>
            <div className={styles.techCard}>
              <h3 className={styles.techCardTitle}>
                <span className={styles.cardIcon}>🖥️</span> VP 기반 임베디드 SW 개발 환경
              </h3>
              <p>임베디드 소프트웨어의 조기 수행을 위해 가상 프로토타입 기반의 Software-in-Loop(SiL), Model-in-Loop(MiL) 시뮬레이션 환경 및 테스트 연계 기술 등을 다루며, 적용 도메인으로는 가전 소프트웨어, 자동차 소프트웨어, 분산 임베디드 소프트웨어 등을 대상으로 진행하고 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  const windowWidth = useViewportSize(); // 최상위 레벨에서 호출
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // 컴포넌트가 클라이언트에서 마운트된 후에 isClient를 true로 설정
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
        {/* <ResearchAreaSection /> */}
        {/* <RelatedTechnologiesSection /> */}
      </main>
    </Layout>
  );
}