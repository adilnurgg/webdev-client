export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  let name = "Adilnur"
  const computedGreeting = "Hi"
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      sampleSum = {sampleSum}
      <hr />
      name = {name}
      <br />
      computer greeting = {computedGreeting}

    </div>
  );
}
