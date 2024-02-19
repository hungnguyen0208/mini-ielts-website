import React from 'react'
import test2Audio from '../../../../assets/audio/test2.mp3';

function TestDetail2() {
    return (
        <div>
            <h1>IELTS Listening Test 2</h1>
            <p>The Listening module consists of 10 questions and takes 10 minutes. Listen to the audio and answer the questions. As you finish, press 'check' and proceed to the next section.</p>
            <audio controls>
                <source src={test2Audio} type="audio/mpeg" ></source>
            </audio>
            <p>Questions 1-4</p>
            <p>Complete the notes below.</p>
            <p>Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>NOTES ON SOCIAL PROGRAMME</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Example  Number of trips per month</p>
                        </td>
                        <td>
                            <p>Answer  5</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Visit places which have:</p>
                            <ul>
                                <li>historical interest</li>
                                <li>good 1.<input type='text'></input></li>
                                <li>2.<input type='text'></input></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Cost: between 5.00 pounds and 15.00 pounds per person</p>
                            <p>Note: special trips organised for groups of 3.<input type='text'></input> people</p>
                            <p>Time: departure – 8.30 a.m. and return – 6.00 p.m.</p>
                            <p>To reserve a seat: sign name on the 4.<input type='text'></input>3 days in advance</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Complete the table below.</p>
            <p>Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.</p>
            <table>
                <tbody>
                    <tr>
                        <td>WEEKEND TRIPS</td>
                    </tr>
                    <tr>
                        <td>Place</td>
                        <td>Date</td>
                        <td>Number of seats</td>
                        <td>Optional extra</td>
                    </tr>
                    <tr>
                        <td>St Ives</td>
                        <td>5.<input type='text'></input></td>
                        <td>16<input type='text'></input></td>
                        <td>Hepworth Museum</td>
                    </tr>
                    <tr>
                        <td>London</td>
                        <td>16th February</td>
                        <td>45</td>
                        <td>6.<input type='text'></input></td>
                    </tr>
                    <tr>
                        <td>St Ives</td>
                        <td>5.<input type='text'></input></td>
                        <td>16<input type='text'></input></td>
                        <td>Hepworth Museum</td>
                    </tr>
                    <tr>
                        <td>7.<input type='text'></input></td>
                        <td>3rd March</td>
                        <td>18</td>
                        <td>S.S. Great Britain</td>
                    </tr>
                    <tr>
                        <td>Salisbury</td>
                        <td>18th March</td>
                        <td>50</td>
                        <td>Stonehenge</td>
                    </tr>
                    <tr>
                        <td>Bath</td>
                        <td>23rd March</td>
                        <td>16</td>
                        <td>8.<input type='text'></input></td>
                    </tr>
                    <tr>
                        <td>
                            <p>For further information:</p>
                            <p>Read the 9.<input type='text'></input>or see Social Assistant: Jane 10.<input type='text'></input></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TestDetail2