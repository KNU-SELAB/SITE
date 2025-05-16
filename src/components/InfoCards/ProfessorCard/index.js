import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Docusaurus Link 컴포넌트

export default function ProfessorCard({
  name = "김철수 교수님",
  title = "컴퓨터공학부 교수",
  photoUrl = "https://via.placeholder.com/150?text=Photo", // 실제 이미지 경로로 교체
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
  labPageLink, // 연구실 소개 페이지 링크 (선택적)
}) {
  return (
    <div className={styles.professorCard}>
      <div className={styles.photoSection}>
        <img src={photoUrl} alt={`${name} 교수 사진`} className={styles.photo} />
      </div>
      <div className={styles.infoSection}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
        <div className={styles.contactInfo}>
          {email && <p>📧 <a href={`mailto:${email}`}>{email}</a></p>}
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
        {labPageLink && (
          <Link to={labPageLink} className={`button button--primary button--sm ${styles.labLinkButton}`}>
            연구실 자세히 보기
          </Link>
        )}
      </div>
    </div>
  );
}