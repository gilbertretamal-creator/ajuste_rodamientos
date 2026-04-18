/**
 * SKF Bearing Database
 * Comprehensive data for Spherical Roller Bearings (SRB) and Deep Groove Ball Bearings (DGBB)
 * Values based on SKF Rolling Bearings Catalogue / ISO 5753-1
 * 
 * DISCLAIMER: For critical applications, always verify values with the current SKF catalog.
 */

const BEARINGS_DB = [

  // ═══════════════════════════════════════════════════════════════
  // SPHERICAL ROLLER BEARINGS — Series 222 (Tapered Bore K, 1:12)
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "22205 E-K",
    tipo: "SRB",
    serie: "222",
    d: 25, D: 52, B: 18, r_min: 1.0, masa: 0.16,
    juego: { CN: { min: 30, max: 40 }, C3: { min: 40, max: 55 }, C4: { min: 55, max: 75 } },
    reduccion: { min: 10, max: 15 },
    calado_axial: { min: 0.250, max: 0.290 },
    angulo_apriete: { min: 100, max: 100 },
    juego_residual_min: 10
  },
  {
    designacion: "22206 E-K",
    tipo: "SRB",
    serie: "222",
    d: 30, D: 62, B: 20, r_min: 1.0, masa: 0.25,
    juego: { CN: { min: 30, max: 40 }, C3: { min: 40, max: 55 }, C4: { min: 55, max: 75 } },
    reduccion: { min: 10, max: 15 },
    calado_axial: { min: 0.250, max: 0.290 },
    angulo_apriete: { min: 100, max: 100 },
    juego_residual_min: 10
  },
  {
    designacion: "22207 E-K",
    tipo: "SRB",
    serie: "222",
    d: 35, D: 72, B: 23, r_min: 1.0, masa: 0.37,
    juego: { CN: { min: 35, max: 50 }, C3: { min: 50, max: 65 }, C4: { min: 65, max: 85 } },
    reduccion: { min: 15, max: 20 },
    calado_axial: { min: 0.300, max: 0.350 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 10
  },
  {
    designacion: "22208 E-K",
    tipo: "SRB",
    serie: "222",
    d: 40, D: 80, B: 23, r_min: 1.0, masa: 0.44,
    juego: { CN: { min: 35, max: 50 }, C3: { min: 50, max: 65 }, C4: { min: 65, max: 85 } },
    reduccion: { min: 15, max: 20 },
    calado_axial: { min: 0.300, max: 0.350 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 12
  },
  {
    designacion: "22209 E-K",
    tipo: "SRB",
    serie: "222",
    d: 45, D: 85, B: 23, r_min: 1.0, masa: 0.47,
    juego: { CN: { min: 45, max: 60 }, C3: { min: 60, max: 80 }, C4: { min: 80, max: 100 } },
    reduccion: { min: 20, max: 25 },
    calado_axial: { min: 0.370, max: 0.440 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 12
  },
  {
    designacion: "22210 E-K",
    tipo: "SRB",
    serie: "222",
    d: 50, D: 90, B: 23, r_min: 1.0, masa: 0.50,
    juego: { CN: { min: 45, max: 60 }, C3: { min: 60, max: 80 }, C4: { min: 80, max: 100 } },
    reduccion: { min: 20, max: 25 },
    calado_axial: { min: 0.370, max: 0.440 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 15
  },
  {
    designacion: "22211 E-K",
    tipo: "SRB",
    serie: "222",
    d: 55, D: 100, B: 25, r_min: 1.5, masa: 0.68,
    juego: { CN: { min: 55, max: 75 }, C3: { min: 75, max: 95 }, C4: { min: 95, max: 120 } },
    reduccion: { min: 25, max: 35 },
    calado_axial: { min: 0.450, max: 0.540 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 15
  },
  {
    designacion: "22212 E-K",
    tipo: "SRB",
    serie: "222",
    d: 60, D: 110, B: 28, r_min: 1.5, masa: 0.90,
    juego: { CN: { min: 55, max: 75 }, C3: { min: 75, max: 95 }, C4: { min: 95, max: 120 } },
    reduccion: { min: 25, max: 35 },
    calado_axial: { min: 0.450, max: 0.540 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 15
  },
  {
    designacion: "22213 E-K",
    tipo: "SRB",
    serie: "222",
    d: 65, D: 120, B: 31, r_min: 1.5, masa: 1.15,
    juego: { CN: { min: 55, max: 75 }, C3: { min: 75, max: 95 }, C4: { min: 95, max: 120 } },
    reduccion: { min: 25, max: 35 },
    calado_axial: { min: 0.450, max: 0.540 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 15
  },
  {
    designacion: "22214 E-K",
    tipo: "SRB",
    serie: "222",
    d: 70, D: 125, B: 31, r_min: 1.5, masa: 1.25,
    juego: { CN: { min: 70, max: 95 }, C3: { min: 95, max: 120 }, C4: { min: 120, max: 150 } },
    reduccion: { min: 35, max: 40 },
    calado_axial: { min: 0.550, max: 0.650 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 18
  },
  {
    designacion: "22215 E-K",
    tipo: "SRB",
    serie: "222",
    d: 75, D: 130, B: 31, r_min: 1.5, masa: 1.26,
    juego: { CN: { min: 70, max: 95 }, C3: { min: 95, max: 120 }, C4: { min: 120, max: 150 } },
    reduccion: { min: 35, max: 40 },
    calado_axial: { min: 0.550, max: 0.650 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 20
  },
  {
    designacion: "22216 E-K",
    tipo: "SRB",
    serie: "222",
    d: 80, D: 140, B: 33, r_min: 2.0, masa: 1.58,
    juego: { CN: { min: 70, max: 95 }, C3: { min: 95, max: 120 }, C4: { min: 120, max: 150 } },
    reduccion: { min: 35, max: 40 },
    calado_axial: { min: 0.550, max: 0.650 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 20
  },
  {
    designacion: "22217 E-K",
    tipo: "SRB",
    serie: "222",
    d: 85, D: 150, B: 36, r_min: 2.0, masa: 2.10,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 25
  },
  {
    designacion: "22218 E-K",
    tipo: "SRB",
    serie: "222",
    d: 90, D: 160, B: 40, r_min: 2.0, masa: 2.70,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 25
  },
  {
    designacion: "22219 E-K",
    tipo: "SRB",
    serie: "222",
    d: 95, D: 170, B: 43, r_min: 2.5, masa: 3.35,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 25
  },
  {
    designacion: "22220 E-K",
    tipo: "SRB",
    serie: "222",
    d: 100, D: 180, B: 46, r_min: 2.5, masa: 3.95,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 25
  },
  {
    designacion: "22222 E-K",
    tipo: "SRB",
    serie: "222",
    d: 110, D: 200, B: 53, r_min: 2.5, masa: 5.70,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 30
  },
  {
    designacion: "22224 E-K",
    tipo: "SRB",
    serie: "222",
    d: 120, D: 215, B: 58, r_min: 2.5, masa: 7.00,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 35
  },
  {
    designacion: "22226 E-K",
    tipo: "SRB",
    serie: "222",
    d: 130, D: 230, B: 64, r_min: 3.0, masa: 8.50,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 40
  },
  {
    designacion: "22228 E-K",
    tipo: "SRB",
    serie: "222",
    d: 140, D: 250, B: 68, r_min: 3.0, masa: 11.0,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 40
  },
  {
    designacion: "22230 E-K",
    tipo: "SRB",
    serie: "222",
    d: 150, D: 270, B: 73, r_min: 3.0, masa: 14.5,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 45
  },
  {
    designacion: "22232 E-K",
    tipo: "SRB",
    serie: "222",
    d: 160, D: 290, B: 80, r_min: 4.0, masa: 18.5,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 50
  },
  {
    designacion: "22234 E-K",
    tipo: "SRB",
    serie: "222",
    d: 170, D: 310, B: 86, r_min: 4.0, masa: 22.5,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 50
  },
  {
    designacion: "22236 E-K",
    tipo: "SRB",
    serie: "222",
    d: 180, D: 320, B: 86, r_min: 4.0, masa: 23.5,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 55
  },
  {
    designacion: "22238 E-K",
    tipo: "SRB",
    serie: "222",
    d: 190, D: 340, B: 92, r_min: 4.0, masa: 29.0,
    juego: { CN: { min: 160, max: 220 }, C3: { min: 220, max: 290 }, C4: { min: 290, max: 370 } },
    reduccion: { min: 90, max: 105 },
    calado_axial: { min: 1.300, max: 1.600 },
    angulo_apriete: null,
    juego_residual_min: 55
  },
  {
    designacion: "22240 E-K",
    tipo: "SRB",
    serie: "222",
    d: 200, D: 360, B: 98, r_min: 4.0, masa: 35.5,
    juego: { CN: { min: 160, max: 220 }, C3: { min: 220, max: 290 }, C4: { min: 290, max: 370 } },
    reduccion: { min: 90, max: 105 },
    calado_axial: { min: 1.300, max: 1.600 },
    angulo_apriete: null,
    juego_residual_min: 55
  },
  {
    designacion: "22244 E-K",
    tipo: "SRB",
    serie: "222",
    d: 220, D: 400, B: 108, r_min: 5.0, masa: 49.5,
    juego: { CN: { min: 180, max: 250 }, C3: { min: 250, max: 320 }, C4: { min: 320, max: 410 } },
    reduccion: { min: 100, max: 120 },
    calado_axial: { min: 1.450, max: 1.800 },
    angulo_apriete: null,
    juego_residual_min: 60
  },
  {
    designacion: "22248 E-K",
    tipo: "SRB",
    serie: "222",
    d: 240, D: 440, B: 120, r_min: 5.0, masa: 66.0,
    juego: { CN: { min: 200, max: 270 }, C3: { min: 270, max: 350 }, C4: { min: 350, max: 450 } },
    reduccion: { min: 110, max: 130 },
    calado_axial: { min: 1.600, max: 1.950 },
    angulo_apriete: null,
    juego_residual_min: 65
  },
  {
    designacion: "22252 E-K",
    tipo: "SRB",
    serie: "222",
    d: 260, D: 480, B: 130, r_min: 5.0, masa: 86.5,
    juego: { CN: { min: 220, max: 300 }, C3: { min: 300, max: 390 }, C4: { min: 390, max: 490 } },
    reduccion: { min: 120, max: 150 },
    calado_axial: { min: 1.800, max: 2.150 },
    angulo_apriete: null,
    juego_residual_min: 70
  },

  // ═══════════════════════════════════════════════════════════════
  // SPHERICAL ROLLER BEARINGS — Series 223 (Tapered Bore K, 1:12)
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "22305 E-K",
    tipo: "SRB",
    serie: "223",
    d: 25, D: 62, B: 24, r_min: 1.5, masa: 0.34,
    juego: { CN: { min: 30, max: 40 }, C3: { min: 40, max: 55 }, C4: { min: 55, max: 75 } },
    reduccion: { min: 10, max: 15 },
    calado_axial: { min: 0.250, max: 0.290 },
    angulo_apriete: { min: 100, max: 100 },
    juego_residual_min: 12
  },
  {
    designacion: "22306 E-K",
    tipo: "SRB",
    serie: "223",
    d: 30, D: 72, B: 27, r_min: 1.5, masa: 0.48,
    juego: { CN: { min: 30, max: 40 }, C3: { min: 40, max: 55 }, C4: { min: 55, max: 75 } },
    reduccion: { min: 10, max: 15 },
    calado_axial: { min: 0.250, max: 0.290 },
    angulo_apriete: { min: 100, max: 100 },
    juego_residual_min: 12
  },
  {
    designacion: "22307 E-K",
    tipo: "SRB",
    serie: "223",
    d: 35, D: 80, B: 31, r_min: 1.5, masa: 0.66,
    juego: { CN: { min: 35, max: 50 }, C3: { min: 50, max: 65 }, C4: { min: 65, max: 85 } },
    reduccion: { min: 15, max: 20 },
    calado_axial: { min: 0.300, max: 0.350 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 12
  },
  {
    designacion: "22308 E-K",
    tipo: "SRB",
    serie: "223",
    d: 40, D: 90, B: 33, r_min: 1.5, masa: 0.88,
    juego: { CN: { min: 35, max: 50 }, C3: { min: 50, max: 65 }, C4: { min: 65, max: 85 } },
    reduccion: { min: 15, max: 20 },
    calado_axial: { min: 0.300, max: 0.350 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 15
  },
  {
    designacion: "22309 E-K",
    tipo: "SRB",
    serie: "223",
    d: 45, D: 100, B: 36, r_min: 1.5, masa: 1.15,
    juego: { CN: { min: 45, max: 60 }, C3: { min: 60, max: 80 }, C4: { min: 80, max: 100 } },
    reduccion: { min: 20, max: 25 },
    calado_axial: { min: 0.370, max: 0.440 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 15
  },
  {
    designacion: "22310 E-K",
    tipo: "SRB",
    serie: "223",
    d: 50, D: 110, B: 40, r_min: 2.0, masa: 1.55,
    juego: { CN: { min: 45, max: 60 }, C3: { min: 60, max: 80 }, C4: { min: 80, max: 100 } },
    reduccion: { min: 20, max: 25 },
    calado_axial: { min: 0.370, max: 0.440 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 17
  },
  {
    designacion: "22311 E-K",
    tipo: "SRB",
    serie: "223",
    d: 55, D: 120, B: 43, r_min: 2.0, masa: 2.10,
    juego: { CN: { min: 55, max: 75 }, C3: { min: 75, max: 95 }, C4: { min: 95, max: 120 } },
    reduccion: { min: 25, max: 35 },
    calado_axial: { min: 0.450, max: 0.540 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 18
  },
  {
    designacion: "22312 E-K",
    tipo: "SRB",
    serie: "223",
    d: 60, D: 130, B: 46, r_min: 2.0, masa: 2.62,
    juego: { CN: { min: 55, max: 75 }, C3: { min: 75, max: 95 }, C4: { min: 95, max: 120 } },
    reduccion: { min: 25, max: 35 },
    calado_axial: { min: 0.450, max: 0.540 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 20
  },
  {
    designacion: "22313 E-K",
    tipo: "SRB",
    serie: "223",
    d: 65, D: 140, B: 48, r_min: 2.0, masa: 3.30,
    juego: { CN: { min: 55, max: 75 }, C3: { min: 75, max: 95 }, C4: { min: 95, max: 120 } },
    reduccion: { min: 25, max: 35 },
    calado_axial: { min: 0.450, max: 0.540 },
    angulo_apriete: { min: 115, max: 115 },
    juego_residual_min: 20
  },
  {
    designacion: "22314 E-K",
    tipo: "SRB",
    serie: "223",
    d: 70, D: 150, B: 51, r_min: 2.5, masa: 4.05,
    juego: { CN: { min: 70, max: 95 }, C3: { min: 95, max: 120 }, C4: { min: 120, max: 150 } },
    reduccion: { min: 35, max: 40 },
    calado_axial: { min: 0.550, max: 0.650 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 22
  },
  {
    designacion: "22315 E-K",
    tipo: "SRB",
    serie: "223",
    d: 75, D: 160, B: 55, r_min: 2.5, masa: 5.00,
    juego: { CN: { min: 70, max: 95 }, C3: { min: 95, max: 120 }, C4: { min: 120, max: 150 } },
    reduccion: { min: 35, max: 40 },
    calado_axial: { min: 0.550, max: 0.650 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 25
  },
  {
    designacion: "22316 E-K",
    tipo: "SRB",
    serie: "223",
    d: 80, D: 170, B: 58, r_min: 2.5, masa: 5.90,
    juego: { CN: { min: 70, max: 95 }, C3: { min: 95, max: 120 }, C4: { min: 120, max: 150 } },
    reduccion: { min: 35, max: 40 },
    calado_axial: { min: 0.550, max: 0.650 },
    angulo_apriete: { min: 130, max: 130 },
    juego_residual_min: 25
  },
  {
    designacion: "22317 E-K",
    tipo: "SRB",
    serie: "223",
    d: 85, D: 180, B: 60, r_min: 3.0, masa: 7.25,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 25
  },
  {
    designacion: "22318 E-K",
    tipo: "SRB",
    serie: "223",
    d: 90, D: 190, B: 64, r_min: 3.0, masa: 8.60,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 30
  },
  {
    designacion: "22320 E-K",
    tipo: "SRB",
    serie: "223",
    d: 100, D: 215, B: 73, r_min: 3.0, masa: 12.5,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 35
  },
  {
    designacion: "22322 E-K",
    tipo: "SRB",
    serie: "223",
    d: 110, D: 240, B: 80, r_min: 3.0, masa: 17.5,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 35
  },
  {
    designacion: "22324 E-K",
    tipo: "SRB",
    serie: "223",
    d: 120, D: 260, B: 86, r_min: 4.0, masa: 22.5,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 40
  },
  {
    designacion: "22326 E-K",
    tipo: "SRB",
    serie: "223",
    d: 130, D: 280, B: 93, r_min: 4.0, masa: 28.0,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 45
  },
  {
    designacion: "22328 E-K",
    tipo: "SRB",
    serie: "223",
    d: 140, D: 300, B: 102, r_min: 4.0, masa: 35.0,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 45
  },
  {
    designacion: "22330 E-K",
    tipo: "SRB",
    serie: "223",
    d: 150, D: 320, B: 108, r_min: 4.0, masa: 42.0,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 50
  },
  {
    designacion: "22332 E-K",
    tipo: "SRB",
    serie: "223",
    d: 160, D: 340, B: 114, r_min: 5.0, masa: 50.0,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 55
  },
  {
    designacion: "22334 E-K",
    tipo: "SRB",
    serie: "223",
    d: 170, D: 360, B: 120, r_min: 5.0, masa: 60.0,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 60
  },
  {
    designacion: "22336 E-K",
    tipo: "SRB",
    serie: "223",
    d: 180, D: 380, B: 126, r_min: 5.0, masa: 73.5,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 60
  },
  {
    designacion: "22340 E-K",
    tipo: "SRB",
    serie: "223",
    d: 200, D: 420, B: 138, r_min: 5.0, masa: 100.0,
    juego: { CN: { min: 160, max: 220 }, C3: { min: 220, max: 290 }, C4: { min: 290, max: 370 } },
    reduccion: { min: 90, max: 105 },
    calado_axial: { min: 1.300, max: 1.600 },
    angulo_apriete: null,
    juego_residual_min: 65
  },

  // ═══════════════════════════════════════════════════════════════
  // SPHERICAL ROLLER BEARINGS — Series 231 (Tapered Bore K, 1:12)
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "23120 E-K",
    tipo: "SRB",
    serie: "231",
    d: 100, D: 165, B: 52, r_min: 2.0, masa: 3.40,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 25
  },
  {
    designacion: "23122 E-K",
    tipo: "SRB",
    serie: "231",
    d: 110, D: 180, B: 56, r_min: 2.5, masa: 4.40,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 30
  },
  {
    designacion: "23124 E-K",
    tipo: "SRB",
    serie: "231",
    d: 120, D: 200, B: 62, r_min: 2.5, masa: 6.40,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 30
  },
  {
    designacion: "23126 E-K",
    tipo: "SRB",
    serie: "231",
    d: 130, D: 210, B: 64, r_min: 3.0, masa: 7.40,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 35
  },
  {
    designacion: "23128 E-K",
    tipo: "SRB",
    serie: "231",
    d: 140, D: 225, B: 68, r_min: 3.0, masa: 9.10,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 40
  },
  {
    designacion: "23130 E-K",
    tipo: "SRB",
    serie: "231",
    d: 150, D: 250, B: 80, r_min: 3.0, masa: 13.5,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 40
  },
  {
    designacion: "23132 E-K",
    tipo: "SRB",
    serie: "231",
    d: 160, D: 270, B: 86, r_min: 4.0, masa: 17.0,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 45
  },
  {
    designacion: "23134 E-K",
    tipo: "SRB",
    serie: "231",
    d: 170, D: 280, B: 88, r_min: 4.0, masa: 19.0,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 50
  },
  {
    designacion: "23136 E-K",
    tipo: "SRB",
    serie: "231",
    d: 180, D: 300, B: 96, r_min: 4.0, masa: 24.5,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 50
  },
  {
    designacion: "23140 E-K",
    tipo: "SRB",
    serie: "231",
    d: 200, D: 340, B: 112, r_min: 5.0, masa: 38.0,
    juego: { CN: { min: 160, max: 220 }, C3: { min: 220, max: 290 }, C4: { min: 290, max: 370 } },
    reduccion: { min: 90, max: 105 },
    calado_axial: { min: 1.300, max: 1.600 },
    angulo_apriete: null,
    juego_residual_min: 60
  },
  {
    designacion: "23144 E-K",
    tipo: "SRB",
    serie: "231",
    d: 220, D: 370, B: 120, r_min: 5.0, masa: 48.5,
    juego: { CN: { min: 180, max: 250 }, C3: { min: 250, max: 320 }, C4: { min: 320, max: 410 } },
    reduccion: { min: 100, max: 120 },
    calado_axial: { min: 1.450, max: 1.800 },
    angulo_apriete: null,
    juego_residual_min: 65
  },
  {
    designacion: "23148 E-K",
    tipo: "SRB",
    serie: "231",
    d: 240, D: 400, B: 128, r_min: 5.0, masa: 61.0,
    juego: { CN: { min: 200, max: 270 }, C3: { min: 270, max: 350 }, C4: { min: 350, max: 450 } },
    reduccion: { min: 110, max: 130 },
    calado_axial: { min: 1.600, max: 1.950 },
    angulo_apriete: null,
    juego_residual_min: 70
  },
  {
    designacion: "23152 E-K",
    tipo: "SRB",
    serie: "231",
    d: 260, D: 440, B: 144, r_min: 6.0, masa: 85.0,
    juego: { CN: { min: 220, max: 300 }, C3: { min: 300, max: 390 }, C4: { min: 390, max: 490 } },
    reduccion: { min: 120, max: 150 },
    calado_axial: { min: 1.800, max: 2.150 },
    angulo_apriete: null,
    juego_residual_min: 75
  },
  {
    designacion: "23156 E-K",
    tipo: "SRB",
    serie: "231",
    d: 280, D: 460, B: 146, r_min: 6.0, masa: 96.0,
    juego: { CN: { min: 220, max: 300 }, C3: { min: 300, max: 390 }, C4: { min: 390, max: 490 } },
    reduccion: { min: 120, max: 150 },
    calado_axial: { min: 1.800, max: 2.150 },
    angulo_apriete: null,
    juego_residual_min: 80
  },
  {
    designacion: "23160 E-K",
    tipo: "SRB",
    serie: "231",
    d: 300, D: 500, B: 160, r_min: 6.0, masa: 127.0,
    juego: { CN: { min: 240, max: 330 }, C3: { min: 330, max: 430 }, C4: { min: 430, max: 540 } },
    reduccion: { min: 135, max: 165 },
    calado_axial: { min: 2.000, max: 2.400 },
    angulo_apriete: null,
    juego_residual_min: 80
  },

  // ═══════════════════════════════════════════════════════════════
  // SPHERICAL ROLLER BEARINGS — Series 232 (Tapered Bore K, 1:12)
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "23218 E-K",
    tipo: "SRB",
    serie: "232",
    d: 90, D: 160, B: 52.4, r_min: 2.0, masa: 3.50,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 27
  },
  {
    designacion: "23220 E-K",
    tipo: "SRB",
    serie: "232",
    d: 100, D: 180, B: 60.3, r_min: 2.5, masa: 5.40,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 30
  },
  {
    designacion: "23222 E-K",
    tipo: "SRB",
    serie: "232",
    d: 110, D: 200, B: 69.8, r_min: 2.5, masa: 8.20,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 35
  },
  {
    designacion: "23224 E-K",
    tipo: "SRB",
    serie: "232",
    d: 120, D: 215, B: 76, r_min: 3.0, masa: 10.0,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 35
  },
  {
    designacion: "23226 E-K",
    tipo: "SRB",
    serie: "232",
    d: 130, D: 230, B: 80, r_min: 3.0, masa: 12.5,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 40
  },
  {
    designacion: "23228 E-K",
    tipo: "SRB",
    serie: "232",
    d: 140, D: 250, B: 88, r_min: 3.0, masa: 17.0,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 45
  },
  {
    designacion: "23230 E-K",
    tipo: "SRB",
    serie: "232",
    d: 150, D: 270, B: 96, r_min: 4.0, masa: 21.5,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 50
  },
  {
    designacion: "23234 E-K",
    tipo: "SRB",
    serie: "232",
    d: 170, D: 310, B: 110, r_min: 4.0, masa: 35.0,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 55
  },
  {
    designacion: "23236 E-K",
    tipo: "SRB",
    serie: "232",
    d: 180, D: 320, B: 112, r_min: 5.0, masa: 38.5,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 55
  },
  {
    designacion: "23240 E-K",
    tipo: "SRB",
    serie: "232",
    d: 200, D: 360, B: 128, r_min: 5.0, masa: 56.0,
    juego: { CN: { min: 160, max: 220 }, C3: { min: 220, max: 290 }, C4: { min: 290, max: 370 } },
    reduccion: { min: 90, max: 105 },
    calado_axial: { min: 1.300, max: 1.600 },
    angulo_apriete: null,
    juego_residual_min: 65
  },

  // ═══════════════════════════════════════════════════════════════
  // SPHERICAL ROLLER BEARINGS — Series 240/241 (Tapered Bore K)
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "24020 E-K",
    tipo: "SRB",
    serie: "240",
    d: 100, D: 150, B: 50, r_min: 1.5, masa: 2.40,
    juego: { CN: { min: 80, max: 110 }, C3: { min: 110, max: 140 }, C4: { min: 140, max: 180 } },
    reduccion: { min: 40, max: 50 },
    calado_axial: { min: 0.660, max: 0.790 },
    angulo_apriete: { min: 150, max: 150 },
    juego_residual_min: 22
  },
  {
    designacion: "24024 E-K",
    tipo: "SRB",
    serie: "240",
    d: 120, D: 180, B: 60, r_min: 2.0, masa: 4.50,
    juego: { CN: { min: 100, max: 135 }, C3: { min: 135, max: 170 }, C4: { min: 170, max: 220 } },
    reduccion: { min: 50, max: 60 },
    calado_axial: { min: 0.790, max: 0.950 },
    juego_residual_min: 30
  },
  {
    designacion: "24028 E-K",
    tipo: "SRB",
    serie: "240",
    d: 140, D: 210, B: 69, r_min: 2.5, masa: 7.90,
    juego: { CN: { min: 120, max: 160 }, C3: { min: 160, max: 200 }, C4: { min: 200, max: 260 } },
    reduccion: { min: 60, max: 75 },
    calado_axial: { min: 0.930, max: 1.100 },
    angulo_apriete: null,
    juego_residual_min: 35
  },
  {
    designacion: "24030 E-K",
    tipo: "SRB",
    serie: "240",
    d: 150, D: 225, B: 75, r_min: 2.5, masa: 9.70,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 40
  },
  {
    designacion: "24032 E-K",
    tipo: "SRB",
    serie: "240",
    d: 160, D: 240, B: 80, r_min: 3.0, masa: 11.8,
    juego: { CN: { min: 130, max: 180 }, C3: { min: 180, max: 230 }, C4: { min: 230, max: 300 } },
    reduccion: { min: 70, max: 85 },
    calado_axial: { min: 1.050, max: 1.300 },
    angulo_apriete: null,
    juego_residual_min: 40
  },
  {
    designacion: "24036 E-K",
    tipo: "SRB",
    serie: "240",
    d: 180, D: 280, B: 100, r_min: 3.0, masa: 21.0,
    juego: { CN: { min: 140, max: 200 }, C3: { min: 200, max: 260 }, C4: { min: 260, max: 340 } },
    reduccion: { min: 80, max: 95 },
    calado_axial: { min: 1.200, max: 1.450 },
    angulo_apriete: null,
    juego_residual_min: 50
  },
  {
    designacion: "24040 E-K",
    tipo: "SRB",
    serie: "240",
    d: 200, D: 310, B: 109, r_min: 4.0, masa: 28.5,
    juego: { CN: { min: 160, max: 220 }, C3: { min: 220, max: 290 }, C4: { min: 290, max: 370 } },
    reduccion: { min: 90, max: 105 },
    calado_axial: { min: 1.300, max: 1.600 },
    angulo_apriete: null,
    juego_residual_min: 55
  },
  {
    designacion: "24044 E-K",
    tipo: "SRB",
    serie: "240",
    d: 220, D: 340, B: 118, r_min: 4.0, masa: 37.0,
    juego: { CN: { min: 180, max: 250 }, C3: { min: 250, max: 320 }, C4: { min: 320, max: 410 } },
    reduccion: { min: 100, max: 120 },
    calado_axial: { min: 1.450, max: 1.800 },
    angulo_apriete: null,
    juego_residual_min: 60
  },
  {
    designacion: "24048 E-K",
    tipo: "SRB",
    serie: "240",
    d: 240, D: 360, B: 118, r_min: 4.0, masa: 40.5,
    juego: { CN: { min: 200, max: 270 }, C3: { min: 270, max: 350 }, C4: { min: 350, max: 450 } },
    reduccion: { min: 110, max: 130 },
    calado_axial: { min: 1.600, max: 1.950 },
    angulo_apriete: null,
    juego_residual_min: 65
  },

  // ═══════════════════════════════════════════════════════════════
  // DEEP GROOVE BALL BEARINGS — Series 6000
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "6000",
    tipo: "DGBB",
    serie: "6000",
    d: 10, D: 26, B: 8, r_min: 0.3, masa: 0.017,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6001",
    tipo: "DGBB",
    serie: "6000",
    d: 12, D: 28, B: 8, r_min: 0.3, masa: 0.020,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6002",
    tipo: "DGBB",
    serie: "6000",
    d: 15, D: 32, B: 9, r_min: 0.3, masa: 0.028,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6003",
    tipo: "DGBB",
    serie: "6000",
    d: 17, D: 35, B: 10, r_min: 0.3, masa: 0.033,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6004",
    tipo: "DGBB",
    serie: "6000",
    d: 20, D: 42, B: 12, r_min: 0.6, masa: 0.068,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6005",
    tipo: "DGBB",
    serie: "6000",
    d: 25, D: 47, B: 12, r_min: 0.6, masa: 0.078,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6006",
    tipo: "DGBB",
    serie: "6000",
    d: 30, D: 55, B: 13, r_min: 1.0, masa: 0.12,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6007",
    tipo: "DGBB",
    serie: "6000",
    d: 35, D: 62, B: 14, r_min: 1.0, masa: 0.16,
    juego: { CN: { min: 6, max: 23 }, C3: { min: 15, max: 33 }, C4: { min: 23, max: 41 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 4
  },
  {
    designacion: "6008",
    tipo: "DGBB",
    serie: "6000",
    d: 40, D: 68, B: 15, r_min: 1.0, masa: 0.19,
    juego: { CN: { min: 6, max: 23 }, C3: { min: 15, max: 33 }, C4: { min: 23, max: 41 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 4
  },
  {
    designacion: "6009",
    tipo: "DGBB",
    serie: "6000",
    d: 45, D: 75, B: 16, r_min: 1.0, masa: 0.24,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6010",
    tipo: "DGBB",
    serie: "6000",
    d: 50, D: 80, B: 16, r_min: 1.0, masa: 0.27,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6011",
    tipo: "DGBB",
    serie: "6000",
    d: 55, D: 90, B: 18, r_min: 1.1, masa: 0.38,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6012",
    tipo: "DGBB",
    serie: "6000",
    d: 60, D: 95, B: 18, r_min: 1.1, masa: 0.39,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6013",
    tipo: "DGBB",
    serie: "6000",
    d: 65, D: 100, B: 18, r_min: 1.1, masa: 0.40,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6014",
    tipo: "DGBB",
    serie: "6000",
    d: 70, D: 110, B: 20, r_min: 1.1, masa: 0.56,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6015",
    tipo: "DGBB",
    serie: "6000",
    d: 75, D: 115, B: 20, r_min: 1.1, masa: 0.58,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6016",
    tipo: "DGBB",
    serie: "6000",
    d: 80, D: 125, B: 22, r_min: 1.1, masa: 0.77,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6017",
    tipo: "DGBB",
    serie: "6000",
    d: 85, D: 130, B: 22, r_min: 1.1, masa: 0.79,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6018",
    tipo: "DGBB",
    serie: "6000",
    d: 90, D: 140, B: 24, r_min: 1.5, masa: 1.07,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6020",
    tipo: "DGBB",
    serie: "6000",
    d: 100, D: 150, B: 24, r_min: 1.5, masa: 1.12,
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 8
  },

  // ═══════════════════════════════════════════════════════════════
  // DEEP GROOVE BALL BEARINGS — Series 6200
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "6200",
    tipo: "DGBB",
    serie: "6200",
    d: 10, D: 30, B: 9, r_min: 0.6, masa: 0.031,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6201",
    tipo: "DGBB",
    serie: "6200",
    d: 12, D: 32, B: 10, r_min: 0.6, masa: 0.037,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6202",
    tipo: "DGBB",
    serie: "6200",
    d: 15, D: 35, B: 11, r_min: 0.6, masa: 0.045,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6203",
    tipo: "DGBB",
    serie: "6200",
    d: 17, D: 40, B: 12, r_min: 0.6, masa: 0.064,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6204",
    tipo: "DGBB",
    serie: "6200",
    d: 20, D: 47, B: 14, r_min: 1.0, masa: 0.11,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6205",
    tipo: "DGBB",
    serie: "6200",
    d: 25, D: 52, B: 15, r_min: 1.0, masa: 0.13,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6206",
    tipo: "DGBB",
    serie: "6200",
    d: 30, D: 62, B: 16, r_min: 1.0, masa: 0.20,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6207",
    tipo: "DGBB",
    serie: "6200",
    d: 35, D: 72, B: 17, r_min: 1.1, masa: 0.29,
    juego: { CN: { min: 6, max: 23 }, C3: { min: 15, max: 33 }, C4: { min: 23, max: 41 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 4
  },
  {
    designacion: "6208",
    tipo: "DGBB",
    serie: "6200",
    d: 40, D: 80, B: 18, r_min: 1.1, masa: 0.37,
    juego: { CN: { min: 6, max: 23 }, C3: { min: 15, max: 33 }, C4: { min: 23, max: 41 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 4
  },
  {
    designacion: "6209",
    tipo: "DGBB",
    serie: "6200",
    d: 45, D: 85, B: 19, r_min: 1.1, masa: 0.40,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6210",
    tipo: "DGBB",
    serie: "6200",
    d: 50, D: 90, B: 20, r_min: 1.1, masa: 0.46,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6211",
    tipo: "DGBB",
    serie: "6200",
    d: 55, D: 100, B: 21, r_min: 1.5, masa: 0.58,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6212",
    tipo: "DGBB",
    serie: "6200",
    d: 60, D: 110, B: 22, r_min: 1.5, masa: 0.78,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6213",
    tipo: "DGBB",
    serie: "6200",
    d: 65, D: 120, B: 23, r_min: 1.5, masa: 1.01,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6214",
    tipo: "DGBB",
    serie: "6200",
    d: 70, D: 125, B: 24, r_min: 1.5, masa: 1.12,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6215",
    tipo: "DGBB",
    serie: "6200",
    d: 75, D: 130, B: 25, r_min: 1.5, masa: 1.25,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6216",
    tipo: "DGBB",
    serie: "6200",
    d: 80, D: 140, B: 26, r_min: 2.0, masa: 1.56,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6217",
    tipo: "DGBB",
    serie: "6200",
    d: 85, D: 150, B: 28, r_min: 2.0, masa: 2.00,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6218",
    tipo: "DGBB",
    serie: "6200",
    d: 90, D: 160, B: 30, r_min: 2.0, masa: 2.55,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6219",
    tipo: "DGBB",
    serie: "6200",
    d: 95, D: 170, B: 32, r_min: 2.1, masa: 3.15,
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 8
  },
  {
    designacion: "6220",
    tipo: "DGBB",
    serie: "6200",
    d: 100, D: 180, B: 34, r_min: 2.1, masa: 3.80,
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 8
  },

  // ═══════════════════════════════════════════════════════════════
  // DEEP GROOVE BALL BEARINGS — Series 6300
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "6300",
    tipo: "DGBB",
    serie: "6300",
    d: 10, D: 35, B: 11, r_min: 0.6, masa: 0.050,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6301",
    tipo: "DGBB",
    serie: "6300",
    d: 12, D: 37, B: 12, r_min: 1.0, masa: 0.058,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6302",
    tipo: "DGBB",
    serie: "6300",
    d: 15, D: 42, B: 13, r_min: 1.0, masa: 0.085,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6303",
    tipo: "DGBB",
    serie: "6300",
    d: 17, D: 47, B: 14, r_min: 1.0, masa: 0.12,
    juego: { CN: { min: 3, max: 18 }, C3: { min: 11, max: 25 }, C4: { min: 18, max: 33 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 2
  },
  {
    designacion: "6304",
    tipo: "DGBB",
    serie: "6300",
    d: 20, D: 52, B: 15, r_min: 1.1, masa: 0.15,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6305",
    tipo: "DGBB",
    serie: "6300",
    d: 25, D: 62, B: 17, r_min: 1.1, masa: 0.23,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a k5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6306",
    tipo: "DGBB",
    serie: "6300",
    d: 30, D: 72, B: 19, r_min: 1.1, masa: 0.34,
    juego: { CN: { min: 5, max: 20 }, C3: { min: 13, max: 28 }, C4: { min: 20, max: 36 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 3
  },
  {
    designacion: "6307",
    tipo: "DGBB",
    serie: "6300",
    d: 35, D: 80, B: 21, r_min: 1.5, masa: 0.47,
    juego: { CN: { min: 6, max: 23 }, C3: { min: 15, max: 33 }, C4: { min: 23, max: 41 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 4
  },
  {
    designacion: "6308",
    tipo: "DGBB",
    serie: "6300",
    d: 40, D: 90, B: 23, r_min: 1.5, masa: 0.67,
    juego: { CN: { min: 6, max: 23 }, C3: { min: 15, max: 33 }, C4: { min: 23, max: 41 } },
    ajuste_eje: "j5 a m5",
    ajuste_alojamiento: "H7 a J7",
    juego_residual_min: 4
  },
  {
    designacion: "6309",
    tipo: "DGBB",
    serie: "6300",
    d: 45, D: 100, B: 25, r_min: 1.5, masa: 0.92,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6310",
    tipo: "DGBB",
    serie: "6300",
    d: 50, D: 110, B: 27, r_min: 2.0, masa: 1.16,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6311",
    tipo: "DGBB",
    serie: "6300",
    d: 55, D: 120, B: 29, r_min: 2.0, masa: 1.55,
    juego: { CN: { min: 8, max: 28 }, C3: { min: 18, max: 38 }, C4: { min: 28, max: 48 } },
    ajuste_eje: "k5 a m5",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 5
  },
  {
    designacion: "6312",
    tipo: "DGBB",
    serie: "6300",
    d: 60, D: 130, B: 31, r_min: 2.1, masa: 2.10,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6313",
    tipo: "DGBB",
    serie: "6300",
    d: 65, D: 140, B: 33, r_min: 2.1, masa: 2.68,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6314",
    tipo: "DGBB",
    serie: "6300",
    d: 70, D: 150, B: 35, r_min: 2.1, masa: 3.35,
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    ajuste_eje: "k5 a m6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 6
  },
  {
    designacion: "6315",
    tipo: "DGBB",
    serie: "6300",
    d: 75, D: 160, B: 37, r_min: 2.1, masa: 4.15,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6316",
    tipo: "DGBB",
    serie: "6300",
    d: 80, D: 170, B: 39, r_min: 2.1, masa: 5.05,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6317",
    tipo: "DGBB",
    serie: "6300",
    d: 85, D: 180, B: 41, r_min: 3.0, masa: 6.15,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6318",
    tipo: "DGBB",
    serie: "6300",
    d: 90, D: 190, B: 43, r_min: 3.0, masa: 7.40,
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a K7",
    juego_residual_min: 7
  },
  {
    designacion: "6319",
    tipo: "DGBB",
    serie: "6300",
    d: 95, D: 200, B: 45, r_min: 3.0, masa: 8.80,
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 8
  },
  {
    designacion: "6320",
    tipo: "DGBB",
    serie: "6300",
    d: 100, D: 215, B: 47, r_min: 3.0, masa: 11.5,
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    ajuste_eje: "m6 a n6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 8
  },
  {
    designacion: "6322",
    tipo: "DGBB",
    serie: "6300",
    d: 110, D: 240, B: 50, r_min: 3.0, masa: 15.5,
    juego: { CN: { min: 18, max: 46 }, C3: { min: 36, max: 66 }, C4: { min: 46, max: 81 } },
    ajuste_eje: "m6 a p6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 10
  },
  {
    designacion: "6324",
    tipo: "DGBB",
    serie: "6300",
    d: 120, D: 260, B: 55, r_min: 3.0, masa: 19.5,
    juego: { CN: { min: 18, max: 46 }, C3: { min: 36, max: 66 }, C4: { min: 46, max: 81 } },
    ajuste_eje: "m6 a p6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 10
  },
  {
    designacion: "6326",
    tipo: "DGBB",
    serie: "6300",
    d: 130, D: 280, B: 58, r_min: 4.0, masa: 24.5,
    juego: { CN: { min: 18, max: 53 }, C3: { min: 40, max: 76 }, C4: { min: 53, max: 91 } },
    ajuste_eje: "n6 a p6",
    ajuste_alojamiento: "H7 a M7",
    juego_residual_min: 10
  },

  // ═══════════════════════════════════════════════════════════════
  // SELF-ALIGNING BALL BEARINGS — Series 1200 (Tapered Bore K)
  // Montaje con manguito de fijación H 2xx
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "1205 K",
    tipo: "SABB", serie: "1200",
    d: 25, D: 52, B: 15, r_min: 1.0, masa: 0.10,
    manguito: "H 205",
    juego: { CN: { min: 7, max: 23 }, C3: { min: 15, max: 30 }, C4: { min: 23, max: 38 } },
    reduccion: { min: 5, max: 8 },
    calado_axial: { min: 0.08, max: 0.13 },
    angulo_apriete: { min: 65, max: 65 },
    juego_residual_min: 3
  },
  {
    designacion: "1206 K",
    tipo: "SABB", serie: "1200",
    d: 30, D: 62, B: 16, r_min: 1.0, masa: 0.15,
    manguito: "H 206",
    juego: { CN: { min: 7, max: 23 }, C3: { min: 15, max: 30 }, C4: { min: 23, max: 38 } },
    reduccion: { min: 5, max: 8 },
    calado_axial: { min: 0.08, max: 0.13 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 3
  },
  {
    designacion: "1207 K",
    tipo: "SABB", serie: "1200",
    d: 35, D: 72, B: 17, r_min: 1.0, masa: 0.22,
    manguito: "H 207",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 3
  },
  {
    designacion: "1208 K",
    tipo: "SABB", serie: "1200",
    d: 40, D: 80, B: 18, r_min: 1.0, masa: 0.28,
    manguito: "H 208",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 4
  },
  {
    designacion: "1209 K",
    tipo: "SABB", serie: "1200",
    d: 45, D: 85, B: 19, r_min: 1.0, masa: 0.30,
    manguito: "H 209",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 4
  },
  {
    designacion: "1210 K",
    tipo: "SABB", serie: "1200",
    d: 50, D: 90, B: 20, r_min: 1.0, masa: 0.34,
    manguito: "H 210",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 4
  },
  {
    designacion: "1211 K",
    tipo: "SABB", serie: "1200",
    d: 55, D: 100, B: 21, r_min: 1.5, masa: 0.44,
    manguito: "H 211",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 5
  },
  {
    designacion: "1212 K",
    tipo: "SABB", serie: "1200",
    d: 60, D: 110, B: 22, r_min: 1.5, masa: 0.55,
    manguito: "H 212",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 5
  },
  {
    designacion: "1213 K",
    tipo: "SABB", serie: "1200",
    d: 65, D: 120, B: 23, r_min: 1.5, masa: 0.70,
    manguito: "H 213",
    juego: { CN: { min: 12, max: 34 }, C3: { min: 24, max: 46 }, C4: { min: 34, max: 56 } },
    reduccion: { min: 9, max: 15 },
    calado_axial: { min: 0.14, max: 0.24 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 5
  },
  {
    designacion: "1214 K",
    tipo: "SABB", serie: "1200",
    d: 70, D: 125, B: 24, r_min: 1.5, masa: 0.76,
    manguito: "H 214",
    juego: { CN: { min: 12, max: 34 }, C3: { min: 24, max: 46 }, C4: { min: 34, max: 56 } },
    reduccion: { min: 9, max: 15 },
    calado_axial: { min: 0.14, max: 0.24 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 5
  },
  {
    designacion: "1215 K",
    tipo: "SABB", serie: "1200",
    d: 75, D: 130, B: 25, r_min: 1.5, masa: 0.83,
    manguito: "H 215",
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    reduccion: { min: 10, max: 16 },
    calado_axial: { min: 0.16, max: 0.26 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 5
  },
  {
    designacion: "1216 K",
    tipo: "SABB", serie: "1200",
    d: 80, D: 140, B: 26, r_min: 2.0, masa: 1.04,
    manguito: "H 216",
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    reduccion: { min: 10, max: 16 },
    calado_axial: { min: 0.16, max: 0.26 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 6
  },
  {
    designacion: "1218 K",
    tipo: "SABB", serie: "1200",
    d: 90, D: 160, B: 30, r_min: 2.0, masa: 1.60,
    manguito: "H 218",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 7
  },
  {
    designacion: "1220 K",
    tipo: "SABB", serie: "1200",
    d: 100, D: 180, B: 34, r_min: 2.0, masa: 2.35,
    manguito: "H 220",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 7
  },

  // ═══════════════════════════════════════════════════════════════
  // SELF-ALIGNING BALL BEARINGS — Series 1300 (Tapered Bore K)
  // Montaje con manguito de fijación H 3xx
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "1305 K",
    tipo: "SABB", serie: "1300",
    d: 25, D: 62, B: 17, r_min: 1.0, masa: 0.18,
    manguito: "H 305",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 65, max: 65 },
    juego_residual_min: 3
  },
  {
    designacion: "1306 K",
    tipo: "SABB", serie: "1300",
    d: 30, D: 72, B: 19, r_min: 1.0, masa: 0.27,
    manguito: "H 306",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 3
  },
  {
    designacion: "1307 K",
    tipo: "SABB", serie: "1300",
    d: 35, D: 80, B: 21, r_min: 1.5, masa: 0.38,
    manguito: "H 307",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 4
  },
  {
    designacion: "1308 K",
    tipo: "SABB", serie: "1300",
    d: 40, D: 90, B: 23, r_min: 1.5, masa: 0.52,
    manguito: "H 308",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 4
  },
  {
    designacion: "1309 K",
    tipo: "SABB", serie: "1300",
    d: 45, D: 100, B: 25, r_min: 1.5, masa: 0.70,
    manguito: "H 309",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 4
  },
  {
    designacion: "1310 K",
    tipo: "SABB", serie: "1300",
    d: 50, D: 110, B: 27, r_min: 2.0, masa: 0.93,
    manguito: "H 310",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 5
  },
  {
    designacion: "1311 K",
    tipo: "SABB", serie: "1300",
    d: 55, D: 120, B: 29, r_min: 2.0, masa: 1.18,
    manguito: "H 311",
    juego: { CN: { min: 12, max: 34 }, C3: { min: 24, max: 46 }, C4: { min: 34, max: 56 } },
    reduccion: { min: 9, max: 15 },
    calado_axial: { min: 0.14, max: 0.24 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 5
  },
  {
    designacion: "1312 K",
    tipo: "SABB", serie: "1300",
    d: 60, D: 130, B: 31, r_min: 2.0, masa: 1.50,
    manguito: "H 312",
    juego: { CN: { min: 12, max: 34 }, C3: { min: 24, max: 46 }, C4: { min: 34, max: 56 } },
    reduccion: { min: 9, max: 15 },
    calado_axial: { min: 0.14, max: 0.24 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 5
  },
  {
    designacion: "1313 K",
    tipo: "SABB", serie: "1300",
    d: 65, D: 140, B: 33, r_min: 2.0, masa: 1.85,
    manguito: "H 313",
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    reduccion: { min: 10, max: 16 },
    calado_axial: { min: 0.16, max: 0.26 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 6
  },
  {
    designacion: "1314 K",
    tipo: "SABB", serie: "1300",
    d: 70, D: 150, B: 35, r_min: 2.0, masa: 2.20,
    manguito: "H 314",
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    reduccion: { min: 10, max: 16 },
    calado_axial: { min: 0.16, max: 0.26 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 6
  },
  {
    designacion: "1316 K",
    tipo: "SABB", serie: "1300",
    d: 80, D: 170, B: 39, r_min: 2.0, masa: 3.20,
    manguito: "H 316",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 7
  },
  {
    designacion: "1318 K",
    tipo: "SABB", serie: "1300",
    d: 90, D: 190, B: 43, r_min: 3.0, masa: 4.40,
    manguito: "H 318",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 7
  },
  {
    designacion: "1320 K",
    tipo: "SABB", serie: "1300",
    d: 100, D: 215, B: 47, r_min: 3.0, masa: 6.60,
    manguito: "H 320",
    juego: { CN: { min: 18, max: 46 }, C3: { min: 36, max: 66 }, C4: { min: 46, max: 81 } },
    reduccion: { min: 14, max: 20 },
    calado_axial: { min: 0.22, max: 0.32 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 8
  },

  // ═══════════════════════════════════════════════════════════════
  // SELF-ALIGNING BALL BEARINGS — Series 2200 (Tapered Bore K)
  // Montaje con manguito de fijación H 3xx
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "2205 K",
    tipo: "SABB", serie: "2200",
    d: 25, D: 52, B: 18, r_min: 1.0, masa: 0.12,
    manguito: "H 305",
    juego: { CN: { min: 7, max: 23 }, C3: { min: 15, max: 30 }, C4: { min: 23, max: 38 } },
    reduccion: { min: 5, max: 8 },
    calado_axial: { min: 0.08, max: 0.13 },
    angulo_apriete: { min: 65, max: 65 },
    juego_residual_min: 3
  },
  {
    designacion: "2206 K",
    tipo: "SABB", serie: "2200",
    d: 30, D: 62, B: 20, r_min: 1.0, masa: 0.19,
    manguito: "H 306",
    juego: { CN: { min: 7, max: 23 }, C3: { min: 15, max: 30 }, C4: { min: 23, max: 38 } },
    reduccion: { min: 5, max: 8 },
    calado_axial: { min: 0.08, max: 0.13 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 3
  },
  {
    designacion: "2207 K",
    tipo: "SABB", serie: "2200",
    d: 35, D: 72, B: 23, r_min: 1.0, masa: 0.29,
    manguito: "H 307",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 3
  },
  {
    designacion: "2208 K",
    tipo: "SABB", serie: "2200",
    d: 40, D: 80, B: 23, r_min: 1.0, masa: 0.33,
    manguito: "H 308",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 4
  },
  {
    designacion: "2209 K",
    tipo: "SABB", serie: "2200",
    d: 45, D: 85, B: 23, r_min: 1.0, masa: 0.34,
    manguito: "H 309",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 4
  },
  {
    designacion: "2210 K",
    tipo: "SABB", serie: "2200",
    d: 50, D: 90, B: 23, r_min: 1.0, masa: 0.37,
    manguito: "H 310",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 4
  },
  {
    designacion: "2211 K",
    tipo: "SABB", serie: "2200",
    d: 55, D: 100, B: 25, r_min: 1.5, masa: 0.50,
    manguito: "H 311",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 5
  },
  {
    designacion: "2212 K",
    tipo: "SABB", serie: "2200",
    d: 60, D: 110, B: 28, r_min: 1.5, masa: 0.68,
    manguito: "H 312",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 5
  },
  {
    designacion: "2214 K",
    tipo: "SABB", serie: "2200",
    d: 70, D: 125, B: 31, r_min: 1.5, masa: 0.95,
    manguito: "H 314",
    juego: { CN: { min: 12, max: 34 }, C3: { min: 24, max: 46 }, C4: { min: 34, max: 56 } },
    reduccion: { min: 9, max: 15 },
    calado_axial: { min: 0.14, max: 0.24 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 5
  },
  {
    designacion: "2216 K",
    tipo: "SABB", serie: "2200",
    d: 80, D: 140, B: 33, r_min: 2.0, masa: 1.25,
    manguito: "H 316",
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    reduccion: { min: 10, max: 16 },
    calado_axial: { min: 0.16, max: 0.26 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 6
  },
  {
    designacion: "2218 K",
    tipo: "SABB", serie: "2200",
    d: 90, D: 160, B: 40, r_min: 2.0, masa: 1.90,
    manguito: "H 318",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 7
  },
  {
    designacion: "2220 K",
    tipo: "SABB", serie: "2200",
    d: 100, D: 180, B: 46, r_min: 2.0, masa: 2.90,
    manguito: "H 320",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 7
  },

  // ═══════════════════════════════════════════════════════════════
  // SELF-ALIGNING BALL BEARINGS — Series 2300 (Tapered Bore K)
  // Montaje con manguito de fijación H 23xx
  // ═══════════════════════════════════════════════════════════════

  {
    designacion: "2305 K",
    tipo: "SABB", serie: "2300",
    d: 25, D: 62, B: 24, r_min: 1.5, masa: 0.25,
    manguito: "H 2305",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 65, max: 65 },
    juego_residual_min: 3
  },
  {
    designacion: "2306 K",
    tipo: "SABB", serie: "2300",
    d: 30, D: 72, B: 27, r_min: 1.5, masa: 0.38,
    manguito: "H 2306",
    juego: { CN: { min: 8, max: 25 }, C3: { min: 17, max: 33 }, C4: { min: 25, max: 41 } },
    reduccion: { min: 6, max: 10 },
    calado_axial: { min: 0.10, max: 0.16 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 3
  },
  {
    designacion: "2307 K",
    tipo: "SABB", serie: "2300",
    d: 35, D: 80, B: 31, r_min: 1.5, masa: 0.53,
    manguito: "H 2307",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 70, max: 70 },
    juego_residual_min: 4
  },
  {
    designacion: "2308 K",
    tipo: "SABB", serie: "2300",
    d: 40, D: 90, B: 33, r_min: 1.5, masa: 0.72,
    manguito: "H 2308",
    juego: { CN: { min: 10, max: 28 }, C3: { min: 20, max: 38 }, C4: { min: 28, max: 46 } },
    reduccion: { min: 7, max: 12 },
    calado_axial: { min: 0.11, max: 0.19 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 4
  },
  {
    designacion: "2309 K",
    tipo: "SABB", serie: "2300",
    d: 45, D: 100, B: 36, r_min: 1.5, masa: 0.95,
    manguito: "H 2309",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 5
  },
  {
    designacion: "2310 K",
    tipo: "SABB", serie: "2300",
    d: 50, D: 110, B: 40, r_min: 2.0, masa: 1.29,
    manguito: "H 2310",
    juego: { CN: { min: 10, max: 30 }, C3: { min: 20, max: 41 }, C4: { min: 30, max: 51 } },
    reduccion: { min: 8, max: 13 },
    calado_axial: { min: 0.13, max: 0.21 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 5
  },
  {
    designacion: "2311 K",
    tipo: "SABB", serie: "2300",
    d: 55, D: 120, B: 43, r_min: 2.0, masa: 1.65,
    manguito: "H 2311",
    juego: { CN: { min: 12, max: 34 }, C3: { min: 24, max: 46 }, C4: { min: 34, max: 56 } },
    reduccion: { min: 9, max: 15 },
    calado_axial: { min: 0.14, max: 0.24 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 5
  },
  {
    designacion: "2312 K",
    tipo: "SABB", serie: "2300",
    d: 60, D: 130, B: 46, r_min: 2.0, masa: 2.10,
    manguito: "H 2312",
    juego: { CN: { min: 12, max: 34 }, C3: { min: 24, max: 46 }, C4: { min: 34, max: 56 } },
    reduccion: { min: 9, max: 15 },
    calado_axial: { min: 0.14, max: 0.24 },
    angulo_apriete: { min: 75, max: 75 },
    juego_residual_min: 6
  },
  {
    designacion: "2313 K",
    tipo: "SABB", serie: "2300",
    d: 65, D: 140, B: 48, r_min: 2.0, masa: 2.60,
    manguito: "H 2313",
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    reduccion: { min: 10, max: 16 },
    calado_axial: { min: 0.16, max: 0.26 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 6
  },
  {
    designacion: "2314 K",
    tipo: "SABB", serie: "2300",
    d: 70, D: 150, B: 51, r_min: 2.5, masa: 3.10,
    manguito: "H 2314",
    juego: { CN: { min: 12, max: 36 }, C3: { min: 25, max: 51 }, C4: { min: 36, max: 61 } },
    reduccion: { min: 10, max: 16 },
    calado_axial: { min: 0.16, max: 0.26 },
    angulo_apriete: { min: 80, max: 80 },
    juego_residual_min: 6
  },
  {
    designacion: "2316 K",
    tipo: "SABB", serie: "2300",
    d: 80, D: 170, B: 58, r_min: 2.5, masa: 4.60,
    manguito: "H 2316",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 85, max: 85 },
    juego_residual_min: 7
  },
  {
    designacion: "2318 K",
    tipo: "SABB", serie: "2300",
    d: 90, D: 190, B: 64, r_min: 3.0, masa: 6.30,
    manguito: "H 2318",
    juego: { CN: { min: 15, max: 41 }, C3: { min: 30, max: 56 }, C4: { min: 41, max: 71 } },
    reduccion: { min: 12, max: 18 },
    calado_axial: { min: 0.19, max: 0.29 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 7
  },
  {
    designacion: "2320 K",
    tipo: "SABB", serie: "2300",
    d: 100, D: 215, B: 73, r_min: 3.0, masa: 9.50,
    manguito: "H 2320",
    juego: { CN: { min: 18, max: 46 }, C3: { min: 36, max: 66 }, C4: { min: 46, max: 81 } },
    reduccion: { min: 14, max: 20 },
    calado_axial: { min: 0.22, max: 0.32 },
    angulo_apriete: { min: 110, max: 110 },
    juego_residual_min: 8
  },

  // ═══════════════════════════════════════════════════════════════
  // FAG SPLIT SPHERICAL ROLLER BEARINGS — Series 222 SM
  // Valores reales extraídos del catálogo oficial FAG
  // ═══════════════════════════════════════════════════════════════
  {
    designacion: "222SM55-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 55, D: 100, B: 25, r_min: 2.0, masa: 0.6,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M4", torque: 1.5 }
  },
  {
    designacion: "222SM60-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 60, D: 110, B: 28, r_min: 2.0, masa: 0.7,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M5", torque: 4 }
  },
  {
    designacion: "222SM65-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 65, D: 120, B: 31, r_min: 2.0, masa: 1.0,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M5", torque: 4 }
  },
  {
    designacion: "222SM70-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 70, D: 125, B: 31, r_min: 2.0, masa: 1.1,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M5", torque: 4 }
  },
  {
    designacion: "222SM75-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 75, D: 130, B: 31, r_min: 2.0, masa: 1.2,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M6", torque: 8.5 }
  },
  {
    designacion: "222SM80-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 80, D: 140, B: 33, r_min: 2.0, masa: 1.5,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M6", torque: 8.5 }
  },
  {
    designacion: "222SM85-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 85, D: 150, B: 36, r_min: 2.0, masa: 1.8,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M6", torque: 8.5 }
  },
  {
    designacion: "222SM90-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 90, D: 160, B: 40, r_min: 2.0, masa: 2.3,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222SM100-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 100, D: 180, B: 46, r_min: 2.0, masa: 3.3,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222SM110-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 110, D: 200, B: 53, r_min: 2.0, masa: 4.7,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222SM115-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 115, D: 230, B: 64, r_min: 2.0, masa: 6.8,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222SM125-TVPA",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 125, D: 250, B: 68, r_min: 2.0, masa: 8.5,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222SM135-MB",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 135, D: 270, B: 73, r_min: 2.0, masa: 10.6,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222SM140-MB",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 140, D: 290, B: 80, r_min: 2.0, masa: 13.0,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222SM150-MB",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 150, D: 310, B: 86, r_min: 2.0, masa: 16.0,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222SM160-MB",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 160, D: 320, B: 86, r_min: 2.0, masa: 17.6,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222SM170-MB",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 170, D: 340, B: 92, r_min: 2.0, masa: 21.3,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222SM180-MB",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 180, D: 360, B: 98, r_min: 2.0, masa: 25.4,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222SM200-MB",
    tipo: "FAG_SPLIT", serie: "222 SM",
    d: 200, D: 400, B: 108, r_min: 2.0, masa: 34.6,
    pernos_interior: { dim: "M14", torque: 120 },
    pernos_exterior: { dim: "M12", torque: 69 }
  },
  // ═══════════════════════════════════════════════════════════════
  // FAG SPLIT SPHERICAL ROLLER BEARINGS — Series 222 S (Pulgadas)
  // ═══════════════════════════════════════════════════════════════
  {
    designacion: "222S.203",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 55.56, D: 120, B: 31, r_min: 2.0, masa: 0.7,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M4", torque: 1.5 }
  },
  {
    designacion: "222S.204",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 57.15, D: 120, B: 31, r_min: 2.0, masa: 0.7,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M4", torque: 1.5 }
  },
  {
    designacion: "222S.207",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 61.91, D: 130, B: 31, r_min: 2.0, masa: 0.8,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M5", torque: 4 }
  },
  {
    designacion: "222S.208",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 63.50, D: 130, B: 31, r_min: 2.0, masa: 0.9,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M5", torque: 4 }
  },
  {
    designacion: "222S.211",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 68.26, D: 140, B: 33, r_min: 2.0, masa: 1.1,
    pernos_interior: { dim: "M6", torque: 8.5 },
    pernos_exterior: { dim: "M5", torque: 4 }
  },
  {
    designacion: "222S.215",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 74.61, D: 150, B: 36, r_min: 2.0, masa: 1.3,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M6", torque: 8.5 }
  },
  {
    designacion: "222S.300",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 76.20, D: 150, B: 36, r_min: 2.0, masa: 1.4,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M6", torque: 8.5 }
  },
  {
    designacion: "222S.303",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 80.96, D: 160, B: 40, r_min: 2.0, masa: 1.7,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M6", torque: 8.5 }
  },
  {
    designacion: "222S.304",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 82.55, D: 160, B: 40, r_min: 2.0, masa: 1.8,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M6", torque: 8.5 }
  },
  {
    designacion: "222S.307",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 87.31, D: 180, B: 46, r_min: 2.0, masa: 2.4,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.308",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 88.90, D: 180, B: 46, r_min: 2.0, masa: 2.5,
    pernos_interior: { dim: "M8", torque: 14 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.315",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 100.01, D: 200, B: 53, r_min: 2.0, masa: 3.5,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.400",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 101.60, D: 200, B: 53, r_min: 2.0, masa: 3.6,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.403",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 106.36, D: 215, B: 58, r_min: 2.0, masa: 4.4,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.407",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 112.71, D: 230, B: 64, r_min: 2.0, masa: 5.5,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.408",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 114.30, D: 230, B: 64, r_min: 2.0, masa: 5.6,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.415",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 125.41, D: 250, B: 68, r_min: 2.0, masa: 7.1,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.500",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 127.00, D: 250, B: 68, r_min: 2.0, masa: 7.2,
    pernos_interior: { dim: "M10", torque: 35 },
    pernos_exterior: { dim: "M8", torque: 14 }
  },
  {
    designacion: "222S.503",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 131.76, D: 270, B: 73, r_min: 2.0, masa: 8.7,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222S.507",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 138.11, D: 290, B: 80, r_min: 2.0, masa: 10.7,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222S.508",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 139.70, D: 290, B: 80, r_min: 2.0, masa: 10.8,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
  {
    designacion: "222S.515",
    tipo: "FAG_SPLIT", serie: "222 S",
    d: 150.81, D: 310, B: 86, r_min: 2.0, masa: 13.4,
    pernos_interior: { dim: "M12", torque: 69 },
    pernos_exterior: { dim: "M10", torque: 35 }
  },
];

// Bearing type labels for display
const BEARING_TYPES = {
  SRB: {
    label: "Rodamiento de Rodillos a Rótula",
    labelEN: "Spherical Roller Bearing",
    icon: "⊙",
    color: "#4fc3f7"
  },
  DGBB: {
    label: "Rodamiento Rígido de Bolas",
    labelEN: "Deep Groove Ball Bearing",
    icon: "○",
    color: "#66bb6a"
  },
  SABB: {
    label: "Rodamiento de Bolas Autoalineable",
    labelEN: "Self-Aligning Ball Bearing",
    icon: "◎",
    color: "#ff9800"
  },
  FAG_SPLIT: {
    label: "Rodamiento Partido FAG",
    labelEN: "FAG Split Bearing",
    icon: "◖◗",
    color: "#ef4444"
  }
};
