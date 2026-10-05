import React, { useState } from 'react';
import { Volume2, BookOpen, Eye, EyeOff } from 'lucide-react';
import { EXAM_READING_TEXT } from './examTopics2.ts';
import { speakSpanish } from './speechHelper.ts';

interface GranTextViewerProps {
  onJumpToQuestion?: (id: number) => void;
}

export const GranTextViewer: React.FC<GranTextViewerProps> = ({ onJumpToQuestion }) => {
  const [showArmenian, setShowArmenian] = useState(true);
  const [activeTab, setActiveTab] = useState<'both' | 'es' | 'hy'>('both');
  const [highlightKeyParts, setHighlightKeyParts] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-xs">
              <BookOpen className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                📝 {EXAM_READING_TEXT.titleEs}
              </h2>
              <p className="text-xs sm:text-sm text-indigo-200 font-medium">
                🇦🇲 {EXAM_READING_TEXT.titleHy} (Հարցեր 91–105)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => speakSpanish(EXAM_READING_TEXT.spanishText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-xs transition cursor-pointer"
            >
              <Volume2 className="w-4 h-4" /> Լսել իսպաներեն
            </button>
            <button
              onClick={() => setHighlightKeyParts(prev => !prev)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-xs transition cursor-pointer ${
                highlightKeyParts
                  ? 'bg-amber-400 text-slate-900 font-bold'
                  : 'bg-white/15 hover:bg-white/25 text-white'
              }`}
            >
              ✨ {highlightKeyParts ? 'Առանձնացված է' : 'Նշել կարևոր մասերը'}
            </button>
          </div>
        </div>

        {/* View mode buttons */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/15 text-xs">
          <span className="text-indigo-200 font-medium">Տեսք՝</span>
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
              activeTab === 'both' ? 'bg-white text-indigo-900 font-bold' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            🇪🇸 + 🇦🇲 Կողք-կողքի
          </button>
          <button
            onClick={() => setActiveTab('es')}
            className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
              activeTab === 'es' ? 'bg-white text-indigo-900 font-bold' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            🇪🇸 Միայն իսպաներեն
          </button>
          <button
            onClick={() => setActiveTab('hy')}
            className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
              activeTab === 'hy' ? 'bg-white text-indigo-900 font-bold' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            🇦🇲 Միայն հայերեն
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Spanish Text Card */}
          {(activeTab === 'both' || activeTab === 'es') && (
            <div className={`bg-white rounded-xl p-5 border border-slate-200 shadow-2xs ${activeTab === 'es' ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-indigo-700">
                  🇪🇸 Texto en español
                </span>
                <span className="text-slate-400 font-normal">
                  (Կարդա՛ ուշադիր)
                </span>
              </div>

              <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
                <p>
                  El sábado Pablo jugó un partido importante.{' '}
                  <span className={highlightKeyParts ? 'bg-amber-100 font-medium px-1 rounded text-amber-900' : ''}>
                    El campo era grande y estaba lleno de aficionados.
                  </span>{' '}
                  Antes del partido, su entrenador le dijo:
                </p>

                <div className={`border-l-3 border-indigo-500 pl-3.5 py-1 text-slate-700 italic ${highlightKeyParts ? 'bg-indigo-50/80 p-2 rounded-r-lg' : ''}`}>
                  <p>—Pablo, juega tranquilo y ayuda a tus compañeros.</p>
                  <p>—De acuerdo. Estoy un poco nervioso, pero voy a intentarlo.</p>
                </div>

                <p>
                  Durante la primera parte, el equipo contrario marcó un gol. Sin embargo, Pablo y sus compañeros siguieron luchando. En la segunda parte, Pablo marcó dos goles y su equipo ganó 2-1.
                </p>

                <div className={`p-3 rounded-lg border text-sm ${highlightKeyParts ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium' : 'bg-slate-50 border-slate-200'}`}>
                  <p>
                    <span className="font-semibold text-indigo-900">En mi opinión,</span> practicar un deporte de equipo es muy positivo{' '}
                    <span className="underline decoration-indigo-300">porque enseña a colaborar, respetar las reglas y ayudar a los demás.</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Armenian Text Card */}
          {(activeTab === 'both' || activeTab === 'hy') && (
            <div className={`bg-white rounded-xl p-5 border border-slate-200 shadow-2xs ${activeTab === 'hy' ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-purple-700">
                  🇦🇲 Հայերեն թարգմանություն
                </span>
                <span className="text-slate-400 font-normal">
                  (Օգնող թարգմանություն)
                </span>
              </div>

              <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
                <p>
                  Շաբաթ օրը Պաբլոն կարևոր ֆուտբոլային խաղ խաղաց։{' '}
                  <span className={highlightKeyParts ? 'bg-amber-100 font-medium px-1 rounded text-amber-900' : ''}>
                    Խաղադաշտը մեծ էր և լի էր երկրպագուներով։
                  </span>{' '}
                  Խաղից առաջ նրա մարզիչն ասաց.
                </p>

                <div className={`border-l-3 border-purple-500 pl-3.5 py-1 text-slate-700 italic ${highlightKeyParts ? 'bg-purple-50/80 p-2 rounded-r-lg' : ''}`}>
                  <p>— Պաբլո՛, հանգիստ խաղա և օգնիր թիմակիցներիդ։</p>
                  <p>— Լավ։ Մի քիչ նյարդայնացած եմ, բայց կփորձեմ։</p>
                </div>

                <p>
                  Առաջին խաղակեսում հակառակորդ թիմը գոլ խփեց։ Սակայն Պաբլոն և նրա թիմակիցները շարունակեցին պայքարել։ Երկրորդ խաղակեսում Պաբլոն երկու գոլ խփեց, և նրա թիմը հաղթեց 2։1 հաշվով։
                </p>

                <div className={`p-3 rounded-lg border text-sm ${highlightKeyParts ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium' : 'bg-slate-50 border-slate-200'}`}>
                  <p>
                    <span className="font-semibold text-purple-900">Իմ կարծիքով՝</span> թիմային սպորտով զբաղվելը շատ օգտակար է,{' '}
                    <span className="underline decoration-purple-300">որովհետև այն սովորեցնում է համագործակցել, պահպանել կանոնները և օգնել մյուսներին։</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend for child */}
        {highlightKeyParts && (
          <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center gap-4">
            <span className="font-semibold text-slate-800">Գունային հուշումներ՝</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-200 border border-amber-300"></span>
              Նկարագրական հատված (Descriptivo, հարց 92)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-indigo-200 border border-indigo-300"></span>
              Երկխոսություն (Diálogo, հարց 93)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-200 border border-emerald-300"></span>
              Կարծիք և Փաստարկ (Opinión y Argumento, հարցեր 103-105)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
