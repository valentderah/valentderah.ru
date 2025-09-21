import React from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

type Language = "ru" | "en";

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageSwitcher = ({ language, setLanguage }: LanguageSwitcherProps) => {
  return (
    <div className="flex gap-1">
      <Button
        variant={language === "ru" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("ru")}
        className="px-3"
      >
        RU
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="px-3"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;