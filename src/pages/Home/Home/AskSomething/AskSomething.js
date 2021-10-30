import React from 'react';

const AskSomething = () => {
    return (
        <div className='container card p-5 mb-3 shadow bg-dark text-white'>
            <h2 className='text-center text-primary fw-bold' style={{ fontFamily: "Fruktur" }}>GET CONNECTED WITH US</h2>
            <hr className='w-50 mx-auto'/>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Write here what you want to know?</label>
                    <textarea class="form-control"></textarea>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AskSomething;