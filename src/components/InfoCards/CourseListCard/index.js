import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

export default function CourseListCard({
  cardTitle = "주요 강의",
  icon = "📚",
  boardLink,
  courses = [
    { name: "소프트웨어 공학", code: "CSE3017", targetAudience: "학부 3학년", description: "...", pageLink: "/docs/courses/cse3017" },
    { name: "고급 소프트웨어 테스팅", code: "CSE6021", targetAudience: "대학원", description: "...", pageLink: "/docs/courses/cse6021" },
  ],
  noCoursesMessage = "현재 등록된 강의 정보가 없습니다.",
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={styles.courseListCard}>
      <div className={styles.cardHeader}>
        {typeof icon === 'string' ? <span className={styles.cardIconHeader}>{icon}</span> : icon}
        {boardLink ? (
          <Link
            to={boardLink.startsWith('http') ? boardLink : withBaseUrl(boardLink)}
            className={clsx(styles.cardTitleLink, 'animatedLink')}
          >
            <h2 className={styles.cardTitleH2}>{cardTitle}</h2>
          </Link>
        ) : (
          <h2 className={styles.cardTitleH2}>{cardTitle}</h2>
        )}
      </div>

      {courses && courses.length > 0 ? (
        <ul className={styles.courseList}>
          {courses.map((course, index) => (
            <li key={course.code || index}> 
              {course.pageLink ? (
                <Link
                  to={course.pageLink.startsWith('http') ? course.pageLink : withBaseUrl(course.pageLink)}
                >
                  <div className={styles.courseItemContent}>
                    <div className={styles.courseInfo}>
                      <span className={styles.courseName}>{course.name}</span>
                      <span className={styles.courseMeta}>
                        {course.code && `(${course.code})`}
                        {course.code && course.targetAudience && " / "}
                        {course.targetAudience}
                      </span>
                    </div>
                    {course.description && <p className={styles.courseDescription}>{course.description}</p>}
                  </div>
                </Link>
              ) : (
                <div className={clsx(styles.courseItemLink, styles.nonClickableItem)}>
                  <div className={styles.courseItemContent}>
                    <div className={styles.courseInfo}>
                      <span className={styles.courseName}>{course.name}</span>
                      <span className={styles.courseMeta}>
                        {course.code && `(${course.code})`}
                        {course.code && course.targetAudience && " / "}
                        {course.targetAudience}
                      </span>
                    </div>
                    {course.description && <p className={styles.courseDescription}>{course.description}</p>}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noCoursesMessage}>{noPostsMessage}</p>
      )}
    </div>
  );
}