import './App.css';
import invite from './invite.ics'
function App() {
  return (
<body>
  <div className="all">
  <div className="banner">
    <div className="banner_content">
    <img alt="Cal Founders Logo" className="calfoundersimage" src="https://ashfromberkeleytown.files.wordpress.com/2021/01/calfounders-1.png"/>
    <div className="description">
      <p>this <b>Thursday, January 14th</b>, hosted by Clubhouse</p>
    </div>
    

    </div>
  </div>

  <div className="content">
    <div className="contentHolder">
    <div className="Context">
    <h2 className="ContextTitle">Context</h2>
    <p>This is the first annual town hall of Cal Founders '10 - '20 (past, present, and future) to talk about the state of the world from the entrepreneurial lense.</p>
    <p>This Town Hall will be open for the public to listen in and by hosted by Clubhouse.</p>
    </div>

    <div className="agenda">
      <h2>Agenda</h2>
      <span className="ContentDescription"> Topics we'll moderate over </span>
      <div className="grid-container">
        <div className="grid-item firstItem">
        <ul>
          <li>6:00p</li>
          <li>6:10p</li>
          <li>6:30p</li>
          <li>6:45p</li>
          <li>7:00p+</li>
        </ul>
        </div>
        <div className="grid-item">
        <ul>
          <li>Opening</li>
          <li>Introductions</li>
          <li>Reflecting on 2020</li>
          <li>Predicting 2021</li>
          <li>Hang + Chill</li>
        </ul>         
        </div> 
      </div>
    </div>

    <div className="engager">
      <div className="buttonDiv firstButton" onClick={() => {window.location.href=invite;}}>
        <img alt="calendar icon" className="icon" src="https://ashfromberkeleytown.files.wordpress.com/2021/01/calendar_blue.png"/>
        <div className="buttonText">
        Add to
        <br/>
        <b>Calendar</b>
        </div>

      </div>
      <div className="buttonDiv" onClick={() => {window.location.href='https://www.joinclubhouse.com/event/gxlOD6qP';}}>
        <img alt="clubhouse icon" className="icon" src="https://www.joinclubhouse.com/static/img/icon_wave.2872aeea710c.png"/>

        <div className="buttonText">
        Join us on
        <br/>
        <b>Clubhouse</b>
        </div>
      </div>
    </div>
    <center><div className="credit">organized by <a className="reference" href="https://twitter.com/Ke5havRao">Keshav</a>, <a className="reference" href="https://twitter.com/aakashadesara">Aakash</a>, and <a className="reference" href="https://twitter.com/theashbhat">Ash</a></div></center>
    
    <hr class="solid" noshade/>

    <div className="confirmations">
      <h2>Confirmations</h2>
      <span className="ContentDescription"> People who've told us they're coming </span>
      <div className="grid-container">
        <div className="grid-item firstItem">
        <ul>
          <li>'14</li>
          <li>'16</li>
          <li>'18</li>
          <li>'19</li>
          <li>'19</li>
          <li>'19</li>
          <li>'19</li>
          <li>'19</li>
          <li>'XX</li>
          <li>'21</li>
          <li>'21</li>
          <li>'22</li>
          <li>'23</li>
          <li>'23</li>
        </ul>
        </div>
        <div className="grid-item">
        <ul>
          <li>Jeremy Fiance</li>
          <li>Sumukh Sridhara</li>
          <li>Sujude Dalieh</li>
          <li>Abhishyant Khare</li>
          <li>Aparna Krishnan</li>
          <li>Katharine Jiang</li>
          <li>Jeevan Mokkla</li>
          <li>Adithya Iyengar</li>
          <li>Rohan Phadte</li>
          <li>Deevy Bhimani</li>
          <li>Linus Lee</li>
          <li>Adam Saleh</li>
          <li>Saneel Sreeni</li>
          <li>John Forbes</li>
        </ul>         
        </div> 
      </div>
    </div>

  </div>
  </div>
  </div>
</body>
  );
}

export default App;
