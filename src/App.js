import './Resume.css';

function Picture() {
  return (
    <div className='Imyself'></div>
  );
}

function Container1() {
  return (
    <div className='Container1'>
      <h1>Neil Dominic P. Galan</h1>
      <h2>Nijisanji EN Employee</h2>
      <h3>Main Objective</h3>
      <p>Nijisanji EN with almost 5 years of customer services. Creating and developing simple hardware circuits and learned basic program of HTML, CSS, Python, and Java. Leisurely in working but wanting to keep up the pace of any work.</p>
      <h4>WORK EXPERIENCE</h4>
      <p>CASH REGISTER</p>
      <p>JM GALAN'S SPECIAL CHICHARON, 2015</p>
      <p> - Computed most of the customers's money and gave the exact change with 98% no mistakes.</p>
      <p></p>
      <p> - Created a list of bought products to check the manager the how many procucts 
        have been bought in a day.</p>
      <h5>ACADEMIC BACKGROUND</h5>
      <p>Bachelor of Science in Computer Engineering</p>
      <p>University of the Assumption, Graduated in 2026</p>
      <p> - Representative, CPE 2A</p>
      <p> - Vice President, Chess Club</p>
    </div>
  );
}

function Container2() {
  return (
    <div className='Container2'>
      <h3>Contact</h3>
      <p> - dominicgalan21@gmail.com</p>
      <p> - 09762905176</p>
      <p> - Tokyo, Japan</p>
      <p> - Dominic P. Galan - FB </p>
      <p></p>
      <h2>Interest</h2>
      <p> - Volleyball</p>
      <p> - Web Developer</p>
      <p> - Singer</p>
      <p> - Programmer</p>
      <p> - Art</p>
      <h1>Achievements</h1>
      <p> - Bachelor of Science in Computer Engineering<br /> - University of the Assumption, 2020 - 2026<br /> - Grade 12 - Honor Student in 3rd and 4th Quarter</p>
    </div>
  );
}

function ShowAll() {
    return (
      <div className="ShowAll">
        <div className="ContainerGroup">
          <Picture />
          <Container2 />
        </div>
        <Container1 />
      </div>
    );
}
  

export default ShowAll;
