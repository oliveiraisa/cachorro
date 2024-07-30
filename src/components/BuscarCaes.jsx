import { useState, useEffect } from "react"

export default function BuscarCaes(){
    const [caes, setCaes] = useState(null);

    const fetchData = async () => { 
        
        try{
            const response = await 
            fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&#39`)
            const data = await response.json()
            setCaes(data);
        }catch(error){
        console.error('Erro: ', error)
        }
    };

    useEffect(() =>{
        fetchData()
    }, [])

    return (
        <div className="imagem">
            {caes && (
                <div>
                    <img src={caes[0].url} alt="Cãozinho" />
                </div>
            )}
            <button onClick={fetchData}>Clicar</button>
        </div>
    );
}
