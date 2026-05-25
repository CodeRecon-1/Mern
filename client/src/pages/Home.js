import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import FAQCard from "../components/FAQCard";

function Home() {

    const [faqs, setFaqs] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {

        fetchFaqs();

    }, []);

    const fetchFaqs = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/faqs"
            );

            setFaqs(res.data);

        } catch (error) {

            console.log(error);
        }
    };  

    const searchFaqs = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/faqs/search/${search}`);
            setFaqs(res.data);

        }catch(error) {
        console.log(error);
    } 
    };

    return (

        <div style={{ padding: "40px" }}>

            <h1>Smart FAQ System</h1>
                <Link to="/trending">

                    <button
                        style={{
                            marginBottom: "20px",
                            padding: "10px 15px"
                        }}
                    >
                        View Trending Missing Topics
                    </button>

                </Link>
            <div style={{ marginBottom: "20px" }}>

                <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "300px"
                    }}
                />

                <button
                    onClick={searchFaqs}
                    style={{
                        marginLeft: "10px",
                        padding: "10px"
                    }}
                >
                    Search
                </button>

            </div>
            {faqs.map((faq) => (

                <FAQCard key={faq._id} faq={faq} />

            ))}

        </div>
    );
}

export default Home;