// Simple localStorage-backed persistence helpers
// Note: Client-side only persistence suitable for demo. Not for production auth/data.

export type Json = any;

function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function saveJSON<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

// Keys
const K = {
  projects: 'adarshnet.projects',
  feedbacks: 'adarshnet.feedbacks',
  chatbot: 'adarshnet.chatbot',
  villageSelected: 'adarshnet.village.selected',
};

// Projects
export function getPersistedProjects<T extends { id: string }>(defaults: T[]): T[] {
  const extra = loadJSON<T[]>(K.projects, []);
  // Merge by id: defaults first, then extras that don't conflict
  const byId = new Map(defaults.map(p => [p.id, p] as const));
  for (const p of extra) if (!byId.has(p.id)) byId.set(p.id, p);
  return Array.from(byId.values());
}

export function addProject<T extends { id: string }>(project: T) {
  const list = loadJSON<T[]>(K.projects, []);
  list.push(project);
  saveJSON(K.projects, list);
}

// Feedbacks
export function getPersistedFeedbacks<T extends { id: string }>(defaults: T[]): T[] {
  const extra = loadJSON<T[]>(K.feedbacks, []);
  const byId = new Map(defaults.map(f => [f.id, f] as const));
  for (const f of extra) if (!byId.has(f.id)) byId.set(f.id, f);
  return Array.from(byId.values());
}

export function addFeedback<T extends { id: string }>(feedback: T) {
  const list = loadJSON<T[]>(K.feedbacks, []);
  list.push(feedback);
  saveJSON(K.feedbacks, list);
}

// Chatbot
export interface ChatMessage { text: string; isUser: boolean }
export interface ChatbotState { isOpen: boolean; messages: ChatMessage[] }

export function loadChatbotState(fallback: ChatbotState): ChatbotState {
  return loadJSON<ChatbotState>(K.chatbot, fallback);
}

export function saveChatbotState(state: ChatbotState) {
  saveJSON(K.chatbot, state);
}

// Village selection
export function loadSelectedVillage(): string | null {
  return loadJSON<string | null>(K.villageSelected, null);
}

export function saveSelectedVillage(id: string | null) {
  saveJSON(K.villageSelected, id);
}
