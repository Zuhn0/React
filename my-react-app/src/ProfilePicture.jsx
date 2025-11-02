function ProfilePicture(){
  const imageurl='./src/assets/image.jpg'
  const handleClick=(e)=>e.target.style.display="none";
  return(<img onClick={(e)=>handleClick(e)} src={imageurl}></img>)
}
export default ProfilePicture