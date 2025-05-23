import { useContext } from "react";
import { StoryContext } from "../contexts/storyContext";

export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
