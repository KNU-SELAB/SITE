import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

export default function TopicCard({
  icon = "📄",
  topicTitle = "주제 제목 없음",
  summary = "여기에 주제에 대한 요약 내용이 표시됩니다. 이 내용은 마크다운 파일의 첫 번째 H1과 구분선(---) 사이에서 추출된 것으로 가정합니다.",
  pageLink,
}) {
  const { withBaseUrl } = useBaseUrlUtils();
  const summaryContent = summary;

  return (
    <div className={styles.topicCard}>
      <div className={styles.topicHeader}>
        {typeof icon === 'string' ? <span className={styles.topicIcon}>{icon}</span> : icon}
        {pageLink ? (
          <Link
            to={pageLink.startsWith('http') ? pageLink : withBaseUrl(pageLink)}
            className={clsx(styles.topicTitleLink, 'animatedLink')}
          >
            <h2 className={styles.topicTitleH2}>{topicTitle}</h2>
          </Link>
        ) : (
          <h2 className={styles.topicTitleH2}>{topicTitle}</h2>
        )}
      </div>

      {summary && (
        <div className={styles.topicSummary}>
          {summaryContent}
        </div>
      )}
    </div>
  );
}