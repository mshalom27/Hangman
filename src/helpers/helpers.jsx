function show(setter) {
	setter(true);
    setTimeout(() => {
    	setter(false);
    }, 1000);
}

function checkWin(correct, wrong, word) {
	let status = 'win';

    word.split('').forEach(letter => {
    	if (!correct.includes(letter)) {
    		status = '';
    	}
    });

    if (wrong.length === 6) status = 'lose';

    return status;

}

// function checkWin(correct, wrong, word) {
//   if (wrong.length >= 6) return 'lose';

//   const allLettersGuessed = word.split('').every(letter => correct.includes(letter));
//   if (allLettersGuessed) return 'win';

//   return '';
// }


export default show;
export { checkWin };