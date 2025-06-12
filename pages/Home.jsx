    import React from 'react'
    import Challenge from "../components/Challenge"
    import CardContainer from '../components/CardContainer'

    export const Home = () => {
    return (
        <div className="container w-full min-h-screen flex flex-wrap justify-center items-center mx-auto gap-6 py-10 px-4 sm:px-6 md:px-8 lg:px-10">
            <CardContainer/>
            <Challenge/>
        </div>
    )
    }
