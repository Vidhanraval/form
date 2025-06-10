import React from 'react'

const profile = () => {
    return (
            <div className="flex justify-center items-center h-screen w-screen bg-[hsl(185,75%,39%)]">
                <div className="">
                    <img src="/bg-pattern-card.svg" alt="" className="w-350px justify-center items-center" />
                        <div className="wrapper">
                            <img src="image-victor.jpg" alt="" />
                                <h2>Victor Crest <span>26</span></h2>
                                <p>London</p>
                                <div className="footer">
                                    <div>
                                        <p className="num">80K</p>
                                        <p>Followers</p>
                                    </div>
                                    <div>
                                        <p className="num">803K</p>
                                        <p>Likes</p>
                                    </div>
                                    <div>
                                        <p className="num">1.4K</p>
                                        <p>Photos</p>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
    )
}

export default profile