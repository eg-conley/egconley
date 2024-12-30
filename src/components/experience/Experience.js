import React from 'react'
import './experience.css'
import Button from '../Button';

const Experience = () => {
    return (
        <div id="experience_section">
            
            <div className="experience_header">
                <a href="https://drive.google.com/file/d/1b_x_7BLYpmb2AcGnp33cmh4YFfCXjg_M/view?usp=sharing" target="_blank"><Button>RESUME</Button></a>
                <h1>MY <em>EXPERIENCE</em> AND <em>SKILLS</em></h1>
            </div>
        
            <div className="job">
                <h3>Student Supervisor</h3>
                <div className="job_info">
                    <p>Boston University Fitness and Recreation Center | Boston, MA</p>
                    <p>Sep 2022 - present</p>
                </div>
                <ul>
                    <li>• Provide exceptional customer service by addressing 250+ operational inquires weekly resulting in a measurable increase in patron satisfaction and engagement with facility programs</li>
                    <li>• Assist in creating productive and collaborative environment through training and oversight of 80+ student staff</li>
                </ul>
            </div>
            
            <div className="job">
                <h3>Secretary</h3>
                <div className="job_info">
                    <p>Boston University International Adoptee Club | Boston, MA</p>
                    <p>Sep 2022 - present</p>
                </div>
                <ul>
                    <li>• Consult with current leadership to ensure seamless transition to role of President in preparation to lead initiatives prioritizing inclusivity and community engagement</li>
                    <li>• Assist outreach strategies that have previously increased club participation by 50%</li>
                    <li>• Coordinate and manage logistics for meetings and events serving 10+ participants</li>
                </ul>
            </div>

            <div className="job">
                <h3>Undergraduate Laboratory Assistant</h3>
                <div className="job_info">
                    <p>Boston University ECE Department | Boston, MA</p>
                    <p>Sep - Dec 2024</p>
                </div>
                <ul>
                    <li>• Demonstrated strong C++ knowledge, explaining challenging concepts to 20+ students enhancing understanding</li>
                    <li>• Assessed and debugged student code to provide resolutions and ensure comprehension of lab problems</li>
                    <li>• Produced detailed homework solutions weekly; graded and provided tailored feedback on 70+ assignments</li>
                </ul>
            </div>

            <div className="skills">
                <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" />
                <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" />
                <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png" />
                <img width="100" src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png" />
                <img width="65" src="https://www.svgrepo.com/show/374163/verilog.svg" />
            </div>

        </div>
    )
}

export default Experience