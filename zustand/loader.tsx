import create from "zustand";
import { devtools } from "zustand/middleware";

const useLoaderStore = create((set) => ({
  show: false,
  setShow: (status: boolean) => {
    set((state) => ({
      ...state,
      show: status,
    }));
  }
}));
export default useLoaderStore;
