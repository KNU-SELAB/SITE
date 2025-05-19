import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

export default function TopicCard({
  icon = "📄", // 기본 아이콘
  topicTitle = "주제 제목 없음",
  summary = "여기에 주제에 대한 요약 내용이 표시됩니다. 이 내용은 마크다운 파일의 첫 번째 H1과 구분선(---) 사이에서 추출된 것으로 가정합니다.",
  pageLink, // 예: "/docs/my-topic-doc"
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
            className={clsx(styles.topicTitleLink, 'animatedLink')} // 전역 애니메이션 링크 클래스 적용
          >
            <h2 className={styles.topicTitleH2}>{topicTitle}</h2>
          </Link>
        ) : (
          <h2 className={styles.topicTitleH2}>{topicTitle}</h2>
        )}
      </div>

      {/* 본문 내용 (summary) */}
      {summary && (
        <div className={styles.topicSummary}>
          {/* summary가 단순 텍스트일 경우 p태그로 감싸거나,
              HTML 문자열일 경우 dangerouslySetInnerHTML 사용 (주의 필요),
              Markdown 문자열일 경우 react-markdown 등 라이브러리 사용 필요.
              여기서는 단순 텍스트 또는 미리 처리된 HTML로 가정하고 div에 넣습니다.
              가장 간단하게는 CSS에서 white-space: pre-line; 를 사용하여 줄바꿈을 인식하게 할 수 있습니다.
          */}
          {summaryContent}
        </div>
      )}
      {/* "더 알아보기" 버튼은 제목이 링크 역할을 하므로 제거됨 */}
    </div>
  );
}