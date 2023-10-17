// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...rest) {
  // Add a loop here
 
    let total = 0;
    for (const arg of rest) {
      total += arg;
    }
    return total;
  }
  


add(1, 2, 3, 4, 5);
