import { useEffect, useState } from "react";
import axios from "axios";

import FAQCard from "../components/FAQCard";

function Home() {

    const [faqs, setFaqs] = useState([]);

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

    return (

        <div style={{ padding: "40px" }}>

            <h1>Smart FAQ System</h1>

            {faqs.map((faq) => (

                <FAQCard key={faq._id} faq={faq} />

            ))}

        </div>
    );
}

export default Home;