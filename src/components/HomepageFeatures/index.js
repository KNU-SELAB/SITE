import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '첨단 소프트웨어 공학 연구',
    svg: { type: 'advancedSE', icon: '🔬' }, // 예시 아이콘: 현미경, 고급 분석
    description: (
      <>
        효율적이고 신뢰성 높은 소프트웨어 개발을 위한 공학적 이론과 응용 기술을 연구합니다.
        서비스 지향 아키텍처(SOA)를 통한 유연성 증대, 정형 모델링 및 분석을 통한 안전성과 보안성 확보에 집중합니다.
      </>
    ),
    detailsLink: '/docs/research/advanced-software-engineering', // 상세 페이지 링크 (예시)
  },
  {
    title: '임베디드 소프트웨어 테스팅 및 검증',
    svg: { type: 'embeddedTest', icon: '⚙️' }, // 예시 아이콘: 톱니바퀴, 정밀 테스팅
    description: (
      <>
        다양한 소프트웨어 공학 기술을 임베디드 시스템에 적용하여 품질을 극대화합니다.
        가상 테스트 환경, 모델 기반 테스트 생성, 테스트 자동화, 오류 재현(Capture & Replay) 기술을 심층 연구합니다.
      </>
    ),
    detailsLink: '/docs/research/embedded-testing-verification', // 상세 페이지 링크 (예시)
  },
  {
    title: 'VP 기반 임베디드 개발 환경 및 응용',
    svg: { type: 'embeddedVP', icon: '💡' }, // 예시 아이콘: 전구, 혁신적 개발 환경
    description: (
      <>
        가상 프로토타입(VP)을 활용한 SiL/MiL 시뮬레이션으로 임베디드 소프트웨어의 조기 검증 및 개발 효율성을 높입니다.
        가전, 자동차, 분산 임베디드 시스템 등 다양한 도메인에 적용 가능한 개발 및 테스트 연계 기술을 연구합니다.
      </>
    ),
    detailsLink: '/docs/research/vp-based-embedded-development', // 상세 페이지 링크 (예시)
  },
];

// SVG 아이콘을 직접 사용하거나 이미지 파일을 사용할 수 있습니다.
// 아래는 텍스트 아이콘을 사용한 예시입니다. 실제 프로젝트에서는 SVG를 권장합니다.
function FeatureIcon({ icon, type }) {
  // 타입에 따라 다른 스타일을 적용할 수 있도록 클래스네임에 추가
  return <div className={clsx(styles.featureIcon, styles[`iconType${type.charAt(0).toUpperCase() + type.slice(1)}`])}>{icon}</div>;
}


function Feature({ title, svg, description, detailsLink }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <FeatureIcon icon={svg.icon} type={svg.type} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        {detailsLink && (
          <div className={styles.featureLinkWrapper}>
            <a href={detailsLink} className={styles.featureLink}>
              더 알아보기 &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center margin-bottom--lg">
            <h2 className={styles.sectionTitle}>주요 연구 분야</h2> {/* 제목 수정 */}
            <p className={styles.sectionSubtitle}>
              본 연구실은 소프트웨어의 신뢰성과 효율성을 높이기 위한 혁신적인 이론과 기술을 탐구하며,
              특히 다음과 같은 핵심 분야에 집중하고 있습니다.
            </p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}