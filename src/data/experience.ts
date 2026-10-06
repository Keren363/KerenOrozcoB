import { bi } from "./types";
// EMPLOYER CONFIDENTIALITY RULE: Never include confidential employer information.
// Keep experience generalized/anonymized. Never publish proprietary manufacturing data,
// investigation identifiers, CAPA numbers, internal metrics, specific product failures,
// patient data, internal technical documents, confidential processes or unreleased products.
export const experience = {
  company: "Boston Scientific",
  role: bi(
    "Design Quality Assurance Intern",
    "Practicante de Aseguramiento de Calidad de Diseño",
  ),
  period: bi("2025 — Present", "2025 — Actualidad"),
  location: "Costa Rica",
  points: [
    bi(
      "Support Design Quality Assurance in regulated medical device manufacturing, working with Quality, Engineering, Manufacturing and R&D.",
      "Apoyo Design Quality Assurance en manufactura regulada de dispositivos médicos, junto a Calidad, Ingeniería, Manufactura e I+D.",
    ),
    bi(
      "Contribute evidence review, hypothesis analysis and testing follow-up to quality investigations and CAPA/NCEP activities.",
      "Contribuyo con revisión de evidencia, análisis de hipótesis y seguimiento de pruebas en investigaciones de calidad y actividades CAPA/NCEP.",
    ),
    bi(
      "Execute product and process testing under approved procedures; support qualification and validation with data collection and documented results.",
      "Ejecuto pruebas de producto y proceso bajo procedimientos aprobados; apoyo calificación y validación con recopilación de datos y resultados documentados.",
    ),
    bi(
      "Work with controlled technical records, traceability and risk-related documentation in manufacturing and cleanroom environments.",
      "Trabajo con registros técnicos controlados, trazabilidad y documentación de riesgo en manufactura y ambientes de cuarto limpio.",
    ),
    bi(
      "Build Power BI dashboards for workload, process and quality tracking, and a Power Apps onboarding solution.",
      "Desarrollo tableros en Power BI para seguimiento de carga de trabajo, procesos y calidad, y una solución de onboarding en Power Apps.",
    ),
  ],
  tools: [
    "Excel",
    "Power BI",
    "Power Apps",
    "SharePoint",
    "Windchill",
    "SAP",
    "Minitab",
  ],
};
