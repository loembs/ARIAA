import { useSyncExternalStore } from "react";

export type BookingState = {
  serviceId?: string;
  date?: string; // ISO yyyy-mm-dd
  time?: string;
  coiffeuseId?: string;
  client?: { firstName: string; lastName: string; email: string; phone: string; message?: string };
};

const KEY = "aria_booking";

function load(): BookingState {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

let state: BookingState = load();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const bookingStore = {
  get: () => state,
  set(patch: Partial<BookingState>) {
    state = { ...state, ...patch };
    if (typeof window !== "undefined") sessionStorage.setItem(KEY, JSON.stringify(state));
    emit();
  },
  reset() {
    state = {};
    if (typeof window !== "undefined") sessionStorage.removeItem(KEY);
    emit();
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useBooking(): BookingState {
  return useSyncExternalStore<BookingState>(
    (l) => bookingStore.subscribe(l),
    () => state,
    () => ({}) as BookingState,
  );
}

// Mock availability — pseudo-random based on date/time so it's stable per slot.
export function isSlotFull(date: string, time: string) {
  let h = 0;
  for (const c of date + time) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  // ~20% of slots are full
  return h % 5 === 0;
}
