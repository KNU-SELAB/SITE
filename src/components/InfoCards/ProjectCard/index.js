import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function ProjectCard({
  projectName = "AI 기반 테스트 케이스 자동 생성 시스템 개발",
  status = "진행중", // "완료", "제안중" 등
  period = "2024.03 ~ 2026.02",
  description = "머신러닝 모델을 활용하여 소프트웨어 변경 사항에 따라 최적의 테스트 케이스를 자동으로 생성하고 우선순위를 부여하는 시스템을 개발합니다.",
  fundingSource, // 예: "정보통신기획평가원(IITP)"
  technologies = ["Python", "TensorFlow", "React", "Docker"],
  imageUrl, // 예: "/img/projects/project_ai_testing.jpg"
  projectLink, // 예: "/docs/projects/ai-testing"
}) {
  const getStatusClass = (currentStatus) => {
    if (currentStatus === "진행중") return styles.statusOngoing;
    if (currentStatus === "완료") return styles.statusCompleted;
    return styles.statusDefault;
  };

  return (
    <div className={styles.projectCard}>
      {imageUrl && (
        <div className={styles.projectImageContainer}>
          <img src={imageUrl} alt={`${projectName} 이미지`} className={styles.projectImage} />
        </div>
      )}
      <div className={styles.projectContent}>
        <div className={styles.header}>
          <h3 className={styles.projectName}>{projectName}</h3>
          {status && <span className={`${styles.statusBadge} ${getStatusClass(status)}`}>{status}</span>}
        </div>
        <p className={styles.period}>{period}</p>
        <p className={styles.description}>{description}</p>

        {fundingSource && (
          <p className={styles.funding}><strong>지원 기관:</strong> {fundingSource}</p>
        )}

        {technologies && technologies.length > 0 && (
          <div className={styles.techStack}>
            <strong>주요 기술:</strong>
            <div className={styles.tags}>
              {technologies.map((tech, index) => (
                <span key={index} className={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>
        )}
        {projectLink && (
          <Link to={projectLink} className={`button button--outline button--sm button--primary ${styles.projectLinkButton}`}>
            과제 상세 보기
          </Link>
        )}
      </div>
    </div>
  );
}