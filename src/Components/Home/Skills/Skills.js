import React from "react";
import { useState, useEffect } from "react";
import firebaseDb from "../../Config/firebase-config";
import { deleteDoc, doc, QuerySnapshot, setDoc } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Image1 from "../../../Assets/Images/portfolio.jpg";

const Skills = () => {
  const [skilldata, setSkilldata] = useState([]);
  useEffect(() => {
    const q = query(collection(firebaseDb, "myskill"));
    const suscribe = onSnapshot(q, (querySnapshot) => {
      const skilllist = [];
      querySnapshot.forEach((doc) => {
        skilllist.push(doc.data());
      });
      setSkilldata(skilllist);
    });
  }, []);
  console.log("The skill list are", skilldata);
  return (
    <>
      <div className="container">
        <div className="row">
          {skilldata?.map((elem) => {
            return (
              <>
                <div className="col-md-6">
                    <div>
                        <img src={elem.image}>
                        </img>
                    </div>
                    <div>
            <h4>
              {  elem.skill}
            </h4>
            <p>
                {elem.description}
            </p>
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
