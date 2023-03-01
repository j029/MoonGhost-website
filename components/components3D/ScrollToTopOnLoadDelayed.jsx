import { useEffect} from "react";

export const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  export default function ScrollToTopOnLoadDelayed() {
    
    useEffect(() => {
        setTimeout(goToTop(), 5000);
      }, []);

  }
  