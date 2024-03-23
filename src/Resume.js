import './Resume.css';

function Container1({Mainheader1, Mainheader2, Header, Text}) {
    return (
        <body>
            <section>
                <header>
                    <div className='Container1'>
                        <Container1 Mainheader1={"NEIL DOMINIC P. GALAN"}/>
                        <Container1 Mainheader2={"NIJISANJI EN EMPLOYEE"}/>
                        <Container1 Header={"MAIN OBJECTIVE"}/>
                        <Container1 Text={"Nijisanji EN with almost 5 years of customer services. Creating and developing simple hardware circuits and learned basic program of HTML, CSS, Python, and Java."}/>
                        <Container1 Text={"Leisurely in working but wanting to keep up the pace of any work."}/>
                        <Container1 Header={"WORK EXPERIENCE"}/>
                        <Container1 Text={"CASH REGISTER"}/>
                        <Container1 Text={"JM GALAN'S SPECIAL CHICHARON, 2015"}/>
                        <Container1 Text={""}/>
                        <Container1 Header={"ACADEMIC BACKGROUND"}/>
                    </div>
                </header>
            </section>
        </body>
    )
}

function Container2({Header2, Text2}) {
    return (
        <body>
            <section>
                <header className='Container2'>
                    <div className='Imyself'></div>
                    <div>
                        <Container2 Header2={"Contact"}/>
                        <li>dominicgalan21@gmail.com</li>
                        <li>09762905176</li>
                        <li>Tokyo, Japan</li>
                        <li><a href="https://www.facebook.com/dominic.galan/" target="_blank">Visit my Facebook Account</a></li>
                        <li><a href="https://github.com/DominicGalan?tab=repositories" target="_blank">Visit my GitHub Account</a></li>
                        <Container2 Header2={"Interest"}/>
                        <Container2 Text2={"Volleyball"}/>
                        <Container2 Text2={"Web Developer"}/>
                        <Container2 Text2={"Singer"}/>
                        <Container2 Text2={"Programmer"}/>
                        <Container2 Text2={"Art"}/>
                        <Container2 Header2={"Achievements"}/>
                        <Container2 Text2={"Grade 12 - Honor Student in 3rd and 4th Quarter"}/>
                        <Container2 Text2={"University of the Assumption, 2020 - 2026"}/>
                        <Container2 Text2={"Bachelor of Science in Computer Engineering"}/>
                    </div>
                </header>
            </section>
        </body>
    )
}

export default Container1;