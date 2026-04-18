/**
 * SKF Bearing Fit Calculator — Application Logic
 * Predictive search, adjustment calculations, and CAD SVG rendering
 */

// ═══════════════════════════════════════════
// State
// ═══════════════════════════════════════════
let selectedBearing = null;
let activeIndex = -1;
let filteredBearings = [];
let debounceTimer = null;

// ═══════════════════════════════════════════
// Init
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initStats();
  initSearch();
});

function initStats() {
  const srbCount = BEARINGS_DB.filter(b => b.tipo === 'SRB').length;
  const dgbbCount = BEARINGS_DB.filter(b => b.tipo === 'DGBB').length;
  const sabbCount = BEARINGS_DB.filter(b => b.tipo === 'SABB').length;
  const splitCount = BEARINGS_DB.filter(b => b.tipo === 'FAG_SPLIT').length;
  document.getElementById('stat-srb').textContent = srbCount;
  document.getElementById('stat-dgbb').textContent = dgbbCount;
  document.getElementById('stat-sabb').textContent = sabbCount;
  document.getElementById('stat-split').textContent = splitCount;
  document.getElementById('stat-total').textContent = BEARINGS_DB.length;
}

// ═══════════════════════════════════════════
// Predictive Search
// ═══════════════════════════════════════════
function initSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('autocomplete-dropdown');

  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      handleSearch(e.target.value.trim());
    }, 120);
  });

  input.addEventListener('keydown', (e) => {
    if (!dropdown.classList.contains('visible')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleSearch(input.value.trim());
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, filteredBearings.length - 1);
        updateActiveItem();
        break;
      case 'ArrowUp':
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        updateActiveItem();
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredBearings.length) {
          selectBearing(filteredBearings[activeIndex]);
        }
        break;
      case 'Escape':
        closeDropdown();
        break;
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length > 0) {
      handleSearch(input.value.trim());
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
      closeDropdown();
    }
  });
}

function handleSearch(query) {
  const dropdown = document.getElementById('autocomplete-dropdown');
  
  if (query.length === 0) {
    closeDropdown();
    return;
  }

  const q = query.toLowerCase().replace(/\s+/g, '');
  
  filteredBearings = BEARINGS_DB.filter(b => {
    const des = b.designacion.toLowerCase().replace(/\s+/g, '');
    const dims = `${b.d}x${b.D}x${b.B}`;
    return des.includes(q) || dims.includes(q) || b.serie.includes(q);
  }).slice(0, 50);

  activeIndex = -1;

  if (filteredBearings.length === 0) {
    dropdown.innerHTML = `
      <div class="autocomplete-empty">
        No se encontraron rodamientos para "<strong>${escapeHtml(query)}</strong>"
      </div>`;
    dropdown.classList.add('visible');
    return;
  }

  dropdown.innerHTML = filteredBearings.map((b, i) => {
    const typeClass = b.tipo.toLowerCase();
    const typeLabel = b.tipo;
    const sleeveInfo = b.manguito ? ` · ${b.manguito}` : '';
    const designation = highlightMatch(b.designacion, query);
    return `
      <div class="autocomplete-item" data-index="${i}" 
           onclick="selectBearing(filteredBearings[${i}])"
           onmouseenter="activeIndex=${i}; updateActiveItem()">
        <span class="ac-type-badge ${typeClass}">${typeLabel}</span>
        <div class="ac-info">
          <div class="ac-designation">${designation}</div>
          <div class="ac-dims">${b.d} × ${b.D} × ${b.B} mm · ${b.masa} kg${sleeveInfo}</div>
        </div>
      </div>`;
  }).join('');

  dropdown.classList.add('visible');
}

function highlightMatch(text, query) {
  const q = query.replace(/\s+/g, '');
  const idx = text.toLowerCase().replace(/\s+/g, '').indexOf(q.toLowerCase());
  if (idx === -1) return escapeHtml(text);
  
  // Map back to original text positions
  let origIdx = 0, matchStart = -1, matchEnd = -1;
  let stripped = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      if (stripped === idx && matchStart === -1) matchStart = i;
      if (stripped === idx + q.length - 1) { matchEnd = i + 1; break; }
      stripped++;
    }
  }
  
  if (matchStart === -1) return escapeHtml(text);
  if (matchEnd === -1) matchEnd = text.length;
  
  return escapeHtml(text.substring(0, matchStart)) +
    '<span class="highlight">' + escapeHtml(text.substring(matchStart, matchEnd)) + '</span>' +
    escapeHtml(text.substring(matchEnd));
}

function updateActiveItem() {
  const items = document.querySelectorAll('.autocomplete-item');
  items.forEach((item, i) => {
    item.classList.toggle('active', i === activeIndex);
  });
  
  // Scroll into view
  if (activeIndex >= 0 && items[activeIndex]) {
    items[activeIndex].scrollIntoView({ block: 'nearest' });
  }
}

function closeDropdown() {
  document.getElementById('autocomplete-dropdown').classList.remove('visible');
  activeIndex = -1;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ═══════════════════════════════════════════
// Select Bearing
// ═══════════════════════════════════════════
function selectBearing(bearing) {
  selectedBearing = bearing;
  const input = document.getElementById('search-input');
  input.value = bearing.designacion;
  closeDropdown();

  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('results-panel').classList.add('visible');
  document.getElementById('calc-results').style.display = 'none';

  renderBearingHeader(bearing);
  renderClearanceTable(bearing);
  renderCalculationForm(bearing);
  renderCADDrawing(bearing);
}

// ═══════════════════════════════════════════
// Render Bearing Header
// ═══════════════════════════════════════════
function renderBearingHeader(b) {
  document.getElementById('bearing-designation').textContent = b.designacion;
  
  const tag = document.getElementById('bearing-type-tag');
  const typeInfo = BEARING_TYPES[b.tipo];
  tag.textContent = typeInfo.label;
  tag.className = 'bearing-type-tag ' + b.tipo.toLowerCase();

  const grid = document.getElementById('bearing-dims-grid');
  const dims = [
    { label: 'Bore (d)', value: b.d, unit: 'mm' },
    { label: 'OD (D)', value: b.D, unit: 'mm' },
    { label: 'Ancho (B)', value: b.B, unit: 'mm' },
    { label: 'Radio (r)', value: b.r_min, unit: 'mm' },
    { label: 'Masa', value: b.masa, unit: 'kg' },
    { label: 'Serie', value: b.serie, unit: '' },
  ];
  if (b.manguito) {
    dims.push({ label: 'Manguito', value: b.manguito, unit: '' });
  }

  grid.innerHTML = dims.map(d => `
    <div class="dim-item">
      <div class="dim-label">${d.label}</div>
      <div class="dim-value">${d.value}<span class="dim-unit">${d.unit}</span></div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
// Render Clearance Table
// ═══════════════════════════════════════════
function renderClearanceTable(b) {
  const tbody = document.getElementById('clearance-tbody');
  
  if (b.tipo === 'FAG_SPLIT' || !b.juego) {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" style="text-align:center; padding: 16px; color: var(--text-secondary);">
          Ajuste por torque de tornillos. No se usa clase de juego radial.
        </td>
      </tr>`;
    return;
  }

  const classes = ['CN', 'C3', 'C4'];
  
  tbody.innerHTML = classes.map(cls => {
    const j = b.juego[cls];
    return `
      <tr>
        <td class="class-label">${cls}</td>
        <td>${j.min}</td>
        <td>${j.max}</td>
      </tr>`;
  }).join('');
}

// ═══════════════════════════════════════════
// Render Calculation Form
// ═══════════════════════════════════════════
function renderCalculationForm(b) {
  const fitCard = document.getElementById('fit-card');
  const calcTitle = document.getElementById('calc-card-title');
  const formSrb = document.getElementById('calc-form-srb');

  if (b.tipo === 'DGBB') {
    // Show fit recommendations
    fitCard.style.display = 'block';
    const fitGrid = document.getElementById('fit-grid');
    fitGrid.innerHTML = `
      <div class="fit-card">
        <div class="fit-card-label">Eje (Aro Interior)</div>
        <div class="fit-card-value">${b.ajuste_eje}</div>
      </div>
      <div class="fit-card">
        <div class="fit-card-label">Alojamiento (Aro Exterior)</div>
        <div class="fit-card-value">${b.ajuste_alojamiento}</div>
      </div>
    `;

    calcTitle.textContent = 'Verificación de Juego';
    formSrb.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="clearance-class">Clase de juego:</label>
        <select class="form-select" id="clearance-class">
          <option value="CN" selected>CN — Normal</option>
          <option value="C3">C3 — Mayor que Normal</option>
          <option value="C4">C4 — Mayor que C3</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="measured-clearance">Juego radial medido (mm):</label>
        <input type="number" class="form-input" id="measured-clearance" step="0.001" min="0" placeholder="Ej: 0.015">
      </div>
      <button class="btn-calculate" id="btn-calculate" onclick="calculateAdjustment()">
        ⚡ Verificar Juego
      </button>
    `;

  } else if (b.tipo === 'SABB') {
    // SABB — Self-aligning ball bearing with adapter sleeve
    // NO se usa galga de espesores. Ajuste por ángulo de apriete y calado axial.
    fitCard.style.display = 'block';
    const fitGrid = document.getElementById('fit-grid');
    fitGrid.innerHTML = `
      <div class="fit-card">
        <div class="fit-card-label">Manguito de Fijación</div>
        <div class="fit-card-value">${b.manguito}</div>
      </div>
      <div class="fit-card">
        <div class="fit-card-label">Tipo de Montaje</div>
        <div class="fit-card-value" style="font-size: 14px;">Agujero Cónico 1:12</div>
      </div>
    `;

    calcTitle.textContent = 'Ajuste de Montaje (Automático)';
    // Mostrar resultados automáticamente sin pedir entrada
    formSrb.innerHTML = '';
    renderSABBAutoResults(b);

  } else if (b.tipo === 'FAG_SPLIT') {
    fitCard.style.display = 'none';
    calcTitle.textContent = 'Ajuste de Montaje por Torque';
    formSrb.innerHTML = '';
    const resultsDiv = document.getElementById('calc-results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = renderFagSplitResults(b);

  } else {
    // SRB
    fitCard.style.display = 'none';
    calcTitle.textContent = 'Cálculo de Ajuste (Montaje Cónico)';
    formSrb.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="clearance-class">Clase de juego del rodamiento:</label>
        <select class="form-select" id="clearance-class">
          <option value="CN">CN — Normal</option>
          <option value="C3" selected>C3 — Mayor que Normal</option>
          <option value="C4">C4 — Mayor que C3</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="measured-clearance">Juego radial medido (mm) — galga de espesores:</label>
        <input type="number" class="form-input" id="measured-clearance" step="0.001" min="0" placeholder="Ej: 0.170">
      </div>
      <button class="btn-calculate" id="btn-calculate" onclick="calculateAdjustment()">
        ⚡ Calcular Ajuste
      </button>
    `;
  }
}

// ═══════════════════════════════════════════
// Calculate Adjustment
// ═══════════════════════════════════════════
function calculateAdjustment() {
  if (!selectedBearing) return;

  const clearanceClass = document.getElementById('clearance-class').value;
  const measuredStr = document.getElementById('measured-clearance').value;
  
  if (!measuredStr) {
    alert('Ingrese el juego radial medido');
    return;
  }

  const measured_mm = parseFloat(measuredStr);
  const measured_um = measured_mm * 1000; // convert to µm
  const b = selectedBearing;
  const juego = b.juego[clearanceClass];

  const resultsDiv = document.getElementById('calc-results');
  resultsDiv.style.display = 'block';

  if (b.tipo === 'SRB' || b.tipo === 'SABB') {
    calculateSRB(b, juego, measured_mm, measured_um, clearanceClass, resultsDiv);
  } else {
    calculateDGBB(b, juego, measured_mm, measured_um, clearanceClass, resultsDiv);
  }
}

function calculateSRB(b, juego, measured_mm, measured_um, clearanceClass, container) {
  // 1. Validate initial clearance
  let validationStatus, validationClass;
  if (measured_um < juego.min) {
    validationStatus = '⚠️ POR DEBAJO del rango — Verificar clase o error de medición';
    validationClass = 'danger';
  } else if (measured_um > juego.max) {
    validationStatus = '⚠️ POR ENCIMA del rango — ¿Clase C3/C4 correcta?';
    validationClass = 'warning';
  } else {
    validationStatus = '✅ Juego inicial dentro de norma';
    validationClass = 'good';
  }

  // 2. Calculate reduction
  const redMin_um = b.reduccion.min;
  const redMax_um = b.reduccion.max;
  const redAvg_um = (redMin_um + redMax_um) / 2;
  const redAvg_mm = redAvg_um / 1000;

  // 3. Target final clearance
  let targetClearance_mm = measured_mm - redAvg_mm;
  const minResidual_mm = b.juego_residual_min / 1000;
  
  let safetyNote = '';
  let safetyClass = 'success';
  
  if (targetClearance_mm < minResidual_mm) {
    targetClearance_mm = minResidual_mm;
    safetyNote = 'Ajustado al límite mínimo de seguridad para evitar gripado.';
    safetyClass = 'warning';
  } else {
    safetyNote = 'Ajuste óptimo calculado. El juego residual está dentro del rango seguro.';
    safetyClass = 'success';
  }

  // 4. Axial drive-up
  const axialMin = b.calado_axial.min;
  const axialMax = b.calado_axial.max;
  const axialAvg = ((axialMin + axialMax) / 2).toFixed(2);

  // 5. Tightening angle
  let angleHtml = '';
  if (b.angulo_apriete) {
    angleHtml = `
      <div class="result-item">
        <span class="result-label">🔩 Ángulo de apriete tuerca</span>
        <span class="result-value">${b.angulo_apriete.min}° — ${b.angulo_apriete.max}°</span>
      </div>`;
  } else {
    angleHtml = `
      <div class="result-item">
        <span class="result-label">🔩 Ángulo de apriete</span>
        <span class="result-value" style="color: var(--text-muted); font-size: 13px;">N/A — Use método Drive-up (d > 120mm)</span>
      </div>`;
  }

  container.innerHTML = `
    <div class="result-card" style="margin-top: 20px;">
      <div class="result-item">
        <span class="result-label">📋 Validación juego ${clearanceClass}</span>
        <span class="result-value ${validationClass}">${validationStatus}</span>
      </div>
      <div class="result-item">
        <span class="result-label">📉 Reducción aplicada</span>
        <span class="result-value">${redMin_um} — ${redMax_um} µm (prom: ${redAvg_um.toFixed(0)} µm)</span>
      </div>
      <div class="result-item">
        <span class="result-label">📏 Calado axial (drive-up)</span>
        <span class="result-value">${axialMin} — ${axialMax} mm</span>
      </div>
      ${angleHtml}
      <div class="result-item">
        <span class="result-label">🛡️ Juego residual mínimo</span>
        <span class="result-value">${b.juego_residual_min} µm (${minResidual_mm.toFixed(3)} mm)</span>
      </div>

      <div class="result-highlight">
        <div class="result-highlight-label">🎯 Juego Final Objetivo</div>
        <div class="result-highlight-value">
          ${targetClearance_mm.toFixed(3)} <span class="result-highlight-unit">mm</span>
          <span style="font-size: 14px; color: var(--text-secondary); margin-left: 6px;">
            (${(targetClearance_mm * 1000).toFixed(0)} µm)
          </span>
        </div>
      </div>

      <div class="result-note ${safetyClass}">
        <span class="result-note-icon">${safetyClass === 'success' ? '✅' : '⚠️'}</span>
        <span>${safetyNote}</span>
      </div>
    </div>
  `;
}

function calculateDGBB(b, juego, measured_mm, measured_um, clearanceClass, container) {
  // Validate clearance
  let validationStatus, validationClass;
  if (measured_um < juego.min) {
    validationStatus = '❌ POR DEBAJO del rango — Posible precarga excesiva';
    validationClass = 'danger';
  } else if (measured_um > juego.max) {
    validationStatus = '⚠️ POR ENCIMA del rango — Verificar clase de juego';
    validationClass = 'warning';
  } else {
    validationStatus = '✅ Juego radial dentro de norma';
    validationClass = 'good';
  }

  const midClearance = (juego.min + juego.max) / 2;
  const deviation = measured_um - midClearance;
  const deviationStr = deviation >= 0 ? `+${deviation.toFixed(0)}` : deviation.toFixed(0);

  container.innerHTML = `
    <div class="result-card" style="margin-top: 20px;">
      <div class="result-item">
        <span class="result-label">📋 Verificación juego ${clearanceClass}</span>
        <span class="result-value ${validationClass}">${validationStatus}</span>
      </div>
      <div class="result-item">
        <span class="result-label">📊 Rango esperado</span>
        <span class="result-value">${juego.min} — ${juego.max} µm</span>
      </div>
      <div class="result-item">
        <span class="result-label">📏 Juego medido</span>
        <span class="result-value">${measured_um.toFixed(0)} µm (${measured_mm.toFixed(3)} mm)</span>
      </div>
      <div class="result-item">
        <span class="result-label">📐 Desviación del centro</span>
        <span class="result-value ${deviation > 0 ? 'warning' : deviation < -(midClearance*0.3) ? 'danger' : ''}">${deviationStr} µm</span>
      </div>

      <div class="result-highlight">
        <div class="result-highlight-label">Ajustes de Montaje</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
          <div>
            <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Eje</div>
            <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: var(--accent-purple); margin-top: 4px;">${b.ajuste_eje}</div>
          </div>
          <div>
            <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Alojamiento</div>
            <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: var(--accent-amber); margin-top: 4px;">${b.ajuste_alojamiento}</div>
          </div>
        </div>
      </div>

      <div class="result-note ${validationClass === 'good' ? 'success' : validationClass === 'warning' ? 'warning' : 'danger'}">
        <span class="result-note-icon">${validationClass === 'good' ? '✅' : '⚠️'}</span>
        <span>${validationClass === 'good' 
          ? 'El juego radial es correcto para la clase seleccionada. El rodamiento puede montarse.'
          : 'Verifique la clase de juego (CN/C3/C4) y las condiciones de medición.'}</span>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════
// SABB Auto Results (no user input needed)
// ═══════════════════════════════════════════
function renderSABBAutoResults(b) {
  const resultsDiv = document.getElementById('calc-results');
  resultsDiv.style.display = 'block';

  const axialMin = b.calado_axial.min;
  const axialMax = b.calado_axial.max;
  const redMin = b.reduccion.min;
  const redMax = b.reduccion.max;
  const angMin = b.angulo_apriete ? b.angulo_apriete.min : null;
  const angMax = b.angulo_apriete ? b.angulo_apriete.max : null;

  const juegoCN = b.juego.CN;
  const juegoC3 = b.juego.C3;

  resultsDiv.innerHTML = `
    <div class="result-card" style="margin-top: 12px;">

      <div class="result-note success" style="margin-top: 0; margin-bottom: 16px;">
        <span class="result-note-icon">ℹ️</span>
        <span>Este rodamiento se ajusta por <strong>ángulo de apriete</strong> de la tuerca del manguito y verificación táctil (giro suave del aro exterior). <strong>No requiere medición con galga de espesores.</strong></span>
      </div>

      ${angMin !== null ? `
      <div class="result-highlight" style="margin-top: 0;">
        <div class="result-highlight-label">🔧 Ángulo de Apriete de Tuerca</div>
        <div class="result-highlight-value">
          ${angMin === angMax ? angMin + '°' : angMin + '° — ' + angMax + '°'}
        </div>
        <div style="font-size: 12px; color: var(--text-secondary); margin-top: 6px;">
          Desde posición "cero" (manguito firme en eje, sin juego)
        </div>
      </div>
      ` : ''}

      <div class="result-item">
        <span class="result-label">📏 Calado axial (drive-up)</span>
        <span class="result-value">${axialMin} — ${axialMax} mm</span>
      </div>
      <div class="result-item">
        <span class="result-label">📉 Reducción de juego esperada</span>
        <span class="result-value">${redMin} — ${redMax} µm</span>
      </div>
      <div class="result-item">
        <span class="result-label">🔩 Manguito de fijación</span>
        <span class="result-value">${b.manguito}</span>
      </div>
      <div class="result-item">
        <span class="result-label">📊 Juego inicial CN</span>
        <span class="result-value">${juegoCN.min} — ${juegoCN.max} µm</span>
      </div>
      <div class="result-item">
        <span class="result-label">📊 Juego inicial C3</span>
        <span class="result-value">${juegoC3.min} — ${juegoC3.max} µm</span>
      </div>
      <div class="result-item">
        <span class="result-label">🛡️ Juego residual mínimo</span>
        <span class="result-value">${b.juego_residual_min} µm</span>
      </div>

      <div style="margin-top: 20px; padding: 16px; background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
        <div style="font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 10px;">📋 Procedimiento de Montaje:</div>
        <ol style="font-size: 12px; color: var(--text-secondary); margin: 0; padding-left: 20px; line-height: 1.8;">
          <li>Limpiar eje y superficies del manguito. Aceitar ligeramente.</li>
          <li>Colocar manguito en eje y deslizar rodamiento en posición.</li>
          <li>Instalar tuerca (sin arandela de fijación) y apretar a mano hasta que el conjunto agarre el eje <strong>("posición cero")</strong>.</li>
          <li>Marcar posición de referencia en tuerca y eje.</li>
          <li>Apretar tuerca <strong>${angMin === angMax ? angMin + '°' : angMin + '° — ' + angMax + '°'}</strong> desde posición cero.</li>
          <li>Verificar: el aro exterior debe <strong>girar libremente</strong> pero presentar <strong>ligera resistencia al balanceo</strong>.</li>
          <li>Instalar arandela de fijación y asegurar pestaña en ranura de la tuerca.</li>
        </ol>
      </div>

      <div class="result-note warning" style="margin-top: 16px;">
        <span class="result-note-icon">⚠️</span>
        <span><strong>Precaución:</strong> No sobre-apretar. Estos rodamientos tienen juego interno pequeño y el exceso de calado elimina toda holgura, causando sobrecalentamiento y falla prematura.</span>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════
// CAD SVG Drawing
// ═══════════════════════════════════════════
function renderCADDrawing(b) {
  const container = document.getElementById('cad-body');
  const scaleInfo = document.getElementById('cad-scale-info');

  if (b.tipo === 'SRB') {
    container.innerHTML = renderSRB_SVG(b);
  } else if (b.tipo === 'SABB') {
    container.innerHTML = renderSABB_SVG(b);
  } else if (b.tipo === 'FAG_SPLIT') {
    container.innerHTML = renderFagSplit_SVG(b);
  } else {
    container.innerHTML = renderDGBB_SVG(b);
  }

  scaleInfo.textContent = `${b.d}×${b.D}×${b.B} mm`;
}

function renderSRB_SVG(b) {
  const W = 520, H = 420;
  const cx = W / 2, cy = H / 2;
  
  // Scale bearing to fit nicely
  const maxDim = Math.max(b.D, b.B * 2);
  const scale = Math.min(220 / b.D, 180 / b.B);
  
  const rOuter = (b.D / 2) * scale;
  const rInner = (b.d / 2) * scale;
  const halfB = (b.B / 2) * scale;
  const rFillet = b.r_min * scale;
  
  // Roller path (spherical profile)
  const rMid = (rOuter + rInner) / 2;
  const rollerH = (rOuter - rInner) * 0.35;
  
  return `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width: 480px;">
      <defs>
        <linearGradient id="steelOuter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5a6a82"/>
          <stop offset="40%" stop-color="#4a5a70"/>
          <stop offset="100%" stop-color="#3a4a5e"/>
        </linearGradient>
        <linearGradient id="steelInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6a7a92"/>
          <stop offset="100%" stop-color="#4a5a70"/>
        </linearGradient>
        <linearGradient id="roller" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8899aa"/>
          <stop offset="100%" stop-color="#667788"/>
        </linearGradient>
        <marker id="arrowStart" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M10,0 L0,5 L10,10" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </marker>
        <marker id="arrowEnd" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </marker>
      </defs>
      
      <!-- Title -->
      <text x="${cx}" y="22" text-anchor="middle" fill="#8892a8" font-family="Inter,sans-serif" font-size="12" font-weight="500">
        SECCIÓN TRANSVERSAL — ${b.designacion}
      </text>
      
      <!-- Center line -->
      <line x1="${cx - halfB - 50}" y1="${cy}" x2="${cx + halfB + 50}" y2="${cy}" 
            stroke="#3b82f6" stroke-width="0.5" stroke-dasharray="8,4" opacity="0.4"/>
      
      <!-- UPPER HALF (cross section) -->
      
      <!-- Outer Ring -->
      <rect x="${cx - halfB}" y="${cy - rOuter}" width="${halfB * 2}" height="${rOuter - rMid + rollerH + 8}" 
            rx="2" fill="url(#steelOuter)" stroke="#2a3a52" stroke-width="1.5"/>
      
      <!-- Inner Ring (with taper indication) -->
      <path d="M${cx - halfB},${cy - rInner - 2} 
               L${cx + halfB},${cy - rInner + 2}
               L${cx + halfB},${cy - rMid + rollerH + 12}
               L${cx - halfB},${cy - rMid + rollerH + 12} Z"
            fill="url(#steelInner)" stroke="#2a3a52" stroke-width="1.5"/>
      
      <!-- Taper indication (K suffix) -->
      <line x1="${cx - halfB + 3}" y1="${cy - rInner}" x2="${cx + halfB - 3}" y2="${cy - rInner + 4}"
            stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="3,2" opacity="0.6"/>
      
      <!-- Rollers (3 shown) -->
      ${[-0.6, 0, 0.6].map(pos => {
        const rx = cx + pos * halfB * 0.7;
        const ry = cy - rMid + 2;
        return `<ellipse cx="${rx}" cy="${ry}" rx="${halfB * 0.18}" ry="${rollerH * 0.7}"
                  fill="url(#roller)" stroke="#556677" stroke-width="1"/>`;
      }).join('')}
      
      <!-- Spherical raceway arc -->
      <path d="M${cx - halfB + 10},${cy - rMid - rollerH + 2} 
               Q${cx},${cy - rMid - rollerH - 6} ${cx + halfB - 10},${cy - rMid - rollerH + 2}"
            fill="none" stroke="#fbbf24" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.5"/>
      
      <!-- LOWER HALF (mirror) -->
      
      <!-- Outer Ring Lower -->
      <rect x="${cx - halfB}" y="${cy + rMid - rollerH - 8}" width="${halfB * 2}" height="${rOuter - rMid + rollerH + 8}" 
            rx="2" fill="url(#steelOuter)" stroke="#2a3a52" stroke-width="1.5"/>
      
      <!-- Inner Ring Lower -->
      <path d="M${cx - halfB},${cy + rMid - rollerH - 12} 
               L${cx + halfB},${cy + rMid - rollerH - 12}
               L${cx + halfB},${cy + rInner + 2}
               L${cx - halfB},${cy + rInner - 2} Z"
            fill="url(#steelInner)" stroke="#2a3a52" stroke-width="1.5"/>
      
      <!-- Rollers Lower -->
      ${[-0.6, 0, 0.6].map(pos => {
        const rx = cx + pos * halfB * 0.7;
        const ry = cy + rMid - 2;
        return `<ellipse cx="${rx}" cy="${ry}" rx="${halfB * 0.18}" ry="${rollerH * 0.7}"
                  fill="url(#roller)" stroke="#556677" stroke-width="1"/>`;
      }).join('')}
      
      <!-- ═ DIMENSION LINES ═ -->
      
      <!-- D (outer diameter) — vertical left -->
      ${dimLineV(cx - halfB - 40, cy - rOuter, cy + rOuter, `D = ${b.D}`)}
      
      <!-- d (bore) — vertical right -->
      ${dimLineV(cx + halfB + 40, cy - rInner, cy + rInner, `d = ${b.d}`)}
      
      <!-- B (width) — horizontal top -->
      ${dimLineH(cx - halfB, cx + halfB, cy - rOuter - 25, `B = ${b.B}`)}
    </svg>
  `;
}

function renderDGBB_SVG(b) {
  const W = 520, H = 420;
  const cx = W / 2, cy = H / 2;
  
  const scale = Math.min(220 / b.D, 180 / b.B);
  
  const rOuter = (b.D / 2) * scale;
  const rInner = (b.d / 2) * scale;
  const halfB = (b.B / 2) * scale;
  
  const rBall = (rOuter - rInner) * 0.25;
  const rPitch = (rOuter + rInner) / 2;
  
  return `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width: 480px;">
      <defs>
        <linearGradient id="steelOuterBall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5a7a62"/>
          <stop offset="40%" stop-color="#4a6a52"/>
          <stop offset="100%" stop-color="#3a5a42"/>
        </linearGradient>
        <linearGradient id="steelInnerBall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6a8a72"/>
          <stop offset="100%" stop-color="#4a6a52"/>
        </linearGradient>
        <radialGradient id="ballGrad" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#c0d0e0"/>
          <stop offset="60%" stop-color="#8899aa"/>
          <stop offset="100%" stop-color="#667788"/>
        </radialGradient>
        <marker id="arrowStartG" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M10,0 L0,5 L10,10" fill="none" stroke="#66bb6a" stroke-width="1.5"/>
        </marker>
        <marker id="arrowEndG" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="#66bb6a" stroke-width="1.5"/>
        </marker>
      </defs>
      
      <!-- Title -->
      <text x="${cx}" y="22" text-anchor="middle" fill="#8892a8" font-family="Inter,sans-serif" font-size="12" font-weight="500">
        SECCIÓN TRANSVERSAL — ${b.designacion}
      </text>
      
      <!-- Center line -->
      <line x1="${cx - halfB - 50}" y1="${cy}" x2="${cx + halfB + 50}" y2="${cy}" 
            stroke="#66bb6a" stroke-width="0.5" stroke-dasharray="8,4" opacity="0.4"/>
      
      <!-- UPPER HALF -->
      
      <!-- Outer Ring -->
      <rect x="${cx - halfB}" y="${cy - rOuter}" width="${halfB * 2}" height="${rOuter - rPitch + rBall + 10}" 
            rx="2" fill="url(#steelOuterBall)" stroke="#2a4a32" stroke-width="1.5"/>
      
      <!-- Deep groove in outer ring -->
      <path d="M${cx - rBall * 1.2},${cy - rPitch} 
               Q${cx},${cy - rPitch - rBall * 0.4} ${cx + rBall * 1.2},${cy - rPitch}"
            fill="none" stroke="#1a3a22" stroke-width="1.5" opacity="0.6"/>
      
      <!-- Inner Ring -->
      <rect x="${cx - halfB}" y="${cy - rPitch + rBall + 14}" width="${halfB * 2}" height="${rPitch - rBall - 14 - rInner}" 
            rx="2" fill="url(#steelInnerBall)" stroke="#2a4a32" stroke-width="1.5"/>
      <rect x="${cx - halfB}" y="${cy - rInner}" width="${halfB * 2}" height="0"
            fill="none"/>
      
      <!-- Correct inner ring shape -->
      <rect x="${cx - halfB}" y="${cy - rPitch - rBall + 6}" width="${halfB * 2}" height="${rPitch + rBall - 6 - rInner}" 
            rx="1" fill="url(#steelInnerBall)" stroke="#2a4a32" stroke-width="1" opacity="0"/>
      
      <!-- Inner ring solid -->
      <rect x="${cx - halfB}" y="${cy - rPitch + rBall - 4}" width="${halfB * 2}" height="${rPitch - rBall + 4 - rInner}" 
            rx="2" fill="url(#steelInnerBall)" stroke="#2a4a32" stroke-width="1.5"/>
      
      <!-- Ball (upper) -->
      <circle cx="${cx}" cy="${cy - rPitch}" r="${rBall}" fill="url(#ballGrad)" stroke="#556677" stroke-width="1.2"/>
      
      <!-- Additional balls for visual -->
      ${[-0.65, 0.65].map(pos => {
        const bx = cx + pos * halfB * 0.75;
        return `<circle cx="${bx}" cy="${cy - rPitch}" r="${rBall * 0.85}" fill="url(#ballGrad)" stroke="#556677" stroke-width="1" opacity="0.5"/>`;
      }).join('')}
      
      <!-- LOWER HALF (mirror) -->
      
      <!-- Outer Ring Lower -->
      <rect x="${cx - halfB}" y="${cy + rPitch - rBall - 10}" width="${halfB * 2}" height="${rOuter - rPitch + rBall + 10}" 
            rx="2" fill="url(#steelOuterBall)" stroke="#2a4a32" stroke-width="1.5"/>
      
      <!-- Inner Ring Lower -->
      <rect x="${cx - halfB}" y="${cy + rInner}" width="${halfB * 2}" height="${rPitch - rBall + 4 - rInner}" 
            rx="2" fill="url(#steelInnerBall)" stroke="#2a4a32" stroke-width="1.5"/>
      
      <!-- Ball (lower) -->
      <circle cx="${cx}" cy="${cy + rPitch}" r="${rBall}" fill="url(#ballGrad)" stroke="#556677" stroke-width="1.2"/>
      ${[-0.65, 0.65].map(pos => {
        const bx = cx + pos * halfB * 0.75;
        return `<circle cx="${bx}" cy="${cy + rPitch}" r="${rBall * 0.85}" fill="url(#ballGrad)" stroke="#556677" stroke-width="1" opacity="0.5"/>`;
      }).join('')}
      
      <!-- ═ DIMENSION LINES ═ -->
      
      <!-- D (outer diameter) — vertical left -->
      ${dimLineV_green(cx - halfB - 40, cy - rOuter, cy + rOuter, `D = ${b.D}`)}
      
      <!-- d (bore) — vertical right -->
      ${dimLineV_green(cx + halfB + 40, cy - rInner, cy + rInner, `d = ${b.d}`)}
      
      <!-- B (width) — horizontal top -->
      ${dimLineH_green(cx - halfB, cx + halfB, cy - rOuter - 25, `B = ${b.B}`)}
    </svg>
  `;
}

// ─── Dimension Line Helpers ───

function dimLineV(x, y1, y2, label) {
  const midY = (y1 + y2) / 2;
  return `
    <g>
      <line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#fbbf24" stroke-width="1.2"
            marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>
      <line x1="${x - 6}" y1="${y1}" x2="${x + 6}" y2="${y1}" stroke="#fbbf24" stroke-width="0.8"/>
      <line x1="${x - 6}" y1="${y2}" x2="${x + 6}" y2="${y2}" stroke="#fbbf24" stroke-width="0.8"/>
      <rect x="${x - 30}" y="${midY - 9}" width="60" height="18" rx="3" fill="#1a2035" stroke="#fbbf24" stroke-width="0.5" opacity="0.9"/>
      <text x="${x}" y="${midY + 4}" text-anchor="middle" fill="#fbbf24" 
            font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}

function dimLineH(x1, x2, y, label) {
  const midX = (x1 + x2) / 2;
  return `
    <g>
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#fbbf24" stroke-width="1.2"
            marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>
      <line x1="${x1}" y1="${y - 6}" x2="${x1}" y2="${y + 6}" stroke="#fbbf24" stroke-width="0.8"/>
      <line x1="${x2}" y1="${y - 6}" x2="${x2}" y2="${y + 6}" stroke="#fbbf24" stroke-width="0.8"/>
      <rect x="${midX - 32}" y="${y - 10}" width="64" height="18" rx="3" fill="#1a2035" stroke="#fbbf24" stroke-width="0.5" opacity="0.9"/>
      <text x="${midX}" y="${y + 3}" text-anchor="middle" fill="#fbbf24" 
            font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}

function dimLineV_green(x, y1, y2, label) {
  const midY = (y1 + y2) / 2;
  return `
    <g>
      <line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#66bb6a" stroke-width="1.2"
            marker-start="url(#arrowStartG)" marker-end="url(#arrowEndG)"/>
      <line x1="${x - 6}" y1="${y1}" x2="${x + 6}" y2="${y1}" stroke="#66bb6a" stroke-width="0.8"/>
      <line x1="${x - 6}" y1="${y2}" x2="${x + 6}" y2="${y2}" stroke="#66bb6a" stroke-width="0.8"/>
      <rect x="${x - 30}" y="${midY - 9}" width="60" height="18" rx="3" fill="#1a2035" stroke="#66bb6a" stroke-width="0.5" opacity="0.9"/>
      <text x="${x}" y="${midY + 4}" text-anchor="middle" fill="#66bb6a" 
            font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}

function dimLineH_green(x1, x2, y, label) {
  const midX = (x1 + x2) / 2;
  return `
    <g>
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#66bb6a" stroke-width="1.2"
            marker-start="url(#arrowStartG)" marker-end="url(#arrowEndG)"/>
      <line x1="${x1}" y1="${y - 6}" x2="${x1}" y2="${y + 6}" stroke="#66bb6a" stroke-width="0.8"/>
      <line x1="${x2}" y1="${y - 6}" x2="${x2}" y2="${y + 6}" stroke="#66bb6a" stroke-width="0.8"/>
      <rect x="${midX - 32}" y="${y - 10}" width="64" height="18" rx="3" fill="#1a2035" stroke="#66bb6a" stroke-width="0.5" opacity="0.9"/>
      <text x="${midX}" y="${y + 3}" text-anchor="middle" fill="#66bb6a" 
            font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}

// ─── SABB SVG Drawing ───

function renderSABB_SVG(b) {
  const W = 520, H = 420;
  const cx = W / 2, cy = H / 2;

  const scale = Math.min(220 / b.D, 180 / b.B);

  const rOuter = (b.D / 2) * scale;
  const rInner = (b.d / 2) * scale;
  const halfB = (b.B / 2) * scale;

  const rBall = (rOuter - rInner) * 0.20;
  const rPitch = (rOuter + rInner) / 2;
  const rowOffset = halfB * 0.28; // offset between the two rows

  return `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width: 480px;">
      <defs>
        <linearGradient id="steelOuterSabb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7a6a42"/>
          <stop offset="40%" stop-color="#6a5a32"/>
          <stop offset="100%" stop-color="#5a4a28"/>
        </linearGradient>
        <linearGradient id="steelInnerSabb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8a7a52"/>
          <stop offset="100%" stop-color="#6a5a32"/>
        </linearGradient>
        <radialGradient id="ballGradSabb" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#e0d0c0"/>
          <stop offset="60%" stop-color="#aa9988"/>
          <stop offset="100%" stop-color="#887766"/>
        </radialGradient>
        <marker id="arrowStartO" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M10,0 L0,5 L10,10" fill="none" stroke="#ff9800" stroke-width="1.5"/>
        </marker>
        <marker id="arrowEndO" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="#ff9800" stroke-width="1.5"/>
        </marker>
      </defs>

      <!-- Title -->
      <text x="${cx}" y="22" text-anchor="middle" fill="#8892a8" font-family="Inter,sans-serif" font-size="12" font-weight="500">
        SECCIÓN TRANSVERSAL — ${b.designacion} · ${b.manguito}
      </text>

      <!-- Center line -->
      <line x1="${cx - halfB - 50}" y1="${cy}" x2="${cx + halfB + 50}" y2="${cy}"
            stroke="#ff9800" stroke-width="0.5" stroke-dasharray="8,4" opacity="0.4"/>

      <!-- UPPER HALF -->

      <!-- Outer Ring with spherical raceway -->
      <rect x="${cx - halfB}" y="${cy - rOuter}" width="${halfB * 2}" height="${rOuter - rPitch + rBall + 12}"
            rx="2" fill="url(#steelOuterSabb)" stroke="#4a3a18" stroke-width="1.5"/>

      <!-- Spherical raceway arc in outer ring -->
      <path d="M${cx - halfB + 8},${cy - rPitch + 2}
               Q${cx},${cy - rPitch - rBall * 0.6} ${cx + halfB - 8},${cy - rPitch + 2}"
            fill="none" stroke="#ff9800" stroke-width="0.8" stroke-dasharray="3,2" opacity="0.5"/>

      <!-- Inner Ring (tapered bore) -->
      <path d="M${cx - halfB},${cy - rInner - 2}
               L${cx + halfB},${cy - rInner + 2}
               L${cx + halfB},${cy - rPitch + rBall + 14}
               L${cx - halfB},${cy - rPitch + rBall + 14} Z"
            fill="url(#steelInnerSabb)" stroke="#4a3a18" stroke-width="1.5"/>

      <!-- Taper indication -->
      <line x1="${cx - halfB + 3}" y1="${cy - rInner}" x2="${cx + halfB - 3}" y2="${cy - rInner + 4}"
            stroke="#ff9800" stroke-width="0.8" stroke-dasharray="3,2" opacity="0.5"/>

      <!-- Balls - Row 1 (left) -->
      ${[-0.5, 0.3].map(pos => {
        const bx = cx - rowOffset + pos * halfB * 0.3;
        return `<circle cx="${bx}" cy="${cy - rPitch}" r="${rBall}" fill="url(#ballGradSabb)" stroke="#665544" stroke-width="1"/>`;
      }).join('')}

      <!-- Balls - Row 2 (right) -->
      ${[-0.3, 0.5].map(pos => {
        const bx = cx + rowOffset + pos * halfB * 0.3;
        return `<circle cx="${bx}" cy="${cy - rPitch}" r="${rBall}" fill="url(#ballGradSabb)" stroke="#665544" stroke-width="1"/>`;
      }).join('')}

      <!-- Row separator indicator -->
      <line x1="${cx}" y1="${cy - rPitch - rBall - 3}" x2="${cx}" y2="${cy - rPitch + rBall + 3}"
            stroke="#ff9800" stroke-width="0.5" stroke-dasharray="2,1" opacity="0.4"/>

      <!-- LOWER HALF (mirror) -->

      <!-- Outer Ring Lower -->
      <rect x="${cx - halfB}" y="${cy + rPitch - rBall - 12}" width="${halfB * 2}" height="${rOuter - rPitch + rBall + 12}"
            rx="2" fill="url(#steelOuterSabb)" stroke="#4a3a18" stroke-width="1.5"/>

      <!-- Inner Ring Lower -->
      <path d="M${cx - halfB},${cy + rPitch - rBall - 14}
               L${cx + halfB},${cy + rPitch - rBall - 14}
               L${cx + halfB},${cy + rInner + 2}
               L${cx - halfB},${cy + rInner - 2} Z"
            fill="url(#steelInnerSabb)" stroke="#4a3a18" stroke-width="1.5"/>

      <!-- Balls Lower - Row 1 -->
      ${[-0.5, 0.3].map(pos => {
        const bx = cx - rowOffset + pos * halfB * 0.3;
        return `<circle cx="${bx}" cy="${cy + rPitch}" r="${rBall}" fill="url(#ballGradSabb)" stroke="#665544" stroke-width="1"/>`;
      }).join('')}

      <!-- Balls Lower - Row 2 -->
      ${[-0.3, 0.5].map(pos => {
        const bx = cx + rowOffset + pos * halfB * 0.3;
        return `<circle cx="${bx}" cy="${cy + rPitch}" r="${rBall}" fill="url(#ballGradSabb)" stroke="#665544" stroke-width="1"/>`;
      }).join('')}

      <!-- ═ DIMENSION LINES ═ -->

      <!-- D (outer diameter) — vertical left -->
      ${dimLineV_orange(cx - halfB - 40, cy - rOuter, cy + rOuter, `D = ${b.D}`)}

      <!-- d (bore) — vertical right -->
      ${dimLineV_orange(cx + halfB + 40, cy - rInner, cy + rInner, `d = ${b.d}`)}

      <!-- B (width) — horizontal top -->
      ${dimLineH_orange(cx - halfB, cx + halfB, cy - rOuter - 25, `B = ${b.B}`)}
    </svg>
  `;
}

// ─── FAG SPLIT SVG & Results ───

function renderFagSplitResults(b) {
  return `
    <div class="result-card">
      <div class="result-title" style="color: #60a5fa;">Torque de Apriete — Aro Interior</div>
      <div class="result-highlight" style="margin-bottom: 20px;">
        <div class="result-highlight-label">Tornillos Prisioneros y de Hombro</div>
        <div class="result-highlight-value" style="color: #60a5fa;">${b.pernos_interior.torque} Nm</div>
        <div style="font-size: 13px; color: var(--text-secondary); margin-top: 6px;">
          Dimensiones: <strong style="color:white;">${b.pernos_interior.dim}</strong>
        </div>
      </div>
      
      <div class="result-title" style="color: #f87171;">Torque de Apriete — Aro Exterior</div>
      <div class="result-highlight" style="border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.03);">
        <div class="result-highlight-label">Tornillos de Unión Externos</div>
        <div class="result-highlight-value" style="color: #f87171;">${b.pernos_exterior.torque} Nm</div>
        <div style="font-size: 13px; color: var(--text-secondary); margin-top: 6px;">
          Dimensiones: <strong style="color:white;">${b.pernos_exterior.dim}</strong>
        </div>
      </div>

      <div class="result-title" style="margin-top: 24px; color: #fbbf24;">📝 Guía de Montaje (Aros Partidos)</div>
      <div class="procedure-box">
        <ol class="procedure-list">
          <li>Asegurar que ambas lunas del aro interior correspondan (letras de emparejamiento hacia el mismo lado).</li>
          <li>Apretar los tornillos del aro interior en <strong>cruz/patrón Z</strong> a la mitad del torque: <strong style="color:#60a5fa;">${Math.round(b.pernos_interior.torque / 2)} Nm</strong>.</li>
          <li>Golpear suavemente el aro interior con maza de goma (polímero) para asentar las caras contra el eje.</li>
          <li>Llevar al 100% del torque (<strong style="color:#60a5fa;">${b.pernos_interior.torque} Nm</strong>) en patrón cruzado. <strong>Debe quedar una holgura (gap) simétrica y visible en ambas uniones del aro interior.</strong></li>
          <li>Ensamblar rodillos, jaula y tapar con las medias lunas del aro exterior.</li>
          <li>Apretar tornillos del aro exterior a <strong style="color:#f87171;">${b.pernos_exterior.torque} Nm</strong>. <strong>NO debe quedar holgura (luz 0) entre las uniones del aro exterior.</strong></li>
        </ol>
      </div>
    </div>
  `;
}

function renderFagSplit_SVG(b) {
  const W = 520, H = 420;
  const cx = W / 2, cy = H / 2;
  const scale = Math.min(220 / b.D, 180 / b.B);
  
  const rOuter = (b.D / 2) * scale;
  const rInner = (b.d / 2) * scale;
  const halfB = (b.B / 2) * scale;
  const rollerH = (rOuter - rInner) * 0.35;
  const rMid = (rOuter + rInner) / 2;

  return `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width: 480px;">
      <defs>
        <linearGradient id="splitOuter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4e3146"/>
          <stop offset="50%" stop-color="#7a4261"/>
          <stop offset="100%" stop-color="#4e3146"/>
        </linearGradient>
        <linearGradient id="splitInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#554452"/>
          <stop offset="100%" stop-color="#3a2233"/>
        </linearGradient>
        <marker id="arrowStartRed" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M10,0 L0,5 L10,10" fill="none" stroke="#ef4444" stroke-width="1.5"/>
        </marker>
        <marker id="arrowEndRed" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="#ef4444" stroke-width="1.5"/>
        </marker>
      </defs>
      
      <!-- Title -->
      <text x="${cx}" y="22" text-anchor="middle" fill="#8892a8" font-family="Inter,sans-serif" font-size="12" font-weight="500">
        SECCIÓN TRANSVERSAL — P. FAG ${b.designacion}
      </text>

      <!-- Center lines -->
      <line x1="${cx - halfB - 50}" y1="${cy}" x2="${cx + halfB + 50}" y2="${cy}" stroke="#ef4444" stroke-width="0.5" stroke-dasharray="8,4" opacity="0.4"/>
      
      <!-- Split gap indicator (Horizontal) -->
      <rect x="${cx - halfB - 10}" y="${cy - rOuter - 5}" width="${halfB * 2 + 20}" height="10" fill="#0f172a" opacity="0.2"/>

      <!-- UPPER HALF -->
      <rect x="${cx - halfB}" y="${cy - rOuter}" width="${halfB * 2}" height="${rOuter - rMid + rollerH + 8}" rx="2" fill="url(#splitOuter)" stroke="#3f132e" stroke-width="1.5"/>
      <path d="M${cx - halfB},${cy - rInner} L${cx + halfB},${cy - rInner} L${cx + halfB},${cy - rMid + rollerH + 12} L${cx - halfB},${cy - rMid + rollerH + 12} Z" fill="url(#splitInner)" stroke="#3f132e" stroke-width="1.5"/>
      
      <!-- Split Bolt Holes (Outer) -->
      <circle cx="${cx - halfB * 0.7}" cy="${cy - rOuter + 8}" r="2.5" fill="#1e293b" stroke="#f87171" stroke-width="0.8"/>
      <circle cx="${cx + halfB * 0.7}" cy="${cy - rOuter + 8}" r="2.5" fill="#1e293b" stroke="#f87171" stroke-width="0.8"/>
      
      <!-- Split Bolt Holes (Inner) -->
      <circle cx="${cx - halfB * 0.6}" cy="${cy - rInner + 8}" r="2.5" fill="#1e293b" stroke="#60a5fa" stroke-width="0.8"/>
      <circle cx="${cx + halfB * 0.6}" cy="${cy - rInner + 8}" r="2.5" fill="#1e293b" stroke="#60a5fa" stroke-width="0.8"/>

      <!-- Rollers -->
      ${[-0.6, 0.6].map(pos => `<ellipse cx="${cx + pos * halfB * 0.7}" cy="${cy - rMid + 2}" rx="${halfB * 0.18}" ry="${rollerH * 0.7}" fill="#94a3b8" stroke="#3f132e" stroke-width="1"/>`).join('')}

      <!-- LOWER HALF -->
      <rect x="${cx - halfB}" y="${cy + rMid - rollerH - 8}" width="${halfB * 2}" height="${rOuter - rMid + rollerH + 8}" rx="2" fill="url(#splitOuter)" stroke="#3f132e" stroke-width="1.5"/>
      <path d="M${cx - halfB},${cy + rMid - rollerH - 12} L${cx + halfB},${cy + rMid - rollerH - 12} L${cx + halfB},${cy + rInner} L${cx - halfB},${cy + rInner} Z" fill="url(#splitInner)" stroke="#3f132e" stroke-width="1.5"/>
      
      <!-- Boltholes lower -->
      <circle cx="${cx - halfB * 0.7}" cy="${cy + rOuter - 8}" r="2.5" fill="#1e293b" stroke="#f87171" stroke-width="0.8"/>
      <circle cx="${cx + halfB * 0.7}" cy="${cy + rOuter - 8}" r="2.5" fill="#1e293b" stroke="#f87171" stroke-width="0.8"/>
      <circle cx="${cx - halfB * 0.6}" cy="${cy + rInner - 8}" r="2.5" fill="#1e293b" stroke="#60a5fa" stroke-width="0.8"/>
      <circle cx="${cx + halfB * 0.6}" cy="${cy + rInner - 8}" r="2.5" fill="#1e293b" stroke="#60a5fa" stroke-width="0.8"/>

      <!-- Rollers lower -->
      ${[-0.6, 0.6].map(pos => `<ellipse cx="${cx + pos * halfB * 0.7}" cy="${cy + rMid - 2}" rx="${halfB * 0.18}" ry="${rollerH * 0.7}" fill="#94a3b8" stroke="#3f132e" stroke-width="1"/>`).join('')}

      <!-- Dimensions -->
      ${dimLineV_red(cx - halfB - 40, cy - rOuter, cy + rOuter, `D = ${b.D}`)}
      ${dimLineV_red(cx + halfB + 40, cy - rInner, cy + rInner, `d = ${b.d}`)}
      ${dimLineH_red(cx - halfB, cx + halfB, cy - rOuter - 25, `B = ${b.B}`)}

      <!-- Split Line Graphic -->
      <line x1="${cx - halfB - 20}" y1="${cy - rOuter - 5}" x2="${cx + halfB + 20}" y2="${cy + rOuter + 5}" stroke="#f87171" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.3"/>
    </svg>
  `;
}

function dimLineV_red(x, y1, y2, label) {
  const midY = (y1 + y2) / 2;
  return `
    <g>
      <line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#ef4444" stroke-width="1.2" marker-start="url(#arrowStartRed)" marker-end="url(#arrowEndRed)"/>
      <line x1="${x - 6}" y1="${y1}" x2="${x + 6}" y2="${y1}" stroke="#ef4444" stroke-width="0.8"/>
      <line x1="${x - 6}" y1="${y2}" x2="${x + 6}" y2="${y2}" stroke="#ef4444" stroke-width="0.8"/>
      <rect x="${x - 30}" y="${midY - 9}" width="60" height="18" rx="3" fill="#1a2035" stroke="#ef4444" stroke-width="0.5" opacity="0.9"/>
      <text x="${x}" y="${midY + 4}" text-anchor="middle" fill="#ef4444" font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}

function dimLineH_red(x1, x2, y, label) {
  const midX = (x1 + x2) / 2;
  return `
    <g>
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#ef4444" stroke-width="1.2" marker-start="url(#arrowStartRed)" marker-end="url(#arrowEndRed)"/>
      <line x1="${x1}" y1="${y - 6}" x2="${x1}" y2="${y + 6}" stroke="#ef4444" stroke-width="0.8"/>
      <line x1="${x2}" y1="${y - 6}" x2="${x2}" y2="${y + 6}" stroke="#ef4444" stroke-width="0.8"/>
      <rect x="${midX - 32}" y="${y - 10}" width="64" height="18" rx="3" fill="#1a2035" stroke="#ef4444" stroke-width="0.5" opacity="0.9"/>
      <text x="${midX}" y="${y + 3}" text-anchor="middle" fill="#ef4444" font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}

function dimLineV_orange(x, y1, y2, label) {
  const midY = (y1 + y2) / 2;
  return `
    <g>
      <line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#ff9800" stroke-width="1.2"
            marker-start="url(#arrowStartO)" marker-end="url(#arrowEndO)"/>
      <line x1="${x - 6}" y1="${y1}" x2="${x + 6}" y2="${y1}" stroke="#ff9800" stroke-width="0.8"/>
      <line x1="${x - 6}" y1="${y2}" x2="${x + 6}" y2="${y2}" stroke="#ff9800" stroke-width="0.8"/>
      <rect x="${x - 30}" y="${midY - 9}" width="60" height="18" rx="3" fill="#1a2035" stroke="#ff9800" stroke-width="0.5" opacity="0.9"/>
      <text x="${x}" y="${midY + 4}" text-anchor="middle" fill="#ff9800"
            font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}

function dimLineH_orange(x1, x2, y, label) {
  const midX = (x1 + x2) / 2;
  return `
    <g>
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#ff9800" stroke-width="1.2"
            marker-start="url(#arrowStartO)" marker-end="url(#arrowEndO)"/>
      <line x1="${x1}" y1="${y - 6}" x2="${x1}" y2="${y + 6}" stroke="#ff9800" stroke-width="0.8"/>
      <line x1="${x2}" y1="${y - 6}" x2="${x2}" y2="${y + 6}" stroke="#ff9800" stroke-width="0.8"/>
      <rect x="${midX - 32}" y="${y - 10}" width="64" height="18" rx="3" fill="#1a2035" stroke="#ff9800" stroke-width="0.5" opacity="0.9"/>
      <text x="${midX}" y="${y + 3}" text-anchor="middle" fill="#ff9800"
            font-family="JetBrains Mono,monospace" font-size="11" font-weight="600">${label}</text>
    </g>`;
}
