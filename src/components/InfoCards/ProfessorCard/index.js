// src/components/InfoCards/ProfessorCard/index.js
import React, { useState } from 'react'; // useState import
import styles from './styles.module.css';
// Link 컴포넌트는 더 이상 카드 전체를 감싸지 않으므로, 필요시 내부 링크에만 사용
// import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'; // Docusaurus 유틸리티

export default function ProfessorCard({
  name = "김연구 교수님",
  title = "소프트웨어공학부 총괄 교수",
  photoUrl,
  email = "professor@example.ac.kr",
  office = "공학관 501호",
  education = [
    "OO대학교 컴퓨터공학 박사",
    "XX대학교 컴퓨터공학 석사",
    "XX대학교 컴퓨터공학 학사"
  ],
  researchInterests = [
    "소프트웨어 테스팅 자동화",
    "정형 검증",
    "AI 기반 소프트웨어 공학",
    "임베디드 시스템 분석"
  ],
  labPageLink, // 이 링크를 더블 클릭 시 사용
}) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { withBaseUrl } = useBaseUrlUtils();

  const photoAreaStyle = photoUrl
    ? { backgroundImage: `url(${photoUrl})` }
    : {
        backgroundImage: 'none',
        backgroundColor: 'var(--ifm-color-emphasis-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ifm-color-emphasis-700)'
      };

  const handleSingleClick = () => {
    if (labPageLink) { // 링크가 있을 때만 오버레이 토글
      setIsOverlayVisible(!isOverlayVisible);
    }
  };

  const handleDoubleClick = () => {
    if (labPageLink) {
      // 외부 링크인지 내부 링크인지 간단히 확인
      if (labPageLink.startsWith('http://') || labPageLink.startsWith('https://') || labPageLink.startsWith('//')) {
        window.location.href = labPageLink; // 새 창에서 열고 싶으면 window.open(labPageLink, '_blank');
      } else {
        window.location.href = withBaseUrl(labPageLink); // SPA 라우팅을 원하면 useHistory 사용 고려
      }
    }
  };

  return (
    <div
      className={clsx(
        styles.professorCard,
        labPageLink && styles.clickableCard, // 링크가 있을 때만 clickable 스타일 적용
        isOverlayVisible && styles.overlayActive // 오버레이 활성 상태 클래스
      )}
      onClick={handleSingleClick}
      onDoubleClick={handleDoubleClick}
      role={labPageLink ? "button" : "article"} // 링크가 있으면 버튼 역할, 없으면 일반 article
      tabIndex={labPageLink ? 0 : -1} // 링크가 있으면 키보드 접근 가능
      onKeyDown={(e) => { // Enter 키로도 클릭 효과 (접근성)
        if (labPageLink && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleSingleClick();
        }
      }}
    >
      <div
        className={styles.photoArea}
        style={photoAreaStyle}
        aria-label={`${name} 교수 사진 영역`}
      >
        {!photoUrl && <span className={styles.noPhotoText}>사진 없음</span>}
      </div>

      <div className={styles.infoSection}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
        <div className={styles.contactInfo}>
          {email && <p>📧 <a href={`mailto:${email}`} onClick={(e) => e.stopPropagation()}>{email}</a></p>}
          {office && <p>🏢 {office}</p>}
        </div>

        {education && education.length > 0 && (
          <div className={styles.detailSection}>
            <h4 className={styles.detailTitle}>학력</h4>
            <ul>
              {education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
        )}

        {researchInterests && researchInterests.length > 0 && (
          <div className={styles.detailSection}>
            <h4 className={styles.detailTitle}>주요 연구 분야</h4>
            <ul className={styles.interestsList}>
              {researchInterests.map((interest, index) => (
                <li key={index} className={styles.interestItem}>{interest}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 오버레이 텍스트 (isOverlayVisible 상태에 따라 CSS로 제어됨) */}
      {labPageLink && (
        <div className={styles.hoverLinkTextContainer}>
          <span className={styles.hoverLinkText}>더블 클릭하여 연구실 구성원 확인하기</span>
        </div>
      )}
    </div>
  );
}