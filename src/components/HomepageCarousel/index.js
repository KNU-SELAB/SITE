import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';
// 캐러셀에 표시할 아이템 데이터 (예시)
// 실제로는 이미지 경로, 링크 등을 포함하여 더 구체적으로 작성합니다.
const carouselItems = [
  {
    id: 1,
    title: '주요 연구 분야 소개',
    description: '소프트웨어 공학의 최신 이론과 실제 적용 사례를 탐구합니다. 정형 분석, 모델 기반 테스팅 등 핵심 기술을 연구합니다.',
    // imageUrl: '/img/carousel/research_highlight.jpg', // 예시 이미지 경로
    // link: '/docs/research/overview',
    backgroundColor: 'var(--ifm-color-primary-lightest)', // 슬라이드별 배경색 예시
  },
  {
    id: 2,
    title: '최신 연구 성과 발표',
    description: '최근 국제 학회에 발표된 VP 기반 테스팅 자동화 기술에 대한 논문을 확인해보세요. 혁신적인 접근으로 주목받고 있습니다.',
    // imageUrl: '/img/carousel/lab_news.jpg',
    // link: '/blog/new-publication-vp-testing',
    backgroundColor: 'var(--ifm-color-secondary-lightest)',
  },
  {
    id: 3,
    title: '임베디드 시스템을 위한 테스팅 솔루션',
    description: '자동차, 가전, IoT 등 다양한 임베디드 시스템의 안정성 확보를 위한 맞춤형 테스팅 전략 및 도구를 개발하고 있습니다.',
    // imageUrl: '/img/carousel/embedded_systems.jpg',
    // link: '/docs/solutions/embedded-testing',
    backgroundColor: 'var(--ifm-color-success-lightest)',
  },
  {
    id: 4,
    title: '연구실 멤버 모집 안내',
    description: '소프트웨어 테스팅 분야에 열정을 가진 학부 연구생 및 대학원생을 모집합니다. 함께 미래를 만들어갈 인재를 기다립니다.',
    // imageUrl: '/img/carousel/join_us.jpg',
    // link: '/join',
    backgroundColor: 'var(--ifm-color-info-lightest)',
  }
];

export default function HomepageCarousel() {
  return (
    <section className={styles.carouselSection}>
      <div className="container"> {/* 컨테이너로 감싸서 적절한 너비 유지 */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30} // 슬라이드 간 간격
          slidesPerView={1}  // 한 번에 보여줄 슬라이드 수
          navigation   // 네비게이션 버튼
          pagination={{ clickable: true }} // 페이지네이션 버튼
          loop={true}      // 무한 루프
          autoplay={{
            delay: 4000, // 자동 넘김 지연 시간 (ms)
            disableOnInteraction: false, // 사용자 인터랙션 후에도 자동 넘김 유지
          }}
          effect="fade" // 전환 효과 (예: 'slide', 'fade', 'cube', 'coverflow', 'flip')
          fadeEffect={{
            crossFade: true
          }}
          className={styles.mySwiper}
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide} style={{ backgroundColor: item.backgroundColor }}>
              {/* item.imageUrl && <img src={item.imageUrl} alt={item.title} className={styles.slideImage} /> */}
              <div className={styles.slideContent}>
                <h3 className={styles.slideTitle}>{item.title}</h3>
                <p className={styles.slideDescription}>{item.description}</p>
                {/* item.link && (
                  <Link to={item.link} className={styles.slideLink}>
                    더 알아보기 &rarr;
                  </Link>
                )*/}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}