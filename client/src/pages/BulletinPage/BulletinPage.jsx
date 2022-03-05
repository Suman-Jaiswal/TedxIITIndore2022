import AccordionItem from "../../components/Bulletin/AccordionItem";
import AccordionWrapper from "../../components/Bulletin/AccordionWrapper";
import { newsdata } from '../../data/news'

export default function BulletinPage() {

    const [news, setNews] = useState([])

    useEffect(() => {
        setNews(newsdata)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="bulletin bg-light">
        <div className="container text-dark">
            <br/>
        <div className="h2 ps-2 mb-2" >Bulletin </div>
             <AccordionWrapper>
             {news.map((item, index)=>(<AccordionItem key={index} index={index} title={item.title} description={item.description}/>))}
             </AccordionWrapper>    
        </div>
    </section>
);
}
