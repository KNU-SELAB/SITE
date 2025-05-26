import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
// 공식 문서에 따라 @docusaurus/useGlobalData 에서 필요한 Hook을 직접 import 합니다.
import { usePluginData, useAllPluginInstancesData } from '@docusaurus/useGlobalData';

const MAX_POSTS_TO_DISPLAY = 5;
const BLOG_PLUGIN_NAME = 'docusaurus-plugin-content-blog'; // Docusaurus 공식 블로그 플러그인 이름
const TARGET_BLOG_ID = 'Course'; // 사용자가 설정한 블로그 인스턴스 ID

export default function CourseListCard({
  cardTitle = `최신 ${TARGET_BLOG_ID} 게시물`, // 카드 제목에 ID 반영 (선택적)
  icon = "📚",
  boardLink, // 카드 제목 클릭 시 이동할 전체 게시판 링크
  noPostsMessage = `현재 '${TARGET_BLOG_ID}' 관련 게시물이 없습니다.`,
  seeMoreLink, // 예: 실제 블로그 인스턴스의 routeBasePath (예: '/Course')
  seeMoreText = "모든 게시물 보기",
}) {
  // 방법 1: usePluginData 사용 (권장, 더 직접적)
  const allBlogInstances = usePluginData()//(BLOG_PLUGIN_NAME, TARGET_BLOG_ID);
  const blogPluginData = allBlogInstances['blog']['Course'];


  // 방법 2: useAllPluginInstancesData 사용 (디버깅 또는 여러 인스턴스 동시 접근 시 유용)
  // const allBlogInstances = useAllPluginInstancesData(BLOG_PLUGIN_NAME);
  // const blogPluginData = allBlogInstances?.[TARGET_BLOG_ID];

  // --- 디버깅 로그 (필요시 활성화) ---
  console.log(`[CourseListCard] Plugin Name: ${BLOG_PLUGIN_NAME}, Target ID: ${TARGET_BLOG_ID}`);
  console.log('[CourseListCard] Data via usePluginData:', blogPluginData);
  // --- 디버깅 로그 끝 ---

  const allPostsFromInstance = blogPluginData?.blogPosts || [];
  const totalPostsInInstance = allPostsFromInstance.length;

  const postsToDisplay = [...allPostsFromInstance]
    .sort((a, b) => b.metadata.timestamp - a.metadata.timestamp) // 최신순 정렬
    .slice(0, MAX_POSTS_TO_DISPLAY);

  return (
    <div className={styles.courseListCard}>
      <div className={styles.cardHeader}>
        {typeof icon === 'string' ? <span className={styles.cardIconHeader}>{icon}</span> : icon}
        <div className={styles.cardTitleWrapper}>
          {boardLink ? (
            <Link
              to={boardLink} // boardLink는 이미 withBaseUrl 처리되었거나 절대 URL로 가정
              className={clsx(styles.cardTitleLink, 'animated-text-link')}
            >
              <h2 className={styles.cardTitleH2}>{cardTitle}</h2>
            </Link>
          ) : (
            <h2 className={styles.cardTitleH2}>{cardTitle}</h2>
          )}
          {/* 총 게시물 수 표시 (데이터가 있고, 게시물이 있을 때만) */}
          {blogPluginData && totalPostsInInstance > 0 && (
            <span className={styles.totalPostCount}>(총 {totalPostsInInstance}개)</span>
          )}
        </div>
      </div>

      {postsToDisplay && postsToDisplay.length > 0 ? (
        <ul className={styles.courseList}>
          {postsToDisplay.map(post => {
            const { title: postTitle, permalink, description, formattedDate } = post.metadata;
            return (
              <li key={permalink} className={styles.courseItem}>
                <Link
                  to={permalink} // Docusaurus Link는 자동으로 baseUrl 처리
                  className={styles.courseItemLink} // 블록 전체 링크, 애니메이션 밑줄은 내부 텍스트에
                >
                  <div className={styles.courseItemContent}>
                    <div className={styles.courseInfo}>
                      {/* 게시물 제목(강의명)에 애니메이션 링크 적용 */}
                      <span className={clsx(styles.courseName, 'animated-text-link')}>
                        {postTitle}
                      </span>
                      {formattedDate && <span className={styles.courseMeta}>({formattedDate})</span>}
                    </div>
                    {description && <p className={styles.courseDescription}>{description}</p>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.noPostsMessage}>{noPostsMessage}</p>
      )}

      {seeMoreLink && totalPostsInInstance > MAX_POSTS_TO_DISPLAY && ( // 더 볼 게시물이 있을 때만 "전체 보기"
        <div className={styles.seeMoreContainer}>
          <Link to={seeMoreLink} className={clsx('button button--outline button--sm button--primary', styles.seeMoreButton)}>
            {seeMoreText}
          </Link>
        </div>
      )}
    </div>
  );
}