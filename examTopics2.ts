import { QuestionItem, SectionTheory } from './examTopics.ts';

export const SECTIONS_THEORY_PART2: SectionTheory[] = [
  {
    id: 10,
    titleEs: "10. NEXOS",
    titleHy: "10. ԿԱՊԱԿՑԻՉՆԵՐ",
    rules: [
      {
        termEs: "Conjunción / Nexo",
        descEs: "Palabras invariables que unen oraciones o palabras (y, pero, porque...).",
        termHy: "Շաղկապ / Կապակցիչ",
        descHy: "Անփոփոխ բառեր, որոնք միացնում են բառեր կամ նախադասություններ (և, բայց, որովհետև)։",
        exampleEs: "Carlos juega al tenis y estudia. / Quiero ir, pero estoy cansado.",
        exampleHy: "Կառլոսը թենիս է խաղում և սովորում։ / Ուզում եմ գնալ, բայց հոգնած եմ։"
      },
      {
        termEs: "Preposición / Nexo",
        descEs: "Palabras que relacionan elementos sintácticos (a, con, de, en, sobre...).",
        termHy: "Նախդիր / Կապ",
        descHy: "Կապող բառեր (առ, հետ, վրա, մեջ)։",
        exampleEs: "El libro está sobre la mesa. / Voy con mi amigo.",
        exampleHy: "Գիրքը սեղանի վրա է։ / Գնում եմ ընկերոջս հետ։"
      }
    ]
  },
  {
    id: 11,
    titleEs: "11. LA COMUNICACIÓN Y LOS TEXTOS",
    titleHy: "11. ՀԱՂՈՐԴԱԿՑՈՒԹՅՈՒՆԸ ԵՎ ՏԵՔՍՏԵՐԸ",
    rules: [
      { termEs: "Narrativo", descEs: "Cuenta hechos o historias reales o ficticias.", termHy: "Պատմողական", descHy: "Պատմում է դեպքեր, պատմություններ կամ իրադարձություններ։", exampleEs: "Ayer salimos de casa, fuimos al parque y vimos a Carlos.", exampleHy: "Երեկ դուրս եկանք տնից, գնացինք զբոսայգի և տեսանք Կառլոսին։" },
      { termEs: "Descriptivo", descEs: "Dice cómo son personas, lugares u objetos.", termHy: "Նկարագրական", descHy: "Նկարագրում է անձանց, առարկաներ կամ տեղեր։", exampleEs: "Carlos es alto, moreno y muy simpático.", exampleHy: "Կառլոսը բարձրահասակ է, թխահեր և շատ համակրելի։" },
      { termEs: "Expositivo", descEs: "Informa objetivamente o explica un tema con claridad.", termHy: "Բացատրական / տեղեկատվական", descHy: "Օբյեկտիվորեն տեղեկություն է տալիս կամ բացատրում գիտական թեմա։", exampleEs: "El agua está formada por hidrógeno y oxígeno.", exampleHy: "Ջուրը կազմված է ջրածնից և թթվածնից։" },
      { termEs: "Argumentativo", descEs: "Defiende una opinión mediante argumentos y razones.", termHy: "Փաստարկային / համոզող", descHy: "Կարծիք է հայտնում և հիմնավորում փաստարկներով։", exampleEs: "Creo que hacer deporte es importante porque mejora la salud.", exampleHy: "Կարծում եմ՝ սպորտով զբաղվելը կարևոր է, որովհետև բարելավում է առողջությունը։" },
      { termEs: "Instructivo", descEs: "Explica pasos o instrucciones para hacer algo.", termHy: "Հրահանգային", descHy: "Տալիս է հստակ քայլեր կամ բաղադրատոմս/կանոններ։", exampleEs: "Primero corta las verduras; después añade aceite.", exampleHy: "Նախ կտրատիր բանջարեղենը, հետո ավելացրու ձեթ։" },
      { termEs: "Dialogado", descEs: "Reproduce una conversación entre dos o más interlocutores.", termHy: "Երկխոսական", descHy: "Վերարտադրում է զրույց երկու կամ ավելի անձանց միջև։", exampleEs: "—¿Vienes conmigo? —Sí, claro.", exampleHy: "—Գալի՞ս ես հետս։ —Այո, իհարկե։" }
    ]
  },
  {
    id: 12,
    titleEs: "12. PROPIEDADES DEL TEXTO",
    titleHy: "12. ՏԵՔՍՏԻ ՀԱՏԿՈՒԹՅՈՒՆՆԵՐԸ",
    rules: [
      { termEs: "Coherencia", descEs: "Todas las ideas tratan el mismo tema y tienen sentido lógico.", termHy: "Կապակցված իմաստ (Coherencia)", descHy: "Բոլոր մտքերը վերաբերում են միևնույն թեմային և ունեն տրամաբանություն։" },
      { termEs: "Cohesión", descEs: "Las frases están conectadas gramaticalmente mediante nexos y conectores.", termHy: "Կապակցված կառուցվածք (Cohesión)", descHy: "Նախադասությունները քերականորեն կապված են կապակցիչներով (por eso, sin embargo...)։" },
      { termEs: "Adecuación", descEs: "El registro y lenguaje se adaptan a la situación y al receptor.", termHy: "Համապատասխանություն (Adecuación)", descHy: "Լեզուն և ոճը հարմարեցված են իրավիճակին և հասցեատիրոջը (ընկեր vs տնօրեն)։" }
    ]
  },
  {
    id: 13,
    titleEs: "13. LA LENGUA COMO SISTEMA",
    titleHy: "13. ԼԵԶՈՒՆ ՈՐՊԵՍ ՀԱՄԱԿԱՐԳ",
    rules: [
      { termEs: "Orden jerárquico", descEs: "fonema → morfema → palabra → sintagma → oración → texto", termHy: "Հիերարխիկ կարգ", descHy: "հնչույթ → ձևույթ → բառ → բառակապակցություն → նախադասություն → տեքստ" }
    ]
  },
  {
    id: 14,
    titleEs: "14-18. LÉXICO Y SIGNIFICADOS",
    titleHy: "14-18. ԲԱՌԱՊԱՇԱՐ ԵՎ ԻՄԱՍՏՆԵՐ",
    rules: [
      { termEs: "Sinónimos", descEs: "Palabras con significado similar (feliz = contento).", termHy: "Հոմանիշներ", descHy: "Մոտ իմաստ ունեցող բառեր (ուրախ = զվարթ)։" },
      { termEs: "Antónimos", descEs: "Palabras con significado opuesto (alto ↔ bajo).", termHy: "Հականիշներ", descHy: "Հակառակ իմաստ ունեցող բառեր (բարձր ↔ ցածր)։" },
      { termEs: "Polisemia", descEs: "Una misma palabra tiene varios significados (cabeza, hoja).", termHy: "Բազմիմաստություն", descHy: "Նույն բառը մի քանի իմաստ ունի (գլուխ, թերթ)։" },
      { termEs: "Campo semántico", descEs: "Palabras de la misma categoría gramatical que comparten tema (portero, defensa...).", termHy: "Իմաստային դաշտ", descHy: "Նույն թեմային վերաբերող նույն խոսքի մասի բառեր (մրգեր, ֆուտբոլ)։" },
      { termEs: "Familia léxica", descEs: "Palabras que comparten la misma raíz (pan, panadero, panadería).", termHy: "Բառային ընտանիք", descHy: "Միևնույն արմատն ունեցող բառեր (հաց, հացթուխ, հացատուն)։" },
      { termEs: "Sentido literal vs figurado", descEs: "Literal: significado real de diccionario. Figurado: significado metafórico.", termHy: "Ուղիղ և փոխաբերական", descHy: "Ուղիղ՝ իրական բառացի իմաստը։ Փոխաբերական՝ պատկերավոր/մետաֆորիկ իմաստը։" }
    ]
  }
];

export const QUESTIONS_PART2: QuestionItem[] = [
  // Ejercicio 11: Nexos (56-60)
  {
    id: 56,
    sectionId: 10,
    sectionTitleEs: "10. Nexos",
    sectionTitleHy: "10. Կապակցիչներ",
    category: "Nexos",
    promptEs: "Carlos juega al fútbol Y al tenis. ¿Qué es 'y'?",
    promptHy: "Carlos juega al fútbol Y al tenis. Ի՞նչ է «y»-ը։",
    answerEs: "y → conjunción / nexo",
    answerHy: "y → conjunción / nexo (կապակցիչ / շաղկապ)",
    explanationEs: "Conjunción copulativa que une dos complementos.",
    explanationHy: "Համադասական շաղկապ։"
  },
  {
    id: 57,
    sectionId: 10,
    sectionTitleEs: "10. Nexos",
    sectionTitleHy: "10. Կապակցիչներ",
    category: "Nexos",
    promptEs: "Quiero ir, PERO estoy cansado. ¿Qué es 'pero'?",
    promptHy: "Quiero ir, PERO estoy cansado. Ի՞նչ է «pero»-ն։",
    answerEs: "pero → conjunción / nexo",
    answerHy: "pero → conjunción / nexo (կապակցիչ / հակադրական շաղկապ)",
    explanationEs: "Conjunción adversativa que introduce una contraposición.",
    explanationHy: "Հակադրական շաղկապ (բայց)։"
  },
  {
    id: 58,
    sectionId: 10,
    sectionTitleEs: "10. Nexos",
    sectionTitleHy: "10. Կապակցիչներ",
    category: "Nexos",
    promptEs: "No fui PORQUE estaba enfermo. ¿Qué es 'porque'?",
    promptHy: "No fui PORQUE estaba enfermo. Ի՞նչ է «porque»-ն։",
    answerEs: "porque → nexo causal",
    answerHy: "porque → nexo (պատճառական շաղկապ / կապակցիչ)",
    explanationEs: "Conjunción causal que introduce la causa.",
    explanationHy: "Պատճառական շաղկապ (որովհետև)։"
  },
  {
    id: 59,
    sectionId: 10,
    sectionTitleEs: "10. Nexos",
    sectionTitleHy: "10. Կապակցիչներ",
    category: "Nexos",
    promptEs: "El libro está SOBRE la mesa. ¿Qué es 'sobre'?",
    promptHy: "El libro está SOBRE la mesa. Ի՞նչ է «sobre»-ն։",
    answerEs: "sobre → preposición / nexo",
    answerHy: "sobre → preposición / nexo (նախդիր / կապ)",
    explanationEs: "Preposición de lugar que enlaza palabras.",
    explanationHy: "Տեղ ցույց տվող նախդիր (վրա)։"
  },
  {
    id: 60,
    sectionId: 10,
    sectionTitleEs: "10. Nexos",
    sectionTitleHy: "10. Կապակցիչներ",
    category: "Nexos",
    promptEs: "Voy CON mi amigo. ¿Qué es 'con'?",
    promptHy: "Voy CON mi amigo. Ի՞նչ է «con»-ը։",
    answerEs: "con → preposición / nexo",
    answerHy: "con → preposición / nexo (նախդիր / կապ)",
    explanationEs: "Preposición que indica compañía.",
    explanationHy: "Միասնություն ցույց տվող նախդիր (հետ)։"
  },

  // Ejercicio 12: Tipos de texto (61-66)
  {
    id: 61,
    sectionId: 11,
    sectionTitleEs: "11. Tipos de texto",
    sectionTitleHy: "11. Տեքստի տեսակները",
    category: "Textos",
    promptEs: "Ayer salimos de casa, fuimos al parque y vimos a Carlos.",
    promptHy: "Ayer salimos de casa, fuimos al parque y vimos a Carlos. (Երեկ դուրս եկանք տնից, գնացինք զբոսայգի և տեսանք Կառլոսին։)",
    answerEs: "Narrativo",
    answerHy: "Narrativo (պատմողական)",
    explanationEs: "Relata una sucesión temporal de acciones en el pasado.",
    explanationHy: "Պատմում է դեպքերի հաջորդականություն։"
  },
  {
    id: 62,
    sectionId: 11,
    sectionTitleEs: "11. Tipos de texto",
    sectionTitleHy: "11. Տեքստի տեսակները",
    category: "Textos",
    promptEs: "Carlos es alto, moreno y muy simpático.",
    promptHy: "Carlos es alto, moreno y muy simpático. (Կառլոսը բարձրահասակ է, թխահեր և շատ համակրելի։)",
    answerEs: "Descriptivo",
    answerHy: "Descriptivo (նկարագրական)",
    explanationEs: "Detalla los rasgos físicos y de carácter de una persona.",
    explanationHy: "Նկարագրում է անձի հատկանիշները։"
  },
  {
    id: 63,
    sectionId: 11,
    sectionTitleEs: "11. Tipos de texto",
    sectionTitleHy: "11. Տեքստի տեսակները",
    category: "Textos",
    promptEs: "El agua está formada por hidrógeno y oxígeno.",
    promptHy: "El agua está formada por hidrógeno y oxígeno. (Ջուրը կազմված է ջրածնից և թթվածնից։)",
    answerEs: "Expositivo",
    answerHy: "Expositivo (բացատրական / տեղեկատվական)",
    explanationEs: "Explica un hecho científico de manera objetiva.",
    explanationHy: "Բացատրում է գիտական օբյեկտիվ փաստ։"
  },
  {
    id: 64,
    sectionId: 11,
    sectionTitleEs: "11. Tipos de texto",
    sectionTitleHy: "11. Տեքստի տեսակները",
    category: "Textos",
    promptEs: "Creo que hacer deporte es importante porque mejora la salud.",
    promptHy: "Creo que hacer deporte es importante porque mejora la salud. (Կարծում եմ՝ սպորտով զբաղվելը կարևոր է, որովհետև բարելավում է առողջությունը։)",
    answerEs: "Argumentativo",
    answerHy: "Argumentativo (փաստարկային / համոզող)",
    explanationEs: "Expone una opinión respaldada por un argumento justificativo.",
    explanationHy: "Հայտնում է կարծիք և հիմնավորում այն փաստարկով։"
  },
  {
    id: 65,
    sectionId: 11,
    sectionTitleEs: "11. Tipos de texto",
    sectionTitleHy: "11. Տեքստի տեսակները",
    category: "Textos",
    promptEs: "Primero corta las verduras; después añade aceite.",
    promptHy: "Primero corta las verduras; después añade aceite. (Նախ կտրատիր բանջարեղենը, հետո ավելացրու ձեթ։)",
    answerEs: "Instructivo",
    answerHy: "Instructivo (հրահանգային)",
    explanationEs: "Pauta las instrucciones y pasos a seguir.",
    explanationHy: "Քայլ առ քայլ հրահանգներ է տալիս։"
  },
  {
    id: 66,
    sectionId: 11,
    sectionTitleEs: "11. Tipos de texto",
    sectionTitleHy: "11. Տեքստի տեսակները",
    category: "Textos",
    promptEs: "—¿Vienes conmigo? \n—Sí, claro.",
    promptHy: "—¿Vienes conmigo? (Գալի՞ս ես հետս) \n—Sí, claro. (Այո, իհարկե)",
    answerEs: "Dialogado",
    answerHy: "Dialogado (երկխոսական)",
    explanationEs: "Intercambio directo de palabras entre personajes.",
    explanationHy: "Երկխոսություն երկու խոսողի միջև։"
  },

  // Ejercicio 13: Propiedades del texto (67-69)
  {
    id: 67,
    sectionId: 12,
    sectionTitleEs: "12. Propiedades del texto",
    sectionTitleHy: "12. Տեքստի հատկությունները",
    category: "Propiedades",
    promptEs: "Un texto habla primero del fútbol, luego sin relación de plátanos y después del espacio. ¿Qué problema tiene?",
    promptHy: "Տեքստը նախ խոսում է ֆուտբոլից, հետո առանց կապի բանաններից, հետո՝ տիեզերքից։ Ի՞նչ խնդիր ունի այն։",
    answerEs: "Falta de coherencia.",
    answerHy: "Falta de coherencia (Տեքստը տրամաբանական կապ չունի։)",
    explanationEs: "No mantiene un tema central unificado ni sentido global.",
    explanationHy: "Մտքերի միջև բացակայում է տրամաբանական միասնական թեման։"
  },
  {
    id: 68,
    sectionId: 12,
    sectionTitleEs: "12. Propiedades del texto",
    sectionTitleHy: "12. Տեքստի հատկությունները",
    category: "Propiedades",
    promptEs: "“Carlos llegó tarde. Por eso perdió el autobús.” ¿Qué palabra da cohesión?",
    promptHy: "«Carlos llegó tarde. Por eso perdió el autobús.» Ո՞ր բառն է ապահովում կապակցվածությունը (cohesión)։",
    answerEs: "Por eso",
    answerHy: "Por eso (հետևաբար / դրա համար)",
    explanationEs: "Conector consecutivo que une formalmente las dos oraciones.",
    explanationHy: "Հետևանքային կապակցիչ է, որը կապում է երկու նախադասությունները։"
  },
  {
    id: 69,
    sectionId: 12,
    sectionTitleEs: "12. Propiedades del texto",
    sectionTitleHy: "12. Տեքստի հատկությունները",
    category: "Propiedades",
    promptEs: "¿Hablarías igual con un amigo y en una carta formal al director? ¿Qué propiedad exige esto?",
    promptHy: "Կխոսեի՞ր նույն կերպ ընկերոջդ հետ և դպրոցի տնօրենին ուղղված պաշտոնական նամակում։ Տեքստի ո՞ր հատկությունն է դա պահանջում։",
    answerEs: "No. Hay que adaptar el lenguaje a la situación ➡️ Adecuación",
    answerHy: "Ոչ։ Պետք է լեզուն հարմարեցնել իրավիճակին ➡️ Adecuación (համապատասխանություն)",
    explanationEs: "La adecuación adapta el registro formal o informal a la situación.",
    explanationHy: "Անհրաժեշտ է ընտրել իրավիճակին և հասցեատիրոջը համապատասխան ոճ։"
  },

  // Ejercicio 14: La lengua como sistema (70-75)
  {
    id: 70,
    sectionId: 13,
    sectionTitleEs: "13. La lengua como sistema",
    sectionTitleHy: "13. Լեզուն որպես համակարգ",
    category: "Sistema",
    promptEs: "/p/ → ¿qué unidad de la lengua es?",
    promptHy: "/p/ → լեզվի ո՞ր միավորն է։",
    answerEs: "fonema",
    answerHy: "fonema (հնչույթ)",
    explanationEs: "Unidad mínima distintiva sin significado.",
    explanationHy: "Լեզվի նվազագույն տարբերակիչ հնչյունական միավորն է։"
  },
  {
    id: 71,
    sectionId: 13,
    sectionTitleEs: "13. La lengua como sistema",
    sectionTitleHy: "13. Լեզուն որպես համակարգ",
    category: "Sistema",
    promptEs: "-s en 'niños' → ¿qué unidad es?",
    promptHy: "-s «niños» բառում → լեզվի ո՞ր միավորն է։",
    answerEs: "morfema",
    answerHy: "morfema (ձևույթ՝ հոգնակի թվի ցուցիչ)",
    explanationEs: "Unidad mínima con significado gramatical de plural.",
    explanationHy: "Հոգնակի թիվ արտահայտող քերականական ձևույթ։"
  },
  {
    id: 72,
    sectionId: 13,
    sectionTitleEs: "13. La lengua como sistema",
    sectionTitleHy: "13. Լեզուն որպես համակարգ",
    category: "Sistema",
    promptEs: "fútbol → ¿qué unidad es?",
    promptHy: "fútbol → լեզվի ո՞ր միավորն է։",
    answerEs: "palabra",
    answerHy: "palabra (բառ)",
    explanationEs: "Unidad lingüística independiente con significado léxico.",
    explanationHy: "Ինքնուրույն բառային իմաստ ունեցող միավոր։"
  },
  {
    id: 73,
    sectionId: 13,
    sectionTitleEs: "13. La lengua como sistema",
    sectionTitleHy: "13. Լեզուն որպես համակարգ",
    category: "Sistema",
    promptEs: "el jugador rápido → ¿qué unidad es?",
    promptHy: "el jugador rápido → լեզվի ո՞ր միավորն է։",
    answerEs: "sintagma",
    answerHy: "sintagma (բառակապակցություն / sintagma nominal)",
    explanationEs: "Conjunto de palabras agrupadas en torno a un núcleo (jugador).",
    explanationHy: "Գոյականի շուրջ համախմբված բառակապակցություն։"
  },
  {
    id: 74,
    sectionId: 13,
    sectionTitleEs: "13. La lengua como sistema",
    sectionTitleHy: "13. Լեզուն որպես համակարգ",
    category: "Sistema",
    promptEs: "El jugador corre. → ¿qué unidad es?",
    promptHy: "El jugador corre. → լեզվի ո՞ր միավորն է։",
    answerEs: "oración",
    answerHy: "oración (նախադասություն)",
    explanationEs: "Estructura completa con sujeto y verbo conjugado con sentido completo.",
    explanationHy: "Ենթակայով և բայով ամբողջական միտք արտահայտող նախադասություն։"
  },
  {
    id: 75,
    sectionId: 13,
    sectionTitleEs: "13. La lengua como sistema",
    sectionTitleHy: "13. Լեզուն որպես համակարգ",
    category: "Sistema",
    promptEs: "El jugador corre. Después marca un gol. → ¿qué unidad es?",
    promptHy: "El jugador corre. Después marca un gol. → լեզվի ո՞ր միավորն է։",
    answerEs: "texto",
    answerHy: "texto (տեքստ)",
    explanationEs: "Unidad comunicativa máxima compuesta por oraciones conectadas.",
    explanationHy: "Կապակցված նախադասություններից կազմված ամբողջական տեքստ։"
  },

  // Ejercicio 15: Sinónimos (76-77)
  {
    id: 76,
    sectionId: 14,
    sectionTitleEs: "14. Sinónimos",
    sectionTitleHy: "14. Հոմանիշներ",
    category: "Semántica",
    promptEs: "feliz → ¿cuál es su sinónimo?",
    promptHy: "feliz (երջանիկ, ուրախ) → ո՞րն է հոմանիշը։",
    answerEs: "contento / alegre",
    answerHy: "contento / alegre (ուրախ / զվարթ)",
    explanationEs: "Palabras equivalentes que expresan satisfacción o alegría.",
    explanationHy: "Ուրախություն արտահայտող հոմանիշ բառեր։"
  },
  {
    id: 77,
    sectionId: 14,
    sectionTitleEs: "14. Sinónimos",
    sectionTitleHy: "14. Հոմանիշներ",
    category: "Semántica",
    promptEs: "rápido → ¿cuál es su sinónimo?",
    promptHy: "rápido (արագ) → ո՞րն է հոմանիշը։",
    answerEs: "veloz",
    answerHy: "veloz (սրընթաց, արագաշարժ)",
    explanationEs: "Comparte el mismo significado de alta velocidad.",
    explanationHy: "Մեծ արագություն նշանակող հոմանիշ։"
  },

  // Ejercicio 16: Antónimos (78-80)
  {
    id: 78,
    sectionId: 14,
    sectionTitleEs: "14. Antónimos",
    sectionTitleHy: "14. Հականիշներ",
    category: "Semántica",
    promptEs: "alto ↔ ¿cuál es su antónimo?",
    promptHy: "alto (բարձր) ↔ ո՞րն է հականիշը։",
    answerEs: "bajo",
    answerHy: "bajo (ցածրահասակ / ցածր)",
    explanationEs: "Significado opuesto de estatura o altura.",
    explanationHy: "Հակառակ իմաստ ունեցող բառ։"
  },
  {
    id: 79,
    sectionId: 14,
    sectionTitleEs: "14. Antónimos",
    sectionTitleHy: "14. Հականիշներ",
    category: "Semántica",
    promptEs: "entrar ↔ ¿cuál es su antónimo?",
    promptHy: "entrar (մտնել) ↔ ո՞րն է հականիշը։",
    answerEs: "salir",
    answerHy: "salir (դուրս գալ)",
    explanationEs: "Acción en sentido contrario.",
    explanationHy: "Հակառակ գործողություն։"
  },
  {
    id: 80,
    sectionId: 14,
    sectionTitleEs: "14. Antónimos",
    sectionTitleHy: "14. Հականիշներ",
    category: "Semántica",
    promptEs: "fácil ↔ ¿cuál es su antónimo?",
    promptHy: "fácil (հեշտ) ↔ ո՞րն է հականիշը։",
    answerEs: "difícil",
    answerHy: "difícil (դժվար)",
    explanationEs: "Opuesto en grado de complicación.",
    explanationHy: "Բարդության հակառակ աստիճան։"
  },

  // Ejercicio 15 bis: Polisemia (81-82)
  {
    id: 81,
    sectionId: 15,
    sectionTitleEs: "15. Polisemia",
    sectionTitleHy: "15. Բազմիմաստություն",
    category: "Polisemia",
    promptEs: "“Me duele la cabeza.” / “Es la cabeza del equipo.” ¿Qué fenómeno aparece?",
    promptHy: "«Me duele la cabeza.» (Գլուխս ցավում է։) / «Es la cabeza del equipo.» (Նա թիմի գլուխն է/առաջնորդը։) Ի՞նչ երևույթ է սա։",
    answerEs: "Polisemia",
    answerHy: "Polisemia (Բազմիմաստություն — նույն բառը ունի մի քանի իմաստ)",
    explanationEs: "Una misma palabra posee significados diferentes según el contexto.",
    explanationHy: "Միևնույն բառն ունի տարբեր իմաստներ։"
  },
  {
    id: 82,
    sectionId: 15,
    sectionTitleEs: "15. Polisemia",
    sectionTitleHy: "15. Բազմիմաստություն",
    category: "Polisemia",
    promptEs: "“La hoja del árbol.” / “Una hoja de papel.” ¿Qué fenómeno aparece?",
    promptHy: "«La hoja del árbol.» (Ծառի տերևը։) / «Una hoja de papel.» (Թղթի թերթիկը։) Ի՞նչ երևույթ է սա։",
    answerEs: "Polisemia",
    answerHy: "Polisemia (Բազմիմաստություն)",
    explanationEs: "La palabra 'hoja' tiene múltiples acepciones.",
    explanationHy: "«Hoja» բառն ունի մի քանի իմաստներ։"
  },

  // Ejercicio 16: Campo semántico (83-84)
  {
    id: 83,
    sectionId: 16,
    sectionTitleEs: "16. Campo semántico",
    sectionTitleHy: "16. Իմաստային դաշտ",
    category: "CampoSemántico",
    promptEs: "portero – defensa – delantero – centrocampista ¿A qué campo pertenecen?",
    promptHy: "portero (դարպասապահ) – defensa (պաշտպան) – delantero (հարձակվող) – centrocampista (կիսապաշտպան) Ո՞ր իմաստային դաշտին են պատկանում։",
    answerEs: "Campo semántico del fútbol / posiciones de fútbol",
    answerHy: "Ֆուտբոլի դիրքերի իմաստային դաշտ (Campo semántico del fútbol)",
    explanationEs: "Sustantivos que comparten el rasgo común de posiciones en el fútbol.",
    explanationHy: "Բոլորը ֆուտբոլային դիրքեր են։"
  },
  {
    id: 84,
    sectionId: 16,
    sectionTitleEs: "16. Campo semántico",
    sectionTitleHy: "16. Իմաստային դաշտ",
    category: "CampoSemántico",
    promptEs: "manzana – pera – plátano – naranja ¿A qué campo pertenecen?",
    promptHy: "manzana (խնձոր) – pera (տանձ) – plátano (բանան) – naranja (նարինջ) Ո՞ր իմաստային դաշտին են պատկանում։",
    answerEs: "Campo semántico de las frutas",
    answerHy: "Մրգերի իմաստային դաշտ (Campo semántico de las frutas)",
    explanationEs: "Todos son sustantivos que designan frutas.",
    explanationHy: "Բոլորը մրգեր են։"
  },

  // Ejercicio 17: Familia léxica (85-86)
  {
    id: 85,
    sectionId: 17,
    sectionTitleEs: "17. Familia léxica",
    sectionTitleHy: "17. Բառային ընտանիք",
    category: "FamiliaLéxica",
    promptEs: "pan – panadero – panadería ¿Qué forman?",
    promptHy: "pan (հաց) – panadero (հացթուխ) – panadería (հացի փուռ) Ի՞նչ են կազմում։",
    answerEs: "Familia léxica",
    answerHy: "Familia léxica (Բառային ընտանիք / նույնարմատ բառեր)",
    explanationEs: "Comparten la misma raíz léxica ('pan-').",
    explanationHy: "Ունեն միևնույն արմատը («pan-»)։"
  },
  {
    id: 86,
    sectionId: 17,
    sectionTitleEs: "17. Familia léxica",
    sectionTitleHy: "17. Բառային ընտանիք",
    category: "FamiliaLéxica",
    promptEs: "flor – florista – florero ¿Qué forman?",
    promptHy: "flor (ծաղիկ) – florista (ծաղկավաճառ) – florero (ծաղկաման) Ի՞նչ են կազմում։",
    answerEs: "Familia léxica",
    answerHy: "Familia léxica (Բառային ընտանիք / նույնարմատ բառեր)",
    explanationEs: "Comparten la misma raíz léxica ('flor-').",
    explanationHy: "Ունեն միևնույն արմատը («flor-»)։"
  },

  // Ejercicio 18: Sentido literal y figurado (87-90)
  {
    id: 87,
    sectionId: 18,
    sectionTitleEs: "18. Sentido literal y figurado",
    sectionTitleHy: "18. Ուղիղ և փոխաբերական իմաստ",
    category: "Sentido",
    promptEs: "La puerta está abierta. ¿Es literal o figurado?",
    promptHy: "La puerta está abierta. (Դուռը բաց է։) Ուղի՞ղ է, թե՞ փոխաբերական։",
    answerEs: "Sentido literal",
    answerHy: "Sentido literal (ուղիղ իմաստ)",
    explanationEs: "Indica la realidad física directa sin metáforas.",
    explanationHy: "Բառացի ֆիզիկական բաց դուռ է։"
  },
  {
    id: 88,
    sectionId: 18,
    sectionTitleEs: "18. Sentido literal y figurado",
    sectionTitleHy: "18. Ուղիղ և փոխաբերական իմաստ",
    category: "Sentido",
    promptEs: "Carlos es un león en el campo. ¿Es literal o figurado?",
    promptHy: "Carlos es un león en el campo. (Կառլոսը առյուծ է դաշտում։) Ուղի՞ղ է, թե՞ փոխաբերական։",
    answerEs: "Sentido figurado",
    answerHy: "Sentido figurado (փոխաբերական իմաստ)",
    explanationEs: "Metáfora de bravura y entrega, no un animal literal.",
    explanationHy: "Փոխաբերական է՝ նկատի ունի խիզախ և ուժեղ խաղացող։"
  },
  {
    id: 89,
    sectionId: 18,
    sectionTitleEs: "18. Sentido literal y figurado",
    sectionTitleHy: "18. Ուղիղ և փոխաբերական իմաստ",
    category: "Sentido",
    promptEs: "Tengo las manos frías. ¿Es literal o figurado?",
    promptHy: "Tengo las manos frías. (Ձեռքերս սառն են։) Ուղի՞ղ է, թե՞ փոխաբերական։",
    answerEs: "Literal",
    answerHy: "Literal (ուղիղ իմաստ)",
    explanationEs: "Temperatura corporal real directa.",
    explanationHy: "Ֆիզիկական իրական ջերմաստիճան է։"
  },
  {
    id: 90,
    sectionId: 18,
    sectionTitleEs: "18. Sentido literal y figurado",
    sectionTitleHy: "18. Ուղիղ և փոխաբերական իմաստ",
    category: "Sentido",
    promptEs: "Tengo la cabeza en las nubes. ¿Es literal o figurado?",
    promptHy: "Tengo la cabeza en las nubes. (Գլուխս ամպերի մեջ է / ցրված եմ) Ուղի՞ղ է, թե՞ փոխաբերական։",
    answerEs: "Figurado",
    answerHy: "Figurado (փոխաբերական իմաստ)",
    explanationEs: "Expresión que significa estar distraído o soñando despierto.",
    explanationHy: "Նշանակում է լինել ցրված, երազկոտ։"
  },

  // 📝 GRAN TEXTO DE EXAMEN (91-105)
  {
    id: 91,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    contextEs: "El sábado Pablo jugó un partido importante. El campo era grande y estaba lleno de aficionados...",
    contextHy: "Շաբաթ օրը Պաբլոն կարևոր խաղ խաղաց։ Խաղադաշտը մեծ էր և լի երկրպագուներով...",
    promptEs: "91. ¿Qué tipo de texto predomina al principio?",
    promptHy: "91. Տեքստի ո՞ր տեսակն է գերակշռում սկզբում։",
    answerEs: "Narrativo",
    answerHy: "Narrativo (պատմողական)",
    explanationEs: "Cuenta los hechos ocurridos cronológicamente.",
    explanationHy: "Պատմում է շաբաթ օրվա դեպքերը։"
  },
  {
    id: 92,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "92. Busca en el texto un fragmento descriptivo.",
    promptHy: "92. Տեքստում գտի՛ր նկարագրական հատված։",
    answerEs: "“El campo era grande y estaba lleno de aficionados.”",
    answerHy: "«El campo era grande y estaba lleno de aficionados.» (Խաղադաշտը մեծ էր և լի երկրպագուներով։)",
    explanationEs: "Describe las características del lugar.",
    explanationHy: "Նկարագրում է խաղադաշտի վիճակն ու չափսը։"
  },
  {
    id: 93,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "93. Busca el diálogo en el texto.",
    promptHy: "93. Տեքստում գտի՛ր երկխոսությունը։",
    answerEs: "—Pablo, juega tranquilo y ayuda a tus compañeros. \n—De acuerdo. Estoy un poco nervioso, pero voy a intentarlo.",
    answerHy: "«—Pablo, juega tranquilo… / —De acuerdo…» (Մարզչի և Պաբլոյի խոսակցությունը)",
    explanationEs: "Intercambio directo introducido por rayas de diálogo.",
    explanationHy: "Գծիկներով սկսվող երկխոսության տողերը։"
  },
  {
    id: 94,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "94. ¿Qué modalidad es “Juega tranquilo”?",
    promptHy: "94. Նախադասության ի՞նչ տեսակ է «Juega tranquilo»-ն։",
    answerEs: "Exhortativa / imperativa",
    answerHy: "Exhortativa / imperativa (հրամայական)",
    explanationEs: "Transmite una instrucción o consejo del entrenador.",
    explanationHy: "Մարզիչը խորհուրդ կամ հրահանգ է տալիս։"
  },
  {
    id: 95,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "95. ¿Qué función del lenguaje predomina en “Juega tranquilo”?",
    promptHy: "95. Լեզվի ո՞ր գործառույթն է գերակշռում «Juega tranquilo» նախադասության մեջ։",
    answerEs: "Apelativa / conativa",
    answerHy: "Apelativa / conativa (դիմողական)",
    explanationEs: "Busca influir en la conducta del jugador (receptor).",
    explanationHy: "Նպատակ ունի ազդել լսողի վարքագծի վրա։"
  },
  {
    id: 96,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "96. ¿Qué modalidad es “Estoy un poco nervioso”?",
    promptHy: "96. Նախադասության ի՞նչ տեսակ է «Estoy un poco nervioso»-ն։",
    answerEs: "Enunciativa (afirmativa)",
    answerHy: "Enunciativa (պատմողական)",
    explanationEs: "Afirma un estado personal sin exclamación.",
    explanationHy: "Հաստատում է իր վիճակը։"
  },
  {
    id: 97,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "97. ¿Qué función predomina en “Estoy un poco nervioso”?",
    promptHy: "97. Լեզվի ո՞ր գործառույթն է գերակշռում «Estoy un poco nervioso»-ում։",
    answerEs: "Expresiva / emotiva",
    answerHy: "Expresiva / emotiva (զգացմունքային)",
    explanationEs: "El emisor expresa su estado de ánimo y emoción interna.",
    explanationHy: "Խոսողը արտահայտում է իր ներքին հուզմունքը։"
  },
  {
    id: 98,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "98. Busca un nexo en el texto.",
    promptHy: "98. Տեքստում գտի՛ր կապակցիչ (nexo / conjunción)։",
    answerEs: "pero / sin embargo / porque / y",
    answerHy: "pero (բայց) / sin embargo (սակայն) / porque (որովհետև) / y (և)",
    explanationEs: "Cualquiera de estos conectores y conjunciones del texto.",
    explanationHy: "Տեքստում առկա շաղկապներից ցանկացածը։"
  },
  {
    id: 99,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "99. Busca un sustantivo en el texto.",
    promptHy: "99. Տեքստում գտի՛ր գոյական։",
    answerEs: "sábado / Pablo / partido / campo / aficionados / entrenador / gol / salud...",
    answerHy: "sábado (շաբաթ) / Pablo (Պաբլո) / partido (խաղ) / campo (դաշտ) / entrenador (մարզիչ)...",
    explanationEs: "Palabras que nombran personas, cosas o días.",
    explanationHy: "Առարկաներ, անձեր կամ օրեր նշանակող գոյականներ։"
  },
  {
    id: 100,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "100. Busca un adjetivo en el texto.",
    promptHy: "100. Տեքստում գտի՛ր ածական։",
    answerEs: "importante / grande / lleno / nervioso / positivo",
    answerHy: "importante (կարևոր) / grande (մեծ) / lleno (լի) / nervioso (հուզված) / positivo (դրական)",
    explanationEs: "Palabras que indican cualidades de los sustantivos.",
    explanationHy: "Գոյականների հատկանիշ ցույց տվող ածականներ։"
  },
  {
    id: 101,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "101. Busca un verbo en el texto.",
    promptHy: "101. Տեքստում գտի՛ր բայ։",
    answerEs: "jugó / era / estaba / dijo / juega / marcó / ganó / enseña...",
    answerHy: "jugó (խաղաց) / era (էր) / dijo (ասաց) / marcó (խփեց) / ganó (հաղթեց)...",
    explanationEs: "Formas verbales que expresan acciones o estados.",
    explanationHy: "Գործողություն կամ վիճակ արտահայտող բայեր։"
  },
  {
    id: 102,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "102. Busca un pronombre en el texto.",
    promptHy: "102. Տեքստում գտի՛ր դերանուն։",
    answerEs: "le / lo (intentarlo) / demás",
    answerHy: "le (նրան) / lo (այն՝ intentarlo) / demás (մյուսները)",
    explanationEs: "Pronombres personales que sustituyen a personas o cosas.",
    explanationHy: "Անձնական դերանուններ։"
  },
  {
    id: 103,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "103. ¿Qué tipo de texto aparece en el último párrafo?",
    promptHy: "103. Տեքստի ո՞ր տեսակն է վերջին պարբերությունում։",
    answerEs: "Argumentativo",
    answerHy: "Argumentativo (փաստարկային / համոզող)",
    explanationEs: "Plantea una tesis o postura personal fundamentada.",
    explanationHy: "Հեղինակը հայտնում է իր կարծիքը և բացատրում պատճառները։"
  },
  {
    id: 104,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "104. Busca la OPINIÓN en el último párrafo.",
    promptHy: "104. Վերջին պարբերությունում գտի՛ր ԿԱՐԾԻՔԸ (opinión)։",
    answerEs: "“En mi opinión, practicar un deporte de equipo es muy positivo”",
    answerHy: "«En mi opinión, practicar un deporte de equipo es muy positivo» (Իմ կարծիքով՝ թիմային սպորտով զբաղվելը շատ օգտակար է)",
    explanationEs: "La tesis u opinión defendida por el autor.",
    explanationHy: "Հեղինակի հիմնական կարծիքը։"
  },
  {
    id: 105,
    sectionId: 19,
    sectionTitleEs: "📝 Gran texto de examen",
    sectionTitleHy: "📝 Մեծ քննական տեքստ",
    category: "GranTexto",
    promptEs: "105. Busca el ARGUMENTO que justifica la opinión.",
    promptHy: "105. Գտի՛ր կարծիքը հիմնավորող ՓԱՍՏԱՐԿԸ (argumento)։",
    answerEs: "“porque enseña a colaborar, respetar las reglas y ayudar a los demás.”",
    answerHy: "«porque enseña a colaborar, respetar las reglas y ayudar a los demás.» (որովհետև այն սովորեցնում է համագործակցել, պահպանել կանոնները և օգնել մյուսներին։)",
    explanationEs: "La razón explicativa introducida por 'porque'.",
    explanationHy: "«Porque»-ով սկսվող պատճառաբանությունը։"
  },

  // 🔥 PARTE DIFÍCIL — COMO EN EXAMEN (106-110)
  {
    id: 106,
    sectionId: 20,
    sectionTitleEs: "🔥 Parte difícil — Como en examen",
    sectionTitleHy: "🔥 Բարդ մաս — Ինչպես քննությանը",
    category: "Dificil",
    promptEs: "106. ¿Qué diferencia hay entre función expresiva y modalidad exclamativa?",
    promptHy: "106. Ի՞նչ տարբերություն կա զգացմունքային գործառույթի (función expresiva) և բացականչական տեսակի (modalidad exclamativa) միջև։",
    answerEs: "La función expresiva indica la INTENCIÓN de expresar sentimientos; la modalidad exclamativa indica la FORMA gramatical y entonación de la oración.",
    answerHy: "Զգացմունքային գործառույթը ցույց է տալիս խոսողի ՆՊԱՏԱԿԸ՝ զգացմունք արտահայտել, իսկ բացականչական տեսակը ցույց է տալիս նախադասության ՁԵՎԸ և հնչերանգը։",
    explanationEs: "Función = objetivo comunicativo; Modalidad = estructura y actitud sintáctica.",
    explanationHy: "Գործառույթը հաղորդակցական նպատակն է, իսկ տեսակը՝ նախադասության ձևը։"
  },
  {
    id: 107,
    sectionId: 20,
    sectionTitleEs: "🔥 Parte difícil — Como en examen",
    sectionTitleHy: "🔥 Բարդ մաս — Ինչպես քննությանը",
    category: "Dificil",
    promptEs: "107. ¿Puede una oración interrogativa tener función fática? Da un ejemplo.",
    promptHy: "107. Կարո՞ղ է հարցական նախադասությունը ունենալ կապ հաստատող (fática) գործառույթ։ Բե՛ր օրինակ։",
    answerEs: "Sí. Ejemplo: “¿Me oyes?” ➡️ Modalidad: interrogativa | Función: fática.",
    answerHy: "Այո։ Օրինակ՝ «¿Me oyes?» (Լսո՞ւմ ես ինձ) ➡️ Տեսակը՝ հարցական (interrogativa) | Գործառույթը՝ կապ հաստատող (fática)։",
    explanationEs: "Tiene forma de pregunta, pero su fin es comprobar que el canal técnico funciona.",
    explanationHy: "Ձևով հարց է, բայց նպատակը կապուղու ստուգումն է։"
  },
  {
    id: 108,
    sectionId: 20,
    sectionTitleEs: "🔥 Parte difícil — Como en examen",
    sectionTitleHy: "🔥 Բարդ մաս — Ինչպես քննությանը",
    category: "Dificil",
    promptEs: "108. “¡Cierra la ventana!” \nModalidad: ? \nFunción: ?",
    promptHy: "108. «¡Cierra la ventana!» (Փակի՛ր պատուհանը) \nՏեսակը (Modalidad): ? \nԳործառույթը (Función): ?",
    answerEs: "Modalidad: Exhortativa / imperativa \nFunción: Apelativa / conativa",
    answerHy: "Modalidad: Exhortativa / imperativa (հրամայական) \nFunción: Apelativa / conativa (դիմողական)",
    explanationEs: "Forma de mandato / influye en la acción del receptor.",
    explanationHy: "Հրամայական ձև է, որը նպատակ ունի գործողություն պահանջել լսողից։"
  },
  {
    id: 109,
    sectionId: 20,
    sectionTitleEs: "🔥 Parte difícil — Como en examen",
    sectionTitleHy: "🔥 Բարդ մաս — Ինչպես քննությանը",
    category: "Dificil",
    promptEs: "109. “¡Qué feliz estoy!” \nModalidad: ? \nFunción: ?",
    promptHy: "109. «¡Qué feliz estoy!» (Ինչ երջանիկ եմ) \nՏեսակը (Modalidad): ? \nԳործառույթը (Función): ?",
    answerEs: "Modalidad: Exclamativa \nFunción: Expresiva / emotiva",
    answerHy: "Modalidad: Exclamativa (բացականչական) \nFunción: Expresiva / emotiva (զգացմունքային)",
    explanationEs: "Estructura exclamativa con signos / manifiesta la alegría del emisor.",
    explanationHy: "Բացականչական նշաններով ձև է, որն արտահայտում է խոսողի ուրախությունը։"
  },
  {
    id: 110,
    sectionId: 20,
    sectionTitleEs: "🔥 Parte difícil — Como en examen",
    sectionTitleHy: "🔥 Բարդ մաս — Ինչպես քննությանը",
    category: "Dificil",
    promptEs: "110. “El verbo es una palabra que expresa acción, estado o proceso.” \nModalidad: ? \nFunción: ?",
    promptHy: "110. «El verbo es una palabra que expresa acción, estado o proceso.» (Բայը բառ է, որն արտահայտում է գործողություն, վիճակ կամ գործընթաց։) \nՏեսակը (Modalidad): ? \nԳործառույթը (Función): ?",
    answerEs: "Modalidad: Enunciativa \nFunción: Metalingüística",
    answerHy: "Modalidad: Enunciativa (պատմողական) \nFunción: Metalingüística (մետալեզվական)",
    explanationEs: "Afirma una definición objetiva / explica el concepto lingüístico de 'verbo'.",
    explanationHy: "Հաստատում է փաստ և բացատրում հենց լեզվական հասկացությունը։"
  }
];

export const CHEATSHEET_DATA = [
  {
    titleEs: "Funciones del lenguaje (¿Para qué se usa?)",
    titleHy: "Լեզվի գործառույթները (Ինչի՞ համար է)",
    items: [
      { questionEs: "¿Informa sobre la realidad?", questionHy: "Տեղեկացնո՞ւմ է իրականության մասին", answerEs: "Referencial / representativa", answerHy: "Տեղեկատվական" },
      { questionEs: "¿Expresa sentimientos o emociones?", questionHy: "Արտահայտո՞ւմ է զգացմունքներ", answerEs: "Expresiva / emotiva", answerHy: "Զգացմունքային" },
      { questionEs: "¿Ordena, pide o influye?", questionHy: "Հրամայո՞ւմ է կամ խնդրում", answerEs: "Apelativa / conativa", answerHy: "Դիմողական" },
      { questionEs: "¿Comprueba o mantiene el contacto?", questionHy: "Ստուգո՞ւմ է կապը (ալո՞)", answerEs: "Fática", answerHy: "Կապ հաստատող" },
      { questionEs: "¿Habla sobre la propia lengua?", questionHy: "Խոսո՞ւմ է հենց լեզվի մասին", answerEs: "Metalingüística", answerHy: "Մետալեզվական" },
      { questionEs: "¿Importa la belleza del mensaje?", questionHy: "Կարևո՞ր է գեղարվեստական գեղեցկությունը", answerEs: "Poética", answerHy: "Գեղարվեստական / բանաստեղծական" }
    ]
  },
  {
    titleEs: "Modalidades oracionales (¿Cómo es la frase?)",
    titleHy: "Նախադասության տեսակները (Ինչպիսի՞ն է նախադասությունը)",
    items: [
      { questionEs: "¿Afirma o niega?", questionHy: "Հաստատո՞ւմ կամ ժխտո՞ւմ է", answerEs: "Enunciativa", answerHy: "Պատմողական" },
      { questionEs: "¿Pregunta?", questionHy: "Հարցնո՞ւմ է", answerEs: "Interrogativa", answerHy: "Հարցական" },
      { questionEs: "¿Exclama emoción?", questionHy: "Բացականչո՞ւմ է", answerEs: "Exclamativa", answerHy: "Բացականչական" },
      { questionEs: "¿Ordena, manda o aconseja?", questionHy: "Հրամայո՞ւմ է կամ խորհուրդ տալիս", answerEs: "Exhortativa / imperativa", answerHy: "Հրամայական" },
      { questionEs: "¿Desea (ojalá)?", questionHy: "Ցանկանո՞ւմ է (երանի)", answerEs: "Desiderativa", answerHy: "Ցանկական" },
      { questionEs: "¿Duda (quizás)?", questionHy: "Կասկածո՞ւմ է (գուցե)", answerEs: "Dubitativa", answerHy: "Կասկածական" }
    ]
  },
  {
    titleEs: "Elementos de la comunicación",
    titleHy: "Հաղորդակցության տարրերը",
    items: [
      { questionEs: "Quién habla / escribe", questionHy: "Ով է խոսում / գրում", answerEs: "Emisor", answerHy: "Հաղորդող" },
      { questionEs: "Quién escucha / lee", questionHy: "Ով է լսում / կարդում", answerEs: "Receptor", answerHy: "Ստացող" },
      { questionEs: "Qué dice (la información)", questionHy: "Ինչ է ասվում (բուն տեղեկությունը)", answerEs: "Mensaje", answerHy: "Հաղորդագրություն" },
      { questionEs: "Por dónde viaja el mensaje", questionHy: "Որտեղով է անցնում (օդ, հեռախոս, թուղթ)", answerEs: "Canal", answerHy: "Կապուղի" },
      { questionEs: "En qué lengua o signos", questionHy: "Ինչ լեզվով կամ նշաններով", answerEs: "Código", answerHy: "Կոդ" },
      { questionEs: "En qué situación o entorno", questionHy: "Ինչ պայմաններում կամ միջավայրում", answerEs: "Contexto / situación", answerHy: "Համատեքստ / իրավիճակ" }
    ]
  }
];

export const EXAM_READING_TEXT = {
  titleEs: "Gran texto de examen",
  titleHy: "Մեծ քննական տեքստ",
  spanishText: `El sábado Pablo jugó un partido importante. El campo era grande y estaba lleno de aficionados. Antes del partido, su entrenador le dijo:

—Pablo, juega tranquilo y ayuda a tus compañeros.
—De acuerdo. Estoy un poco nervioso, pero voy a intentarlo.

Durante la primera parte, el equipo contrario marcó un gol. Sin embargo, Pablo y sus compañeros siguieron luchando. En la segunda parte, Pablo marcó dos goles y su equipo ganó 2-1.

En mi opinión, practicar un deporte de equipo es muy positivo porque enseña a colaborar, respetar las reglas y ayudar a los demás.`,
  armenianText: `Շաբաթ օրը Պաբլոն կարևոր ֆուտբոլային խաղ խաղաց։ Խաղադաշտը մեծ էր և լի էր երկրպագուներով։ Խաղից առաջ նրա մարզիչն ասաց.

— Պաբլո՛, հանգիստ խաղա և օգնիր թիմակիցներիդ։
— Լավ։ Մի քիչ նյարդայնացած եմ, բայց կփորձեմ։

Առաջին խաղակեսում հակառակորդ թիմը գոլ խփեց։ Սակայն Պաբլոն և նրա թիմակիցները շարունակեցին պայքարել։ Երկրորդ խաղակեսում Պաբլոն երկու գոլ խփեց, և նրա թիմը հաղթեց 2։1 հաշվով։

Իմ կարծիքով՝ թիմային սպորտով զբաղվելը շատ օգտակար է, որովհետև այն սովորեցնում է համագործակցել, պահպանել կանոնները և օգնել մյուսներին։`
};
