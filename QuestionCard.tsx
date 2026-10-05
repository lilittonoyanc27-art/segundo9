import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, CheckCircle, RotateCcw, Lightbulb, Eye, EyeOff } from 'lucide-react';
import { QuestionItem } from './examTopics.ts';
import { speakSpanish } from './speechHelper.ts';

interface QuestionCardProps {
  question: QuestionItem;
  globalShowTranslation: boolean;
  status?: 'mastered' | 'review';
  onStatusChange: (id: number, status: 'mastered' | 'review' | undefined) => void;
  compact?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  globalShowTranslation,
  status,
  onStatusChange,
  compact = false,
}) => {
  const [localShowTranslation, setLocalShowTranslation] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAttempt, setUserAttempt] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const isTranslationVisible = globalShowTranslation || localShowTranslation;

  const handleSpeak = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSpeaking(true);
    speakSpanish(text);
    setTimeout(() => setIsSpeaking(false), 2000);
  };

  const toggleTranslation = () => {
    setLocalShowTranslation(prev => !prev);
  };

  const toggleAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <div
      className={`rounded-2xl transition-all duration-200 border ${
        status === 'mastered'
          ? 'bg-emerald-50/60 border-emerald-300 shadow-sm'
          : status === 'review'
          ? 'bg-amber-50/60 border-amber-300 shadow-sm'
          : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
      } ${compact ? 'p-4' : 'p-5 sm:p-6'} flex flex-col gap-4`}
    >
      {/* Top Header: Badge, Category, Topic & Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-base shadow-xs">
            #{question.id}
          </span>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
              {question.sectionTitleEs}
            </span>
            <span className="text-xs sm:text-sm text-slate-500 font-medium">
              {question.sectionTitleHy}
            </span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-1.5">
          {status === 'mastered' && (
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle className="w-4 h-4" /> Գիտեմ / Sabido
            </span>
          )}
          {status === 'review' && (
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full bg-amber-100 text-amber-800">
              <RotateCcw className="w-4 h-4" /> Կրկնել / Repasar
            </span>
          )}
        </div>
      </div>

      {/* Context if available (e.g. story background for Elementos or Gran Texto) */}
      {question.contextEs && (
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-sm sm:text-base text-slate-700">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wide">
              📋 Իրավիճակ / Situación
            </span>
            <button
              onClick={(e) => handleSpeak(question.contextEs || '', e)}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition"
              title="Լսել իսպաներեն արտասանությունը"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <p className="font-semibold text-slate-800 italic text-base sm:text-lg leading-relaxed">{question.contextEs}</p>
          {isTranslationVisible && question.contextHy && (
            <p className="text-slate-700 mt-2.5 pt-2.5 border-t border-slate-200 text-sm sm:text-base font-medium leading-relaxed">
              🇦🇲 {question.contextHy}
            </p>
          )}
        </div>
      )}

      {/* SPANISH QUESTION PROMPT - CLICKABLE TO REVEAL ARMENIAN */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
          <span className="font-bold flex items-center gap-1.5 text-indigo-700">
            🇪🇸 Առաջադրանք (սեղմիր տեքստի վրա թարգմանության համար)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => handleSpeak(question.promptEs, e)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-semibold border transition ${
                isSpeaking
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
              title="Լսել իսպաներեն"
            >
              <Volume2 className="w-4 h-4" /> Լսել
            </button>
            <button
              onClick={toggleTranslation}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs sm:text-sm font-bold border transition ${
                isTranslationVisible
                  ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              {isTranslationVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {isTranslationVisible ? 'Թաքցնել' : '🇦🇲 Թարգմանել'}
            </button>
          </div>
        </div>

        {/* The Clickable Spanish Text Block */}
        <div
          onClick={toggleTranslation}
          className={`cursor-pointer rounded-2xl p-5 transition-all duration-150 border-2 select-text shadow-2xs ${
            isTranslationVisible
              ? 'bg-indigo-50/60 border-indigo-300 text-indigo-950'
              : 'bg-slate-50 hover:bg-indigo-50/40 border-slate-300 text-slate-900'
          }`}
          title="Սեղմիր այստեղ՝ հայերեն թարգմանությունը տեսնելու համար"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-lg sm:text-2xl font-bold whitespace-pre-line leading-relaxed tracking-tight">
              {question.promptEs}
            </p>
            <span className="shrink-0 text-slate-500 text-xs sm:text-sm bg-white px-2.5 py-1 rounded-lg border border-slate-300 shadow-2xs font-semibold">
              👆 {isTranslationVisible ? '🇦🇲 Բաց է' : 'Թարգմանել'}
            </span>
          </div>

          {/* Hint if present */}
          {question.hintEs && !showAnswer && (
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium italic">
              💡 Հուշում՝ {question.hintEs}
            </p>
          )}

          {/* REVEALED ARMENIAN TRANSLATION */}
          {isTranslationVisible && (
            <div className="mt-4 pt-3.5 border-t border-indigo-200 text-base sm:text-lg font-semibold text-indigo-950 bg-indigo-100/70 p-3.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-indigo-800 font-bold mb-1.5">
                🇦🇲 Հայերեն թարգմանություն՝
              </div>
              <p className="whitespace-pre-line leading-relaxed">{question.promptHy}</p>
              {question.hintHy && (
                <p className="mt-1.5 text-xs sm:text-sm text-indigo-800/90 font-medium">
                  Հուշում՝ {question.hintHy}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Child interactive input to practice before opening answer */}
      {!showAnswer && (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-semibold text-slate-600 flex items-center justify-between">
            <span>Քո պատասխանը (փորձիր ինքդ լուծել)՝</span>
            {userAttempt && (
              <button
                onClick={() => setUserAttempt('')}
                className="text-xs text-slate-400 hover:text-slate-600 underline"
              >
                մաքրել
              </button>
            )}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={userAttempt}
              onChange={(e) => setUserAttempt(e.target.value)}
              placeholder="Գրի՛ր քո պատասխանը այստեղ..."
              className="flex-1 px-4 py-2.5 text-sm sm:text-base bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 placeholder-slate-400"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowAnswer(true);
                }
              }}
            />
          </div>
        </div>
      )}

      {/* SEPARATE ANSWER BUTTON: "Տեսնել պատասխանը / Ver respuesta" */}
      <div className="pt-1 flex flex-col gap-3">
        <button
          onClick={toggleAnswer}
          className={`w-full py-3 px-5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-xs cursor-pointer ${
            showAnswer
              ? 'bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-300'
              : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-emerald-600/20'
          }`}
        >
          <Lightbulb className="w-5 h-5" />
          <span>{showAnswer ? 'Փակել պատասխանը / Ocultar respuesta' : '✅ Տեսնել պատասխանը / Ver respuesta'}</span>
          {showAnswer ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {/* EXPANDED ANSWER CONTENT */}
        {showAnswer && (
          <div className="bg-emerald-50/95 border-2 border-emerald-300 rounded-2xl p-5 text-emerald-950 flex flex-col gap-3.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-emerald-200/80 pb-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                ✅ Ճիշտ պատասխան / Respuesta correcta
              </span>
              <button
                onClick={(e) => handleSpeak(question.answerEs, e)}
                className="p-1.5 rounded-lg text-emerald-800 hover:bg-emerald-200 transition"
                title="Լսել ճիշտ պատասխանը"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="text-lg sm:text-2xl font-black text-emerald-950 whitespace-pre-line leading-snug">
              🇪🇸 {question.answerEs}
            </div>

            <div className="text-base sm:text-xl font-bold text-emerald-900 bg-white/85 p-3.5 rounded-xl border border-emerald-200 whitespace-pre-line leading-relaxed">
              🇦🇲 {question.answerHy}
            </div>

            {(question.explanationEs || question.explanationHy) && (
              <div className="text-xs sm:text-sm text-emerald-950 bg-emerald-100/70 p-3 rounded-xl border border-emerald-200 space-y-1.5 leading-relaxed">
                {question.explanationEs && (
                  <p>
                    <strong className="text-emerald-950 font-bold">Իսպաներեն մեկնաբանություն՝</strong> {question.explanationEs}
                  </p>
                )}
                {question.explanationHy && (
                  <p>
                    <strong className="text-emerald-950 font-bold">Հայերեն բացատրություն՝</strong> {question.explanationHy}
                  </p>
                )}
              </div>
            )}

            {/* Child Self-Grading Buttons */}
            <div className="mt-1 pt-2.5 border-t border-emerald-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs sm:text-sm font-bold text-emerald-900">
                Ինչպե՞ս պատասխանեցիր՝
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onStatusChange(question.id, 'review')}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                    status === 'review'
                      ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                      : 'bg-white hover:bg-amber-50 text-amber-900 border-amber-300'
                  }`}
                >
                  <RotateCcw className="w-4 h-4" /> Կրկնել / Repasar
                </button>
                <button
                  onClick={() => onStatusChange(question.id, 'mastered')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                    status === 'mastered'
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                      : 'bg-white hover:bg-emerald-50 text-emerald-900 border-emerald-300'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" /> Գիտեի / Sabía!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
