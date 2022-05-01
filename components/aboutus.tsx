import React from 'react'
import Member from './member'



const AboutUs: React.FC = () => {
    return <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
        <div className='container mx-auto px-11'>
            <p className="leading-tight max-w-5xl max-auto text-4xl ">
                <strong>We will help you ship better apps, faster.</strong> Our team of expert engineers has created the best user experience in some the most popular apps worlwide.
            </p>

        </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2>Our team
                <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                    <Member 
                        id="marc" 
                        name="Mark" 
                        socialId="@mrousaby" 
                        link="https://github.com/mrasou"
                    />

                    <Member 
                        id="marc" 
                        name="Mark" 
                        socialId="@mrousaby" 
                        link="https://github.com/mrasou"
                    />

                    <Member 
                        id="marc" 
                        name="Mark" 
                        socialId="@mrousaby" 
                        link="https://github.com/mrasou"
                    />

                    <Member 
                        id="marc" 
                        name="Mark" 
                        socialId="@mrousaby" 
                        link="https://github.com/mrasou"
                />
                </div>


                </h2>
            </div> 
        </section>


}

export default AboutUs