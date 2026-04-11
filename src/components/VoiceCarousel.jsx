'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const voiceItems = [
  {
    stars: '★★★★★',
    text: '「正直に『ここはまだ大丈夫です』と言ってくれたのが信頼できました。他社では全面やり替えと言われていたので、大きな節約になりました。」',
    avatar: 'M',
    name: 'M.T 様',
    detail: '西宮市・分譲マンション管理組合',
  },
  {
    stars: '★★★★★',
    text: '「自社の職人さんが施工してくれるので、品質にバラツキがなく安心でした。施工管理の方の対応も丁寧で、管理会社としても信頼しています。」',
    avatar: 'S',
    name: 'S.K 様',
    detail: '大阪市・不動産管理会社',
  },
  {
    stars: '★★★★★',
    text: '「建物診断レポートが非常にわかりやすく、理事会での説明にそのまま使えました。長期修繕計画の見直しにも役立っています。」',
    avatar: 'K',
    name: 'K.H 様',
    detail: '神戸市・マンションオーナー',
  },
  {
    stars: '★★★★★',
    text: '「雨漏りで困っていた時、迅速に対応してくれました。原因調査も丁寧で、根本的な補修をしてもらえたので再発もありません。」',
    avatar: 'A',
    name: 'A.N 様',
    detail: '尼崎市・店舗オーナー',
  },
  {
    stars: '★★★★★',
    text: '「工程表の共有が細かく、入居者への案内まで配慮してもらえました。管理組合として説明責任を果たしやすかったです。」',
    avatar: 'Y',
    name: 'Y.O 様',
    detail: '芦屋市・分譲マンション理事長',
  },
  {
    stars: '★★★★★',
    text: '「見積もりの内訳が明確で、どこに費用がかかるのか納得して依頼できました。追加工事の相談も誠実でした。」',
    avatar: 'T',
    name: 'T.M 様',
    detail: '吹田市・賃貸マンションオーナー',
  },
  {
    stars: '★★★★★',
    text: '「大規模修繕中も現場が整理されていて、近隣からの苦情が出ませんでした。安全管理まで徹底されている印象です。」',
    avatar: 'N',
    name: 'N.R 様',
    detail: '堺市・ビル管理会社',
  },
  {
    stars: '★★★★★',
    text: '「調査から報告、施工後の説明まで一貫していて、専門用語も噛み砕いて説明してくれました。社内稟議も通しやすかったです。」',
    avatar: 'H',
    name: 'H.I 様',
    detail: '京都市・事業用施設オーナー',
  },
];

export default function VoiceCarousel() {
  const [visibleCards, setVisibleCards] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const syncVisibleCards = (event) => {
      const nextVisibleCards = event.matches ? 1 : 2;
      setVisibleCards(nextVisibleCards);
    };

    syncVisibleCards(mediaQuery);
    mediaQuery.addEventListener('change', syncVisibleCards);

    return () => {
      mediaQuery.removeEventListener('change', syncVisibleCards);
    };
  }, []);

  const maxIndex = Math.max(voiceItems.length - visibleCards, 0);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const updateSlideOffset = () => {
      const track = trackRef.current;
      const firstCard = track?.firstElementChild;
      if (!track || !firstCard) return;

      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || '0');
      const cardWidth = firstCard.getBoundingClientRect().width;
      setSlideOffset(cardWidth + gap);
    };

    updateSlideOffset();

    const resizeObserver = new ResizeObserver(() => {
      updateSlideOffset();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', updateSlideOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSlideOffset);
    };
  }, [visibleCards]);

  const slidePages = useMemo(
    () => Array.from({ length: maxIndex + 1 }, (_, index) => index),
    [maxIndex]
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="voice-carousel">
      <div className="voice-carousel__header reveal">
        <div className="voice-carousel__controls">
          <button
            type="button"
            className="voice-carousel__button"
            onClick={handlePrevious}
            aria-label="前のお客様の声を見る"
          >
            ←
          </button>
          <button
            type="button"
            className="voice-carousel__button"
            onClick={handleNext}
            aria-label="次のお客様の声を見る"
          >
            →
          </button>
        </div>
      </div>

      <div className="voice-carousel__viewport">
        <div
          ref={trackRef}
          className="voice-carousel__track"
          style={{ transform: `translateX(-${currentIndex * slideOffset}px)` }}
        >
          {voiceItems.map((item) => (
            <article key={`${item.name}-${item.detail}`} className="voice-card reveal">
              <div className="voice-card__stars">{item.stars}</div>
              <p className="voice-card__text">{item.text}</p>
              <div className="voice-card__author">
                <div className="voice-card__avatar">{item.avatar}</div>
                <div className="voice-card__info">
                  <div className="voice-card__name">{item.name}</div>
                  <div className="voice-card__detail">{item.detail}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="voice-carousel__dots" aria-label="お客様の声のページ切り替え">
        {slidePages.map((pageIndex) => (
          <button
            key={pageIndex}
            type="button"
            className={`voice-carousel__dot${pageIndex === currentIndex ? ' is-active' : ''}`}
            onClick={() => setCurrentIndex(pageIndex)}
            aria-label={`${pageIndex + 1}件目の位置へ移動`}
            aria-pressed={pageIndex === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
