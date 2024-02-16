import React from 'react'
import './styles.css'

function TestDetail1() {
    return (
        <div>
            <h1>IELTS Listening Sample 5. Section 1</h1>
            <p>This is the first section of IELTS Listening test #5. The Listening module consists of 4 sections and takes 40 minutes. Listen to the audio and answer the questions. As you finish, press 'check' and proceed to the next section.</p>
            <audio controls autoPlay>
                <source src="/audio/test1.mp3" type="audio/mpeg" ></source>
            </audio>
            <p>Questions 1-5</p>
            <p>This is the first section of IELTS Listening test #5. The Listening module consists of 4 sections and takes 40 minutes. Listen to the audio and answer the questions. As you finish, press 'check' and proceed to the next section.</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Apartment for rent</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Street</p>
                        </td>
                        <td>
                            <p>Bridge street</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Street №</p>
                        </td>
                        <td>
                            <p>
                                (1)
                                <input type='text'></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Included utilities</p>
                        </td>
                        <td>
                            <p>Gas, heat, water, (2)<input type='text'></input>, phone</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Not included utilities</p>
                        </td>
                        <td>
                            <p>(3)<input type='text'></input></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Public transport</p>
                        </td>
                        <td>
                            <p>Underground, (4)<input type='text'></input></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Tenant’s name</p>
                        </td>
                        <td>
                            <p>John (5)<input type='text'></input></p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Questions 6-8</p>
            <p>Choose THREE letters, A-F.</p>
            <p>Which THREE things should the caller bring to the meeting?</p>
            <ol type='A'>
                <li>
                    <input type='checkbox'></input>
                    Driving license
                </li>
                <li>
                    <input type='checkbox'></input>Passport
                </li>
                <li>
                    <input type='checkbox'></input>Tax bill
                </li>
                <li>
                    <input type='checkbox'></input>Employment contract
                </li>
                <li><input type='checkbox'></input>Reference from a friend or colleague
                </li>
                <li><input type='checkbox'></input>Reference from an employer
                </li>
            </ol>
            <p>Questions 9-10</p>
            <p>Choose the correct letters, A, B, or C.</p>
            <p>9. What time do the caller and apartment manager decide to meet?</p>
            <ol type='A'>
                <li>
                    <input type='checkbox'></input>
                    5:30 PM</li>
                <li>
                    <input type='checkbox'></input>
                    6:00 PM</li>
                <li>
                    <input type='checkbox'></input>
                    6:30 PM
                </li>
            </ol>
            <p>10. Where do they decide to meet?</p>
            <ol type='A'>
                <li>
                    <input type='checkbox'></input>
                    Near the manager’s apartment
                </li>
                <li>
                    <input type='checkbox'></input>
                    At the caller’s future apartment</li>
                <li>
                    <input type='checkbox'></input>
                    At the office</li>
            </ol>
        </div>
    )
}

export default TestDetail1