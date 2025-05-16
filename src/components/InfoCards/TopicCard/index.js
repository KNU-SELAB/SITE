import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function TopicCard({
  topicTitle = "소프트웨어 테스팅이란?",
  icon = "🎯", // 예시 아이콘 (이모지 또는 SVG 컴포넌트)
  introduction = "소프트웨어 테스팅은 개발된 응용 프로그램 또는 시스템이 사용자의 요구사항을 만족하는지 확인하고, 예상치 못한 결함을 찾아내어 수정하는 과정을 의미합니다. 이는 소프트웨어 품질 보증의 핵심 활동입니다.",
  keyAspects = [
    { aspect: "품질 향상", detail: "잠재적 오류를 사전에 발견하여 소프트웨어의 신뢰성과 안정성을 높입니다." },
    { aspect: "비용 절감", detail: "개발 초기 단계에서 결함을 수정함으로써, 출시 후 발생할 수 있는 더 큰 비용을 예방합니다." },
    { aspect: "사용자 만족도 증대", detail: "사용자에게 고품질의 제품을 제공하여 긍정적인 경험을 선사합니다." }
  ],
  relatedLink, // 예: "/docs/software-testing/introduction"
}) {
  return (
    <div className={styles.topicCard}>
      <div className={styles.topicHeader}>
        {typeof icon === 'string' ? <span className={styles.topicIcon}>{icon}</span> : icon}
        <h3 className={styles.topicTitle}>{topicTitle}</h3>
      </div>
      <p className={styles.introduction}>{introduction}</p>

      {keyAspects && keyAspects.length > 0 && (
        <div className={styles.aspectsSection}>
          <h4 className={styles.aspectsTitle}>핵심 측면</h4>
          <ul className={styles.aspectsList}>
            {keyAspects.map((item, index) => (
              <li key={index} className={styles.aspectItem}>
                <strong>{item.aspect}:</strong> {item.detail}
              </li>
            ))}
          </ul>
        </div>
      )}
      {relatedLink && (
         <Link to={relatedLink} className={`button button--sm button--secondary ${styles.topicLinkButton}`}>
            자세히 알아보기
          </Link>
      )}
    </div>
  );
}