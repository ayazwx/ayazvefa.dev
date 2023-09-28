import React from "react"
import { Section } from "../components/Section";

const Home = (props) => {
    const { setIsEnableOrbitControls } = props;
    return (
        <div>
            <Section>
                <h1>Page 1</h1>
                <button onClick={() => setIsEnableOrbitControls(true)}>+</button>
            </Section>
            <Section>
                <h1>Page 2</h1>
            </Section>
            <Section>
                <h1>Page 3</h1>
            </Section>
            <Section>
                <h1>Page 4</h1>
            </Section>
        </div>
    )
};

export default Home;
