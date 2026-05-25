// const { useEffect, useState } = require("react");

import { useEffect, useState } from "react";
import axios from "axios";

function TrendingMissing() {
    const [topics , setTopics] = useState([]);
    useEffect(() => {
        feetchTrendingTopics();
    }, []);

    const feetchTrendingTopics = async() => {
        try {
            const res = await axios.get( "http://localhost:5000/api/faqs/missing/trending");
            setTopics(res.data);
        }catch(error) {
            console.log(error);
        }
    };

     return (

        <div style={{ padding: "40px" }}>

            <h1>🔥 Trending Missing Topics</h1>

            <p>
                Questions users search for but
                still don't have answers.
            </p>


            <div style={{ marginTop: "30px" }}>

                {topics.map((topic, index) => (

                    <div
                        key={topic._id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "20px",
                            marginBottom: "15px",
                            borderRadius: "12px"
                        }}
                    >

                        <h3>
                            #{index + 1} {topic.query}
                        </h3>

                        <p>
                            🔍 {topic.count} searches
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default TrendingMissing;
