const About = () => {
    return (
        <section>
            <div className="text-center my-10 space-y-5">
                <h1 className="text-4xl font-medium">Welcome</h1>
                <p className="max-w-2xl mx-auto">
                    Calm & Cozy Corner started as an ambitious idea to promoting
                    the economy and foot traffic in up-and-coming neighborhoods.
                    As the business flourish our efforts has been successfully
                    supported by the same community we love, and it has been a
                    wonderful journey as we strive to provide the highest level
                    of service to our supporters.
                </p>
            </div>

            <div className="flex gap-6">
                <div>
                    <div>
                        <img
                            src="public/assets/massage.jpg"
                            alt="about img"
                            className="rounded-md my-5"
                        />
                    </div>
                    <h1 className="text-4xl font-medium ">SPA</h1>
                    <p className="my-5">
                        Calm & Cozy Corner is your go-to massage headquarters.
                        With endless modalities and customizations, we have
                        thousands of spa and wellness locations for your next
                        massage.
                    </p>
                </div>
                <div>
                    <div>
                        <img
                            src="public/assets/beauty.jpg"
                            alt="about img"
                            className="rounded-md my-5"
                        />
                    </div>
                    <h1 className="text-4xl font-medium ">BEAUTY</h1>
                    <p className="my-5">
                        Calm & Cozy Corner Known for its ability to remove
                        toxins from the body and increase energy, oil pulling
                        also has tremendous beauty benefits! Routinely pulling
                        oil can help to clear skin and more notably...
                    </p>
                </div>
                <div>
                    <div>
                        <img
                            src="public/assets/yoga.jpg"
                            alt="about img"
                            className="rounded-md my-5"
                        />
                    </div>
                    <h1 className="text-4xl font-medium ">YOGA</h1>
                    <p className="my-5">
                        Calm & Cozy Corner is originating in ancient India, the
                        word yoga means to unite or to join, and in yoga, we
                        unite our minds and our bodies through breath. Most
                        Western yoga derives from hatha...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
