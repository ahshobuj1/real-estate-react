const Discount = () => {
    return (
        <section className="flex flex-col items-center py-20 space-y-5 bg-slate-500 text-white">
            <h1 className="text-4xl font-medium text-center my-5">
                Save UpTop
                <span className="text-green-500"> 20% Off</span>
            </h1>
            <p className="max-w-2xl max-auto text-center">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                Ilerm Ulime Lorem Integer gravida tristiqumsanil lorms sed do
                eiusmod tempor incididunt ut labore..
            </p>
            <button className="btn btn-neutral bg-green-500 border-none text-black hover:bg-red-600">
                GET OUT NOW
            </button>
        </section>
    );
};

export default Discount;
