import { useState } from "react";
import Article from "./Article";

function Articles()
{
    //let[articles, setArticles] = useState
    let[articles] = useState
    (
        [
            {name:"Components",title:"Компоненты, аналогичные функциям"},
            {name:"Props",title:"Обеспечивают передачу параметров в компоненты"},
            {name:"State",title:"Описывает внутреннее состояние компонента"},
        ]
    );
    return(
        <div>
            <h2>Articles</h2>
            {
                articles.map
                (
                    (item, index) => (<Article key={index} name={item.name} title={item.title} />)
                )
            }
        </div>
    )
}
export default Articles;