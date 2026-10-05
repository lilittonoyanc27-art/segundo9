import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Brain,
  CheckCircle,
  RotateCcw,
  Sparkles,
  Search,
  Filter,
  Eye,
  EyeOff,
  Layers,
  ChevronDown,
  ChevronUp,
  Volume2,
  GraduationCap,
  Trophy,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  ALL_QUESTIONS,
  ALL_THEORY_SECTIONS,
  SECTIONS_META,
  QuestionItem,
  SectionTheory
} from './examData.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { GranTextViewer } from './GranTextViewer.tsx';
import { CheatsheetViewer } from './CheatsheetViewer.tsx';
import { FlashcardMode } from './FlashcardMode.tsx';
import { speakSpanish } from './speechHelper.ts';

type ViewMode = 'study' | 'flashcards' | 'text' | 'cheatsheet';
type FilterStatus = 'all' | 'unanswered' | 'mastered' | 'review';

export default function App() {
  const [activeMode, setActiveMode] = useState<ViewMode>('study');
  const [selectedSection, setSelectedSection] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [globalShowTranslation, setGlobalShowTranslation] = useState(false);
  const [expandedTheories, setExpandedTheories] = useState<Record<number, boolean>>({ 1: true });
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'huge'>(() => {
    try {
      return (localStorage.getItem('lengua_font_size') as 'normal' | 'large' | 'huge') || 'large';
    } catch {
      return 'large';
    }
  });

  // Apply font size class to html root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-normal', 'font-large', 'font-huge');
    root.classList.add(`font-${fontSizeLevel}`);
    try {
      localStorage.setItem('lengua_font_size', fontSizeLevel);
    } catch {
      // ignore
    }
  }, [fontSizeLevel]);

  // Load progress from localStorage
  const [userStatus, setUserStatus] = useState<Record<number, 'mastered' | 'review'>>(() => {
    try {
      const saved = localStorage.getItem('lengua_exam_progress_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem('lengua_exam_progress_v1', JSON.stringify(userStatus));
    } catch {
      // ignore
    }
  }, [userStatus]);

  const handleStatusChange = (id: number, status: 'mastered' | 'review' | undefined) => {
    setUserStatus(prev => {
      const next = { ...prev };
      if (!status) {
        delete next[id];
      } else {
        next[id] = status;
        if (status === 'mastered') {
          try {
            confetti({
              particleCount: 30,
              spread: 50,
              origin: { y: 0.7 }
            });
          } catch {
            // ignore
          }
        }
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Վստա՞հ ես, որ ցանկանում ես մաքրել ամբողջ առաջընթացը և սկսել նորից։')) {
      setUserStatus({});
    }
  };

  const toggleTheory = (sectionId: number) => {
    setExpandedTheories(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Statistics
  const totalQuestions = ALL_QUESTIONS.length; // 110
  const masteredCount = useMemo(() => {
    return Object.values(userStatus).filter(s => s === 'mastered').length;
  }, [userStatus]);
  const reviewCount = useMemo(() => {
    return Object.values(userStatus).filter(s => s === 'review').length;
  }, [userStatus]);
  const progressPercent = Math.round((masteredCount / totalQuestions) * 100);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter(q => {
      // Section filter
      if (selectedSection !== 'all' && q.sectionId !== selectedSection) {
        return false;
      }
      // Status filter
      const status = userStatus[q.id];
      if (filterStatus === 'mastered' && status !== 'mastered') return false;
      if (filterStatus === 'review' && status !== 'review') return false;
      if (filterStatus === 'unanswered' && status) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesId = q.id.toString() === query || query === `#${q.id}`;
        const matchesPrompt = q.promptEs.toLowerCase().includes(query) || q.promptHy.toLowerCase().includes(query);
        const matchesAnswer = q.answerEs.toLowerCase().includes(query) || q.answerHy.toLowerCase().includes(query);
        const matchesSection = q.sectionTitleEs.toLowerCase().includes(query) || q.sectionTitleHy.toLowerCase().includes(query);
        return matchesId || matchesPrompt || matchesAnswer || matchesSection;
      }

      return true;
    });
  }, [selectedSection, filterStatus, searchQuery, userStatus]);

  // Group questions by section for study view
  const groupedSections = useMemo(() => {
    const map = new Map<number, QuestionItem[]>();
    filteredQuestions.forEach(q => {
      if (!map.has(q.sectionId)) {
        map.set(q.sectionId, []);
      }
      map.get(q.sectionId)!.push(q);
    });
    return Array.from(map.entries()).map(([sectionId, questions]) => {
      const meta = SECTIONS_META.find(s => s.id === sectionId);
      const theory = ALL_THEORY_SECTIONS.find(t => t.id === sectionId);
      return {
        sectionId,
        meta,
        theory,
        questions
      };
    });
  }, [filteredQuestions]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-16">
      {/* Top Banner / Navigation */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-sm font-bold text-lg">
                🇪🇸
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
                  <span>Repaso Lengua Española</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                    110 հարց 🇦🇲
                  </span>
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Քննության ընդհանուր կրկնություն • իսպաներենից հայերեն օգնականով
                </p>
              </div>
            </div>

            {/* Overall Progress Indicator & Font Size Control */}
            <div className="flex items-center gap-3">
              {/* Font Size Selector */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
                <span className="px-1.5 text-slate-500 font-semibold text-xs hidden sm:inline">Տառաչափ՝</span>
                <button
                  onClick={() => setFontSizeLevel('normal')}
                  className={`px-2 py-1 rounded-lg transition cursor-pointer text-xs ${
                    fontSizeLevel === 'normal'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                  title="Սովորական տառաչափ"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSizeLevel('large')}
                  className={`px-2 py-1 rounded-lg transition cursor-pointer text-sm font-bold ${
                    fontSizeLevel === 'large'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                  title="Մեծ տառաչափ"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSizeLevel('huge')}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-base font-extrabold ${
                    fontSizeLevel === 'huge'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                  title="Շատ մեծ տառաչափ"
                >
                  A++
                </button>
              </div>

              {/* Progress Box */}
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-3.5 py-1.5 text-xs sm:text-sm">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-3 font-bold text-slate-700">
                    <span>Առաջընթաց՝</span>
                    <span className="text-indigo-700 font-extrabold">{masteredCount} / {totalQuestions} ({progressPercent}%)</span>
                  </div>
                  <div className="w-28 sm:w-40 bg-slate-200 h-2 rounded-full overflow-hidden mt-1">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
                {masteredCount > 0 && (
                  <button
                    onClick={handleResetProgress}
                    className="text-slate-400 hover:text-rose-600 transition"
                    title="Մաքրել առաջընթացը"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold no-scrollbar">
            <button
              onClick={() => setActiveMode('study')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeMode === 'study'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>📚 Բոլոր առաջադրանքները (1–110)</span>
            </button>

            <button
              onClick={() => setActiveMode('flashcards')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeMode === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>⚡ Քարտերով մարզում (Flashcards)</span>
            </button>

            <button
              onClick={() => setActiveMode('text')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeMode === 'text'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>📝 Քննական տեքստ (Gran Texto)</span>
            </button>

            <button
              onClick={() => setActiveMode('cheatsheet')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer shrink-0 ${
                activeMode === 'cheatsheet'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>🧠 Այն, ինչ պետք է իմանալ (Հուշաթերթ)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {activeMode === 'text' && (
          <div className="space-y-6">
            <GranTextViewer />
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm text-indigo-900">
                  Հարցեր տեքստի վերաբերյալ (հարցեր 91–105)
                </h3>
                <button
                  onClick={() => {
                    setSelectedSection(19);
                    setActiveMode('study');
                  }}
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-900 underline"
                >
                  Անցնել բոլոր 15 հարցերին ➔
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ALL_QUESTIONS.filter(q => q.sectionId === 19).slice(0, 4).map(q => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    globalShowTranslation={globalShowTranslation}
                    status={userStatus[q.id]}
                    onStatusChange={handleStatusChange}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeMode === 'cheatsheet' && (
          <CheatsheetViewer />
        )}

        {activeMode === 'flashcards' && (
          <div className="space-y-6">
            {/* Filter controls inside flashcards */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Թեմա՝</span>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">Բոլոր թեմաները (110 հարց)</option>
                  {SECTIONS_META.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.numberLabel}. {s.titleEs} ({s.questionCount} հարց)
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Զտել՝</span>
                <button
                  onClick={() => setFilterStatus(filterStatus === 'review' ? 'all' : 'review')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                    filterStatus === 'review'
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  Միայն կրկնելու ենթակա ({reviewCount})
                </button>
              </div>
            </div>

            <FlashcardMode
              questions={filteredQuestions}
              userStatus={userStatus}
              onStatusChange={handleStatusChange}
            />
          </div>
        )}

        {activeMode === 'study' && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Search input */}
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Որոնել բառ, թեմա կամ հարցի համար (օր.՝ #42, verbo, apelativa)..."
                    className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      մաքրել
                    </button>
                  )}
                </div>

                {/* Global Armenian translation toggle */}
                <button
                  onClick={() => setGlobalShowTranslation(prev => !prev)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                    globalShowTranslation
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
                  }`}
                >
                  {globalShowTranslation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{globalShowTranslation ? 'Թաքցնել հայերենը' : '🇦🇲 Բացել բոլոր հայերեն թարգմանությունները'}</span>
                </button>
              </div>

              {/* Secondary filters: Sections & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
                {/* Section dropdown */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-500">Թեմա՝</span>
                  <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
                  >
                    <option value="all">Բոլոր 20 թեմաները (110 հարց)</option>
                    {SECTIONS_META.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.numberLabel}. {s.titleEs} — {s.titleHy} ({s.questionCount} հարց)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Pills */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-semibold text-slate-500 mr-1">Կարգավիճակ՝</span>
                  <button
                    onClick={() => setFilterStatus('all')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                      filterStatus === 'all'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Բոլորը ({totalQuestions})
                  </button>
                  <button
                    onClick={() => setFilterStatus('unanswered')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                      filterStatus === 'unanswered'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Չլուծված ({totalQuestions - masteredCount - reviewCount})
                  </button>
                  <button
                    onClick={() => setFilterStatus('mastered')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                      filterStatus === 'mastered'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    }`}
                  >
                    ✅ Գիտեմ ({masteredCount})
                  </button>
                  <button
                    onClick={() => setFilterStatus('review')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                      filterStatus === 'review'
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    🔄 Կրկնել ({reviewCount})
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Helper Tips for Child */}
            <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div className="flex-1 space-y-1">
                <p className="font-bold">Ինչպե՞ս սովորել քննության համար՝</p>
                <p className="text-amber-900 text-xs leading-relaxed">
                  1. Կարդա՛ իսպաներեն առաջադրանքը։ Եթե բառը չհասկացար, <strong>սեղմի՛ր իսպաներեն տեքստի վրա</strong>՝ հայերեն թարգմանությունը տեսնելու համար։<br />
                  2. Ինքնուրույն մտածիր կամ գրի՛ր պատասխանը։<br />
                  3. Սեղմի՛ր <strong>«Տեսնել պատասխանը / Ver respuesta»</strong> կոճակը և ստուգիր քեզ։
                </p>
              </div>
            </div>

            {/* Questions by Sections */}
            {groupedSections.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <p className="text-slate-500 font-medium text-sm">
                  Տրված զտիչով հարցեր չեն գտնվել։ Փորձիր փոխել որոնման բառը կամ զտիչը։
                </p>
              </div>
            ) : (
              groupedSections.map(({ sectionId, meta, theory, questions }) => {
                const isTheoryOpen = !!expandedTheories[sectionId];
                return (
                  <section key={sectionId} className="space-y-4">
                    {/* Section Header */}
                    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 font-black text-xs flex items-center justify-center">
                            {meta?.numberLabel || sectionId}
                          </span>
                          <h2 className="text-base sm:text-lg font-black text-slate-900">
                            {meta?.titleEs}
                          </h2>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 ml-9">
                          🇦🇲 {meta?.titleHy} ({questions.length} առաջադրանք)
                        </p>
                      </div>

                      {/* Theory toggle if theory exists */}
                      {theory && (
                        <button
                          onClick={() => toggleTheory(sectionId)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                            isTheoryOpen
                              ? 'bg-amber-100 text-amber-900 border-amber-300'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                          }`}
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                          <span>{isTheoryOpen ? 'Փակել կանոնները' : '📚 Հիշի՛ր կանոնները (Recuerda)'}</span>
                          {isTheoryOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      )}
                    </div>

                    {/* Expandable Theory Box */}
                    {theory && isTheoryOpen && (
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3 animate-in fade-in">
                        <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-black text-amber-900 uppercase tracking-wide">
                              📚 {theory.titleEs} — Recuerda / Հիշի՛ր
                            </span>
                          </div>
                          <span className="text-xs text-amber-800">
                            Սեղմիր կանոնի վրա՝ լսելու կամ թարգմանությունը դիտելու համար
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                          {theory.rules.map((rule, rIdx) => (
                            <div
                              key={rIdx}
                              className="bg-white/90 border border-amber-200 rounded-xl p-3.5 shadow-2xs space-y-2 hover:border-amber-300 transition"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="font-bold text-sm text-indigo-900">
                                    🇪🇸 {rule.termEs}
                                  </div>
                                  <div className="text-xs font-bold text-amber-800">
                                    🇦🇲 {rule.termHy}
                                  </div>
                                </div>
                                <button
                                  onClick={() => speakSpanish(`${rule.termEs}. ${rule.descEs}`)}
                                  className="p-1 rounded text-slate-400 hover:text-indigo-600 transition"
                                  title="Լսել իսպաներեն"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <p className="text-xs text-slate-700 leading-relaxed">
                                {rule.descEs}
                              </p>

                              <p className="text-xs text-indigo-950 font-medium bg-indigo-50/60 p-2 rounded-lg border border-indigo-100">
                                🇦🇲 {rule.descHy}
                              </p>

                              {rule.exampleEs && (
                                <div className="text-xs pt-1 border-t border-slate-100 text-slate-600">
                                  <span className="font-semibold text-slate-800">Օրինակ՝</span>{' '}
                                  <span className="italic">{rule.exampleEs}</span>
                                  {rule.exampleHy && (
                                    <div className="text-slate-500 italic mt-0.5">
                                      🇦🇲 {rule.exampleHy}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Question Cards Grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {questions.map(q => (
                        <QuestionCard
                          key={q.id}
                          question={q}
                          globalShowTranslation={globalShowTranslation}
                          status={userStatus[q.id]}
                          onStatusChange={handleStatusChange}
                        />
                      ))}
                    </div>
                  </section>
                );
              })
            )}
          </div>
        )}
      </main>
    </div>
  );
}
