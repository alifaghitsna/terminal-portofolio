import Output from "../output/output"

function About() {
    return (
        <>     
            <Output>
                <span>Hi, my name is <span className="text-teal-500 font-bold">Alif Aghitsna Mahara</span>, a <span className="text-teal-500 font-bold">full-stack web developer.</span></span>
            </Output>

            <Output>
                <span>An undergraduate student who is passionate about coding and learning new technologies.</span>
            </Output>
            
            <br />

            <Output>
                <span>I&apos;m open for new opportunities and would love to chat and share my latest coding adventures.</span>
            </Output>

            <Output>
                <span>Feel free to reach out to me:</span>
            </Output>

            <br />

            <Output>
                <span>Email: <span className="text-teal-500 font-bold">alifmahara60@gmail.com</span></span>
            </Output>

            <Output>
                <span>LinkedIn: <span className="text-teal-500 font-bold underline cursor-pointer">https://www.linkedin.com/in/alif-aghitsna-mahara-a2066b421/</span></span>
            </Output>

            <Output>
                <span>GitHub: <span className="text-teal-500 font-bold underline cursor-pointer">https://github.com/alifaghitsna</span></span>
            </Output>

            <br />
            
            <Output>
                <span>Thank you!</span>
            </Output>
        </>
    );
}

export default About