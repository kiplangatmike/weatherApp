const { useState } = require("react");
const { default: fetchWeather } = require("./api/fetchWeather");

const Apps = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState([]);

    const handleSearch = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(search);
            setWeather(data);
            setSearch('');
        }
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="enter your timezone" onKeyPress={handleSearch} onChange={(e)=> setQuery(e.target.value)} value={search}/>
            </div>
        </div>
    )
} 