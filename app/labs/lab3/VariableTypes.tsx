export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCountNumber = typeof sampleCount;
  let isSampleLabelString = typeof sampleLabel;
  let name = "Adilnur";
  let number = 24;
  let isNum = typeof number;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      sampleCount = {sampleCount}
      <br />
      isSampleCountNumber = {isSampleCountNumber}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleLabelString = {isSampleLabelString}
      <hr />
      name = {name}
      <br />
      number = {number}
      <br />
      isNum = {isNum}
      <hr />
    </div>
  );
}
