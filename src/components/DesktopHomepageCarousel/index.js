import React from 'react';
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
      title: "소프트웨어공학부 총괄 교수",
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
      projectName: "차세대 지능형 모빌리티를 위한 신뢰성 검증 플랫폼 개발",
      status: "진행중",
      period: "2023.01 ~ 2025.12",
      description: "자율주행 레벨 4 이상을 목표로 하는 차세대 모빌리티 시스템의 소프트웨어 안전성 및 신뢰성을 종합적으로 검증하기 위한 AI 기반 플랫폼을 개발합니다. 가상 환경 시뮬레이션과 실제 도로 주행 데이터를 통합 분석합니다.",
      fundingSource: "산업통상자원부",
      technologies: ["C++", "Python", "ROS", "Machine Learning", "AWS"],
      imageUrl: "https://gscse.knu.ac.kr/data/file/sub2_1/6db859d91a4e6fcd421a1f27612bb49b_ZwnptyvP_5647d5869f2ee32e5711586bcc447ca8ca43e07d.jpg", // 실제 프로젝트 이미지로 교체
      projectLink: "/projects/intelligent-mobility-platform",
    }
  },
  {
    id: 'topic-software-testing',
    type: 'topic',
    props: {
      topicTitle: "소프트웨어 테스팅의 미래",
      icon: "🚀",
      introduction: "AI와 머신러닝 기술의 발전은 소프트웨어 테스팅 분야에 혁신적인 변화를 가져오고 있습니다. 본 연구실은 이러한 변화를 선도하며, 더욱 지능적이고 효율적인 테스팅 방법을 연구합니다.",
      keyAspects: [
        { aspect: "AI 기반 테스트 자동화", detail: "테스트 케이스 생성, 실행, 결과 분석 전 과정에 AI를 도입하여 효율성을 극대화합니다." },
        { aspect: "메타버스와 연동된 가상 테스트 환경", detail: "현실과 유사한 가상 환경에서 복잡한 시나리오를 안전하게 테스트합니다." },
        { aspect: "설명 가능한 AI(XAI) 테스팅", detail: "AI가 내린 판단(예: 결함 예측)의 근거를 제시하여 신뢰도를 높입니다." }
      ],
      relatedLink: "/research/future-of-testing",
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

export default function HomepageCarousel() {
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
          navigation
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{
          //   delay: 7000, // 카드 내용이 많으므로 지연 시간 증가 (7초)
          //   disableOnInteraction: false,
          // }}
          effect="fade" // 'slide' 또는 다른 효과로 변경 가능
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