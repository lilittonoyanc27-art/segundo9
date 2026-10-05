/**
 * Web Speech synthesis helper for Spanish pronunciation
 */

export function speakSpanish(text: string): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop ongoing speech

    // Clean up text (remove markdown symbols, brackets, etc.)
    const cleaned = text
      .replace(/[—–]/g, ' ')
      .replace(/[*_#`[\]()]/g, '')
      .trim();

    if (!cleaned) return false;

    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9; // Slightly slower, great for children learning
    utterance.pitch = 1.0;

    // Pick a natural Spanish voice if available
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith('es'));
    if (esVoice) {
      utterance.voice = esVoice;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech error:', err);
    return false;
  }
}
