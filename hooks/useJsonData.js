import { useEffect, useState } from "react";
import { useLanguage } from "../context/languageContext";

const useJsonData = (rawData) => {
  const language = useLanguage();
  const [data, setData] = useState(rawData[language]);
  useEffect(() => {
    setData(rawData[language]);
  }, [language]);
  return data;
};

export default useJsonData;
