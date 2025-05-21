import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 모바일에서는 Navigation을 빼거나, Autoplay, EffectFade 등 최소한의 모듈만 사용할 수 있습니다.
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

// 모바일용 캐러셀 아이템 (더 간결한 내용으로 구성)
// 기존 카드 컴포넌트를 재사용하되, props를 간소화하거나,
// 모바일 전용의 간단한 카드 컴포넌트를 만들 수도 있습니다.
// 여기서는 간단한 텍스트 기반 슬라이드를 예시로 합니다.
const mobileCarouselItems = [
  {
    id: 'professor',
    title: '이우진 교수님',
    description: '교수님 소개 페이지로 이동합니다.',
    link: '/lab-introduction',
    backgroundColor: 'var(--ifm-color-primary-lightest)',
  },
  {
    id: 'course',
    title: '주요 실적',
    description: '진행한 강의들을 ',
    link: '/projects',
    backgroundColor: 'var(--ifm-color-secondary-lightest)',
  },
  {
    id: 'project',
    title: '진행중인 프로젝트',
    description: '현재 진행중인 프로젝트를 확인합니다.',
    link: '/docs/Project',
    backgroundColor: 'var(--ifm-color-success-lightest)',
  }
];

export default function MobileHomepageCarousel() {
  return (
    <section className={styles.carouselSectionMobile}>
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]} // 모바일에서는 네비게이션 버튼 제외 가능
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          autoHeight={true} // 모바일에서는 autoHeight가 매우 유용합니다.
          className={styles.mySwiperMobile}
        >
          {mobileCarouselItems.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlideMobile} style={{ backgroundColor: item.backgroundColor }}>
              <div className={styles.slideContentMobile}>
                <h3 className={styles.slideTitleMobile}>{item.title}</h3>
                <p className={styles.slideDescriptionMobile}>{item.description}</p>
                {item.link && (
                  <Link to={item.link} className={`button button--sm ${styles.slideLinkMobile}`}>
                    더 알아보기
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}