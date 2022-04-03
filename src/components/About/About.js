import React from 'react'

const About = () => {
    return (
        <section className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <h1 className='mb-6 text-2xl font-light text-gray-900 md:text-3xl text-center'>
                Basic Questions
            </h1>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2'>
                <div>

                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        What is Context Api?
                    </p>
                    <p className='text-gray-600'>
                        The React Context API is a component structure.It helps us to ignore props drilling.Using React Context Api we can drill props to an easier way.Context Api allows passing data with the component without passing props.The main work of Context API is to solve the problem of prop drilling.Context gives a way to pass values between components without passing a prop in every level of the components.
                    </p>

                </div>
                <div>
                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        What is Semantic Tag?
                    </p>
                    <p className='text-gray-600'>

                    </p>
                </div>
            </div>
        </section>
    )
}

export default About