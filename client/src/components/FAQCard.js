import { useState } from "react";
import axios from "axios";
function FAQCard({ faq }) {

    const [open, setOpen] = useState(false);
    const [helpful, setHelpful] = useState(faq.helpful);
    const [confusing, setConfusing] = useState(faq.confusing);
    const markHelpful = async () => {
        try {
            const res = await axios.patch( `http://localhost:5000/api/faqs/${faq._id}/helpful`);
            setHelpful(res.data.helpful);

        }catch (error){
            console.log(error);
        }
    };
    const markConfusing = async () => {
        try {
        const res = await axios.patch(`http://localhost:5000/api/faqs/${faq._id}/confusing`);
        setConfusing(res.data.confusing);
        }catch(error) {
            console.log(error);
        }
    };

 return (

        <div
            style={{
                border: "1px solid #ccc",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "12px"
            }}
        >

            <div
                onClick={() => setOpen(!open)}
                style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "18px"
                }}
            >
                {faq.question}
            </div>


            {open && (

                <div style={{ marginTop: "15px" }}>

                    <p>{faq.answer}</p>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px"
                        }}
                    >

                        <button onClick={markHelpful}>
                            👍 Helpful {helpful}
                        </button>

                        <button onClick={markConfusing}>
                            🤔 Confusing {confusing}
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}

export default FAQCard;