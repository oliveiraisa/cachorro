import { Link } from 'react-router-dom'; 

export default function Home(){
    return(
        <header>
            <nav>
                <ul>
                    <li> <Link to="/buscar-caes">Fotos de Cachorro</Link></li>
                </ul>
            </nav>
        </header>
        
       
    )
}