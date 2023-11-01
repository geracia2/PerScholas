let complicatedNestedObject = {
  level1: {
    value: "This is a value at level 1",
    nestedArray: [10, 20, 30],
    level2: {
      value: "This is a value at level 2",
      nestedObject: {
        level3: {
          value: "This is a value at level 3",
          nestedArray: [1, 2, 3],
          level4: {
            value: "This is a value at level 4",
            nestedObject: {
              level5: {
                value: "This is a value at level 5",
                nestedArray: [5, 6, 7],
                level6: {
                  value: "This is a value at level 6",
                  nestedObject: {
                    level7: {
                      value: "This is a value at level 7",
                      nestedArray: [8, 9],
                      level8: {
                        value: "This is a value at level 8",
                        nestedObject: {
                          level9: {
                            value: "This is a value at level 9",
                            nestedArray: [11, 12],
                            level10: {
                              value: "This is a value at level 10",
                              nestedObject: {
                                level11: {
                                  value: "This is a value at level 11",
                                  nestedArray: [13, 14],
                                  level12: {
                                    value: "This is a value at level 12",
                                    nestedObject: {
                                      level13: {
                                        value: "This is a value at level 13",
                                        nestedArray: [15, 16],
                                        level14: {
                                          value: "This is a value at level 14",
                                          nestedObject: {
                                            level15: {
                                              value: "This is a value at level 15",
                                              nestedArray: [
                                                {
                                                  level16: [[['item1']['item2'], ['item30']], [{
                                                    level17: "this is final level"
                                                  }]]
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
// > Objective < Access the value "This is a value at level 15" and "this is a final value". 
// this can be done with a long object notation or a loop.

/*
// ! what about reverse engineering it into a function? !
function generateNestedObject(levels) {
  let obj = {};
  let nestedObj = {};
  let nestedArray = [];

  for (let i = 0; i < levels; i++) {
    nestedObj = {};
    nestedObj['value'] = `This is a value at level ${i}`;
    if (i % 2 === 0) {
      nestedArray = [i];
      nestedObj['nestedArray'] = nestedArray;
    } else {
      nestedArray = [];
      nestedArray.push(nestedObj);
      nestedObj['nestedObject'] = nestedArray;
    }
    obj[`level${i}`] = nestedObj;
  }

  return obj;
}
console.log(generateNestedObject(16))

// console.log(complicatedNestedObject)



function iterateObject(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      iterateObject(obj[key]);
    } else {
      console.log(key + ':', obj[key]);
    }
  }
}
iterateObject(complicatedNestedObject);


function iterateObject(obj, currentLevel = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null){
      if(currentLevel === 15) {
        console.log(obj.value)
      }
      iterateObject(obj[key], currentLevel + 1)
    }
  }
}
iterateObject(complicatedNestedObject)



// 1. iterate each object to begin with
// grabbing the object and its key
// obj[key] will give us a value!
function iterateObject (obj) {
  for (var key in obj) {}
}

// 2. find out if the element you are pointing to
// is an object or not, in other words: 
// "is this obj[key]/element an object? while being in an object?"
// if typeof elvaluates true, && its not an empty objust or null
// then move on
function iterateObject (obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {}
  }
}

// 3. So we are now one level deep, and so we now recursively
// call our iterateObject. Since arrays are also treated like
// objects they will be accessed too. 
// at this point what we have will always dive into any nests
// next we just need to decide if we want to stop and print 
// and stop at what.
function iterateObject (obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      iterateObject(obj[key]);
    }
  }
}

// 4. if we just want to stop on the last nested items we can 
// just end with an else/defalut 'print what doesnt have a nest'
// or print our current "key/index and key value" > key + ':', obj[key] <
function iterateObject (obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      iterateObject(obj[key]);
    } else {
      console.log(key + ':', obj[key]);
    }
  }
}

// 5. But if we wanted to end on something specific, say we know we want 
// the 16th nested object, we need to keep count. 
// the loop is recurrsive but doesn't currently know where we are
// its only opening things that evalue to haveing a nested object.
// So we add a counter, both as a variable and an argument.
function iterateObject (obj, maxDepth = 16) { // this is just 16 to illustrate
  depthCounter = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      depthCounter++;
      iterateObject(obj[key]);
    } else {
      console.log(key + ':', obj[key]);
    }
  }
}

// 6. So now we are counting our depth.
// now we want to end our search and print the result.
// in our else we want to know if we are on the maxDepth
// so we change to else if and condition to print
function iterateObject (obj, maxDepth = 16) { // this is just 16 to illustrate
  depthCounter = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      depthCounter++;
      iterateObject(obj[key]);
    } else if (depthCounter === maxDepth) {
      console.log(key + ':', obj[key]);
    }
  }
}
*/


let depthCounter = 0;
function iterateObject(obj, maxDepth) {
  const stop = maxDepth;
  for (var key in obj) {
    if (typeof obj[key] === 'string' && obj[key] !== null) {
      depthCounter++;
      console.log(depthCounter);
      console.log(key + ':', obj[key])
      // if (depthCounter = maxDepth) {
      //   console.log(key + ':', obj[key]);
      //   return;
      // } else {
      //   continue;
      // }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      iterateObject(obj[key]);
    }

  }
}
iterateObject(complicatedNestedObject, 3)