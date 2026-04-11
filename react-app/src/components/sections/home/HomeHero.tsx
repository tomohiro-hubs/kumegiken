export function HomeHero() {
  return (
    <section className="r-home-hero">
      <div className="r-container r-home-hero__inner">
        <p className="r-home-hero__eyebrow">Building Maintenance Partner</p>
        <h1 className="r-home-hero__title">
          建物を守る技術を、
          <br />
          もっと正直に、もっと確かに。
        </h1>
        <p className="r-home-hero__text">
          防水・修繕・塗装・水中点検まで。久米技建は、調査から施工までを自社で一貫対応します。
        </p>
        <div className="r-home-hero__actions">
          <a className="r-btn r-btn--primary" href="/contact">
            無料相談をする
          </a>
          <a className="r-btn r-btn--outline" href="/simulation">
            見積もりシミュレーション
          </a>
        </div>
      </div>
    </section>
  );
}
