export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
        </ul>
    <h5>My favorite recipe:</h5>
    <ol id="wd-your-favorite-recipe">
        <li>Crack eggs into a bowl</li>
        <li>Whisk the eggs and season them</li>
        <li>Put the bowl in a microwave for 30 seconds</li>
        <li>Get it out of the microwave and whisk again</li>
        <li>Repeat until the eggs are fully cooked</li>
    </ol>
    <h5>My favorite podcasts:</h5>
    <ul id="wd-your-books">
      <li>Pound 4 Pound</li>
      <li>Joe Rogan&apos;s Podcast</li>
      <li>The Diary Of A CEO</li>
    </ul>
    <h5>HTML tags covered in this chapter:</h5>
    <ul id="wd-ai-html-tags">
      <li>h1 - the largest heading, typically used once per page for the main title</li>
      <li>p - wraps a block of text and adds vertical spacing around it</li>
      <li>ol - an ordered list, used when the sequence of items matters</li>
      <li>ul - an unordered list, used when the order of items doesn&apos;t matter</li>
      <li>table - organizes data into rows and columns</li>
    </ul>
    </div>
  );
}