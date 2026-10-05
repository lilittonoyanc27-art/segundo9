import React, { useState } from 'react';
import { Volume2, Sparkles, Brain, Check, Eye } from 'lucide-react';
import { CHEATSHEET_DATA } from './examTopics2.ts';
import { speakSpanish } from './speechHelper.ts';

export const CheatsheetViewer: React.FC = () => {
  const [revealedArmenian, setRevealedArmenian] = useState<Record<string, boolean>>({});

  const toggleArmenian = (key: string) => {
    setRevealedArmenian(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const revealAll = () => {
    const allKeys: Record<string, boolean> = {};
    CHEATSHEET_DATA.forEach((group, gIdx) => {
      group.items.forEach((_, iIdx) => {
        allKeys[`${gIdx}-${iIdx}`] = true;
      });
    });
    setRevealedArmenian(allKeys);
  };

  const hideAll = () => {
    setRevealedArmenian({});
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xs">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black">
                🧠 LO QUE TIENE QUE SABER SIN DUDAR
              </h2>
              <p className="text-amber-100 text-sm font-medium">
                🇦🇲 ԱՅՆ, ԻՆՉ ՊԵՏՔ Է ԱՆՊԱՅՄԱՆ ԻՄԱՆԱԼ ՔՆՆՈՒԹՅԱՆ ՀԱՄԱՐ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={revealAll}
              className="px-3.5 py-1.5 rounded-xl bg-white text-orange-950 font-bold text-xs hover:bg-orange-50 transition cursor-pointer shadow-xs"
            >
              Բացել բոլոր թարգմանությունները
            </button>
            <button
              onClick={hideAll}
              className="px-3.5 py-1.5 rounded-xl bg-black/20 hover:bg-black/30 text-white font-medium text-xs transition cursor-pointer"
            >
              Փակել
            </button>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed bg-black/10 p-3 rounded-xl">
          💡 <strong>Կարևոր խորհուրդ քննության համար՝</strong> Քննությանը պետք է ոչ միայն սահմանումները հիշել, այլ մեկ տեքստի մեջ միաժամանակ կարողանալ գտնել՝ <em>función del lenguaje, modalidad, emisor/receptor, sustantivos, adjetivos, verbos, pronombres, determinantes, nexos և տեքստի տեսակը</em>:
        </p>
      </div>

      {/* Cheatsheet Groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CHEATSHEET_DATA.map((group, gIdx) => (
          <div
            key={gIdx}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col"
          >
            <div className="bg-slate-900 text-white p-4">
              <h3 className="font-bold text-sm text-amber-300">
                {group.titleEs}
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                🇦🇲 {group.titleHy}
              </p>
            </div>

            <div className="p-4 divide-y divide-slate-100 flex-1 space-y-3">
              {group.items.map((item, iIdx) => {
                const key = `${gIdx}-${iIdx}`;
                const isRevealed = !!revealedArmenian[key];

                return (
                  <div
                    key={iIdx}
                    onClick={() => toggleArmenian(key)}
                    className="pt-3 first:pt-0 cursor-pointer group hover:bg-slate-50 p-2 rounded-xl transition"
                    title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-medium text-slate-700">
                        {item.questionEs}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(`${item.questionEs} ${item.answerEs}`);
                        }}
                        className="p-1 text-slate-400 hover:text-slate-800 transition"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-1">
                      <div className="text-sm font-bold text-indigo-700">
                        ➔ {item.answerEs}
                      </div>
                      <span className="text-slate-400 text-xs shrink-0 group-hover:text-indigo-600">
                        {isRevealed ? '🇦🇲 Բացված' : '👆 Թարգմանել'}
                      </span>
                    </div>

                    {/* Armenian Translation */}
                    {isRevealed && (
                      <div className="mt-2 text-xs bg-indigo-50 border border-indigo-100 p-2 rounded-lg text-indigo-950 animate-in fade-in">
                        <div className="text-slate-600 font-medium">
                          🇦🇲 {item.questionHy}
                        </div>
                        <div className="font-bold text-indigo-900 mt-0.5">
                          ➔ {item.answerHy}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
