export interface QuestionItem {
  id: number;
  sectionId: number;
  sectionTitleEs: string;
  sectionTitleHy: string;
  category: string;
  promptEs: string;
  promptHy: string;
  hintEs?: string;
  hintHy?: string;
  contextEs?: string;
  contextHy?: string;
  answerEs: string;
  answerHy: string;
  explanationEs?: string;
  explanationHy?: string;
}

export interface SectionTheory {
  id: number;
  titleEs: string;
  titleHy: string;
  rules: {
    termEs: string;
    descEs: string;
    termHy: string;
    descHy: string;
    exampleEs?: string;
    exampleHy?: string;
  }[];
}

export const SECTIONS_THEORY_PART1: SectionTheory[] = [
  {
    id: 1,
    titleEs: "1. FUNCIONES DEL LENGUAJE",
    titleHy: "1. ԼԵԶՎԻ ԳՈՐԾԱՌՈՒՅԹՆԵՐԸ",
    rules: [
      {
        termEs: "Referencial / representativa",
        descEs: "Informa sobre la realidad objetiva.",
        termHy: "Տեղեկատվական",
        descHy: "Հաղորդում է օբյեկտիվ տեղեկություն իրականության մասին։",
        exampleEs: "La Tierra gira alrededor del Sol.",
        exampleHy: "Երկիրը պտտվում է Արեգակի շուրջ։"
      },
      {
        termEs: "Expresiva / emotiva",
        descEs: "Expresa sentimientos, emociones y opiniones del emisor.",
        termHy: "Զգացմունքային",
        descHy: "Արտահայտում է խոսողի զգացմունքները և տրամադրությունը։",
        exampleEs: "¡Qué alegría verte otra vez!",
        exampleHy: "Ինչ ուրախ եմ քեզ նորից տեսնելու համար։"
      },
      {
        termEs: "Apelativa / conativa",
        descEs: "Intenta provocar una reacción o influir en el receptor (órdenes, ruegos).",
        termHy: "Դիմողական",
        descHy: "Փորձում է ազդել լսողի վրա (հրաման, խնդրանք)։",
        exampleEs: "Cierra la puerta, por favor.",
        exampleHy: "Փակի՛ր դուռը, խնդրում եմ։"
      },
      {
        termEs: "Fática",
        descEs: "Comprueba, inicia, mantiene o cierra el canal de comunicación.",
        termHy: "Կապ հաստատող",
        descHy: "Ստուգում, սկսում կամ պահպանում է կապը։",
        exampleEs: "¿Hola? ¿Me oyes?",
        exampleHy: "Ալո՞։ Լսո՞ւմ ես ինձ։"
      },
      {
        termEs: "Metalingüística",
        descEs: "Habla sobre la propia lengua y las palabras.",
        termHy: "Մետալեզվական",
        descHy: "Խոսում է հենց լեզվի, քերականության և բառերի մասին։",
        exampleEs: "“Casa” es un sustantivo.",
        exampleHy: "«Casa»-ն գոյական է։"
      },
      {
        termEs: "Poética",
        descEs: "Importa especialmente la belleza y la forma estética del mensaje.",
        termHy: "Գեղարվեստական / բանաստեղծական",
        descHy: "Կարևոր է հաղորդագրության գեղարվեստական ձևն ու պատկերավորությունը։",
        exampleEs: "Tus ojos son dos estrellas.",
        exampleHy: "Քո աչքերը երկու աստղ են։"
      }
    ]
  },
  {
    id: 2,
    titleEs: "2. MODALIDADES ORACIONALES",
    titleHy: "2. ՆԱԽԱԴԱՍՈՒԹՅՈՒՆՆԵՐԻ ՏԵՍԱԿՆԵՐԸ",
    rules: [
      {
        termEs: "Enunciativa",
        descEs: "Afirma o niega un hecho objetivo.",
        termHy: "Պատմողական",
        descHy: "Ինչ-որ բան հաստատում կամ ժխտում է։",
        exampleEs: "Mañana tenemos examen. / No quiero salir hoy.",
        exampleHy: "Վաղը քննություն ունենք։ / Այսօր չեմ ուզում դուրս գալ։"
      },
      {
        termEs: "Interrogativa",
        descEs: "Hace una pregunta.",
        termHy: "Հարցական",
        descHy: "Հարց է տալիս։",
        exampleEs: "¿Has terminado los deberes?",
        exampleHy: "Ավարտե՞լ ես տնային աշխատանքը։"
      },
      {
        termEs: "Exclamativa",
        descEs: "Expresa emoción con entonación enfática (¡ !).",
        termHy: "Բացականչական",
        descHy: "Զգացմունք է արտահայտում բացականչությամբ։",
        exampleEs: "¡Qué partido tan emocionante!",
        exampleHy: "Ինչ հետաքրքիր խաղ է։"
      },
      {
        termEs: "Exhortativa / imperativa",
        descEs: "Expresa una orden, mandato, petición o consejo.",
        termHy: "Հրամայական",
        descHy: "Հրաման, խնդրանք կամ խորհուրդ է տալիս։",
        exampleEs: "Ven aquí ahora mismo.",
        exampleHy: "Հիմա անմիջապես արի այստեղ։"
      },
      {
        termEs: "Desiderativa",
        descEs: "Expresa un deseo (ojalá, desearía...).",
        termHy: "Ցանկական",
        descHy: "Ցանկություն է արտահայտում (երանի, կցանկանայի)։",
        exampleEs: "Ojalá ganemos mañana.",
        exampleHy: "Երանի վաղը հաղթենք։"
      },
      {
        termEs: "Dubitativa",
        descEs: "Expresa duda o posibilidad (quizás, tal vez...).",
        termHy: "Կասկածական",
        descHy: "Կասկած կամ հավանականություն է արտահայտում (գուցե, հնարավոր է)։",
        exampleEs: "Quizás Carlos llegue tarde.",
        exampleHy: "Հնարավոր է՝ Կառլոսը ուշ գա։"
      }
    ]
  },
  {
    id: 3,
    titleEs: "3. ELEMENTOS DE LA COMUNICACIÓN",
    titleHy: "3. ՀԱՂՈՐԴԱԿՑՈՒԹՅԱՆ ՏԱՐՐԵՐԸ",
    rules: [
      {
        termEs: "Emisor",
        descEs: "Quien envía el mensaje.",
        termHy: "Հաղորդող",
        descHy: "Հաղորդագրությունն ուղարկողը (խոսողը կամ գրողը)։"
      },
      {
        termEs: "Receptor",
        descEs: "Quien recibe e interpreta el mensaje.",
        termHy: "Ստացող",
        descHy: "Հաղորդագրությունը ստացողն ու ընկալողը (լսողը կամ կարդացողը)։"
      },
      {
        termEs: "Mensaje",
        descEs: "La información que se transmite.",
        termHy: "Հաղորդագրություն",
        descHy: "Փոխանցվող տեղեկությունը, բովանդակությունը։"
      },
      {
        termEs: "Código",
        descEs: "El sistema de signos utilizado (ej. lengua española).",
        termHy: "Կոդ",
        descHy: "Օգտագործվող նշանների համակարգը (օր.՝ իսպաներենը)։"
      },
      {
        termEs: "Canal",
        descEs: "El medio físico por el que viaja el mensaje (aire, papel, teléfono, pizarra...).",
        termHy: "Կապուղի",
        descHy: "Ֆիզիկական միջոցը, որով փոխանցվում է հաղորդագրությունը (օդ, թուղթ, հեռախոս, գրատախտակ)։"
      },
      {
        termEs: "Contexto / situación",
        descEs: "Circunstancias de tiempo, lugar y entorno en que ocurre la comunicación.",
        termHy: "Համատեքստ / իրավիճակ",
        descHy: "Հաղորդակցության պայմանները (տեղ, ժամանակ, միջավայր)։"
      }
    ]
  },
  {
    id: 4,
    titleEs: "4. CATEGORÍAS GRAMATICALES",
    titleHy: "4. ՔԵՐԱԿԱՆԱԿԱՆ ԽՄԲԵՐ",
    rules: [
      { termEs: "Sustantivo", descEs: "Nombra personas, animales, cosas, ideas.", termHy: "Գոյական", descHy: "Անվանում է մարդկանց, կենդանիներ, իրեր, գաղափարներ։" },
      { termEs: "Adjetivo", descEs: "Dice cómo es o cómo está el sustantivo (cualidad).", termHy: "Ածական", descHy: "Ցույց է տալիս գոյականի հատկանիշը։" },
      { termEs: "Verbo", descEs: "Expresa acción, estado o proceso.", termHy: "Բայ", descHy: "Արտահայտում է գործողություն կամ վիճակ։" },
      { termEs: "Adverbio", descEs: "Modifica al verbo, al adjetivo o a otro adverbio.", termHy: "Մակբայ", descHy: "Լրացնում է բային, ածականին կամ մեկ այլ մակբայի։" },
      { termEs: "Pronombre", descEs: "Sustituye al sustantivo (él, nosotros, estos...).", termHy: "Դերանուն", descHy: "Փոխարինում է գոյականին։" },
      { termEs: "Determinante", descEs: "Acompaña al sustantivo y lo concreta (el, mi, este...).", termHy: "Որոշիչ", descHy: "Գնում է գոյականի հետ և որոշակիացնում այն։" },
      { termEs: "Nexo", descEs: "Une palabras u oraciones (conjunción, preposición).", termHy: "Կապակցիչ", descHy: "Միացնում է բառեր կամ նախադասություններ (շաղկապ, նախդիր)։" }
    ]
  },
  {
    id: 9,
    titleEs: "9. DETERMINANTES Y PRONOMBRES",
    titleHy: "9. ՈՐՈՇԻՉՆԵՐ ԵՎ ԴԵՐԱՆՈՒՆՆԵՐ",
    rules: [
      {
        termEs: "Determinante",
        descEs: "Acompaña SIEMPRE al sustantivo.",
        termHy: "Որոշիչ",
        descHy: "ՄԻՇՏ գնում է գոյականի հետ։",
        exampleEs: "Mi hermano juega. / Estos zapatos son nuevos.",
        exampleHy: "Իմ եղբայրը խաղում է։ / Այս կոշիկները նոր են։"
      },
      {
        termEs: "Pronombre",
        descEs: "Sustituye al sustantivo (va SOLO, sin el sustantivo).",
        termHy: "Դերանուն",
        descHy: "Փոխարինում է գոյականին (գալիս է ՄԵՆԱԿ, առանց գոյականի)։",
        exampleEs: "Él juega. / Estos son nuevos.",
        exampleHy: "Նա խաղում է։ / Սրանք նոր են։"
      }
    ]
  }
];

export const QUESTIONS_PART1: QuestionItem[] = [
  // Ejercicio 1: Funciones del lenguaje (1-6)
  {
    id: 1,
    sectionId: 1,
    sectionTitleEs: "1. Funciones del lenguaje",
    sectionTitleHy: "1. Լեզվի գործառույթները",
    category: "Funciones",
    promptEs: "La Tierra gira alrededor del Sol.",
    promptHy: "Երկիրը պտտվում է Արեգակի շուրջ։",
    hintEs: "¿Informa sobre un hecho real objetivo?",
    hintHy: "Տեղեկացնո՞ւմ է օբյեկտիվ իրական փաստի մասին։",
    answerEs: "Referencial / representativa",
    answerHy: "Տեղեկատվական (Referencial / representativa)",
    explanationEs: "Transmite información objetiva sobre la realidad.",
    explanationHy: "Հաղորդում է օբյեկտիվ տեղեկություն իրականության մասին։"
  },
  {
    id: 2,
    sectionId: 1,
    sectionTitleEs: "1. Funciones del lenguaje",
    sectionTitleHy: "1. Լեզվի գործառույթները",
    category: "Funciones",
    promptEs: "¡Qué alegría verte otra vez!",
    promptHy: "Ինչ ուրախ եմ քեզ նորից տեսնելու համար։",
    hintEs: "¿Expresa un sentimiento o emoción del hablante?",
    hintHy: "Արտահայտո՞ւմ է խոսողի զգացմունքը։",
    answerEs: "Expresiva / emotiva",
    answerHy: "Զգացմունքային (Expresiva / emotiva)",
    explanationEs: "Expresa los sentimientos y emociones del emisor.",
    explanationHy: "Արտահայտում է խոսողի ուրախությունն ու զգացմունքները։"
  },
  {
    id: 3,
    sectionId: 1,
    sectionTitleEs: "1. Funciones del lenguaje",
    sectionTitleHy: "1. Լեզվի գործառույթները",
    category: "Funciones",
    promptEs: "Cierra la puerta, por favor.",
    promptHy: "Փակի՛ր դուռը, խնդրում եմ։",
    hintEs: "¿Intenta provocar una acción en quien escucha?",
    hintHy: "Փորձո՞ւմ է գործողություն հարուցել լսողի մոտ։",
    answerEs: "Apelativa / conativa",
    answerHy: "Դիմողական (Apelativa / conativa)",
    explanationEs: "Busca que el receptor realice una acción (petición/orden).",
    explanationHy: "Լսողից պահանջում կամ խնդրում է կատարել գործողություն։"
  },
  {
    id: 4,
    sectionId: 1,
    sectionTitleEs: "1. Funciones del lenguaje",
    sectionTitleHy: "1. Լեզվի գործառույթները",
    category: "Funciones",
    promptEs: "¿Hola? ¿Me oyes?",
    promptHy: "Ալո՞։ Լսո՞ւմ ես ինձ։",
    hintEs: "¿Comprueba si el canal de comunicación funciona?",
    hintHy: "Ստուգո՞ւմ է՝ արդյոք կապը աշխատում է։",
    answerEs: "Fática",
    answerHy: "Կապ հաստատող (Fática)",
    explanationEs: "Verifica que el canal de comunicación esté abierto.",
    explanationHy: "Ստուգում է հաղորդակցության կապուղու աշխատանքը։"
  },
  {
    id: 5,
    sectionId: 1,
    sectionTitleEs: "1. Funciones del lenguaje",
    sectionTitleHy: "1. Լեզվի գործառույթները",
    category: "Funciones",
    promptEs: "“Casa” es un sustantivo.",
    promptHy: "«Casa»-ն գոյական է։",
    hintEs: "¿Habla sobre el propio idioma y sus reglas?",
    hintHy: "Խոսո՞ւմ է հենց լեզվի և բառի տեսակի մասին։",
    answerEs: "Metalingüística",
    answerHy: "Մետալեզվական (Metalingüística)",
    explanationEs: "Usa el lenguaje para reflexionar sobre la propia lengua.",
    explanationHy: "Օգտագործում է լեզուն՝ հենց լեզվի կանոնները բացատրելու համար։"
  },
  {
    id: 6,
    sectionId: 1,
    sectionTitleEs: "1. Funciones del lenguaje",
    sectionTitleHy: "1. Լեզվի գործառույթները",
    category: "Funciones",
    promptEs: "Tus ojos son dos estrellas.",
    promptHy: "Քո աչքերը երկու աստղ են։",
    hintEs: "¿Usa una metáfora poética y busca la belleza?",
    hintHy: "Գեղարվեստակա՞ն պատկերավորություն է փոխանցում։",
    answerEs: "Poética",
    answerHy: "Գեղարվեստական / բանաստեղծական (Poética)",
    explanationEs: "Importa la belleza y el sentido estético del mensaje.",
    explanationHy: "Շեշտը դրված է հաղորդագրության գեղագիտական ձևի վրա։"
  },

  // Ejercicio 2: Modalidades oracionales (7-14)
  {
    id: 7,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "Mañana tenemos examen.",
    promptHy: "Վաղը քննություն ունենք։",
    hintEs: "¿Afirma una información sin emoción ni pregunta?",
    hintHy: "Հաստատո՞ւմ է տեղեկություն։",
    answerEs: "Enunciativa",
    answerHy: "Պատմողական (Enunciativa)",
    explanationEs: "Afirma un hecho objetivo.",
    explanationHy: "Հաստատում է փաստը։"
  },
  {
    id: 8,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "¿Has terminado los deberes?",
    promptHy: "Ավարտե՞լ ես տնային աշխատանքը։",
    hintEs: "¿Tiene signos de interrogación y hace una pregunta?",
    hintHy: "Ունի՞ հարցական նշաններ։",
    answerEs: "Interrogativa",
    answerHy: "Հարցական (Interrogativa)",
    explanationEs: "Formula una pregunta directa.",
    explanationHy: "Հարց է տալիս։"
  },
  {
    id: 9,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "¡Qué partido tan emocionante!",
    promptHy: "Ինչ հետաքրքիր խաղ է։",
    hintEs: "¿Expresa emoción con signos de exclamación?",
    hintHy: "Բացականչակա՞ն նշանով զգացմունք է արտահայտում։",
    answerEs: "Exclamativa",
    answerHy: "Բացականչական (Exclamativa)",
    explanationEs: "Expresa emoción intensa mediante entonación exclamativa.",
    explanationHy: "Արտահայտում է հիացմունք և հույզեր։"
  },
  {
    id: 10,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "Ven aquí ahora mismo.",
    promptHy: "Հիմա անմիջապես արի այստեղ։",
    hintEs: "¿Es una orden directa o mandato?",
    hintHy: "Հրամա՞ն կամ պահանջ է։",
    answerEs: "Exhortativa / imperativa",
    answerHy: "Հրամայական (Exhortativa / imperativa)",
    explanationEs: "Transmite una orden o mandato firme.",
    explanationHy: "Տալիս է հստակ հրաման։"
  },
  {
    id: 11,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "Ojalá ganemos mañana.",
    promptHy: "Երանի վաղը հաղթենք։",
    hintEs: "¿Empieza por 'ojalá' y expresa un anhelo o deseo?",
    hintHy: "Արտահայտո՞ւմ է իղձ կամ ցանկություն։",
    answerEs: "Desiderativa",
    answerHy: "Ցանկական (Desiderativa)",
    explanationEs: "Expresa el deseo de que ocurra algo favorable.",
    explanationHy: "Արտահայտում է ցանկություն («երանի»)։"
  },
  {
    id: 12,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "Quizás Carlos llegue tarde.",
    promptHy: "Հնարավոր է՝ Կառլոսը ուշ գա։",
    hintEs: "¿Lleva 'quizás' indicando duda o probabilidad?",
    hintHy: "Կասկա՞ծ կամ հավանականություն է («գուցե»)։",
    answerEs: "Dubitativa",
    answerHy: "Կասկածական (Dubitativa)",
    explanationEs: "Plantea una posibilidad o incertidumbre con 'quizás'.",
    explanationHy: "Արտահայտում է կասկած կամ հնարավորություն։"
  },
  {
    id: 13,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "No quiero salir hoy.",
    promptHy: "Այսօր չեմ ուզում դուրս գալ։",
    hintEs: "¿Lleva la palabra 'no' negando algo?",
    hintHy: "Ժխտո՞ւմ է «no» բառով։",
    answerEs: "Enunciativa negativa",
    answerHy: "Ժխտական պատմողական (Enunciativa negativa)",
    explanationEs: "Es una oración enunciativa en forma negativa.",
    explanationHy: "Պատմողական նախադասության ժխտական ձևն է։"
  },
  {
    id: 14,
    sectionId: 2,
    sectionTitleEs: "2. Modalidades oracionales",
    sectionTitleHy: "2. Նախադասությունների տեսակները",
    category: "Modalidades",
    promptEs: "¿Dónde está mi mochila?",
    promptHy: "Որտե՞ղ է իմ պայուսակը։",
    hintEs: "¿Pregunta por un lugar con signos de interrogación?",
    hintHy: "Հարցական բառով հարց է տալիս։",
    answerEs: "Interrogativa",
    answerHy: "Հարցական (Interrogativa)",
    explanationEs: "Pregunta directa sobre la ubicación.",
    explanationHy: "Ուղիղ հարցական նախադասություն։"
  },

  // Ejercicio 3: Elementos de la comunicación (15-19)
  {
    id: 15,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Una profesora escribe en la pizarra: “El examen será el viernes”. Los alumnos leen el mensaje.",
    contextHy: "Ուսուցչուհին գրատախտակին գրում է․ «Քննությունը կլինի ուրբաթ օրը»։ Աշակերտները կարդում են հաղորդագրությունը։",
    promptEs: "¿Quién es el emisor?",
    promptHy: "Ո՞վ է հաղորդողը (emisor)։",
    hintEs: "¿Quién escribe el mensaje?",
    hintHy: "Ո՞վ է գրում հաղորդագրությունը։",
    answerEs: "La profesora",
    answerHy: "Ուսուցչուհին (La profesora)",
    explanationEs: "La profesora es quien emite y escribe la información.",
    explanationHy: "Ուսուցչուհին է հաղորդագրությունը ստեղծողը և ուղարկողը։"
  },
  {
    id: 16,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Una profesora escribe en la pizarra: “El examen será el viernes”. Los alumnos leen el mensaje.",
    contextHy: "Ուսուցչուհին գրատախտակին գրում է․ «Քննությունը կլինի ուրբաթ օրը»։ Աշակերտները կարդում են հաղորդագրությունը։",
    promptEs: "¿Quiénes son los receptores?",
    promptHy: "Ովքե՞ր են ստացողները (receptores)։",
    hintEs: "¿Quiénes leen el mensaje?",
    hintHy: "Ովքե՞ր են կարդում հաղորդագրությունը։",
    answerEs: "Los alumnos",
    answerHy: "Աշակերտները (Los alumnos)",
    explanationEs: "Los alumnos reciben y leen el mensaje escrito.",
    explanationHy: "Աշակերտներն են ընդունում և կարդում հաղորդագրությունը։"
  },
  {
    id: 17,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Una profesora escribe en la pizarra: “El examen será el viernes”. Los alumnos leen el mensaje.",
    contextHy: "Ուսուցչուհին գրատախտակին գրում է․ «Քննությունը կլինի ուրբաթ օրը»։ Աշակերտները կարդում են հաղորդագրությունը։",
    promptEs: "¿Cuál es el mensaje?",
    promptHy: "Ո՞րն է հաղորդագրությունը (mensaje)։",
    hintEs: "¿Qué texto exacto escribió?",
    hintHy: "Ի՞նչ բառացի տեքստ է գրված։",
    answerEs: "“El examen será el viernes.”",
    answerHy: "«Քննությունը կլինի ուրբաթ օրը» (“El examen será el viernes.”)",
    explanationEs: "El contenido transmitido de forma textual.",
    explanationHy: "Փոխանցվող բուն տեղեկությունը։"
  },
  {
    id: 18,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Una profesora escribe en la pizarra: “El examen será el viernes”. Los alumnos leen el mensaje.",
    contextHy: "Ուսուցչուհին գրատախտակին գրում է․ «Քննությունը կլինի ուրբաթ օրը»։ Աշակերտները կարդում են հաղորդագրությունը։",
    promptEs: "¿Cuál es el código?",
    promptHy: "Ո՞րն է կոդը (código)։",
    hintEs: "¿En qué idioma y modalidad está escrito?",
    hintHy: "Ո՞ր լեզվով է գրված։",
    answerEs: "La lengua española escrita",
    answerHy: "Գրավոր իսպաներենը (La lengua española escrita)",
    explanationEs: "El sistema de signos lingüísticos en su modalidad escrita.",
    explanationHy: "Իսպաներեն լեզվի գրավոր նշանների համակարգը։"
  },
  {
    id: 19,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Una profesora escribe en la pizarra: “El examen será el viernes”. Los alumnos leen el mensaje.",
    contextHy: "Ուսուցչուհին գրատախտակին գրում է․ «Քննությունը կլինի ուրբաթ օրը»։ Աշակերտները կարդում են հաղորդագրությունը։",
    promptEs: "¿Cuál es el canal?",
    promptHy: "Ո՞րն է հաղորդման միջոցը / կապուղին (canal)։",
    hintEs: "¿Sobre qué superficie física o medio viaja el mensaje?",
    hintHy: "Ի՞նչ ֆիզիկական մակերեսի վրա է գրված։",
    answerEs: "La pizarra / el medio visual escrito",
    answerHy: "Գրատախտակը / գրավոր տեսողական միջոցը (La pizarra)",
    explanationEs: "El soporte físico visual a través del cual se percibe.",
    explanationHy: "Գրատախտակը՝ որպես տեսողական փոխանցման ֆիզիկական միջոց։"
  },

  // Ejercicio 4: Situación real (20-24)
  {
    id: 20,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Carlos llama por teléfono a Pablo y le dice: “El entrenamiento empieza a las seis.”",
    contextHy: "Կառլոսը հեռախոսով զանգում է Պաբլոյին և ասում․ «Մարզումը սկսվում է ժամը վեցին»։",
    promptEs: "Identifica el Emisor → ______",
    promptHy: "Որոշի՛ր հաղորդողին (Emisor) → ______",
    answerEs: "Carlos",
    answerHy: "Կառլոսը (Carlos)",
    explanationEs: "Carlos es quien inicia la llamada y habla.",
    explanationHy: "Կառլոսն է զանգահարում և խոսում։"
  },
  {
    id: 21,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Carlos llama por teléfono a Pablo y le dice: “El entrenamiento empieza a las seis.”",
    contextHy: "Կառլոսը հեռախոսով զանգում է Պաբլոյին և ասում․ «Մարզումը սկսվում է ժամը վեցին»։",
    promptEs: "Identifica el Receptor → ______",
    promptHy: "Որոշի՛ր ստացողին (Receptor) → ______",
    answerEs: "Pablo",
    answerHy: "Պաբլոն (Pablo)",
    explanationEs: "Pablo recibe la llamada y escucha el mensaje.",
    explanationHy: "Պաբլոն է ստանում զանգը և լսում։"
  },
  {
    id: 22,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Carlos llama por teléfono a Pablo y le dice: “El entrenamiento empieza a las seis.”",
    contextHy: "Կառլոսը հեռախոսով զանգում է Պաբլոյին և ասում․ «Մարզումը սկսվում է ժամը վեցին»։",
    promptEs: "Identifica el Mensaje → ______",
    promptHy: "Որոշի՛ր հաղորդագրությունը (Mensaje) → ______",
    answerEs: "El entrenamiento empieza a las seis.",
    answerHy: "«Մարզումը սկսվում է ժամը վեցին»։",
    explanationEs: "El contenido transmitido por la llamada.",
    explanationHy: "Զանգի ընթացքում ասված բուն տեղեկությունը։"
  },
  {
    id: 23,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Carlos llama por teléfono a Pablo y le dice: “El entrenamiento empieza a las seis.”",
    contextHy: "Կառլոսը հեռախոսով զանգում է Պաբլոյին և ասում․ «Մարզումը սկսվում է ժամը վեցին»։",
    promptEs: "Identifica el Canal → ______",
    promptHy: "Որոշի՛ր կապուղին (Canal) → ______",
    answerEs: "El teléfono / canal oral",
    answerHy: "Հեռախոսը / բանավոր կապուղին (El teléfono)",
    explanationEs: "La línea telefónica y el sonido emitido.",
    explanationHy: "Հեռախոսակապը և ձայնային ալիքները։"
  },
  {
    id: 24,
    sectionId: 3,
    sectionTitleEs: "3. Elementos de la comunicación",
    sectionTitleHy: "3. Հաղորդակցության տարրերը",
    category: "Elementos",
    contextEs: "Carlos llama por teléfono a Pablo y le dice: “El entrenamiento empieza a las seis.”",
    contextHy: "Կառլոսը հեռախոսով զանգում է Պաբլոյին և ասում․ «Մարզումը սկսվում է ժամը վեցին»։",
    promptEs: "Identifica el Código → ______",
    promptHy: "Որոշի՛ր կոդը (Código) → ______",
    answerEs: "La lengua española",
    answerHy: "Իսպաներեն լեզուն (La lengua española)",
    explanationEs: "El idioma español oral compartido por ambos.",
    explanationHy: "Իսպաներեն բանավոր լեզուն։"
  },

  // Ejercicio 5: Categorías gramaticales (25-31)
  {
    id: 25,
    sectionId: 4,
    sectionTitleEs: "4. Categorías gramaticales",
    sectionTitleHy: "4. Քերականական խմբեր",
    category: "Gramática",
    promptEs: "El JUGADOR marcó un gol.",
    promptHy: "El JUGADOR marcó un gol. (Խաղացողը գոլ խփեց։)",
    hintEs: "¿Nombra a una persona?",
    hintHy: "Մարդո՞ւ անուն է տալիս (ո՞վ)։",
    answerEs: "jugador → sustantivo",
    answerHy: "jugador → sustantivo (գոյական)",
    explanationEs: "Palabra que designa a una persona.",
    explanationHy: "Անձ ցույց տվող գոյական։"
  },
  {
    id: 26,
    sectionId: 4,
    sectionTitleEs: "4. Categorías gramaticales",
    sectionTitleHy: "4. Քերականական խմբեր",
    category: "Gramática",
    promptEs: "La camiseta es ROJA.",
    promptHy: "La camiseta es ROJA. (Շապիկը կարմիր է։)",
    hintEs: "¿Indica una cualidad de la camiseta?",
    hintHy: "Շապիկի գո՞ւյնն ու հատկանիշն է ցույց տալիս (ինչպիսի՞)։",
    answerEs: "roja → adjetivo",
    answerHy: "roja → adjetivo (ածական)",
    explanationEs: "Califica al sustantivo 'camiseta'.",
    explanationHy: "Որոշում և նկարագրում է շապիկը։"
  },
  {
    id: 27,
    sectionId: 4,
    sectionTitleEs: "4. Categorías gramaticales",
    sectionTitleHy: "4. Քերականական խմբեր",
    category: "Gramática",
    promptEs: "Pablo CORRE muy rápido.",
    promptHy: "Pablo CORRE muy rápido. (Պաբլոն վազում է շատ արագ։)",
    hintEs: "¿Expresa una acción en presente?",
    hintHy: "Գործողությո՞ւն է ցույց տալիս (ի՞նչ է անում)։",
    answerEs: "corre → verbo",
    answerHy: "corre → verbo (բայ)",
    explanationEs: "Indica la acción realizada por el sujeto.",
    explanationHy: "Ցույց է տալիս գործողություն։"
  },
  {
    id: 28,
    sectionId: 4,
    sectionTitleEs: "4. Categorías gramaticales",
    sectionTitleHy: "4. Քերականական խմբեր",
    category: "Gramática",
    promptEs: "Pablo corre RÁPIDAMENTE.",
    promptHy: "Pablo corre RÁPIDAMENTE. (Պաբլոն վազում է արագորեն։)",
    hintEs: "¿Termina en -mente y dice CÓMO corre?",
    hintHy: "Ավարտվում է -mente-ով և ցույց տալիս ինչպե՞ս է վազում։",
    answerEs: "rápidamente → adverbio",
    answerHy: "rápidamente → adverbio (մակբայ)",
    explanationEs: "Adverbio de modo que complementa al verbo 'corre'.",
    explanationHy: "Ձևի մակբայ, որը լրացնում է բային։"
  },
  {
    id: 29,
    sectionId: 4,
    sectionTitleEs: "4. Categorías gramaticales",
    sectionTitleHy: "4. Քերականական խմբեր",
    category: "Gramática",
    promptEs: "ÉL juega al fútbol.",
    promptHy: "ÉL juega al fútbol. (Նա ֆուտբոլ է խաղում։)",
    hintEs: "¿Sustituye al nombre de una persona y lleva tilde?",
    hintHy: "Փոխարինո՞ւմ է անվանը (նա)։",
    answerEs: "él → pronombre",
    answerHy: "él → pronombre (դերանուն)",
    explanationEs: "Pronombre personal que sustituye al sujeto.",
    explanationHy: "Անձնական դերանուն։"
  },
  {
    id: 30,
    sectionId: 4,
    sectionTitleEs: "4. Categorías gramaticales",
    sectionTitleHy: "4. Քերականական խմբեր",
    category: "Gramática",
    promptEs: "MI camiseta es azul.",
    promptHy: "MI camiseta es azul. (Իմ շապիկը կապույտ է։)",
    hintEs: "¿Acompaña directamente a 'camiseta' indicando posesión?",
    hintHy: "Գնո՞ւմ է «camiseta» գոյականի հետ՝ ցույց տալով պատկանելություն։",
    answerEs: "mi → determinante posesivo",
    answerHy: "mi → determinante posesivo (ստացական որոշիչ)",
    explanationEs: "Acompaña al sustantivo indicando pertenencia.",
    explanationHy: "Որոշիչ, որը դրված է գոյականի առջև։"
  },
  {
    id: 31,
    sectionId: 4,
    sectionTitleEs: "4. Categorías gramaticales",
    sectionTitleHy: "4. Քերականական խմբեր",
    category: "Gramática",
    promptEs: "Carlos juega Y estudia.",
    promptHy: "Carlos juega Y estudia. (Կառլոսը խաղում է և սովորում։)",
    hintEs: "¿Une dos verbos o proposiciones?",
    hintHy: "Միացնո՞ւմ է երկու բայերը (շաղկապ)։",
    answerEs: "y → nexo / conjunción",
    answerHy: "y → nexo / conjunción (կապակցիչ / շաղկապ)",
    explanationEs: "Conjunción copulativa que une dos oraciones.",
    explanationHy: "Համադասական շաղկապ/կապակցիչ։"
  },

  // Ejercicio 6: Sustantivos (32-37)
  {
    id: 32,
    sectionId: 5,
    sectionTitleEs: "5. Sustantivos",
    sectionTitleHy: "5. Գոյականներ",
    category: "Sustantivos",
    promptEs: "Madrid → ¿común o propio?",
    promptHy: "Madrid (Մադրիդ) → ¿común o propio? (հասարա՞կ, թե՞ հատուկ)",
    answerEs: "Propio",
    answerHy: "Propio (հատուկ անուն)",
    explanationEs: "Nombre particular de una ciudad, se escribe con mayúscula.",
    explanationHy: "Քաղաքի հատուկ անուն է, գրվում է մեծատառով։"
  },
  {
    id: 33,
    sectionId: 5,
    sectionTitleEs: "5. Sustantivos",
    sectionTitleHy: "5. Գոյականներ",
    category: "Sustantivos",
    promptEs: "perro → ¿común o propio?",
    promptHy: "perro (շուն) → ¿común o propio? (հասարա՞կ, թե՞ հատուկ)",
    answerEs: "Común",
    answerHy: "Común (հասարակ գոյական)",
    explanationEs: "Nombra a cualquier animal de esa especie.",
    explanationHy: "Նշանակում է ընդհանուր տեսակ։"
  },
  {
    id: 34,
    sectionId: 5,
    sectionTitleEs: "5. Sustantivos",
    sectionTitleHy: "5. Գոյականներ",
    category: "Sustantivos",
    promptEs: "equipo → ¿individual o colectivo?",
    promptHy: "equipo (թիմ) → ¿individual o colectivo? (անհատակա՞ն, թե՞ հավաքական)",
    answerEs: "Colectivo",
    answerHy: "Colectivo (հավաքական)",
    explanationEs: "En singular nombra un conjunto de personas.",
    explanationHy: "Եզակի թվով ցույց է տալիս խումբ/ամբողջություն։"
  },
  {
    id: 35,
    sectionId: 5,
    sectionTitleEs: "5. Sustantivos",
    sectionTitleHy: "5. Գոյականներ",
    category: "Sustantivos",
    promptEs: "jugador → ¿individual o colectivo?",
    promptHy: "jugador (խաղացող) → ¿individual o colectivo? (անհատակա՞ն, թե՞ հավաքական)",
    answerEs: "Individual",
    answerHy: "Individual (անհատական)",
    explanationEs: "Nombra a un solo ser o individuo.",
    explanationHy: "Նշանակում է մեկ առանձին անձ։"
  },
  {
    id: 36,
    sectionId: 5,
    sectionTitleEs: "5. Sustantivos",
    sectionTitleHy: "5. Գոյականներ",
    category: "Sustantivos",
    promptEs: "alegría → ¿concreto o abstracto?",
    promptHy: "alegría (ուրախություն) → ¿concreto o abstracto? (կոնկրե՞տ, թե՞ վերացական)",
    answerEs: "Abstracto",
    answerHy: "Abstracto (վերացական)",
    explanationEs: "Nombra un sentimiento o idea no tangible.",
    explanationHy: "Զգացմունք կամ գաղափար է, որը հնարավոր չէ շոշափել։"
  },
  {
    id: 37,
    sectionId: 5,
    sectionTitleEs: "5. Sustantivos",
    sectionTitleHy: "5. Գոյականներ",
    category: "Sustantivos",
    promptEs: "balón → ¿concreto o abstracto?",
    promptHy: "balón (գնդակ) → ¿concreto o abstracto? (կոնկրե՞տ, թե՞ վերացական)",
    answerEs: "Concreto",
    answerHy: "Concreto (կոնկրետ)",
    explanationEs: "Nombra un objeto material tangible perceptible por los sentidos.",
    explanationHy: "Շոշափելի նյութական առարկա է։"
  },

  // Ejercicio 7: Adjetivos (38-41)
  {
    id: 38,
    sectionId: 6,
    sectionTitleEs: "6. Adjetivos",
    sectionTitleHy: "6. Ածականներ",
    category: "Adjetivos",
    promptEs: "El jugador rápido marcó un gol. ¿Cuál es el adjetivo?",
    promptHy: "El jugador rápido marcó un gol. (Արագ խաղացողը գոլ խփեց։) Ո՞րն է ածականը։",
    answerEs: "rápido",
    answerHy: "rápido (արագ)",
    explanationEs: "Describe la cualidad del sustantivo 'jugador'.",
    explanationHy: "Նկարագրում է խաղացողի հատկանիշը։"
  },
  {
    id: 39,
    sectionId: 6,
    sectionTitleEs: "6. Adjetivos",
    sectionTitleHy: "6. Ածականներ",
    category: "Adjetivos",
    promptEs: "Las camisetas nuevas son bonitas. Busca dos adjetivos.",
    promptHy: "Las camisetas nuevas son bonitas. (Նոր շապիկները գեղեցիկ են։) Գտի՛ր երկու ածական։",
    answerEs: "nuevas / bonitas",
    answerHy: "nuevas / bonitas (նոր / գեղեցիկ)",
    explanationEs: "Ambas palabras indican cualidades de las 'camisetas'.",
    explanationHy: "Երկուսն էլ շապիկների հատկանիշներն են։"
  },
  {
    id: 40,
    sectionId: 6,
    sectionTitleEs: "6. Adjetivos",
    sectionTitleHy: "6. Ածականներ",
    category: "Adjetivos",
    promptEs: "Cambia al femenino: jugador alto → jugadora ______",
    promptHy: "Փոխի՛ր իգական սեռի՝ jugador alto → jugadora ______",
    answerEs: "alta",
    answerHy: "alta (jugadora alta)",
    explanationEs: "El adjetivo concuerda en género femenino con el sustantivo.",
    explanationHy: "Ածականը համաձայնում է իգական սեռի գոյականի հետ (-a)։"
  },
  {
    id: 41,
    sectionId: 6,
    sectionTitleEs: "6. Adjetivos",
    sectionTitleHy: "6. Ածականներ",
    category: "Adjetivos",
    promptEs: "Cambia al plural: camiseta roja → camisetas ______",
    promptHy: "Փոխի՛ր հոգնակի թվի՝ camiseta roja → camisetas ______",
    answerEs: "rojas",
    answerHy: "rojas (camisetas rojas)",
    explanationEs: "El adjetivo concuerda en número plural (-s).",
    explanationHy: "Ածականը համաձայնում է հոգնակի թվի հետ (-s)։"
  },

  // Ejercicio 8: Verbos (42-45)
  {
    id: 42,
    sectionId: 7,
    sectionTitleEs: "7. Verbos",
    sectionTitleHy: "7. Բայեր",
    category: "Verbos",
    promptEs: "En “Carlos juega al fútbol”, ¿cuál es el verbo?",
    promptHy: "«Carlos juega al fútbol» նախադասության մեջ ո՞րն է բայը։",
    answerEs: "juega",
    answerHy: "juega (խաղում է)",
    explanationEs: "Es la forma conjugada de la acción (3.ª persona singular).",
    explanationHy: "Գործողությունն արտահայտող բառն է։"
  },
  {
    id: 43,
    sectionId: 7,
    sectionTitleEs: "7. Verbos",
    sectionTitleHy: "7. Բայեր",
    category: "Verbos",
    promptEs: "Infinitivo de juega: ______",
    promptHy: "«juega»-ի անորոշ ձևը (infinitivo)՝ ______",
    answerEs: "jugar",
    answerHy: "jugar (խաղալ)",
    explanationEs: "Verbo de la primera conjugación (-ar).",
    explanationHy: "Առաջին լծորդության բայ (-ar)։"
  },
  {
    id: 44,
    sectionId: 7,
    sectionTitleEs: "7. Verbos",
    sectionTitleHy: "7. Բայեր",
    category: "Verbos",
    promptEs: "Infinitivo de comieron: ______",
    promptHy: "«comieron»-ի անորոշ ձևը (infinitivo)՝ ______",
    answerEs: "comer",
    answerHy: "comer (ուտել)",
    explanationEs: "Verbo de la segunda conjugación (-er).",
    explanationHy: "Երկրորդ լծորդության բայ (-er)։"
  },
  {
    id: 45,
    sectionId: 7,
    sectionTitleEs: "7. Verbos",
    sectionTitleHy: "7. Բայեր",
    category: "Verbos",
    promptEs: "Infinitivo de vivimos: ______",
    promptHy: "«vivimos»-ի անորոշ ձևը (infinitivo)՝ ______",
    answerEs: "vivir",
    answerHy: "vivir (ապրել)",
    explanationEs: "Verbo de la tercera conjugación (-ir).",
    explanationHy: "Երրորդ լծորդության բայ (-ir)։"
  },

  // Ejercicio 9: Adverbios (46-50)
  {
    id: 46,
    sectionId: 8,
    sectionTitleEs: "8. Adverbios",
    sectionTitleHy: "8. Մակբայներ",
    category: "Adverbios",
    promptEs: "aquí → clasifica el adverbio",
    promptHy: "aquí (այստեղ) → դասակարգի՛ր մակբայը",
    answerEs: "Adverbio de lugar",
    answerHy: "Adverbio de lugar (տեղի մակբայ)",
    explanationEs: "Indica la posición o lugar donde ocurre algo.",
    explanationHy: "Ցույց է տալիս գործողության կատարման տեղը։"
  },
  {
    id: 47,
    sectionId: 8,
    sectionTitleEs: "8. Adverbios",
    sectionTitleHy: "8. Մակբայներ",
    category: "Adverbios",
    promptEs: "ayer → clasifica el adverbio",
    promptHy: "ayer (երեկ) → դասակարգի՛ր մակբայը",
    answerEs: "Adverbio de tiempo",
    answerHy: "Adverbio de tiempo (ժամանակի մակբայ)",
    explanationEs: "Sitúa la acción en una línea temporal.",
    explanationHy: "Ցույց է տալիս գործողության կատարման ժամանակը։"
  },
  {
    id: 48,
    sectionId: 8,
    sectionTitleEs: "8. Adverbios",
    sectionTitleHy: "8. Մակբայներ",
    category: "Adverbios",
    promptEs: "muy → clasifica el adverbio",
    promptHy: "muy (շատ) → դասակարգի՛ր մակբայը",
    answerEs: "Adverbio de cantidad",
    answerHy: "Adverbio de cantidad (քանակի մակբայ)",
    explanationEs: "Expresa intensidad o cantidad.",
    explanationHy: "Ցույց է տալիս չափ ու քանակ / ինտենսիվություն։"
  },
  {
    id: 49,
    sectionId: 8,
    sectionTitleEs: "8. Adverbios",
    sectionTitleHy: "8. Մակբայներ",
    category: "Adverbios",
    promptEs: "bien → clasifica el adverbio",
    promptHy: "bien (լավ) → դասակարգի՛ր մակբայը",
    answerEs: "Adverbio de modo",
    answerHy: "Adverbio de modo (ձևի մակբայ)",
    explanationEs: "Explica la manera en que se desarrolla la acción.",
    explanationHy: "Ցույց է տալիս գործողության կատարման ձևը։"
  },
  {
    id: 50,
    sectionId: 8,
    sectionTitleEs: "8. Adverbios",
    sectionTitleHy: "8. Մակբայներ",
    category: "Adverbios",
    promptEs: "no → clasifica el adverbio",
    promptHy: "no (ոչ / չ-) → դասակարգի՛ր մակբայը",
    answerEs: "Adverbio de negación",
    answerHy: "Adverbio de negación (ժխտման մակբայ)",
    explanationEs: "Sirve para negar la acción verbal o afirmación.",
    explanationHy: "Ծառայում է ժխտման համար։"
  },

  // Ejercicio 10: Determinantes y Pronombres (51-55)
  {
    id: 51,
    sectionId: 9,
    sectionTitleEs: "9. Determinantes y Pronombres",
    sectionTitleHy: "9. Որոշիչներ և դերանուններ",
    category: "Det/Pron",
    promptEs: "“MI hermano juega al fútbol.” ¿Qué es 'Mi'?",
    promptHy: "«MI hermano juega al fútbol.» Ի՞նչ է «Mi»-ն։",
    hintEs: "¿Acompaña directamente al sustantivo 'hermano'?",
    hintHy: "Գնո՞ւմ է «hermano» գոյականի հետ։",
    answerEs: "determinante",
    answerHy: "determinante (որոշիչ / determinativo posesivo)",
    explanationEs: "Acompaña al sustantivo 'hermano'.",
    explanationHy: "Գնում է գոյականի հետ՝ որոշելով այն։"
  },
  {
    id: 52,
    sectionId: 9,
    sectionTitleEs: "9. Determinantes y Pronombres",
    sectionTitleHy: "9. Որոշիչներ և դերանուններ",
    category: "Det/Pron",
    promptEs: "“ÉL juega al fútbol.” ¿Qué es 'Él'?",
    promptHy: "«ÉL juega al fútbol.» Ի՞նչ է «Él»-ը։",
    hintEs: "¿Sustituye al sustantivo y va solo con el verbo?",
    hintHy: "Փոխարինո՞ւմ է գոյականին և մենա՞կ է։",
    answerEs: "pronombre",
    answerHy: "pronombre (դերանուն)",
    explanationEs: "Sustituye al nombre propio o sustantivo.",
    explanationHy: "Փոխարինում է գոյականին։"
  },
  {
    id: 53,
    sectionId: 9,
    sectionTitleEs: "9. Determinantes y Pronombres",
    sectionTitleHy: "9. Որոշիչներ և դերանուններ",
    category: "Det/Pron",
    promptEs: "“ESTOS zapatos son nuevos.” ¿Qué es 'Estos'?",
    promptHy: "«ESTOS zapatos son nuevos.» Ի՞նչ է «Estos»-ը։",
    hintEs: "¿Acompaña a 'zapatos' demostrando cercanía?",
    hintHy: "Գնո՞ւմ է «zapatos» գոյականի հետ։",
    answerEs: "determinante",
    answerHy: "determinante (ցուցական որոշիչ)",
    explanationEs: "Acompaña al sustantivo 'zapatos'.",
    explanationHy: "Դրված է գոյականի կողքին։"
  },
  {
    id: 54,
    sectionId: 9,
    sectionTitleEs: "9. Determinantes y Pronombres",
    sectionTitleHy: "9. Որոշիչներ և դերանուններ",
    category: "Det/Pron",
    promptEs: "“ESTOS son nuevos.” ¿Qué es 'Estos'?",
    promptHy: "«ESTOS son nuevos.» Ի՞նչ է «Estos»-ը։",
    hintEs: "¿Va solo, sustituyendo a los zapatos?",
    hintHy: "Մենա՞կ է, առանց գոյականի։",
    answerEs: "pronombre",
    answerHy: "pronombre (ցուցական դերանուն)",
    explanationEs: "No lleva sustantivo detrás, lo reemplaza.",
    explanationHy: "Փոխարինում է գոյականին, գոյական չկա կողքը։"
  },
  {
    id: 55,
    sectionId: 9,
    sectionTitleEs: "9. Determinantes y Pronombres",
    sectionTitleHy: "9. Որոշիչներ և դերանուններ",
    category: "Det/Pron",
    promptEs: "“NUESTRA profesora es simpática.” ¿Qué es 'Nuestra'?",
    promptHy: "«NUESTRA profesora es simpática.» Ի՞նչ է «Nuestra»-ն։",
    hintEs: "¿Acompaña a 'profesora' indicando posesión?",
    hintHy: "Գնո՞ւմ է «profesora» գոյականի հետ։",
    answerEs: "determinante posesivo",
    answerHy: "determinante posesivo (ստացական որոշիչ)",
    explanationEs: "Determina al sustantivo 'profesora' con relación de posesión.",
    explanationHy: "Ստացական որոշիչ է գոյականի հետ։"
  }
];
