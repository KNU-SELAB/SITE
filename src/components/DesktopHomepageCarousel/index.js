import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import styles from './styles.module.css';

// 이전에 생성한 4가지 카드 컴포넌트를 import 합니다.
// 경로가 정확한지 확인하세요.
import ProfessorCard from '@site/src/components/InfoCards/ProfessorCard';
import ProjectCard from '@site/src/components/InfoCards/ProjectCard';
import TopicCard from '@site/src/components/InfoCards/TopicCard';
import CourseListCard from '@site/src/components/InfoCards/CourseListCard';

// 캐러셀에 표시할 아이템 데이터 정의
// 각 아이템은 어떤 종류의 카드인지(type)와 해당 카드에 전달할 props를 가집니다.
const carouselItems = [
  {
    id: 'professor-info',
    type: 'professor', // 카드 종류 식별자
    props: {
      name: "이우진 교수님",
      title: "경북대학교 Software Testing Lab.",
      photoUrl: "/img/Professor.jpg", // 실제 이미지로 교체
      email: "woojin@knu.ac.kr",
      office: "IT융복합관 521호",
      education: [
        "2002 - 현재 : 경북대학교 IT대학 컴퓨터학부 교수",
        "2005 : 미국 Univ. of Pennsylvania, Visiting Researcher",
        "1999 - 2002 : 한국전자통신연구원 선임 연구원",
        "1999 : KAIST 전산학 박사"
      ],
      researchInterests: [
        "임베디드 소프트웨어의 로그 기반 테스팅 프레임워크 연구",
        "온라인 학습 데이터를 활용한 AI기반 학습효과 증진 기법 연구",
        "섬유 방사 및 염색 공정 데이터를 활용한 물성 예측 AI 모델 개발"
      ],
      labPageLink: "/lab-introduction", // 실제 연구실 소개 페이지 링크
    }
  },
  {
    id: 'ongoing-project',
    type: 'project',
    props: {
      projectName: "AI 기반 테스트 케이스 자동 생성 시스템 개발",
      status: "Ongoing",
      period: "2024.03 ~ 2026.02",
      description: "머신러닝 모델을 활용하여 소프트웨어 변경 사항에 따라 최적의 테스트 케이스를 자동으로 생성하고 우선순위를 부여하는 시스템을 개발합니다.",
      fundingSources: [{name:"DYETEC", link:"https://www.dyetec.or.kr/"}],
      technologies: ["C++", "Python", "ROS", "Machine Learning", "AWS"],
      imageUrl: "/img/dyetec.jpg", // 실제 프로젝트 이미지로 교체
      projectLink: "/projects/intelligent-mobility-platform",
    }
  },
  {
    id: 'topic-software-testing',
    type: 'topic',
    props: {
      topicTitle: "소프트웨어 테스트란 무엇인가요?",
      icon: "🔬",
      summary: "소프트웨어 테스트는 소프트웨어 제품이나 애플리케이션이 올바르게 작동하고 있는지 평가하고 검증하는 프로세스입니다. "+
      "잘 수행된 테스트는 버그 방지와 성능 개선 등의 이점을 제공합니다. 즉, 소프트웨어 테스트란 애플리케이션 품질을 검증하고 검증하여 사용자 요구 사항을 충족하는지 확인하는 행위를 뜻합니다. "+
      "오늘날 소프트웨어 테스트는 연속적일 때 가장 효과적입니다. 테스트는 설계 중에 시작되고, 소프트웨어가 구축되는 동안 계속되며, 심지어 프로덕션에 배포될 때에도 수행됩니다. "+
      "지속적인 테스트는 모든 부분이 배포될 때까지 기다렸다가 테스트를 시작할 필요가 없다는 뜻입니다. "+
      "설계 시점과 더 가까운 때 테스트를 수행하는 시프트-레프트와 최종 사용자가 검증을 수행하는 시프트-라이트도 최근 소프트웨어 커뮤니티에서 주목 받는 테스트 철학입니다. "+
      "테스트 전략과 관리 계획을 이해하면 필요한 배포 속도를 지원하기 위해 테스트의 모든 측면을 자동화하는 것이 필수적입니다.",
      pageLink: "/Software_Test",
    }
  },
  {
    id: 'professor-courses',
    type: 'courses',
    props: {
      title: "최근 담당 강의",
      icon: "📖",
      courses: [
        { name: "소프트웨어 테스팅 및 품질보증", code: "SWE4010", level: "학부 4학년", description: "다양한 테스팅 기법과 품질 관리 표준을 학습하고, 실제 프로젝트에 적용하는 실습을 진행합니다." },
        { name: "인공지능 기반 소프트웨어 공학", code: "CSE7001", level: "대학원", description: "AI 기술을 소프트웨어 개발 및 테스팅 프로세스에 적용하는 최신 연구 동향과 방법론을 다룹니다." },
        { name: "정형 분석 및 모델 체킹", code: "CSE6033", level: "대학원 석박사", description: "소프트웨어의 정확성과 안전성을 수학적으로 증명하는 정형 기법과 모델 체킹 도구를 학습합니다." },
        { name: "정형 분석 및 모델 체킹", code: "CSE6033", level: "대학원 석박사", description: "소프트웨어의 정확성과 안전성을 수학적으로 증명하는 정형 기법과 모델 체킹 도구를 학습합니다." },
        { name: "정형 분석 및 모델 체킹", code: "CSE6033", level: "대학원 석박사", description: "소프트웨어의 정확성과 안전성을 수학적으로 증명하는 정형 기법과 모델 체킹 도구를 학습합니다." },
      ]
    }
  }
];

export default function DescktopHompageCarousel() {
  // 카드 타입에 따라 적절한 컴포넌트를 렌더링하는 함수
  const renderCardComponent = (item) => {
    switch (item.type) {
      case 'professor':
        return <ProfessorCard {...item.props} />;
      case 'project':
        return <ProjectCard {...item.props} />;
      case 'topic':
        return <TopicCard {...item.props} />;
      case 'courses':
        return <CourseListCard {...item.props} />;
      default:
        return <div>알 수 없는 카드 타입입니다: {item.type}</div>;
    }
  };

  return (
    <section className={styles.carouselSection}>
      <div className="container"> {/* Docusaurus의 container로 감싸서 적절한 너비 유지 */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{
          //   delay: 7000, // 카드 내용이 많으므로 지연 시간 증가 (7초)
          //   disableOnInteraction: false,
          // }}
          effect="slide" // 'slide' 또는 다른 효과로 변경 가능
          fadeEffect={{
            crossFade: true
          }}
          className={styles.mySwiper}
          //autoHeight={true} // 슬라이드 내용 높이가 다를 경우, Swiper 높이 자동 조절 (레이아웃 점프 유발 가능)
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              {/* 각 슬라이드 내부에 해당 카드 컴포넌트를 렌더링 */}
              {renderCardComponent(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}