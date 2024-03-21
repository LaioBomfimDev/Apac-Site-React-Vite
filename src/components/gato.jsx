import '../css/style3.css'

 function Gato({imageUrl, altText, className, title }){
    return(
        <> 
        <img src={imageUrl} alt={altText} className={className} />
        {title} 
        </>
    );
}; export default Gato;