/*Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an 
non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest 
so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able 
to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.



*/


// my incomplete solution
function makeArrayConsecutive2(statues) {
    let minimum = Math.min.apply(statues);
    let maximum = Math.max.apply(statues);
    let count = maximum - minimum - statues.length;
    if (count < 0) {
        return 0;
    }
    return count;
}

//highest rated
function makeArrayConsecutive3(sequence) {
    return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
  }