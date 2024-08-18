import {useState} from 'react';
import Team from './Team';

const Teams = () => {
    const [members, setMembers] = useState([]);

    fetch('TeamData/TeamData.json')
        .then((res) => res.json())
        .then((data) => setMembers(data))
        .catch((err) => console.log(err));

    return (
        <section className="my-10 px-2 lg:px-0">
            <div className="px-2 lg:px-0 text-center my-10 space-y-5 ">
                <h1 className="text-4xl font-medium">Our Team</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {members.map((member) => (
                    <Team key={member.id} member={member} />
                ))}
            </div>
        </section>
    );
};

export default Teams;
