import { useMemo, useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { PageHero } from '../components/common/PageHero';
import { OptionGroup } from '../components/simulation/OptionGroup';
import { SimulationResult } from '../components/simulation/SimulationResult';
import { calculateSimulation, getProgressStatus, optionLabelMap, validateSimulationState } from '../app/simulationEngine';
import {
  ageItems,
  optionItems,
  roofMethodItems,
  roofShapeItems,
  structureItems,
  wallMaterialItems,
  waterproofItems,
} from '../data/simulationOptions';
import type {
  AgeKey,
  CalculationResult,
  OptionKey,
  RoofMethodKey,
  RoofShapeKey,
  SimulationState,
  StructureKey,
  WallMaterialKey,
  WaterproofKey,
} from '../types/simulation';

const initialState: SimulationState = {
  width: undefined,
  height: undefined,
  floors: undefined,
  balconyCount: undefined,
};

export function SimulationPage() {
  const [state, setState] = useState<SimulationState>(initialState);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const progress = getProgressStatus(state);
  const progressRate = Math.round((progress.filled / progress.total) * 100);
  const area = Math.round((state.width ?? 0) * (state.height ?? 0));
  const optionLabel = state.option ? optionLabelMap[state.option] : '未選択';

  const showRoofSection = state.option === 'roof' || state.option === 'general';
  const showWallSection = state.option === 'wall' || state.option === 'exterior' || state.option === 'general';
  const showBalconySection = state.option === 'balcony' || state.option === 'general';
  const showRoofMethod = showRoofSection && state.roofShape === 'slope';

  const dimensionTitle = useMemo(() => {
    if (state.option === 'roof') return '屋上面積の実測';
    if (state.option === 'exterior' || state.option === 'wall') return '建物の外形寸法';
    if (state.option === 'balcony') return 'バルコニーの面積';
    if (state.option === 'general') return '建物の寸法';
    return '面積の実測';
  }, [state.option]);

  const onCalculate = () => {
    const validationError = validateSimulationState(state);
    if (validationError) {
      setError(validationError);
      setResult(null);
      return;
    }
    setError(null);
    const calculated = calculateSimulation(state);
    setResult(calculated);
  };

  const onReset = () => {
    setState(initialState);
    setResult(null);
    setError(null);
  };

  return (
    <>
      <PageHero
        label="Simulation"
        title="見積もりシミュレーション"
        description="入力条件に応じて概算費用をすぐに確認できます。"
      />
      <Breadcrumb items={[{ label: 'ホーム', href: '/' }, { label: '見積もりシミュレーション' }]} />

      <section className="r-sim-section">
        <div className="r-container r-sim-layout">
          <aside className="r-sim-side">
            <div className="r-sim-side__panel">
              <h3>入力ガイド</h3>
              <p>工事種別と建物条件を選択し、最後に「結果を表示する」を押してください。</p>
              <div className="r-sim-progress">
                <div className="r-sim-progress__head">
                  <span>入力進捗</span>
                  <strong>{progressRate}%</strong>
                </div>
                <div className="r-sim-progress__bar">
                  <span style={{ width: `${progressRate}%` }} />
                </div>
              </div>
              <dl className="r-sim-meta">
                <div>
                  <dt>現在の工事</dt>
                  <dd>{optionLabel}</dd>
                </div>
                <div>
                  <dt>概算面積</dt>
                  <dd>{area} ㎡</dd>
                </div>
              </dl>
              <p className="r-sim-note">
                こちらは概算です。正確なお見積もりは現地調査後にご提示します。
              </p>
            </div>
          </aside>

          <div className="r-sim-main">
            <div className="r-sim-intro">
              <p>3分で完了 / すぐに概算</p>
              <h2>条件を選ぶだけで、費用レンジをその場で確認できます</h2>
            </div>

            <OptionGroup<OptionKey>
              title="ご希望の工事"
              step="01"
              items={optionItems}
              value={state.option}
              onChange={(value) => setState((prev) => ({ ...prev, option: value }))}
            />

            <OptionGroup<AgeKey>
              title="建物の築年数"
              step="02"
              items={ageItems}
              value={state.age}
              onChange={(value) => setState((prev) => ({ ...prev, age: value }))}
              compact
            />

            <OptionGroup<StructureKey>
              title="屋上の構造"
              step="03"
              items={structureItems}
              value={state.structure}
              onChange={(value) => setState((prev) => ({ ...prev, structure: value }))}
              compact
            />

            {showRoofSection && (
              <OptionGroup<RoofShapeKey>
                title="屋根の形状"
                step="04"
                items={roofShapeItems}
                value={state.roofShape}
                onChange={(value) => setState((prev) => ({ ...prev, roofShape: value }))}
                compact
              />
            )}

            {showRoofMethod && (
              <OptionGroup<RoofMethodKey>
                title="屋根工法"
                step="05"
                items={roofMethodItems}
                value={state.roofMethod}
                onChange={(value) => setState((prev) => ({ ...prev, roofMethod: value }))}
                compact
              />
            )}

            {showWallSection && (
              <OptionGroup<WallMaterialKey>
                title="外壁の素材"
                step="06"
                items={wallMaterialItems}
                value={state.wallMaterial}
                onChange={(value) => setState((prev) => ({ ...prev, wallMaterial: value }))}
                compact
              >
                <div className="r-sim-number-wrap">
                  <label htmlFor="floors">建物の階数</label>
                  <input
                    id="floors"
                    type="number"
                    min={1}
                    value={state.floors ?? ''}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        floors: event.target.value ? Number(event.target.value) : undefined,
                      }))
                    }
                    placeholder="例: 2"
                  />
                </div>
              </OptionGroup>
            )}

            {showBalconySection && (
              <div className="r-sim-card">
                <h3 className="r-sim-step-title">
                  <span className="r-sim-step-no">07</span>バルコニーの個数
                </h3>
                <div className="r-sim-number-wrap">
                  <label htmlFor="balconyCount">個数</label>
                  <input
                    id="balconyCount"
                    type="number"
                    min={1}
                    value={state.balconyCount ?? ''}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        balconyCount: event.target.value ? Number(event.target.value) : undefined,
                      }))
                    }
                    placeholder="例: 1"
                  />
                </div>
              </div>
            )}

            <OptionGroup<WaterproofKey>
              title="屋上既存の防水工法"
              step="08"
              items={waterproofItems}
              value={state.waterproof}
              onChange={(value) => setState((prev) => ({ ...prev, waterproof: value }))}
              compact
            />

            <div className="r-sim-card">
              <h3 className="r-sim-step-title">
                <span className="r-sim-step-no">09</span>
                {dimensionTitle}
              </h3>
              <div className="r-sim-dimension-grid">
                <div className="r-sim-number-wrap">
                  <label htmlFor="width">縦（m）</label>
                  <input
                    id="width"
                    type="number"
                    min={1}
                    value={state.width ?? ''}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        width: event.target.value ? Number(event.target.value) : undefined,
                      }))
                    }
                    placeholder="例: 10"
                  />
                </div>
                <div className="r-sim-number-wrap">
                  <label htmlFor="height">横（m）</label>
                  <input
                    id="height"
                    type="number"
                    min={1}
                    value={state.height ?? ''}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        height: event.target.value ? Number(event.target.value) : undefined,
                      }))
                    }
                    placeholder="例: 10"
                  />
                </div>
              </div>
            </div>

            {error && <div className="r-sim-error">{error}</div>}

            <div className="r-sim-actions">
              <button type="button" className="r-btn r-btn--primary" onClick={onCalculate}>
                結果を表示する
              </button>
              <button type="button" className="r-btn r-btn--outline" onClick={onReset}>
                入力をリセット
              </button>
            </div>

            {result && <SimulationResult result={result} state={state} />}
          </div>
        </div>
      </section>
    </>
  );
}
