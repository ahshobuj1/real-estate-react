const Reservation = () => {
    const handleInputValue = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        console.log(name, email, date);
    };
    return (
        <section className="flex flex-col items-center py-20 space-y-5">
            <h1 className="text-4xl font-medium text-center ">RESERVATION</h1>
            <p className="max-w-2xl px-8 md:px-0 max-auto text-center">
                Please book in advance to get the best service from us. We
                wishing you a great day. Thanks!
            </p>

            <form
                onSubmit={handleInputValue}
                className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-10">
                <div className="lg:col-span-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input
                            name="name"
                            required
                            type="text"
                            className="grow"
                            placeholder="Name"
                        />
                    </label>
                </div>
                <div>
                    <select className="select select-success w-full">
                        <option disabled selected>
                            Morning
                        </option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                    </select>
                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            name="date"
                            type="text"
                            className="grow"
                            placeholder="Date"
                            required
                        />
                    </label>
                </div>
                <div className="lg:col-span-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                            name="email"
                            type="email"
                            className="grow"
                            placeholder="Email"
                            required
                        />
                    </label>
                </div>
                <div>
                    <select className="select select-success w-full">
                        <option disabled selected>
                            SPA
                        </option>
                        <option>YOGA</option>
                        <option>MASSAGE</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn btn-neutral w-full">
                        BOOK
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Reservation;
