import '../Styles/Skills.css'
import ReactJs from '../Images/react.svg'
import Js from '../Images/Js.png'
import CSS from '../Images/css3.svg'
import HTML from '../Images/HTML.png'

const Skills = () => {
    return ( 
        <div className="skills">
            <div className="skillsTruly">
                <div className="skillsText">
                    <h1>My Skills</h1>
                    <span>Here are a few skills I possess</span>
                </div>
                <div className="skillsActual">
                    <div className="skill">
                        <div className="skillImage">
                            <img src={ReactJs} alt="ReactJs" />
                        </div>
                        <div className="skillDetails">
                            <span>ReactJs</span>
                            <input type="range" name="ReactJs" id="" min={0} max={100} value={75} />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skillImage">
                            <img src={Js} alt="Js" />
                        </div>
                        <div className="skillDetails">
                            <span>Javascript</span>
                            <input type="range" name="Javascript" id="" min={0} max={100} value={80} />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skillImage">
                            <img src={CSS} alt="CSS" />
                        </div>
                        <div className="skillDetails">
                            <span>Cascading Style Sheets(CSS)</span>
                            <input type="range" name="CSS" id="" min={0} max={100} value={90} />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skillImage">
                            <img src={HTML} alt="HTML" />
                        </div>
                        <div className="skillDetails">
                            <span>Hypertext Markup Language(HTML)</span>
                            <input type="range" name="HTML" id="" min={0} max={100} value={90} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;