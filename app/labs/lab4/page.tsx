"use client";
import "./index.css"

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariables";
import ProfileForm from "./profile/profileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ReactContextTodoList from "./context/ReactContextTodoList";
import { TodosProvider } from "./context/todosContext";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayMyName = (message: string) => {
    alert(message);
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} myFunction={sayMyName}
        theOtherFunction={() => alert("Sample from parent")}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
    </div>
  );
}
