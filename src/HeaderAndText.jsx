import "./HeaderAndText.css"

function HeaderAndText({children, title, style, className, anotherClassName}){
    return(
        <div className={`Content ${className}`}style ={style}>
                {title && <h1>{title}</h1>}
                <p className= "narrowparagraph">{children}</p>
            </div>
    );

}

export default HeaderAndText


