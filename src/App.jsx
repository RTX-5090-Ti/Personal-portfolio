import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

export default function App() {
  const { i18n } = useTranslation();
  const language =
    i18n.resolvedLanguage?.toLowerCase().startsWith("vi") ||
    i18n.language?.toLowerCase().startsWith("vi")
      ? "vi"
      : "en";

  const setLanguage = (nextLanguageOrUpdater) => {
    const nextLanguage =
      typeof nextLanguageOrUpdater === "function"
        ? nextLanguageOrUpdater(language)
        : nextLanguageOrUpdater;

    i18n.changeLanguage(nextLanguage);
  };

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const content = i18n.getResourceBundle(language, "translation");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              language={language}
              setLanguage={setLanguage}
              content={content}
            />
          }
        />
        <Route
          path="/projects/:projectSlug"
          element={
            <ProjectDetailPage
              language={language}
              setLanguage={setLanguage}
              content={content}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTopButton />
    </>
  );
}
