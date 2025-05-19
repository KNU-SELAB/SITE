// src/components/InfoCards/ProjectCard/index.js
import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link'; // 제목 링크를 위해 Docusaurus Link 사용

export default function ProjectCard({
  projectName = "제목 없는 과제",
  status = "Default",
  period = "기간 정보 없음",
  description = "과제에 대한 설명이 여기에 표시됩니다.",
  fundingSources = [],
  technologies = [],
  imageUrl,
  projectLink, // 제목에 사용될 링크
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  const cardStyleWithImage = (imageUrl && typeof imageUrl === 'string' && imageUrl.trim() !== '')
    ? { backgroundImage: `url(${withBaseUrl(imageUrl)})` }
    : {};

  const statusClassName = styles[`status${status}`] || styles.statusDefault;

  return (
    <div className={clsx(styles.projectCard)} style={cardStyleWithImage}>
      <div className={styles.contentOverlay}>
        <div className={styles.header} >
          {projectName && (
            projectLink ? (
              <Link // 제목을 Docusaurus Link로 변경
                to={projectLink.startsWith('http') ? projectLink : withBaseUrl(projectLink)}
                className={styles.projectNameLink} // 링크 스타일 적용
              >
                <h2 className={styles.projectNameH2}>{projectName}</h2> {/* 스타일 일관성을 위해 내부 h2에 별도 클래스 또는 태그 직접 사용 */}
              </Link>
            ) : (
              <h2 className={styles.projectNameH2}>{projectName}</h2>
            )
          )}
          {status && <span className={clsx(styles.statusBadge, statusClassName)}>{status}</span>}
        </div>

        {period && <p className={styles.period}>{period}</p>}
        {description && <p className={styles.description}>{description}</p>}

        {fundingSources && fundingSources.length > 0 && (
          <p className={styles.funding}>
            <strong>지원 기관:</strong>{' '}
            {fundingSources.map((source, index) => (
              <React.Fragment key={source.name}>
                <a
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="animatedLink"
                >
                  {source.name}
                </a>
                {index < fundingSources.length - 1 && ', '}
              </React.Fragment>
            ))}
          </p>
        )}

        {technologies && technologies.length > 0 && (
          <div className={styles.techStack}>
            <strong className={styles.techStackTitle}>주요 기술:</strong>
            <div className={styles.tags}>
              {technologies.map((tech, index) => (
                <span key={index} className={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}