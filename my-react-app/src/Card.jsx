import Profile from "./assets/image.jpg"
function Card(){
   return(
     <div className="card">
     <img className="card-image" src={Profile} alt="Profile picture"></img>
     <h2 className="card-title">Alberno</h2>
     <p className="card-text">I am TPR of UG-2027 and play video games</p>
     </div>
   );

}

export default Card