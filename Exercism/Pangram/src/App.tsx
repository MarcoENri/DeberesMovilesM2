
function PangramChecker({ sentence="The quick brown fox jumps over the lazy dog."}) {
  const isPangram = (sentence="The quick brown fox jumps over the lazy dog.") => {
    sentence = sentence.toLowerCase();
    return [..."abcdefghijklmnopqrstuvwxyz"].every((c) => sentence.includes(c));
  }

  return (
    <div>
      <p>The sentence "{sentence}" is {isPangram(sentence) ? 'a pangram' : 'not a pangram'}.</p>
    </div>
  );
}

export default PangramChecker;
