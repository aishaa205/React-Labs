import { createContext} from "react";

export const LanguageContext = createContext();
export default LanguageContext;
// export function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState('en'); // default hwa el english
//   const [direction, setDirection] = useState('ltr');
//   useEffect(() => {
//     if (language === 'ar') {
//       setDirection('rtl');
//     } else {
//       setDirection('ltr');
//     }
//     localStorage.setItem('appLanguage', language);
//   }, [language]);

//   return (
//    <>
//     <LanguageContext.Provider value={{ language, setLanguage, direction }}>
//     <div dir={direction}>
//     {children}
//       </div>
//     </LanguageContext.Provider>
//    </>
//   );
// }