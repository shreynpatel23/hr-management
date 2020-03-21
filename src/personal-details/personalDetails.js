import React from 'react';
import Button from '../shared/button/button';
import BackButton from '../shared/backButton/backButton';
import { useHistory } from 'react-router-dom';
import CommonStyles from '../shared/sharedStyles.module.scss';
import { PrimaryButtonStyle, ButtonTextStyle } from '../shared/buttonStyles';
import Input from '../shared/input/input';
import Styles from './personalDetails.module.scss';

function PersonalDetails() {
    const [married, setMarried] = React.useState('YES');
    const [gender, setGender] = React.useState('Male');
    let history = useHistory();
    function handelBack() {
        history.push('/employee-database')
    }
    function handelNext() {
        history.push('/feeds');
    }
    return (
        <div className={`${CommonStyles.card} p-4`}>
            <div className="py-3">
                 <p className={`${Styles.heading} mb-0 text-center`}>Fill the input having * sign</p>
            </div>
            <div className="py-3">
                <form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group py-4">
                                    <Input 
                                        type="text" 
                                        placeholder="Employee ID"
                                        // conditional rendering for placeholder for error

                                        // placeholder={error.employeeId ? error.employeeId : 'Enter Employee ID'}

                                        // use this prop for error cases
                                        // haserror={error.employeeId} 
                                        name="employeeId"
                                        id="employeeId"
                                        autoComplete="off"
                                        // add onChange and OnBlur 
                                        // onChange={(event) => {
                                        //     setEmployeeId(event.target.value);
                                        //     setError(error => ({
                                        //         ...error,
                                        //         employeeId: ""
                                        //     }));
                                        // }}
                                        // onBlur={checkEmployeeID}
                                    />
                                </div>      
                                <div className="form-group py-4">
                                <Input 
                                    type="email" 
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                />
                                </div>   
                                <div className="form-group py-4">
                                <Input 
                                    type="number" 
                                    placeholder="Phone number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="off"
                                />
                                </div>   
                            </div>
                            <div className="col-md-6">
                            <div className="form-group py-4">
                                <Input 
                                    type="text" 
                                    placeholder="Full Name"
                                    name="fullName"
                                    id="fullName"
                                    autoComplete="off"
                                />
                                </div>      
                                <div className="form-group py-4">
                                <Input 
                                    type="text" 
                                    placeholder="Date of Birth"
                                    name="dateOfBirth"
                                    id="dateOfBirth"
                                    autoComplete="off"
                                />
                                </div>   
                                <div className="form-group py-4">
                                <Input 
                                    type="text" 
                                    placeholder="Date of Joining"
                                    name="dateOfJoining"
                                    id="dateOfJoining"
                                    autoComplete="off"
                                />
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-2">
                                <p className={`${Styles.labelText} pb-1 mb-0`}>Married</p>
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <div className={`px-3 py-1 ${married === 'YES' ? Styles.activeTab : Styles.tab}`} style={{cursor:'pointer'}} onClick={() => setMarried('YES')}>
                                        <p className={`mb-0 ${married === 'YES' ? Styles.activeText  : Styles.nonActiveText}`}>Yes</p>
                                    </div>
                                    <div className={`px-3 py-1 ${married === 'NO' ? Styles.activeTab : Styles.tab}`} style={{cursor:'pointer'}} onClick={() => setMarried('NO')}>
                                        <p className={`mb-0 ${married === 'NO' ? Styles.activeText  : Styles.nonActiveText}`}>No</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <p className={`${Styles.labelText} pb-1 mb-0`}>Gender</p>
                                <div className="d-flex align-items-center py-1 justify-content-center justify-content-md-start">
                                    <div className="px-3">
                                        <label className={`${Styles.container} mb-0 pl-3`}>Male
                                            <input type="radio" checked={gender === 'Male'} name="radio" onChange={() => setGender('Male')} />
                                            <span className={`${Styles.checkmark}`}></span>
                                        </label>
                                    </div>
                                    <div className="px-3">
                                        <label className={`${Styles.container} mb-0 pl-3`}>Female
                                            <input type="radio" checked={gender === 'Female'} name="radio" onChange={() => setGender('Female')}/>
                                            <span className={`${Styles.checkmark}`}></span>
                                        </label>
                                    </div>
                                    <div className="px-3">
                                        <label className={`${Styles.container} mb-0 pl-3`}>Others
                                            <input type="radio" checked={gender === 'Others'} name="radio" onChange={() => setGender('Others')} />
                                            <span className={`${Styles.checkmark}`}></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className={`py-4 d-flex align-items-center justify-content-between`}>
                <div className="px-2">
                    <BackButton click={handelBack}/>
                </div>
                <div className="px-2">
                    <Button style={PrimaryButtonStyle} click={handelNext}>
                        <p className="mb-0" style={ButtonTextStyle}>Next</p>    
                    </Button> 
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
