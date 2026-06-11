/* ============================================
   久米技建 - 見積もりシミュレーション
   （本番サイトの計算ロジックに合わせた実装）
   ============================================ */

(() => {
  function bindSimulation() {
  const simulationForm = document.getElementById('simulation-form');
  if (!simulationForm || simulationForm.dataset.simulationBound === '1') return;

  const calculateButton = document.getElementById('calculate-btn');
  const mobileCalcButton = document.getElementById('sim-mobile-calc');
  const resetButton = document.getElementById('simulation-reset');
  if (!calculateButton) return;
  simulationForm.dataset.simulationBound = '1';

  const MIN_FACTOR = 0.85;
  const MAX_FACTOR = 1.15;
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  const groups = [
    '[data-option]',
    '[data-age]',
    '[data-structure]',
    '[data-waterproof]',
    '[data-roof-shape]',
    '[data-roof-method]',
    '[data-wall-material]',
  ];

  initTabs();
  initOptionGroups();
  updateConditionalSections();
  updateRoofMethodVisibility();
  bindQuickActions();
  updateGuidePanel();

  calculateButton.addEventListener('click', () => {
    try {
      calculateAndRender();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('計算処理でエラーが発生しました:', error);
      alert('計算処理中にエラーが発生しました。入力内容を確認してください。');
    }
  });

  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (!tabButtons.length) return;
    tabButtons.forEach((btn) => {
      btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        tabButtons.forEach((b) => b.setAttribute('aria-selected', b.classList.contains('active') ? 'true' : 'false'));
      });
    });
  }

  function initOptionGroups() {
    groups.forEach((selector) => {
      const buttons = document.querySelectorAll(selector);
      buttons.forEach((btn) => {
        btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        btn.addEventListener('click', () => {
          const all = document.querySelectorAll(selector);
          all.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          all.forEach((b) => b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false'));

          if (btn.hasAttribute('data-option')) updateConditionalSections();
          if (btn.hasAttribute('data-roof-shape')) updateRoofMethodVisibility();
          updateGuidePanel();
        });
      });
    });

    const dimensionInputs = document.querySelectorAll('#width, #height, #floor-count, #balcony-count');
    dimensionInputs.forEach((input) => {
      input.addEventListener('input', updateGuidePanel);
      input.addEventListener('change', updateGuidePanel);
    });
  }

  function updateConditionalSections() {
    const activeOption = document.querySelector('[data-option].active')?.dataset.option ?? null;

    const roofShapeSection = document.getElementById('roof-shape-section');
    const roofMethodSection = document.getElementById('roof-method-section');
    const wallMaterialSection = document.getElementById('wall-material-section');
    const floorCountSection = document.getElementById('floor-count-section');
    const balconyCountSection = document.getElementById('balcony-count-section');

    if (roofShapeSection) roofShapeSection.style.display = 'none';
    if (roofMethodSection) roofMethodSection.style.display = 'none';
    if (wallMaterialSection) wallMaterialSection.style.display = 'none';
    if (floorCountSection) floorCountSection.style.display = 'none';
    if (balconyCountSection) balconyCountSection.style.display = 'none';

    const isSlopeActive = document.querySelector('[data-roof-shape="slope"].active') !== null;

    if (activeOption === 'roof') {
      if (roofShapeSection) roofShapeSection.style.display = 'block';
      if (roofMethodSection && isSlopeActive) roofMethodSection.style.display = 'block';
    } else if (activeOption === 'exterior' || activeOption === 'wall') {
      if (wallMaterialSection) wallMaterialSection.style.display = 'block';
      if (floorCountSection) floorCountSection.style.display = 'block';
    } else if (activeOption === 'balcony') {
      if (balconyCountSection) balconyCountSection.style.display = 'block';
    } else if (activeOption === 'general') {
      if (roofShapeSection) roofShapeSection.style.display = 'block';
      if (wallMaterialSection) wallMaterialSection.style.display = 'block';
      if (floorCountSection) floorCountSection.style.display = 'block';
      if (balconyCountSection) balconyCountSection.style.display = 'block';
      if (roofMethodSection && isSlopeActive) roofMethodSection.style.display = 'block';
    }

    updateDimensionLabel(activeOption);
  }

  function updateDimensionLabel(activeOption) {
    const dimensionInputs = document.querySelector('.dimension-inputs');
    if (!dimensionInputs) return;
    const header = dimensionInputs.previousElementSibling;
    if (!header) return;

    if (activeOption === 'roof') header.textContent = '屋上面積の実測 屋上面積とは？';
    else if (activeOption === 'exterior' || activeOption === 'wall') header.textContent = '建物の外形寸法 外形寸法とは？';
    else if (activeOption === 'balcony') header.textContent = 'バルコニーの面積 面積とは？';
    else if (activeOption === 'general') header.textContent = '建物の寸法 寸法とは？';
    else header.textContent = '面積の実測';
  }

  function updateRoofMethodVisibility() {
    const activeOption = document.querySelector('[data-option].active')?.dataset.option;
    const isSlopeActive = document.querySelector('[data-roof-shape="slope"].active') !== null;
    const roofMethodSection = document.getElementById('roof-method-section');
    if (!roofMethodSection) return;
    const shouldShow = (activeOption === 'roof' || activeOption === 'general') && isSlopeActive;
    roofMethodSection.style.display = shouldShow ? 'block' : 'none';
  }

  function bindQuickActions() {
    if (mobileCalcButton) {
      mobileCalcButton.addEventListener('click', () => {
        calculateButton.click();
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', resetSimulationForm);
    }
  }

  function resetSimulationForm() {
    clearActiveButtons('[data-option]');
    clearActiveButtons('[data-age]');
    clearActiveButtons('[data-structure]');
    clearActiveButtons('[data-waterproof]');
    clearActiveButtons('[data-roof-shape]');
    clearActiveButtons('[data-roof-method]');
    clearActiveButtons('[data-wall-material]');

    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const floorInput = document.getElementById('floor-count');
    const balconyInput = document.getElementById('balcony-count');
    if (widthInput) widthInput.value = '';
    if (heightInput) heightInput.value = '';
    if (floorInput) floorInput.value = '';
    if (balconyInput) balconyInput.value = '';

    updateConditionalSections();
    updateRoofMethodVisibility();
    updateGuidePanel();

    const resultArea = document.getElementById('result-area');
    if (resultArea) resultArea.style.display = 'none';
  }

  function clearActiveButtons(selector) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach((button) => {
      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');
    });
  }

  function updateGuidePanel() {
    const width = safeNumber(document.getElementById('width')?.value);
    const height = safeNumber(document.getElementById('height')?.value);
    const area = Math.max(0, Math.round(width * height));
    const optionKey = document.querySelector('[data-option].active')?.dataset.option;
    const optionLabelMap = {
      roof: '屋上防水工事',
      exterior: '外壁防水工事',
      balcony: 'バルコニー防水工事',
      wall: '外壁塗装工事',
      general: '総合改修工事',
    };

    const { filled, total } = getProgressStatus(optionKey);
    const progress = total > 0 ? Math.round((filled / total) * 100) : 0;

    const progressText = document.getElementById('sim-progress-text');
    const progressBar = document.getElementById('sim-progress-bar');
    const currentOption = document.getElementById('sim-current-option');
    const currentArea = document.getElementById('sim-current-area');

    if (progressText) progressText.textContent = `${progress}%`;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (currentOption) currentOption.textContent = optionLabelMap[optionKey] ?? '未選択';
    if (currentArea) currentArea.textContent = `${area}`;
  }

  function getProgressStatus(optionKey) {
    if (!optionKey) return { filled: 0, total: 1 };

    const checks = [
      true,
      document.querySelector('[data-age].active') !== null,
      document.querySelector('[data-structure].active') !== null,
      document.querySelector('[data-waterproof].active') !== null,
      safeNumber(document.getElementById('width')?.value) > 0,
      safeNumber(document.getElementById('height')?.value) > 0,
    ];

    if (optionKey === 'exterior' || optionKey === 'wall' || optionKey === 'general') {
      checks.push(safeNumber(document.getElementById('floor-count')?.value) > 0);
      checks.push(document.querySelector('[data-wall-material].active') !== null);
    }

    if (optionKey === 'balcony' || optionKey === 'general') {
      checks.push(safeNumber(document.getElementById('balcony-count')?.value) > 0);
    }

    if (optionKey === 'roof' || optionKey === 'general') {
      checks.push(document.querySelector('[data-roof-shape].active') !== null);
      const slope = document.querySelector('[data-roof-shape="slope"].active') !== null;
      if (slope) checks.push(document.querySelector('[data-roof-method].active') !== null);
    }

    return {
      filled: checks.filter(Boolean).length,
      total: checks.length,
    };
  }

  function calculateAndRender() {
    const width = safeNumber(document.getElementById('width')?.value);
    const height = safeNumber(document.getElementById('height')?.value);
    const floors = Math.max(1, Math.trunc(safeNumber(document.getElementById('floor-count')?.value, 1)));
    const balconyCount = Math.max(1, Math.trunc(safeNumber(document.getElementById('balcony-count')?.value, 1)));

    if (width <= 0 || height <= 0) {
      alert('縦・横は1以上で入力してください。');
      return;
    }

    const option = document.querySelector('[data-option].active')?.dataset.option;
    const age = document.querySelector('[data-age].active')?.dataset.age;
    const structure = document.querySelector('[data-structure].active')?.dataset.structure;
    const waterproof = document.querySelector('[data-waterproof].active')?.dataset.waterproof;
    const roofShape = document.querySelector('[data-roof-shape].active')?.dataset.roofShape;

    if (!option || !age || !structure || !waterproof) {
      alert('未選択の項目があります。必須項目を選択してください。');
      return;
    }

    if ((option === 'roof' || option === 'general') && !roofShape) {
      alert('屋根の形状を選択してください。');
      return;
    }

    if ((option === 'exterior' || option === 'wall' || option === 'general')
      && !document.querySelector('[data-wall-material].active')) {
      alert('外壁の素材を選択してください。');
      return;
    }

    if ((option === 'exterior' || option === 'wall' || option === 'general') && floors <= 0) {
      alert('建物の階数を入力してください。');
      return;
    }

    if ((option === 'balcony' || option === 'general') && balconyCount <= 0) {
      alert('バルコニーの個数を入力してください。');
      return;
    }

    const ageCoef = getAgeCoef(age);

    const minMax = (value) => formatRange(value, MIN_FACTOR, MAX_FACTOR);

    const detailBlocks = {
      roof: document.getElementById('roof-details'),
      exterior: document.getElementById('exterior-details'),
      wall: document.getElementById('wall-details'),
      balcony: document.getElementById('balcony-details'),
    };
    const totalRow = document.querySelector('.total-row');

    Object.values(detailBlocks).forEach((el) => {
      if (el) el.style.display = 'none';
    });
    if (totalRow) totalRow.style.display = 'none';

    let total = 0;

    if (option === 'general') {
      const roofArea = width * height;
      const roofSizeCoef = getRoofSizeCoef(roofArea);
      const structureCoef = getStructureCoef(structure);
      const roofShapeCoef = getRoofShapeCoef();
      const waterproofCoef = getWaterproofCoef(waterproof);
      const roofTotal = 5000 * roofArea * ageCoef * roofSizeCoef * structureCoef * roofShapeCoef * waterproofCoef;

      const wallArea = 2 * (width + height) * floors * 3;
      const wallSizeCoef = wallArea >= 300 ? 0.8 : 1;
      const wallMaterialForExterior = getExteriorWallMaterialCoef(document.querySelector('[data-wall-material].active')?.dataset.wallMaterial);
      const exteriorTotal = 800 * wallArea * ageCoef * (wallSizeCoef * wallMaterialForExterior);

      const balconyArea = width * height * balconyCount;
      const balconyTotal = balconyArea <= 20 ? 130000 : 4000 * balconyArea * ageCoef;

      const wallMaterialForPaint = getPaintWallMaterialCoef(document.querySelector('[data-wall-material].active')?.dataset.wallMaterial);
      const paintTotal = 2500 * wallArea * ageCoef * (wallSizeCoef * wallMaterialForPaint);

      total = roofTotal + exteriorTotal + balconyTotal + paintTotal;

      if (detailBlocks.roof) detailBlocks.roof.style.display = 'block';
      if (detailBlocks.exterior) detailBlocks.exterior.style.display = 'block';
      if (detailBlocks.wall) detailBlocks.wall.style.display = 'block';
      if (detailBlocks.balcony) detailBlocks.balcony.style.display = 'block';
      if (totalRow) totalRow.style.display = 'flex';

      setText('roof-total', minMax(roofTotal));
      setText('exterior-total', minMax(exteriorTotal));
      setText('wall-total', minMax(paintTotal));
      setText('balcony-total', minMax(balconyTotal));
      setText('total-price', minMax(total));
      setText('total-price-range', minMax(total));

      renderRoofBreakdown(roofTotal, true);
      renderExteriorBreakdown(exteriorTotal);
      renderWallBreakdown(paintTotal);
      renderBalconyBreakdown(balconyTotal);
    } else if (option === 'roof') {
      const roofArea = width * height;
      const roofSizeCoef = getRoofSizeCoef(roofArea);
      const structureCoef = getStructureCoef(structure);
      const roofShapeCoef = getRoofShapeCoef();
      const waterproofCoef = getWaterproofCoef(waterproof);

      total = roofArea * 5000 * ageCoef * roofSizeCoef * structureCoef * roofShapeCoef * waterproofCoef;

      if (detailBlocks.roof) detailBlocks.roof.style.display = 'block';
      setText('roof-total', minMax(total));
      setText('total-price-range', minMax(total));

      renderRoofBreakdown(total, false);
    } else if (option === 'exterior') {
      const wallArea = 2 * (width + height) * floors * 3;
      const wallSizeCoef = wallArea >= 300 ? 0.8 : 1;
      const wallMaterialCoef = getExteriorWallMaterialCoef(document.querySelector('[data-wall-material].active')?.dataset.wallMaterial);

      total = wallArea * 800 * ageCoef * (wallSizeCoef * wallMaterialCoef);

      if (detailBlocks.exterior) detailBlocks.exterior.style.display = 'block';
      setText('exterior-total', minMax(total));
      setText('total-price-range', minMax(total));

      renderExteriorBreakdown(total);
    } else if (option === 'wall') {
      const wallArea = 2 * (width + height) * floors * 3;
      const wallSizeCoef = wallArea >= 300 ? 0.8 : 1;
      const wallMaterialCoef = getPaintWallMaterialCoef(document.querySelector('[data-wall-material].active')?.dataset.wallMaterial);

      total = wallArea * 2500 * ageCoef * (wallSizeCoef * wallMaterialCoef);

      if (detailBlocks.wall) detailBlocks.wall.style.display = 'block';
      setText('wall-total', minMax(total));
      setText('total-price-range', minMax(total));

      renderWallBreakdown(total);
    } else if (option === 'balcony') {
      const balconyArea = width * height * balconyCount;
      total = balconyArea <= 20 ? 130000 : balconyArea * 4000 * ageCoef;

      if (detailBlocks.balcony) detailBlocks.balcony.style.display = 'block';
      setText('balcony-total', minMax(total));
      setText('total-price-range', minMax(total));

      renderBalconyBreakdown(total);
    }

    const resultArea = document.getElementById('result-area');
    if (resultArea) {
      resultArea.style.display = 'block';
      resultArea.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function safeNumber(value, fallback = 0) {
    const n = typeof value === 'string' ? parseFloat(value) : Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function getAgeCoef(age) {
    if (age === 'less10') return 0.8;
    if (age === 'over30') return 1.1;
    return 1;
  }

  function getStructureCoef(structure) {
    if (structure === 'steel') return 0.9;
    if (structure === 'mixed') return 1.1;
    return 1;
  }

  function getRoofSizeCoef(area) {
    if (area >= 300) return 0.75;
    if (area >= 50) return 1;
    return 1.2;
  }

  function getRoofShapeCoef() {
    const shape = document.querySelector('[data-roof-shape].active')?.dataset.roofShape ?? 'flat';
    if (shape !== 'slope') return 1;

    let coef = 1.3;
    const method = document.querySelector('[data-roof-method].active')?.dataset.roofMethod ?? 'paint';
    if (method === 'cover') coef *= 1.8;
    else if (method === 'replace') coef *= 2.5;
    return coef;
  }

  function getWaterproofCoef(waterproof) {
    if (waterproof === 'frp') return 1.05;
    if (waterproof === 'sheet') return 1.1;
    if (waterproof === 'asphalt') return 1.15;
    if (waterproof === 'concrete') return 1.2;
    if (waterproof === 'unknown') return 1.1;
    return 1;
  }

  function getExteriorWallMaterialCoef(material) {
    if (material === 'mortar') return 0.5;
    return 1;
  }

  function getPaintWallMaterialCoef(material) {
    if (material === 'tile') return 0.8;
    return 1;
  }

  function formatRange(value, minFactor, maxFactor) {
    const min = Math.round(value * minFactor);
    const max = Math.round(value * maxFactor);
    return `${min.toLocaleString()}円〜${max.toLocaleString()}円`;
  }

  function isSlopeSelected() {
    return document.querySelector('[data-roof-shape="slope"].active') !== null;
  }

  function showRoofMethodRow() {
    const method = document.querySelector('[data-roof-method].active')?.dataset.roofMethod ?? 'paint';
    const paintRow = document.getElementById('roof-paint-row');
    const coverRow = document.getElementById('roof-cover-row');
    const replaceRow = document.getElementById('roof-replace-row');
    if (paintRow) paintRow.style.display = 'none';
    if (coverRow) coverRow.style.display = 'none';
    if (replaceRow) replaceRow.style.display = 'none';
    if (method === 'cover') {
      if (coverRow) coverRow.style.display = 'flex';
    } else if (method === 'replace') {
      if (replaceRow) replaceRow.style.display = 'flex';
    } else {
      if (paintRow) paintRow.style.display = 'flex';
    }
  }

  function renderRoofBreakdown(total, isGeneral) {
    const flat = document.getElementById('flat-roof-details');
    const sloped = document.getElementById('sloped-roof-details');
    const slope = isSlopeSelected();

    if (flat && sloped) {
      flat.style.display = slope ? 'none' : 'block';
      sloped.style.display = slope ? 'block' : 'none';
    }

    if (slope) {
      showRoofMethodRow();
      setText('roof-cleaning-price-sloped', formatRange(total * 0.05, MIN_FACTOR, MAX_FACTOR));
      setText('roof-prep-remove-price', formatRange(total * 0.2, MIN_FACTOR, MAX_FACTOR));
      const methodCost = formatRange(total * 0.75, MIN_FACTOR, MAX_FACTOR);
      setText('roof-paint-price', methodCost);
      setText('roof-cover-price', methodCost);
      setText('roof-replace-price', methodCost);
    } else {
      setText('roof-cleaning-price', formatRange(total * 0.05, MIN_FACTOR, MAX_FACTOR));
      setText('roof-repair-price', formatRange(total * 0.1, MIN_FACTOR, MAX_FACTOR));
      setText('roof-prep-price', formatRange(total * 0.55, MIN_FACTOR, MAX_FACTOR));
      setText('roof-main-price', formatRange(total * 0.2, MIN_FACTOR, MAX_FACTOR));
      setText('roof-sealing-price', formatRange(total * 0.1, MIN_FACTOR, MAX_FACTOR));
    }
    // NOTE: general の場合も同じ配分で内訳を表示する（本番と同様）
    void isGeneral;
  }

  function renderExteriorBreakdown(total) {
    setText('exterior-scaffold-price', formatRange(total * 0.3, MIN_FACTOR, MAX_FACTOR));
    setText('exterior-remove-price', formatRange(total * 0.1, MIN_FACTOR, MAX_FACTOR));
    setText('exterior-waterproof-price', formatRange(total * 0.6, MIN_FACTOR, MAX_FACTOR));
  }

  function renderWallBreakdown(total) {
    setText('wall-scaffold-price', formatRange(total * 0.3, MIN_FACTOR, MAX_FACTOR));
    setText('wall-remove-price', formatRange(total * 0.1, MIN_FACTOR, MAX_FACTOR));
    setText('wall-paint-price', formatRange(total * 0.5, MIN_FACTOR, MAX_FACTOR));
    setText('wall-accessory-price', formatRange(total * 0.1, MIN_FACTOR, MAX_FACTOR));
  }

  function renderBalconyBreakdown(total) {
    setText('balcony-cleaning-price', formatRange(total * 0.05, MIN_FACTOR, MAX_FACTOR));
    setText('balcony-repair-price', formatRange(total * 0.1, MIN_FACTOR, MAX_FACTOR));
    setText('balcony-prep-price', formatRange(total * 0.55, MIN_FACTOR, MAX_FACTOR));
    setText('balcony-main-price', formatRange(total * 0.2, MIN_FACTOR, MAX_FACTOR));
    setText('balcony-sealing-price', formatRange(total * 0.1, MIN_FACTOR, MAX_FACTOR));
  }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindSimulation, { once: true });
  } else {
    bindSimulation();
  }

  window.addEventListener('pageshow', bindSimulation);
  const observer = new MutationObserver(() => {
    bindSimulation();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
