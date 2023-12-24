import MainPage from "./../../pages/MainPage/MainPage";
import Playbar from "./../../components/Playbar/Playbar";
import style from "./../../global.module.scss";
const Pleer = () => {
    return ( 
        <>
        <Playbar />
        <div className={style.wrapper}>
        <MainPage />
          
        </div>
        
        </>
     );
}
 
export default Pleer;