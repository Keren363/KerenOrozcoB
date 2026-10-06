import { bi, type Project, type Localized } from "./types";
const section = (
  en: string,
  es: string,
  bodyEn: string,
  bodyEs: string,
  bullets?: Localized[],
) => ({
  title: bi(en, es),
  body: bi(bodyEn, bodyEs),
  bullets,
});
export const projects: Project[] = [
  {
    slug: "krea-one",
    name: "KREA ONE",
    category: bi("Software + Business", "Software + Negocio"),
    summary: bi(
      "My activewear brand: e-commerce development informed by sourcing, pricing and customer experience.",
      "Mi marca deportiva: desarrollo de e-commerce conectado con proveedores, precios y experiencia del cliente.",
    ),
    technologies: ["React", "TypeScript", "GitHub Pages"],
    color: "sage",
    visual: "krea",
    githubUrl: "",
    liveUrl: "",
    screenshots: [
      {
        src: "projects/krea/desktop.png",
        alt: bi(
          "KREA storefront: brand story and activewear presentation",
          "Tienda KREA: historia de marca y presentación de ropa deportiva",
        ),
      },
    ],
    sections: [
      section(
        "Overview",
        "Descripción",
        "KREA ONE is my own activewear brand. I work on both the software and the business behind the shopping experience.",
        "KREA ONE es mi propia marca de ropa deportiva. Trabajo tanto en el software como en el negocio detrás de la experiencia de compra.",
      ),
      section(
        "Business challenge",
        "Reto de negocio",
        "Create a coherent digital storefront that connects product discovery, inventory and customer communication with a developing brand.",
        "Crear una tienda digital coherente que conecte el descubrimiento de productos, el inventario y la comunicación con clientes con una marca en desarrollo.",
      ),
      section(
        "My role",
        "Mi rol",
        "Designed and developed the storefront while managing the business side: supplier sourcing and communication, cost analysis, pricing and logistics. I also work on branding, marketing, product photography and content.",
        "Diseñé y desarrollé la tienda y trabajé en el negocio: búsqueda y comunicación con proveedores, análisis de costos, precios y logística. También trabajo en marca, marketing, fotografía de producto y contenido.",
      ),
      section(
        "Approach & architecture",
        "Enfoque y arquitectura",
        "A component-based React and TypeScript frontend with product categories, filters, inventory logic and a shopping cart. The checkout workflow hands the order to WhatsApp. Deployment uses GitHub Pages.",
        "Frontend basado en componentes de React y TypeScript con categorías, filtros, lógica de inventario y carrito. El flujo de compra transfiere el pedido a WhatsApp. El despliegue utiliza GitHub Pages.",
      ),
      section(
        "Key decisions & solution",
        "Decisiones clave y solución",
        "The cart hands off to WhatsApp so customers can continue the purchase through a conversation. Categories and filters organize product discovery; responsive navigation supports browsing on desktop and iPhone.",
        "El carrito transfiere el pedido a WhatsApp para continuar la compra mediante una conversación. Las categorías y filtros organizan los productos; la navegación adaptable permite explorar desde escritorio y iPhone.",
      ),
      section(
        "Challenges",
        "Desafíos",
        "Balancing product information and a clear shopping journey; refining mobile menu behavior, usability and performance while considering inventory and customer experience.",
        "Equilibrar información de producto y una compra clara; mejorar el menú móvil, la usabilidad y el rendimiento considerando inventario y experiencia del cliente.",
      ),
      section(
        "What I learned",
        "Aprendizajes",
        "Software decisions connect directly to product thinking, UX, business analysis and digital commerce. Building the brand requires the technical and commercial sides to work together.",
        "Las decisiones de software se conectan con producto, UX, análisis de negocio y comercio digital. Construir la marca requiere unir el trabajo técnico y comercial.",
      ),
    ],
  },
  {
    slug: "ai-video-editor",
    name: "AI Video Editor",
    category: bi("AI + Automation", "IA + Automatización"),
    summary: bi(
      "Automated video editing with local AI, word timestamps and conservative fallback rules.",
      "Edición automática de video con IA local, marcas de tiempo por palabra y reglas de respaldo conservadoras.",
    ),
    technologies: ["Python", "FFmpeg", "Whisper", "Ollama", "Qwen"],
    color: "lavender",
    visual: "editor",
    githubUrl: "",
    liveUrl: "",
    screenshots: [
      {
        src: "projects/ai-video-editor/desktop.png",
        alt: bi(
          "AI Video Editor: video preview, audio controls and editing timeline",
          "AI Video Editor: vista previa, controles de audio y línea de tiempo",
        ),
      },
    ],
    sections: [
      section(
        "Overview",
        "Descripción",
        "A video-processing project combining transcription, deterministic editing rules and local AI assistance.",
        "Un proyecto de procesamiento de video que combina transcripción, reglas de edición deterministas y asistencia de IA local.",
      ),
      section(
        "Problem",
        "Problema",
        "Video editing requires repeated review of silence, speech and ambiguous transitions. Automated cuts must preserve the meaning and synchronization of the source.",
        "Editar video requiere revisar silencios, voz y transiciones ambiguas. Los cortes automáticos deben preservar el sentido y la sincronización.",
      ),
      section(
        "My role",
        "Mi rol",
        "Developed the processing pipeline and editing decision logic, including conservative fallback behavior for AI failures or excessive latency.",
        "Desarrollé el flujo de procesamiento y la lógica de decisiones de edición, con reglas conservadoras ante fallos o demoras excesivas de la IA.",
      ),
      section(
        "Approach & architecture",
        "Enfoque y arquitectura",
        "Python coordinates a staged processing pipeline:",
        "Python coordina un flujo de procesamiento por etapas:",
        [
          bi(
            "Extract audio and use Whisper to transcribe speech with word timestamps.",
            "Extraer audio y usar Whisper para transcribir voz con marcas de tiempo por palabra.",
          ),
          bi(
            "Detect silence and identify candidate cuts; consult Ollama/Qwen for ambiguous sections.",
            "Detectar silencios e identificar cortes candidatos; consultar Ollama/Qwen en secciones ambiguas.",
          ),
          bi(
            "Apply conservative fallback rules, render cuts with FFmpeg, generate subtitles and prepare 9:16 content.",
            "Aplicar reglas conservadoras de respaldo, ejecutar cortes con FFmpeg, generar subtítulos y preparar contenido 9:16.",
          ),
        ],
      ),
      section(
        "Challenges",
        "Desafíos",
        "Natural cuts, precise timestamps, silence thresholds, AI latency and audio/video synchronization. Aggressive editing can remove useful context.",
        "Cortes naturales, marcas de tiempo precisas, umbrales de silencio, latencia de IA y sincronización audiovisual. Una edición agresiva puede eliminar contexto útil.",
      ),
      section(
        "Solution",
        "Solución",
        "Use local AI to assist uncertain decisions and retain conservative rules when it fails or times out. Automatically cut footage, generate subtitles and prepare vertical 9:16 content while preserving synchronization.",
        "Utilizar IA local para apoyar decisiones inciertas y mantener reglas conservadoras si falla o tarda demasiado. Cortar video, generar subtítulos y preparar contenido vertical 9:16 preservando la sincronización.",
      ),
      section(
        "What I learned",
        "Aprendizajes",
        "A useful AI pipeline needs explicit failure behavior. Local model integration, prompt design and transcription matter, but timestamp alignment and conservative fallbacks determine whether the edit remains usable.",
        "Un flujo de IA útil necesita definir cómo responde ante fallos. La integración local, los prompts y la transcripción importan, pero la alineación temporal y las reglas conservadoras determinan si la edición sigue siendo utilizable.",
      ),
    ],
  },
  {
    slug: "forge",
    name: "FORGE",
    category: bi("Software Development", "Desarrollo de software"),
    summary: bi(
      "A gym application connecting user access, workout data and persistent storage.",
      "Una aplicación de gimnasio que conecta acceso de usuarios, datos de entrenamiento y almacenamiento persistente.",
    ),
    technologies: ["React", "TypeScript", "Vite", "Supabase"],
    color: "peach",
    visual: "forge",
    githubUrl: "",
    liveUrl: "",
    screenshots: [
      {
        src: "projects/forge/desktop.png",
        alt: bi(
          "FORGE Performance System: sign-in screen with account creation option",
          "FORGE Performance System: pantalla de acceso con opción de crear cuenta",
        ),
      },
    ],
    sections: [
      section(
        "Overview",
        "Descripción",
        "A gym application built with React, TypeScript, Vite and Supabase.",
        "Una aplicación de gimnasio desarrollada con React, TypeScript, Vite y Supabase.",
      ),
      section(
        "Problem",
        "Problema",
        "Bring user access and workout-related data into a consistent, responsive application with persistent storage.",
        "Unir acceso de usuarios y datos de entrenamiento en una aplicación adaptable y coherente con almacenamiento persistente.",
      ),
      section(
        "My role",
        "Mi rol",
        "Developed the frontend structure, responsive UI and integration with authentication and database services.",
        "Desarrollé la estructura frontend, la interfaz adaptable y la integración con servicios de autenticación y base de datos.",
      ),
      section(
        "Approach & architecture",
        "Enfoque y arquitectura",
        "React components and TypeScript support a scalable frontend structure. Supabase provides the authentication/user system and database integration for persistent workout-related data.",
        "Los componentes de React y TypeScript sostienen una estructura frontend escalable. Supabase proporciona el sistema de usuarios y autenticación y la integración de datos persistentes de entrenamiento.",
      ),
      section(
        "Challenges",
        "Desafíos",
        "Organizing component responsibilities, managing application state and keeping the interface consistent across screen sizes.",
        "Organizar responsabilidades de componentes, gestionar el estado y mantener una interfaz coherente entre tamaños de pantalla.",
      ),
      section(
        "Solution",
        "Solución",
        "A component-based interface that connects user access, workout-related data and persistence within a maintainable application structure.",
        "Una interfaz de componentes que conecta acceso de usuarios, datos de entrenamiento y persistencia en una estructura mantenible.",
      ),
      section(
        "What I learned",
        "Aprendizajes",
        "Connecting a frontend to persistent data means thinking beyond individual screens: component responsibilities, user state and database integration need to work together.",
        "Conectar una interfaz con datos persistentes requiere pensar más allá de cada pantalla: responsabilidades de componentes, estado del usuario e integración de datos deben funcionar juntos.",
      ),
    ],
  },
  {
    slug: "naia",
    name: "NAIA",
    category: bi("Client Web Development", "Desarrollo web para cliente"),
    summary: bi(
      "A client website translating beauty services and brand identity into a clear digital experience.",
      "Un sitio para cliente que presenta servicios de estética e identidad de marca en una experiencia digital clara.",
    ),
    technologies: [],
    color: "rose",
    visual: "naia",
    githubUrl: "",
    liveUrl: "",
    screenshots: [
      {
        src: "projects/naia/desktop.png",
        alt: bi(
          "NAIA Estética: logo and homepage welcome section",
          "NAIA Estética: logotipo y sección de bienvenida del sitio",
        ),
      },
    ],
    sections: [
      section(
        "Overview",
        "Descripción",
        "A website for an aesthetics and beauty business, focused on a professional digital presence and a clear presentation of services.",
        "Un sitio para un negocio de estética y belleza, enfocado en una presencia digital profesional y una presentación clara de servicios.",
      ),
      section(
        "Business need & client objective",
        "Necesidad de negocio y objetivo del cliente",
        "Translate the business identity and client needs into an attractive, useful website that helps visitors understand the services.",
        "Traducir la identidad del negocio y las necesidades del cliente en un sitio atractivo y útil que permita comprender sus servicios.",
      ),
      section(
        "My role",
        "Mi rol",
        "Designed and developed the website, structured the content, organized services and refined usability and navigation for desktop and mobile.",
        "Diseñé y desarrollé el sitio, estructuré el contenido, organicé los servicios y mejoré la usabilidad y navegación en escritorio y móvil.",
      ),
      section(
        "Design approach",
        "Enfoque de diseño",
        "Adapt the visual identity to the beauty industry, prioritize clear service information and create a responsive layout aligned with business requirements.",
        "Adaptar la identidad visual al sector de belleza, priorizar información clara de servicios y crear un diseño adaptable alineado con los requisitos del negocio.",
      ),
      section(
        "Technologies",
        "Tecnologías",
        "The specific technology stack has not been published. This case study focuses on confirmed web development, requirements analysis and UI/UX contributions.",
        "El stack específico no se ha publicado. Este caso se enfoca en las contribuciones confirmadas de desarrollo web, análisis de requisitos y UI/UX.",
      ),
      section(
        "Challenges & solution",
        "Desafíos y solución",
        "Balance visual appeal with understandable content and navigation. Organize services into a clean interface that reflects the business and works across devices.",
        "Equilibrar atractivo visual con contenido y navegación comprensibles. Organizar servicios en una interfaz limpia que refleje el negocio y funcione en distintos dispositivos.",
      ),
      section(
        "What I learned",
        "Aprendizajes",
        "Client requirements guide both content and interface decisions. A service website needs a recognizable identity, understandable information and navigation that works on a phone.",
        "Los requisitos del cliente orientan el contenido y la interfaz. Un sitio de servicios necesita identidad reconocible, información comprensible y navegación que funcione en un teléfono.",
      ),
    ],
  },
  {
    slug: "quality-automation",
    name: "Quality Data & Process Automation",
    category: bi("Data + Engineering", "Datos + Ingeniería"),
    summary: bi(
      "From testing and controlled records to Power BI reporting and a Power Apps onboarding solution.",
      "De pruebas y registros controlados a reportes en Power BI y una solución de onboarding en Power Apps.",
    ),
    technologies: [
      "Power BI",
      "Excel",
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Minitab",
    ],
    color: "blue",
    visual: "quality",
    githubUrl: "",
    liveUrl: "",
    screenshots: [],
    sections: [
      section(
        "Overview",
        "Descripción",
        "An anonymized account of contributions across testing, quality analysis and workflow development in regulated manufacturing. These are related areas of experience, not a single end-to-end implementation. Employer records and internal results remain confidential.",
        "Descripción anonimizada de contribuciones en pruebas, análisis de calidad y desarrollo de flujos en manufactura regulada. Son áreas de experiencia relacionadas, no una única implementación de principio a fin. Los registros y resultados internos permanecen confidenciales.",
      ),
      section(
        "Problem",
        "Problema",
        "Limited visibility of quality and process information can make technical review and manual tracking more difficult.",
        "La visibilidad limitada de información de calidad y procesos puede dificultar la revisión técnica y el seguimiento manual.",
      ),
      section(
        "My role",
        "Mi rol",
        "I contributed testing, evidence review, data analysis and documentation within a DQA internship. I also developed reporting and onboarding tools. My role supported the responsible engineering and quality teams; it did not include ownership of CAPA, validation approvals or regulatory decisions.",
        "Como pasante de DQA, contribuí con pruebas, revisión de evidencia, análisis de datos y documentación. También desarrollé herramientas de reportes y onboarding. Mi rol fue de apoyo a los equipos responsables de ingeniería y calidad, sin asumir responsabilidad final de CAPA, aprobaciones de validación o decisiones regulatorias.",
      ),
      section(
        "Testing & validation support",
        "Apoyo en pruebas y validación",
        "Hands-on work under approved procedures, defined conditions and acceptance criteria.",
        "Trabajo práctico bajo procedimientos aprobados, condiciones definidas y criterios de aceptación.",
        [
          bi(
            "Participated in visual, electrical, leak, simulated-use and dimensional/area testing, including patient-safety-focused activities.",
            "Participé en pruebas visuales, eléctricas, de fugas, uso simulado y medición dimensional/de área, incluidas actividades enfocadas en seguridad del paciente.",
          ),
          bi(
            "Supported IQ, OQ, PQ and Test Method Validation activities through test execution, condition checks, data collection and documentation.",
            "Apoyé actividades de IQ, OQ, PQ y validación de métodos de prueba mediante ejecución de pruebas, verificación de condiciones, recopilación de datos y documentación.",
          ),
          bi(
            "Basic metrology exposure: used calibrated measurement equipment and specialized measurement software with controlled procedures and traceable records.",
            "Exposición a metrología básica: uso de equipos calibrados y software especializado de medición bajo procedimientos controlados y registros trazables.",
          ),
        ],
      ),
      section(
        "Investigations & controlled records",
        "Investigaciones y registros controlados",
        "Connect observations and evidence with the technical records needed for structured review.",
        "Relacionar observaciones y evidencia con los registros técnicos necesarios para una revisión estructurada.",
        [
          bi(
            "Supported root cause analysis, 5 Whys, hypothesis matrices and evidence review for investigations, including exposure to complaint-related analysis and the CAPA/NCEP documentation cycle.",
            "Apoyé análisis de causa raíz, 5 porqués, matrices de hipótesis y revisión de evidencia en investigaciones, con exposición a análisis relacionados con quejas y al ciclo documental de CAPA/NCEP.",
          ),
          bi(
            "Reviewed technical reports, protocols and traceability records; worked with engineering changes, approval workflows, DFMEA and Hazard Analysis documentation.",
            "Revisé reportes técnicos, protocolos y registros de trazabilidad; trabajé con cambios de ingeniería, flujos de aprobación y documentación de DFMEA y Hazard Analysis.",
          ),
          bi(
            "Observed manufacturing flows and work instructions, contributed process flow diagrams and worked within cleanroom and environmental requirements.",
            "Observé flujos de manufactura e instrucciones de trabajo, contribuí a diagramas de proceso y trabajé bajo requisitos de cuarto limpio y condiciones ambientales.",
          ),
        ],
      ),
      section(
        "Data into useful reporting",
        "De datos a reportes útiles",
        "Organize results from testing, equipment, processes and investigations so technical teams can review them.",
        "Organizar resultados de pruebas, equipos, procesos e investigaciones para su revisión por los equipos técnicos.",
        [
          bi(
            "Structured and analyzed results in Excel; developed Power BI dashboards for workload, process visibility, investigation tracking and Gemba metrics.",
            "Estructuré y analicé resultados en Excel; desarrollé tableros de Power BI para carga de trabajo, visibilidad de procesos, seguimiento de investigaciones y métricas Gemba.",
          ),
          bi(
            "Used Minitab and completed internal training. My statistical foundations include descriptive statistics, trend analysis and basic process capability concepts such as Cp/Cpk.",
            "Utilicé Minitab y recibí formación interna. Mis bases estadísticas incluyen estadística descriptiva, tendencias y conceptos básicos de capacidad de proceso como Cp/Cpk.",
          ),
        ],
      ),
      section(
        "Onboarding & workflow tools",
        "Onboarding y herramientas de flujo",
        "Created an onboarding solution in Power Apps. I have also developed and explored workflow improvements using Power Automate and SharePoint, with attention to documentation, information organization and repetitive tracking.",
        "Creé una solución de onboarding en Power Apps. También he desarrollado y explorado mejoras de flujo con Power Automate y SharePoint, enfocadas en documentación, organización de información y seguimiento repetitivo.",
      ),
      section(
        "Challenges",
        "Desafíos",
        "Maintain traceability and clear definitions while working within controlled documentation and regulated workflows. Keep analytical support distinct from final quality or regulatory decisions.",
        "Mantener trazabilidad y definiciones claras dentro de documentación controlada y flujos regulados. Diferenciar el apoyo analítico de las decisiones finales de calidad o regulación.",
      ),
      section(
        "What this work produced",
        "Entregables de este trabajo",
        "Documented test results, organized evidence, process diagrams, Power BI reports and a Power Apps onboarding solution. These deliverables supported technical review and process follow-up; no internal metrics or quantified impact are published.",
        "Resultados de pruebas documentados, evidencia organizada, diagramas de proceso, reportes de Power BI y una solución de onboarding en Power Apps. Estos entregables apoyaron la revisión técnica y el seguimiento de procesos; no se publican métricas internas ni impactos cuantificados.",
      ),
      section(
        "What I learned",
        "Aprendizajes",
        "Data analytics, automation and quality engineering are most useful when the information remains interpretable, traceable and appropriate to a regulated environment.",
        "La analítica, automatización e ingeniería de calidad son más útiles cuando la información es interpretable, trazable y apropiada para un entorno regulado.",
      ),
    ],
  },
];
