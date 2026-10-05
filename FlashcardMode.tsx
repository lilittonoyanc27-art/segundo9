import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Sparkles, CheckCircle, RotateCcw, Eye, EyeOff, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuestionItem } from './examTopics.ts';
import { speakSpanish } from './speechHelper.ts';

interface FlashcardModeProps {
  questions: QuestionItem[];
  userStatus: Record<number, 'mastered' | 'review'>;
  onStatusChange: (id: number, status: 'mastered' | 'review' | undefined) => void;
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({
  questions,
  userStatus,
  onStatusChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userNote, setUserNote] = useState('');

  if (questions.length === 0) {
    return (
      <div className="bg-white p-12 rounded-2xl text-center border border-slate-200">
        <p className="text-slate-500 font-medium">Հարցեր չեն գտնվել այս զտիչով։</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const currentStatus = userStatus[currentQ.id];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowTranslation(false);
      setShowAnswer(false);
      setUserNote('');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowTranslation(false);
      setShowAnswer(false);
      setUserNote('');
    }
  };

  const handleMastered = () => {
    onStatusChange(currentQ.id, 'mastered');
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Top Progress bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
            <span>Քարտ {currentIndex + 1} / {questions.length}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
              Հարց #{currentQ.id}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-indigo-600 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main Flashcard */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden p-6 sm:p-8 space-y-6">
        {/* Section title */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
              {currentQ.sectionTitleEs}
            </span>
            <p className="text-xs text-slate-500 font-medium">
              {currentQ.sectionTitleHy}
            </p>
          </div>
          {currentStatus && (
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              currentStatus === 'mastered'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-800'
            }`}>
              {currentStatus === 'mastered' ? '✅ Յուրացված է' : '🔄 Կրկնել'}
            </span>
          )}
        </div>

        {/* Context if present */}
        {currentQ.contextEs && (
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700">
            <p className="font-semibold text-slate-600 mb-1">📋 Իրավիճակ՝</p>
            <p className="italic font-medium">{currentQ.contextEs}</p>
            {showTranslation && currentQ.contextHy && (
              <p className="mt-1 pt-1 border-t border-slate-200 text-slate-600">
                🇦🇲 {currentQ.contextHy}
              </p>
            )}
          </div>
        )}

        {/* Spanish Prompt Box - Clickable */}
        <div
          onClick={() => setShowTranslation(prev => !prev)}
          className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border-2 select-text ${
            showTranslation
              ? 'bg-indigo-50/70 border-indigo-300'
              : 'bg-slate-50/80 hover:bg-indigo-50/40 border-slate-200 hover:border-indigo-300'
          }`}
        >
          <div className="flex items-center justify-between gap-3 text-xs text-slate-500 mb-2">
            <span className="font-bold text-indigo-700 flex items-center gap-1.5">
              🇪🇸 Իսպաներեն առաջադրանք (սեղմիր թարգմանության համար)
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakSpanish(currentQ.promptEs);
              }}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
              title="Լսել իսպաներեն արտասանությունը"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-relaxed">
            {currentQ.promptEs}
          </div>

          {currentQ.hintEs && !showAnswer && (
            <p className="mt-3 text-sm sm:text-base text-slate-600 italic">
              💡 {currentQ.hintEs}
            </p>
          )}

          {/* Armenian Translation Box */}
          {showTranslation ? (
            <div className="mt-4 pt-4 border-t border-indigo-200 text-base sm:text-xl font-bold text-indigo-950 bg-indigo-100/70 p-4 rounded-xl leading-relaxed">
              <span className="text-xs sm:text-sm text-indigo-800 uppercase font-extrabold block mb-1">
                🇦🇲 Հայերեն թարգմանություն՝
              </span>
              <p>{currentQ.promptHy}</p>
              {currentQ.hintHy && (
                <p className="mt-1 text-sm text-indigo-850 font-medium">
                  Հուշում՝ {currentQ.hintHy}
                </p>
              )}
            </div>
          ) : (
            <div className="mt-4 text-xs sm:text-sm text-slate-500 font-semibold flex items-center justify-end gap-1">
              <span>👆 Սեղմիր այստեղ՝ թարգմանությունը տեսնելու համար</span>
            </div>
          )}
        </div>

        {/* Input to test oneself */}
        {!showAnswer && (
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-bold text-slate-700">
              Մուտքագրի՛ր քո ենթադրյալ պատասխանը՝
            </label>
            <input
              type="text"
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              placeholder="Օրինակ՝ Enunciativa, Sustantivo, Referencial..."
              className="w-full px-4 py-3 text-base sm:text-lg bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') setShowAnswer(true);
              }}
            />
          </div>
        )}

        {/* SEPARATE ANSWER BUTTON */}
        <div>
          <button
            onClick={() => setShowAnswer(prev => !prev)}
            className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-base sm:text-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
              showAnswer
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            <span>{showAnswer ? 'Փակել պատասխանը' : '✅ Տեսնել պատասխանը / Ver respuesta'}</span>
          </button>
        </div>

        {/* ANSWER REVEALED */}
        {showAnswer && (
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 text-emerald-950 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-800">
                ✅ Ճիշտ պատասխան
              </span>
              <button
                onClick={() => speakSpanish(currentQ.answerEs)}
                className="p-1 text-emerald-700 hover:bg-emerald-100 rounded transition"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="text-2xl sm:text-3xl font-black text-emerald-950 leading-snug">
              🇪🇸 {currentQ.answerEs}
            </div>

            <div className="text-lg sm:text-2xl font-bold text-emerald-900 bg-white/85 p-4 rounded-xl border border-emerald-200 leading-relaxed">
              🇦🇲 {currentQ.answerHy}
            </div>

            {(currentQ.explanationEs || currentQ.explanationHy) && (
              <div className="text-sm sm:text-base text-emerald-950 bg-emerald-100/70 p-3.5 rounded-xl border border-emerald-200 space-y-1.5 leading-relaxed">
                {currentQ.explanationEs && (
                  <p><strong className="font-bold">Explicación:</strong> {currentQ.explanationEs}</p>
                )}
                {currentQ.explanationHy && (
                  <p><strong className="font-bold">Բացատրություն:</strong> {currentQ.explanationHy}</p>
                )}
              </div>
            )}

            {/* Self-check buttons */}
            <div className="pt-3 border-t border-emerald-200 flex items-center justify-between gap-3">
              <button
                onClick={() => onStatusChange(currentQ.id, 'review')}
                className="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-amber-900 border border-amber-300 hover:bg-amber-50 flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-amber-600" /> Կրկնել / Repasar
              </button>
              <button
                onClick={handleMastered}
                className="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center gap-1.5 transition cursor-pointer shadow-sm"
              >
                <CheckCircle className="w-4 h-4" /> Գիտեի / Sabía!
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Jump indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2">
        <span>Օգտագործիր սլաքները առաջ կամ ետ գնալու համար</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentIndex(0)}
            className="hover:text-slate-800 underline"
          >
            Սկիզբ (#1)
          </button>
          <span>•</span>
          <button
            onClick={() => setCurrentIndex(questions.length - 1)}
            className="hover:text-slate-800 underline"
          >
            Վերջ (#110)
          </button>
        </div>
      </div>
    </div>
  );
};
