import '../css/style3.css'

 function Cachorro({imageUrl, altText, className, title }){
    return(
        <> 
        <img src={imageUrl} alt={altText} className={className} />
        {title} 
        </>
    );
}; export default Cachorro;