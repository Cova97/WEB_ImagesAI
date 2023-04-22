import React, { useState } from "react";
import axios from 'axios';

const App = () => {
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = e.target.elements.prompt.value;
        const data = { prompt: prompt };
        const config = {
            url: 'https://api-imagesai.onrender.com',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
        };
        const response = await axios(config).catch((err) => err);
        console.log(response)
        setResponse(response.data);
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Prompt:
            <input type="text" name="prompt" />
        </label>
        <button type="submit">Submit</button>
        </form>
        {response && (
        <div>
            <h2>Imagen generada:</h2>
            <img src={response.data[0].url} width={200} height={200} />
        </div>
        )}
    </div>
    );
};

export default App;
