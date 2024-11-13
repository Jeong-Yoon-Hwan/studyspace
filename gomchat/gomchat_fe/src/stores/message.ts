import { create } from "zustand";

const useMessageStore = create((set) => ({
  message: "",
  setMessage: (text: any) => set(() => ({ message: text })),
}));

export default useMessageStore;
