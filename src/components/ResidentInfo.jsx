import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
    const [residentInfo, setResidentInfo] = useState(null);

    const loadResidentInfo = async () => {
     try {
    const res = await axios.get(urlResident);

    setResidentInfo(res.data);
} catch (error) {
    console.log(error);
}
};

useEffect(() => {
    loadResidentInfo();
}, []);

  return (
    <>
    {residentInfo && (
    <article className="img__folder" >
        <div>
            <img src={residentInfo.image} alt={residentInfo.name} />
        </div>
        <h3 className="h3">{residentInfo.name}</h3>
        <ul>
            <li className="lii">
                <span>Specie:</span>
                {residentInfo.species}
            </li>
            <li className="lii">
                <span>Status:</span>
                {residentInfo.status}
            </li>
            <li className="lii">
                <span>Origen:</span>
                {residentInfo.origin.name}
            </li>
            <li className="lii">
                <span>Appearances in episodes:</span>
                {residentInfo.episode.length}
            </li>
        </ul>
    </article>
    )}
    </>
  );
};

export default ResidentInfo;
