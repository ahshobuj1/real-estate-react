const Team = ({member}) => {
    const {name, id, role, email, specialization, workExperience, img} = member;
    return (
        <div className="shadow-lg rounded-md hover:shadow-2xl">
            <div>
                <img src={img} alt={name} className="rounded-md mb-5" />
            </div>
            <div className="space-y-2 px-2">
                <h2 className="text-2xl font-medium text-center">{name}</h2>
                <h2 className="text-2xl font-medium text-center text-green-500">
                    {role}
                </h2>
                <h2>{workExperience}</h2>
                <h2 className="">
                    {' '}
                    <span className="font-medium text-lg">
                        Specialization:{' '}
                    </span>
                    {specialization}
                </h2>
                <h2>
                    <span className="font-medium text-lg">Email: </span>
                    {email}
                </h2>
            </div>
        </div>
    );
};

export default Team;
