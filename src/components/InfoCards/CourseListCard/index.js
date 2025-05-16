import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function CourseListCard({
  title = "담당 교과목",
  icon = "📚",
  courses = [
    { name: "소프트웨어 공학", code: "CSE3017", level: "학부 3학년", description: "소프트웨어 개발 생명주기, 요구사항 분석, 설계, 구현, 테스팅 및 유지보수 기법을 다룹니다.", syllabusLink: "/courses/cse3017" },
    { name: "고급 소프트웨어 테스팅", code: "CSE6021", level: "대학원", description: "모델 기반 테스팅, 테스트 자동화, AI 기반 테스팅 등 심화된 테스팅 이론과 실습을 제공합니다.", syllabusLink: "/courses/cse6021" },
    { name: "객체지향 프로그래밍", code: "CSE2022", level: "학부 2학년", syllabusLink: "/courses/cse2022" },
  ]
}) {
  return (
    <div className={styles.courseListCard}>
      <div className={styles.cardHeader}>
        {typeof icon === 'string' ? <span className={styles.cardIconHeader}>{icon}</span> : icon}
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      {courses && courses.length > 0 ? (
        <ul className={styles.courseList}>
          {courses.map((course, index) => (
            <li key={index} className={styles.courseItem}>
              <div className={styles.courseInfo}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseMeta}>({course.code} / {course.level})</span>
              </div>
              {course.description && <p className={styles.courseDescription}>{course.description}</p>}
              {course.syllabusLink && (
                <Link to={course.syllabusLink} className={styles.syllabusLink}>
                  강의 계획서 보기
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>현재 담당하는 교과목 정보가 없습니다.</p>
      )}
    </div>
  );
}