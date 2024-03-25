import bgImage from '../../../accets/Img/naturale.png'
import apricotSpirit from '../../../accets/Img/apricotSpirit.png'
import grapeSpirit from '../../../accets/Img/grapeSpirit.png'
import mulberispirit from '../../../accets/Img/mulberispirit.png'


export const homeslider = [{
    
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "image": bgImage
},
{
  
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "image": bgImage
   
},
{

    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "image": bgImage

},
]

let product = [apricotSpirit, grapeSpirit,mulberispirit,apricotSpirit, grapeSpirit,mulberispirit,apricotSpirit, grapeSpirit,mulberispirit]

export const homeProduct = product.map((imageUrl, index) => ({
    "id": index + 1,
    "title": product[index],
    "image":imageUrl,
  }));

