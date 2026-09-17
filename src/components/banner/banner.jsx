import Output from "../output/output"

function Banner() {
    const banner = [
        "            _                                                          ",
        "  /\\  | o _|_    /\\   _  |_  o _|_  _ ._   _.   |\\/|  _. |_   _. ._ _.",
        " /--\\ | |  |    /--\\ (_| | | |  |_ _> | | (_|   |  | (_| | | (_| | (_|",
        "                      _|                                               ",
        "",
        "",
    ];

    return (
        <div className="whitespace-pre">
            {banner.map((element, index) => (
                <Output key={index}>
                    <span className="text-teal-500 font-bold">{element}</span>
                </Output>
            ))}

            <Output>
                <span>Welcome to my terminal portfolio.</span>
            </Output>

            <Output>
                <span>Here you can get some information about me.</span>
            </Output>

            <Output>
                <span>---------------------------------------------</span>
            </Output>
            
            <Output>
                <span>Type <span className="text-teal-500 font-bold">&apos;help&apos;</span> to see all available commands.</span>
            </Output>
        </div>
    );
}

export default Banner