import '../Styles/Projects.css'

const Projects = () => {
    return ( 
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project">
                <div className="projectExactly">
                    <h2 className="projectTitle">ActionPoint</h2>
                    <span className="projectDetails">My first project in which I employed the use of HTML and CSS to build the web pages from scratch while using vanilla javascript to make the website interactive.</span>
                    <div className="projectSkills">
                        <h4>Skills utilised</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className="projectLinks">
                        <a href="https://github.com/MubarakMKay/actionpoint-frontend">Github</a>
                    </div>
                </div>
                <div className="projectExactly">
                    <h2 className="projectTitle">To-do</h2>
                    <span className="projectDetails">My second project in which I employed the use of React and CSS to build a To-do app that allows you to add a new to-do, edit an already saved to-do, delete an already saved to-do and check or uncheck an already saved to-do.</span>
                    <div className="projectSkills">
                        <h4>Skills utilised</h4>
                        <ul>
                            <li>ReactJs</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="projectLinks">
                        <a href="https://github.com/MubarakMKay/To-Do">Github</a>
                        <a href="https://to-do-by-kale.netlify.app/">Netlify</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;