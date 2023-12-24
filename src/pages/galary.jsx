import { photo } from "./../Helpers/Photo-list";
import GalaryPhoto from "../Components/Galary/Galary-photo"


const Galary = () => {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Фото</h2>
                    <ul className="projects">

                    {photo.map((photo) =>{
                        return <GalaryPhoto key={photo.id} title={photo.title} img={photo.img}/>;
                    })}

                    </ul>
                </div>
                
            </main>
        </div>
    );
}

export default Galary;