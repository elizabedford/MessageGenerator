let button = document.getElementById("button");
let output = document.getElementById("output");
let quote = [
    '"Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5',
    '"In all you ways submit to Him, and He will male your paths straight." - Proverbs 2:6',
    '"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." - Colossians 3:23',
    '"For God gave us a spirit not of fear, but of POWER, LOVE and SELF-CONTROL." - 2 Timothy 1:7',
    '"The Lord is my helper I\'ll not be afraid. What can mere mortals do to me? " - Hebrews 13:6' ,
    '"I can do all this through Him who gives me strength." Philippians 4:23'
 ];

 button.addEventListener('click', function() {
     var randomQuote =  quote[Math.floor(Math.random()*quote.length)]
     output.innerHTML = randomQuote;
 })