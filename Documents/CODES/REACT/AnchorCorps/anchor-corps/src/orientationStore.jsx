import { create } from "zustand";

const useOrientationStore = create((set) => {
  let orientation =
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";

  const updateOrientation = () => {
    // Determine the current orientation based on screen width and height
    orientation =
      window.innerWidth > window.innerHeight ? "landscape" : "portrait";

    // Update the state with the new orientation
    set({ orientation });
  };

  // Initial setup
  // Note: You may want to use this initial value for your component rendering
  set({ orientation });

  // Add event listener for window resize
  window.addEventListener("resize", updateOrientation);
  window.addEventListener("DOMContentLoaded", updateOrientation);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener("resize", updateOrientation);
    window.removeEventListener("DOMContentLoaded", updateOrientation);
  };
});

export default useOrientationStore;
