import { useState } from "react";

function FAQCard({ faq }) {

    const [open, setOpen] = useState(false);

    return (

        <div
            style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "10px"
            }}
        >

            <div
                onClick={() => setOpen(!open)}
                style={{
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                {faq.question}
            </div>

            {open && (
                <div style={{ marginTop: "10px" }}>
                    {faq.answer}
                </div>
            )}

        </div>
    );
}

export default FAQCard;