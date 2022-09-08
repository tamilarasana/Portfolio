import React from "react";
import Header from "./components/Header/Header";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import "./App.css";

const App = () => {
  return (
    <div >
      <Header />
      <TopContainer /> 
      <SkillContainer />
      <ProjectContainer />
    </div>
    );
}
 
export default App;