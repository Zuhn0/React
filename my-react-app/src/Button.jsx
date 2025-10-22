
function Button(){
   
    const styles={
  backgroundColor: "hsl(200,100%,50%)",
  color:"wheat",
  padding:"10px 20 px",
  borderRadius: "5px",
  border:"none",
  cursor:"pointer",

    }

    return(
        <button className={styles.button}>Click me</button>
    );
 
}

export default Button

