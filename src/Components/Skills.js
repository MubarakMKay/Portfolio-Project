import '../Styles/Skills.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { DiReact } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { DiHtml5 } from "react-icons/di"

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
                            <DiReact />
                        </div>
                        <div className="skillDetails">
                            <span>ReactJs</span>
                            <ProgressBar 
                                completed={80} 
                                className='progress'
                                customLabel=''
                                barContainerClassName="progressContainer"
                                completedClassName="progressCompletedR"
                                labelClassName="progressLabel"
                            />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skillImage">
                            <DiJavascript1 />
                        </div>
                        <div className="skillDetails">
                            <span>Javascript</span>
                            <ProgressBar 
                                completed={85} 
                                className='progress'
                                customLabel=''
                                barContainerClassName="progressContainer"
                                completedClassName="progressCompletedJ"
                                labelClassName="progressLabel"
                            />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skillImage">
                            <DiCss3 />
                        </div>
                        <div className="skillDetails">
                            <span>Cascading Style Sheets(CSS)</span>
                            <ProgressBar 
                                completed={90} 
                                className='progress'
                                customLabel=''
                                barContainerClassName="progressContainer"
                                completedClassName="progressCompletedC"
                                labelClassName="progressLabel"
                            />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skillImage">
                            <DiHtml5 />
                        </div>
                        <div className="skillDetails">
                            <span>Hypertext Markup Language(HTML)</span>
                            <ProgressBar 
                                completed={90} 
                                className='progress'
                                customLabel=''
                                barContainerClassName="progressContainer"
                                completedClassName="progressCompletedH"
                                labelClassName="progressLabel"
                                isLabelVisible={false}
                                labelAlignment='left'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;