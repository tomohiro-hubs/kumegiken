import { formatRange } from '../../app/simulationEngine';
import type { CalculationResult, SimulationState } from '../../types/simulation';

type SimulationResultProps = {
  result: CalculationResult;
  state: SimulationState;
};

const hasBlock = (result: CalculationResult, name: 'roof' | 'exterior' | 'wall' | 'balcony'): boolean =>
  result.visibleBlocks.includes(name);

export function SimulationResult({ result, state }: SimulationResultProps) {
  return (
    <section className="r-sim-result">
      <div className="r-sim-result__headline">
        <p>概算お見積り</p>
        <div>{formatRange(result.range)}</div>
        <small>正確な金額は現地調査後にお見積もりいたします。</small>
      </div>
      <div className="r-sim-breakdown">
        <div className="r-sim-breakdown__title">見積り内訳</div>

        {hasBlock(result, 'roof') && (
          <div className="r-sim-work-block">
            <h4>屋上防水工事</h4>
            {!result.isSlope && (
              <>
                <Row label="高圧洗浄またはケレン清掃" value={result.details.roofCleaning} />
                <Row label="下地調整" value={result.details.roofRepair} />
                <Row label="本防水" value={result.details.roofPrep} />
                <Row label="トップコート（防水層保護塗料）" value={result.details.roofMain} />
                <Row label="シーリングなど各所仕上げ" value={result.details.roofSealing} />
              </>
            )}
            {result.isSlope && (
              <>
                <Row label="高圧洗浄またはケレン清掃" value={result.details.roofCleaningSloped} />
                <Row label="下地調整・既存屋根撤去" value={result.details.roofPrepRemove} />
                <Row
                  label={
                    state.roofMethod === 'cover'
                      ? '屋根カバー工法'
                      : state.roofMethod === 'replace'
                        ? '屋根葺き替え'
                        : '屋根塗装'
                  }
                  value={result.details.roofMethod}
                />
              </>
            )}
            <Row label="小計" value={result.details.roofTotal} accent />
          </div>
        )}

        {hasBlock(result, 'exterior') && (
          <div className="r-sim-work-block">
            <h4>外壁防水工事</h4>
            <Row label="作業用仮設足場" value={result.details.exteriorScaffold} />
            <Row label="既存シーリング撤去など" value={result.details.exteriorRemove} />
            <Row label="本防水・塗装" value={result.details.exteriorWaterproof} />
            <Row label="小計" value={result.details.exteriorTotal} accent />
          </div>
        )}

        {hasBlock(result, 'wall') && (
          <div className="r-sim-work-block">
            <h4>外壁塗装工事</h4>
            <Row label="作業用仮設足場" value={result.details.wallScaffold} />
            <Row label="既存シーリング撤去など" value={result.details.wallRemove} />
            <Row label="外壁塗装・シーリング" value={result.details.wallPaint} />
            <Row label="付帯部塗装" value={result.details.wallAccessory} />
            <Row label="小計" value={result.details.wallTotal} accent />
          </div>
        )}

        {hasBlock(result, 'balcony') && (
          <div className="r-sim-work-block">
            <h4>バルコニー防水工事</h4>
            <Row label="高圧洗浄またはケレン清掃" value={result.details.balconyCleaning} />
            <Row label="下地調整" value={result.details.balconyRepair} />
            <Row label="本防水" value={result.details.balconyPrep} />
            <Row label="トップコート（防水層保護塗料）" value={result.details.balconyMain} />
            <Row label="シーリングなど各所仕上げ" value={result.details.balconySealing} />
            <Row label="小計" value={result.details.balconyTotal} accent />
          </div>
        )}

        {result.showTotalRow && <Row label="合計" value={result.details.total} accent strong />}
      </div>
      <div className="r-sim-result__cta">
        <a href="/contact" className="r-btn r-btn--primary">
          正式な見積もりを依頼する
        </a>
      </div>
    </section>
  );
}

type RowProps = {
  label: string;
  value?: { min: number; max: number };
  accent?: boolean;
  strong?: boolean;
};

function Row({ label, value, accent, strong }: RowProps) {
  if (!value) return null;
  return (
    <div className={`r-sim-row ${accent ? 'is-accent' : ''} ${strong ? 'is-strong' : ''}`}>
      <span>{label}</span>
      <span>{formatRange(value)}</span>
    </div>
  );
}
