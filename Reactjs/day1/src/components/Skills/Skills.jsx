import { Component } from "react";
import SkillsProgress from "../SkillsProgress/SkillsProgress";
import "./Skills.css";

export default class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return <>
      <div className="contanier">
        <div className="row-cols-12 text-center">
          <h1 className="">Skills</h1>
          <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit possimus iure id sapiente adipisci, provident unde nulla aliquid accusamus dignissimos eligendi itaque sunt praesentium repudiandae? Atque est odio nobis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet hic animi omnis ex aliquam laborum excepturi ipsa dolores illum quia esse consequuntur provident atque praesentium at dolorem, nulla tempora harum.</p>
        </div>
        <div className="row">
          <div className="col p-5 text-center">
            <h3 className="">My Focus</h3>
            <p className="line mb-4"></p>
            <p className="text-capitalize">ui/ux design</p>
            <p className="text-capitalize">responsive website</p>
            <p className="text-capitalize">web design</p>
            <p className="text-capitalize">mobile app design</p>
          </div>
          <div className="col">
              <SkillsProgress name="HTML" degree="90%"/>
              <SkillsProgress name="CSS" degree="90%"/>
              <SkillsProgress name="JavaScript" degree="80%"/>
              <SkillsProgress name="React" degree="80%"/>
              <SkillsProgress name="Python" degree="100%"/>
              <SkillsProgress name="Linux" degree="60%"/>
              <SkillsProgress name="C" degree="50%"/>
              <SkillsProgress name="NoSql" degree="40%"/>
          </div>
        </div>
      </div>
    </>
  }
}